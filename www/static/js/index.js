$(document).ready(function () {


    	$(function(){ 
			//移到banner上显示左右俩耳朵
			$(".banner").hover(function(){
				$(".jt").show();
			},function(){ 
				$(".jt").hide();
			});
			var index=0;
			//右耳朵，点击事件
			$(".banner").find(".b_right").click(function(){ 
				index++;
				if(index>1)index=0;
				$(".b_ul").find("li").eq(index).fadeIn("slow").siblings().hide();
				$(".b_yq").find("li").eq(index).addClass("y_li1").siblings().removeClass("y_li1");
			});
			//左耳朵，点击事件
			$(".banner").find(".b_left").click(function(){ 
				index--;
				if(index<0)index=1;
				$(".b_ul").find("li").eq(index).fadeIn("slow").siblings().hide();
				$(".b_yq").find("li").eq(index).addClass("y_li1").siblings().removeClass("y_li1");
			});
			//点击原点切换对应图片
			$(".b_yq").find("li").mouseover(function(){
				$(this).addClass("y_li1").siblings().removeClass("y_li1");
				var i = $(this).index();
				index = i;
				$(".b_ul").find("li").eq(index).fadeIn("slow").siblings().hide();
			});
			//自动循环播放banner
			setInterval(function(){
				index++;
				var length = $(".b_ul").find("li").length;
				if(index>=length)index=0;
				$(".b_ul").find("li").eq(index).fadeIn("slow").siblings().hide();
				$(".b_yq").find("li").eq(index).addClass("y_li1").siblings().removeClass("y_li1");	
			},3500);
            

		})
        
});