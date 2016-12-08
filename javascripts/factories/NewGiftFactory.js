// *****ADDING SECOND CONTROLLER FOR OTHER JSON DATA*****

"use strict";

app.factory("NewGiftFactory", function($q, $http, FIREBASE_CONFIG){

  var getItemList = function(userId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
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

var getListGifts = function(userId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/listgifts.json?orderBy="uid"&equalTo="${userId}"`)
      .success(function(response){
        let listgifts = [];
        Object.keys(response).forEach(function(key){
          response[key].id = key;
          listgifts.push(response[key]);
        });
        resolve(listgifts);
      })
      .error(function(errorResponse){
        reject(errorResponse);
      });
    });
  }; //YOU ADDED THIS TO GET DATA BACK FOR LIST GIFTS!!

var postNewItem = function(newItem){ //this will put the info in to the FB database
  return $q((resolve,reject)=>{
    $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`,
      JSON.stringify({
        assignedTo: newItem.assignedTo,
        gift: newItem.gift,
        cost: newItem.cost,
        uid: newItem.uid,
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
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
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
    $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
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
    $http.put(`${FIREBASE_CONFIG.databaseURL}/items/${editItem.id}.json`,
      JSON.stringify({
        assignedTo: editItem.assignedTo,
        isCompleted: editItem.isCompleted,
        gift: editItem.gift,
        uid: editItem.uid
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

  return{getItemList:getItemList, postNewItem:postNewItem, deleteItem:deleteItem, getSingleItem:getSingleItem, editItem:editItem, getListGifts:getListGifts};
});