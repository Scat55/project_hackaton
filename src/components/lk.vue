<template>
  <div class="person__shadow" v-if="isShow">
    <div class="person">
      <div class="person__img">
        <img class="person__image" src="../assets/images/avatar.svg" alt="PersonAvatar" />
      </div>
      <div class="person__inputs">
        <input
          class="input__name"
          type="text"
          placeholder="Введите имя пользователя"
          :value="userName"
          v-modal="newUserName"
          :readonly="isActive"
        />
        <input
          class="input__email"
          type="email"
          placeholder="Введите email"
          :value="userEmail"
          v-modal="userEmail"
          :readonly="isActive"
        />
        <div class="change__pass">
          <input
            class="input__pass"
            type="password"
            placeholder="Введите пароль"
            :value="userPassword"
            v-modal="userPassword"
            :readonly="isActive"
          />
          <div class="change" @click="test"><img src="../assets/images/pen.svg" alt="" /></div>
          <p class="change__pass-text" @click="changeInfoOfPerson">Сохранить изменения</p>
        </div>
      </div>
      <footer>  <div class="subs">
        <div class="subs__info">
          <p class="subs__text">У вас не оформлена премиум подписка</p>
          <a href="#" class="subs__pay">Оформить</a>
        </div>
      </div>
      <div class="person__comeback">
        <img src="../assets/images/arrow-left.svg" alt="Arrow__comeback" class="arrow__img" />
        <p class="person__text" @click="closePerson">Вернуться в диалог</p>
      </div>
      <div class="person__out">
        <img src="../assets/images/log-out.svg" alt="ArrowOut" class="out__img" />
        <p class="person__text">Выйти</p>
      </div></footer>
    
    </div>
  </div>
</template>

<script>
export default {
  props:["onHide"],
  data() {
    return {
      isShow: true,
      userName: 'Dima',
      newUserName: '',
      userEmail: 'test@mail.ru',
      userPassword: '123',
      isActive: true,
    };
  },
  methods: {
   
    closePerson(){
      this.onHide()
    },
    changeInfoOfPerson() {
    
      console.log(this.userName);
    },
    test() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.person__shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(22, 21, 21, 0.5);
  z-index: 999;
}
.person {
  
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  background-color: #161515;
  height: 100vh;
  overflow: auto;
  width: 25.188rem;
 
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0.75rem 0 0.75rem 0;

    .person__image {
      width: 6.25rem;
      height: 6.25rem;
      border-radius: 50px;
    }
  }
  footer{
    position: absolute;
    bottom: 1rem;
    width: 100%;
    }
  &__inputs {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .input {
    &__name {
      width: 20.688rem;
      height: 2.188rem;
      background: #413e3e;
      border-radius: 0.5rem;
      outline: none;
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.188rem;
    }
    &__email {
      width: 20.688rem;
      height: 2.188rem;
      background: #413e3e;
      border-radius: 0.5rem;
      outline: none;
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.188rem;
    }
    &__info {
      padding: 0.5rem;
      width: 19.188rem;
      height: 23.375rem;
      background: #413e3e;
      border-radius: 0.5rem;
      outline: none;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.188rem;
      resize: none;
    }
  }
  .change {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
  .input__pass {
    width: 20.688rem;
    height: 2.188rem;
    background: #413e3e;
    border-radius: 0.5rem;
    outline: none;
    text-align: center;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.188rem;
  }
  .change__pass {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 2.625rem;

    &-text {
      cursor: pointer;
    }
  }
  .subs {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #635f5f;
    border-radius: 0.5rem;
    width: 16.688rem;
    height: 9.438rem;
    margin: 0 auto;

    &__info {
      text-align: center;
    }

    &__text {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.063rem;
      text-align: center;
      color: #b5aeae;
    }

    &__pay {
      display: inline-block;
      text-decoration: none;
      background-color: #413e3e;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.063rem;
      text-align: center;
      color: #b5aeae;
      padding: 0.5rem;
      margin-top: 1.125rem;
      border-radius: 0.25rem;
    }
  }
  .person__comeback {
    display: flex;
    align-items: center;
    margin-left: 1.688rem;
    gap: 0.813rem;
    border-top: 0.063rem solid #413e3e;
    margin-top: 2.625rem;
    padding-top: 0.75rem;
    font-weight: 400;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.188rem;
    color: #ffffff;
  }
  .person__out {
    display: flex;
    align-items: center;
    margin-left: 1.688rem;
    gap: 0.813rem;
    margin-top: 2.313rem;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.188rem;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
