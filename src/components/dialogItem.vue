<template>
  <div class="dialogItem" :class="isActive ?? active" :id="id">
    <img src="/icons/iconRole.svg" @click="Cl"/>
    <div class="text" @click="Cl">
      <h4>{{ name }}</h4>
      <label>{{ status }}</label>
    
    </div>
    <img class="trash" @click="deleteD" src="@/assets/images/trash.svg" alt="">
  </div>
</template>
<script>
import Api from '@/Api';
import router from '@/router';

export default {
  data() {
    return {
    };
  },
  props: ["id", "name", "status", "isActive","onClick"],
  created() {
    sessionStorage.setItem("dialog" + this.id, this.name);
 
  },
  methods:{
    Cl(){
      this.onClick(this.id)
;    },
    deleteD() {
    const api  = new Api();
    api.Dialogs.Delete(this.id).then((result) => {
      console.log(result);
      router.push("/");
     // router.go(0);
    }).catch((err) => {
      
    });
    
   
  },
  },
 
  

};
</script>
<style scoped lang="scss">
.dialogItem {
  padding-left: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: white;
  position: relative;
  .text {
    margin-right: 2.5rem;
  }
  &:hover {
    background: #302e2e;
  }
  .trash{
    position: absolute;
    right: 1rem;
    float: right;
    cursor: pointer;
   
  }
}
.active {
  background: #413e3e;
}
</style>
