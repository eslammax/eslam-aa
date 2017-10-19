 $(document).ready(function () {
    "use strict";
    $(".channels-list").niceScroll({

        scrollspeed: 60,
        mousescrollstep: 35,
        cursorwidth: 7,
        cursorcolor: "#6041ab",
        cursorborder: "#6041ab",
        background: "#9E9E9E",
        cursorborderradius: 3,
        autohidemode: !1,
        cursoropacitymin: .1,
        cursoropacitymax: 1,
        zindex: "999999999",
        horizrailenabled: !1
    })
}), $(document).ready(function () {
    "use strict";
    $(".share-icon a").tooltip(), $(".share-icon a").click(function () {
        $(".share-wrap").addClass("share-wrap-show")
    }), $(".share-wrap .close").click(function () {
        $(".share-wrap").removeClass("share-wrap-show")
    }), setTimeout(function () {
        $("div.channel-quality").css("visibility", "visible"), $("div.channel-quality-mob").css("visibility", "visible")
    }, 1500)
}), $(document).ready(function () {
    "use strict";
    $(".toggle-icon").click(function () {
        $(this).toggleClass("toggle-icon-active"), $(".channel-wrap").toggleClass("channel-wrap-move")
    })
}), $(document).ready(function () {
    "use strict";
    $(".quality-list").owlCarousel({
        loop: !0,
        nav: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 7,
        itemsDesktop: [1024, 5],
        itemsDesktopSmall: [900, 4],
        itemsTablet: [600, 3],
        itemsMobile: [480, 2],
        navigation: !0,
        pagination: !1,
        rtl: !0
    }), $(".quality-list-mob").owlCarousel({
        loop: !0,
        nav: !0,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 1,
        itemsDesktop: [1024, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: [480, 1],
        navigation: !0,
        pagination: !1,
        rtl: !0
    })
});
