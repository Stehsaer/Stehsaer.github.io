var title;
var title_cn;
var serverDescription;
var serverIp;
var serverPort;
var seedText;
var clientName;
var mcVersion;
var pingClient;

function init() {
    json_get = $.getJSON("basicInfo.json", function (data) {

        title = data.WorldName;
        title_cn = data.WorldNameCN;

        serverDescription = data.ServerDescription;

        seedText = data.WorldSeed;

        serverIp = data.ServerIp;
        serverPort = data.ServerPort;

        clientName = data.ClientName;

        mcVersion = data.MCVersion;

        pingClient = data.PingClient;

        $("#title").text(data.WorldName);
        $("#title_cn").text(data.WorldNameCN);
        $("#serverDescription").text(data.ServerDescription);
        $("#serverAddress").text(serverIp + ":" + serverPort);
        $("#seedText").text(data.WorldSeed);
        $("#clientName").text(data.ClientName);
        $("#mcVersion").text(data.MCVersion);

        checkStatus();
        setInterval(checkStatus, 10000);
    });
}

function checkStatus() {
    $("#serverStatus").fadeOut(1);
    $("#serverStatus").html("<span id='serverStatus' style='color:white'>连接中...</span>");
    $("#serverStatus").fadeIn(300);
    var xhs = new XMLHttpRequest();
    xhs.onreadystatechange = function () {
        if (xhs.readyState == 4 && xhs.status == 200) {
            proceed(JSON.parse(xhs.responseText));
        }
    }
    xhs.open("GET", pingClient + "?timestamp=" + new Date().getTime(), true);
    xhs.send(null);
}

function proceed(dat) {
    try {
        if (dat.error != undefined) {
            $("#serverStatus").fadeOut(1);
            $("#serverStatus").html("<span id='serverStatus' style='color:orange'>离线</span>");
            $("#serverStatus").fadeIn(100);
            $("#serverPlayerContainer").hide(100);
        }
        else {
            $("#serverStatus").fadeOut(1);
            $("#serverStatus").html("<span id='serverStatus' style='color:lime'>在线</span>");
            $("#serverStatus").fadeIn(100);
            $("#serverPlayerContainer").show(100);
            $("#serverPlayerNum").text(dat.players.online);
        }
    }
    catch{ }
}
