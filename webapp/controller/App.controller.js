sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello : function () {
            // show an alert
            alert("Hello world from controller!");
        }
    });
});

// Controller names are capitalized.
// Controllers carry the same name as the related view (if there is a 1:1 relationship)
// Event handlers are prefixed with on
// Controller names always end with *.controller.js