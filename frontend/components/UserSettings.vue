<template>
  <div
    class="flex items-center justify-center h-[70vh] w-[70vw] text-center flex"
  >
    <div
      class="
        flex flex-col
        items-center
        justify-content
        h-[70vh]
        w-[70vw]
        p-[10vh]
      "
    >
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
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSettings",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.toggle-control {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 11px;
}
.toggle-control input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.toggle-control input:checked ~ .control {
  background-color: #d1d1d1;
}
.toggle-control input:checked ~ .control:after {
  left: 27px;
}
.toggle-control .control {
  position: relative;
  height: 25px;
  width: 50px;
  border-radius: 12px;
  background-color: #1e1e1e;
  transition: background-color 0.15s ease-in;
}
.toggle-control .control:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background: white;
  transition: left 0.15s ease-in;
}
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