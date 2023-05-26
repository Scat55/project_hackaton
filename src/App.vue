<template>
  <div class="app" id="app">
    <chat v-if="isAuth" />
    <router-view />
  </div>
</template>

<script>
import chat from "./components/v-chat.vue";
import router from "./router";
import signIn from "./views/SignInView.vue";

export default {
  name: "app",
  components: {
    chat,
    signIn,
  },
  data() {
    return {
      isAuth: false,
    };
  },
  created() {
    const data = localStorage.getItem("token");
    console.log(data);
    if (data) {
      this.isAuth = true;
    }
   
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: Inter;
  /* Гарнитура шрифта */
  src: url("./assets/fonts/Inter.ttf");
}

* {
  padding: 0;
  margin: 0;
  font-family: Inter;
}

.app {
  display: flex;
  width: 100%;
  height: 100vh;
}
</style>
