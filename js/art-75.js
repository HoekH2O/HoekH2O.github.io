// JavaScript Document
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
	var test = document.getElementById("test");
	var texts = document.getElementById("texts");
	var tests = document.getElementById("tests");
    if (checkBox.checked == true){
		test.classList.add("reveil");
		text.classList.add("change");
		tests.classList.add("open");
		tests.classList.add("change");
    } else {
		test.classList.remove("reveil");
		text.classList.remove("change");
		tests.classList.remove("open");
		tests.classList.remove("change");
    }
}
function closeNav(){
	var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
	var test = document.getElementById("test");
	var texts = document.getElementById("texts");
	var tests = document.getElementById("tests");
	if (checkBox.checked == true){
		test.classList.remove("reveil");
		text.classList.remove("change");
		tests.classList.remove("open");
		tests.classList.remove("change");
	}
}

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

   
	
	/*! Modals v10.1.2 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/modals */
!(function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.modals=t(e)})("undefined"!=typeof global?global:this.window||this.global,(function(e){"use strict";var t,o,n,l={},c="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),r="closed",d={selectorToggle:"[data-modal]",selectorWindow:"[data-modal-window]",selectorClose:"[data-modal-close]",modalActiveClass:"active",modalBGClass:"modal-bg",preventBGScroll:!0,preventBGScrollHtml:!0,preventBGScrollBody:!0,backspaceClose:!0,stopVideo:!0,callbackOpen:function(){},callbackClose:function(){}},a=function(){var e={},t=!1,o=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);for(;o<n;o++){var l=arguments[o];!(function(o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t&&"[object Object]"===Object.prototype.toString.call(o[n])?e[n]=a(!0,e[n],o[n]):e[n]=o[n])})(l)}return e},s=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;--o>=0&&t.item(o)!==this;);return o>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},i=function(e,t){if(t.stopVideo&&e.classList.contains(t.modalActiveClass)){var o=e.querySelector("iframe"),n=e.querySelector("video");if(o){var l=o.src;o.src=l}n&&n.pause()}},u=function(){var e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var o=document.createElement("div");o.style.width="100%",e.appendChild(o);var n=o.offsetWidth;return e.parentNode.removeChild(e),t-n},m=function(){if(!document.querySelector("[data-modal-bg]")){var e=document.createElement("div");e.setAttribute("data-modal-bg",!0),e.classList.add(n.modalBGClass),document.body.appendChild(e)}},p=function(){var e=document.querySelector("[data-modal-bg]");e&&document.body.removeChild(e)};l.closeModal=function(e){var t=a(n||d,e||{}),l=document.querySelector(t.selectorWindow+"."+t.modalActiveClass);l&&(i(l,t),l.classList.remove(t.modalActiveClass),p(),r="closed",t.preventBGScroll&&(document.documentElement.style.overflowY="",document.body.style.overflowY="",document.body.style.paddingRight=""),t.callbackClose(o,l),o&&(o.focus(),o=null))},l.openModal=function(e,c,s){var i=a(n||d,s||{}),u=document.querySelector(c);"open"===r&&l.closeModal(i),e&&(o=e),u.classList.add(i.modalActiveClass),m(),r="open",u.setAttribute("tabindex","-1"),u.focus(),i.preventBGScroll&&(i.preventBGScrollHtml&&(document.documentElement.style.overflowY="hidden"),i.preventBGScrollBody&&(document.body.style.overflowY="hidden"),document.body.style.paddingRight=t+"px"),i.callbackOpen(e,u)};var v=function(e,t,o){if(o)return e.removeEventListener("touchstart",a,!1),e.removeEventListener("touchend",s,!1),void e.removeEventListener("click",i,!1);if(t&&"function"==typeof t){var n,l,c,r,d,a=function(e){n=!0,l=e.changedTouches[0].pageX,c=e.changedTouches[0].pageY},s=function(e){r=e.changedTouches[0].pageX-l,d=e.changedTouches[0].pageY-c,Math.abs(r)>=7||Math.abs(d)>=10||t(e)},i=function(e){if(n)return void(n=!1);t(e)};e.addEventListener("touchstart",a,!1),e.addEventListener("touchend",s,!1),e.addEventListener("click",i,!1)}},f=function(e){var t=e.target,o=s(t,n.selectorToggle),c=s(t,n.selectorClose),d=s(t,n.selectorWindow),a=e.keyCode;if(a&&"open"===r)(27===a||n.backspaceClose&&(8===a||46===a))&&l.closeModal();else if(t){if(d&&!c)return;!o||a&&13!==a?"open"===r&&(e.preventDefault(),l.closeModal()):(e.preventDefault(),l.openModal(o,o.getAttribute("data-modal"),n))}};return l.destroy=function(){n&&(v(document,null,!0),document.removeEventListener("keydown",f,!1),document.documentElement.style.overflowY="",document.body.style.overflowY="",document.body.style.paddingRight="",t=null,o=null,n=null)},l.init=function(e){c&&(l.destroy(),n=a(d,e||{}),t=u(),v(document,f),document.addEventListener("keydown",f,!1))},l}));

/**
 * Autoplay a YouTube, Vimeo, or HTML5 video
 * @param  {Node} modal  The modal to search inside
 */
var autoplayVideo = function (modal) {

	// Look for a YouTube, Vimeo, or HTML5 video in the modal
	var video = modal.querySelector('iframe[src*="www.youtube.com"], iframe[src*="player.vimeo.com"], video');

	// Bail if the modal doesn't have a video
	if (!video) return;

	// If an HTML5 video, play it
	if (video.tagName.toLowerCase() === 'video') {
		video.play();
		return;
	}
	// Add autoplay to video src
	// video.src: the current video `src` attribute
	// (video.src.indexOf('?') < 0 ? '?' : '&'): if the video.src already has query string parameters, add an "&". Otherwise, add a "?".
	// 'autoplay=1': add the autoplay parameter
	video.src = video.src + (video.src.indexOf('?') < 0 ? '?' : '&') + 'autoplay=1';
	
};

/**
 * Stop a YouTube, Vimeo, or HTML5 video
 * @param  {Node} modal  The modal to search inside
 */
var stopVideo = function (modal) {

	// Look for a YouTube, Vimeo, or HTML5 video in the modal
	var video = modal.querySelector('iframe[src*="www.youtube.com"], iframe[src*="player.vimeo.com"], video');

	// Bail if the modal doesn't have a video
	if (!video) return;

	// If an HTML5 video, pause it
	if (video.tagName.toLowerCase() === 'video') {
		video.pause();
		return;
	}

	// Remove autoplay from video src
	video.src = video.src.replace('&autoplay=1', '').replace('?autoplay=1', '');

};

modals.init({
	callbackOpen: function ( toggle, modal ) {
		autoplayVideo(modal);
	},
	callbackClose: function ( toggle, modal ) {
		stopVideo(modal);
	}
});


        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap {border-right: 0.03em solid black}";
        document.body.appendChild(css);
	
// Project One
// Project One Start
<!--
var PANELSP1 = new Array("pnp1_1", "pnp1_2", "pnp1_3");
<!--
var PANELSMP1 = new Array("pnmp1_1", "pnmp1_2", "pnmp1_3");
<!--
var PANP1 = new Array("pnsp1_1", "pnsp1_2", "pnsp1_3");
<!--
var PANMP1 = new Array("pnsmp1_1", "pnsmp1_2", "pnsmp1_3");
<!--
var PANZP1 = new Array("pnzp1_1", "pnzp1_2", "pnzp1_3");
<!--
var PANZMP1 = new Array("pnzmp1_1", "pnzmp1_2", "pnzmp1_3");
<!--
var PANDP1 = new Array("pndp1_1", "pndp1_2", "pndp1_3");
<!--
var PANDMP1 = new Array("pndmp1_1", "pndmp1_2", "pndmp1_3");
<!--
var PANTP1 = new Array("pntp1_1", "pntp1_2");
<!--
var PANTMP1 = new Array("pntmp1_1", "pntmp1_2");
// Project One End


// Project Two
<!--
var PANELSP2 = new Array("pnp2_1", "pnp2_2");
<!--
var PANELSMP2 = new Array("pnmp2_1", "pnmp2_2");
<!--
var PANP2 = new Array("pnsp2_1", "pnsp2_2", "pnsp2_3");
<!--
var PANMP2 = new Array("pnsmp2_1", "pnsmp2_2", "pnsmp2_3");
<!--
var PANZP2 = new Array("pnzp2_1", "pnzp2_2");
<!--
var PANZMP2 = new Array("pnzmp2_1", "pnzmp2_2");
<!--
var PANDP2 = new Array("pndp2_1", "pndp2_2", "pndp2_3");
<!--
var PANDMP2 = new Array("pndmp2_1", "pndmp2_2", "pndmp2_3");
<!--
var PANTP2 = new Array("pntp2_1", "pntp2_2");
<!--
var PANTMP2 = new Array("pntmp2_1", "pntmp2_2");
// Project Two End
		
// Project Two Function Start
function togglePanelP2 (pnl) {
	for (var a=0; a < PANELSP2.length; a++) {
		document.getElementById(PANELSP2[a]).style.display = (PANELSP2[a] == pnl) ? "block" : "none";
    }
}
function togglePanelMobileP2 (pnlm) {
	for (var s=0; s < PANELSMP2.length; s++) {
		document.getElementById(PANELSMP2[s]).style.display = (PANELSMP[s] == pnlm) ? "block" : "none";
    }
}

function togglePanelsP2 (pnp2) {
	for (var d=0; d < PANP2.length; d++) {
		document.getElementById(PANP2[d]).style.display = (PANP2[d] == pnp2) ? "block" : "none";
    }
}
function togglePanelsMobileP2 (pnsmp2) {
	for (var f=0; f < PANMP2.length; f++) {
		document.getElementById(PANMP2[f]).style.display = (PANMP2[f] == pnsmp2) ? "block" : "none";
    }
}
	
function togglePanelzP2 (pnzp2) {
	for (var g=0; g < PANZP2.length; g++) {
		document.getElementById(PANZP2[g]).style.display = (PANZP2[g] == pnzp2) ? "block" : "none";
    }
}
function togglePanelzMobileP2 (pnzmp2) {
	for (var h=0; h < PANZMP2.length; h++) {
		document.getElementById(PANZMP2[h]).style.display = (PANZMP2[h] == pnzmp2) ? "block" : "none";
    }
}
	
function togglePaneledP2 (pndp2) {
	for (var j=0; j < PANDP2.length; j++) {
		document.getElementById(PANDP2[j]).style.display = (PANDP2[j] == pndp2) ? "block" : "none";
    }
}
function togglePaneledMobileP2 (pndmp2) {
	for (var k=0; k < PANDMP2.length; k++) {
		document.getElementById(PANDMP2[k]).style.display = (PANDMP2[k] == pndmp2) ? "block" : "none";
    }
}
	
function togglePantP2 (pntp2) {
	for (var l=0; l < PANTP2.length; l++) {
		document.getElementById(PANTP2[l]).style.display = (PANTP2[l] == pntp2) ? "block" : "none";
    }
}
function togglePantMobileP2 (pntmp2) {
	for (var z=0; z < PANTMP2.length; z++) {
		document.getElementById(PANTMP2[z]).style.display = (PANTMP2[z] == pntmp2) ? "block" : "none";
    }
}
// Project Two Function End
// Project One Function Start
function togglePanelP1 (pnp1) {
	for (var q=0; q < PANELSP1.length; q++) {
		document.getElementById(PANELSP1[q]).style.display = (PANELSP1[q] == pnp1) ? "block" : "none";
    }
}
function togglePanelMobileP1 (pnmp1) {
	for (var w=0; w < PANELSMP1.length; w++) {
		document.getElementById(PANELSMP1[w]).style.display = (PANELSMP1[w] == pnmp1) ? "block" : "none";
    }
}

function togglePanelsP1 (pnsp1) {
	for (var e=0; e < PANP1.length; e++) {
		document.getElementById(PANP1[e]).style.display = (PANP1[e] == pnsp1) ? "block" : "none";
    }
}
function togglePanelsMobileP1 (pnsmp1) {
	for (var r=0; r < PANMP1.length; r++) {
		document.getElementById(PANMP1[r]).style.display = (PANMP1[r] == pnsmp1) ? "block" : "none";
    }
}
	
function togglePanelzP1 (pnzp1) {
	for (var t=0; t < PANZP1.length; t++) {
		document.getElementById(PANZP1[t]).style.display = (PANZP1[t] == pnzp1) ? "block" : "none";
    }
}
function togglePanelzMobileP1 (pnzmp1) {
	for (var y=0; y < PANZMP1.length; y++) {
		document.getElementById(PANZMP1[y]).style.display = (PANZMP1[y] == pnzmp1) ? "block" : "none";
    }
}
	
function togglePaneledP1 (pndp1) {
	for (var u=0; u < PANDP1.length; u++) {
		document.getElementById(PANDP1[e]).style.display = (PANDP1[e] == pndp1) ? "block" : "none";
    }
}
function togglePaneledMobileP1 (pndmp1) {
	for (var i=0; i < PANDMP1.length; i++) {
		document.getElementById(PANDMP1[i]).style.display = (PANDMP1[i] == pndmp1) ? "block" : "none";
    }
}
	
function togglePantP1 (pntp1) {
	for (var o=0; o < PANTP1.length; o++) {
		document.getElementById(PANTP1[o]).style.display = (PANTP1[o] == pntp1) ? "block" : "none";
    }
}
function togglePantMobileP1 (pntmp1) {
	for (var p=0; p < PANTMP1.length; p++) {
		document.getElementById(PANTMP1[p]).style.display = (PANTMP1[p] == pntmp1) ? "block" : "none";
    }
}
// Project One Function End