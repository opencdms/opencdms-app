"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[5630],{5630:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ve}});var l=a(3396);function o(e,t,a,o,n,r){const s=(0,l.up)("station-list",!0);return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s)])}var n=a(7139);const r=["href"];function s(e,t,a,o,s,i){const u=(0,l.up)("v-card-title"),d=(0,l.up)("VTextField"),c=(0,l.up)("VDataTable"),p=(0,l.up)("v-card-text"),m=(0,l.up)("v-card");return(0,l.wg)(),(0,l.j4)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Stations")])),_:1}),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{style:{width:"400px"},modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=t=>e.search=t),"prepend-icon":"mdi-text-search",label:"search","single-line":"","hide-details":""},null,8,["modelValue"]),(0,l.Wm)(c,{headers:e.headers,items:e.items,search:e.search,dense:"",small:""},{"item.id":(0,l.w5)((({item:t})=>[(0,l._)("a",{href:e.getIDLink(t.raw.id)},(0,n.zw)(t.raw.id),9,r)])),"item.links":(0,l.w5)((({item:t})=>[(0,l.Uk)((0,n.zw)(e.parseLinks(t.raw.links)),1)])),_:1},8,["headers","items","search"])])),_:1})])),_:1})}var i=a(3238),u=a(6572),d=a(1888),c=a(4870),p=a(9694),m=a(1138),v=a(7041),f=a(320),g=a(9888),h=a(131);const y=(0,f.ev)()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...(0,p.f)(),...(0,m.Q)(),...(0,v.x$)()},setup(e,t){let{slots:a}=t;const{themeClasses:o}=(0,v.ER)(e),{densityClasses:n}=(0,p.t)(e);return(0,g.L)((()=>(0,l.Wm)(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},o.value,n.value]},{default:()=>[a.top?.(),a.default?(0,l.Wm)("div",{class:"v-table__wrapper",style:{height:(0,h.kb)(e.height)}},[(0,l.Wm)("table",null,[a.default()])]):a.wrapper?.(),a.bottom?.()]}))),{}}});var b=a(1550);const x=(0,f.d4)({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},((e,t)=>{let{slots:a,attrs:o}=t;const n=e.tag??"td";return(0,l.Wm)(n,(0,l.dG)({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:(0,h.kb)(e.height),width:(0,h.kb)(e.width),left:(0,h.kb)(e.fixedOffset||null)}},o),{default:()=>[a.default?.()]})}));var w=a(3289),k=a(1617),S=a(6791),W=a(2370),P=(a(541),a(7658),a(3766));const F=(0,P.U)({headers:{type:Array,default:()=>[]}},"v-data-table-header"),_=Symbol.for("vuetify:data-table-headers");function T(e,t){const a=(0,c.iH)([]),o=(0,c.iH)([]);(0,l.YP)((()=>e.headers),(()=>{const l=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],n=l.flatMap(((e,t)=>e.map((e=>({column:e,row:t}))))),r=l.length,s={title:"",sortable:!1},i={...s,width:48};if(t?.groupBy?.value.length){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-group"===t.key}));e<0?n.unshift({column:{...s,key:"data-table-group",title:"Group",rowspan:r},row:0}):n.splice(e,1,{column:{...s,...n[e].column},row:n[e].row})}if(t?.showSelect?.value){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-select"===t.key}));e<0?n.unshift({column:{...i,key:"data-table-select",rowspan:r},row:0}):n.splice(e,1,{column:{...i,...n[e].column},row:n[e].row})}if(t?.showExpand?.value){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-expand"===t.key}));e<0?n.push({column:{...i,key:"data-table-expand",rowspan:r},row:0}):n.splice(e,1,{column:{...i,...n[e].column},row:n[e].row})}const u=(0,h.MT)(r).map((()=>[])),d=(0,h.MT)(r).fill(0);let c=0;n.forEach((e=>{let{column:t,row:a}=e;const l=t.key??"data-table-column-"+c++;for(let o=a;o<=a+(t.rowspan??1)-1;o++)u[o].push({...t,key:l,fixedOffset:d[o],sortable:t.sortable??!!t.key}),d[o]+=t.width??0})),u.forEach((e=>{for(let t=e.length;t--;t>=0)if(e[t].fixed)return void(e[t].lastFixed=!0)}));const p=new Set;a.value=u.map((e=>{const t=[];for(const a of e)p.has(a.key)||(p.add(a.key),t.push(a));return t})),o.value=u.at(-1)??[]}),{deep:!0,immediate:!0});const n={headers:a,columns:o};return(0,l.JJ)(_,n),n}function B(){const e=(0,l.f3)(_);if(!e)throw new Error("Missing headers!");return e}var V=a(8717);const I=(0,P.U)({showSelect:Boolean,modelValue:{type:Array,default:()=>[]}},"v-data-table-select"),C=Symbol.for("vuetify:data-table-selection");function D(e,t){const a=(0,V.z)(e,"modelValue",e.modelValue,(e=>new Set(e)),(e=>[...e.values()]));function o(e){return e.every((e=>a.value.has(e.value)))}function n(e){return e.some((e=>a.value.has(e.value)))}function r(e,t){const l=new Set(a.value);for(const a of e)t?l.add(a.value):l.delete(a.value);a.value=l}function s(e){r([e],!o([e]))}function i(e){r(t.value,e)}const u=(0,l.Fl)((()=>a.value.size>0)),d=(0,l.Fl)((()=>o(t.value))),c={toggleSelect:s,select:r,selectAll:i,isSelected:o,isSomeSelected:n,someSelected:u,allSelected:d};return(0,l.JJ)(C,c),c}function $(){const e=(0,l.f3)(C);if(!e)throw new Error("Missing selection!");return e}const E=(0,P.U)({sortBy:{type:Array,default:()=>[]},multiSort:Boolean,mustSort:Boolean},"v-data-table-sort"),L=Symbol.for("vuetify:data-table-sort");function N(e){const t=(0,V.z)(e,"sortBy"),a=a=>{let l=t.value.map((e=>({...e})))??[];const o=l.find((e=>e.key===a));o?"desc"===o.order?e.mustSort?o.order="asc":l=l.filter((e=>e.key!==a)):o.order="desc":l=e.multiSort?[...l,{key:a,order:"asc"}]:[{key:a,order:"asc"}],t.value=l},o={sortBy:t,toggleSort:a};return(0,l.JJ)(L,o),o}function O(){const e=(0,l.f3)(L);if(!e)throw new Error("Missing sort!");return e}function H(e,t,a){const o=(0,l.Fl)((()=>a.value.reduce(((e,t)=>(t.sort&&(e[t.key]=t.sort),e)),{}))),n=(0,l.Fl)((()=>t.value.length?U(e.value,t.value,"en",o.value):e.value));return{sortedItems:n}}function U(e,t,a,l){const o=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort(((e,a)=>{for(let n=0;n<t.length;n++){const r=t[n].key,s=t[n].order;if(!1===s)continue;let i=(0,h.vO)(e.raw,r),u=(0,h.vO)(a.raw,r);if("desc"===s&&([i,u]=[u,i]),l?.[r]){const e=l[r](i,u);if(!e)continue;return e}if(null!=i&&null!=u){if(i instanceof Date&&u instanceof Date)return i.getTime()-u.getTime();if([i,u]=[i,u].map((e=>(e||"").toString().toLocaleLowerCase())),i!==u)return isNaN(i)||isNaN(u)?o.compare(i,u):Number(i)-Number(u)}}return 0}))}const A=(0,f.ev)()({name:"VDataTableHeaders",props:{color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:k.lE,default:"$sortAsc"},sortDescIcon:{type:k.lE,default:"$sortDesc"},...(0,S.fF)()},setup(e,t){let{slots:a,emit:o}=t;const{toggleSort:n,sortBy:r}=O(),{someSelected:s,allSelected:i,selectAll:u}=$(),{columns:d,headers:c}=B(),{loaderClasses:p}=(0,S.U2)(e),m=(t,a)=>e.sticky||t.fixed?{position:"sticky",zIndex:t.fixed?4:e.sticky?3:void 0,left:t.fixed?(0,h.kb)(t.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${a})`:void 0}:null;function v(t){const a=r.value.find((e=>e.key===t));return a?"asc"===a.order?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:f,backgroundColorStyles:y}=(0,W.Y5)(e,"color"),k=t=>{let{column:o,x:d,y:c}=t;const g=!!r.value.find((e=>e.key===o.key)),k="data-table-select"===o.key||"data-table-expand"===o.key;return(0,l.Wm)(x,{tag:"th",align:o.align,class:["v-data-table__th",{"v-data-table__th--sortable":o.sortable,"v-data-table__th--sorted":g},p.value],style:{width:(0,h.kb)(o.width),minWidth:(0,h.kb)(o.width),...m(o,c)},colspan:o.colspan,rowspan:o.rowspan,onClick:o.sortable?()=>n(o.key):void 0,lastFixed:o.lastFixed,noPadding:k},{default:()=>{const t=`column.${o.key}`,n={column:o,selectAll:u};return a[t]?a[t](n):"data-table-select"===o.key?a["column.data-table-select"]?.(n)??(0,l.Wm)(b.pM,{modelValue:i.value,indeterminate:s.value&&!i.value,"onUpdate:modelValue":u},null):(0,l.Wm)("div",{class:"v-data-table-header__content"},[(0,l.Wm)("span",null,[o.title]),o.sortable&&(0,l.Wm)(w.t,{key:"icon",class:"v-data-table-header__sort-icon",icon:v(o.key)},null),e.multiSort&&g&&(0,l.Wm)("div",{key:"badge",class:["v-data-table-header__sort-badge",...f.value],style:y.value},[r.value.findIndex((e=>e.key===o.key))+1])])}})};(0,g.L)((()=>(0,l.Wm)(l.HY,null,[c.value.map(((e,t)=>(0,l.Wm)("tr",null,[e.map(((e,a)=>(0,l.Wm)(k,{column:e,x:a,y:t},null)))]))),e.loading&&(0,l.Wm)("tr",{class:"v-data-table__progress"},[(0,l.Wm)("th",{colspan:d.value.length},[(0,l.Wm)(S.rD,{name:"v-data-table-headers",active:!0,color:"boolean"===typeof e.loading?void 0:e.loading,indeterminate:!0},{default:a.loader})])])])))}});var M=a(870);const G=(0,P.U)({groupBy:{type:Array,default:()=>[]}},"data-table-group"),J=Symbol.for("vuetify:data-table-group");function z(e,t,a){const o=(0,c.iH)(new Set),n=(0,l.Fl)((()=>t.value.map((e=>({...e,order:e.order??!1}))).concat(a.value)));function r(e){return o.value.has(e.id)}function s(e){const t=new Set(o.value);r(e)?t.delete(e.id):t.add(e.id),o.value=t}function i(e){function t(e){const a=[];for(const l of e.items)"item"===l.type?a.push(l):a.push(...t(l));return a}return t({type:"group-header",items:e,id:"dummy",key:"dummy",value:"dummy",depth:0})}const u={sortByWithGroups:n,toggleGroup:s,opened:o,groupBy:t,extractRows:i,isGroupOpen:r};return(0,l.JJ)(J,u),u}function Y(){const e=(0,l.f3)(J);if(!e)throw new Error("Missing group!");return e}function R(e,t){if(!e.length)return[];const a=new Map;for(const l of e){const e=(0,h.vO)(l.raw,t);a.has(e)||a.set(e,[]),a.get(e).push(l)}return a}function Z(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"root";if(!t.length)return[];const o=R(e,t[0]),n=[],r=t.slice(1);return o.forEach(((e,o)=>{const s=t[0],i=`${l}_${s}_${o}`;n.push({depth:a,id:i,key:s,value:o,items:r.length?Z(e,r,a+1,i):e,type:"group-header"})})),n}function j(e,t){const a=[];for(const l of e)"group-header"===l.type?(null!=l.value&&a.push(l),(t.has(l.id)||null==l.value)&&a.push(...j(l.items,t))):a.push(l);return a}function q(e,t,a){const o=(0,l.Fl)((()=>{if(!t.value.length)return e.value;const l=Z(e.value,t.value.map((e=>e.key)));return j(l,a.value)}));return{flatItems:o}}const K=(0,f.ev)()({name:"VDataTableGroupHeaderRow",props:{item:{type:Object,required:!0}},setup(e,t){let{slots:a}=t;const{isGroupOpen:o,toggleGroup:n,extractRows:r}=Y(),{isSelected:s,isSomeSelected:i,select:u}=$(),{columns:d}=B(),c=(0,l.Fl)((()=>r([e.item])));return()=>(0,l.Wm)("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[d.value.map((t=>{if("data-table-group"===t.key){const t=o(e.item)?"$expand":"$next",r=()=>n(e.item);return a["data-table-group"]?.({item:e.item,count:c.value.length,props:{icon:t,onClick:r}})??(0,l.Wm)(x,{class:"v-data-table-group-header-row__column"},{default:()=>[(0,l.Wm)(M.T,{size:"small",variant:"text",icon:t,onClick:r},null),(0,l.Wm)("span",null,[e.item.value]),(0,l.Wm)("span",null,[(0,l.Uk)("("),c.value.length,(0,l.Uk)(")")])]})}if("data-table-select"===t.key){const e=s(c.value),t=i(c.value)&&!e,o=e=>u(c.value,e);return a["data-table-select"]?.({props:{modelValue:e,indeterminate:t,"onUpdate:modelValue":o}})??(0,l.Wm)("td",null,[(0,l.Wm)(b.pM,{modelValue:e,indeterminate:t,"onUpdate:modelValue":o},null)])}return(0,l.Wm)("td",null,null)}))])}}),Q=(0,P.U)({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"v-data-table-expand"),X=Symbol.for("vuetify:datatable:expanded");function ee(e){const t=(0,c.Vh)(e,"expandOnClick"),a=(0,V.z)(e,"expanded",e.expanded,(e=>new Set(e)),(e=>[...e.values()]));function o(e,t){const l=new Set(a.value);t?l.add(e.value):l.delete(e.value),a.value=l}function n(e){return a.value.has(e.value)}function r(e){o(e,!n(e))}const s={expand:o,expanded:a,expandOnClick:t,isExpanded:n,toggleExpand:r};return(0,l.JJ)(X,s),s}function te(){const e=(0,l.f3)(X);if(!e)throw new Error("foo");return e}const ae=(0,f.aZ)({name:"VDataTableRow",props:{item:Object},setup(e,t){let{slots:a}=t;const{isSelected:o,toggleSelect:n}=$(),{isExpanded:r,toggleExpand:s}=te(),{columns:i}=B();(0,g.L)((()=>(0,l.Wm)("tr",{class:["v-data-table__tr"]},[!i.value.length&&(0,l.Wm)(x,{key:"no-data"},a),e.item&&i.value.map(((t,u)=>(0,l.Wm)(x,{align:t.align,fixed:t.fixed,fixedOffset:t.fixedOffset,lastFixed:t.lastFixed,noPadding:"data-table-select"===t.key||"data-table-expand"===t.key,width:t.width},{default:()=>{const u=e.item,d=`item.${t.key}`,c={item:e.item,columns:i.value,isSelected:o,toggleSelect:n,isExpanded:r,toggleExpand:s};return a[d]?a[d](c):"data-table-select"===t.key?a["item.data-table-select"]?.(c)??(0,l.Wm)(b.pM,{modelValue:o([u]),onClick:()=>n(u)},null):"data-table-expand"===t.key?a["item.data-table-expand"]?.(c)??(0,l.Wm)(M.T,{icon:r(u)?"$collapse":"$expand",size:"small",variant:"text",onClick:()=>s(u)},null):u.columns[t.key]}})))])))}});var le=a(1629);const oe=(0,f.ev)()({name:"VDataTableRows",props:{loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number},emits:{"click:row":(e,t)=>!0},setup(e,t){let{emit:a,slots:o}=t;const{columns:n}=B(),{expandOnClick:r,toggleExpand:s,isExpanded:i}=te(),{isSelected:u,toggleSelect:d}=$(),{toggleGroup:c,isGroupOpen:p}=Y(),{t:m}=(0,le.bU)();return(0,g.L)((()=>(0,l.Wm)(l.HY,null,[e.loading?o.loading?.()??(0,l.Wm)(ae,{class:"v-data-table-rows-no-data",key:"loading"},{default:()=>[m(e.loadingText)]}):void 0,!e.loading&&!e.items.length&&!e.hideNoData&&(o["no-data"]?.()??(0,l.Wm)(ae,{class:"v-data-table-rows-no-data",key:"no-data"},{default:()=>[m(e.noDataText)]})),e.items.map(((e,t)=>"group-header"===e.type?o["group-header"]?o["group-header"]({index:t,item:e,columns:n.value,isExpanded:i,toggleExpand:s,isSelected:u,toggleSelect:d,toggleGroup:c,isGroupOpen:p}):(0,l.Wm)(K,{key:`group-header_${e.id}`,item:e},o):(0,l.Wm)(l.HY,null,[o.item?o.item({index:t,item:e,columns:n.value,isExpanded:i,toggleExpand:s,isSelected:u,toggleSelect:d}):(0,l.Wm)(ae,{key:`item_${e.value}`,onClick:t=>{r.value&&s(e.value),a("click:row",t,{item:e})},item:e},o),i(e)&&o["expanded-row"]?.({item:e,columns:n.value})])))]))),{}}});var ne=a(240);const re=(0,P.U)({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"v-data-table-paginate"),se=Symbol.for("vuetify:data-table-pagination");function ie(e,t){const a=(0,V.z)(e,"page",void 0,(e=>+(e??1))),o=(0,V.z)(e,"itemsPerPage",void 0,(e=>+(e??10))),n=(0,l.Fl)((()=>+(e.itemsLength??t.value.length))),r=(0,l.Fl)((()=>-1===o.value?0:o.value*(a.value-1))),s=(0,l.Fl)((()=>-1===o.value?n.value:Math.min(n.value,r.value+o.value))),i=(0,l.Fl)((()=>-1===o.value||0===n.value?1:Math.ceil(n.value/o.value))),u={page:a,itemsPerPage:o,startIndex:r,stopIndex:s,pageCount:i,itemsLength:n};return(0,l.JJ)(se,u),u}function ue(){const e=(0,l.f3)(se);if(!e)throw new Error("Missing pagination!");return e}function de(e,t,a,o){const n=(0,l.Fl)((()=>o.value<=0?e.value:e.value.slice(t.value,a.value)));return{paginatedItems:n}}const ce=(0,f.ev)()({name:"VDataTableFooter",props:{prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},setup(e,t){let{slots:a}=t;const{t:o}=(0,le.bU)(),{page:n,pageCount:r,startIndex:s,stopIndex:i,itemsLength:u,itemsPerPage:d}=ue(),c=(0,l.Fl)((()=>e.itemsPerPageOptions.map((e=>({...e,title:o(e.title)})))));return()=>(0,l.Wm)("div",{class:"v-data-table-footer"},[a.prepend?.(),(0,l.Wm)("div",{class:"v-data-table-footer__items-per-page"},[(0,l.Wm)("span",null,[o(e.itemsPerPageText)]),(0,l.Wm)(ne.r,{items:c.value,modelValue:d.value,"onUpdate:modelValue":e=>d.value=Number(e),density:"compact",variant:"outlined","hide-details":!0},null)]),(0,l.Wm)("div",{class:"v-data-table-footer__info"},[(0,l.Wm)("div",null,[o(e.pageText,u.value?s.value+1:0,i.value,u.value)])]),(0,l.Wm)("div",{class:"v-data-table-footer__pagination"},[(0,l.Wm)(M.T,{icon:e.firstIcon,variant:"plain",onClick:()=>n.value=1,disabled:1===n.value,"aria-label":o(e.firstPageLabel)},null),(0,l.Wm)(M.T,{icon:e.prevIcon,variant:"plain",onClick:()=>n.value=Math.max(1,n.value-1),disabled:1===n.value,"aria-label":o(e.prevPageLabel)},null),e.showCurrentPage&&(0,l.Wm)("span",{key:"page",class:"v-data-table-footer__page"},[n.value]),(0,l.Wm)(M.T,{icon:e.nextIcon,variant:"plain",onClick:()=>n.value=Math.min(r.value,n.value+1),disabled:n.value===r.value,"aria-label":o(e.nextPageLabel)},null),(0,l.Wm)(M.T,{icon:e.lastIcon,variant:"plain",onClick:()=>n.value=r.value,disabled:n.value===r.value,"aria-label":o(e.lastPageLabel)},null)])])}});var pe=a(6185);const me=(0,P.U)({...(0,pe.S1)({itemValue:"id"})},"v-data-table-item");function ve(e,t){const{items:a}=(0,pe.Ce)(e),o=(0,l.Fl)((()=>a.value.map((e=>({...e,type:"item",columns:t.value.reduce(((t,a)=>(t[a.key]=(0,h.qF)(e.raw,a.value??a.key),t)),{})})))));return{items:o}}var fe=a(7514);function ge(e){let{page:t,itemsPerPage:a,sortBy:o,groupBy:n}=e;const r=(0,fe.FN)("VDataTable"),s=(0,l.Fl)((()=>({page:t.value,itemsPerPage:a.value,sortBy:o.value,groupBy:n.value})));(0,l.YP)(o,(()=>{t.value=1}),{deep:!0}),(0,l.YP)(a,(()=>{t.value=1}));let i=null;(0,l.YP)(s,(()=>{(0,h.vZ)(i,s.value)||(r.emit("update:options",s.value),i=s.value)}),{deep:!0,immediate:!0})}var he=a(8434),ye=a(1819);const be=(0,P.U)({...me(),...F(),hideNoData:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},height:[String,Number],width:[String,Number],fixedHeader:Boolean,fixedFooter:Boolean},"v-data-table"),xe=(0,f.ev)()({name:"VDataTable",props:{search:String,...be(),...Q(),...G(),...I(),...E(),...re(),...(0,ye.Up)()},emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"click:row":(e,t)=>!0},setup(e,t){let{emit:a,slots:o}=t;const n=(0,V.z)(e,"groupBy"),{columns:r}=T(e,{groupBy:n,showSelect:(0,c.Vh)(e,"showSelect"),showExpand:(0,c.Vh)(e,"showExpand")}),{items:s}=ve(e,r),i=(0,l.Fl)((()=>r.value.map((e=>"columns."+e.key)))),{filteredItems:u}=(0,ye.L0)(e,s,(0,c.Vh)(e,"search"),{filterKeys:i}),{sortBy:d}=N(e),{sortByWithGroups:p,opened:m,extractRows:v}=z(e,n,d),{sortedItems:f}=H(u,p,r),{flatItems:h}=q(f,n,m),{page:b,itemsPerPage:x,startIndex:w,stopIndex:k}=ie(e,h),{paginatedItems:S}=de(h,w,k,x),W=(0,l.Fl)((()=>v(S.value)));return D(e,W),ee(e),ge({page:b,itemsPerPage:x,sortBy:d,groupBy:n}),(0,he.AF)({VDataTableRows:{hideNoData:(0,c.Vh)(e,"hideNoData"),noDataText:(0,c.Vh)(e,"noDataText")}}),(0,g.L)((()=>(0,l.Wm)(y,{class:["v-data-table",{"v-data-table--show-select":e.showSelect}],fixedHeader:e.fixedHeader,fixedFooter:e.fixedFooter,height:e.height},{top:o.top,default:o.default??(()=>(0,l.Wm)(l.HY,null,[o.colgroup?.({columns:r}),(0,l.Wm)("thead",null,[o.headers?o.headers():(0,l.Wm)(A,{sticky:e.fixedHeader,multiSort:e.multiSort},o)]),o.thead?.(),(0,l.Wm)("tbody",null,[o.body?o.body():(0,l.Wm)(oe,{items:S.value,"onClick:row":(e,t)=>a("click:row",e,t)},o)]),o.tbody?.(),o.tfoot?.()])),bottom:o.bottom??(()=>(0,l.Wm)(ce,null,{prepend:o["footer.prepend"]}))}))),{}}});var we=a(2900),ke=a(3968),Se=(a(774),a(5206)),We=(0,l.aZ)({name:"station-list",props:{connection:{type:String,default:"/data/hosts.psv"}},components:{VCard:i._,VCardTitle:u.E,VCardText:d.Z,VDataTable:xe,VTextField:we.hw},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t},getIDLink(e){return"/#/station/"+e}},setup(e){const t=(0,c.iH)([]),a=((0,c.iH)([]),(0,c.iH)("")),o=(0,c.iH)([{key:"",order:"desc"}]),n=(0,c.iH)([]),r=((0,c.iH)([]),(0,ke.lL)(Se.Z));console.log((0,ke.lL)(Se.Z).piniaStore());return(0,l.bv)((async()=>{n.value=r.all(),t.value=Object.keys(n.value[0]).map((e=>({title:e,value:e,key:e,sortable:!0}))),console.log(r.all()),console.log(t),console.log(r.all())})),{headers:t,items:n,search:a,sortBy:o}}}),Pe=a(89);const Fe=(0,Pe.Z)(We,[["render",s]]);var _e=Fe,Te={name:"MyView",components:{StationList:_e}};const Be=(0,Pe.Z)(Te,[["render",o]]);var Ve=Be}}]);
//# sourceMappingURL=5630.8d474293.js.map