<template>
  <div>
    <Navbar class="sticky top-0" />
    <NuxtLink to="/ProfilePage3"> Profile </NuxtLink>
    <div>
      <div
        id="main-container"
        class="
          w-[80vw]
          h-[75vh]
          bg-[#eeeeee]
          flex flex-row
          justify-evenly
          flex-wrap
          overflow-y-scroll">
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </div>
      <div>
        
      </div>     
    </div>

    <div class="bg-slate-400 h-[5vh]"></div>
    <!-- <PostCreate /> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
