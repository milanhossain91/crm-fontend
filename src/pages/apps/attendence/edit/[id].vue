<script setup>
const form = ref({

  check_out_time: '',
})

const refForm = ref()
const isSnackbarVisible = ref(false)
const message = ref()
const router = useRouter()
const route = useRoute()

const updateCategory = async data => {
  const res = await $api(`${baseUrl}/attendance/${route.params.id}`, {
    method: "PUT",
    body: data,
  })

  isSnackbarVisible.value = true
  message.value = res.message
  router.push({ name: 'apps-attendence-list' })
  
}

onMounted(async() => {
  const res = await $api(`${baseUrl}/attendance/${route.params.id}`, {
    method: "GET",
  })

  const data = res


  form.value = {
    check_out_time: data?.check_out_time,
    
  }
})
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
        <VForm @submit.prevent="updateCategory(form)">
          <VRow>
            <VCol cols="12">
              <VRow no-gutters>
                <!-- 👉 category_id -->
                <VCol
                  cols="12"
                  md="9"
                >
                  <AppDateTimePicker
                    v-model="form.check_out_time"
                    label="check out time"
                    placeholder="Select time"
                    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                    :rules="[requiredValidator]"
                  />
                </VCol>
              </VRow>
            </VCol>
           
            <!-- 👉 submit and reset button -->
            <VCol
              cols="12"
              md="9"
              class="d-flex gap-4"
            >
              <VBtn type="submit">
                Update
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
