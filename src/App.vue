<template>
  <div class="app">
    <chat />
    <router-view />

  </div>
</template>


<script>
import chat from './components/v-chat.vue'

export default {
  name: 'app',
  components: {
    chat,
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: Inter;
  /* Гарнитура шрифта */
  src: url('./assets/fonts/Inter.ttf');

}

* {
  font-family: Inter;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  display: flex;

}
</style>
