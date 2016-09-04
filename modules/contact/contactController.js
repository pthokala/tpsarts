/**
 * Created by PardhuThokala on 09/03/16.
 */

angular.module('tpsarts')
    .controller('contactController', ['$scope',
        function ($scope) {

            $('#mm-ul-container li').removeClass('active');
            $('#mm-contact').addClass('active');

        }
    ]);
