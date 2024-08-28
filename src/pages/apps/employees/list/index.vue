<script setup>
import { onMounted, ref } from "vue"
import { VDataTable } from "vuetify/labs/VDataTable"

// 👉 Store
const searchQuery = ref("")
const isSnackbarVisible = ref(false)
const isDeleting = ref(false)
const deletedMessage = ref(null)

const deletedInfo = ref({
  name: null,
  slug: null,
})

const paymentmethod = ref()
const backup = ref()
const isLoading = ref(false)


// Headers
const headers = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Code",
    key: "code",
  },
  {
    title: "Note",
    key: "note",
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
  await fetchList()
})

const fetchList = async () => {
  isLoading.value = true
  try {
    isLoading.value = false

    const res = await $api(`${baseUrl}/payment-methods`, {
      method: "GET",
    })

    paymentmethod.value = res?.data
    backup.value = res?.data
  } catch (err) {
    isLoading.value = false
    paymentmethod.value = null
    backup.value = null
    console.error(err)
  }
}

const deleteList = async slug =>{
  try {
    const res = await $api(`${baseUrl}/payment-methods/${slug}`, {
      method: "DELETE",
    })

    if(res.success){
      searchQuery.value = ''
      isDeleting.value=false
      isSnackbarVisible.value = true
      deletedMessage.value = res?.message
      fetchList()
    }
  } catch (err) {
    isSnackbarVisible.value = true
    deletedMessage.value = err?.message
    console.error(err)
  }
}

const handleSearch = () => {
  const searchTerm = searchQuery.value.toLowerCase()
  if (searchTerm) {
    const res = backup.value.filter(
      element =>
        element.name.toLowerCase().includes(searchTerm),
    )

    paymentmethod.value = res
  } else paymentmethod.value = backup.value
}
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
          <!-- 👉 Search  -->
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
            @click=" $router.push({
              name: 'apps-paymentmethod-create',
            })"
          >
            Add New Payment Method
          </VBtn>
        </div>
      </VCardText>
      <VDivider />
      <!-- SECTION datatable -->
      <VDataTable
        :items="paymentmethod"
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
              deletedInfo.slug = item?.slug;
            }"
          >
            <VIcon icon="tabler-trash" />
          </IconBtn>
          <IconBtn
            @click="
              $router.push({
                name: 'apps-paymentmethod-edit-id',
                params: { id: item.id },
                query: {
                  fname: item?.name,
                  slug: item?.slug,
                  code: item?.code,
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
      <!-- SECTION -->
    </VCard>
    <!-- Delete User -->
    <VDialog
      :model-value="isDeleting"
      width="500"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="isDeleting=false" />
      <!-- Dialog Content -->
      <VCard>
        <VCardText>Do you want to delete <span class="text-danger">{{ deletedInfo.name }}</span>  ?</VCardText>
        <VCardText class="d-flex justify-end">
          <VBtn
            color="error"
            @click="deleteList(deletedInfo.slug)"
          >
            I accept
          </VBtn>
        </VCardText>
      </VCard>
    </VDialog>
  </section>
</template>
