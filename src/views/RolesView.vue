<script>
    import RoleItem from '@/components/RoleItem.vue';

    export default {

        data(){
            return{
                roles: [
                    {
                        id: 1,
                        imgUrl: "./icons/iconRole.svg",
                        name: "Роль 1"
                    },
                    {
                        id: 2,
                        imgUrl: "./icons/iconRole.svg",
                        name: "Роль 2"
                    },
                    {
                        id: 3,
                        imgUrl: "./icons/iconRole.svg",
                        name: "Роль 3"
                    },
                    {
                        id: 4,
                        imgUrl: "./icons/iconRole.svg",
                        name: "Роль 4"
                    },
                    {
                        id: 5,
                        imgUrl: "./icons/iconRole.svg",
                        name: "Роль 5"
                    },
                    {
                        id: 6,
                        imgUrl: "./icons/iconRole.svg",
                        name: "Роль 6"
                    },
                    {
                        id: 7,
                        imgUrl: "./icons/iconRole.svg",
                        name: "Роль 7"
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
    <div class="content">

   
    <div class="roles">
        <div class="roles_header">
            <span class="header_top">Добро пожаловать в GachiChat!</span>
            <span class="header_bottom">Выберете собеседника или создайте своего</span>
        </div>
        
            <ul class="roles_list">
                <li v-for="role in roles">
                    <RoleItem
                        :id="role.id"
                        :imgUrl="role.imgUrl"
                        :name="role.name"
                    ></RoleItem>
                </li>
                <li>
                    <div class="add_roleItem" :on-click="addRole">
                        <img src="/icons/iconPlus.svg">
                    </div>
                </li>
            </ul>
        
    </div>
</div>

</template>

<style scoped lang="scss">
.content{ 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;


}
    .roles{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        gap: 0.5rem;


        
        
        

        .roles_header{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.875rem;
            gap: 1rem;

            
            height: 6.688rem;


            .header_top{
                
                height: 2.438rem;

                font-family: 'Inter';
                font-style: normal;
                font-weight: 900;
                font-size: 2rem;
                line-height: 2.438rem;
                
                color: #000000;
            }

            .header_bottom{
                
                height: 1.5rem;

                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-size: 1.25rem;
                line-height: 1.5rem;

                color: #413E3E;
            }
        }

        .roles_list{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
            max-width: 52rem;
            padding: 1rem;
            gap: 1rem;
            //row-gap: 1rem;
            
            

            li{
                list-style: none;
            }

            .add_roleItem{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: #827D7D;

                width: 9.125rem;
                height: 7.75rem;

                border-radius: 0.5rem;

                border: 1px solid #B5AEAE;
                filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

                
            }

            .add_roleItem:hover{
                background: #635F5F;
            }
        }
    }

</style>