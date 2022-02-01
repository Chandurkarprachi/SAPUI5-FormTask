sap.ui.define([
	"root/controller/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("root.controller.View1", {
		onInit: function() {
		},
		onNext: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");
		}
	});
});