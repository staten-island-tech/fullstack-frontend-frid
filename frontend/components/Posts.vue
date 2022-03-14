<template>
  <!-- <div
    id="main-div"
    class="
      bg-slate-500
      h-[42vh]
      w-[30vw]
      flex flex-col
      justify-center
      border-2 border-red-500
    "
  >
    <div id="userName" class="">{{ this.userName }}</div>
    <div id="postName" class="">{{ this.postName }}</div>
    <div class="bg-white h-[4vh] w-[30vw]"></div>
    <section class="bg-black h-[1px]"></section>
    <div class="bg-white h-[32vh] w-[30vw]">
      <ul
        id="track-list"
        class="text-xs max-h-[32vh] overflow-y-scroll overflow-x-scroll"
      >
        {{
          this.songList
        }}
      </ul>
    </div>
    <section class="bg-black h-[1px]"></section>
    <div class="bg-white h-[6vh] w-[30vw]">
      <button v-on:click="like" class="text-red-500 text-3xl cursor-pointer">
        &#8593;
      </button>
      <span>{{ this.tempLikes }}</span>

      <button v-on:click="dislike" class="text-red-500 text-3xl cursor-pointer">
        &#8595;
      </button>
      <span>{{ this.tempDislikes }}</span>
      <div
        id="form"
        class="flex flex-col w-[100vw] h-[10vh] bg-slate-200 items-center"
        v-bind:style="commentStyle"
      >
        <div
          id="input-container"
          class="flex flex-col w-[50vw] items-center mt-[1rem]"
        >
          <div class="h-[35vh]">
            <div class="flex flex-row">
              <input
                type="text"
                placeholder="Write Comment"
                class="w-[50vw] mx-[1vw]"
                v-model="commentInput"
              />
              <button @click="addComment">Add</button>
            </div>
          </div>
        </div>
      </div>
      <span v-on:click="commentStylesOpen" class="text-sm p-[6vw]">
        There are 0 comments
      </span>
      <button v-on:click="commentStylesClosed">X</button>
    </div>
  </div> -->
  <div
    id="post-container"
    class="
      h-[40vh]
      w-[32vw]
      bg-[#eeeeee]
      brightness-[105%]
      rounded-[5%]
      my-[2.5vh]
      mx-[2.5vw]
    "
  >
    <div id="playlist-name" class="mx-[1vw] text-[1.25rem] font-lora">
      {{ postName }}
    </div>
    <div id="user-name-container" class="flex flex-row items-center">
      <span
        id="pfp"
        class="w-[1rem] h-[1rem] bg-[#6957e7] rounded-[100%] mx-[1.5vw]"
      ></span>
      <div id="username" class="text-[1rem] font-lora">
        {{ userName }}
      </div>
    </div>
    <div
      id="divider"
      class="flex h-[1px] w-[31vw] bg-[#000000] mx-[.5vw]"
    ></div>
    <div id="post-content" class="h-[27.5vh]">
      <ul>
        <li
          v-for="song in songs"
          :key="song"
          class="
            flex flex-row
            h-[5vh]
            text-[2.5vh]
            hover:bg-[#dddddd]
            font-lora
          "
        >
          <div class="w-[13.5vw] pl-[1.5vw] truncate">{{ song.songName }}</div>
          <div class="flex justify-center w-[4vw]">{{ song.duration }}</div>
          <div class="flex justify-end w-[11.5vw] pr-[1.5vw]">
            {{ song.artist }}
          </div>
        </li>
      </ul>
    </div>
    <div
      id="divider"
      class="flex h-[1px] w-[31vw] bg-[#000000] mx-[.5vw]"
    ></div>
    <div id="reactions-and-tags">
      <button id="like-button">
        <img src="../assets/like.svg" alt="Logo" class="h-[3.5vh]" />
      </button>
      <button id="dislike-button">
        <img src="../assets/dislike.svg" alt="Logo" class="h-[3.5vh]" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // localLikes: null,
      // localDislikes: null,
      // tempLikes: null,
      // tempDislikes: null,
      // localComments: null,
      userName: null,
      postName: null,
      songs: null,
      // songList: null,
      // comments: [],
      // commentInput: null,
      // commentStyle: {
      //   display: "none",
      // },
      // commentStyleOpen: {
      //   display: "flex",
      // },
      // commentStyleClosed: {
      //   display: "none",
      // },
    };
  },
  methods: {
    username: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result.data.post.userName);
        this.userName = result.data.post.userName;
        console.log(this.userName);
      } catch (error) {
        console.log(error);
      }
    },
    postname: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
          requestOptionsGet
        );
        const result = await response.json();
        this.postName = result.data.post.postName;
        console.log(this.postName);
      } catch (error) {
        console.log(error);
      }
    },
    songRetriever: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
          requestOptionsGet
        );
        const result = await response.json();
        this.songs = result.data.post.songs;
        console.log(this.songs);
        // this.songs.forEach((element) => {
        //   console.log(element.songName);
        // });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.username();
    this.postname();
    this.songRetriever();
  },
};
</script>


songs: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result.data.post.songs);
        // this.songList = result.data.post.songs.songName;
      } catch (error) {
        console.log(error);
      }
    },

    like: async function () {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
          requestOptionsGet
        );
        const result = await response.json();
        console.log("There are " + result.data.post.totalLikes + " likes");
        this.localLikes = result.data.post.totalLikes;
      } catch (error) {
        console.log(error);
      }

      this.tempLikes = this.localLikes + 1;

      var raw = JSON.stringify({
        totalLikes: this.tempLikes,
      });

      var requestOptionsPatch = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
          requestOptionsPatch
        );
        const result = await response.json();
        console.log("There are " + result.data.post.totalLikes + " likes");
      } catch (error) {
        console.log(error);
      }
    },

    dislike: async function () {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
          requestOptionsGet
        );
        const result = await response.json();
        console.log(
          "There are " + result.data.post.totalDislikes + " dislikes"
        );
        this.localDislikes = result.data.post.totalDislikes;
      } catch (error) {
        console.log(error);
      }

      this.tempDislikes = this.localDislikes + 1;

      var raw = JSON.stringify({
        totalDislikes: this.tempDislikes,
      });

      var requestOptionsPatch = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
          requestOptionsPatch
        );
        const result = await response.json();
        console.log(
          "There are " + result.data.post.totalDislikes + " dislikes"
        );
      } catch (error) {
        console.log(error);
      }
    },

    commentStylesOpen() {
      this.commentStyle = this.commentStyleOpen;
    },
    commentStylesClosed() {
      this.commentStyle = this.commentStyleClosed;
    },
    addComment() {
      this.comments.push(this.commentInput);
      console.log(this.comments);
    },