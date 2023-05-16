"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[5557],{5557:function(e,t,a){a.d(t,{y:function(){return me}});var l=a(3396),o=a(9694),n=a(1138),r=a(7041),s=a(320),u=a(9888),i=a(131);const d=(0,s.ev)()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...(0,o.f)(),...(0,n.Q)(),...(0,r.x$)()},setup(e,t){let{slots:a}=t;const{themeClasses:n}=(0,r.ER)(e),{densityClasses:s}=(0,o.t)(e);return(0,u.L)((()=>(0,l.Wm)(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},n.value,s.value]},{default:()=>[a.top?.(),a.default?(0,l.Wm)("div",{class:"v-table__wrapper",style:{height:(0,i.kb)(e.height)}},[(0,l.Wm)("table",null,[a.default()])]):a.wrapper?.(),a.bottom?.()]}))),{}}});var c=a(1550);const p=(0,s.d4)({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},((e,t)=>{let{slots:a,attrs:o}=t;const n=e.tag??"td";return(0,l.Wm)(n,(0,l.dG)({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:(0,i.kb)(e.height),width:(0,i.kb)(e.width),left:(0,i.kb)(e.fixedOffset||null)}},o),{default:()=>[a.default?.()]})}));var m=a(3289),v=a(1617),f=a(6791),g=a(2370),h=(a(541),a(7658),a(4870)),y=a(3766);const b=(0,y.U)({headers:{type:Array,default:()=>[]}},"v-data-table-header"),x=Symbol.for("vuetify:data-table-headers");function k(e,t){const a=(0,h.iH)([]),o=(0,h.iH)([]);(0,l.YP)((()=>e.headers),(()=>{const l=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],n=l.flatMap(((e,t)=>e.map((e=>({column:e,row:t}))))),r=l.length,s={title:"",sortable:!1},u={...s,width:48};if(t?.groupBy?.value.length){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-group"===t.key}));e<0?n.unshift({column:{...s,key:"data-table-group",title:"Group",rowspan:r},row:0}):n.splice(e,1,{column:{...s,...n[e].column},row:n[e].row})}if(t?.showSelect?.value){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-select"===t.key}));e<0?n.unshift({column:{...u,key:"data-table-select",rowspan:r},row:0}):n.splice(e,1,{column:{...u,...n[e].column},row:n[e].row})}if(t?.showExpand?.value){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-expand"===t.key}));e<0?n.push({column:{...u,key:"data-table-expand",rowspan:r},row:0}):n.splice(e,1,{column:{...u,...n[e].column},row:n[e].row})}const d=(0,i.MT)(r).map((()=>[])),c=(0,i.MT)(r).fill(0);let p=0;n.forEach((e=>{let{column:t,row:a}=e;const l=t.key??"data-table-column-"+p++;for(let o=a;o<=a+(t.rowspan??1)-1;o++)d[o].push({...t,key:l,fixedOffset:c[o],sortable:t.sortable??!!t.key}),c[o]+=t.width??0})),d.forEach((e=>{for(let t=e.length;t--;t>=0)if(e[t].fixed)return void(e[t].lastFixed=!0)}));const m=new Set;a.value=d.map((e=>{const t=[];for(const a of e)m.has(a.key)||(m.add(a.key),t.push(a));return t})),o.value=d.at(-1)??[]}),{deep:!0,immediate:!0});const n={headers:a,columns:o};return(0,l.JJ)(x,n),n}function w(){const e=(0,l.f3)(x);if(!e)throw new Error("Missing headers!");return e}var S=a(8717);const W=(0,y.U)({showSelect:Boolean,modelValue:{type:Array,default:()=>[]}},"v-data-table-select"),P=Symbol.for("vuetify:data-table-selection");function F(e,t){const a=(0,S.z)(e,"modelValue",e.modelValue,(e=>new Set(e)),(e=>[...e.values()]));function o(e){return e.every((e=>a.value.has(e.value)))}function n(e){return e.some((e=>a.value.has(e.value)))}function r(e,t){const l=new Set(a.value);for(const a of e)t?l.add(a.value):l.delete(a.value);a.value=l}function s(e){r([e],!o([e]))}function u(e){r(t.value,e)}const i=(0,l.Fl)((()=>a.value.size>0)),d=(0,l.Fl)((()=>o(t.value))),c={toggleSelect:s,select:r,selectAll:u,isSelected:o,isSomeSelected:n,someSelected:i,allSelected:d};return(0,l.JJ)(P,c),c}function B(){const e=(0,l.f3)(P);if(!e)throw new Error("Missing selection!");return e}const _=(0,y.U)({sortBy:{type:Array,default:()=>[]},multiSort:Boolean,mustSort:Boolean},"v-data-table-sort"),T=Symbol.for("vuetify:data-table-sort");function I(e){const t=(0,S.z)(e,"sortBy"),a=a=>{let l=t.value.map((e=>({...e})))??[];const o=l.find((e=>e.key===a));o?"desc"===o.order?e.mustSort?o.order="asc":l=l.filter((e=>e.key!==a)):o.order="desc":l=e.multiSort?[...l,{key:a,order:"asc"}]:[{key:a,order:"asc"}],t.value=l},o={sortBy:t,toggleSort:a};return(0,l.JJ)(T,o),o}function C(){const e=(0,l.f3)(T);if(!e)throw new Error("Missing sort!");return e}function $(e,t,a){const o=(0,l.Fl)((()=>a.value.reduce(((e,t)=>(t.sort&&(e[t.key]=t.sort),e)),{}))),n=(0,l.Fl)((()=>t.value.length?V(e.value,t.value,"en",o.value):e.value));return{sortedItems:n}}function V(e,t,a,l){const o=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort(((e,a)=>{for(let n=0;n<t.length;n++){const r=t[n].key,s=t[n].order;if(!1===s)continue;let u=(0,i.vO)(e.raw,r),d=(0,i.vO)(a.raw,r);if("desc"===s&&([u,d]=[d,u]),l?.[r]){const e=l[r](u,d);if(!e)continue;return e}if(null!=u&&null!=d){if(u instanceof Date&&d instanceof Date)return u.getTime()-d.getTime();if([u,d]=[u,d].map((e=>(e||"").toString().toLocaleLowerCase())),u!==d)return isNaN(u)||isNaN(d)?o.compare(u,d):Number(u)-Number(d)}}return 0}))}const E=(0,s.ev)()({name:"VDataTableHeaders",props:{color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:v.lE,default:"$sortAsc"},sortDescIcon:{type:v.lE,default:"$sortDesc"},...(0,f.fF)()},setup(e,t){let{slots:a,emit:o}=t;const{toggleSort:n,sortBy:r}=C(),{someSelected:s,allSelected:d,selectAll:v}=B(),{columns:h,headers:y}=w(),{loaderClasses:b}=(0,f.U2)(e),x=(t,a)=>e.sticky||t.fixed?{position:"sticky",zIndex:t.fixed?4:e.sticky?3:void 0,left:t.fixed?(0,i.kb)(t.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${a})`:void 0}:null;function k(t){const a=r.value.find((e=>e.key===t));return a?"asc"===a.order?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:S,backgroundColorStyles:W}=(0,g.Y5)(e,"color"),P=t=>{let{column:o,x:u,y:f}=t;const g=!!r.value.find((e=>e.key===o.key)),h="data-table-select"===o.key||"data-table-expand"===o.key;return(0,l.Wm)(p,{tag:"th",align:o.align,class:["v-data-table__th",{"v-data-table__th--sortable":o.sortable,"v-data-table__th--sorted":g},b.value],style:{width:(0,i.kb)(o.width),minWidth:(0,i.kb)(o.width),...x(o,f)},colspan:o.colspan,rowspan:o.rowspan,onClick:o.sortable?()=>n(o.key):void 0,lastFixed:o.lastFixed,noPadding:h},{default:()=>{const t=`column.${o.key}`,n={column:o,selectAll:v};return a[t]?a[t](n):"data-table-select"===o.key?a["column.data-table-select"]?.(n)??(0,l.Wm)(c.pM,{modelValue:d.value,indeterminate:s.value&&!d.value,"onUpdate:modelValue":v},null):(0,l.Wm)("div",{class:"v-data-table-header__content"},[(0,l.Wm)("span",null,[o.title]),o.sortable&&(0,l.Wm)(m.t,{key:"icon",class:"v-data-table-header__sort-icon",icon:k(o.key)},null),e.multiSort&&g&&(0,l.Wm)("div",{key:"badge",class:["v-data-table-header__sort-badge",...S.value],style:W.value},[r.value.findIndex((e=>e.key===o.key))+1])])}})};(0,u.L)((()=>(0,l.Wm)(l.HY,null,[y.value.map(((e,t)=>(0,l.Wm)("tr",null,[e.map(((e,a)=>(0,l.Wm)(P,{column:e,x:a,y:t},null)))]))),e.loading&&(0,l.Wm)("tr",{class:"v-data-table__progress"},[(0,l.Wm)("th",{colspan:h.value.length},[(0,l.Wm)(f.rD,{name:"v-data-table-headers",active:!0,color:"boolean"===typeof e.loading?void 0:e.loading,indeterminate:!0},{default:a.loader})])])])))}});var D=a(870);const N=(0,y.U)({groupBy:{type:Array,default:()=>[]}},"data-table-group"),O=Symbol.for("vuetify:data-table-group");function L(e,t,a){const o=(0,h.iH)(new Set),n=(0,l.Fl)((()=>t.value.map((e=>({...e,order:e.order??!1}))).concat(a.value)));function r(e){return o.value.has(e.id)}function s(e){const t=new Set(o.value);r(e)?t.delete(e.id):t.add(e.id),o.value=t}function u(e){function t(e){const a=[];for(const l of e.items)"item"===l.type?a.push(l):a.push(...t(l));return a}return t({type:"group-header",items:e,id:"dummy",key:"dummy",value:"dummy",depth:0})}const i={sortByWithGroups:n,toggleGroup:s,opened:o,groupBy:t,extractRows:u,isGroupOpen:r};return(0,l.JJ)(O,i),i}function A(){const e=(0,l.f3)(O);if(!e)throw new Error("Missing group!");return e}function U(e,t){if(!e.length)return[];const a=new Map;for(const l of e){const e=(0,i.vO)(l.raw,t);a.has(e)||a.set(e,[]),a.get(e).push(l)}return a}function H(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"root";if(!t.length)return[];const o=U(e,t[0]),n=[],r=t.slice(1);return o.forEach(((e,o)=>{const s=t[0],u=`${l}_${s}_${o}`;n.push({depth:a,id:u,key:s,value:o,items:r.length?H(e,r,a+1,u):e,type:"group-header"})})),n}function M(e,t){const a=[];for(const l of e)"group-header"===l.type?(null!=l.value&&a.push(l),(t.has(l.id)||null==l.value)&&a.push(...M(l.items,t))):a.push(l);return a}function G(e,t,a){const o=(0,l.Fl)((()=>{if(!t.value.length)return e.value;const l=H(e.value,t.value.map((e=>e.key)));return M(l,a.value)}));return{flatItems:o}}const J=(0,s.ev)()({name:"VDataTableGroupHeaderRow",props:{item:{type:Object,required:!0}},setup(e,t){let{slots:a}=t;const{isGroupOpen:o,toggleGroup:n,extractRows:r}=A(),{isSelected:s,isSomeSelected:u,select:i}=B(),{columns:d}=w(),m=(0,l.Fl)((()=>r([e.item])));return()=>(0,l.Wm)("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[d.value.map((t=>{if("data-table-group"===t.key){const t=o(e.item)?"$expand":"$next",r=()=>n(e.item);return a["data-table-group"]?.({item:e.item,count:m.value.length,props:{icon:t,onClick:r}})??(0,l.Wm)(p,{class:"v-data-table-group-header-row__column"},{default:()=>[(0,l.Wm)(D.T,{size:"small",variant:"text",icon:t,onClick:r},null),(0,l.Wm)("span",null,[e.item.value]),(0,l.Wm)("span",null,[(0,l.Uk)("("),m.value.length,(0,l.Uk)(")")])]})}if("data-table-select"===t.key){const e=s(m.value),t=u(m.value)&&!e,o=e=>i(m.value,e);return a["data-table-select"]?.({props:{modelValue:e,indeterminate:t,"onUpdate:modelValue":o}})??(0,l.Wm)("td",null,[(0,l.Wm)(c.pM,{modelValue:e,indeterminate:t,"onUpdate:modelValue":o},null)])}return(0,l.Wm)("td",null,null)}))])}}),z=(0,y.U)({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"v-data-table-expand"),Y=Symbol.for("vuetify:datatable:expanded");function R(e){const t=(0,h.Vh)(e,"expandOnClick"),a=(0,S.z)(e,"expanded",e.expanded,(e=>new Set(e)),(e=>[...e.values()]));function o(e,t){const l=new Set(a.value);t?l.add(e.value):l.delete(e.value),a.value=l}function n(e){return a.value.has(e.value)}function r(e){o(e,!n(e))}const s={expand:o,expanded:a,expandOnClick:t,isExpanded:n,toggleExpand:r};return(0,l.JJ)(Y,s),s}function j(){const e=(0,l.f3)(Y);if(!e)throw new Error("foo");return e}const q=(0,s.aZ)({name:"VDataTableRow",props:{item:Object},setup(e,t){let{slots:a}=t;const{isSelected:o,toggleSelect:n}=B(),{isExpanded:r,toggleExpand:s}=j(),{columns:i}=w();(0,u.L)((()=>(0,l.Wm)("tr",{class:["v-data-table__tr"]},[!i.value.length&&(0,l.Wm)(p,{key:"no-data"},a),e.item&&i.value.map(((t,u)=>(0,l.Wm)(p,{align:t.align,fixed:t.fixed,fixedOffset:t.fixedOffset,lastFixed:t.lastFixed,noPadding:"data-table-select"===t.key||"data-table-expand"===t.key,width:t.width},{default:()=>{const u=e.item,d=`item.${t.key}`,p={item:e.item,columns:i.value,isSelected:o,toggleSelect:n,isExpanded:r,toggleExpand:s};return a[d]?a[d](p):"data-table-select"===t.key?a["item.data-table-select"]?.(p)??(0,l.Wm)(c.pM,{modelValue:o([u]),onClick:()=>n(u)},null):"data-table-expand"===t.key?a["item.data-table-expand"]?.(p)??(0,l.Wm)(D.T,{icon:r(u)?"$collapse":"$expand",size:"small",variant:"text",onClick:()=>s(u)},null):u.columns[t.key]}})))])))}});var Z=a(1629);const K=(0,s.ev)()({name:"VDataTableRows",props:{loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number},emits:{"click:row":(e,t)=>!0},setup(e,t){let{emit:a,slots:o}=t;const{columns:n}=w(),{expandOnClick:r,toggleExpand:s,isExpanded:i}=j(),{isSelected:d,toggleSelect:c}=B(),{toggleGroup:p,isGroupOpen:m}=A(),{t:v}=(0,Z.bU)();return(0,u.L)((()=>(0,l.Wm)(l.HY,null,[e.loading?o.loading?.()??(0,l.Wm)(q,{class:"v-data-table-rows-no-data",key:"loading"},{default:()=>[v(e.loadingText)]}):void 0,!e.loading&&!e.items.length&&!e.hideNoData&&(o["no-data"]?.()??(0,l.Wm)(q,{class:"v-data-table-rows-no-data",key:"no-data"},{default:()=>[v(e.noDataText)]})),e.items.map(((e,t)=>"group-header"===e.type?o["group-header"]?o["group-header"]({index:t,item:e,columns:n.value,isExpanded:i,toggleExpand:s,isSelected:d,toggleSelect:c,toggleGroup:p,isGroupOpen:m}):(0,l.Wm)(J,{key:`group-header_${e.id}`,item:e},o):(0,l.Wm)(l.HY,null,[o.item?o.item({index:t,item:e,columns:n.value,isExpanded:i,toggleExpand:s,isSelected:d,toggleSelect:c}):(0,l.Wm)(q,{key:`item_${e.value}`,onClick:t=>{r.value&&s(e.value),a("click:row",t,{item:e})},item:e},o),i(e)&&o["expanded-row"]?.({item:e,columns:n.value})])))]))),{}}});var Q=a(240);const X=(0,y.U)({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"v-data-table-paginate"),ee=Symbol.for("vuetify:data-table-pagination");function te(e,t){const a=(0,S.z)(e,"page",void 0,(e=>+(e??1))),o=(0,S.z)(e,"itemsPerPage",void 0,(e=>+(e??10))),n=(0,l.Fl)((()=>+(e.itemsLength??t.value.length))),r=(0,l.Fl)((()=>-1===o.value?0:o.value*(a.value-1))),s=(0,l.Fl)((()=>-1===o.value?n.value:Math.min(n.value,r.value+o.value))),u=(0,l.Fl)((()=>-1===o.value||0===n.value?1:Math.ceil(n.value/o.value))),i={page:a,itemsPerPage:o,startIndex:r,stopIndex:s,pageCount:u,itemsLength:n};return(0,l.JJ)(ee,i),i}function ae(){const e=(0,l.f3)(ee);if(!e)throw new Error("Missing pagination!");return e}function le(e,t,a,o){const n=(0,l.Fl)((()=>o.value<=0?e.value:e.value.slice(t.value,a.value)));return{paginatedItems:n}}const oe=(0,s.ev)()({name:"VDataTableFooter",props:{prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},setup(e,t){let{slots:a}=t;const{t:o}=(0,Z.bU)(),{page:n,pageCount:r,startIndex:s,stopIndex:u,itemsLength:i,itemsPerPage:d}=ae(),c=(0,l.Fl)((()=>e.itemsPerPageOptions.map((e=>({...e,title:o(e.title)})))));return()=>(0,l.Wm)("div",{class:"v-data-table-footer"},[a.prepend?.(),(0,l.Wm)("div",{class:"v-data-table-footer__items-per-page"},[(0,l.Wm)("span",null,[o(e.itemsPerPageText)]),(0,l.Wm)(Q.r,{items:c.value,modelValue:d.value,"onUpdate:modelValue":e=>d.value=Number(e),density:"compact",variant:"outlined","hide-details":!0},null)]),(0,l.Wm)("div",{class:"v-data-table-footer__info"},[(0,l.Wm)("div",null,[o(e.pageText,i.value?s.value+1:0,u.value,i.value)])]),(0,l.Wm)("div",{class:"v-data-table-footer__pagination"},[(0,l.Wm)(D.T,{icon:e.firstIcon,variant:"plain",onClick:()=>n.value=1,disabled:1===n.value,"aria-label":o(e.firstPageLabel)},null),(0,l.Wm)(D.T,{icon:e.prevIcon,variant:"plain",onClick:()=>n.value=Math.max(1,n.value-1),disabled:1===n.value,"aria-label":o(e.prevPageLabel)},null),e.showCurrentPage&&(0,l.Wm)("span",{key:"page",class:"v-data-table-footer__page"},[n.value]),(0,l.Wm)(D.T,{icon:e.nextIcon,variant:"plain",onClick:()=>n.value=Math.min(r.value,n.value+1),disabled:n.value===r.value,"aria-label":o(e.nextPageLabel)},null),(0,l.Wm)(D.T,{icon:e.lastIcon,variant:"plain",onClick:()=>n.value=r.value,disabled:n.value===r.value,"aria-label":o(e.lastPageLabel)},null)])])}});var ne=a(6185);const re=(0,y.U)({...(0,ne.S1)({itemValue:"id"})},"v-data-table-item");function se(e,t){const{items:a}=(0,ne.Ce)(e),o=(0,l.Fl)((()=>a.value.map((e=>({...e,type:"item",columns:t.value.reduce(((t,a)=>(t[a.key]=(0,i.qF)(e.raw,a.value??a.key),t)),{})})))));return{items:o}}var ue=a(7514);function ie(e){let{page:t,itemsPerPage:a,sortBy:o,groupBy:n}=e;const r=(0,ue.FN)("VDataTable"),s=(0,l.Fl)((()=>({page:t.value,itemsPerPage:a.value,sortBy:o.value,groupBy:n.value})));(0,l.YP)(o,(()=>{t.value=1}),{deep:!0}),(0,l.YP)(a,(()=>{t.value=1}));let u=null;(0,l.YP)(s,(()=>{(0,i.vZ)(u,s.value)||(r.emit("update:options",s.value),u=s.value)}),{deep:!0,immediate:!0})}var de=a(8434),ce=a(1819);const pe=(0,y.U)({...re(),...b(),hideNoData:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},height:[String,Number],width:[String,Number],fixedHeader:Boolean,fixedFooter:Boolean},"v-data-table"),me=(0,s.ev)()({name:"VDataTable",props:{search:String,...pe(),...z(),...N(),...W(),..._(),...X(),...(0,ce.Up)()},emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"click:row":(e,t)=>!0},setup(e,t){let{emit:a,slots:o}=t;const n=(0,S.z)(e,"groupBy"),{columns:r}=k(e,{groupBy:n,showSelect:(0,h.Vh)(e,"showSelect"),showExpand:(0,h.Vh)(e,"showExpand")}),{items:s}=se(e,r),i=(0,l.Fl)((()=>r.value.map((e=>"columns."+e.key)))),{filteredItems:c}=(0,ce.L0)(e,s,(0,h.Vh)(e,"search"),{filterKeys:i}),{sortBy:p}=I(e),{sortByWithGroups:m,opened:v,extractRows:f}=L(e,n,p),{sortedItems:g}=$(c,m,r),{flatItems:y}=G(g,n,v),{page:b,itemsPerPage:x,startIndex:w,stopIndex:W}=te(e,y),{paginatedItems:P}=le(y,w,W,x),B=(0,l.Fl)((()=>f(P.value)));return F(e,B),R(e),ie({page:b,itemsPerPage:x,sortBy:p,groupBy:n}),(0,de.AF)({VDataTableRows:{hideNoData:(0,h.Vh)(e,"hideNoData"),noDataText:(0,h.Vh)(e,"noDataText")}}),(0,u.L)((()=>(0,l.Wm)(d,{class:["v-data-table",{"v-data-table--show-select":e.showSelect}],fixedHeader:e.fixedHeader,fixedFooter:e.fixedFooter,height:e.height},{top:o.top,default:o.default??(()=>(0,l.Wm)(l.HY,null,[o.colgroup?.({columns:r}),(0,l.Wm)("thead",null,[o.headers?o.headers():(0,l.Wm)(E,{sticky:e.fixedHeader,multiSort:e.multiSort},o)]),o.thead?.(),(0,l.Wm)("tbody",null,[o.body?o.body():(0,l.Wm)(K,{items:P.value,"onClick:row":(e,t)=>a("click:row",e,t)},o)]),o.tbody?.(),o.tfoot?.()])),bottom:o.bottom??(()=>(0,l.Wm)(oe,null,{prepend:o["footer.prepend"]}))}))),{}}})}}]);
//# sourceMappingURL=5557.60b632f8.js.map