import{u as d}from"./asyncData.0baf1968.js";import{g as l,W as f,q as p,a3 as v,h as m,X as g,L as h,ai as _,B as s}from"./entry.c0eb2a38.js";import{_ as y}from"./nuxt-link.6904fc4b.js";const N=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=f(u),n=p(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>_(n.value));return{navigation:o}},render(u){const t=h(),{navigation:n}=u,o=e=>s(y,{to:e._path},()=>e.title),a=(e,i)=>s("ul",i?{"data-level":i}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,i+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}});export{N as default};
