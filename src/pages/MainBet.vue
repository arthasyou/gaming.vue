<template>
  <q-page class="q-mx-xl">

    <q-tabs
      v-model="tab"
      inline-label
      indicator-color="secondary"
      active-color="secondary"
      align="left"
      class="bg-dark-2 shadow-2 q-px-md"
    >

      <q-tab
        name="today"
        label="今日1"
      />

      <q-tab
        name="roll"
        label="滚盘"
      />
      <q-tab
        name="pre_match"
        label="赛前"
      />
      <q-tab
        name="champion"
        label="冠军"
      />
      <q-tab
        name="down"
        label="已结束"
      />

    </q-tabs>

    <q-list>
      <q-item class="bg-dark-1 row justify-between">

        <q-item-section class="col">
          <q-img
            alt="game logo"
            src="~assets/img/dota.svg"
            style="max-width: 24px;"
          />
        </q-item-section>

        <q-item-section class="col">
          <q-item-label class="">开赛时间</q-item-label>
        </q-item-section>
        <q-item-section class="col">
          <q-item-label>赛事</q-item-label>
          <q-item-label>BO赛制</q-item-label>
        </q-item-section>

        <q-item-section class="col">
          <q-item-label class="">开赛时间</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-btn
            color="secondary"
            outline
            class="bg-accent"
          >
            <q-avatar
              square
              text-color="white"
              size="42px"
            >
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>

            <div class="q-px-md">战队1</div>
            <div>2</div>
          </q-btn>
        </q-item-section>

        <q-item-section class="col text-center">
          <q-item-label class="">1 - 1</q-item-label>
        </q-item-section>

        <q-item-section class="col-2">
          <q-btn
            class="bg-accent"
            color="secondary"
            outline
            disable
          >
            <q-avatar
              square
              text-color="white"
              size="42px"
            >
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>

            <div class="q-px-md">战队2</div>
            <div>2</div>
          </q-btn>
        </q-item-section>

        <q-item-section class="col">
          <q-btn
            class="bg-accent q-ml-xl"
            disable
          >
            +50
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tasks: ['Go to shop', 'Get bnanas', 'Get apples'],
      tab: 'mails'
    }
  }
}
</script>
