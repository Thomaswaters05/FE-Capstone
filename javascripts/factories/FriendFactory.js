"use strict";

app.factory("FriendFactory", function($q, $http, FIREBASE_CONFIG){

  var getItemList = function(userId){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/friends.json?orderBy="uid"&equalTo="${userId}"`)  //items.json corresponds to the FB DATABASE ITSELF
      .success(function(response){
        let friends = [];
        Object.keys(response).forEach(function(key){
          response[key].id = key;
          friends.push(response[key]);
        });
        resolve(friends);
      })
      .error(function(errorResponse){
        reject(errorResponse);
      });
    });
  };


var postNewItem = function(newItem){ //this will put the info in to the FB database
  return $q((resolve,reject)=>{
    $http.post(`${FIREBASE_CONFIG.databaseURL}/friends.json`,
      JSON.stringify({
        name: newItem.name,
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
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/friends/${itemId}.json`)
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
    $http.get(`${FIREBASE_CONFIG.databaseURL}/friends/${itemId}.json`)
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
    $http.put(`${FIREBASE_CONFIG.databaseURL}/friends/${editItem.id}.json`,
      JSON.stringify({
        name: editItem.name,
        uid: editItem.uid,
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