function load() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://stehsaer.github.io/Minecraft/Server/log/2020-04-05-2.log");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 3 && xhr.status == 200) {
            proceed(xhr.responseText);
        }
    }
    xhr.send(null);
}

function proceed(response) {
    var obj = response.split("\n");
    var str = "";
    for (var i = 0; i < obj.length; i++) {
        str += "<div class='line'>";
        str += "<div class='lineNum'>" + (i + 1) + "</div>";
        str += "<div class='lineSeperator'></div>";
        str += "<span class='lineContent'>" + obj[i] + "</span>";
        str += "</div>";
    }
    $("body").html(str);
}