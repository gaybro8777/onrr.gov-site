"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[892],{6428:function(){},6643:function(t,e,r){r.d(e,{Z:function(){return i}});r(9941),r(6428);var a=r(144);function n(t){return a.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:r,data:a,children:n}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const t=Object.keys(s).filter((t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(a.staticClass+=` ${t.join(" ")}`)}return r.id&&(a.domProps=a.domProps||{},a.domProps.id=r.id),e(r.tag,a,n)}})}var s=r(5218),i=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:r,children:a}){let n;const{attrs:i}=r;return i&&(r.attrs={},n=Object.keys(i).filter((t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),t(e.tag,(0,s.ZP)(r,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),a)}})},7290:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$apolloData.loading?r("div",[r("div",{staticClass:"text-center"},[r("v-progress-circular",{attrs:{value:20}})],1)]):r("v-container",{staticClass:"page__wrap"},[r("Breadcrumbs"),t.page.title?r("div",{staticClass:"text-h1 text-center"},[t._v(t._s(t.page.title))]):t._e(),r("LayoutBlock",{attrs:{layoutBlocks:t.page.page_blocks}})],1)],1)},n=[],s=r(9985);const i=()=>r.e(156).then(r.bind(r,7772)),o=()=>r.e(496).then(r.bind(r,2826));var d={name:"PageNotFound",metaInfo:{title:"Page not found"},data(){return{}},apollo:{pages_by_id:{query:s.sI,loadingKey:"loading...",variables(){return{ID:"53"}}}},components:{Breadcrumbs:i,LayoutBlock:o},computed:{pageSlug(){return this.pages_by_id.slug},page(){return this.pages_by_id&&this.pages_by_id}}},l=d,c=r(1001),u=r(3453),p=r.n(u),f=r(6643),g=r(4955),_=(0,c.Z)(l,a,n,!1,null,"184137f8",null),v=_.exports;p()(_,{VContainer:f.Z,VProgressCircular:g.Z})}}]);
//# sourceMappingURL=PageNotFound.3fbaf189.js.map