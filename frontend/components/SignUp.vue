<template>
  <div class="sign-up">
    <sect class="registration-Box">
      <div>
        <input class="email-input" type="text" placeholder="Email Address" />
        <input class="username-input" type="text" placeholder="Username" />
        <input
          v-on:click="passwordTyped"
          class="password-input"
          type="password"
          placeholder="Password"
        />
        <div v-if="password === true">
          <input
            class="passwordConfirm-input"
            type="text"
            placeholder="Confirm Password"
          />
        </div>
        <div v-else></div>
        <button class="signup-button">Sign Up</button>
      </div>
    </sect>
  </div>
</template>

<script>
export default {
  name: "SignUp_Page",
  data() {
    return {
      password: false,
    };
  },
  methods: {
    passwordTyped() {
      this.password = true;
      console.log(this.password);
    },
  },
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

.password-input {
  height: 5vh;
  width: 25vw;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  margin: 5vh;
  margin-bottom: 1vh;
  padding: 10px;
}

.passwordConfirm-input {
  height: 5vh;
  width: 25vw;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  margin: 5vh;
  margin-bottom: 1vh;
  padding: 10px;
}

.signup-button {
  background-color: chartreuse;
}
</style>