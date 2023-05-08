"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[8983,1995],{8983:function(e,l,t){t.r(l),t.d(l,{default:function(){return C}});var n=t(3396);function u(e,l,t,u,o,a){const s=(0,n.up)("SourceType",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(s)])}function o(e,l,t,u,o,a){const s=(0,n.up)("v-card-title"),r=(0,n.up)("v-text-field"),i=(0,n.up)("v-card-item"),d=(0,n.up)("LinkForm"),m=(0,n.up)("VueDatePicker"),c=(0,n.up)("v-select"),p=(0,n.up)("v-form"),f=(0,n.up)("v-btn"),v=(0,n.up)("v-card-text"),V=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(V,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Create new 'SourceType'")])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{label:"id",modelValue:e.sourceType.id,"onUpdate:modelValue":l[0]||(l[0]=l=>e.sourceType.id=l),hint:"ID / primary key","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{label:"name",modelValue:e.sourceType.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.sourceType.name=l),hint:"Name of source type","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{label:"description",modelValue:e.sourceType.description,"onUpdate:modelValue":l[2]||(l[2]=l=>e.sourceType.description=l),hint:"Description of source type, e.g. file etc","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{label:"scheme",modelValue:e.sourceType.scheme,"onUpdate:modelValue":l[3]||(l[3]=l=>e.sourceType.scheme=l),hint:"IANA scheme (if applicable)","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{links:e.links,onUpdateLinks:e.updateLinks},null,8,["links","onUpdateLinks"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{label:"_version",modelValue:e.sourceType._version,"onUpdate:modelValue":l[4]||(l[4]=l=>e.sourceType._version=l),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{label:"_change_date",modelValue:e.sourceType._change_date,"onUpdate:modelValue":l[5]||(l[5]=l=>e.sourceType._change_date=l),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{items:e.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:e.sourceType._user,"onUpdate:modelValue":l[6]||(l[6]=l=>e.sourceType._user=l),hint:e.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{items:e.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:e.sourceType._status,"onUpdate:modelValue":l[7]||(l[7]=l=>e.sourceType._status=l),hint:e.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,{label:"comments",modelValue:e.sourceType.comments,"onUpdate:modelValue":l[8]||(l[8]=l=>e.sourceType.comments=l),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(f,{onClick:e.createSourceType},{default:(0,n.w5)((()=>[(0,n.Uk)("Create SourceType")])),_:1},8,["onClick"])])),_:1})])),_:1})}t(774);var a=t(4870),s=t(3238),r=t(6572),i=t(1888),d=t(6596),m=t(2900),c=t(240),p=t(6422),f=t(870),v=t(3968),V=t(1995),h=t(8394),y=t(9597),k=t(2815),_=t(6544),w=(0,n.aZ)({name:"SourceTypeForm",props:{},methods:{parseLinks(e){let l;return l=e&&e.length>0?JSON.stringify(e):"",l}},components:{VCard:s._,VCardTitle:r.E,VCardText:i.Z,VCardItem:d._,VTextField:m.hw,VSelect:c.r,VForm:p.O,VBtn:f.T,VueDatePicker:h.Z,LinkForm:V.Z},setup(){const e=(0,a.iH)([]),l=e=>{console.log("updating links"),m.value.links=e},t=(0,v.lL)(y.Z),u=(0,n.Fl)((()=>t.all())),o=(0,n.Fl)((()=>null!==m.value._user?"description"in m.value._user?m.value._user.description:"":"Select user")),s=(0,v.lL)(k.Z),r=(0,n.Fl)((()=>s.all())),i=(0,n.Fl)((()=>null!==m.value._status?"description"in m.value._status?m.value._status.description:"":"Select status")),d=(0,v.lL)(_.Z),m=(0,a.iH)(d.make()),c=async()=>{let e={};Object.assign(e,m.value),await d.save(e),p()},p=()=>{Object.assign(m.value,d.make())};return{sourceType:m,createSourceType:c,resetSourceType:p,links:e,updateLinks:l,userOptions:u,userOptionsHint:o,statusOptions:r,statusOptionsHint:i}}}),W=t(89);const b=(0,W.Z)(w,[["render",o]]);var T=b,g={name:"sourceTypeForm",components:{SourceType:T}};const U=(0,W.Z)(g,[["render",u]]);var C=U},1995:function(e,l,t){t.d(l,{Z:function(){return y}});var n=t(3396);function u(e,l,t,u,o,a){const s=(0,n.up)("v-card-title"),r=(0,n.up)("v-text-field"),i=(0,n.up)("v-col"),d=(0,n.up)("v-icon"),m=(0,n.up)("v-btn"),c=(0,n.up)("v-row"),p=(0,n.up)("v-container"),f=(0,n.up)("v-card"),v=(0,n.up)("v-form");return(0,n.wg)(),(0,n.j4)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Add / edit links")])),_:1}),(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.links,((t,u)=>((0,n.wg)(),(0,n.j4)(f,{key:u},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{cols:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{modelValue:t.rel,"onUpdate:modelValue":[e=>t.rel=e,l[0]||(l[0]=l=>e.value=l)],label:"rel",hint:"IANA link relation, e.g. canonical, alternate","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(i,{cols:"3"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{modelValue:t.href,"onUpdate:modelValue":[e=>t.href=e,l[1]||(l[1]=l=>e.value=l)],label:"href",hint:"URL for link","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(i,{cols:"2"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{modelValue:t.type,"onUpdate:modelValue":[e=>t.type=e,l[2]||(l[2]=l=>e.value=l)],label:"link type",hint:"Result/link type, e.g. text/html","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(i,{cols:"4"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{modelValue:t.title,"onUpdate:modelValue":[e=>t.title=e,l[3]||(l[3]=l=>e.value=l)],label:"title",hint:"Title / name of link","persistent-hint":"",modelModifiers:{lazy:!0}},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,n.Wm)(i,{cols:"1"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{color:"error",onClick:()=>e.removeLink(u)},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-close")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),(0,n.Wm)(m,{color:"green",onClick:e.addLink},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)("mdi-plus")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1})}t(7658);var o=t(4870),a=t(6422),s=t(2900),r=t(3238),i=t(6572),d=t(870),m=t(3289),c=t(3369),p=t(6824),f=t(8521),v=(0,n.aZ)({name:"LinkForm",components:{VForm:a.O,VTextField:s.hw,VCard:r._,VCardTitle:i.E,VBtn:d.T,VIcon:m.t,VContainer:c.K,VRow:p.o,VCol:f.D},props:{links:{type:Array,required:!0}},emits:["updateLinks"],setup(e,l){const t=(0,o.iH)(""),u=(0,o.iH)(""),a=(0,o.iH)(e.links);(0,n.YP)((()=>e.links),(e=>{a.value="string"===typeof e?JSON.parse(e):e}),{immediate:!0,deep:!0}),(0,n.YP)((()=>a.value),(e=>{l.emit("updateLinks",e)}),{deep:!0});const s=()=>{a.value.push({rel:"",href:"",type:"",title:""})},r=e=>{a.value=a.value.filter(((l,t)=>t!==e))};return{name:t,description:u,location:location,links:a,addLink:s,removeLink:r}}}),V=t(89);const h=(0,V.Z)(v,[["render",u]]);var y=h},6422:function(e,l,t){t.d(l,{O:function(){return i}});var n=t(3396),u=t(4357),o=t(3185),a=t(4870),s=t(320),r=t(9888);const i=(0,s.ev)()({name:"VForm",props:{...(0,u.vC)()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:t,emit:s}=l;const i=(0,u.Np)(e),d=(0,a.iH)();function m(e){e.preventDefault(),i.reset()}function c(e){const l=e,t=i.validate();l.then=t.then.bind(t),l.catch=t.catch.bind(t),l.finally=t.finally.bind(t),s("submit",l),l.defaultPrevented||t.then((e=>{let{valid:l}=e;l&&d.value?.submit()})),l.preventDefault()}return(0,r.L)((()=>(0,n.Wm)("form",{ref:d,class:"v-form",novalidate:!0,onReset:m,onSubmit:c},[t.default?.(i)]))),(0,o.F)(i,d)}})},8521:function(e,l,t){t.d(l,{D:function(){return f}});t(7658),t(8099);var n=t(1138),u=t(7139),o=t(3396),a=t(320);const s=["sm","md","lg","xl","xxl"],r=(()=>s.reduce(((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e)),{}))(),i=(()=>s.reduce(((e,l)=>(e["offset"+(0,u.kC)(l)]={type:[String,Number],default:null},e)),{}))(),d=(()=>s.reduce(((e,l)=>(e["order"+(0,u.kC)(l)]={type:[String,Number],default:null},e)),{}))(),m={col:Object.keys(r),offset:Object.keys(i),order:Object.keys(d)};function c(e,l,t){let n=e;if(null!=t&&!1!==t){if(l){const t=l.replace(e,"");n+=`-${t}`}return"col"===e&&(n="v-"+n),"col"!==e||""!==t&&!0!==t?(n+=`-${t}`,n.toLowerCase()):n.toLowerCase()}}const p=["auto","start","end","center","baseline","stretch"],f=(0,a.ev)()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>p.includes(e)},...(0,n.Q)()},setup(e,l){let{slots:t}=l;const n=(0,o.Fl)((()=>{const l=[];let t;for(t in m)m[t].forEach((n=>{const u=e[n],o=c(t,n,u);o&&l.push(o)}));const n=l.some((e=>e.startsWith("v-col-")));return l.push({"v-col":!n||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l}));return()=>(0,o.h)(e.tag,{class:n.value},t.default?.())}})}}]);
//# sourceMappingURL=8983.81ab6faf.js.map