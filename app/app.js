angular
   .module('app', ['ngRoute']);

angular
   .module('app')
   .config(RouteProviderFn);
   RouteProviderFn.$inject = ['$routeProvider'];
   function RouteProviderFn($routeProvider){
      $routeProvider
            .when('/', {
                 controller : 'vkCnt',
                 templateUrl:"views/vk.html"
                     })
            .when('/Youtube', {
                 controller : 'ytCnt',
                 templateUrl:"views/yt.html"
                     })
            .when('/Facebook', {
                 controller : 'fbCnt',
                 templateUrl: 'views/fb.html'
             })
            .when('/Instagram', {
                 controller : 'igCnt',
                 templateUrl: 'views/ig.html'
             })
            .when('/Flickr', {
                 controller : 'fkCnt',
                 templateUrl: 'views/fk.html'
             })
            .otherwise({
                 redirectTo : '/'
             });
    }

angular
   .module('app')
   .factory('vkFct', vkFctFn);
   vkFctFn.$inject = ['$http'];
   function vkFctFn($http){
       return {
           vkFctShowPosts: function(){
               return $http.jsonp('http://api.vk.com/method/wall.getById?posts=,-37413577_14261&callback=JSON_CALLBACK');
           },
           vkFctShowComs: function(){
               return $http.jsonp('http://api.vk.com/method/wall.getComments?owner_id=-37413577&post_id=14261&count=50&callback=JSON_CALLBACK');
           },
           vkFctShowPosts2: function(){
               return $http.jsonp('http://api.vk.com/method/wall.getById?posts=,-37413577_14243&callback=JSON_CALLBACK');
           },
           vkFctShowComs2: function(){
               return $http.jsonp('http://api.vk.com/method/wall.getComments?owner_id=-37413577&post_id=14243&count=20&callback=JSON_CALLBACK');
           }
       }
   }

angular
   .module('app')
   .controller('vkCnt',vkCntFn);
   vkCntFn.$inject = ['$scope', 'vkFct', '$http'];
   function vkCntFn($scope, vkFct, $http){
       $scope.vkCntShowPosts = function () {
           $scope.posts = [];
           vkFct.vkFctShowPosts()
                .success(function (data) {
                      $scope.posts = data.response;
                 })
                .error(function (data) {
                      console.log(data);
                 });
       };
       $scope.vkCntShowComs = function () {
           $scope.coms = [];
           vkFct.vkFctShowComs()
                .success(function (data) {
                      $scope.coms = data.response;
                 })
                .error(function (data) {
                      console.log(data);
                 });
       };
       $scope.vkCntShowPosts2 = function () {
           $scope.posts2 = [];
           vkFct.vkFctShowPosts2()
                .success(function (data) {
                      $scope.posts2 = data.response;
                 })
                .error(function (data) {
                      console.log(data);
                 });
       };
       $scope.vkCntShowComs2 = function () {
           $scope.coms2 = [];
           vkFct.vkFctShowComs2()
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
   .factory('ytFct', ytFctFn);
   ytFctFn.$inject = ['$http'];
   function ytFctFn($http){
       return {
           ytFctShowComs: function(){
               return $http.get('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB99IwtYRRrbVsSIXBEjvCOiGXBgv3OcUo&maxResults=10&part=snippet&videoId=CyWJZnNpezU');
           },
           ytFctShowComs2: function(){
               return $http.get('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB99IwtYRRrbVsSIXBEjvCOiGXBgv3OcUo&maxResults=10&part=snippet&videoId=tmqC-gqxiKA');
           }
       }
   }

angular
    .module('app')
    .controller('ytCnt', ytCntFn);
    ytCntFn.$inject = ['$scope', 'ytFct', '$http'];
    function ytCntFn($scope, ytFct, $http) {
       $scope.ytCntShowComs = function() {
          ytFct.ytFctShowComs()
               .success(function(data) {
                   $scope.comments = data.items;
                   $scope.commentsSize = $scope.comments.length;
                });

       },
       $scope.ytCntShowComs2 = function() {
          ytFct.ytFctShowComs2()
               .success(function(data) {
                   $scope.comments2 = data.items;
                   $scope.commentsSize2 = $scope.comments2.length;
                });

       }
    }


angular
   .module('app')
   .controller('fbCnt', fbCntFn);
   fbCntFn.$inject = ['$scope'];
   function fbCntFn($scope){
       $scope.title = "Facebook";
   }

angular
   .module('app')
   .controller('igCnt', igCntFn);
   igCntFn.$inject = ['$scope'];
   function igCntFn($scope){
       $scope.title = "Instagram";
   }

angular
   .module('app')
   .controller('fkCnt', fkCntFn);
   fkCntFn.$inject = ['$scope'];
   function fkCntFn($scope){
       $scope.title = "Flickr";
   }
