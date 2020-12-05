<template>
  <q-item
    clickable
    class="row"
    :active="activeId === id"
    @click="actItem"
    active-class="my-menu-link"
  >
    <!-- <q-item-section> -->
    <div
      v-if="activeId === id"
      class="bg-primary q-mr-md"
    >
      &nbsp
    </div>
    <div
      v-else
      class=" q-mr-md"
    >
      &nbsp
    </div>
    <!-- </q-item-section> -->

    <q-item-section>
      <q-img
        :src="logo"
        style="max-width: 20px;"
      />
    </q-item-section>

    <q-item-section>
      {{ name }}
    </q-item-section>

    <q-item-section side>
      {{ total }}
    </q-item-section>
  </q-item>

</template>

<script>
export default {
  name: 'BetLink',
  props: {
    id: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    total: {
      type: Number,
      default: 0
    },

    logo: {
      type: String,
      default: ''
    },

    activeId: {
      type: Number,
      required: true
    },

  },

  data () {
    return {

    }
  },

  methods: {
    actItem () {
      this.$emit('actItem', this.id);
    }
  }
}
</script>

<style lang="scss">
.my-menu-link {
  color: white;
  background: #33373c;
}
</style>
