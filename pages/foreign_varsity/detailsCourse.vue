
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

            <div class="container">
                <div class="row">
                    <!-- content Start-->
                    <div class="col-lg-8">
                        <!-- Courses list Start-->
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
                                                            <a href="#detailsCourse" class="btn btn-outline-success">View Details</a>
<!--                                                            <router-link :to="{ path: '/foreign_varsity/detailsCourse'}">-->
<!--                                                                <button class="btn btn-outline-success">View Details</button>-->
<!--                                                            </router-link>-->
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                        </ul>
                                    </div>
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
                        <!-- Courses list End-->

                        <!-- Courses description Start-->
                        <div class="list-group" id="detailsCourse">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="card list-group"  v-for="(course,id) in courses" :key="course.id">
                                <li class="list-group-item d-flex">
                                    <h5 class="cardpara">{{course.name}}</h5>
                                </li>
                                <li class="list-group-item d-flex">
                                    <table class="table">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th colspan="2">About This Courses</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="widthtd table-success">
                                            <td style="width: 30%;">
                                                <h7 class="cardpara">Duration</h7>
                                            </td>
                                            <td style="width: 70%;">
                                                <p class="pragraph">{{course.duration}}</p>
                                            </td>
                                        </tr>
                                        <tr class="widthtd table-success">
                                            <td style="width: 30%;">
                                                <h7 class="cardpara text-left">Level</h7>
                                            </td>
                                            <td style="width: 70%;">
                                                <p class="pragraph">{{course.level}}</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li class="list-group-item">
                                    <div class="col-lg-12">
                                        <h7 class="cardpara" ><b>.Course Description</b></h7>
                                    </div>
                                    <div class="col-lg-12">
                                        <p class="pragraph text-left" style="padding: 5px;" >{{course.description}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- Courses description End-->

                        <!-- Fees Start-->
                        <h3 class="cardpara" style="padding-top: 15px;"></h3>
                        <div class="card list-group">
                            <h5 class="cardpara" style="padding-top: 15px; padding-left: 19px;"> Fees & Expenses</h5>
                            <ul class="list-group"  v-for="(course,id) in courses" :key="course.id">
                                <li class="list-group-item d-flex">
                                    <h7 class="cardpara">1st Year Tuition Fees</h7>
                                </li>
                                <li class="list-group-item d-flex">
                                    <table class="table">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th>Fees components</th>
                                            <th>Amount</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="widthtd table-success">
                                            <td style="width: 50%;">
                                                <h7 class="cardpara">Hostel & fees</h7>
                                            </td>
                                            <td style="width: 50%;">
                                                <p class="papragraph">INR {{course.fees}} Lakh</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                            <ul class="list-group"  v-for="(course,id) in courses" :key="course.id">
                                <li class="list-group-item d-flex">
                                    <h7 class="cardpara">Others Other expenses in 1st year Year</h7>
                                </li>
                                <li class="list-group-item d-flex">
                                    <table class="table">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th>Fees components</th>
                                            <th>Amount</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="widthtd table-success">
                                            <td style="width: 50%;">
                                                <h7 class="cardpara">Hostel & fees</h7>
                                            </td>
                                            <td style="width: 50%;">
                                                <p class="papragraph">INR {{course.other_fees}} Lakh</p>
                                            </td>
                                        </tr>
                                        <tr class="widthtd table-info">
                                            <td style="width: 50%;">
                                                <h7 class="cardpara">Total</h7>
                                            </td>
                                            <td style="width: 50%;">
                                                <p class="papragraph">INR {{course.other_fees + course.fees}} Lakh</p>
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
                            <ul class="card list-group"  v-for="(course,id) in courses" :key="course.id">
                                <li class="list-group-item d-flex">
                                    <h7 class="cardpara">Entry Requirements</h7>
                                </li>
                                <li class="list-group-item d-flex">
                                    <table class="table">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th colspan="2">Entry requirements for this course</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="widthtd table-success">
                                            <td style="width: 30%;">
                                                <h7 class="cardpara">Class 12th</h7>
                                            </td>
                                            <td style="width: 70%;">
                                                <p class="papragraph text-left"><b>Marks: </b>{{course.requ_marks}}</p>
                                                <p class="papragraph text-left"><b>.</b>{{course.description}}</p>
                                                <p class="papragraph text-left"><b>Required Sub:</b> {{course.requ_sub}}</p>
                                            </td>
                                        </tr>
                                        <tr class="widthtd table-success">
                                            <td style="width: 30%;">
                                                <h7 class="cardpara">Exams</h7>
                                            </td>
                                            <td style="width: 70%;">
                                                <p class="papragraph text-left"><b>IELTs: </b>{{course.ielts}}</p>
                                                <p class="papragraph text-left"><b>.</b>{{course.exam}}</p>
                                                <p class="papragraph text-left"><b>PTE:</b> Accepted</p>
                                            </td>
                                        </tr>
                                        <tr class="widthtd table-success">
                                            <td style="width: 30%;">
                                                <h7 class="cardpara ">Additional Info</h7>
                                            </td>
                                            <td style="width: 70%;">
                                                <p class="papragraph text-left">{{course.description}}</p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </div>
                        <!-- Entry Criteria Start-->

                        <!-- scholarships Start-->
                        <div class="list-group">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="card list-group"  v-for="(course,id) in courses" :key="course.id">
                                <li class="list-group-item d-flex">
                                    <h5 class="cardpara"> Scholarships</h5>
                                </li>
                                <li class="list-group-item">
                                    <div class="col-lg-12" >
                                        <p style="font-size: 12px !important;" class="cardpara text-left">Scholarship information is not available. You can apply to non-college specific scholarships available for UK.</p>
                                    </div>
                                    <router-link :to="{ path: '/foreign_varsity/scholarships'}">
                                    <div class="col-lg-12 text-center">

                                            <button type="button" class="btn btn-outline-success">View All Scholarships</button>

                                    </div>
                                    </router-link>

                                </li>

                            </ul>
                        </div>
                        <!-- scholarships end-->

                    </div>

                    <!-- content end-->

                    <!-- Recommended Courses Start-->
                    <div class="col-lg-4">
                        <div class="card list-group">
                            <h3 class="cardpara" style="padding-top: 15px"></h3>
                            <ul class="list-group">
                                <li class="list-group-item d-flex">
                                    <h5 class="cardpara">Recommended Courses</h5>
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
<!--                                                <router-link :to="{ path: '/foreign_varsity/detailsCourse'}">-->
<!--                                                    <button class="btn btn-outline-success">View Course Details</button>-->
<!--                                                </router-link>-->
                                                <a href="#detailsCourse" class="btn btn-outline-success">View Course Details</a>
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
        name: "detailsCourse",
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


                ],
                courses: [
                    {
                        id: 1,
                        name:"BSc (Hons) Business Management",
                        title: "MBA",
                        fees: 12.9,
                        requ_marks:"60%",
                        requ_sub:"English & Maths",
                        other_fees :54.6,
                        ielts:"6",
                        level:"Bachelor Program",
                        exam:"GMAT : Accepted, GRE : Accepted",
                        duration: "1 years",
                        description:"The course combines practical professional experience with creative approaches to" +
                            " enterprise and innovation that will develop students entrepreneurial spirit",

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
        padding-top: 14px;
    }
    .widthtd td{
        border-left: 1px solid black;
        border-right: 1px solid black;
    }

</style>