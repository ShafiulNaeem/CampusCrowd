<template>
  <div class="container">
    <no-ssr placeholder="Loading Your Editor...">
      <vue-editor ref="test" placeholder="Write Something..." v-model="content">
      </vue-editor>
    </no-ssr>
  </div>
</template>
<script>


export default {
  mounted() {
    debugger;
  },
  asyncData() {
    return {
      content: "",
      pageIsMounted: false
    };
  },
  methods: {
    reloadWindow() {
      window.location.reload(true);
    }
  }
};
</script>