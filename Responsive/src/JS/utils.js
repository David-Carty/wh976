/* Global everyday JS utilities functions */

"use strict";

var utils = (function () {

    /* Public Methods */

    return {

        hasClass: function (ele, cls) {
            return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },
        addClass: function (ele, cls) {
            if (!this.hasClass(ele, cls)) ele.className = ele.className.trim() + " " + cls;
        },
        removeClass: function (ele, cls) {
            if (this.hasClass(ele, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                ele.className = ele.className.replace(reg, ' ');
                ele.className = ele.className.trim();
            }
        },
        randomIntFromInterval: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        isRetinaDisplay: function () {
            try {
                if (window.matchMedia("(-webkit-device-pixel-ratio: 2)").matches) {
                    return true;
                }
            } catch (err) {
                //Only messes in IE9 and below.
            }
        },
        outerHeight: function (elem) {
            var outer;
            var curStyle = elem.currentStyle || window.getComputedStyle(elem);
            outer = parseInt(elem.offsetHeight);
            outer += parseInt(curStyle.marginTop);
            outer += parseInt(curStyle.marginBottom);
            return outer;
        },
        swapImage: function (ImgID, ImgFileName) {
            document.getElementById(ImgID).src = ImgFileName;
        }
    };
})();