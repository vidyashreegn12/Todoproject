angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{
    
    $scope.count=0;
    $scope.function=function()
    {
    $scope.count++;
    }
}