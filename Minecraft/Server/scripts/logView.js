function load(path) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://stehsaer.github.io/Minecraft/Server/log/"+path);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 3 && xhr.status == 200) {
            proceed(xhr.responseText);
        }
        if (xhr.readyState == 3 & xhr.status != 200) {
            alert("找不到文件");
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
        str += "<span class='lineContent'>" + obj[i].replace(/\</g,"&lt;").replace(/\>/g, "&gt;") + "</span>";
        str += "</div>";
    }
    str = str.replace(/\[Server thread\/INFO\]\:/g, "<span style='color:#00bcd4'>[Server thread/INFO]:</span>");
    str = str.replace(/\[Server thread\/WARN\]\:/g, "<span style='color:#ff5722'>[Server thread/WARN]:</span>");
    str = str.replace(/\[([0-9]*):([0-9]*):([0-9]*)\]/g, "<span style='color:#cddc39'>[$1:$2:$3]</span>");
    str = str.replace(/\[Async Chat Thread - #([0-9]*)\/INFO\]:/g, "<span style='color:#4caf50'>[Async Chat Thread - #$1/INFO]:</span>");
    str = str.replace(/has made the advancement \[(.*?)\]/, "has made the advancement <span style='color:#ba68c8'>[$1]</span>");
    $("body").html(str);
}