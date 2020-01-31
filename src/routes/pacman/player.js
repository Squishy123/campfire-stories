import Engine from 'engine';

export default class Player extends Engine.Actor {
    create = () => {
        this.px = 0; this.py = 0;
        this.bounds.width = 50;
        this.bounds.height = 50;
    }

    render = (dt) => {
        //clear frame
        this.ctx.clearRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);

        //update bounds
        this.bounds.x = this.px;
        this.bounds.y = this.py;

        //draw frame
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
    }

    update = (dt) => {
        this.px += 1;
    }
}