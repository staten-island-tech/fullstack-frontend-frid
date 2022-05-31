<template>
  <div
    class="h-[8vh] w-[100%] bg-gradient-to-b from-[#dddddd] to-[#eeeeee] flex items-center brightness-[97%] z-[2]"
  >
    <NuxtLink to="/" class="w-[20rem] ml-[4rem] my-[2rem]"
      ><img src="../assets/Logo2.png" alt="Logo" class="h-[7.5vh]"
    /></NuxtLink>
    <div class="h-[8vh] w-[100%] mr-[5vw] flex items-center justify-end">
      <div id="search-bar" v-if="this.$auth.loggedIn">
        <input
          type="text"
          placeholder="Search for posts by Genre, Post Name, or Username"
          class="h-[4vh] w-[35vw] p-[1rem] rounded-lg"
          v-model="query"
        />
        <button
          class="mx-[1vw] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px"
          @click="querySort"
        >
          Search
        </button>
      </div>
      <!-- <button
        class="mx-[1.5rem] text-[1.25rem] p-[0.75rem] text-[#3a2d80] font-semibold font-lora"
        id="hover-underline-animation"
        v-if="this.$auth.loggedIn"
        @click="openProfileModal"
      >
        Profile
      </button> -->

      <button
        class="mx-[1.5rem] text-[1.25rem] p-[0.75rem] text-[#3a2d80] font-semibold font-lora"
        id="hover-underline-animation"
        @click="logout"
        v-if="this.$auth.loggedIn"
      >
        <!-- <NuxtLink to="/Login">Login</NuxtLink> -->
        Log Out
      </button>
      <button
        class="mx-[1.5rem] text-[1.25rem] p-[0.75rem] text-[#3a2d80] font-semibold font-lora"
        id="hover-underline-animation"
        @click="login"
        v-else
      >
        Log In / Sign Up
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      user: this.$auth.user,
      query: null,
      tags: [
        "Accapella",
        "Alternative Rock",
        "Blues",
        "Classical",
        "Classic Rock",
        "Country",
        "Desi",
        "Disco",
        "Drill",
        "Electronic",
        "Folk",
        "Foreign",
        "Grime",
        "Grunge",
        "Hard Rock",
        "Hip-hop",
        "Indie",
        "Instrumental",
        "Jazz",
        "Metal",
        "Melodic Rap",
        "Mumble Rap",
        "Musical Theatre",
        "Nightcore",
        "Opera",
        "Pop",
        "Psychadelic Rock",
        "Punk Rock",
        "R&B",
        "Rap",
        "Reggae",
        "Rock",
        "Soul",
        "Techno",
      ],
      searchPostAPI: [],
      searchedPostsIDs: ["testing"],
    };
  },
  methods: {
    // closeProfileModal() {
    //   this.profileModalDisplay = false;
    // },
    // openProfileModal() {
    //   this.profileModalDisplay = true;
    // },
    async login() {
      await this.$auth.loginWith("auth0");
    },
    async logout() {
      await this.$auth.logout();
    },
    querySort: async function () {
      const queryCaps =
        this.query.charAt(0).toUpperCase() + this.query.slice(1);

      //any posts with query as a tag

      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts?tags.tagName=" + queryCaps,
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result);
        this.searchPostAPI = result.data.posts;
        this.searchPostAPI.forEach((element) => {
          this.searchedPostsIDs.push(element._id);
        });
        console.log(this.searchedPostsIDs)
      } catch (error) {
        console.log(error);
      }

      //any posts with query as a post name

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts?postName=" + queryCaps,
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result);
        this.searchPostAPI = result.data.posts;
        this.searchPostAPI.forEach((element) => {
          this.searchedPostsIDs.push(element._id);
        });
      } catch (error) {
        console.log(error);
      }

      //any posts with query as a user name

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts?userName=" + queryCaps,
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result);
        this.searchPostAPI = result.data.posts;
        this.searchPostAPI.forEach((element) => {
          this.searchedPostsIDs.push(element._id);
        });
        console.log(this.searchedPostsIDs)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
#hover-underline-animation:after {
  content: "";
  position: absolute;
  /* width: 100%; */
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
