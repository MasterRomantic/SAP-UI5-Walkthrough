
sap.ui.define([
    "sap/m/Text"
], function (Text) {
    "use strict";
    // We are using a control to display the text in the body
    new Text({
        text: "Hello World from control!"
    }).placeAt('content');
});