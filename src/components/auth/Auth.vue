<template>
  <div class="">
    <q-btn
      label="登入"
      stretch
      flat
      @click="dialog = true"
    />
    <q-dialog v-model="dialog">
      <q-card style="width: 400px">
        <q-card-section>
          <q-tabs
            v-model="tab"
            dense
            align="justify"
            narrow-indicator
          >
            <q-tab
              name="login"
              label="登入"
            />
            <q-tab
              name="register"
              label="注册"
            />
          </q-tabs>
        </q-card-section>

        <q-separator />

        <q-tab-panels
          v-model="tab"
          animated
        >
          <q-tab-panel name="login">
            <login-register
              :tab="tab"
              @closeDialog="closeDialog"
            />
          </q-tab-panel>

          <q-tab-panel name="register">
            <login-register
              :tab="tab"
              @closeDialog="closeDialog"
            />
          </q-tab-panel>

        </q-tab-panels>
        <!-- <q-card-section>
          <div class="text-h6">Small</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions> -->
      </q-card>
    </q-dialog>
  </div>

</template>

<script>


export default {
  // name: 'ComponentName',
  components: {
    'login-register': require('components/LoginRegister.vue').default
  },

  data () {
    return {
      dialog: false,
      tab: 'login'
    }
  },

  methods: {
    closeDialog () {
      this.dialog = false;
    }
  }
}
</script>
