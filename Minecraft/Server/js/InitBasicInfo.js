function init() {
    json_get = $.getJSON("basicInfo.json", function (data) {
        $("#title").text(data.WorldName);
        $("#title_cn").text(data.WorldNameCN);
        $("#serverDescription").text(data.ServerDescription);
        $("#serverAddress").text(data.ServerAddress);
        $("#seedText").text(data.WorldSeed);
        $("#clientName").text(data.ClientName);
        $("#mcVersion").text(data.MCVersion);
    });
}
