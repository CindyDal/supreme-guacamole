 /// <reference types="vss-web-extension-sdk" />

export class Player {
    element: HTMLElement;
    input: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this.input = document.createElement("input");
        this.input.id = "vote";
        this.element.appendChild(this.input);
    }
}