(function() {
    //animate menu display
    $("footer .menu").on("mousedown", function(event) {
        var footer = $("footer");
        var newHeight = $(window).height();
        if (footer.hasClass("active")) {
            newHeight = 244;
        }
        var list = footer.find(".list");
        var description = footer.find(".description");
        list.removeClass("hidden");
        description.addClass("hidden");
        $("footer").animate({
                height: newHeight
            }, // what we are animating
            'fast', // how fast we are animating
            'swing', // the type of easing
            function() { // the callback
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
})();
