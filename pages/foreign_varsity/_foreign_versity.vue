<template>
    <div>

        <section class="feature_area">
            <div class="container-fluid">
                <div class="justify-content-center">
                    <div class="col-lg-12">
                        <div class="main_title">

                            <div class="card text-white img_design" >
                                <img style="height: 300px; width: 100%;" class="card-img" src="../images/other_varsity/oxf.jpg" alt="Deer in nature" />
                                <div class="col-md-5 card-img-overlay text-design">
                                    <h3 class="card-text cardpara">University of Oxford</h3>
                                </div>
                            </div>
<!--                            <nav_food></nav_food>-->
                        </div>
                    </div>
                </div>
            </div>
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

                                    <nav_varsity></nav_varsity>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- nav End-->

            <!-- content Start-->
            <div class="container">
                <!-- Courses Start-->
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card">
                            <h5 class="cardpara">About Us</h5>
                            <div class="card-body" style="padding-bottom: 10px;">

                                <p href="card-title">
                                    The University Of Oxford, established in 1096 and situated in Oxford, England,
                                    is the oldest university in the English speaking world. In less than a century,
                                    Oxford had achieved an important set of learning and won the praises of popes,
                                    kings, and sages by virtue of its antiquity, curriculum, a philosophical system,
                                    and privileges. Throughout the twentieth and early twenty-first centuries,
                                    Oxford has added a serious new analysis capability within the natural
                                    and applied sciences, together with medication.

                                    The University’s estate has been growing at around 5% per annum for the last 15 years.
                                    Over the past eight decades, Oxford has been making significant contributions to
                                    society not only locally but nationally and internationally as well.
                                    Oxford has situated about 60 miles north-west of London and today
                                    there are around 240 buildings across 13 sites in and around Oxford
                                </p>
                            </div>
                        </div>
                        <h3 class="cardpara" style="padding-top: 15px"></h3>

                        <!-- Courses Start-->
                        <div class="card">
                            <div class=" col-lg-12">
                                <h5 class="cardpara">Find more courses at this university</h5>

                                <ul class="list-group list-group-horizontal" id="list-tab" role="tablist">

                                    <li class="list-group-item">
                                        <button type="button" class="btn btn-outline-info" data-toggle="list" href="#list-home" role="tab" aria-controls="home">All Courses</button>
                                        <button style="margin: 5px;" type="button" class="btn btn-outline-success" :href="'#'+university.title" data-toggle="list"  role="tab" aria-controls="profile"
                                                v-for="(university,id) in universityDetails" :key="university.id">
                                            {{university.title}}
                                        </button>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-lg-12">
                                <div class="tab-content" id="nav-tabContent" data-spy="scroll" data-offset="0">
                                    <div class="tab-pane fade" :id="university.title" role="tabpanel" aria-labelledby="list-home-list"  v-for="(university,id) in universityDetails" :key="university.id">
                                        <ul class="list-group">
                                            <li class="list-group-item d-flex">
                                                <h5 class="text-info">{{university.name}}</h5>
                                            </li>
                                            <li class="list-group-item d-flex">
                                                <table class="table">
                                                    <thead>
                                                    <tr>
                                                        <th>Duration</th>
                                                        <th>Exam Accepted</th>
                                                        <th>1st Year Tuition Fees</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="">
                                                        <td style="width: 5%;">
                                                            <h7 class="cardpara">{{university.duration}}</h7>
                                                        </td>
                                                        <td style="width: 30%;">
                                                            <p class="papragraph text-left">{{university.exam}}</p>
                                                        </td>
                                                        <td style="width: 35%;">
                                                            <p class="papragraph text-left">INR {{university.fees}} Lakh</p>
                                                        </td>
                                                        <td style="width: 30%;">
                                                            <router-link :to="{ path: '/foreign_varsity/detailsCourse'}">
                                                                <button class="btn btn-outline-success">View Details</button>
                                                            </router-link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list" v-if="universityDetails.length = 3">
                                        <ul class="list-group"  v-for="(university,id) in universityDetails" :key="university.id">
                                            <li class="list-group-item d-flex">
                                                <h5 class="text-info">{{university.name}}</h5>
                                            </li>
                                            <li class="list-group-item d-flex">
                                                <table class="table">
                                                    <thead>
                                                    <tr>
                                                        <th>Duration</th>
                                                        <th>Exam Accepted</th>
                                                        <th>1st Year Tuition Fees</th>
                                                        <th></th>


                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="">
                                                        <td style="width: 5%;">
                                                            <h7 class="cardpara">{{university.duration}}</h7>
                                                        </td>
                                                        <td style="width: 30%;">
                                                            <p class="papragraph text-left">{{university.exam}}</p>
                                                        </td>
                                                        <td style="width: 35%;">
                                                            <p class="papragraph text-left">INR {{university.fees}} Lakh</p>
                                                        </td>
                                                        <td style="width: 30%;">
                                                            <router-link :to="{ path: '/foreign_varsity/detailsCourse'}">
                                                                <button class="btn btn-outline-success">View Details</button>
                                                            </router-link>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </li>

                                        </ul>
                                        <div class="list-group-item d-flex">
                                            <router-link :to="{ path: '/foreign_varsity/courses'}">
                                                <button class="btn btn-success">View More Courses</button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Courses End-->
                        <h3 class="cardpara" style="padding-top: 15px"></h3>

                        <!-- University at a glance Start-->
                        <div class="card">
                            <h5 class="cardpara">University at a glance</h5>
                            <table class="table">
                                <tbody>
                                <tr class="text-pad table-secondary widthtd">
                                    <td>
                                        <p>% International Students</p>
                                    </td>
                                    <td>
                                        <p> 43 % </p>
                                    </td>
                                </tr>
                                <tr class="text-pad table-success widthtd">
                                    <td>
                                        <p>Total International Students</p>
                                    </td>
                                    <td>
                                        <p>6,772</p>
                                    </td>
                                </tr>
                                <tr class="text-pad table-info widthtd">
                                    <td>
                                        <p>Male/Female Ratio</p>
                                    </td>
                                    <td>
                                        <p>1 : 0.86</p>
                                    </td>
                                </tr>
                                <tr class="text-pad table-secondary widthtd">
                                    <td>
                                        <p>Duration</p>
                                    </td>
                                    <td>
                                        <p>1st Year Tuition Fees</p>
                                    </td>
                                </tr>
                                <tr class="text-pad table-info widthtd">
                                    <td>
                                        <p>UG/PG Course Ratio</p>
                                    </td>
                                    <td>
                                        <p>	1 : 2.18</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- University at a glance End-->

                        <!-- Fees Start-->
                        <div class="list-group">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="card list-group">
                                <li class="list-group-item d-flex">
                                    <h5 class="cardpara">Fees</h5>
                                </li>
                                <li class="list-group-item d-flex">
                                    <table class="table">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th class="">Courses</th>
                                            <th class="">Duration</th>
                                            <th class="">1st Year Tuition Fees</th>

                                        </tr>
                                        </thead>
                                        <tbody v-if="universityDetails.length = 3">
                                        <tr class="widthtd table-success" v-for="(university,id) in universityDetails" :key="university.id">
                                            <td style="width: 30%;">
                                                <h7 class="cardpara">{{university.title}}</h7>
                                            </td>
                                            <td style="width: 30%;">
                                                <p class="papragraph text-left">{{university.duration}}</p>
                                            </td>
                                            <td style="width: 40%;">
                                                <p class="papragraph text-left">{{university.fees}}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <router-link :to="{ path: '/foreign_varsity/courses'}">
                                                    <button class="btn btn-success">View More Courses</button>
                                                </router-link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </div>
                        <!-- Fees End-->

                        <!-- Entry Criteria Start-->
                        <div class="list-group">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="card list-group">
                                <li class="list-group-item d-flex">
                                    <h5 class="cardpara">Entry Requirements</h5>
                                </li>
                                <li class="list-group-item d-flex">
                                    <table class="table">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th class="text-center">Courses</th>
                                            <th class="text-center">Amount</th>

                                        </tr>
                                        </thead>
                                        <tbody v-if="universityDetails.length = 3">
                                        <tr class="widthtd table-success" v-for="(university,id) in universityDetails" :key="university.id">
                                            <td style="width: 30%;">
                                                <h7 class="cardpara">{{university.title}}</h7>
                                            </td>
                                            <td style="width: 70%;">
                                                <p class="papragraph text-left">{{university.exam}}</p>
                                                <p class="papragraph text-left"><b>PTE:</b> Accepted</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <router-link :to="{ path: '/foreign_varsity/courses'}">
                                                    <button class="btn btn-success">View More Courses</button>
                                                </router-link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </div>
                        <!-- Entry Criteria Start-->

                        <!-- Entry Criteria Start-->
                        <div class="list-group">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="card list-group">
                                <li class="list-group-item d-flex">
                                    <h5 class="cardpara">Scholarships</h5>
                                </li>
                                <li class="list-group-item d-flex"  v-for="(university,id) in universityDetails" :key="university.id">
                                    <table class="table">
                                    <thead>
                                    <tr>
                                        <th>Courses</th>
                                        <th>Duration</th>
                                        <th>Exam Accepted</th>
                                        <th>Scholarships</th>
                                        <th></th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="">
                                        <td style="width: 5%;">
                                            <h7 class="cardpara">{{university.title}}</h7>
                                        </td>
                                        <td style="width: 5%;">
                                            <h7 class="cardpara">{{university.duration}}</h7>
                                        </td>
                                        <td style="width: 30%;">
                                            <p class="papragraph text-left">{{university.exam}}</p>
                                        </td>
                                        <td style="width: 30%;">
                                            <p class="papragraph text-left">INR {{university.fees}} Lakh</p>
                                        </td>
                                        <td style="width: 30%;">
                                            <router-link :to="{ path: '/foreign_varsity/detailsCourse'}">
                                                <button class="btn btn-outline-success">View Details</button>
                                            </router-link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </li>
                                <li class="list-group-item d-flex">
                                    <router-link :to="{ path: '/foreign_varsity/scholarships'}">
                                        <button class="btn btn-success">View Scholarships Details</button>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <!-- Entry Criteria Start-->

                    </div>

                    <!-- Gallery Start-->
                    <div class="col-lg-4">
                        <div class="image-box">
                            <div class="card">
                                <iframe width="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                </iframe>
                                <div class="card-body">
                                    <h5 class="card-title">Oxford Open Days – Know Before You Go</h5>
                                </div>

                            </div>
                            <div class="card">
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active image_size">
                                            <iframe width="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                            </iframe>
                                        </div>
                                        <div class="carousel-item image_size">
                                            <iframe width="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                            </iframe>
                                        </div>
                                        <div class="carousel-item image_size">
                                            <iframe width="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                            </iframe>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                            <div class="card">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <img src="../images/other_varsity/stan.jpg" class="card-img-top" alt="...">

                                    </div>
                                    <div class="col-lg-6">
                                            <img src="../images/other_varsity/cali.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="col-lg-6">
                                            <img src="../images/other_varsity/oxf.jpg" class="card-img-top" alt="...">
                                    </div>
                                    <div class="col-lg-6">
                                            <img src="../images/other_varsity/cam.jpg" class="card-img-top" alt="...">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Location Start-->
                        <div class="list-group">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="card list-group">

                                <h3 class="cardpara">Location</h3>

                                <table class="table">
                                    <tbody>
                                    <tr class="text-pad table-secondary widthtd">
                                        <td>
                                            <p>University City</p>
                                        </td>
                                        <td>
                                            <p> Oxford, Oxfordshire, UK </p>
                                        </td>
                                    </tr>
                                    <tr class="text-pad table-success widthtd">
                                        <td>
                                            <p>Size of city</p>
                                        </td>
                                        <td>
                                            <p>Medium</p>
                                        </td>
                                    </tr>
                                    <tr class="text-pad table-info widthtd">
                                        <td>
                                            <p>Population of city</p>
                                        </td>
                                        <td>
                                            <p>1,70,350</p>
                                        </td>
                                    </tr>
                                    <tr class="text-pad table-secondary widthtd">
                                        <td>
                                            <p>Website</p>
                                        </td>
                                        <td>
                                            <p><a href="http://www.ox.ac.uk/about/international-oxford">http://www.ox.ac.uk/about/</a></p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </ul>
                        </div>
                        <!-- Location end-->

                        <!-- Contact Start-->
                        <div class="list-group">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="card list-group">
                                <h3 class="cardpara">Contact Us</h3>
                                <li class="list-group-item d-flex ">
                                    Email:
                                    <span class="badge" style="padding-top: 7px;">international.strategy@admin.ox.ac.uk</span>
                                </li>
                                <li class="list-group-item d-flex ">
                                    Phone
                                    <span class="">: +44 01865 270000</span>
                                </li>
                                <li class="list-group-item d-flex ">
                                    Address
                                    <span class="">: Wellington Square, Oxford OX1 2JD,UK</span>
                                </li>
                                <li class="list-group-item d-flex">
                                    Website
                                    <span class="">
                                        <a href="http://www.ox.ac.uk/about/international-oxford">: http://www.ox.ac.uk/about/</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <!-- Contact end-->
                    </div>
                    <!-- Gallery end-->
                </div>
            </div>
            <!-- content end-->
        </section>

    </div>
</template>

<script>
    import nav_varsity from "./nav_varsity";
    export default {
        name: "_foreign_versity",
        layout: "userloged",
        components:{
            nav_varsity

        },
        data(){
            return{
                universityDetails: [
                    {
                        id: 1,
                        title: "MBA",
                        name:"BSc (Hons) Business Management",
                        fees: 11.47,
                        requ_marks:"60%",
                        requ_sub:"English & Maths",
                        other_fees :53.4,
                        ielts:"6",
                        level:"Bachelor Program",
                        exam:"GMAT : Accepted, GRE : Accepted",
                        duration: "1 years",
                        uni_name:"California Institute of Technology"
                    },
                    {
                        id: 2,
                        title: "CSE",
                        name:"BSc in Computer Science & Engineering",
                        fees: 11.47,
                        requ_marks:"60%",
                        requ_sub:"English & Maths",
                        other_fees :53.4,
                        ielts:"6",
                        level:"Bachelor Program",
                        exam:"GMAT : Accepted, GRE : Accepted",
                        duration: "1 years",
                        uni_name:"Harvard University"
                    },
                    {
                        id: 3,
                        title: "EEE",
                        name:"BSc in Electrical Electronics & Engineering",
                        fees: 11.4,
                        requ_marks:"60%",
                        requ_sub:"English & Maths",
                        other_fees :53.4,
                        ielts:"6",
                        level:"Bachelor Program",
                        exam:"GMAT : Accepted, GRE : Accepted",
                        duration: "1 years",
                        uni_name:"Stanford University"
                    },
                    {
                        id: 4,
                        title: "MS",
                        name:"BSc (Hons) Business Management",
                        fees: 11.47,
                        requ_marks:"60%",
                        requ_sub:"English & Maths",
                        other_fees :53.4,
                        ielts:"6",
                        level:"Bachelor Program",
                        exam:"GMAT : Accepted, GRE : Accepted",
                        duration: "1 years",
                        uni_name:"University of Oxford"
                    },
                    {
                        id: 5,
                        title: "MIM",
                        name:"BSc (Hons) Business Management",
                        fees: 11.47,
                        requ_marks:"60%",
                        requ_sub:"English & Maths",
                        other_fees :53.4,
                        ielts:"6",
                        level:"Bachelor Program",
                        exam:"GMAT : Accepted, GRE : Accepted",
                        duration: "1 years",
                        uni_name:"Massachusetts Institute of Technology (MIT)"
                    },
                    {
                        id: 6,
                        title: "LAW",
                        name:"BSc (Hons) Business Management",
                        fees: 11.47,
                        requ_marks:"60%",
                        requ_sub:"English & Maths",
                        other_fees :53.4,
                        ielts:"6",
                        level:"Bachelor Program",
                        exam:"GMAT : Accepted, GRE : Accepted",
                        duration: "1 years",
                        uni_name:"University of Cambridge"
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
    .text-design{
        padding-top: 12%;
        margin: 0 auto;
        /*background-color: teal;*/
    }
    .text-design h3{
        background-color: teal;
    }
    .pragraph {
        color: rgb(80, 77, 77) !important;
    }
    .text-mach{
        padding-top: 8%;
    }
    .img_design img{
        height: 200px;
        width: 90%;
        margin: 0 auto;

    }
    .td-paadining td{
        padding: 0px;
    }
    .text-pad td{
        padding: 0px;
        padding-top: 14px;
        
    }
    .widthtd td{
        width: 50%;
        border-left: 1px solid black;
        border-rightbo: 1px solid black;
    }

</style>