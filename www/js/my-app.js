// Init App
var myApp = new Framework7({
    modalTitle: 'Sarasamuscaya',
    // Enable Material theme
    material: true,
    cache: true,
    materialRipple: true,
    scrollTopOnNavbarClick: true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});


// GENERAL

$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
    Admob.hideBanner();
});

