import Engine from 'engine';

export default class PhysicsActor extends Engine.Actor {
    constructor(bounds) {
        super(bounds);

        this.position = bounds.position || { x: 0, y: 0 };
        this.bufPosition = this.position;

        this.velocity = bounds.velocity || { x: 0, y: 0 };
        this.bufVelocity = this.velocity;

        this.acceleration = bounds.acceleration || { x: 0, y: 0 };
        this.bufAcceleration = this.acceleration;
    }

    updateVelocity = (dt) => {
        this.bufVelocity.x = this.bufVelocity.x + this.acceleration.x * dt;
        this.bufVelocity.y = this.bufVelocity.y + this.acceleration.y * dt;
    }

    updatePosition = (dt) => {
        this.bufPosition.x += this.bufVelocity.x * dt + 0.5 * this.acceleration.x * dt * dt;
        this.bufPosition.y += this.bufVelocity.y * dt + 0.5 * this.acceleration.y * dt * dt;
    }

    setBuffers = () => {
        this.position = this.bufPosition;
        this.velocity = this.bufVelocity;
        this.acceleration = this.bufAcceleration;
    }

    //function for body to be drawn
    draw = (ctx = this.ctx) => {

    }

    //function for body to be cleared
    clear = (ctx = this.ctx) => {
        ctx.fillRect(this.position.x, this.position.y, this.bounds.width, this.bounds.height);
    }

    //run every update tick
    update = (dt) => {
        //update velocity
        this.updateVelocity(dt);

        //update position 
        this.updatePosition(dt);
    }

    //run every render tick
    render = (dt) => {
        //clear body
        this.clear();

        //set buffers
        this.setBuffers();

        //draw body
        this.draw();
    }
}