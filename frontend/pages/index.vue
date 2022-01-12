<template>
  <div>
    <Navbar />
    <NuxtLink to="/Login">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <ProfilePage />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
