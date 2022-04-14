<template>
  <div
    id="main-container"
    class="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.3)]"
    v-show="value"
  >
    <div
      id="form"
      class="flex flex-col w-[50vw] h-[50vh] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center border-2 border-black rounded-[1.5rem]"
    >
      <h1 class="underline mt-[7vh] font-semibold">Creating new post!</h1>
      <div id="input-container" class="flex flex-col w-[30vw] items-center">
        <div class="">
          <label for="postName">Post Name</label>
          <input v-model="postName" type="text" class="" placeholder="edit me" />
        </div>
        <div class="my-[5vh] h-[10vh] overflow-y-scroll w-[30vw]">
          <div class="flex flex-row">
            <input
              type="text"
              placeholder="Search by Song Name or Artist"
              class="w-[25vw] mx-[1vw] rounded-md"
              v-model="songInput"
            />
            <button class="mx-[1vw]" @click="addSong">Add</button>
          </div>
          <div id="song-list">
            <ul>
              <li v-for="song in songs" :key="song">
                {{ song }}
              </li>
            </ul>
          </div>
        </div>
        <div id="tag-input-container">
          <div class="flex flex-row">
            <input
              type="text"
              placeholder="Tags"
              v-model="tagInput"
              class="mx-[1vw] rounded-md"
            />
            <button :disabled="isActive" @click="addTag">Add</button>
          </div>
          <div id="tag-list">
            <ul>
              <li v-for="tag in tags" :key="tag">
                {{ tag }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button @click=createPost  class="mt-[4vh] font-semibold">
        Post
      </button>
      <button @click.prevent="close" class="mt-[2vh] font-semibold">Cancel</button>
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
      songs: [],
      songInput: null,
      songAmount: 0,
      tags: [],
      tagInput: null,
      totalTags: 0,
      isActive: false,
      userPosting: "Bobby2000",
      postName: null,
      // tagsLength: null,
    };
  },
  methods: {
    // formStylesOpen() {
    //   this.formStyle = this.formStyleOpen;
    // },
    // formStylesClosed() {
    //   this.formStyle = this.formStyleClosed;
    // },
    addSong() {
      this.songs.push(this.songInput);
      console.log(this.songs);
      this.songAmount = this.songAmount + 1;
    },
    addTag() {
      this.tags.push(this.tagInput);
      console.log(this.tags);

      if (this.tags.length > 3) {
        this.isActive = true;
      }
    },
    close() {
      this.$emit("input", !this.value);
    },
    createPost: async function() {
      console.log("createPost function ran")
      var requestOptionsPost = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await post(
          "http://localhost:3000/api/v1/posts/create", {
            postName: this.postName,
            userName: this.userPosting,
            tags: this.tags,
            songs: this.songs,
            totalLikes: 0,
            totalDislikes: 0,
            totalComments: 0,
            totalTags: this.totalTags,
            songAmount: this.songAmount,

          }, requestOptionsPost
        );
        const result = await response.json();
        console.log("Created post with this id: " + result._id);
      } catch (error) {
        console.log(error);
        alert("Did you fill in all the proper information?");
      }
    }

    //  tagsLength() {
    //    this.tagsLength = this.tags.length
    //    },
  },
};
</script>

v-bind:style="formStyle"
<button v-on:click="formStylesOpen">Open</button>
<button v-on:click="formStylesClosed">Closed</button>
<div id="button"></div>
