function debounce(fn, delay) {
	var timer = null;

	return function () {
		var context = this,
			args = arguments;

		clearTimeout(timer);

		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
}

/*! js-cookie v2.0.3 | MIT */
!function(a){if("function"==typeof define&&define.amd)define(a);else if("object"==typeof exports)module.exports=a();else{var b=window.Cookies,c=window.Cookies=a(window.jQuery);c.noConflict=function(){return window.Cookies=b,c}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(i){}return e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape),document.cookie=[b,"=",e,f.expires&&"; expires="+f.expires.toUTCString(),f.path&&"; path="+f.path,f.domain&&"; domain="+f.domain,f.secure?"; secure":""].join("")}b||(g={});for(var j=document.cookie?document.cookie.split("; "):[],k=/(%[0-9A-Z]{2})+/g,l=0;l<j.length;l++){var m=j[l].split("="),n=m[0].replace(k,decodeURIComponent),o=m.slice(1).join("=");'"'===o.charAt(0)&&(o=o.slice(1,-1));try{if(o=c&&c(o,n)||o.replace(k,decodeURIComponent),this.json)try{o=JSON.parse(o)}catch(i){}if(b===n){g=o;break}b||(g[n]=o)}catch(i){}}return g}return d.get=d.set=d,d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b()});

function createUUID() {
	// http://www.ietf.org/rfc/rfc4122.txt
	var s = [],
		hexDigits = "0123456789abcdef";

	for (var i = 0; i < 36; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}

	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";

	return s.join("");
}

function recordKeenEvent(eventName, data) {
	data = data || {};
	var userUUID = Cookies.get("uuid_metrics");

	if (userUUID === undefined) {
		userUUID = createUUID();
		var cookieDomain = "cloudcannon.com";

		if (window.location.hostname == "localhost") {
			cookieDomain = null;
		}

		Cookies.set("uuid_metrics", userUUID, {domain: cookieDomain});
	}

	var eventData = {
		uuid: userUUID,
		ip_address: "${keen.ip}",
		user_agent: "${keen.user_agent}",
		page_url: window.location.href,
		keen: {
			addons: [
				{
					name: "keen:ip_to_geo",
					input: {ip: "ip_address"},
					output: "ip_geo_info"
				},
				{
					name: "keen:ua_parser",
					input: {ua_string: "user_agent"},
					output: "parsed_user_agent"
				},
				{
					name: "keen:url_parser",
					input: {url: "page_url"},
					output: "parsed_page_url"
				}
			]
		}
	};

	if (window.user_id !== undefined) {
		eventData.user_id = window.user_id;
	}

	for (var key in data) {
		eventData[key] = data[key];
	}

	if (window.keen_client) {
		window.keen_client.addEvent(eventName, eventData, function () {});
	}
}


(function (window) {
	window.eventsWrapper = {
		record: function (eventName, data) {
			data = data || {};
			recordKeenEvent(eventName, data);
			ga("send", {
				hitType: "event",
				eventCategory: eventName,
				eventAction: "event actioned"
			});
		}
	};
}(window));

$(".download-billows").click(function () {
	window.eventsWrapper.record("Downloaded Billows Template");
});

$(".download-cirrus").click(function () {
	window.eventsWrapper.record("Downloaded Cirrus Template");
});

$(".download-nimbus").click(function () {
	window.eventsWrapper.record("Downloaded Nimbus Template");
});

$(".sign-up").click(function () {
	window.eventsWrapper.record("Clicked Sign up");
});

$(".blog-newsletter").submit(function () {
	window.eventsWrapper.record("Signed up for blog newsletter");
});

$(".blog-newsletter").submit(function () {
	window.eventsWrapper.record("Signed up for blog newsletter");
});

$(".theme-demo").click(function () {
	window.eventsWrapper.record("Viewed demo of Jekyll Theme", {"theme": $(this).attr("title")});
});

$(".radio-selector input").change(function () {
	var value = $(".radio-selector input:checked").val();
	$(".main-plans").toggleClass("annual-pricing", value === "annually");
	$(".seat-information").hide();
	$(".seat-information.annual-price").toggle(value === "annually");
	$(".seat-information.monthly-price").toggle(value !== "annually");
});

(function () {
	var lastTime = 0,
		vendors = ["webkit", "moz"];

	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+"RequestAnimationFrame"];
		window.cancelAnimationFrame = window[vendors[x]+"CancelAnimationFrame"] || window[vendors[x]+"CancelRequestAnimationFrame"];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime(),
				timeToCall = Math.max(0, 16 - (currTime - lastTime)),
				id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);

			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
}());

$(document).ready(function () {
	if (jQuery().twentytwenty) {
		$(".before-after-slider").each(function( index ) {
			$(this).twentytwenty();
		});
	}
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 600);
				return false;
			}
		}
	});

	$(".slideshow").each(function () {
		var $el = $(this),
			current = $el.find(".slide").first();

		(function iterate() {
			var next = current.next(".slide");

			if (next.length === 0) {
				next = $el.find(".slide").removeClass("visible").first();

				return setTimeout(function () {
					current = next.addClass("visible");
					setTimeout(iterate, 10000);
				}, 100);
			}
			current = next.addClass("visible");
			setTimeout(iterate, 10000);
		})();
	});

	var AFFIX_TOP_LIMIT = 300,
		AFFIX_OFFSET = 49,
		$menu = $("#menu"),
		$btn = $("#menu-toggle");

	$("#menu-toggle").on("click", function () {
		$menu.toggleClass("open");
		return false;
	});

	var Player = function (videoId) {
		this._videoId = videoId;
		this._elId = "player" + videoId;
		this.initialised = false;

		Player.players[videoId] = this;

		if (Player.youtubeLoaded) {
			this.init();
		}
	};

	Player.players = {};
	Player.youtubeLoaded = false;
	Player.currentOpen = null;

	Player.prototype.init = function () {
		if (this.initialised) {
			return;
		}

		this.initialised = true;
		this.$el = $('<div class="video-dialog"><a class="video-dialog-close">&times;</a><div id="' + this._elId + '"></div></div>').appendTo("body");
		this.player = new YT.Player(this._elId, {
			height: "720",
			width: "1280",
			videoId: this._videoId,
			playerVars: {
				autoplay: 1,
				modestbranding: 1
			}
		});

		var self = this,
			boundClick = function () {
				self.closePopup();
			};

		this.$el.click(boundClick);
		this.$el.find(".video-dialog-close").click(boundClick);
	};

	Player.prototype.closePopup = function () {
		Player.currentOpen = null;
		this.$el.removeClass("open");
		this.player.stopVideo();
	};

	Player.prototype.openPopup = function () {
		if (Player.currentOpen) {
			Player.currentOpen.closePopup();
		}

		Player.currentOpen = this;
		this.$el.addClass("open");

		if (this.player.playVideo) {
			this.player.playVideo();
		}
	};

	Player.prototype.togglePopup = function () {
		if (this.$el.hasClass("open")) {
			this.closePopup();
		} else {
			this.openPopup();
		}

		return false;
	};

	function checkESC(e) {
		if (e.keyCode === 27 && Player.currentOpen && Player.currentOpen.initialised) {
			Player.currentOpen.closePopup();
		}
	}

	window.onYouTubeIframeAPIReady = function () {
		Player.youtubeLoaded = true;
		for (var videoId in Player.players) {
			Player.players[videoId].init();
		}
	};

	Player.getPlayer = function (videoId) {
		return Player.players[videoId] || new Player(videoId);
	};

	$("[data-video-id]").click(function (e) {
		Player.getPlayer($(this).data("videoId")).openPopup();
		return false;
	});

	$(".switcher a").click(function () {
		var type = $(this).attr("data-type");
		$(".switcher a").removeClass("active");
		$(this).addClass("active");

		if (type == "developers") {
			$(".developer-toggle").show();
			$(".marketing-toggle").hide();
		} else {
			$(".developer-toggle").hide();
			$(".marketing-toggle").show();
		}

		return false;
	});

	document.onkeyup = checkESC;

	var apiScript = document.createElement("script");
	apiScript.src = "https://www.youtube.com/iframe_api";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(apiScript, s);

	$(".video .play").click(function() {
		var $this = $(this),
			videoId = /^https:\/\/www\.youtube\.com\/watch\?v\=([a-zA-Z1-9-]+)$/.exec($this.attr('href'))[1];

		$(".cta-container").css("margin-top", "50px");

	$this.parent().parent().html('<div class="video-embed"><iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&modestbranding=1&rel=0" frameborder="0" allowfullscreen></iframe></div>');

		return false;
	});
});
