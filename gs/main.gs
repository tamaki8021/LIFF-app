var CHANNEL_ACCESS_TOKEN = '＊＊＊＊＊＊';

function doPost(e) {

  //メッセージ受信
  var data = JSON.parse(e.postData.contents);
  //リプレイトークン取得
  var replytoken = data.events[0].replyToken;

  var cache = CacheService.getScriptCache();
  var type = cache.get("type");
  //cache.remove("type");

  if (typeof replytoken === 'undefined') {
    return;
  }

    //ユーザーメッセージ取得
    var user_message = JSON.parse(e.postData.contents).events[0].message.text;

    if (user_message === "お問合せ") {
      cache.put("type", 1);
      mes1(replytoken);
    } else if (user_message.match("ありがとうございました。")) {
      cache.put("type", 2);
    } else if (user_message.match("お問合せ項目：")) {
      cache.remove("type");
      mail(user_message);
    }else{
      if (type === null) {
            reply(replytoken,"「お問合せ」とメッセージを送信してください。");
      }
    　switch(type) {
    　case "1":
    　reply(replytoken,"お問合せ項目をお選びください。");
    　break;
    　case "2":
    　cache.remove("type");
    　break;
    }
    }


function reply(replyToken, message) {
  var url = "https://api.line.me/v2/bot/message/reply";
  UrlFetchApp.fetch(url, {
    "headers": {
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + CHANNEL_ACCESS_TOKEN,
    },
    "method": "post",
    "payload": JSON.stringify({
      "replyToken": replyToken,
      "messages": [{
        "type": "text",
        "text": message,
      }],
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({"content": "post ok"})).setMimeType(ContentService.MimeType.JSON);
}
}
