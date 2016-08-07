/**
 * Created by PardhuThokala on 6/26/16.
 */

window.portraitImages = [
    {
        'imageurl' : 'tpsimages/Madhu_Sphurti10.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/Madhu_Sphurti2.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/Alina-Levitation.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/Madhu_Sphurti13.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/Alina_Stairs1.jpg',
        'isvertical': false
    },{
        'imageurl' : 'tpsimages/Megha1.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/Madhu_Sphurti16.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/lonely%20girl.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/Alina1.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/Alina-Guitar5.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/mary3.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/mary4.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/mary7.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/RanaveerWasecaLake3.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/Rakesh_Megha_1.jpg',
        'isvertical': false
    },
    {
        'imageurl' : 'tpsimages/Swapna_pregnancy1.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/UPWithGuitar.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/ViolaBook.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/ViolaOrigami.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/hannah9.jpg',
        'isvertical': true
    },
    {
        'imageurl' : 'tpsimages/ViolaMirror1.jpg',
        'isvertical': true
    }
];
function fnShowImageInModel(imgPath, isVertical){
    $('#img-showImage').attr('src', imgPath);

    $('#imageModal').modal({
        keyboard: false
    });
    if(isVertical){
        var imgHeight = '800px';
        $( "#img-showImage" ).height(imgHeight);
        $( "#img-showImage" ).width('auto');
    } else {
        $( "#img-showImage" ).width('100%');
        $( "#img-showImage" ).height('auto');
    }
}
$(document).on("click", "#imageModal", function(event){
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $('#imageModal').modal('hide');
});