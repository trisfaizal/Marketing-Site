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
	$(".cheese").smilify();

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

	$('#learn-more, #learn-more a').on("click", function () {
		$("html, body").animate({
		    scrollTop: $("#tell-me-more").offset().top
		 }, 400);
		return false;
	});

	$(".docs-nav").each(function () {
		var $affixNav = $(this),
			$container = $affixNav.parent(),
			affixNavfixed = false,
			originalClassName = this.className,
			current = null,
			$links = $affixNav.find("a");

		function getClosestHeader(top) {
			var last = $links.first();

			if (top < AFFIX_TOP_LIMIT) {
				return last;
			}

			for (var i = 0; i < $links.length; i++) {
				var $link = $links.eq(i),
					href = $link.attr("href");

				if (href.charAt(0) === "#" && href.length > 1) {
					var $anchor = $(href).first();

					if ($anchor.length > 0) {
						var offset = $anchor.offset();

						if (top < offset.top - AFFIX_OFFSET) {
							return last;
						}

						last = $link;
					}
				}
			}
			return last;
		}


		$(window).on("scroll", function(evt) {
		    var top = window.scrollY,
		    	height = $affixNav.outerHeight(),
		    	max_bottom = $container.offset().top + $container.outerHeight(),
		    	bottom = top + height + AFFIX_OFFSET;

		    if (affixNavfixed) {
		    	if (top <= AFFIX_TOP_LIMIT) {
			    	$affixNav.removeClass("fixed");
		    		$affixNav.css("top", 0);
			    	affixNavfixed = false;
		    	} else if (bottom > max_bottom) {
		    		$affixNav.css("top", (max_bottom - height) - top);
		    	} else {
		    		$affixNav.css("top", AFFIX_OFFSET);
		    	}
		    } else if (top > AFFIX_TOP_LIMIT) {
		    	$affixNav.addClass("fixed");
		    	affixNavfixed = true;
		    }

		    var $current = getClosestHeader(top);

		    if (current !== $current) {
			    $affixNav.find(".active").removeClass("active");
			    $current.addClass("active");
			    current = $current;
		    }
		}).on("resize", function () {
			$affixNav.css("max-height", $(window).height() - 70);
		}).trigger("resize");;
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
	}

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


	// Testimonial Slideshow
	var currentQuote = $(".testimonial-slider blockquote").hide().first().show(),
		testimonialImageClick = function ($el) {
			var handle = $el.data("handle"),
				quote = $el.closest(".testimonial-slider").find("blockquote[data-handle=" + handle + "]");

			$el.addClass("active")
				.siblings(".active")
				.removeClass("active");

			currentQuote.hide();
			currentQuote = quote.show();

			repositionPointer();
			resetTestimonialTimer();
		},
		testimonialTimer = null,
		resetTestimonialTimer = function () {
			if (testimonialTimer) {
				clearTimeout(testimonialTimer);
			}
			testimonialTimer = setTimeout(function () {
				testimonialTimer = null;

				var $el = $(".testimonial-images a.active").next();

				if($el.length > 0) {
					testimonialImageClick($el);
				} else {
					testimonialImageClick($(".testimonial-images a").first());
				}

			}, 15000);
		},
		repositionPointer = function () {
			var $el = $(".testimonial-images a.active");
			if ($el.length === 0) {
				return;
			}
			var offset = $el.position(),
				parentWidth = $el.parent().width(),
				reversed = offset.left > parentWidth / 2;

			currentQuote.siblings(".blockquote-arrow")
				.css("left", Math.max(0, Math.min(offset.left + (reversed ? 20 : 0), parentWidth -  40)))
				.toggleClass("reversed", reversed);
		},
		resizeQuotes = function () {
			var maxHeight = 0;
			$(".testimonial-slider blockquote").each(function () {
				maxHeight = Math.max($(this).outerHeight(), maxHeight)
			}).each(function () {
				$(this).css("margin-top", maxHeight - $(this).outerHeight() + 10);
			});

			repositionPointer();
		};

	$(".testimonial-images a").click(function () {
		testimonialImageClick($(this));
		return false;
	});
	if (currentQuote.length > 0) {
		repositionPointer();
	}
	resetTestimonialTimer();
	$(window).on("resize", debounce(resizeQuotes, 200));
	resizeQuotes();
});

var mousemoveTimeout;
$(document).on("mousemove touchmove", function (e) {
	if (mousemoveTimeout) {
	    clearTimeout(mousemoveTimeout);
	    mousemoveTimeout = null;
	}

	if ($(e.target).closest(".editable-focused").length > 0) {
		$("body").removeClass('editable-highlighted');
	} else {
	    $("body").addClass('editable-highlighted');

	    mousemoveTimeout = setTimeout(function () {
	    	$("body").removeClass('editable-highlighted');
	        mousemoveTimeout = null;
	    }, 1000);
	}
}).on("click", function (e) {
	var fakeEditable = $(e.target).closest(".editable-fake");
	if (fakeEditable.is(".editable-focused")) {
		return false;
	}

	$(".editable-focused").removeClass('editable-focused');
	if (fakeEditable.length > 0) {
		fakeEditable.addClass('editable-focused');
	}

});
