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
                  $httpBackend.expectGET('views/fk.html').respond(200);
  
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

                  $location.path('/Flickr');
                  $rootScope.$digest();
                  expect($location.path()).toBe('/Flickr');
                  expect($route.current.templateUrl).toBe('views/fk.html');
                  expect($route.current.controller).toBe('fkCnt');
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
               }
            ));
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
               .whenJSONP("http://api.vk.com/method/wall.getComments?owner_id=-37413577&post_id=14261&count=50&callback=JSON_CALLBACK")
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
      describe('vkFctShowComs()',
         function () {
            it('is testing', inject(
               function (vkFct) {
                  vkFct
                     .vkFctShowComs()
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
describe('factory vkFct',
   function(){
      beforeEach(angular.mock.module('app'));
      beforeEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend
               .whenJSONP("http://api.vk.com/method/wall.getById?posts=,-37413577_14243&callback=JSON_CALLBACK")
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
      describe('vkFctShowPosts2()',
         function () {
            it('is testing', inject(
               function (vkFct) {
                  vkFct
                     .vkFctShowPosts2()
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
describe('factory vkFct',
   function(){
      beforeEach(angular.mock.module('app'));
      beforeEach(angular.mock.inject(
         function ($httpBackend) {
            $httpBackend
               .whenJSONP("http://api.vk.com/method/wall.getComments?owner_id=-37413577&post_id=14243&count=20&callback=JSON_CALLBACK")
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
      describe('vkFctShowComs2()',
         function () {
            it('is testing', inject(
               function (vkFct) {
                  vkFct
                     .vkFctShowComs2()
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
