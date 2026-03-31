
function setDateTime(date, time) {
    var index = time.indexOf(":"); 
    
    var hours = time.substring(0, index);
    var minutes = time.substring(index + 1, index + 3);
    var seconds = time.substring(index + 4, index + 6);
 
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);

    return date;
}

function getDateOffset() {
    var date = new Date();

    date.setHours(date.getHours() + 3);
    date.setMinutes(date.getMinutes() - 10);

    return date;
}

function getMsTillNext(timeTillNext) {
    var now = new Date();
    var next = setDateTime(new Date(), timeTillNext);
    return next - now;
}