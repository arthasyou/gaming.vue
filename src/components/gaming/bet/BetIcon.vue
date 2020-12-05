<template>
  <div>
    <q-btn
      :outline="!selected"
      :disable="!is_available"
      style="min-height:58px; width:100%;"
      color="secondary"
      @click="bet"
    >
      <div
        v-if="flag === 'left'"
        class="row justify-between items-center q-pr-md text-subtitle1 text-white text-weight-bold"
        style="width:100%;"
      >
        <div class="col-1">
          <q-img
            :src="logo"
            style="width: 30px;"
          />
        </div>
        <div class="col-8 text-left q-ml-md">
          {{ name }}
        </div>
        <q-icon
          v-if="is_locked"
          name="lock"
        />
        <div
          v-else
          class="col-1"
        >
          {{ odds }}
        </div>

      </div>
      <div
        v-else
        class="row justify-between items-center q-pl-sm text-subtitle1 text-white text-weight-bold"
        style="width:100%;"
      >
        <q-icon
          v-if="is_locked"
          name="lock"
        />
        <div
          v-else
          class="col-1"
        >
          {{ odds }}
        </div>

        <div class="col-8 text-right">
          {{ name }}
        </div>
        <div class="col-1 q-mr-sm">
          <q-img
            :src="logo"
            style="width: 30px;"
          />
        </div>
      </div>
    </q-btn>
  </div>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BetIcon',
  props: {
    id: {
      type: Number,
      required: true
    },
    is_available: {
      type: Boolean,
      default: false
    },
    is_locked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    odds: {
      type: Number,
      default: ''
    },
    min: {
      type: Number,
      default: ''
    },
    max: {
      type: Number,
      default: ''
    },
    logo: {
      type: String,
      default: ''
    },
    flag: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState('gaming', [
      'bills'
    ]),

    selected () {
      let bill = this.bills.find(x => {
        return x.id === this.id
      })
      if (bill) {
        return true
      }
      return false
    }
  },

  methods: {
    bet () {
      // this.$emit('bet', null)
      this.$emit('bet', {
        id: this.id,
        winner: this.name,
        odds: this.odds,
        min: this.min,
        max: this.max
      })
    }
  }
}
</script>
