<template>
  <div class="openDialog">
    <div class="header">
      <div class="left">
        <img class="logo" :src="logoUrl" />
        <div>
          <h3>{{ title }}</h3>
          <span class="state">{{ status }}</span>
        </div>
      </div>
      <!-- <div class="right">
        <input />
        <img class="find" src="../assets/search.svg" />
      </div> -->
    </div>
    <div class="dialog_content">
      <div class="msgs" id="gadmsgs" ref="list">
        <Msg
          v-for="msg in msgs"
          :id="msg.id"
          :timeAndDate="msg.createdAt"
          :sender="msg.role"
          :text="msg.content"
          :GptName="title"
        ></Msg>
      </div>
      <div class="dialog_textfield">
        <input placeholder="Введите сообщение..." v-model="msgText" />
        <button @click="newMsg" class="msg_button_send">Отправить</button>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "@/Api";
import Msg from "@/components/Msg.vue";
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
      msgText: "",
      status:"Загрузка диалога"
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.load();
        this.title = sessionStorage.getItem("dialog" + this.dialogId);
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  components: {
    Msg,
  },
  updated() {
  
    const list = this.$refs.list;
    list.scrollTop = list.scrollHeight;
  },
  methods: {
    load() {
      this.status="Загрузка диалога";
      this.dialogId = this.$route.params.id;
      console.log(this.dialogId);
      const api = new Api();
      api.Dialogs.GetById(this.dialogId).then((response) => {
        this.title = response.name;
      });
      api.Msgs.Get(this.dialogId)
        .then((result) => {
          this.msgs = result;
          this.status = ""
        })
        .catch((err) => {});
    },
    newMsg() {
      if (this.msgText) {
        this.status = "Генерируем ответ"
        const list = this.$refs.list;
        list.scrollTop = list.scrollHeight;
        this.msgs.push({ role: "user", content: this.msgText });
        const api = new Api();
        api.Msgs.New(this.dialogId, this.msgText)
          .then((result) => {
          
            this.msgs.push({ role: "assistent", content: result });
            this.status = ""
            console.log(this.$refs.list);
          })
          .then(() => {
            const list = this.$refs.list;
            list.scrollTop = list.scrollHeight;
          })

          .catch((err) => {});
        this.msgText = "";
      }
    },
  },
};
</script>
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

  .dialog_content {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 7.625rem;
    padding-right: 7.625rem;
    .msgs {
      height: 100%;
      overflow: auto;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: start;
      gap: 1rem;
      color: black;
    }

    .dialog_textfield {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.5rem 0.75rem;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 8px;

      input {
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px;
        gap: 10px;

        width: 100%;
        height: 39px;

        //
        border: 0;
        border-bottom: 1px solid gray;
        outline: none;
      }

      .msg_button_send {
        width: 112px;
        height: 39px;

        background: #404b62;
        border-radius: 8px;

        padding: 10px;

        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;

        color: #ffffff;
      }
    }
  }
}
</style>
