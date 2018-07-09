angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{
  $scope.a=[];
  $scope.run=function()
  {
    $scope.a.push($scope.abc);
    $scope.abc="";
  
console.log($scope.abc);

}
}