function mes1(replyToken) {
  var url = "https://api.line.me/v2/bot/message/reply";
  UrlFetchApp.fetch(url, {
    "headers": {
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + CHANNEL_ACCESS_TOKEN,
    },
    "method": "post",
    "payload": JSON.stringify({
      "replyToken": replyToken,
      "messages": [
{
  "type": "template",
  "altText": "this is a carousel template",
  "template": {
    "type": "carousel",
    "actions": [],
    "columns": [
      {
        "thumbnailImageUrl": "https://3.bp.blogspot.com/-tm5KbWlQAL4/VPQTqk3ZKWI/AAAAAAAAsAA/7hpKrdmrl5o/s400/soudan_madoguchi.png",
        "title": "相談1",
        "text": "＊＊＊＊＊",
        "actions": [
          {
            "type": "uri",
            "label": "相談する",
            "uri": "https://liff.line.me/**********/?key=相談１フォーム"
          }
        ]
      },
      {
        "thumbnailImageUrl": "https://3.bp.blogspot.com/-tm5KbWlQAL4/VPQTqk3ZKWI/AAAAAAAAsAA/7hpKrdmrl5o/s400/soudan_madoguchi.png",
        "title": "相談2",
        "text": "＊＊＊＊＊",
        "actions": [
          {
            "type": "uri",
            "label": "相談する",
            "uri": "https://liff.line.me/**********/?key=相談２フォーム"
          }
        ]
      },
      {
        "thumbnailImageUrl": "https://3.bp.blogspot.com/-tm5KbWlQAL4/VPQTqk3ZKWI/AAAAAAAAsAA/7hpKrdmrl5o/s400/soudan_madoguchi.png",
        "title": "相談3",
        "text": "＊＊＊＊＊＊",
        "actions": [
          {
            "type": "uri",
            "label": "相談する",
            "uri": "https://liff.line.me/**********/?key=相談３フォーム"
          }
        ]
      }
    ]
  }
}
      ],
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({"content": "post ok"})).setMimeType(ContentService.MimeType.JSON);
}
