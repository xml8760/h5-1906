define(['query'],() => {
    function tab(){
        $('.btnBox span').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $('.conShow div').eq($(this).index()).addClass('divShow').siblings().removeClass('divShow');
        })
    }
    return {
        init:tab
    }
})