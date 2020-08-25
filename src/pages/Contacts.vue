<template>
  <q-page class="flex flex-center">
    Contacts
  </q-page>
</template>

<script>
export default {
  name: 'Contacts',
  created () {
    if (!this.getUser) this.$router.push('/login')
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
