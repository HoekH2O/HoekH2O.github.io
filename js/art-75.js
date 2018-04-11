// JavaScript Document
// JavaScript Document
//Menu start

<!--
var MENUTYPE = new Array("menu_1", "menu_2", "menu_3", "menu_4", "menu_5");
<!--
var MENUTYPE2 = new Array("menu2_1", "menu2_2", "menu2_3", "menu2_4", "menu2_5");
//menu end
	
//page one start
<!--
var PANELS = new Array("pn_1", "pn_2");
<!--
var PANELSM = new Array("pnm_1", "pnm_2");
<!--
var PAN = new Array("pns_1", "pns_2", "pns_3", "pns_4", "pns_5", "pns_6");
<!--
var PANM = new Array("pnsm_1", "pnsm_2", "pnsm_3", "pnsm_4", "pnsm_5", "pnsm_6");
//page one end
	
//page two start
<!--
var PANELSP1 = new Array("pnp1_1", "pnp1_2", "pnp1_3");
<!--
var PANELSMP1 = new Array("pnmp1_1", "pnmp1_2", "pnmp1_3");
<!--
var PANP1 = new Array("pnsp1_1", "pnsp1_2");
<!--
var PANMP1 = new Array("pnsmp1_1", "pnsmp1_2");
<!--
var PANZP1 = new Array("pnzp1_1", "pnzp1_2");
<!--
var PANZMP1 = new Array("pnzmp1_1", "pnzmp1_2");
<!--
var PANDP1 = new Array("pndp1_1", "pndp1_2");
<!--
var PANDMP1 = new Array("pndmp1_1", "pndmp1_2");
//page two end
	
//page three start
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
//page three end
//page four start
<!--
var PANELSP3 = new Array("pnp3_1", "pnp3_2");	
<!--
var PANELSMP3 = new Array("pnmp3_1", "pnmp3_2");
<!--
var PANP3 = new Array("pnsp3_1", "pnsp3_2");
<!--
var PANMP3 = new Array("pnsmp3_1", "pnsmp3_2");
<!--
var PANZP3 = new Array("pnzp3_1", "pnzp3_2");
<!--
var PANZMP3 = new Array("pnzmp3_1", "pnzmp3_2");
<!--
var PANDP3 = new Array("pndp3_1", "pndp3_2");
<!--
var PANDMP3 = new Array("pndmp3_1", "pndmp3_2");
//page four end
//page five start
<!--
var PANELSP4 = new Array("pnp4_1", "pnp4_2");	
<!--
var PANELSMP4 = new Array("pnmp4_1", "pnmp4_2");
<!--
var PANP4 = new Array("pnsp4_1", "pnsp4_2");
<!--
var PANMP4 = new Array("pnsmp4_1", "pnsmp4_2");
<!--
var PANZP4 = new Array("pnzp4_1", "pnzp4_2");
<!--
var PANZMP4 = new Array("pnzmp4_1", "pnzmp4_2");
<!--
var PANDP4 = new Array("pndp4_1", "pndp4_2");
<!--
var PANDMP4 = new Array("pndmp4_1", "pndmp4_2");
	
//page five end
	
	//menu start
function toggleMenuType (menu) {
	for (var m=0; m < MENUTYPE.length; m++) {
		document.getElementById(MENUTYPE[m]).style.display = (MENUTYPE[m] == menu) ? "block" : "none";
    }
}
function toggleMenuType2 (menu2) {
	for (var mm=0; mm < MENUTYPE2.length; mm++) {
		document.getElementById(MENUTYPE2[mm]).style.display = (MENUTYPE2[mm] == menu2) ? "block" : "none";
    }
}
	//menu end
function openMobile () {	
	openPageOneMobile();	
	openPageThreeMobile();	
	openPageTwoMobile();	
	openPageFiveMobile();
	openpageFourMobile();
}


function openType () {
	toggleMenuType2(MENUTYPE2[0]); 
	
	
}
function openTypeMobile () {
	
}


function openPageOne () {
	openType();
	togglePanelsMobile(PANM[0]);
	togglePanels(PAN[0]);
	
}
function openPageOneMobile () {
	toggleMenuType(MENUTYPE[0]);
	togglePanelsMobile(PANM[0]);
	togglePanelMobile(PANELSM[0]);
	togglePanels(PAN[0]);
	togglePanel(PANELS[0]);
	toggleMenuType2(MENUTYPE2[0]); 
}


function openPageTwo () {
	togglePanelP1(PANELSP1[0]);
	togglePanelsP1(PANP1[0]);
	togglePanelzP1(PANZP1[0]);
	togglePaneledP1(PANDP1[0]);
	togglePantP1(PANTP1[0]);
	
}
function openPageTwoMobile () {
	togglePanelMobileP1(PANELSMP1[0]);
	togglePanelsMobileP1(PANMP1[0]);
	togglePanelzMobileP1(PANZMP1[0]);
	togglePaneledMobileP1(PANDMP1[0]);
	
	
}


function openPageThree () {
	togglePanelP2(PANELSP2[0]);
	togglePanelsP2(PANP2[0]);
	togglePanelzP2(PANZP2[0]);
	togglePaneledP2(PANDP2[0]);
	togglePantP2(PANTP2[0]);
	
}
function openPageThreeMobile () {
	togglePanelMobileP2(PANELSMP2[0]);
	togglePanelsMobileP2(PANMP2[0]);
	togglePanelzMobileP2(PANZMP2[0]);
	togglePaneledMobileP2(PANDMP2[0]);
	togglePantMobileP2(PANTMP2[0]);
}
function openPageFour () {
	togglePanelP3(PANELSP3[0]);
	togglePanelsP3(PANP3[0]);
	togglePanelzP3(PANZP3[0]);
	togglePanelMobileP3(PANELSMP3[0]);
	togglePanelzMobileP3(PANZMP3[0]);
	togglePanelsMobileP3(PANMP3[0]);
	
}

function openPageFourMobile() {
	
}
function openPageFive () {
	
	togglePanelP4(PANELSP4[0]);
	togglePaneledP4(PANDP4[0]);
	togglePanelzP4(PANZP4[0]);	
	togglePanelsP4(PANP4[0]);
}
function openPageFiveMobile () {
	
	togglePanelMobileP4(PANELSMP4[0]);
	togglePaneledMobileP4(PANDMP4[0]);
	togglePanelzMobileP4(PANZMP4[0]);
	togglePanelsMobileP4(PANMP4[0]);
}

	//page one start
function togglePanel (pnl) {
	for (var p=0; p < PANELS.length; p++) {
		document.getElementById(PANELS[p]).style.display = (PANELS[p] == pnl) ? "block" : "none";
    }
}
function togglePanelMobile (pnlm) {
	for (var t=0; t < PANELSM.length; t++) {
		document.getElementById(PANELSM[t]).style.display = (PANELSM[t] == pnlm) ? "block" : "none";
    }
}

function togglePanels (pn) {
	for (var q=0; q < PAN.length; q++) {
		document.getElementById(PAN[q]).style.display = (PAN[q] == pn) ? "block" : "none";
    }
}
function togglePanelsMobile (pnsm) {
	for (var r=0; r < PANM.length; r++) {
		document.getElementById(PANM[r]).style.display = (PANM[r] == pnsm) ? "block" : "none";
    }
}
	
function togglePanelz (pnz) {
	for (var i=0; i < PANZ.length; i++) {
		document.getElementById(PANZ[i]).style.display = (PANZ[i] == pnz) ? "block" : "none";
    }
}
//function togglePanelzMobile (pnzm) {
//	for (var u=0; u < PANZMP2.length; u++) {
//		document.getElementById(PANZM[u]).style.display = (PANZM[u] == pnzm) ? "block" : "none";
//    }
//}
	
function togglePaneled (pnd) {
	for (var e=0; e < PAND.length; e++) {
		document.getElementById(PAND[e]).style.display = (PAND[e] == pnd) ? "block" : "none";
    }
}
//function togglePaneledMobile (pndm) {
//	for (var l=0; l < PANDM.length; l++) {
//		document.getElementById(PANDM[l]).style.display = (PANDM[l] == pndm) ? "block" : "none";
//    }
//}
	
function togglePant (pnt) {
	for (var o=0; o < PANT.length; o++) {
		document.getElementById(PANT[o]).style.display = (PANT[o] == pnt) ? "block" : "none";
    }
}
//function togglePantMobile (pntm) {
//	for (var k=0; k < PANTM.length; k++) {
//		document.getElementById(PANTM[k]).style.display = (PANTM[k] == pntm) ? "block" : "none";
//    }
//}
	//page one end
	
	//page two start
function togglePanelP1 (pnp1) {
	for (var pp=0; pp < PANELSP1.length; pp++) {
		document.getElementById(PANELSP1[pp]).style.display = (PANELSP1[pp] == pnp1) ? "block" : "none";
    }
}
function togglePanelMobileP1 (pnlm) {
	for (var t=0; t < PANELSMP1.length; t++) {
		document.getElementById(PANELSMP1[t]).style.display = (PANELSMP1[t] == pnlm) ? "block" : "none";
    }
}

function togglePanelsP1 (pnp1) {
	for (var qq=0; qq < PANP1.length; qq++) {
		document.getElementById(PANP1[qq]).style.display = (PANP1[qq] == pnp1) ? "block" : "none";
    }
}
function togglePanelsMobileP1 (pnsmp1) {
	for (var r=0; r < PANMP1.length; r++) {
		document.getElementById(PANMP1[r]).style.display = (PANMP1[r] == pnsmp1) ? "block" : "none";
    }
}
	
function togglePanelzP1 (pnzp1) {
	for (var ii=0; ii < PANZP1.length; ii++) {
		document.getElementById(PANZP1[ii]).style.display = (PANZP1[ii] == pnzp1) ? "block" : "none";
    }
}
function togglePanelzMobileP1 (pnzmp1) {
	for (var ou=0; ou < PANZMP1.length; ou++) {
		document.getElementById(PANZMP1[ou]).style.display = (PANZMP1[ou] == pnzmp1) ? "block" : "none";
    }
}
	
function togglePaneledP1 (pndp1) {
	for (var ee=0; ee < PANDP1.length; ee++) {
		document.getElementById(PANDP1[ee]).style.display = (PANDP1[ee] == pndp1) ? "block" : "none";
    }
}
function togglePaneledMobileP1 (pndmp1) {
	for (var ll=0; ll < PANDMP1.length; ll++) {
		document.getElementById(PANDMP1[ll]).style.display = (PANDMP1[ll] == pndmp1) ? "block" : "none";
    }
}
	
function togglePantP2 (pntp1) {
	for (var o=0; o < PANTP1.length; o++) {
		document.getElementById(PANTP1[o]).style.display = (PANTP1[o] == pntp1) ? "block" : "none";
    }
}
function togglePantMobileP1 (pntmp1) {
	for (var k=0; k < PANTMP1.length; k++) {
		document.getElementById(PANTMP1[k]).style.display = (PANTMP1[k] == pntmp1) ? "block" : "none";
    }
}
	//page two end
	
	//page three start
function togglePanelP2 (pnl) {
	for (var p=0; p < PANELSP2.length; p++) {
		document.getElementById(PANELSP2[p]).style.display = (PANELSP2[p] == pnl) ? "block" : "none";
    }
}
function togglePanelMobileP2 (pnlm) {
	for (var t=0; t < PANELSMP2.length; t++) {
		document.getElementById(PANELSMP2[t]).style.display = (PANELSMP2[t] == pnlm) ? "block" : "none";
    }
}

function togglePanelsP2 (pnp2) {
	for (var q=0; q < PANP2.length; q++) {
		document.getElementById(PANP2[q]).style.display = (PANP2[q] == pnp2) ? "block" : "none";
    }
}
function togglePanelsMobileP2 (pnsmp2) {
	for (var r=0; r < PANMP2.length; r++) {
		document.getElementById(PANMP2[r]).style.display = (PANMP2[r] == pnsmp2) ? "block" : "none";
    }
}
	
function togglePanelzP2 (pnzp2) {
	for (var i=0; i < PANZP2.length; i++) {
		document.getElementById(PANZP2[i]).style.display = (PANZP2[i] == pnzp2) ? "block" : "none";
    }
}
function togglePanelzMobileP2 (pnzmp2) {
	for (var u=0; u < PANZMP2.length; u++) {
		document.getElementById(PANZMP2[u]).style.display = (PANZMP2[u] == pnzmp2) ? "block" : "none";
    }
}
	
function togglePaneledP2 (pndp2) {
	for (var e=0; e < PANDP2.length; e++) {
		document.getElementById(PANDP2[e]).style.display = (PANDP2[e] == pndp2) ? "block" : "none";
    }
}
function togglePaneledMobileP2 (pndmp2) {
	for (var l=0; l < PANDMP2.length; l++) {
		document.getElementById(PANDMP2[l]).style.display = (PANDMP2[l] == pndmp2) ? "block" : "none";
    }
}
	
function togglePantP2 (pntp2) {
	for (var o=0; o < PANTP2.length; o++) {
		document.getElementById(PANTP2[o]).style.display = (PANTP2[o] == pntp2) ? "block" : "none";
    }
}
function togglePantMobileP2 (pntmp2) {
	for (var k=0; k < PANTMP2.length; k++) {
		document.getElementById(PANTMP2[k]).style.display = (PANTMP2[k] == pntmp2) ? "block" : "none";
    }
}
	//page three end

	//page four start
function togglePanelP3 (pnp3) {
	for (var ppp=0; ppp < PANELSP3.length; ppp++) {
		document.getElementById(PANELSP3[ppp]).style.display = (PANELSP3[ppp] == pnp3) ? "block" : "none";
    }
}
function togglePanelMobileP3 (pnmp3) {
	for (var tott=0; tott < PANELSMP3.length; tott++) {
		document.getElementById(PANELSMP3[tott]).style.display = (PANELSMP3[tott] == pnmp3) ? "block" : "none";
    }
}

function togglePanelsP3 (pnsp3) {
	for (var qqtq=0; qqtq < PANP3.length; qqtq++) {
		document.getElementById(PANP3[qqtq]).style.display = (PANP3[qqtq] == pnsp3) ? "block" : "none";
    }
}
function togglePanelsMobileP3 (pnsmp3) {
	for (var rrr=0; rrr < PANMP3.length; rrr++) {
		document.getElementById(PANMP3[rrr]).style.display = (PANMP3[rrr] == pnsmp3) ? "block" : "none";
    }
}
	
function togglePanelzP3 (pnzp3) {
	for (var mi=0; mi < PANZP3.length; mi++) {
		document.getElementById(PANZP3[mi]).style.display = (PANZP3[mi] == pnzp3) ? "block" : "none";
    }
}
function togglePanelzMobileP3 (pnzmp3) {
	for (var uuu=0; uuu < PANZMP3.length; uuu++) {
		document.getElementById(PANZMP3[uuu]).style.display = (PANZMP3[uuu] == pnzmp3) ? "block" : "none";
    }
}

function togglePaneledP3 (pndp3) {
	for (var vvv=0; vvv < PANDP3.length; vvv++) {
		document.getElementById(PANDP3[vvv]).style.display = (PANDP3[vvv] == pndp3) ? "block" : "none";
    }
}
function togglePaneledMobileP3 (pndmp3) {
	for (var ggg=0; ggg < PANDMP3.length; ggg++) {
		document.getElementById(PANDMP3[ggg]).style.display = (PANDMP3[ggg] == pndmp3) ? "block" : "none";
    }
}
	//page four end
	//page five start
function togglePanelP4 (pnp4) {
	for (var pppp=0; pppp < PANELSP4.length; pppp++) {
		document.getElementById(PANELSP4[pppp]).style.display = (PANELSP4[pppp] == pnp4) ? "block" : "none";
    }
}
function togglePanelMobileP4 (pnmp4) {
	for (var tottt=0; tottt < PANELSMP4.length; tottt++) {
		document.getElementById(PANELSMP4[tottt]).style.display = (PANELSMP4[tottt] == pnmp4) ? "block" : "none";
    }
}

function togglePanelsP4 (pnsp4) {
	for (var qqqq=0; qqqq < PANP4.length; qqqq++) {
		document.getElementById(PANP4[qqqq]).style.display = (PANP4[qqqq] == pnsp4) ? "block" : "none";
    }
}
function togglePanelsMobileP4 (pnsmp4) {
	for (var rerr=0; rerr < PANMP4.length; rerr++) {
		document.getElementById(PANMP4[rerr]).style.display = (PANMP4[rerr] == pnsmp4) ? "block" : "none";
    }
}
	
function togglePanelzP4 (pnzp4) {
	for (var min=0; min < PANZP4.length; min++) {
		document.getElementById(PANZP4[min]).style.display = (PANZP4[min] == pnzp4) ? "block" : "none";
    }
}
function togglePanelzMobileP4 (pnzmp4) {
	for (var uuuu=0; uuuu < PANZMP4.length; uuuu++) {
		document.getElementById(PANZMP4[uuuu]).style.display = (PANZMP4[uuuu] == pnzmp4) ? "block" : "none";
    }
}

function togglePaneledP4 (pndp4) {
	for (var vvvv=0; vvvv < PANDP4.length; vvvv++) {
		document.getElementById(PANDP4[vvvv]).style.display = (PANDP4[vvvv] == pndp4) ? "block" : "none";
    }
}
function togglePaneledMobileP4 (pndmp4) {
	for (var gggg=0; gggg < PANDMP4.length; gggg++) {
		document.getElementById(PANDMP4[gggg]).style.display = (PANDMP4[gggg] == pndmp4) ? "block" : "none";
    }
}
	//page five end

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

var overlay = document.getElementById("overlay");
window.addEventListener('load', function(){
  overlay.style.transition = '1s';
  overlay.style.transform = 'translateY(-200%)';
})
