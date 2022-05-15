<template>
  <div>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name: "TESTCENTER_page",
  data() {
    return {};
  },
  methods: {
    async login() {
      await this.$auth.loginWith("auth0");
    },
  },
};
</script>
