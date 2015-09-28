spa.controller('myCtrl',function ($scope,svrc){
svrc.getProfile(function (data) {
    $scope.dell=data;
});

});