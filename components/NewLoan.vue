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
                <label for="vat" class="form-control-label"
                  >Repayment amount</label
                >
                <input
                  v-model="repayment_amount"
                  type="number"
                  id="vat"
                  placeholder="DE1234567890"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="date" class="form-control-label"
                  >Repayment Date</label
                >
                <input type="date" id="date" class="form-control" />
              </div>
              <div class="row form-group">
                <div class="col-8">
                  <div class="form-group">
                    <label for="city" class="form-control-label"
                      >home address</label
                    >
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter your city"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="form-group">
                    <label for="postal-code" class="form-control-label"
                      >Occupation</label
                    >
                    <input
                      type="text"
                      id="postal-code"
                      placeholder="Postal Code"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="country" class="form-control-label">email</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Country name"
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
          <button type="button" class="btn btn-primary">Confirm</button>
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
      repayment_date: '',
      amount: '',
      interest: '',
      repayment_amount: '',
    }
  },
}
</script>

<style></style>
