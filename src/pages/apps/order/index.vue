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
        <VCard title="Add New Order">
          <VCardText>
            <VForm
              ref="refForm"
              @submit.prevent="addOrder"
            >
              <VRow>
                <VCol cols="6">
                  <AppTextField
                    v-model="form.sale_order_no"
                    label="Sale Order No."
                    placeholder="Sale Order No."
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppDateTimePicker
                    v-model="form.sale_order_date"
                    label="Sale Order Date"
                    placeholder="Sale Order Date"
                    :config="{ dateFormat: 'F j, Y' }"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppTextField
                    v-model="form.client_order_no"
                    label="Client Order No."
                    placeholder="Client Order No."
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppDateTimePicker
                    v-model="form.client_order_date"
                    label="Client Order Date"
                    placeholder="Client Order Date"
                    :config="{ dateFormat: 'F j, Y' }"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="12">
                  <AppTextField
                    v-model="form.sale_order_subject"
                    label="Sale Order Subject"
                    placeholder="Sale Order Subject"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="4">
                  <AppSelect
                    v-model="form.prospect_id"
                    :items="employeeList"
                    label="Prospect Name"
                    placeholder="Prospect Name"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="4">
                  <AppSelect
                    v-model="form.lead_id"
                    :items="employeeList"
                    label="Lead Name"
                    placeholder="Lead Name"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="4">
                  <AppSelect
                    v-model="form.quotation_id"
                    :items="employeeList"
                    label="Quotation No."
                    placeholder="Quotation No."
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="12">
                  <AppSelect
                    v-model="form.company_attention_person_id"
                    :items="employeeList"
                    label="Company Attention Person"
                    placeholder="Company Attention Person"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppTextField
                    v-model="form.phone"
                    label="Phone"
                    placeholder="Phone"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppTextField
                    v-model="form.email_address"
                    label="Email Address"
                    :rules="[requiredValidator, emailValidator]"
                    placeholder="demo@email.com"
                  />
                </VCol>
                <VCol cols="6">
                  <AppSelect
                    v-model="form.designation"
                    :items="designationsList"
                    label="Designation"
                    placeholder="Designation"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppSelect
                    v-model="form.department"
                    :items="departmentsList"
                    label="Department"
                    placeholder="Department"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppSelect
                    v-model="form.item_id"
                    :items="employeeList"
                    label="Order Item"
                    placeholder="Order Item"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="6">
                  <AppSelect
                    v-model="form.key_account_person_id"
                    :items="employeeList"
                    label="Key Account Person"
                    placeholder="Key Account Person"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <VCol cols="12">
                  <AppTextField
                    v-model="form.ordered_amount"
                    label="Orderd Amount"
                    placeholder="Orderd Amount"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol cols="4">
                  <!-- 👉 Basic -->
                  <VSwitch
                    v-model="form.delivered_status"
                    label="Delivered Status"
                    :true-value="1"
                    :false-value="0"
                    :rules="[requiredValidator]"
                  />
                </VCol>


                <VCol cols="12">
                  <AppTextarea
                    v-model="form.sale_order_description"
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
                    Create Order
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
  sale_order_no: '',
  sale_order_date: '',
  client_order_no: '',
  client_order_date: '',
  sale_order_subject: '',
  prospect_id: '',
  lead_id: '', 
  quotation_id: '',
  company_attention_person_id: '',
  phone: '',
  email_address: '',
  designation: '',
  department: '',
  item_id: '',
  ordered_amount: '',
  key_account_person_id: '',
  sale_order_description: '',
  delivered_status: 0,
  attachment: null,
})

const employeeList = ref([])
const designationsList = ref([])
const departmentsList = ref([])
const refForm = ref()

const isLoading = ref(false)
const isSnackbarVisible = ref(false)
const message = ref('')
const router = useRouter()

const handleFileChange = e => {
  form.value.attachment = e.target.files[0]
}

const addOrder = async () => {
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
    const res = await $api(`${baseUrl}/sales-order`, {
      method: "POST",
      body: formData,
    })

    if (res.message) {
      isLoading.value = false
      isSnackbarVisible.value = true
      message.value = res.message
      router.push({ name: "apps-order-list" })
    } else {
      isSnackbarVisible.value = true
      message.value = res.error || res.message
    }
  } catch (err) {
    isLoading.value = false
    if (err.response && err.response.status === 409) {
      message.value = "Sales Order record already exists"
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

const getDesignationsList = async () => {
  const res = await $api(`${baseUrl}/designations`, {
    method: "GET",
  })

  if (res) {
    designationsList.value = res.map(item => ({
      title: item.name,
      value: item.id,
    }))
  }
}

const getDepartmentsList = async () => {
  const res = await $api(`${baseUrl}/departments`, {
    method: "GET",
  })

  if (res) {
    departmentsList.value = res.map(item => ({
      title: item.name,
      value: item.id,
    }))
  }
}

onMounted(() => {
  getEmployeesList()
  getDepartmentsList()
  getDesignationsList()
})
</script>
