import{u as d}from"./asyncData.3ac4e077.js";import{g as l,X as f,v,a4 as p,h as m,Y as g,M as h,aj as _,C as s}from"./entry.3bd667db.js";import{_ as y}from"./nuxt-link.fbe629c0.js";const j=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=f(u),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${g(n.value)}`,()=>_(n.value));return{navigation:o}},render(u){const t=h(),{navigation:n}=u,o=e=>s(y,{to:e._path},()=>e.title),a=(e,i)=>s("ul",i?{"data-level":i}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,i+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}});export{j as default};