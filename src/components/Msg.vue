<template>
  <div class="msg" :id="id">
    <div class="logo">
      <img :src="urlLogo">
    </div>
    <div>
      <div class="msg_header">
        <span class="sender_name">{{sender}}</span>
        <span class="time">{{time}}</span>
      </div>
      <div class="msg_content">{{text}}</div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
  .msg{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.5rem;
    gap: 0.5rem;

    .logo{
      flex-shrink: 0;
      flex-grow: 0;
      width: 2rem;
      height: 2rem;

      img{
        width: 100%;
        height: 100%;
      }
    }

    .msg_header{
      display: flex;
      flex-direction: row;
      align-items: start;
      padding: 0px;
      gap: 0.5rem;
      
      height: 1rem;

      .sender_name{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;

        color: #2C3343;
      }

      .time{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;

        color: #413E3E;
      }
    }

    .msg_content{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #161515;
    }
  }
</style>

<script>
export default {
  props: ["id", "sender","text", "urlLogo", "timeAndDate", ],

  data(){
    return{
      date: null,
      time: null,
    }
  },
  created(){
    //TODO: починить формат
    
    const dT = new Date(this.timeAndDate)
    this.date = dT.getDay()+"."+dT.getMonth()+"."+dT.getFullYear();
    this.time = dT.getHours()+":"+dT.getMinutes();
    console.log(this.date)
  },
  methods: {

  }
};


</script>
