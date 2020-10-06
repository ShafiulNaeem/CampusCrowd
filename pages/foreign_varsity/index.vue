<template>
    <div>
        <div class="container">

        </div>
        <section class="feature_area">
            <div class="container">
                <div class="col-md-12" style="padding-bottom: 20px;">
                    <uni_slider></uni_slider>
                </div>
                <div class="row">
                    <div class="col-3">
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Select University</a>
                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" :href="'#'+university.title" role="tab" aria-controls="profile" v-for="(university,id) in universityDetails" :key="university.id">
                                {{ university.name }}
                            </a>

                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                <div class="card img_design">
                                    <img src="../images/demo.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <p>
                                            Cupidatat quis ad sint excepteur laborum in esse qui.
                                            Et excepteur consectetur ex nisi eu do cillum ad laborum.
                                            Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex.
                                            Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" :id="university.title" role="tabpanel" aria-labelledby="list-profile-list" v-for="(university,id) in universityDetails" :key="university.id">
                                <div class="card img_design">
                                    <img v-bind:src="university.img" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ university.Discription }}</h5>
                                        <a v-bind:href="'/foreign_varsity/'+ university.id">Continue</a>
                                        <!--                                        <router-link :to="{ path: '/University/'+university.id }">-->
                                        <!--                                            <a class="btn btn-info">Continue</a>-->
                                        <!--                                        </router-link>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import uni_slider from "../university/uni_slider";
    export default {
        name: "index",
        layout: "userloged",
        components: {
            uni_slider
        },
        data(){
            return{
                universityDetails: [
                    {
                        id: 1,
                        img: require('../images/other_varsity/mit.jpg'),
                        icon: "fas fa-utensils",
                        title: "MIT",
                        name: "Massachusetts Institute of Technology (MIT)",
                        Discription:
                            "Take healthy meal at your door!No need to worry about protin"
                    },
                    {
                        id: 2,
                        img: require('../images/other_varsity/stan.jpg'),
                        icon: "fas fa-truck",
                        title: "Stanford",
                        name: "Stanford University",
                        Discription:
                            "Manage "
                    },
                    {
                        id: 3,
                        img: require('../images/other_varsity/har.jpg'),
                        icon: "fas fa-book-open",
                        title:"Harvard",
                        name: "Harvard University",
                        Discription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 4,
                        img: require('../images/other_varsity/cali.jpg'),
                        icon: "fas fa-book-open",
                        title: "California",
                        name: "California Institute of Technology (Caltech)",
                        Discription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 5,
                        img: require('../images/other_varsity/oxf.jpg'),
                        icon: "fas fa-book-open",
                        title: "Oxford",
                        name: "University of Oxford",
                        Discription:
                            "All the necessary courses that can build your career in short time"
                    },
                    {
                        id: 6,
                        img: require('../images/other_varsity/cam.jpg'),
                        icon: "fas fa-book-open",
                        title:"Cambridge",
                        name: "University of Cambridge",
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
    .img_design img{
        height: 200px;
        width: 90%;
        margin: 0 auto;

    }


</style>
