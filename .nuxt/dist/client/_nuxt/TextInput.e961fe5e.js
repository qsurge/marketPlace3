import{g as z,L as B,n as m,s,o as l,c as a,i as e,v as r,m as p,x as c,a as g,aa as w,af as C,ag as E}from"./entry.67f1cb6f.js";import{u as P}from"./use-sync-props.fd34eb12.js";const _={class:r("text-input-container relative flex")},D={class:"text-input-wrapper relative flex flex-1"},N=["type","placeholder"],I=z({__name:"TextInput",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},size:{type:String,default:"md"},type:{type:String,default:"default"}},emits:["update:modelValue"],setup(d,{emit:S}){const n=d,t=B(),f=m({xs:"px-1 py-0.5",sm:"px-2 py-1.5",md:"px-4 py-2",lg:"px-5 py-3"}),x=m({xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}),i=P(n,"modelValue",S),b=s(()=>typeof t.prefix<"u"||typeof t["prefix-disabled"]<"u"),v=s(()=>typeof t.suffix<"u"),o=s(()=>"border-gray-900/10 dark:border-gray-50/[0.2]"),$=s(()=>"dark:focus:border-white focus:border-gray-900"),h=s(()=>f[n.size]||f.md),k=s(()=>x[n.size]||x.md);return(u,y)=>(l(),a("div",_,[e(t)["prefix-disabled"]?(l(),a("div",{key:0,class:r(`duration-300 transition-colors flex rounded-l bg-gray-100 dark:bg-gray-800 text-gray-500 border ${e(o)}`)},[p(u.$slots,"prefix-disabled")],2)):c("",!0),e(t).prefix?(l(),a("div",{key:1,class:r(`flex rounded-l border ${e(o)}`)},[p(u.$slots,"prefix")],2)):c("",!0),g("div",D,[w(g("input",{"onUpdate:modelValue":y[0]||(y[0]=V=>E(i)?i.value=V:null),class:r(`duration-300 transition-colors text-input w-full flex-1 bg-transparent outline-none border ${e(b)?"":"rounded-l"} ${e(v)?"":"rounded-r"} ${e(o)} ${e($)} ${e(h)} ${e(k)}`),type:d.type,placeholder:d.placeholder},null,10,N),[[C,e(i)]])]),e(t).suffix?(l(),a("div",{key:2,class:r(`flex rounded-r border ${e(o)}`)},[p(u.$slots,"suffix")],2)):c("",!0)]))}});export{I as default};