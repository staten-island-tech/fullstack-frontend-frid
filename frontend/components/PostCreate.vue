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
      <div
        id="input-container"
        class="flex flex-col w-[30vw] items-center mt-[3vh]"
      >
        <div id="post-name" class="h-[5vh]">
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
              <button class="dropdown">
                <div
                  class="text-[1rem] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px"
                >
                  Add Tags
                </div>
                <div id="tag-list" class="dropdown-content">
                  <ul class="dropdown-content overflow-y-scroll h-[30vh]">
                    <li
                      @click="addTag"
                      v-for="tag in tags"
                      :key="tag"
                      class="hover:bg-slate-300"
                    >
                      {{ tag }}
                    </li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
          <div
            class="flex flex-row justify-center content-center h-[25vh] overflow-y-scroll mt-[2rem]"
            v-if="activeSearch"
          >
            <div id="song-results">
              <SongResult
                @add="addSong(index)"
                v-for="(searchResults, index) in searchResults"
                :key="index"
                :songName="searchResults.name"
                :songArtist="searchResults.artist"
                :songDuration="searchResults.duration"
              />
            </div>
          </div>
          <div
            class="flex flex-row justify-center content-center h-[25vh] overflow-y-scroll mt-[2rem]"
            v-else-if="songsExist"
          >
            <div id="current-post">
              <SongItem
                v-for="(songsAdded, index) in songsAdded"
                :key="index"
                :songName="songsAdded.name"
                :songArtist="songsAdded.artist"
                :songDuration="songsAdded.duration"
              />
            </div>
          </div>
          <div
            class="flex flex-row justify-center content-center h-[25vh] mt-[2rem]"
            v-else
          >
            <div>No Songs Yet, Add Songs to see them here...</div>
          </div>
        </div>
        <div id="tag-input-container" class="mb-[5vh]">
          <div class="flex flex-row">
            <!-- <input
              type="text"
              placeholder="Tags"
              v-model="tagInput"
              class="mx-[1vw] rounded-md"
            />
            <button :disabled="isActive" @click="addTag">Add</button> -->
          </div>
          <div v-for="usedTag in usedTags" :key="usedTag">{{ usedTag }}</div>
        </div>
      </div>
      <!-- <button @click="createPost" class="mt-[4vh] font-semibold">Post</button> -->
      <button @click="closeCP" class="mt-[2vh] font-semibold">Close</button>
    </div>
  </div>
</template>

<script>
import songResult from "./SongResult.vue";
import songItem from "./SongItem.vue";

export default {
  name: "PostCreate",
  components: {
    songResult,
    songItem,
  },
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
      songsAdded: [],
      songInput: null,
      searchResult: {},
      searchResults: [],
      songAmount: 0,
      // tags: [
      //   "Pop",
      //   "Rock",
      //   "Classic Rock",
      //   "Punk Rock",
      //   "Hard Rock",
      //   "Metal",
      //   "Grunge",
      //   "Grime",
      //   "Alternative Rock",
      //   "Psychadelic Rock",
      //   "Hip-hop",
      //   "Rap",
      //   "Drill",
      //   "Mumble Rap",
      //   "Melodic Rap",
      //   "Classical",
      //   "Instrumental",
      //   "Accapella",
      //   "Musical Theatre",
      //   "Electronic",
      //   "Techno",
      //   "Nightcore",
      //   "Jazz",
      //   "Country",
      //   "Reggae",
      //   "R&B",
      //   "Indie",
      //   "Opera",
      //   "Folk",
      //   "Soul",
      //   "Desi",
      //   "Blues",
      //   "Disco",
      //   "Foreign",
      // ],
      usedTags: [],
      tagInput: null,
      totalTags: 0,
      isActive: false,
      // userPosting: this.$auth.user.name,
      postName: null,
      responseLog: {},
      displayResults: false,
      activeSearch: false,
      songsExist: false,
    };
  },
  methods: {
    createPost: async function () {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        postName: this.postName,
        songAmount: this.songsAdded.length,
        userName: this.userPosting,
        songs: this.songsAdded,
      });

      var requestOptionsPost = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "http://localhost:3000/api/v1/users/searchTracks",
          requestOptionsPost
        );
        const result = await response.json();
      } catch (error) {
        console.log(error);
      }
    },

    closeCP() {
      this.$emit("closeCP");
    },
    search: async function () {
      this.activeSearch = true;

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
        var logger = result.status;
        console.log(logger);
        for (let i = 0; i < 20; i++) {
          let p = logger[i];
          this.searchResult = {
            name: p.name,
            artist: p.artists[0].name,
            duration: p.duration_ms,
          };
          this.searchResults.push(this.searchResult);
        }
        console.log(this.searchResults);
      } catch (error) {
        console.log(error);
      }
    },
    addSong(index) {
      this.songsAdded.push(this.searchResults[index]);
      console.log(this.songsAdded);
      this.searchResults = [];
      this.songInput = null;
      this.songsExist = true;
      this.activeSearch = false;
    },
    addTag() {
      var logger = this.tags;
      for (let i = 0; i < 4; i++) {
        let p = logger[i];
        this.tag = {
          tag: p,
        };
        this.usedTags.push(this.tag);
        console.log(this.usedTags);
        // this.usedTags.push(this.tag);
        // console.log(this.usedTags);
        // this.totalTags = this.totalTags + 1;
        // console.log(this.totalTags);

        // if (this.usedTags.length > 3) {
        //   this.isActive = true;
        // }
      }
    },

    close() {
      this.$emit("input", !this.value);
    },
    // createPost: async function () {
    //   console.log("createPost function ran");

    //   try {
    //     const response = await post("http://localhost:3000/api/v1/posts/create", {
    //       postName: this.postName,
    //       userName: this.userPosting,
    //       tags: this.tags,
    //       songs: this.songs,
    //       totalLikes: 0,
    //       totalDislikes: 0,
    //       totalComments: 0,
    //       totalTags: this.totalTags,
    //       songAmount: this.songAmount,
    //     });
    //     const result = await response.json();
    //     console.log("Created post with this id: " + result._id);
    //   } catch (error) {
    //     console.log(error);
    //     alert("Did you fill in all the proper information?");
    //   }
    // },

    //  tagsLength() {
    //    this.tagsLength = this.tags.length
    //    },
  },
};
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
  font-size: 9rem;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 20vw;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:focus .dropdown-content {
  display: block;
}

.dropdown-item {
  padding: 12px 16px;
}
.dropdown-item:hover {
  background-color: #f1f1f1;
}
</style>
