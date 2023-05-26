<template>
  <div class="msg" :id="id">
    <div class="header">
      <img class="logo" :src="urlLogo" />
    </div>
    <div class="content">{text}</div>
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
export default {
  props: ["id", "text", "urlLogo"],
};
</script>
