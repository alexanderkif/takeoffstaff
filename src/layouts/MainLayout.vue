<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Takeoff Staff{{ !!getUser ? ` - Welcome, ${getUser.name.toUpperCase()}` : '' }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1 flex items-center"
    >
      <div class="full-width">
        <div class="text-center">
          <div class="bg-primary text-white text-h6 q-pa-sm">Menu</div>
        </div>
        <MainNav />
        <q-separator class="q-mb-lg" />
        <QuickLogin />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div v-show="waiting" class="fullscreen flex flex-center bg-white" style="opacity: 0.5;">
      <q-spinner-hourglass
        v-show="waiting"
        color="purple"
        size="3rem"
        style="opacity: 1;"
      />
    </div>
  </q-layout>
</template>

<script>
import MainNav from '../components/MainNav'
import QuickLogin from '../components/QuickLogin'

export default {
  name: 'MainLayout',
  components: {
    MainNav,
    QuickLogin
  },
  data () {
    return {
      leftDrawerOpen: false,
      waiting: false
    }
  },
  created () {
    this.$root.$on('startAsync', () => { this.waiting = true })
    this.$root.$on('stopAsync', () => { this.waiting = false })
  },
  beforeDestroy () {
    this.$root.$off('startAsync', () => { this.waiting = true })
    this.$root.$off('stopAsync', () => { this.waiting = false })
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
