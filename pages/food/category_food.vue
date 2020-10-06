<template>


            <div class="col-lg-12">
                <h3 class="text-center" style="padding-top: 20px; padding-bottom: 10px;"> Our Food Services </h3>
                <div class="col-xs-12 col-md-4 col-lg-4 float-left" v-for="service in services" :key="service.id">
                    <router-link :to="{ path: '/food/'+service.id}">
                        <article class="card animated fadeInLeft">
                            <div class="image-box">
                                <div class="card bg-dark text-white img_design">
                                    <img class="card-img" :src="service.img" alt="Deer in nature" />
                                    <div class="card-img-overlay">
                                        <h3 class="card-text text-center text-design">{{ service.category }}</h3>
                                        <p class="card-text text-center">{{ service.serviceDiscription}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 container card-block">
                                <h4 class="card-title cardpara">{{ service.title }}</h4>
                                <p class="cardpara">{{ service.serviceDiscription}}</p>
                                <a href="#" class="mb-2">Read more</a>
                            </div>

                        </article>
                    </router-link>
                </div>
            </div>

</template>

<script>
    export default {
        name: "category_food",
        data(){
            return{
                services: [
                    {
                        id: 1,
                        img: require('../images/food_img/1.jpg'),
                        icon: "fas fa-utensils",
                        category:"Desserts",
                        title: "Food 1s",
                        serviceDiscription:
                            "Take healthy meal at your door!No need to worry about protin"
                    },

                    {
                        id: 2,
                        img: require('../images/food_img/2.jpg'),
                        icon: "fas fa-truck",
                        category:"Lunch",
                        title: "Food 2",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 3,
                        img: require('../images/food_img/3.jpg'),
                        icon: "fas fa-book-open",
                        category:"Dinner",
                        title: "Food 3",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .text-design{
        font-weight: bold;
        padding-top: 17%;
    }
    .img_design img{
        height: 200px;
        width: 90%;
        margin: 0 auto;

    }
    .cardpara {
        color: black !important;
    }
</style>