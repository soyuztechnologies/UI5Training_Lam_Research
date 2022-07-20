sap.ui.define([
    'lam/fin/ar/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
], function(BaseController, MessageBox, MessageToast, Fragment) {
    'use strict';
    return BaseController.extend("lam.fin.ar.controller.View2",{
        onInit: function(){
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
        },
        herculis: function(oEvent){
            var sIndex = oEvent.getParameter("arguments").fruitId;
            console.log("My Element path will be ===>  /fruits/"+ sIndex);
            var sPath = "/fruits/" + sIndex;
            this.getView().bindElement(sPath);
        },
        onPopupConfirm: function(oEvent){
            //Step 1: get the object of selected item
            var oSelectedItem = oEvent.getParameter("selectedItem");
            //Step 2: get the label
            var sVal = oSelectedItem.getLabel();
            //Step 3: get the id of the fragment
            var sId = oEvent.getSource().getId();
            if(sId.indexOf("cities") !== -1){
                this.myField.setValue(sVal);
            }else{
                //todo: for supplier
            }
        },
        cityFragment: null,
        supplierPopup: null,
        myField: null,
        onF4Help: function(oEvent){
            //on whichever field user click f4, that object i take out
            this.myField = oEvent.getSource();
            //here in the function we can access the global variable this
            //this - works as object of current class which is my controller
            var that = this;
            if(!that.cityFragment){
                Fragment.load({
                    id: 'cities',
                    name: 'lam.fin.ar.fragments.popup',
                    controller: this
                }).then(function(oFragment){
                    //inside the callback function, we cannot access this
                    //we must create a local variable outside call back as a copy of this
                    that.cityFragment = oFragment;
                    that.cityFragment.setTitle("Cities");
                    that.getView().addDependent(that.cityFragment);
                    that.cityFragment.bindAggregation("items",{
                        path: "/cities",
                        template: new sap.m.DisplayListItem({
                            label: "{name}",
                            value: "{famousFor}"
                        })
                    });
                    that.cityFragment.open();
                });
            }else{
                that.cityFragment.open();
            }
            

        },
        onFilter: function(){
             //here in the function we can access the global variable this
             //this - works as object of current class which is my controller
             var that = this;
             if(!that.supplierPopup){
                 Fragment.load({
                     id: 'supplier',
                     name: 'lam.fin.ar.fragments.popup',
                     controller: this
                 }).then(function(oFragment){
                     //inside the callback function, we cannot access this
                     //we must create a local variable outside call back as a copy of this
                     that.supplierPopup = oFragment;
                     that.supplierPopup.setTitle("Suppliers");
                     that.getView().addDependent(that.supplierPopup);
                     that.supplierPopup.bindAggregation("items",{
                         path: "/suppliers",
                         template: new sap.m.DisplayListItem({
                             label: "{name}",
                             value: "{sinceWhen}"
                         })
                     });
                     that.supplierPopup.open();
                 });
             }else{
                 that.supplierPopup.open();
             }
        },
        goBack: function(){
            var oAppCon = this.getView().getParent();
            oAppCon.to("idView1");
        },
        onSave: function(){
            MessageBox.confirm("Would you like to Save",{
                onClose: function(status){
                    if(status === "OK"){
                        MessageToast.show("Your order has been saved");
                    }else{
                        MessageBox.error("Action was cancelled");
                    }
                }
            });
        },
        onCancel: function(){

        }
    });
});