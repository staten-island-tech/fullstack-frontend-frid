<template>
  <div id="main-container">
    <div
      id="form"
      class="flex flex-col w-[100vw] h-[50vh] bg-slate-200 items-center"
      v-bind:style="formStyle"
    >
      <h3>Create a Post</h3>
      <div id="input-container" class="flex flex-col w-[50vw] items-center">
        <div class="h-[35vh]">
          <div class="flex flex-row">
            <input
              type="text"
              placeholder="Search by Song Name or Artist to add songs to your playlist"
              class="w-[50vw] mx-[1vw]"
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
        <input type="text" placeholder="Caption" />
      </div>
    </div>
    <button v-on:click="formStylesOpen">Open</button>
    <button v-on:click="formStylesClosed">Closed</button>
    <div id="button"></div>
  </div>
</template>

<script>
export default {
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
    };
  },
  methods: {
    formStylesOpen() {
      this.formStyle = this.formStyleOpen;
    },
    formStylesClosed() {
      this.formStyle = this.formStyleClosed;
    },
    addSong() {
      this.songs.push(this.songInput);
      console.log(this.songs);
    },
  },
};
</script>
