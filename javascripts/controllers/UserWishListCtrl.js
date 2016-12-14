"use strict";

app.controller("UserWishListCtrl", function($scope, $rootScope, $location, $routeParams, WishListFactory, FriendFactory){
   let friendId = $routeParams.id;
   console.log("what is this", friendId);
   $scope.newGift = []; //!!calling below!!


// ***FUNCTIONALITY FOR ALL LISTS BELOW (ADD, DELETE, EDIT)***

  // Calculate Total Amount
//   $scope.getTotal = function(user){
//     var total = 0;
//     for(var i = 0; i < $scope.giftcost.length; i++){
//           console.log("works?",$scope.gifts.giftcost.length)
//         // var post = $scope.giftcost[i];
//         // if (post.name === user) {
//         //   total += post.amount;
//         }
//     }
//     return Math.round(total * 100) / 100;
// }




 let getGifts = function(){
    WishListFactory.getGifts(friendId).then(function(result){
      console.log("r1",result)
      $scope.gifts = result;
    });
  };
  getGifts();


  $scope.deleteGift = function(giftId){
    console.log('you deleted this');
    WishListFactory.deleteGift(giftId).then(function(response){
      getGifts();
    });
  };

$scope.inputChange = function(thing1){//this function will change the checkbox to save to FB (refer to itemFactory and item-listhtml)
  console.log("thing1",thing1);
  WishListFactory.editItem(thing1).then(function(response){
    // console.log("ctrl inputChange response", response);

    });
  };

  $scope.addGiftGo = function(){
    $location.path(`/gift-add/${$routeParams.id}`)
  }





// *****NOT SURE IF I NEED THIS? THIS WAS ABOVE ALL OF THIS*****
  // WishListFactory.getSingleGift(friendId).then(function(wishList){
  //   wishList.id = friendId;
  //   $scope.newGift = wishList;
  //   console.log("wishlist data", wishList);
  // });

  // $scope.addNewFriend = function(){
  //   WishListFactory.editItem($scope.newGift).then(function(response){
  //     $scope.newGift = {};
  //     $location.url("/wishlist/:id");

  //   });
  // };
// *****NOT SURE IF I NEED THIS? THIS WAS ABOVE ALL OF THIS*****


});




