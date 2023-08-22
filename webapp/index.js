sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    "use strict";
    // We are now using an XMLView to display the "Hello world" text in the body tag.
    //Views are called asyncronously, so the "then" is executed once the view has been called.
    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
    }).then(function (oView) {
        oView.placeAt('content');
    });
});