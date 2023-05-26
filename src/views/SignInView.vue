<template>
  <div class="signin__window">
    <div class="signin">
      <div class="signin__text">
        <div class="signin__title">Войдите в аккаунт</div>
        <div class="signin__subtitle">Введите логин и пароль в форме ниже</div>
      </div>

      <form action="#" class="signin__form">
        <label>Имя</label>
        <input class="form__name" type="text" placeholder="Введите имя пользователя">
        <label>Пароль*</label>
        <input class="form__passowrd" type="password" placeholder="Введите пароль">
        <a href="#" class="form__link">Восстановить пароль</a>
        <button class="form__btn">Войти</button>
        <p class="form__text">Нет аккаунта?<strong><a href="#" class="form__registr">Зарегистрироваться</a></strong></p>
      </form>
    </div>
  </div>
</template>

<script setup>

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
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }
}
</style>