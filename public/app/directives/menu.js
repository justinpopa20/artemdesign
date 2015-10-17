angular.module("artemdesign").directive("footermenu", function() {
    return {
        templateUrl: 'app/directives/menu.tmpl.html',
        link: function() {
            //animate menu display
            // $(".nav-button").on("mousedown", function(event) {
            //     var footer = $("footer");
            //     var list = $(".list");
            //     if (footer.hasClass("active")) {
            //         if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //             newHeight = 110;
            //         } else {
            //             newHeight = 244;
            //         }
            //     }

            //     var newHeight = $(window).height();
            //     if (!list.hasClass("active")) {
            //         newHeight = 0;
            //     }

            //     var description = footer.find(".description");
            //     // list.removeClass("hidden");
            //     description.addClass("hidden");
            //     footer.addClass("animating");

            //     list.css({
            //         top: newHeight
            //     });

            //     list.animate({
            //             top: newHeight
            //         }, // what we are animating
            //         'fast', // how fast we are animating
            //         'swing', // the type of easing
            //         function() { // the callback
            //             footer.removeClass("animating");
            //             if (list.hasClass("active")) {
            //                 // list.addClass("hidden");
            //                 list.removeClass("active");
            //                 description.removeClass("hidden");
            //                 // footer.height("23%");
            //             } else {
            //                 list.addClass("active");
            //                 // footer.height("100%");
            //             }
            //         });
            // });

            // //open submenu
            // $(".subMenuToggle a").on("mousedown", function(event) {
            //     var footer = $("footer");
            //     footer.find("ul.list .submenu").toggleClass("hidden");
            //     $(".subMenuToggle").toggleClass("expanded");
            // });

        }
    }
});
