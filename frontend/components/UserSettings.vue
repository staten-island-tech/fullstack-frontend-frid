<template>
  <div
    id="main-container"
    class="fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-[rgba(0, 0, 0, 0.3)]"
    v-show="value"
  ></div>
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
