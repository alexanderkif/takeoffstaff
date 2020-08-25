<template>
  <div class="q-pa-md">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <q-input
        ref="name"
        v-model="name"
        filled
        hint="Minimum 3 characters"
        label="Username *"
        counter
        :rules="[
            val => !!val || '* Required',
            val => /^[а-яёa-z]*$/i.test(val) || 'Letters only',
            val => val.length >= 3 || 'Please use minimum 3 characters'
          ]"
        lazy-rules
      />

      <q-input
        ref="password"
        v-model="password"
        filled :type="isPwd ? 'password' : 'text'"
        hint="Minimum 8 characters"
        label="Password *"
        counter
        :rules="[
            val => !!val || '* Required',
            val => /^[а-яёa-z0-9!@#$%^&*]*$/i.test(val) || 'Letters, numbers, symbols only',
            val => val.length >= 8 || 'Please use minimum 8 characters'
          ]"
        lazy-rules
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div class="text-right">
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </form>
  </div>
</template>

<script>
const baseUrl = 'https://my-json-server.typicode.com/alexanderkif/takeoffstaff'
export default {
  name: 'LoginForm',
  data () {
    return {
      name: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    onSubmit () {
      this.$refs.name.validate()
      this.$refs.password.validate()
      if (this.$refs.name.hasError || this.$refs.password.hasError) {
        this.formHasError = true
      } else {
        console.log('onSubmit', this.name, this.password)
        this.fetchUser(this.name, this.password)
      }
    },
    onReset () {
      console.log('onReset')
      this.name = null
      this.password = null
      this.$refs.name.resetValidation()
      this.$refs.password.resetValidation()
    },
    fetchUser (name, password) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, password: password })
      }
      console.log(`${baseUrl}/users`)
      fetch(`${baseUrl}/users`, requestOptions)
        .then(async response => {
          const data = await response.json()
          console.log('fetchUser response', response)

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status
            return Promise.reject(error)
          }

          this.$root.user = data.user
        })
        .catch(error => {
          this.errorMessage = error
          console.error('There was an error!', error)
        })
    }
  }
}
</script>
