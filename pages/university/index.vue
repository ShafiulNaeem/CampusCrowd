<template>

    <div>
        <div class="universities">
        <div class="container">
            <div class="col-md-12">
                <uni_slider></uni_slider>
            </div>



            <!--                University Details Start-->
            <div class="col-md-12 select">
                <h2 class="text-center text_size">
                    Select Your University
                </h2>
                <div class="row">
                    <div class="col-4">
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Select University</a>
                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" :href="'#'+university.title" role="tab" aria-controls="profile" v-for="(university,id) in universityDetails" :key="university.id">
                                {{ university.title }}
                            </a>

                        </div>
                    </div>
                    <div class="col-8">
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
                                        <a v-bind:href="'/university/'+ university.id">Continue</a>
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
            <!--                University Details end-->
        </div>

        </div>
    </div>
</template>

<script>
    import _university from "./_university";
    import uni_slider from "./uni_slider";
    //  import CommonHeader from '~/components/user/CommonHeader'
    // import Multiselect from 'vue-multiselect'
    export default {
        layout: 'userloged',
        components: {uni_slider,_university},

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
    .form-control{
        border: 1px solid blue;
        text-align: center

    }
    .universities{
        margin-top: 20px;
        /*height: 330px;*/
        margin-bottom: 20px;
    }
    .image_size img{
        height: 400px;
    }
    .text_size{
        padding: 20px;
    }
    .img_design img{
        height: 200px;
        width: 90%;
        margin: 0 auto;

    }

</style>
