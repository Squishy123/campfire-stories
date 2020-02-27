import Engine from 'engine';

export default class PhysicsActor extends Engine.Actor {
    constructor(bounds) {
        super(bounds);

        this.mass = bounds.mass || 1;

        this.position = bounds.position || { x: 0, y: 0 };
        this.bufPosition = this.position;

        this.velocity = bounds.velocity || { x: 0, y: 0 };
        this.bufVelocity = this.velocity;

        this.acceleration = bounds.acceleration || { x: 0, y: 0 };
        this.bufAcceleration = this.acceleration;
    }

    applyForce = (force) => {
        if (force.x && force.x != 0) {
            this.bufAcceleration.x = force.x / this.mass;
        }
        if (force.y && force.y != 0) {
            this.bufAcceleration.y = force.y / this.mass;
        }
        console.log(this.bufAcceleration);
    }

    updateVelocity = (dt) => {
        this.bufVelocity.x = this.bufVelocity.x + this.bufAcceleration.x * dt;
        this.bufVelocity.y = this.bufVelocity.y + this.bufAcceleration.y * dt;
    }

    updatePosition = (dt) => {
        this.bufPosition.x += this.bufVelocity.x * dt + 0.5 * this.bufAcceleration.x * dt * dt;
        this.bufPosition.y += this.bufVelocity.y * dt + 0.5 * this.bufAcceleration.y * dt * dt;
        console.log(this.position);
    }

    setBuffers = () => {
        this.position = {x: Math.floor(this.bufPosition.x), y: Math.floor(this.bufPosition.y)};
        this.velocity = this.bufVelocity;
        this.acceleration = this.bufAcceleration;
    }

    //function for body to be drawn
    draw = (ctx = this.ctx) => {
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x, this.position.y, this.bounds.width, this.bounds.height);
    }

    //function for body to be cleared
    clear = (ctx = this.ctx) => {
        ctx.clearRect(this.position.x, this.position.y, this.bounds.width, this.bounds.height);
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