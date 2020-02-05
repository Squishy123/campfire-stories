<!--<script>
  import { onMount } from "svelte";
  import Game from "./pacmanStage.js";
  let canvas, uFPS, rFPS;

  onMount(() => {
    //create pacman stage
    let game = new Game(canvas);
    game.start();

    //subscript fps
    update_fps.subscribe(val => {
      uFPS = val;
    });

    render_fps.subscribe(val => {
      rFPS = val;
    });
  });
</script>

<style>
  * {
    color: cyan;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
  }
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
  }
</style>

<canvas
  width={window.innerWidth}
  height={window.innerHeight}
  bind:this={canvas} />

<div class="overlay">
  <h1>Render FPS: {rFPS}</h1>
  <h1>Update FPS: {uFPS}</h1>
</div>
-->