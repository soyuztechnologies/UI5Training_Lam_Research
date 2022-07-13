//this is a class(module), since it inherit standard controller
//its a controller class
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'spiderman/models/model'
], function(Controller, model) {
    'use strict';
    return Controller.extend("spiderman.controller.Main",{
        //this is the constructor of our class
        onInit: function(){
            //console.log("The controller object was now created by UI5 framework");
            var oJSONModel = model.createJSONModel("models/mockdata/sample.json");
            var oJSONGOT = model.createJSONModel("models/mockdata/got.json");
            //Step 3: Make the model aware to the application/view
            //object of running application
            var oApplication = sap.ui.getCore();
            //default model
            oApplication.setModel(oJSONModel);
            //named model = provide name to a model
            oApplication.setModel(oJSONGOT, "got");

            //Syntax No 3
            this.getView().byId("idSal").bindValue("/empStr/salary");
            //Syntax No 4
            this.getView().byId("idCurr").bindProperty("value", "/empStr/currency");

        },
        // onBeforeRendering: function(){
        //     this.getView().byId("idSal").setEnabled(false);
        // },
        // onAfterRendering: function(){
        //     $("#idXMLV--simpleForm").fadeOut().fadeIn(5000);
        // },

        clickMe: function(){
            alert("welcome to UI5 amigos!");
        },
        onClick: function(){
            //get the object of the control - UI5 control NOT HTML object
            //this - is the object of current class
            var oBtn = this.getView().byId("idx");
            //document.getElementById("idx").setText("Demo");
            //Call the API provided by control documentation to function
            //Set text function because there is a text property
            oBtn.setText("Wolla!");
            oBtn.setEnabled(false);
            //alert("this is an action by XML view button");
        },
        onAnotherClick: function(){
            var oBtn = this.getView().byId("idx");
            oBtn.firePress();
        },
        onLoader: function(){

            //we will now change data in the model and see if it reflect on UI directly
            //step 1: get the model object
            var oModel = sap.ui.getCore().getModel();
            //step 2: change data inside the model - setProperty, getProperty
            var empData = oModel.getProperty("/empStr");
            console.log(empData);
            //MODEL ----reflect----> UI ==> ONEWAY
            oModel.setProperty("/empStr/empName", "Rock is cooking!");
            


            // this.getView().byId("idEmpId").setValue(1000);
            // this.getView().byId("idEmpName").setValue("Anubhav");
            // this.getView().byId("idSal").setValue(9500);
            // this.getView().byId("idCurr").setValue("EUR");
        }
    });
    
});

