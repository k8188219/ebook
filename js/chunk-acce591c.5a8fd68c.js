(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acce591c"],{"12a5":function(t,e,s){},1479:function(t,e,s){},"1e4b":function(t,e,s){},"22df":function(t,e,s){"use strict";var i=s("e842"),n=s.n(i);n.a},"3e4e":function(t,e,s){"use strict";var i=s("e09b"),n=s.n(i);n.a},4327:function(t,e,s){"use strict";var i=s("db27"),n=s.n(i);n.a},"48f2":function(t,e,s){},"51a1":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ebook"},[s("ebook-title"),s("ebook-reader"),s("ebook-menu"),s("ebook-search")],1)},n=[],a=s("5158"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-down"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.bookState.titleVisible,expression:"bookState.titleVisible"}],staticClass:"title-wrapper"},[s("div",{staticClass:"icon"},[s("span",{staticClass:"icon-back",on:{click:t.back}})]),s("div",{staticStyle:{width:"100%"}},[s("transition",{attrs:{name:"fade"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.bookState.titleTextVisible,expression:"bookState.titleTextVisible"}],ref:"titleText",staticClass:"text"},[t._v("书籍加载中...")])])],1),s("div",{staticClass:"icon",staticStyle:{cursor:"pointer"},on:{click:t.showSearch}},[s("span",{staticClass:"icon-search"})])])])},c=[],r=s("389c"),l={name:"EbookTitle",data:function(){return{bookState:r["b"]}},methods:{back:function(){console.log("back")},setTitleText:function(t){this.$refs.titleText.textContent=t},showSearch:function(){r["b"].menuVisible=!1,r["b"].titleVisible=!1,r["b"].searchVisible=!0}},mounted:function(){this.bookState.setTitleText=this.setTitleText}},u=l,b=(s("8a9c"),s("2877")),d=Object(b["a"])(u,o,c,!1,null,"2c71bf11",null),f=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-bar"},[s("transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.bookState.menuVisible&&-1===t.bookState.settingVisible,expression:"bookState.menuVisible && bookState.settingVisible === -1"}],staticClass:"menu-wrapper"},[s("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.showSetting(3)}}},[s("v-icon",{key:t.bookState.bookAvailable,style:{cursor:t.bookState.bookAvailable?"pointer":"not-allowed"},attrs:{color:"black"}},[t._v(t._s(t.mdiFormatListBulleted)+" ")])],1),s("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.showSetting(2)}}},[s("span",{key:t.bookState.bookAvailable,staticClass:"icon-progress",style:{cursor:t.bookState.bookAvailable?"pointer":"not-allowed"}})]),s("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.showSetting(1)}}},[s("span",{staticClass:"icon-bright",staticStyle:{cursor:"pointer"}})]),s("div",{staticClass:"icon-wrapper",on:{click:function(e){return t.showSetting(0)}}},[s("span",{staticClass:"icon-A",staticStyle:{cursor:"pointer"}})])])]),s("setting-font"),s("setting-font-family"),s("setting-theme"),s("setting-progress"),s("ebook-slide")],1)},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:4===t.bookState.settingVisible,expression:"bookState.settingVisible === 4"}],staticClass:"setting-font-list"},[s("div",{staticClass:"setting-font-title"},[s("span",{staticClass:"setting-font-title-text"},[t._v("选择字体")])]),s("div",{staticClass:"setting-font-list-wrapper"},t._l(t.fontFamilyList,(function(e,i){return s("div",{key:i,staticClass:"setting-font-item",class:{selected:t.isSelected(e)},on:{click:function(s){return t.setFontFamily(e)}}},[s("div",{staticClass:"setting-font-item-text"},[t._v(t._s(e.name))]),t.isSelected(e)?s("div",{staticClass:"setting-font-item-check"},[s("span",{staticClass:"icon-check"})]):t._e()])})),0)])])},h=[],k=(s("b0c0"),s("8ede")),g=s("e8ec"),S={name:"SettingFontFamily",data:function(){return{bookState:r["b"],fontFamilyList:k["a"],switch1:!1}},methods:{isSelected:function(t){return r["b"].defaultFontName===t.name},setFontFamily:function(t){r["b"].defaultFontName=t.name,Object(g["f"])(t),"默认"===t.name?r["b"].book.rendition.themes.font(""):r["b"].book.rendition.themes.font('"'.concat(t.font,'"'),this.switch1)},changeSwitch:function(){console.log("我改变了")}}},C=S,w=(s("e701"),Object(b["a"])(C,v,h,!1,null,"1b5143d4",null)),x=w.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.bookState.settingVisible,expression:"bookState.settingVisible === 0"}],staticClass:"setting-wrapper"},[s("div",{staticClass:"setting-font-size"},[s("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v("A")]),s("div",{staticClass:"select"},t._l(t.fontSizeList,(function(e,i){return s("div",{key:i,staticClass:"select-wrapper",on:{click:function(s){return t.setFontSize(e.fontSize)}}},[s("div",{staticClass:"line"}),s("div",{staticClass:"point-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.bookState.defaultFontSize===e.fontSize,expression:"bookState.defaultFontSize===item.fontSize"}],staticClass:"point"},[s("div",{staticClass:"small-point"})])]),s("div",{staticClass:"line"})])})),0),s("div",{staticClass:"preview",style:{fontSize:t.fontSizeList[t.fontSizeList.length-1].fontSize+"px"}},[t._v("A ")])]),s("div",{staticClass:"setting-font-family",on:{click:function(e){return e.stopPropagation(),t.showFontFamily(e)}}},[s("div",{staticClass:"setting-font-family-text-wrapper"},[s("span",{staticClass:"setting-font-family-text"},[t._v(t._s(t.bookState.defaultFontName))])]),s("div",{staticClass:"setting-font-family-icon-wrapper"},[s("span",{staticClass:"icon-forward"})])])])])},_=[],L={name:"SettingFont",data:function(){return{bookState:r["b"],fontSizeList:k["b"]}},methods:{setFontSize:function(t){r["b"].book.rendition.themes.fontSize(t+"px"),r["b"].defaultFontSize=t,Object(g["g"])(t)},showFontFamily:function(){r["b"].settingVisible=4}}},T=L,V=(s("aa09"),Object(b["a"])(T,y,_,!1,null,"c6f2910e",null)),A=V.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.bookState.settingVisible,expression:"bookState.settingVisible===1"}],staticClass:"setting-wrapper"},[s("div",{staticClass:"setting-theme"},t._l(t.themeList,(function(e,i){return s("div",{key:i,staticClass:"setting-theme-item",on:{click:function(e){return t.setTheme(i)}}},[s("div",{staticClass:"preview",class:{selected:e.name===t.bookState.defaultTheme},style:{background:e.back}}),s("div",{staticClass:"text",class:{selected:e.name===t.bookState.defaultTheme}},[t._v(t._s(e.name))])])})),0)])])},z=[],N={name:"SettingTheme",data:function(){return{bookState:r["b"],themeList:r["a"]}},methods:{setTheme:function(t){r["b"].defaultTheme=this.themeList[t].name,r["b"].book.rendition.themes.select(this.themeList[t].className),document.querySelector("div.v-application").style.background=this.themeList[t].back,Object(g["j"])(this.themeList[t])}}},E=N,j=(s("22df"),Object(b["a"])(E,F,z,!1,null,"6af11137",null)),M=j.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-up"}},[t.bookState.bookAvailable?s("div",{directives:[{name:"show",rawName:"v-show",value:2===t.bookState.settingVisible,expression:"bookState.settingVisible===2"}],staticClass:"setting-wrapper"},[s("div",{staticClass:"setting-progress"},[s("div",{staticClass:"read-time-wrapper"},[s("span",{staticClass:"read time-wrapper"},[t._v(t._s(t.getReadTimeText(t.bookState.fileName)))]),s("v-icon",{attrs:{color:"black"}},[t._v(t._s(t.mdiChevronRight))])],1),s("div",{staticClass:"progress-wrapper"},[s("div",{staticClass:"progress-icon-wrapper",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.prevSection()}}},[s("span",[t._v("上一章")])]),s("input",{ref:"progress",class:t.isFirefox?"progress-mozilla":"progress-webkit",attrs:{type:"range",max:"1000",min:"0",step:"1"},domProps:{value:t.bookState.progress},on:{input:function(e){return t.onProgressInput(e.target.value)},change:function(e){return t.onProgressChange(e.target.value)}}}),s("div",{staticClass:"progress-icon-wrapper",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.nextSection()}}},[s("span",[t._v("下一章")])])]),s("div",{staticClass:"text-wrapper"},[s("span",{staticClass:"progress-section-text"},[t._v(t._s(t.getSectionName))]),s("span",[t._v("("+t._s(t.bookState.progress/10+"%")+")")])])])]):t._e()])},P=[],$=s("5de6"),H=s("94ed"),R={name:"SettingProgress",data:function(){return{bookState:r["b"],isFirefox:!1,mdiChevronLeft:H["b"],mdiChevronRight:H["c"],getReadTimeText:$["b"]}},methods:{onProgressChange:function(t){r["b"].progress=t;var e=r["b"].book.locations.cfiFromPercentage(t/1e3);r["b"].book.rendition.display(e).then((function(){r["b"].refreshLocation(!0,!1)}))},onProgressInput:function(t){r["b"].progress=t,this.updateProgressBg()},updateProgressBg:function(){this.$refs.progress.style.backgroundSize="".concat(r["b"].progress/10,"% 100%")},prevSection:function(){r["b"].section>0&&(r["b"].section--,this.displaySection())},nextSection:function(){r["b"].section<r["b"].navigation.length&&(r["b"].section++,this.displaySection())},displaySection:function(){r["b"].book.rendition.display(r["b"].navigation[r["b"].section-1].href).then((function(){r["b"].refreshLocation(!0,!0,!1)}))}},computed:{getSectionName:function(){return r["b"].section?r["b"].navigation[r["b"].section-1].label:r["b"].metadata.title}},mounted:function(){this.isFirefox=/Firefox/i.test(navigator.userAgent)},updated:function(){this.updateProgressBg()}},B=R,I=(s("4327"),Object(b["a"])(B,O,P,!1,null,"f0dd7d0a",null)),Z=I.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-right"}},[t.bookState.bookAvailable?s("div",{directives:[{name:"show",rawName:"v-show",value:3===t.bookState.settingVisible,expression:"bookState.settingVisible===3"}],staticClass:"slide-content"},[s("div",{staticClass:"content-page-wrapper"},[s("v-tabs",{attrs:{grow:"","slider-size":"1"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab",[t._v("目录")]),s("v-tab",[t._v("书签")])],1),s("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab-item",[s("contents")],1),s("v-tab-item")],1)],1)]):t._e()])},G=[],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ebook-slide-contents"},[s("div",{staticClass:"slide-contents-book-wrapper"},[s("div",{staticClass:"slide-contents-book-img-wrapper"},[s("img",{staticClass:"slide-contents-book-cover",attrs:{src:t.bookState.cover}})]),s("div",{staticClass:"slide-contents-book-info-wrapper"},[s("div",{staticClass:"slide-contents-book-title"},[t._v(t._s(t.bookState.metadata.title))]),s("div",{staticClass:"slide-contents-book-author"},[t._v(t._s(t.bookState.metadata.creator))])]),s("div",{staticClass:"slide-contents-book-progress-wrapper"},[s("div",{staticClass:"slide-contents-book-progress"},[s("span",{staticClass:"progress"},[t._v(t._s(t.bookState.progress/10+"% 已读"))])]),s("div",{staticClass:"slide-contents-book-time"},[t._v(t._s(t.getReadTimeText(t.bookState.fileName)))])])]),s("div",{staticClass:"slide-contents-list-wrapper",style:{height:t.getHeight()}},t._l(t.bookState.navigation,(function(e,i){return s("div",{key:i,staticClass:"slide-contents-list",on:{click:function(s){return t.jump(e.href)}}},[s("span",{staticClass:"slide-contents-item-label",class:{selected:t.bookState.section-1===i},style:t.contentItemStyle(e)},[t._v(t._s(e.label))]),s("span",{staticClass:"slide-contents-item-page"})])})),0)])},W=[];function q(t){var e=37.5;return t/e}function D(t){var e=window.innerWidth>500?500:window.innerWidth;return t*(e/375)}var Q={name:"Contents",data:function(){return{bookState:r["b"],getReadTimeText:$["b"]}},methods:{getHeight:function(){return window.innerHeight-48-D(96)+"px"},contentItemStyle:function(t){return{marginLeft:"".concat(q(15*t.level),"rem")}},jump:function(t){r["b"].display(t),r["b"].settingVisible=-1}}},U=Q,X=(s("3e4e"),Object(b["a"])(U,J,W,!1,null,"88cc4c80",null)),Y=X.exports,tt={name:"EbookSlide",components:{Contents:Y},data:function(){return{bookState:r["b"],currentTab:1,tab:null}},methods:{jumpTo:function(t){r["b"].settingVisible=-1,r["b"].display(t)},selectTab:function(t){this.currentTab=t}}},et=tt,st=(s("7946"),Object(b["a"])(et,K,G,!1,null,"0a636bf5",null)),it=st.exports,nt={name:"EbookMenu",components:{EbookSlide:it,SettingProgress:Z,SettingTheme:M,SettingFontFamily:x,SettingFont:A},data:function(){return{progress:0,bookState:r["b"],mdiFormatListBulleted:H["d"]}},methods:{showSetting:function(t){t>=2?r["b"].bookAvailable&&(r["b"].settingVisible=t,r["b"].menuVisible=!1,r["b"].titleVisible=!1):(r["b"].menuVisible=!1,r["b"].settingVisible=t,r["b"].titleVisible=!1)}}},at=nt,ot=(s("9c93"),Object(b["a"])(at,p,m,!1,null,"d99a4c8a",null)),ct=ot.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.bookState.searchVisible,expression:"bookState.searchVisible"}],staticClass:"ebook-search-wrapper",style:{background:t.getBackGround()}},[s("div",{staticClass:"search-wrapper"},[s("v-text-field",{staticClass:"search-input",attrs:{"background-color":"#8B9193",flat:"","hide-details":"",dense:"","prepend-inner-icon":t.mdiMagnify,"solo-inverted":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.search()}},scopedSlots:t._u([{key:"label",fn:function(){return[s("span",{staticStyle:{color:"#cccccc"}},[t._v("搜索全文")])]},proxy:!0},{key:"append-outer",fn:function(){return[s("v-icon",{attrs:{size:"24"},on:{click:t.cancel}},[t._v(t._s(t.mdiCancel))])]},proxy:!0}]),model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),s("div",{staticClass:"search-list"},t._l(t.searchList,(function(e,i){return s("div",{key:i,staticClass:"search-item",domProps:{innerHTML:t._s(e.excerpt)},on:{click:function(s){return t.display(e.cfi)}}})})),0)])},lt=[],ut=(s("99af"),s("7db0"),s("d81d"),s("d3b7"),s("ac1f"),s("3ca3"),s("5319"),s("ddb0"),{name:"EbookSearch",data:function(){return{bookState:r["b"],mdiMagnify:H["e"],mdiCancel:H["a"],searchList:null,searchText:""}},mounted:function(){},methods:{getBackGround:function(){var t=r["a"].find((function(t){return t.name===r["b"].defaultTheme}));return t.back},cancel:function(){r["b"].searchVisible=!1},doSearch:function(t){return Promise.all(r["b"].book.spine.spineItems.map((function(e){return e.load(r["b"].book.load.bind(r["b"].book)).then(e.find.bind(e,t)).finally(e.unload.bind(e))}))).then((function(t){return Promise.resolve([].concat.apply([],t))}))},search:function(){var t=this;this.searchText&&this.searchText.length>0?this.doSearch(this.searchText).then((function(e){t.searchList=e,t.searchList.map((function(e){return e.excerpt=e.excerpt.replace(t.searchText,'<span class="selected">'.concat(t.searchText,"</span>")),e}))})):this.searchList=null},display:function(t){r["b"].display(t),r["b"].searchVisible=!1,r["b"].book.rendition.annotations.highlight(t)}}}),bt=ut,dt=(s("a192"),Object(b["a"])(bt,rt,lt,!1,null,"6ba8f8c4",null)),ft=dt.exports,pt={name:"index",components:{EbookSearch:ft,EbookReader:a["default"],EbookTitle:f,EbookMenu:ct},data:function(){return{task:null}},methods:{startLoopReadTime:function(){console.log(r["b"].fileName);var t=Object(g["d"])(r["b"].fileName);t||(t=0),this.task=setInterval((function(){document.hidden||(t++,t%30===0&&Object(g["i"])(r["b"].fileName,t))}),1e3)}},mounted:function(){this.startLoopReadTime()},beforeDestroy:function(){this.task&&clearInterval(this.task)}},mt=pt,vt=Object(b["a"])(mt,i,n,!1,null,"4642eb3a",null);e["default"]=vt.exports},7946:function(t,e,s){"use strict";var i=s("8833"),n=s.n(i);n.a},8833:function(t,e,s){},"8a9c":function(t,e,s){"use strict";var i=s("12a5"),n=s.n(i);n.a},"94ed":function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return a})),s.d(e,"d",(function(){return o})),s.d(e,"e",(function(){return c}));var i="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z",n="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",a="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",o="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z",c="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"},"9c93":function(t,e,s){"use strict";var i=s("1e4b"),n=s.n(i);n.a},a192:function(t,e,s){"use strict";var i=s("f77e"),n=s.n(i);n.a},aa09:function(t,e,s){"use strict";var i=s("1479"),n=s.n(i);n.a},db27:function(t,e,s){},e09b:function(t,e,s){},e701:function(t,e,s){"use strict";var i=s("48f2"),n=s.n(i);n.a},e842:function(t,e,s){},f77e:function(t,e,s){}}]);