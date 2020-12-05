<template>

  <q-splitter
    v-model="insideModel"
    unit="px"
    horizontal
    separator-class="bg-dark"
  >

    <template
      v-slot:before
      style="width:920px;"
    >
      <q-tabs
        v-model="tab"
        inline-label
        indicator-color="info"
        align="left"
        class="shadow-2 q-px-md"
      >
        <q-tab
          name="today"
          label="今日"
        >
          <div class="text-h6 text-info q-ml-xs">{{ currentGame.today }}</div>
        </q-tab>
        <q-tab
          name="roll"
          label="滚盘"
        />
        <q-tab
          name="pre_match"
          label="赛前"
        >
          <div class="text-h6 text-info q-ml-xs">{{ currentGame.early }}</div>
        </q-tab>
        <q-tab
          name="champion"
          label="冠军"
        />
        <q-tab
          name="down"
          label="已结束"
        />
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-list style="min-width:920px;">
        <MatchBet
          v-for="match in matchs"
          v-bind="match"
          :key="match.id"
          @bet="bet"
        />
      </q-list>
    </template>
  </q-splitter>

</template>

<script>
import MatchBet from 'components/gaming/bet/MatchBet.vue'
import { mapState } from 'vuex';

export default {
  name: 'Match',
  components: { MatchBet },

  computed: {
    ...mapState('gaming', [
      'activeGameId',
      'games',
      'matchs'
    ]),

    currentGame () {
      return this.games.find(item => {
        return item.id === this.activeGameId
      })
    }

  },

  data () {
    return {
      insideModel: 50,
      tab: 'today',

    }
  },

  methods: {
    bet () {
      this.$emit('bet')
    },



  },

}
</script>
