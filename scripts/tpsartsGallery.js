/**
 * Created by PardhuThokala on 6/26/16.
 */
function fnShowImageInModel(imgPath, isVertical){
    $('#img-showImage').attr('src', imgPath);
    
    $('#imageModal').modal({
        keyboard: false
    });
    if(isVertical){
        var imgHeight = '700px';
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