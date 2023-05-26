<template>
  <div class="forFlex">
    <div class="header">
      <div class="container">
        <div class="header__logo">
          <img src="../assets/images/logo.svg" alt="Logo" class="header__logo-img">
          <p class="header__logo-text">Gachi <span>Chat</span></p>
        </div>
      </div>
    </div>

    <div class="signin__window">

      <div class="signin">
        <img src="../assets/images/cup.svg" alt="Cup" class="registr__img" />
        <div class="signin__text">
          <div class="signin__title">Войдите в аккаунт</div>
          <div class="signin__subtitle">Введите логин и пароль в форме ниже</div>
        </div>

      <form action="#" class="signin__form">
        <label>Имя</label>
        <input class="form__name" type="text" placeholder="Введите имя пользователя" v-model="dataLogin">
        <label>Пароль*</label>
        <div class="form__password">
          <input class="form__password-outline" :type="typeInput" placeholder="Введите пароль" v-model="dataPassword"
            required>
          <img class="form__password-img" src="../assets/images/eye.svg" alt="Eye" @click="showYourPass">
        </div>
        <a href="#" class="form__link">Восстановить пароль</a>

        <button class="form__btn" type="button" @click="auth">Войти</button>
        <p class="form__text">Нет аккаунта?<a href="/registration" class="form__registr"> Зарегистрироваться </a></p>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/Api';
import router from '../router';

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
    },
    auth() {
      const api = new Api();
      const data = api.login(this.dataLogin, this.dataPassword);
      
      data.then(response => router.go(0)).
      catch(err=>  alert(err));
    
    }
  }
}
</script>

<style lang="scss" scoped>
.forFlex {
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
}

.container {
  max-width: 94.5rem;
  padding: 0 12.75rem;
  margin: 0 auto;
}

.header {
  height: 2.75rem;
  border-bottom: 0.063rem solid #F4EEEE;
  padding-bottom: 0.5rem;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 0.313rem;
  margin-top: 0.5rem;

  &-img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &-text {
    display: flex;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 1.813;

    span {
      color: #ED5761;
    }
  }
}

.signin__window {
  height: 100vh;
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
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #404B62;
    margin-top: 0.375rem;
  }

  label {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #404B62;
    margin-top: 0.75rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  .form {
    &__name {
      padding: 0.625rem 1rem;
      border: 0.063rem solid #B5AEAE;
      border-radius: 0.5rem;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
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
        padding: 0.625rem 1rem;
        border: 0.063rem solid #B5AEAE;
        border-radius: 0.5rem;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        outline: #827D7D;
        color: #827D7D;
      }

      &-img {
        position: absolute;
        top: 0.875rem;
        right: 0.625rem;
        cursor: pointer;
      }
    }

    &__link {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      text-decoration: none;
      color: #2C3343;
      margin-top: 0.875rem;
      margin-bottom: 2.125rem;
    }

    &__btn {
      width: 20.313rem;
      height: 2.75rem;
      padding: 0.625rem 1rem;
      background: #404B62;
      border-radius: 0.5rem;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: center;
      color: #FFFFFF;
      outline: none;
      cursor: pointer;
      border: none;
    }

    &__text {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      margin-top: 1rem;
      text-align: center;
      color: #827D7D;
    }

    &__registr {
      text-decoration: none;
      font-size: 1rem;
      line-height: 1.5rem;
      text-align: center;
      color: #2C3343;

    }
  }

}
</style>