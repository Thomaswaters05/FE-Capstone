"use strict";

app.controller("NavCtrl", function($scope){
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
  ];    // this is making an array and calling it navitems - THESE ITEMS NEED TO MATCH AS THEY DO IN HTML (NAV)
});
