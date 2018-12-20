window.onload = function(){
  var htmllist='';
  for(var i=0;i<JSON.data.length;i++){
      htmllist+='<li><a href="#"><img src="'+JSON.data[i].imgsrc+' "alt="'+JSON.data[i].name+'"><span><h3>'+JSON.data[i].name+'</h3><br>'+JSON.data[i].description+'</span></a></li>';
  }
document.getElementById("json1").innerHTML=htmllist;
var htmllist1='';
  for(i=0;i<JSON1.data.length;i++){
      htmllist1+='<li><a href="#"><img src="'+JSON1.data[i].imgsrc+' "alt="'+JSON1.data[i].name+'"><span><h3>'+JSON1.data[i].name+'</h3><br>'+JSON1.data[i].description+'</span></a></li>';
  }
document.getElementById("json2").innerHTML=htmllist1;
	var wrap=document.getElementById('wrap'),
        pic=document.getElementById('pic'),
        list=document.getElementById('list').getElementsByTagName('li'),
        index=0,
        timer=null;
      // 定义并调用自动播放函数
      if(timer){
          clearInterval(timer);
          timer=null;
      }
	timer=setInterval(autoplay,2000);
      // 定义图片切换函数
      function autoplay(){
          index++;
          if(index>=list.length){
              index=0;
          }
         changeoptions(index);      
      }   
     // 鼠标划过整个容器时停止自动播放
	wrap.onmouseover=function(){
    clearInterval(timer);
	}
     // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout=function(){
    timer=setInterval(autoplay,2000);
	}
     // 遍历所有数字导航实现划过切换至对应的图片
	for(var i=0;i<list.length;i++){
		 list[i].id=i;
		 list[i].onmouseover=function(){
			 clearInterval(timer);
			 changeoptions(this.id);
			 }
		 }
	function changeoptions(curindex){
		for(var j=0;j<list.length;j++){
              list[j].className='';
              pic.style.top=0;   
          }
          list[curindex].className='active';
          pic.style.top=-curindex*600+'px';
		  index=curindex;
			} 
  var directionX=true,directionY=true;
  var x=10,y=10;
  var obj = document.getElementById("ad");
    obj.style.left= x+"px";//对象属性设置
    obj.style.top = y+"px";
    var id=setInterval(move,500);//500ms重复执行move方法
  function move(){
    var width=document.documentElement.clientWidth-obj.offsetWidth;
    var height= document.documentElement.clientHeight-obj.offsetHeight;
    if(x>=width ){//说明移动到最右边
      directionX = false;
    }
    if(x==0){//移动到最左边
      directionX = true;
    }
    if(y >= height){
      directionY = false;
    }
    if(y==0){
      directionY = true;
    }
    if(directionX) 
      x += 10;
    else 
      x -= 10;
    
    if(directionY) 
      y += 10;
    else 
      y -= 10;
    obj.style.left = x+"px";
    obj.style.top = y+"px";
  }
   obj.onmouseover=function(){clearInterval(id)} 
  obj.onmouseout=function(){id=setInterval(move, 500)}
   }



