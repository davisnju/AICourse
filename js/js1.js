// JavaScript Document
function $$(id){
  return document.getElementById(id);
}   
var isLogged = false;
var winWidth = 0; 
var winHeight = 0; 

function findDimensions() // 函数：获取尺寸 
{ 
// 获取窗口宽度 
if (window.innerWidth) 
	winWidth = window.innerWidth; 
else if ((document.body) && (document.body.clientWidth)) 
	winWidth = document.body.clientWidth; 
// 获取窗口高度 
if (window.innerHeight) 
	winHeight = window.innerHeight; 
else if ((document.body) && (document.body.clientHeight)) 
	winHeight = document.body.clientHeight; 
// 通过深入 Document 内部对 body 进行检测，获取窗口大小 
if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) 
{ 
	winHeight = document.documentElement.clientHeight; 
	winWidth = document.documentElement.clientWidth; 
} 
//$$('textSearch').value = winWidth;
if(winWidth < 900 && winWidth >= 696)
{
	$$('wrap').style.setProperty('width','100%');
	$$('fwrap').style.setProperty('width','100%');
	$$('course-cwrap').style.setProperty('width','100%');
	$$('index_search').style.setProperty('margin-left','10%');
	$$('btnBrowse').style.setProperty('float','left');
	$$('textSearch').style.setProperty('float','left');
	$$('index_search').style.setProperty('width','300px');
	$$('textSearch').style.display = 'block';
	$$('btnSearch').style.display = 'block';
}
else if(winWidth < 696)
{
	$$('wrap').style.setProperty('width','100%');
	$$('fwrap').style.setProperty('width','100%');
	$$('course-cwrap').style.setProperty('width','100%');
	$$('textSearch').style.display = 'none';
	$$('btnSearch').style.display = 'none';
	$$('index_search').style.setProperty('width','40px');
}
else if(winWidth >= 900){
	$$('wrap').style.setProperty('width','900px');
	$$('fwrap').style.setProperty('width','900px');
	$$('course-cwrap').style.setProperty('width','900px');
	$$('index_search').style.setProperty('margin-left','10%');
	$$('btnBrowse').style.setProperty('float','left');
	$$('textSearch').style.setProperty('float','left');
	$$('index_search').style.setProperty('width','300px');
	$$('textSearch').style.display = 'block';
	$$('btnSearch').style.display = 'block';
}
	$$('course-cwrap').style.setProperty('left',$$('wrap').offsetLeft+'px');
} 
// 调用函数，获取数值 
window.onload = findDimensions; 
window.onresize = findDimensions; 

function closeLS(){
	$$('divLoginSignin').style.display = 'none';
	document.documentElement.style.overflow='scroll';
}
function showLSl(){
	$$('divLoginSignin').style.display = 'block';
	$$('buttonLogin').style.display = 'block';
	$$('buttonSignin').style.display = 'none';
	$$('passwordCfmLogin').style.display = 'none';
	$$('tabLogin').style.setProperty('color','white');
	$$('tabLogin').style.backgroundColor = "#177cb0";
	$$('tabSignin').style.setProperty('color','#999999');
	$$('tabSignin').style.backgroundColor = "#ffffff";
	document.documentElement.style.overflow='hidden';
}
function showLSs(){
	$$('divLoginSignin').style.display = 'block';
	$$('buttonLogin').style.display = 'none';
	$$('buttonSignin').style.display = 'block';
	$$('passwordCfmLogin').style.display = 'block';
	$$('tabLogin').style.setProperty('color','#999999')
	$$('tabLogin').style.backgroundColor = "#ffffff";
	$$('tabSignin').style.setProperty('color','white')
	$$('tabSignin').style.backgroundColor = "#177cb0";
	document.documentElement.style.overflow='hidden';
}

function inputtitle(){

	if(isLogged && ($$('article_title')).value != "" && ($$('article_context')).value != ""){
		document.getElementById("btnpub").disabled=false;
	}
	else{
		document.getElementById("btnpub").disabled=true;
	}
    //($$('progress_percent')).value = ($$('article_title')).value == "";
}
function inputcontext(){

	if(isLogged && ($$('article_title')).value != "" && ($$('article_context')).value != ""){
	document.getElementById("btnpub").disabled=false;
	}
	else{
		document.getElementById("btnpub").disabled=true;
	}
    //($$('progress_percent')).value = ($$('article_context')).value == "";
}
function login(){
	var pwd=$$('password');
	
	//$$('divPwd').innerHTML="已登录 <input type='button' name='btn_logout' value='注销' id='btn_logout' onclick='logout();' />";	
	if(!isLogged){
		if(pwd.value == "davis1203")
		{		
			window.location.href="login.php";
		}
		else{
			alert("密码错误！");
		}
	}
	else{
			$$('divPwd').innerHTML="<p id='loginfo'>已登录<input type='button' name='btn_logout' value='注销' id='btn_logout' onclick='logout();' /></p> ";	
	}
}

function logout(){
	window.location.href="logout.php";
}

var xmlFileName="source/article.xml";
var responsexml='';
var articleList='';  
var articletitleList='';
var articleNum=0;
function inserturl(){
	//($$('article_context')).value +="<a href=''></a>";
	insertText("<a href='' target='_blank'></a>");
}
function insertText(str) {
var obj = $$('article_context');
    if (document.selection) { //ie
	obj.focus();//先激活当前对象
	var sel = document.selection.createRange();  
    sel.text = str; 
    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') { //非ie
        var startPos = obj.selectionStart,
            endPos = obj.selectionEnd,
            cursorPos = startPos,
            tmpStr = obj.value;
        obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
        cursorPos += str.length;
        obj.selectionStart = obj.selectionEnd = cursorPos;
    } else {
        obj.value += str;
    }
}
function loadXml(){
	document.getElementById("btnpub").disabled=true;
	if (window.XMLHttpRequest) 
	{ 
		xmlhttp=new XMLHttpRequest(); 
	} 
	else 
	{ 
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
	} 
	if(xmlhttp!=null) 
	{ 
		xmlhttp.open("POST",xmlFileName,false); 
		xmlhttp.send(null); 
		responsexml=xmlhttp.responseXML; 
	}
	articleList=responsexml.getElementsByTagName("article");  
	articletitleList=responsexml.getElementsByTagName("articletitle");
	articleNum=articleList.length;
	for(var i=0;i<articleList.length;i++){  
		//...遍历操作...  
		//test
		//alert(articleList[i].getAttribute("id"));
		//document.body.appendChild(articleList[i]);	
		($$('ulArticleCatalog')).innerHTML+="<li><a href='javascript:loadArticle(" + i + "," + articleList[i].getAttribute("id") + ");'>"
							+ articletitleList[i].childNodes[0].nodeValue + "</a></li>";
	} 
	loadArticle(0);
}
function adjustHeight(){
	var rh=($$('pubArticle')).offsetHeight + ($$('contentView')).offsetHeight;
	var ah=($$('divinfo')).offsetHeight + ($$('divArticleCatalog')).offsetHeight
								+ ($$('divPwd')).offsetHeight + 30;
	if( rh >= ah){
		($$('contentside')).style.height = rh + 'px';
	}
	else {
		($$('contentside')).style.height = ah + 'px';
	}
}
function loadArticle(lIndex){
	($$('contentView')).innerHTML=
						 "<h2>" + articleList[lIndex].childNodes[1].childNodes[0].nodeValue + "</h2>"
						+ "<p>" + articleList[lIndex].childNodes[3].childNodes[0].nodeValue + "</p>"
						+ "<p>" + articleList[lIndex].childNodes[5].childNodes[0].nodeValue + "</p>";
						//alert(($$('pubArticle')).offsetHeight);
	var imgurl=articleList[lIndex].childNodes[7].childNodes[0].nodeValue;
	if(imgurl != " "){
		//alert(imgurl);
		($$('contentView')).innerHTML+="<img src=" + imgurl + " width='400' height='300' />";
	}
	
	adjustHeight();
}

function writeArticle(){
	var date=new Date();
	var publishtime=date.toDateString() + ' ' 
				+ date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	//var articletitle=document.createElement("articletitle");
	//var txt1=document.createTextNode(($$('article_title')).value);
	//articletitle.appendChild(txt1);
	//var publishtime=document.createElement("publishtime");	
	//var txt2=document.createTextNode(datestr);
	//publishtime.appendChild(txt2);
	//var articlecontext=document.createElement("articlecontext");
	//var txt3=document.createTextNode(($$('article_context')).value);
	//articlecontext.appendChild(txt3);
	//var article=document.createElement("article");
	//article.appendChild(articletitle);
	//article.appendChild(publishtime);
	//article.appendChild(articlecontext);	
	if(isLogged && ($$('article_title')).value != ""&& ($$('article_context')).value != ""){	
		updateXml(($$('article_title')).value,publishtime,($$('article_context')).value);
	}
	else{
		if(!isLogged){
			alert('请先登录！');
		}
		else if(($$('article_title')).value == "" || ($$('article_context')).value == ""){
			alert('请输入文章标题和内容！');
		}
	}
}

function getThisArticleId(){
	return (articleNum+1);
}

function updateXml(articletitle,publishtime,articlecontext){
	($$('time')).value = publishtime;
	($$('aid')).value = getThisArticleId();
	if(($$('imgurl')).value == "")($$('imgurl')).value = " ";
	($$('frmAtc')).submit();
	
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
};
function image_file_click(){
	($$('image_file')).click();
}
function clrimgselect(){
	// for IE, Opera, Safari, Chrome
	if (($$('image_file')).outerHTML) {
	($$('image_file')).outerHTML = ($$('image_file')).outerHTML;
	} else { // FF(包括3.5)
	($$('image_file')).value = "";
	}
	($$('img_preview')).innerHTML="";
	($$('progress_percent')).type = "hidden";
	($$('btn_clrimg')).type = "hidden";
	adjustHeight();
	//alert(($$('image_file')).value);
}
function addImg(){
	//alert(($$('image_file')).value);
	var oFile = document.getElementById('image_file').files[0];
	//alert(oFile.type);
	var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    if (! rFilter.test(oFile.type)) {
		//alert('err');
		return;
	}
	var date2=new Date();
	var publishtime2=date2.getYear() + '' + date2.getMonth() + '' + date2.getDay() + '' 
				+ date2.getHours() + '' + date2.getMinutes() + '' + date2.getSeconds();
		publishtime2.replace(/[ ]/g,"");
	($$('imgurl')).value = "img/upload/" + publishtime2 + oFile.name;
	($$('imgurl2')).value = "img/upload/" + publishtime2 + oFile.name;
	//($$('frmFile')).submit();
	startUploading();
}
function startUploading() {
    // get form data for POSTing
    //var vFD = document.getElementById('frmAtc').getFormData(); // for FF3
    var vFD = new FormData(document.getElementById('frmFile')); 
    // create XMLHttpRequest object, adding few event listeners, and POSTing our data
    var oXHR = new XMLHttpRequest();  
	     
    oXHR.upload.addEventListener('progress', uploadProgress, false);
    oXHR.addEventListener('load', uploadFinish, false);      
    oXHR.open('POST', 'upload.php');
    oXHR.send(vFD);
}

function uploadProgress(e) { // upload process in progress
    if (e.lengthComputable) {
        var iPercentComplete = Math.round(e.loaded * 100 / e.total);
        ($$('progress_percent')).value = iPercentComplete.toString() + '%';
		//($$('progress_percent')).style.display = 'block';
    }
}

function uploadFinish(e) { // upload successfully finished
    ($$('progress_percent')).value = '100%';
	//($$('img_preview')).style.display = 'block';
	($$('img_preview')).innerHTML="<img src=" + ($$('imgurl2')).value + " width='130' height='100' />";
	($$('progress_percent')).type = "button";
	($$('btn_clrimg')).type = "button";
	adjustHeight();
}