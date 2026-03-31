$(document).ready(function () {
    setTimeout(function () {
        $(".intro, .intro-bg, .intro-man, .intro-logo, .intro-date, .intro-arrow").addClass("loaded")
    }, 2);

    subscribeBuild();
    detectOperatingSystem();
    scrollMagicBuild();
});

// NOTIFICATIONS
function subscribeBuild() {

    $("#phone").inputmask({ "mask": "(999) 999-9999" });
    $("#subscribeBtn").click(function () {
        $.post("http://sms.orbitingtogether.com/Subscribers/Register", { from: $("#phone").val(), body: "TOGETHER", numMedia: 0 }, function () {
            //alert("success");
        })
        .fail(function () {
            alert("Error subscribing to the Orbiting Together Project, please email future@ericdidit.com and let us know!");
        })
        .always(function () {
            $("#subscribeModal").modal('hide');
         });

        
        
    });
}

function detectOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    $(".optinsms").attr("data-toggle", "");
    $(".optinsms").attr("data-target", "");

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        $(".optinsms").attr("href", "sms:2064601759?body=TOGETHER");
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        $(".optinsms").attr("href", "sms:2064601759?body=TOGETHER");
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        $(".optinsms").attr("href", "sms:2064601759&body=TOGETHER");
        return "iOS";
    }

    $(".optinsms").attr("data-toggle", "modal");
    $(".optinsms").attr("data-target", "#subscribeModal");
    return "unknown";
}

//SCROLL MAGIC
function scrollMagicBuild() {

    $('.square-text').viewportChecker({
        classToAdd: 'visible',
        offset: 100,
        repeat: true,
        invertBottomOffset: false,
    });
    
    var scrollController = new ScrollMagic({
        refreshInterval: 200
    });
    TweenMax.to("#main-wrapper", 0.1, {
        backgroundColor: "#020003"
    });
    // space
    var space = new TimelineMax().add([
        TweenMax.fromTo("#main-wrapper", 1, {
            backgroundColor: "#020003"
        }, {
                backgroundColor: "#001734",
                ease: Power1.easeout
            })
    ]);
    var spaceScene = new ScrollScene({
        triggerElement: ".toDarkBlue",
        duration: 600
    }).setTween(space).addTo(scrollController);
    
    // predawn
    var preDawn = new TimelineMax().add([
        TweenMax.fromTo("#main-wrapper", 1, {
            backgroundColor: "#001734"
        }, {
                backgroundColor: "#046092",
                ease: Power1.easeout
            })
    ]);
    var preDawnScene = new ScrollScene({
        triggerElement: ".toLightBlue",
        duration: 600
    }).setTween(preDawn).addTo(scrollController);
    // dawnToDay
    var dawnToDay = new TimelineMax().add([
        TweenMax.fromTo("#main-wrapper", 1, {
            backgroundColor: "#046092"
        }, {
                backgroundColor: "#a4bdba",
                ease: Power1.easeout
            })
    ]);
    var dawnToDayScene = new ScrollScene({
        triggerElement: ".toWhite",
        duration: 600
    }).setTween(dawnToDay).addTo(scrollController);
    // dayToSunset
    var dayToSunset = new TimelineMax().add([
        TweenMax.fromTo("#main-wrapper", 1, {
            backgroundColor: "#a4bdba"
        }, {
                backgroundColor: "#ff9b5e",
                ease: Power1.easeout
            })
    ]);
    var dayToSunsetScene = new ScrollScene({
        triggerElement: ".toOrange",
        duration: 600
    }).setTween(dayToSunset).addTo(scrollController);
    // footer
    var footer = new TimelineMax().add([
        TweenMax.fromTo("#main-wrapper", 1, {
            backgroundColor: "#ff9b5e"
        }, {
                backgroundColor: "#FF4E50",
                ease: Power1.easeout
            })
    ]);
    var footerScene = new ScrollScene({
        triggerElement: ".final",
        duration: 600
    }).setTween(footer).addTo(scrollController);
    
    // animated objects
    var optinScoreTween = new TimelineMax().add([
        TweenMax.fromTo(".toLightBlue .slower", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -50
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .slow", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -100
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .normal", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -300
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .normal2", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -400
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .normal3", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -500
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .fast", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -600
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .faster", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -900
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .soFast", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -1540
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .soFast2", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -1800
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .soFast3", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -2000
                },
                ease: Power1.easeout
            }),
        TweenMax.fromTo(".toLightBlue .soFast4", 2, {
            css: {
                y: 0
            }
        }, {
                css: {
                    y: -2300
                },
                ease: Power1.easeout
            })
    ]);
    var optinScoreScene = new ScrollScene({
        triggerElement: ".toLightBlue",
        duration: 1000
    }).setTween(optinScoreTween).addTo(scrollController);
}