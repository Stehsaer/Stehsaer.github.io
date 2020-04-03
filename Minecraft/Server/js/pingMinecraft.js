function checkStatus() {
    $("#serverStatus").fadeOut(1);
    $("#serverStatus").html("<span id='serverStatus' style='color:white'>连接中...</span>");
    $("#serverStatus").fadeIn(300);
    var xhs = new XMLHttpRequest();
    xhs.onreadystatechange = function () {
        if (xhs.readyState == 4 && xhs.status == 200) {
            proceed(xhs.responseText);
        }
    }
    xhs.open("GET", "https://api.minetools.eu/ping/14.29.49.28/40032", true);
    xhs.send(null);
}

function proceed(response) {
    var dat = JSON.parse(response);
    try {
        if (dat.error != undefined) {
            $("#serverStatus").fadeOut(1);
            $("#serverStatus").html("<span id='serverStatus' style='color:orange'>离线</span>");
            $("#serverStatus").fadeIn(300);
            $("#serverPlayerContainer").hide(100);
        }
        else {
            $("#serverStatus").fadeOut(1);
            $("#serverStatus").html("<span id='serverStatus' style='color:lime'>在线</span>");
            $("#serverStatus").fadeIn(300);
            $("#serverPlayerContainer").show(100);
            $("#serverPlayerNum").text(dat.players.online);
        }
    }
    catch{ }
}