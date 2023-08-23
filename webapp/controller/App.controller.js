sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    // adding the json model
    "sap/ui/model/json/JSONModel"
 ], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        // onInit is one of SAPUI5’s lifecycle methods that is invoked by the
        // framework when the controller is created, similar to a constructor function of a control.
       onInit : function () {
        // set the data model on the view
          var oData = {
             recipient : {
                name : "From a Json Model"
             }
          };
          var oModel = new JSONModel(oData);
          // To be able to use this model from within the XML view
          this.getView().setModel(oModel);
       },
       onShowHello : function () {
          MessageToast.show("Hello World");
       }
    });
 });