class Main
{
    constructor() {
        let myClass:MyClass = new MyClass();
        const handler:EventListener = (e:MyEvent) =>
        {
            console.log("Event Complete!")
            console.log("Message :" + e.message);
            myClass.removeEventListener(MyEvent.CUSTOM_EVENT, handler);
        }
        myClass.addEventListener(MyEvent.CUSTOM_EVENT , handler)
    }
}

class MyClass extends EventTarget
{
    constructor() {
        super();
        const handler:TimerHandler = () =>
        {
            this.timeoutHandler();
        }
        setTimeout(handler, 300);
        setTimeout(handler, 600);
    }

    private timeoutHandler:Function = () =>
    {
        let myClass = new MyEvent(MyEvent.CUSTOM_EVENT);
        myClass.message = "custom my event message"
        this.dispatchEvent(myClass);
    }
}
class MyEvent extends Event
{
    public message:string;
    public static CUSTOM_EVENT:string = "custom_event";
    constructor(type:string) {
        super(type);
    }

}
window.addEventListener("load" , ()=>
{
    new Main();
});