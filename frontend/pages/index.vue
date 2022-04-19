<template>
  <div>
    <Navbar class="sticky top-0" />
    <NuxtLink to="/ProfilePage3"> Profile </NuxtLink>
    <div
      id="main-container"
      class="w-[80vw] h-[75vh] bg-[#eeeeee] flex flex-row justify-evenly flex-wrap overflow-y-scroll"
    >
      <li v-for="allPostsID in allPostsIDs" :key="allPostsID" class="list-none">
        <button @click="openModalLargePost">
          <app-posts v-bind:fetchedPostID=allPostsID></app-posts>        
        </button>
      </li>
    </div>
    <button
      class="text-[4rem] text-[#330066] place-content-center float-right mr-[1vw]"
      @click="openModal"
    >
      &#43;
    </button>
    <PostCreate v-model="modalOpen"></PostCreate>
    <LModalPost v-model="modalLargePostOpen"></LModalPost>
  </div>
</template>

<script>
import Posts from "../components/Posts.vue";
export default {
  components: {
    'app-posts': Posts,

  },
  data() {
    return {
      modalOpen: false,
      modalLargePostOpen: false,
      allPostsIDs: [],
      postAPI: [],
      fetchedPostID: "",
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    openModalLargePost() {
      console.log("attempting to open Modal for Large Post")
      this.modalLargePostOpen = !this.modalLargePostOpen;
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
  },
  created() {
    this.getPosts();
  },
};
</script>
