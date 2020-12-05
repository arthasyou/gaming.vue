<template>
  <q-form
    @submit="submitForm"
    class="q-mx-md"
  >
    <q-input
      v-model="formData.mobile"
      class="q-mb-md"
      label-color="white"
      label="手机号"
    >
    </q-input>
    <q-input
      v-if="tab == 'register'"
      v-model="formData.sms"
      class="q-mb-md"
      label-color="white"
      label="验证码"
    >
      <template v-slot:append>
        <q-btn
          label="获取验证码"
          @click="requestSms"
        />
      </template>
    </q-input>
    <q-input
      v-model="formData.password"
      class="q-mb-md"
      type="password"
      label-color="white"
      label="密码"
    />
    <div class="row">
      <q-btn
        color="primary"
        @click="closeDialog"
        label="关闭"
      />
      <q-space />
      <q-btn
        color="primary"
        type="submit"
        :label="tab"
      />
    </div>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

export default {

  props: ['tab'],

  data () {
    return {
      formData: {
        name: '',
        email: '',
        mobile: '',
        password: '',
        sms: '',
      }
    }
  },

  methods: {
    ...mapActions('user', ['registerUser', 'loginUser', 'getSms']),

    submitForm () {
      if (this.tab == 'login') {
        this.loginUser({
          Phone: this.formData.mobile,
          value: sha256(this.formData.password).toString(Base64),
          type: 'pass',
          channel: 1,
          login_type: this.deviceType()
        });
      }
      else {
        this.registerUser(
          {
            Phone: this.formData.mobile,
            SecurityCode: this.formData.sms,
            Password: sha256(this.formData.password).toString(Base64),
            RegisterChannel: 1
          }
        );
      }
    },

    requestSms () {
      this.getSms({
        mobile: this.formData.mobile,
        type: 'reg'
      })
    },

    closeDialog () {
      this.$emit('closeDialog')
    },

    deviceType () {
      let userAgentInfo = navigator.userAgent;
      let Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          return this.phoneType();
        }
      }
      return 3
    },

    phoneType () {
      let u = navigator.userAgent;
      if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        return 1
      } else if (u.indexOf('iPhone') > -1) {
        return 2
      } else {
        return 4
      }
    }

  }
}
</script>
