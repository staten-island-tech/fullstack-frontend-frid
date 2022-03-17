<template>
  <div id="modal" class="fixed m-0px flex content-center">
    <div id="modal-container" class="container">

  <!-- position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da; -->

      <div id="modal-title" class="">Settings</div>
      <!-- <p>Get a direction with your favourite apps</p>
          <a href="#" class="btn gmaps">
            <img src="https://img.icons8.com/color/420/google-maps.png"> Google Maps
          </a>
          <a href="#" class="btn waze">
            <img src="https://img.icons8.com/color/420/waze.png"> Waze
          </a> -->
      <div class="flex flex-row items-center justify-between h-[5vh] w-[30vw]">
        <p class="text-[11px] relative">Color Theme</p>
        <button class="dropdown">
          <span>Mouse over me</span>
          <div class="dropdown-content">
            <p class="dropdown-item">Default</p>
            <p class="dropdown-item">Custom</p>
          </div>
        </button>
      </div>
      <div class="flex flex-row justify-between h-[5vh] w-[30vw]">
        <p class="text-[11px] relative top-[5px]">Privacy Settings</p>
        <button class="dropdown">
          <span>Mouse over me</span>
          <div class="dropdown-content">
            <p class="dropdown-item">Set Account to Private</p>
            <p class="dropdown-item">Only Allow Followers to View</p>
            <p class="dropdown-item">
              Only Allow Followers and Followers to View
            </p>
            <p class="dropdown-item">Allow Anyone to View</p>
          </div>
        </button>
      </div>
      <div class="flex flex-row justify-between h-[5vh] w-[30vw]">
        <p class="text-[11px] relative top-[5px]">About</p>
        <button class="dropdown">
          <span>Mouse over me</span>
          <div class="dropdown-content">
            <p class="dropdown-item">Privacy Policy</p>
            <p class="dropdown-item">Terms of Use</p>
          </div>
        </button>
      </div>
      <div class="flex flex-row justify-between h-[5vh] w-[30vw]">
        <p class="text-[11px] relative top-[5px]">Help</p>
        <button class="dropdown">
          <span>Mouse over me</span>
          <div class="dropdown-content">
            <p class="dropdown-item">Contact Support</p>
            <p class="dropdown-item">Navigation Help</p>
            <p class="dropdown-item">Suggestions</p>
          </div>
        </button>
      </div>
      <button class="mt-3 border-b border-teal font-semibold">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>
