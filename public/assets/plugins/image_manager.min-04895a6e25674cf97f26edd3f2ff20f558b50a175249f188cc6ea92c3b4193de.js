/*!
 * froala_editor v2.6.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){if(a.extend(a.FE.DEFAULTS,{imageManagerLoadURL:"https://i.froala.com/load-files",imageManagerLoadMethod:"get",imageManagerLoadParams:{},imageManagerPreloader:"",imageManagerDeleteURL:"",imageManagerDeleteMethod:"post",imageManagerDeleteParams:{},imageManagerPageSize:12,imageManagerScrollOffset:20,imageManagerToggleTags:!0}),a.FE.PLUGINS.imageManager=function(b){function c(){if(!z){var a='<div class="fr-modal-head-line"><i class="fa fa-bars fr-modal-more fr-not-available" id="fr-modal-more-'+b.sid+'" title="'+b.language.translate("Tags")+'"></i><h4 data-text="true">'+b.language.translate("Manage Images")+"</h4></div>";a+='<div class="fr-modal-tags" id="fr-modal-tags"></div>';var c='<img class="fr-preloader" id="fr-preloader" alt="'+b.language.translate("Loading")+'.." src="'+b.opts.imageManagerPreloader+'" style="display: none;">';c+='<div class="fr-image-list" id="fr-image-list"></div>';var d=b.modals.create(K,a,c);z=d.$modal,A=d.$head,B=d.$body}z.data("current-image",b.image.get()),b.modals.show(K),C||x(),g()}function d(){b.modals.hide(K)}function e(){var b=a(window).outerWidth();return b<768?2:b<1200?3:4}function f(){D.empty();for(var a=0;a<J;a++)D.append('<div class="fr-list-column"></div>')}function g(){C.show(),D.find(".fr-list-column").empty(),b.opts.imageManagerLoadURL?a.ajax({url:b.opts.imageManagerLoadURL,method:b.opts.imageManagerLoadMethod,data:b.opts.imageManagerLoadParams,dataType:"json",crossDomain:b.opts.requestWithCORS,xhrFields:{withCredentials:b.opts.requestWithCredentials},headers:b.opts.requestHeaders}).done(function(a,c,d){b.events.trigger("imageManager.imagesLoaded",[a]),h(a,d.response),C.hide()}).fail(function(){var a=this.xhr();s(M,a.response||a.responseText)}):s(N)}function h(a,b){try{D.find(".fr-list-column").empty(),G=0,H=0,I=0,F=a,i()}catch(c){s(O,b)}}function i(){if(H<F.length&&(D.outerHeight()<=B.outerHeight()+b.opts.imageManagerScrollOffset||B.scrollTop()+b.opts.imageManagerScrollOffset>D.outerHeight()-B.outerHeight())){G++;for(var a=b.opts.imageManagerPageSize*(G-1);a<Math.min(F.length,b.opts.imageManagerPageSize*G);a++)j(F[a])}}function j(c){var d=new Image,e=a('<div class="fr-image-container fr-empty fr-image-'+I++ +'" data-loading="'+b.language.translate("Loading")+'.." data-deleting="'+b.language.translate("Deleting")+'..">');n(!1),d.onload=function(){e.height(Math.floor(e.width()/d.width*d.height));var f=a("<img/>");if(c.thumb)f.attr("src",c.thumb);else{if(s(P,c),!c.url)return s(Q,c),!1;f.attr("src",c.url)}if(c.url&&f.attr("data-url",c.url),c.tag)if(A.find(".fr-modal-more.fr-not-available").removeClass("fr-not-available"),A.find(".fr-modal-tags").show(),c.tag.indexOf(",")>=0){for(var g=c.tag.split(","),h=0;h<g.length;h++)g[h]=g[h].trim(),0===E.find('a[title="'+g[h]+'"]').length&&E.append('<a role="button" title="'+g[h]+'">'+g[h]+"</a>");f.attr("data-tag",g.join())}else 0===E.find('a[title="'+c.tag.trim()+'"]').length&&E.append('<a role="button" title="'+c.tag.trim()+'">'+c.tag.trim()+"</a>"),f.attr("data-tag",c.tag.trim());c.name&&f.attr("alt",c.name);for(var j in c)c.hasOwnProperty(j)&&"thumb"!=j&&"url"!=j&&"tag"!=j&&f.attr("data-"+j,c[j]);e.append(f).append(a(b.icon.create("imageManagerDelete")).addClass("fr-delete-img").attr("title",b.language.translate("Delete"))).append(a(b.icon.create("imageManagerInsert")).addClass("fr-insert-img").attr("title",b.language.translate("Insert"))),E.find(".fr-selected-tag").each(function(a,b){w(f,b.text)||e.hide()}),f.on("load",function(){e.removeClass("fr-empty"),e.height("auto"),H++;var a=l(parseInt(f.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1);m(a),n(!1),H%b.opts.imageManagerPageSize===0&&i()}),b.events.trigger("imageManager.imageLoaded",[f])},d.onerror=function(){H++,e.remove();var a=l(parseInt(e.attr("class").match(/fr-image-(\d+)/)[1],10)+1);m(a),s(L,c),H%b.opts.imageManagerPageSize===0&&i()},d.src=c.thumb||c.url,k().append(e)}function k(){var b,c;return D.find(".fr-list-column").each(function(d,e){var f=a(e);0===d?(c=f.outerHeight(),b=f):f.outerHeight()<c&&(c=f.outerHeight(),b=f)}),b}function l(b){void 0===b&&(b=0);for(var c=[],d=I-1;d>=b;d--){var e=D.find(".fr-image-"+d);e.length&&(c.push(e),a('<div id="fr-image-hidden-container">').append(e),D.find(".fr-image-"+d).remove())}return c}function m(a){for(var b=a.length-1;b>=0;b--)k().append(a[b])}function n(a){if(void 0===a&&(a=!0),!z.is(":visible"))return!0;var c=e();if(c!=J){J=c;var d=l();f(),m(d)}b.modals.resize(K),a&&i()}function o(a){var b={},c=a.data();for(var d in c)c.hasOwnProperty(d)&&"url"!=d&&"tag"!=d&&(b[d]=c[d]);return b}function p(c){var d=a(c.currentTarget).siblings("img"),e=z.data("instance")||b,f=z.data("current-image");if(b.modals.hide(K),e.image.showProgressBar(),f)f.data("fr-old-src",f.attr("src")),f.trigger("click");else{e.events.focus(!0),e.selection.restore();var g=e.position.getBoundingRect(),h=g.left+g.width/2+a(b.doc).scrollLeft(),i=g.top+g.height+a(b.doc).scrollTop();e.popups.setContainer("image.insert",b.$sc),e.popups.show("image.insert",h,i)}e.image.insert(d.data("url"),!1,o(d),f)}function q(){z.find("#fr-modal-tags > a").each(function(){0===z.find('#fr-image-list [data-tag*="'+a(this).text()+'"]').length&&a(this).removeClass("fr-selected-tag").hide()}),u()}function r(c){var d=a(c.currentTarget).siblings("img"),e=b.language.translate("Are you sure? Image will be deleted.");confirm(e)&&(b.opts.imageManagerDeleteURL?b.events.trigger("imageManager.beforeDeleteImage",[d])!==!1&&(d.parent().addClass("fr-image-deleting"),a.ajax({method:b.opts.imageManagerDeleteMethod,url:b.opts.imageManagerDeleteURL,data:a.extend(a.extend({src:d.attr("src")},o(d)),b.opts.imageManagerDeleteParams),crossDomain:b.opts.requestWithCORS,xhrFields:{withCredentials:b.opts.requestWithCredentials},headers:b.opts.requestHeaders}).done(function(a){b.events.trigger("imageManager.imageDeleted",[a]);var c=l(parseInt(d.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1);d.parent().remove(),m(c),q(),n(!0)}).fail(function(){var a=this.xhr();s(R,a.response||a.responseText)})):s(S))}function s(c,d){10<=c&&c<20?C.hide():20<=c&&c<30&&a(".fr-image-deleting").removeClass("fr-image-deleting"),b.events.trigger("imageManager.error",[{code:c,message:T[c]},d])}function t(){var a=A.find(".fr-modal-head-line").outerHeight(),b=E.outerHeight();A.toggleClass("fr-show-tags"),A.hasClass("fr-show-tags")?(A.css("height",a+b),E.find("a").css("opacity",1)):(A.css("height",a),E.find("a").css("opacity",0))}function u(){var b=E.find(".fr-selected-tag");b.length>0?(D.find("img").parent().show(),b.each(function(b,c){D.find("img").each(function(b,d){var e=a(d);w(e,c.text)||e.parent().hide()})})):D.find("img").parent().show();var c=l();m(c),i()}function v(c){c.preventDefault();var d=a(c.currentTarget);d.toggleClass("fr-selected-tag"),b.opts.imageManagerToggleTags&&d.siblings("a").removeClass("fr-selected-tag"),u()}function w(a,b){for(var c=a.attr("data-tag").split(","),d=0;d<c.length;d++)if(c[d]==b)return!0;return!1}function x(){C=z.find("#fr-preloader"),D=z.find("#fr-image-list"),E=z.find("#fr-modal-tags"),J=e(),f(),A.css("height",A.find(".fr-modal-head-line").outerHeight()),b.events.$on(a(b.o_win),"resize",function(){n(F?!0:!1)}),b.helpers.isMobile()&&(b.events.bindClick(D,"div.fr-image-container",function(b){z.find(".fr-mobile-selected").removeClass("fr-mobile-selected"),a(b.currentTarget).addClass("fr-mobile-selected")}),z.on(b._mousedown,function(){z.find(".fr-mobile-selected").removeClass("fr-mobile-selected")})),b.events.bindClick(D,".fr-insert-img",p),b.events.bindClick(D,".fr-delete-img",r),z.on(b._mousedown+" "+b._mouseup,function(a){a.stopPropagation()}),z.on(b._mousedown,"*",function(){b.events.disableBlur()}),B.on("scroll",i),b.events.bindClick(z,"i#fr-modal-more-"+b.sid,t),b.events.bindClick(E,"a",v)}function y(){if(!b.$wp&&"IMG"!=b.el.tagName)return!1}var z,A,B,C,D,E,F,G,H,I,J,K="image_manager",L=10,M=11,N=12,O=13,P=14,Q=15,R=21,S=22,T={};return T[L]="Image cannot be loaded from the passed link.",T[M]="Error during load images request.",T[N]="Missing imageManagerLoadURL option.",T[O]="Parsing load response failed.",T[P]="Missing image thumb.",T[Q]="Missing image URL.",T[R]="Error during delete image request.",T[S]="Missing imageManagerDeleteURL option.",{require:["image"],_init:y,show:c,hide:d}},!a.FE.PLUGINS.image)throw new Error("Image manager plugin requires image plugin.");a.FE.DEFAULTS.imageInsertButtons.push("imageManager"),a.FE.RegisterCommand("imageManager",{title:"Browse",undo:!1,focus:!1,modal:!0,callback:function(){this.imageManager.show()},plugin:"imageManager"}),a.FE.DefineIcon("imageManager",{NAME:"folder"}),a.FE.DefineIcon("imageManagerInsert",{NAME:"plus"}),a.FE.DefineIcon("imageManagerDelete",{NAME:"trash"})});
