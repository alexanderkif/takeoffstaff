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
          Takeoff Staff{{ !!getUser ? ` - ${getUser.name.toUpperCase()}` : '' }}
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
        <q-list class="">
          <q-item
            v-for="nav in navs"
            :key="nav.title"
            clickable v-ripple
            :to="nav.link"
            :disable=" getUser || nav.link === '/login' ? false : true "
            exact
            class="q-pa-md"
            >
            <q-item-section avatar>
              <q-icon :name="nav.icon" />
            </q-item-section>

            <q-item-section class="text-h6">{{ nav.title }}</q-item-section>
          </q-item>
        </q-list>
        <q-separator class="q-mb-lg" />
        <div class="text-center">
          <div class="bg-primary text-white text-h6 q-pa-sm">Quick Login</div>
          <LoginForm />
        </div>
      </div>
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

import LoginForm from '../components/LoginForm'

export default {
  name: 'MainLayout',
  components: {
    LoginForm
  },
  data () {
    return {
      leftDrawerOpen: false,
      navs: navsData
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
