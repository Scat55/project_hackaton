<script>
export default {
  props: ['role', 'onHide', 'onOpen'],
  methods: {
    cancel() {
      this.onHide();
    },
    open(e) {
      this.onOpen(e);
    },
  },
};
</script>

<template>
  <div class="role_info">
    <div class="back"></div>
    <div class="box">
      <div class="header">
        <img class="logo" src="/icons/iconRole.svg" />
        <span type="text" class="title">{{ role.name }}</span>
      </div>
      <div class="text">
        <span>{{ role.value }}</span>
      </div>
      <div class="footer">
        <button :id="role.id" @click="open">Создать чат</button>

        <button @click="cancel">Отмена</button>
      </div>
    </div>
    <div class="back"></div>
  </div>
</template>

<style scoped lang="scss">
.role_info {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  .back {
    position: absolute;
    z-index: 998;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(99, 96, 88, 0.995592) 0.01%,
      #636058 0.02%,
      rgba(99, 96, 88, 0.748786) 99.94%,
      rgba(99, 96, 88, 0.699808) 99.95%,
      rgba(99, 96, 88, 0.679206) 99.96%,
      rgba(99, 96, 88, 0) 99.97%,
      rgba(99, 96, 88, 0.471145) 99.98%,
      rgba(99, 96, 88, 0.408333) 99.99%
    );
  }
  .box {
    z-index: 999;
    padding: 1rem;
    background-color: white;
    border-radius: 0.3rem;
    max-width: 50rem;
    .header {
      display: flex;
      align-items: center;
      width: 40rem;
      margin-bottom: 1rem;
      .logo {
        margin: 0;
        padding: 0;
        display: inline-block;
        height: 2rem;
        width: 2rem;
      }
      span {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 38rem;
      }
    }
    .text {
      margin-bottom: 1rem;

      span {
        height: 20rem;

        width: 100%;
      }
    }
    .footer {
      display: flex;
      flex-direction: row-reverse;
      gap: 1rem;

      button {
        color: white;
        background: #404b62;
        border-radius: 0.4rem;
        padding: 0.7rem;
        cursor: pointer;
        border: none;
        transition: all 0.3s;

        &:hover {
          box-shadow: 0 0 10px 1px #404b62;
        }
      }
    }
  }
}
</style>
