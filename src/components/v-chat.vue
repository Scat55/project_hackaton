<template>
  <div hidden class="PremuimM">
    <PremiumModal v-if="isShowPremiumModal" :onHide="hidePremiumModal"></PremiumModal>
  </div>
  <div id="chat">
    <aside class="aside">
      <div>
        <button class="aside__btn" @click="addNewDialog">
          <img class="aside__btn-plus" src="../assets/images/plus.svg" alt="Plus" />Новый чат
        </button>
        <ul>
          <DialogItem
            :onClick="chooseDialog"
            v-for="dialog in dialogs"
            :id="dialog.id"
            :name="dialog.name"
            :state="dialog.state"
          >
          </DialogItem>
        </ul>
      </div>
      <div class="aside__text">
        <lk v-if="isShowLk" :onHide="hideLkWindow" />
        <DialogWindowDeleteAllChat
          v-if="isShowDialogDeleteAll"
          :onHide="hideDeleteAllDialogs"
        ></DialogWindowDeleteAllChat>
        <!-- <p class="aside__text-delete" @click="showDeleteAllDialogs">
          <img src="../assets/images/trash.svg" alt="Trach" />Удалить все чаты
        </p> -->
        <p class="aside__text-LK" @click="showLkWindow">
          <img src="../assets/images/lk.svg" alt="Trach" />Личный кабинет
        </p>
        <p class="aside__text-logOut" @click="logOut">
          <img src="../assets/images/log-out.svg" alt="Trach" />Выйти
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
import Api from '@/Api';
import router from '@/router';
import DialogWindowDeleteAllChat from './dialogWindowDeleteAllChat.vue';
import DialogItem from './dialogItem.vue';
import Lk from './lk.vue';
import PremiumModal from '@/components/PremiumModal.vue';
export default {
  name: 'chat',

  created() {
    const api = new Api();

    this.$watch(
      () => this.$route.params,
      () => {
        api.Dialogs.GetAll().then((result) => {
          api.User.Get().then((responses) => {
            if (!responses.premium) {
              setTimeout(() => {
                this.showPremiumModal();
              }, 5 * 1000);
            }
          });

          this.dialogs = result;
        });
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true },
    );
  },
  data() {
    return {
      isShowDialogDeleteAll: false,
      dialogs: [],
      isShowLk: false,
      isShowPremiumModal: false,
    };
  },
  methods: {
    showPremiumModal() {
      this.isShowPremiumModal = true;
    },
    hidePremiumModal() {
      this.isShowPremiumModal = false;
    },
    chooseDialog(e) {
      const dialogId = e;
      router.push({ name: 'openDialog', params: { id: dialogId } });
    },
    hideDeleteAllDialogs() {
      this.isShowDialogDeleteAll = false;
    },
    showDeleteAllDialogs() {
      this.isShowDialogDeleteAll = true;
    },
    addNewDialog() {
      router.push({ name: 'roles' });
    },
    logOut() {
      const api = new Api();
      api.logOut();
    },
    hideLkWindow() {
      this.isShowLk = false;
    },
    showLkWindow() {
      this.isShowLk = true;
    },
  },
  components: { DialogWindowDeleteAllChat, DialogItem, Lk, PremiumModal },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.PremuimM {
  top: 0;
  display: flex;
}
.chat {
  display: flex;
}

.aside {
  ul {
    overflow: auto;
    height: 60vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #161515;
  width: 15.875rem;
  height: 100vh;
  color: #fff;
  padding-top: 1rem;

  &__btn {
    display: flex;
    align-items: center;
    width: 80%;
    background-color: transparent;
    color: #fff;
    border: 0.063rem solid #fff;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5rem;
    border-radius: 0.5rem;
    padding: 0.625rem;
    margin-left: 0.625rem;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 2rem;
    &:hover {
      transform: scale(1.04);
    }

    &-plus {
      margin-right: 0.625rem;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    padding: 0.625rem;
    margin-left: 0.625rem;

    &-delete {
      display: flex;
      align-items: center;
      gap: 0.938rem;
      border-top: 1px solid #302e2e;
      padding-top: 1.25rem;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.188rem;
      cursor: pointer;
    }
    &-LK {
      display: flex;
      align-items: center;
      gap: 0.938rem;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.188rem;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
    &-logOut {
      display: flex;
      align-items: center;
      gap: 0.938rem;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.188rem;
      margin-bottom: 1.25rem;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
