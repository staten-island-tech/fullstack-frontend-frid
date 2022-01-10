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
  name: "SignUp_Page",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.sign-up {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.registration-Box {
  height: 60vh;
  width: 30vw;
  display: flex;
  justify-content: center;
  border-style: solid;
  border-color: black;
  border-width: 2px;
}

.email-input {
  height: 5vh;
  width: 25vw;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  margin: 5vh;
  margin-bottom: 1vh;
  padding: 10px;
}

.username-input {
  height: 5vh;
  width: 25vw;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  margin: 5vh;
  margin-bottom: 1vh;
  padding: 10px;
}
</style>