<template>
  <q-splitter
    v-model="insideModel"
    unit="px"
    horizontal
    separator-class="bg-dark"
  >

    <template v-slot:before>
      <q-tabs
        v-model="tab"
        no-caps
        class="shadow-2"
        indicator-color="info"
        narrow-indicator
      >
        <q-tab name="bill">
          <div class="row items-center justify-start">
            <div class="text-subtitle1 text-weight-bold">投注单</div>
            <div
              v-if="billCount > 0"
              class="bg-red q-ml-xs"
              style="width:20px; heigth:10px; border-radius: 40%;"
            >{{ billCount }}</div>
          </div>

        </q-tab>
        <q-tab name="record">
          <div class="text-subtitle1 text-weight-bold">投注记录</div>
        </q-tab>
      </q-tabs>
    </template>

    <template v-slot:after>
      <BetBill />
    </template>
  </q-splitter>
</template>

<script>
import BetBill from 'components/gaming/bill/BetBill.vue'
import { mapState } from 'vuex';

export default {
  name: 'Bill',
  components: { BetBill },

  computed: {
    ...mapState('gaming', [
      'bills'
    ]),

    billCount () {
      return this.bills.length
    }
  },

  data () {
    return {
      insideModel: 50,
      tab: 'bill',

    }
  },

  methods: {
    bet () {
      this.$emit('bet')
    }
  },

}
</script>
