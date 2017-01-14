
$(function(){
	banner();
    $('.sn_adert img').addClass('swing animated').click(function(){
        $(this).parent().parent().hide();
    });

})
function banner(){
	var $banner=$(".sn_banner");
	var width=$banner.width();
	var $imgBox=$banner.find("ul:first");
	var $prionBox=$banner.find("ul:eq(1)");
	
	var index=1;
	var timer=setInterval(function(){
		index++;
		$imgBox.animate({'transform':'translateX('+(-index*width)+'px)'},300,"linear",function(){
			if(index>=9){
				index=1;
				$imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
			}else if (index<=0){
				index=8;
				$imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
			}	
		});
	},1000);
	
	
	
	
	
	
	
	
	
	
	
	
	

	}
