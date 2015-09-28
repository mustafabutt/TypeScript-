/// <reference path='Svc.ts' />
var Products;
(function (Products) {
    var Home_Ctrl = (function () {
        function Home_Ctrl($scope, Restangular, UserSvc) {
            UserSvc.getName(Restangular).getHome(function (data) {
                $scope.home = data;
            });
        }
        return Home_Ctrl;
    })();
    Products.Home_Ctrl = Home_Ctrl;
    var Profile_Ctrl = (function () {
        function Profile_Ctrl($scope, Restangular, UserSvc) {
            UserSvc.getName(Restangular).getProfile(function (data) {
                $scope.pro = data;
            });
        }
        return Profile_Ctrl;
    })();
    Products.Profile_Ctrl = Profile_Ctrl;
    var Contact_Ctrl = (function () {
        function Contact_Ctrl($scope, Restangular, UserSvc) {
            UserSvc.getName(Restangular).getContact(function (data) {
                $scope.con = data;
            });
        }
        return Contact_Ctrl;
    })();
    Products.Contact_Ctrl = Contact_Ctrl;
    var Help_Ctrl = (function () {
        function Help_Ctrl($scope, Restangular, UserSvc) {
            UserSvc.getName(Restangular).getHelp(function (data) {
                $scope.help = data;
            });
        }
        return Help_Ctrl;
    })();
    Products.Help_Ctrl = Help_Ctrl;
    var About_Ctrl = (function () {
        function About_Ctrl($scope, Restangular, UserSvc) {
            UserSvc.getName(Restangular).getAbout(function (data) {
                $scope.abt = data;
            });
        }
        return About_Ctrl;
    })();
    Products.About_Ctrl = About_Ctrl;
})(Products || (Products = {}));
/*class Ctrl {
    constructor($scope, UserSvc) {
         UserSvc.getProfile(function (data){
            $scope.ser=data;
            });
    }
}*/
