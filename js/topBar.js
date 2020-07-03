(function(){
	var str1=
		'<div class="topBar">'
		+'	<div class="pl30 pr30 pt20 ovh">'
		+'		<span class="l pct20 mt5"><i class="id_mylg lgIcon vm mr5"></i><span class="g28 dib f20 vm">我的乐刚</span></span>'
		+'		<div class="l pct60 tc">'
		+'			<span class="ui-switchCont">'
		+'				<a href="../index/index.html" class="ui-switchBut">我是买家</a><a href="../supplier/index.html" class="ui-switchBut">我是卖家</a>'
		+'			</span>'
		+'		</div>'
		+'		<div class="r pct20 tr">'
		+'			<a class="lgIcon topcart vm mr20" href="##"><i class="topcartDot">3</i></a>'
		+'			<img src="../images/exp.png" class="topImg vm mr5"><a href="javascript:void(0)" class="tipclick" title="<a href=\'exit\' class=\' f14 pr10 pl10 g67\'>退出</a>">hi,钢铁大王</a>'
		+'		</div>'
		+'	</div>'
		+'</div>'

	document.write(str1)
})();


$('.tipclick').qtip({
	show: { event: 'click' },
	hide: 'unfocus',
	position: {
		viewport: $(window)
	},
	style: {
		classes: 'qtip-lg qtip-light  qtip-shadow qtip-rounded'  //
	}
});




