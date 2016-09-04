/**
 * Created by PardhuThokala on 09/03/16.
 */
(function (tpsarts) {
    "use strict";

    homeService.$inject = [];
    function homeService() {
        this.getCarousalsUrls = function(){
            var urlsList = [
                {
                    url: 'tpsimages/RaveenTeja6.jpg',
                    alt: 'Raveen and Teju in NYC'
                },
                {
                    url: 'tpsimages/peacock1.jpg',
                    alt: 'Peacock in New Ulm, MN'
                },
                {
                    url: 'tpsimages/Madhu_Sphurti10.jpg',
                    alt: 'Madhu and Sphurti'
                },
                {
                    url: 'tpsimages/Wyoming_Lusk_Beauty.jpg',
                    alt: 'Sunrise'
                },
                {
                    url: 'tpsimages/Alina-Levitation.jpg',
                    alt: 'Life is a Library'
                },
                {
                    url: 'tpsimages/horse1.jpg',
                    alt: 'Horse in Mankato, MN'
                },
                {
                    url: 'tpsimages/Megha1.jpg',
                    alt: 'Megha at Minnehaha falls, MN'
                },
                {
                    url: 'tpsimages/lastRays1_Crop1.jpg',
                    alt: 'Last rays on earth'
                },
                {
                    url: 'tpsimages/Madhu_Sphurti13.jpg',
                    alt: 'Madhu and Sphurti'
                },
                {
                    url: 'tpsimages/RaveenTeja8.jpg',
                    alt: 'Raveen and Teju at Long Branch Beach, NY.'
                },
            ];
            return urlsList;
        };
    }

    tpsarts.service("homeService", homeService);
}(angular.module("tpsarts")));
