<template>
  <div class="dialog" :id="id">
    <img />
    <div>
      <h3>{{ name }}</h3>
      <label>{{ status }}</label>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "name", "status"],
};
</script>
