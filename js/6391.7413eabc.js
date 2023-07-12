"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[6391,1489],{6391:function(e,t,a){a.r(t),a.d(t,{default:function(){return Q}});var n=a(3396);function l(e,t,a,l,i,o){const s=(0,n.up)("roadmap",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(s)])}var i=a(7139);const o=(0,n._)("a",{href:"https://library.wmo.int/index.php?lvl=notice_display&id=16300"}," WMO Climate Data Management Systems specifications (WMO-No. 1131)",-1),s=(0,n._)("a",{href:"https://spec.opencdms.org"},"https://spec.opencdms.org",-1);function r(e,t,a,l,r,d){const p=(0,n.up)("v-card-title"),u=(0,n.up)("v-card-text"),c=(0,n.up)("v-card"),v=(0,n.up)("v-expansion-panel-text"),m=(0,n.up)("v-expansion-panel"),f=(0,n.up)("v-expansion-panels");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Specification and roadmap")])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)("The core functionality and requirements for a climate data management are defined in the "),o,(0,n.Uk)(". The specifications detailed in WMO-No. 1131 cover a range of topics, including policy and core IT infrastructure. Within the OpenCDMS project only the data management functions are considered, notably those covered by Section 4 to 8 of WMO-No. 1131. The cards below summarises these functions and progress towards their implementation. The full list of specifications can be found at "),s,(0,n.Uk)(". ")])),_:1})])),_:1}),e.requirements?((0,n.wg)(),(0,n.j4)(f,{key:0},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.requirements,(e=>((0,n.wg)(),(0,n.j4)(m,{title:e.title},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{class:"v-card-text"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.text)+" ",1),e.requirements?((0,n.wg)(),(0,n.j4)(f,{key:0,multiple:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.requirements,(e=>((0,n.wg)(),(0,n.j4)(m,{title:e.title},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{class:"v-card-text"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.text),1)])),_:2},1024),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.requirements,(e=>((0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.title)+" ("+(0,i.zw)(e.classification)+")",1)])),_:2},1024),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.text),1)])),_:2},1024),(0,n.Wm)(c,{color:e.color,title:e.status},null,8,["color","title"])])),_:2},1024)))),256))])),_:2},1024)])),_:2},1032,["title"])))),256))])),_:2},1024)):(0,n.kq)("",!0)])),_:2},1024)])),_:2},1032,["title"])))),256))])),_:1})):(0,n.kq)("",!0)],64)}var d=a(4870),p=a(1489),u=a(6572),c=a(1888),v=(a(7658),a(1970)),m=a(1138),f=a(7041),x=a(8434),g=a(320),y=a(9888);const b=Symbol.for("vuetify:v-expansion-panel"),W=["default","accordion","inset","popout"],w=(0,g.ev)()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>W.includes(e)},readonly:Boolean,...(0,v.k4)(),...(0,m.Q)(),...(0,f.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;(0,v._v)(e,b);const{themeClasses:l}=(0,f.ER)(e),i=(0,n.Fl)((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`));return(0,x.AF)({VExpansionPanel:{color:(0,d.Vh)(e,"color")},VExpansionPanelTitle:{readonly:(0,d.Vh)(e,"readonly")}}),(0,y.L)((()=>(0,n.Wm)(e.tag,{class:["v-expansion-panels",l.value,i.value]},a))),{}}});var h=a(3289),k=a(3824),_=a(1617),I=a(2370),S=a(3766);const C=(0,S.U)({color:String,expandIcon:{type:_.lE,default:"$expand"},collapseIcon:{type:_.lE,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),V=(0,g.ev)()({name:"VExpansionPanelTitle",directives:{Ripple:k.H},props:{...C()},setup(e,t){let{slots:a}=t;const l=(0,n.f3)(b);if(!l)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:o}=(0,I.Y5)(e,"color"),s=(0,n.Fl)((()=>({collapseIcon:e.collapseIcon,disabled:l.disabled.value,expanded:l.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})));return(0,y.L)((()=>(0,n.wy)((0,n.Wm)("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":l.isSelected.value},i.value],style:o.value,type:"button",tabindex:l.disabled.value?-1:void 0,disabled:l.disabled.value,"aria-expanded":l.isSelected.value,onClick:e.readonly?void 0:l.toggle},[(0,n.Wm)("span",{class:"v-expansion-panel-title__overlay"},null),a.default?.(s.value),!e.hideActions&&(0,n.Wm)("span",{class:"v-expansion-panel-title__icon"},[a.actions?a.actions(s.value):(0,n.Wm)(h.t,{icon:l.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[(0,n.Q2)("ripple"),e.ripple]]))),{}}});var A=a(9242),E=a(8952),F=a(1136);const B=(0,g.ev)()({name:"VExpansionPanelText",props:{...(0,F.H)()},setup(e,t){let{slots:a}=t;const l=(0,n.f3)(b);if(!l)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:o}=(0,F.l)(e,l.isSelected);return(0,y.L)((()=>(0,n.Wm)(E.Fx,{onAfterLeave:o},{default:()=>[(0,n.wy)((0,n.Wm)("div",{class:"v-expansion-panel-text"},[a.default&&i.value&&(0,n.Wm)("div",{class:"v-expansion-panel-text__wrapper"},[a.default?.()])]),[[A.F8,l.isSelected.value]])]}))),{}}});var T=a(2465),U=a(4231);const H=(0,g.ev)()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...(0,T.c)(),...(0,v.YQ)(),...(0,F.H)(),...(0,U.I)(),...(0,m.Q)(),...C()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t;const l=(0,v.Yt)(e,b),{backgroundColorClasses:i,backgroundColorStyles:o}=(0,I.Y5)(e,"bgColor"),{elevationClasses:s}=(0,T.Y)(e),{roundedClasses:r}=(0,U.b)(e),d=(0,n.Fl)((()=>l?.disabled.value||e.disabled)),p=(0,n.Fl)((()=>l.group.items.value.reduce(((e,t,a)=>(l.group.selected.value.includes(t.id)&&e.push(a),e)),[]))),u=(0,n.Fl)((()=>{const e=l.group.items.value.findIndex((e=>e.id===l.id));return!l.isSelected.value&&p.value.some((t=>t-e===1))})),c=(0,n.Fl)((()=>{const e=l.group.items.value.findIndex((e=>e.id===l.id));return!l.isSelected.value&&p.value.some((t=>t-e===-1))}));return(0,n.JJ)(b,l),(0,y.L)((()=>{const t=!(!a.text&&!e.text),p=!(!a.title&&!e.title);return(0,n.Wm)(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":l.isSelected.value,"v-expansion-panel--before-active":u.value,"v-expansion-panel--after-active":c.value,"v-expansion-panel--disabled":d.value},r.value,i.value],style:o.value,"aria-expanded":l.isSelected.value},{default:()=>[(0,n.Wm)("div",{class:["v-expansion-panel__shadow",...s.value]},null),p&&(0,n.Wm)(V,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[a.title?a.title():e.title]}),t&&(0,n.Wm)(B,{key:"text",eager:e.eager},{default:()=>[a.text?a.text():e.text]}),a.default?.()]})})),{}}});var L=a(4161),P=(0,n.aZ)({name:"roadmap",props:{},components:{VCard:p._,VCardTitle:u.E,VCardText:c.Z,VExpansionPanel:H,VExpansionPanels:w,VExpansionPanelText:B},methods:{},setup(){const e=(0,d.iH)(null);return(0,n.wF)((async()=>{})),(0,n.bv)((async()=>{const t=await L.Z.get("/data/cdms-specs/specs.json");e.value=t.data,console.log(e)})),{requirements:e}}}),Y=a(89);const q=(0,Y.Z)(P,[["render",r]]);var z=q,j={name:"MyView",components:{Roadmap:z}};const D=(0,Y.Z)(j,[["render",l]]);var Q=D},1489:function(e,t,a){a.d(t,{_:function(){return I}});var n=a(3396),l=a(1334),i=a(1209),o=a(1888),s=a(836),r=a(8694),d=a(3824),p=a(5221),u=a(1617),c=a(6791),v=a(2718),m=a(9694),f=a(4544),x=a(2465),g=a(5180),y=a(489),b=a(4231),W=a(6183),w=a(1138),h=a(7041),k=a(320),_=a(9888);const I=(0,k.ev)()({name:"VCard",directives:{Ripple:d.H},props:{appendAvatar:String,appendIcon:u.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,h.x$)(),...(0,v.m)(),...(0,m.f)(),...(0,f.x)(),...(0,x.c)(),...(0,c.fF)(),...(0,g.y)(),...(0,y.F)(),...(0,b.I)(),...(0,W.GN)(),...(0,w.Q)(),...(0,p.bk)({variant:"elevated"})},setup(e,t){let{attrs:a,slots:d}=t;const{themeClasses:u}=(0,h.ER)(e),{borderClasses:w}=(0,v.P)(e),{colorClasses:k,colorStyles:I,variantClasses:S}=(0,p.c1)(e),{densityClasses:C}=(0,m.t)(e),{dimensionStyles:V}=(0,f.$)(e),{elevationClasses:A}=(0,x.Y)(e),{loaderClasses:E}=(0,c.U2)(e),{locationStyles:F}=(0,g.T)(e),{positionClasses:B}=(0,y.K)(e),{roundedClasses:T}=(0,b.b)(e),U=(0,W.nB)(e,a),H=(0,n.Fl)((()=>!1!==e.link&&U.isLink.value)),L=(0,n.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||U.isClickable.value)));return(0,_.L)((()=>{const t=H.value?"a":e.tag,a=!(!d.title&&!e.title),v=!(!d.subtitle&&!e.subtitle),m=a||v,f=!!(d.append||e.appendAvatar||e.appendIcon),x=!!(d.prepend||e.prependAvatar||e.prependIcon),g=!(!d.image&&!e.image),y=m||x||f,b=!(!d.text&&!e.text);return(0,n.wy)((0,n.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},u.value,w.value,k.value,C.value,A.value,E.value,B.value,T.value,S.value],style:[I.value,V.value,F.value],href:U.href.value,onClick:L.value&&U.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[g&&(0,n.Wm)(s.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,n.Wm)("div",{class:"v-card__image"},[d.image?.()??(0,n.Wm)(r.f,null,null)])]}),(0,n.Wm)(c.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:d.loader}),y&&(0,n.Wm)(i._,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:d.item,prepend:d.prepend,title:d.title,subtitle:d.subtitle,append:d.append}),b&&(0,n.Wm)(o.Z,{key:"text"},{default:()=>[d.text?.()??e.text]}),d.default?.(),d.actions&&(0,n.Wm)(l.h,null,{default:d.actions}),(0,p.Ux)(L.value,"v-card")]}),[[(0,n.Q2)("ripple"),L.value&&e.ripple]])})),{}}})},1334:function(e,t,a){a.d(t,{h:function(){return s}});var n=a(3396),l=a(8434),i=a(320),o=a(9888);const s=(0,i.aZ)({name:"VCardActions",setup(e,t){let{slots:a}=t;return(0,l.AF)({VBtn:{variant:"text"}}),(0,o.L)((()=>(0,n.Wm)("div",{class:"v-card-actions"},[a.default?.()]))),{}}})},1209:function(e,t,a){a.d(t,{_:function(){return c}});var n=a(3396),l=a(652),i=a(1332),o=a(6572),s=a(836),r=a(1617),d=a(9694),p=a(320),u=a(9888);const c=(0,p.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:r.lE,prependAvatar:String,prependIcon:r.lE,subtitle:String,title:String,...(0,d.f)()},setup(e,t){let{slots:a}=t;return(0,u.L)((()=>{const t=!!(e.prependAvatar||e.prependIcon||a.prepend),r=!!(e.appendAvatar||e.appendIcon||a.append),d=!(!e.title&&!a.title),p=!(!e.subtitle&&!a.subtitle);return(0,n.Wm)("div",{class:"v-card-item"},[t&&(0,n.Wm)(s.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,n.Wm)("div",{class:"v-card-item__prepend"},[a.prepend?.()??(0,n.Wm)(l.V,null,null)])]}),(0,n.Wm)("div",{class:"v-card-item__content"},[d&&(0,n.Wm)(o.E,{key:"title"},{default:()=>[a.title?.()??e.title]}),p&&(0,n.Wm)(i.Q,{key:"subtitle"},{default:()=>[a.subtitle?.()??e.subtitle]}),a.default?.()]),r&&(0,n.Wm)(s.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,n.Wm)("div",{class:"v-card-item__append"},[a.append?.()??(0,n.Wm)(l.V,null,null)])]})])})),{}}})},1332:function(e,t,a){a.d(t,{Q:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-subtitle")},1888:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-text")},6572:function(e,t,a){a.d(t,{E:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-title")},1136:function(e,t,a){a.d(t,{H:function(){return o},l:function(){return s}});var n=a(4870),l=a(3396),i=a(3766);const o=(0,i.U)({eager:Boolean},"lazy");function s(e,t){const a=(0,n.iH)(!1),i=(0,l.Fl)((()=>a.value||e.eager||t.value));function o(){e.eager||(a.value=!1)}return(0,l.YP)(t,(()=>a.value=!0)),{isBooted:a,hasContent:i,onAfterLeave:o}}}}]);
//# sourceMappingURL=6391.7413eabc.js.map