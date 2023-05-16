"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[5711],{5711:function(e,t,l){l.r(t),l.d(t,{default:function(){return U}});var r=l(3396);function n(e,t,l,n,o,a){const s=(0,r.up)("ObservedProperty",!0);return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s)])}function o(e,t,l,n,o,a){const s=(0,r.up)("v-card-title"),u=(0,r.up)("v-text-field"),d=(0,r.up)("v-card-item"),i=(0,r.up)("LinkForm"),p=(0,r.up)("VueDatePicker"),m=(0,r.up)("v-select"),v=(0,r.up)("v-form"),c=(0,r.up)("v-btn"),b=(0,r.up)("v-card-text"),_=(0,r.up)("v-card");return(0,r.wg)(),(0,r.j4)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Create new 'ObservedProperty'")])),_:1}),(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"id",modelValue:e.observedProperty.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.observedProperty.id=t),hint:"ID / primary key","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"authority",modelValue:e.observedProperty.authority,"onUpdate:modelValue":t[1]||(t[1]=t=>e.observedProperty.authority=t),hint:"Naming authority for code list entry","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"short_name",modelValue:e.observedProperty.short_name,"onUpdate:modelValue":t[2]||(t[2]=t=>e.observedProperty.short_name=t),hint:"Short name representation of observed property, e.g. 'at' for air temperature","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"standard_name",modelValue:e.observedProperty.standard_name,"onUpdate:modelValue":t[3]||(t[3]=t=>e.observedProperty.standard_name=t),hint:"CF standard name (if applicable), e.g. 'air_temperature'","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"units",modelValue:e.observedProperty.units,"onUpdate:modelValue":t[4]||(t[4]=t=>e.observedProperty.units=t),hint:"Canonical units, e.g. 'Kelvin'","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"description",modelValue:e.observedProperty.description,"onUpdate:modelValue":t[5]||(t[5]=t=>e.observedProperty.description=t),hint:"Description of observed property","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{links:e.links,onUpdateLinks:e.updateLinks},null,8,["links","onUpdateLinks"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"_version",modelValue:e.observedProperty._version,"onUpdate:modelValue":t[6]||(t[6]=t=>e.observedProperty._version=t),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{label:"_change_date",modelValue:e.observedProperty._change_date,"onUpdate:modelValue":t[7]||(t[7]=t=>e.observedProperty._change_date=t),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,{items:e.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:e.observedProperty._user,"onUpdate:modelValue":t[8]||(t[8]=t=>e.observedProperty._user=t),hint:e.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,{items:e.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:e.observedProperty._status,"onUpdate:modelValue":t[9]||(t[9]=t=>e.observedProperty._status=t),hint:e.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{label:"comments",modelValue:e.observedProperty.comments,"onUpdate:modelValue":t[10]||(t[10]=t=>e.observedProperty.comments=t),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,r.Wm)(c,{onClick:e.createObservedProperty},{default:(0,r.w5)((()=>[(0,r.Uk)("Create ObservedProperty")])),_:1},8,["onClick"])])),_:1})])),_:1})}l(774);var a=l(4870),s=l(3238),u=l(6572),d=l(1888),i=l(6596),p=l(2900),m=l(240),v=l(6422),c=l(870),b=l(3968),_=l(1995),h=l(8394),y=l(9597),V=l(2815),f=l(2302),P=(0,r.aZ)({name:"ObservedPropertyForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:s._,VCardTitle:u.E,VCardText:d.Z,VCardItem:i._,VTextField:p.hw,VSelect:m.r,VForm:v.O,VBtn:c.T,VueDatePicker:h.Z,LinkForm:_.Z},setup(){const e=(0,a.iH)([]),t=e=>{console.log("updating links"),p.value.links=e},l=(0,b.lL)(y.Z),n=(0,r.Fl)((()=>l.all())),o=(0,r.Fl)((()=>null!==p.value._user?"description"in p.value._user?p.value._user.description:"":"Select user")),s=(0,b.lL)(V.Z),u=(0,r.Fl)((()=>s.all())),d=(0,r.Fl)((()=>null!==p.value._status?"description"in p.value._status?p.value._status.description:"":"Select status")),i=(0,b.lL)(f.Z),p=(0,a.iH)(i.make()),m=async()=>{let e={};Object.assign(e,p.value),await i.save(e),v()},v=()=>{Object.assign(p.value,i.make())};return{observedProperty:p,createObservedProperty:m,resetObservedProperty:v,links:e,updateLinks:t,userOptions:n,userOptionsHint:o,statusOptions:u,statusOptionsHint:d}}}),W=l(89);const k=(0,W.Z)(P,[["render",o]]);var w=k,O={name:"observedPropertyForm",components:{ObservedProperty:w}};const g=(0,W.Z)(O,[["render",n]]);var U=g}}]);
//# sourceMappingURL=5711.ed18816c.js.map