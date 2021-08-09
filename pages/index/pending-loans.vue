<template>
  <div class="row pt-5 mt-5">
    <div class="col-lg-12">
      <h2 class="title-1 m-b-25">All pending loans</h2>
      <div class="table-responsive table--no-card m-b-40">
        <table class="table table-borderless table-striped table-earning">
          <thead>
            <tr>
              <th>date approved</th>
              <th>loan ID</th>
              <th>loan amount</th>
              <th class="text-right">loan interest</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(loan, key) in loans"
              :key="key"
              data-toggle="modal"
              data-target="#approveLoan"
              @click="selectLaon(loan)"
            >
              <td>2018-09-29 05:57</td>
              <td>{{ loan.id }}</td>
              <td>{{ loan.amount }}</td>
              <td class="text-right">{{ loan.interest }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <div class="col-lg-3">
      <h2 class="title-1 m-b-25">Top countries</h2>
      <div class="au-card au-card--bg-blue au-card-top-countries m-b-40">
        <div class="au-card-inner">
          <div class="table-responsive">
            <table class="table table-top-countries">
              <tbody>
                <tr>
                  <td>United States</td>
                  <td class="text-right">$119,366.96</td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td class="text-right">$70,261.65</td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td class="text-right">$46,399.22</td>
                </tr>
                <tr>
                  <td>Turkey</td>
                  <td class="text-right">$35,364.90</td>
                </tr>
                <tr>
                  <td>Germany</td>
                  <td class="text-right">$20,366.96</td>
                </tr>
                <tr>
                  <td>France</td>
                  <td class="text-right">$10,366.96</td>
                </tr>
                <tr>
                  <td>Australia</td>
                  <td class="text-right">$5,366.96</td>
                </tr>
                <tr>
                  <td>Italy</td>
                  <td class="text-right">$1639.32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> -->
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
                    id="amount"
                    :value="loan.amount"
                    type="number"
                    :placeholder="loan.amount"
                    disabled
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="repaymentAmount" class="form-control-label"
                    >Interest</label
                  >
                  <input
                    id="repaymentAmount"
                    :value="loan.interest"
                    type="number"
                    :placeholder="loan.interest"
                    disabled
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="date" class="form-control-label"
                    >Repayment Date</label
                  >
                  <input
                    id="date"
                    :value="loan.due_date"
                    type="date"
                    disabled
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="card">
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
                      <label for="email" class="form-control-label"
                        >email</label
                      >
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
            </div> -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Decline
            </button>
            <button type="button" class="btn btn-primary" @click="approveLoan">Approve</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end modal medium -->
    <!-- <approve-loan :loan="loan" /> -->
  </div>
</template>

<script>
// import ApproveLoan from '@/components/ApproveLoan.vue'
export default {
  components: {
    // ApproveLoan
  },
  data() {
    return {
      approved: true,
      loan: '',
      loans: [],
    }
  },
  async fetch() {
    // this.$nuxt.$loading.start()
    console.log('it is fetching')
    const loans = await this.$axios.get(`/loan/list/`)
    this.loans = loans.data.filter((item) => !item.active)
    console.log(this.loans)
    // this.$nuxt.$loading.finish()
  },
  computed: {
    currentLoan() {
      return this.loan
    },
  },
  methods: {
    selectLaon(loan) {
      this.loan = loan
      console.log(this.loan)
    },
    async approveLoan() {
      console.log(this.currentLoan)
      const formData = await new FormData()
      formData.append('approved', this.approved)
      formData.append('active', true)
      try {
        this.$nuxt.$loading.start()

        const response = await this.$axios.put(
          `/loan/update/${this.currentLoan.id}/`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.log(response)
        this.$toast.success('Loan request was approved successfuly')
        this.$router.go()
      } catch (err) {
        console.log(err.response)
        this.$toast.error('An error occured')
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>

<style></style>
