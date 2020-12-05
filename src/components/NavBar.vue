<template>
  <div>
    <q-toolbar
      style="height: 70px; min-width:1000px;"
      class="bg-dark-2"
    >
      <router-link :to="{ path: '/' }">
        <q-img
          src="~/assets/img/logo.svg"
          width="136px"
        />
      </router-link>

      <q-space />
      <q-btn
        stretch
        flat
        label="电竞"
        to="/gaming"
      />
      <q-btn
        stretch
        flat
        label="优惠活动"
      />
      <q-btn
        stretch
        flat
        label="玩法规则"
      />
      <q-btn
        stretch
        flat
        label="代理"
      />
      <q-btn
        stretch
        flat
        label="手机版/App"
      />

      <q-space
        v-for="n in 9"
        :key="n"
      />

      <q-btn
        stretch
        flat
        label="个人中心"
        to="/user"
      />
      <q-btn
        flat
        stretch
        icon="local_post_office"
        q-pl-xl
      />

      <Auth v-if="!detail.sessionId" />
      <!-- <q-btn
        v-if="!userDetails.userId"
        stretch
        flat
        label="登入"
        to="/auth"/> -->
      <q-btn-dropdown
        v-else
        stretch
        flat
        label="玩家名字"
      >
        <q-list>
          <q-item-label header>个人中心</q-item-label>
          <q-item
            v-for="n in 3"
            :key="`y.${n}`"
            clickable
            v-close-popup
            tabindex="0"
            @click="logoutUser"
          >
            <q-item-section avatar>
              <q-avatar
                icon="assignment"
                color="primary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>退出账号</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </div>

</template>



<script>
import { mapState, mapActions } from 'vuex';
import Auth from 'components/auth/Auth.vue'

export default {
  name: 'NavBar',

  components: { Auth },

  computed: {
    ...mapState('user', ['detail'])
  },

  methods: {
    ...mapActions('user', ['logoutUser']),

    logout () {
      this.userLogout()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
