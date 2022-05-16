<template>
  <div>
    <h4>{{ songName }}</h4>
    <p>{{ songArtist }}</p>
    <button>Add</button>
  </div>
</template>

<script>
export default {
  props: {
    songName: String,
    songArtist: String,
  },
};
</script>
