import{_ as c}from"./nuxt-link.f6596bc4.js";import{_ as w}from"./index.vue.68104613.js";import{g as x,o as r,j as u,w as M,a as k,v as R,t as T,i as n,x as B}from"./entry.67f1cb6f.js";import{p as s,a as i}from"./navbar.04165732.js";const j=x({__name:"Item",props:{menu:{type:Object,required:!0},isDropdown:{type:Boolean,default:!1}},setup(t){return(e,h)=>{var m,p,d,y,f,g;const l=c,b=w;return((m=t.menu)==null?void 0:m.type)==="link"&&t.isDropdown?(r(),u(l,{key:0,to:("parseMenuRoute"in e?e.parseMenuRoute:n(i))((p=t.menu)==null?void 0:p.to)},{default:M(({isActive:o})=>{var a;return[k("div",{class:R(["transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full",o?"text-gray-900 dark:text-gray-100 font-bold":"text-gray-700 dark:text-gray-300"])},T(("parseMenuTitle"in e?e.parseMenuTitle:n(s))((a=t.menu)==null?void 0:a.title)),3)]}),_:1},8,["to"])):((d=t.menu)==null?void 0:d.type)==="link"?(r(),u(l,{key:1,to:("parseMenuRoute"in e?e.parseMenuRoute:n(i))((y=t.menu)==null?void 0:y.to)},{default:M(({isActive:o})=>{var a;return[k("span",{class:R({"text-gray-900 dark:text-gray-100 font-bold":o,"text-gray-700 dark:text-gray-300":!o})},T(("parseMenuTitle"in e?e.parseMenuTitle:n(s))((a=t.menu)==null?void 0:a.title)),3)]}),_:1},8,["to"])):((f=t.menu)==null?void 0:f.type)==="button"?(r(),u(b,{key:2,text:("parseMenuTitle"in e?e.parseMenuTitle:n(s))((g=t.menu)==null?void 0:g.title),size:"xs",to:("parseMenuRoute"in e?e.parseMenuRoute:n(i))(t.menu.to)},null,8,["text","to"])):B("",!0)}}});export{j as _};
