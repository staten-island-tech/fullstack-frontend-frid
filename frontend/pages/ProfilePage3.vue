 <template>
  <div class="bg-[#eeeeee]">
    <Navbar />
    <div class="flex flex-row">
      <div id="sidecar" class="flex flex-col align-center w-[10vw] h-[92vh]">
        <span
          class="
            w-[12.5vh]
            h-[12.5vh]
            bg-[#6957e7]
            rounded-[100%]
            mx-[2.5vw]
            mt-[5vh]
            mb-[2.5vh]
          "
        ></span>
        <div>
          <p
            id="username"
            class="
              mx-[1rem]
              text-[.95rem] text-[#3a2d80]
              font-semibold
              w-[7.5vw]
              flex
              relative
              left-[1.5vw]
              font-lora
              brightness-50
            "
          >
            Ox2bc#3253
          </p>
          <p
            id="bio"
            class="
              mx-[1rem]
              text-[.75rem] text-[#3a2d80]
              font-normal
              w-[7.5vw]
              flex
              relative
              left-[1.5vw]
              font-lora
              brightness-50
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit tiel
          </p>
        </div>
        <button
          class="
            mx-[1rem]
            my-[2rem]
            text-[1.25rem] text-[#3a2d80]
            font-medium
            w-[10vw]
            inline-block
            relative
            font-lora
          "
          id="hover-underline-animation"
        >
          Followers
        </button>
        <button
          class="
            mx-[1rem]
            my-[2rem]
            text-[1.25rem] text-[#3a2d80]
            font-medium
            w-[10vw]
            inline-block
            relative
            font-lora
          "
          id="hover-underline-animation"
        >
          Following
        </button>
        <button
          class="
            mx-[1rem]
            my-[2rem]
            text-[1.25rem] text-[#3a2d80]
            font-medium
            w-[10vw]
            inline-block
            relative
            font-lora
          "
          @click="openModal"
          id="hover-underline-animation"
        >
          <NuxtLink v-model="modalOpen">User Settings</NuxtLink>
          
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
            class="
              h-[8.25vh]
              w-[8.25vw]
              hover:border-b-2
              border-[#3a2d80]
              flex
              justify-center
              items-center
            "
          >
            <img src="../assets/all-posts.svg" alt="Logo" class="h-[5vh]" />
          </div>
          <div
            id="liked-posts"
            class="
              h-[8.25vh]
              w-[8.25vw]
              hover:border-b-2
              border-[#3a2d80]
              flex
              justify-center
              items-center
            "
          >
            <img src="../assets/liked.svg" alt="Logo" class="h-[5vh]" />
          </div>
          <div
            id="tagged-posts"
            class="
              h-[8.25vh]
              w-[8.25vw]
              hover:border-b-2
              border-[#3a2d80]
              flex
              justify-center
              items-center
            "
          >
            <img src="../assets/tagged-posts.svg" alt="Logo" class="h-[5vh]" />
          </div>
        </div>
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
          "
        >
          <!-- <button v-on:click="getPosts">testclcikmagik?</button> -->
          <li v-for="allPostsID in allPostsIDs" :key="allPostsID">
            <app-posts v-bind:fetchedPostID=allPostsID></app-posts>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from "../components/Posts.vue";
export default {
  components: {
    'app-posts': Posts,
  },
  name: "Profile_Page3",
  data() {
    return {
      // modalOpen: false,
      modalOpen: false,
      allPostsIDs: [],
      postAPI:[],
    };
  },
  methods: {
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