<template>

  <q-card
    square
    class="my-card bg-dark-1 q-mx-xs q-mb-xs"
  >
    <q-card-section class="text-subtitle1">
      <div class="row justify-between items-center">
        <div class="col">
          <span class="q-mr-xs">获胜者</span>
          <span>{{ winner }}</span>
        </div>
        <div class="col text-right">
          <span class="text-info">
            @{{ odds }}
          </span>
          <q-btn
            dense
            flat
            icon="clear"
            @click="deleteBill(id)"
          />
        </div>
      </div>
      <div class="row">
        <span class="q-mr-xs">
          {{ round }}
        </span>
        <span>
          {{ time }}
        </span>
      </div>
      <div class="row">
        {{ vs }}
      </div>
      <div class="row justify-between items-center">
        <div class="">
          <span class="q-mr-xs">
            预计返还
          </span>
          <span class="text-warning">
            {{ bet*(odds+1) }}
          </span>
        </div>
        <div class="">
          <!-- <q-select
            dense
            filled
            v-model="bet"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            type="number"
            :min="min"
            :max="max"
            placeholder="请输入金额"
            :options="options"
            style="width: 140px;"
          >
          </q-select> -->
          <q-input
            v-model.number="bet"
            @blur="betValid"
            outlined
            square
            mask="####"
            prefix="¥"
            dense
            placeholder="请输入金额"
            :hint="hint"
            style="width:120px;"
          >
          </q-input>
        </div>
      </div>

    </q-card-section>

  </q-card>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BetDetail',
  props: {
    id: {
      type: Number,
      required: true
    },
    winner: {
      type: String,
      required: true
    },
    odds: {
      type: Number,
      required: true
    },
    round: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    vs: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },

  computed: {
    hint () {
      return "金额" + this.min + "~" + this.max
    }
  },

  data () {
    return {
      bet: null,
      options: [
        100, 500, 1000
      ]
    }
  },

  methods: {
    ...mapActions('gaming', [
      'preBet',
      'deleteBill'
    ]),
    xxx (value) {
      // if (value < this.min) {
      //   setTimeout(() => {
      //     this.bet = this.min
      //   }, 100)
      // } else if (value > this.max) {
      //   setTimeout(() => {
      //     this.bet = this.max
      //   }, 100)
      // }
    },
    betValid () {
      if (this.bet === null || this.bet === '') { }
      else if (this.bet < this.min) {
        this.bet = this.min
      } else if (this.bet > this.max) {
        this.bet = this.max
      }
      this.preBet({
        id: this.id,
        betVal: this.bet
      })
    }
  }
}
</script>
