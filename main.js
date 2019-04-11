var ad = document.getElementsByClassName("ndPaywall");
ad[0].style.display="none";

var eles = ["ndArticle_headPic", "ndArticle_margin"];
for(var i=0, len=eles.length; i<len; i++){
	var ele = document.getElementsByClassName(eles[i]);
	if(ele[0] == undefined){
		continue;
	}
	ele[0].style.display="";
}
