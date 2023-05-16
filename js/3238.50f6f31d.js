"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[3238],{3238:function(e,t,a){a.d(t,{_:function(){return x}});var n=a(3396),l=a(8434),d=a(320),i=a(9888);const r=(0,d.aZ)({name:"VCardActions",setup(e,t){let{slots:a}=t;return(0,l.AF)({VBtn:{variant:"text"}}),(0,i.L)((()=>(0,n.Wm)("div",{class:"v-card-actions"},[a.default?.()]))),{}}});var p=a(1209),s=a(1888),o=a(836),u=a(8694),c=a(3824),v=a(5221),m=a(1617),f=a(6791),b=a(2718),g=a(9694),y=a(4544),I=a(2465),k=a(5180),W=a(489),A=a(4231),C=a(6183),S=a(1138),_=a(7041);const x=(0,d.ev)()({name:"VCard",directives:{Ripple:c.H},props:{appendAvatar:String,appendIcon:m.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m.lE,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...(0,_.x$)(),...(0,b.m)(),...(0,g.f)(),...(0,y.x)(),...(0,I.c)(),...(0,f.fF)(),...(0,k.y)(),...(0,W.F)(),...(0,A.I)(),...(0,C.GN)(),...(0,S.Q)(),...(0,v.bk)({variant:"elevated"})},setup(e,t){let{attrs:a,slots:l}=t;const{themeClasses:d}=(0,_.ER)(e),{borderClasses:c}=(0,b.P)(e),{colorClasses:m,colorStyles:S,variantClasses:x}=(0,v.c1)(e),{densityClasses:V}=(0,g.t)(e),{dimensionStyles:h}=(0,y.$)(e),{elevationClasses:B}=(0,I.Y)(e),{loaderClasses:E}=(0,f.U2)(e),{locationStyles:F}=(0,k.T)(e),{positionClasses:L}=(0,W.K)(e),{roundedClasses:Q}=(0,A.b)(e),w=(0,C.nB)(e,a),z=(0,n.Fl)((()=>!1!==e.link&&w.isLink.value)),J=(0,n.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||w.isClickable.value)));return(0,i.L)((()=>{const t=z.value?"a":e.tag,a=!(!l.title&&!e.title),i=!(!l.subtitle&&!e.subtitle),b=a||i,g=!!(l.append||e.appendAvatar||e.appendIcon),y=!!(l.prepend||e.prependAvatar||e.prependIcon),I=!(!l.image&&!e.image),k=b||y||g,W=!(!l.text&&!e.text);return(0,n.wy)((0,n.Wm)(t,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":J.value},d.value,c.value,m.value,V.value,B.value,E.value,L.value,Q.value,x.value],style:[S.value,h.value,F.value],href:w.href.value,onClick:J.value&&w.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[I&&(0,n.Wm)(o.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,n.Wm)("div",{class:"v-card__image"},[l.image?.()??(0,n.Wm)(u.f,null,null)])]}),(0,n.Wm)(f.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:l.loader}),k&&(0,n.Wm)(p._,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),W&&(0,n.Wm)(s.Z,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.(),l.actions&&(0,n.Wm)(r,null,{default:l.actions}),(0,v.Ux)(J.value,"v-card")]}),[[(0,n.Q2)("ripple"),J.value&&e.ripple]])})),{}}})},1209:function(e,t,a){a.d(t,{_:function(){return c}});var n=a(3396),l=a(652),d=a(1332),i=a(6572),r=a(836),p=a(1617),s=a(9694),o=a(320),u=a(9888);const c=(0,o.ev)()({name:"VCardItem",props:{appendAvatar:String,appendIcon:p.lE,prependAvatar:String,prependIcon:p.lE,subtitle:String,title:String,...(0,s.f)()},setup(e,t){let{slots:a}=t;return(0,u.L)((()=>{const t=!!(e.prependAvatar||e.prependIcon||a.prepend),p=!!(e.appendAvatar||e.appendIcon||a.append),s=!(!e.title&&!a.title),o=!(!e.subtitle&&!a.subtitle);return(0,n.Wm)("div",{class:"v-card-item"},[t&&(0,n.Wm)(r.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,n.Wm)("div",{class:"v-card-item__prepend"},[a.prepend?.()??(0,n.Wm)(l.V,null,null)])]}),(0,n.Wm)("div",{class:"v-card-item__content"},[s&&(0,n.Wm)(i.E,{key:"title"},{default:()=>[a.title?.()??e.title]}),o&&(0,n.Wm)(d.Q,{key:"subtitle"},{default:()=>[a.subtitle?.()??e.subtitle]}),a.default?.()]),p&&(0,n.Wm)(r.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,n.Wm)("div",{class:"v-card-item__append"},[a.append?.()??(0,n.Wm)(l.V,null,null)])]})])})),{}}})},1332:function(e,t,a){a.d(t,{Q:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-subtitle")},1888:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-text")},6572:function(e,t,a){a.d(t,{E:function(){return l}});var n=a(1114);const l=(0,n.J)("v-card-title")}}]);
//# sourceMappingURL=3238.50f6f31d.js.map