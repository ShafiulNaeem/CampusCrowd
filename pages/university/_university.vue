<template>
    <div>
        <div class="container-fluid">
            <uni_slider></uni_slider>
        </div>
        <section class="feature_area">
            <!-- nav Start-->
<!--            <specific_varsity></specific_varsity>-->
            <!-- nav end-->
            <div class="container">
                <div class="row">
                    <!-- Services -->
                    <div class="col-lg-4 col-md-5" v-for="service in services" :key="service.id">
                        <router-link :to="{ path: '/features/id' }">
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
                                </div>
                            </div>
                        </router-link>

                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import specific_varsity from "./specific_varsity";
    import uni_slider from "./uni_slider";
    import CommonHeader from '~/components/user/CommonHeader'
    export default {
        layout: "userloged",
        props: ['university'],
        components: {
            specific_varsity,
            CommonHeader,
            uni_slider
        },
        data(){
            return{
                services: [
                    {
                        id: 1,
                        img: require('../images/study.jpg'),
                        icon: "fas fa-utensils",
                        title: "Academic Details",
                        serviceDiscription:
                            "Take healthy meal at your door!No need to worry about protin"
                    },

                    {
                        id: 2,
                        img: require('../images/bus.jpg'),
                        icon: "fas fa-truck",
                        title: "Bus Schedule",
                        serviceDiscription:
                            "Manage your daily life's utility through the service"
                    },
                    {
                        id: 3,
                        img: require('../images/routine.jpg'),
                        icon: "fas fa-book-open",
                        title: "Dailly Routine",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 4,
                        img: require('../images/sports.jpg'),
                        icon: "fas fa-book-open",
                        title: "Sports News",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 5,
                        img: require('../images/travel.jpg'),
                        icon: "fas fa-book-open",
                        title: "Travelling ",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 6,
                        img: require('../images/alumni.jpg'),
                        icon: "fas fa-book-open",
                        title: "Alumni Detailss",
                        serviceDiscription:
                            "All the necessary courses that can build your career in short time"
                    }
                ],
                headerinfo : { title:'Selected University ', description:'Here Your university'}
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
    .img_design img{
        height: 200px;
        width: 90%;
        margin: 0 auto;

    }


</style>
