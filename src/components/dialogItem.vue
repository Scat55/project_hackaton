<template>
  <div class="dialogItem" :class="(isActive)??active" :id="id">
    <img src="/icons/iconRole.svg"/>
    <div>
      <h4>{{ name }}</h4>
      <label>{{ status }}</label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  props: ["id", "name", "status","isActive"],
  created(){sessionStorage.setItem("dialog"+this.id, this.name);},
  methods:{
    
  }
}

;
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
    &:hover{
      background: #302E2E;
    }
}
.active{
  background: #413E3E;
}
</style>

