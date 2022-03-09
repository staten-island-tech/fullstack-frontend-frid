<template>
  <div class="h-[8vh] w-[100%] bg-[#dddddd] flex items-center">
    <NuxtLink to="/" class="w-[20rem] ml-[4rem] my-[2rem]"
      ><img src="../assets/Logo2.png" alt="Logo" class="h-[7.5vh]"
    /></NuxtLink>
    <div class="h-[8vh] w-[100%] mr-[5vw] flex items-center justify-end">
      <button
        class="mx-[1.5rem] text-[1rem] p-[0.75rem] text-[#3a2d80] font-bold"
      >
        <NuxtLink to="/Login">Login</NuxtLink>
      </button>
      <button
        class="mx-[1.5rem] text-[1rem] p-[0.75rem] text-white font-semibold"
      >
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
