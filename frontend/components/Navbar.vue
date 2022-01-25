<template>
  <div class=" h-[8vh] w-[100%] bg-white flex items-center">
       <h1 class="w-[20rem] ml-[10rem] text-[2rem]">Playlist Plug</h1>
       <div class="h-[8vh] w-[100%] mr-[5vw] flex items-center justify-end">
        <button class="border-2 mx-[1.5rem] text-[1.25rem] p-[0.5rem] bg-[#330066] text-white font-semibold">
          <NuxtLink to="/Login">Login</NuxtLink>
        </button>
        <button class="border-2 mx-[1.5rem] text-[1.25rem] p-[0.5rem] bg-[#330066] text-white font-semibold">
          <NuxtLink to="/SignUp">Sign Up</NuxtLink>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {},
};
</script>
