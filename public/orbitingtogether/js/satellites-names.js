$(document).ready(function () {
    $.ajax({
        url: '/js/artencounter1.csv',
        type: 'get',
        async: false,
        cache: false,
        success: function (csv) {
            var satellites = $.csv.toObjects(csv);
            var element = document.getElementById('satellite-name');
            var period = element.getAttribute('data-period');
            if (satellites) {
                new TxtType(element, satellites, period);
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        }
    });
   
});

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var sate = getSatellite(this.loopNum, this.toRotate);

    var fullTxt = "Next Satellite: " + sate.Name + " (time: " + sate.Time + " dir: " + sate.Dir + ", alt: " + sate.Alt + ", mag: " + sate.Mag + ")";

    var delta = 100 - Math.random() * 100;
    if (this.isDeleting) {
        delta = 0;
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        this.isDeleting = true;
        delta = getMsTillNext(sate.Time);
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        var foundNext = -1;
        while (foundNext < 0) {
            this.loopNum++;
            var nextsate = getSatellite(this.loopNum, this.toRotate);
            foundNext = getMsTillNext(nextsate.Time);
        }
        delta = 0;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

function getSatellite(loopNum, toRotate) {
    var i = loopNum % toRotate.length;
    return toRotate[i];

}