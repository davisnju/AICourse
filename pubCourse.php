<?php
session_start();
$_SESSION['isLogged']=1;	

$title = $_POST['article_title'];
$time = $_POST['time'];
$imgurl = $_POST['imgurl'];
$context = $_POST['article_context'];
$atcid = $_POST['aid'];

echo '正在发布...<br>';
//echo 'title:'.$title."<br>time:".$time."<br>context:".$context
//	."<br>id=".$atcid."<br>";

$dom = new DomDocument(); //创建 DOM对象 
$dom->load('source/article.xml'); //读取 XML文件 
$articlelist = $dom->getElementsByTagName("articlelist")->item(0); 

$article = $dom->createElement('article');
$articletitle = $dom->createElement('articletitle'); 
$articletitle->appendChild($dom->createTextNode($title)); 
$publishtime = $dom->createElement('publishtime'); 
$publishtime->appendChild($dom->createTextNode($time)); 
$img = $dom->createElement('img'); 
$img->appendChild($dom->createTextNode($imgurl)); 
$articlecontext = $dom->createElement('articlecontext'); 
$articlecontext->appendChild($dom->createTextNode($context)); 

$article->appendChild($articletitle); 
$article->appendChild($publishtime); 
$article->appendChild($articlecontext); 
$article->appendChild($img); 
$aid = $dom->createAttribute('id');
$aid->value=$atcid;
$article->appendChild($aid); 

if($articlelist->childNodes->length < 2){
	$articlelist->appendChild($article); 
}
else{
	$articlelist->insertBefore($article,$articlelist->firstChild);
	//$articlelist->appendChild($article); 
}

//将 XML数据写入文件 
$fp = fopen('source/article.xml', 'w'); 
if(!fwrite($fp, $dom->saveXML())) 
	echo '发布失败！'; 
fclose($fp); 
$str=file_get_contents("source/article.xml");//打开文件
$str=str_replace("><",">\n<",$str);
file_put_contents("source/article.xml",$str);//把替换的内容写到文件中

$url = "davisBlog_mg1515007.php";  
echo "<script language='javascript' type='text/javascript'>";  
echo "window.location.href='$url'";  
echo "</script>";

function read_child($node) 
{ 
$children = $node->childNodes; //获得$node的所有子节点 
foreach($children as $e) //循环读取每一个子节点 
{ 
if($e->nodeType == XML_TEXT_NODE) //如果子节点为文本型则输出 
{ 
echo $e->nodeValue.'<BR>'; 
} 
else if($e->nodeType == XML_ELEMENT_NODE) //如果子节点为节点对象，则调用函数处理 
{ 
read_child($e); 
} 
} 
} 
?>