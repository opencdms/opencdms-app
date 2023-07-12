"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[2113],{2650:function(e,t,l){l.d(t,{f:function(){return W}});var n=l(3396),a=l(240),u=l(1550),o=l(7103),i=l(836),s=l(6052),r=l(9457),c=l(9226),p=l(165),v=l(3185),d=l(1819),m=l(4906),f=l(4357),h=l(6185),y=l(1629),g=l(8717),k=l(4870),F=l(320),w=l(131),C=l(9888);function b(e,t,l){if(null==t)return e;if(Array.isArray(t))throw new Error("Multiple matches is not implemented");return"number"===typeof t&&~t?(0,n.Wm)(n.HY,null,[(0,n.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(0,t)]),(0,n.Wm)("span",{class:"v-autocomplete__mask"},[e.substr(t,l)]),(0,n.Wm)("span",{class:"v-autocomplete__unmask"},[e.substr(t+l)])]):e}const W=(0,F.ev)()({name:"VAutocomplete",props:{search:String,...(0,d.Up)({filterKeys:["title"]}),...(0,a.f)(),...(0,w.CE)((0,p.wG)({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...(0,m.X)({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:l}=t;const{t:a}=(0,y.bU)(),m=(0,k.iH)(),F=(0,k.iH)(!1),W=(0,k.iH)(!0),_=(0,k.iH)(),M=(0,g.z)(e,"menu"),V=(0,n.Fl)({get:()=>M.value,set:e=>{M.value&&!e&&_.value?.ΨopenChildren||(M.value=e)}}),{items:x,transformIn:K,transformOut:S}=(0,h.Ce)(e),I=(0,g.z)(e,"search",""),U=(0,g.z)(e,"modelValue",[],(e=>K((0,w.FT)(e))),(t=>{const l=S(t);return e.multiple?l:l[0]??null})),H=(0,f.cI)(),{filteredItems:A,getMatches:D}=(0,d.L0)(e,x,(0,n.Fl)((()=>W.value?void 0:I.value))),O=(0,n.Fl)((()=>U.value.map((t=>x.value.find((l=>e.valueComparator(l.value,t.value)))||t)))),E=(0,n.Fl)((()=>e.hideSelected?A.value.filter((e=>!O.value.some((t=>t.value===e.value)))):A.value)),L=(0,n.Fl)((()=>O.value.map((e=>e.props.value)))),j=(0,k.iH)();function T(t){e.openOnClear&&(V.value=!0),I.value=""}function Y(){e.hideNoData&&!x.value.length||e.readonly||H?.isReadonly.value||(V.value=!0)}function z(t){e.readonly||H?.isReadonly.value||(["Enter","ArrowDown","ArrowUp"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(V.value=!0),["Escape"].includes(t.key)&&(V.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(W.value=!0),"ArrowDown"===t.key?j.value?.focus("next"):"ArrowUp"===t.key&&j.value?.focus("prev"))}function G(e){I.value=e.target.value}function P(){F.value&&(W.value=!0)}function N(e){F.value=!0}function B(e){null==e.relatedTarget&&m.value?.focus()}const R=(0,k.iH)(!1);function q(t){if(e.multiple){const l=L.value.findIndex((l=>e.valueComparator(l,t.value)));if(-1===l)U.value=[...U.value,t],I.value="";else{const e=[...U.value];e.splice(l,1),U.value=e}}else U.value=[t],R.value=!0,l.selection||(I.value=t.title),V.value=!1,W.value=!0,(0,n.Y3)((()=>R.value=!1))}return(0,n.YP)(F,(t=>{t?(R.value=!0,I.value=e.multiple||l.selection?"":String(O.value.at(-1)?.props.title??""),W.value=!0,(0,n.Y3)((()=>R.value=!1))):(V.value=!1,I.value="")})),(0,n.YP)(I,(e=>{F.value&&!R.value&&(e&&(V.value=!0),W.value=!e)})),(0,C.L)((()=>{const t=!(!e.chips&&!l.chip),v=!!(!e.hideNoData||E.value.length||l.prepend||l.append||l["no-data"]),[d]=(0,p.a)(e);return(0,n.Wm)(p.hw,(0,n.dG)({ref:m},d,{modelValue:I.value,"onUpdate:modelValue":e=>{null==e&&(U.value=[])},validationValue:U.externalValue,dirty:U.value.length>0,onInput:G,class:["v-autocomplete",{"v-autocomplete--active-menu":V.value,"v-autocomplete--chips":!!e.chips,["v-autocomplete--"+(e.multiple?"multiple":"single")]:!0,"v-autocomplete--selection-slot":!!l.selection}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":T,"onMousedown:control":Y,onFocus:()=>F.value=!0,onBlur:()=>F.value=!1,onKeydown:z}),{...l,default:()=>(0,n.Wm)(n.HY,null,[(0,n.Wm)(c.T,(0,n.dG)({ref:_,modelValue:V.value,"onUpdate:modelValue":e=>V.value=e,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:P},e.menuProps),{default:()=>[v&&(0,n.Wm)(s.i,{ref:j,selected:L.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onFocusin:N,onFocusout:B},{default:()=>[!E.value.length&&!e.hideNoData&&(l["no-data"]?.()??(0,n.Wm)(r.l,{title:a(e.noDataText)},null)),l["prepend-item"]?.(),E.value.map(((t,a)=>l.item?.({item:t,index:a,props:(0,n.dG)(t.props,{onClick:()=>q(t)})})??(0,n.Wm)(r.l,(0,n.dG)({key:a},t.props,{onClick:()=>q(t)}),{prepend:t=>{let{isSelected:l}=t;return e.multiple&&!e.hideSelected?(0,n.Wm)(u.pM,{modelValue:l,ripple:!1},null):void 0},title:()=>W.value?t.title:b(t.title,D(t)?.title,I.value?.length??0)}))),l["append-item"]?.()]})]}),O.value.map(((a,u)=>{function s(e){e.stopPropagation(),e.preventDefault(),q(a)}const r={"onClick:close":s,modelValue:!0,"onUpdate:modelValue":void 0};return(0,n.Wm)("div",{key:a.value,class:"v-autocomplete__selection"},[t?(0,n.Wm)(i.z,{defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[l.chip?l.chip({item:a,index:u,props:r}):(0,n.Wm)(o.v,r,null)]}):l.selection?l.selection({item:a,index:u}):(0,n.Wm)("span",{class:"v-autocomplete__selection-text"},[a.title,e.multiple&&u<O.value.length-1&&(0,n.Wm)("span",{class:"v-autocomplete__selection-comma"},[(0,n.Uk)(",")])])])}))])})})),(0,v.F)({isFocused:F,isPristine:W,menu:V,search:I,filteredItems:A,select:q},m)}})},1819:function(e,t,l){l.d(t,{L0:function(){return c},Up:function(){return s}});l(7658);var n=l(3766),a=l(131),u=l(3396),o=l(4870);const i=(e,t,l)=>null==e||null==t?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),s=(0,n.U)({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function r(e,t,l){const n=[],u=l?.default??i,o=!!l?.filterKeys&&(0,a.FT)(l.filterKeys),s=Object.keys(l?.customKeyFilter??{}).length;if(!e?.length)return n;e:for(let i=0;i<e.length;i++){const r=e[i],c={},p={};let v=-1;if(t&&!l?.noFilter){if("object"===typeof r){const e=o||Object.keys(r);for(const n of e){const e=(0,a.qF)(r,n,r),o=l?.customKeyFilter?.[n];if(v=o?o(e,t,r):u(e,t,r),-1!==v&&!1!==v)o?c[n]=v:p[n]=v;else if("every"===l?.filterMode)continue e}}else v=u(r,t,r),-1!==v&&!1!==v&&(p.title=v);const e=Object.keys(p).length,n=Object.keys(c).length;if(!e&&!n)continue;if("union"===l?.filterMode&&n!==s&&!e)continue;if("intersection"===l?.filterMode&&(n!==s||!e))continue}n.push({index:i,matches:{...p,...c}})}return n}function c(e,t,l,n){const a=(0,u.Fl)((()=>"string"!==typeof l?.value&&"number"!==typeof l?.value?"":String(l.value))),i=(0,o.iH)([]),s=(0,o.iH)(new Map);function c(e){return s.value.get(e.value)}return(0,u.m0)((()=>{i.value=[],s.value=new Map;const l=(0,o.SU)(t),u=r(l,a.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:(0,o.SU)(n?.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter});u.forEach((e=>{let{index:t,matches:n}=e;const a=l[t];i.value.push(a),s.value.set(a.value,n)}))})),{filteredItems:i,filteredMatches:s,getMatches:c}}}}]);
//# sourceMappingURL=2113.53e1d30b.js.map