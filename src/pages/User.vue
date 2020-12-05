<template>
  <q-page padding>
    <div class="row justify-center items-stretch">

      <div class="col-3 text-center ">
        <q-card class="my-card">
          <q-card-section>

            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="value"
              size="80px"
              :thickness="0.25"
              color="orange"
              track-color="grey-3"
            >
              <q-avatar size="60px">
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
              </q-avatar>
            </q-circular-progress>

            <div class="q-mt-sm">
              <q-chip>VIP 1</q-chip>
            </div>

            <div class="q-mt-sm text-h6">玩家名字</div>
            <div class="q-mt-xs text-subtitle2">邀请码</div>
            <div class="q-mt-sm">
              <q-btn
                class="glossy"
                rounded
                color="deep-orange"
                label="签到"
                style="width: 200px;"
              />
            </div>

            <q-card-section
              horizontal
              class="q-mt-xl justify-center"
            >
              <q-card-section class="col-5">
                <div class="">
                  140.22
                </div>
                <div class="">
                  余额(元)
                </div>
                <div class="">
                  <q-chip>提现</q-chip>
                  <q-chip>充值</q-chip>
                </div>
              </q-card-section>
              <q-separator
                vertical
                insert
                class=""
              />
              <q-card-section class="col-5">
                <div class="">
                  946
                </div>
                <div class="">
                  v币
                </div>
                <div class="">
                  <q-chip>商城</q-chip>
                </div>
              </q-card-section>
            </q-card-section>

          </q-card-section>

          <q-card-section>
            <q-tabs
              v-model="tab"
              vertical
              switch-indicator
              class="text-h5 stretch"
            >
              <q-route-tab
                exact
                name="1"
                to="/user"
              >账户概览</q-route-tab>
              <q-route-tab
                exact
                name="2"
                to="/user/finance"
              >财务中心</q-route-tab>
              <q-route-tab
                exact
                name="3"
                to="/user"
              >推广分享</q-route-tab>
              <q-route-tab
                exact
                name="4"
                to="/user"
              >消息公告</q-route-tab>
              <q-route-tab
                exact
                name="5"
                to="/user"
              >任务中心</q-route-tab>
              <q-route-tab
                exact
                name="6"
                to="/user"
              >我的背包</q-route-tab>
              <q-route-tab
                exact
                name="7"
                to="/user/settings"
              >个人设置</q-route-tab>
            </q-tabs>
          </q-card-section>
        </q-card>

      </div>

      <div class="col-8 q-ml-sm ">
        <!-- <q-page-container> -->
        <router-view />
        <!-- </q-page-container> -->
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      tab: '1',
      value: 71
    }
  }
}
</script>

<style lang="scss" scoped>
// .row > div {
//
//     padding: 10px 15px;
//     // background: rgba(86,61,124,.15);
//     border: 1px solid ;
//
// }
</style>
