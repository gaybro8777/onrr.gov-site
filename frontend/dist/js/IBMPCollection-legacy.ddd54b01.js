"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[883],{6643:function(e,t,a){a.d(t,{Z:function(){return s}});a(7327),a(1539),a(7941),a(6755),a(2222),a(9941),a(6428),a(3210),a(9600);var n=a(144);function r(e){return n.Z.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,a){var n=a.props,r=a.data,i=a.children;r.staticClass="".concat(e," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var l=Object.keys(s).filter((function(e){if("slot"===e)return!1;var t=s[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}));l.length&&(r.staticClass+=" ".concat(l.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,r,i)}})}var i=a(9312),s=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var a,n=t.props,r=t.data,s=t.children,l=r.attrs;return l&&(r.attrs={},a=Object.keys(l).filter((function(e){if("slot"===e)return!1;var t=l[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,(0,i.ZP)(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),s)}})},3253:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pt-4"},[a("v-card",[a("v-data-table",{staticClass:"collection-data-table",attrs:{headers:e.headers,items:e.collectionItems,"item-key":"title"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("SelectField",{attrs:{fields:e.designatedAreaInputField}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("MultipleSelectField",{attrs:{fields:e.ibmpYearsInputField}})],1)],1)],1)]},proxy:!0},{key:"item.designatedArea",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.designatedArea)+" ")]}},{key:"item.year",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.year)+" ")]}},{key:"item.month",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatMonth(a.month))+" ")]}},{key:"item.price",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatToDollarInt(a.price))+" ")]}}],null,!0)})],1)],1)},r=[],i=a(7174),s=(a(1539),a(8783),a(3948),a(1249),a(6699),a(2707),a(4747),a(4916),a(3123),a(8930)),l=function(){return Promise.all([a.e(860),a.e(248)]).then(a.bind(a,9571))},o=function(){return a.e(486).then(a.bind(a,1622))},d={name:"IndexZonesCollection",data:function(){return{designatedAreaInputField:{items:[],label:"All Areas",ref:"designatedAreaSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"designated_area",clearable:!0},ibmpYearsInputField:{items:[],label:"All Years",ref:"indexZoneSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"years"}}},props:{collection:[Array,Object]},components:{SelectField:l,MultipleSelectField:o},methods:{getMonth:s.jw,getYear:s.So,formatToDollarInt:s.Pl,formatMonth:function(e){return(0,s.jw)(e,"long")},formatYear:function(e){return(0,s.So)(e)},formatPrice:function(e){return(0,s.Pl)(e)},designatedAreaList:function(){var e=[];this.collectionItems&&this.collectionItems.map((function(t){t.designatedArea&&(e.includes(t.designatedArea)||e.push(t.designatedArea))})),this.designatedAreaInputField.items=(0,i.Z)(e.sort())},yearList:function(){var e=[];this.collectionItems&&this.collectionItems.map((function(t){t.year&&(e.includes(t.year)||e.push(t.year))})),this.ibmpYearsInputField.items=(0,i.Z)(e.sort()).reverse()},designatedAreaFilter:function(e){return console.log("designatedFilter: ",e),!this.designatedAreaInputField.selected||null===this.designatedAreaInputField.selected||0===this.designatedAreaInputField.selected.length||e.toLowerCase()===this.designatedAreaInputField.selected.toLowerCase()},yearFilter:function(e){return!this.ibmpYearsInputField.selected||null===this.ibmpYearsInputField.selected||0===this.ibmpYearsInputField.selected.length||this.ibmpYearsInputField.selected.indexOf(e)>=0}},computed:{headers:function(){return[{text:"Designated Area",align:"start",sortable:!0,value:"designatedArea",filter:this.designatedAreaFilter},{text:"Year",align:"start",sortable:!0,value:"year",filter:this.yearFilter},{text:"Month",align:"start",sortable:!1,value:"month"},{text:"Condensate (02)",align:"end",sortable:!1,value:"condensate02"},{text:"Sweet (61)",align:"end",sortable:!1,value:"sweet61"},{text:"Sour (62)",align:"end",sortable:!1,value:"sour62"},{text:"Asphaltic (63)",align:"end",sortable:!1,value:"asphaltic63"},{text:"Black Wax (64)",align:"end",sortable:!1,value:"blackWax64"},{text:"Yellow Wax (65)",align:"end",sortable:!1,value:"yellowWax65"}]},collectionItems:function(){var e=this,t=[];return this.collection&&this.collection.map((function(a){a.ibmp_line_items.forEach((function(n){var r={};r.year=e.formatYear(a.date),r.month=a.date,r.designatedArea=n.designatedArea,r.condensate02=isNaN(n.condensate02)?n.condensate02:(0,s.Pl)(n.condensate02),r.sweet61=isNaN(n.sweet61)?n.sweet61:e.formatToDollarInt(n.sweet61),r.sour62=isNaN(n.sour62)?n.sour62:e.formatToDollarInt(n.sour62),r.asphaltic63=isNaN(n.asphaltic63)?n.asphaltic63:e.formatToDollarInt(n.asphaltic63),r.blackWax64=isNaN(n.blackWax64)?n.blackWax64:e.formatToDollarInt(n.blackWax64),r.yellowWax65=isNaN(n.yellowWax65)?n.yellowWax65:e.formatToDollarInt(n.yellowWax65),t.push(r)}))})),t}},created:function(){var e=this;setTimeout((function(){e.designatedAreaList(),e.yearList()}),300)},mounted:function(){var e=this.$route.query.designated_area,t=this.$route.query.years&&this.$route.query.years.split(",");this.designatedAreaInputField.selected=e||null,this.ibmpYearsInputField.selected=t||null}},c=d,u=a(1001),p=a(3453),f=a.n(p),m=a(9391),h=a(3121),g=a(6643),v=a(9049),y=a(4722),b=(0,u.Z)(c,n,r,!1,null,"c31d53b2",null),I=b.exports;f()(b,{VCard:m.Z,VCol:h.Z,VContainer:g.Z,VDataTable:v.Z,VRow:y.Z})}}]);
//# sourceMappingURL=IBMPCollection-legacy.ddd54b01.js.map