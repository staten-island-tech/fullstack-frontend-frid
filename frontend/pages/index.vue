<template>
  <div>
    <Navbar class="sticky top-0" />
    <NuxtLink to="/ProfilePage3"> Profile </NuxtLink>
    <Posts />
    <button class="" @click="openModal">Create Post</button>
    <PostCreate v-model="modalOpen"></PostCreate>
    <div class="bg-slate-400 h-[5vh]"></div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
  },
};
</script>
