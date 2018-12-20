window.onload = function(){
var htmllist='';
  for(var i=0;i<JSONS.data.length;i++){
      htmllist+='<section class="recommend"><h3>'+JSONS.data[i].name+'</h3><div class="image-box"><a href="#"><img src="'+JSONS.data[i].imgsrc+'" alt="'+JSONS.data[i].name+'"></a></div><div class="recommend-content"><div class="p1"><p>'+JSONS.data[i].pre+'</p></div><div class="p2"><p>'+JSONS.data[i].now+'</p></div></div></section>'
  }
document.getElementById("monthnew").innerHTML=htmllist;
}
