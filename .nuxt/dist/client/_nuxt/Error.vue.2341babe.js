import l from"./Wrapper.6f285da6.js";import{_ as m}from"./index.vue.ba5c3f6e.js";import{g as _,q as d,o as u,j as f,w as x,a as t,t as n,i as s,b,s as g,V as h}from"./entry.c0eb2a38.js";const w={class:"text-center mb-6 leading-3"},B={class:"font-bold text-8xl block"},k={class:"block italic"},V=_({__name:"Error",props:{code:{type:Number,default:400},wrap:{type:Boolean,default:!1}},setup(r){const e=r,c=l,p={400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found"},a=d(()=>{const{code:o}=e;return{code:o,message:p[o.toString()]||"Unknown Error"}});return(o,y)=>{const i=m;return u(),f(h(e.wrap?s(c):"div"),{class:g(e.wrap?"flex flex-col items-center justify-center":"")},{default:x(()=>[t("h1",w,[t("span",B,n(s(a).code),1),t("span",k,n(s(a).message),1)]),b(i,{text:"Home",to:"/",size:"sm"})]),_:1},8,["class"])}}});export{V as _};