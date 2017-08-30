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
    voteResults: HTMLElement;
    resultToCommit: HTMLElement;

    constructor(element: HTMLElement) {
        this.content = element;

        // TODO Timer

        this.startTimerButton = document.createElement("button");
        this.startTimerButton.id = "startTimerBtn";
        this.startTimerButton.innerText = "Start";
        this.content.appendChild(this.startTimerButton);
        $("#startTimerBtn").click(this.startTimer());

        this.stopTimerButton = document.createElement("button");
        this.stopTimerButton.id = "stopTimerBtn";
        this.stopTimerButton.innerText = "Stop";
        this.content.appendChild(this.stopTimerButton);
        // TODO Onclick

        this.content.innerHTML += "Votes results :";
        this.voteResults = document.createElement("LI");
        this.voteResults.id = "voteResults";
        this.content.appendChild(this.voteResults);
        // TODO Show results

        this.resultToCommit = document.createElement("span");
        this.resultToCommit.id = "resultToCommit";
        this.content.appendChild(this.resultToCommit);
        // TODO Show result

        this.commitButton = document.createElement("button");
        this.commitButton.id = "commitTimerBtn";
        this.commitButton.innerText = "Commit";
        this.content.appendChild(this.commitButton);
        // TODO OnClick
    }

    private startTimer() {
        console.log("Start timer");
    }
}