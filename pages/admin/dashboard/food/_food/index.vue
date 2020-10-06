<template>
  <div>
    <div class="app flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h2 style="text-align: center">Add Food Service</h2>
            <p v-if="message" class="msg">{{message}}</p>
            <div class="card mx-4">
              <div class="card-body p-4">
                <form @submit.prevent="onsubmit">
                  <div class="form-group">
                    <label for="source">Food Title</label>
                    <input
                      type="text"
                      v-model="food.food_tittle"
                      class="form-control"
                      id="source"
                      placeholder="Enter Title"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Food Description</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      v-model="food.food_description"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    food: {
      food_tittle: "",
      food_description: "",
    },
    message: "",
  }),
  mounted() {
    // this.$axios.$get('/api/action/getalltopic').then(res=>{
    // 	console.log(res, 'res')
    // 	this.topicList = res.data;
    // 	console.log(this.topicList, 'topl')
    // })
  },
  methods: {
    onsubmit() {
      this.$axios
        .$post("http://localhost:3000/api/users/addfood", this.food)
        .then((res) => {
          if (res.success == true) {
            this.message = res.message;
            setTimeout(() => {
              this.message = false;
            }, 3000);
          }
        });
    },
  },
};
</script>

<style scoped>
.msg {
  color: green;
  text-align: center;
}
</style>
