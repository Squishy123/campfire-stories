import Engine from 'engine';
import { render_fps, update_fps } from './store.js';

export default class FPSCounter extends Engine.Actor {
    constructor() {
        super({});
    }

    create = () => {
        this.renderStart = Date.now();
        this.renderFPS = 0;
        this.storRenderFPS = 0;
        this.updateStart = Date.now();
        this.updateFPS = 0;
        this.storUpdateFPS = 0;
    }

    update = (dt) => {
        let timeNow = Date.now();
        if (timeNow - this.updateStart > 1000) {
            this.updateStart = Date.now();
            this.storUpdateFPS = this.updateFPS;
            update_fps.set(this.storUpdateFPS);
            this.updateFPS = 0;
        }
        this.updateFPS += 1;
    }

    render = (dt) => {
        let rtimeNow = Date.now();
        if (rtimeNow - this.renderStart > 1000) {
            this.renderStart = Date.now();
            this.storRenderFPS = this.renderFPS;
            render_fps.set(this.storRenderFPS);
            this.renderFPS = 0;
        }
        this.renderFPS += 1;
    }
}