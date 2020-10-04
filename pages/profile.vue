<template>
    <div>
        <section class="introholder">
            <div class="introtitle">
                <h4 class="introtitle">You Activated Services</h4>
                <p class="d">Some New Service is available for you !</p>
            </div>
        </section>
    <div class="profile">
        <h1>Your Profile</h1>
        <div class="profileContainer">
            <div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="loginForm">
							<form class="formArea" id="myForm">
								<div class="row">
									<div class="col-lg-12 formGroup">
										<input name="text" placeholder="First Name">
										<multiselect 
											v-model="tags"
											:options="optionsu"
											:multiple="false"
											:taggable="true"
											@tag="addTag"
											placeholder="Select University">
										</multiselect>
										<input name="Semister" placeholder="Semister">
											<input name="email" placeholder="Email" type="email">
										<input name="password" placeholder="Enter Your password" required="">
									</div>
								</div>
							</form>
						</div>
					</div>
				<div class="col-md-6">
					<div class="loginForm">
						<form class="formArea" id="myForm">
							<div class="row">
								<div class="col-lg-12 formGroup">
									<multiselect 
										v-model="tags"
										:options="options"
										:multiple="false"
										:taggable="true"
										@tag="addTag"
										placeholder="Select Dept">
									</multiselect>
									<input type="date" name="Date of Birth" id="">
									<input class="" type="file" placeholder="photo">
									<input name="address" placeholder="address">
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="col-lg-12 text-center">
					<div class="buttonholder">
						<button type="button" class="primary-btn" data-dismiss="modal">Submit</button>
					</div>
				</div>
			</div>
        </div>
     </div>
    </div>
</div>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
	layout: "userloged",
	components: { Multiselect },
	data: () => ({
    postBody: '',
    tags: [],
	options: ['CSE', 'EEE', 'BBA'],
	optionsu: ['daffodil', 'jahingirNagar', 'Jagannath', 'Dhaka']
  }),
  methods: {
    addTag(newTag) {
      this.options.push(newTag)
      this.tags.push(newTag)
    },
    onInput({ data }) {
      this.postBody = data
    }
  }
}
</script>

<style>
.loginForm {
	text-align: center;
	padding: 22px;
}
.profile{
    margin-top: 10%;
}
.profile h1{
    text-align: center;
}
.profileContainer{
    /* font-size: 20px; */
    padding: 10px;
    margin: 10px;
}
.formGroup input{
    font-size: 20px;
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
.profileContainer input{
	margin :20px;
}
.form-controls{
    border: 1px solid blue;
    text-align: center
    
}

</style>
