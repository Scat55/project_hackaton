<script>

</script>

<template>
    <div class="premium_modal">
        <div class="bg">
            <div class="premium_content">
                <div class="title">
                    <span class="premium">Премиум </span><span class="gachi">Gachi </span><span class="chat">Chat</span>
                    <button class="close"><img src="../assets/images/close.svg"></button>
                </div>
                <div class="text">
                    <span>Оформите подписку и получите полный доступ к Правильному Чату</span>
                </div>
                <div class="cards">
                    <div class="level1">
                        <span class="big_span">3</span>
                        <span class="medium_span">месяца</span>
                        <span class="price">169 р</span>
                    </div>
                    <div class="level2">
                        <span class="big_span">6</span>
                        <span class="medium_span">месяцев</span>
                        <span class="price">359 р</span>
                    </div>
                    <div class="level1">
                        <span class="big_span">1</span>
                        <span class="medium_span">год</span>
                        <span class="price">699 р</span>
                    </div>
                </div>
                <div class="buttons">
                    <button class="subscribe">Подключить</button>
                    <button class="subscribe">Подключить</button>
                    <button class="subscribe">Подключить</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

    .premium_modal{
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        left: 210px;
        top: 186px;
        .bg{
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

            .premium_content{
                z-index: 999;
                padding: 1rem;
                background-color: #F4EEEE;
                border-radius: 0.3rem;
                width: 968px;
                height: 713px;
                

                .title{
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    padding: 0px;
                    gap: 1.75rem;
                    height: 4.813rem;

                    .premium{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 900;
                        font-size: 4rem;
                        line-height: 4.813rem;
                        text-align: right;

                        color: #161515;
                    }
                    .gachi{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 900;
                        font-size: 4rem;
                        line-height: 4.183rem;
                        text-align: right;

                        color: #2C3343;
                    }
                    .chat{
                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 900;
                        font-size: 4rem;
                        line-height: 4.183rem;
                        text-align: right;

                        color: #ED5761;
                    }

                    .close{

                    }
                }

                .text{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 900;
                    font-size: 24px;
                    line-height: 29px;

                    

                    color: #404B62;
                }

                .cards{
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    padding: 12px 0px;
                    gap: 64px;

                    .level1{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 24px;
                        gap: 24px;

                        width: 264px;
                        height: 320px;

                        /* Hovered */

                        background: #F4EEEE;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;

                        .big_span{

                        }
                    }

                    .level2{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 24px;
                        gap: 24px;

                        width: 264px;
                        height: 320px;

                        background: #ED5761;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;

                    }
                }

                .buttons{
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    padding: 12px 0px;
                    gap: 64px;
                    
                    button{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: flex-start;
                        padding: 24px;
                        width: 264px;
                        height: 49px;
                        background: #ED5761;
                        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;

                        font-family: 'Inter';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 24px;
                        line-height: 29px;
                        /* identical to box height */

                        text-align: right;

                        /* Backgraund */

                        color: #FFFFFF;

                    }
                }
            }
        }
    }

</style>