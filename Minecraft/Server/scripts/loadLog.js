function load() {
    $("body").html("");
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://stehsaer.github.io/Minecraft/Server/log/logMap.json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 3 && xhr.status == 200) {
            proceed(xhr.responseText);
        }
    }
    xhr.send(null);
}

function proceed(response) {
    var json = JSON.parse(response);
    var str = "<h1>服务器日志</h1>";
    for (var i = json.length -1; i >= 0 ; i--) {
        str += "<div class='subContainer'><div class='date'>#" + json[i].year + "-" + json[i].month + "-" + json[i].date + "</div>";
        for (var j = 0; j < json[i].fileCount; j++) {
            var link = json[i].year + "-" + pad(json[i].month, 2) + "-" + pad(json[i].date, 2) + "-" + (j+1) + ".log";
            str += "<span class='subLink' onclick=jumpTo('log" + "/" + link + "')>";
            str += link+ "</span>";
        }
        str += "</div>";
    }
    $("body").html(str);
}

function jumpTo(src) {
    window.location.href = src;
}

function pad(num, n) {
    var len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}