 /// <reference types="vss-web-extension-sdk" />
import RestClient = require("TFS/WorkItemTracking/RestClient");
import Contracts = require("TFS/WorkItemTracking/Contracts");
import Extension_Data = require("VSS/SDK/Services/ExtensionData");
import Q = require("q");

export class Moderator {
    element: HTMLElement;
    startTimerButton: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
        this.startTimerButton = document.createElement("button");
        this.startTimerButton.id = "startTimerBtn";
        this.startTimerButton.innerText = "Start";
        this.element.appendChild(this.startTimerButton);
        // TODO Timer
        // List of results
        // Result to commit
        // Commit button
    }
}