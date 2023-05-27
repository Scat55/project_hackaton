<script>

</script>

<template>
    <div class="premium_modal">
        <div class="bg">
            <div class="premium_content">
                <div class="title">
                    <span class="premium">Премиум </span><span class="gachi">Gachi </span><span class="chat">Chat</span>
                    <button class="close"><img></button>
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
                    <div class="level3">
                        <span class="big_span">1</span>
                        <span class="medium_span">год</span>
                        <span class="price">699 р</span>
                    </div>
                </div>
                <div>
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
                }
            }
        }
    }

</style>