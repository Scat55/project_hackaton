<template>
  <div class="openDialog">
    <div class="header">
      <div class="left">
        <img class="logo" :src="logoUrl" />
        <div>
          <h3>{{ title }}</h3>
          <span class="state">печатает...</span>
        </div>
      </div>
      <div class="right">
        <input />
        <img class="find" src="../assets/search.svg" />
      </div>
    </div>
    <div class="dialog_content">
      <div class="msgs">
        <Msg v-for="msg in msgs" 
          :id="msg.id"
          :time-and-date="msg.createAt"
          :sender="msg.role"
          :text="msg.content"
        ></Msg>
      </div>
      <div class="dialog_textfield">
        <input placeholder="Введите сообщение...">
        <button class="msg_button_send">Отправить</button>
      </div>
    </div>
    
  </div>
</template>
<style scoped lang="scss">
.openDialog {
  //display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1500px;
  height: 100%;
  .header {
    margin: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    .left {
      .logo {
        width: 2.5rem;
        //border: 1px solid black;
        border-radius: 2rem;
        height: 2.5rem;
      }
      display: flex;
      flex-direction: row;
      div {
        height: 2.5rem;
        margin-left: 10px;
      }
    }
    .right {
      height: 2.5rem;

      input {
        font-size: large;
        width: 20rem;
        border: 0;
        border-bottom: 1px solid black;
        outline: none;
      }

      .find {
      }
    }
  }

  .dialog_content{
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 7.625rem;
    padding-right: 7.625rem;
    .msgs{
      height: 100%;
      overflow: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: start;
      gap: 1rem;
    }
  
    .dialog_textfield{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.5rem 0.75rem;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 8px;
  
      input{
        box-sizing: border-box;
  
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        gap: 10px;
  
        width: 100%;
        height: 39px;
  
        border: 1px solid #F4EEEE;
      }
  
      .msg_button_send{
        width: 112px;
        height: 39px;
  
        background: #404B62;
        border-radius: 8px;
  
        padding: 10px;
  
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
  
        color: #FFFFFF;
      }
    }
  }

  
}
</style>
<script>
import Api from '@/Api';
import Msg from '@/components/Msg.vue';
//import RoleInfo from '@/components/RoleInfo.vue';
export default {
  data() {
    return {
      title: "Name 1",
      user: "User (You)",
      logoUrl: "../icons/iconRole.svg",
      dialogId: 0,
      props: "",
      msgs: [],
      
    };
  },
  created() {
    
    this.$watch(
      () => this.$route.params,
      () => {
        this.load();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  components:{
    Msg,
    
  },
  methods: {
    load() {
      this.dialogId = this.$route.params.id;
      console.log(this.dialogId);
      const api = new Api();
      api.Msgs.Get(this.dialogId).then((result) => {
        this.msgs=result
      }).catch((err) => {

      });
      this.msgs = [
        // { id: 0, text: "I want you to act as a real estate agent. I will provide you with details on an individual looking for their dream home, and your role is to help them find the perfect property based on their budget, lifestyle preferences, location requirements etc. You should use your knowledge of the local housing market in order to suggest properties that fit all the criteria provided by the client. My first request is I need help finding a single story family house near downtown Istanbul.", timeAndDate: Date.now(), sender: this.user, urlLogo: this.logoUrl},
        // { id: 1, text: "Привет, нормально, а ты?", timeAndDate: Date.now(),sender: this.title, urlLogo: this.logoUrl}
      ]
    },
  },
};
</script>
