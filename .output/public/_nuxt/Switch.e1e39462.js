import{u as f}from"./use-sync-props.9cc4d574.js";import{g as h,s as c,l as g,o as b,c as _,a as d,i as e,n as k}from"./entry.3bd667db.js";const m=["for"],y=["for"],v=["id","checked"],w=["for"],x=h({__name:"Switch",props:{modelValue:{type:Boolean,default:!1},on:{type:Boolean,default:!1},id:{type:String,default:void 0}},emits:["update:modelValue"],setup(u,{emit:r}){const t=u,i=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),o=c(t.id||i()),a=c(),n=f(t,"modelValue",r),p=l=>{const s=l.target;n.value=s.checked,r("update:modelValue",s.checked)};return g(()=>{t.on&&(n.value=!0,r("update:modelValue",!0),a.value&&(a.value.checked=!0))}),(l,s)=>(b(),_("label",{for:e(o),class:"flex cursor-pointer"},[d("label",{for:e(o),class:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[d("input",{id:e(o),ref_key:"input",ref:a,type:"checkbox",class:"switch-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 appearance-none cursor-pointer",checked:e(n),onChange:p},null,40,v),d("label",{for:e(o),class:"switch-label block overflow-hidden h-6 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer border border-gray-300 dark:border-gray-500"},null,8,w)],8,y),k(l.$slots,"default")],8,m))}});export{x as default};
