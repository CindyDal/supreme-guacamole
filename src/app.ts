 /// <reference types="vss-web-extension-sdk" />
import RestClient = require("TFS/WorkItemTracking/RestClient");
import Contracts = require("TFS/WorkItemTracking/Contracts");

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

// Get an instance of the client
let client = RestClient.getClient();

client.getWorkItem(1).then(function(wi)
{
    console.log("Effort is : " + wi.fields["Microsoft.VSTS.Scheduling.Effort"]);
}
);