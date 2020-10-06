<template>
    <div>
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
                    <div class="col-lg-12">
                        <div class="card list-group">
                            <h3 class="text-center text-danger" style="padding-top: 20px;">You will be received order within 1 hours</h3>
                            <h3 class="text-center text-info" style="padding-bottom: 30px;">thanks a lot for being with us !!</h3>
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
    export default {
        name: "confirm",
        layout: "userloged",
        components: {
            // Cart,
            nav_food
        },
    }
</script>

<style scoped>

</style>