<script setup>
const form = ref({
  date: '',
  employee_id: '',
  check_in_latitude: '',
  check_in_longitude: '',
  location: '',
  check_in_time: '',
})

console.log(form)

const employeeList = ref([])
const refForm = ref()

const isLoading = ref(false)
const isSnackbarVisible = ref(false)
const message = ref('')
const router = useRouter()

const addAttendance = async () => {
  isLoading.value = true
  try {
    const res = await $api(`${baseUrl}/attendance`, {
      method: "POST",
      body: form.value,
    })

    console.log(res)
    if (res.success) {
      isLoading.value = false
      isSnackbarVisible.value = true
      message.value = res.message
      router.push({ name: "apps-attendence-list" })
    } else {
      isSnackbarVisible.value = true
      message.value = res.error || res.message
    }
  } catch (err) {
    isLoading.value = false
    if (err.response && err.response.status === 409) {
      message.value = "Today's attendance record already exists for this employee."
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

  if (res)
    employeeList.value = res?.map(item => ({
      title: item.name, value: item?.id }))
}

onMounted(() => {
  getEmployeesList()
})
</script>

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
        <VCard title="Attendence">
          <VCardText>
            <VForm
              ref="refForm"
              @submit.prevent="addAttendance"
            >
              <VRow>
                <VCol cols="6">
                  <AppDateTimePicker
                    v-model="form.date"
                    label="Date"
                    placeholder="Select date"
                    :config="{ dateFormat: 'F j, Y' }"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppDateTimePicker
                    v-model="form.check_in_time"
                    label="Time"
                    placeholder="Select time"
                    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppSelect
                    v-model="form.employee_id"
                    :items="employeeList"
                    label="Employee"
                    placeholder="Select Employee"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppTextField
                    v-model="form.location"
                    label="Location"
                    type="text"
                    placeholder="Enter Location"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <label
                    class="v-label text-body-2 text-high-emphasis"
                    for="check_in_latitude"
                  >Latitude</label>
                  <AppTextField
                    id="check_in_latitude"
                    v-model="form.check_in_latitude"
                    type="text"
                    placeholder="Enter latitude.."
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <label class="v-label text-body-2 text-high-emphasis">Longitude</label>
                  <AppTextField
                    v-model="form.check_in_longitude"
                    type="text"
                    placeholder="Enter longitude.."
                    :rules="[requiredValidator]"
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
                    Attendance
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
