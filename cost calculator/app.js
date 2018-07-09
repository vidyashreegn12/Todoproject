angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{
    
    $scope.run = function()
    {
        $scope.a=$scope.Quantity*$scope.price;
    }
}