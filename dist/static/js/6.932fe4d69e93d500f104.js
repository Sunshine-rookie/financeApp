webpackJsonp([6,73],{32:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{lists:[{tit:"",img:"../../assets/img/flashCredit.png",isOn:!1,href:self},{tit:"",img:"../../../assets/img/Auto.png",isOn:!1,href:self}],hasTouch:"ontouchstart"in window,goTouchStart:"ontouchstart"in window?"touchstart":"mousedown",goTouchMove:"ontouchstart"in window?"touchmove":"mousemove",goTouchEnd:"ontouchstart"in window?"touchend":"mouseup",eachLeft:{},index:0,flag:!1,$width:0,$length:0,$start:0,$end:0}},methods:{tStart:function(t){t.preventDefault(),this.flag=!0,this.$start=this.hasTouch?t.changedTouches[0].screenX:t.screenX},tMove:function(t){this.flag&&(this.$end=this.hasTouch?t.changedTouches[0].screenX:t.screenX,(this.$end-this.$start>0&&0!==this.index||this.$end-this.$start<0&&this.index!==this.$length-1)&&(this.$refs.ul.style.marginLeft=this.eachLeft[this.index]+this.$end-this.$start+"px"))},tEnd:function(t){this.flag===!0&&(this.flag=!1,this.$end=this.hasTouch?t.changedTouches[0].screenX:t.screenX,this.$end-this.$start>20?(0!==this.index&&(this.lists[this.index].isOn=!1,this.index--,this.lists[this.index].isOn=!0),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])):this.$start-this.$end>20?(this.index!==this.$length-1&&(this.lists[this.index].isOn=!1,this.index++,this.lists[this.index].isOn=!0),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])):(console.log("效果测试用的新窗口打开，【实际需要router/本窗口打开其它链接】"),window.open(this.lists[this.index].href,"_blank"),this.goAnimate(parseInt(this.$refs.ul.style.marginLeft),this.eachLeft[this.index])))},goAnimate:function(t,e){var s=this,n=e-t,i=200,h=0,o=10,r=n/i*o,a=setInterval(function(){h+=o,h===i?(clearInterval(a),s.$refs.ul.style.marginLeft=e+"px"):(t+=r,s.$refs.ul.style.marginLeft=t+"px")},o)}},mounted:function(){this.$width=this.$refs.banner.clientWidth,this.$length=this.$refs.ul.childElementCount,this.lists[this.index].isOn=!0;for(var t=0;t<this.$length;t++)this.eachLeft[t]=-this.$width*t;this.$refs.banner.children[0].children[0].style.width=this.$width+"px";for(var e=this,s=document.getElementById("bannerTag").getElementsByTagName("span"),n=document.getElementById("banner"),i=0;i<s.length;i++)s[i].idx=i,s[i].addEventListener(this.goTouchStart,function(t){t.stopPropagation(),e.index!==this.idx&&(e.lists[e.index].isOn=!1,e.index=this.idx,e.lists[e.index].isOn=!0,e.goAnimate(parseInt(e.$refs.ul.style.marginLeft),e.eachLeft[e.index]))});n.addEventListener(this.goTouchStart,this.tStart),document.addEventListener(this.goTouchMove,this.tMove),document.addEventListener(this.goTouchEnd,this.tEnd)},beforeDestroy:function(){document.removeEventListener(this.goTouchMove,this.tMove),document.removeEventListener(this.goTouchEnd,this.tEnd)}}},72:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(173),h=n(i);e.default={data:function(){return{list:[{cls:"",tit:"微额借款",con:"金额500、1000元，期限7天、14天、21天",push:"/loan/micro"},{cls:"icon02",tit:"小额借款",con:"最高金额5000元，最长期限6个月",push:"/loan/samll"},{cls:"icon03",tit:"福利借款",con:"最高金额10000元，期限30天",push:"/loan/large"}]}},components:{loanBanner:h.default}}},173:function(t,e,s){var n=s(1)(s(32),s(272),null,null);t.exports=n.exports},217:function(t,e,s){var n=s(1)(s(72),s(301),null,null);t.exports=n.exports},272:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"banner",staticClass:"indexBanner",attrs:{id:"banner"}},[s("ul",{ref:"ul",staticStyle:{"margin-left":"0"}},t._l(t.lists,function(t){return s("li",[s("img",{attrs:{src:t.img,alert:t.tit}})])})),t._v(" "),s("div",{staticClass:"tag",attrs:{id:"bannerTag"}},[t._l(t.lists,function(e,n){return[s("span",{class:{on:e.isOn}},[t._v(t._s(n+1))])]})],2)])},staticRenderFns:[]}},301:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("topComponent",{attrs:{title:t.appName,showLeft:!1}}),t._v(" "),s("loanBanner"),t._v(" "),s("ul",{staticClass:"indexList mt20"},t._l(t.list,function(e){return s("li",{class:e.cls,on:{click:function(s){t.$router.push(e.push)}}},[s("b",[t._v(t._s(e.tit))]),t._v(t._s(e.con))])})),t._v(" "),s("footComponent",{attrs:{idx:0}})],1)},staticRenderFns:[]}}});