sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
    return {
        createJSONModel: function(sFilePath){
            //Step 1: Create a brand-new object of the Model
            var oJSONModel = new JSONModel();
            //Step 2: Set or Load the data in the Model
            //oJSONModel.setData();
            oJSONModel.loadData(sFilePath);
            //oJSONModel.setDefaultBindingMode("OneWay");
            return oJSONModel;
        },
        createXMLModel: function(){

        },
        createResourceModel: function(){

        }
    }
});