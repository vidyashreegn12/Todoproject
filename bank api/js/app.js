angular.module("form",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{

    $scope.formValue = true;
    $scope.toggle = function (x)
    {
        if(x)
        {
            $scope.formValue=false;
        }
        else{
            $scope.formValue=true;
        }
        $scope.obj = { "UserName":"$scope.user", "Email":"$scope.email", "Password":$scope.pwd };
        $scope. myJSON = JSON.stringify($scope.Obj);
         localStorage.setItem("testJSON", myJSON);
    }
}