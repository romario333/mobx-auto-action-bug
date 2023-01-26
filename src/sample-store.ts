import {makeObservable, observable} from "mobx";

export interface Listener {
    name: string;
    callback: () => void;
}

export class SampleStore {
    @observable listeners: Listener[] = [];

    constructor() {
        makeObservable(this);
    }

    addListener(name: string, callback: () => void) {
        this.listeners.push({
            name,
            callback
        });
    }

    removeListener(callback: () => void) {
        this.listeners = this.listeners.filter(l => l.callback !== callback);
    }

    invokeListeners() {
        for (const listener of this.listeners) {
            listener.callback();
        }
    }
}

