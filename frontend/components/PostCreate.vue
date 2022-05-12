<template>
  <div
    id="main-container"
    class="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.3)]"
    v-show="value"
  >
    <div
      id="form"
      class="flex flex-col w-[65vw] h-[65vh] bg-[#dadada] flex items-center justify-center border-[3px] border-[#330066] rounded-[1.5rem]"
    >
      <div id="input-container" class="flex flex-col w-[30vw] items-center">
        <div id="post-name" class="h-[5vh]">
          <!-- <label for="postName">Post Name</label> -->
          <input
            v-model="postName"
            type="text"
            class="w-[20vw] mx-[1vw] rounded-md p-[8px]"
            placeholder="Title your Post..."
          />
        </div>
        <div class="my-[5vh] h-[30vh] w-[45vw]">
          <div class="flex flex-row justify-center">
            <div id="song-search">
              <input
                type="text"
                placeholder="Search by Song Name or Artist"
                class="w-[25vw] mx-[1vw] rounded-md p-[10px]"
                v-model="songInput"
              />
              <button
                class="mx-[1vw] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px"
                @click="search"
              >
                Search
              </button>
            </div>
            <div id="song-results" v-show="displayResults">
              <!-- <ul>
                <li v-for="logger in loggers" :key="logger">
                  {{ logger.name }}
                </li>
              </ul> -->
              {{ responseLog }}
            </div>
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
      <!-- <button @click="createPost" class="mt-[4vh] font-semibold">Post</button> -->
      <button @click.prevent="close" class="mt-[2vh] font-semibold">
        Cancel
      </button>
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
      songInfo: {
        songName: null,
        songNumber: null,
        artist: null,
        duration: null,
      },
      songAmount: 0,
      tags: [
        "Pop",
        "Rock",
        "Classic Rock",
        "Punk Rock",
        "Hard Rock",
        "Metal",
        "Grunge",
        "Grime",
        "Alternative Rock",
        "Psychadelic Rock",
        "Hip-hop",
        "Rap",
        "Drill",
        "Mumble Rap",
        "Melodic Rap",
        "Classical",
        "Instrumental",
        "Accapella",
        "Musical Theatre",
        "Electronic",
        "Techno",
        "Nightcore",
        "Jazz",
        "Country",
        "Reggae",
        "R&B",
        "Indie",
        "Opera",
        "Folk",
        "Soul",
        "Desi",
        "Blues",
        "Disco",
        "Foreign",
      ],
      tagInput: null,
      totalTags: 0,
      isActive: false,
      userPosting: "Bobby2000",
      postName: null,
      responseLog: {},
      displayResults: false,
    };
  },
  methods: {
    // addSong() {
    //   this.songs.push(this.songInfo);
    //   console.log(this.songs);
    //   this.songAmount = this.songAmount + 1;
    //   console.log(this.songAmount)
    // },
    search: async function () {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        search: this.songInput,
      });

      var requestOptionsPatch = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/users/searchTracks",
          requestOptionsPatch
        );
        const result = await response.json();
        this.responseLog = result.status;
        // var logger = this.loggers;
        // logger.forEach((element) => console.log(element.name));
        // logger.forEach((element) => console.log(element.artists[0].name));
        this.displayResults = true;
      } catch (error) {
        console.log(error);
      }
    },
  },

  addTag() {
    this.tags.push(this.tagInput);
    console.log(this.tags);
    this.totalTags = this.totalTags + 1;
    console.log(this.totalTags);

    if (this.tags.length > 3) {
      this.isActive = true;
    }
  },
  close() {
    this.$emit("input", !this.value);
  },
  createPost: async function () {
    console.log("createPost function ran");

    try {
      const response = await post("http://localhost:3000/api/v1/posts/create", {
        postName: this.postName,
        userName: this.userPosting,
        tags: this.tags,
        songs: this.songs,
        totalLikes: 0,
        totalDislikes: 0,
        totalComments: 0,
        totalTags: this.totalTags,
        songAmount: this.songAmount,
      });
      const result = await response.json();
      console.log("Created post with this id: " + result._id);
    } catch (error) {
      console.log(error);
      alert("Did you fill in all the proper information?");
    }
  },

  //  tagsLength() {
  //    this.tagsLength = this.tags.length
  //    },
};
</script>

v-bind:style="formStyle"
<button v-on:click="formStylesOpen">Open</button>
<button v-on:click="formStylesClosed">Closed</button>
<div id="button"></div>

<button class="mx-[1vw]" @click="addSong">Add</button>
