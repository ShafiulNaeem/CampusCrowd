<template>
    <div>
        <div class="container">
            <fea_slider></fea_slider>
        </div>
        <section class="feature_area">
            <div class="container">
                <!-- Start Services -->
                <div class="row">
                    <category_food></category_food>
                </div>
                <!-- End Services -->

                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="main_title" style="padding-bottom: 20px; padding-top: 20px;">
                            <h2 class="mb-3">All essential services for your daily campus life</h2>
                            <p class="pragraph">All essential services for your daily campus life</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import category_food from "./category_food";
    import fea_slider from "../features/fea_slider";
    //import CommonHeader from '~/components/user/CommonHeader'
    export default {
        name:"index",
        layout: "userloged",
        components: {
            fea_slider,
            category_food
        },
        data(){
            return{
                headerinfo : { title:'Selected University ', description:'Here Your university'}
            }
        }
    }
</script>

<style scoped>


    .pragraph {
        color: rgb(80, 77, 77) !important;
    }
    .img_design img{
        height: 200px;
        width: 90%;
        margin: 0 auto;

    }



</style>
