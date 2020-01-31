<script>
  import { onMount } from "svelte";
  import Game from "./pacmanStage.js";
  let canvas;

  onMount(() => {
    //create pacman stage
    let game = new Game(canvas);
    game.start();
  });
</script>

<style>
  canvas {
    background-color: black;
  }
</style>

<h1>Pacman</h1>
<canvas width={400} height={400} bind:this={canvas} />
