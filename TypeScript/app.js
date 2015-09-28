/// <reference path='typings/angular.d.ts' />
/// <reference path='typings/angular-route.d.ts' />
/// <reference path='typings/restangular.d.ts' />
/// <reference path='controllers.ts' />
/// <reference path='Svc.ts' />
var First = angular.module('Products', ['ngRoute', 'restangular']);
First.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'Products.Home_Ctrl'
    })
        .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'Products.About_Ctrl'
    })
        .when('/Profile', {
        templateUrl: 'partials/pro.html',
        controller: 'Products.Profile_Ctrl'
    })
        .when('/Contact', {
        templateUrl: 'partials/cont.html',
        controller: 'Products.Contact_Ctrl'
    })
        .when('/Help', {
        templateUrl: 'partials/hell.html',
        controller: 'Products.Help_Ctrl'
    });
});
//class myCtrl {
//    d: string;
//     constructor($scope,e:string) {
//         $scope.a = this;
//         this.d=e;
//    }
//     bell()
//     {
//         alert(this.d); 
//     }
//}
//class yrCtrl extends myCtrl {
//    s: string;
//    constructor($scope, z: string) {
//        this.s = z;
//        super($scope, this.s);
//    }
//    add() {
//        new myCtrl("d", "First Controller").bell();
//    }
//}
//window.onload = function () {
//    var b = new yrCtrl("d", "mustafa");
//    b.add();
//} 
