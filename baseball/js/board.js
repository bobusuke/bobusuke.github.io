var milkcocoa = new MilkCocoa("appleidi7ql1w.mlkcca.com");
var boardDataStore = milkcocoa.dataStore("board");
var textArea, board;

function clickEvent() {
    var comment = {
        "name": $("#name").val(),
        "sub": $("#sub").val(),
        "mes": $("#mes").val(),
        "key": $("#key").val()
    };
    var commentJSON = JSON.stringify(comment);

    sendText(commentJSON);

}

function sendText(text) {
    boardDataStore.push({
        comment: text
    }, function (data) {
        console.log("送信完了");
        //        textArea.value = "";
    });
}

function loadMessage() {
    boardDataStore.stream().size(10).next(function (err, data) {
//        console.log(data); // 最新の10件のデータ
        for (var i=0; i < data.length; i++) {
            var obj = JSON.parse(data[i].value.comment);
            
            var table = $("#board_messages");
            table.append("<tr><td>" +  obj.sub+ "</td><td>" + obj.name + "</td><td>" + obj.mes + "</td></tr>");
        }
    });
}

