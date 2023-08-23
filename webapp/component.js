sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        // defines a reference to the root view, so that instead of 
        // displaying the root view directly in the index.js file as we did previously,
        // the component now manages the display of the app view.
       metadata : {
          "interfaces": ["sap.ui.core.IAsyncContentCreation"],
          "rootView": {
             "viewName": "sap.ui.demo.walkthrough.view.App",
             "type": "XML",
             /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
             "id": "app"
          }
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // we instantiate our data model and the i18n model like we did before in the app controller.
          
          // set data model
          var oData = {
             recipient : {
                name : "World"
             }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);
 
          // set i18n model
          var i18nModel = new ResourceModel({
             bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
          });
          this.setModel(i18nModel, "i18n");
       }
    });
 });    