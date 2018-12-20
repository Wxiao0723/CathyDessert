window.onload = function(){
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