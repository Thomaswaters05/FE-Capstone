// *****ADDING SECOND CONTROLLER FOR OTHER JSON DATA*****

"use strict";

app.factory("WishListFactory", function($q, $http, FIREBASE_CONFIG){

  var getItemList = function(userId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/gifts.json?orderBy="uid"&equalTo="${userId}"`)
      .success(function(response){
        let items = [];
        Object.keys(response).forEach(function(key){
          response[key].id = key;
          items.push(response[key]);
        });
        resolve(items);
      })
      .error(function(errorResponse){
        reject(errorResponse);
      });
    });
  };



var postNewItem = function(newItem){ //this will put the info in to the FB database
  return $q((resolve,reject)=>{
    $http.post(`${FIREBASE_CONFIG.databaseURL}/gifts.json`,
      JSON.stringify({
        giftdescription: newItem.giftdescription,
        giftcost: newItem.giftcost,
        friendId: newItem.friendId,
        isCompleted: newItem.isCompleted
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

var deleteItem = function (itemId){
  return $q((resolve, reject)=> {
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/gifts/${itemId}.json`)
    .success(function(deleteResponse){
      resolve(deleteResponse);
    })
    .error(function(deleteError){
      reject(deleteError);
    });
  });

};

var getSingleItem = function (itemId){
  return $q((resolve, reject)=> {
    $http.get(`${FIREBASE_CONFIG.databaseURL}/gifts/${itemId}.json`)
    .success(function(getSingleResponse){
      resolve(getSingleResponse);
    })
    .error(function(deleteError){
      reject(deleteError);
    });
  });

};



var editItem = function(editItem){
  console.log("factory edit", editItem);
  return $q((resolve,reject)=>{
    $http.put(`${FIREBASE_CONFIG.databaseURL}/gifts/${editItem.id}.json`,
      JSON.stringify({
        giftdescription: editItem.giftdescription,
        giftcost: editItem.giftcost,
        friendId: editItem.friendId,
        isCompleted: editItem.isCompleted
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

  return{getItemList:getItemList, postNewItem:postNewItem, deleteItem:deleteItem, getSingleItem:getSingleItem, editItem:editItem};
});