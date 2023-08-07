import{_ as me}from"./Item.vue.0881a41f.js";import be from"./Icon.3abd6513.js";import{a as Pe,o,u as O,c as ye,l as A,H as X,t as M,p as ge,N as ee}from"./open-closed.b7112ea5.js";import{w as he,m as G,a as R,f as V,E as Y,y as Se,c as we,h as Ee,b as ke,P as C,N as I,o as B,T as U}from"./hidden.180b6cf4.js";import{a7 as W,s as w,C as T,a8 as q,g as N,a6 as J,v as k,l as ae,a1 as re,F as Q,N as Fe,z as $e,o as j,j as z,w as D,b as K,a as te,x as ne,i as le,t as xe,aa as Ie,c as Be,r as Ce,y as Te}from"./entry.3bd667db.js";import{p as Oe,a as _e}from"./navbar.a9ed6300.js";function Me(t,s,v,y){Pe.isServer||W(n=>{t=t??window,t.addEventListener(s,v,y),n(()=>t.removeEventListener(s,v,y))})}var $=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))($||{});function ue(){let t=w(0);return he("keydown",s=>{s.key==="Tab"&&(t.value=s.shiftKey?1:0)}),t}function Ne({defaultContainers:t=[],portals:s}={}){let v=w(null),y=G(v);function n(){var e;let r=[];for(let l of t)l!==null&&(l instanceof HTMLElement?r.push(l):"value"in l&&l.value instanceof HTMLElement&&r.push(l.value));if(s!=null&&s.value)for(let l of s.value)r.push(l);for(let l of(e=y==null?void 0:y.querySelectorAll("html > *, body > *"))!=null?e:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(l.contains(o(v))||r.some(h=>l.contains(h))||r.push(l));return r}return{resolveContainers:n,contains(e){return n().some(r=>r.contains(e))},mainTreeNodeRef:v,MainTreeNode(){return T(V,{features:R.Hidden,ref:v})}}}let oe=Symbol("PortalParentContext");function Le(){let t=q(oe,null),s=w([]);function v(e){return s.value.push(e),t&&t.register(e),()=>y(e)}function y(e){let r=s.value.indexOf(e);r!==-1&&s.value.splice(r,1),t&&t.unregister(e)}let n={register:v,unregister:y,portals:s};return[s,N({name:"PortalWrapper",setup(e,{slots:r}){return J(oe,n),()=>{var l;return(l=r.default)==null?void 0:l.call(r)}}})]}var He=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(He||{});let se=Symbol("PopoverContext");function Z(t){let s=q(se,null);if(s===null){let v=new Error(`<${t} /> is missing a parent <${pe.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,Z),v}return s}let je=Symbol("PopoverGroupContext");function ie(){return q(je,null)}let ce=Symbol("PopoverPanelContext");function De(){return q(ce,null)}let pe=N({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(t,{slots:s,attrs:v,expose:y}){var n;let e=w(null);y({el:e,$el:e});let r=w(1),l=w(null),h=w(null),g=w(null),d=w(null),E=k(()=>G(e)),x=k(()=>{var a,i;if(!o(l)||!o(d))return!1;for(let H of document.querySelectorAll("body > *"))if(Number(H==null?void 0:H.contains(o(l)))^Number(H==null?void 0:H.contains(o(d))))return!0;let p=Y(),S=p.indexOf(o(l)),L=(S+p.length-1)%p.length,ve=(S+1)%p.length,de=p[L],fe=p[ve];return!((a=o(d))!=null&&a.contains(de))&&!((i=o(d))!=null&&i.contains(fe))}),b={popoverState:r,buttonId:w(null),panelId:w(null),panel:d,button:l,isPortalled:x,beforePanelSentinel:h,afterPanelSentinel:g,togglePopover(){r.value=O(r.value,{[0]:1,[1]:0})},closePopover(){r.value!==1&&(r.value=1)},close(a){b.closePopover();let i=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?o(a):o(b.button):o(b.button))();i==null||i.focus()}};J(se,b),ye(k(()=>O(r.value,{[0]:A.Open,[1]:A.Closed})));let _={buttonId:b.buttonId,panelId:b.panelId,close(){b.closePopover()}},F=ie(),f=F==null?void 0:F.registerPopover,[P,c]=Le(),u=Ne({portals:P,defaultContainers:[l,d]});function m(){var a,i,p,S;return(S=F==null?void 0:F.isFocusWithinPopoverGroup())!=null?S:((a=E.value)==null?void 0:a.activeElement)&&(((i=o(l))==null?void 0:i.contains(E.value.activeElement))||((p=o(d))==null?void 0:p.contains(E.value.activeElement)))}return W(()=>f==null?void 0:f(_)),Me((n=E.value)==null?void 0:n.defaultView,"focus",a=>{var i,p;a.target!==window&&a.target instanceof HTMLElement&&r.value===0&&(m()||l&&d&&(u.contains(a.target)||(i=o(b.beforePanelSentinel))!=null&&i.contains(a.target)||(p=o(b.afterPanelSentinel))!=null&&p.contains(a.target)||b.closePopover()))},!0),Se(u.resolveContainers,(a,i)=>{var p;b.closePopover(),we(i,Ee.Loose)||(a.preventDefault(),(p=o(l))==null||p.focus())},k(()=>r.value===0)),()=>{let a={open:r.value===0,close:b.close};return T(c,{},()=>X({theirProps:{...t,...v},ourProps:{ref:e},slot:a,slots:s,attrs:v,name:"Popover"}))}}}),Ke=N({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${M()}`}},inheritAttrs:!1,setup(t,{attrs:s,slots:v,expose:y}){let n=Z("PopoverButton"),e=k(()=>G(n.button));y({el:n.button,$el:n.button}),ae(()=>{n.buttonId.value=t.id}),re(()=>{n.buttonId.value=null});let r=ie(),l=r==null?void 0:r.closeOthers,h=De(),g=k(()=>h===null?!1:h.value===n.panelId.value),d=w(null),E=`headlessui-focus-sentinel-${M()}`;g.value||W(()=>{n.button.value=d.value});let x=ke(k(()=>({as:t.as,type:s.type})),d);function b(u){var m,a,i,p,S;if(g.value){if(n.popoverState.value===1)return;switch(u.key){case B.Space:case B.Enter:u.preventDefault(),(a=(m=u.target).click)==null||a.call(m),n.closePopover(),(i=o(n.button))==null||i.focus();break}}else switch(u.key){case B.Space:case B.Enter:u.preventDefault(),u.stopPropagation(),n.popoverState.value===1&&(l==null||l(n.buttonId.value)),n.togglePopover();break;case B.Escape:if(n.popoverState.value!==0)return l==null?void 0:l(n.buttonId.value);if(!o(n.button)||(p=e.value)!=null&&p.activeElement&&!((S=o(n.button))!=null&&S.contains(e.value.activeElement)))return;u.preventDefault(),u.stopPropagation(),n.closePopover();break}}function _(u){g.value||u.key===B.Space&&u.preventDefault()}function F(u){var m,a;t.disabled||(g.value?(n.closePopover(),(m=o(n.button))==null||m.focus()):(u.preventDefault(),u.stopPropagation(),n.popoverState.value===1&&(l==null||l(n.buttonId.value)),n.togglePopover(),(a=o(n.button))==null||a.focus()))}function f(u){u.preventDefault(),u.stopPropagation()}let P=ue();function c(){let u=o(n.panel);if(!u)return;function m(){O(P.value,{[$.Forwards]:()=>C(u,I.First),[$.Backwards]:()=>C(u,I.Last)})===U.Error&&C(Y().filter(a=>a.dataset.headlessuiFocusGuard!=="true"),O(P.value,{[$.Forwards]:I.Next,[$.Backwards]:I.Previous}),{relativeTo:o(n.button)})}m()}return()=>{let u=n.popoverState.value===0,m={open:u},{id:a,...i}=t,p=g.value?{ref:d,type:x.value,onKeydown:b,onClick:F}:{ref:d,id:a,type:x.value,"aria-expanded":n.popoverState.value===0,"aria-controls":o(n.panel)?n.panelId.value:void 0,disabled:t.disabled?!0:void 0,onKeydown:b,onKeyup:_,onClick:F,onMousedown:f};return T(Q,[X({ourProps:p,theirProps:{...s,...i},slot:m,attrs:s,slots:v,name:"PopoverButton"}),u&&!g.value&&n.isPortalled.value&&T(V,{id:E,features:R.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:c})])}}}),Ae=N({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${M()}`}},inheritAttrs:!1,setup(t,{attrs:s,slots:v,expose:y}){let{focus:n}=t,e=Z("PopoverPanel"),r=k(()=>G(e.panel)),l=`headlessui-focus-sentinel-before-${M()}`,h=`headlessui-focus-sentinel-after-${M()}`;y({el:e.panel,$el:e.panel}),ae(()=>{e.panelId.value=t.id}),re(()=>{e.panelId.value=null}),J(ce,e.panelId),W(()=>{var f,P;if(!n||e.popoverState.value!==0||!e.panel)return;let c=(f=r.value)==null?void 0:f.activeElement;(P=o(e.panel))!=null&&P.contains(c)||C(o(e.panel),I.First)});let g=ge(),d=k(()=>g!==null?(g.value&A.Open)===A.Open:e.popoverState.value===0);function E(f){var P,c;switch(f.key){case B.Escape:if(e.popoverState.value!==0||!o(e.panel)||r.value&&!((P=o(e.panel))!=null&&P.contains(r.value.activeElement)))return;f.preventDefault(),f.stopPropagation(),e.closePopover(),(c=o(e.button))==null||c.focus();break}}function x(f){var P,c,u,m,a;let i=f.relatedTarget;i&&o(e.panel)&&((P=o(e.panel))!=null&&P.contains(i)||(e.closePopover(),((u=(c=o(e.beforePanelSentinel))==null?void 0:c.contains)!=null&&u.call(c,i)||(a=(m=o(e.afterPanelSentinel))==null?void 0:m.contains)!=null&&a.call(m,i))&&i.focus({preventScroll:!0})))}let b=ue();function _(){let f=o(e.panel);if(!f)return;function P(){O(b.value,{[$.Forwards]:()=>{var c;C(f,I.First)===U.Error&&((c=o(e.afterPanelSentinel))==null||c.focus())},[$.Backwards]:()=>{var c;(c=o(e.button))==null||c.focus({preventScroll:!0})}})}P()}function F(){let f=o(e.panel);if(!f)return;function P(){O(b.value,{[$.Forwards]:()=>{let c=o(e.button),u=o(e.panel);if(!c)return;let m=Y(),a=m.indexOf(c),i=m.slice(0,a+1),p=[...m.slice(a+1),...i];for(let S of p.slice())if(S.dataset.headlessuiFocusGuard==="true"||u!=null&&u.contains(S)){let L=p.indexOf(S);L!==-1&&p.splice(L,1)}C(p,I.First,{sorted:!1})},[$.Backwards]:()=>{var c;C(f,I.Previous)===U.Error&&((c=o(e.button))==null||c.focus())}})}P()}return()=>{let f={open:e.popoverState.value===0,close:e.close},{id:P,focus:c,...u}=t,m={ref:e.panel,id:P,onKeydown:E,onFocusout:n&&e.popoverState.value===0?x:void 0,tabIndex:-1};return X({ourProps:m,theirProps:{...s,...u},attrs:s,slot:f,slots:{...v,default:(...a)=>{var i;return[T(Q,[d.value&&e.isPortalled.value&&T(V,{id:l,ref:e.beforePanelSentinel,features:R.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:_}),(i=v.default)==null?void 0:i.call(v,...a),d.value&&e.isPortalled.value&&T(V,{id:h,ref:e.afterPanelSentinel,features:R.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:F})])]}},features:ee.RenderStrategy|ee.Static,visible:d.value,name:"PopoverPanel"})}}});const Re={class:"grid grid-cols-1"},Xe=N({__name:"Wrapper",props:{menu:{type:Object,required:!0}},setup(t){const s=t,v=Fe();$e();const y=k(()=>{var e,r,l,h;if(!((e=s.menu)!=null&&e.children))return!1;const n=((r=s.menu)==null?void 0:r.children)||[];for(const g of n){const d=_e(g.to);if(typeof d=="string"&&d===v.path||(h=v.name)!=null&&h.toString().includes((l=d.name)==null?void 0:l.toString()))return!0}return!1});return(n,e)=>{const r=me,l=be,h=Ke,g=Ae,d=pe;return t.menu.type!=="dropdown"?(j(),z(r,{key:0,menu:t.menu},null,8,["menu"])):t.menu.children&&t.menu.children.length>0?(j(),z(d,{key:1},{default:D(({open:E})=>[K(h,{class:"flex items-center transition-all duration-300 text-gray-900 dark:text-gray-100"},{default:D(()=>[te("span",{class:ne([le(y)?"font-bold":""])},xe(("parseMenuTitle"in n?n.parseMenuTitle:le(Oe))(t.menu.title)),3),K(l,{name:"carbon:chevron-down",class:ne(["ml-1",[E?"transform rotate-180":""]])},null,8,["class"])]),_:2},1024),K(Ie,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:D(()=>[K(g,{class:"absolute z-10 px-2 py-2 rounded-lg min-w-[150px] bg-gray-50 border-gray-300 dark:bg-gray-900 border dark:border-gray-600"},{default:D(()=>[te("div",Re,[(j(!0),Be(Q,null,Ce(t.menu.children,(x,b)=>(j(),z(r,{key:b,menu:x,"is-dropdown":""},null,8,["menu"]))),128))])]),_:1})]),_:1})]),_:1})):Te("",!0)}}});export{Xe as _};
