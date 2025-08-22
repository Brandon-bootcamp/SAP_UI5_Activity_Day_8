sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("day6css.controller.View2", {
        onInit() {
        },
        onBackPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");
        },
        onExitPress: function () {
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            var exitMsg = oResourceBundle.getText("exitMsg");
            MessageBox.information(exitMsg);
        }
    });
});