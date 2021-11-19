(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1316:function(e,t,n){var content=n(1320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(151).default)("225f9a5a",content,!0,{sourceMap:!1})},1317:function(e,t,n){e.exports=n.p+"img/angelists_transparent.5b5f1ca.png"},1318:function(e,t,n){e.exports=n.p+"img/metamask.45038d5.svg"},1319:function(e,t,n){"use strict";n(1316)},1320:function(e,t,n){var r=n(150)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\ninput[data-v-7223fe83], select[data-v-7223fe83], textarea[data-v-7223fe83]{\n  margin:0.5rem;\n  background-color:transparent;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:1rem;\n  padding-bottom:1rem\n}\np[data-v-7223fe83]{\n  word-break:break-all\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},1325:function(e,t,n){"use strict";n.r(t);var r=n(14),o=(n(95),n(84),n(115),n(604),n(94),{props:{id:String},data:function(){return{placement_id:"",name:"",description:"",image:"",banner:"",link:"",owner:"",tokenExists:!1,ownsNFT:!1,auth:!1,textColor:"Your Text Color"}},created:function(){if(this.tokenExists=this.$angelists.tokenExists(this.id),!this.tokenExists)return this.$toast.warning("Token does not Exist")},beforeMount:function(){this.placement_id=this.$angelists.fetchPlacement(this.id)},methods:{connect:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$angelists.connect();case 3:return e.owner=e.$angelists.owner_address,t.next=6,e.$angelists.ownsNFT(e.id);case 6:if(e.ownsNFT=t.sent,e.ownsNFT||e.$toast.warning("Seems you dont own an Angel Placement NFT"),e.tokenExists){t.next=10;break}return t.abrupt("return",e.$toast.warning("Token does not Exist"));case 10:e.auth=!0,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),e.$toast.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},register:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.owner){t.next=10;break}return t.prev=1,t.next=4,e.$angelists.register(e.id,{name:e.name,description:e.description,image:e.image,banner:e.banner,link:e.link,owner:e.owner,textColor:"Your Text Color"===e.textColor?"white":e.textColor});case 4:e.$toast.success("Your Angel is configured! Its now shown on Project Sites!"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.$toast.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()},redirect:function(){window.open("https://docs.angelists.ecosis.io","_blank")},backgroundImage:function(e){if(e)return{backgroundImage:"url('".concat(e,"')"),backgroundPosition:"center"}},fullfilled:function(){if(this.image&&this.link&&this.owner)return!0},isPremium:function(){return"platinum"===this.placement_id||("diamond"===this.placement_id||("gold"===this.placement_id||void 0))},isNotSilver:function(){if("silver"!==this.placement_id)return!0}}}),l=(n(1319),n(114)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"flex flex-col justify-center items-center w-full my-4"},[r("img",{staticClass:"w-32 h-32",attrs:{src:n(1317)}}),e._v(" "),r("p",{staticClass:"text-gray-500"},[e._v("v0.0.2")]),e._v(" "),r("div",{staticClass:"text-center"},[r("p",{staticClass:"text-gray-300 p-2"},[e._v("Configure your Placement")]),e._v(" "),r("p",{staticClass:"text-gray-300 p-2"},[e._v("How to use it?")]),e._v(" "),r("button",{staticClass:"bg-gray-500 hover:bg-gray-600 px-8 py-4 m-2 rounded-xl",on:{click:function(t){return e.redirect()}}},[e._v("Guide")]),e._v(" "),e.auth&&!e.ownsNFT?r("a",{attrs:{type:"button",href:"https://opensea.io/assets/"+e.$angelists.network+"/"+e.$angelists.token_address+"/"+e.id,target:"_blank"}},[e._m(0)]):e._e(),e._v(" "),e.ownsNFT?r("p",{staticClass:"text-gray-300 p-2 border-b border-green-500"},[e._v("You own the NFT, this Placement is yours!")]):e._e()])]),e._v(" "),r("div",{staticClass:"flex flex-wrap justify-center items-center"},[e.tokenExists?e._e():r("div",{staticClass:"bg-yellow-600 p-4 rounded"},[r("p",[e._v("Token does not exist")])]),e._v(" "),!e.owner&&e.tokenExists?r("button",{staticClass:"flex justify-around items-center bg-blue-500 hover:bg-blue-600 px-8 py-4 m-2 rounded-xl",on:{click:function(t){return e.connect()}}},[e._v("\n      Connect with\n      "),r("img",{staticClass:"w-12 h-12",attrs:{src:n(1318),alt:"Metamask"}})]):e._e(),e._v(" "),e.owner?r("form",{staticClass:"flex flex-col bg-gray-900 text-white rounded-xl"},[r("button",{staticClass:"flex justify-around items-center bg-gray-500 hover:bg-gray-600 px-8 py-4 m-2 rounded-xl",attrs:{type:"button"},on:{click:function(t){return e.connect()}}},[e._v("\n        "+e._s(e.owner)+"\n      ")]),e._v(" "),"Select an Angel Type"!==e.placement_id&&e.isNotSilver()?r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Name",maxlength:"20"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}):e._e(),e._v(" "),"Select an Angel Type"!==e.placement_id&&e.isPremium()?r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{placeholder:"Short Description (max. 100 Characters)",maxlength:"100",cols:"20"},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}}):e._e(),e._v(" "),e.isPremium()?r("select",{directives:[{name:"model",rawName:"v-model",value:e.textColor,expression:"textColor"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.textColor=t.target.multiple?n:n[0]}}},[r("option",{attrs:{disabled:"",selected:"",hidden:""}},[e._v("Your Text Color")]),e._v(" "),r("option",[e._v("Black")]),e._v(" "),r("option",[e._v("White")])]):e._e(),e._v(" "),"Select an Angel Type"!==e.placement_id?r("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],attrs:{placeholder:"Profile Image (Image Link)"},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}}):e._e(),e._v(" "),"Select an Angel Type"!==e.placement_id&&e.isPremium()?r("input",{directives:[{name:"model",rawName:"v-model",value:e.banner,expression:"banner"}],attrs:{placeholder:"Banner Image (Image Link)"},domProps:{value:e.banner},on:{input:function(t){t.target.composing||(e.banner=t.target.value)}}}):e._e(),e._v(" "),"Select an Angel Type"!==e.placement_id?r("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],attrs:{placeholder:"Your Destination Link"},domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}):e._e(),e._v(" "),e.tokenExists&&e.ownsNFT&&e.fullfilled()?r("button",{staticClass:"bg-green-500 hover:bg-green-600 px-8 py-4 m-2 rounded-xl",attrs:{type:"button"},on:{click:function(t){return e.register()}}},[e._v("Save")]):e._e()]):e._e(),e._v(" "),e.placement_id&&(e.name||e.image)?r("div",{staticClass:" m-4 p-4 text-center"},[r("h1",[e._v("Preview")]),e._v(" "),r("div",{},[r("div",{class:e.textColor?"text-"+e.textColor:"text-white",on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[r("a",{staticClass:"flex flex-col justify-center items-center w-full rounded-lg p-4 max-w-screen",style:e.backgroundImage(e.banner),attrs:{href:e.link?e.link:"",target:"_blank"}},[e.image?r("img",{staticClass:"w-24 rounded-full",attrs:{src:e.image}}):e._e(),e._v(" "),e.name?r("h1",{},[e._v(e._s(e.name))]):e._e(),e._v(" "),e.description?r("p",{},[e._v(e._s(e.description))]):e._e(),e._v(" "),e.hover?r("a",{staticClass:"bg-green-500 hover:bg-green-600 px-4 py-2 m-2 rounded-lg"},[e._v("Buy this Placement")]):e._e()])])])]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-yellow-600 p-4 rounded"},[n("p",[e._v("Seems like you dont own this NFT")]),e._v(" "),n("p",[e._v("\n            Click here to head over to the Marketplace to buy this Placement\n          ")])])}],!1,null,"7223fe83",null);t.default=component.exports}}]);