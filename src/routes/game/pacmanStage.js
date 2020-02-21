import Engine from 'engine';
import Player from './player';
import FPSCounter from './fpsCounter';

export default class PacmanStage extends Engine.Stage {
    constructor(canvas) {
        super(canvas);
    }

    create = () => {
        this.addActor(new FPSCounter());
        this.addActor(new Player({x: 200, y: 200}))
    }
}