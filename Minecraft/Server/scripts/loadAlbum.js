var source;

function load() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            handleRespond(xhr.responseText);
        }
    }
    xhr.open("GET", "https://stehsaer.github.io/Minecraft/Server/images/album/album.json" + "?timestamp=" + new Date().getTime(),true);
    xhr.send(null);
}

function handleRespond(dat) {
    var obj = JSON.parse(dat);
    if (window.location.href.split('=')[1] == undefined) {
        var str = "<div id='title'><div id='title_content'>服务器相册</div>";
    }
    else {
        var str = "<img id='backButton' src='../../globalImages/loading_small.gif' onclick='back()' data-original='../../globalImages/back.png' /><div id='title'><div id='title_content'>服务器相册</div>";
        source = window.location.href.split('=')[1];
    }
    for (var i = obj.length - 1; i >= 0; i--) {
        str += "</div><div class='dateContainer'><div class='dateIndicator'>";
        str += obj[i].year + "-"; str += obj[i].month + "-"; str += obj[i].date;
        str += "</div>";
        for (var j = 0; j < obj[i].image.length; j++) {
            str += "<img class='imageBox' src='../../globalImages/loading.gif' data-original='images/album/";
            str += obj[i].image[j];
            str += "' />";
        }
        str += "</div>";
    }
    $("body").html(str);
    reAttr();
}

$(window).resize(function () {
    var width = this.innerWidth;
    var height = this.innerHeight;
    if (width < height) {
        $(".dateContainer").attr("style", "margin-left:2.5%;margin-right:2.5%;width:95%");
        $(".dateIndicator").attr("style", "font-size:70px;line-height:100px");
        $("#backButton").hide(500);
    }
    else {
        $(".dateContainer").attr("style", "margin-left:20%;margin-right:20%;width:60%;");
        $(".dateIndicator").attr("style", "font-size:30px;line-height:40px");
        $("#backButton").show(500);
    }
});

function reAttr() {
    $(function () {
        $("img").lazyload({ effect: "fadeIn", failureLimit: 10 });
    });
    var width = this.innerWidth;
    var height = this.innerHeight;
    if (width < height) {
        $(".dateContainer").attr("style", "margin-left:2.5%;margin-right:2.5%;width:95%");
        $(".dateIndicator").attr("style", "font-size:70px;line-height:100px");
        $("#backButton").hide(500);
    }
    else {
        $(".dateContainer").attr("style", "margin-left:20%;margin-right:20%;width:60%;");
        $(".dateIndicator").attr("style", "font-size:30px;line-height:40px");
        $("#backButton").show(500);
    }
}

function back() {
    if (window.location.href.split('=')[1] != undefined) { window.location.href = source; }
}