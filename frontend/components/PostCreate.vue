<template>
  <div id="main-container" class="flex items-center justify-center h-[100vh]" v-show="value">
    <div
      id="form" 
      class="flex flex-col w-[50vw] h-[50vh] bg-[#6957e7] flex items-center justify-center rounded-[5rem]"
    >
      <h3>Create a Post</h3>
      <div id="input-container" class="flex flex-col w-[30vw] items-center">
        <div class="my-[5vh] h-[10vh] overflow-y-scroll w-[30vw]">
          <div class="flex flex-row">
            <input
              type="text"
              placeholder="Search by Song Name or Artist to add songs to your playlist"
              class="w-[25vw] mx-[1vw] rounded-md"
              v-model="songInput"
            />
            <button @click="addSong">Add</button>
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
            <input type="text" placeholder="Tags" v-model="tagInput" class="mx-[1vw] rounded-md"/>
                <button @click="addTag">Add</button>
          </div>
          <div id="tag-list">
            <ul>
              <li v-for="tag in tags" :key="tag">
                #{{ tag }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button @click.prevent="close"
    class="mt-3 border-b border-teal font-semibold">Close</button>
  </div>
</template>

<script>
export default {

  name: 'PostCreate',
  props: {
                value: {
                    required: true
                }
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
      tags: [],
      tagInput: null,
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
    },
    addTag() {
      this.tags.push(this.tagInput);
      console.log(this.tags);
    },
    close() {
                  this.$emit("input", !this.value);
                } ,

    // tagsLength() {
    //   this.tagsLength = this.tags.length
    // },
  },
};
</script>

v-bind:style="formStyle"
<button v-on:click="formStylesOpen">Open</button>
    <button v-on:click="formStylesClosed">Closed</button>
    <div id="button"></div>