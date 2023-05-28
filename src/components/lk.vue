<template>
  <div class="person__shadow" v-show="isShow">
    <div class="person">
      <div class="person__img">
        <img class="person__image" src="../assets/images/avatar.svg" alt="PersonAvatar" />
      </div>
      <div class="person__inputs">
        <input class="input__name" placeholder="Введите имя пользователя"  :class="{border : v$.userName.$error}"
        v-model="v$.userName.$model" />
        <input class="input__email" type="email" placeholder="Введите email"  :class="{border : v$.userPassword.$error}"
        v-model="v$.userPassword.$model" />
        <div class="change__pass">
          <input
            class="input__pass"
            type="password1"
            placeholder="Введите новый пароль"
            v-model="userPassword"
          />

          <p class="change__pass-text" @click="changeInfoOfPerson">Сохранить изменения</p>
        </div>
      </div>
      <footer>
        <div class="activePrenium subs" v-if="premium">
          <div class="subs__info">
            <p class="subs__text">Подписка на премиум оформлена успешно</p>
            <!-- <a href="#" class="subs__pay" @click="deletePremium">Отключить</a> -->
          </div>
        </div>
        <div class="subs" v-else>
          <div class="subs__info">
            <p class="subs__text">У вас не оформлена премиум подписка</p>
            <a href="#" class="subs__pay" @click="getPremium">Оформить</a>
          </div>
        </div>
        <div class="person__comeback">
          <img src="../assets/images/arrow-left.svg" alt="Arrow__comeback" class="arrow__img" />
          <p class="person__text" @click="closePerson">Вернуться в диалог</p>
        </div>
        <div class="person__out">
          <img src="../assets/images/log-out.svg" alt="ArrowOut" class="out__img" />
          <p class="person__text" @click="logOut">Выйти</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Api from '@/Api';
import router from '@/router';
import PremiumModal from './PremiumModal.vue';
import { email, required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
  props: ['onHide'],
  components: { PremiumModal },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      isShow: true,
      id: 0,
      userName: '',
      userEmail: '',

      oldName: '',
      oldEmail: '',
      userPassword: '',

      isActive: false,
      premium: false,
    };
  },
  validations() {
    return {
      userName: { required }, // Matches this.firstName
      userEmail: { required, email}, // Matches this.lastName
    };
  },
  beforeCreate() {
    const api = new Api();
    api.User.Get()
      .then((result) => {
        this.id = result.id;
        this.userName = result.name;
        this.userEmail = result.email;
        this.premium = result.premium;

        this.oldName = this.userName;
        this.oldEmail = this.userEmail;
      })
      .catch((err) => {});
  },
  methods: {

    getPremium() {
      const api = new Api();
      api.User.SetPremium(this.id, true).then((response) => {
        router.go(0);
      });
    },
    deletePremium() {
      const api = new Api();
      api.User.SetPremium(this.id, false).then((response) => {
        router.go(0);
      });
    },
    closePerson() {
      this.onHide();
    },
    logOut() {
      const api = new Api();
      api.logOut();
    },
    changeInfoOfPerson() {
      const api = new Api();
      if (this.userEmail.length > 0 && this.userEmail !== this.oldEmail)
        api.User.SetEmail(this.id, this.userEmail).then((result) => {
          alert('Данные сохранены');
        });
      if (this.userName.length > 0 && this.oldName !== this.userName)
        api.User.SetName(this.id, this.userName).then((result) => {
          alert('Данные сохранены');
        });
      if (this.userPassword.length > 0) {
        api.User.SetPassword(this.id, this.userPassword)
          .then((result) => {
            alert('Данные сохранены');
          })
          .catch((err) => {});
        this.userPassword = '';
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
  z-index: 9999;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  background-color: #161515;
  height: 100vh;
  overflow: auto;
  width: 25.188rem;
  position: relative;

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
  footer {
    display: flex;
    flex-direction: column;

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
    display: flex;
    align-items: center;
    margin-left: 4rem;
    gap: 0.813rem;
    border-top: 0.063rem solid #413e3e;
    margin-top: 2.625rem;
    padding-top: 0.75rem;
    font-weight: 400;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.188rem;
    color: #ffffff;

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
  .activePrenium {
    background: #917173;
    button {
      background: #785254;
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

    &:hover img {
      transform: translateX(-5px);
    }
    img {
      transition: all 0.3s;
    }
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
    transition: all 0.3s;
    cursor: pointer;
    &:hover img {
      transform: translateX(-5px);
    }
    img {
      transition: all 0.3s;
    }
  }
}
</style>
