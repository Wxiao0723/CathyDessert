  var count = 2; 
  var currentpage = 1; //当前页数
  var uls=document.getElementsByTagName('ul');
  var totalpage = uls.length/count;
  function pre() {
     if(currentpage == 1){
      console.log("已经是第一页了!");
      return;
   }
   else if(currentpage > 1){
      var tmp = (currentpage - 2) * count + 1;
      var parent=document.getElementById('view_frame1');
      var childNodes=parent.getElementsByTagName('ul');
      parent.removeChild(childNodes[0]);
      parent.removeChild(childNodes[0]);
      var newnode0=uls[tmp-1].cloneNode(true);
      var newnode1=uls[tmp].cloneNode(true);
      parent.appendChild(newnode0);
      parent.appendChild(newnode1);
      currentpage -= 1;
   }
  }
  function next() {
     if(currentpage == totalpage){
        console.log("已经是最后一页了!");
     }
     else if(currentpage == (totalpage - 1)){
        var sur = uls.length % count;
        var tmp = currentpage * count+1;
        console.log("剩余数:" + sur);
        console.log(totalpage);
        console.log(tmp);
        console.log(uls.length);
        var parent=document.getElementById('view_frame1');
        var childNodes=parent.getElementsByTagName('ul');
        parent.removeChild(childNodes[0]);
        parent.removeChild(childNodes[0]);
        console.log(tmp);
        var newnode0=uls[tmp-1].cloneNode(true);
        var newnode1=uls[tmp].cloneNode(true);
        parent.appendChild(newnode0);
        parent.appendChild(newnode1);
        currentpage += 1;
     }
     else if(currentpage > 0){
        var tmp = currentpage * count + 1;
        console.log("tmp:" + tmp);
        console.log(uls.length);
        currentpage += 1;
        var parent=document.getElementById('view_frame1');
        var childNodes=parent.getElementsByTagName('ul');
        parent.removeChild(childNodes[0]);
        parent.removeChild(childNodes[0]);
        console.log(uls.length);
        var newnode0=uls[tmp-1].cloneNode(true);
        var newnode1=uls[tmp].cloneNode(true);
        parent.appendChild(newnode0);
        parent.appendChild(newnode1);
     }
  }
  function firstpage() {
      var newnode0=uls[0].cloneNode(true);
      var newnode1=uls[1].cloneNode(true);
      document.getElementById('view_frame1').appendChild(newnode0);
      document.getElementById('view_frame1').appendChild(newnode1);

  }
  window.onload = function() {
      var htmllist='';
      var i=0;
      for(var j=0;j<6;j++){
        htmllist+='<ul>';
        var m=i+4;
        for(;i<m;i++){
        htmllist+='<li><a href="#"><img src="'+JSON.data[i].imgsrc+' "alt="'+JSON.data[i].name+'"><span><h3>'+JSON.data[i].name+'</h3><br>'+JSON.data[i].description+'</span></a></li>';
        }
        htmllist+='</ul>';
      }
      document.getElementsByClassName('image-box')[0].innerHTML=htmllist;
    firstpage();
 }