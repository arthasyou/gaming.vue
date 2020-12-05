<template>
  <!-- <q-page > -->
  <div class="">
    <q-card class="my-card  q-px-xl q-py-lg">
      <q-card-section>
        <div class="text-h4 q-mb-lg">财务中心</div>
      </q-card-section>

      <q-card-section>
        <q-tabs
          v-model="tab"
          align="left"
          class="text-h5 stretch"
        >
          <q-route-tab
            exact
            name="1"
            to="/user/finance"
          >充值</q-route-tab>
          <q-route-tab
            exact
            name="2"
            to="/user/finance/withdraw"
          >提现</q-route-tab>
          <q-route-tab
            exact
            name="3"
            to="/user/finance/transfer"
          >转账</q-route-tab>
          <q-route-tab
            exact
            name="4"
            to="/user/finance/tradingrecord"
          >交易记录</q-route-tab>
          <q-route-tab
            exact
            name="5"
            to="/user/finance/vbdetail"
          >V币明细</q-route-tab>
        </q-tabs>
      </q-card-section>
    </q-card>
    <div class="q-mt-xs">
      <!-- <q-page-container> -->
      <router-view />
      <!-- </q-page-container> -->
    </div>
  </div>
  <!-- </q-page> -->
</template>

<script>
export default {
  name: 'Finance',
  data () {
    return {
      tab: '1'
    }
  }
}
</script>
