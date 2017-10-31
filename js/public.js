$(function(){
	remSize()
	$(window).on('resize',function(){
		remSize()
	})
	
	 $('.ui-custom>li').on('click',function(){
	 	 var idx=$(this).index();
	 	 $(this).addClass('current').siblings().removeClass('current');
	 	 $('.uiContent-custom>li').eq(idx).addClass('current').siblings().removeClass('current');
	 })
})
function remSize(){
	document.documentElement.style.fontSize = document.documentElement.clientWidth*100/750 + 'px'; 
}