"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[9595],{9595:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=a(3396);function l(t,e,a,l,u,s){const r=(0,n.up)("Status",!0);return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(r)])}function u(t,e,a,l,u,s){const r=(0,n.up)("v-card-title"),i=(0,n.up)("v-text-field"),d=(0,n.up)("v-card-item"),o=(0,n.up)("v-form"),m=(0,n.up)("v-btn"),p=(0,n.up)("v-card-text"),c=(0,n.up)("v-card");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Uk)("Create new 'Status'")])),_:1}),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"id",modelValue:t.status.id,"onUpdate:modelValue":e[0]||(e[0]=e=>t.status.id=e),hint:"ID / primary key","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"name",modelValue:t.status.name,"onUpdate:modelValue":e[1]||(e[1]=e=>t.status.name=e),hint:"Short name for status","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:"description",modelValue:t.status.description,"onUpdate:modelValue":e[2]||(e[2]=e=>t.status.description=e),hint:"Description of the status","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(m,{onClick:t.createStatus},{default:(0,n.w5)((()=>[(0,n.Uk)("Create Status")])),_:1},8,["onClick"])])),_:1})])),_:1})}a(774);var s=a(4870),r=a(3238),i=a(6572),d=a(1888),o=a(6596),m=a(2900),p=a(240),c=a(6422),f=a(870),k=a(3968),V=a(1995),v=a(8394),w=a(2815),h=(0,n.aZ)({name:"StatusForm",props:{},methods:{parseLinks(t){let e;return e=t&&t.length>0?JSON.stringify(t):"",e}},components:{VCard:r._,VCardTitle:i.E,VCardText:d.Z,VCardItem:o._,VTextField:m.hw,VSelect:p.r,VForm:c.O,VBtn:f.T,VueDatePicker:v.Z,LinkForm:V.Z},setup(){const t=(0,s.iH)([]),e=t=>{console.log("updating links"),n.value.links=t},a=(0,k.lL)(w.Z),n=(0,s.iH)(a.make()),l=async()=>{let t={};Object.assign(t,n.value),await a.save(t),u()},u=()=>{Object.assign(n.value,a.make())};return{status:n,createStatus:l,resetStatus:u,links:t,updateLinks:e}}}),_=a(89);const S=(0,_.Z)(h,[["render",u]]);var W=S,C={name:"statusForm",components:{Status:W}};const b=(0,_.Z)(C,[["render",l]]);var g=b}}]);
//# sourceMappingURL=9595.f659f7f6.js.map