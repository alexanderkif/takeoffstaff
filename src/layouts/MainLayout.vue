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
          Takeoff Staff
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
      <q-list class="full-width">
        <q-item
          v-for="nav in navs"
          :key="nav.title"
          clickable v-ripple
          :to="nav.link"
          :disable=" user || nav.link === '/login' ? false : true "
          exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section class="text-h6">{{ nav.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const navsData = [
  {
    title: 'Contacts',
    icon: 'contacts',
    link: '/'
  },
  {
    title: 'Sign in',
    icon: 'login',
    link: '/login'
  }
]

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      leftDrawerOpen: false,
      navs: navsData
    }
  },
  created () {
    // this.$root.user = { name: 'Saha' }
  },
  computed: {
    user () {
      return this.$root.user
    }
  }
}
</script>
