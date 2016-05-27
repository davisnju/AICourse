<?php 
session_start();
if(!$_SESSION['isLogged']){
	$_SESSION['isLogged']=0;	
	}
	//echo "session_logged:".$_SESSION['isLogged'];
?>

<!DOCTYPE html>
<html>
<head>
	<title>浏览 | AICourse</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
	<script language="javascript" src="js/js1.js"></script>
</head>
<body onload="loadXml()">
	<header>
		<div id="wrap">
			<div id="logo">
				<h1><a href="index.php">AICourseLOGO</a></h1>
			</div>
			<div id="index_search">
				<input type="button" name="btnBrowse"  value="目录" id="btnBrowse"  onclick="BrowseCourse();" />
				<input type="text"   name="textSearch" value="" placeholder="搜索课程" id="textSearch" oninput="" onchange="" />
				<input type="button" name="btnSearch"  value="搜索" id="btnSearch"  onclick="searchCourse();" />
			</div>
			<div id="login_signin">
				<input type="button" name="btnLogin"  value="登录" id="btnLogin"  onclick="showLSl();" />
				<input type="button" name="btnSignin" value="注册" id="btnSignin" onclick="showLSs();" />
			</div>
		</div>
		<nav>
		</nav>	
	</header>
	<div id="divLoginSignin">
		<div id="LoginSigninTab">
			<input type="button" name="tabLogin"  value="登录" id="tabLogin" class="slttab"  onclick="showLSl();" />
			<input type="button" name="tabSignin" value="注册" id="tabSignin" onclick="showLSs();" />
			<br />
			<div id="closedivLoginSignin">
				<input type="button" name="clsLSdiv"  value="×" id="clsLSdiv"  onclick="closeLS();" />
			</div>
		</div>
		<div id="LoginSigninTabPanel">
			<input type="text" name="textLogin"  placeholder="用户名" id="textLogin" /><br />
			<input type="password" name="passwordLogin"  placeholder="密码" id="passwordLogin"  /><br />
			<input type="password" name="passwordCfmLogin"  placeholder="确认密码" id="passwordCfmLogin"  /><br />
			<input type="button" name="buttonLogin"  value="登录" id="buttonLogin"  onclick="login();" /><br />
			<input type="button" name="buttonSignin"  value="注册" id="buttonSignin"  onclick="signin();" />
		</div>
	</div>
	<section id="content">
		<div id="container">
			<div id="cwrap">
				
				<div id="cinfo">
					AICourse致力于智能远程教育。(网站介绍)
				</div>
				<div id="catalog">
					<ul>
						<li><a href="../AICourse/ComputerScience.php">计算机科学</a></li>
						<li><a href="">数据科学</a></li>
						<li><a href="">数学与逻辑</a></li>
						<li><a href="../AICourse/ControlScienceandEngineering.php">控制科学与工程</a></li>
						<li><a href="">个人发展</a></li>
						<li><a href="">艺术与人文</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	
	<div id="ftop">
	</div>
	<footer>
		<div id="fwrap">
			<div id="finfo">
				<h3>AICourse</h3>
				<p>AICourse致力于智能远程教育。</p>
				<span>@2016 DAVISNJU.保留所有版权。</span>
				<p>地址：南京鼓楼区汉口路22号</p>
			</div>
			<ul>
				<li>连接</li>
				<li><a href="">微博</a></li>
				<li><a href="">博客</a></li>
				<li><a href="">空间</a></li>
			</ul>
			<ul>
				<li>项目</li>
				<li><a href="">关于</a></li>
				<li><a href="">团队</a></li>
				<li><a href="">管理团队</a></li>
			</ul>
		</div>
	</footer>
</body>
</html>
