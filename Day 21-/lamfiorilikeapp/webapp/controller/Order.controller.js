sap.ui.define([
    'lam/fin/ar/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageBox',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
], function(BaseController, Filter,FilterOperator, JSONModel, MessageBox, MessageToast, Fragment) {
    'use strict';
    return BaseController.extend("lam.fin.ar.controller.Order",{
        onInit: function(){
            
        },
        supplierPopup: null,
        onF4Help: function(){
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
                    that.supplierPopup.setMultiSelect(false);
                    that.supplierPopup.bindAggregation("items",{
                        path: "/SupplierSet",
                        template: new sap.m.DisplayListItem({
                            label: "{BpId}",
                            value: "{CompanyName}"
                        })
                    });
                    that.supplierPopup.open();
                });
            }else{
                that.supplierPopup.open();
            }
       },
       onPopupConfirm: function(oEvent){
        //Step 3: get the id of the fragment
            var sId = oEvent.getSource().getId();
            if(sId.indexOf("supplier") !== -1){
                //Step 1: get the object of selected item
                var oSelectedItem = oEvent.getParameter("selectedItem");
                //Step 2: get the label
                var sVal = oSelectedItem.getValue();
                this.oLocalModel.setProperty("/prodData/SupplierName",sVal);
                sVal = oSelectedItem.getLabel();
                this.oLocalModel.setProperty("/prodData/SupplierId", sVal);
            }
        },
    });
});