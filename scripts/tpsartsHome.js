/**
 * Created by PardhuThokala on 6/26/16.
 */

$(document).ready(function() {

    $("#owl-home").owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        loop:true,
        margin:10,
        autoPlay:true,
        autoPlayTimeout:500,
        autoPlayHoverPause:true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});