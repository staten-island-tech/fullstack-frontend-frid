<template>
   <div class=""> 
    <sect class="flex flex-wrap flex-col">
      <div>
        <input class="" type="text" placeholder="Username" />
        <input
          class=""
          type="password"
          placeholder="Password"
        />
        <button
          class=""
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