var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'js/home/homeTmpl.html',	// In relation to the index.html!
		controller: 'homeCtrl'
	})
	.when('/settings', {
		templateUrl: 'js/settings/settingsTmpl.html',
		controller: 'settingsCtrl'
	})
	.when('/products/:id', {
		templateUrl: 'js/products/productTmpl.html',
		controller: 'productsCtrl'
	})
	.otherwise({
      redirectTo: '/'
    })


});	// end app.config