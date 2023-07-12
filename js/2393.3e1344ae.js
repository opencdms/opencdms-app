"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[2393],{2393:function(e,t,l){l.r(t),l.d(t,{default:function(){return F}});var s=l(3396);function a(e,t,l,a,i,n){const o=(0,s.up)("HostAlias",!0);return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(o)])}function i(e,t,l,a,i,n){const o=(0,s.up)("v-card-title"),u=(0,s.up)("v-text-field"),r=(0,s.up)("v-card-item"),d=(0,s.up)("v-select"),m=(0,s.up)("VueDatePicker"),h=(0,s.up)("v-form"),p=(0,s.up)("v-btn"),_=(0,s.up)("v-card-text"),c=(0,s.up)("v-card");return(0,s.wg)(),(0,s.j4)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Create new 'HostAlias'")])),_:1}),(0,s.Wm)(_,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{label:"id",modelValue:e.hostAlias.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.hostAlias.id=t),hint:"Primary key for this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{items:e.hostOptions,"item-title":"name","item-value":"id",label:"host",modelValue:e.hostAlias.host,"onUpdate:modelValue":t[1]||(t[1]=t=>e.hostAlias.host=t),hint:e.hostOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{label:"alternative",modelValue:e.hostAlias.alternative,"onUpdate:modelValue":t[2]||(t[2]=t=>e.hostAlias.alternative=t),hint:"Alternative ID by which the host is known","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{label:"alternative_name",modelValue:e.hostAlias.alternative_name,"onUpdate:modelValue":t[3]||(t[3]=t=>e.hostAlias.alternative_name=t),hint:"Alternative name by which the host is known","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{label:"valid_from",modelValue:e.hostAlias.valid_from,"onUpdate:modelValue":t[4]||(t[4]=t=>e.hostAlias.valid_from=t),hint:"Date the alternative id/name was used from","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{label:"valid_to",modelValue:e.hostAlias.valid_to,"onUpdate:modelValue":t[5]||(t[5]=t=>e.hostAlias.valid_to=t),hint:"Date the alternative id/name was used to","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{label:"_version",modelValue:e.hostAlias._version,"onUpdate:modelValue":t[6]||(t[6]=t=>e.hostAlias._version=t),type:"number",hint:"Version number of this record","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{label:"_change_date",modelValue:e.hostAlias._change_date,"onUpdate:modelValue":t[7]||(t[7]=t=>e.hostAlias._change_date=t),hint:"Date this record was changed","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{items:e.userOptions,"item-title":"name","item-value":"id",label:"user",modelValue:e.hostAlias._user,"onUpdate:modelValue":t[8]||(t[8]=t=>e.hostAlias._user=t),hint:e.userOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{items:e.statusOptions,"item-title":"name","item-value":"id",label:"status",modelValue:e.hostAlias._status,"onUpdate:modelValue":t[9]||(t[9]=t=>e.hostAlias._status=t),hint:e.statusOptionsHint,"return-object":"","persistent-hint":""},null,8,["items","modelValue","hint"])])),_:1}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Wm)(u,{label:"comments",modelValue:e.hostAlias.comments,"onUpdate:modelValue":t[10]||(t[10]=t=>e.hostAlias.comments=t),hint:"Free text comments on this record, for example description of changes made etc","persistent-hint":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(p,{onClick:e.createHostAlias},{default:(0,s.w5)((()=>[(0,s.Uk)("Create HostAlias")])),_:1},8,["onClick"])])),_:1})])),_:1})}l(774);var n=l(4870),o=l(1489),u=l(6572),r=l(1888),d=l(1209),m=l(165),h=l(240),p=l(6422),_=l(870),c=l(3968),v=l(1995),V=l(5708),f=l(5206),A=l(9597),w=l(2815),b=l(7327);l(2407);class g extends c.Hn{static fields(){return{id:this.string(""),host_id:this.string(""),host:this.belongsTo(f.Z,"host_id"),alternative:this.string(""),alternative_name:this.string(""),valid_from:this.string(""),valid_to:this.string(""),_version:this.number(null),_change_date:this.string(""),_user_id:this.string(""),_user:this.belongsTo(A.Z,"_user_id"),_status_id:this.string(""),_status:this.belongsTo(w.Z,"_status_id"),comments:this.string("")}}}(0,b.Z)(g,"entity","host_alias");var W=(0,s.aZ)({name:"HostAliasForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:o._,VCardTitle:u.E,VCardText:r.Z,VCardItem:d._,VTextField:m.hw,VSelect:h.r,VForm:p.O,VBtn:_.T,VueDatePicker:V.Z,LinkForm:v.Z},setup(){const e=(0,n.iH)([]),t=e=>{console.log("updating links"),_.value.links=e},l=(0,c.lL)(f.Z),a=(0,s.Fl)((()=>l.all())),i=(0,s.Fl)((()=>null!==_.value.host?"description"in _.value.host?_.value.host.description:"":"Select host")),o=(0,c.lL)(A.Z),u=(0,s.Fl)((()=>o.all())),r=(0,s.Fl)((()=>null!==_.value._user?"description"in _.value._user?_.value._user.description:"":"Select user")),d=(0,c.lL)(w.Z),m=(0,s.Fl)((()=>d.all())),h=(0,s.Fl)((()=>null!==_.value._status?"description"in _.value._status?_.value._status.description:"":"Select status")),p=(0,c.lL)(g),_=(0,n.iH)(p.make()),v=async()=>{let e={};Object.assign(e,_.value),await p.save(e),V()},V=()=>{Object.assign(_.value,p.make())};return{hostAlias:_,createHostAlias:v,resetHostAlias:V,links:e,updateLinks:t,hostOptions:a,hostOptionsHint:i,userOptions:u,userOptionsHint:r,statusOptions:m,statusOptionsHint:h}}}),k=l(89);const H=(0,k.Z)(W,[["render",i]]);var O=H,U={name:"hostAliasForm",components:{HostAlias:O}};const Z=(0,k.Z)(U,[["render",a]]);var F=Z}}]);
//# sourceMappingURL=2393.3e1344ae.js.map