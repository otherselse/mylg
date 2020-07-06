$(function(){

	 setHeight();
	$(window).resize(function(){
		setHeight();
	})
	$("body").on("mousewheel",function() {
		setHeight();
	});


		//showTip 可以放到body上 默认显示提示框
		if($(".showTip").length>0){
			$(".showTip").find('[title]').qtip({
				position: {
					viewport: $(window)
				},
				style: {
					classes: 'qtip-lg qtip-light  qtip-shadow qtip-rounded'  //
				}
			});

		}

		$('.tipmouse').qtip({
			hide: 'unfocus',
			position: {
				viewport: $(window)
			},
			style: {
				classes: 'qtip-lg qtip-light  qtip-shadow qtip-rounded'  //
			}
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

	//下拉
	$("body").on("click", ".searchUp", function (e) {
		e.stopPropagation();
		$(".search-cont").hide();
		$(this).parents(".input-selSearch").find(".search-cont").css({ "left": $(this).offset().left - $(this).parents(".input-selSearch").offset().left })
		$(this).parents(".input-selSearch").find(".search-cont").show();
	})
	$("body").on("click", ".search-list", function () {
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".input-selSearch").find(".searchUp").val($(this).text());
		$(this).parents(".input-selSearch").find(".search-cont").hide();
	})