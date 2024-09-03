<script setup>
const form = ref({
  name: '',
  item_name: '',
  model: '',
  qty: '',
  unit_price: '',

})

console.log(form)

const isSnackbarVisible = ref(false)
const message = ref()
const router = useRouter()

const addItem = async data => {
  const res = await $api(`${baseUrl}/items`, {
    method: "POST",
    body: data,
  })

  isSnackbarVisible.value = true
  message.value = res.message
  router.push({ name: 'apps-item-list' })
  
}
</script>

<template>
  <section>
    <VSnackbar
      v-model="isSnackbarVisible"
      :timeout="2000"
      location="top end"
    >
      {{ message }}
    </VSnackbar>
    <VCard>
      <VCardText>
        <VForm @submit.prevent="addItem(form)">
          <VRow>
            <!-- Item Name -->
            <VCol cols="12">
              <VRow no-gutters>
                <VCol
                  cols="12"
                  md="3"
                  class="d-flex align-items-center"
                >
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="item_name"
                  >Item Name</label>
                </VCol>
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppTextField
                    id="item_name"
                    v-model="form.item_name"
                    type="text"
                    placeholder="Enter item name"
                    persistent-placeholder
                  />
                </VCol>
              </VRow>
            </VCol>

            <!-- Model -->
            <VCol cols="12">
              <VRow no-gutters>
                <VCol
                  cols="12"
                  md="3"
                  class="d-flex align-items-center"
                >
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="model"
                  >Model</label>
                </VCol>
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppTextField
                    id="model"
                    v-model="form.model"
                    type="text"
                    placeholder="Enter model (optional)"
                    persistent-placeholder
                  />
                </VCol>
              </VRow>
            </VCol>

            <!-- Quantity -->
            <VCol cols="12">
              <VRow no-gutters>
                <VCol
                  cols="12"
                  md="3"
                  class="d-flex align-items-center"
                >
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="qty"
                  >Quantity</label>
                </VCol>
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppTextField
                    id="qty"
                    v-model="form.qty"
                    type="number"
                    placeholder="Enter quantity"
                    persistent-placeholder
                  />
                </VCol>
              </VRow>
            </VCol>

            <!-- Unit Price -->
            <VCol cols="12">
              <VRow no-gutters>
                <VCol
                  cols="12"
                  md="3"
                  class="d-flex align-items-center"
                >
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="unit_price"
                  >Unit Price</label>
                </VCol>
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppTextField
                    id="unit_price"
                    v-model="form.unit_price"
                    type="number"
                    placeholder="Enter unit price"
                    persistent-placeholder
                  />
                </VCol>
              </VRow>
            </VCol>

            <!-- Submit and Reset Buttons -->
            <VCol
              offset-md="3"
              cols="12"
              md="9"
              class="d-flex gap-4 justify-content-end"
            >
              <VBtn type="submit">
                Submit
              </VBtn>
              <VBtn
                color="secondary"
                variant="tonal"
                type="reset"
              >
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </section>
</template>
