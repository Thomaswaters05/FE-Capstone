"use strict";

// main nav below

app.controller("NavCtrl", function($scope, $rootScope, UserFactory){
  $scope.navItems = [
    {
      name:"Logout",
      url:"#/logout"
  },
    {
      name:"All Gifts",
      url:"#/friend-list "
  },
    {
      name:"New Gifts",
      url:"#/friend-new"
  }
  ];
});

// side nav below

app.controller("NavCtrl", function($scope, $rootScope, UserFactory){

  $scope.navItems = [{
    name:"Logout",
    url: "#/logout"
  },
  {
    name:"All Items",
    url: "#/users/profile"
  },
  {
    name:"Search Item",
    url:"#/users/google"
  }
  ];


$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
});

$(document).ready(function() {
      Materialize.fadeInImage('#profilepic');
     Materialize.showStaggeredList('#staggered-list');
      });