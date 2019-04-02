var _const = function _const( data , value ){
    window.data = value ;
    Object.defineProperty( window, data, {
        enumerable:false,
        configurable:false,
        get:function(){
            return value ;
        },
        set:function( data ){
            if( data !==value){
                throw new TypeError("Assignment to constant variable");
            }else{
                return value ;
            }
        }
    })
}
_const("abc",10);
console.log(abc);
delete abc ;
console.log(abc);
for( let item in window){
    console.log( item )
    if(item ==="abc"){// _const 定义的变量都不能够 遍历,所以不执行
        console.log( window[item]);
    }
}
abc=20;
