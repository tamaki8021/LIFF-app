var params = (new URL(document.location)).searchParams;
var key = params.get('key');

$(function () {
    // 送信
    $('form').submit(function () {
        var name_date = $('input[name="name"]').val();
        var tel_date = $('input[name="tel"]').val();
        var mes_date = $('textarea[name="mes"]').val();

        var msg = `お問合せ項目：${key}\n名前：${name_date}\nTEL：${tel_date}\nご相談内容：${mes_date}`;
        sendText(msg);

        return false;
    });
});
