angular.module("abc",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)


function ctrl($scope){
    $scope.obj = {id:23,name:'HireCraft',age:12};
    $scope.cars = ["Saab", "Volvo", "BMW"];
}
function ctrl1($scope){
    $scope.arr = [{type:"Fiat", model:"500"},{type:"Hire", model:"800"}]
}