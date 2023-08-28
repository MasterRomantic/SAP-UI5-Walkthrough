sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    'use strict';

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // Show the message
            MessageToast.show(sMsg);
        },
        onOpenDialog : function () {
            // create the dialog lazily
            if(!this.pDialog){
                // Load asynchronous XML Fragement
                this.pDialog = this.loadFragment({
					name: "sap.ui.demo.walkthrough.view.HelloDialog"});
                this.pDialog.then(function(oDialog) {
                    oDialog.open();
                });
            }
        },
        onCloseDialog: function () {
            // note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
        }
    });
});

