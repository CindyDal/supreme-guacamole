 /// <reference types="vss-web-extension-sdk" />
import RestClient = require("TFS/WorkItemTracking/RestClient");
import Contracts = require("TFS/WorkItemTracking/Contracts");
import Extension_Data = require("VSS/SDK/Services/ExtensionData");
import Q = require("q");
import Players = require("./player");
import Moderators = require("./moderator");

if (VSS.getContribution().type === "ms.vss-web.hub") {
    new Players.Player(document.getElementById("content"));
}
else {
    new Moderators.Moderator(document.getElementById("content"));
}