<template>
  <!-- modal medium -->
  <div
    id="newBussiness"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mediumModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="mediumModalLabel" class="modal-title" >
            New Bussiness Profile
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
              <strong>Bussiness</strong>
              <small> Form</small>
            </div>
            <div class="card-body card-block">
              <div class="form-group">
                <label for="company" class="form-control-label"
                  >Bussiness name</label
                >
                <input
                  type="text"
                  id="company"
                  placeholder="Enter your company name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="vat" class="form-control-label">Address</label>
                <input
                  type="text"
                  id="vat"
                  placeholder="DE1234567890"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="street" class="form-control-label">sex</label>
                <input
                  type="text"
                  id="street"
                  placeholder="Enter street name"
                  class="form-control"
                />
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
      bussinessName: '',
      address: '',
      bussinesstype: '',
      numberOfEmployees: '',
      accountNumber: '',
      bvn: '',
    }
  }
}
</script>

<style></style>
