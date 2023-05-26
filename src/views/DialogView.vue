<template>
  <div class="openDialog">
    <div class="header">
      <div class="left">
        <img class="logo" :src="logoUrl" />
        <div>
          <h3>{{ title }}</h3>
          <span class="state">печатает...</span>
        </div>
      </div>
      <div class="right">
        <input />
        <img class="find" src="../assets/search.svg" />
      </div>
    </div>
    <div class="msgs">
        
    </div>
  </div>
</template>
<style scoped lang="scss">
.openDialog {
  width: 100%;
  max-width: 1500px;
  height: 100%;
  .header {
    margin: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    .left {
      .logo {
        width: 2.5rem;
        //border: 1px solid black;
        border-radius: 2rem;
        height: 2.5rem;
      }
      display: flex;
      flex-direction: row;
      div {
        height: 2.5rem;
        margin-left: 10px;
      }
    }
    .right {
      height: 2.5rem;

      input {
        width: 20rem;
        border: 0;
        border-bottom: 1px solid black;
        outline: none;
      }

      .find {
      }
    }
  }
}
</style>
<script>
import Msg from '@/components/Msg.vue';
export default {
  data() {
    return {
      title: "Name 1",
      logoUrl: "./icons/iconRole.svg",
      dialogId: 0,
      props: "",
      msgs: [
        { id: 0, text: "example", date: Date.now() },
        { id: 2, text: "example 2", date: Date.now() },
      ],
    };
  },
  created() {
    this.load();
  },
  components:{
Msg
  },
  methods: {
    load() {
      this.dialogId = this.$route.params.id;
      console.log(this.dialogId);
    },
  },
};
</script>
