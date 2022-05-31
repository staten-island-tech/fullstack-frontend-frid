<template>
  <div>
    <Navbar class="sticky top-0" ></Navbar>
    <!-- {{ postIDs }} -->

    <ProfilePage3
      v-model="profileModalDisplay"
      @closePM="closeProfileModal"
      class="z-50"
    ></ProfilePage3>
    <div
      id="main-container"
      class="w-[100vw] h-[75vh] bg-[#eeeeee] flex flex-row justify-evenly flex-wrap overflow-y-scroll"
    >
      <li v-for="allPostsID in allPostsIDs" :key="allPostsID" class="list-none">
        <app-posts v-bind:fetchedPostID="allPostsID"></app-posts>
      </li>
    </div>
    <div class="flex flex-row place-content-end items-center mr-[4vw]">
      <button
        class="text-[4rem] items-center"
        @click="openProfileModal"
        v-if="this.$auth.loggedIn"
      >
        <img
          src="../assets/profile-circled.svg"
          alt="Profile"
          class="h-[5vh] mt-[1rem] mr-[0.5vw]"
          title="Profile"
        />
      </button>
      <button
        class="text-[4rem] text-[#330066] items-center"
        @click="openCreatePostModal"
        v-if="this.$auth.loggedIn"
        title="Add Post"
      >
        &#43;
      </button>
    </div>
    <PostCreate
      v-model="createPostModalDisplay"
      @closeCP="closeCreatePostModal"
    ></PostCreate>
    <!-- <LModalPost v-show="modalLargePostOpen" @closeLM ="closeModalLargePost"></LModalPost> -->
  </div>
</template>

<script>
import Posts from "../components/Posts.vue";
import Navbar from "../components/Navbar.vue";
// import { mapState } from "frontend/store/vuexTest.js";
// import LModalPost from "../components/LModalPost.vue";
export default {
  components: {
    "app-posts": Posts,
    // 'LModalPost': LModalPost,
  },
  props: ["searchedPostsIDs"],
  data() {
    return {
      createPostModalDisplay: false,
      profileModalDisplay: false,
      // modalLargePostOpen: false,
      // modalLargePostOpenID: "",
      allPostsIDs: [],
      postAPI: [],
      fetchedPostID: "",
      // searchedPostsIDs: ["rap"],
    };
  },
  methods: {
    closeCreatePostModal() {
      this.createPostModalDisplay = false;
    },
    openCreatePostModal: async function () {
      this.createPostModalDisplay = true;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptionsGet = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/users/spotifyToken",
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
    // openModalLargePost() {
    //   // console.log("attempting to open Modal for Large Post")
    //   this.modalLargePostOpen = true;
    // },
    // closeModalLargePost() {
    //   // console.log("attempting to close Modal for Large Post")
    //   this.modalLargePostOpen = false;
    // },
    // closeProfileModal() {
    //   this.profileModalDisplay = false;
    // },
    openProfileModal() {
      this.profileModalDisplay = !this.profileModalDisplay;
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
    // this.mapState(["postIDs"]);
  },
};
</script>
