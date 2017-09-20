 /// <reference types="vss-web-extension-sdk" />
 import Extension_Data = require("VSS/SDK/Services/ExtensionData");
 import Q = require("q");
 import Service = require("VSS/Service");

export class Player {
    element: HTMLElement;
    input: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this.input = document.createElement("input");
        this.input.id = "vote";
        this.element.appendChild(this.input);
        $("#vote").bind("input", this.vote);
    }

    private vote() {
        // $(this).val()
    }

}