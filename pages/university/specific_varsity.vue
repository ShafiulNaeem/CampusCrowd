<template>
    <!-- nav Start-->
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="row card-body" style="padding-bottom: 10px;">
                        <div class="col-lg-3">
                            <img class="card-img" src="../images/other_varsity/ox.jpg" alt="Deer in nature" />
                        </div>
                        <div class="col-lg-9">
                            <h3 class="cardpara text-mach">University of Oxford</h3>
                            <h6 class="card-text cardpara" style="padding-bottom: 7%;">Oxford, Oxfordshire, UK|Public University| Established 1096</h6>

<!--                            <nav_varsity></nav_varsity>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- nav end-->
</template>

<script>
    export default {
        name: "specific_varsity",
        data(){
            return{
                universityDetails: [
                    {
                        id: 1,
                        img: require('../images/nsu.jpg'),
                        icon: "fas fa-utensils",
                        title: "NSU",
                        Discription:
                            "Take healthy meal at your door!No need to worry about protin"
                    },
                    {
                        id: 2,
                        img: require('../images/images.jpg'),
                        icon: "fas fa-truck",
                        title: "DIU",
                        Discription:
                            "Manage "
                    },
                    {
                        id: 3,
                        img: require('../images/brac.jpg'),
                        icon: "fas fa-book-open",
                        title: "BRAC",
                        Discription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 4,
                        img: require('../images/aiub.jpg'),
                        icon: "fas fa-book-open",
                        title: "AUIB",
                        Discription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 5,
                        img: require('../images/du.jpg'),
                        icon: "fas fa-book-open",
                        title: "DU",
                        Discription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 6,
                        img: require('../images/bau.jpg'),
                        icon: "fas fa-book-open",
                        title: "BAU",
                        Discription:
                            "All the necessary courses that can build your career in short time"
                    }

                ]

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
    .text-mach{
        padding-top: 8%;
    }
</style>