
<script setup>
import { onMounted, ref } from "vue"
import { VDataTable } from "vuetify/labs/VDataTable"

// 👉 Store

const isDeleting = ref(false)

const deletedInfo = ref({
  name: null,
  id: null,
})

import { useRouter } from 'vue-router'



const router = useRouter()
const searchQuery = ref('')
const isSnackbarVisible = ref(false)
const isDeleteUser = ref(false)
const deletedMessage = ref(null)
const backup = ref([])
const countries = ref([])
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref(null)
const orderBy = ref(null)
const file = ref(null)

const headers = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Status",
    key: "status",
  },
  {
    title: "Actions",
    key: "actions",
    sortable: false,
  },
]

onMounted(async () => {
  await fetchUsers()
})

const updateOptions = options => {
  page.value = options.page
  itemsPerPage.value = options.itemsPerPage
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
  fetchUsers()
}

const fetchUsers = async () => {
  try {
    isLoading.value = true

    const res = await $api(`${baseUrl}/job-types`, {
      method: "GET",
    })

    countries.value = res
    backup.value = res.data
    isLoading.value = false
  } catch (err) {
    console.error('Error fetching users:', err)
    isLoading.value = false
  }
}



const handleSearch = () => {
  const searchTerm = searchQuery.value.toLowerCase()
  if (searchTerm) {
    const res = backup.value.filter(
      category =>
        category.name.toLowerCase().includes(searchTerm) ||
        category.status.toLowerCase().includes(searchTerm),
    )

    company.value = res
  } else {
    company.value = backup.value
  }
}

const deleteService = async id =>{
  try {
    const res = await $api(`${baseUrl}/job-types/${id}`, {
      method: "DELETE",
    })

    searchQuery.value = ''
    isDeleting.value=false
    isSnackbarVisible.value = true
    deletedMessage.value = res
    fetchUsers()
  } catch (err) {
    isSnackbarVisible.value = true
    deletedMessage.value = err?.message
    console.error(err)
  }
}

const isLoading = ref(false)
</script>

<template>
  <section>
    <VProgressLinear
      v-if="isLoading"
      indeterminate
      color="primary"
      class="mb-2"
    />
    <VSnackbar
      v-model="isSnackbarVisible"
      :timeout="2000"
      location="top end"
    >
      {{ deletedMessage }}
    </VSnackbar>
    <VCard>
      <VCardText class="d-flex flex-wrap py-4 gap-4">
        <VSpacer />
        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <div style="inline-size: 10rem">
            <AppTextField
              v-model="searchQuery"
              placeholder="Search"
              density="compact"
              @input="handleSearch"
            />
          </div>
          <VBtn
            prepend-icon="tabler-plus"
            @click="() => router.push({name:'apps-jobtypes'})"
          >
            Add New
          </VBtn>
        </div>
      </VCardText>
      <VDivider />
      <VDataTable
        :items="countries"
        :headers="headers"
        class="text-no-wrap"
      >
        <!-- Status -->
        <template #item.status="{ item }">
          <span :class="`${item?.status == 0 ? 'text-secondary': 'text-primary'}`"> {{ item?.status ==1 ? 'Active' : 'Inactive' }}</span>
        </template>
        <!-- Actions -->
        
        <template #item.actions="{ item }">
          <IconBtn
            color="error"
            @click="()=>{
              isDeleting = true
              deletedInfo.name = item?.name;
              deletedInfo.id = item?.id;
            }"
          >
            <VIcon icon="tabler-trash" />
          </IconBtn>
          <IconBtn
            @click="
              $router.push({
                name: 'apps-jobtypes-edit-id',
                params: { id: item.id },
                query: {
                  fname: item?.name,
                  slug: item?.slug,
                  code: item?.code,
                  symbol: item?.symbol,
                  position: item?.position,
                  note: item?.note,
                  status: item?.status,
                },
              })
            "
          >
            <VIcon icon="tabler-edit" />
          </IconBtn>
        </template>
      </VDataTable>
    </VCard>
    <VDialog
      v-model="isDeleting"
      width="500"
    >
      <DialogCloseBtn @click="isDeleting=false" />
      <VCard>
        <VCardText>Do you want to delete <span class="text-danger">{{ deletedInfo.name }}</span>  ?</VCardText>
        <VCardText class="d-flex justify-end">
          <VBtn
            color="error"
            @click="deleteService(deletedInfo.id)"
          >
            I accept
          </VBtn>
        </VCardText>
      </VCard>
    </VDialog>
  </section>
</template>

