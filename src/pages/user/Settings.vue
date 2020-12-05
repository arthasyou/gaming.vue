<template>
  <!-- <q-page > -->
  <div class="">
    <q-card class="my-card q-px-xl q-py-lg">
      <q-card-section>
        <div class="text-h4 q-mb-lg">个人设置</div>
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
            to="/user/settings"
          >个人资料</q-route-tab>
          <q-route-tab
            exact
            name="2"
            to="/user/settings"
          >安全设置</q-route-tab>
          <q-route-tab
            exact
            name="3"
            to="/user/settings"
          >银行卡管理</q-route-tab>
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
  // name: 'PageName',
  data () {
    return {
      tab: '1'
    }
  }
}
</script>
