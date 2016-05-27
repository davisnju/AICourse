<?php 
session_start();
$_SESSION['isLogged']=0;	
//echo "session_logged:".$_SESSION['isLogged'];
$url = "davisBlog_mg1515007.php";  
echo "<script language='javascript' type='text/javascript'>";  
echo "window.location.href='$url'";  
echo "</script>";
?>
