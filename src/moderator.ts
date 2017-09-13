 /// <reference types="vss-web-extension-sdk" />
import RestClient = require("TFS/WorkItemTracking/RestClient");
import Contracts = require("TFS/WorkItemTracking/Contracts");
import Extension_Data = require("VSS/SDK/Services/ExtensionData");
import Q = require("q");

export class Moderator {
    commitButton: HTMLElement;
    content: HTMLElement;
    resultsDiv: HTMLElement;
    resetTimerButton: HTMLElement;
    resultToCommit: HTMLElement;
    startTimerButton: HTMLElement;
    stopTimerButton: HTMLElement;
    timerCountdown: number;
    timerDiv: HTMLElement;
    timerToken: number;
    timeSpan: HTMLElement;
    voteResults: HTMLElement;

    constructor(element: HTMLElement) {
        this.content = element;
        this.initializeResultsDiv();
        this.initializeTimerDiv();
    }

    private initializeResultsDiv() {
        this.resultsDiv = document.createElement("div");
        this.resultsDiv.id = "resultsDiv";
        this.content.appendChild(this.resultsDiv);
        // this.initializeHTMLElement(this.resultsDiv, "div", "resultsDiv", null, this.content);
        this.resultsDiv.innerHTML += "Votes results :";
        this.initializeHTMLElement(this.voteResults, "ul", "voteResults", null, this.resultsDiv);
        // TODO Show results
        this.initializeHTMLElement(this.resultToCommit, "span", "resultToCommit", "8", this.resultsDiv);
        // TODO Show result
        this.initializeHTMLElement(this.commitButton, "button", "commitBtn", "Commit", this.resultsDiv);
        $("#commitBtn").click((e) => { this.commitResult(); } );
    }

    private initializeTimerDiv() {
        this.timerDiv = document.createElement("div");
        this.timerDiv.id = "timerDiv";
        this.content.appendChild(this.timerDiv);
        // this.initializeHTMLElement(this.timerDiv, "div", "timerDiv", null, this.content);
        this.initializeHTMLElement(this.timeSpan, "span", "timeSpan", "10:00", this.timerDiv);
        this.timerCountdown = 10 * 60 * 1000;
        this.initializeHTMLElement(this.startTimerButton, "button", "startTimerBtn", "Start", this.timerDiv);
        $("#startTimerBtn").click(() => this.startTimer());
        this.initializeHTMLElement(this.stopTimerButton, "button", "stopTimerBtn", "Stop", this.timerDiv);
        $("#stopTimerBtn").click(() => this.stopTimer());
        this.initializeHTMLElement(this.resetTimerButton, "button", "resetTimerBtn", "Reset", this.timerDiv);
        $("#resetTimerBtn").click(() => this.resetTimer());
    }

    private initializeHTMLElement(element: HTMLElement, type: string, id: string, innerText: string, parent: HTMLElement) {
        element = document.createElement(type);
        element.id = id;
        element.innerText = innerText;
        parent.appendChild(element);
    }

    private startTimer() {
        this.timerToken = setInterval(() => {
            let minutes = Math.floor(this.timerCountdown / 60000);
            let seconds = this.timerCountdown % 60;

            document.getElementById("timeSpan").innerHTML = minutes.toString() + ":" +  seconds.toString();

            if (this.timerCountdown > 0) {
                this.timerCountdown--;
            }
        }, 1000);
    }

    private stopTimer() {
        clearTimeout(this.timerToken);
    }

    private commitResult() {
        console.log("Commit result");
        let client = RestClient.getClient();
    }

    private resetTimer() {
        this.timerCountdown = 10 * 60 * 1000;

        document.getElementById("timeSpan").innerHTML = "10:00";
    }
}