<?php
session_start();
$_SESSION['isLogged']=1;	
$imgurl = $_POST['imgurl2'];
$dest=$imgurl;
if(is_uploaded_file($_FILES['image_file']['tmp_name']))
{
	$r=move_uploaded_file($_FILES['image_file']['tmp_name'],$dest);
	$sFileName = $_FILES['image_file']['name'];
	$sFileType = $_FILES['image_file']['type'];
	echo 'imgurl:'.$imgurl.'<br>';
	echo 'filename:'.$sFileName .'<br>';
	echo 'filetype:'.$sFileType .'<br>';
	echo 'filetmpname:'.$_FILES['image_file']['tmp_name'] .'<br>';


	if($r && is_file($imgurl))
		echo '文件上传成功';
	else echo '文件上传失败';
}
else{
	echo '请先选择图片！';
}
?>