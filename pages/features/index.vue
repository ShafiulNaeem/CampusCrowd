<template>
    <div style="background-color: #3e515b">
    <div class="col-sm-12 mx-auto">
        <fea_slider></fea_slider>
    </div>
    <section class="feature_area section_gap_top">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="main_title">
              <h2 class="mb-3">Our Favourite Services</h2>
              <p class="pragraph para_text" s>All essential services for your daily campus life</p>
            </div>
          </div>
        </div>

            <sevices></sevices>

      </div>
    </section>

    </div>
</template>

<script>
    import sevices from "./sevices";
    import fea_slider from "./fea_slider";
    //import CommonHeader from '~/components/user/CommonHeader'
    export default {
        layout: "userloged",
        name: "index",
    
        components: {fea_slider,sevices},
        data(){
            return{
                headerinfo : { title:'Our Features', description:'Here u can find our all features'}
            }
        }
    }
</script>

<style scoped>


.pragraph {
    font-size: 22px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 8px;
    color: #002347;
}



</style>
