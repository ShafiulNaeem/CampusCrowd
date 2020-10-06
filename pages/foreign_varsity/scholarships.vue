
<template>
    <div>
        <section class="feature_area">
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
            <!-- nav end-->

            <!-- content Start-->
            <div class="container">
                <div class="row">

                    <div class="col-lg-8">
                        <!-- Courses Start-->
                        <div class="card">
                            <div class=" col-lg-12">
                                <h5 class="cardpara">Scholarships for courses at this university</h5>

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
                                    <div class="tab-pane fade" id="list-home" role="tabpanel"
                                         aria-labelledby="list-home-list">
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
                                                        <th>scholarships</th>
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
                                                        <th>scholarships</th>
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
                                </div>
                            </div>
                        </div>
                        <!-- Courses End-->

                    </div>

                    <!-- content end-->

                    <!-- Recommended Courses Start-->
                    <div class="col-lg-4">
                        <div class="card list-group">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="list-group">
                                <li class="list-group-item d-flex">
                                    <h5 class="cardpara">Recommended Courses for Scholarships</h5>
                                </li>
                                <li class="list-group-item d-flex" v-for="(university,id) in universityDetails" :key="university.id">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <td colspan="2">
                                                <p class="text-left"><b>{{university.uni_name}}</b></p>
                                                <a href="#" class="text-left">{{university.name}}</a>
                                            </td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td style="width: 40%;">
                                                <p class="text-left"><b>Duration</b></p>
                                                <p class="text-left"><b>Tuition Fees</b></p>
                                                <p class="papragraph text-left"><b>Exam Accepted</b></p>
                                            </td>
                                            <td style="width: 60%;">
                                                <p class="papragraph text-left">{{university.duration}}</p>
                                                <p class="papragraph text-left">INR {{university.fees + university.other_fees}} Lakh</p>
                                                <p class="text-left"><b>IELTs: </b>{{university.ielts}}</p>
                                                <p class="text-left"><b>.</b>{{university.exam}}</p>
                                                <p class="text-left"><b>PTE:</b> Accepted</p>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <router-link :to="{ path: '/foreign_varsity/detailsCourse'}">
                                                    <button class="btn btn-outline-success">View Course Details</button>
                                                </router-link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Recommended Courses Start-->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import nav_varsity from "./nav_varsity";
    export default {
        name: "scholarships",
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