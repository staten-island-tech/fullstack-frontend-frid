<template>
  <div
    class="h-[8vh] w-[100%] bg-gradient-to-b from-[#dddddd] to-[#eeeeee] flex items-center brightness-[97%] z-[2]"
  >
    <NuxtLink to="/" class="w-[20rem] ml-[4rem] my-[2rem]"
      ><img src="../assets/Logo2.png" alt="Logo" class="h-[7.5vh]"
    /></NuxtLink>
    <div class="h-[8vh] w-[100%] mr-[5vw] flex items-center justify-end">
      <button
        class="mx-[1.5rem] text-[1.25rem] p-[0.75rem] text-[#3a2d80] font-semibold font-lora"
        id="hover-underline-animation"
      >
        <!-- <NuxtLink to="/Login">Login</NuxtLink> -->
        <a href="https://localhost:3000/login">Login</a>
      </button>
      <button
        class="mx-[1.5rem] text-[1.25rem] p-[0.75rem] text-[#3a2d80] font-semibold font-lora"
        id="hover-underline-animation"
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

<style>
#hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #3a2d80;
  transform-origin: bottom right;
  transition: transform 0.35s ease-out;
}

#hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
