<template>
  <!-- <q-page > -->
  <div class="">
    <q-card class="my-card   q-px-xl q-py-lg">
      <q-card-section>
        <div class="text-h4 q-mb-lg">账户概览</div>
      </q-card-section>

      <div class="row justify-between">
        <q-card
          class="my-card q-pa-lg bg-dark "
          style="width: 500px;"
        >
          <q-card-section class="">
            <div class="row items-center">
              <span>
                <q-icon
                  name="money"
                  style="font-size: 3em;"
                />
              </span>
              <span class="q-ml-sm text-h5">
                主钱包
              </span>
            </div>
            <div class="text-h5 q-mt-md q-ml-sm">
              ¥140.22
            </div>
            <div class="q-mt-xl row justify-between">
              <q-chip>转账</q-chip>
              <q-chip>提现</q-chip>
              <q-chip>充值</q-chip>
              <q-chip>兑换码</q-chip>
            </div>
          </q-card-section>
        </q-card>

        <div
          class=""
          style="width: 50px;"
        />

        <q-card
          class="my-card q-pa-lg bg-dark "
          style="width: 500px;"
        >
          <q-card-section class="">
            <div class="row items-center">
              <span>
                <q-icon
                  name="whatshot"
                  style="font-size: 3em;"
                />
              </span>
              <span class="q-ml-sm text-h5">
                V币
              </span>
            </div>
            <div class="text-h5 q-mt-md q-ml-sm">
              800
            </div>
            <div class="q-mt-xl row justify-between">
              <div class="col">
                <div class="">
                  *可以通过签到等各种任务获取V币
                </div>
                <div class="">
                  *V币可在V币商城兑换物品或投注额度
                </div>
              </div>
              <q-chip class="col-2 text-center">明细</q-chip>
              <q-chip class="col-2">商城</q-chip>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <q-card-section class="q-my-xl">
      </q-card-section>

    </q-card>
  </div>
  <!-- </q-page> -->
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
