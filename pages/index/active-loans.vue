<template>
  <div class="row pt-5 mt-5">
    <div class="col-lg-12">
      <h2 class="title-1 m-b-25">All active loans</h2>
      <div class="table-responsive table--no-card m-b-40">
        <table class="table table-borderless table-striped table-earning">
          <thead>
            <tr>
              <th>date approved</th>
              <th>laon ID</th>
              <th>loan amount</th>
              <th class="text-right">laon interest</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(loan, key) in loans" :key="key">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      loans: [],
    }
  },
  async fetch() {
    // this.$nuxt.$loading.start()
    console.log('it is fetching')
    const loans = await this.$axios.get(`/loan/list/`)
    this.loans = loans.data.filter(item => item.active);
    // this.$nuxt.$loading.finish()
  },
}
</script>

<style></style>
