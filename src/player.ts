 /// <reference types="vss-web-extension-sdk" />
 import Extension_Data = require("VSS/SDK/Services/ExtensionData");
 import Q = require("q");
 import Service = require("VSS/Service");
 import Sessions = require("./session");

export class Player {
    element: HTMLElement;
    input: HTMLElement;
    votingSession: Sessions.Session;

    constructor(element: HTMLElement, votingSession: Sessions.Session) {
        this.element = element;
        this.input = document.createElement("input");
        this.input.id = "vote";
        this.element.appendChild(this.input);
        $("#vote").bind("input", this.vote);
        this.votingSession = votingSession;
    }

    private vote() {
        // $(this).val()
    }

}