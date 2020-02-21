import {writable} from "svelte/store";

let update_fps = writable(0);
let render_fps = writable(0);

export {update_fps, render_fps};