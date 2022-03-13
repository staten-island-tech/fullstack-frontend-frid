<template>
  <div>
    <Navbar class="sticky top-0" />
    <NuxtLink to="/ProfilePage2"> Profile </NuxtLink>
    <Posts />
    <div class="bg-slate-400 h-[5vh]"></div>
    <!-- <PostCreate /> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
