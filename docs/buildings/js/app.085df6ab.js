(function(t){function s(s){for(var e,c,l=s[0],r=s[1],o=s[2],u=0,d=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);_&&_(s);while(d.length)d.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,s=0;s<n.length;s++){for(var a=n[s],e=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(e=!1)}e&&(n.splice(s--,1),t=c(c.s=a[0]))}return t}var e={},i={app:0},n=[];function c(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=e,c.d=function(t,s,a){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)c.d(a,e,function(s){return t[s]}.bind(null,e));return a},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/buildings/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var o=0;o<l.length;o++)s(l[o]);var _=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"0268":function(t,s,a){"use strict";a("d17d")},"05b7":function(t,s,a){"use strict";a("dc8c")},1575:function(t,s,a){},"1e16":function(t,s,a){},"21dd":function(t,s,a){},2343:function(t,s,a){},"2d6b":function(t,s,a){"use strict";a("a727")},"30dd":function(t,s,a){"use strict";a("cce9")},"4fde":function(t,s,a){"use strict";a("21dd")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[t.menuIsVisible?a("MenuModal",{on:{close:t.hideMenu}}):t._e(),a("div",{staticClass:"default-layout",class:[t.menuIsVisible&&"default-layout_locked"]},[a("Header"),a("MenuMobileButton",{staticClass:"header__menu_mobile",on:{"show-menu":t.setMenuIsVisible}}),a("router-view"),a("Footer")],1)],1)},n=[],c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("router-link",{attrs:{to:"/"}},[a("Logo")],1),a("Menu")],1)},l=[],r=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("h1",{staticClass:"logo__name"},[t._v(" Строй"),a("span",{staticClass:"logo__name_span"},[t._v("Элит")])])])}],_={name:"Logo"},u=_,d=(a("aa2f"),a("2877")),v=Object(d["a"])(u,r,o,!1,null,"34d742d0",null),m=v.exports,f=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu"},[a("div",{staticClass:"menu__items_wrapper"},[a("div",{staticClass:"menu__item"},[a("router-link",{attrs:{to:"/"}},[t._v(" Проекты ")])],1),a("div",{staticClass:"menu__item"},[a("router-link",{attrs:{to:"/"}},[t._v(" Услуги ")])],1),a("div",{staticClass:"menu__item"},[a("router-link",{attrs:{to:"/"}},[t._v(" Наши работы ")])],1),a("div",{staticClass:"menu__item"},[a("router-link",{attrs:{to:"/"}},[t._v(" О нас ")])],1),a("div",{staticClass:"menu__item"},[a("router-link",{attrs:{to:"/"}},[t._v(" Контакты ")])],1)]),a("div",{staticClass:"menu__call_wrapper"},[a("div",{staticClass:"phone__mobile"},[a("a",{attrs:{href:"tel:+79533545699"}},[a("Call",{staticClass:"menu__call_icon-mobile"})],1)]),a("div",{staticClass:"phone__desktop"},[a("a",{staticClass:"phone__desktop_call",attrs:{href:"tel:+79533545699"}},[a("Call",{staticClass:"menu__call_icon"}),a("p",[t._v("+7(953)354-56-99")])],1)])])])},C=[],b=a("e873"),h=a.n(b),p={name:"Menu",components:{Call:h.a}},g=p,w=(a("2d6b"),Object(d["a"])(g,f,C,!1,null,"c385f720",null)),x=w.exports,k={name:"Header",components:{Logo:m,Menu:x}},y=k,M=(a("05b7"),Object(d["a"])(y,c,l,!1,null,"bb4a2ad6",null)),O=M.exports,j=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer"})},$=[],S={name:"Footer"},E=S,B=Object(d["a"])(E,j,$,!1,null,"36990a30",null),P=B.exports,I=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu"},[a("div",{staticClass:"menu__wrapper"},[a("div",{staticClass:"menu__header"},[a("CloseButton",{staticClass:"close-button",on:{click:t.close}})],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/"}},[t._v(" Главная ")])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/houses-br"}},[a("div",{staticClass:"sub__menu_item"},[t._v(" Кирпичные дома ")])])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/houses-gb"}},[a("div",{staticClass:"sub__menu_item"},[t._v(" Дома из газобетона ")])])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/houses-gl"}},[a("div",{staticClass:"sub__menu_item"},[t._v(" Дома из клееного бруса ")])])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/houses-pr"}},[a("div",{staticClass:"sub__menu_item"},[t._v(" Дома из профилированного бруса ")])])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/baths"}},[t._v(" Бани ")])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/foundation"}},[t._v(" Фундаменты ")])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/services"}},[t._v(" Услуги ")])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/about"}},[t._v(" О нас ")])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/reviews"}},[t._v(" Отзывы ")])],1),a("div",{staticClass:"menu__item",on:{click:t.close}},[a("router-link",{attrs:{to:"/contacts"}},[t._v(" Контакты ")])],1),a("button",{staticClass:"order_button"},[t._v(" Заказать звонок ")])])])},V=[],z=a("bb7c"),A=a.n(z),H={name:"MenuMobile",components:{CloseButton:A.a},methods:{close:function(){this.$emit("close")}}},L=H,F=(a("30dd"),Object(d["a"])(L,I,V,!1,null,"28ba3540",null)),T=F.exports,J=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"header__menu_button",on:{click:t.SetMenuIsVisible}},[a("MobileButton")],1)},q=[],D=a("80bc"),G=a.n(D),K={name:"MenuMobileButton",components:{MobileButton:G.a},methods:{SetMenuIsVisible:function(){this.$emit("show-menu")}}},N=K,Q=(a("4fde"),Object(d["a"])(N,J,q,!1,null,"2d1e53e8",null)),R=Q.exports,U={components:{Footer:P,MenuMobileButton:R,Header:O,MenuModal:T},data:function(){return{menuIsVisible:!1}},methods:{setMenuIsVisible:function(){this.menuIsVisible=!0},hideMenu:function(){this.menuIsVisible=!1}}},W=U,X=(a("0268"),a("5c64"),Object(d["a"])(W,i,n,!1,null,null,null)),Y=X.exports,Z=a("8c4f"),tt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"layout__main"},[a("Splash"),a("AboutMain"),a("Advantages"),a("ServicesPreview")],1)},st=[],at=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"splash"},[e("div",{staticClass:"splash__wrap"},[e("p",{staticClass:"splash__text"},[t._v(" Строительство загородных домов под ключ в Санкт-Петербурге ")]),e("div",{staticClass:"splash__button"},[t._v(" Посмотреть проекты ")]),e("img",{staticClass:"ricardo",attrs:{src:a("6db0"),width:"10",height:"10"}})])])}],it={name:"Splash"},nt=it,ct=(a("f21b"),Object(d["a"])(nt,at,et,!1,null,"ffe8be3a",null)),lt=ct.exports,rt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"about__main"},[a("div",{staticClass:"about__main__header"},[a("h3",[t._v("О компании")])]),a("div",{staticClass:"about__main_content"},[a("p",{staticClass:"about__main__text"},[t._v(" СтройЭлит – это штат специалистов с более чем 10 летним стажем работы в сфере строительства загородных домов. Мы проектируем и строим дома под ключ из: ................. ")]),a("button",{staticClass:"about__main__button"},[t._v(" Узнать больше ")])])])}],_t={name:"AboutMain"},ut=_t,dt=(a("e0a1"),Object(d["a"])(ut,rt,ot,!1,null,"73f515b0",null)),vt=dt.exports,mt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"advantages"},[a("div",{staticClass:"advantages__header"},[t._v(" Условия и преимущества работы с нами ")]),a("div",{staticClass:"advantages__main row"},[a("div",{staticClass:"advantages__main_card col-12 col-md-6 col-lg-3"},[a("div",{staticClass:"advantages__main_card_img"},[t._v(" . ")]),a("div",{staticClass:"advantages__main_card_head"},[t._v(" Преимущество ")]),a("div",{staticClass:"advantages__main_card_text"},[t._v(" Описание преимущества ")])]),a("div",{staticClass:"advantages__main_card col-12 col-md-6 col-lg-3"},[a("div",{staticClass:"advantages__main_card_img"},[t._v(" . ")]),a("div",{staticClass:"advantages__main_card_head"},[t._v(" Преимущество ")]),a("div",{staticClass:"advantages__main_card_text"},[t._v(" Описание преимущества ")])]),a("div",{staticClass:"advantages__main_card col-12 col-md-6 col-lg-3"},[a("div",{staticClass:"advantages__main_card_img"},[t._v(" . ")]),a("div",{staticClass:"advantages__main_card_head"},[t._v(" Преимущество ")]),a("div",{staticClass:"advantages__main_card_text"},[t._v(" Описание преимущества ")])]),a("div",{staticClass:"advantages__main_card col-12 col-md-6 col-lg-3"},[a("div",{staticClass:"advantages__main_card_img"},[t._v(" . ")]),a("div",{staticClass:"advantages__main_card_head"},[t._v(" Преимущество ")]),a("div",{staticClass:"advantages__main_card_text"},[t._v(" Описание преимущества ")])]),a("div",{staticClass:"advantages__main_card col-12 col-md-6 col-lg-3"},[a("div",{staticClass:"advantages__main_card_img"},[t._v(" . ")]),a("div",{staticClass:"advantages__main_card_head"},[t._v(" Преимущество ")]),a("div",{staticClass:"advantages__main_card_text"},[t._v(" Описание преимущества ")])]),a("div",{staticClass:"advantages__main_card col-12 col-md-6 col-lg-3"},[a("div",{staticClass:"advantages__main_card_img"},[t._v(" . ")]),a("div",{staticClass:"advantages__main_card_head"},[t._v(" Преимущество ")]),a("div",{staticClass:"advantages__main_card_text"},[t._v(" Описание преимущества ")])])])])}],Ct={name:"Advantages"},bt=Ct,ht=(a("a21a"),Object(d["a"])(bt,mt,ft,!1,null,"3689001d",null)),pt=ht.exports,gt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"services"},[a("div",{staticClass:"services__header"},[t._v(" Наши услуги ")]),a("div",{staticClass:"services__main row"},[a("div",{staticClass:"services__main_item col-12 col-md-6"},[a("div",{staticClass:"services__main_item-header"},[t._v(" Услуга ")]),a("div",{staticClass:"services__main_item-text"},[t._v(" Описание услуги ")])]),a("div",{staticClass:"services__main_item col-12 col-md-6"},[a("div",{staticClass:"services__main_item-header"},[t._v(" Услуга ")]),a("div",{staticClass:"services__main_item-text"},[t._v(" Описание услуги ")])]),a("div",{staticClass:"services__main_item col-12 col-md-6"},[a("div",{staticClass:"services__main_item-header"},[t._v(" Услуга ")]),a("div",{staticClass:"services__main_item-text"},[t._v(" Описание услуги ")])]),a("div",{staticClass:"services__main_item col-12 col-md-6"},[a("div",{staticClass:"services__main_item-header"},[t._v(" Услуга ")]),a("div",{staticClass:"services__main_item-text"},[t._v(" Описание услуги ")])])])])}],xt={name:"ServicesPreview"},kt=xt,yt=(a("73c2"),Object(d["a"])(kt,gt,wt,!1,null,"0ef03c52",null)),Mt=yt.exports,Ot={name:"LayoutMain",components:{ServicesPreview:Mt,Advantages:pt,Splash:lt,AboutMain:vt}},jt=Ot,$t=Object(d["a"])(jt,tt,st,!1,null,"2f036741",null),St=$t.exports,Et=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"contacts"},[t._v(" Раздел с контактами, адрес на карте, контактный телефон и прочее ")])},Bt=[],Pt={name:"Baths"},It=Pt,Vt=(a("d1db"),Object(d["a"])(It,Et,Bt,!1,null,"672b6b7c",null)),zt=Vt.exports;e["a"].use(Z["a"]);var At=new Z["a"]({routes:[{path:"/",component:St},{path:"/contacts",component:zt},{path:"/contacts",component:zt}]}),Ht=At;e["a"].config.productionTip=!1,new e["a"]({router:Ht,render:function(t){return t(Y)}}).$mount("#app")},"5c64":function(t,s,a){"use strict";a("8e05")},"6db0":function(t,s,a){t.exports=a.p+"buildings/img/ricardo.eba7267a.gif"},"73c2":function(t,s,a){"use strict";a("1575")},"80bc":function(t,s,a){var e=a("ded3").default,i=a("4082").default;a("99af"),t.exports={functional:!0,render:function(t,s){var a=s._c,n=(s._v,s.data),c=s.children,l=void 0===c?[]:c,r=n.class,o=n.staticClass,_=n.style,u=n.staticStyle,d=n.attrs,v=void 0===d?{}:d,m=i(n,["class","staticClass","style","staticStyle","attrs"]);return a("svg",e({class:[r,o],style:[_,u],attrs:Object.assign({height:"32",width:"32",xmlns:"http://www.w3.org/2000/svg"},v)},m),l.concat([a("path",{attrs:{d:"M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z"}})]))}}},"8e05":function(t,s,a){},"8fbe":function(t,s,a){},a21a:function(t,s,a){"use strict";a("2343")},a727:function(t,s,a){},aa2f:function(t,s,a){"use strict";a("bcce")},b468:function(t,s,a){},bb7c:function(t,s,a){var e=a("ded3").default,i=a("4082").default;a("99af"),t.exports={functional:!0,render:function(t,s){var a=s._c,n=(s._v,s.data),c=s.children,l=void 0===c?[]:c,r=n.class,o=n.staticClass,_=n.style,u=n.staticStyle,d=n.attrs,v=void 0===d?{}:d,m=i(n,["class","staticClass","style","staticStyle","attrs"]);return a("svg",e({class:[r,o],style:[_,u],attrs:Object.assign({width:"30",height:"30",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},v)},m),l.concat([a("g",{attrs:{transform:"translate(2 2)",stroke:"#F09336","stroke-width":"4",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"}},[a("circle",{attrs:{cx:"48",cy:"48",r:"48"}}),a("path",{attrs:{d:"M68.172 28.11l-40.73 40.729M68.188 68.845L27.46 28.115"}})])]))}}},bcce:function(t,s,a){},cce9:function(t,s,a){},d17d:function(t,s,a){},d1db:function(t,s,a){"use strict";a("b468")},dc8c:function(t,s,a){},e0a1:function(t,s,a){"use strict";a("1e16")},e873:function(t,s,a){var e=a("ded3").default,i=a("4082").default;a("99af"),t.exports={functional:!0,render:function(t,s){var a=s._c,n=(s._v,s.data),c=s.children,l=void 0===c?[]:c,r=n.class,o=n.staticClass,_=n.style,u=n.staticStyle,d=n.attrs,v=void 0===d?{}:d,m=i(n,["class","staticClass","style","staticStyle","attrs"]);return a("svg",e({class:[r,o],style:[_,u],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},v)},m),l.concat([a("path",{attrs:{d:"M36.3 217.8c11.3 0 20.4-9.1 20.4-20.4C56.7 122.8 117.5 62 192.1 62c11.3 0 20.4-9.1 20.4-20.4s-9.1-20.4-20.4-20.4c-97.2 0-176.2 79-176.2 176.2 0 11.3 9.1 20.4 20.4 20.4z"}}),a("path",{attrs:{d:"M192.1 99.9c-53.8 0-97.6 43.8-97.6 97.6 0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4 0-31.3 25.4-56.7 56.7-56.7 11.3 0 20.4-9.1 20.4-20.4.1-11.4-9-20.5-20.3-20.5zM471.5 45.3c-17-17.1-38.1-28.3-61.2-32.6-34.2-6.3-71.8 4.6-92.5 27.9-71.9 80.8 5.1 155.1 5.6 155.5-20.3 46-81.6 107.5-126.5 127.1-.5-.5-73.4-76.9-155.2-6.1C1.3 352 2.4 427.5 45.9 471.2c14.8 15 32.5 24.4 52.4 28 32 5.8 64.4-4.1 92.1-14.3C313.7 439.4 432.5 328.7 485 189.6c17.6-46.6 29.8-100.8-13.5-144.3zm-28.4 129.2C374.1 348 237 418.1 175.3 443c-66.3 26.8-89.3 5.3-97.8-3.2-26.2-26.4-29.7-69-4.3-91.3 46.7-40.8 91.2 2.8 98.2 13.7 5 7.7 14.8 10.9 23.7 8.6 64.1-16.4 157.9-110.1 176-175.8 2.5-8.9-1.2-18.1-8.4-23.9-11.3-9.2-53.9-49.6-13.4-98.9 10.9-13.3 54.9-31.1 90.6 4.6 20.9 20.8 22.6 48.8 3.2 97.7z"}})]))}}},f21b:function(t,s,a){"use strict";a("8fbe")}});