<script setup>
import { paginationMeta } from '@api-utils/paginationMeta'
import { onMounted, ref } from "vue"
import { useRouter } from 'vue-router'
import { VDataTableServer } from 'vuetify/labs/VDataTable'

const router = useRouter()

const searchQuery = ref('')
const isSnackbarVisible = ref(false)
const isDeleteUser = ref(false)
const deletedMessage = ref(null)
const backup = ref([])
const company = ref([])
const totalItems = ref(0)
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref(null)
const orderBy = ref(null)
const loading = ref(false)

// Headers
const headers = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Details",
    key: "details",
  },
  {
    title: "Purchase Date",
    key: "purchase_date",
  },
  {
    title: "Price",
    key: "price",
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
    loading.value = true

    const res = await $api(`${baseUrl}/assets`, {
      params: {
        page: page.value,
        per_page: itemsPerPage.value,
        q: searchQuery.value,
        sortBy: sortBy.value,
        orderBy: orderBy.value,
      },
    })

    company.value = res.data
    totalItems.value = res.total
    backup.value = res.data
    loading.value = false
  } catch (err) {
    console.error('Error fetching users:', err)
    loading.value = false
  }
}

const onPageChange = pageNumber => {
  page.value = pageNumber
  fetchUsers()
}

const onItemsPerPageChange = perPage => {
  itemsPerPage.value = perPage
  fetchUsers()
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
    const res = await $api(`${baseUrl}/assets/${id}`, {
      method: "DELETE",
    })

    searchQuery.value = ''
    isDeleteUser.value=false
    isSnackbarVisible.value = true
    deletedMessage.value = res
    fetchUsers()
    


  } catch (err) {
    isSnackbarVisible.value = true
    deletedMessage.value = err?.message
    console.error(err)
  }
}

const isExporting = ref(false)

const handleExport = async () => {
  isExporting.value = true
  deletedMessage.value = null
  isSnackbarVisible.value = false
  try {
    const res = await $api(`${baseUrl}/asset-export`, {
      method: "GET",
      responseType: 'blob', 
    })

    isExporting.value= false

    const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.setAttribute('download', 'data.xlsx')
    document.body.appendChild(link)
    link.click()
    link.parentNode.removeChild(link)
  } catch (err) {
    isExporting.value= false
    console.error('Error downloading file:', err)
    isSnackbarVisible.value = true
    deletedMessage.value = 'Error downloading file'
  }
}
</script>

<template>
  <section>
    <VProgressLinear
      v-if="isExporting"
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
            variant="tonal"
            color="secondary"
            prepend-icon="tabler-upload"
            @click="handleExport"
          >
            Export
          </VBtn>
          <VBtn color="secondary">
            <input
              type="file"
              @change="onFileChange"
            >
            <button @click="uploadFile">
              Import
              <VIcon
                end
                icon="tabler-cloud-upload"
              />
            </button>
          </VBtn>
          <VBtn
            prepend-icon="tabler-plus"
            @click="() => router.push({name:'apps-assets'})"
          >
            Add New
          </VBtn>
        </div>
      </VCardText>
      <VDivider />
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="company"
        :headers="headers"
        :items-length="totalItems"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #item.actions="{ item }">
          <IconBtn
            color="error"
            @click="()=>{
              isDeleteUser = true
              deleteCategoryInfo = item?.id;
            
            }"
          >
            <VIcon icon="tabler-trash" />
          </IconBtn>

          <IconBtn
            @click="
              $router.push({
                name: 'apps-assets-edit-id',
                params: { id: item.id }})
            "
          >
            <VIcon icon="tabler-edit" />
          </IconBtn>
        </template>
        <template #bottom>
          <VDivider />
          <div class="d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3">
            <p class="text-sm text-disabled mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalItems) }}
            </p>
            <VPagination
              v-model="page"
              :length="Math.ceil(totalItems / itemsPerPage)"
              :total-visible="$vuetify.display.xs ? 1 : Math.min(Math.ceil(totalItems / itemsPerPage), 5)"
              @input="onPageChange"
            >
              <template #prev="slotProps">
                <VBtn
                  variant="tonal"
                  color="default"
                  v-bind="slotProps"
                  :icon="false"
                >
                  Previous
                </VBtn>
              </template>
              <template #next="slotProps">
                <VBtn
                  variant="tonal"
                  color="default"
                  v-bind="slotProps"
                  :icon="false"
                >
                  Next
                </VBtn>
              </template>
            </VPagination>
          </div>
        </template>
      </VDataTableServer>
    </VCard>
    <VDialog
      v-model="isDeleteUser"
      width="500"
    >
      <DialogCloseBtn @click="isDeleteUser=false" />
      <VCard>
        <VCardText>Do you want to delete <span class="text-danger">Assets</span>?</VCardText>
        <VCardText class="d-flex justify-end">
          <VBtn
            color="error"
            @click="deleteService(deleteCategoryInfo)"
          >
            I accept
          </VBtn>
        </VCardText>
      </VCard>
    </VDialog>
  </section>
</template>




