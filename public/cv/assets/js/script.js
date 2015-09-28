var spa=angular.module("spa",['ui.router','restangular','restmod'])
.config(function  ($stateProvider, restmodProvider) {
	 restmodProvider.rebase({
        $config: {
            style: 'MyDjangoStyle', // By setting the style variable the warning is disabled.
            primaryKey: 'id'
            /* other style related configuration */
        }
    });
	$stateProvider.state('Profile',{
		url:'/Profile',
		template:'helleo {{dell[0]}}',
		controller: 'myCtrl'

	});
	/*.state('Experties',{
		url:'/Experties',
		//templateUrl:"partials/ex.html"
	})
	.state('Skills',{
		url:'/Skills',
		//templateUrl:"partials/sk.html"
	})
	.state('Education',{
		url:'/Education',
		//templateUrl:"partials/ed.html"
	})
	.state('Projects',{
		url:'/Projects',
		//templateUrl:"partials/pj.html"
	});*/

});


