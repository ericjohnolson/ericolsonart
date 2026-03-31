var allResults = [];
var feedHtml = "";
var isDone = false;

$(document).ready(function () {

    setTimeout(function () {
        getResults('https://api.instagram.com/v1/users/self/media/recent/?count=250&access_token=7004072155.4de9a7b.a054b8cd9ba74f92b82671bec9dcec76');
    }, 500);
});

function getResults(url) {
    $.ajax({
        url: url,
        type: 'get',
        async: false,
        cache: false,
        success: function (results) {
            if (results) {

                allResults = allResults.concat(results.data);

                if (results.pagination.next_url) {
                    getResults(results.pagination.next_url);
                }

                if (isDone == false) {
                    LoadResults(allResults);
                    isDone = true;
                }
            }
        }
    });
}

function LoadResults(data) {
    var notifications = data.filter(function (item) {
        return item.tags.indexOf('ot_notification') >= 0;
    });

    $.each(notifications, function (i, notify) {
        feedHtml = feedHtml + AppendNotify(notify);

        var scoreNumber = notify.tags.find(function (tag) {
            return tag.startsWith('ot_score');
        });

        var responses = data.filter(function (item) {
            return item.tags.indexOf(scoreNumber) >= 0 && item.tags.indexOf('ot_notification') < 0;
        });

        var responsesHtml = "";
        $.each(responses, function (i, response) {
            if (response.carousel_media) {
                $.each(response.carousel_media, function (j, media) {
                    responsesHtml = responsesHtml + AppendMedia(response, media);
                });
            }
            else {
                responsesHtml = responsesHtml + AppendMedia(response, response);
            }
        });

        feedHtml = feedHtml + '<div class="row center"><h4>Responses to Notification</h4></div><div class="row pad-bottom">' +
            responsesHtml + '<p class="clear"></p></div>';

    });

    $('#loading').hide();
    $('#feed').append(feedHtml);
}


function AppendNotify(notify) {
    var notifyImages = "";
    $.each(notify.carousel_media, function (j, media) {
        notifyImages = notifyImages + '<a href="' + notify.link +
            '" target="_blank"><img class="thumb" src="' + media.images.low_resolution.url +
            '" /></a>';
    });
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(notify.created_time);
    var options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };

    return '<div class="row center"><h4>Notification on ' + d.toLocaleDateString("en-US", options) +
        '</h4></div><div class="row pad-top notify-row">' +
        notifyImages +
        '</div><div class="row"><p class="clear center pad-bottom" style="margin-top:20px;">' + notify.caption.text + '</p></div>';
}

function AppendMedia(response, media) {
    if (media.videos) {
        return '<div class="col-sm-4"><video class="response" width="275" height="275" controls>' +
            '<source src= "' + media.videos.standard_resolution.url + '" type= "video/mp4" >Your browser does not support the video tag.</video></div>';
    }
    if (media.images) {
        return '<div class="col-sm-4"><div class="thumb"><a href="' + response.link +
            '" target="_blank"><img class="response" src="' + media.images.low_resolution.url +
            '" /></a></div></div>';
    }
}

