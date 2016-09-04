/**
 * Created by PardhuThokala on 09/03/16.
 */
(function (tpsarts) {
    "use strict";

    portraitureService.$inject = [];
    function portraitureService() {
        this.getPortraitsList = function(){
            var imagesList = [

                {
                    url: 'tpsimages/RaveenTeja6.jpg',
                    alt: 'Raveen and Teju in NYC',
                    isVertical: false
                },
                {
                    url: 'tpsimages/RaveenTeja8.jpg',
                    alt: 'Raveen and Teju at Long Branch Beach, NY',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Madhu_Sphurti10.jpg',
                    alt: 'Madhu and Sphurti at Long Branch Beach, NY',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Madhu_Sphurti2.jpg',
                    alt: 'Madhu and Sphurti at George Washington Bridge, NY',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Madhu_Sphurti13.jpg',
                    alt: 'Madhu and Sphurti at Long Branch Beach, NY',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Alina-Levitation.jpg',
                    alt: 'Alina in a Library.',
                    isVertical:false
                },
                {
                    url: 'tpsimages/Megha1.jpg',
                    alt: 'Megha',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Madhu_Sphurti16.jpg',
                    alt: 'Madhu and Sphurti',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Alina-Guitar5.jpg',
                    alt: 'Alina with guitar',
                    isVertical: false
                },
                {
                    url: 'tpsimages/mary3.jpg',
                    alt: 'Mary',
                    isVertical: false
                },
                {
                    url: 'tpsimages/RanaveerWasecaLake3.jpg',
                    alt: 'Waseca Lake Sunset',
                    isVertical: false
                },
                {
                    url: 'tpsimages/ViolaBook.jpg',
                    alt: 'Viola Reading',
                    isVertical: false
                },
                {
                    url: 'tpsimages/ViolaOrigami.jpg',
                    alt: 'Viola Origami',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Alina_Stairs1.jpg',
                    alt: 'Alina in Stairs.',
                    isVertical: false
                },
                {
                    url: 'tpsimages/hannah9.jpg',
                    alt: 'Hannah at Sunset',
                    isVertical: false
                },
                {
                    url: 'tpsimages/ViolaMirror1.jpg',
                    alt: 'Viola',
                    isVertical: false
                },
                {
                    url: 'tpsimages/Rakesh_Megha_1.jpg',
                    alt: 'Rakesh and Megha',
                    isVertical: false
                },
                {
                    url: 'tpsimages/lonelygirl.jpg',
                    alt: 'Lonely girl in a park.',
                    isVertical: true
                },
                {
                    url: 'tpsimages/Alina1.jpg',
                    alt: 'Alina',
                    isVertical: true
                },
                {
                    url: 'tpsimages/mary4.jpg',
                    alt: 'Mary',
                    isVertical: true
                },
                {
                    url: 'tpsimages/Swapna_pregnancy1.jpg',
                    alt: 'Minnehaha falls, MN',
                    isVertical: true
                }
            ];
            return imagesList;
        };
    }

    tpsarts.service("portraitureService", portraitureService);
}(angular.module("tpsarts")));
