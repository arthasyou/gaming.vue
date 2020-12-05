<template>

  <q-item
    clickable
    class="justify-between items-center"
  >
    <div>
      <q-img
        :src="game_logo"
        style="width: 24px;"
      />
    </div>
    <div
      class=" text-center q-mx-md "
      style="width:60px"
    >
      {{ timeDisplay(start_time) }}
    </div>
    <div
      class=" text-center q-mr-md"
      style="width:130px"
    >
      {{ match_name }}
    </div>
    <div
      class=" text-center "
      style="width:calc(50% - 100px);"
    >
      <BetIcon
        v-bind="leftTeam"
        @bet="bet"
        flag="left"
      />
    </div>
    <div
      class=" q-mx-sm text-center text-h5"
      style="width:134px"
    >
      <div class="row justify-between">
        <div class="q-pl-md">
          1
        </div>
        <div class="">
          --
        </div>
        <div class="q-pr-md">
          2
        </div>

      </div>
    </div>
    <div
      class=" text-center"
      style="width:calc(50% - 100px);"
    >
      <BetIcon
        v-bind="rightTeam"
        @bet="bet"
        flag="right"
      />
      <!-- <q-btn
        outline
        style="min-height:58px; width:100%;"
        class="  "
      >
        <div
          class="row justify-between items-center q-pl-md"
          style="width:100%;"
        >
          <div class="col-1">
            1.76
          </div>
          <div class="col-8 text-right">
            Team Heretics

          </div>
          <div class="col-1">
            <q-img
              alt="game logo"
              src="dota.svg"
              style="width: 30px;"
            />
          </div>

        </div>
      </q-btn> -->
    </div>
    <div class=" bg-accent q-ml-sm">
      <q-btn style="width:50px; height:50px;">
        {{ bets_count }}
      </q-btn>
    </div>

  </q-item>

</template>

<script>
import BetIcon from 'components/gaming/bet/BetIcon.vue'
import { mapActions } from 'vuex';

export default {
  name: 'MatchBet',
  components: { BetIcon },

  props: {
    match_id: {
      type: Number,
      required: true
    },
    game_id: {
      type: Number,
      required: true
    },
    game_logo: {
      type: String,
      required: true
    },
    match_name: {
      type: String,
      required: true
    },
    round: {
      type: Number,
      required: true
    },
    start_time: {
      type: Number,
      required: true
    },
    bets_count: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      required: true
    },
    live_url: {
      type: String,
      required: true
    },
    teams: {
      type: Array,
      required: true
    },
    segments: {
      type: Object,
      required: true
    }

  },

  computed: {
    leftTeam () {
      return this.team(1)
    },
    rightTeam () {
      return this.team(2)
    },
    vs () {
      return this.leftTeam.name + " -VS- " + this.rightTeam.name
    }
  },

  data () {
    return {
      betIcon: {
        is_lock: false,
        title: 'Team1',
        icon: 'dota.svg',
        odds: '1.23'
      }
    }
  },

  methods: {
    ...mapActions('gaming', ['selectBill']),

    bet (team) {
      team.round = "全场"
      team.time = "赛前"
      team.vs = this.vs

      this.selectBill(team)

    },

    timeDisplay (timestamp) {
      let m = moment.unix(timestamp)
      return m.fromNow()
    },

    team (pos) {
      let team = this.teams.find(x => {
        return x.pos === pos
      })
      let bet = this.segments.gameplays.bets.find(x => {
        return x.team_id === team.id
      })
      team.odds = bet.odds
      team.is_available = bet.is_available
      team.is_locked = bet.is_locked
      team.min = bet.limit_min
      team.max = bet.limit_max
      return team
    }

  }
}
</script>
