<template>
  <div>
    <CommonHeader :headerinfo="headerinfo" />
    <div class="universities">
      <div class="container">
        <div class="row">
          <div class="col-md-6 select">
            <multiselect
              class="form-control"
              v-model="tags"
              :options="optionsu"
              :multiple="false"
              :taggable="true"
              @tag="addTag"
              placeholder="Select University"
            ></multiselect>
          </div>
          <div class="col-md-6">
            <multiselect
              class="form-control"
              v-model="tags"
              :options="options"
              :multiple="false"
              :taggable="true"
              @tag="addTag"
              placeholder="Select Deptartment"
            ></multiselect>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "~/components/user/CommonHeader";
import Multiselect from "vue-multiselect";
export default {
  layout: "userloged",
  components: { CommonHeader, Multiselect },
  data() {
    return {
      headerinfo: {
        title: "Universities",
        description: "Here u can find our all the universities",
      },
      postBody: "",
      tags: [],
      options: ["CSE", "EEE", "BBA"],
      optionsu: ["daffodil", "jahingirNagar", "Jagannath", "Dhaka"],
    };
  },
  methods: {
    addTag(newTag) {
      this.options.push(newTag);
      this.tags.push(newTag);
    },
    onInput({ data }) {
      this.postBody = data;
    },
  },
};
</script>

<style scoped>
.form-control {
  border: 1px solid blue;
  text-align: center;
}
.universities {
  margin-top: 20px;
  height: 330px;
  margin-bottom: 20px;
}
</style>
