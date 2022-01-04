<template>
  <div class="sign-up">
    <sect class="registration-Box">
      <div>
        <input class="username-input" type="text" placeholder="Username" />
        <input
          class="
            h-[5vh]
            w-[25vw]
            m-[5vh]
            mb-[1vh]
            p-[10px]
            border-solid border-black border
          "
          type="password"
          placeholder="Password"
        />
        <button
          class="bg-sky-300 w-[10vw] h-[5vh] m-[10vw] mt-[5vh] rounded-2xl"
        >
          Log In
        </button>
      </div>
    </sect>
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