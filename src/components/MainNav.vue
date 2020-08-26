<template>
  <q-list>
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
  name: 'MainNav',
  data () {
    return {
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
