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
                // autoplay: true,
                // autoplaySpeed: 3000
            };
            var quotes = [
                "",
                "The way to get started is to quit talking and begin doing."
            ];

            // Init the slick
            var element = $('.description .content');
            element.slick(slickOpts);
        }
    }
});
