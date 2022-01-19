<template>
  <div class="flex items-center justify-center h-[100vh] text-center flex">
    <div
      class="
        flex flex-row
        items-center
        justify-center
        h-[10vh]
        w-[50vw]
        left-[5px]
        top-[5px]
      "
    >
      <p>Color Theme</p>
      <label class="toggle-control">
        <input type="checkbox" checked="checked" />
        <span class="control"></span>
      </label>
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
  font-size: 22px;
}
.toggle-control input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.toggle-control input:checked ~ .control {
  background-color: dodgerblue;
}
.toggle-control input:checked ~ .control:after {
  left: 55px;
}
.toggle-control .control {
  position: absolute;
  height: 50px;
  width: 100px;
  border-radius: 25px;
  background-color: darkgray;
  transition: background-color 0.15s ease-in;
}
.toggle-control .control:after {
  content: "";
  position: absolute;
  left: 5px;
  top: 5px;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background: white;
  transition: left 0.15s ease-in;
}
</style>