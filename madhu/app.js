angular.module("vidya",[])
.controller("ctr",ctr)
.controller("ctrl1",ctrl1)
function ctr($scope)
{
    $scope.a="vidya is going";
}
function ctrl1($scope)
{
    $scope.b="vidya is absrnt today";
}