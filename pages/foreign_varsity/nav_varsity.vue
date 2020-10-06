
<template>
    <div style="background-color: #3e515b">
        <section class="headcontainera">
            <nav class=" container navbar navbar-expand-lg navbar-dark bg-transparent">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav" style="margin: 0 auto;">
                        <li class="nav-item active">
                            <a class="nav-link" href="/foreign_varsity"><span class="navtext text_change">Home</span></a>
                        </li>
                        <li class="nav-item" v-for="(item, i) in navlists" :key="i">
                            <a class="nav-link" :href="item.link" ><span class="navtext text_change">{{item.title}}</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>

    </div>
</template>

<script>
    export default {
        name:"nav_varsity",
        mounted() {
        },

        data: () => ({
            navlists: [
                // {
                //     title: 'Featurs',
                //     link: '/features'
                // },
                {
                    title: 'Overview',
                    link: '/foreign_varsity/_foreign_varsity'
                },
                {
                    title: 'Courses',
                    link: '/foreign_varsity/courses'
                },
                {
                    title: 'Courses Details',
                    link: '/foreign_varsity/detailsCourse'
                }


            ]
        }),

        layout: "user",
        methods: {
        }
    };
</script>


<style>
    .dropdown:hover>.dropdown-menu {
        display: block;
    }

    .dropdown>.dropdown-toggle:active {
        pointer-events: none;
    }
    .navbar-nav li{
        margin-left: 8px!important;
    }
    .navbar-nav li :hover{
        transition-delay: 0.1s;
        background-color:#002347;
        border-radius: 20px;
    }

    .navbar-nav li a :hover{

        color: #fdc632 !important;

    }
    .img-br img{
        height: 30px;
        width: 30px;
    }

    #navitem :hover{
        color: #fdc632 !important;
    }
    .text_change{
        color: white !important;
    }
</style>


