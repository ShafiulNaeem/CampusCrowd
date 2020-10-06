<template>
	<div style="background-color: #3e515b">
		<section class="headcontainera">
			<nav class=" container navbar navbar-expand-lg navbar-dark bg-transparent">
				<a class="navbar-brand" href="#">CC</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active">
							<a class="nav-link" href="/"><span class="navtext text_change">Home</span></a>
						</li>
						<li class="nav-item" v-for="(item, i) in navlists" :key="i">
							<a class="nav-link" :href="item.link" ><span class="navtext text_change">{{item.title}}</span></a>
						</li>
						<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            <span class="navtext text_change">
                                <span class="img-br">
                                    <img src="/user/img/author2.png" alt="author" srcset="">
                                </span>
                                Profile
                            </span>
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item navtext" id="navitem1 " href="#">Profile</a>
                            <a class="dropdown-item navtext" id="navitem" href="#">Logout</a>
                        </div>
                    </li>
					</ul>
				</div>
			</nav>
		</section>

		   <div class="modal fade" id="authmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
		  <div class="modal-content">
			<div class="modal-header">
			  <h5 v-if="!registar" class="title">Enter The Information To LogIn</h5>
			  <h5 v-else class="title">Enter The Information To Register</h5>
			  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
			<div class="modal-body">
				<div class="loginForm">
					<form  class="formArea" id="myForm">
						<div class="row">
							<div class="col-lg-12 formGroup">
								<input name="email" placeholder="Enter Your Email ..." pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$">
								<input name="password" placeholder="Enter Your password" required="">
							</div>
							<div class="col-lg-12 text-center">
							    <div class="row">
									<div class="buttonholder">
										<button type="button" @click="swap" class="primary-btnr mb-3 mb-sm-0">Register</button>
										<button type="button" class="primary-btn2 mb-3 mb-sm-0" >Login</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		  </div>
		</div>
	  </div>

	</div>
</template>

<script>
export default {
  mounted() {
  },

  data: () => ({
	 navlists: [
		 {
			 title: 'Featurs',
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
			 title: 'Library',
			 link: '/confess'
		 },
		 {
			 title: 'About Us',
			 link: '/about'
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
