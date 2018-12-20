function check(){
	var form=document.getElementById("contact");
	if(!(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(form.dzyj.value))){
		alert("请输入有效邮箱");
		form.dzyj.focus();
		return false;
	}
	if(!/^1[35]\d{9}$/.test(form.phone.value)){
		alert("请输入有效联系方式");
		form.phone.focus();
		return false;
	}
	if(form.content.value==""){
		alert("请输入您的反馈意见");
		form.content.focus();
		return false;
	}
	if(form.taste.value==""){
		alert("请选择您的口味");
		form.taste.focus();
		return false;
	}
	else return true;
}