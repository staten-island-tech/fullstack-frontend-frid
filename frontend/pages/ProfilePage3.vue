 <template>
  <!-- <div>
    <Navbar />
    <div id="total-frame" class="flex flex-row">
      <div id="side-navbar" class="flex flex-col w-[12vw] h-[92vh] py-[10rem]">
        <button
          v-on:click="allPostsButton"
          class="
            border-2
            bg-[#330066]
            text-white
            font-semibold
            rounded-[1.75rem]
            m-[2vh]
            p-[1rem]
            text-[1.5rem]
          "
        >
          All Posts3
        </button>
        <button
          v-on:click="followersButton"
          class="
            border-2
            bg-[#330066]
            text-white
            font-semibold
            rounded-[1.75rem]
            m-[2vh]
            p-[1rem]
            text-[1.5rem]
          "
        >
          Followers
        </button>
        <button
          v-on:click="followingButton"
          class="
            border-2
            bg-[#330066]
            text-white
            font-semibold
            rounded-[1.75rem]
            m-[2vh]
            p-[1rem]
            text-[1.5rem]
          "
        >
          Following
        </button>
        <button
          v-on:click="userSettingsButton"
          class="
            border-2
            bg-[#330066]
            text-white
            font-semibold
            rounded-[1.75rem]
            m-[2vh]
            p-[1rem]
            text-[1.5rem]
          "
        >
          User Settings
        </button>
      </div>
      <div
        id="main-frame"
        class="
          rounded-tl-[5.13rem]
          w-[88vw]
          h-[92vh]
          flex flex-col
          bg-[#330066]
          items-center
          p-[1rem]
        "
      >
        <div
          id="blank-box"
          class="w-[70vw] border-2 bg-white h-[12vh] rounded-[1.5rem] my-[1rem]"
        ></div>
        <div
          id="window"
          class="
            w-[70vw]
            border-2
            bg-white
            h-[70vh]
            rounded-[1.5rem]
            mt-[1rem]
            flex
            items-center
            justify-center
          "
        >
          <div v-if="this.allPosts == true">
            <AllPosts />
          </div>
          <div v-else-if="this.followers == true">
            <Followers />
          </div>
          <div v-else-if="this.following == true">
            <Following />
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
  </div> -->
  <div>
    <Navbar />
  </div>
</template>

<script>
export default {
  name: "Profile_Page3",
  data() {
    return {
      // allPosts: true,
      // followers: false,
      // following: false,
      // userSettings: false,
    };
  },
  methods: {
    // allPostsButton() {
    //   this.allPosts = true;
    //   this.followers = false;
    //   this.following = false;
    //   this.userSettings = false;
    // },
    // followersButton() {
    //   this.allPosts = false;
    //   this.following = false;
    //   this.followers = true;
    //   this.userSettings = false;
    // },
    // followingButton() {
    //   this.allPosts = false;
    //   this.following = true;
    //   this.followers = false;
    //   this.userSettings = false;
    // },
    // userSettingsButton() {
    //   this.allPosts = false;
    //   this.followers = false;
    //   this.following = false;
    //   this.userSettings = true;
    // },
  },
};
</script>
