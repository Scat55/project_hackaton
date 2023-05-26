<template>
  <div class="openDialog">
    <div class="header">
      <img class="logo" :src="logoUrl" />
      <div>
        <h3>{{ title }}</h3>
        <span class="state">...печатает</span>
      </div>

      <div class="find"></div>
    </div>
    <div class="msgs"></div>
  </div>
</template>
<style scoped lang="scss">
.openDialog {
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    .logo {
      width: 2.5rem;
      border: 1px solid black;
      border-radius: 2rem;
      height: 2.5rem;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      title: "Name 1",
      logoUrl: "",
      dialogId: 0,
      props: "",
      msgs: [{ id: 0, text: "example", date: Date.now() }],
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      this.dialogId = this.$route.params.id;
      console.log(this.dialogId);
    },
  },
};
</script>
