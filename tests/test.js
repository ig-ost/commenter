'use strict';
describe('config',
   function() {
      it('is testing',
         function() {
            angular.mock.module('app');
            angular.mock.inject(
               function($httpBackend, $location, $rootScope, $route) {

                  $httpBackend.expectGET('views/vk.html').respond(200);
                  $httpBackend.expectGET('views/yt.html').respond(200);
                  $httpBackend.expectGET('views/fb.html').respond(200);
                  $httpBackend.expectGET('views/ig.html').respond(200);
                  $httpBackend.expectGET('views/gh.html').respond(200);
  
                  $location.path('/');
                  $rootScope.$digest();
                  expect($location.path()).toBe('/');
                  expect($route.current.templateUrl).toBe('views/vk.html');
                  expect($route.current.controller).toBe('vkCnt');
  
                  $location.path('/Youtube');
                  $rootScope.$digest();
                  expect($location.path()).toBe('/Youtube');
                  expect($route.current.templateUrl).toBe('views/yt.html');
                  expect($route.current.controller).toBe('ytCnt');

                  $location.path('/Facebook');
                  $rootScope.$digest();
                  expect($location.path()).toBe('/Facebook');
                  expect($route.current.templateUrl).toBe('views/fb.html');
                  expect($route.current.controller).toBe('fbCnt');

                  $location.path('/Instagram');
                  $rootScope.$digest();
                  expect($location.path()).toBe('/Instagram');
                  expect($route.current.templateUrl).toBe('views/ig.html');
                  expect($route.current.controller).toBe('igCnt');

                  $location.path('/GitHub');
                  $rootScope.$digest();
                  expect($location.path()).toBe('/GitHub');
                  expect($route.current.templateUrl).toBe('views/gh.html');
                  expect($route.current.controller).toBe('ghCnt');
            });
         }
      ); 
   }
);

describe('factory vkFct',
   function(){
      beforeEach(angular.mock.module('app'));
      beforeEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend
               .whenJSONP("http://api.vk.com/method/wall.getById?posts=,-37413577_14261&callback=JSON_CALLBACK")
               .respond(200, {value:"post content"});
            $httpBackend
               .whenJSONP("http://api.vk.com/method/wall.getComments?owner_id=-37413577&post_id=14261&count=50&callback=JSON_CALLBACK")
               .respond(200, {value:"comments content"});
            $httpBackend
               .whenJSONP("http://api.vk.com/method/wall.getById?posts=,-37413577_14243&callback=JSON_CALLBACK")
               .respond(200, {value:"post2 content"});
            $httpBackend
               .whenJSONP("http://api.vk.com/method/wall.getComments?owner_id=-37413577&post_id=14243&count=20&callback=JSON_CALLBACK")
               .respond(200, {value:"comments2 content"});
         }
      ));
      afterEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend.flush()
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
         }
      ));
      describe('vkFctShowPosts()',
         function () {
            it('is testing', inject(
               function (vkFct) {
                  vkFct
                     .vkFctShowPosts()
                     .success(function(response) {
                         expect(response.value).toEqual("post content");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                      });
                  vkFct
                     .vkFctShowComs()
                     .success(function(response) {
                          expect(response.value).toEqual("comments content");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                      });
                  vkFct
                     .vkFctShowPosts2()
                     .success(function(response) {
                         expect(response.value).toEqual("post2 content");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                      });
                  vkFct
                     .vkFctShowComs2()
                     .success(function(response) {
                         expect(response.value).toEqual("comments2 content");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                      });
               }
            ));
         }
      );
   }
);

describe('factory ytFct',
   function(){
      beforeEach(angular.mock.module('app'));
      beforeEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend
               .whenGET('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB99IwtYRRrbVsSIXBEjvCOiGXBgv3OcUo&maxResults=10&part=snippet&videoId=CyWJZnNpezU')
               .respond(200, {value:"comments content"});
         }
      ));
      afterEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend.flush()
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
         }
      ));
      describe('ytFctShowComs()',
         function () {
            it('is testing', inject(
               function (ytFct) {
                  ytFct
                     .ytFctShowComs()
                     .success(function(response) {
                          expect(response.value).toEqual("comments content");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
               }
            ));
         }
      );
   }
);
describe('factory ytFct',
   function(){
      beforeEach(angular.mock.module('app'));
      beforeEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend
               .whenGET('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB99IwtYRRrbVsSIXBEjvCOiGXBgv3OcUo&maxResults=10&part=snippet&videoId=5n5YP4G0TJw')
               .respond(200, {value:"comments content"});
         }
      ));
      afterEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend.flush()
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
         }
      ));
      describe('ytFctShowComs2()',
         function () {
            it('is testing', inject(
               function (ytFct) {
                  ytFct
                     .ytFctShowComs2()
                     .success(function(response) {
                          expect(response.value).toEqual("comments content");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
               }
            ));
         }
      );
   }
);
describe('factory igFct',
   function(){
      beforeEach(angular.mock.module('app'));
      beforeEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend
               .whenJSONP("https://api.instagram.com/v1/users/1515741638/media/recent/?client_id=fe58bbb1a5724d1395b66b3f3728d11c&callback=JSON_CALLBACK")
               .respond(200, {value:"post content"});
         }
      ));
      afterEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend.flush()
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
         }
      ));
      describe('igFctShowPosts()',
         function () {
            it('is testing', inject(
               function (igFct) {
                  igFct
                     .igFctShowPosts()
                     .success(function(response) {
                         expect(response.value).toEqual("post content");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
               }
            ));
         }
      );
   }
);
describe('factory ghFct',
   function(){
      beforeEach(angular.mock.module('app'));
      beforeEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend
               .whenGET('https://api.github.com/users/Omletina')
               .respond(200, {value:"Omletina"});
            $httpBackend
               .whenGET('https://api.github.com/repos/Omletina/getest')
               .respond(200, {value:"getest"});
            $httpBackend
               .whenGET('https://api.github.com/repos/Omletina/getest/commits')
               .respond(200, {value:"Omletina commits"});
            $httpBackend
               .whenGET('https://api.github.com/repos/Omletina/getest/comments')
               .respond(200, {value:"getest comments"});
            $httpBackend
               .whenGET('https://api.github.com/users/ig-ost')
               .respond(200, {value:"ig-ost"});
            $httpBackend
               .whenGET('https://api.github.com/repos/ig-ost/commenter')
               .respond(200, {value:"commenter"});
            $httpBackend
               .whenGET('https://api.github.com/repos/ig-ost/commenter/commits')
               .respond(200, {value:"ig-ost commits"});
            $httpBackend
               .whenGET('https://api.github.com/repos/ig-ost/commenter/comments')
               .respond(200, {value:"commenter comments"});
            $httpBackend
               .whenGET('https://api.github.com/users/chernobelenkiy')
               .respond(200, {value:"chernobelenkiy"});
            $httpBackend
               .whenGET('https://api.github.com/repos/chernobelenkiy/fitness-tracker')
               .respond(200, {value:"fitness-tracker"});
            $httpBackend
               .whenGET('https://api.github.com/repos/chernobelenkiy/fitness-tracker/commits')
               .respond(200, {value:"chernobelenkiy commits"});
            $httpBackend
               .whenGET('https://api.github.com/repos/chernobelenkiy/fitness-tracker/comments')
               .respond(200, {value:"fitness-tracker comments"});
         }
      ));
      afterEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend.flush()
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
         }
      ));
      describe('function ghFctFn()',
         function () {
            it('is testing', inject(
               function (ghFct) {
                   ghFct
                     .ghFctShowUserOmletina()
                     .success(function(response) {
                          expect(response.value).toEqual("Omletina");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                   ghFct
                     .ghFctShowRepoGetest()
                     .success(function(response) {
                          expect(response.value).toEqual("getest");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                   ghFct
                     .ghFctShowCommitsOmletina()
                     .success(function(response) {
                          expect(response.value).toEqual("Omletina commits");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                   ghFct
                     .ghFctShowCommentsGetest()
                     .success(function(response) {
                          expect(response.value).toEqual("getest comments");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                   ghFct
                     .ghFctShowUserIgost()
                     .success(function(response) {
                          expect(response.value).toEqual("ig-ost");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                   ghFct
                     .ghFctShowRepoCommenter()
                     .success(function(response) {
                          expect(response.value).toEqual("commenter");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                   ghFct
                     .ghFctShowCommitsIgost()
                     .success(function(response) {
                          expect(response.value).toEqual("ig-ost commits");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                   ghFct
                     .ghFctShowCommentsCommenter()
                     .success(function(response) {
                          expect(response.value).toEqual("commenter comments");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                   ghFct
                     .ghFctShowUserChernobelenkiy()
                     .success(function(response) {
                          expect(response.value).toEqual("chernobelenkiy");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                  ghFct
                     .ghFctShowRepoFitnessTracker()
                     .success(function(response) {
                          expect(response.value).toEqual("fitness-tracker");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                  ghFct
                     .ghFctShowCommitsChernobelenkiy()
                     .success(function(response) {
                          expect(response.value).toEqual("chernobelenkiy commits");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
                  ghFct
                     .ghFctShowCommentsFitnessTracker()
                     .success(function(response) {
                          expect(response.value).toEqual("fitness-tracker comments");
                      })
                     .error( function(response) {
                        expect(false).toEqual(true);
                   });
               }
            ));
         }
      );
   }
);