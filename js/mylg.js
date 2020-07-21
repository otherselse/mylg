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

		if($(".tipmouse").length>0){
			$('.tipmouse').qtip({
				hide: 'unfocus',
				position: {
					viewport: $(window)
				},
				style: {
					classes: 'qtip-lg qtip-light  qtip-shadow qtip-rounded'  //
				}
			});
		}

		if($(".tiptop").length>0){ //提示显示在元素的上方
			$('.tiptop').qtip({
				position: {
					my: 'bottom center', //my:是指三角的位置
					at: 'top center' //是在提示在组件的相对位置
				},
				style: {
					classes: 'qtip-lg qtip-light  qtip-shadow qtip-rounded'  //
				}
			});
		}
		
		//tipclick 点击出现数据段
		if($(".tipclick").length>0){
				$('.tipclick').qtip({
					show: { event: 'click' },
					hide: 'unfocus',
					content: {
						text: function (event, api) {
							return $("." + $(this).attr('qtip-dom'))  //qtip-dom 是点击提示框的内容的id，自己定义
						}
					},
					position: {
						viewport: $(window)
					},
					style: {
						classes: 'qtip-lg qtip-light  qtip-shadow qtip-rounded'  //
					}
				})
			}

		//搜索下拉
		$("body").on("click", function () {
			$(".search-cont").hide();
		})
		//下拉
		$("body").on("click", ".searchUp", function (e) {
			if($(this).parents(".input-selSearch").length>0){
				e.stopPropagation();
				$(".search-cont").hide();
				$(this).parents(".input-selSearch").find(".search-cont").css({ "left": $(this).offset().left - $(this).parents(".input-selSearch").offset().left,"min-width":$(this).outerWidth(true) })
				$(this).parents(".input-selSearch").find(".search-cont").show();
			}
			
		})
		$("body").on("click", ".search-list", function () {
			$(this).addClass("active").siblings().removeClass("active");
			$(this).parents(".input-selSearch").find(".searchUp").val($(this).text());
			$(this).parents(".input-selSearch").find(".search-cont").hide();
		})

	
		$("input[type='text']").each(function(){
			$(this).attr("autocomplete","off");
		})


		//同时绑定多个
		if($(".render-time").length>0){
			lay('.render-time').each(function(){
			  laydate.render({
			    elem: this
			    ,trigger: 'click'
			    , theme: 'lgblue'
			  });
			});
		}
		


		//checkbox
		$("body").on("click", ".ui-checkbox", function () {
			$(this).toggleClass("on")
		})

		// ui-option
		$("body").on("click", ".ui-option", function () {
			$(this).addClass("on").siblings("button").removeClass("on");
		})


		//radio点选
		$("body").on("click", ".ui-radio", function (e) {
			e.stopPropagation()
			$(this).parents(".radio").find(".ui-radio").removeClass("on");
			$(this).addClass("on")
		})

		
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

//全选
function setAll(obj) {
	var myobj = $(obj).parents(".checkbox").find(".ui-checkbox").not('.disabled').not($(obj).parent('.ui-checkbox'));
	if (obj.checked) {
		myobj.addClass("on");
		myobj.find(":checkbox").prop("checked", true);
	} else {
		myobj.removeClass("on");
		myobj.find(":checkbox").prop("checked", false);
	}
}

//新增仓库
 function addWareHouse(){
	layer.open({
		type: 2,
		title: '添加仓库',
		shadeClose: true,
		shade: 0.4,
		resize: false,
		area: ['610px', '429px'],
		content:'../supplier/wareHouse.html'
	});
 }


//阻止冒泡
function stopPro(e){
	if(navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.match(/7./i)=="7."|| navigator.appVersion.match(/8./i)=="8.")) 
	{
		if(event.stopPropagation) { event.stopPropagation();}
		else if(window.event){ window.event.cancelBubble = true;}
	}else{ e.stopPropagation(); }	
}