angular
   .module('app', ['ngRoute']);

angular
   .module('app')
   .config(RouteProviderFn);
   RouteProviderFn.$inject = ['$routeProvider'];
   function RouteProviderFn($routeProvider){
      $routeProvider
            .when('/', {
                 controller : 'vkCtrl',
                 templateUrl:"views/vk.html"
                     })
            .when('/Youtube', {
                 controller : 'ytCtrl',
                 templateUrl:"views/yt.html"
                     })
            .when('/Facebook', {
                 controller : 'fbCtrl',
                 templateUrl: 'views/fb.html'
             })
            .when('/Instagram', {
                 controller : 'igCtrl',
                 templateUrl: 'views/ig.html'
             })
            .when('/Flickr', {
                 controller : 'fkCtrl',
                 templateUrl: 'views/fk.html'
             })
            .otherwise({
                 redirectTo : '/'
             });
    }

angular
   .module('app')
   .controller('vkCtrl',VkCtrlFn);
   VkCtrlFn.$inject = ['$scope', '$http'];
   function VkCtrlFn($scope, $http){
       $scope.showPost = function () {
           var url = 'http://api.vk.com/method/wall.getById?posts=,-37413577_14261&callback=JSON_CALLBACK';
           $scope.posts = [];
           $http.jsonp(url)
                .success(function (data) {
                      $scope.posts = data.response;
                 })
                .error(function (data) {
                      console.log(data);
                 });
       };
       $scope.showComments = function () {
           var url = 'http://api.vk.com/method/wall.getComments?owner_id=-37413577&post_id=14261&count=50&callback=JSON_CALLBACK';
           $scope.coms = [];
           $http.jsonp(url)
                .success(function (data) {
                      $scope.coms = data.response;
                 })
                .error(function (data) {
                    console.log(data);
                 });
       };
       $scope.showPost2 = function () {
           var url = 'http://api.vk.com/method/wall.getById?posts=,-37413577_14243&callback=JSON_CALLBACK';
           $scope.posts2 = [];
           $http.jsonp(url)
                .success(function (data) {
                      $scope.posts2 = data.response;
                 })
                .error(function (data) {
                      console.log(data);
                 });
       };
       $scope.showComments2 = function () {
           var url = 'http://api.vk.com/method/wall.getComments?owner_id=-37413577&post_id=14243&count=20&callback=JSON_CALLBACK';
           $scope.coms2 = [];
           $http.jsonp(url)
                .success(function (data) {
                      $scope.coms2 = data.response;
                 })
                .error(function (data) {
                    console.log(data);
                 });
       };
   }

angular
   .module('app')
   .controller('ytCtrl', YtCtrlFn);
   YtCtrlFn.$inject = ['$scope'];
   function YtCtrlFn($scope){
       $scope.title = "Youtube";
   }

angular
   .module('app')
   .controller('fbCtrl', FbCtrlFn);
   FbCtrlFn.$inject = ['$scope'];
   function FbCtrlFn($scope){
       $scope.title = "Facebook";
   }

angular
   .module('app')
   .controller('igCtrl', IgCtrlFn);
   IgCtrlFn.$inject = ['$scope'];
   function IgCtrlFn($scope){
       $scope.title = "Instagram";
   }

angular
   .module('app')
   .controller('fkCtrl', FkCtrlFn);
   FkCtrlFn.$inject = ['$scope'];
   function FkCtrlFn($scope){
       $scope.title = "Flickr";
   }