angular.module("artemdesign").directive("quoteslider", function() {
    return {
        templateUrl: 'app/directives/quoteslider.tmpl.html',
        link: function() {
            var slickOpts = {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                prevArrow: '.previous',
                nextArrow: '.next',
                autoplay: true,
                autoplaySpeed: 3000
            };
            var quotes = [
                "Uniquely arting the world...",
                "Imagination is more important than knowledge.",
                "The way to get started is to quit talking and begin doing."
            ];

            // Init the slick
            var element = $('.description .content');
            element.slick(slickOpts);
            quotes.forEach(function(quote) {
                element.slick("slickAdd", "<div><p>" + quote + "</p></div>");
            });
        }
    }
});
