<?php
    define('UPLOAD_DIR', 'gs://************.appspot.com/');
    define('GAE_ID', '*************.appspot.com');

    #画像ファイル削除
	foreach (glob('*.png') as $file) {
    		unlink($file);
	}

	$img = $_POST['data'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $filename = uniqid() . '.png';
    $upfile = UPLOAD_DIR . $filename;
    $options = ['gs' => ['Content-Type' => 'image/png','acl' => 'public-read']];
    $context = stream_context_create($options);
	$success = file_put_contents($upfile, $data, 0, $context);
    echo "https://storage.googleapis.com/" . GAE_ID . '/' . $filename;
?>