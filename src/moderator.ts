 /// <reference types="vss-web-extension-sdk" />
import RestClient = require("TFS/WorkItemTracking/RestClient");
import Contracts = require("TFS/WorkItemTracking/Contracts");
import Extension_Data = require("VSS/SDK/Services/ExtensionData");
import Q = require("q");

export class Moderator {
    commitButton: HTMLElement;
    content: HTMLElement;
    startTimerButton: HTMLElement;
    stopTimerButton: HTMLElement;
    timerToken: number;
    timeSpan: HTMLElement;
    voteResults: HTMLElement;
    resultToCommit: HTMLElement;

    constructor(element: HTMLElement) {
        this.content = element;
        this.content.innerHTML += "Votes results :";

        this.initializeHTMLElement(this.timeSpan, "span", "timeSpan", "");
        // TODO Timer

        this.initializeHTMLElement(this.startTimerButton, "button", "startTimerBtn", "Start");
        $("#startTimerBtn").on("click", this.startTimer);

        this.initializeHTMLElement(this.stopTimerButton, "button", "stopTimerBtn", "Stop");
        $("#stopTimerBtn").on("click", this.stopTimer);

        this.initializeHTMLElement(this.voteResults, "li", "voteResults", null);
        // TODO Show results

        this.initializeHTMLElement(this.resultToCommit, "span", "resultToCommit", null);
        // TODO Show result

        this.initializeHTMLElement(this.commitButton, "button", "commitBtn", "Commit");
        // TODO OnClick
    }

    private initializeHTMLElement(element: HTMLElement, type: string, id: string, innerText: string) {
        element = document.createElement(type);
        element.id = id;
        element.innerText = innerText;
        this.content.appendChild(element);
    }

    private startTimer() {
        console.log("Start timer ");
        this.timerToken = setInterval(() => this.timeSpan.innerHTML = new Date().toUTCString(), 500);
    }

    private stopTimer() {
        console.log("Stop timer");
        clearTimeout(this.timerToken);
    }
}