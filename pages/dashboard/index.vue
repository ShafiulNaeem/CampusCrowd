<template>
	<div>
	<section class="introholder">
		<div class="introtitle">
			<h1 class="introtitle">You Activated Services</h1>
			<p class="d">Some New Service is available for you !</p>
		</div>
	</section>
	<!-- Dashboard Intro End-->
<!-- Enrolled Services -->
	<div class="container servicecontainer">
		<div class="row">
			<div v-if="!hasservice" class="col-md-3">
				
				<div class="single_feature">
							<div class="icon"><span class="flaticon-student"><i class="fas fa-utensils"></i></span>
							</div>
							<div class="desc">
								<h4 class="mt-3 mb-2"><b> Food Service</b></h4>
								<!-- <ul class="list-group">
									<li class="list-group-item">Balance:	1000/-</li>
									<li class="list-group-item">Due:	200/-</li>
									<li class="list-group-item">Credit:	30/-</li>
								</ul> -->
								<p class="carapara" >Not Enroll Yet!</p>
								<button class="primary-btn2 btn-xs">Enroll</button>
								

							</div>
						</div>
			</div>
			<div v-if="hasservice" class="col-md-3">
				<div class="single_feature">
					<div class="icon"><span class="flaticon-student"><i class="fas fa-utensils"></i></span></div>
					<div class="desc">
						<h4 class="mt-3 mb-2"><b> Food Service</b></h4>
						<ul class="list-group">
							<li class="list-group-item">Balance: 1000/-</li>
							<li class="list-group-item">Due: 200/-</li>
							<li class="list-group-item">Credit:	30/-</li>
						</ul>
						<button class="primary-btn2 btn-xs"> <i class="fas fa-arrow-right fa-2x"></i></button>
					</div>
				</div>

			</div>
		</div>
	</div>
<!-- Enrolled Services End -->

<!-- Avaliable Services -->
	<section class="avservice">
		<div class="availableServices">
			<h2 class="servicetitle">Your Avaliable Services</h2>
			<p class="d">Some New Service is available for you !</p>
		</div>
	</section>
	<div class="container servicecontainer">
		<div class="row">
			<div class="col-md-3">
					<div class="single_feature">
						<div class="icon"><span class="flaticon-student"><i class="fas fa-utensils"></i></span></div>
						<div class="desc">
							<h4 class="mt-3 mb-2"><b> Food Service</b></h4>
							<p class="carapara">
								Take healthy meal at your door!No need to worry about protin
							</p>
							<button class="primary-btn2">Register</button>
						</div>
					</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
export default {
	layout: 'userloged',
	data(){return{
		hasservice: true
	}}
}
</script>

<style scoped>
body {
    margin: 0;font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #fff;
}
.serviceholder{
	margin-top: 150px;
}
.servicecontainer{
	margin-top: 20px;
	padding: 2px;
}
.introholder{
	background-color: #D7CCC8 !important;
	width: 100%;
	height: 330px;
}
.introtitle{
	text-align: center!important;
	padding-top: 4%;
}
.availableServices{
	/* background-color: #D7CCC8 !important; */
	width: 100%;
	height: 150px;

}
.servicetitle{
	text-align: center!important;
	padding-top: 4%;
}
.avservice{
	height: 200px;
}
.desc, button{
	margin-top: 10px;
	text-align: center;

}
.carapara{
	color: black !important;
}
</style>
