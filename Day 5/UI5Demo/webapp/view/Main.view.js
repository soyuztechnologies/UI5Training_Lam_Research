sap.ui.jsview("spiderman.view.Main",{

    getControllerName: function(){
        return "spiderman.controller.Main";
    },
    createContent: function(oController){
        var oBtn = new sap.m.Button("idBtn",{
                text: "click me",
                icon: "sap-icon://add-favorite",
                press: oController.clickMe
        });

        return oBtn;
    }

});