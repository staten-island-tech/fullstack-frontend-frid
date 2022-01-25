<template>
<div>
 <Navbar/>
  <div class="max-h-max h-screen text-black">
    <div class="flex justify-center h-[22vh] bg-[#330066]">
      <div id="blank-white-box"
        class="
          border-2 border-black
          rounded-[1.5rem]
          flex
          self-end
          items-center
          justify-center
          flex-col
          p-[4rem]
          h-[12vh]
          w-[70vw]
          mx-[2.5vw]
          bg-white
          mb-[3vh]
        "
      ></div>
    </div>
    <div id="button/window-frame"
      class="
        border-2 border-black
        flex flex-row
        items-center
        h-[78vh]
        w-[100%]
      "
    >
      <div id="button-frame"
        class="
          flex flex-col
          items-center
          justify-center
          h-[78vh]
          w-[12vw]
          bg-[#330066]
        "
      >
        <button
          v-on:click="allPostsButton"
          class="
            border-2 border-black
            rounded-[1rem]
            flex
            self-end
            items-center
            justify-center
            flex-col
            p-[1rem]
            w-[10vw]
            bg-white
            my-[2vh]

          "
        >
          All Posts
        </button>
        <button
          v-on:click="followersFollowingButton"
          class="
            border-2 border-black
            rounded-[1rem]
            flex
            self-end
            items-center
            justify-center
            flex-col
            p-[1rem]
            w-[10vw]
            bg-white
            my-[2vh]

          "
        >
          Followers <br />
          & <br />
          Following
        </button>
        <button
          v-on:click="userSettingsButton"
          class="
            border-2 border-black
            rounded-[1rem]
            flex
            self-end
            items-center
            justify-center
            flex-col
            p-[1rem]
            w-[10vw]
            bg-white 
            my-[2vh]

          "
        >
          User Settings
        </button>
      </div>
      <div id="window-frame"
        class="
          flex flex-col
          items-center
          justify-center
          h-[78vh]
          bg-[#330066]
          w-[88vw]
        "
      >
        <div id="window"
          class="
            border-2 border-black
            rounded-[1.5rem]
            flex
            self-end
            items-center
            justify-center
            flex-col
            p-[4rem]
            h-[70vh]
            w-[70vw]
            mx-[2.5vw]
            mb-[5vh]
            bg-white
          "
        >
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
  </div>
</template>

<script>
export default {
  name: "Profile_Page",
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
