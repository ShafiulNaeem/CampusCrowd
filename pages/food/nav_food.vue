<template>
    <div style="background-color: #3e515b">
        <section class="headcontainera">
            <nav class=" container navbar navbar-expand-lg navbar-dark bg-transparent">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav" style="margin: 0 auto;">
                        <li class="nav-item active">
                            <a class="nav-link" href="/food"><span class="navtext text_change">Home</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            <span class="navtext text_change">
                                Category
                            </span>
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item navtext" id="navitem" href="/food/food">Desserts</a>
                                <a class="dropdown-item navtext" id="navitem" href="/food/food">Lounch</a>
                                <a class="dropdown-item navtext" id="navitem" href="/food/food">Dinner</a>
                            </div>
                        </li>
                        <li class="nav-item" v-for="(item, i) in navlists" :key="i">
                            <a class="nav-link" :href="item.link" ><span class="navtext text_change">{{item.title}}</span></a>
                        </li>
                        <li class="nav-item active">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <form  class="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>

    </div>
</template>

<script>
    export default {
        name:"nav_food",
        mounted() {
        },

        data: () => ({
            navlists: [
                // {
                //     title: 'Featurs',
                //     link: '/features'
                // },
                {
                    title: 'Cart',
                    link: '/food/order_food'
                },
                {
                    title: 'Event',
                    link: '/food/food'
                },
                {
                    title: '$0',
                    link: '/food'
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
