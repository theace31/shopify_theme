function onYouTubeIframeAPIReady(){theme.SlideshowVideo.loadVideos()}window.theme=window.theme||{},window.theme=window.theme||{},theme.Sections=function e(){this.constructors={},this.instances=[],$(document).on("shopify:section:load",this._onSectionLoad.bind(this)).on("shopify:section:unload",this._onSectionUnload.bind(this)).on("shopify:section:select",this._onSelect.bind(this)).on("shopify:section:deselect",this._onDeselect.bind(this)).on("shopify:block:select",this._onBlockSelect.bind(this)).on("shopify:block:deselect",this._onBlockDeselect.bind(this))},theme.Sections.prototype=_.assignIn({},theme.Sections.prototype,{_createInstance:function(e,t){var i=$(e),n=i.attr("data-section-id"),a=i.attr("data-section-type");if(t=t||this.constructors[a],!_.isUndefined(t)){var o=_.assignIn(new t(e),{id:n,type:a,container:e});this.instances.push(o)}},_onSectionLoad:function(e){var t=$("[data-section-id]",e.target)[0];t&&this._createInstance(t)},_onSectionUnload:function(e){this.instances=_.filter(this.instances,function(t){var i=t.id===e.detail.sectionId;return i&&_.isFunction(t.onUnload)&&t.onUnload(e),!i})},_onSelect:function(e){var t=_.find(this.instances,function(t){return t.id===e.detail.sectionId});!_.isUndefined(t)&&_.isFunction(t.onSelect)&&t.onSelect(e)},_onDeselect:function(e){var t=_.find(this.instances,function(t){return t.id===e.detail.sectionId});!_.isUndefined(t)&&_.isFunction(t.onDeselect)&&t.onDeselect(e)},_onBlockSelect:function(e){var t=_.find(this.instances,function(t){return t.id===e.detail.sectionId});!_.isUndefined(t)&&_.isFunction(t.onBlockSelect)&&t.onBlockSelect(e)},_onBlockDeselect:function(e){var t=_.find(this.instances,function(t){return t.id===e.detail.sectionId});!_.isUndefined(t)&&_.isFunction(t.onBlockDeselect)&&t.onBlockDeselect(e)},register:function(e,t){this.constructors[e]=t,$("[data-section-type="+e+"]").each(function(e,i){this._createInstance(i,t)}.bind(this))}}),window.slate=window.slate||{},slate.rte={wrapTable:function(e){e.$tables.wrap('<div class="'+e.tableWrapperClass+'"></div>')},wrapIframe:function(e){e.$iframes.each(function(){$(this).wrap('<div class="'+e.iframeWrapperClass+'"></div>'),this.src=this.src})}},window.slate=window.slate||{},slate.a11y={pageLinkFocus:function(e){function t(){e.first().removeClass(i).removeAttr("tabindex")}var i="js-focus-hidden";e.first().attr("tabIndex","-1").focus().addClass(i).one("blur",t)},focusHash:function(){var e=window.location.hash;e&&document.getElementById(e.slice(1))&&this.pageLinkFocus($(e))},bindInPageLinks:function(){$("a[href*=#]").on("click",function(e){this.pageLinkFocus($(e.currentTarget.hash))}.bind(this))},trapFocus:function(e){var t=e.namespace?"focusin."+e.namespace:"focusin";e.$elementToFocus||(e.$elementToFocus=e.$container),e.$container.attr("tabindex","-1"),e.$elementToFocus.focus(),$(document).off("focusin"),$(document).on(t,function(t){e.$container[0]===t.target||e.$container.has(t.target).length||e.$container.focus()})},removeTrapFocus:function(e){var t=e.namespace?"focusin."+e.namespace:"focusin";e.$container&&e.$container.length&&e.$container.removeAttr("tabindex"),$(document).off(t)}},theme.Images=function(){function e(e,t){"string"==typeof e&&(e=[e]);for(var i=0;i<e.length;i++){var n=e[i];this.loadImage(this.getSizedImageUrl(n,t))}}function t(e){(new Image).src=e}function i(e,t,i){var n=this.imageSize(t.src),a=this.getSizedImageUrl(e.src,n);i?i(a,e,t):t.src=a}function n(e){var t=e.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\\.@]/);return null!==t?void 0!==t[2]?t[1]+t[2]:t[1]:null}function a(e,t){if(null===t)return e;if("master"===t)return this.removeProtocol(e);var i=e.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!==i){var n=e.split(i[0]),a=i[0];return this.removeProtocol(n[0]+"_"+t+a)}return null}function o(e){return e.replace(/http(s)?:/,"")}return{preload:e,loadImage:t,switchImage:i,imageSize:n,getSizedImageUrl:a,removeProtocol:o}}(),theme.Currency=function(){function e(e,i){function n(e,t,i,n){if(i=i||",",n=n||".",isNaN(e)||null===e)return 0;e=(e/100).toFixed(t);var a=e.split(".");return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+i)+(a[1]?n+a[1]:"")}"string"==typeof e&&(e=e.replace(".",""));var a="",o=/\{\{\s*(\w+)\s*\}\}/,s=i||t;switch(s.match(o)[1]){case"amount":a=n(e,2);break;case"amount_no_decimals":a=n(e,0);break;case"amount_with_comma_separator":a=n(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":a=n(e,0,".",",");break;case"amount_no_decimals_with_space_separator":a=n(e,0," ");break}return s.replace(o,a)}var t="${{amount}}";return{formatMoney:e}}(),slate.Variants=function(){function e(e){this.$container=e.$container,this.product=e.product,this.singleOptionSelector=e.singleOptionSelector,this.originalSelectorId=e.originalSelectorId,this.enableHistoryState=e.enableHistoryState,this.currentVariant=this._getVariantFromOptions(),$(this.singleOptionSelector,this.$container).on("change",this._onSelectChange.bind(this))}return e.prototype=_.assignIn({},e.prototype,{_getCurrentOptions:function(){var e=_.map($(this.singleOptionSelector,this.$container),function(e){var t=$(e),i=t.attr("type"),n={};return"radio"===i||"checkbox"===i?!!t[0].checked&&(n.value=t.val(),n.index=t.data("index"),n):(n.value=t.val(),n.index=t.data("index"),n)});return e=_.compact(e)},_getVariantFromOptions:function(){var e=this._getCurrentOptions(),t=this.product.variants;return _.find(t,function(t){return e.every(function(e){return _.isEqual(t[e.index],e.value)})})},_onSelectChange:function(){var e=this._getVariantFromOptions();this.$container.trigger({type:"variantChange",variant:e}),e&&(this._updateMasterSelect(e),this._updateImages(e),this._updatePrice(e),this._updateSKU(e),this.currentVariant=e,this.enableHistoryState&&this._updateHistoryState(e))},_updateImages:function(e){var t=e.featured_image||{},i=this.currentVariant.featured_image||{};e.featured_image&&t.src!==i.src&&this.$container.trigger({type:"variantImageChange",variant:e})},_updatePrice:function(e){e.price===this.currentVariant.price&&e.compare_at_price===this.currentVariant.compare_at_price||this.$container.trigger({type:"variantPriceChange",variant:e})},_updateSKU:function(e){e.sku!==this.currentVariant.sku&&this.$container.trigger({type:"variantSKUChange",variant:e})},_updateHistoryState:function(e){if(history.replaceState&&e){var t=window.location.protocol+"//"+window.location.host+window.location.pathname+"?variant="+e.id;window.history.replaceState({path:t},"",t)}},_updateMasterSelect:function(e){$(this.originalSelectorId,this.$container).val(e.id)}}),e}(),theme.Drawers=function(){function e(e,t,i){var n={close:".js-drawer-close",open:".js-drawer-open-"+t,openClass:"js-drawer-open",dirOpenClass:"js-drawer-open-"+t};if(this.nodes={$parent:$("html").add("body"),$page:$("#PageContainer")},this.config=$.extend(n,i),this.position=t,this.$drawer=$("#"+e),!this.$drawer.length)return!1;this.drawerIsOpen=!1,this.init()}return e.prototype.init=function(){$(this.config.open).on("click",$.proxy(this.open,this)),this.$drawer.on("click",this.config.close,$.proxy(this.close,this))},e.prototype.open=function(e){var t=!1;return e?e.preventDefault():t=!0,e&&e.stopPropagation&&(e.stopPropagation(),this.$activeSource=$(e.currentTarget)),this.drawerIsOpen&&!t?this.close():(this.$drawer.prepareTransition(),this.nodes.$parent.addClass(this.config.openClass+" "+this.config.dirOpenClass),this.drawerIsOpen=!0,slate.a11y.trapFocus({$container:this.$drawer,namespace:"drawer_focus"}),this.config.onDrawerOpen&&"function"==typeof this.config.onDrawerOpen&&(t||this.config.onDrawerOpen()),this.$activeSource&&this.$activeSource.attr("aria-expanded")&&this.$activeSource.attr("aria-expanded","true"),this.bindEvents(),this)},e.prototype.close=function(){this.drawerIsOpen&&($(document.activeElement).trigger("blur"),this.$drawer.prepareTransition(),this.nodes.$parent.removeClass(this.config.dirOpenClass+" "+this.config.openClass),this.drawerIsOpen=!1,slate.a11y.removeTrapFocus({$container:this.$drawer,namespace:"drawer_focus"}),this.unbindEvents())},e.prototype.bindEvents=function(){this.nodes.$parent.on("keyup.drawer",$.proxy(function(e){return 27!==e.keyCode||(this.close(),!1)},this)),this.nodes.$page.on("touchmove.drawer",function(){return!1}),this.nodes.$page.on("click.drawer",$.proxy(function(){return this.close(),!1},this))},e.prototype.unbindEvents=function(){this.nodes.$page.off(".drawer"),this.nodes.$parent.off(".drawer")},e}(),window.theme=window.theme||{},theme.Header=function(){function e(){t(),r.$parents.on("click.siteNav",function(e){var t=$(this);t.hasClass(s.activeClass)||(e.preventDefault(),e.stopImmediatePropagation()),i(t)}),$(o.siteNavChildLink).on("focusout.siteNav",function(){setTimeout(function(){!$(document.activeElement).hasClass(s.childLinkClass)&&r.$activeDropdown.length&&n(r.$activeDropdown)})}),r.$topLevel.on("focus.siteNav",function(){r.$activeDropdown.length&&n(r.$activeDropdown)}),r.$subMenuLinks.on("click.siteNav",function(e){e.stopImmediatePropagation()})}function t(){r={$nav:$(o.navigation),$topLevel:$(o.siteNavLinkMain),$parents:$(o.navigation).find(o.siteNavHasDropdown),$subMenuLinks:$(o.siteNavChildLinks),$activeDropdown:$(o.siteNavActiveDropdown)}}function i(e){e.addClass(s.activeClass),r.$activeDropdown.length&&n(r.$activeDropdown),r.$activeDropdown=e,e.find(o.siteNavLinkMain).attr("aria-expanded","true"),setTimeout(function(){$(window).on("keyup.siteNav",function(t){27===t.keyCode&&n(e)}),$(o.body).on("click.siteNav",function(){n(e)})},250)}function n(e){e.find(o.siteNavLinkMain).attr("aria-expanded","false"),e.removeClass(s.activeClass),r.$activeDropdown=$(o.siteNavActiveDropdown),$(o.body).off("click.siteNav"),$(window).off("keyup.siteNav")}function a(){$(window).off(".siteNav"),r.$parents.off(".siteNav"),r.$subMenuLinks.off(".siteNav"),r.$topLevel.off(".siteNav"),$(o.siteNavChildLink).off(".siteNav"),$(o.body).off(".siteNav")}var o={body:"body",navigation:"#AccessibleNav",siteNavHasDropdown:".site-nav--has-dropdown",siteNavChildLinks:".site-nav__child-link",siteNavActiveDropdown:".site-nav--active-dropdown",siteNavLinkMain:".site-nav__link--main",siteNavChildLink:".site-nav__link--last"},s={activeClass:"site-nav--active-dropdown",childLinkClass:"site-nav__child-link"},r={};return{init:e,unload:a}}(),window.theme=window.theme||{},theme.MobileNav=function(){function e(){i(),c.$mobileNavToggle.on("click",t),c.$subNavToggleBtn.on("click.subNav",o),enquire.register(p,{unmatch:function(){a()}})}function t(){c.$mobileNavToggle.hasClass(r.mobileNavCloseIcon)?a():n()}function i(){c={$pageContainer:$("#PageContainer"),$siteHeader:$(".site-header"),$mobileNavToggle:$(".js-mobile-nav-toggle"),$mobileNavContainer:$(".mobile-nav-wrapper"),$mobileNav:$("#MobileNav"),$sectionHeader:$("#shopify-section-header"),$subNavToggleBtn:$("."+r.subNavToggleBtn)}}function n(){var e=c.$siteHeader.outerHeight()+c.$siteHeader.position().top;c.$mobileNavContainer.prepareTransition().addClass(r.navOpen),c.$mobileNavContainer.css({transform:"translateY("+e+"px)"}),c.$pageContainer.css({transform:"translate3d(0, "+c.$mobileNavContainer[0].scrollHeight+"px, 0)"}),slate.a11y.trapFocus({$container:c.$sectionHeader,$elementToFocus:c.$mobileNav.find("."+r.navLinkWrapper+":first").find("."+r.navLink),namespace:"navFocus"}),c.$mobileNavToggle.addClass(r.mobileNavCloseIcon).removeClass(r.mobileNavOpenIcon),$(window).on("keyup.mobileNav",function(e){27===e.which&&a()})}function a(){c.$mobileNavContainer.prepareTransition().removeClass(r.navOpen),c.$mobileNavContainer.css({transform:"translateY(-100%)"}),c.$pageContainer.removeAttr("style"),c.$mobileNavContainer.one("TransitionEnd.navToggle webkitTransitionEnd.navToggle transitionend.navToggle oTransitionEnd.navToggle",function(){slate.a11y.removeTrapFocus({$container:c.$mobileNav,namespace:"navFocus"})}),c.$mobileNavToggle.addClass(r.mobileNavOpenIcon).removeClass(r.mobileNavCloseIcon),$(window).off("keyup.mobileNav")}function o(e){if(!d){var t=$(e.currentTarget),i=t.hasClass(r.return);d=!0,i?($("."+r.subNavToggleBtn+'[data-level="'+(h-1)+'"]').removeClass(r.subNavActive),u&&u.length&&u.removeClass(r.subNavActive)):t.addClass(r.subNavActive),u=t,s(t.data("target"))}}function s(e){var t=e?$('.mobile-nav__dropdown[data-parent="'+e+'"]'):c.$mobileNav;h=t.data("level")?t.data("level"):1,l&&l.length&&l.prepareTransition().addClass(r.subNavClosing),l=t;var i=e?t.find("."+r.subNavLink+":first"):u,n=t.outerHeight(),a=h>2?r.thirdNavShowing:r.subNavShowing;c.$mobileNavContainer.css("height",n).removeClass(r.thirdNavShowing).addClass(a),e||c.$mobileNavContainer.removeClass(r.thirdNavShowing).removeClass(r.subNavShowing),c.$mobileNavContainer.one("TransitionEnd.subnavToggle webkitTransitionEnd.subnavToggle transitionend.subnavToggle oTransitionEnd.subnavToggle",function(){slate.a11y.trapFocus({$container:t,$elementToFocus:i,namespace:"subNavFocus"}),c.$mobileNavContainer.off(".subnavToggle"),d=!1}),c.$pageContainer.css({transform:"translateY("+n+"px)"}),l.removeClass(r.subNavClosing)}var r={mobileNavOpenIcon:"mobile-nav--open",mobileNavCloseIcon:"mobile-nav--close",navLinkWrapper:"mobile-nav__item",navLink:"mobile-nav__link",subNavLink:"mobile-nav__sublist-link",return:"mobile-nav__return-btn",subNavActive:"is-active",subNavClosing:"is-closing",navOpen:"js-menu--is-open",subNavShowing:"sub-nav--is-open",thirdNavShowing:"third-nav--is-open",subNavToggleBtn:"js-toggle-submenu"},c={},d,l,u,h=1,p="screen and (max-width: 749px)";return{init:e,closeMobileNav:a}}(jQuery),window.theme=window.theme||{},theme.Search=function(){function e(){$(o.siteHeader).length&&(t(),a(),$(o.searchHeaderInput).add(o.searchHeaderSubmit).on("focus blur",function(){$(o.searchHeader).toggleClass(s.focus)}),$(o.siteHeaderSearchToggle).on("click",function(){var e=$(o.siteHeader).outerHeight(),t=$(o.siteHeader).offset().top-e;$(o.searchDrawer).css({height:e+"px",top:t+"px"})}))}function t(){$("#PageContainer").addClass("drawer-page-content"),$(".js-drawer-open-top").attr("aria-controls","SearchDrawer").attr("aria-expanded","false"),theme.SearchDrawer=new theme.Drawers("SearchDrawer","top",{onDrawerOpen:i})}function i(){n($(o.searchDrawerInput)),$(o.mobileNavWrapper).hasClass(s.mobileNavIsOpen)&&theme.MobileNav.closeMobileNav()}function n(e){e.focus(),e[0].setSelectionRange(0,e[0].value.length)}function a(){$(o.searchSubmit).on("click",function(e){var t=$(e.target),i=t.parents(o.search).find(o.searchInput);0===i.val().length&&(e.preventDefault(),n(i))})}var o={search:".search",searchSubmit:".search__submit",searchInput:".search__input",siteHeader:".site-header",siteHeaderSearchToggle:".site-header__search-toggle",siteHeaderSearch:".site-header__search",searchDrawer:".search-bar",searchDrawerInput:".search-bar__input",searchHeader:".search-header",searchHeaderInput:".search-header__input",searchHeaderSubmit:".search-header__submit",mobileNavWrapper:".mobile-nav-wrapper"},s={focus:"search--focus",mobileNavIsOpen:"js-menu--is-open"};return{init:e}}(),function(){function e(e){var t=document.createElement("a");return t.ref=e,t.hostname}var t={backButton:".return-link"},i=$(t.backButton);document.referrer&&i.length&&window.history.length&&i.one("click",function(t){t.preventDefault();var i=e(document.referrer);return e(window.location.href)===i&&history.back(),!1})}(),theme.Slideshow=function(){function e(e){this.$slideshow=$(e),this.$wrapper=this.$slideshow.closest("."+o.wrapper),this.$pause=this.$wrapper.find("."+o.pauseButton),this.settings={accessibility:!0,arrows:!1,dots:!0,fade:!0,draggable:!0,touchThreshold:20,autoplay:this.$slideshow.data("autoplay"),autoplaySpeed:this.$slideshow.data("speed")},this.$slideshow.on("beforeChange",i.bind(this)),this.$slideshow.on("init",t.bind(this)),this.$slideshow.slick(this.settings),this.$pause.on("click",this.togglePause.bind(this))}function t(e,t){var i=t.$slider,n=t.$list,a=this.$wrapper,s=this.settings.autoplay;n.removeAttr("aria-live"),a.on("focusin",function(e){a.has(e.target).length&&(n.attr("aria-live","polite"),s&&i.slick("slickPause"))}),a.on("focusout",function(e){if(a.has(e.target).length&&(n.removeAttr("aria-live"),s)){if($(e.target).hasClass(o.closeVideoBtn))return;i.slick("slickPlay")}}),t.$dots&&t.$dots.on("keydown",function(e){37===e.which&&i.slick("slickPrev"),39===e.which&&i.slick("slickNext"),37!==e.which&&39!==e.which||t.$dots.find(".slick-active button").focus()})}function i(e,t,i,a){var s=t.$slider,r=s.find("."+o.currentSlide),c=s.find('.slideshow__slide[data-slick-index="'+a+'"]');if(n(r)){var d=r.find("."+o.video),l=d.attr("id");theme.SlideshowVideo.pauseVideo(l),d.attr("tabindex","-1")}if(n(c)){var u=c.find("."+o.video),h=u.attr("id");u.hasClass(o.videoBackground)?theme.SlideshowVideo.playVideo(h):u.attr("tabindex","0")}}function n(e){return e.find("."+o.video).length}function a(e){return"#Slideshow-"+e.data("id")}this.$slideshow=null;var o={wrapper:"slideshow-wrapper",slideshow:"slideshow",currentSlide:"slick-current",video:"slideshow__video",videoBackground:"slideshow__video--background",closeVideoBtn:"slideshow__video-control--close",pauseButton:"slideshow__pause",isPaused:"is-paused"};return e.prototype.togglePause=function(){var e=a(this.$pause);this.$pause.hasClass(o.isPaused)?(this.$pause.removeClass(o.isPaused),$(e).slick("slickPlay")):(this.$pause.addClass(o.isPaused),$(e).slick("slickPause"))},e}(),theme.SlideshowVideo=function(){function e(e){if(e.length&&(x[e.attr("id")]={id:e.attr("id"),videoId:e.data("id"),type:e.data("type"),status:"chrome"===e.data("type")?"closed":"background",videoSelector:e.attr("id"),$parentSlide:e.closest("."+E.slide),$parentSlideshowWrapper:e.closest("."+E.slideshowWrapper),controls:"background"===e.data("type")?0:1,slideshow:e.data("slideshow")},!P)){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}}function t(e){(N||I)&&e&&"function"==typeof V[e].playVideo&&o(e)}function i(e){V[e]&&"function"==typeof V[e].pauseVideo&&V[e].pauseVideo()}function n(){for(var e in x)if(x.hasOwnProperty(e)){var t=$.extend({},D,x[e]);t.playerVars.controls=t.controls,V[e]=new YT.Player(e,t)}k(),P=!0}function a(e){if(P){var t=$.extend({},D,x[e]);t.playerVars.controls=t.controls,V[e]=new YT.Player(e,t),k()}}function o(e,t){var i=x[e],n=V[e],a=x[e].$parentSlide;if(I)p(i);else if(t||S&&T)return a.removeClass(E.loading),p(i),void n.playVideo();S||r(n,a)}function s(e){var t=e?E.supportsAutoplay:E.supportsNoAutoplay;$(document.documentElement).addClass(t),e||(I=!0),S=!0}function r(e,t){e.playVideo(),c(e).then(function(){s(!0)}).fail(function(){s(!1),e.stopVideo()}).always(function(){S=!0,t.removeClass(E.loading)})}function c(e){var t=$.Deferred(),i,n;return i=setInterval(function(){e.getCurrentTime()<=0||(T=!0,clearInterval(i),clearTimeout(n),t.resolve())},500),n=setTimeout(function(){clearInterval(i),t.reject()},4e3),t}function d(){N||($(window).width()<750?I=!0:window.mobileCheck()&&(I=!0),I&&s(!1),N=!0)}function l(e){e.target.setPlaybackQuality("hd1080");var t=f(e);switch(d(),$("#"+t.id).attr("tabindex","-1"),w(),t.type){case"background-chrome":case"background":e.target.mute(),t.$parentSlide.hasClass(E.currentSlide)&&o(t.id);break}t.$parentSlide.addClass(E.loaded)}function u(e){var t=f(e);switch(e.data){case 0:h(t);break;case 1:p(t);break;case 2:m(t);break}}function h(e){switch(e.type){case"background":V[e.id].seekTo(0);break;case"background-chrome":V[e.id].seekTo(0),v(e.id);break;case"chrome":v(e.id);break}}function p(e){var t=e.$parentSlideshowWrapper,i=e.$parentSlide;if(i.removeClass(E.loading),"background"!==e.status){switch($("#"+e.id).attr("tabindex","0"),e.type){case"chrome":case"background-chrome":t.removeClass(E.paused).addClass(E.playing),i.removeClass(E.paused).addClass(E.playing);break}i.find("."+E.closeVideoBtn).focus()}}function m(e){var t=e.$parentSlideshowWrapper,i=e.$parentSlide;if("background-chrome"===e.type)return void v(e.id);"closed"!==e.status&&"background"!==e.type&&(t.addClass(E.paused),i.addClass(E.paused)),"chrome"===e.type&&"closed"===e.status&&(t.removeClass(E.paused),i.removeClass(E.paused)),t.removeClass(E.playing),i.removeClass(E.playing)}function v(e){var t=x[e],i=t.$parentSlideshowWrapper,n=t.$parentSlide,a=[E.pause,E.playing].join(" ");switch($("#"+t.id).attr("tabindex","-1"),t.status="closed",t.type){case"background-chrome":V[e].mute(),y(e);break;case"chrome":V[e].stopVideo(),m(t);break}i.removeClass(a),n.removeClass(a)}function f(e){return x[e.target.h.id]}function g(e){var t=x[e];switch(t.$parentSlide.addClass(E.loading),t.status="open",t.type){case"background-chrome":_(e,t),V[e].unMute(),o(e,!0);break;case"chrome":o(e,!0);break}$(document).on("keydown.videoPlayer",function(t){27===t.keyCode&&v(e)})}function w(){$("."+E.videoBackground).each(function(e,t){b($(t))})}function b(e){var t=e.closest("."+E.slide);if(!t.hasClass(E.slickClone)){var i=t.width(),n=e.width(),a=e.height();i/D.ratio<a?(n=Math.ceil(a*D.ratio),e.width(n).height(a).css({left:(i-n)/2,top:0})):(a=Math.ceil(i/D.ratio),e.width(i).height(a).css({left:0,top:(a-a)/2})),e.prepareTransition().addClass(E.loaded)}}function _(e){$("#"+e).removeAttr("style").removeClass(E.videoBackground).addClass(E.videoChrome),x[e].$parentSlideshowWrapper.removeClass(E.slideBackgroundVideo).addClass(E.playing),x[e].$parentSlide.removeClass(E.slideBackgroundVideo).addClass(E.playing),x[e].status="open"}function y(e){var t=$("#"+e).addClass(E.videoBackground).removeClass(E.videoChrome);x[e].$parentSlide.addClass(E.slideBackgroundVideo),x[e].status="background",b(t)}function k(){$(document).on("click.videoPlayer","."+E.playVideoBtn,function(e){g($(e.currentTarget).data("controls"))}),$(document).on("click.videoPlayer","."+E.closeVideoBtn,function(e){v($(e.currentTarget).data("controls"))}),$(window).on("resize.videoPlayer",$.debounce(250,function(){P&&w()}))}function C(){$(document).off(".videoPlayer"),$(window).off(".videoPlayer")}var S=!1,T=!1,N=!1,I=!1,P=!1,x={},V=[],D={ratio:16/9,playerVars:{iv_load_policy:3,modestbranding:1,autoplay:0,controls:0,showinfo:0,wmode:"opaque",branding:0,autohide:0,rel:0},events:{onReady:l,onStateChange:u}},E={playing:"video-is-playing",paused:"video-is-paused",loading:"video-is-loading",loaded:"video-is-loaded",slideshowWrapper:"slideshow-wrapper",slide:"slideshow__slide",slideBackgroundVideo:"slideshow__slide--background-video",slideDots:"slick-dots",videoChrome:"slideshow__video--chrome",videoBackground:"slideshow__video--background",playVideoBtn:"slideshow__video-control--play",closeVideoBtn:"slideshow__video-control--close",currentSlide:"slick-current",slickClone:"slick-cloned",supportsAutoplay:"autoplay",supportsNoAutoplay:"no-autoplay"};return{init:e,loadVideos:n,loadVideo:a,playVideo:t,pauseVideo:i,removeEvents:C}}(),function(){var e=$("#BlogTagFilter");e.length&&e.on("change",function(){location.href=$(this).val()})}(),window.theme=theme||{},theme.customerTemplates=function(){function e(){$("#RecoverPassword").on("click",function(e){e.preventDefault(),t()}),$("#HideRecoverPasswordLink").on("click",function(e){e.preventDefault(),t()})}function t(){$("#RecoverPasswordForm").toggleClass("hide"),$("#CustomerLoginForm").toggleClass("hide")}function i(){$(".reset-password-success").length&&$("#ResetSuccess").removeClass("hide")}function n(){var e=$("#AddressNewForm");e.length&&(Shopify&&new Shopify.CountryProvinceSelector("AddressCountryNew","AddressProvinceNew",{hideElement:"AddressProvinceContainerNew"}),$(".address-country-option").each(function(){var e=$(this).data("form-id"),t="AddressCountry_"+e,i="AddressProvince_"+e,n="AddressProvinceContainer_"+e;new Shopify.CountryProvinceSelector(t,i,{hideElement:n})}),$(".address-new-toggle").on("click",function(){e.toggleClass("hide")}),$(".address-edit-toggle").on("click",function(){var e=$(this).data("form-id");$("#EditAddress_"+e).toggleClass("hide")}),$(".address-delete").on("click",function(){var e=$(this),t=e.data("form-id"),i=e.data("confirm-message");confirm(i||"Are you sure you wish to delete this address?")&&Shopify.postLink("/account/addresses/"+t,{parameters:{_method:"delete"}})}))}function a(){"#recover"===window.location.hash&&t()}return{init:function(){a(),e(),i(),n()}}}(),window.theme=window.theme||{},theme.Cart=function(){function e(e){this.$container=$(e),this.$edit=$(t.edit,this.$container),this.cookiesEnabled()||this.$container.addClass(i.cartNoCookies),this.$edit.on("click",this._onEditClick.bind(this))}var t={edit:".js-edit-toggle"},i={showClass:"cart__update--show",showEditClass:"cart__edit--active",cartNoCookies:"cart--no-cookies"};return e.prototype=_.assignIn({},e.prototype,{onUnload:function(){this.$edit.off("click",this._onEditClick)},_onEditClick:function(e){var t=$(e.target),n=$("."+t.data("target"));t.toggleClass(i.showEditClass),n.toggleClass(i.showClass)},cookiesEnabled:function(){var e=navigator.cookieEnabled;return e||(document.cookie="testcookie",e=-1!==document.cookie.indexOf("testcookie")),e}}),e}(),window.theme=window.theme||{},theme.Filters=function(){function e(e){var t=this.$container=$(e);this.$filterSelect=$(i.filterSelection,t),this.$sortSelect=$(i.sortSelection,t),this.$selects=$(i.filterSelection,t).add($(i.sortSelection,t)),this.defaultSort=this._getDefaultSortValue(),this._resizeSelect(this.$selects),this.$selects.removeClass("hidden"),this.$filterSelect.on("change",this._onFilterChange.bind(this)),this.$sortSelect.on("change",this._onSortChange.bind(this))}var t={SORT_BY:"sort_by"},i={filterSelection:"#SortTags",sortSelection:"#SortBy",defaultSort:"#DefaultSortBy"};return e.prototype=_.assignIn({},e.prototype,{_onSortChange:function(e){var t=this._sortValue();t.length?window.location.search=t:window.location.href=window.location.href.replace(window.location.search,""),this._resizeSelect($(e.target))},_onFilterChange:function(e){var i=this._getFilterValue(),n=document.location.search.replace(/\?(page=\w+)?&?/,"");Shopify.designMode&&(n=n.match("sort_by")?n.substring(n.indexOf("sort_by")):""),n.match(t.SORT_BY)&&(n="?"+n),document.location.href=i+n,this._resizeSelect($(e.target))},_getFilterValue:function(){return this.$filterSelect.val()},_getSortValue:function(){return this.$sortSelect.val()||this.defaultSort},_getDefaultSortValue:function(){return $(i.defaultSort,this.$container).val()},_sortValue:function(){var e=this._getSortValue(),i="";return e!==this.defaultSort&&(i=t.SORT_BY+"="+e),i},_resizeSelect:function(e){e.each(function(){var e=$(this),t=10,i=e.find("option:selected").text(),n=$("<span>").html(i);n.appendTo("body");var a=n.width();n.remove(),e.width(a+10)})},onUnload:function(){this.$filterSelect.off("change",this._onFilterChange),this.$sortSelect.off("change",this._onSortChange)}}),e}(),window.theme=window.theme||{},theme.HeaderSection=function(){function e(){theme.Header.init(),theme.MobileNav.init(),theme.Search.init()}return e.prototype=_.assignIn({},e.prototype,{onUnload:function(){theme.Header.unload()}}),e}(),theme.Maps=function(){function e(e){this.$container=$(e),this.$map=this.$container.find(r.map),this.key=this.$map.data("api-key"),void 0!==this.key&&("loaded"===a?this.createMap():(o.push(this),"loading"!==a&&(a="loading",void 0===window.google&&$.getScript("https://maps.googleapis.com/maps/api/js?key="+this.key).then(function(){a="loaded",t()}))))}function t(){$.each(o,function(e,t){t.createMap()})}function i(e){var t=$.Deferred(),i=new google.maps.Geocoder,n=e.data("address-setting");return i.geocode({address:n},function(e,i){i!==google.maps.GeocoderStatus.OK&&t.reject(i),t.resolve(e)}),t}var n={zoom:14},a=null,o=[],s={addressNoResults:theme.strings.addressNoResults,addressQueryLimit:theme.strings.addressQueryLimit,addressError:theme.strings.addressError,authError:theme.strings.authError},r={section:'[data-section-type="map"]',map:"[data-map]",mapOverlay:"[data-map-overlay]"},c={mapError:"map-section--load-error",errorMsg:"map-section__error errors text-center"};return window.gm_authFailure=function(){Shopify.designMode&&($(r.section).addClass(c.mapError),$(r.map).remove(),$(r.mapOverlay).after('<div class="'+c.errorMsg+'">'+theme.strings.authError+"</div>"))},e.prototype=_.assignIn({},e.prototype,{createMap:function(){var e=this.$map;return i(e).then(function(t){var i={zoom:n.zoom,center:t[0].geometry.location,draggable:!1,clickableIcons:!1,scrollwheel:!1,disableDoubleClickZoom:!0,disableDefaultUI:!0},a=this.map=new google.maps.Map(e[0],i),o=this.center=a.getCenter(),s=new google.maps.Marker({map:a,position:a.getCenter()});google.maps.event.addDomListener(window,"resize",$.debounce(250,function(){google.maps.event.trigger(a,"resize"),a.setCenter(o),e.removeAttr("style")}))}.bind(this)).fail(function(){var t;switch(status){case"ZERO_RESULTS":t=s.addressNoResults;break;case"OVER_QUERY_LIMIT":t=s.addressQueryLimit;break;case"REQUEST_DENIED":t=s.authError;break;default:t=s.addressError;break}Shopify.designMode&&e.parent().addClass(c.mapError).html('<div class="'+c.errorMsg+'">'+t+"</div>")})},onUnload:function(){0!==this.$map.length&&google.maps.event.clearListeners(this.map,"resize")}}),e}(),theme.Product=function(){function e(e){var t=this.$container=$(e),i=t.attr("data-section-id");this.settings={mediaQueryMediumUp:"screen and (min-width: 750px)",mediaQuerySmall:"screen and (max-width: 749px)",bpSmall:!1,enableHistoryState:t.data("enable-history-state")||!1,namespace:".slideshow-"+i,sectionId:i,sliderActive:!1,zoomEnabled:!1},this.selectors={addToCart:"#AddToCart-"+i,addToCartText:"#AddToCartText-"+i,comparePrice:"#ComparePrice-"+i,originalPrice:"#ProductPrice-"+i,SKU:".variant-sku",originalPriceWrapper:".product-price__price-"+i,originalSelectorId:"#ProductSelect-"+i,productImageWraps:".product-single__photo",productPrices:".product-single__price-"+i,productThumbImages:".product-single__thumbnail--"+i,productThumbs:".product-single__thumbnails-"+i,saleClasses:"product-price__sale product-price__sale--single",saleLabel:".product-price__sale-label-"+i,singleOptionSelector:".single-option-selector-"+i},$("#ProductJson-"+i).html()&&(this.productSingleObject=JSON.parse(document.getElementById("ProductJson-"+i).innerHTML),this.settings.zoomEnabled=$(this.selectors.productImageWraps).hasClass("js-zoom-enabled"),this._initBreakpoints(),this._stringOverrides(),this._initVariants(),this._initImageSwitch(),this._setActiveThumbnail())}function t(e){var t=$(e).data("zoom");$(e).zoom({url:t})}function i(e){$(e).trigger("zoom.destroy")}return e.prototype=_.assignIn({},e.prototype,{_stringOverrides:function(){theme.productStrings=theme.productStrings||{},$.extend(theme.strings,theme.productStrings)},_initBreakpoints:function(){var e=this;enquire.register(this.settings.mediaQuerySmall,{match:function(){$(e.selectors.productThumbImages).length>3&&e._initThumbnailSlider(),e.settings.zoomEnabled&&$(e.selectors.productImageWraps).each(function(){i(this)}),e.settings.bpSmall=!0},unmatch:function(){e.settings.sliderActive&&e._destroyThumbnailSlider(),e.settings.bpSmall=!1}}),enquire.register(this.settings.mediaQueryMediumUp,{match:function(){e.settings.zoomEnabled&&$(e.selectors.productImageWraps).each(function(){t(this)})}})},_initVariants:function(){var e={$container:this.$container,enableHistoryState:this.$container.data("enable-history-state")||!1,singleOptionSelector:this.selectors.singleOptionSelector,originalSelectorId:this.selectors.originalSelectorId,product:this.productSingleObject};this.variants=new slate.Variants(e),this.$container.on("variantChange"+this.settings.namespace,this._updateAddToCart.bind(this)),this.$container.on("variantImageChange"+this.settings.namespace,this._updateImages.bind(this)),this.$container.on("variantPriceChange"+this.settings.namespace,this._updatePrice.bind(this)),this.$container.on("variantSKUChange"+this.settings.namespace,this._updateSKU.bind(this))},_initImageSwitch:function(){if($(this.selectors.productThumbImages).length){var e=this
;$(this.selectors.productThumbImages).on("click",function(t){t.preventDefault();var i=$(this),n=i.data("thumbnail-id");e._switchImage(n),e._setActiveThumbnail(n)})}},_setActiveThumbnail:function(e){var t="active-thumb";void 0===e&&(e=$(this.selectors.productImageWraps+":not('.hide')").data("image-id"));var i=$(this.selectors.productThumbImages+"[data-thumbnail-id='"+e+"']");$(this.selectors.productThumbImages).removeClass(t),i.addClass(t)},_switchImage:function(e){var t=$(this.selectors.productImageWraps+"[data-image-id='"+e+"']",this.$container),i=$(this.selectors.productImageWraps+":not([data-image-id='"+e+"'])",this.$container);t.removeClass("hide"),i.addClass("hide")},_initThumbnailSlider:function(){var e={slidesToShow:4,slidesToScroll:3,infinite:!1,prevArrow:".thumbnails-slider__prev--"+this.settings.sectionId,nextArrow:".thumbnails-slider__next--"+this.settings.sectionId,responsive:[{breakpoint:321,settings:{slidesToShow:3}}]};$(this.selectors.productThumbs).slick(e),this.settings.sliderActive=!0},_destroyThumbnailSlider:function(){$(this.selectors.productThumbs).slick("unslick"),this.settings.sliderActive=!1},_updateAddToCart:function(e){var t=e.variant;t?($(this.selectors.productPrices).removeClass("visibility-hidden").attr("aria-hidden","true"),t.available?($(this.selectors.addToCart).prop("disabled",!1),$(this.selectors.addToCartText).text(theme.strings.addToCart)):($(this.selectors.addToCart).prop("disabled",!0),$(this.selectors.addToCartText).text(theme.strings.soldOut))):($(this.selectors.addToCart).prop("disabled",!0),$(this.selectors.addToCartText).text(theme.strings.unavailable),$(this.selectors.productPrices).addClass("visibility-hidden").attr("aria-hidden","false"))},_updateImages:function(e){var t=e.variant,i=t.featured_image.id;this._switchImage(i),this._setActiveThumbnail(i)},_updatePrice:function(e){var t=e.variant;$(this.selectors.originalPrice).html(theme.Currency.formatMoney(t.price,theme.moneyFormat)),t.compare_at_price>t.price?($(this.selectors.comparePrice).html(theme.Currency.formatMoney(t.compare_at_price,theme.moneyFormat)).removeClass("hide"),$(this.selectors.originalPriceWrapper).addClass(this.selectors.saleClasses),$(this.selectors.saleLabel).removeClass("hide")):($(this.selectors.comparePrice).addClass("hide"),$(this.selectors.saleLabel).addClass("hide"),$(this.selectors.originalPriceWrapper).removeClass(this.selectors.saleClasses))},_updateSKU:function(e){var t=e.variant;$(this.selectors.SKU).html(t.sku)},onUnload:function(){this.$container.off(this.settings.namespace)}}),e}(),theme.Quotes=function(){function e(e){function n(e,t){d&&(e.slick("unslick"),d=!1),e.slick(t),d=!0}var a=this.$container=$(e),o=a.attr("data-section-id"),s=this.wrapper=".quotes-wrapper",r=this.slider="#Quotes-"+o,c=$(r,s),d=!1,l=$.extend({},i,{slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0});t.slideCount=c.data("count"),t.slideCount<i.slidesToShow&&(i.slidesToShow=t.slideCount,i.slidesToScroll=t.slideCount),c.on("init",this.a11y.bind(this)),enquire.register(t.mediaQuerySmall,{match:function(){n(c,l)}}),enquire.register(t.mediaQueryMediumUp,{match:function(){n(c,i)}})}var t={mediaQuerySmall:"screen and (max-width: 749px)",mediaQueryMediumUp:"screen and (min-width: 750px)",slideCount:0},i={accessibility:!0,arrows:!1,dots:!0,autoplay:!1,touchThreshold:20,slidesToShow:3,slidesToScroll:3};return e.prototype=_.assignIn({},e.prototype,{onUnload:function(){enquire.unregister(t.mediaQuerySmall),enquire.unregister(t.mediaQueryMediumUp),$(this.slider,this.wrapper).slick("unslick")},onBlockSelect:function(e){var t=$(".quotes-slide--"+e.detail.blockId+":not(.slick-cloned)"),i=t.data("slick-index");$(this.slider,this.wrapper).slick("slickGoTo",i)},a11y:function(e,t){var i=t.$list,n=$(this.wrapper,this.$container);i.removeAttr("aria-live"),n.on("focusin",function(e){n.has(e.target).length&&i.attr("aria-live","polite")}),n.on("focusout",function(e){n.has(e.target).length&&i.removeAttr("aria-live")})}}),e}(),theme.slideshows={},theme.SlideshowSection=function(){function e(e){var t=this.$container=$(e),i=t.attr("data-section-id"),n=this.slideshow="#Slideshow-"+i;$(".slideshow__video",n).each(function(){var e=$(this);theme.SlideshowVideo.init(e),theme.SlideshowVideo.loadVideo(e.attr("id"))}),theme.slideshows[n]=new theme.Slideshow(n)}return e}(),theme.SlideshowSection.prototype=_.assignIn({},theme.SlideshowSection.prototype,{onUnload:function(){delete theme.slideshows[this.slideshow]},onBlockSelect:function(e){var t=$(this.slideshow),i=$(".slideshow__slide--"+e.detail.blockId+":not(.slick-cloned)"),n=i.data("slick-index");t.slick("slickGoTo",n).slick("slickPause")},onBlockDeselect:function(){$(this.slideshow).slick("slickPlay")}}),$(document).ready(function(){var e=new theme.Sections;e.register("cart-template",theme.Cart),e.register("product",theme.Product),e.register("collection-template",theme.Filters),e.register("product-template",theme.Product),e.register("header-section",theme.HeaderSection),e.register("map",theme.Maps),e.register("slideshow-section",theme.SlideshowSection),e.register("quotes",theme.Quotes)}),theme.init=function(){theme.customerTemplates.init(),slate.rte.wrapTable({$tables:$(".rte table,.custom__item-inner--html table"),tableWrapperClass:"scrollable-wrapper"}),slate.rte.wrapIframe({$iframes:$('.rte iframe[src*="youtube.com/embed"],.rte iframe[src*="player.vimeo"],.custom__item-inner--html iframe[src*="youtube.com/embed"],.custom__item-inner--html iframe[src*="player.vimeo"]'),iframeWrapperClass:"video-wrapper"}),slate.a11y.pageLinkFocus($(window.location.hash)),$(".in-page-link").on("click",function(e){slate.a11y.pageLinkFocus($(e.currentTarget.hash))}),$('a[href="#"]').on("click",function(e){e.preventDefault()})},$(theme.init);