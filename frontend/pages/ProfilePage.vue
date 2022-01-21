<template>
  <div class="bg-slate-500 max-h-max h-screen text-black">
    <div class="flex justify-center h-[22vh]">
      <v-vanta effect="waves" :options="options"></v-vanta>
      <div
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
          bg-[#fbf6ea]
          mb-[3vh]
        "
      ></div>
    </div>
    <div
      class="
        border-2 border-black
        flex flex-row
        items-center
        justify-center
        h-[78vh]
      "
    >
      <div
        class="
          border-2 border-black
          flex flex-col
          items-center
          justify-center
          h-[78vh]
          w-[30vw]
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
            mx-[2.5vw]
            my-[5vh]
            w-[15vw]
            bg-[#fbf6ea]
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
            mx-[2.5vw]
            mb-[5vh]
            w-[15vw]
            bg-[#fbf6ea]
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
            mx-[2.5vw]
            mb-[5vh]
            w-[15vw]
            bg-[#fbf6ea]
          "
        >
          User Settings
        </button>
      </div>
      <div
        class="
          border-2 border-black
          flex flex-col
          items-center
          justify-center
          h-[78vh]
        "
      >
        <div
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
            bg-[#fcf6f5]
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
</template>

<script>
export default {
  name: "Profile_Page",
  data() {
    return {
      allPosts: true,
      followersFollowing: false,
      userSettings: false,
      options: {
        mouseControls: true,
        touchControls: true,
        minHeight: 500.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      },
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
