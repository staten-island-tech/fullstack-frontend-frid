<template>
  <div
    id="main-div"
    class="bg-slate-500 h-[42vh] w-[30vw] flex flex-col justify-center border-2 border-red-500"
  >
    <div class="bg-white h-[4vh] w-[30vw]"></div>
    <section class="bg-black h-[1px]"></section>
    <div class="bg-white h-[32vh] w-[30vw]">
      <ul
        id="track-list"
        class="text-xs max-h-[32vh] overflow-y-scroll overflow-x-scroll"
      >
        <!-- <li v-for="Music in Musics" :key="Music">
          {{ Music.name }} - {{ Music.artist }} - {{ Music.duration }}
        </li> -->
      </ul>
    </div>
    <section class="bg-black h-[1px]"></section>
    <div class="bg-white h-[6vh] w-[30vw]">
      <span
        v-on:click="like"
        class="text-red-500 text-3xl cursor-pointer"
        >&#8593;</span
      >
      <span v-on:click="dislike" class="text-red-500 text-3xl cursor-pointer"
        >&#8595;</span
      >
      <span v-on:click="commentStylesOpen" class="text-sm p-[6vw]">
        There are 0 comments
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    
    return {
      localLikes: null,
      localDislikes: null,
      tempLikes: null,
      tempDislikes: null,
      localComments: null,
      commentStyle: {
        display: "none",
      },
      commentStyleOpen: {
        display: "flex",
      },
      commentStyleClosed: {
        display: "none",
      },
    };
  },
  methods: {
    like: async function() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try { 
      const response = await fetch(
        "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
        requestOptionsGet
      );
      const result = await response.json()
      console.log("There are " + result.data.post.totalLikes + " likes" )
      this.localLikes = result.data.post.totalLikes;

      } catch (error) {
        console.log(error)
      };

      


      this.tempLikes = this.localLikes + 1; 

      var raw = JSON.stringify({
        totalLikes: this.tempLikes,
      });

      var requestOptionsPatch = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };


      try { 
      const response = await fetch(
        "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
        requestOptionsPatch
      );
      const result = await response.json()
      console.log("There are " + result.data.post.totalLikes + " likes" )

      } catch (error) {
        console.log(error)
      };
     
    },

     dislike: async function() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      
      var requestOptionsGet = {
        method: "GET",
        redirect: "follow",
      };

      try { 
      const response = await fetch(
        "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
        requestOptionsGet
      );
      const result = await response.json()
      console.log("There are " + result.data.post.totalDislikes + " dislikes" )
      this.localDislikes = result.data.post.totalDislikes;

      } catch (error) {
        console.log(error)
      };

      


      this.tempDislikes = this.localDislikes + 1; 

      var raw = JSON.stringify({
        totalDislikes: this.tempDislikes,
      });

      var requestOptionsPatch = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };


      try { 
      const response = await fetch(
        "http://localhost:3000/api/v1/posts/61f5d9d9000fb29e24d1bad9",
        requestOptionsPatch
      );
      const result = await response.json()
      console.log("There are " + result.data.post.totalDislikes + " dislikes" )

      } catch (error) {
        console.log(error)
      };
     
    },


   
  },
};
</script>
