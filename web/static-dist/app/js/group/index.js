webpackJsonp(["app/js/group/index"],{b7b955d31d3c6acc3b71:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.initEditor=function(t){var e=CKEDITOR.replace(t.replace,{toolbar:t.toolbar,filebrowserImageUploadUrl:$("#"+t.replace).data("imageUploadUrl"),allowedContent:!0,height:300});e.on("change",function(){$("#"+t.replace).val(e.getData())}),e.on("blur",function(){$("#"+t.replace).val(e.getData())})}},0:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=a("b334fd7e4c5a19234db2"),n=(o(r),a("4833bf6727a52ba97d0c"));(0,n.initThread)(),(0,n.initThreadReplay)();$("#add-btn").click(function(){$(this).addClass("disabled");var t=$(this).data("url");$.post(t,function(t){"success"==t.status?window.location.reload():Notify.danger(t.message)})}),$("#exit-btn").length>0&&$("#exit-btn").click(function(){if(!confirm(Translator.trans("真的要退出该小组？您在该小组的信息将删除！")))return!1;var t=$(this).data("url");$.post(t,function(t){"success"==t.status?window.location.reload():Notify.danger(t.message)})}),$("#thread-list").on("click",".uncollect-btn, .collect-btn",function(){var t=$(this);$.post(t.data("url"),function(){t.hide(),t.hasClass("collect-btn")?t.parent().find(".uncollect-btn").show():t.parent().find(".collect-btn").show()})}),$(".attach").tooltip(),$(".group-post-list").length>0&&($(".group-post-list").on("click",".li-reply",function(){var t=$(this).attr("postId"),e=$(this).data("fromUserId");$("#fromUserIdDiv").html('<input type="hidden" id="fromUserId" value="'+e+'">'),$("#li-"+t).show(),$("#reply-content-"+t).focus(),$("#reply-content-"+t).val(Translator.trans("回复 ")+$(this).attr("postName")+":")}),$(".group-post-list").on("click",".reply",function(){var t=$(this).attr("postId");if(""!=$(this).data("fromUserIdNosub")){var e=$(this).data("fromUserIdNosub");$("#fromUserIdNoSubDiv").html('<input type="hidden" id="fromUserIdNosub" value="'+e+'">'),$("#fromUserIdDiv").html("")}$(this).hide(),$("#unreply-"+t).show(),$(".reply-"+t).css("display","")}),$(".group-post-list").on("click",".unreply",function(){var t=$(this).attr("postId");$(this).hide(),$("#reply-"+t).show(),$(".reply-"+t).css("display","none")}),$(".group-post-list").on("click",".replyToo",function(){var t=$(this).attr("postId");"hidden"==$(this).attr("data-status")?($(this).attr("data-status",""),$("#li-"+t).show(),$("#reply-content-"+t).focus(),$("#reply-content-"+t).val("")):($("#li-"+t).hide(),$(this).attr("data-status","hidden"))}),$(".group-post-list").on("click",".lookOver",function(){var t=$(this).attr("postId");$(".li-reply-"+t).css("display",""),$(".lookOver-"+t).hide(),$(".paginator-"+t).css("display","")}),$(".group-post-list").on("click",".postReply-page",function(){var t=$(this).attr("postId");$.post($(this).data("url"),"",function(e){$("body,html").animate({scrollTop:$("#post-"+t).offset().top},300),!1,$(".reply-post-list-"+t).replaceWith(e)})})),$("#hasAttach").length>0&&$(".ke-icon-accessory").addClass("ke-icon-accessory-red"),$("#post-action").length>0&&($("#post-action").on("click","#closeThread",function(){var t=$(this);return!!confirm(t.attr("title")+"？")&&void $.post(t.data("url"),function(t){window.location.href=t})}),$("#post-action").on("click","#elite,#stick,#cancelReward",function(){var t=$(this);$.post(t.data("url"),function(t){window.location.href=t})})),$(".actions").length>0&&$(".group-post-list").on("click",".post-delete-btn,.post-adopt-btn",function(){var t=$(this);return!!confirm(t.attr("title")+"？")&&void $.post(t.data("url"),function(){window.location.reload()})})},"4833bf6727a52ba97d0c":function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0}),e.initThreadReplay=e.initThread=void 0;var n=a("b7b955d31d3c6acc3b71"),i=a("b334fd7e4c5a19234db2"),s=o(i),l=a("d5fb0e67d2d4c1ebaaed"),d=o(l);e.initThread=function(){var t="#post-thread-btn",e=$("#post-thread-form");new d.default(e),$("#post_content").length&&(0,n.initEditor)({toolbar:"Thread",replace:"post_content"});var a=e.validate({currentDom:t,ajax:!0,rules:{content:{required:!0,minlength:2,visible_character:!0}},submitError:function(){data=data.responseText,data=$.parseJSON(data),data.error?(0,s.default)("danger",data.error.message):(0,s.default)("danger",Translator.trans("发表回复失败，请重试"))},submitSuccess:function(t){return"/login"==t?void(window.location.href=url):void window.location.reload()}});$(t).click(function(){a.form()})},e.initThreadReplay=function(){var t=$(".thread-post-reply-form");t.each(function(){var t=$(this),e=t.find("textarea").attr("name"),a=t.validate({ignore:"",rules:r({},""+e,{required:!0,minlength:2,visible_character:!0}),submitHandler:function(t){var e=$(t).find(".reply-btn"),a=e.attr("postId"),o="";o=$("#fromUserId").length>0?$("#fromUserId").val():$("#fromUserIdNosub").length>0?$("#fromUserIdNosub").val():"",e.button("submiting").addClass("disabled"),$.ajax({url:$(t).attr("action"),data:"content="+$(t).find("textarea").val()+"&postId="+a+"&fromUserId="+o,cache:!1,async:!1,type:"POST",dataType:"text",success:function(t){return"/login"==t?void(window.location.href=t):void window.location.reload()},error:function(t){t=$.parseJSON(t.responseText),t.error?(0,s.default)("danger",t.error.message):(0,s.default)("danger",Translator.trans("发表回复失败，请重试")),e.button("reset").removeClass("disabled")}})}});t.find("button").click(function(t){a.form()})})}}});