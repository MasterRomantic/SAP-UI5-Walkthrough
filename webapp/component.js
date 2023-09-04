sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
         "manifest": "json"
      },
      init: function () {
         UIComponent.prototype.init.apply(this, arguments);

         // set data model
         var oData = {
            recipient: {
               name: "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

         // create the views based on the url/hash.
         // it is automatically instantiated based on our 
         // AppDescriptor configuration and assigned to the component.
         this.getRouter().initialize();
      }
   });
});    