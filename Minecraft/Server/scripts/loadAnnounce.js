var jsonObj;

function loadAnnounce(){
    json_get = $.getJSON("https://stehsaer.github.io/Minecraft/Server/json/announce.json", function(data){
        jsonObj = data;
        updateHTML();
    });
}

function updateHTML(){
    obj = jsonObj;
    var str = "";
    
    str += "<div class='title'>" + obj.style.header + "</div>"; // title set

    // maincontent
    for (var i = obj.mainContent.length - 1; i >= 0; i--){
        str += "<div class='subContentFrame'>";
        str += "<div class='subContentTitle'>" + obj.mainContent[i].title + "<div class='statusDisplay' style='color:" + obj.style.importanceColor[obj.mainContent[i].importance] + "'>" + obj.style.importance[obj.mainContent[i].importance] + "</div>";
        str += "</div>"; // subContentTitle
        str += "<div class='detail'>";
        for(var j = 0; j < obj.mainContent[i].content.length; j++){
            str += obj.mainContent[i].content[j]; + "<br>";
        }
        str += "</div>" // detail
        str += "<div class='signature'>" + obj.mainContent[i].assignment + "<br>" + obj.mainContent[i].date +  "</div>";
        str += "</div>"; // subContentFrame
    }

    $("#mainContent").html(str);
}

//<div class='subContentFrame'>
//            <div class='subContentTitle'>subContentTitle
//                <div class='statusDisplay' style='color:white'>状态显示</div>
//            </div>
//            <div class='detail'>
//                word<br>
//                wprd<br>
//            </div>
//            <div class='signature'>
//                signature
//            </div>
//        </div>
//          <div class='subContentFrame'></div>