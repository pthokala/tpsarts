/**
 * Created by PardhuThokala on 6/26/16.
 */
function fnShowImageInModel(imgPath){
    console.log(imgPath);
    $('#img-showImage').attr('src', imgPath);
    
    $('#imageModal').modal({
        keyboard: false
    })
}