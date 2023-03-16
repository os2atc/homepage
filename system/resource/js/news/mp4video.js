function showVsbVideo(vurl, vheight, vwidth, align, style, vautoplay, mid) { if (vurl == "") { return } var outputHTML = ""; if (hasPlayHtml5Vedio()) { outputHTML = outPutHTML5Video(vurl, vheight, vwidth, vautoplay, align, style, mid) } else { outputHTML = outPutFlashVideo(vurl, vheight, vwidth, vautoplay, align, style, mid) }
    document.write(outputHTML) }

function hasPlayHtml5Vedio() { var a = document.createElement("video"),
        c = !!a.canPlayType; if (c) { c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"'); var d = 'video/mp4; codecs="avc1.42E01E';
        c.h264 = a.canPlayType(d + '"') || a.canPlayType(d + ', mp4a.40.2"'), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"') } return c }

function outPutFlashVideo(videoUrl, wHeight, wWidth, bautoPlay, align, style, mid) { if (!mid || mid == "") { mid = "id=_vsb_player" } var flashUrl = "<object " + mid + ' align="' + align + '" style="' + style + '" type="application/x-shockwave-flash" data="./system/resource/swf/flowplayer.commercial.swf"  ' + wWidth + "  " + wHeight + ">"; var configstr = "&quot;playlist&quot;:[{&quot;url&quot;:&quot;" + videoUrl + "&quot;,&quot;scaling&quot;:&quot;fit&quot;,&quot;autoPlay&quot;:" + bautoPlay + ",&quot;autoBuffering&quot;:&quot;false&quot;}]";
    flashUrl = flashUrl + '<param name="flashvars" value="config={' + configstr + '}">';
    flashUrl = flashUrl + '<param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="sameDomain"><param name="quality" value="high"><param name="cachebusting" value="false"><param name="bgcolor" value="#000000"><param name="src" value="./system/resource/swf/flowplayer.commercial.swf">';
    flashUrl = flashUrl + "</object>"; return flashUrl }

function outPutHTML5Video(videoUrl, wHeight, wWidth, bautoPlay, align, style, mid) { if (!mid || mid == "") { mid = "id=_vsb_player" } var res = '<video controlsList="nodownload" controls ' + mid + ' style="background-color:#474747;' + style + '" align="' + align + '" ' + wWidth + "  " + wHeight; if (bautoPlay && bautoPlay == "true") { res += ' autoplay="autoplay" ' }
    res += '><source src="' + videoUrl + '" type="video/mp4" /></video> '; return res }

function outVideoForMobile(vurl, vheight, vwidth, vautoplay) { if (hasPlayHtml5Vedio()) { var res = '<video controls="controls" controlsList="nodownload" width="' + document.body.clientWidth + '"'; if (vautoplay && vautoplay == "true") { res += ' autoplay="autoplay" ' }
        res += '><source src="' + vurl + '" type="video/mp4" /></video> ';
        document.write(res) } else { alert("不支持") } }

function showVsbAudio(aurl, vheight, vwidth, align, styles, vautoplay) { if (aurl == "") { return } var playersrc = "./system/resource/images/ueditor/musicFlash/player_mp3_maxi.swf"; var flashvars = "mp3=" + aurl + "&showstop=1&showvolume=1&bgcolor1=eeeeee&bgcolor2=a0a0a0"; var autoplayStr = ""; if (vautoplay == "true") { autoplayStr = "autoplay = 'true'";
        flashvars += "&autoplay=1" } var outputHTML = "";
    outputHTML += '<audio src="' + aurl + '" width="' + vwidth + '" height="' + vheight + '"  ' + autoplayStr + ' align="' + align + '" style="' + styles + '"  controls="controls"><embed align="' + align + '" style="' + styles + '" width="' + vwidth + '" height="' + vheight + '" src="' + playersrc + '" flashvars="' + flashvars + '" /></audio>';
    document.write(outputHTML) };