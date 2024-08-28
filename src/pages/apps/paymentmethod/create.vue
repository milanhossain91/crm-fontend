<script setup>
const form = ref({
  name: '',
  code: '',
  note: '',
  status: '',
})

const statusList = ref([
  {
    title: 'Active',
    value: 1,
  },
  {
    title: 'Inactive',
    value: 0,
  },
])

const isLoading = ref(false)
const isSnackbarVisible = ref(false)
const message = ref()
const router = useRouter()

const addPaymentMethod = async data => {
  isLoading.value = true
  try {
    const res = await $api(`${baseUrl}/payment-methods`, {
      method: "POST",
      body: data,
    })

    isLoading.value = false
    isSnackbarVisible.value = true
    message.value = res.message
    router.push({ name: 'apps-paymentmethod' })
  } catch (err) {
    isLoading.value = false
    isSnackbarVisible.value = true
    message.value = err.message
    console.error(err)
  }
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
      {{ message }}
    </VSnackbar>
    <VCard>
      <VCardText>
        <VForm @submit.prevent="addPaymentMethod(form)">
          <VRow>
            <VCol cols="12">
              <VRow no-gutters>
                <VCol
                  cols="12"
                  md="3"
                  class="d-flex align-items-center"
                >
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="name"
                  >Name</label>
                </VCol>
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppTextField
                    id="name"
                    v-model="form.name"
                    type="text"
                    placeholder="Name"
                    persistent-placeholder
                  />
                </VCol>
              </VRow>
            </VCol>
           
            <VCol cols="12">
              <VRow no-gutters>
                <VCol
                  cols="12"
                  md="3"
                  class="d-flex align-items-center"
                >
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="address"
                  >Code</label>
                </VCol>
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppTextField
                    id="address"
                    v-model="form.code"
                    type="text"
                    placeholder="Code"
                    persistent-placeholder
                  />
                </VCol>
              </VRow>
            </VCol>
            <VCol cols="12">
              <VRow no-gutters>
                <VCol
                  cols="12"
                  md="3"
                  class="d-flex align-items-center"
                >
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="note"
                  >Note</label>
                </VCol>
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppTextField
                    id="note"
                    v-model="form.note"
                    type="text"
                    placeholder="Note"
                    persistent-placeholder
                  />
                </VCol>
              </VRow>
            </VCol>
            <VCol cols="12">
              <VRow no-gutters>
                <VCol
                  cols="12"
                  md="3"
                  class="d-flex align-items-center"
                >
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="Status"
                  >Status</label>
                </VCol>
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppSelect
                    v-model="form.status"
                    placeholder="Select Status"
                    :items="statusList"
                  />
                </VCol>
              </VRow>
            </VCol>
            <VCol
              offset-md="3"
              cols="12"
              md="9"
              class="d-flex gap-4"
            >
              <VBtn type="submit">
                Submit
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                type="button"
                @click="$router.go(-1)"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </section>
</template>
