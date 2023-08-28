sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Contoller, JSONModel) {
    'use strict';

    return Contoller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        }
    });
});