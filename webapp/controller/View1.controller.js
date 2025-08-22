sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller, MessageBox) => {
    "use strict";

    return Controller.extend("day6css.controller.View1", {
        onInit() {
        },
        onInfoPress: function () {
            var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            var infoMsg = oResourceBundle.getText("infoMsg");
            MessageBox.information(infoMsg);
        },
        onNextPress: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView2");
        }
    });
});