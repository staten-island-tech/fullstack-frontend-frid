<template>
  <div class="login-container">
    <form>
    <label for="username">Username:</label>
    <input class="border py-2 px-3 text-grey-darkest" type="text" id="username" name="username">
    <label for="password">Password:</label>
    <input type="text" id="password" name="password">
    </form>
    <button class="Login-btn">Log In</button>
    <h1><a href="#">Forgot Password?</a></h1>
 
  </div>
</template>
 
<script>
export default {};
</script>
 
<style scoped>
 
.login-container {
  border: solid black 1rem;
  width: 25%;
  display: flex;
  flex-direction: column;
}
 
</style>