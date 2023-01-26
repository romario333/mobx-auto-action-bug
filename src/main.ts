import {SampleStore} from "./sample-store";

async function main() {

    const store = new SampleStore();

    const callback = () => {
        console.log("- callback invoked");
    }

    console.log("\nCallback should be invoked only once:\n")

    store.addListener("test", callback);
    store.invokeListeners();

    store.removeListener(callback);
    store.invokeListeners();

    console.log("\n\nOriginal callback:", callback);
    console.log("Callback in store:", store.listeners[0].callback);
}

main();
