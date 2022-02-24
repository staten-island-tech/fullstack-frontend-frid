<template>
  <div class=" h-[8vh] w-[100%] bg-white flex items-center">
       <NuxtLink to='/' class="w-[20rem] ml-[4rem] my-[2rem]"><img src="../assets/Logo.png" alt="Logo" class="h-[7.5vh]"></NuxtLink>
       <div class="h-[8vh] w-[100%] mr-[5vw] flex items-center justify-end">
        <button class="border-2 mx-[1.5rem] text-[1rem] p-[0.75rem] bg-[#330066] text-white font-semibold rounded-[1.75rem]">
          <NuxtLink to="/Login">Login</NuxtLink>
        </button>
        <button class="border-2 mx-[1.5rem] text-[1rem] p-[0.75rem] bg-[#330066] text-white font-semibold rounded-[1.75rem]">
          <NuxtLink to="/SignUp">Sign Up</NuxtLink>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
    };
  },
  methods: {},
};
</script>
