"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[3637],{3637:function(e,t,l){l.r(t),l.d(t,{default:function(){return ae}});var a=l(3396);function n(e,t,l,n,o,u){const i=(0,a.up)("station",!0);return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i)])}var o=l(7139);function u(e,t,l,n,u,i){const s=(0,a.up)("v-card-title"),r=(0,a.up)("select-host"),c=(0,a.up)("v-card-text"),v=(0,a.up)("v-card"),d=(0,a.up)("v-col"),f=(0,a.up)("v-row"),m=(0,a.up)("v-card-item"),p=(0,a.up)("feature-map"),h=(0,a.up)("v-btn"),g=(0,a.up)("v-container");return(0,a.wg)(),(0,a.j4)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{cols:12},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Select station")])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{modelValue:e.selectedHost,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedHost=t)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(f),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{cols:6},{default:(0,a.w5)((()=>[(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Station: "+(0,o.zw)(e.$route.params.id),1)])),_:1}),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a._)("pre",null,(0,o.zw)(e.host),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(d,{cols:6,"align-self":"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{geom:e.geom},null,8,["geom"])])),_:1})])),_:1}),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{cols:12},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{onClick:e.edit},{default:(0,a.w5)((()=>[(0,a.Uk)("Edit")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}l(7658);var i=l(4870),s=l(3238),r=l(6572),c=l(1888),v=l(6596),d=l(8952),f=l(3289),m=l(1617),p=l(1970),h=l(1138),g=l(8157),b=l(3712),y=l(1629),S=l(320),w=l(2385),x=l(131),V=l(9888);function _(e){const t=.501,l=Math.abs(e);return Math.sign(e)*(l/((1/t-2)*(1-l)+1))}function k(e){let{selectedElement:t,containerSize:l,contentSize:a,isRtl:n,currentScrollOffset:o,isHorizontal:u}=e;const i=u?t.clientWidth:t.clientHeight,s=u?t.offsetLeft:t.offsetTop,r=n&&u?a-s-i:s,c=l+o,v=i+r,d=.4*i;return r<=o?o=Math.max(r-d,0):c<=v&&(o=Math.min(o-(c-v-d),a-l)),o}function C(e){let{selectedElement:t,containerSize:l,contentSize:a,isRtl:n,isHorizontal:o}=e;const u=o?t.clientWidth:t.clientHeight,i=o?t.offsetLeft:t.offsetTop,s=n&&o?a-i-u/2-l/2:i+u/2-l/2;return Math.min(a-l,Math.max(0,s))}const W=Symbol.for("vuetify:v-slide-group"),H=(0,S.ev)()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:W},nextIcon:{type:m.lE,default:"$next"},prevIcon:{type:m.lE,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["always","desktop","mobile"].includes(e)},...(0,h.Q)(),...(0,p.k4)({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const{isRtl:n}=(0,y.Vw)(),{mobile:o}=(0,g.AW)(),u=(0,p._v)(e,e.symbol),s=(0,i.iH)(!1),r=(0,i.iH)(0),c=(0,i.iH)(0),v=(0,i.iH)(0),m=(0,a.Fl)((()=>"horizontal"===e.direction)),{resizeRef:h,contentRect:S}=(0,b.y)(),{resizeRef:W,contentRect:H}=(0,b.y)(),z=(0,a.Fl)((()=>u.selected.value.length?u.items.value.findIndex((e=>e.id===u.selected.value[0])):-1)),T=(0,a.Fl)((()=>u.selected.value.length?u.items.value.findIndex((e=>e.id===u.selected.value[u.selected.value.length-1])):-1));if(w.BR){let t=-1;(0,a.YP)((()=>[u.selected.value,S.value,H.value,m.value]),(()=>{cancelAnimationFrame(t),t=requestAnimationFrame((()=>{if(S.value&&H.value){const e=m.value?"width":"height";c.value=S.value[e],v.value=H.value[e],s.value=c.value+1<v.value}if(z.value>=0&&W.value){const t=W.value.children[T.value];0!==z.value&&s.value?e.centerActive?r.value=C({selectedElement:t,containerSize:c.value,contentSize:v.value,isRtl:n.value,isHorizontal:m.value}):s.value&&(r.value=k({selectedElement:t,containerSize:c.value,contentSize:v.value,isRtl:n.value,currentScrollOffset:r.value,isHorizontal:m.value})):r.value=0}}))}))}const F=(0,i.iH)(!1);let A=0,M=0;function E(e){const t=m.value?"clientX":"clientY",l=n.value&&m.value?-1:1;M=l*r.value,A=e.touches[0][t],F.value=!0}function $(e){if(!s.value)return;const t=m.value?"clientX":"clientY",l=n.value&&m.value?-1:1;r.value=l*(M+A-e.touches[0][t])}function B(e){const t=v.value-c.value;r.value<0||!s.value?r.value=0:r.value>=t&&(r.value=t),F.value=!1}function R(){h.value&&(h.value[m.value?"scrollLeft":"scrollTop"]=0)}const Z=(0,i.iH)(!1);function I(e){if(Z.value=!0,s.value&&W.value)for(const t of e.composedPath())for(const e of W.value.children)if(e===t)return void(r.value=k({selectedElement:e,containerSize:c.value,contentSize:v.value,isRtl:n.value,currentScrollOffset:r.value,isHorizontal:m.value}))}function L(e){Z.value=!1}function Y(e){Z.value||e.relatedTarget&&W.value?.contains(e.relatedTarget)||O()}function P(e){W.value&&(m.value?"ArrowRight"===e.key?O(n.value?"prev":"next"):"ArrowLeft"===e.key&&O(n.value?"next":"prev"):"ArrowDown"===e.key?O("next"):"ArrowUp"===e.key&&O("prev"),"Home"===e.key?O("first"):"End"===e.key&&O("last"))}function O(e){if(W.value)if(e)if("next"===e){const e=W.value.querySelector(":focus")?.nextElementSibling;e?e.focus():O("first")}else if("prev"===e){const e=W.value.querySelector(":focus")?.previousElementSibling;e?e.focus():O("last")}else"first"===e?W.value.firstElementChild?.focus():"last"===e&&W.value.lastElementChild?.focus();else{const e=[...W.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled")));e[0]?.focus()}}function U(e){const t=r.value+("prev"===e?-1:1)*c.value;r.value=(0,x.uZ)(t,0,v.value-c.value)}const j=(0,a.Fl)((()=>{let e=r.value>v.value-c.value?-(v.value-c.value)+_(v.value-c.value-r.value):-r.value;r.value<=0&&(e=_(-r.value));const t=n.value&&m.value?-1:1;return{transform:`translate${m.value?"X":"Y"}(${t*e}px)`,transition:F.value?"none":"",willChange:F.value?"transform":""}})),q=(0,a.Fl)((()=>({next:u.next,prev:u.prev,select:u.select,isSelected:u.isSelected}))),G=(0,a.Fl)((()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!o.value;case!0:return s.value||Math.abs(r.value)>0;case"mobile":return o.value||s.value||Math.abs(r.value)>0;default:return!o.value&&(s.value||Math.abs(r.value)>0)}})),Q=(0,a.Fl)((()=>Math.abs(r.value)>0)),X=(0,a.Fl)((()=>v.value>Math.abs(r.value)+c.value));return(0,V.L)((()=>(0,a.Wm)(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!m.value,"v-slide-group--has-affixes":G.value,"v-slide-group--is-overflowing":s.value}],tabindex:Z.value||u.selected.value.length?-1:0,onFocus:Y},{default:()=>[G.value&&(0,a.Wm)("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Q.value}],onClick:()=>U("prev")},[l.prev?.(q.value)??(0,a.Wm)(d.Z5,null,{default:()=>[(0,a.Wm)(f.t,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),(0,a.Wm)("div",{key:"container",ref:h,class:"v-slide-group__container",onScroll:R},[(0,a.Wm)("div",{ref:W,class:"v-slide-group__content",style:j.value,onTouchstartPassive:E,onTouchmovePassive:$,onTouchendPassive:B,onFocusin:I,onFocusout:L,onKeydown:P},[l.default?.(q.value)])]),G.value&&(0,a.Wm)("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!X.value}],onClick:()=>U("next")},[l.next?.(q.value)??(0,a.Wm)(d.Z5,null,{default:()=>[(0,a.Wm)(f.t,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}))),{selected:u.selected,scrollTo:U,scrollOffset:r,focus:O}}});var z=l(870),T=l(6183),F=l(7041),A=l(2370),M=l(3122),E=l(8587);const $=Symbol.for("vuetify:v-tabs"),B=(0,S.ev)()({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:m.lE,appendIcon:m.lE,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...(0,h.Q)(),...(0,T.GN)(),...(0,p.YQ)({selectedClass:"v-tab--selected"}),...(0,F.x$)()},setup(e,t){let{slots:l,attrs:n}=t;const{textColorClasses:o,textColorStyles:u}=(0,A.rY)(e,"sliderColor"),s=(0,a.Fl)((()=>"horizontal"===e.direction)),r=(0,i.iH)(!1),c=(0,i.iH)(),v=(0,i.iH)();function d(e){let{value:t}=e;if(r.value=t,t){const e=c.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),t=v.value;if(!e||!t)return;const l=getComputedStyle(e).color,a=e.getBoundingClientRect(),n=t.getBoundingClientRect(),o=s.value?"x":"y",u=s.value?"X":"Y",i=s.value?"right":"bottom",r=s.value?"width":"height",d=a[o],f=n[o],m=d>f?a[i]-n[i]:a[o]-n[o],p=Math.sign(m)>0?s.value?"right":"bottom":Math.sign(m)<0?s.value?"left":"top":"center",h=Math.abs(m)+(Math.sign(m)<0?a[r]:n[r]),g=h/Math.max(a[r],n[r]),b=a[r]/n[r],y=1.5;(0,M.j)(t,{backgroundColor:[l,""],transform:[`translate${u}(${m}px) scale${u}(${b})`,`translate${u}(${m/y}px) scale${u}(${(g-1)/y+1})`,""],transformOrigin:Array(3).fill(p)},{duration:225,easing:E.Ly})}}return(0,V.L)((()=>{const[t]=(0,x.ei)(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return(0,a.Wm)(z.T,(0,a.dG)({_as:"VTab",symbol:$,ref:c,class:["v-tab"],tabindex:r.value?0:-1,role:"tab","aria-selected":String(r.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},t,n,{"onGroup:selected":d}),{default:()=>[l.default?l.default():e.title,!e.hideSlider&&(0,a.Wm)("div",{ref:v,class:["v-tab__slider",o.value],style:u.value},null)]})})),{}}});var R=l(9694),Z=l(8434),I=l(8717);function L(e){return e?e.map((e=>"string"===typeof e?{title:e,value:e}:e)):[]}const Y=(0,S.ev)()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...(0,R.f)(),...(0,h.Q)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const n=(0,I.z)(e,"modelValue"),o=(0,a.Fl)((()=>L(e.items))),{densityClasses:u}=(0,R.t)(e),{backgroundColorClasses:s,backgroundColorStyles:r}=(0,A.Y5)((0,i.Vh)(e,"bgColor"));return(0,Z.AF)({VTab:{color:(0,i.Vh)(e,"color"),direction:(0,i.Vh)(e,"direction"),stacked:(0,i.Vh)(e,"stacked"),fixed:(0,i.Vh)(e,"fixedTabs"),sliderColor:(0,i.Vh)(e,"sliderColor"),hideSlider:(0,i.Vh)(e,"hideSlider")}}),(0,V.L)((()=>(0,a.Wm)(H,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},u.value,s.value],style:[{"--v-tabs-height":(0,x.kb)(e.height)},r.value],role:"tablist",symbol:$,mandatory:e.mandatory,direction:e.direction},{default:()=>[l.default?l.default():o.value.map((e=>(0,a.Wm)(B,(0,a.dG)(e,{key:e.title}),null)))]}))),{}}});var P=l(2650),O=l(3369),U=l(8521),j=l(6824),q=l(2483),G=l(3968),Q=l(7019),X=l(839),D=l(5206),N=(0,a.aZ)({name:"station",components:{VCard:s._,VCardTitle:r.E,VCardText:c.Z,VCardItem:v._,VTabs:Y,VTab:B,VBtn:z.T,VAutocomplete:P.f,VContainer:O.K,VCol:U.D,VRow:j.o,FeatureMap:Q.Z,SelectHost:X.Z},methods:{},setup(e){const t=(0,i.iH)(null),l=(0,q.tv)(),n=(0,i.iH)(null),o=(0,G.lL)(D.Z),u=(0,a.Fl)((()=>o.all())),s=(0,i.iH)(null),r=()=>{l.push("/station/"+v.params.id+"/edit")},c=async e=>{s.value=(0,G.lL)(D.Z).where("id",v.params.id).first()};(0,a.YP)(s,(e=>{if(e){const t=e.location.match(/POINT\(([-\d\.]+)\s+([-\d\.]+)\)/),l=[parseFloat(t[1]),parseFloat(t[2])];n.value={type:"Feature",geometry:{type:"Point",coordinates:l}}}console.log(n.value)}));const v=(0,q.yj)();(0,i.iH)([]);return(0,a.bv)((async()=>{c(v.params.id),(0,a.m0)((()=>{c(v.params.id)})),(0,a.YP)(t,(e=>{l.push("/station/"+e.id)}))})),(0,a.d1)((()=>{})),{host:s,edit:r,hostOptions:u,selectedHost:t,geom:n}}}),K=l(89);const J=(0,K.Z)(N,[["render",u]]);var ee=J,te={name:"MyView",components:{Station:ee}};const le=(0,K.Z)(te,[["render",n]]);var ae=le},839:function(e,t,l){l.d(t,{Z:function(){return d}});var a=l(3396);function n(e,t,l,n,o,u){const i=(0,a.up)("v-autocomplete");return(0,a.wg)(),(0,a.j4)(i,{items:e.options,"item-title":"name","item-value":"id",label:"host",modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selected=t),hint:e.selected?e.selected.name:"Select a host","persistent-hint":"","return-object":""},null,8,["items","modelValue","hint"])}var o=l(5206),u=l(3968),i=l(4870),s=l(2650),r=(0,a.aZ)({name:"SelectHost",components:{VAutocomplete:s.f},emits:["update:modelValue"],setup(e,{emit:t}){const l=(0,i.iH)(null),n=(0,a.Fl)((()=>(0,u.lL)(o.Z).all()));console.log(n);(0,a.Fl)((()=>{}));return(0,a.YP)((()=>l.value),(e=>{t("update:modelValue",e)})),{selected:l,options:n}}}),c=l(89);const v=(0,c.Z)(r,[["render",n]]);var d=v}}]);
//# sourceMappingURL=3637.d2864f08.js.map