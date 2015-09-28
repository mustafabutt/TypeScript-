/// <reference path='app.ts' />
/// <reference path='typings/restangular.d.ts' />
var Serv;
(function (Serv) {
    var UserSvc = (function () {
        function UserSvc() {
            this.name = "service is active";
        }
        UserSvc.prototype.getData = function () {
            return { mango: this.name };
        };
        UserSvc.prototype.getName = function (Restangular) {
            return {
                getProfile: function (next) {
                    Restangular.one('/profile').getList() // GET: /users
                        .then(function (result) {
                        next(result);
                    });
                },
                getHome: function (next) {
                    Restangular.one('/home').getList()
                        .then(function (result) {
                        next(result);
                    });
                },
                getAbout: function (next) {
                    Restangular.one('/about').getList()
                        .then(function (result) {
                        next(result);
                    });
                },
                getContact: function (next) {
                    Restangular.one('/contact').getList()
                        .then(function (result) {
                        next(result);
                    });
                },
                getHelp: function (next) {
                    Restangular.one('/help').getList()
                        .then(function (result) {
                        next(result);
                    });
                }
            };
        };
        return UserSvc;
    })();
    Serv.UserSvc = UserSvc;
})(Serv || (Serv = {}));
First.factory('UserSvc', function () {
    return new Serv.UserSvc();
});
