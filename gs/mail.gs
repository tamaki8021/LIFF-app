function mail(user_message) {

  const recipient = '*****'; //送信先のメールアドレス
  const subject = 'LIFFのフォームからです';

  const recipientCompany = '株式会社＊＊＊＊';
  const recipientName = 'LIFF';
  const body = user_message;

  const options = {name: 'LIFFテスト'};

  GmailApp.sendEmail(recipient, subject, body, options);

}
