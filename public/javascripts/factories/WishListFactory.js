// *****ADDING SECOND CONTROLLER FOR OTHER JSON DATA*****

"use strict";

app.factory("WishListFactory", function($q, $http, FIREBASE_CONFIG){
  var getGifts = function(friendId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/gifts.json?orderBy="friendId"&equalTo="${friendId}"`)
      .success(function(response){
        let gifts = [];
        Object.keys(response).forEach(function(key){
          response[key].id = key;
          gifts.push(response[key]);
        });
        resolve(gifts);
      })
      .error(function(errorResponse){
        reject(errorResponse);
      });
    });
  };


var postGifts = function(newGift){ //this will put the info in to the FB database
  return $q((resolve,reject)=>{
    $http.post(`${FIREBASE_CONFIG.databaseURL}/gifts.json`,
      JSON.stringify({
        giftdescription: newGift.giftdescription,
        giftcost: newGift.giftcost,
        friendId: newGift.friendId,
        isCompleted: newGift.isCompleted
      })
      )
      .success(function(postResponse){
        resolve(postResponse);
      })
      .error(function(postError){
         reject(postError);
      });
  });
};

var deleteGift = function (giftId){
  return $q((resolve, reject)=> {
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/gifts/${giftId}.json`)
    .success(function(deleteResponse){
      resolve(deleteResponse);
    })
    .error(function(deleteError){
      reject(deleteError);
    });
  });

};

var getSingleGift = function (giftId){
  return $q((resolve, reject)=> {
    $http.get(`${FIREBASE_CONFIG.databaseURL}/gifts/${giftId}.json`)
    .success(function(getSingleResponse){
      resolve(getSingleResponse);
    })
    .error(function(deleteError){
      reject(deleteError);
    });
  });

};



var editGifts = function(editGift){
  console.log("factory edit", editGift);
  return $q((resolve,reject)=>{
    $http.put(`${FIREBASE_CONFIG.databaseURL}/gifts/${editGift.id}.json`,
      JSON.stringify({
        giftdescription: editGift.giftdescription,
        giftcost: editGift.giftcost,
        friendId: editGift.friendId,
        isCompleted: editGift.isCompleted
      })
      )
      .success(function(editResponse){
        resolve(editResponse);
      })
      .error(function(editError){
         reject(editError);
      });
  });
};

  return{getGifts:getGifts, postGifts:postGifts, deleteGift:deleteGift, getSingleGift:getSingleGift, editGifts:editGifts};
});