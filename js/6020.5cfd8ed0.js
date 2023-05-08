"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[6020,1995],{2025:function(e,l,t){t.d(l,{Z:function(){return a}});var n=t(7327),o=t(3968);t(2407);class a extends o.Hn{static fields(){return{id:this.string(""),authority:this.string(""),name:this.string(""),description:this.string("")}}}(0,n.Z)(a,"entity","role")},6020:function(e,l,t){t.r(l),t.d(l,{default:function(){return C}});var n=t(3396);function o(e,l,t,o,a,r){const u=(0,n.up)("Role",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(u)])}function a(e,l,t,o,a,r){const u=(0,n.up)("v-card-title"),i=(0,n.up)("v-text-field"),d=(0,n.up)("v-card-item"),s=(0,n.up)("v-form"),m=(0,n.up)("v-btn"),c=(0,n.up)("v-card-text"),f=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Create new 'Role'")])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"id",modelValue:e.role.id,"onUpdate:modelValue":l[0]||(l[0]=l=>e.role.id=l),hint:"Primary key for this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"authority",modelValue:e.role.authority,"onUpdate:modelValue":l[1]||(l[1]=l=>e.role.authority=l),hint:"Namelist authority","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"name",modelValue:e.role.name,"onUpdate:modelValue":l[2]||(l[2]=l=>e.role.name=l),hint:"The name of the role","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"description",modelValue:e.role.description,"onUpdate:modelValue":l[3]||(l[3]=l=>e.role.description=l),hint:"Description of the role","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(m,{onClick:e.createRole},{default:(0,n.w5)((()=>[(0,n.Uk)("Create Role")])),_:1},8,["onClick"])])),_:1})])),_:1})}t(774);var r=t(4870),u=t(3238),i=t(6572),d=t(1888),s=t(6596),m=t(2900),c=t(240),f=t(6422),p=t(870),v=t(3968),h=t(1995),k=t(8394),V=t(2025),w=(0,n.aZ)({name:"RoleForm",props:{},methods:{parseLinks(e){let l;return l=e&&e.length>0?JSON.stringify(e):"",l}},components:{VCard:u._,VCardTitle:i.E,VCardText:d.Z,VCardItem:s._,VTextField:m.hw,VSelect:c.r,VForm:f.O,VBtn:p.T,VueDatePicker:k.Z,LinkForm:h.Z},setup(){const e=(0,r.iH)([]),l=e=>{console.log("updating links"),n.value.links=e},t=(0,v.lL)(V.Z),n=(0,r.iH)(t.make()),o=async()=>{let e={};Object.assign(e,n.value),await t.save(e),a()},a=()=>{Object.assign(n.value,t.make())};return{role:n,createRole:o,resetRole:a,links:e,updateLinks:l}}}),y=t(89);const g=(0,y.Z)(w,[["render",a]]);var W=g,b={name:"roleForm",components:{Role:W}};const _=(0,y.Z)(b,[["render",o]]);var C=_},1995:function(e,l,t){t.d(l,{Z:function(){return V}});var n=t(3396);function o(e,l,t,o,a,r){const u=(0,n.up)("v-card-title"),i=(0,n.up)("v-text-field"),d=(0,n.up)("v-col"),s=(0,n.up)("v-icon"),m=(0,n.up)("v-btn"),c=(0,n.up)("v-row"),f=(0,n.up)("v-container"),p=(0,n.up)("v-card"),v=(0,n.up)("v-form");return(0,n.wg)(),(0,n.j4)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Add / edit links")])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.links,((t,o)=>((0,n.wg)(),(0,n.j4)(p,{key:o},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{cols:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:t.rel,"onUpdate:modelValue":[e=>t.rel=e,l[0]||(l[0]=l=>e.value=l)],label:"rel",hint:"IANA link relation, e.g. canonical, alternate","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(d,{cols:"3"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:t.href,"onUpdate:modelValue":[e=>t.href=e,l[1]||(l[1]=l=>e.value=l)],label:"href",hint:"URL for link","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(d,{cols:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:t.type,"onUpdate:modelValue":[e=>t.type=e,l[2]||(l[2]=l=>e.value=l)],label:"link type",hint:"Result/link type, e.g. text/html","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(d,{cols:"4"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:t.title,"onUpdate:modelValue":[e=>t.title=e,l[3]||(l[3]=l=>e.value=l)],label:"title",hint:"Title / name of link","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(d,{cols:"1"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{color:"error",onClick:()=>e.removeLink(o)},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-close")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),(0,n.Wm)(m,{color:"green",onClick:e.addLink},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-plus")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})}t(7658);var a=t(4870),r=t(6422),u=t(2900),i=t(3238),d=t(6572),s=t(870),m=t(3289),c=t(3369),f=t(6824),p=t(8521),v=(0,n.aZ)({name:"LinkForm",components:{VForm:r.O,VTextField:u.hw,VCard:i._,VCardTitle:d.E,VBtn:s.T,VIcon:m.t,VContainer:c.K,VRow:f.o,VCol:p.D},props:{links:{type:Array,required:!0}},emits:["updateLinks"],setup(e,l){const t=(0,a.iH)(""),o=(0,a.iH)(""),r=(0,a.iH)(e.links);(0,n.YP)((()=>e.links),(e=>{r.value="string"===typeof e?JSON.parse(e):e}),{immediate:!0,deep:!0}),(0,n.YP)((()=>r.value),(e=>{l.emit("updateLinks",e)}),{deep:!0});const u=()=>{r.value.push({rel:"",href:"",type:"",title:""})},i=e=>{r.value=r.value.filter(((l,t)=>t!==e))};return{name:t,description:o,location:location,links:r,addLink:u,removeLink:i}}}),h=t(89);const k=(0,h.Z)(v,[["render",o]]);var V=k},6422:function(e,l,t){t.d(l,{O:function(){return d}});var n=t(3396),o=t(4357),a=t(3185),r=t(4870),u=t(320),i=t(9888);const d=(0,u.ev)()({name:"VForm",props:{...(0,o.vC)()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:t,emit:u}=l;const d=(0,o.Np)(e),s=(0,r.iH)();function m(e){e.preventDefault(),d.reset()}function c(e){const l=e,t=d.validate();l.then=t.then.bind(t),l.catch=t.catch.bind(t),l.finally=t.finally.bind(t),u("submit",l),l.defaultPrevented||t.then((e=>{let{valid:l}=e;l&&s.value?.submit()})),l.preventDefault()}return(0,i.L)((()=>(0,n.Wm)("form",{ref:s,class:"v-form",novalidate:!0,onReset:m,onSubmit:c},[t.default?.(d)]))),(0,a.F)(d,s)}})},8521:function(e,l,t){t.d(l,{D:function(){return p}});t(7658),t(8099);var n=t(1138),o=t(7139),a=t(3396),r=t(320);const u=["sm","md","lg","xl","xxl"],i=(()=>u.reduce(((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e)),{}))(),d=(()=>u.reduce(((e,l)=>(e["offset"+(0,o.kC)(l)]={type:[String,Number],default:null},e)),{}))(),s=(()=>u.reduce(((e,l)=>(e["order"+(0,o.kC)(l)]={type:[String,Number],default:null},e)),{}))(),m={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(s)};function c(e,l,t){let n=e;if(null!=t&&!1!==t){if(l){const t=l.replace(e,"");n+=`-${t}`}return"col"===e&&(n="v-"+n),"col"!==e||""!==t&&!0!==t?(n+=`-${t}`,n.toLowerCase()):n.toLowerCase()}}const f=["auto","start","end","center","baseline","stretch"],p=(0,r.ev)()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...s,alignSelf:{type:String,default:null,validator:e=>f.includes(e)},...(0,n.Q)()},setup(e,l){let{slots:t}=l;const n=(0,a.Fl)((()=>{const l=[];let t;for(t in m)m[t].forEach((n=>{const o=e[n],a=c(t,n,o);a&&l.push(a)}));const n=l.some((e=>e.startsWith("v-col-")));return l.push({"v-col":!n||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l}));return()=>(0,a.h)(e.tag,{class:n.value},t.default?.())}})}}]);
//# sourceMappingURL=6020.5cfd8ed0.js.map