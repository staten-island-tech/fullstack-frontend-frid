<template>
  <div id="main-container"
    class="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.3)]"
    v-show="value">
    <div
      class="flex items-center justify-center h-[70vh] w-[70vw] text-center flex"
    >
      <div
        class="border-2 border-black rounded-[1.5rem] flex items-center justify-center flex-col p-[4rem] w-[25vw] bg-[#eeeeee]"
      >
        <div class="flex flex-row justify-between h-[5vh] my-[1vw]">
          <button class="dropdown">
            <!-- <span>Mouse over me</span> -->
            <p class="text-[15px] relative font-bold hover:scale-105">Color Theme</p>
            <div class="dropdown-content">
              <p class="dropdown-item">Default</p>
              <p class="dropdown-item">Custom</p>
            </div>
          </button>
        </div>
        <div class="flex flex-row justify-between h-[5vh] my-[1vw]">
          <button class="dropdown">
            <p class="text-[15px] relative top-[5px] font-bold hover:scale-105">
              Privacy Settings
            </p>
            <!-- <span>Mouse over me</span> -->
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
        <div class="flex flex-row justify-between h-[5vh] my-[1vw]">
          <button class="dropdown">
            <!-- <span>Mouse over me</span> -->
            <p class="text-[15px] relative top-[5px] font-bold hover:scale-105">About</p>
            <div class="dropdown-content">
              <p class="dropdown-item">Privacy Policy</p>
              <p class="dropdown-item">Terms of Use</p>
            </div>
          </button>
        </div>
        <div class="flex flex-row justify-between h-[5vh] my-[1vw]">
          <button class="dropdown">
            <!-- <span>Mouse over me</span> -->
            <p class="text-[15px] relative top-[5px] font-bold hover:scale-105">Help</p>
            <div class="dropdown-content">
              <p class="dropdown-item">Contact Support</p>
              <p class="dropdown-item">Navigation Help</p>
              <p class="dropdown-item">Suggestions</p>
            </div>
          </button>
        </div>
        <button @click.prevent="close" class="mt-[5vh]">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSettings",
  props: {
    value: {
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style>

.dropdown {
  position: relative;
  display: inline-block;
  font-size: 11px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:focus .dropdown-content {
  display: block;
}

.dropdown-item {
  padding: 12px 16px;
}
.dropdown-item:hover {
  background-color: #f1f1f1;
}
</style>
