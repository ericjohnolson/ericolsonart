$(document).ready(function () {
    $.ajax({
        url: '/js/artencounter1.csv',
        type: 'get',
        async: false,
        cache: false,
        success: function (csv) {
            var satellites = $.csv.toObjects(csv);
            if (satellites) {
                new DataVis(satellites);
            }
        }
    });
});

var DataVis = function (toRotate) {
    this.toRotate = toRotate;
    this.loopNum = 0;
    this.tick();
    this.isDeleting = false;
};

DataVis.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var sate = this.toRotate[i];

    var now = new Date();
    var next = setDateTime(new Date(), sate.Time);
    var delta = next - now;
    if (delta < 0) {
        delta = 0;
        //$(".viz-hint").html("Skip: " + sate.Name + " " + sate.Time + " (dir: " + sate.Dir + ", alt: " + sate.Alt + ", mag: " + sate.Mag + ")");
    }
    else {
        $(".viz-hint").html("Next Satellite: " + sate.Name + " " + sate.Time + " (dir: " + sate.Dir + ", alt: " + sate.Alt + ", mag: " + sate.Mag + ")");
    }

    this.loopNum++;
    var that = this;
    setTimeout(function () {
        if (delta > 0)
        {
            showSatellite(sate.Mag);
        }
        that.tick();
    }, delta);
};

function showSatellite(magnitude) {
    var brightness = getBrightness(magnitude);
    //var percentSat = brightness + "%";
    var alpha = (brightness / 100); 

    var seconds = 4 * alpha;
 

    var timeline = new TimelineLite({
        smoothChildTiming: true, paused: true
    });
    timeline
        .to("#main-wrapper", 2, { backgroundColor: "hsla(315, 100%, 100%, 1)", ease: Power4.easeIn })
        .to("#main-wrapper", seconds, { backgroundColor: "hsla(315, 100%, 100%, 1)" })
        .to("#main-wrapper", 2, { backgroundColor: "hsla(315, 100%, 70%, 1)", ease: Power4.easeOut });
    timeline.play();
}

function getBrightness(magnitude) {
    var factors = Math.round(magnitude-3);
    var brightness = 100;
    for (i = 0; i < factors; i++) {
        brightness = brightness / 1.8;
    }
    return Math.round(brightness);
}
