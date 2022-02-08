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
    return {
      requestOptions: {
        method: "GET",
        redirect: "follow",
      },
    };
  },
  methods: {
    test() {
      fetch(
        "http://127.0.0.1:3000/api/v1/posts/61f8189703d081773c990899",
        this.requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result.data.post.totalLikes))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>