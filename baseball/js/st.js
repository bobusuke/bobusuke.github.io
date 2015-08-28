var milkcocoa = new MilkCocoa("appleidi7ql1w.mlkcca.com");

//クッキー用ＪＡＶＡスクリプト
        function getCookie(name) {
            var Str = document.cookie;
            var Num = Str.indexOf(name);
            if (Num != -1) {
                start = Num + name.length + 1
                end = Str.indexOf("*", start);
                if (end == -1) {
                    end = Str.length;
                }
                var cookieValue = Str.substring(start, end);
                return cookieValue;
            } else {
                return "";
            }
        }

        function writecookie() {
            var check = getCookie("name");
            if (check != "") {
                document.f1.name.value = unescape(getCookie("name"));
            }
        }
//クッキー用ＪＡＶＡスクリプト終了
//投稿フォーム用クッキー
        function memoryCookie() {
            expires = new Date();
            expires.setTime(expires.getTime() + 24 * 60 * 60 * 1000 * 30 * 3);
            document.cookie = "name=" + escape(document.f1.name.value) + "*;expires=" + expires.toGMTString();
        }

        function mmsg() {
            //チェックボックスが選択されていれば、クッキに記憶させます。
            if (document.f1.ccheck.checked) {
                memoryCookie();
            }
        }
//投稿フォーム用クッキー END
var chatDataStore = milkcocoa.dataStore("chat");
var textArea, board;
window.onload = function(){
    textArea = document.getElementById("msg");
    board = document.getElementById("board");
}

function clickEvent(){
    var text = textArea.value;
    sendText(text);
}

function sendText(text){
    chatDataStore.push({message : text},function(data){
        console.log("送信完了");
        textArea.value = "";
    });
}

chatDataStore.on("push",function(data){
    addText(data.value.message);
});

function addText(text){
    var msgDom = document.createElement("li");
    msgDom.innerHTML = text;
    board.insertBefore(msgDom, board.firstChild);
    localStorage.setItem(text, msgDom);
}
////The jump menu
//function MM_jumpMenu(selObj,restore){ //v3.0
//  eval("location='"+selObj.options[selObj.selectedIndex].value+"'");
//  if (restore) selObj.selectedIndex=0;
//}
////The jump menu end
////ページ数
//
//document.write('<select name="The jump menu" onChange="MM_jumpMenu(this,0)" class="kaipage_select">');
//                        document.write('<option value="./50.html" class="kaipage_option">1(1-10)</option>');
//                        document.write('<option value="http://bbs.sekkaku.net/bbs/?id=50&amp;page=11" class="kaipage_option">2(11-20)</option>');
//                        document.write('<option value="http://bbs.sekkaku.net/bbs/?id=50&amp;page=21" class="kaipage_option">3(21-30)</option>');
//                        document.write('<option value="http://bbs.sekkaku.net/bbs/?id=50&amp;page=31" class="kaipage_option">4(31-40)</option>');
//                        document.write('<option value="http://bbs.sekkaku.net/bbs/?id=50&amp;page=41" class="kaipage_option">5(41-44)</option>');
bgcolor="#FCE8FF" text="#000000" link="#0000EE" alink="#EE0000" vlink="#EE0000" 
