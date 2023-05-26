<template>
  <div class="registr__window">
    <div class="registr">
      <div class="registr__text">
        <div class="registr__title">Регистрация</div>
        <div class="registr__subtitle">Введите данные по форме ниже</div>
      </div>
      <form action="#" class="registr__form">
        <label>Имя пользователя*</label>
        <input class="form__name" type="text" placeholder="Введите имя пользователя" v-model="dataLogin" required>
        <label>Пароль*</label>
        <div class="form__password">
          <input class="form__password-outline" :type="typeInput" placeholder="Введите пароль" v-model="dataPassword"
            required>
          <img class="form__password-img" src="../assets/images/eye.svg" alt="Eye" @click="showYourPass">
        </div>
        <label> Повторите пароль*</label>
        <div class="form__password">
          <input class="form__password-outline" :type="typeInput" placeholder="Введите пароль"
            v-model="dataPasswordDouble" required>
          <img class="form__password-img" src="../assets/images/eye.svg" alt="Eye" @click="showYourPass">
        </div>
        <label>E-mail*</label>
        <input class="form__email" type="email" placeholder="Введите E-mail" v-model="dataEmail" required>
        <div class="form__info">
          <p class="form__info__text">Нажимая кнопку «Зарегистрироваться» вы даёте согласие на <span
              class="form__info-red">обработку своих персональных данных</span>
          </p>
        </div>
        <button class="form__btn" :type="typeBtn" @click="correctedPasswords">Зарегистрироваться</button>
        <p class="form__text">Есть аккаунт?<a href="/auth" class="form__registr"> Войти </a></p>

      </form>
    </div>
  </div>
</template>

<script>
import Api from '@/Api';
import router from '../router'

export default {
  name: 'RegistrationView',

  data() {
    return {
      typeInput: 'password',
      typeBtn: 'submit',
      dataLogin: '',
      dataPassword: '',
      dataPasswordDouble: '',
      dataEmail: ''
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
    correctedPasswords() {
      const api = new Api();
      const token = api.login(this.dataLogin, this.dataPassword);
      if (token) {
        //успешно
        router.push("roles");
      }
      if (this.dataPassword !== this.dataPasswordDouble) {
        this.typeBtn = 'button'
        alert("Пароли не совпадают")
      }


    }
  }
}
</script>

<style lang="scss" scoped>
.registr__window {
  height: 100vh;
  width: 100vw;
  display: flex;
}

.registr {
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

  &__email {
    padding: 0.625rem 1rem;
    border: 0.063rem solid #B5AEAE;
    border-radius: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    outline: #827D7D;
    color: #827D7D;
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

  &__info {
    max-width: 20rem;
    height: 3rem;
    margin-top: 0.875rem;
    margin-bottom: 3rem;

    &-red {
      color: red;
      cursor: pointer;
    }
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
</style>