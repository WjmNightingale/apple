$(document).ready(function () {
    var totWidth = 0;
    var positions = new Array();
    $('#slides .slide').each(function (i) {
        positions[i] = totWidth;
        totWidth += $(this).width();//获取当前元素的宽度
        console.log(totWidth);
        console.log(positions);
        if (!$(this).width()) {
            alert("请设置图片的宽高!");
            return false;
        }
    });
    //循环后totWidth = 3680
    $('#slides').width(totWidth);//获取页面所有images宽度总和后重新设置sildes的宽度
    $('#menu ul li a').click(function (e, keepScroll) {
        $('li.menuItem').removeClass('act').addClass('inact');
        $(this).parent().addClass('act');
        //获取元素的当前位置
        var pos = $(this).parent().prevAll('.menuItem').length;
        console.log(pos);
        //图片切换
        $('#slides').stop().animate({
            marginLeft: -positions[pos] + 'px'
        }, 450)
        //阻止a标签默认事件
        e.preventDefault();
        //鼠标点击进来后停止自动播放
        if (!keepScroll) clearInterval(itvl);
    });
    $('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
    var current = 1;
    function autoAdvance() {
        if (current === -1) {
            return false;
        }
        $('#menu ul li a').eq(current % $('#menu ul li a').length).trigger('click', [true]);
        current++;
    }
    var changeEvery = 10;
    var itvl = setInterval(function () {
        autoAdvance()
    }, changeEvery * 1000)
})
