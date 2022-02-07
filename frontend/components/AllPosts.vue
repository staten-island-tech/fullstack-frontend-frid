<template>
  <div class="flex items-center justify-center h-[100vh] text-center">
    <p>
      All Posts <br />
      Expected Completion: TBD
    </p>
    <button v-on:click="test">hello</button>
  </div>
</template>

<script>
export default {
  name: "AllPosts",
  data() {
    return {};
  },
  methods: {
    test: async function () {
      try {
        const res = fetch("http://127.0.0.1:3000/api/v1/posts");
        console.log(res);
        const data = await res.json;
        console.log(data);
      } catch (error) {
        cosnole.log(error);
      }
    },
  },
};
</script>