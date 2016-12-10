"use strict";

app.factory("FriendFactory", function($q, $http, FIREBASE_CONFIG){

  var getFriend = function(uid){
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/friends.json?orderBy="hostgiver"&equalTo="${uid}"`)  //items.json corresponds to the FB DATABASE ITSELF
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


var postFriend = function(newFriend){ //this will put the info in to the FB database
  return $q((resolve,reject)=>{
    $http.post(`${FIREBASE_CONFIG.databaseURL}/friends.json`,
      JSON.stringify({
        name: newFriend.name,
        hostgiver: newFriend.hostgiver,
        uid: newFriend.uid,
        isCompleted: newFriend.isCompleted
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

var deleteFriend = function (friendId){
  return $q((resolve, reject)=> {
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/friends/${friendId}.json`)
    .success(function(deleteResponse){
      resolve(deleteResponse);
    })
    .error(function(deleteError){
      reject(deleteError);
    });
  });

};

var getSingleFriend = function (friendId){
  return $q((resolve, reject)=> {
    $http.get(`${FIREBASE_CONFIG.databaseURL}/friends/${friendId}.json`)
    .success(function(getSingleResponse){
      resolve(getSingleResponse);
    })
    .error(function(deleteError){
      reject(deleteError);
    });
  });

};



var editFriend = function(editItem){
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

  return{getFriend:getFriend, postFriend:postFriend, deleteFriend:deleteFriend, getSingleFriend:getSingleFriend, editFriend:editFriend};
});