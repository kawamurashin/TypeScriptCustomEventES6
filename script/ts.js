class Main {
    constructor() {
        let myClass = new MyClass();
        const handler = (e) => {
            console.log("Event Complete!");
            console.log("Message :" + e.message);
            myClass.removeEventListener(MyEvent.CUSTOM_EVENT, handler);
        };
        myClass.addEventListener(MyEvent.CUSTOM_EVENT, handler);
    }
}
class MyClass extends EventTarget {
    constructor() {
        super();
        this.timeoutHandler = () => {
            let myClass = new MyEvent(MyEvent.CUSTOM_EVENT);
            myClass.message = "custom my event message";
            this.dispatchEvent(myClass);
        };
        const handler = () => {
            this.timeoutHandler();
        };
        setTimeout(handler, 300);
        setTimeout(handler, 600);
    }
}
class MyEvent extends Event {
    constructor(type) {
        super(type);
    }
}
MyEvent.CUSTOM_EVENT = "custom_event";
window.addEventListener("load", () => {
    new Main();
});
//# sourceMappingURL=ts.js.map