<template>
	<div>
		<section class="headcontainer">
			<nav class=" container navbar navbar-expand-lg navbar-dark bg-transparent">
				<a class="navbar-brand" href="#">Campus Crowed</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link" href="/"><span class="navtext">Home</span></a>
						</li>
						<li class="nav-item" v-for="(item, i) in navlists" :key="i">
							<a class="nav-link" :href="item.link"><span class="navtext">{{item.title}}</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link"  data-toggle="modal" href="#authmodal"><span class="navtext">Auth</span></a>
						</li>
					</ul>
				</div>
			</nav>
			<div class="container">
				<div class="row">
					<div class="col-md-12  review-title-back">
						<div class="transparent">
							<p class=" text-title">Best online service providers In the campuses </p>
							<h2 class="text-title mt-4 mb-5">Campus Crowed</h2>

							<a href="#" class="primary-btn2 mb-3 mb-sm-0">Explore Services</a>
							<a href="#" class="primary-btn ml-sm-3 ml-0">Get Started</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Auth />
	</div>
</template>

<script>
import Auth from '~/components/user/Auth'
export default {
    components: { Auth },
	mounted() {
	},
	data: () => ({
		navlists: [
			// {
			// 	title: "Home",
			// 	link: "/home"
			// },
			{
				title: 'Features',
				link: '/features'
			},
			{
				title: 'Universities',
				link: '/university'
			},
			{
				title: 'Blog',
				link: '/blog'
			},
			{
				title: 'Confessions',
				link: '/confess'
			},
			{
				title: 'About Us',
				link: '/about'
			}
		],
		registar: false
	}),
};
</script>

<style scoped>
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
</style>
