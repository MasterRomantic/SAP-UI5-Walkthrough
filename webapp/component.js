sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/Device"
], function (UIComponent, JSONModel, Device) {
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

         // set device model
         var oDeviceModel = new JSONModel(Device);
         oDeviceModel.setDefaultBindingMode("OneWay");
         this.setModel(oDeviceModel, "device");

         // create the views based on the url/hash.
         // it is automatically instantiated based on our 
         // AppDescriptor configuration and assigned to the component.
         this.getRouter().initialize();
      }
   });
});    