<script setup>
import UserBioPanel from '@/views/apps/user/view/UserBioPanel.vue'

const route = useRoute()
const userData =ref([])
const isLoading = ref(false)

const form = ref({
  name: '',
  email: '',
  roles: [],
  status: '',
})

const roleList = ref()
const permissionList = ref()
const permissions =ref([])

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

const message = ref()
const isSnackbarTopStartVisible = ref(false)


// Event
const getUserByID = async() => {
  isLoading.value = true
  try {
    const res = await $api(`${baseUrl}/user_edit/${route.params.id}`, {
      method: "GET",
    })

    if(res?.status=="success"){
      isLoading.value = false
      userData.value=res?.user_info
      form.value={
        name: userData.value.name,
        email: userData.value.email,
        status: userData.value.status,
        roles: userData.value?.roles?.map(roles => roles.name),
      }
      permissions.value =  userData.value?.permissions?.map(permission => permission.name)
    }
  } catch (error) {
    isLoading.value = false
  }
}

const getRoleList = async()=>{
  const res = await $api(`${baseUrl}/roles`, {
    method: "GET",
  })

  if(res?.status=="Success")
    roleList.value =  res?.role.map(role => role.name)
}

const getPermissionList = async()=>{
  const res = await $api(`${baseUrl}/permissions`, {
    method: "GET",
  })

  if(res?.status=="Success")
    permissionList.value=  res?.permissions.map(permission => permission.name)
}

onMounted(async() => {
  await getUserByID()
  await getRoleList()
  await getPermissionList()
  
})

const editUser = async () => {
  const res = await $api(`${baseUrl}/user_update/${route.params.id}?name=${form.value.name}&email=${form.value.email}&status=${form.value.status}&roles[]=${form.value.roles.join('&roles[]=')}`, {
    method: "PUT",
  })

  if(res?.status=='success'){
    message.value = res.message
    isSnackbarTopStartVisible.value=true
  }
}

const updatePermission = async () => {
  const res = await $api(`${baseUrl}/assign_permission/${route.params.id}`, {
    method: "PUT",
    body: { permissions: permissions.value },
  })

  if(res?.status=='success'){
    message.value = res.message
    isSnackbarTopStartVisible.value=true
  }
}
</script>

<template>
  <VProgressLinear
    v-if="isLoading"
    indeterminate
    color="primary"
  />
  <VRow v-else>
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <UserBioPanel :alldata="userData" />
      <VCard class="mt-3">
        <VCardItem>
          <div class="d-flex justify-content-between">
            <div><VCardTitle>Update Permission</VCardTitle></div>
            <div>
              <VBtn
                type="button"
                @click="$router.go(-1)"
              >
                Back
              </VBtn>
            </div>
          </div>
          <VForm @submit.prevent="updatePermission">
            <VRow>
              <!-- Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.name"
                  :rules="[requiredValidator]"
                  autofocus
                  label="Name"
                  placeholder="Name"
                />
              </VCol>
              <!-- permissions -->
              <VCol cols="12">
                <p class="mb-0">
                  Select Permissions
                </p>
                <template
                  v-for="per,index in permissionList"
                  :key="index"
                >
                  <VCheckbox
                    v-model="permissions"
                    :label="per"
                    :value="per"
                  />
                </template>
              </VCol>
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="outlined"
                  color="secondary"
                  @click="$router.go(-1)"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardItem>
      </VCard>
    </VCol>
    <VCol
      cols="12"
      md="7"
      lg="8"
    >
      <VCard>
        <VCardItem>
          <div class="d-flex justify-content-between">
            <div> <VCardTitle>Update User</VCardTitle></div>
            <div>
              <VBtn
                type="button"
                @click="$router.go(-1)"
              >
                Back
              </VBtn>
            </div>
          </div>
         
          <VForm @submit.prevent="editUser">
            <VRow>
              <!-- Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.name"
                  :rules="[requiredValidator]"
                  autofocus
                  label="Name"
                  placeholder="Name"
                />
              </VCol>
              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  label="Change Password"
                  type="password"
                  placeholder="******"
                />
              </VCol>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                  type="email"
                  placeholder="demo@example.com"
                />
              </VCol>
              <!-- status -->
              <VCol cols="12">
                <AppSelect
                  v-model="form.status"
                  label="Select Status"
                  placeholder="Select Status"
                  :rules="[requiredValidator]"
                  :items="statusList"
                />
              </VCol>
              <!-- Roles -->
              <VCol cols="12">
                <p class="mb-0">
                  Select Role
                </p>
                <template
                  v-for="role,index in roleList"
                  :key="index"
                >
                  <VCheckbox
                    v-model="form.roles"
                    :label="role"
                    :value="role"
                  />
                </template>
              </VCol>
              <VCol
                cols="12"
                class="text-center text-danger"
              />
              <VCol
                cols="12"
                class="text-center text-base"
              >
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="outlined"
                  color="secondary"
                  @click="$router.go(-1)"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardItem>
      </VCard>
    </VCol>
    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top end"
    >
      {{ message }}
    </VSnackbar>
  </VRow>
</template>
