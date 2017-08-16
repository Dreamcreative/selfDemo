/**
 * Created by Administrator on 2017/6/7.
 */
/**
 * 写一个高亮的插件
 **/
/**
 * 定一个闭包区域，防止插件污染
 **/
(function ($){
    /**
     * jQuery.fn.extend(object)扩展jquery方法，制作插件
     */
    //闭包限定命名空间
    $.fn.extend({
        "highLight" : function (options){
            //do something
            var opts = $.extend({}, defaults , options);//使用jQuery.extend 覆盖插件 默认参数
            return  this.each(function(){//这里的this就是 jQuery对象
                //遍历所有的要高亮的dom,当调用 highLight()插件的是一个集合的时候
                var $this = $(this);//获取当前dom 的jQuery 对象， 这里的this 是当前循环的dom
                //更加参数来设置 dom的样式
                $this.css({
                    backgroundColor: opts.background,
                    color: opts.color
                });
            })
        }
    });
    var defaults = {
        color: 'red',
        background : 'yellow'
    };

    //$.fn.extend({
    //     "lighLight" :function (options){
    //         var opts = $.extend({}, defaults , options);
    //         return this.each(function(){
    //             var $this=$(this);
    //             $this.css({
    //                 backgroundColor: opts.background,
    //                 color : opts.color
    //             });
    //         });
    //     };
    //    var defaults={
    //        color:"red",
    //        background:'yellow'
    //    }
    //});

    //$.fn.extend({
    //    "yangbo" : function (active , inner , movequ){
    //        $(active).hover(
    //            function(){
    //                $(inner).show();
    //                $(movequ).show();
    //                var proportionOne = $(active).width()/$(inner).width();
    //                var proportionTwo = $(movequ).find('img').width()/$(movequ).width();
    //                if(proportionOne == proportionTwo){
    //                    $(this).mousemove(function(e){
    //                        var proportionLeft = $(active).width()/$(inner).width();
    //                        var proportionTop = $(actove).height()/$(inner).height;
    //                        $(movequ).scrollLeft($(inner).position().left*proportionLeft).scrollTop($(inner).position().top*proportionTop);
    //                        //以下为下滤镜拖拽
    //                        $(inner).offset({
    //                            left: event.pageX-40,
    //                            top : event.pageY-40
    //                        });
    //                        //以下为判断临界值
    //                        if($(inner).position().left <= 0){
    //                            $(inner).css({ left:0 });
    //                        }
    //                        if($(inner).position().top <= 0){
    //                            $(inner).css({ top :0 });
    //                        }
    //                        if($(inner).position().left >= $(this).width()-$(inner).width()){
    //                            $(inner).css({ left : $(this).width() - $(inner).width() });
    //                        }
    //                        if($(inner).position().top >= $(this).height() - $(inner).height() ){
    //                            $(inner).css({top: $(this).height() - $(inner).height()});
    //                        }
    //                    })
    //                }
    //                else{
    //                    $(active).text('图片宽高不正确').css({
    //                        background : 'yellow',
    //                        color : 'red'
    //                    });
    //                }
    //            },function(){
    //                $(inner).hide();
    //                $(movequ).hide();
    //            }
    //        )
    //    }
    //});
})(window.jQuery);
/**
 * var table=document.getElementsByTagName("table")[0];
var a=table.getElementsByTagName("a");
console.log(a[0].innerHTML);
 */


/*
* 在网页中导入国家和首都
*/
//var table=document.getElementsByTagName("table");
//var arr=[];
//for(var i=0;i<table.length;i++){
//    tables=table[i];
//    var a=tables.getElementsByTagName("a");
//    for(var j=0;j<a.length;j++){
//        var as=a[j];
//        arr.push(as.innerHTML);
//    }
//}
//console.log(arr);
