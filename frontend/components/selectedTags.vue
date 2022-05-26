<template>
  <div @click="$emit('remove')">#{{ selectedTags }}</div>
</template>

<script>
export default {
  props: {
    selectedTags: String,
  },
  data() {
    return {};
  },
};
</script>
