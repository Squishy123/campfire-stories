import Engine from 'engine';
import LOL from './lol';
import FPSCounter from './fpsCounter';

export default class PacmanStage extends Engine.Stage {
    constructor(canvas) {
        super(canvas);
    }

    create = () => {
        this.addActor(new FPSCounter());
        let l = new LOL({width: 50, height: 50,position: { x: 200, y: 200 } })
        console.log(l);
        this.addActor(l)
    }
}