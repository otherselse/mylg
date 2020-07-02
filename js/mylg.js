$(function(){

	 setHeight();
	$(window).resize(function(){
		setHeight();
	})
	$("body").on("mousewheel",function() {
		setHeight();
	});
})


//set left height
function setHeight(){
	var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;   //屏幕的高度
	$(".menu").height(h-143);
}



//左侧菜单展开收起
function showsMenu(obj){
	var myobj=$(obj).find(".smenu");
	$(obj).siblings().removeClass("open");
	$(obj).siblings().find(".smenu").hide()
	myobj.slideToggle();
	$(obj).toggleClass("open")
}