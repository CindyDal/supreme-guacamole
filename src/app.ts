 /// <reference types="vss-web-extension-sdk" />

class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "You are : ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerText = VSS.getWebContext().user.name;
    }
}

const el = document.getElementById("content");
const greeter = new Greeter(el);