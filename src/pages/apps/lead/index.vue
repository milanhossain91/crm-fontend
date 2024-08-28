<template>
  <div>
    <VRow>
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
      <VCol
        cols="12"
        md="12"
      >
        <VCard title="Add New Lead">
          <VCardText>
            <VForm
              ref="refForm"
              @submit.prevent="addLead"
            >
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
                    label="Estimated Closing Date"
                    placeholder="Estimated Closing Date"
                    :config="{ dateFormat: 'F j, Y' }"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppTextField
                    v-model="form.closing_amount"
                    label="Estimated Closing Amount"
                    type="number"
                    placeholder="Estimated Closing Amount"
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
                    @change="handleFileChange"
                  />
                </VCol>
                <VCol
                  cols="12"
                  class="d-flex gap-4"
                >
                  <VBtn
                    type="submit"
                    @click="refForm?.validate()"
                  >
                    Create Lead
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
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
const form = ref({
  prospect_id: '',
  name: '',
  winprobability_id: '',
  item_id: '',
  closing_date: '',
  closing_amount: '',
  person_id: '', 
  leadstage_id: '',
  stage_date: '',
  priority_id: '',
  notes: '',
  attachment: null,
})

const employeeList = ref([])
const refForm = ref()

const isLoading = ref(false)
const isSnackbarVisible = ref(false)
const message = ref('')
const router = useRouter()

const handleFileChange = e => {
  form.value.attachment = e.target.files[0]
}

const addLead = async () => {
  isLoading.value = true

  const formData = new FormData()
  
  for (const key in form.value) {
    if (key === 'attachment' && form.value[key]) {
      formData.append(key, form.value[key])
    } else {
      formData.append(key, form.value[key])
    }
  }

  try {
    const res = await $api(`${baseUrl}/lead`, {
      method: "POST",
      body: formData,
    })

    console.log(res)
    if (res.success) {
      isLoading.value = false
      isSnackbarVisible.value = true
      message.value = res.message
      router.push({ name: "apps-lead-list" })
    } else {
      isSnackbarVisible.value = true
      message.value = res.error || res.message
    }
  } catch (err) {
    isLoading.value = false
    if (err.response && err.response.status === 409) {
      message.value = "Today's Lead record already exists for this employee."
    } else {
      message.value = err.message
    }
    isSnackbarVisible.value = true
    console.log(err)
  }
}

const getEmployeesList = async () => {
  const res = await $api(`${baseUrl}/employees`, {
    method: "GET",
  })

  if (res) {
    employeeList.value = res.map(item => ({
      title: item.name,
      value: item.id,
    }))
  }
}

onMounted(() => {
  getEmployeesList()
})
</script>
