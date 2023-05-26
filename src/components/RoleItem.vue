<script>
    export default {
        props: ["id", "imgUrl", "name", "onClick"],
    };
</script>

<template>
    <div class="roleItem" :id="id" :on-click="onClick">
        <div class="role_image">
            <img :src="imgUrl">
        </div>
        <span class="role_name">{{name}}</span>
    </div>
</template>

<style scoped lang="scss">
    .roleItem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
        gap: 6px;

        width: 146px;
        height: 124px;

        border-radius: 8px;

        .role_image{
            width: 56px;
            height: 56px;

            img{

            }
        }

        .role_name{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0px;
            gap: 4px;

            width: 50px;
            height: 19px;      
        }
    }
</style>