sap.ui.define([
    "sap/ui/core/mvc/Controller",
    // adding a module (resource) from the sap/m library
    //modules are loaded asyncronously
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello : function () {
            // show an alert using the MessageToast from the sap/m library
            MessageToast.show("Hello world from a message toast from a module");
        }
    });
});