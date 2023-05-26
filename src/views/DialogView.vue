<template>
  <div class="openDialog">
    <div class="header">
      <img class="logo" />
      <span class="state"></span>
      <div class="find"></div>
    </div>
    <div class="msgs">
        
    </div>
  </div>
</template>
<style scoped lang="scss">
.openDialog {
  .header {
  }
}
</style>
<script>
export default {
  data() {
    return {
     dialogId:0,
     props:"",
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      
      this.dialogId = api.getById(this.$route.params.id)[0];
    
    }
    ,
}

}
</script>
