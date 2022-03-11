<template>
  <div class="flex items-center justify-center h-[100vh] text-center">
    <p>
      Followers<br />
      Expected Completion: TBD
    </p>
    <button @click="spotifyTest">SPOTIFy test</button>
  </div>
</template>

<script>
export default {
  name: "Followers",
  data() {
    return {};
  },
  methods: {
    spotifyTest: async function () {
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch("", requestOptionsGet);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>