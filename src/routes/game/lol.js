import PhysicsActor from './physicsActor';
import Engine, { InputHandler } from 'engine';

export default class LOL extends PhysicsActor {
    handleInput = (event) => {
        if(event.code == "KeyA") {
            this.applyForce({x: 0.1});
        } else if (event.code == "KeyD") {
            this.applyForce({x: -0.1});
        }
    }

    create = () => {
        this.input = new InputHandler(document.querySelector('body'), {
            "keydown": [this.handleInput]
        });
        this.input.startHandler();
    }

    update(dt) {
        super.update(dt);
    }
}