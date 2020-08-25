<template>
  <q-page class="flex flex-center">
    Contacts
  </q-page>
</template>

<script>
export default {
  name: 'Contacts',
  created () {
    if (!this.$root.user) this.$router.push('/login')
  }
}
</script>
