<template>
  <div class="deleteAllDi">
    <label>Вы действительно хотите удалить все чаты?</label>
    <div>
      <button id="yes" @click="delete" :on-click="onHide">Да</button>
      <button id="no" @click="onHide">Нет</button>
    </div>
  </div>
</template>
<script>
import Api from "@/Api";
export default {
  props: ["onHide"],
  methods: {
    delete() {
      const api = new Api();
      api.Dialogs.DeleteAll()
        .then((result) => {})
        .catch((err) => {});
    },
  },
  data() {},
};
</script>
<style scoped lang="scss">
.deleteAllDi {
  display: flex;
  color: black;
  width: 100%;
  height: 10rem;
  border-radius: 0.7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  label {
    text-align: center;
  }
  div {
    margin-top: 1rem;
    display: flex;

    gap: 1.188rem;
    button {
      padding: 1rem;
      width: 4rem;
      border-radius: 8px;
    }
    #yes {
      border: 1px solid #ed5761;
      color: #ed5761;
    }
    #no {
      background: #404b62;
      border: 1px solid #404b62;
      color: white;
    }
  }
}
</style>
