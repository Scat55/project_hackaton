<template>
  <div class="app" id="app">
    <chat v-if="isAuth" />
    <router-view />
  </div>
</template>

<script>
import chat from './components/v-chat.vue';
import router from './router';
import signIn from './views/SignInView.vue';
import Api from './Api';

export default {
  name: 'app',
  components: {
    chat,
    signIn,
  },
  data() {
    return {
      isAuth: false,
      upd: 0,
    };
  },

  created() {
    const api = new Api();

    if (api.checkToken()) {
      this.isAuth = true;
    }
    router.beforeEach(async (to, from) => {
      if (
        // make sure the user is authenticated
        !this.isAuth &&
        // ❗️ Avoid an infinite redirect
        !(to.name === 'auth' || to.name === 'registration')
      ) {
        // redirect the user to the login page
        router.push('auth');
      } else if (
        // make sure the user is authenticated
        this.isAuth &&
        // ❗️ Avoid an infinite redirect
        (to.name === 'auth' || to.name === 'registration')
      ) {
        router.push({ name: 'roles' });
      }
    });
  },
};
</script>

<style lang="scss">
body{
  overflow: hidden;
}
@font-face {
  font-family: Inter;
  /* Гарнитура шрифта */
  src: url('./assets/fonts/Inter.ttf');
}

* {
  padding: 0;
  margin: 0;
  font-family: Inter;
  ::-webkit-scrollbar{
    width: 0;
  }
}

.app {
  display: flex;
  width: 100%;
  height: 100vh;

}
</style>
