<template>
  <div class="flex items-center justify-center h-[100vh]">
   <div class="border-2 border-black rounded-[1.5rem] flex items-center justify-center flex-col p-[4rem]" > 
        <input class="mb-[1rem] mt-[2rem] border-2 border-black p-[0.5rem] rounded-md" type="text" placeholder="Username" />
        <input
          class="mb-[1rem] border-2 border-black p-[0.5rem] rounded-md"
          type="password"
          placeholder="Password"
        />
        <button
          class="mt-[1rem] mb-[2rem] border-2 border-black p-[0.5rem] text-[1.65rem]"
        >
          Log In
        </button>
        <NuxtLink to="/SignUp">
      Don't have an account? Sign Up
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login_Page",
  data() {
    return {};
  },
  methods: {},
};
</script>

