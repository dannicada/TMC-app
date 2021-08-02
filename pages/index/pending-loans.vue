<template>
  <div class="row pt-5 mt-5">
    <div class="col-lg-12">
      <h2 class="title-1 m-b-25">Pending Loans</h2>
      <div class="table-responsive table--no-card m-b-40">
        <table class="table table-borderless table-striped table-earning">
          <thead>
            <tr>
              <th>date approved</th>
              <th>laon ID</th>
              <th>customer name</th>
              <th class="text-right">amount</th>
              <th class="text-right">quantity</th>
              <th class="text-right">total repayment</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(laon, key) in loans"
              :key="key"
              data-toggle="modal"
              data-target="#approveLoan"
            >
              <td>2018-09-29 05:57</td>
              <td>100398</td>
              <td>iPhone X 64Gb Grey</td>
              <td class="text-right">$999.00</td>
              <td class="text-right">1</td>
              <td class="text-right">$999.00</td>
            </tr>
            <tr>
              <td>2018-09-28 01:22</td>
              <td>100397</td>
              <td>Samsung S8 Black</td>
              <td class="text-right">$756.00</td>
              <td class="text-right">1</td>
              <td class="text-right">$756.00</td>
            </tr>
            <tr>
              <td>2018-09-27 02:12</td>
              <td>100396</td>
              <td>Game Console Controller</td>
              <td class="text-right">$22.00</td>
              <td class="text-right">2</td>
              <td class="text-right">$44.00</td>
            </tr>
            <tr>
              <td>2018-09-26 23:06</td>
              <td>100395</td>
              <td>iPhone X 256Gb Black</td>
              <td class="text-right">$1199.00</td>
              <td class="text-right">1</td>
              <td class="text-right">$1199.00</td>
            </tr>
            <tr>
              <td>2018-09-25 19:03</td>
              <td>100393</td>
              <td>USB 3.0 Cable</td>
              <td class="text-right">$10.00</td>
              <td class="text-right">3</td>
              <td class="text-right">$30.00</td>
            </tr>
            <tr>
              <td>2018-09-29 05:57</td>
              <td>100392</td>
              <td>Smartwatch 4.0 LTE Wifi</td>
              <td class="text-right">$199.00</td>
              <td class="text-right">6</td>
              <td class="text-right">$1494.00</td>
            </tr>
            <tr>
              <td>2018-09-24 19:10</td>
              <td>100391</td>
              <td>Camera C430W 4k</td>
              <td class="text-right">$699.00</td>
              <td class="text-right">1</td>
              <td class="text-right">$699.00</td>
            </tr>
            <tr>
              <td>2018-09-22 00:43</td>
              <td>100393</td>
              <td>USB 3.0 Cable</td>
              <td class="text-right">$10.00</td>
              <td class="text-right">3</td>
              <td class="text-right">$30.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <approve-loan />
  </div>
</template>

<script>
import ApproveLoan from '@/components/ApproveLoan.vue'
export default {
  components: {
    ApproveLoan,
  },
  data() {
    return {
      laonToApprove: {},
      laons: [],
    }
  },
  async fetch() {
    try {
      this.$nuxt.$loading.start()

      this.laons = await this.$axios.get(
        `/laon/list-pending/$`,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(response)
      await this.$auth.fetchUser()
    } catch (err) {
      console.log(err.response)
    } finally {
      this.$nuxt.$loading.finish()
    }
  },
  methods: {
    // toggle() {
    //   document.body.className += ' modal-open'
    //   const modalClasses = this.modalClasses
    //   if (modalClasses.includes('d-block')) {
    //     modalClasses.pop()
    //     modalClasses.pop()
    //     // hide backdrop
    //     const backdrop = document.querySelector('.modal-backdrop')
    //     document.body.removeChild(backdrop)
    //   } else {
    //     modalClasses.push('d-block')
    //     modalClasses.push('show')
    //     // show backdrop
    //     // document.getElementById('approveLoan').modal('show')
    //     const backdrop = document.createElement('div')
    //     backdrop.classList = 'modal-backdrop fade show'
    //     document.body.appendChild(backdrop)
    //   }
    // },
  },
}
</script>

<style></style>
