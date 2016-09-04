/**
 * Created by PardhuThokala on 09/03/16.
 */

angular.module('tpsarts')
    .controller('portraitureController', ['$scope', 'portraitureService', '$document',
        function ($scope, portraitureService, $document) {

            $scope.portraitsList = [];
            $scope.currentImage = null;
            getData()

            function getData(){
                var images = portraitureService.getPortraitsList();
                $.each(images, function(index, value){
                    value.Id = index;
                });
                $scope.portraitsList = images;
            }
            $scope.fnShowImageView = function(image){
                $scope.currentImage = image;
                var imgPath = image.url;
                $('#img-showImage').attr('src', imgPath);

                $('#imageModal').modal('show');
                if(image.isVertical){
                    var imgHeight = '800px';
                    $( "#img-showImage" ).height(imgHeight);
                    $( "#img-showImage" ).width('auto');
                } else {
                    $( "#img-showImage" ).width('100%');
                    $( "#img-showImage" ).height('auto');
                }
            }
            $document.keydown(function(e){
                if(e.keyCode == 39 && $scope.currentImage != null && $scope.currentImage.Id != $scope.portraitsList.length - 1){
                    // right arrow pressed
                    $scope.fnShowImageView($scope.portraitsList[$scope.currentImage.Id + 1]);
                } else if(e.keyCode == 37 && $scope.currentImage != null && $scope.currentImage.Id != 0){
                    // right arrow pressed
                    $scope.fnShowImageView($scope.portraitsList[$scope.currentImage.Id -1]);
                }
            })
            $(document).on("click", "#imageModal", function(event){
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                $('#imageModal').modal('hide');
                $scope.currentImage = null;
            });
            $('#mm-ul-container li').removeClass('active');
            $('#mm-portraiture').addClass('active');
        }
    ]);
