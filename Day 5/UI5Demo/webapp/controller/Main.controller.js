sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("spiderman.controller.Main",{
        clickMe: function(){
            alert("welcome to UI5 amigos!");
        }
    });
    
});

