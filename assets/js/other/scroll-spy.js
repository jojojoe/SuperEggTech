!function(v,o,t,e){v.fn.extend({scrollspy:function(i){var t={namespace:"scrollspy",activeClass:"active",animate:!0,offset:0,container:o};i=v.extend({},t,i);var l=function(t,e){return parseInt(t,10)+parseInt(e,10)},c=function(t,e){for(var n=0;n<t.length;n++){var a=v(t[n]);if(a.attr("href")===e)return a}},h=function(t){for(var e=0;e<t.length;e++){v(t[e]).parent().removeClass(i.activeClass)}};return this.each(function(){for(var r=this,t=v(i.container),f=v(r).find("a"),e=0;e<f.length;e++){var n=f[e];v(n).on("click",function(t){var e=v(this).attr("href"),n=v(e);if(0<n.length){var a=l(n.offset().top,i.offset+5);i.animate?v("html, body").animate({scrollTop:a},600):o.scrollTo(0,a),t.preventDefault()}})}var s=function(t){for(var e=[],n=0;n<t.length;n++){var a=t[n],o=v(a).attr("href"),r=v(o);if(0<r.length){var f=Math.floor(r.offset().top),s=f+Math.floor(r.outerHeight());e.push({element:r,hash:o,top:f,bottom:s})}}return e}(f);t.bind("scroll."+i.namespace,function(){for(var t,e={top:l(v(this).scrollTop(),Math.abs(i.offset)),left:v(this).scrollLeft()},n=0;n<s.length;n++){var a=s[n];if(e.top>=a.top&&e.top<a.bottom){var o=a.hash;if(t=c(f,o)){i.onChange&&i.onChange(a.element,v(r),e),h(f),t.parent().addClass(i.activeClass);break}}}!t&&i.onExit&&i.onExit(v(r),e)})})}})}(jQuery,window,document);