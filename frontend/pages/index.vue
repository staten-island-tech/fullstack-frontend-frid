<template>
  <div>
    <Navbar class="sticky top-0" />
    <NuxtLink to="/ProfilePage3"> Profile </NuxtLink>
    <div 
    id="main-container"
    class="
      w-[80vw]
      h-[75vh]
      bg-[#eeeeee]
      flex flex-row
      justify-evenly
      flex-wrap
      overflow-y-scroll
    ">
      <li v-for="allPostsID in allPostsIDs" :key="allPostsID">
      <Posts/>
      </li>
    </div>
    <button class="" @click="openModal">Create Post</button>
    <PostCreate v-model="modalOpen"></PostCreate>
    <div class="bg-slate-400 h-[5vh]"></div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      modalOpen: false,
      allPostsIDs: [],
      postAPI:[],
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    getPosts: async function() {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/",
          requestOptionsGet
        )
        const result = await response.json();
        this.postAPI = result.data.posts;
        this.postAPI.forEach((element) => {
          this.allPostsIDs.push(element._id);
        });
        console.log(this.allPostsIDs)
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getPosts()
  }
};
</script>
