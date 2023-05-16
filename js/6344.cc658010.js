"use strict";(self["webpackChunkopencdms_app"]=self["webpackChunkopencdms_app"]||[]).push([[6344],{6344:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var r=l(3396);function n(e,t,l,n,o,a){const i=(0,r.up)("Record",!0);return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i)])}function o(e,t,l,n,o,a){const i=(0,r.up)("v-card-title"),d=(0,r.up)("v-text-field"),s=(0,r.up)("v-card-item"),u=(0,r.up)("LinkForm"),c=(0,r.up)("v-form"),m=(0,r.up)("v-btn"),h=(0,r.up)("v-card-text"),p=(0,r.up)("v-card");return(0,r.wg)(),(0,r.j4)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Create new 'Record'")])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"id",modelValue:e.record.id,"onUpdate:modelValue":t[0]||(t[0]=t=>e.record.id=t),hint:"A unique identifier of the catalogue record.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"time",modelValue:e.record.time,"onUpdate:modelValue":t[1]||(t[1]=t=>e.record.time=t),hint:"The temporal extent of the resource. Can be null if there is no associated temporal extent.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"title",modelValue:e.record.title,"onUpdate:modelValue":t[2]||(t[2]=t=>e.record.title=t),hint:"A human-readable name given to the resource.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"location",modelValue:e.record.location,"onUpdate:modelValue":t[3]||(t[3]=t=>e.record.location=t),hint:"A geometry associated with the resource that is used for discovery. Can be null if there is no associated geometry.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"created",modelValue:e.record.created,"onUpdate:modelValue":t[4]||(t[4]=t=>e.record.created=t),hint:"Date of creation of this record.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"updated",modelValue:e.record.updated,"onUpdate:modelValue":t[5]||(t[5]=t=>e.record.updated=t),hint:"The most recent date on which the record was changed.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"resource_type",modelValue:e.record.resource_type,"onUpdate:modelValue":t[6]||(t[6]=t=>e.record.resource_type=t),hint:"The nature or genre of the resource. The value should be a code, convenient for filtering records. Where available, a link to the canonical URI of the record type resource will be added to the 'links' property.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"description",modelValue:e.record.description,"onUpdate:modelValue":t[7]||(t[7]=t=>e.record.description=t),hint:"A free-text account of the resource.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"keywords",modelValue:e.record.keywords,"onUpdate:modelValue":t[8]||(t[8]=t=>e.record.keywords=t),hint:"The topic or topics of the resource. Typically represented using free-form keywords, tags, key phrases, or classification codes. Semi-colon delimited","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"language",modelValue:e.record.language,"onUpdate:modelValue":t[9]||(t[9]=t=>e.record.language=t),hint:"The natural language used for textual values (e.g. titles, descriptions, etc.) of the resource. ISO 639-1/639-2 codes should be used.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"external_ids",modelValue:e.record.external_ids,"onUpdate:modelValue":t[10]||(t[10]=t=>e.record.external_ids=t),hint:"An identifier for the resource assigned by an external (to the catalogue) entity.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"themes",modelValue:e.record.themes,"onUpdate:modelValue":t[11]||(t[11]=t=>e.record.themes=t),hint:"A knowledge organization system used to classify the resource.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"formats",modelValue:e.record.formats,"onUpdate:modelValue":t[12]||(t[12]=t=>e.record.formats=t),hint:"A list of available distributions of the resource.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"providers",modelValue:e.record.providers,"onUpdate:modelValue":t[13]||(t[13]=t=>e.record.providers=t),hint:"A list of providers qualified by their role in association to the record.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"license",modelValue:e.record.license,"onUpdate:modelValue":t[14]||(t[14]=t=>e.record.license=t),hint:"A legal document under which the resource is made available. The value should be a code, convenient for filtering the records. Where applicable, the use of the identifiers from the SPDX License List is recommended. If multiple licenses apply, it is recommended to use ''various'.  Where available, links to a URI of each applicable license should be added to the 'links' property.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:"rights",modelValue:e.record.rights,"onUpdate:modelValue":t[15]||(t[15]=t=>e.record.rights=t),hint:"A statement that concerns all rights not addressed by the license such as a copyright statement.","persistent-hint":""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{links:e.links,onUpdateLinks:e.updateLinks},null,8,["links","onUpdateLinks"])])),_:1})])),_:1}),(0,r.Wm)(m,{onClick:e.createRecord},{default:(0,r.w5)((()=>[(0,r.Uk)("Create Record")])),_:1},8,["onClick"])])),_:1})])),_:1})}l(774);var a=l(4870),i=l(3238),d=l(6572),s=l(1888),u=l(6596),c=l(2900),m=l(240),h=l(6422),p=l(870),f=l(3968),V=l(1995),g=l(8394),W=l(7327),w=l(2407);class b extends f.Hn{static fields(){return{id:this.string(""),time:this.string(""),title:this.string(""),location:this.string(""),created:this.string(""),updated:this.string(""),resource_type:this.string(""),description:this.string(""),keywords:this.string(""),language:this.string(""),external_ids:this.attr(null),themes:this.attr(null),formats:this.attr(null),providers:this.attr(null),license:this.string(""),rights:this.string(""),links:this.attr(new w.Z([]))}}}(0,W.Z)(b,"entity","record");var k=(0,r.aZ)({name:"RecordForm",props:{},methods:{parseLinks(e){let t;return t=e&&e.length>0?JSON.stringify(e):"",t}},components:{VCard:i._,VCardTitle:d.E,VCardText:s.Z,VCardItem:u._,VTextField:c.hw,VSelect:m.r,VForm:h.O,VBtn:p.T,VueDatePicker:g.Z,LinkForm:V.Z},setup(){const e=(0,a.iH)([]),t=e=>{console.log("updating links"),r.value.links=e},l=(0,f.lL)(b),r=(0,a.iH)(l.make()),n=async()=>{let e={};Object.assign(e,r.value),await l.save(e),o()},o=()=>{Object.assign(r.value,l.make())};return{record:r,createRecord:n,resetRecord:o,links:e,updateLinks:t}}}),v=l(89);const _=(0,v.Z)(k,[["render",o]]);var y=_,U={name:"recordForm",components:{Record:y}};const x=(0,v.Z)(U,[["render",n]]);var C=x}}]);
//# sourceMappingURL=6344.cc658010.js.map