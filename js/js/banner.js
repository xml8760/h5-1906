define(['query'], () => {
    function banner() {
        function Slideshow() {
            this.imgBox = $('.imgBox');
            this.prev = $('.show span').eq(0);
            this.next = $('.show span').eq(1);
            this.distance = $('.imgBox img').width();
            this.show = $('.show');
            this.radiusBox = $('.radiusBox');
            this.count = 0;
            this.timer = null;
            this.init();
        }
        Slideshow.prototype = {
            init: function () {
                //克隆第一张放在最后
                $('.imgBox img').first().clone().appendTo($('.imgBox'));
                //计算imgBox宽度
                this.imgBox.css('width', this.distance * $('.imgBox img').length)
                this.img = $('.imgBox img');
                this.autoPlay();
                this.addLi();
                this.eventBind();   //事件板块
            },
            imgBoxMove: function () {
                this.imgBox.stop(true).animate({
                    left: - this.distance * this.count
                }, 500)
            },
            prevImg: function () {
                if (this.count <= 0) {
                    this.imgBox.css('left', -this.distance * (this.img.length - 1));
                    this.count = this.img.length - 2;
                } else {
                    this.count--;
                }
                this.imgBoxMove();
                this.changeStyle();
            },
            nextImg: function () {
                if (this.count >= this.img.length - 1) {
                    this.imgBox.css('left', 0);
                    this.count = 1;
                } else {
                    this.count++;
                }
                this.imgBoxMove();
                this.changeStyle();
            },
            autoPlay: function () {
                var _this = this;
                this.timer = setInterval(function () {
                    _this.nextImg();
                }, 2000)
            },
            addLi: function () {
                //添加百点（根据图片lenth）
                //console.log($('.imgBox img').length)
                for (var i = 0; i < $('.imgBox img').length - 1; i++) {
                    var createLi = $('<li></li>');
                    this.radiusBox.append(createLi);
                }
                //给第一个白添加类名
                $('.radiusBox li:first').addClass('active');
            },
            changeStyle: function () {
                //把this.count作为li的下标
                $('.radiusBox li').eq(this.count > $('.imgBox img').length - 2 ? 0 : this.count).addClass('active').siblings().removeClass('active');
            },
            radiusChange: function (index) {
                $('.radiusBox li').eq(index).addClass('active').siblings().removeClass('active');
            }
            ,
            eventBind: function () {
                var _this = this;
                this.prev.click(function () {
                    _this.prevImg();
                })
                this.next.click(function () {
                    _this.nextImg();
                })
                this.show.mouseover(function () {
                    clearInterval(_this.timer);
                })
                this.show.mouseout(function () {
                    _this.autoPlay();
                })
                $('.radiusBox li').mouseover(function () {
                    var index = $(this).index()
                    _this.radiusChange(index);
                    _this.count = index;
                    _this.imgBoxMove();
                })
            }
        }
        new Slideshow();

    }

    return{
        init : banner
    }
})