<template>
  <div>
    <Navbar />
    <div id="total-frame" class="flex flex-row">
      <div id="side-navbar" class="flex flex-col w-[12vw] h-[92vh] py-[10rem]">
        <button v-on:click="allPostsButton" class="border-2 bg-[#330066] text-white font-semibold rounded-[1.75rem] m-[2vh] p-[1rem] text-[1.5rem]">All Posts</button>
        <button v-on:click="followersFollowingButton" class="border-2 bg-[#330066] text-white font-semibold rounded-[1.75rem] m-[2vh] p-[1rem] text-[1.5rem]">Followers</button>
        <button v-on:click="followersFollowingButton" class="border-2 bg-[#330066] text-white font-semibold rounded-[1.75rem] m-[2vh] p-[1rem] text-[1.5rem]">Following</button>
        <button v-on:click="userSettingsButton" class="border-2 bg-[#330066] text-white font-semibold rounded-[1.75rem] m-[2vh] p-[1rem] text-[1.5rem]">User Settings</button>
      </div>
      <div id="main-frame" class="w-[88vw] h-[92vh] flex flex-col bg-[#330066] items-center p-[1rem]">
        <div id="blank-box" class="w-[70vw] border-2 bg-white h-[12vh] rounded-[1.5rem] my-[1rem]"></div>  
        <div id="window" class="w-[70vw] border-2 bg-white h-[70vh] rounded-[1.5rem] mt-[1rem] flex items-center justify-center">
          <div v-if="this.allPosts == true">
              <AllPosts />
            </div>
            <div v-else-if="this.followersFollowing == true">
              <FollowersFollowing />
            </div>
            <div v-else-if="this.userSettings == true">
              <UserSettings />
            </div>
            <div v-else>
              There has been an error loading this part of the site. Please try
              again Later
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile_Page2",
  data() {
    return {
      allPosts: true,
      followersFollowing: false,
      userSettings: false,
    };
  },
  methods: {
    allPostsButton() {
      this.allPosts = true;
      this.followersFollowing = false;
      this.userSettings = false;
    },
    followersFollowingButton() {
      this.allPosts = false;
      this.followersFollowing = true;
      this.userSettings = false;
    },
    userSettingsButton() {
      this.allPosts = false;
      this.followersFollowing = false;
      this.userSettings = true;
    },
  },
};
</script>
