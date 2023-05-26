<template>
    <div class="newRole">
        <div class="back"></div>
        <div class="box">
            
            <div class="header">
                <img class="logo"/>
                <input type="text" class="title" placeholder="title">
            </div>
            <div class="text">
                <textarea placeholder="promt">
                    текст
                  </textarea>
            </div>
            <div class="footer">
                <button>Добавить</button>
            </div>
        </div>
        <div class="back"></div>
    </div>
</template>
<style scoped lang="scss">
.newRole{
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    .back{
        position: absolute;
        z-index: 998;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(99, 96, 88, 0.995592) 0.01%, #636058 0.02%, rgba(99, 96, 88, 0.748786) 99.94%, rgba(99, 96, 88, 0.699808) 99.95%, rgba(99, 96, 88, 0.679206) 99.96%, rgba(99, 96, 88, 0) 99.97%, rgba(99, 96, 88, 0.471145) 99.98%, rgba(99, 96, 88, 0.408333) 99.99%);
    }
    .box{
        z-index: 999;
        padding: 1rem;
        background-color: white;
        border-radius: 0.3rem;
    }
}
</style>