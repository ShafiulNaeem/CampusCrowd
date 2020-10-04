<template>
  <div>
    <div class="breadcrumb bg-color-1">
      <div class="breadcrumb-item active hb-dashboard">
        <span class="text-dark ml-2">
          <strong>Services List</strong>
        </span>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto">
          <a href="/admin/dashboard/services/addnew" class="btn btn-primary"
            >Add New</a
          >
        </div>
      </div>

      <table
        class="table table-striped table-sm bg-color-8 table-bordered table-responsive-sm mt-3"
      >
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="services in servicesList" v-bind:key="services._id">
            <td>{{ services.service_tittle }}</td>
            <td>{{ services.service_description }}</td>
            <td>
              <!-- <a @click="updatetopic(features)">
                        <i class="fa fa-pencil"></i>
                    </a> -->

              <button @click="updatetopic(services)">Update</button>
            </td>

            <td>
              <!-- <button data-toggle="modal" value="sdsd" class="delete" data-target="#myModal">
                        <i class="fa fa-trash-o" aria-hidden="true"> </i>
                    </button> -->

              <button v-on:click="deleteser(services._id)">Delete</button>
            </td>

            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Confirm Delete</h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>
                  <div class="modal-header">
                    Are you sure you want to delete the entry?
                  </div>
                  <div class="modal-footer">
                    <a href="" class="btn btn-danger yes">yes</a>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  layout: "admin",

  data: () => ({
    servicesList: {},
  }),
  mounted() {
    this.$axios.$get("/api/users/getallservices").then((res) => {
      console.log(res, "res");
      this.servicesList = res.data;
    });
  },

  methods: {
    updatetopic(_id) {
      this.$router.push({
        path: "/admin/dashboard/services/addservice" + _id,
      });
    },

    //    updatetopic(_id){
    //        this.$axios.put('api/users/getupdatedfeatures/' + _id).then((result) => {
    //            console.log(result)
    //            this.featuresList = result.data
    //        })
    //    },
    deleteser(_id) {
      this.$axios.delete("api/users/deleteservice/" + _id).then((result) => {
        //   console.log(result)
        this.servicesList = result.data;
      });
    },
  },
};
</script>

