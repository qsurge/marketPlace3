import{_ as b}from"./nuxt-link.f6596bc4.js";import{g as k,n as g,s as c,o as y,j as v,w as S,m as f,d as l,t as u,v as h,i as o,c as w,y as $}from"./entry.67f1cb6f.js";const z=["href"],p=`
  cursor-pointer
  border transition-color duration-300
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]
  flex items-center justify-center font-semibold
`,j=k({__name:"index",props:{text:{type:String,default:""},type:{type:String,default:"primary"},size:{type:String,default:"md"},to:{type:[String,Object],default:void 0},href:{type:String,default:void 0}},setup(e){const t=e,a=g({none:"",primary:"text-white bg-primary-500 hover:bg-primary-400 border-primary-500",secondary:"text-gray-800 bg-gray-200 border-gray-200 hover:bg-gray-300 dark:text-white dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700",opposite:"text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-900 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:border-white",danger:"text-white bg-red-500 hover:bg-red-400 border-red-500"}),s=g({lg:"h-14 px-8 text-lg rounded-lg",md:"h-10 px-6 text-base rounded",sm:"h-9 px-4 text-sm rounded",xs:"h-6 px-3 text-xs rounded"}),n=c(()=>t.type in a?a[t.type]:a.primary),d=c(()=>s[t.size]||s.lg),x=r=>{const i=$();t.to&&i.push(t.to),t.href||r.preventDefault()};return(r,i)=>{const m=b;return e.to?(y(),v(m,{key:0,tag:"a",to:e.to,class:h(`${p} ${o(n)} ${o(d)}`)},{default:S(()=>[f(r.$slots,"default",{},()=>[l(u(e.text),1)])]),_:3},8,["to","class"])):(y(),w("a",{key:1,class:h(`${p} ${o(n)} ${o(d)}`),href:e.href,onClick:x},[f(r.$slots,"default",{},()=>[l(u(e.text),1)])],10,z))}}});export{j as _};
