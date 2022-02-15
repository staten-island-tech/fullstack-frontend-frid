<template>
  <div
    id="main-div"
    class="
      bg-slate-500
      h-[42vh]
      w-[30vw]
      flex flex-col
      justify-center
      border-2 border-red-500
    "
  >
    <div class="bg-white h-[4vh] w-[30vw]"></div>
    <section class="bg-black h-[1px]"></section>
    <div class="bg-white h-[32vh] w-[30vw]">
      <ul
        id="track-list"
        class="text-xs max-h-[32vh] overflow-y-scroll overflow-x-scroll"
      >
        <li v-for="Music in Musics" :key="Music">
          {{ Music.name }} - {{ Music.artist }} - {{ Music.duration }}
        </li>
      </ul>
    </div>
    <section class="bg-black h-[1px]"></section>
    <div class="bg-white h-[6vh] w-[30vw]">
      <span v-on:click="like" @mouseover="getLikes" class="text-red-500 text-3xl cursor-pointer"
        >&#8593;</span
      >
      <span v-on:click="dislike" class="text-red-500 text-3xl cursor-pointer"
        >&#8595;</span
      >
      <span v-if="(comments === true)" class="text-sm p-[6vw]">
        There are {{ commentCount }} comments
      </span>
      <div v-else>There are no comments yet.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: true,
      commentCount: 0,
      Musics: [
        {
          name: "Piano Concerto No.21 in C Major, K.467: II. Andante",
          artist: "Wolfgang Amadeus Mozart",
          duration: "7:13",
        },
        {
          name: "Requiem, K. 626: Lacrimosa",
          artist: "Wolfgang Amadeus Mozart",
          duration: "2:49",
        },
        {
          name: "Fantasia in D Minor, K.397",
          artist: "Wolfgang Amadeus Mozart",
          duration: "5:15",
        },
        {
          name: "Requiem in D Minor, K. 626: Sequence: VI. Lacrimosa dies illa",
          artist: "Wolfgang Amadeus Mozart",
          duration: "3:19",
        },
        {
          name: "Adagio in E Major, K.261",
          artist: "Wolfgang Amadeus Mozart",
          duration: "8:37",
        },
       
      ],
       requestOptions: {
        method: "GET",
        redirect: "follow",
      },
    };
  },
  methods: {
    abreviate() {
      const nameTest = Object.values(this.Musics);
      console.log(nameTest);
    },
    like() {

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "totalLikes": 7000
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:3000/api/v1/posts/61f818b832b4834430359865", requestOptions)
  .then(response => response.json())
  .then(result => console.log("There are " + result.data.post.totalLikes + " likes"))
  .catch(error => console.log('error', error));
    },
    commentFunction() {
      if (this.commentCount === 0 ){
        this.comments === false
      } 
    },

    dislike() {
      
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "totalDislikes": 2500
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:3000/api/v1/posts/61f818b832b4834430359865", requestOptions)
  .then(response => response.json())
  .then(result => console.log("There are " + result.data.post.totalDislikes + " dislikes"))
  .catch(error => console.log('error', error));
    },

  },
  created () {
    this.commentFunction();
  },
  getLikes () {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
   fetch(
        "http://127.0.0.1:3000/api/v1/posts/61f818b832b4834430359865",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result.data.post.totalLikes))
        .catch((error) => console.log("error", error));
  },
};
</script>
