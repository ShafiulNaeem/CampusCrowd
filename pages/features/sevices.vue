<template>
    <div class="row">
        <div class="col-lg-4 col-md-5" v-for="service in services" :key="service.id">
            <router-link :to="{ path: '/'+service.type}">
                <div class="single_feature" >
                    <div class="icon">
                    <span class="flaticon-student img_design">
                      <img v-bind:src="service.img" class="card-img-top" alt="...">
                    </span>
                    </div>
                    <div class="desc">
                        <h4 class="mt-3 mb-2">
                            <b>{{ service.title }}</b>
                        </h4>
                        <p class="cardpara">{{ service.serviceDiscription }}</p>

<!--                        <a v-bind:href="'/food/'+ service.id">Continue</a>-->
                    </div>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
    export default {
        name: "sevices",

        data(){
            return{
                services: [
                    {
                        id: 1,
                        type:"food",
                        img: require('../images/food.jpg'),
                        icon: "fas fa-utensils",
                        title: "Food Service",
                        serviceDiscription:
                            "Take healthy meal at your door!No need to worry about protin"
                    },

                    {
                        id: 2,
                        type:"doctor",
                        img: require('../images/doct.jpg'),
                        icon: "fas fa-truck",
                        title: "Doctor's Helpline",
                        serviceDiscription:
                            "Manage your daily life's utility through the service"
                    },
                    {
                        id: 3,
                        type:"course",
                        img: require('../images/short.jpg'),
                        icon: "fas fa-book-open",
                        title: "Online short Courses",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 4,
                        type:"job",
                        img: require('../images/job.jpg'),
                        icon: "fas fa-book-open",
                        title: "Intern & Job Facilities",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 5,
                        type:"home",
                        img: require('../images/hall.jpg'),
                        icon: "fas fa-book-open",
                        title: "Hall & Home Service",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 6,
                        type:"stationary",
                        img: require('../images/stationary.jpg'),
                        icon: "fas fa-book-open",
                        title: "Photostat & Stationary",
                        serviceDiscription: "All the necessary courses that can build your career in short time"
                    }
                ]

            }
        }
    }
</script>

<style scoped>
    .img_design img{
        height: 200px;
        width: 90%;
        margin: 0 auto;

    }
    .cardpara {
        color: black !important;
    }

</style>