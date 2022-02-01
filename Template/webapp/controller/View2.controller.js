sap.ui.define([
	"root/controller/BaseController",
	'sap/m/MessageToast'
], function(BaseController,MessageToast) {
	"use strict";

	return BaseController.extend("root.controller.View2", {
		onInit: function() {
            this.oRouter = this.getOwnerComponent().getRouter();
            //We need a method which is triggered EVERYTIME route changes
            this.oRouter.getRoute("View2").attachMatched(this.herculis, this);
		},
        herculis:function(){
             this.getView().getModel();
            MessageToast.show("herculis is called");
        },
        
		onBack: function(){
           	history.go(-1);
        }
	});
});

