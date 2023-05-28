<template>
  <div class="forFlex">
    <div class="header">
      <div class="container">
        <div class="header__logo">
          <img
            src="../assets/images/logo.svg"
            alt="Logo"
            class="header__logo-img"
          />
          <p class="header__logo-text">Gachi <span>Chat</span></p>
        </div>
      </div>
    </div>
    <div class="registr__window">
      <div class="registr">
        <img src="../assets/images/cup.svg" alt="Cup" class="registr__img" />
        <div class="registr__text">
          <div class="registr__title">Регистрация</div>
          <div class="registr__subtitle">Введите данные по форме ниже</div>
        </div>
        <form action="#" class="registr__form">
          <label>Имя пользователя*</label>
          <input
            class="form__name"
            :class="borderLogin"
            type="text"
            placeholder="Введите имя пользователя"
            v-model="dataLogin"
            required
          />
          <label>Пароль*</label>
          <div class="form__password">
            <input
              class="form__password-outline"
              :class="{border :   v$.dataPassword.$error}"
              :type="typeInput"
              placeholder="Введите пароль"
              v-model="v$.dataPassword.$model"
              required
            />
            <img
              class="form__password-img"
              src="../assets/images/eye.svg"
              alt="Eye"
              @click="showYourPass"
            />
          </div>
          <label> Повторите пароль*</label>
          <div class="form__password">
            <input
              class="form__password-outline"
              :class="{border :   v$.dataPasswordDouble.$error}"
              :type="typeInput"
              placeholder="Введите пароль"
              v-model="v$.dataPasswordDouble.$model"
              required
            />
        
            <img
              class="form__password-img"
              src="../assets/images/eye.svg"
              alt="Eye"
              @click="showYourPass"
            />
          </div>
          <label>E-mail*</label>
          <input
            class="form__email"
            :class="borderEmail"
            type="email"
            placeholder="Введите E-mail"
            v-model="dataEmail"
            required
          />
          <div class="form__info">
            <p class="form__info__text">
              Нажимая кнопку «Зарегистрироваться» вы даёте согласие на
              <span class="form__info-red"
                >обработку своих персональных данных</span
              >
            </p>
          </div>
          <button class="form__btn" type="button" @click="registr">
            Зарегистрироваться
          </button>
          <p class="form__text">
            Есть аккаунт?<a href="/auth" class="form__registr"> Войти </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/Api";
import router from "../router";
import { email, required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
  name: "RegistrationView",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      typeInput: "password",
      typeBtn: "submit",
      dataLogin: "",
      dataPassword: "",
      dataPasswordDouble: "",
      dataEmail: "",
      borderPassword: "",
      borderPasswordDouble: "",
      borderLogin: "",
      borderEmail: "",
      border: "",
      validForm: false,
    };
  },
  validations() {
    return {
      dataEmail: { required, email }, // Matches this.firstName
      dataPassword: { required,  minLength: minLength(5)},
      dataPasswordDouble: { required,  minLength: minLength(5)}, // Matches this.lastName
    };
  },
  updated() {
    this.checkValidForm();
  },
  methods: {
    checkValidForm() {
      if (this.dataPassword.length === 0) {
        this.borderPassword = "border";
      } else {
        this.borderPassword = "";
      }
      if (this.dataPasswordDouble.length === 0) {
        this.borderPasswordDouble = "border";
      } else {
        this.borderPasswordDouble = "";
      }

      if (this.dataLogin.length === 0) {
        this.borderLogin = "border";
      } else {
        this.borderLogin = "";
      }
      if (this.dataEmail.length === 0) {
        this.borderEmail = "border";
      } else {
        this.borderEmail = "";
      }
      if (
        this.dataLogin.length !== 0 &&
        this.dataPassword.length !== 0 &&
        this.dataPasswordDouble &&
        this.dataEmail
      ) {
        this.validForm = true;
      } else {
        this.validForm = false;
      }
    },
    showYourPass() {
      if (this.typeInput == "password") {
        this.typeInput = "text";
      } else {
        this.typeInput = "password";
      }
    },
    correctedPasswords() {
      if (
        token &&
        this.validForm &&
        this.dataPassword === this.dataPasswordDouble
      ) {
        //успешно
        // router.push('roles');
      }
      if (this.dataPassword !== this.dataPasswordDouble) {
        alert("Пароли не совпадают");
      }
    },
    registr() {
      if (this.validForm) {
        const api = new Api();
        api
          .registration(this.dataEmail, this.dataLogin, this.dataPassword)
          .then((response) => (response ? router.go(0) : alert("ошибка")))
          .catch((err) => alert(err));
      } else {
        alert("Валидация не пройдена. Проверьте правильность ввода данных.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid red !important;
  border-radius: 0.5rem;
}
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
  border-bottom: 0.063rem solid #f4eeee;
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
      color: #ed5761;
    }
  }
}

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
    color: #404b62;
    margin-top: 0.375rem;
  }

  label {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: #404b62;
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
    border: 0.063rem solid #b5aeae;
    border-radius: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    outline: #827d7d;
    color: #827d7d;

    &::placeholder {
      color: #827d7d;
    }
  }

  &__email {
    padding: 0.625rem 1rem;
    border: 0.063rem solid #b5aeae;
    border-radius: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    outline: #827d7d;
    color: #827d7d;
  }

  &__password {
    display: flex;
    position: relative;

    .form__password-outline {
      width: 90%;
      position: relative;
      padding: 0.625rem 1rem;
      border: 0.063rem solid #b5aeae;
      border-radius: 0.5rem;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
      outline: #827d7d;
      color: #827d7d;
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
    color: #2c3343;
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
    background: #404b62;
    border-radius: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    color: #ffffff;
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
    color: #827d7d;
  }

  &__registr {
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    color: #2c3343;
  }
}
</style>
