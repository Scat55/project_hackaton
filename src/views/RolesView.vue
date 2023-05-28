<script>
import RoleItem from "@/components/RoleItem.vue";
import router from "../router";

import Api from "@/Api";
import NewRole from "@/components/newRole.vue";
import RoleInfo from "@/components/RoleInfo.vue";
export default {
  data() {
    return {
      isShowNewRoles: false,
      showRoleInfo: false,
      roles: [],
      choosenRole: null,
      premium:false
    };
  },
  methods: {
    hideAddRoleDialog() {
      this.isShowNewRoles = false;
    },
    showAddRoleDialog(e) {
      if(this.premium)
      this.isShowNewRoles = true;
      else
      alert("Доступно с Premium")
    },
    createDialog(e) {
      const idRole = e.target.id;
      const api = new Api();
      api.Dialogs.Create(idRole)
        .then((result) => {
          router.push({ name: "openDialog", params: { id: result.id } });
        })
        .catch((err) => {});
    },
    openInfo(e) {
      this.showRoleInfo = !this.showRoleInfo;
      if (this.showRoleInfo) {
        this.choosenRole = this.roles.find(
          (role) => role.id == e.currentTarget.id
        );
      } else {
        this.choosenRole = null;
      }
    },
  },
  components: {
    RoleItem,
    NewRole,
    RoleInfo,
  },
  created() {
    const api = new Api();
    api.Roles.Get()
      .then((result) => {
        this.roles.push(...result);
      })
      .catch((err) => {});
  },
};
</script>

<template>
  <div class="content">
    <NewRole v-if="isShowNewRoles" :onHide="hideAddRoleDialog"></NewRole>
    <RoleInfo
      v-if="showRoleInfo"
      :onHide="openInfo"
      :onOpen="createDialog"
      :role="choosenRole"
    ></RoleInfo>
    <div class="roles">
      <div class="roles_header">
        <span class="header_top">Добро пожаловать в GachiChat!</span>
        <span class="header_bottom"
          >Выберете собеседника или создайте своего</span
        >
      </div>

      <ul class="roles_list">
        <li v-for="role in roles" :id="role.id" @click="openInfo">
          <RoleItem :name="role.name"></RoleItem>
        </li>
        <li>
          <div class="add_roleItem" @click="showAddRoleDialog">
            <img src="/icons/iconPlus.svg" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.roles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 0.5rem;

  .roles_header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.875rem;
    gap: 1rem;

    height: 6.688rem;

    .header_top {
      height: 2.438rem;

      font-family: "Inter";
      font-style: normal;
      font-weight: 900;
      font-size: 2rem;
      line-height: 2.438rem;

      color: #000000;
    }

    .header_bottom {
      height: 1.5rem;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.5rem;

      color: #413e3e;
    }
  }

  .roles_list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 60rem;
    padding: 1rem;
    gap: 1rem;
    //row-gap: 1rem;
    max-height: 19rem;
    overflow: auto;

    li {
      list-style: none;
    }

    .add_roleItem {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #827d7d;
      padding: 0.75rem;
      gap: 0.375rem;

      width: 9.125rem;
      height: 7.75rem;

      border-radius: 0.5rem;

      border: 1px solid #b5aeae;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      cursor: pointer;
    }

    .add_roleItem:hover {
      background: #635f5f;
    }
  }
}
</style>
