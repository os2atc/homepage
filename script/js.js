pageTipsFun();
function pageTipsFun() {
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = b_version.split(";");
    if(version[1] === undefined) return;
    var trim_Version = version[1].replace(/[ ]/g, "");
    if (browser == "Microsoft Internet Explorer") {
        if(trim_Version == "MSIE9.0" || trim_Version == "MSIE8.0" || trim_Version == "MSIE7.0" || trim_Version == "MSIE6.0" || trim_Version == "MSIE5.0"){
            document.write('<div class="pageTips" id="pageTips"><div class="container"><a href="javascript:;" onclick="tipsHide()" class="close"></a><div class="img"><img src="image/nimg273.png" alt="" /></div><div class="msg">抱歉，我们不再支持您的浏览器。请升级您的Internet Explorer（IE）浏览器到<a href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads" target="_blank">最新版本( IE 10以上版本)</a>，或将<a href="https://ie.sogou.com/" target="_blank">搜狗</a>、<a href="https://browser.360.cn/" target="_blank">360</a>、<a href="https://browser.qq.com/" target="_blank">QQ</a> 等浏览器切换到急速模式，您还可以下载安装 <a href="https://www.google.cn/chrome/" target="_blank">谷歌</a>、<a href="https://www.firefox.com.cn/">火狐</a> 浏览器以达到最佳观看模式。</div></div></div>')
        }
    }
}
function tipsHide() {
    document.getElementById('pageTips').style.visibility = "hidden"
}

fontSize();
$(window).resize(function () {
    fontSize();
});

function fontSize() {
    var size;
    var winW = $(window).width();
    if (winW <= 1600 && winW > 800) {
        size = Math.round(winW / 16);
    } else if (winW <= 800) {
        size = Math.round(winW / 7.5);
        if (size > 85) {
            size = 85;
        }
    } else {
        size = 100;
    }
    $('html').css({
        'font-size': size + 'px'
    })
}

$(function () {
    //--
    setTimeout(function () {
        $('body').addClass('show');
    }, 500);
    //--
    $('.navA').click(function () {
        if ($('body').hasClass('navShow')) {
            $('body').removeClass('navShow')
        } else {
            $('body').addClass('navShow')
        }
    });
    $('.g-nav').find('li').each(function () {
        var _ = $(this);
        if ($(this).find('.list').length > 0) {
            _.find('a.name').click(function () {
                if ($(window).width() > 800) return;
                if (_.hasClass('on')) {
                    _.removeClass('on');
                    _.find('.list').hide();
                } else {
                    _.addClass('on');
                    _.find('.list').show();
                }
                return false;
            })
        }
    });
    //--返回顶部
    scroll2top();

    //--js下拉选择框
    $('.select').each(function () {
        var _this = $(this);
        _this.find('select').change(function () {
            _this.find('span').html($(this).find("option:selected").text());
        })
    })

});

function swiperFun(swiper) {
    this.dom = swiper.dom;
    this.domList  = this.dom;
    this.dom.find('ul').addClass('swiper-wrapper');
    this.dom.find('li').addClass('swiper-slide');
    if(swiper.domList !== undefined){
        this.domList = this.dom.find(swiper.domList)
    }
    if(this.dom.find('.num').length > 0){
        this.dom.find('.num-total').html(this.dom.find('li').length)
    }

    this.change = function () {};
    var that = this;
    this.mySwiper = new Swiper(that.domList, {
        loop:true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        speed: 600,
        slidesPerView: swiper.slidesPerView !== undefined ? swiper.slidesPerView : 1,
        centeredSlides: swiper.centeredSlides !== undefined ? swiper.centeredSlides : false,
        pagination: that.dom.find('.dots'),
        onSlideChangeStart: function(swiper){
            if(that.dom.find('.num').length > 0){
                that.dom.find('.num-curr').html(swiper.realIndex + 1)
            }
            that.change(swiper.realIndex);
        }
    });
    this.dom.hover(
        function () {
            that.mySwiper.stopAutoplay()
        },
        function () {
            that.mySwiper.startAutoplay()
        }
    );
    this.dom.find('.prev').click(function () {
        that.mySwiper.slidePrev();
        return false
    });
    this.dom.find('.next').click(function () {
        that.mySwiper.slideNext();
        return false
    })
}

//--选项卡-- tabFun({dom: $('.about'), curr: 0});
function tabFun(tab) {
    var btn = tab.dom.find('.tab-btn li'),
        box = tab.dom.find('.tab-box');

    btn.each(function (i) {
        $(this).click(function () {
            change(i)
        })
    });

    change(tab.curr);
    function change(curr) {
        btn.removeClass('on');
        btn.eq(curr).addClass('on');
        box.hide();
        box.eq(curr).fadeIn()
    }
}

function scroll2top() {
    var btn = $('.topA');
    btn.click(function () {
        $('body,html').stop(true, true).animate({scrollTop: 0}, 300);
    });
    $(window).scroll(function () {
        if($(window).scrollTop() > $(window).height()){
            btn.addClass('show')
        }else{
            btn.removeClass('show')
        }
    });
}


