<template>
  <div>
    <Navbar class="sticky top-0" />
    <NuxtLink to="/ProfilePage3"> Profile </NuxtLink>
    <Posts />
    <button class="text-[4rem] text-[#330066] place-content-center float-right mr-[1vw]" @click="openModal">&#43;</button>
    <PostCreate v-model="modalOpen"></PostCreate>
  </div>
</template>

<script>

export default {
  name: "IndexPage",
  data()
     {
        return {
            modalOpen: false
        }
    },
    methods: {
        openModal() {
            this.modalOpen = !this.modalOpen;
        }    
    }
};
</script>
