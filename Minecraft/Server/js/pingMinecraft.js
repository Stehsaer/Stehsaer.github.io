function checkStatus() {
    document.getElementById("serverStatus").innerHTML = "<span style='color:white'>连接中...</span>";
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
            document.getElementById("serverStatus").innerHTML = "<span style='color:orange'>离线</span>"
        }
        else {
            document.getElementById("serverStatus").innerHTML = "<span style='color:lime'>在线</span>";
        }
    }
    catch{ }
}