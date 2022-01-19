<template>
  <div class="bg-slate-400 max-h-max h-screen">
    <div class="flex justify-center h-[22vh]">
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
          border-2 border-slate-400
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
