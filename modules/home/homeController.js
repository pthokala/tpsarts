/**
 * Created by PardhuThokala on 09/03/16.
 */

angular.module('tpsarts')
    .controller('homeController', ['$scope', 'homeService', '$timeout',
        function ($scope, homeService, $timeout) {

            $scope.homeUrlsList = [];
            getData()

            function getData(){
                $scope.homeUrlsList = homeService.getCarousalsUrls();
                console.log($scope.homeUrlsList);

                $timeout(function(){
                    var options = {
                        touchControls: true,
                        autoSlide: true,
                        intervalDuration: 6000,
                        touchControls: true,
                        transitionEffect: 'sliding'
                    };
                    $('.pgwSlideshow').pgwSlideshow(options);
                }, 1000);

            }
            $('#mm-ul-container li').removeClass('active');
            $('#mm-home').addClass('active');

        }
    ]);
