<template>
  <div>
    <!-- <ProfilePagePoster
      v-model="profileModalPosterDisplay"
      @closePMP="closeProfileModalPoster"
      :username="this.userName"
      class="z-50"
    ></ProfilePagePoster> -->
    <div>
      <div
        id="post-container"
        class="h-[47vh] w-[32vw] bg-[#eeeeee] brightness-[105%] rounded-[5%] my-[2.5vh] mx-[2.5vw]"
      >
        <div class="flex flex-row items-center">
          <div id="playlist-name" class="mx-[1vw] text-[1.25rem] font-lora">
            {{ postName }}
          </div>
          <div>
            <button @click="$emit('deletePost')">
              <img
                src="../assets/delete.svg"
                class="items-center ml-[1vw] hover:border-b-2 border-[#6957e7]"
                v-show="displayDelete"
              />
            </button>
          </div>
        </div>
        <div id="user-name-container" class="flex flex-row items-center">
          <span
            id="pfp"
            class="w-[1rem] h-[1rem] bg-[#6957e7] rounded-[100%] mx-[1.5vw]"
          ></span>
          <div id="username" class="text-[1rem] font-lora">
            <button @click="$emit('usernamePass', { userName })">hello</button>
            <button @click="$emit('openPMP')">
              {{ userName }}
            </button>
          </div>
        </div>
        <div
          id="divider"
          class="flex h-[1px] w-[31vw] bg-[#000000] mx-[.5vw]"
        ></div>
        <button
          @click="openModalLargePost"
          v-bind:modalLargePostOpenID="fetchedPostID"
        >
          <div id="post-content" class="h-[27.5vh] overflow-y-scroll">
            <ul v-if="commentsClicked">
              <li
                v-for="comment in comments"
                :key="comment"
                class="flex flex-row h-[5vh] text-[2.5vh] hover:bg-[#dddddd] font-lora"
              >
                <div class="w-[13.5vw] pl-[1.5vw]">
                  {{ comment.commentContent }}
                </div>
                <!-- <div class="flex justify-center w-[4vw]">{{ comment.commentNumber }}</div> -->
                <div class="flex justify-end w-[11.5vw] pr-[1.5vw]">
                  {{ comment.commentUserName }}
                </div>
              </li>
            </ul>
            <ul v-else>
              <li
                v-for="song in songs"
                :key="song"
                class="flex flex-row h-[5vh] text-[2.5vh] hover:bg-[#dddddd] font-lora"
              >
                <div class="w-[13.5vw] pl-[1.5vw] truncate">
                  {{ song.songName }}
                </div>
                <div class="flex justify-center w-[4vw]">
                  {{ song.duration }}
                  <!-- {{ (song.duration / 60000).toFixed(2) }} -->
                </div>
                <div class="flex justify-end w-[11.5vw] pr-[1.5vw]">
                  {{ song.artist }}
                </div>
              </li>
            </ul>
          </div>
        </button>
        <div
          id="divider"
          class="flex h-[1px] w-[31vw] bg-[#000000] mx-[.5vw]"
        ></div>
        <div
          id="reactions-and-tags"
          class="flex flex-row items-center mt-[1vh]"
        >
          <div id="tags" class="flex flex-row items-center ml-[2vw]">
            <ul class="columns-4">
              <li v-for="tag in tags" :key="tag" class="text-[2vh]">
                #{{ tag.tagName }}
              </li>
            </ul>
          </div>
        </div>
        <div
          id="reactions-and-tags"
          class="flex flex-row items-center mt-[1vh]"
        >
          <div id="reactions" class="flex flex-row items-center">
            <button
              v-if="this.$auth.loggedIn"
              :disabled="disliked"
              id="like-button"
              v-on:click="like"
              class="mx-[0.6vw]"
            >
              <img
                src="../assets/like1.svg"
                alt="like-button"
                class="h-[3.5vh] mx-[0.5vw]"
                v-if="liked"
              />
              <img
                src="../assets/like.svg"
                alt="like-button"
                class="h-[3.5vh] mx-[0.5vw]"
                v-else
              />
            </button>
            <button v-else id="like-button" @click="login" class="mx-[0.6vw]">
              <img
                src="../assets/like.svg"
                alt="Logo"
                class="h-[3.5vh] mx-[0.5vw]"
              />
            </button>
            <span id="like-count" v-if="liked"> {{ this.tempLikes }} </span>
            <span id="like-count" v-else> {{ this.localLikes }} </span>
            <button
              v-if="this.$auth.loggedIn"
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
            <button
              v-else
              id="dislike-button"
              @click="login"
              class="mx-[0.6vw]"
            >
              <img
                src="../assets/dislike.svg"
                alt="Logo"
                class="h-[3.5vh] mx-[0.5vw]"
              />
            </button>
            <span id="like-count" v-if="disliked">
              {{ this.tempDislikes }}
            </span>
            <span id="like-count" v-else> {{ this.localDislikes }} </span>
          </div>
          <div>
            <button
              id="comments-button"
              class="mx-[0.6vw]"
              @click="openModalLargePost"
              v-bind:modalLargePostOpenID="fetchedPostID"
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
    </div>
    <LModalPost
      v-show="modalLargePostOpen"
      @closeLM="closeModalLargePost"
      v-bind:modalLargePostOpenID="fetchedPostID"
    ></LModalPost>
  </div>
</template>

<script>
import LModalPost from "../components/LModalPost.vue";
export default {
  components: {
    LModalPost: LModalPost,
  },
  name: "posts",
  props: ["fetchedPostID"],
  data() {
    return {
      localLikes: null,
      localDislikes: null,
      tempLikes: null,
      tempDislikes: null,
      userName: null,
      postName: null,
      songs: null,
      tags: null,
      localTotalComments: null,
      comments: null,
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
      // fetchedPostID: ["61f5d9d9000fb29e24d1bad9"],
      liked: false,
      disliked: false,
      commentsClicked: false,
      modalLargePostOpen: false,
      activeUsername: null,
      displayedUsername: null,
      displayDelete: false,
      modalLargePostOpenID: "",
      // profileModalPosterDisplay: false,
      user: this.$auth.user,
    };
  },

  methods: {
    async login() {
      await this.$auth.loginWith("auth0");
    },
    postRetriever: async function () {
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
        this.userName = result.data.post.userName;
        this.postName = result.data.post.postName;
        this.songs = result.data.post.songs;
        for (let i = 0; i < this.songs.length; i++) {
          let ms = this.songs[i].duration;
          var minutes = Math.floor(ms / 60000);
          var seconds = ((ms % 60000) / 1000).toFixed(0);
          this.songs[i].duration =
            seconds == 60
              ? minutes + 1 + ":00"
              : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        }
        this.localLikes = result.data.post.totalLikes;
        this.localDislikes = result.data.post.totalDislikes;
        this.tags = result.data.post.tags;
        this.localTotalComments = result.data.post.totalComments;
        this.comments = result.data.post.comments;
      } catch (error) {
        console.log(error);
      }
    },
    getUserInfo: async function () {
      console.log("hello world");
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
          "http://localhost:3000/api/v1/users/" + this.activeUsername,
          requestOptionsGet
        );
        const result = await response.json();
        this.displayedUsername = result.data.user.username;
        console.log(this.displayedUsername);
      } catch (error) {
        console.log(error);
      }
      if (this.displayedUsername == this.userName) {
        this.displayDelete = true;
      }
    },

    // deletePost: async function () {

    // },

    like: async function () {
      this.liked = !this.liked;

      if (this.liked == true) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // var requestOptionsGet = {
        //   method: "GET",
        //   redirect: "follow",
        // };

        // try {
        //   const response = await fetch(
        //     "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
        //     requestOptionsGet
        //   );
        //   const result = await response.json();
        //   console.log("There are " + result.data.post.totalLikes + " likes");
        //   this.localLikes = result.data.post.totalLikes;
        // } catch (error) {
        //   console.log(error);
        // }

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
        // } else {
        //   var myHeaders = new Headers();
        //   myHeaders.append("Content-Type", "application/json");

        //   var requestOptionsGet = {
        //     method: "GET",
        //     redirect: "follow",
        //   };

        //   try {
        //     const response = await fetch(
        //       "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
        //       requestOptionsGet
        //     );
        //     const result = await response.json();
        //     console.log("There are " + result.data.post.totalLikes + " likes");
        //     this.localLikes = result.data.post.totalLikes;
        //   } catch (error) {
        //     console.log(error);
        //   }

        //   this.tempLikes = this.localLikes - 1;

        //   var raw = JSON.stringify({
        //     totalLikes: this.tempLikes,
        //   });

        //   var requestOptionsPatch = {
        //     method: "PATCH",
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: "follow",
        //   };

        //   try {
        //     const response = await fetch(
        //       "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
        //       requestOptionsPatch
        //     );
        //     const result = await response.json();
        //     console.log("There are " + result.data.post.totalLikes + " likes");
        //   } catch (error) {
        //     console.log(error);
        //   }
        // }
      }
    },
    dislike: async function () {
      this.disliked = !this.disliked;

      if (this.disliked == true) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // var requestOptionsGet = {
        //   method: "GET",
        //   redirect: "follow",
        // };

        // try {
        //   const response = await fetch(
        //     "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
        //     requestOptionsGet
        //   );
        //   const result = await response.json();
        //   console.log(
        //     "There are " + result.data.post.totalDislikes + " dislikes"
        //   );
        //   this.localDislikes = result.data.post.totalDislikes;
        // } catch (error) {
        //   console.log(error);
        // }

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
        } catch (error) {
          console.log(error);
        }
        // } else {
        //   var myHeaders = new Headers();
        //   myHeaders.append("Content-Type", "application/json");

        //   var requestOptionsGet = {
        //     method: "GET",
        //     redirect: "follow",
        //   };

        //   try {
        //     const response = await fetch(
        //       "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
        //       requestOptionsGet
        //     );
        //     const result = await response.json();
        //     console.log(
        //       "There are " + result.data.post.totalDislikes + " dislikes"
        //     );
        //     this.localDislikes = result.data.post.totalDislikes;
        //   } catch (error) {
        //     console.log(error);
        //   }

        //   this.tempDislikes = this.localDislikes - 1;

        //   var raw = JSON.stringify({
        //     totalDislikes: this.tempDislikes,
        //   });

        //   var requestOptionsPatch = {
        //     method: "PATCH",
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: "follow",
        //   };

        //   try {
        //     const response = await fetch(
        //       "http://localhost:3000/api/v1/posts/" + this.fetchedPostID,
        //       requestOptionsPatch
        //     );
        //     const result = await response.json();
        //     console.log(
        //       "There are " + result.data.post.totalDislikes + " dislikes"
        //     );
        //   } catch (error) {
        //     console.log(error);
        //   }
      }
    },
    commentsClickedF: async function () {
      this.commentsClicked = !this.commentsClicked;
    },
    openModalLargePost() {
      this.modalLargePostOpenID = this.fetchedPostID;
      this.modalLargePostOpen = true;
    },
    closeModalLargePost() {
      this.modalLargePostOpen = false;
    },
    // openProfileModalPoster() {
    //   this.profileModalPosterDisplay = true;
    // },
    // closeProfileModalPoster() {
    //   this.profileModalDisplay = false;
    // },
  },
  created() {
    this.postRetriever();
    this.getUserInfo();
  },
};
</script>
