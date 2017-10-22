 /// <reference types="vss-web-extension-sdk" />
import Service = require("VSS/Service");
import Extension_Data = require("VSS/SDK/Services/ExtensionData");

export class Session {

    private id: string;
    private name: string;

    constructor() {
        this.id = "MyDocumentId";
    }
}