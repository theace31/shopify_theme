$(document).ready(function() {

    // --- Vars

    var mobileTrigger = jQuery('.js-mm-trigger');
    var mobileOverlay = jQuery('.js-mm-overlay');
    var mobileMenu = jQuery('.js-mm-menu');
    var body = jQuery('body');
    var mobileGallery = $('.js-product-carousel');
    //var singleGallery = $('.js-single-gallery');

    // var singleGallery = $('.js-single-gallery');

    // var mobileMenuTrigger = $('.js-menu-trigger');
    // var mobileMenu = $('.js-mobile-menu');
    // var mobileMenuHamburger = $('.ion-navicon');
    // var mobileMenuClose = $('.ion-android-close');

    // var searchGuideTrigger = $('.js-search-trigger');
    // var searchGuideClose = $('.js-search-close');
    // var searchGuideModal = $('.js-search-overlay');


    // show overlay
  	mobileTrigger.click(function(){
  		mobileOverlay.fadeIn(200);
  		mobileMenu.animate({left: "0px"}, 250);
  		body.toggleClass('no-scroll');
  	});

  	// hide overlay
  	mobileOverlay.click(function(){
  		jQuery(this).fadeOut(200);
  		mobileMenu.animate({left: "-250px"}, 250);
  		body.toggleClass('no-scroll');
  	});



    // -- Product Carousel

    mobileGallery.owlCarousel({
        autoPlay: false,
        singleItem: true,
        navigation : false,
        navigationText: ["<span class='ion-ios-arrow-left'></span>","<span class='ion-ios-arrow-right'></span>"],
        pagination: true,
        lazyLoad : true,
        items: 1,
        startDragging : false
    });


    // singleGallery.owlCarousel({
    // autoPlay: true,
    // mouseDrag : false,
    // singleItem: true,
    // navigation : true,
    // navigationText: ["<span class='ion-ios-arrow-left'></span>","<span class='ion-ios-arrow-right'></span>"],
    // pagination: false,
    // lazyLoad : true
    // });


});
