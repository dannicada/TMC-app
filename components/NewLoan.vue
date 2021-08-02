<template>
  <!-- modal medium -->
  <div
    class="modal fade"
    id="newLoan"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="mediumModalLabel">
            New Loan Application
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
              <strong>Loan</strong>
              <small> Form</small>
            </div>
            <div class="card-body card-block">
              <div class="form-group">
                <label for="customer" class="form-control-label"
                  >customer id</label
                >
                <input
                  id="customer"
                  v-model="customerId"
                  type="number"
                  placeholder="Enter customer id"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="amount" class="form-control-label"
                  >Loan amount</label
                >
                <input
                  v-model="amount"
                  type="number"
                  id="amount"
                  placeholder="Enter loan amount"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="interest" class="form-control-label"
                  >Interest</label
                >
                <input
                  id="interest"
                  v-model="interest"
                  type="number"
                  placeholder="DE1234567890"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="date" class="form-control-label"
                  >Repayment Date</label
                >
                <input v-model="dueDate" type="date" id="date" class="form-control" />
              </div>
              <div class="row form-group">
                <div class="col-8"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancel
          </button>
          <button @click="createLoan" type="button" class="btn btn-primary">
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
      customer: '',
      repaymentDate: '',
      loanType: '',
      amount: '',
      interest: '',
      dueDate: '',
    }
  },
  methods: {
    async createLoan() {
      this.$nuxt.$loading.start()
      const formData = await new FormData()
      formData.append('customer', this.customer)
      formData.append('amount', this.amount)
      formData.append('due_date', this.dueDate)
      formData.append('interest', this.interest)

      try {
        this.$nuxt.$loading.start()
        const response = await this.$axios.post(`/loan/create/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log(response)
        if (response.status === 201) {
          this.$toast.success('Loan request was created successfuly')
          this.$router.go()
        }
      } catch (err) {
        console.log(err.response)
        this.$toast.error('an error occured')
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>

<style></style>
