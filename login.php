<?php 
session_start();
$_SESSION['isLogged']=1;	
//echo "session_logged:".$_SESSION['isLogged'];

$username = $_POST['username'];
$password = $_POST['password'];
if ($username <> "")
{
	//echo "username:".$username."password:".$password;
}
else 
{
	echo "<script language='javascript' type='text/javascript'>";  
	echo "history.go(-1);";  
	echo "</script>";
}
?>
