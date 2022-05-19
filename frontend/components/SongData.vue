<template>
  <div class="flex flex-row my-[2vh] grid grid-cols-3">
    <h4 class="mr-[1vw]">{{ songName }}</h4>
    <p class="">{{ songArtist }}</p>
    <button
      class="mx-[1vw] bg-transparent hover:bg-[#6e5ba7] hover:text-white border-[1px] border-[#330066] px-[10px] py-[5px] rounded-md transform active:translate-y-px w-[5vw]"
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
  },
  methods: {
    add: {},
  },
};
</script>
