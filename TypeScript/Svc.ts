/// <reference path='app.ts' />
/// <reference path='typings/restangular.d.ts' />
module Serv {
   export class UserSvc {
        name: string;
        constructor() {
            this.name = "service is active";
        }
        
        public getName(Restangular) {
            return {
                getProfile: function (data) {
                Restangular.one('/profile').getList()  // GET: /users
                .then(function (result) {
                    data(result);
                    });
                }

                getHome:function(data){
                    Restangular.one('/home').getList()
                    .then(function(result){
                        data(result);
                        });
                }

                getAbout:function(data){
                    Restangular.one('/about').getList()
                    .then(function(result){
                        data(result);
                        });
                } 

                getContact:function(data){
                    Restangular.one('/contact').getList()
                    .then(function(result){
                        data(result);
                        });
                }

                getHelp:function(data){
                    Restangular.one('/help').getList()
                    .then(function(result){
                        data(result);
                        });
                }      
        
            }

        }

    }
}

First.factory('UserSvc',() => {
    return new Serv.UserSvc();
});

