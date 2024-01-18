import './polyfills.server.mjs';
import{a as _}from"./chunk-OGXMZ754.mjs";import{b as Q}from"./chunk-NOYGO5KG.mjs";import{a as K}from"./chunk-NZW26JDK.mjs";import{a as J}from"./chunk-N5XBECTH.mjs";import{A as U,B as L,E as q,F as P,G,I as w,J as V,Ka as k,Wa as z,j as x,k as O,l as A,n as T,o as b,p as l,q as M,qa as B,r as y,ra as H,sa as $,ta as j,va as W,w as D,z as F}from"./chunk-IFRG2RKO.mjs";import{Db as S,Oa as o,Pa as I,Ya as m,cb as s,da as R,hb as i,ib as t,jb as c,oc as h,pc as g,tb as u,xc as N,yb as a,zb as E}from"./chunk-R63WN2K3.mjs";var f=function(e){return e.ESCUELA="ESCUELA",e.UNIVERSIDAD="UNIVERSIDAD",e.UNIDAD_RESIDENCIAL="UNIDAD_RESIDENCIAL",e.RESTAURANTE="RESTAURANTE",e.CENTRO_COMERCIAL="CENTRO_COMERCIAL",e.MICRO_EMPRESA="MICRO_EMPRESA",e.EMPRESA="EMPRESA",e.OTRA="OTRA",e.PERSONA_NATURAL="PERSONA_NATURAL",e}(f||{}),p=function(e){return e.AGROINDUSTRIA="AGROINDUSTRIA",e.SERVICIOS="SERVICIOS",e.INDUSTRIAL="INDUSTRIAL",e.TRANSPORTE="TRANSPORTE",e.COMERCIO="COMERCIO",e.FINANCIERO="FINANCIERO",e.CONSTRUCCION="CONSTRUCCI\xD3N",e.MINERO_ENERGETICO="MINERO-ENERGETICO",e.COMUNICACIONES="COMUNICACIONES",e.TURISMO="TURISMO",e.HOSPITALARIO="HOSPITALARIO",e.OTRO="OTRO",e}(p||{});function X(e,r){e&1&&a(0,"Datos B\xE1sicos")}function Y(e,r){e&1&&(i(0,"div",30),a(1," Este campo es obligatorio. "),t())}function Z(e,r){e&1&&(i(0,"div",30),a(1," Debe tener m\xEDnimo 6 caracteres. "),t())}function ee(e,r){e&1&&(i(0,"div",30),a(1," Solo acepta caracteres alfan\xFAmericos. "),t())}function te(e,r){if(e&1&&(i(0,"mat-hint",28),s(1,Y,2,0,"div",29)(2,Z,2,0,"div",29)(3,ee,2,0,"div",29),t()),e&2){let n=u();o(),m("ngIf",n.f.name.errors&&n.f.name.errors.required),o(),m("ngIf",n.f.name.errors&&n.f.name.errors.minlength),o(),m("ngIf",n.f.name.errors&&n.f.name.errors.pattern)}}function ie(e,r){if(e&1&&(i(0,"mat-option",31),a(1),t()),e&2){let n=r.$implicit;m("value",n.status),o(),E(n.status)}}function ne(e,r){if(e&1&&(i(0,"mat-option",31),a(1),t()),e&2){let n=r.$implicit;m("value",n),o(),E(n.status)}}function re(e,r){e&1&&(i(0,"div",30),a(1," Este campo es obligatorio. "),t())}function ae(e,r){e&1&&(i(0,"div",30),a(1," Debe tener m\xEDnimo 6 caracteres. "),t())}function oe(e,r){e&1&&(i(0,"div",30),a(1," Solo acepta caracteres n\xFAmericos. "),t())}function me(e,r){if(e&1&&(i(0,"mat-hint",28),s(1,re,2,0,"div",29)(2,ae,2,0,"div",29)(3,oe,2,0,"div",29),t()),e&2){let n=u();o(),m("ngIf",n.f.identity.errors&&n.f.identity.errors.required),o(),m("ngIf",n.f.identity.errors&&n.f.identity.errors.minlength),o(),m("ngIf",n.f.identity.errors&&n.f.identity.errors.pattern)}}function le(e,r){e&1&&(i(0,"div",30),a(1," Este campo es obligatorio. "),t())}function de(e,r){e&1&&(i(0,"div",30),a(1," Debe tener m\xEDnimo 4 caracteres. "),t())}function se(e,r){e&1&&(i(0,"div",30),a(1," Solo acepta caracteres alfab\xE9ticos. "),t())}function pe(e,r){if(e&1&&(i(0,"mat-hint",28),s(1,le,2,0,"div",29)(2,de,2,0,"div",29)(3,se,2,0,"div",29),t()),e&2){let n=u();o(),m("ngIf",n.f.phoneNumber.errors&&n.f.phoneNumber.errors.required),o(),m("ngIf",n.f.phoneNumber.errors&&n.f.phoneNumber.errors.minlength),o(),m("ngIf",n.f.phoneNumber.errors&&n.f.phoneNumber.errors.pattern)}}function fe(e,r){e&1&&(i(0,"div",30),a(1," Este campo es obligatorio. "),t())}function ce(e,r){e&1&&(i(0,"div",30),a(1," Debe tener m\xEDnimo 4 caracteres. "),t())}function ue(e,r){e&1&&(i(0,"div",30),a(1," Ingrese un email v\xE1lido. "),t())}function _e(e,r){if(e&1&&(i(0,"mat-hint",28),s(1,fe,2,0,"div",29)(2,ce,2,0,"div",29)(3,ue,2,0,"div",29),t()),e&2){let n=u();o(),m("ngIf",n.f.email.errors&&n.f.email.errors.required),o(),m("ngIf",n.f.email.errors&&n.f.email.errors.minlength),o(),m("ngIf",n.f.email.errors&&n.f.email.errors.pattern)}}function Ce(e,r){if(e&1&&(i(0,"mat-option",31),a(1),t()),e&2){let n=r.$implicit;m("value",n),o(),E(n.status)}}function Ee(e,r){e&1&&(i(0,"div",30),a(1," Este campo es obligatorio. "),t())}function ve(e,r){e&1&&(i(0,"div",30),a(1," Debe tener m\xEDnimo 4 caracteres. "),t())}function Re(e,r){e&1&&(i(0,"div",30),a(1," Solo acepta caracteres alfan\xFAmericos. "),t())}function Ie(e,r){if(e&1&&(i(0,"mat-hint",28),s(1,Ee,2,0,"div",29)(2,ve,2,0,"div",29)(3,Re,2,0,"div",29),t()),e&2){let n=u();o(),m("ngIf",n.f.address.errors&&n.f.address.errors.required),o(),m("ngIf",n.f.address.errors&&n.f.address.errors.minlength),o(),m("ngIf",n.f.address.errors&&n.f.address.errors.pattern)}}var Ve=(()=>{let r=class r{constructor(v){this._formBuilder=v,this.expressionsR=J,this.selectedIdentity="All",this.typesIdenity=[{status:_.CC},{status:_.CE},{status:_.Nit},{status:_.Pasaporte}],this.typesClient=[{status:f.CENTRO_COMERCIAL},{status:f.EMPRESA},{status:f.ESCUELA},{status:f.MICRO_EMPRESA},{status:f.OTRA},{status:f.PERSONA_NATURAL},{status:f.RESTAURANTE},{status:f.UNIDAD_RESIDENCIAL},{status:f.UNIVERSIDAD}],this.sectorIndustries=[{status:p.AGROINDUSTRIA},{status:p.COMERCIO},{status:p.COMUNICACIONES},{status:p.CONSTRUCCION},{status:p.FINANCIERO},{status:p.HOSPITALARIO},{status:p.INDUSTRIAL},{status:p.MINERO_ENERGETICO},{status:p.OTRO},{status:p.SERVICIOS},{status:p.TRANSPORTE},{status:p.TURISMO}],this.firstFormGroup=this._formBuilder.group({clientType:["",[l.required,l.minLength(4)]],identity:["",[l.required,l.pattern(this.expressionsR.nit),l.minLength(6)]],name:["",[l.required,l.pattern(this.expressionsR.name),l.minLength(4)]],phoneNumber:["",[l.required,l.pattern(this.expressionsR.phone),l.minLength(4)]],email:["",[l.required,l.pattern(this.expressionsR.email),l.minLength(4)]],industrySector:["",[l.required]],typeIdentity:["",[l.required]],city:["",[l.required]],address:["",[l.required,l.pattern(this.expressionsR.text)]]})}get f(){return this.firstFormGroup.controls}};r.\u0275fac=function(C){return new(C||r)(I(q))},r.\u0275cmp=R({type:r,selectors:[["app-register-client"]],standalone:!0,features:[S],decls:71,vars:10,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row","p-20"],[1,"col"],[1,"m-t-24",3,"formGroup"],["matStepLabel",""],[1,"row","justify-content-between"],[1,"col-lg-3"],[1,"mat-subtitle-2","f-w-600","d-block","m-b-16"],["appearance","outline",1,"w-100"],["placeholder","Nombre","matInput","","formControlName","name","required",""],["class","m-b-16 error-msg",4,"ngIf"],[1,"col-lg-3","m-b-16"],["appearance","outline",1,"w-100","hide-hint"],["placeholder","Tipo de Identificaci\xF3n","formControlName","typeIdentity","required","",3,"value"],["selected","",3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"w-100","hide-hint","m-b-16"],["placeholder","Tipo de Cliente"],["placeholder","No Identificaci\xF3n","matInput","","formControlName","identity","required",""],[1,"col-lg-4"],["placeholder","No Tel\xE9fono","matInput","","formControlName","name","required","","type","text"],["matInput","","placeholder","Correo electr\xF3nico","formControlName","email","required","","type","text"],["formControlName","industrySector","placeholder","Sector Industrial"],[1,"col-lg-4","m-b-16"],["placeholder","Direcci\xF3n","matInput","","formControlName","address","required","","type","text"],[1,"text-right"],["mat-flat-button","","color","primary"],[1,"m-b-16","error-msg"],["class","text-error",4,"ngIf"],[1,"text-error"],["selected","",3,"value"]],template:function(C,d){C&1&&(i(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),a(3,"Registro Cliente"),t()(),i(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"form",5),s(8,X,1,0,"ng-template",6),i(9,"div",7)(10,"div",8)(11,"mat-label",9),a(12,"Nombre "),t(),i(13,"mat-form-field",10),c(14,"input",11),s(15,te,4,3,"mat-hint",12),t()(),i(16,"div",13)(17,"mat-label",9),a(18,"Tipo de Identificaci\xF3n "),t(),i(19,"mat-form-field",14)(20,"mat-select",15),s(21,ie,2,2,"mat-option",16),t()()(),i(22,"div",8)(23,"mat-label",9),a(24,"Tipo de Cliente "),t(),i(25,"mat-form-field",17)(26,"mat-select",18),s(27,ne,2,2,"mat-option",16),t()()(),i(28,"div",8)(29,"mat-label",9),a(30,"Identificaci\xF3n "),t(),i(31,"mat-form-field",10),c(32,"input",19),s(33,me,4,3,"mat-hint",12),t()()(),i(34,"div",7)(35,"div",20)(36,"mat-label",9),a(37,"No. Tel\xE9fono "),t(),i(38,"mat-form-field",10),c(39,"input",21),s(40,pe,4,3,"mat-hint",12),t()(),i(41,"div",20)(42,"mat-label",9),a(43,"Correo electr\xF3nico "),t(),i(44,"mat-form-field",10),c(45,"input",22),s(46,_e,4,3,"mat-hint",12),t()(),i(47,"div",20)(48,"mat-label",9),a(49,"Sector Industrial "),t(),i(50,"mat-form-field",17)(51,"mat-select",23),s(52,Ce,2,2,"mat-option",16),t()()()(),i(53,"div",7)(54,"div",24)(55,"mat-label",9),a(56,"Ciudad "),t(),c(57,"app-modal-cities"),t(),i(58,"div",24)(59,"mat-label",9),a(60,"Bodega "),t(),c(61,"app-modal-warehouses"),t(),i(62,"div",20)(63,"mat-label",9),a(64,"Direcci\xF3n "),t(),i(65,"mat-form-field",10),c(66,"input",25),s(67,Ie,4,3,"mat-hint",12),t()()(),i(68,"div",26)(69,"button",27),a(70,"Guardar"),t()()()()()()()),C&2&&(o(7),m("formGroup",d.firstFormGroup),o(8),m("ngIf",d.f.name.touched&&d.f.name.invalid),o(5),m("value",d.selectedIdentity),o(),m("ngForOf",d.typesIdenity),o(6),m("ngForOf",d.typesClient),o(6),m("ngIf",d.f.identity.touched&&d.f.identity.invalid),o(7),m("ngIf",d.f.phoneNumber.touched&&d.f.phoneNumber.invalid),o(6),m("ngIf",d.f.email.touched&&d.f.email.invalid),o(6),m("ngForOf",d.sectorIndustries),o(15),m("ngIf",d.f.address.touched&&d.f.address.invalid))},dependencies:[N,h,g,z,T,O,A,w,V,B,x,H,j,W,$,k,P,D,b,M,y,L,G,F,U,K,Q]});let e=r;return e})();export{f as a,p as b,Ve as c};
