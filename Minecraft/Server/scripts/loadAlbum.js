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
    var str ="<div id='title'><div id='title_content'>服务器相册</div>";
    for (var i = obj.length - 1; i >= 0; i--) {
        str += "</div><div class='dateContainer'><div class='dateIndicator'>";
        str += obj[i].year + "-"; str += obj[i].month + "-"; str += obj[i].date;
        str += "</div>";
        for (var j = 0; j < obj[i].image.length; j++) {
            str += "<img class='imageBox' src='images/album/";
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
    }
    else {
        $(".dateContainer").attr("style", "margin-left:20%;margin-right:20%;width:60%;");
        $(".dateIndicator").attr("style", "font-size:30px;line-height:40px");
    }
});

function reAttr() {
    var width = this.innerWidth;
    var height = this.innerHeight;
    if (width < height) {
        $(".dateContainer").attr("style", "margin-left:2.5%;margin-right:2.5%;width:95%");
        $(".dateIndicator").attr("style", "font-size:70px;line-height:100px");
    }
    else {
        $(".dateContainer").attr("style", "margin-left:20%;margin-right:20%;width:60%;");
        $(".dateIndicator").attr("style", "font-size:30px;line-height:40px");
    }
}