<script>
    import RoleItem from '@/components/RoleItem.vue';

    export default {

        data(){
            return{
                roles: [
                    {
                        id: 001,
                        imgUrl: "public/icons/iconRole.svg",
                        name: "Роль 1"
                    },
                    {
                        id: 002,
                        imgUrl: "public/icons/iconRole.svg",
                        name: "Роль 2"
                    },
                    {
                        id: 003,
                        imgUrl: "public/icons/iconRole.svg",
                        name: "Роль 3"
                    },
                    {
                        id: 004,
                        imgUrl: "public/icons/iconRole.svg",
                        name: "Роль 4"
                    },
                    {
                        id: 005,
                        imgUrl: "public/icons/iconRole.svg",
                        name: "Роль 5"
                    },
                ]
            };
        },

        components: {
            RoleItem,
        }
    }
</script>

<template>
    <div class="roles">
        <div class="roles_header">
            <span class="header_top">Добро пожаловать в GachiChat!</span>
            <span class="header_bottom">Выберете собеседника или создайте своего</span>
        </div>
        <div class="roles_grid">
            <ul class="roles_list">
                <li v-for="role in roles">
                    <RoleItem
                        :id="role.id"
                        :imgUrl="role.imgUrl"
                        :name="role.name"
                    ></RoleItem>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped lang="scss">

    .roles{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 8px;

        position: absolute;
        width: 826px;
        height: 551px;
        left: 690px;
        top: 242px;

        .roles_header{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 14px;
            gap: 16px;

            width: 538px;
            height: 107px;


            .header_top{
                width: 510px;
                height: 39px;

                font-family: 'Inter';
                font-style: normal;
                font-weight: 900;
                font-size: 32px;
                line-height: 39px;
                
                color: #000000;
            }

            .header_bottom{
                width: 375px;
                height: 24px;

                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;

                color: #413E3E;
            }
        }

        .roles_grid{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px;
            gap: 16px;

            width: 826px;
            height: 436px;

            
        }
    }

</style>