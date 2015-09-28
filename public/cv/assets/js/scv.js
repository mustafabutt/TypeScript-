
spa.factory('svrc', function (Restangular) {
    return {
        getProfile: function (next) {
            Restangular.all('/profile').getList()  // GET: /users
                .then(function (result) {
                    next(result);
                });
        }
    }
});