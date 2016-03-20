angular
   .module('app', ['ngRoute']);

angular
   .module('app')
   .config(RouteProviderFn);
   RouteProviderFn.$inject = ['$routeProvider'];
   function RouteProviderFn($routeProvider){
      $routeProvider
            .when('/', {
                 controller : 'fbCnt',
                 templateUrl: 'views/fb.html'
             })
            .when('/Instagram', {
                 controller : 'igCnt',
                 templateUrl: 'views/ig.html'
             })
            .when('/VKontakte', {
                 controller : 'vkCnt',
                 templateUrl:"views/vk.html"
                     })
            .when('/Reddit', {
                 controller : 'rdCnt',
                 templateUrl:"views/rd.html"
                     })
            .when('/Youtube', {
                 controller : 'ytCnt',
                 templateUrl:"views/yt.html"
                     })
            .when('/GitHub', {
                 controller : 'ghCnt',
                 templateUrl: 'views/gh.html'
             })
            .otherwise({
                 redirectTo : '/'
             });
    }



angular
   .module('app')
   .factory('fbFct', fbFctFn);
   fbFctFn.$inject = ['$http'];
   function fbFctFn($http){
       return {
          fbFctShowPosts: function(){
             return $http.get('https://graph.facebook.com/loftblog/feed?access_token=1418975825038822|c0383c010531c0f19a1ae48d13a00634');
          }
       }
   }
angular
   .module('app')
   .controller('fbCnt',fbCntFn);
   fbCntFn.$inject = ['$scope', 'fbFct', '$http'];
   function fbCntFn($scope, fbFct, $http){
          fbFct.fbFctShowPosts()
               .success(function (response) {
                      $scope.feed = response;
                })
               .error(function (response) {
                      console.log(response);
                });
   }



angular
   .module('app')
   .factory('igFct', igFctFn);
   igFctFn.$inject = ['$http'];
   function igFctFn($http){
       return {
          igFctShowPosts: function(){
             return $http.jsonp("https://api.instagram.com/v1/users/1515741638/media/recent/?client_id=fe58bbb1a5724d1395b66b3f3728d11c&callback=JSON_CALLBACK");
          }
       }
   }
angular
   .module('app')
   .controller('igCnt',igCntFn);
   igCntFn.$inject = ['$scope', 'igFct', '$http'];
   function igCntFn($scope, igFct, $http){
          $scope.pics = [];
          igFct.igFctShowPosts()
               .success(function (response) {
                      $scope.pics = response.data;
                })
               .error(function (response) {
                      console.log(response);
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
   .factory('rdFct', rdFctFn);
   rdFctFn.$inject = ['$http'];
   function rdFctFn($http){
       return {
          rdFctShowPosts: function(){
             return $http.get('http://api.reddit.com/r/programming/user/loftblog/overview?limit=20');
          }
       }
   }
angular
   .module('app')
   .controller('rdCnt',rdCntFn);
   rdCntFn.$inject = ['$scope', 'rdFct', '$http'];
   function rdCntFn($scope, rdFct, $http){
          rdFct.rdFctShowPosts()
               .success(function (response) {
                      $scope.posts = response;
                })
               .error(function (response) {
                      console.log(response);
                });
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
               return $http.get('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB99IwtYRRrbVsSIXBEjvCOiGXBgv3OcUo&maxResults=10&part=snippet&videoId=5n5YP4G0TJw');
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
   .factory('ghFct', ghFctFn);
   ghFctFn.$inject = ['$http'];
   function ghFctFn($http){
       return {
          ghFctShowUserOmletina: function(){
             return $http.get("https://api.github.com/users/Omletina");
          },
          ghFctShowRepoGetest: function(){
             return $http.get("https://api.github.com/repos/Omletina/getest");
          },
          ghFctShowCommitsOmletina: function(){
             return $http.get("https://api.github.com/repos/Omletina/getest/commits");
          },
          ghFctShowCommentsGetest: function(){
             return $http.get("https://api.github.com/repos/Omletina/getest/comments");
          },
          ghFctShowUserIgost: function(){
             return $http.get("https://api.github.com/users/ig-ost");
          },
          ghFctShowRepoCommenter: function(){
             return $http.get("https://api.github.com/repos/ig-ost/commenter");
          },
          ghFctShowCommitsIgost: function(){
             return $http.get("https://api.github.com/repos/ig-ost/commenter/commits");
          },
          ghFctShowCommentsCommenter: function(){
             return $http.get("https://api.github.com/repos/ig-ost/commenter/comments");
          },
          ghFctShowUserChernobelenkiy: function(){
             return $http.get("https://api.github.com/users/chernobelenkiy");
          },
          ghFctShowRepoFitnessTracker: function(){
             return $http.get("https://api.github.com/repos/chernobelenkiy/fitness-tracker");
          },
          ghFctShowCommitsChernobelenkiy: function(){
             return $http.get("https://api.github.com/repos/chernobelenkiy/fitness-tracker/commits");
          },
          ghFctShowCommentsFitnessTracker: function(){
             return $http.get("https://api.github.com/repos/chernobelenkiy/fitness-tracker/comments");
          }
       }
   }
angular
   .module('app')
   .controller('ghCnt',ghCntFn);
   ghCntFn.$inject = ['$scope', 'ghFct', '$http'];
   function ghCntFn($scope, ghFct, $http){
          ghFct.ghFctShowUserOmletina()
               .success(function (data) {
                      $scope.userOmletina = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowRepoGetest()
               .success(function (data) {
                      $scope.repoGetest = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowCommitsOmletina()
               .success(function (data) {
                      $scope.OmletinaCommits = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowCommentsGetest()
               .success(function (data) {
                      $scope.getestComments = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowUserIgost()
               .success(function (data) {
                      $scope.igostUser = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowRepoCommenter()
               .success(function (data) {
                      $scope.repoCommenter = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowCommitsIgost()
               .success(function (data) {
                      $scope.igostCommits = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowCommentsCommenter()
               .success(function (data) {
                      $scope.commenterComments = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowUserChernobelenkiy()
               .success(function (data) {
                      $scope.userChernobelenkiy = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowRepoFitnessTracker()
               .success(function (data) {
                      $scope.repoFitnessTracker = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowCommitsChernobelenkiy()
               .success(function (data) {
                      $scope.ChernobelenkiyCommits = data;
                })
               .error(function (data) {
                      console.log(data);
                });
          ghFct.ghFctShowCommentsFitnessTracker()
               .success(function (data) {
                      $scope.FitnessTrackerComments = data;
                })
               .error(function (data) {
                      console.log(data);
                });
   }