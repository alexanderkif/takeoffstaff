<template>
  <q-card class="background-panel">
    <q-card-section class="row bg-primary text-white items-center">
      <span class="text-h6">Delete contact {{contactName}}?</span>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat rounded label="Cancel" color="primary" v-close-popup />
      <q-btn rounded label="Delete" @click="deleteContact(contactName)" color="negative" text-color="white" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>

export default {
  name: 'ItemDeleteDialog',
  props: {
    contactName: String
  },
  methods: {
    deleteContact (contactName) {
      this.$store.dispatch('user/deleteContact', contactName)
    }
  }
}
</script>
