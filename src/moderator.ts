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
    timerDiv: HTMLElement;
    resultsDiv: HTMLElement;

    constructor(element: HTMLElement) {
        this.content = element;
        // TODO Refactor
        this.resultsDiv = document.createElement("div");
        this.resultsDiv.id = "resultsDiv";
        this.content.appendChild(this.resultsDiv);
        // this.initializeHTMLElement(this.resultsDiv, "div", "resultsDiv", null, this.content);
        this.resultsDiv.innerHTML += "Votes results :";
        this.initializeHTMLElement(this.voteResults, "ul", "voteResults", null, this.resultsDiv);
        // TODO Show results
        this.initializeHTMLElement(this.resultToCommit, "span", "resultToCommit", null, this.resultsDiv);
        // TODO Show result
        this.initializeHTMLElement(this.commitButton, "button", "commitBtn", "Commit", this.resultsDiv);
        $("#commitBtn").on("click", this.commitResult);

        this.timerDiv = document.createElement("div");
        this.timerDiv.id = "timerDiv";
        this.content.appendChild(this.timerDiv);
        // this.initializeHTMLElement(this.timerDiv, "div", "timerDiv", null, this.content);
        this.initializeHTMLElement(this.timeSpan, "span", "timeSpan", null, this.timerDiv);
        // // TODO Timer
        this.initializeHTMLElement(this.startTimerButton, "button", "startTimerBtn", "Start", this.timerDiv);
        $("#startTimerBtn").on("click", this.startTimer);
        this.initializeHTMLElement(this.stopTimerButton, "button", "stopTimerBtn", "Stop", this.timerDiv);
        $("#stopTimerBtn").on("click", this.stopTimer);
    }

    private initializeHTMLElement(element: HTMLElement, type: string, id: string, innerText: string, parent: HTMLElement) {
        element = document.createElement(type);
        element.id = id;
        element.innerText = innerText;
        parent.appendChild(element);
    }

    private startTimer() {
        console.log("Start timer ");
        // this.timerToken = setInterval(() => this.timeSpan.innerHTML = new Date().toUTCString(), 500);
    }

    private stopTimer() {
        console.log("Stop timer");
        // clearTimeout(this.timerToken);
    }

    private commitResult() {
        console.log("Commit result");
    }
}