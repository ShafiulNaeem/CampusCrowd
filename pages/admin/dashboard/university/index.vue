<template>
  <div>
    <div class="breadcrumb bg-color-1">
      <div class="breadcrumb-item active hb-dashboard">
        <span class="text-dark ml-2">
          <strong>University List</strong>
        </span>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-auto">
          <a href="/admin/dashboard/university/addnew" class="btn btn-primary"
            >Add New</a
          >
        </div>
      </div>

      <table
        class="table table-striped table-sm bg-color-8 table-bordered table-responsive-sm mt-3"
      >
        <thead>
          <tr>
            <th>Name</th>
            <!-- <th>Details</th> -->
            <th>Description</th>
            <th>Department</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="university in universityList" v-bind:key="university._id">
            <td>{{ university.uni_name }}</td>
            <!-- <td>{{ university.uni_detail }}</td> -->
            <td>{{ university.uni_description }}</td>
            <td>{{ university.uni_department }}</td>
            <td>
              <!-- <a @click="updatetopic(features)">
                        <i class="fa fa-pencil"></i>
                    </a> -->

              <button @click="updateuni(university)">Update</button>
            </td>

            <td>
              <!-- <button data-toggle="modal" value="sdsd" class="delete" data-target="#myModal">
                        <i class="fa fa-trash-o" aria-hidden="true"> </i>
                    </button> -->

              <button v-on:click="deleteuniversity(university._id)">Delete</button>
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
    universityList: {},
  }),
  mounted() {
    this.$axios.$get("/api/users/getuniversitydetails").then((res) => {
      console.log(res, "res");
      this.universityList = res.data;
    });
  },

  methods: {
    updateuni(_id) {
      this.$router.push({
        path: "/admin/dashboard/university/adduniversity" + _id,
      });
    },

    //    updatetopic(_id){
    //        this.$axios.put('api/users/getupdatedfeatures/' + _id).then((result) => {
    //            console.log(result)
    //            this.featuresList = result.data
    //        })
    //    },
    deleteuniversity(_id) {
      this.$axios.delete("api/users/deleteuniversity/" + _id).then((result) => {
        //   console.log(result)
        this.universityList = result.data;
      });
    },
  },
};
</script>

