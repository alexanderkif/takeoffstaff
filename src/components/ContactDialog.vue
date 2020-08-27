<template>
  <q-card style="min-width: 20rem">
    <q-card-section class="row bg-primary text-white items-center">
      <span class="text-h6">{{ contactName ? `Edit ${contactName}` : 'Fill in the fields' }}</span>
    </q-card-section>
    <q-card-section>
      <q-input
        v-if="!contactName"
        ref="name"
        filled
        v-model="name"
        label="Name *"
        :rules="[
          val => !!val || '* Required',
          val => /^[а-яёa-z\s0-9]*$/i.test(val) || 'Unacceptable symbols',
          val => val.length > 2 || 'Minimum 3 characters'
        ]"
        :readonly="contactName ? true : false"
      />
      <q-input
        ref="phone"
        filled
        v-model="phone"
        label="Phone *"
        mask="# (###) ### - ####"
        fill-mask
        hint="Mask: # (###) ### - ####"
        :rules="[
          val => !!val || '* Required',
          val => val.slice(17, 18) !== '_' || 'Fill all numbers'
        ]"
      />
      <q-input
        ref="email"
        v-model="email"
        filled
        type="email"
        hint="Email"
        :rules="[
          val => !val || /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(val) || 'Invalid email'
        ]"
        lazy-rules
      />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat rounded label="Cancel" color="primary" v-close-popup />
      <q-btn rounded :color="contactName ? 'warning' : 'positive'" text-color="white"
      :label="contactName ? 'Edit' : 'Add'" @click="updateContact" v-close-popup="isValid" />
    </q-card-actions>
  </q-card>
</template>

<script>

export default {
  name: 'ContactDialog',
  props: {
    contactName: String,
    contactEmail: String,
    contactPhone: String
  },
  data () {
    return {
      name: this.contactName || '',
      email: this.contactEmail || '',
      phone: this.contactPhone || '',
      isValid: false
    }
  },
  methods: {
    updateContact () {
      const contact = {}
      if (this.contactName) {
        contact.name = this.contactName
      } else {
        this.$refs.name.validate()
        if (this.$refs.name.hasError) return false
        else contact.name = this.name
      }
      this.$refs.phone.validate()
      this.$refs.email.validate()

      if (this.$refs.phone.hasError || this.$refs.email.hasError) {
        return false
      } else {
        contact.phone = this.phone.split('').filter(d => d.match(/[\d]/)).join('')
        contact.email = this.email
        this.$store.dispatch('user/updateContact', contact)
        this.isValid = true
      }
    }
    // reset () {
    //   if (!this.contactName) this.$refs.name.resetValidation()
    //   this.$refs.name.resetValidation()
    //   this.$refs.name.resetValidation()
    // }
  }
}
</script>
