<template>
  <div class="signin__window">
    <div class="signin">
      <div class="signin__text">
        <div class="signin__title">Войдите в аккаунт</div>
        <div class="signin__subtitle">Введите логин и пароль в форме ниже</div>
      </div>

      <form action="#" class="signin__form">
        <label>Имя</label>
        <input class="form__name" type="text" placeholder="Введите имя пользователя" :value="dataLogin">
        <label>Пароль*</label>
        <div class="form__password">
          <input class="form__password-outline" :type="typeInput" placeholder="Введите пароль" v-model="dataPassword">
          <img class="form__password-img" src="../assets/images/eye.svg" alt="Eye" @click="showYourPass">
        </div>
        <a href="#" class="form__link">Восстановить пароль</a>
        <button class="form__btn" type="button">Войти</button>
        <p class="form__text">Нет аккаунта?<a href="#" class="form__registr"> Зарегистрироваться </a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInView',
  data() {
    return {
      typeInput: 'password',
      dataLogin: '',
      dataPassword: '',
    }
  },
  methods: {
    showYourPass() {
      if (this.typeInput == 'password') {
        this.typeInput = 'text';
      } else {
        this.typeInput = 'password';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.signin__window {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.signin {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #404B62;
    margin-top: 6px;
  }

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #404B62;
    margin-top: 12px;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  .form {
    &__name {
      padding: 10px 16px;
      border: 1px solid #B5AEAE;
      border-radius: 8px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      outline: #827D7D;
      color: #827D7D;

      &::placeholder {
        color: #827D7D;
      }
    }

    &__password {
      display: flex;
      position: relative;

      .form__password-outline {
        width: 90%;
        position: relative;
        padding: 10px 16px;
        border: 1px solid #B5AEAE;
        border-radius: 8px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        outline: #827D7D;
        color: #827D7D;
      }

      &-img {
        position: absolute;
        top: 14px;
        right: 10px;
        cursor: pointer;
      }
    }

    &__link {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      text-decoration: none;
      color: #2C3343;
      margin-top: 14px;
      margin-bottom: 34px;
    }

    &__btn {
      width: 325px;
      height: 44px;
      padding: 10px 16px;
      background: #404B62;
      border-radius: 8px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #FFFFFF;
      outline: none;
      cursor: pointer;
      border: none;
    }

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-top: 16px;
      text-align: center;
      color: #827D7D;
    }

    &__registr {
      text-decoration: none;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #2C3343;

    }
  }

}
</style>