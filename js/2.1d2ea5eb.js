(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[t._v("\n        Takeoff Staff"+t._s(t.getUser?" - Welcome, "+t.getUser.name.toUpperCase():"")+"\n      ")]),n("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1 flex items-center"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("div",{staticClass:"full-width"},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"bg-primary text-white text-h6 q-pa-sm"},[t._v("Menu")])]),n("MainNav"),n("q-separator",{staticClass:"q-mb-lg"}),n("QuickLogin")],1)]),n("q-page-container",[n("router-view")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-list",t._l(t.navs,(function(e){return n("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.title,staticClass:"q-pa-md",attrs:{clickable:"",to:e.link,disable:!t.getUser&&"/login"!==e.link,exact:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1),n("q-item-section",{staticClass:"text-h6"},[t._v(t._s(e.title))])],1)})),1)},o=[];const s=[{title:"Contacts",icon:"contacts",link:"/"},{title:"Sign in",icon:"login",link:"/login"}];var c={name:"MainNav",data(){return{navs:s}},computed:{getUser(){return this.$store.getters["user/getUser"]}}},l=c,u=n("2877"),p=n("1c1c"),f=n("66e5"),g=n("4074"),m=n("0016"),d=n("714f"),v=n("eebe"),q=n.n(v),k=Object(u["a"])(l,i,o,!1,null,null,null),b=k.exports;q()(k,"components",{QList:p["a"],QItem:f["a"],QItemSection:g["a"],QIcon:m["a"]}),q()(k,"directives",{Ripple:d["a"]});var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row text-center justify-center items-center bg-primary text-white text-h6 q-pa-sm",staticStyle:{cursor:"pointer"},on:{click:function(e){e.stopPropagation(),t.openQuickLogin=!t.openQuickLogin}}},[n("div",[t._v("Quick Demo Login")]),n("q-icon",{class:"q-ml-lg quick-login-icon "+(t.openQuickLogin?"quick-login-icon_rotate":""),attrs:{name:"change_history"}}),n("q-tooltip",{attrs:{"content-class":"bg-purple","content-style":"font-size: 1rem",offset:[10,10],anchor:"top right",self:"bottom left","transition-show":"flip-right","transition-hide":"flip-left"}},[t._v("\n      Too lazy to enter credentials.\n    ")])],1),n("div",{class:"flex justify-center items-end no-wrap quick-login-form "+(t.openQuickLogin?"quick-login-form_scale":"")},[n("div",{staticClass:"q-my-md row full-width justify-around"},[n("q-btn",{attrs:{color:"primary",label:"user1"},on:{click:function(e){return e.stopPropagation(),t.quickLogin("user1","password1")}}}),n("q-btn",{attrs:{color:"primary",label:"user2"},on:{click:function(e){return e.stopPropagation(),t.quickLogin("user2","password2")}}}),n("q-btn",{attrs:{color:"primary",label:"user3"},on:{click:function(e){return e.stopPropagation(),t.quickLogin("user3","password3")}}})],1)])])},w=[],Q={name:"QuickLogin",data(){return{openQuickLogin:!1}},methods:{quickLogin(t,e){this.$store.dispatch("user/loginUser",{name:t,password:e}).then(()=>{"/"!==this.$route.path&&this.$router.push("/")})}}},_=Q,y=(n("f935"),n("05c0")),L=n("9c40"),x=Object(u["a"])(_,h,w,!1,null,"4f9039de",null),C=x.exports;q()(x,"components",{QIcon:m["a"],QTooltip:y["a"],QBtn:L["a"]});var O={name:"MainLayout",components:{MainNav:b,QuickLogin:C},data(){return{leftDrawerOpen:!1}},computed:{getUser(){return this.$store.getters["user/getUser"]}}},U=O,$=n("4d5a"),D=n("e359"),j=n("65c6"),M=n("6ac5"),T=n("9404"),P=n("eb85"),S=n("09e3"),I=Object(u["a"])(U,a,r,!1,null,null,null);e["default"]=I.exports;q()(I,"components",{QLayout:$["a"],QHeader:D["a"],QToolbar:j["a"],QBtn:L["a"],QToolbarTitle:M["a"],QDrawer:T["a"],QSeparator:P["a"],QPageContainer:S["a"]})},9224:function(t,e,n){},f935:function(t,e,n){"use strict";var a=n("9224"),r=n.n(a);r.a}}]);