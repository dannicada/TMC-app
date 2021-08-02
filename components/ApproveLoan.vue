<template>
  <!-- modal medium -->
  <div
    id="approveLoan"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="mediumModalLabel">
            Approve or Decline Loan request
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="toggle()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-header">
              <strong>Loan</strong>
              <small> Details</small>
            </div>
            <div class="card-body card-block">
              <div class="form-group">
                <label for="amount" class="form-control-label"
                  >Loan amount</label
                >
                <input
                  v-model="amount"
                  type="number"
                  id="amount"
                  placeholder=""
                  disabled
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="repaymentAmount" class="form-control-label"
                  >Repayment amount</label
                >
                <input
                  id="repaymentAmount"
                  v-model="repaymentAmount"
                  type="number"
                  placeholder=""
                  disabled
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="date" class="form-control-label"
                  >Repayment Date</label
                >
                <input id="date" type="date" disabled class="form-control" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>Customer</strong>
              <small> Details</small>
            </div>
            <div class="card-body card-block">
              <div class="row form-group">
                <div class="col-8">
                  <div class="form-group">
                    <label for="address" class="form-control-label"
                      >home address</label
                    >
                    <input
                      id="address"
                      type="text"
                      disabled
                      placeholder=""
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
                      type="text"
                      placeholder=""
                      disabled
                      class="form-control"
                    />
                    <label for="email" class="form-control-label">email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder=""
                      disabled
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Decline
          </button>
          <button type="button" class="btn btn-primary">Approve</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end modal medium -->
</template>

<script>
export default {
  name: 'NewCustomer',
  props: {
    loan: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {
        amount: 1000,
      },
    },
  },
  data() {
    return {
      customer: '',
      repayment_date: '',
      amount: '',
      interest: '',
      repayment_amount: '',
      tempLaon: {
        amount: 1000,
      },
      approved: 'true',
    }
  },
  methods: {
    async approveLoan() {
      const formData = await new FormData()
      formData.append('approved', this.approved)
      try {
        this.$nuxt.$loading.start()

        const response = await this.$axios.put(
          `/laon/update/${this.loan.id}/`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.log(response)
        this.$toast.success('Loan request was approved successfuly')
        await this.$auth.fetchUser()
        this.$router.push({ path: '/' })
      } catch (err) {
        console.log(err.response)
        this.$toast.errro('An error occured')
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
    declineLoan() {},
  },
}
</script>

<style></style>
