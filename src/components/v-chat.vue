<template>
  <div id="chat">
    <aside class="aside">
      <button class="aside__btn">
        <img class="aside__btn-plus" src="../assets/images/plus.svg" alt="Plus">Новый чат
      </button>

      <div class="aside__text">
        <p class="aside__text-delete"><img src="../assets/images/trash.svg" alt="Trach">Удалить все чаты</p>
        <p class="aside__text-logOut" @click="logOut"><img src="../assets/images/log-out.svg" alt="Trach">Выйти</p>
      </div>
    </aside>

  </div>
</template>

<script>
import Api from '@/Api';
import router from '@/router';


export default {
  name: 'chat',

  data() {
    return {

    }
  },
   methods:{
    addNewDialog()
    {

    },
    logOut(){
      const api = new Api();
      api.logOut();
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.chat {
  display: flex;
}

.aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #161515;
  width: 15.875rem;
  height: 100vh;
  color: #fff;
  padding-top: 1rem;


  &__btn {
    display: flex;
    align-items: center;
    width: 80%;
    background-color: transparent;
    color: #fff;
    border: 0.063rem solid #fff;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    border-radius: 0.5rem;
    padding: 0.625rem;
    margin-left: 0.625rem;
    outline: none;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      transform: scale(1.04);
    }

    &-plus {
      margin-right: 0.625rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    padding: 0.625rem;
    margin-left: 0.625rem;


    &-delete {
      display: flex;
      align-items: center;
      gap: 0.938rem;
      border-top: 1px solid #302E2E;
      padding-top: 1.25rem;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.188rem;
      cursor: pointer;
    }

    &-logOut {
      display: flex;
      align-items: center;
      gap: 0.938rem;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.188rem;
      margin-bottom: 1.25rem;
      cursor: pointer;
    }
  }


}
</style>