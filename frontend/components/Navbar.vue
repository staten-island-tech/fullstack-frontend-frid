<template>
  <div class="border-2 h-[8vh] w-[100%] bg-slate-400">
    <div class="h-[8vh] flex justify-end items-center mx-[5vw]">
       <button class="border-2 mx-[1.5rem] text-[1.25rem] p-[0.5rem]">
      <NuxtLink to="/Login">Login</NuxtLink>
    </button>
    <button class="border-2 mx-[1.5rem] text-[1.25rem] p-[0.5rem]">
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
