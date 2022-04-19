<template>
  <div
    id="main-container"
    class="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.3)]"
    v-show="value"
  >
    <div
      id="form"
      class="flex flex-col w-[50vw] h-[50vh] bg-[#6957e7] flex items-center justify-center border-2 border-black rounded-[1.5rem]"
    >
<!-- ------------------------------- -->
      <div
        id="post-container"
        class="h-[40vh] w-[32vw] bg-[#eeeeee] brightness-[105%] rounded-[5%] my-[2.5vh] mx-[2.5vw]"
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
        <div id="post-content" class="h-[27.5vh] overflow-y-scroll">
          <ul>
            <li
              v-for="song in songs"
              :key="song"
              class="flex flex-row h-[5vh] text-[2.5vh] hover:bg-[#dddddd] font-lora"
            >
              <div class="w-[13.5vw] pl-[1.5vw] truncate">
                {{ song.songName }}
              </div>
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
        <div id="reactions-and-tags" class="flex flex-row items-center mt-[1vh]">
          <div id="tags" class="flex flex-row items-center ml-[2vw]">
            <ul class="columns-4">
              <li v-for="tag in tags" :key="tag" class="text-[2vh]">
                #{{ tag.tagName }}
              </li>
            </ul>
          </div>
        </div>
        <div id="reactions-and-tags" class="flex flex-row items-center mt-[1vh]">
          <div id="reactions" class="flex flex-row items-center">
            <button
              :disabled="disliked"
              id="like-button"
              v-on:click="like"
              class="mx-[0.6vw]"
            >
              <img
                src="../assets/like1.svg"
                alt="Logo"
                class="h-[3.5vh] mx-[0.5vw]"
                v-if="liked"
              />
              <img
                src="../assets/like.svg"
                alt="Logo"
                class="h-[3.5vh] mx-[0.5vw]"
                v-else
              />
            </button>
            <span id="like-count" v-if="liked"> {{ this.tempLikes }} </span>
            <span id="like-count" v-else> {{ this.localLikes }} </span>
            <button
              :disabled="liked"
              id="dislike-button"
              v-on:click="dislike"
              class="mx-[0.6vw]"
            >
              <img
                src="../assets/dislike1.svg"
                alt="Logo"
                class="h-[3.5vh] mx-[0.5vw]"
                v-if="disliked"
              />
              <img
                src="../assets/dislike.svg"
                alt="Logo"
                class="h-[3.5vh] mx-[0.5vw]"
                v-else
              />
            </button>
            <span id="like-count" v-if="disliked"> {{ this.tempDislikes }} </span>
            <span id="like-count" v-else> {{ this.localDislikes }} </span>
          </div>
          <div>
            <button
              id="comments-button"
              class="mx-[0.6vw]"
            >
              <img
                src="../assets/comments.svg"
                alt="Logo"
                class="h-[3.5vh] mx-[0.5vw]"
              />
            </button>
            <span id="comment-count"> {{ this.localTotalComments }} </span>
          </div>
        </div>
      </div>
<!-- ------------------------------- -->
      <button @click.prevent="close" class="mt-[2vh] font-semibold">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCreate",
  props: {
    value: {
      required: true,
    },
  },
  data() {
    return {
      formStyle: {
        display: "none",
      },
      formStyleOpen: {
        display: "flex",
      },
      formStyleClosed: {
        display: "none",
      },
      isActive: false,
// ---------------------------
      localLikes: null,
      localDislikes: null,
      tempLikes: null,
      tempDislikes: null,
      userName: null,
      postName: null,
      songs: null,
      tags: null,
      localTotalComments: null,
      liked: false,
      disliked: false,

    };
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
    username: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
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
          "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
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
          "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
          requestOptionsGet
        );
        const result = await response.json();
        this.songs = result.data.post.songs;
        console.log(this.songs);
      } catch (error) {
        console.log(error);
      }
    },
    displayLikes: async function () {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
          requestOptionsGet
        );
        const result = await response.json();
        console.log("There are " + result.data.post.totalLikes + " likes");
        this.localLikes = result.data.post.totalLikes;
      } catch (error) {
        console.log(error);
      }
    },
    like: async function () {
      this.liked = !this.liked;

      if (this.liked == true) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

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
            "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
            requestOptionsPatch
          );
          const result = await response.json();
          console.log("There are " + result.data.post.totalLikes + " likes");
        } catch (error) {
          console.log(error);
        }
      }
    },
    displayDislikes: async function () {
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptionsGet = {
          method: "GET",
          redirect: "follow",
        };

        try {
          const response = await fetch(
            "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
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
    },
    dislike: async function () {
      this.disliked = !this.disliked;

      if (this.disliked == true) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

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
            "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
            requestOptionsPatch
          );
          const result = await response.json();
          console.log(
            "There are " + result.data.post.totalDislikes + " dislikes"
          );
        } catch (error) {
          console.log(error);
        }
      }
    },
    tagRetriever: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
          requestOptionsGet
        );
        const result = await response.json();
        this.tags = result.data.post.tags;
        console.log(this.tags);
      } catch (error) {
        console.log(error);
      }
    },
    displayTotalComments: async function () {
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptionsGet = {
          method: "GET",
          redirect: "follow",
        };

        try {
          const response = await fetch(
            "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
            requestOptionsGet
          );
          const result = await response.json();
          console.log(
            "There are " + result.data.post.totalComments + " comments in total"
          );
          this.localTotalComments = result.data.post.totalComments;
        } catch (error) {
          console.log(error);
        }
    },
  },
  created() {
    this.username();
    this.postname();
    this.songRetriever();
    this.tagRetriever();
    this.displayLikes();
    this.displayDislikes();
    this.displayTotalComments();
  },
};
</script>

v-bind:style="formStyle"
<button v-on:click="formStylesOpen">Open</button>
<button v-on:click="formStylesClosed">Closed</button>
<div id="button"></div>
