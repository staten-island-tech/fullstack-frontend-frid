<template>
  <div class="flex flex-row grid grid-cols-4 my-[2vh] gap-[1vw]">
    <section id="song-name" class="mr-[1vw] col-span-2">
      {{ songName }}
    </section>
    <section class="">{{ songArtist }}</section>
    <button
      class="mx-[1vw] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px w-[5vw] h-[4vh]"
      @click="$emit('add')"
    >
      Add
    </button>
  </div>
</template>

<script>
export default {
  props: {
    songName: String,
    songArtist: String,
    songDuration: Number,
  },
};
</script>

<style>
/* #song-name {
  width: 100%;
  display: inline-block; /* important */
/* white-space: nowrap;
  overflow: hidden;
} */
/* when not hovering show ellipsis */
/* #song-name:not(:hover) {
  text-overflow: ellipsis;
} */

/* animate on either hover or focus */
/* #song-name:hover,
#song-name:focus {
  display: inline-block;
  animation-name: scroll-text;
  animation-duration: 4.75s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal; */
/* FYI this would be the shorthand:
        animation: scroll-text 5s ease 0s 2 normal;
      */
/* } */

/* define the animation */
/* @keyframes scroll-text {
  0% {
    transform: translateX(0%);
  }
  90% {
    transform: translateX(-100%);
  }
  95% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(0%);
  }
} */
</style>
