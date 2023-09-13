"use strict";(self.webpackChunkomanonline=self.webpackChunkomanonline||[]).push([[756],{6756:(M,w,i)=>{i.r(w),i.d(w,{default:()=>J});var e=i(6223),y=i(4692),h=i(2296),g=i(5683),x=i(617),b=i(4516),A=i(5940),k=i(6814);class T{static isEmptyInputValue(n){return null==n||0===n.length}static mustMatch(n,u){return p=>{const d=p.get(n),m=p.get(u);if(!d||!m||(m.hasError("mustMatch")&&(delete m.errors.mustMatch,m.updateValueAndValidity()),this.isEmptyInputValue(m.value)||d.value===m.value))return null;const _={mustMatch:!0};return m.setErrors(_),_}}}var Z=i(4408),P=i(4716),C=i(682),r=i(5879),I=i(4855);const a=["resetPasswordNgForm"];function f(t,n){if(1&t&&(r.TgZ(0,"omanonline-alert",41),r._uU(1),r.qZA()),2&t){const u=r.oxw();r.Q6J("appearance","outline")("showIcon",!1)("type",u.alert.type)("@shake","error"===u.alert.type),r.xp6(1),r.hij(" ",u.alert.message," ")}}function l(t,n){1&t&&r._UZ(0,"mat-icon",42),2&t&&r.Q6J("svgIcon","heroicons_solid:eye")}function s(t,n){1&t&&r._UZ(0,"mat-icon",42),2&t&&r.Q6J("svgIcon","heroicons_solid:eye-slash")}function o(t,n){1&t&&r._UZ(0,"mat-icon",42),2&t&&r.Q6J("svgIcon","heroicons_solid:eye")}function c(t,n){1&t&&r._UZ(0,"mat-icon",42),2&t&&r.Q6J("svgIcon","heroicons_solid:eye-slash")}function R(t,n){1&t&&(r.TgZ(0,"mat-error"),r._uU(1," Password confirmation is required "),r.qZA())}function U(t,n){1&t&&(r.TgZ(0,"mat-error"),r._uU(1," Passwords must match "),r.qZA())}function O(t,n){1&t&&(r.TgZ(0,"span"),r._uU(1," Reset your password "),r.qZA())}function S(t,n){1&t&&r._UZ(0,"mat-progress-spinner",43),2&t&&r.Q6J("diameter",24)("mode","indeterminate")}const E=function(){return["/sign-in"]},J=[{path:"",component:(()=>{var t;class n{constructor(p,d){this._authService=p,this._formBuilder=d,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",e.kI.required],passwordConfirm:["",e.kI.required]},{validators:T.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe((0,P.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(p=>{this.alert={type:"success",message:"Your password has been reset."}},p=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}}return(t=n).\u0275fac=function(p){return new(p||t)(r.Y36(I.e),r.Y36(e.QS))},t.\u0275cmp=r.Xpm({type:t,selectors:[["auth-reset-password"]],viewQuery:function(p,d){if(1&p&&r.Gf(a,5),2&p){let m;r.iGM(m=r.CRH())&&(d.resetPasswordNgForm=m.first)}},standalone:!0,features:[r.jDz],decls:66,vars:16,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"omanonline-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(p,d){if(1&p){const m=r.EpF();r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),r._UZ(4,"img",4),r.qZA(),r.TgZ(5,"div",5),r._uU(6,"Reset your password"),r.qZA(),r.TgZ(7,"div",6),r._uU(8,"Create a new password for your account"),r.qZA(),r.YNc(9,f,2,5,"omanonline-alert",7),r.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),r._uU(14,"Password"),r.qZA(),r._UZ(15,"input",11,12),r.TgZ(17,"button",13),r.NdJ("click",function(){r.CHM(m);const v=r.MAs(16);return r.KtG(v.type="password"===v.type?"text":"password")}),r.YNc(18,l,1,1,"mat-icon",14),r.YNc(19,s,1,1,"mat-icon",14),r.qZA(),r.TgZ(20,"mat-error"),r._uU(21," Password is required "),r.qZA()(),r.TgZ(22,"mat-form-field",10)(23,"mat-label"),r._uU(24,"Password (Confirm)"),r.qZA(),r._UZ(25,"input",15,16),r.TgZ(27,"button",13),r.NdJ("click",function(){r.CHM(m);const v=r.MAs(26);return r.KtG(v.type="password"===v.type?"text":"password")}),r.YNc(28,o,1,1,"mat-icon",14),r.YNc(29,c,1,1,"mat-icon",14),r.qZA(),r.YNc(30,R,2,0,"mat-error",17),r.YNc(31,U,2,0,"mat-error",17),r.qZA(),r.TgZ(32,"button",18),r.NdJ("click",function(){return d.resetPassword()}),r.YNc(33,O,2,0,"span",17),r.YNc(34,S,1,2,"mat-progress-spinner",19),r.qZA(),r.TgZ(35,"div",20)(36,"span"),r._uU(37,"Return to"),r.qZA(),r.TgZ(38,"a",21),r._uU(39,"sign in "),r.qZA()()()()(),r.TgZ(40,"div",22),r.O4$(),r.TgZ(41,"svg",23)(42,"g",24),r._UZ(43,"circle",25)(44,"circle",26),r.qZA()(),r.TgZ(45,"svg",27)(46,"defs")(47,"pattern",28),r._UZ(48,"rect",29),r.qZA()(),r._UZ(49,"rect",30),r.qZA(),r.kcU(),r.TgZ(50,"div",31)(51,"div",32)(52,"div"),r._uU(53,"Welcome to"),r.qZA(),r.TgZ(54,"div"),r._uU(55,"our community"),r.qZA()(),r.TgZ(56,"div",33),r._uU(57," OmanOnline helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),r.qZA(),r.TgZ(58,"div",34)(59,"div",35),r._UZ(60,"img",36)(61,"img",37)(62,"img",38)(63,"img",39),r.qZA(),r.TgZ(64,"div",40),r._uU(65,"More than 17k people joined us, it's your turn"),r.qZA()()()()()}if(2&p){const m=r.MAs(16),_=r.MAs(26);r.xp6(9),r.Q6J("ngIf",d.showAlert),r.xp6(1),r.Q6J("formGroup",d.resetPasswordForm),r.xp6(5),r.Q6J("formControlName","password"),r.xp6(3),r.Q6J("ngIf","password"===m.type),r.xp6(1),r.Q6J("ngIf","text"===m.type),r.xp6(6),r.Q6J("formControlName","passwordConfirm"),r.xp6(3),r.Q6J("ngIf","password"===_.type),r.xp6(1),r.Q6J("ngIf","text"===_.type),r.xp6(1),r.Q6J("ngIf",d.resetPasswordForm.get("passwordConfirm").hasError("required")),r.xp6(1),r.Q6J("ngIf",d.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),r.xp6(1),r.Q6J("color","primary")("disabled",d.resetPasswordForm.disabled),r.xp6(1),r.Q6J("ngIf",!d.resetPasswordForm.disabled),r.xp6(1),r.Q6J("ngIf",d.resetPasswordForm.disabled),r.xp6(4),r.Q6J("routerLink",r.DdM(15,E))}},dependencies:[k.O5,y.p,e.u5,e._Y,e.Fj,e.JJ,e.JL,e.UX,e.sg,e.u,g.lN,g.KE,g.hX,g.TO,g.R9,b.c,b.Nt,h.ot,h.lW,h.RK,x.Ps,x.Hw,A.Cq,A.Ou,Z.rH],encapsulation:2,data:{animation:C.I}}),n})()}]},5940:(M,w,i)=>{i.d(w,{Cq:()=>I,Ou:()=>C});var e=i(5879),y=i(3680),h=i(2495),g=i(6814);const x=["determinateSpinner"];function b(a,f){if(1&a&&(e.O4$(),e.TgZ(0,"svg",11),e._UZ(1,"circle",12),e.qZA()),2&a){const l=e.oxw();e.uIk("viewBox",l._viewBox()),e.xp6(1),e.Udp("stroke-dasharray",l._strokeCircumference(),"px")("stroke-dashoffset",l._strokeCircumference()/2,"px")("stroke-width",l._circleStrokeWidth(),"%"),e.uIk("r",l._circleRadius())}}const A=(0,y.pj)(class{constructor(a){this._elementRef=a}},"primary"),k=new e.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function T(){return{diameter:Z}}}),Z=100;let C=(()=>{var a;class f extends A{constructor(s,o,c){super(s),this.mode="mat-spinner"===this._elementRef.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",this._value=0,this._diameter=Z,this._noopAnimations="NoopAnimations"===o&&!!c&&!c._forceAnimations,c&&(c.color&&(this.color=this.defaultColor=c.color),c.diameter&&(this.diameter=c.diameter),c.strokeWidth&&(this.strokeWidth=c.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(s){this._value=Math.max(0,Math.min(100,(0,h.su)(s)))}get diameter(){return this._diameter}set diameter(s){this._diameter=(0,h.su)(s)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(s){this._strokeWidth=(0,h.su)(s)}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const s=2*this._circleRadius()+this.strokeWidth;return`0 0 ${s} ${s}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}}return(a=f).\u0275fac=function(s){return new(s||a)(e.Y36(e.SBq),e.Y36(e.QbO,8),e.Y36(k))},a.\u0275cmp=e.Xpm({type:a,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(s,o){if(1&s&&e.Gf(x,5),2&s){let c;e.iGM(c=e.CRH())&&(o._determinateCircle=c.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:16,hostBindings:function(s,o){2&s&&(e.uIk("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===o.mode?o.value:null)("mode",o.mode),e.Udp("width",o.diameter,"px")("height",o.diameter,"px")("--mdc-circular-progress-size",o.diameter+"px")("--mdc-circular-progress-active-indicator-width",o.diameter+"px"),e.ekj("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===o.mode))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[e.qOj],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(s,o){if(1&s&&(e.YNc(0,b,2,8,"ng-template",null,0,e.W1O),e.TgZ(2,"div",1,2),e.O4$(),e.TgZ(4,"svg",3),e._UZ(5,"circle",4),e.qZA()(),e.kcU(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7),e.GkF(9,8),e.qZA(),e.TgZ(10,"div",9),e.GkF(11,8),e.qZA(),e.TgZ(12,"div",10),e.GkF(13,8),e.qZA()()()),2&s){const c=e.MAs(1);e.xp6(4),e.uIk("viewBox",o._viewBox()),e.xp6(1),e.Udp("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),e.uIk("r",o._circleRadius()),e.xp6(4),e.Q6J("ngTemplateOutlet",c),e.xp6(2),e.Q6J("ngTemplateOutlet",c),e.xp6(2),e.Q6J("ngTemplateOutlet",c)}},dependencies:[g.tP],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{--mdc-circular-progress-active-indicator-width:4px;--mdc-circular-progress-size:48px}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0}),f})(),I=(()=>{var a;class f{}return(a=f).\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,y.BQ]}),f})()}}]);