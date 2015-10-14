/* Encapsulates the functionality requested in the test.  I opted for pure JS and the module pattern. David Carty.*/

var WilliamHillHome = (function () {

    /* Private Methods */

    var setupEvents = function () {
        var el = document.getElementById("toggleOpen");
        el.addEventListener("click", function () {
            el = document.getElementById("navbar");
            if (document.documentElement.clientWidth < 481) {
                if (utils.hasClass(el, "open")) {
                    utils.removeClass(el, "open");
                } else {
                    utils.addClass(el, "open")
                }
            }
        });

        var navbar = document.getElementById("navbar"),
            docBody = document.documentElement || document.body.parentNode || document.body,
            hasOffset = window.pageYOffset !== undefined,
            scrollTop;

        window.onscroll = function (e) {

            if (document.documentElement.clientWidth < 481) {
                return;
            }
            /* Content too small for fixed menu to remain practical. */
            // cross-browser compatible scrollTop.
            scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;

            var maxScroll = utils.outerHeight(document.getElementById("topBack"));

            if (scrollTop >= maxScroll) {
                utils.addClass(navbar, 'menuPos');
            } else {
                utils.removeClass(navbar, 'menuPos');
            }
        }

    };

    /* Public Methods */

    return {
        init: function () {
            /* Page initialisation. */
            setupEvents();
            /*Line below is required as HTML assumes JS is turned off. */
            utils.removeClass(document.body, "assume-no-js");
            utils.removeClass(document.getElementById("navbar"), "open");
            return this; /* allows chaining */
        },
        randomizeFeatureImages: function () {
            var totalFeatureImages = 10, imgPath="img/feature/", imgPrefix = "feature", imgSize = "w460xh218", imgNumber, imgSuffix = ".png", featureImg1, featureImg2;
            if (utils.isRetinaDisplay()) {
                imgSize = "w920xh436";
            }

            featureImg1 = utils.randomIntFromInterval(1, 10);
            featureImg2 = utils.randomIntFromInterval(1, 10);

            if (featureImg1 === featureImg2) {
                /* Avoid two matching random images */
                if (featureImg1 < 10) {
                    featureImg1 += 1;
                } else {
                    featureImg1 -= 1;
                }
            }
            utils.swapImage("imgFeature1",imgPath + imgPrefix + featureImg1 + "-" + imgSize + ".png");
            utils.swapImage("imgFeature2",imgPath + imgPrefix + featureImg2 + "-" + imgSize + ".png");
            return this;
        }
    };
})();

WilliamHillHome.init().randomizeFeatureImages();