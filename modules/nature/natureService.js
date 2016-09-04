/**
 * Created by PardhuThokala on 09/03/16.
 */
(function (tpsarts) {
    "use strict";

    natureService.$inject = [];
    function natureService() {
        this.getNatureList = function(){
            var imagesList = [
                {
                    url: 'tpsimages/peacock1.jpg',
                    alt: 'Peacock in New Ulm, MN',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Wyoming_Lusk_Beauty.jpg',
                    alt: 'Sunrise in Lusk, Wyoming',
                    isVertical: false
                },
                {
                    url: 'tpsimages/sunSetCarMirror.jpg',
                    alt: 'Sunset in Mankato, MN',
                    isVertical: false
                },
                {
                    url: 'tpsimages/lastRays1_Crop1.jpg',
                    alt: 'Sunset in Mankato, MN',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Sunrise%20Nevada.jpg',
                    alt: 'Sunrise in Nevada',
                    isVertical: false
                },
                {
                    url: 'tpsimages/horse1.jpg',
                    alt: 'Horse in Mankato, MN',
                    isVertical: false
                },
                {
                    url: 'tpsimages/bikeRide1.jpg',
                    alt: 'Mankato, MN',
                    isVertical: false
                },
                {
                    url: 'tpsimages/GoldenEagle%20in%20Paradise.jpg',
                    alt: 'Golden Eagle in Paradise. Mankato, MN',
                    isVertical: false
                },
                {
                    url: 'tpsimages/deer1.jpg',
                    alt: 'Deer in Mankato, MN',
                    isVertical: false
                },
                {
                    url: 'tpsimages/corn1.jpg',
                    alt: 'Mankato, MN',
                    isVertical: false
                },
                {
                    url: 'tpsimages/YflowerBsky.jpg',
                    alt: 'Flower',
                    isVertical: false
                },
                {
                    url: 'tpsimages/white%20flower%20in%20black%20back.jpg',
                    alt: 'Flower',
                    isVertical: false
                }
            ];
            return imagesList;
        };
    }

    tpsarts.service("natureService", natureService);
}(angular.module("tpsarts")));
