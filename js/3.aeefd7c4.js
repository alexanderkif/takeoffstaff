(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0ceb":function(t,e,a){},"9bdf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"row"},[t.getUser?a("q-list",{attrs:{bordered:"",separator:""}},[a("q-item-label",{staticClass:"text-h6 bg-primary text-white",attrs:{header:""}},[t._v("\n        "+t._s(t.getUser.contacts.length?"Contacts":"You have no contacts.")+"\n      ")]),t._l(t.getUser.contacts,(function(e){return a("div",{key:e.name,staticClass:"relative-position"},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{active:"","active-class":"text-primary",clickable:""},on:{click:function(a){return a.stopPropagation(),t.editContact(e)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{staticClass:"text-uppercase",attrs:{size:"3rem",color:"primary","text-color":"white"}},[t._v("\n              "+t._s(e.name.slice(0,1))+t._s(e.name.slice(-1))+"\n            ")])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-h6"},[t._v("\n              "+t._s(e.name)+"\n            ")]),a("q-item-label",[t._v("\n              "+t._s("+"+e.phone.slice(0,1)+" ( "+e.phone.slice(1,4)+" ) - "+e.phone.slice(4,7)+" - "+e.phone.slice(7))+"\n            ")]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.email))])],1),a("q-item-section",{staticStyle:{width:"3rem"},attrs:{side:""}})],1),a("q-btn",{staticClass:"absolute-right bg-white delete-item-btn",attrs:{round:"",outline:"",color:"primary",icon:"delete"},on:{click:function(a){return a.stopPropagation(),t.deleteContact(e.name)}}})],1)}))],2):t._e()],1),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"add",color:"accent"},on:{click:function(e){return e.stopPropagation(),t.addContact(e)}}})],1),a("q-dialog",{model:{value:t.openContactDeleteDialog,callback:function(e){t.openContactDeleteDialog=e},expression:"openContactDeleteDialog"}},[a("ContactDeleteDialog",{attrs:{contactName:t.contactName}})],1),a("q-dialog",{model:{value:t.openContactDialog,callback:function(e){t.openContactDialog=e},expression:"openContactDialog"}},[a("ContactDialog",{attrs:{contactName:t.contactName,contactEmail:t.contactEmail,contactPhone:t.contactPhone}})],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",[a("q-card-section",{staticClass:"row bg-primary text-white items-center"},[a("span",{staticClass:"text-h6"},[t._v("Delete contact "+t._s(t.contactName)+"?")])]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",label:"Cancel",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{rounded:"",label:"Delete",color:"negative","text-color":"white"},on:{click:function(e){return t.deleteContact(t.contactName)}}})],1)],1)},c=[],s={name:"ContactDeleteDialog",props:{contactName:String},methods:{deleteContact(t){this.$store.dispatch("user/deleteContact",t)}}},l=s,r=a("2877"),m=a("f09f"),p=a("a370"),u=a("4b7e"),d=a("9c40"),h=a("7f67"),f=a("eebe"),g=a.n(f),C=Object(r["a"])(l,i,c,!1,null,null,null),v=C.exports;g()(C,"components",{QCard:m["a"],QCardSection:p["a"],QCardActions:u["a"],QBtn:d["a"]}),g()(C,"directives",{ClosePopup:h["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticStyle:{"min-width":"20rem"}},[a("q-card-section",{staticClass:"row bg-primary text-white items-center"},[a("span",{staticClass:"text-h6"},[t._v(t._s(t.contactName?"Edit "+t.contactName:"Fill in the fields"))])]),a("q-card-section",[t.contactName?t._e():a("q-input",{ref:"name",attrs:{filled:"",label:"Name *",rules:[function(t){return!!t||"* Required"},function(t){return/^[а-яёa-z\s0-9]*$/i.test(t)||"Unacceptable symbols"},function(t){return t.length>2||"Minimum 3 characters"}],readonly:!!t.contactName},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{ref:"phone",attrs:{filled:"",label:"Phone *",mask:"# (###) ### - ####","fill-mask":"",hint:"Mask: # (###) ### - ####",rules:[function(t){return!!t||"* Required"},function(t){return"_"!==t.slice(17,18)||"Fill all numbers"}]},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("q-input",{ref:"email",attrs:{filled:"",type:"email",hint:"Email",rules:[function(t){return!t||/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(t)||"Invalid email"}],"lazy-rules":""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",rounded:"",label:"Cancel",color:"primary"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup",value:t.isValid,expression:"isValid"}],attrs:{rounded:"",color:t.contactName?"warning":"positive","text-color":"white",label:t.contactName?"Edit":"Add"},on:{click:t.updateContact}})],1)],1)},q=[],D={name:"ContactDialog",props:{contactName:String,contactEmail:String,contactPhone:String},data(){return{name:this.contactName||"",email:this.contactEmail||"",phone:this.contactPhone||"",isValid:!1}},methods:{updateContact(){const t={};if(this.contactName)t.name=this.contactName;else{if(this.$refs.name.validate(),this.$refs.name.hasError)return!1;t.name=this.name}if(this.$refs.phone.validate(),this.$refs.email.validate(),this.$refs.phone.hasError||this.$refs.email.hasError)return!1;t.phone=this.phone.split("").filter(t=>t.match(/[\d]/)).join(""),t.email=this.email,this.$store.dispatch("user/updateContact",t),this.isValid=!0}}},N=D,_=a("27f9"),w=Object(r["a"])(N,b,q,!1,null,null,null),x=w.exports;g()(w,"components",{QCard:m["a"],QCardSection:p["a"],QInput:_["a"],QCardActions:u["a"],QBtn:d["a"]}),g()(w,"directives",{ClosePopup:h["a"]});var k={name:"Contacts",components:{ContactDeleteDialog:v,ContactDialog:x},data(){return{openContactDialog:!1,openContactDeleteDialog:!1,contactName:null,contactEmail:null,contactPhone:null}},created(){this.getUser||this.$router.push("/login")},methods:{deleteContact(t){this.contactName=t,this.openContactDeleteDialog=!0},addContact(){this.contactName=null,this.contactEmail=null,this.contactPhone=null,this.openContactDialog=!0},editContact(t){this.contactName=t.name,this.contactEmail=t.email,this.contactPhone=t.phone,this.openContactDialog=!0}},computed:{getUser(){return this.$store.getters["user/getUser"]}}},Q=k,y=(a("a503"),a("9989")),E=a("1c1c"),$=a("0170"),P=a("66e5"),S=a("4074"),A=a("cb32"),z=a("de5e"),U=a("24e8"),I=a("714f"),j=Object(r["a"])(Q,n,o,!1,null,"69a87010",null);e["default"]=j.exports;g()(j,"components",{QPage:y["a"],QList:E["a"],QItemLabel:$["a"],QItem:P["a"],QItemSection:S["a"],QAvatar:A["a"],QBtn:d["a"],QPageSticky:z["a"],QDialog:U["a"]}),g()(j,"directives",{Ripple:I["a"]})},a503:function(t,e,a){"use strict";var n=a("0ceb"),o=a.n(n);o.a}}]);