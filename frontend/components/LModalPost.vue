<template>
  <div
    id="main-container"
    class="fixed flex items-center z-50 justify-center top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.3)]"
  >
    <div
      id="form"
      class="flex flex-col w-[75vw] h-[85%] bg-[#6957e7] flex items-center justify-center border-2 border-black rounded-[1.5rem]"
    >
      <!-- ------------------------------- -->
      <div
        v-if="createCommentDisplay"
        id="post-container"
        class="h-[90%] w-[80%] bg-[#eeeeee] brightness-[105%] rounded-[5%] my-[2.5vh] mx-[2.5vw]"
      >
        <div id="playlist-name" class="mx-[1vw] text-[1.25rem] font-lora">
          Create a Comment
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
        <div id="divider" class="flex h-[1px] w-full bg-[#000000]"></div>
        <div id="post-content" class="h-[27.5vh] w-full overflow-y-scroll">
          <textarea
            type="text"
            placeholder="Type comment here"
            class="h-[90%] w-[90%] rounded-md p-[10px]"
            v-model="commentInput"
            rows="5"
            cols="60"
          />
        </div>
        <div id="divider" class="flex h-[1px] w-full bg-[#000000]"></div>
        <div class="flex flex-wrap items-center mt-[1vh]">
          <button
            class="mx-[1vw] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px"
            @click="postComment"
          >
            Post Comment
          </button>
        </div>
        <div id="divider" class="flex h-[1px] w-full bg-[#000000]"></div>
        <div id="post-content" class="h-[27.5vh] w-full overflow-y-scroll">
          <ul>
            <li
              v-for="comment in comments"
              :key="comment"
              class="text-[2.5vh] hover:bg-[#dddddd] font-lora"
            >
              <div class="flex flex-col h-[flex flex-col h-[5vh]vh]">
                <div class="">
                  <p class="w-full pl-[1.5vw]">
                    {{ comment.commentContent }}
                  </p>
                </div>
                <div class="flex flex-row h-[5vh]">
                  <div class="w-[50%] pl-[1.5vw]">
                    #{{ comment.commentNumber }}
                  </div>
                  <div class="flex justify-end w-[50%] pr-[1.5vw]">
                    {{ comment.commentUserName }}
                  </div>
                </div>
              </div>
              <div
                id="divider"
                class="flex justify-center h-[1px] w-[80%] bg-[#000000]"
              ></div>
            </li>
          </ul>
        </div>
        <button
          class="text-[4rem] text-[#330066] place-content-center text-[2vh] float-right mr-[1vw]"
          @click="createCommentInLM"
        >
          Cancel
        </button>
      </div>
      <div
        v-else
        id="post-container"
        class="h-[90%] w-[80%] bg-[#eeeeee] brightness-[105%] rounded-[5%] my-[2.5vh] mx-[2.5vw]"
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
        <div id="divider" class="flex h-[1px] w-full bg-[#000000]"></div>
        <div id="post-content" class="h-[27.5vh] w-full overflow-y-scroll">
          <ul>
            <li
              v-for="song in songs"
              :key="song"
              class="flex flex-row h-[5vh] text-[2.5vh] hover:bg-[#dddddd] font-lora"
            >
              <div class="w-[60%] pl-[1.5vw] truncate">
                {{ song.songName }}
              </div>
              <div class="flex justify-center w-[10%]">{{ song.duration }}</div>
              <div class="flex justify-end w-[30%] pr-[1.5vw]">
                {{ song.artist }}
              </div>
            </li>
          </ul>
        </div>
        <div id="divider" class="flex h-[1px] w-full bg-[#000000]"></div>
        <div
          id="reactions-and-tags"
          class="flex flex-wrap items-center mt-[1vh]"
        >
          <div id="tags" class="flex flex-row items-center ml-[2vw] min-w-15vh">
            <ul class="columns-4">
              <li v-for="tag in tags" :key="tag" class="text-[2vh] font-medium">
                #{{ tag.tagName }}
              </li>
            </ul>
          </div>
          <div id="reactions" class="flex flex-row items-center min-w-15vh">
            <div class="mx-[0.6vw] flex flex-row underline font-medium">
              <p>Likes: {{ this.localLikes }}</p>
            </div>
            <div class="mx-[0.6vw] flex flex-row underline font-medium">
              <p>Dislikes: {{ this.localDislikes }}</p>
            </div>
            <div class="mx-[0.6vw] flex flex-row underline font-medium">
              <p>Comments: {{ this.localTotalComments }}</p>
            </div>
          </div>
        </div>
        <div id="divider" class="flex h-[1px] w-full bg-[#000000]"></div>
        <div id="post-content" class="h-[27.5vh] w-full overflow-y-scroll">
          <ul>
            <li
              v-for="comment in comments"
              :key="comment"
              class="text-[2.5vh] hover:bg-[#dddddd] font-lora"
            >
              <div class="flex flex-col h-[flex flex-col h-[5vh]vh]">
                <div class="">
                  <p class="w-full pl-[1.5vw]">
                    {{ comment.commentContent }}
                  </p>
                </div>
                <div class="flex flex-row h-[5vh]">
                  <div class="w-[50%] pl-[1.5vw]">
                    #{{ comment.commentNumber }}
                  </div>
                  <!-- <div class="w-[30%] pl-[1.5vw] ">
                    <button
                      :disabled="disliked"
                      id="like-button"
                      v-on:click="likeComment"
                      class="mx-[0.6vw]"
                    >
                      <img
                        src="../assets/like1.svg"
                        alt="Logo"
                        class="h-[3.5vh] mx-[0.5vw]"
                        v-if="likedComment"
                      />
                      <img
                        src="../assets/like.svg"
                        alt="Logo"
                        class="h-[3.5vh] mx-[0.5vw]"
                        v-else
                      />
                    </button>
                    {{ comment.commentLikes }}
                  </div>
                  <div class="w-[30%] pl-[1.5vw] ">
                    <button
                      id="dislike-button"
                      v-on:click="dislikeComment"
                      class="mx-[0.6vw]"
                    >
                      <img
                        src="../assets/dislike1.svg"
                        alt="Logo"
                        class="h-[3.5vh] mx-[0.5vw]"
                        v-if="dislikedComment"
                      />
                      <img
                        src="../assets/dislike.svg"
                        alt="Logo"
                        class="h-[3.5vh] mx-[0.5vw]"
                        v-else
                      />
                    </button>
                    {{ comment.commentDisLikes }}
                  </div> -->
                  <div class="flex justify-end w-[50%] pr-[1.5vw]">
                    {{ comment.commentUserName }}
                  </div>
                </div>
              </div>
              <div
                id="divider"
                class="flex justify-center h-[1px] w-[80%] bg-[#000000]"
              ></div>
            </li>
          </ul>
        </div>
        <div class="text-[#330066] mr-[1vw] h-[5vh] flex flex-row w-[full]">
          <div class="float-left flex flex-row w-[50%]">
            <button
              class="flex text-[2vh]"
              @click="createCommentInLM"
              v-if="this.$auth.loggedIn"
            >
              <img
                src="../assets/add-comment.svg"
                alt="Logo"
                class="h-[3.5vh] mx-[0.5vw]"
              />
              <p class="flex underline">Create new Comment</p>
            </button>
          </div>
          <div class="w-[50%] justify-end pl-[1vh]">
            <button
              @click="closeLM"
              class="mt-[.5vh] p-[.5vh] float-right rounded-[25%] bg-fuchsia-500 font-semibold"
            >
              <p>Close</p>
            </button>
          </div>
        </div>
      </div>
      <!-- ------------------------------- -->
    </div>
  </div>
</template>

<script>
export default {
  name: "lmpost",
  props: ["modalLargePostOpenID"],
  data() {
    return {
      localLikes: null,
      localDislikes: null,
      tempLikes: null,
      tempDislikes: null,
      commentInput: [],
      userName: null,
      postName: null,
      songs: null,
      tags: null,
      localTotalComments: null,
      localComment: {
        commentNumber: null,
        commentContent: null,
        localCommentUserName: null,
      },
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
      createCommentDisplay: false,
      comments: [],
    };
  },
  methods: {
    postComment: async function () {
      var myHeaders = new Headers();
      // if (this.$auth.loggedIn = true) {
      //   this.localCommentUserName  = this.$auth.user.name;
      // } else {
      //   this.localCommentUserName = "Bert";
      // }
      myHeaders.append("Content-Type", "application/json");

      this.localTotalComments = this.localTotalComments + 1;
      this.localComment.commentNumber = this.localTotalComments;
      this.localComment.commentContent = this.commentInput;
      this.comments.push({
        commentNumber: this.localComment.commentNumber,
        commentContent: this.localComment.commentContent,
        commentUserName: this.localCommentUserName,
      });

      var raw = JSON.stringify({
        totalComments: this.localTotalComments,
        comments: this.comments,
      });

      var requestOptionsPatch = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/" + this.modalLargePostOpenID,
          requestOptionsPatch
        );
        const result = await response.json();
        console.log("You posted " + result);
      } catch (error) {
        console.log(error);
      }
    },
    closeLM() {
      this.$emit("closeLM");
    },
    createCommentInLM: async function () {
      this.createCommentDisplay = !this.createCommentDisplay;
    },
    postRetriever: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/posts/" + this.modalLargePostOpenID,
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
    getUserName: async function () {
      let userid = this.$auth.user.sub;
      let n = 6;
      this.localCommentUserName = userid.substring(n);
      console.log(this.localCommentUserName);

      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/users/" + this.localCommentUserName,
          requestOptionsGet
        );
        const result = await response.json();
        console.log(result);
        this.localCommentUserName = result.data.user.username;
        console.log(this.localCommentUserName);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.postRetriever();
    this.getUserName();
  },
};
</script>
