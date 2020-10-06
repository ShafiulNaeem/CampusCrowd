<template>
    <div class="container">
        <div class="justify-content-center">
            <div class="col-lg-12">
                <div class="main_title text-center">

                    <div class="card text-white img_design" >
                        <img style="height: 300px; width: 100%;" class="card-img" src="../images/food_img/3.jpg" alt="Deer in nature" />
                        <div class="card-img-overlay">
                            <h3 class="card-text text-center" style="padding-top: 10%;">Your Category</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <nav_food></nav_food>
            </div>
            <div class="col-lg-12">
                <h3 class="text-center" style="padding-top: 20px; padding-bottom: 10px;"> Our Food Services </h3>
                <div class="col-lg-9 float-left">

                    <div class="single_feature text-white text-center" :key="services.id">
                        <router-link :to="{ path: '/food/details_food'}">
                            <div class="icon">
                                <span class="flaticon-student img_design">
                                  <img v-bind:src="services.img" class="card-img-top" alt="...">
                                </span>
                            </div>
                            <div class="desc" style="padding-bottom: 10px;">
                                <h4 class="mt-3 mb-2">
                                    <b>{{ services.title }}</b>
                                </h4>
                                <p class="cardpara">{{ services.serviceDiscription }}</p>
                                <p class="cardpara">{{ services.price }} $</p>

                            </div>
                        </router-link>
                        <a @click="addToCart(services)" class="btn btn-xs btn-danger">+ Add T Cart</a>

                    </div>
                </div>

                <!-- Cart start -->
                <div class="col-lg-3 float-right">
                    <Cart :services="cart"></Cart>
                </div>
                <!-- Cart end -->
            </div>
            <!-- Cart end -->
        </div>

        <div class="row">
            <category_food></category_food>
        </div>
    </div>
</template>

<script>
    import Cart from "./Cart";
    import nav_food from "./nav_food";
    //import fea_slider from "../features/fea_slider";
    import category_food from "./category_food";

    export default {
        name: "details_food",
        layout: "userloged",
        //props:['','details'],
        components: {
            category_food,
            nav_food,
            Cart
        },
        data(){
            return{
                //details:[],
                services:
                    {
                        id: 1,
                            img: require('../images/food_img/1.jpg'),
                        icon: "fas fa-utensils",
                        cat_id:"Desserts",
                        title: "Food 1s",
                        price:19.80,
                        serviceDiscription:
                        "Take healthy meal at your door!No need to worry about protin"
                    },
                cart:[],
                headerinfo : { title:'Selected University ', description:'Here Your university'}
            }
        },
        methods:{
            addToCart(services){
                this.cart.push(services);
            },
        }
    }
</script>

<style scoped>
    .cardpara {
        color: black !important;
    }
    .pragraph {
        color: rgb(80, 77, 77) !important;
    }
    .img_design img{
        height: 300px;
        width: 90%;
        margin: 0 auto;

    }
</style>