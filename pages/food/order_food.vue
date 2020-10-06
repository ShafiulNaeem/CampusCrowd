
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
                    <!-- Cart start -->
                        <!-- Cart use dynamacily start -->
<!--                        <Cart :services="cart"></Cart>-->
                    <div class="col-lg-9">


                        <div class="card list-group">
                            <h3 class="text-center">Your Order Details</h3>
                            <h3 class="text-center text-info">Payment Will be Received Hand Cash!!</h3>
                            <ul class="list-group">

                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <table class="table">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">SI</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(service,id) in services" :key="service.id">
                                            <td>{{ service.id }}</td>
                                            <td class="image-box imag-design">
                                                <img v-bind:src="service.img" class="card-img-top" alt="...">
                                            </td>
                                            <td>{{ service.title }}</td>
                                            <td>
                                                <input style="width: 50px" v-model="service.quantity">
                                            </td>
                                            <td>{{ service.price * service.quantity }} $</td>
                                            <td>
                                                <button @click="removeItem(service)" class="btn btn-xs btn-danger">X</button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>


                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <h5>Total</h5>
                                    <span class="badge"><h3>{{total}} $</h3></span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center ">
                                    <router-link :to="{ path: '/food/confirm'}">
                                        <button class="btn btn-sm btn-success">
                                            <h5>Confirm</h5>
                                        </button>
                                    </router-link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">

                        <div class="card" v-for="(user,id) in users" :key="user.id">
                            <h3 class="text-center">Your Details</h3>
                            <div class="icon">
                                <span class="flaticon-student img_design">
                                  <img v-bind:src="user.img" class="card-img-top" alt="...">
                                </span>
                                </div>
                                <div class="desc" style="padding-bottom: 10px;">
                                    <span class="badge">
                                        <h4 class="mt-3 mb-2 float-left">
                                            <b>Name</b>
                                        </h4>
                                        <h4 class="mt-3 mb-2">
                                           <b>: {{ user.name }}</b>
                                        </h4>
                                    </span>
                                    <span class="badge">
                                        <p class="cardpara"><b>Email:</b> {{ user.email }}</p>
                                    </span>
                                    <span class="badge">
                                        <p class="cardpara"><b>Contact:</b> {{ user.contact }}</p>
                                    </span>
                                    <span class="badge">
                                        <p class="cardpara"><b>Address:</b> {{ user.Address }}</p>
                                    </span>
                                </div>
                        </div>
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
    import category_food from "./category_food";
    // import Cart from "./Cart";
    export default {
        name: "order_food",
        layout: "userloged",
        components: {
            // Cart,
            nav_food,
            category_food
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
                        quantity:1,
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
                        quantity:1,
                        price:14.80,
                        serviceDiscription:
                            "Manage your daily life's utility through the service"
                    },
                    {
                        id: 3,
                        img: require('../images/food_img/3.jpg'),
                        icon: "fas fa-book-open",
                        cat_id:"Dinner",
                        title: "Food 3",
                        quantity:1,
                        price:16.00,
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    }
                ],
                users:[
                    {
                        id: 3,
                        img: require('../images/rifat.jpg'),
                        name: "Rifat Naeem",
                        email:"rifat@gmail.com",
                        Address: "Ashulia,Savar,Dhaka",
                        contact:"01745320587",

                    }
                ]
            }
        },
        computed: {
            total(){
                var result = 0;
                this.services.forEach(service => {
                    result += parseFloat(service.price * service.quantity)
                });
                return result;
            }
        },
        methods:{
            removeItem(service){
                this.services.splice(service,1)
            }
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
    .imag-design img{

        width: 150px;


    }


</style>
