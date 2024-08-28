<script setup>
const form = ref({

  name: '',
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

const isSnackbarVisible = ref(false)
const message = ref()
const router = useRouter()
const route = useRoute()

const updateCategory = async data => {
  const res = await $api(`${baseUrl}/countries/${route.params.id}`, {
    method: "PUT",
    body: data,
  })

  isSnackbarVisible.value = true
  message.value = res.message
  router.push({ name: 'apps-country-list' })
  
}

onMounted(async() => {
  const res = await $api(`${baseUrl}/countries/${route.params.id}`, {
    method: "GET",
  })

  const data = res


  form.value = {
    name: data?.name,
    status: data?.status,
    
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
            <VCol cols="6">
              <AppSelect
                v-model="form.prospect_id"
                :items="employeeList"
                label="Prospect Name"
                placeholder="Prospect Name"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="6">
              <AppTextField
                v-model="form.name"
                label="Lead Name"
                type="text"
                placeholder="Enter Name"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="6">
              <AppSelect
                v-model="form.winprobability_id"
                :items="employeeList"
                label="Win Probability"
                placeholder="Win Probability"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="6">
              <AppSelect
                v-model="form.item_id"
                :items="employeeList"
                label="Items"
                placeholder="Items"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="6">
              <AppDateTimePicker
                v-model="form.closing_date"
                label="Estimited Closing Date"
                placeholder="Estimited Closing Date"
                :config="{ dateFormat: 'F j, Y' }"
                :rules="[requiredValidator]"
              />
            </VCol>
            <VCol cols="6">
              <AppTextField
                v-model="form.closing_amount"
                label="Estimited Closing Amount"
                type="number"
                placeholder="Estimited Closing Amount"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="6">
              <AppSelect
                v-model="form.person_id"
                :items="employeeList"
                label="Assigned Person"
                placeholder="Assigned Person"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="6">
              <AppSelect
                v-model="form.leadstage_id"
                :items="employeeList"
                label="Lead Stage"
                placeholder="Lead Stage"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="6">
              <AppDateTimePicker
                v-model="form.stage_date"
                label="Stage Date"
                placeholder="Stage Date"
                :config="{ dateFormat: 'F j, Y' }"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="6">
              <AppSelect
                v-model="form.priority_id"
                :items="employeeList"
                label="Priority"
                placeholder="Priority"
                :rules="[requiredValidator]"
              />
            </VCol>

            <VCol cols="12">
              <AppTextarea
                v-model="form.notes"
                type="text"
                placeholder="Enter here.."
                auto-grow
              />
            </VCol>

            <VCol cols="12">
              <VFileInput
                v-model="form.attachment"
                show-size
                label="File input"
              />
            </VCol>

               
            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn type="submit">
                Update Lead
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
