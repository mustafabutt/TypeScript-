/// <reference path='Svc.ts' />

module Products {

   export class Home_Ctrl {
    constructor($scope,Restangular,UserSvc) {
        UserSvc.getName(Restangular).getHome(function (data) {
        $scope.home=data;
        });
    }
}


export class Profile_Ctrl {
    constructor($scope,Restangular,UserSvc) {
        UserSvc.getName(Restangular).getProfile(function (data) {
        $scope.pro=data;
        });
    }
}

export class Contact_Ctrl {
    constructor($scope,Restangular,UserSvc) {
        UserSvc.getName(Restangular).getContact(function (data) {
        $scope.con=data;
        });
    }
}
export class Help_Ctrl {
    constructor($scope,Restangular,UserSvc) {
        UserSvc.getName(Restangular).getHelp(function (data) {
        $scope.help=data;
        });
    }
}

export class ku {
    constructor($scope,Restangular,UserSvc) {
        UserSvc.getName(Restangular).getAbout(function (data) {
        $scope.abt=data;
        });
    }
}

}


/*class Ctrl {
    constructor($scope, UserSvc) {
         UserSvc.getProfile(function (data){
            $scope.ser=data;
            });
    }
}*/









