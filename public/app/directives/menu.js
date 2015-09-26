angular.module("artemdesign").directive("footermenu", function() {
    return {
        templateUrl: 'app/directives/menu.tmpl.html',
        link: function(scope, element) {
            //animate menu display
            $("footer .menu").on("mousedown", function(event) {
                var footer = $("footer");
                var newHeight = $(window).height();
                if (footer.hasClass("active")) {
                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        newHeight = 110;
                    } else {
                        newHeight = 244;
                    }
                }

                var list = footer.find(".list");
                var description = footer.find(".description");
                list.removeClass("hidden");
                description.addClass("hidden");
                footer.addClass("animating");

                footer.animate({
                        height: newHeight
                    }, // what we are animating
                    'fast', // how fast we are animating
                    'swing', // the type of easing
                    function() { // the callback
                        footer.removeClass("animating");
                        if (footer.hasClass("active")) {
                            list.addClass("hidden");
                            footer.removeClass("active");
                            description.removeClass("hidden");
                        } else {
                            footer.addClass("active");
                        }
                    });
            });

            //open submenu
            $(".subMenuToggle").on("mousedown", function(event) {
                var footer = $("footer");
                footer.find("ul.list .submenu").toggleClass("hidden");
                $(".subMenuToggle").toggleClass("expanded");
            });
        }
    }
});
