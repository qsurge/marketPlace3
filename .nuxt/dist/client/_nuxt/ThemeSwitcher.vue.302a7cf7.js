import{o as x,u as $,c as se,l as E,K as ue,H as M,T as de,t as H,p as pe,N as Q}from"./open-closed.60f3a756.js";import{y as ve,c as ce,h as fe,f as be,a as me,b as ge,O as xe,o as g}from"./hidden.e44ab38e.js";import{n as S,q as y,g as V,a5 as ye,z as U,K as le,B as W,F as K,a0 as he,a6 as ke,N as P,a7 as Se,Q as R,Z as Oe,o as _,c as N,i as X,j,w as B,b as T,d as Y,a as C,r as Z,s as Le,v as z,t as G,aa as we,ab as Re}from"./entry.c0eb2a38.js";import De from"./Icon.97a508e8.js";import{_ as _e}from"./index.vue.29facb77.js";function $e(t){throw new Error("Unexpected object: "+t)}var h=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(h||{});function Ie(t,a){let l=a.resolveItems();if(l.length<=0)return null;let u=a.resolveActiveIndex(),e=u??-1,r=(()=>{switch(t.focus){case 0:return l.findIndex(s=>!a.resolveDisabled(s));case 1:{let s=l.slice().reverse().findIndex((p,b,o)=>e!==-1&&o.length-b-1>=e?!1:!a.resolveDisabled(p));return s===-1?s:l.length-1-s}case 2:return l.findIndex((s,p)=>p<=e?!1:!a.resolveDisabled(s));case 3:{let s=l.slice().reverse().findIndex(p=>!a.resolveDisabled(p));return s===-1?s:l.length-1-s}case 4:return l.findIndex(s=>a.resolveId(s)===t.id);case 5:return null;default:$e(t)}})();return r===-1?u:r}function ae(t={},a=null,l=[]){for(let[u,e]of Object.entries(t))ne(l,oe(a,u),e);return l}function oe(t,a){return t?t+"["+a+"]":a}function ne(t,a,l){if(Array.isArray(l))for(let[u,e]of l.entries())ne(t,oe(a,u.toString()),e);else l instanceof Date?t.push([a,l.toISOString()]):typeof l=="boolean"?t.push([a,l?"1":"0"]):typeof l=="string"?t.push([a,l]):typeof l=="number"?t.push([a,`${l}`]):l==null?t.push([a,""]):ae(l,a,t)}function Te(t,a,l){let u=S(l==null?void 0:l.value),e=y(()=>t.value!==void 0);return[y(()=>e.value?t.value:u.value),function(r){return e.value||(u.value=r),a==null?void 0:a(r)}]}function J(t){return[t.screenX,t.screenY]}function Pe(){let t=S([-1,-1]);return{wasMoved(a){let l=J(a);return t.value[0]===l[0]&&t.value[1]===l[1]?!1:(t.value=l,!0)},update(a){t.value=J(a)}}}let ee=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function te(t){var a,l;let u=(a=t.innerText)!=null?a:"",e=t.cloneNode(!0);if(!(e instanceof HTMLElement))return u;let r=!1;for(let p of e.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))p.remove(),r=!0;let s=r?(l=e.innerText)!=null?l:"":u;return ee.test(s)&&(s=s.replace(ee,"")),s}function Fe(t){let a=t.getAttribute("aria-label");if(typeof a=="string")return a.trim();let l=t.getAttribute("aria-labelledby");if(l){let u=l.split(" ").map(e=>{let r=document.getElementById(e);if(r){let s=r.getAttribute("aria-label");return typeof s=="string"?s.trim():te(r).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return te(t).trim()}function Be(t){let a=S(""),l=S("");return()=>{let u=x(t);if(!u)return"";let e=u.innerText;if(a.value===e)return l.value;let r=Fe(u).trim().toLowerCase();return a.value=e,l.value=r,r}}function Ve(t,a){return t===a}var Me=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Me||{}),Ae=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(Ae||{}),Ne=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Ne||{});function je(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let re=Symbol("ListboxContext");function A(t){let a=Se(re,null);if(a===null){let l=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,A),l}return a}let Ce=V({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Ve},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:a,attrs:l,emit:u}){let e=S(1),r=S(null),s=S(null),p=S(null),b=S([]),o=S(""),n=S(null),O=S(1);function L(i=d=>d){let d=n.value!==null?b.value[n.value]:null,v=xe(i(b.value.slice()),k=>x(k.dataRef.domRef)),m=d?v.indexOf(d):null;return m===-1&&(m=null),{options:v,activeOptionIndex:m}}let c=y(()=>t.multiple?1:0),[w,F]=Te(y(()=>t.modelValue===void 0?$(c.value,{[1]:[],[0]:void 0}):t.modelValue),i=>u("update:modelValue",i),y(()=>t.defaultValue)),D={listboxState:e,value:w,mode:c,compare(i,d){if(typeof t.by=="string"){let v=t.by;return(i==null?void 0:i[v])===(d==null?void 0:d[v])}return t.by(i,d)},orientation:y(()=>t.horizontal?"horizontal":"vertical"),labelRef:r,buttonRef:s,optionsRef:p,disabled:y(()=>t.disabled),options:b,searchQuery:o,activeOptionIndex:n,activationTrigger:O,closeListbox(){t.disabled||e.value!==1&&(e.value=1,n.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(i,d,v){if(t.disabled||e.value===1)return;let m=L(),k=Ie(i===h.Specific?{focus:h.Specific,id:d}:{focus:i},{resolveItems:()=>m.options,resolveActiveIndex:()=>m.activeOptionIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});o.value="",n.value=k,O.value=v??1,b.value=m.options},search(i){if(t.disabled||e.value===1)return;let d=o.value!==""?0:1;o.value+=i.toLowerCase();let v=(n.value!==null?b.value.slice(n.value+d).concat(b.value.slice(0,n.value+d)):b.value).find(k=>k.dataRef.textValue.startsWith(o.value)&&!k.dataRef.disabled),m=v?b.value.indexOf(v):-1;m===-1||m===n.value||(n.value=m,O.value=1)},clearSearch(){t.disabled||e.value!==1&&o.value!==""&&(o.value="")},registerOption(i,d){let v=L(m=>[...m,{id:i,dataRef:d}]);b.value=v.options,n.value=v.activeOptionIndex},unregisterOption(i){let d=L(v=>{let m=v.findIndex(k=>k.id===i);return m!==-1&&v.splice(m,1),v});b.value=d.options,n.value=d.activeOptionIndex,O.value=1},select(i){t.disabled||F($(c.value,{[0]:()=>i,[1]:()=>{let d=R(D.value.value).slice(),v=R(i),m=d.findIndex(k=>D.compare(v,R(k)));return m===-1?d.push(v):d.splice(m,1),d}}))}};ve([s,p],(i,d)=>{var v;D.closeListbox(),ce(d,fe.Loose)||(i.preventDefault(),(v=x(s))==null||v.focus())},y(()=>e.value===0)),ye(re,D),se(y(()=>$(e.value,{[0]:E.Open,[1]:E.Closed})));let f=y(()=>{var i;return(i=x(s))==null?void 0:i.closest("form")});return U(()=>{le([f],()=>{if(!f.value||t.defaultValue===void 0)return;function i(){D.select(t.defaultValue)}return f.value.addEventListener("reset",i),()=>{var d;(d=f.value)==null||d.removeEventListener("reset",i)}},{immediate:!0})}),()=>{let{name:i,modelValue:d,disabled:v,form:m,...k}=t,I={open:e.value===0,disabled:v,value:w.value};return W(K,[...i!=null&&w.value!=null?ae({[i]:w.value}).map(([q,ie])=>W(be,ue({features:me.Hidden,key:q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:m,name:q,value:ie}))):[],M({ourProps:{},theirProps:{...l,...de(k,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:I,slots:a,attrs:l,name:"Listbox"})])}}}),Ee=V({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${H()}`}},setup(t,{attrs:a,slots:l}){let u=A("ListboxLabel");function e(){var r;(r=x(u.buttonRef))==null||r.focus({preventScroll:!0})}return()=>{let r={open:u.listboxState.value===0,disabled:u.disabled.value},{id:s,...p}=t,b={id:s,ref:u.labelRef,onClick:e};return M({ourProps:b,theirProps:p,slot:r,attrs:a,slots:l,name:"ListboxLabel"})}}}),He=V({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${H()}`}},setup(t,{attrs:a,slots:l,expose:u}){let e=A("ListboxButton");u({el:e.buttonRef,$el:e.buttonRef});function r(o){switch(o.key){case g.Space:case g.Enter:case g.ArrowDown:o.preventDefault(),e.openListbox(),P(()=>{var n;(n=x(e.optionsRef))==null||n.focus({preventScroll:!0}),e.value.value||e.goToOption(h.First)});break;case g.ArrowUp:o.preventDefault(),e.openListbox(),P(()=>{var n;(n=x(e.optionsRef))==null||n.focus({preventScroll:!0}),e.value.value||e.goToOption(h.Last)});break}}function s(o){switch(o.key){case g.Space:o.preventDefault();break}}function p(o){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),P(()=>{var n;return(n=x(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})})):(o.preventDefault(),e.openListbox(),je(()=>{var n;return(n=x(e.optionsRef))==null?void 0:n.focus({preventScroll:!0})})))}let b=ge(y(()=>({as:t.as,type:a.type})),e.buttonRef);return()=>{var o,n;let O={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:L,...c}=t,w={ref:e.buttonRef,id:L,type:b.value,"aria-haspopup":"listbox","aria-controls":(o=x(e.optionsRef))==null?void 0:o.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(n=x(e.labelRef))==null?void 0:n.id,L].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:r,onKeyup:s,onClick:p};return M({ourProps:w,theirProps:c,slot:O,attrs:a,slots:l,name:"ListboxButton"})}}}),ze=V({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${H()}`}},setup(t,{attrs:a,slots:l,expose:u}){let e=A("ListboxOptions"),r=S(null);u({el:e.optionsRef,$el:e.optionsRef});function s(o){switch(r.value&&clearTimeout(r.value),o.key){case g.Space:if(e.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),e.search(o.key);case g.Enter:if(o.preventDefault(),o.stopPropagation(),e.activeOptionIndex.value!==null){let n=e.options.value[e.activeOptionIndex.value];e.select(n.dataRef.value)}e.mode.value===0&&(e.closeListbox(),P(()=>{var n;return(n=x(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})}));break;case $(e.orientation.value,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return o.preventDefault(),o.stopPropagation(),e.goToOption(h.Next);case $(e.orientation.value,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),e.goToOption(h.Previous);case g.Home:case g.PageUp:return o.preventDefault(),o.stopPropagation(),e.goToOption(h.First);case g.End:case g.PageDown:return o.preventDefault(),o.stopPropagation(),e.goToOption(h.Last);case g.Escape:o.preventDefault(),o.stopPropagation(),e.closeListbox(),P(()=>{var n;return(n=x(e.buttonRef))==null?void 0:n.focus({preventScroll:!0})});break;case g.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(e.search(o.key),r.value=setTimeout(()=>e.clearSearch(),350));break}}let p=pe(),b=y(()=>p!==null?(p.value&E.Open)===E.Open:e.listboxState.value===0);return()=>{var o,n,O,L;let c={open:e.listboxState.value===0},{id:w,...F}=t,D={"aria-activedescendant":e.activeOptionIndex.value===null||(o=e.options.value[e.activeOptionIndex.value])==null?void 0:o.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(L=(n=x(e.labelRef))==null?void 0:n.id)!=null?L:(O=x(e.buttonRef))==null?void 0:O.id,"aria-orientation":e.orientation.value,id:w,onKeydown:s,role:"listbox",tabIndex:0,ref:e.optionsRef};return M({ourProps:D,theirProps:F,slot:c,attrs:a,slots:l,features:Q.RenderStrategy|Q.Static,visible:b.value,name:"ListboxOptions"})}}}),Ue=V({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${H()}`}},setup(t,{slots:a,attrs:l,expose:u}){let e=A("ListboxOption"),r=S(null);u({el:r,$el:r});let s=y(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),p=y(()=>$(e.mode.value,{[0]:()=>e.compare(R(e.value.value),R(t.value)),[1]:()=>R(e.value.value).some(f=>e.compare(R(f),R(t.value)))})),b=y(()=>$(e.mode.value,{[1]:()=>{var f;let i=R(e.value.value);return((f=e.options.value.find(d=>i.some(v=>e.compare(R(v),R(d.dataRef.value)))))==null?void 0:f.id)===t.id},[0]:()=>p.value})),o=Be(r),n=y(()=>({disabled:t.disabled,value:t.value,get textValue(){return o()},domRef:r}));U(()=>e.registerOption(t.id,n)),he(()=>e.unregisterOption(t.id)),U(()=>{le([e.listboxState,p],()=>{e.listboxState.value===0&&p.value&&$(e.mode.value,{[1]:()=>{b.value&&e.goToOption(h.Specific,t.id)},[0]:()=>{e.goToOption(h.Specific,t.id)}})},{immediate:!0})}),ke(()=>{e.listboxState.value===0&&s.value&&e.activationTrigger.value!==0&&P(()=>{var f,i;return(i=(f=x(r))==null?void 0:f.scrollIntoView)==null?void 0:i.call(f,{block:"nearest"})})});function O(f){if(t.disabled)return f.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),P(()=>{var i;return(i=x(e.buttonRef))==null?void 0:i.focus({preventScroll:!0})}))}function L(){if(t.disabled)return e.goToOption(h.Nothing);e.goToOption(h.Specific,t.id)}let c=Pe();function w(f){c.update(f)}function F(f){c.wasMoved(f)&&(t.disabled||s.value||e.goToOption(h.Specific,t.id,0))}function D(f){c.wasMoved(f)&&(t.disabled||s.value&&e.goToOption(h.Nothing))}return()=>{let{disabled:f}=t,i={active:s.value,selected:p.value,disabled:f},{id:d,value:v,disabled:m,...k}=t,I={id:d,ref:r,role:"option",tabIndex:f===!0?void 0:-1,"aria-disabled":f===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onClick:O,onFocus:L,onPointerenter:w,onMouseenter:w,onPointermove:F,onMousemove:F,onPointerleave:D,onMouseleave:D};return M({ourProps:I,theirProps:k,slot:i,attrs:l,slots:a,name:"ListboxOption"})}}});const Ke={class:"flex items-center"},qe={class:"flex justify-center items-center dark:hidden"},Qe={class:"justify-center items-center hidden dark:flex"},We={class:"text-sm mr-2 flex items-center"},Xe=["value"],tt=V({__name:"ThemeSwitcher",props:{type:{type:String,default:"dropdown-right-top"}},setup(t){const l=Oe(t,"type"),u=[{key:"light",text:"Light"},{key:"dark",text:"Dark"},{key:"system",text:"System"}];return(e,r)=>{const s=Ee,p=De,b=_e,o=He,n=Ue,O=ze,L=Ce;return _(),N("div",Ke,[X(l)==="dropdown-right-top"?(_(),j(L,{key:0,modelValue:e.$colorMode.preference,"onUpdate:modelValue":r[0]||(r[0]=c=>e.$colorMode.preference=c),as:"div",class:"relative flex items-center"},{default:B(()=>[T(s,{class:"sr-only"},{default:B(()=>[Y("Theme")]),_:1}),T(o,{type:"template"},{default:B(()=>[T(b,{class:"dark:text-gray-400 text-gray-600"},{default:B(()=>[C("span",qe,[T(p,{name:"uil:sun"})]),C("span",Qe,[T(p,{name:"uil:moon"})])]),_:1})]),_:1}),T(O,{class:"p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"},{default:B(()=>[(_(),N(K,null,Z(u,c=>T(n,{key:c.key,value:c.key,class:Le({"py-2 px-2 flex items-center cursor-pointer":!0,"text-sky-500 bg-gray-100 dark:bg-gray-600/30":e.$colorMode.preference===c.key,"hover:bg-gray-50 dark:hover:bg-gray-700/30":e.$colorMode.preference!==c.key})},{default:B(()=>[C("span",We,[c.key==="light"?(_(),j(p,{key:0,name:"uil:sun"})):c.key==="dark"?(_(),j(p,{key:1,name:"uil:moon"})):c.key==="system"?(_(),j(p,{key:2,name:"uil:laptop"})):z("",!0)]),Y(" "+G(c.text),1)]),_:2},1032,["value","class"])),64))]),_:1})]),_:1},8,["modelValue"])):z("",!0),X(l)==="select-box"?we((_(),N("select",{key:1,"onUpdate:modelValue":r[1]||(r[1]=c=>e.$colorMode.preference=c),class:"w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"},[(_(),N(K,null,Z(u,c=>C("option",{key:c.key,value:c.key},G(c.text),9,Xe)),64))],512)),[[Re,e.$colorMode.preference]]):z("",!0)])}}});export{tt as _};
