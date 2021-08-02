<template>
  <div class="row pt-5 mt-5">
    <div class="col-lg-12">
      <h2 class="title-1 m-b-25">All customers </h2>
      <div class="table-responsive table--no-card m-b-40">
        <table class="table table-borderless table-striped table-earning">
          <thead>
            <tr>
              <th>date joined</th>
              <th>customer ID</th>
              <th>customer email</th>
              <th class="text-right">phone number</th>
              <th class="text-right">address</th>
              <th class="text-right">occupation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(customer, key) in customers" :key="key">
              <td>2018-09-29 05:57</td>
              <td>{{customer.id}}</td>
              <td>{{customer.email}}</td>
              <td class="text-right">{{customer.phone_number}}</td>
              <td class="text-right">{{customer.address}}</td>
              <td class="text-right">{{customer.occupation}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
    }
  },
  async fetch() {
    console.log('it is fetching')
    const customers = await this.$axios.get(`/customer/list/`)
    this.customers = customers.data
  },
}
</script>

<style></style>
