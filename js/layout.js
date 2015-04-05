function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

(function (window) {
	var events = {};

	events.record = function (eventName, data) {
		data = data || {};
        mixpanel.track(eventName, data);
    	ga('send', {
		  'hitType': 'event',
		  'eventCategory': eventName,
		  'eventAction': 'event actioned'
		});
    };

    window.eventsWrapper = events;
}(window));

$('.download-billows').click(function() {
	window.eventsWrapper.record('Downloaded Billows Template');
});

$('.download-cirrus').click(function() {
	window.eventsWrapper.record('Downloaded Cirrus Template');
});

$('.download-nimbus').click(function() {
	window.eventsWrapper.record('Downloaded Nimbus Template');
});

$('.sign-up').click(function() {
	window.eventsWrapper.record('Clicked Sign up');
});

$('.blog-newsletter').submit(function() {
	window.eventsWrapper.record('Signed up for blog newsletter');
});

$('.blog-newsletter').submit(function() {
  window.eventsWrapper.record('Signed up for blog newsletter');
});

$('.theme-demo').click(function() {
  window.eventsWrapper.record('Viewed demo of Jekyll Theme', {
    "theme": $(this).attr('title')
  });
});

$('.theme-download').click(function() {
  window.eventsWrapper.record('Downloaded Jekyll Theme', {
    "theme": $(this).attr('title')
  });
});

$('.theme-fork').click(function() {
  window.eventsWrapper.record('Forked Jekyll Theme', {
    "theme": $(this).attr('title')
  });
});

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

$(document).ready(function () {
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

	prettyPrint();

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
			height: '720',
			width: '1280',
			videoId: this._videoId,
			playerVars: {
				autoplay: 1,
				modestbranding: 1
			}
		});

		var self = this,
			boundClick = function () {
				self.closePopup()
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
		if(this.$el.hasClass("open")) {
			this.closePopup();
		} else {
			this.openPopup();
		}
		return false;
	};

    function checkESC(e) {
        if (e.keyCode == 27) {
        	if (Player.currentOpen && Player.currentOpen.initialised) {
        		Player.currentOpen.closePopup();
        	}
        }
    };

	window.onYouTubeIframeAPIReady = function () {
		Player.youtubeLoaded = true;
		for (var videoId in Player.players) {
			Player.players[videoId].init();
		}
	};

	Player.getPlayer = function(videoId) {
		var player = Player.players[videoId];
		if (!player) {
			player = new Player(videoId);
		}
		return player;
	}

	$("[data-video-id]").click(function (e) {
		Player.getPlayer($(this).data("videoId")).openPopup();
		return false;
	});

    document.onkeyup = checkESC;

    var apiScript = document.createElement('script');
	apiScript.src = "https://www.youtube.com/iframe_api";
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(apiScript,s);
});
