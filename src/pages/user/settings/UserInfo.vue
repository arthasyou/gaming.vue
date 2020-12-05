<template>
  <!-- <q-page> -->
  <div class="">
    <q-card class="my-card   q-px-xl q-py-lg">
      <q-card-section>
        <div class="row">
          <div class="col">
            <q-uploader
              url="http://localhost:4444/upload"
              style="max-width: 300px"
              label="上传头像"
            />
          </div>
          <div class="col">
            <div class="columns text-center">
              <div class="col">
                头像预览
              </div>
              <div class="col">
                <q-avatar size="60px">
                  <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                </q-avatar>
              </div>
              <div class="col">
                <q-btn
                  class="glossy"
                  rounded
                  color="deep-orange"
                  label="保存头像"
                  style="width: 100px;"
                />
              </div>
            </div>

          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card   q-px-xl q-py-lg">

      <q-card-section>
        <div class="row justify-start items-start">
          <div class="col-1 text-h6">
            昵称
          </div>
          <q-input
            class="col-3  q-ml-lg"
            rounded
            outlined
            dense
            v-model="text"
            color="white"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-start items-start">
          <div class="col-1 text-h6">
            生日
          </div>
          <div class="col-5 q-px-md">
            <q-input
              filled
              v-model="date"
              mask="date"
              :rules="['date']"
            >
              <template v-slot:append>
                <q-icon
                  name="event"
                  class="cursor-pointer"
                >
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-start items-center">
          <div class="col-1 text-h6">
            个性签名
          </div>
          <div class="col-5 q-px-md">
            <q-input
              class="col-3  q-ml-lg"
              rounded
              outlined
              dense
              v-model="text"
              color="white"
            />
          </div>
        </div>
      </q-card-section>

    </q-card>
  </div>

  <!-- </q-page> -->
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      date: '2019/02/01'
    }
  }
}
</script>
