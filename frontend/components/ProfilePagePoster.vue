<template>
  <div
    class="fixed flex items-center justify-center bg-slate-300 h-[75vh]"
    v-show="value"
  >
    <div class="flex flex-row">
      <div id="sidecar" class="flex flex-col align-center w-[12vw] h-[75vh]">
        <span
          class="w-[12.5vh] h-[12.5vh] bg-[#6957e7] rounded-[100%] mx-[2.5vw] mt-[5vh] mb-[2.5vh]"
        ></span>
        <div>
          <p
            id="username"
            class="mx-[1rem] text-[.95rem] text-[#3a2d80] font-semibold w-[7.5vw] flex relative left-[1.5vw] font-lora brightness-50"
          >
            {{ this.username }}
          </p>
          <p
            id="bio"
            class="mx-[1rem] text-[.75rem] text-[#3a2d80] font-normal w-[7.5vw] flex relative left-[1.5vw] font-lora brightness-50"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit tiel
          </p>
          <button
            @click="followUser"
            class="mx-[1rem] text-[.95rem] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[5px] font-lora py-[2.5px] rounded-md transform active:translate-y-px flex relative left-[1.5vw]"
          >
            Follow
          </button>
        </div>
        <button
          class="mx-[1rem] my-[2rem] text-[1.25rem] text-[#3a2d80] font-medium w-[10vw] inline-block relative font -lora"
          id="hover-underline-animation"
        >
          Followers
        </button>
        <button
          class="mx-[1rem] my-[2rem] text-[1.25rem] text-[#3a2d80] font-medium w-[10vw] inline-block relative font-lora"
          id="hover-underline-animation"
        >
          Following
        </button>
        <button
          class="mx-[1rem] my-[2rem] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px"
          @click.prevent="closePMP"
        >
          Back
        </button>
      </div>

      <!-- <Modal v-show="modalOpen"/> -->
      <!-- @click="openModal" -->

      <div id="main-content" class="px-[5vw]">
        <div
          id="main-menu-container"
          class="flex flex-row justify-center w-[80vw] h-[8.25vh] mt-[7.5vh]"
        >
          <div
            id="all-posts"
            class="h-[8.25vh] w-[8.25vw] hover:border-b-2 border-[#3a2d80] flex justify-center items-center"
          >
            <img src="../assets/all-posts.svg" alt="Logo" class="h-[5vh]" />
          </div>
          <div
            id="liked-posts"
            class="h-[8.25vh] w-[8.25vw] hover:border-b-2 border-[#3a2d80] flex justify-center items-center"
          >
            <img src="../assets/liked.svg" alt="Logo" class="h-[5vh]" />
          </div>
          <div
            id="tagged-posts"
            class="h-[8.25vh] w-[8.25vw] hover:border-b-2 border-[#3a2d80] flex justify-center items-center"
          >
            <img src="../assets/tagged-posts.svg" alt="Logo" class="h-[5vh]" />
          </div>
        </div>
        <div
          id="main-container"
          class="w-[80vw] h-[55vh] flex flex-row justify-evenly flex-wrap overflow-y-scroll"
        >
          <!-- <button v-on:click="getPosts">testclcikmagik?</button> -->
          <li
            v-for="allPostsID in allPostsIDs"
            :key="allPostsID"
            class="list-none"
          >
            <Posts v-bind:fetchedPostID="allPostsID"></Posts>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from "./Posts.vue";
export default {
  components: {
    "app-posts": Posts,
  },
  name: "Profile_Page3",
  props: {
    value: {
      required: true,
    },
    username: String,
  },
  data() {
    return {
      // modalOpen: false,
      modalOpen: false,
      allPostsIDs: [],
      postAPI: [],
      activeUsername: null,
      username: null,
      displayedUsername: null,
    };
  },
  methods: {
    followUser: async function () {
      console.log(this.username);
      console.log(this.displayedUsername);

      //first we run a get request query, finding and savign the id of the user whom active user is trying to follow

      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          process.env.PRODUCTION_URL +
            "/api/v1/users?username=" +
            this.username,
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result.data.users[0].username);
      } catch (error) {
        console.log(error);
      }
    },
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    getPosts: async function () {
      console.log(this.username);
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          process.env.PRODUCTION_URL +
            "/api/v1/posts?userName=" +
            this.username,
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result.data.posts);
        for (let i = 0; i < result.data.posts.length; i++) {
          this.allPostsIDs.push(result.data.posts[i]._id);
        }
        // console.log(this.allPostsIDs);
        // this.postAPI = result.data.posts;
        // this.postAPI.forEach((element) => {
        //   this.allPostsIDs.push(element._id);
        // });
        // console.log(this.allPostsIDs);
        console.log("hell world");
      } catch (error) {
        console.log(error);
      }
    },
    getUserInfo: async function () {
      let userid = this.$auth.user.sub;
      let n = 6;
      this.activeUsername = userid.substring(n);
      // console.log(this.username);

      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          process.env.PRODUCTION_URL + "/api/v1/users/" + this.activeUsername,
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result.data.user.username);
        this.displayedUsername = result.data.user.username;
        console.log(this.displayedUsername);
      } catch (error) {
        console.log(error);
      }
    },
    closePMP() {
      this.$emit("input", !this.value);
    },
  },
  created() {
    // this.getUserInfo();
    this.getPosts();
  },
};
</script>

<style>
#hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #3a2d80;
  transform-origin: bottom right;
  transition: transform 0.35s ease-out;
}

#hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
