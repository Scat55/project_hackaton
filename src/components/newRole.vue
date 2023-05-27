<template>
  <div class="newRole">
    <div class="back"></div>
    <div class="box">
      <div class="header">
        <img class="logo" src="icons/iconRole.svg" />
        <input type="text" class="title" placeholder="title" />
      </div>
      <div class="text">
        <textarea placeholder="promt"> </textarea>
      </div>
      <div class="footer">
        <button @click="saveAndOpen">Сохранить и создать чат</button>
        <button @click="save">Сохранить</button>
        <button @click="cancel">Отмена</button>
      </div>
    </div>
    <div class="back"></div>
  </div>
</template>
<script>
export default{
    props:["onHide"],
    methods:{
        cancel()
        {
        this.onHide();
        },
        save()
        {

        },
        saveAndOpen()
        {

        }
        
    }
}
</script>
<style scoped lang="scss">
.newRole {
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
    .header {
      display: flex;
      width: 40rem;
      margin-bottom: 1rem;
      .logo {
        margin: 0;
        padding: 0;
        display: inline-block;
        height: 2rem;
        width: 2rem;
      }
      input {
        margin: 0;
        padding: 0;
        display: inline-block;
        height: 2rem;
        width: 38rem;
      }
    }
    .text {
      margin-bottom: 1rem;
      textarea {
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
      }
    }
  }
}
</style>
