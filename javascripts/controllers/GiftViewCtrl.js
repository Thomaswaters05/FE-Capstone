"use strict";

app.controller("GiftViewCtrl", function($scope, $routeParams, ItemFactory, WishListFactory){
  $scope.selectedItem = {};
  let itemId = $routeParams.id;
  // console.log("$routeParams", itemId);

  ItemFactory.getSingleItem(itemId).then(function(itemToEdit){
    // console.log("oneItem", oneItem);
    itemToEdit.id = itemId;  //this helps to THE EDIT PART
    $scope.selectedItem = itemToEdit
  })
});