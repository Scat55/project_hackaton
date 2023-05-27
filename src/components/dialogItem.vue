<template>
  <div class="dialogItem" :id="id">
    <img src="/icons/iconRole.svg"/>
    <div>
      <h3>{{ name }}</h3>
      <label>{{ status }}печатает...</label>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "name", "status"],
};
</script>
<style scoped lang="scss">
.dialogItem{
    padding-left:1rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    color: white;
    div{

    }
}
</style>

