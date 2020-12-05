<template>
  <q-page>
    <div class="q-mx-xl bg-dark">
      <q-splitter
        v-model="splitterModel"
        unit="px"
        separator-class="bg-dark"
      >

        <template v-slot:before>
          <div class="">
            <q-list>
              <!-- <BetLink /> -->
              <BetLink
                v-for="link in games"
                :key="link.id"
                v-bind="link"
                :activeId="activeGameId"
                @actItem="actItem"
              />
            </q-list>
          </div>
        </template>

        <template v-slot:after>
          <q-splitter
            v-model="splitterModel2"
            unit="px"
            reverse
            separator-class="bg-dark"
            style="height: 93vh"
          >
            <template v-slot:before>
              <router-view @bet="bet" />
            </template>

            <template v-slot:after>
              <Bill />
            </template>
          </q-splitter>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import BetLink from 'components/gaming/bet/BetLink.vue'
import Bill from 'components/gaming/Bill.vue'

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'Gaming',
  components: { BetLink, Bill },

  computed: {
    ...mapState('gaming', [
      'activeGameId',
      'games'
    ]),

    ...mapGetters('gaming', [
      'match_list'
      // { matchs: 'match_list' }
      // { games: 'channel_config' }
    ])
  },

  mounted () {
    this.getGameList()
    // this.getMatchList()
  },

  data () {
    return {
      splitterModel: 210, // start at 50%
      splitterModel2: 350,
      insideModel: 50
    }
  },

  methods: {
    ...mapActions('gaming', [
      'getMatchList',
      'getGameList'
    ]),

    ...mapMutations('gaming', [
      'setActiveGameId'
    ]),

    bet () {
      console.log(222);
    },
    actItem (id) {
      this.setActiveGameId(id)
    }

  },
}
</script>

<style lang="scss">
</style>
