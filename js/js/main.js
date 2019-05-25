//管理模块
// require(参数1，参数2)方法
//         参数1：需要依赖的模块[数组的形式]
//         参数2：回调函数（模块加载完毕需要做得事情）


// require(["js/lib/模块1", "js/模块2","js/plug/模块3","js/模块4"],function(参数必须和前面的模块一一对应){
//     //等待前面的模块加载完毕才执行当前回调函数（解决了模块依赖）;
// })


//配置模块
    //1个参数   配置项
require.config({
    baseUrl : 'js/',
    paths : {
        //配置得各个模块
        
        'aExp' : 'js/a',
        'bExp' : 'js/b',
        'cExp' : 'js/c',
        'query' : 'lib/jquery-1.11.3.min',
        'tab' : 'js/tab',
        'banner' : 'js/banner'
    }
    //非AMD规范得模块
    //shim:{}
})

require(['aExp','bExp','cExp','tab','banner'],(a1,b2,c3,tab,banner) => {
    a1.init();
    b2.init();
    c3.init();
    tab.init();
    banner.init();
})






//AMD模块
/** 
 * 
 * define( 参数1 ,参数2 )
 * 
 * 参数1 ； 当前模块所要依赖得模块得名称
 * 参数2 : 回调函数
 *      每个符合AMD规范得模块
 *         return {
 *              init : 当前模块执行得方法
 *          }
 * 
 */