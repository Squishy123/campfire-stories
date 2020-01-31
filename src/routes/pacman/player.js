import Engine, {InputHandler} from 'engine';
const SPEED = 2;
export default class Player extends Engine.Actor {
    handleInput = (event) => {
        if(event.code == "KeyA") {
            this.vx = -SPEED;
            this.vy = 0;
        } else if (event.code == "KeyD") {
            this.vx = SPEED;
            this.vy = 0;
        } else if (event.code == "KeyW") {
            this.vy = -SPEED;
            this.vx = 0;
        } else if (event.code == "KeyS") {
            this.vy = SPEED;
            this.vx = 0;
        }               
    }

    create = () => {
        this.px = this.bounds.x; this.py = this.bounds.y;
        this.vx = SPEED; this.vy = 0;
        this.bounds.width = 30;
        this.bounds.height = 30;
        this.input = new InputHandler(document.querySelector('body'), {
            "keydown": [this.handleInput]   
        });
        this.input.startHandler();
    }

    render = (dt) => {
        //clear frame
        this.ctx.clearRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);

        //update bounds
        this.bounds.x = Math.floor(this.px);
        this.bounds.y = Math.floor(this.py);

        //draw frame
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
    }

    update = (dt) => {
        this.px += this.vx;
        this.py += this.vy;

        //wrap
        if(this.px + this.bounds.width < 0) {
            this.px = this.stage.elem.width;
        } else if (this.px > this.stage.elem.width) {
            this.px = 0;
        }

        if(this.py + this.bounds.height < 0) {
            this.py = this.stage.elem.height;
        } else if (this.py > this.stage.elem.height) {
            this.py = 0;
        }
    }
}