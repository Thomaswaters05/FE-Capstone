"use strict";

app.controller("UserWishListCtrl", function($scope, $rootScope, $location, $routeParams, WishListFactory){
   $scope.newGift = {}; //!!calling below!!
   let itemId = $routeParams.id;
   console.log("what is this", itemId);

  WishListFactory.getSingleItem(itemId).then(function(wishList){
    wishList.id = itemId;
    $scope.newGift = wishList;
    console.log("wishlist data", wishList);
  });

  $scope.addNewGift = function(){
    WishListFactory.editItem($scope.newGift).then(function(response){
      $scope.newGift = {};
      $location.url("/gift-list");

    });
  };


// ***FUNCTIONALITY FOR ALL LISTS BELOW (ADD, DELETE, EDIT)***

 let getItems = function(){
    WishListFactory.getItemList($rootScope.user.uid).then(function(items){
      $scope.items = items;
    });
  };
  getItems();

 let getListGifts = function(){
    WishListFactory.getItemList($rootScope.user.uid).then(function(listgifts){
      $scope.listgifts = listgifts;
    });
  };
  getListGifts();



  $scope.deleteItem = function(itemId){
    console.log('you deleted this');
    WishListFactory.deleteItem(itemId).then(function(response){
      getItems();
    });
  };

$scope.inputChange = function(thing1){//this function will change the checkbox to save to FB (refer to itemFactory and item-listhtml)
  console.log("thing1",thing1);
  WishListFactory.editItem(thing1).then(function(response){
    // console.log("ctrl inputChange response", response);

    });
  };



});




