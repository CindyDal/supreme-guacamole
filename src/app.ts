 /// <reference types="vss-web-extension-sdk" />
import RestClient = require("TFS/WorkItemTracking/RestClient");
import Contracts = require("TFS/WorkItemTracking/Contracts");
import Extension_Data = require("VSS/SDK/Services/ExtensionData");
import Q = require("q");
import Players = require("./player");
import Moderators = require("./moderator");
import Sessions = require("./session");

let votingSession;
VSS.getService(VSS.ServiceIds.ExtensionData).then((extensionDataService: Extension_Data.ExtensionDataService) => {
    extensionDataService.getDocument("PlanningPokerSessions", "MyDocumentId").then((document: Sessions.Session) => {
        console.log("theres one");
        createAppropriateUser(document);
    },
    (reason: any) => {
        VSS.getService(VSS.ServiceIds.ExtensionData).then((extensionDataService: Extension_Data.ExtensionDataService) => {
            // Prepare document first
            votingSession = new Sessions.Session();

            extensionDataService.createDocument("PlanningPokerSessions", votingSession).then((document: Sessions.Session) => {
                // Even if no ID was passed to createDocument, one will be generated
                console.log("Doc created");
                createAppropriateUser(document);
            });
        });
    });
});

function createAppropriateUser(votingSession: Sessions.Session) {
    if (VSS.getContribution().type === "ms.vss-web.hub") {
        new Players.Player(document.getElementById("content"), votingSession);
    }
    else {
        new Moderators.Moderator(document.getElementById("content"), votingSession);
    }
}