<script>
import Api from "@/Api";
import router from "@/router";
export default {
  props: ["onHide"],
  methods: {
    getPremium() {
      const api = new Api();
      api.User.Get()
        .then((result) => {
          api.User.SetPremium(result.id, true).then((response) => {
            router.go(0);
          });
        })
        .catch((err) => {});
    },
  },
};
</script>

<template>
  <div class="premium_modal">
    <div class="bg">
      <div class="premium_content">
        <div class="title">
          <span class="premium">Премиум </span><span class="gachi">Gachi </span
          ><span class="chat">Chat</span>
          <button class="close" @click="onHide">
            <img src="../assets/images/close.svg" />
          </button>
        </div>
        <div class="text">
          <span
            >Оформите подписку и получите полный доступ к Правильному Чату</span
          >
        </div>
        <div class="cards">
          <div>
            <div>
              <h1>3</h1>
              <h2>месяца</h2>
              <h3>169 р</h3>
            </div>
            <button class="subscribe" @click="getPremium">Подключить</button>
          </div>
          <div>
            <div class="red">
              <h1>6</h1>
              <h2>месяца</h2>
              <h3>359 р</h3>
            </div>
            <button class="subscribe" @click="getPremium">Подключить</button>
          </div>
          <div>
            <div>
              <h1>1</h1>
              <h2>год</h2>
              <h3>699 р</h3>
            </div>
            <button class="subscribe" @click="getPremium">Подключить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.premium_modal {
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 998;

  .bg {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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

    .premium_content {
      z-index: 999;
      padding: 1rem;
      background-color: #f4eeee;
      border-radius: 0.3rem;
      width: 60rem;
      height: 40rem;
      position: relative;
      color: #ed5761;
      .title {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 1.75rem;
        height: 4.813rem;

        .premium {
          font-family: "Inter";
          font-style: normal;
          font-weight: 900;
          font-size: 4rem;
          line-height: 4.813rem;
          text-align: right;

          color: #161515;
        }
        .gachi {
          font-family: "Inter";
          font-style: normal;
          font-weight: 900;
          font-size: 4rem;
          line-height: 4.183rem;
          text-align: right;

          color: #2c3343;
        }
        .chat {
          font-family: "Inter";
          font-style: normal;
          font-weight: 900;
          font-size: 4rem;
          line-height: 4.183rem;
          text-align: right;
        }

        .close {
          position: absolute;
          border: none;
          right: 1rem;
          cursor: pointer;
        }
      }

      .text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;

        color: #404b62;
      }

      .cards {
        padding-top: 3rem;
        position: relative;
        display: flex;
        flex-direction: row;
        gap: 2rem;

        div {
          width: 20rem;
          div {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: space-evenly;
            width: 100%;

            height: 20rem;

            /* Hovered */

            background: #f4eeee;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 8px;

            h1 {
              margin: 0 2rem;
              font-size: 6rem;
              padding: 0;
              line-height: 0;
            }
            h2 {
              margin: 0 2rem;
              font-size: 4rem;
              text-align: start;
              padding: 0;
              line-height: 0;
            }
            h3 {
              margin: 0 2rem;
              font-size: 3rem;
              text-align: end;
              padding: 0;
              line-height: 0;
            }
          }

          .red {
            color: white;
            background: #ed5761;
          }
        }

        button {
          width: 100%;
          font-size: 1.5rem;
          margin-top: 3rem;
          padding: 1rem 0;
          border: 0;
          border-radius: 0.5rem;
          background: #ed5761;

          /* identical to box height */

          text-align: center;

          /* Backgraund */

          color: #ffffff;
        }
      }
    }
  }
}
</style>
