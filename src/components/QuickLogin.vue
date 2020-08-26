<template>
  <div>
    <div
      class="row text-center justify-center items-center bg-primary text-white text-h6 q-pa-sm"
      @click.stop="openQuickLogin=!openQuickLogin" style="cursor: pointer;"
    >
      <div>Quick Demo Login</div>
      <q-icon name="change_history"
      :class="`q-ml-lg quick-login-icon ${openQuickLogin?'quick-login-icon_rotate':''}`" />
      <q-tooltip content-class="bg-purple" content-style="font-size: 1rem" :offset="[10, 10]">
        Too lazy to enter credentials.
      </q-tooltip>
    </div>
    <div
      :class="`flex justify-center items-end no-wrap quick-login-form ${openQuickLogin?'quick-login-form_scale':''}`">
      <div class="q-my-md row full-width justify-around">
        <q-btn color="primary" label="user1" @click.stop="quickLogin('user1', 'password1')" />
        <q-btn color="primary" label="user2" @click.stop="quickLogin('user2', 'password2')" />
        <q-btn color="primary" label="user3" @click.stop="quickLogin('user3', 'password3')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickLogin',
  data () {
    return {
      openQuickLogin: false
    }
  },
  methods: {
    quickLogin (name, password) {
      this.$store.dispatch('user/loginUser', { name: name, password: password })
        .then(() => this.$router.push('/'))
    }
  }
}
</script>

<style lang="scss" scoped>
.quick-login-icon {
  transform: rotate(180deg);
  transition: transform 0.6s ease-in-out 0s;

  &_rotate {
    transform: rotate(-720deg);
  }
}
.quick-login-form {
  transform: scaleY(0);
  max-height: 0;
  overflow: hidden;
  transition: transform 0.7s ease-in-out 0s, max-height 0.7s ease-in-out 0s;

  &_scale {
    transform: scaleY(1);
    max-height: 5rem;
  }
}
</style>
