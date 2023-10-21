"use strict";(self.webpackChunkomanonline=self.webpackChunkomanonline||[]).push([[516],{6263:(Fe,G,p)=>{p.d(G,{Ky:()=>B,Lq:()=>C});var r=p(2831),M=p(5879),x=p(2495),_=p(6232),w=p(8645);const A=(0,r.i$)({passive:!0});let C=(()=>{var g;class D{constructor(c,d){this._platform=c,this._ngZone=d,this._monitoredElements=new Map}monitor(c){if(!this._platform.isBrowser)return _.E;const d=(0,x.fI)(c),f=this._monitoredElements.get(d);if(f)return f.subject;const h=new w.x,m="cdk-text-field-autofilled",a=u=>{"cdk-text-field-autofill-start"!==u.animationName||d.classList.contains(m)?"cdk-text-field-autofill-end"===u.animationName&&d.classList.contains(m)&&(d.classList.remove(m),this._ngZone.run(()=>h.next({target:u.target,isAutofilled:!1}))):(d.classList.add(m),this._ngZone.run(()=>h.next({target:u.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{d.addEventListener("animationstart",a,A),d.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(d,{subject:h,unlisten:()=>{d.removeEventListener("animationstart",a,A)}}),h}stopMonitoring(c){const d=(0,x.fI)(c),f=this._monitoredElements.get(d);f&&(f.unlisten(),f.subject.complete(),d.classList.remove("cdk-text-field-autofill-monitored"),d.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(d))}ngOnDestroy(){this._monitoredElements.forEach((c,d)=>this.stopMonitoring(d))}}return(g=D).\u0275fac=function(c){return new(c||g)(M.LFG(r.t4),M.LFG(M.R0b))},g.\u0275prov=M.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),D})(),B=(()=>{var g;class D{}return(g=D).\u0275fac=function(c){return new(c||g)},g.\u0275mod=M.oAB({type:g}),g.\u0275inj=M.cJS({}),D})()},6223:(Fe,G,p)=>{p.d(G,{Cf:()=>h,F:()=>re,JU:()=>v,Zs:()=>Oe,a5:()=>b,kI:()=>u,sg:()=>oe});var r=p(5879),x=(p(6814),p(7715)),_=p(9315),w=p(7398);const v=new r.OlP("NgValueAccessor");function d(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function f(n){return null!=n&&"number"==typeof n.length}const h=new r.OlP("NgValidators"),m=new r.OlP("NgAsyncValidators"),a=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class u{static min(e){return function N(n){return e=>{if(d(e.value)||d(n))return null;const i=parseFloat(e.value);return!isNaN(i)&&i<n?{min:{min:n,actual:e.value}}:null}}(e)}static max(e){return function Y(n){return e=>{if(d(e.value)||d(n))return null;const i=parseFloat(e.value);return!isNaN(i)&&i>n?{max:{max:n,actual:e.value}}:null}}(e)}static required(e){return q(e)}static requiredTrue(e){return z(e)}static email(e){return function $(n){return d(n.value)||a.test(n.value)?null:{email:!0}}(e)}static minLength(e){return function K(n){return e=>d(e.value)||!f(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function Z(n){return e=>f(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return function H(n){if(!n)return F;let e,i;return"string"==typeof n?(i="","^"!==n.charAt(0)&&(i+="^"),i+=n,"$"!==n.charAt(n.length-1)&&(i+="$"),e=new RegExp(i)):(i=n.toString(),e=n),t=>{if(d(t.value))return null;const s=t.value;return e.test(s)?null:{pattern:{requiredPattern:i,actualValue:s}}}}(e)}static nullValidator(e){return null}static compose(e){return Ne(e)}static composeAsync(e){return Ie(e)}}function q(n){return d(n.value)?{required:!0}:null}function z(n){return!0===n.value?null:{required:!0}}function F(n){return null}function R(n){return null!=n}function P(n){return(0,r.QGY)(n)?(0,x.D)(n):n}function S(n){let e={};return n.forEach(i=>{e=null!=i?{...e,...i}:e}),0===Object.keys(e).length?null:e}function Se(n,e){return e.map(i=>i(n))}function xe(n){return n.map(e=>function vt(n){return!n.validate}(e)?e:i=>e.validate(i))}function Ne(n){if(!n)return null;const e=n.filter(R);return 0==e.length?null:function(i){return S(Se(i,e))}}function ue(n){return null!=n?Ne(xe(n)):null}function Ie(n){if(!n)return null;const e=n.filter(R);return 0==e.length?null:function(i){const t=Se(i,e).map(P);return(0,_.D)(t).pipe((0,w.U)(S))}}function ce(n){return null!=n?Ie(xe(n)):null}function Be(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Pe(n){return n._rawValidators}function Te(n){return n._rawAsyncValidators}function de(n){return n?Array.isArray(n)?n:[n]:[]}function J(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ge(n,e){const i=de(e);return de(n).forEach(s=>{J(i,s)||i.push(s)}),i}function He(n,e){return de(e).filter(i=>!J(n,i))}class Re{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ue(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ce(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return!!this.control&&this.control.hasError(e,i)}getError(e,i){return this.control?this.control.getError(e,i):null}}class y extends Re{get formDirective(){return null}get path(){return null}}class b extends Re{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}const k="VALID",X="INVALID",T="PENDING",L="DISABLED";function _e(n){return(ee(n)?n.validators:n)||null}function pe(n,e){return(ee(e)?e.asyncValidators:n)||null}function ee(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class We{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===k}get invalid(){return this.status===X}get pending(){return this.status==T}get disabled(){return this.status===L}get enabled(){return this.status!==L}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(He(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}hasValidator(e){return J(this._rawValidators,e)}hasAsyncValidator(e){return J(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=T,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const i=this._parentMarkedDirty(e.onlySelf);this.status=L,this.errors=null,this._forEachChild(t=>{t.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:i}),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){const i=this._parentMarkedDirty(e.onlySelf);this.status=k,this._forEachChild(t=>{t.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:i}),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===T)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?L:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=T,this._hasOwnPendingAsyncValidator=!0;const i=P(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(!1!==i.emitEvent)}get(e){let i=e;return null==i||(Array.isArray(i)||(i=i.split(".")),0===i.length)?null:i.reduce((t,s)=>t&&t._find(s),this)}getError(e,i){const t=i?this.get(i):this;return t&&t.errors?t.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?L:this.errors?X:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(T)?T:this._anyControlsHaveStatus(X)?X:k}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ee(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function Dt(n){return Array.isArray(n)?ue(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function At(n){return Array.isArray(n)?ce(n):n||null}(this._rawAsyncValidators)}}class me extends We{constructor(e,i,t){super(_e(i),pe(t,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,t={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){(function je(n,e,i){n._forEachChild((t,s)=>{if(void 0===i[s])throw new r.vHH(1002,"")})})(this,0,e),Object.keys(e).forEach(t=>{(function Ue(n,e,i){const t=n.controls;if(!(e?Object.keys(t):t).length)throw new r.vHH(1e3,"");if(!t[i])throw new r.vHH(1001,"")})(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){null!=e&&(Object.keys(e).forEach(t=>{const s=this.controls[t];s&&s.patchValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((t,s)=>{t.reset(e[s],{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,t)=>(e[t]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,t)=>!!t._syncPendingControls()||i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{const t=this.controls[i];t&&e(t,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[i,t]of Object.entries(this.controls))if(this.contains(i)&&e(t))return!0;return!1}_reduceValue(){return this._reduceChildren({},(i,t,s)=>((t.enabled||this.disabled)&&(i[s]=t.value),i))}_reduceChildren(e,i){let t=e;return this._forEachChild((s,o)=>{t=i(t,s,o)}),t}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}const U=new r.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>ge}),ge="always";function j(n,e,i=ge){ve(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===i)&&e.valueAccessor.setDisabledState?.(n.disabled),function wt(n,e){e.valueAccessor.registerOnChange(i=>{n._pendingValue=i,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Ye(n,e)})}(n,e),function St(n,e){const i=(t,s)=>{e.valueAccessor.writeValue(t),s&&e.viewToModelUpdate(t)};n.registerOnChange(i),e._registerOnDestroy(()=>{n._unregisterOnChange(i)})}(n,e),function Ft(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Ye(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Ot(n,e){if(e.valueAccessor.setDisabledState){const i=t=>{e.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(i),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(i)})}}(n,e)}function ne(n,e,i=!0){const t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),se(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ie(n,e){n.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function ve(n,e){const i=Pe(n);null!==e.validator?n.setValidators(Be(i,e.validator)):"function"==typeof i&&n.setValidators([i]);const t=Te(n);null!==e.asyncValidator?n.setAsyncValidators(Be(t,e.asyncValidator)):"function"==typeof t&&n.setAsyncValidators([t]);const s=()=>n.updateValueAndValidity();ie(e._rawValidators,s),ie(e._rawAsyncValidators,s)}function se(n,e){let i=!1;if(null!==n){if(null!==e.validator){const s=Pe(n);if(Array.isArray(s)&&s.length>0){const o=s.filter(l=>l!==e.validator);o.length!==s.length&&(i=!0,n.setValidators(o))}}if(null!==e.asyncValidator){const s=Te(n);if(Array.isArray(s)&&s.length>0){const o=s.filter(l=>l!==e.asyncValidator);o.length!==s.length&&(i=!0,n.setAsyncValidators(o))}}}const t=()=>{};return ie(e._rawValidators,t),ie(e._rawAsyncValidators,t),i}function Ye(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function qe(n,e){ve(n,e)}function ze(n,e){n._syncPendingControls(),e.forEach(i=>{const t=i.control;"submit"===t.updateOn&&t._pendingChange&&(i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}const Pt={provide:y,useExisting:(0,r.Gpc)(()=>re)},W=(()=>Promise.resolve())();let re=(()=>{var n;class e extends y{constructor(t,s,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new r.vpe,this.form=new me({},ue(t),ce(s))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){W.then(()=>{const s=this._findContainer(t.path);t.control=s.registerControl(t.name,t.control),j(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){W.then(()=>{const s=this._findContainer(t.path);s&&s.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){W.then(()=>{const s=this._findContainer(t.path),o=new me({});qe(o,t),s.registerControl(t.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){W.then(()=>{const s=this._findContainer(t.path);s&&s.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,s){W.then(()=>{this.form.get(t.path).setValue(s)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,ze(this.form,this._directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return(n=e).\u0275fac=function(t){return new(t||n)(r.Y36(h,10),r.Y36(m,10),r.Y36(U,8))},n.\u0275dir=r.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,s){1&t&&r.NdJ("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([Pt]),r.qOj]}),e})();function $e(n,e){const i=n.indexOf(e);i>-1&&n.splice(i,1)}function Ke(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const Ze=class extends We{constructor(e=null,i,t){super(_e(i),pe(t,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(i)&&(i.nonNullable||i.initialValueIsDefault)&&(this.defaultValue=Ke(e)?e.value:e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==i.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==i.emitViewToModelChange)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){$e(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){$e(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){Ke(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}},qt={provide:y,useExisting:(0,r.Gpc)(()=>oe)};let oe=(()=>{var n;class e extends y{constructor(t,s,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.vpe,this._setValidators(t),this._setAsyncValidators(s)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(se(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const s=this.form.get(t.path);return j(s,t,this.callSetDisabledState),s.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),s}getControl(t){return this.form.get(t.path)}removeControl(t){ne(t.control||null,t,!1),function Bt(n,e){const i=n.indexOf(e);i>-1&&n.splice(i,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,s){this.form.get(t.path).setValue(s)}onSubmit(t){return this.submitted=!0,ze(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const s=t.control,o=this.form.get(t.path);s!==o&&(ne(s||null,t),(n=>n instanceof Ze)(o)&&(j(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const s=this.form.get(t.path);qe(s,t),s.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const s=this.form.get(t.path);s&&function xt(n,e){return se(n,e)}(s,t)&&s.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ve(this.form,this),this._oldForm&&se(this._oldForm,this)}_checkFormPresent(){}}return(n=e).\u0275fac=function(t){return new(t||n)(r.Y36(h,10),r.Y36(m,10),r.Y36(U,8))},n.\u0275dir=r.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,s){1&t&&r.NdJ("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([qt]),r.qOj,r.TTD]}),e})(),I=(()=>{var n;class e{constructor(){this._validator=F}ngOnChanges(t){if(this.inputName in t){const s=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(s),this._validator=this._enabled?this.createValidator(s):F,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return null!=t}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275dir=r.lG2({type:n,features:[r.TTD]}),e})();const rn={provide:h,useExisting:(0,r.Gpc)(()=>be),multi:!0},on={provide:h,useExisting:(0,r.Gpc)(()=>Oe),multi:!0};let be=(()=>{var n;class e extends I{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=r.VuI,this.createValidator=t=>q}enabled(t){return t}}return(n=e).\u0275fac=function(){let i;return function(s){return(i||(i=r.n5z(n)))(s||n)}}(),n.\u0275dir=r.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,s){2&t&&r.uIk("required",s._enabled?"":null)},inputs:{required:"required"},features:[r._Bn([rn]),r.qOj]}),e})(),Oe=(()=>{var n;class e extends be{constructor(){super(...arguments),this.createValidator=t=>z}}return(n=e).\u0275fac=function(){let i;return function(s){return(i||(i=r.n5z(n)))(s||n)}}(),n.\u0275dir=r.lG2({type:n,selectors:[["input","type","checkbox","required","","formControlName",""],["input","type","checkbox","required","","formControl",""],["input","type","checkbox","required","","ngModel",""]],hostVars:1,hostBindings:function(t,s){2&t&&r.uIk("required",s._enabled?"":null)},features:[r._Bn([on]),r.qOj]}),e})()},4516:(Fe,G,p)=>{p.d(G,{Nt:()=>c,c:()=>d});var r=p(2495),M=p(2831),x=p(6263),_=p(5879),w=p(6223),A=p(3680),C=p(5683),v=p(8645);const B=new _.OlP("MAT_INPUT_VALUE_ACCESSOR"),g=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let D=0;const E=(0,A.FD)(class{constructor(f,h,m,a){this._defaultErrorStateMatcher=f,this._parentForm=h,this._parentFormGroup=m,this.ngControl=a,this.stateChanges=new v.x}});let c=(()=>{var f;class h extends E{get disabled(){return this._disabled}set disabled(a){this._disabled=(0,r.Ig)(a),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(a){this._id=a||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(w.kI.required)??!1}set required(a){this._required=(0,r.Ig)(a)}get type(){return this._type}set type(a){this._type=a||"text",this._validateType(),!this._isTextarea&&(0,M.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(a){a!==this.value&&(this._inputValueAccessor.value=a,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(a){this._readonly=(0,r.Ig)(a)}constructor(a,u,N,Y,q,z,$,K,Z,H){super(z,Y,q,N),this._elementRef=a,this._platform=u,this._autofillMonitor=K,this._formField=H,this._uid="mat-input-"+D++,this.focused=!1,this.stateChanges=new v.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(P=>(0,M.qK)().has(P)),this._iOSKeyupListener=P=>{const S=P.target;!S.value&&0===S.selectionStart&&0===S.selectionEnd&&(S.setSelectionRange(1,1),S.setSelectionRange(0,0))};const F=this._elementRef.nativeElement,R=F.nodeName.toLowerCase();this._inputValueAccessor=$||F,this._previousNativeValue=this.value,this.id=this.id,u.IOS&&Z.runOutsideAngular(()=>{a.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===R,this._isTextarea="textarea"===R,this._isInFormField=!!H,this._isNativeSelect&&(this.controlType=F.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(a=>{this.autofilled=a.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(a){this._elementRef.nativeElement.focus(a)}_focusChanged(a){a!==this.focused&&(this.focused=a,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const a=this._elementRef.nativeElement.value;this._previousNativeValue!==a&&(this._previousNativeValue=a,this.stateChanges.next())}_dirtyCheckPlaceholder(){const a=this._getPlaceholder();if(a!==this._previousPlaceholder){const u=this._elementRef.nativeElement;this._previousPlaceholder=a,a?u.setAttribute("placeholder",a):u.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){g.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let a=this._elementRef.nativeElement.validity;return a&&a.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const a=this._elementRef.nativeElement,u=a.options[0];return this.focused||a.multiple||!this.empty||!!(a.selectedIndex>-1&&u&&u.label)}return this.focused||!this.empty}setDescribedByIds(a){a.length?this._elementRef.nativeElement.setAttribute("aria-describedby",a.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const a=this._elementRef.nativeElement;return this._isNativeSelect&&(a.multiple||a.size>1)}}return(f=h).\u0275fac=function(a){return new(a||f)(_.Y36(_.SBq),_.Y36(M.t4),_.Y36(w.a5,10),_.Y36(w.F,8),_.Y36(w.sg,8),_.Y36(A.rD),_.Y36(B,10),_.Y36(x.Lq),_.Y36(_.R0b),_.Y36(C.G_,8))},f.\u0275dir=_.lG2({type:f,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(a,u){1&a&&_.NdJ("focus",function(){return u._focusChanged(!0)})("blur",function(){return u._focusChanged(!1)})("input",function(){return u._onInput()}),2&a&&(_.Ikx("id",u.id)("disabled",u.disabled)("required",u.required),_.uIk("name",u.name||null)("readonly",u.readonly&&!u._isNativeSelect||null)("aria-invalid",u.empty&&u.required?null:u.errorState)("aria-required",u.required)("id",u.id),_.ekj("mat-input-server",u._isServer)("mat-mdc-form-field-textarea-control",u._isInFormField&&u._isTextarea)("mat-mdc-form-field-input-control",u._isInFormField)("mdc-text-field__input",u._isInFormField)("mat-mdc-native-select-inline",u._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[_._Bn([{provide:C.Eo,useExisting:f}]),_.qOj,_.TTD]}),h})(),d=(()=>{var f;class h{}return(f=h).\u0275fac=function(a){return new(a||f)},f.\u0275mod=_.oAB({type:f}),f.\u0275inj=_.cJS({imports:[A.BQ,C.lN,C.lN,x.Ky,A.BQ]}),h})()}}]);