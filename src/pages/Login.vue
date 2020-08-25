<template>
  <q-page class="flex flex-center">
    <div>
      <LoginForm />
      <div class="text-caption">
        For demo use name = User1 and password = Password1
      </div>
    </div>
  </q-page>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  created () {
    console.log('Login')
  }
}
</script>
