sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], function (Contoller, JSONModel, formatter) {
    'use strict';

    return Contoller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        }
    });
});
