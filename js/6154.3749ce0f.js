"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[6154,1995],{6154:function(e,l,t){t.r(l),t.d(l,{default:function(){return y}});var n=t(3396);function a(e,l,t,a,r,u){const o=(0,n.up)("ReferenceSurface",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(o)])}function r(e,l,t,a,r,u){const o=(0,n.up)("v-card-title"),i=(0,n.up)("v-text-field"),d=(0,n.up)("v-card-item"),c=(0,n.up)("v-form"),s=(0,n.up)("v-btn"),f=(0,n.up)("v-card-text"),m=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Create new 'ReferenceSurface'")])),_:1}),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"id",modelValue:e.referenceSurface.id,"onUpdate:modelValue":l[0]||(l[0]=l=>e.referenceSurface.id=l),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"name",modelValue:e.referenceSurface.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.referenceSurface.name=l),hint:"","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"description",modelValue:e.referenceSurface.description,"onUpdate:modelValue":l[2]||(l[2]=l=>e.referenceSurface.description=l),hint:"Description of reference surface","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(s,{onClick:e.createReferenceSurface},{default:(0,n.w5)((()=>[(0,n.Uk)("Create ReferenceSurface")])),_:1},8,["onClick"])])),_:1})])),_:1})}t(774);var u=t(4870),o=t(3238),i=t(6572),d=t(1888),c=t(6596),s=t(2900),f=t(240),m=t(6422),p=t(870),v=t(3968),k=t(1995),V=t(8394),h=t(6294),w=(0,n.aZ)({name:"ReferenceSurfaceForm",props:{},methods:{parseLinks(e){let l;return l=e&&e.length>0?JSON.stringify(e):"",l}},components:{VCard:o._,VCardTitle:i.E,VCardText:d.Z,VCardItem:c._,VTextField:s.hw,VSelect:f.r,VForm:m.O,VBtn:p.T,VueDatePicker:V.Z,LinkForm:k.Z},setup(){const e=(0,u.iH)([]),l=e=>{console.log("updating links"),n.value.links=e},t=(0,v.lL)(h.Z),n=(0,u.iH)(t.make()),a=async()=>{let e={};Object.assign(e,n.value),await t.save(e),r()},r=()=>{Object.assign(n.value,t.make())};return{referenceSurface:n,createReferenceSurface:a,resetReferenceSurface:r,links:e,updateLinks:l}}}),b=t(89);const S=(0,b.Z)(w,[["render",r]]);var W=S,g={name:"referenceSurfaceForm",components:{ReferenceSurface:W}};const _=(0,b.Z)(g,[["render",a]]);var y=_},1995:function(e,l,t){t.d(l,{Z:function(){return h}});var n=t(3396);function a(e,l,t,a,r,u){const o=(0,n.up)("v-card-title"),i=(0,n.up)("v-text-field"),d=(0,n.up)("v-col"),c=(0,n.up)("v-icon"),s=(0,n.up)("v-btn"),f=(0,n.up)("v-row"),m=(0,n.up)("v-container"),p=(0,n.up)("v-card"),v=(0,n.up)("v-form");return(0,n.wg)(),(0,n.j4)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Add / edit links")])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.links,((t,a)=>((0,n.wg)(),(0,n.j4)(p,{key:a},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{cols:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:t.rel,"onUpdate:modelValue":[e=>t.rel=e,l[0]||(l[0]=l=>e.value=l)],label:"rel",hint:"IANA link relation, e.g. canonical, alternate","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(d,{cols:"3"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:t.href,"onUpdate:modelValue":[e=>t.href=e,l[1]||(l[1]=l=>e.value=l)],label:"href",hint:"URL for link","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(d,{cols:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:t.type,"onUpdate:modelValue":[e=>t.type=e,l[2]||(l[2]=l=>e.value=l)],label:"link type",hint:"Result/link type, e.g. text/html","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(d,{cols:"4"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:t.title,"onUpdate:modelValue":[e=>t.title=e,l[3]||(l[3]=l=>e.value=l)],label:"title",hint:"Title / name of link","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(d,{cols:"1"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{color:"error",onClick:()=>e.removeLink(a)},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-close")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),(0,n.Wm)(s,{color:"green",onClick:e.addLink},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-plus")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})}t(7658);var r=t(4870),u=t(6422),o=t(2900),i=t(3238),d=t(6572),c=t(870),s=t(3289),f=t(3369),m=t(6824),p=t(8521),v=(0,n.aZ)({name:"LinkForm",components:{VForm:u.O,VTextField:o.hw,VCard:i._,VCardTitle:d.E,VBtn:c.T,VIcon:s.t,VContainer:f.K,VRow:m.o,VCol:p.D},props:{links:{type:Array,required:!0}},emits:["updateLinks"],setup(e,l){const t=(0,r.iH)(""),a=(0,r.iH)(""),u=(0,r.iH)(e.links);(0,n.YP)((()=>e.links),(e=>{u.value="string"===typeof e?JSON.parse(e):e}),{immediate:!0,deep:!0}),(0,n.YP)((()=>u.value),(e=>{l.emit("updateLinks",e)}),{deep:!0});const o=()=>{u.value.push({rel:"",href:"",type:"",title:""})},i=e=>{u.value=u.value.filter(((l,t)=>t!==e))};return{name:t,description:a,location:location,links:u,addLink:o,removeLink:i}}}),k=t(89);const V=(0,k.Z)(v,[["render",a]]);var h=V},6422:function(e,l,t){t.d(l,{O:function(){return d}});var n=t(3396),a=t(4357),r=t(3185),u=t(4870),o=t(320),i=t(9888);const d=(0,o.ev)()({name:"VForm",props:{...(0,a.vC)()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:t,emit:o}=l;const d=(0,a.Np)(e),c=(0,u.iH)();function s(e){e.preventDefault(),d.reset()}function f(e){const l=e,t=d.validate();l.then=t.then.bind(t),l.catch=t.catch.bind(t),l.finally=t.finally.bind(t),o("submit",l),l.defaultPrevented||t.then((e=>{let{valid:l}=e;l&&c.value?.submit()})),l.preventDefault()}return(0,i.L)((()=>(0,n.Wm)("form",{ref:c,class:"v-form",novalidate:!0,onReset:s,onSubmit:f},[t.default?.(d)]))),(0,r.F)(d,c)}})},8521:function(e,l,t){t.d(l,{D:function(){return p}});t(7658),t(8099);var n=t(1138),a=t(7139),r=t(3396),u=t(320);const o=["sm","md","lg","xl","xxl"],i=(()=>o.reduce(((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e)),{}))(),d=(()=>o.reduce(((e,l)=>(e["offset"+(0,a.kC)(l)]={type:[String,Number],default:null},e)),{}))(),c=(()=>o.reduce(((e,l)=>(e["order"+(0,a.kC)(l)]={type:[String,Number],default:null},e)),{}))(),s={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(c)};function f(e,l,t){let n=e;if(null!=t&&!1!==t){if(l){const t=l.replace(e,"");n+=`-${t}`}return"col"===e&&(n="v-"+n),"col"!==e||""!==t&&!0!==t?(n+=`-${t}`,n.toLowerCase()):n.toLowerCase()}}const m=["auto","start","end","center","baseline","stretch"],p=(0,u.ev)()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>m.includes(e)},...(0,n.Q)()},setup(e,l){let{slots:t}=l;const n=(0,r.Fl)((()=>{const l=[];let t;for(t in s)s[t].forEach((n=>{const a=e[n],r=f(t,n,a);r&&l.push(r)}));const n=l.some((e=>e.startsWith("v-col-")));return l.push({"v-col":!n||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l}));return()=>(0,r.h)(e.tag,{class:n.value},t.default?.())}})}}]);
//# sourceMappingURL=6154.3749ce0f.js.map