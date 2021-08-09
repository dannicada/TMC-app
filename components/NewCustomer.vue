<template>
  <!-- modal medium -->
  <div
    class="modal fade"
    id="newCustomer"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="mediumModalLabel">
            New Customer Profile
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-header">
              <strong>Customer</strong>
              <small> Form</small>
            </div>
            <div class="card-body card-block">
              <div class="form-group">
                <label for="first-name" class="form-control-label"
                  >first name</label
                >
                <input
                  id="first-name"
                  v-model="firstName"
                  type="text"
                  placeholder="Enter your first-name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="last-name" class="form-control-label"
                  >last name</label
                >
                <input
                  id="last-name"
                  v-model="lastName"
                  type="text"
                  placeholder="enter last name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input id="male" v-model="sex" type="radio" value="male" />
                <label for="male">male</label>
                <input id="female" v-model="sex" type="radio" value="female" />
                <label for="female">female</label>
              </div>
              <div class="row form-group">
                <div class="col-8">
                  <div class="form-group">
                    <label for="city" class="form-control-label"
                      >home address</label
                    >
                    <input
                      id="city"
                      v-model="address"
                      type="text"
                      placeholder="Enter your city"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="form-group">
                    <label for="occupation" class="form-control-label"
                      >Occupation</label
                    >
                    <input
                      id="occupation"
                      v-model="occupation"
                      type="text"
                      placeholder="Enter occupation"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="form-control-label">email</label>
                <input
                  id="email"
                  v-model="email"
                  type="text"
                  placeholder="Country name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="phone-number" class="form-control-label"
                  >phone number</label
                >
                <input
                  id="phone-number"
                  v-model="phoneNumber"
                  type="text"
                  placeholder="Country name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="account-number" class="form-control-label"
                  >account number*</label
                >
                <input
                  id="account-number"
                  v-model="accountNumber"
                  type="number"
                  placeholder="Enter account number"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="bvn" class="form-control-label">bvn*</label>
                <input
                  id="bvn"
                  v-model="bvn"
                  type="number"
                  placeholder="Enter bvn"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="guarantorName" class="form-control-label"
                  >guarantor name*</label
                >
                <input
                  id="guarantorName"
                  v-model="guarantorName"
                  type="text"
                  placeholder="Enter guarantor name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="guarantorAddress" class="form-control-label"
                  >guarantor address*</label
                >
                <input
                  id="guarantorAddress"
                  v-model="guarantorAddress"
                  type="text"
                  placeholder="Enter guarantor address"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="guarantorPhoneNumber" class="form-control-label"
                  >guarantor phone number*</label
                >
                <input
                  id="guarantorPhoneNumber"
                  v-model="guarantorPhoneNumber"
                  type="text"
                  placeholder="Enter guarantor address"
                  class="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancel
          </button>
          <button @click="createCustomer" type="button" class="btn btn-primary">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal medium -->
</template>

<script>
export default {
  name: 'NewCustomer',
  data() {
    return {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: '',
      email: '',
      occupation: '',
      accountNumber: '',
      bvn: '',
      guarantorName: '',
      guarantorAddress: '',
      guarantorPhoneNumber: '',
      sex: '',
    }
  },
  methods: {
    async createCustomer() {
      this.$nuxt.$loading.start()
      const formData = await new FormData()
      formData.append('email', this.email)
      formData.append('first_name', this.firstName)
      formData.append('last_name', this.lastName)
      formData.append('phone_number', this.phoneNumber)
      formData.append('address', this.address)
      formData.append('sex', this.sex)
      formData.append('occupation', this.occupation)
      formData.append('account_number', this.accountNumber)
      formData.append('bvn', this.bvn)
      formData.append('guarantor_name', this.guarantorName)
      formData.append('guarantor_address', this.guarantorAddress)
      formData.append('guarantor_phone_number', this.guarantorPhoneNumber)
      formData.append('bvn', this.bvn)

      try {
        this.$nuxt.$loading.start()
        const response = await this.$axios.post(`/customer/create/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log(response)
        if (response.status === 201) {
          this.$toast.success('Customer profile was created successfuly');
          this.$router.go();
        }
      } catch (err) {
        console.log(err.response)
        this.$toast.error('an error occured')
        this.$toast.error('please fill in the required fields')
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>

<style></style>
