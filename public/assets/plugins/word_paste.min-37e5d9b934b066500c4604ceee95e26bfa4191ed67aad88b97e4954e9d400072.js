/*!
 * froala_editor v2.6.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.extend(a.FE.DEFAULTS,{wordDeniedTags:[],wordDeniedAttrs:[],wordAllowedStyleProps:["font-family","font-size","background","color","width","text-align","vertical-align","background-color"]}),a.FE.PLUGINS.wordPaste=function(b){function c(){b.events.on("paste.wordPaste",function(a){return C=a,e(),!1})}function d(){var a='<div class="fr-word-paste-modal" style="padding: 20px 20px 10px 20px;">';return a+='<p style="text-align: left;">The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?</p>',a+='<div style="text-align: right; margin-top: 50px;"><button class="fr-remove-word fr-command">Clean</button> <button class="fr-keep-word fr-command">Keep</button></div>',a+="</div>"}function e(){if(!B){var c='<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.95 73.23" style="height: 25px; vertical-align: text-bottom; margin-right: 5px; display: inline-block"><defs><style>.a{fill:#2a5699;}.b{fill:#fff;}</style></defs><path class="a" d="M615.15,827.22h5.09V834c9.11.05,18.21-.09,27.32.05a2.93,2.93,0,0,1,3.29,3.25c.14,16.77,0,33.56.09,50.33-.09,1.72.17,3.63-.83,5.15-1.24.89-2.85.78-4.3.84-8.52,0-17,0-25.56,0v6.81h-5.32c-13-2.37-26-4.54-38.94-6.81q0-29.8,0-59.59c13.05-2.28,26.11-4.5,39.17-6.83Z" transform="translate(-575.97 -827.22)"/><path class="b" d="M620.24,836.59h28.1v54.49h-28.1v-6.81h22.14v-3.41H620.24v-4.26h22.14V873.2H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24V846h22.14v-3.41H620.24Zm-26.67,15c1.62-.09,3.24-.16,4.85-.25,1.13,5.75,2.29,11.49,3.52,17.21,1-5.91,2-11.8,3.06-17.7,1.7-.06,3.41-.15,5.1-.26-1.92,8.25-3.61,16.57-5.71,24.77-1.42.74-3.55,0-5.24.09-1.13-5.64-2.45-11.24-3.47-16.9-1,5.5-2.29,10.95-3.43,16.42q-2.45-.13-4.92-.3c-1.41-7.49-3.07-14.93-4.39-22.44l4.38-.18c.88,5.42,1.87,10.82,2.64,16.25,1.2-5.57,2.43-11.14,3.62-16.71Z" transform="translate(-575.97 -827.22)"/></svg> Word Paste Detected</h4>',e=d(),f=b.modals.create(D,c,e),h=f.$body;f.$modal.addClass("fr-middle"),b.events.bindClick(h,"button.fr-remove-word",function(){g()}),b.events.bindClick(h,"button.fr-keep-word",function(){g(!0)}),b.events.$on(a(b.o_win),"resize",function(){b.modals.resize(D)})}b.modals.show(D),b.modals.resize(D)}function f(){b.modals.hide(D)}function g(a){a&&(C=C.replace(/^\n*/g,"").replace(/^ /g,""),0===C.indexOf("<colgroup>")&&(C="<table>"+C+"</table>"),C=A(C,b.paste.getRtfClipboard()),C=b.paste.removeEmptyTags(C)),f(),b.paste.clean(C,!0,a)}function h(a){var b=a.parentNode;b&&a.parentNode.removeChild(a)}function i(a,b){if(b(a))for(var c=a.firstChild;c;){var d=c,e=c.previousSibling;c=c.nextSibling,i(d,b),d.previousSibling||d.nextSibling||d.parentNode||!c||e==c.previousSibling||!c.parentNode?d.previousSibling||d.nextSibling||d.parentNode||!c||c.previousSibling||c.nextSibling||c.parentNode||(e?c=e.nextSibling?e.nextSibling.nextSibling:null:a.firstChild&&(c=a.firstChild.nextSibling)):c=e?e.nextSibling:a.firstChild}}function j(a){return a.nodeType==Node.ELEMENT_NODE&&a.getAttribute("style")&&a.getAttribute("style").replace(/\n/gi,"").indexOf("mso-list:Ignore")!=-1}function k(a){if(!a.getAttribute("style")||!/mso-list:[\s]*l/gi.test(a.getAttribute("style").replace(/\n/gi,"")))return!1;try{var b=a.firstElementChild.firstElementChild,c=b.firstElementChild?b.firstElementChild:null;if(!j(b)&&!j(c))return!1}catch(d){return!1}return!0}function l(a){return a.getAttribute("style").replace(/\n/gi,"").replace(/.*level([0-9]+?).*/gi,"$1")}function m(a,b){var c=a.cloneNode(!0);if(c.firstElementChild&&"A"==c.firstElementChild.tagName&&(c=c.firstElementChild),h(c.firstElementChild),["H1","H2","H3","H4","H5","H6"].indexOf(a.tagName)!=-1){var d=document.createElement(a.tagName.toLowerCase());d.setAttribute("style",a.getAttribute("style")),d.innerHTML=c.innerHTML,c.innerHTML=d.outerHTML}i(c,function(a){return a.nodeType==Node.ELEMENT_NODE&&y(a,b),!0});var e=c.innerHTML;return e=e.replace(/<!--[\s\S]*?-->/gi,"")}function n(a,b){var c=/[0-9a-zA-Z]./gi,d=!1;a.firstElementChild&&a.firstElementChild.firstElementChild&&a.firstElementChild.firstElementChild.firstChild&&(d=d||c.test(a.firstElementChild.firstElementChild.firstChild.data),!d&&a.firstElementChild.firstElementChild.firstElementChild&&a.firstElementChild.firstElementChild.firstElementChild.firstChild&&(d=d||c.test(a.firstElementChild.firstElementChild.firstElementChild.firstChild.data)));var e=d?"ol":"ul",f=l(a),g="<"+e+"><li>"+m(a,b),i=a.nextElementSibling,j=a.parentNode;for(h(a),a=null;i&&k(i);){var o=i.previousElementSibling,p=l(i);if(p>f)g+=n(i,b).outerHTML;else{if(p<f)break;g+="</li><li>"+m(i,b)}if(f=p,i.previousElementSibling||i.nextElementSibling||i.parentNode){var q=i;i=i.nextElementSibling,h(q),q=null}else i=o?o.nextElementSibling:j.firstElementChild}g+="</li></"+e+">";var r=document.createElement("div");r.innerHTML=g;var s=r.firstElementChild;return s}function o(a,b){for(var c=document.createElement(b),d=0;d<a.attributes.length;d++){var e=a.attributes[d].name;c.setAttribute(e,a.getAttribute(e))}return c.innerHTML=a.innerHTML,a.parentNode.replaceChild(c,a),c}function p(a){var b=null;if(a.firstElementChild&&(b=a.firstElementChild.tagName,["SPAN","STRONG","B","S","EM","U","SUB","SUP"].indexOf(b)!=-1)){if("TD"!=a.tagName)for(var c=a.firstElementChild;c;){if("SPAN"==c.tagName){t(c,a.getAttribute("style"));break}c=c.firstElementChild}}else if("DIV"!=b){var d=a.getAttribute("style"),e=document.createElement("span");d&&(d=s(d),e.setAttribute("style",d)),e.innerHTML=a.innerHTML,a.innerHTML=e.outerHTML}}function q(c,d){b.node.clearAttributes(c);for(var e=c.firstElementChild,f=0,g=!1,i=null;e;){e.firstElementChild&&e.firstElementChild.tagName.indexOf("W:")!=-1&&(e.innerHTML=e.firstElementChild.innerHTML),i=e.getAttribute("width"),i||g||(g=!0),f+=parseInt(i,10),(!e.firstChild||e.firstChild&&e.firstChild.data==a.FE.UNICODE_NBSP)&&(e.firstChild&&h(e.firstChild),e.innerHTML="<br>");for(var j=e.firstElementChild,l=1==e.children.length;j;){if("P"==j.tagName&&!k(j)){var m=null;1==j.children.length&&j.firstElementChild&&"SPAN"==j.firstElementChild.tagName?(m=j.firstElementChild,l||(m=o(m,"div")),l?t(e,j.getAttribute("style")):t(m,j.getAttribute("style")),e.replaceChild(m,j)):(m=o(j,l?"span":"div"),!l&&m.getAttribute("align")&&m.removeAttribute("align")),j=m,l&&r(j)}j=j.nextElementSibling}if(d){var n=e.getAttribute("class");if(n){n=s(n);var q=n.match(/xl[0-9]+/gi);if(q){var u=q[0],w="."+u;d[w]&&t(e,d[w])}}d.td&&t(e,d.td),p(e),v(e)}var x=e.getAttribute("style");x&&(x=s(x),x&&";"!=x.slice(-1)&&(x+=";"));var y=e.getAttribute("valign");if(!y&&x){var z=x.match(/vertical-align:.+?[; "]{1,1}/gi);z&&(y=z[z.length-1].replace(/vertical-align:(.+?)[; "]{1,1}/gi,"$1"))}var A=null;if(x){var B=x.match(/text-align:.+?[; "]{1,1}/gi);B&&(A=B[B.length-1].replace(/text-align:(.+?)[; "]{1,1}/gi,"$1")),"general"==A&&(A=null)}var C=null;if(x){var D=x.match(/background:.+?[; "]{1,1}/gi);D&&(C=D[D.length-1].replace(/background:(.+?)[; "]{1,1}/gi,"$1"))}var E=e.getAttribute("colspan"),F=e.getAttribute("rowspan");b.node.clearAttributes(e),E&&e.setAttribute("colspan",E),F&&e.setAttribute("rowspan",F),y&&(e.style["vertical-align"]=y),A&&(e.style["text-align"]=A),C&&(e.style["background-color"]=C),i&&e.setAttribute("width",i),e=e.nextElementSibling}for(e=c.firstElementChild;e;)i=e.getAttribute("width"),g?e.removeAttribute("width"):e.setAttribute("width",100*parseInt(i,10)/f+"%"),e=e.nextElementSibling}function r(a){var b=a.parentNode,c=a.getAttribute("align");c&&(b&&"TD"==b.tagName?(b.setAttribute("style",b.getAttribute("style")+"text-align:"+c+";"),a.removeAttribute("align")):(a.style["text-align"]=c,a.removeAttribute("align")))}function s(a){return a.replace(/\n|\r|\n\r|&quot;/g,"")}function t(a,b,c){if(b){var d=a.getAttribute("style");d&&";"!=d.slice(-1)&&(d+=";"),b&&";"!=b.slice(-1)&&(b+=";"),b=b.replace(/\n/gi,"");var e=null;e=c?(d||"")+b:b+(d||""),a.setAttribute("style",e)}}function u(a){var b=a.getAttribute("style");if(b){b=s(b),b&&";"!=b.slice(-1)&&(b+=";");var c=b.match(/(^|\S+?):.+?;{1,1}/gi);if(c){for(var d={},e=0;e<c.length;e++){var f=c[e],g=f.split(":");2==g.length&&("text-align"==g[0]&&"SPAN"==a.tagName||(d[g[0]]=g[1]))}var h="";for(var i in d)if(d.hasOwnProperty(i)){if("font-size"==i&&"pt;"==d[i].slice(-3)){var j=null;try{j=parseFloat(d[i].slice(0,-3),10)}catch(k){}j&&(j=Math.round(1.33*j),d[i]=j+"px;")}h+=i+":"+d[i]}h&&a.setAttribute("style",h)}}}function v(a){var b=a.getAttribute("style");if(b){b=s(b);var c=b.match(/(^|;)font-weight:.+?[; "]{1,1}/gi),d=null;if(c&&(d=c[c.length-1].replace(/(^|;)font-weight:(.+?)[; "]{1,1}/gi,"$2")),d&&(d>=700||"bold"==d)){var e=document.createElement("strong");e.innerHTML=a.innerHTML,a.innerHTML=e.outerHTML}if(/(^|;)font-style:(italic|oblique)[; ]/gi.test(b)){var f=document.createElement("em");f.innerHTML=a.innerHTML,a.innerHTML=f.outerHTML}}}function w(a){for(var b=a.match(/[0-9a-f]{2}/gi),c=[],d=0;d<b.length;d++)c.push(String.fromCharCode(parseInt(b[d],16)));var e=c.join("");return btoa(e)}function x(a,b){if(b){var c=a.getAttribute("src");if(c&&c.indexOf("file://")!=-1){var d=a.getAttribute("v:shapes");if(d){if(/^[a-zA-Z]+_/gi.test(d)&&a.previousSibling){var e=a.previousSibling.previousSibling;if(!e)return;var f=e.data.split('o:spid="');if(2!=f.length)return;if(f=f[1].split('"'),f.length<2)return;d=f[0]}var g="hplid"+d.substring(8),h=b.split(g);if(!h||2==h.length){var i=h[1].split("bliptag");if(!(i&&i.length<2)){var j=null;if(i[0].indexOf("pngblip")!=-1?j="image/png":i[0].indexOf("jpegblip")!=-1&&(j="image/jpeg"),j){var k=i[1].split("}");if(!(k&&k.length<2)){var l;if(k.length>2&&k[0].indexOf("blipuid")!=-1)l=k[1].split(" ");else{if(l=k[0].split(" "),l&&l.length<2)return;l.shift()}var m=l.join(""),n=w(m),o="data:"+j+";base64,"+n;a.setAttribute("src",o)}}}}}}}}function y(c,d){var e=c.tagName,f=e.toLowerCase();c.firstElementChild&&("I"==c.firstElementChild.tagName?o(c.firstElementChild,"em"):"B"==c.firstElementChild.tagName&&o(c.firstElementChild,"strong"));var g=["SCRIPT","APPLET","EMBED","NOFRAMES","NOSCRIPT"];if(g.indexOf(e)!=-1)return h(c),!1;"O:P"==e&&"&nbsp;"==c.innerHTML&&(c.innerHTML=a.FE.INVISIBLE_SPACE);var i=-1,j=["META","LINK","XML","ST1:","O:","W:","FONT"];for(i=0;i<j.length;i++)if(e.indexOf(j[i])!=-1)return c.innerHTML?(c.outerHTML=c.innerHTML,h(c),!1):(h(c),!1);if("TD"!=e){var k=c.getAttribute("class");if(d&&k){k=s(k);var l=k.split(" ");for(i=0;i<l.length;i++){var m=l[i],n=[],u="."+m;n.push(u),u=f+u,n.push(u);for(var w=0;w<n.length;w++)d[n[w]]&&t(c,d[n[w]])}}d&&d[f]&&t(c,d[f])}var x=["P","H1","H2","H3","H4","H5","H6","PRE"];if(x.indexOf(e)!=-1){p(c),v(c);var y=c.getAttribute("style"),z=null;if(y){var A=y.match(/text-align:.+?[; "]{1,1}/gi);A&&(z=A[A.length-1].replace(/(text-align:.+?[; "]{1,1})/gi,"$1"))}z?c.setAttribute("style",z):c.removeAttribute("style")}"P"==e&&r(c),"TR"==e&&q(c,d);var B=c.getAttribute("class");if(B&&(d&&"P"==e&&d["p."+B]&&t(c,d["p."+B]),B.toLowerCase().indexOf("mso")!=-1)){var C=s(B);C=C.replace(/[0-9a-z-_]*mso[0-9a-z-_]*/gi,""),C?c.setAttribute("class",C):c.removeAttribute("class")}if("A"==e&&!c.attributes.getNamedItem("href")&&c.innerHTML&&(c.outerHTML=c.innerHTML),"TD"!=e&&"TH"!=e||c.innerHTML||(c.innerHTML="<br>"),"TABLE"==e&&(b.node.clearAttributes(c),c.setAttribute("style","width: 100%;")),c.getAttribute("lang")&&c.removeAttribute("lang"),c.getAttribute("style")&&c.getAttribute("style").toLowerCase().indexOf("mso")!=-1){var D=s(c.getAttribute("style"));D=D.replace(/[0-9a-z-_]*mso[0-9a-z-_]*:.+?(;{1,1}|$)/gi,""),D?c.setAttribute("style",D):c.removeAttribute("style")}return!0}function z(a){var b={},c=a.getElementsByTagName("style");if(c.length){var d=c[0],e=d.innerHTML.match(/[\S ]+\s+{[\s\S]+?}/gi);if(e)for(var f=0;f<e.length;f++){var g=e[f],h=g.replace(/([\S ]+\s+){[\s\S]+?}/gi,"$1"),i=g.replace(/[\S ]+\s+{([\s\S]+?)}/gi,"$1");h=h.replace(/^[\s]|[\s]$/gm,""),i=i.replace(/^[\s]|[\s]$/gm,""),h=h.replace(/\n|\r|\n\r/g,""),i=i.replace(/\n|\r|\n\r/g,"");for(var j=h.split(", "),k=0;k<j.length;k++)b[j[k]]=i}}return b}function A(c,d){c=c.replace(/[.\s\S\w\W<>]*(<html[^>]*>[.\s\S\w\W<>]*<\/html>)[.\s\S\w\W<>]*/gi,"$1");var e=new DOMParser,f=e.parseFromString(c,"text/html"),g=f.head,j=f.body,l=z(g);i(j,function(b){if(b.nodeType==Node.TEXT_NODE&&/\n/.test(b.data)){if(!/\S/.test(b.data))return b.data==a.FE.UNICODE_NBSP||(h(b),!1);b.data=b.data.replace(/\n/gi," ")}return!0}),i(j,function(a){return a.nodeType==Node.ELEMENT_NODE&&"IMG"==a.tagName&&x(a,d),!0}),i(j,function(a){if(a.nodeType==Node.TEXT_NODE)return a.data=a.data.replace(/<br>(\n|\r)/gi,"<br>"),!1;if(a.nodeType==Node.ELEMENT_NODE){if(k(a)){var b=a.parentNode,c=a.previousSibling,d=n(a,l),e=null;return e=c?c.nextSibling:b.firstChild,e?b.insertBefore(d,e):b.appendChild(d),!1}return y(a,l)}return a.nodeType!=Node.COMMENT_NODE||(h(a),!1)}),i(j,function(a){if(a.nodeType==Node.ELEMENT_NODE){var b=a.tagName;if(!a.innerHTML&&["BR","IMG"].indexOf(b)==-1){for(var c=a.parentNode;c&&(h(a),a=c,!a.innerHTML);)c=a.parentNode;return!1}u(a)}return!0});var m=j.outerHTML,o=b.opts.htmlAllowedStyleProps;return b.opts.htmlAllowedStyleProps=b.opts.wordAllowedStyleProps,m=b.clean.html(m,b.opts.wordDeniedTags,b.opts.wordDeniedAttrs,!1),b.opts.htmlAllowedStyleProps=o,m}var B,C,D="word_paste";return{_init:c}}});