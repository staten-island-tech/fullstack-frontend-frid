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
            <div id="song-search" class="flex direction-row">
              <div
                class="w-[20vw] bg-white rounded-xl"
                v-on:keyup.enter="search"
              >
                <input
                  type="text"
                  placeholder="Search by Song Name or Artist"
                  class="w-[17.5vw] p-[10px] rounded-xl"
                  v-model="songInput"
                />
                <button class="w-[1vw] m-[5px]" @click="clearSearch">
                  &#x2715;
                </button>
              </div>
              <button
                class="mx-[1vw] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px"
                @click="search"
              >
                Search
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
                @remove="removeSong(index)"
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
          <div class="flex flex-row justify-end w-[50vw]">
            <div class="">
              <ul class="flex flex-row">
                <SelectedTags
                  @remove="removeTag(index)"
                  v-for="(selectedTag, index) in selectedTags"
                  :key="index"
                  :selectedTags="selectedTag"
                  class="flex mx-[0.4vw] justify-center hover:line-through hover:text-[#6e5ba7] font-bold"
                >
                  {{ selectedTag }}
                </SelectedTags>
              </ul>
            </div>
            <button class="dropdown">
              <div
                class="text-[1rem] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px"
              >
                Add Tags
              </div>
              <div id="tag-list" class="dropdown-content">
                <ul class="dropdown-content overflow-y-scroll h-[24vh]">
                  <Tags
                    @add="addTag(index)"
                    v-for="(tag, index) in tags"
                    :key="index"
                    :tags="tag"
                    class="hover:bg-slate-300"
                  >
                    {{ tag }}
                  </Tags>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
      <button @click="createPost" class="mt-[4vh] font-semibold">Post</button>
      <button @click="closeCP" class="mt-[2vh] font-semibold">Close</button>
    </div>
  </div>
</template>

<script>
import songResult from "./SongResult.vue";
import songItem from "./SongItem.vue";
import Tags from "./tags.vue";
import SelectedTags from "./selectedTags.vue";

export default {
  name: "PostCreate",
  components: {
    songResult,
    songItem,
    Tags,
    SelectedTags,
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
      tags: [
        "Accapella",
        "Alternative Rock",
        "Blues",
        "Classical",
        "Classic Rock",
        "Country",
        "Desi",
        "Disco",
        "Drill",
        "Electronic",
        "Folk",
        "Foreign",
        "Grime",
        "Grunge",
        "Hard Rock",
        "Hip-hop",
        "Indie",
        "Instrumental",
        "Jazz",
        "Metal",
        "Melodic Rap",
        "Mumble Rap",
        "Musical Theatre",
        "Nightcore",
        "Opera",
        "Pop",
        "Psychadelic Rock",
        "Punk Rock",
        "R&B",
        "Rap",
        "Reggae",
        "Rock",
        "Soul",
        "Techno",
      ],
      selectedTags: [],
      tagInput: null,
      totalTags: 0,
      isActive: false,
      // userPosting: this.$auth.user.name,
      postName: null,
      responseLog: {},
      displayResults: false,
      activeSearch: false,
      songsExist: false,
      songsPosted: [],
      songPosted: {},
      tagsAdded: [],
      tagPosted: {},
      userName: null,
      userID: null,
    };
  },
  methods: {
    createPost: async function () {
      console.log(this.songsAdded);
      for (let i = 0; i < this.songsAdded.length; i++) {
        this.songPosted = {
          songName: this.songsAdded[i].name,
          songNumber: i + 1,
          artist: this.songsAdded[i].artist,
          duration: this.songsAdded[i].duration,
        };
        this.songsPosted.push(this.songPosted);
      }
      console.log(this.songsPosted);
      console.log(this.postName);
      console.log(this.songsAdded.length);
      console.log(this.selectedTags);
      for (let i = 0; i < this.selectedTags.length; i++) {
        this.tagAdded = {
          tagName: this.selectedTags[i],
          tagNumber: i + 1,
        };
        this.tagsAdded.push(this.tagAdded);
      }
      console.log(this.tagsAdded);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        postName: this.postName,
        songAmount: this.songsAdded.length,
        userName: this.userName,
        userID: this.userID,
        songs: this.songsPosted,
        tags: this.tagsAdded,
        totalTags: this.tagsAdded.length,
        totalLikes: 0,
        totalDislikes: 0,
      });

      var requestOptionsPost = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          process.env.PRODUCTION_URL + "/api/v1/posts/create",
          requestOptionsPost
        );
        const result = await response.json();
        console.log(result);
        this.$emit("closeCP");
      } catch (error) {
        alert(
          "We're sorry, but something went wrong, please make sure that all required fields are completed and try again"
        );
        this.tagsAdded = [];
        this.songsAdded = [];
        console.log(error);
      }
    },
    getUserInfo: async function () {
      let userid = this.$auth.user.sub;
      let n = 6;
      this.userID = userid.substring(n);
      console.log(this.userID);

      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          process.env.PRODUCTION_URL + "/api/v1/users/" + this.userID,
          requestOptionsGet
        );
        const result = await response.json();
        this.userName = result.data.user.username;
        console.log(this.userName);
        console.log(this.userID);
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
          process.env.PRODUCTION_URL + "/api/v1/users/searchTracks",
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
    removeSong(index) {
      this.songsAdded.splice(index, 1);
      console.log(this.songsAdded);
    },
    addTag(index) {
      if (this.totalTags >= 4) {
        alert("Maximum nubmer of tags has been reached.");
      } else {
        this.selectedTags.push(this.tags[index]);
        console.log(this.selectedTags);
        this.totalTags = this.totalTags + 1;
        console.log(this.totalTags);
      }
    },
    removeTag(index) {
      this.selectedTags.splice(index, 1);
      this.totalTags = this.totalTags - 1;
    },

    close() {
      this.$emit("input", !this.value);
    },
    clearSearch() {
      this.songInput = null;
      this.searchResults = [];
      this.activeSearch = false;
    },
  },
  created() {
    this.getUserInfo();
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
