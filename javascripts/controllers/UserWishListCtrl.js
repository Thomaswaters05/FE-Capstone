"use strict";

app.controller("UserWishListCtrl", function($scope, $rootScope, $location, $routeParams, GiftFactory){
   $scope.newGift = {}; //!!calling below!!
   $scope.listgifts = {};
   let itemId = $routeParams.id;
   console.log("what is this", itemId)

  GiftFactory.getSingleItem(itemId).then(function(wishList){
    // wishList.id = itemId;
    // $scope.newGift = wishList;
    console.log("wishlist data", wishList)
  });
  $scope.addNewItem = function(){
    GiftFactory.editItem($scope.newGift).then(function(response){
      $scope.newGift = {};
      $location.url("/gift-list");

    });
  };


// ***FUNCTIONALITY FOR ALL LISTS BELOW (ADD, DELETE, EDIT)***

 // let getItems = function(){
 //    GiftFactory.getItemList($rootScope.user.uid).then(function(items){ //what is here needs to be right below this
 //      $scope.items = items;
 //    });
 //  };
 //  getItems();

 // let getListGifts = function(){
 //    GiftFactory.getItemList($rootScope.user.uid).then(function(listgifts){
 //      $scope.listgifts = listgifts;
 //    });
 //  };
 //  getListGifts();



  $scope.deleteItem = function(itemId){
    console.log('you deleted this');
    GiftFactory.deleteItem(itemId).then(function(response){
      getItems();
    });
  };

$scope.inputChange = function(thing1){//this function will change the checkbox to save to FB (refer to itemFactory and item-listhtml)
  console.log("thing1",thing1);
  GiftFactory.editItem(thing1).then(function(response){
    // console.log("ctrl inputChange response", response);

    });
  };



});