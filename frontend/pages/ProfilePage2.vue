<template>
  <div>
    <Navbar />
    <div id="total-frame" class="flex flex-row">
      <div id="side-navbar" class="flex flex-col w-[12vw]">
        <button v-on:click="allPostsButton" class="border-2 bg-[#330066] text-white font-semibold rounded-[1.75rem] m-[2vh] p-[1rem] text-[1.5rem]">All Posts</button>
        <button v-on:click="followersFollowingButton" class="border-2 bg-[#330066] text-white font-semibold rounded-[1.75rem] m-[2vh] p-[1rem] text-[1.5rem]">Followers</button>
        <button v-on:click="followersFollowingButton" class="border-2 bg-[#330066] text-white font-semibold rounded-[1.75rem] m-[2vh] p-[1rem] text-[1.5rem]">Following</button>
        <button v-on:click="userSettingsButton" class="border-2 bg-[#330066] text-white font-semibold rounded-[1.75rem] m-[2vh] p-[1rem] text-[1.5rem]">User Settings</button>
      </div>
      <div id="main-frame" class="w-[88vw]">
        <div id="blank-box"></div>
        <div id="window"></div>
      </div>
    </div>
  </div>
</template>
