<template>
    <div>
        <div class="container">

        </div>
        <section class="feature_area">
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
                            <nav_food></nav_food>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- Services -->
                    <div class="col-lg-9">

                        <div class="row">
                            <div class="col-xs-12 col-md-4 col-lg-4" v-for="service in services" :key="service.id">

                                    <div class="single_feature text-white text-center" >
                                        <router-link :to="{ path: '/food/details_food'}">
                                            <div class="icon">
                                                <span class="flaticon-student img_design">
                                                  <img v-bind:src="service.img" class="card-img-top" alt="...">
                                                </span>
                                            </div>
                                            <div class="desc" style="padding-bottom: 10px;">
                                                <h4 class="mt-3 mb-2">
                                                    <b>{{ service.title }}</b>
                                                </h4>
                                                <p class="cardpara">{{ service.serviceDiscription }}</p>
                                                <p class="cardpara">{{ service.price }} $</p>
<!--                                                <a @click="addTodetails(service)" href="/food/details_food" class="btn btn-xs btn-danger">view Details</a>-->
                                            </div>
                                        </router-link>
                                        <a @click="addToCart(service)" class="btn btn-xs btn-danger">+ Add T Cart</a>

                                    </div>


                            </div>
                        </div>
                    </div>

                    <!-- Cart start -->
                    <div class="col-lg-3">
                        <Cart :services="cart"></Cart>
                    </div>
                    <!-- Cart end -->
                </div>

                <div class="row">
                    <category_food></category_food>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import nav_food from "./nav_food";
    import Cart from "./Cart";
    import category_food from "./category_food";
    export default {
        name: "_food",
        layout: "userloged",
        components: {
            category_food,
            Cart,
            nav_food
        },
        data(){
            return{
                services: [
                    {
                        id: 1,
                        img: require('../images/food_img/1.jpg'),
                        icon: "fas fa-utensils",
                        cat_id:"Desserts",
                        title: "Food 1",
                        price:19.80,
                        serviceDiscription:
                            "Take healthy meal at your door!No need to worry about protin"
                    },

                    {
                        id: 2,
                        img: require('../images/food_img/2.jpg'),
                        icon: "fas fa-truck",
                        cat_id:"Lunch",
                        title: "Food 2",
                        price:14.80,
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 3,
                        img: require('../images/food_img/3.jpg'),
                        icon: "fas fa-book-open",
                        cat_id:"Dinner",
                        title: "Food 3",
                        price:16.00,
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 1,
                        img: require('../images/food_img/3.jpg'),
                        icon: "fas fa-utensils",
                        cat_id:"Desserts",
                        title: "Food 1s",
                        price:12.80,
                        serviceDiscription:
                            "Take healthy meal at your door!No need to worry about protin"
                    },

                    {
                        id: 2,
                        img: require('../images/food_img/1.jpg'),
                        icon: "fas fa-truck",
                        cat_id:"Lunch",
                        title: "Food 2",
                        price:13.80,
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 6,
                        img: require('../images/food_img/1.jpg'),
                        icon: "fas fa-book-open",
                        cat_id:"Dinner",
                        title: "Burger",
                        price:11.80,
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    }
                ],
                cart: [],
                //details:[],
                //keyword:'',
                headerinfo : { title:'Selected University ', description:'Here Your university'}
            }
        },
        methods: {
            addToCart(service){
                this.cart.push(service);
            },
            // addTodetails(service){
            //     this.details.push(service);
            // }
            // search(){
            //     this.services.filter(service => {
            //         return service.title.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
            //     })
            // }
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
        height: 200px;
        width: 90%;
        margin: 0 auto;

    }


</style>
