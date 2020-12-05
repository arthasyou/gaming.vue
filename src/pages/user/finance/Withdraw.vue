<template>
  <!-- <q-page> -->
  <q-card class="my-card   q-px-xl q-py-lg">
    <q-card-section>
      <div class="row justify-start between">
        <div class="col-5">
          <div class="row justify-start items-center">
            <div class="col-3 text-h6">
              可提余额
            </div>
            <div class="col-3 text-h6 q-ml-lg">
              ¥0.00
            </div>
          </div>
        </div>

        <div class="row justify-start items-center">
          <div class="col-6 text-h6">
            今日提款额度
          </div>
          <div class="col-3 text-h6 q-ml-lg">
            ¥50000.00
          </div>
        </div>
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row justify-start items-start">
        <div class="col-1 text-h6">
          提款金额
        </div>
        <q-input
          class="col-3  q-ml-lg"
          rounded
          outlined
          dense
          v-model="text"
          color="white"
          hint="单笔提款限额为100～50000元"
        />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row justify-start items-center">
        <div class="col-1 text-h6">
          选择银行
        </div>
        <div class="col-5 q-px-md">
          添加银行卡
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row justify-start items-center">
        <div class="col-1 text-h6">
          交易秘密
        </div>
        <div class="col-5 q-px-md">
          添加银行卡
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row justify-start items-center">
        <div class="col-1 text-h6">
          绑定手机
        </div>
        <div class="col-5 q-px-md">
          添加银行卡
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row justify-start items-start">
        <div class="col-1 text-h6">
          手机验证
        </div>
        <div class="col-5 q-px-md">
          <div class="col-5 q-px-md">
            <q-input
              color="grey-3"
              label-color="orange"
              outlined
              v-model="text"
              label="发送验证码"
            >
              <template v-slot:append>
                <q-icon
                  name="event"
                  color="orange"
                />
              </template>
            </q-input>

            <div class="">
              由于您的账号状态异常，需要验证您的身份，请发送手机验证码并填写
              通常您的提款申请只需3-15分钟即可到帐，请您耐心等待。如长时间未到帐，请联系在线客服。
            </div>
            <q-btn
              class="glossy"
              rounded
              color="deep-orange"
              label="下一步"
              style="width: 200px;"
            />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>

  <!-- </q-page> -->
</template>

<script>
export default {
  name: 'Withdraw',
  data () {
    return {


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
