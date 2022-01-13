<template>
  <div class=" h-[8vh] w-[100%] bg-slate-400 fixed">
    <div class="h-[8vh] w-[100%] mr-[5vw]">
      <div class="h-[8vh] flex justify-start items-center">
       <h1 >Playlist Plug</h1>
      </div>
       <div class="flex justify-end">
       <button class="border-2 mx-[1.5rem] text-[1.25rem] p-[0.5rem]">
      <NuxtLink to="/Login">Login</NuxtLink>
    </button>
    <button class="border-2 mx-[1.5rem] text-[1.25rem] p-[0.5rem]">
      <NuxtLink to="/SignUp">Sign Up</NuxtLink>
    </button>
    </div>
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
