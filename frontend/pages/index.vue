<template>
  <div>
    <Navbar class="sticky top-0" />
    <NuxtLink to="/ProfilePage3"> Profile </NuxtLink>
    <div
      id="main-container"
      class="w-[80vw] h-[75vh] bg-[#eeeeee] flex flex-row justify-evenly flex-wrap overflow-y-scroll"
    >
      <li v-for="allPostsID in allPostsIDs" :key="allPostsID">
        <app-posts fetchedPostID="61f5d9d9000fb29e24d1bad9"></app-posts>
      </li>
    </div>
    <button class="" @click="openModal">Create Post</button>
    <PostCreate v-model="modalOpen"></PostCreate>
    <div class="bg-slate-400 h-[5vh]"></div>
    <button v-on:click="test">testclcikmagik?</button>
    <button
      class="text-[4rem] text-[#330066] place-content-center float-right mr-[1vw]"
      @click="openModal"
    >
      &#43;
    </button>
    <PostCreate v-model="modalOpen"></PostCreate>
    <!-- <app-posts fetchedPostID="61f5d9d9000fb29e24d1bad9"></app-posts> -->
  </div>
</template>

<script>
import Posts from "../components/Posts.vue";
// import fetchedPostID from "@/components/Posts.vue";
export default {
  components: {
    'app-posts': Posts,

  },
  data() {
    return {
      modalOpen: false,
      allPostsIDs: [],
      postAPI: [],
      fetchedPostID: "",
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    getPosts: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/",
          requestOptionsGet
        );
        const result = await response.json();
        this.postAPI = result.data.posts;
        this.postAPI.forEach((element) => {
          this.allPostsIDs.push(element._id);
        });
        console.log(this.allPostsIDs);
      } catch (error) {
        console.log(error);
      }
    },
    test() {
      this.fetchedPostID='61f5d9d9000fb29e24d1bad9',
      console.log(this.fetchedPostID);
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
