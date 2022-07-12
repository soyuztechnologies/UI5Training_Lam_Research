//this is a class(module), since it inherit standard controller
//its a controller class
sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("spiderman.controller.Main",{
        //this is the constructor of our class
        onInit: function(){
            //console.log("The controller object was now created by UI5 framework");
            //Step 1: Create a brand-new object of the Model
            var oJSONModel = new sap.ui.model.json.JSONModel();
            //Step 2: Set or Load the data in the Model
            oJSONModel.setData({
                "empStr": {
                    "empId": 9595,
                    "empName": "Anubhav",
                    "salary": 9500,
                    "currency": "EUR",
                    "smoker": false
                },
                "empTab": []
            });
            //Step 3: Make the model aware to the application/view
            //object of running application
            var oApplication = sap.ui.getCore();
            oApplication.setModel(oJSONModel);

            //Syntax No 3
            this.getView().byId("idSal").bindValue("/empStr/salary");
            //Syntax No 4
            this.getView().byId("idCurr").bindProperty("value", "/empStr/currency");

        },
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
            this.getView().byId("idEmpId").setValue(1000);
            this.getView().byId("idEmpName").setValue("Anubhav");
            this.getView().byId("idSal").setValue(9500);
            this.getView().byId("idCurr").setValue("EUR");
        }
    });
    
});

