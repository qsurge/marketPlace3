import{u as l}from"./asyncData.8a60347e.js";import{g as d,a9 as f,m as p,a4 as v,h as m,aa as g,T as h,ak as _,l as s}from"./entry.d468a8e7.js";import{_ as y}from"./nuxt-link.0fe86ee1.js";const x=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=f(u),n=p(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&v("dd-navigation").value){const{navigation:t}=m();return{navigation:t}}const{data:o}=await l(`content-navigation-${g(n.value)}`,()=>_(n.value));return{navigation:o}},render(u){const a=h(),{navigation:n}=u,o=e=>s(y,{to:e._path},()=>e.title),t=(e,i)=>s("ul",i?{"data-level":i}:null,e.map(r=>r.children?s("li",null,[o(r),t(r.children,i+1)]):s("li",null,o(r)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}});export{x as default};
