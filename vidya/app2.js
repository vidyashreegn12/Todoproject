angular.module("abc",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)
function ctrl($scope)
{
$scope.a="vidya is goinbg to college";
}
function ctrl1($scope)
{
    $scope.b="and later goto home";
}