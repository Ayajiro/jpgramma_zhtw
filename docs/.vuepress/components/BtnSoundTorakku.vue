<template>
  <div class="btn_play" v-on:click.prevent="playSound('/audio/torakku.mp3')"></div>
</template>
<script>
 export default {
   props:{
     
   },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
}
</script>


<style>
  .btn_play{display:inline-block;
    width:16px;height:16px;background-image:url("/play.png");}
  .btn_play:hover{background-image:url("/play_hover.png");}
  </style>