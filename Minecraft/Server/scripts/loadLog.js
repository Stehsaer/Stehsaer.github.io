function load() {
    var obj = $.getJSON("/log/logMap.json");
    alert(obj.length);
}