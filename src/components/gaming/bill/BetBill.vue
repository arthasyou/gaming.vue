<template>
  <q-splitter
    v-model="insideModel"
    reverse
    unit="px"
    horizontal
    separator-class="bg-dark"
  >
    <template v-slot:before>
      <q-list class="q-mt-sm">
        <BillDetail
          v-for="bill in bills"
          :key="bill.id"
          v-bind="bill"
        />
      </q-list>
    </template>

    <template v-slot:after>
      <div v-if="bills.length > 0 ">
        <q-separator
          color="info"
          inset
        />
        <q-card
          flat
          class="q-mt-xs"
        >
          <q-card-section>
            <div v-if="!changing">
              <div class="row justify-center text-h6">
                <span class="q-mr-sm">
                  最高返还
                </span>
                <span class="text-warning">
                  {{ maxWin }}
                </span>
              </div>
              <q-btn
                style="width:100%;"
                class=" text-center q-mt-md"
                :disable="totalBet === 0 ? true : false"
                :color="totalBet === 0 ? 'dark' : 'info'"
              >
                <div class="text-h6 text-weight-bold">
                  <span class="q-mr-sm">投注</span>
                  <span v-if="totalBet !== 0 ">¥{{ totalBet }}</span>
                </div>
              </q-btn>
            </div>
            <div v-else>
              <div class="row justify-center text-caption text-warning">
                <span class="q-mr-sm">
                  您所选投注项的盘口、赔率或有效性已经产生变化
                </span>

              </div>
              <q-btn
                style="width:100%;"
                class="text-center q-mt-md"
                color="red"
                @click="acceptChange"
              >
                <div class="text-h6 text-weight-bold">
                  <span class="q-mr-sm">接受赔率变化</span>

                </div>
              </q-btn>
            </div>
            <q-btn
              style="width:100%;"
              class=" text-center q-mt-md"
              color="red"
              @click="test"
            >
              <div class="text-h6 text-weight-bold">
                清除列表
              </div>
            </q-btn>

          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-splitter>
</template>

<script>
import BillDetail from 'components/gaming/bill/BillDetail.vue'
import { mapState, mapActions } from 'vuex';
export default {
  name: 'BetBill',

  components: { BillDetail },

  computed: {
    ...mapState('gaming', [
      'bills',
      'bets'
    ]),

    maxWin () {
      let total = 0
      let bill = {}
      this.bets.forEach(x => {
        bill = this.bills.find(e => {
          return e.id === x.id
        })
        total += x.betVal * (bill.odds + 1)
      })
      return total
    },

    totalBet () {
      let total = 0
      this.bets.forEach(x => {
        total += x.betVal
      })
      return total
    },
  },

  data () {
    return {
      insideModel: 200,
      changing: false
    }
  },

  watch: {
    bills (newBill, oldBill) {
      if (newBill !== oldBill) {
        if (newBill.length === oldBill.length) {
          this.changing = true
        }
      }
    }
  },

  methods: {
    ...mapActions('gaming', [
      'clearBill',
      'test'
    ]),

    acceptChange () {
      this.changing = false
    }
  }


}
</script>
