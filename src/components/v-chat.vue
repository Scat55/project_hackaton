<template>
  <div id="chat">
    <aside class="aside">
      <button class="aside__btn">
        <img class="aside__btn-plus" src="../assets/images/plus.svg" alt="Plus">Новый чат
      </button>

      <div class="aside__text">
        <p class="aside__text-delete"><img src="../assets/images/trash.svg" alt="Trach">Удалить чат</p>
        <p class="aside__text-logOut"><img src="../assets/images/log-out.svg" alt="Trach">Выйти</p>
      </div>
    </aside>

  </div>
</template>

<script>

export default {
  name: 'chat',

  data() {
    return {

    }
  }
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
  width: 286px;
  height: 100vh;
  color: #fff;
  padding-top: 16px;


  &__btn {
    display: flex;
    align-items: center;
    width: 80%;
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    border-radius: 8px;
    padding: 10px;
    margin-left: 10px;
    outline: none;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      transform: scale(1.04);
    }

    &-plus {
      margin-right: 10px;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    margin-left: 10px;

    &-delete {
      display: flex;
      align-items: center;
      gap: 15px;
      font-weight: 400;
      font-size: 18px;
      line-height: 19px;
    }

    &-logOut {
      display: flex;
      align-items: center;
      gap: 15px;
      font-weight: 400;
      font-size: 18px;
      line-height: 19px;
      margin-bottom: 20px;
    }
  }


}
</style>