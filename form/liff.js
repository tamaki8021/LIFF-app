$(document).ready(function () {

    var liffId = "＊＊＊＊＊＊";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
          // start to use LIFF's api
          initializeApp();
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
        sendMessages(text);
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': "以下の内容でご相談を受付けました。\nありがとうございました。"
    },{
        'type': 'text',
        'text': text
    },{
       "type": "sticker",
       "packageId": "11537",
       "stickerId": "52002739"
   }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
