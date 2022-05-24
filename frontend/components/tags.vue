<template>
  <div @click="$emit('add')">
    {{ tags }}
  </div>
</template>

<script>
export default {
  props: {
    tags: String,
  },
  data() {
    return {};
  },
};
</script>
