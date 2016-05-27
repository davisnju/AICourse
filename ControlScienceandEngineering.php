<?php 
session_start();
if($_SESSION['isLogged']!=1){
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
				<input type="button" name="btnLogin"  value="登录" id="btnLogin"  onclick="login();" />
				<input type="button" name="btnSignin" value="注册" id="btnSignin" onclick="signin();" />
			</div>
		</div>
		<nav>
		</nav>	
	</header>
	
	<section id="coursecontent">
		<div id="coursecontainer">
			<div id="ctop">
			</div>
			<div id="course-cwrap">
				<div id="ctop-content">
					<h2>控制科学与工程</h2>
					<p>学科简介：研究控制的理论、方法、技术及其工程应用的学科。控制科学以控制论、系统论、信息论为基础，
					研究各应用领域内的共性问题，即为了实现控制目标，应如何建立系统的模型，分析其内部与环境信息，采取
					何种控制与决策行为；而与各应用领域的密切结合，又形成了控制工程丰富多样的内容。</p>
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
				<div id="courses">
					<div class="course-info">
						
					</div>
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