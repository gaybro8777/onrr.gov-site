"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[229],{8058:function(t,e,s){s.d(e,{Z:function(){return r}});var a=s(5598),n=s(171),l=s(3553),r=(0,l.Z)(n.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,a.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},1909:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",t._l(t.tableHeaderItems,(function(e,a){return s("th",{key:a,class:[t.textClass,"black--text"]},[s("span",{domProps:{innerHTML:t._s(e)}})])})),0)]),s("tbody",t._l(t.tableRowItems,(function(e,a){return s("tr",{key:a,class:[t.textClass,"black--text"]},t._l(e,(function(e,a){return s("td",{key:a,class:[t.textClass,"black--text"]},[s("span",{domProps:{innerHTML:t._s(e)}})])})),0)})),0)]},proxy:!0}])})},n=[],l={name:"TableBlock",data(){return{}},props:{block:{type:[Object]}},methods:{},computed:{tableHeaderItems(){const t=this.block.data.content[0];return t},tableRowItems(){const t=this.block.data.content.filter(((t,e)=>e>0));return t},textClass(){let t=`text-${this.block?.tunes?.alignmentTune?.alignment}`||"text-left";return t}}},r=l,o=s(1001),i=s(3453),d=s.n(i),h=s(8058),u=(0,o.Z)(r,a,n,!1,null,null,null),c=u.exports;d()(u,{VSimpleTable:h.Z})}}]);
//# sourceMappingURL=TableBlock.be519e56.js.map