"use strict";(self.webpackChunkomanonline=self.webpackChunkomanonline||[]).push([[183],{3183:(Ae,A,r)=>{r.r(A),r.d(A,{default:()=>xe});var D=r(4408),E=r(5861),O=r(6263),u=r(6814),f=r(2296),q=r(6385),L=r(5683),T=r(617),P=r(4516),g=r(7988),v=r(4104),k=r(2596),J=r(3811),e=r(5879);const F=new e.OlP("WindowToken",typeof window<"u"&&window.document?{providedIn:"root",factory:()=>window}:{providedIn:"root",factory:()=>{}});var p=r(8645);let Q=(()=>{class i{constructor(t,n,o){this.ngZone=t,this.document=n,this.window=o,this.copySubject=new p.x,this.copyResponse$=this.copySubject.asObservable(),this.config={}}configure(t){this.config=t}copy(t){if(!this.isSupported||!t)return this.pushCopyResponse({isSuccess:!1,content:t});const n=this.copyFromContent(t);return this.pushCopyResponse(n?{content:t,isSuccess:n}:{isSuccess:!1,content:t})}get isSupported(){return!!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(t){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){if(t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return!0}throw new Error("Target should be input or textarea")}copyFromInputElement(t,n=!0){try{this.selectTarget(t);const o=this.copyText();return this.clearSelection(n?t:void 0,this.window),o&&this.isCopySuccessInIE11()}catch{return!1}}isCopySuccessInIE11(){const t=this.window.clipboardData;return!(t&&t.getData&&!t.getData("Text"))}copyFromContent(t,n=this.document.body){if(this.tempTextArea&&!n.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement||void 0),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{n.appendChild(this.tempTextArea)}catch{throw new Error("Container should be a Dom element")}}this.tempTextArea.value=t;const o=this.copyFromInputElement(this.tempTextArea,!1);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement||void 0),o}destroy(t=this.document.body){this.tempTextArea&&(t.removeChild(this.tempTextArea),this.tempTextArea=void 0)}selectTarget(t){return t.select(),t.setSelectionRange(0,t.value.length),t.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(t,n){t&&t.focus(),n.getSelection()?.removeAllRanges()}createTempTextArea(t,n){const o="rtl"===t.documentElement.getAttribute("dir");let a;return a=t.createElement("textarea"),a.style.fontSize="12pt",a.style.border="0",a.style.padding="0",a.style.margin="0",a.style.position="absolute",a.style[o?"right":"left"]="-9999px",a.style.top=(n.pageYOffset||t.documentElement.scrollTop)+"px",a.setAttribute("readonly",""),a}pushCopyResponse(t){this.copySubject.observers.length>0&&this.ngZone.run(()=>{this.copySubject.next(t)})}pushCopyReponse(t){this.pushCopyResponse(t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e.R0b),e.LFG(u.K0),e.LFG(F,8))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez]}),i})();var d=r(6825),h=r(8484),j=r(2831),z=r(8180),Y=r(9773),y=r(4300),x=r(1088),_=r(3651),S=r(3680);function G(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",2)(1,"button",3),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.action())}),e._uU(2),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.hij(" ",t.data.action," ")}}const V=["label"];function W(i,c){}const H=Math.pow(2,31)-1;class Z{constructor(c,t){this._overlayRef=t,this._afterDismissed=new p.x,this._afterOpened=new p.x,this._onAction=new p.x,this._dismissedByAction=!1,this.containerInstance=c,c._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(c){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(c,H))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}const C=new e.OlP("MatSnackBarData");class b{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}let K=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275dir=e.lG2({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),X=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275dir=e.lG2({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),$=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275dir=e.lG2({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),ee=(()=>{class i{constructor(t,n){this.snackBarRef=t,this.data=n}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(Z),e.Y36(C))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions","",4,"ngIf"],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e._uU(1),e.qZA(),e.YNc(2,G,3,1,"div",1)),2&n&&(e.xp6(1),e.hij(" ",o.data.message,"\n"),e.xp6(1),e.Q6J("ngIf",o.hasAction))},dependencies:[u.O5,f.lW,K,X,$],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}return i})();const te={snackBarState:(0,d.X$)("state",[(0,d.SB)("void, hidden",(0,d.oB)({transform:"scale(0.8)",opacity:0})),(0,d.SB)("visible",(0,d.oB)({transform:"scale(1)",opacity:1})),(0,d.eR)("* => visible",(0,d.jt)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,d.eR)("* => void, * => hidden",(0,d.jt)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,d.oB)({opacity:0})))])};let ne=0,ie=(()=>{class i extends h.en{constructor(t,n,o,a,s){super(),this._ngZone=t,this._elementRef=n,this._changeDetectorRef=o,this._platform=a,this.snackBarConfig=s,this._document=(0,e.f3M)(u.K0),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new p.x,this._onExit=new p.x,this._onEnter=new p.x,this._animationState="void",this._liveElementId="mat-snack-bar-container-live-"+ne++,this.attachDomPortal=l=>{this._assertNotAttached();const m=this._portalOutlet.attachDomPortal(l);return this._afterPortalAttached(),m},this._live="assertive"!==s.politeness||s.announcementMessage?"off"===s.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();const n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();const n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}onAnimationEnd(t){const{fromState:n,toState:o}=t;if(("void"===o&&"void"!==n||"hidden"===o)&&this._completeExit(),"visible"===o){const a=this._onEnter;this._ngZone.run(()=>{a.next(),a.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,z.q)(1)).subscribe(()=>{this._ngZone.run(()=>{this._onExit.next(),this._onExit.complete()})})}_afterPortalAttached(){const t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(o=>t.classList.add(o)):t.classList.add(n)),this._exposeToModals()}_exposeToModals(){const t=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<n.length;o++){const a=n[o],s=a.getAttribute("aria-owns");this._trackedModals.add(a),s?-1===s.indexOf(t)&&a.setAttribute("aria-owns",s+" "+t):a.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{const n=t.getAttribute("aria-owns");if(n){const o=n.replace(this._liveElementId,"").trim();o.length>0?t.setAttribute("aria-owns",o):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),n=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&n){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(o=document.activeElement),t.removeAttribute("aria-hidden"),n.appendChild(t),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(j.t4),e.Y36(b))};static#t=this.\u0275dir=e.lG2({type:i,viewQuery:function(n,o){if(1&n&&e.Gf(h.Pl,7),2&n){let a;e.iGM(a=e.CRH())&&(o._portalOutlet=a.first)}},features:[e.qOj]})}return i})(),oe=(()=>{class i extends ie{_afterPortalAttached(){super._afterPortalAttached();const t=this._label.nativeElement,n="mdc-snackbar__label";t.classList.toggle(n,!t.querySelector(`.${n}`))}static#e=this.\u0275fac=function(){let t;return function(o){return(t||(t=e.n5z(i)))(o||i)}}();static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,o){if(1&n&&e.Gf(V,7),2&n){let a;e.iGM(a=e.CRH())&&(o._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(n,o){1&n&&e.WFA("@state.done",function(s){return o.onAnimationEnd(s)}),2&n&&e.d8E("@state",o._animationState)},features:[e.qOj],decls:6,vars:3,consts:[[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["label",""],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3),e.YNc(4,W,0,0,"ng-template",4),e.qZA(),e._UZ(5,"div"),e.qZA()()),2&n&&(e.xp6(5),e.uIk("aria-live",o._live)("role",o._role)("id",o._liveElementId))},dependencies:[h.Pl],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;--mdc-snackbar-container-shape:4px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-mdc-button-persistent-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{background-color:currentColor;opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[te.snackBarState]}})}return i})(),U=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[_.U8,h.eL,u.ez,f.ot,S.BQ,S.BQ]})}return i})();const I=new e.OlP("mat-snack-bar-default-options",{providedIn:"root",factory:function ae(){return new b}});let se=(()=>{class i{get _openedSnackBarRef(){const t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(t,n,o,a,s,l){this._overlay=t,this._live=n,this._injector=o,this._breakpointObserver=a,this._parentSnackBar=s,this._defaultConfig=l,this._snackBarRefAtThisLevel=null}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n="",o){const a={...this._defaultConfig,...o};return a.data={message:t,action:n},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){const a=e.zs3.create({parent:n&&n.viewContainerRef&&n.viewContainerRef.injector||this._injector,providers:[{provide:b,useValue:n}]}),s=new h.C5(this.snackBarContainerComponent,n.viewContainerRef,a),l=t.attach(s);return l.instance.snackBarConfig=n,l.instance}_attach(t,n){const o={...new b,...this._defaultConfig,...n},a=this._createOverlay(o),s=this._attachSnackBarContainer(a,o),l=new Z(s,a);if(t instanceof e.Rgc){const m=new h.UE(t,null,{$implicit:o.data,snackBarRef:l});l.instance=s.attachTemplatePortal(m)}else{const m=this._createInjector(o,l),R=new h.C5(t,void 0,m),Ze=s.attachComponentPortal(R);l.instance=Ze.instance}return this._breakpointObserver.observe(x.u3.HandsetPortrait).pipe((0,Y.R)(a.detachments())).subscribe(m=>{a.overlayElement.classList.toggle(this.handsetCssClass,m.matches)}),o.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(l,o),this._openedSnackBarRef=l,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration))}_createOverlay(t){const n=new _.X_;n.direction=t.direction;let o=this._overlay.position().global();const a="rtl"===t.direction,s="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!a||"end"===t.horizontalPosition&&a,l=!s&&"center"!==t.horizontalPosition;return s?o.left("0"):l?o.right("0"):o.centerHorizontally(),"top"===t.verticalPosition?o.top("0"):o.bottom("0"),n.positionStrategy=o,this._overlay.create(n)}_createInjector(t,n){return e.zs3.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:Z,useValue:n},{provide:C,useValue:t.data}]})}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(_.aV),e.LFG(y.Kd),e.LFG(e.zs3),e.LFG(x.Yg),e.LFG(i,12),e.LFG(I))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac})}return i})(),re=(()=>{class i extends se{constructor(t,n,o,a,s,l){super(t,n,o,a,s,l),this.simpleSnackBarComponent=ee,this.snackBarContainerComponent=oe,this.handsetCssClass="mat-mdc-snack-bar-handset"}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(_.aV),e.LFG(y.Kd),e.LFG(e.zs3),e.LFG(x.Yg),e.LFG(i,12),e.LFG(I))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:U})}return i})();var w=r(9025),B=r(9513),M=r(6593);function ce(i,c){1&i&&(e.TgZ(0,"span",5),e._UZ(1,"mat-spinner"),e.qZA())}function le(i,c){1&i&&e._UZ(0,"mat-icon",26)}function de(i,c){1&i&&e._UZ(0,"mat-icon",27)}function me(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",6)(1,"div"),e._UZ(2,"img",7),e.qZA(),e.TgZ(3,"div",8)(4,"div",9),e._UZ(5,"img",10),e.qZA(),e.TgZ(6,"div",11)(7,"div",12),e._uU(8),e.qZA(),e.TgZ(9,"div",13),e._uU(10),e.qZA()(),e.TgZ(11,"div",14)(12,"div",15)(13,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.Save())}),e.YNc(14,le,1,0,"mat-icon",17),e.YNc(15,de,1,0,"mat-icon",18),e.qZA(),e.TgZ(16,"button",19),e._UZ(17,"mat-icon",20),e.TgZ(18,"mat-menu",null,21)(20,"button",22),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.shareOnWhatsApp())}),e.TgZ(21,"mat-icon"),e._uU(22,"chat"),e.qZA(),e._uU(23," Whatsapp "),e.qZA(),e.TgZ(24,"button",22),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.copyToClipboard())}),e.TgZ(25,"mat-icon"),e._uU(26,"link"),e.qZA(),e._uU(27," Copy Link "),e.qZA()()(),e.TgZ(28,"button",23),e._UZ(29,"mat-icon",20),e.TgZ(30,"mat-menu",null,24)(32,"button",25)(33,"mat-icon"),e._uU(34,"language"),e.qZA(),e._uU(35," English "),e.qZA(),e.TgZ(36,"button",25)(37,"mat-icon"),e._uU(38,"language"),e.qZA(),e._uU(39," Arabic "),e.qZA()()()()()()()}if(2&i){const t=e.MAs(19),n=e.MAs(31),o=e.oxw();e.xp6(5),e.Q6J("src",o.currentBusinessInfo.symbols.logo,e.LSH),e.xp6(3),e.Oqu(o.currentBusinessInfo.name),e.xp6(2),e.Oqu(o.currentBusinessInfo.username),e.xp6(4),e.Q6J("ngIf",!o.isSave),e.xp6(1),e.Q6J("ngIf",o.isSave),e.xp6(1),e.Q6J("matMenuTriggerFor",t),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:share"),e.xp6(11),e.Q6J("matMenuTriggerFor",n),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:language")}}function ue(i,c){1&i&&(e.TgZ(0,"span",5),e._UZ(1,"mat-spinner"),e.qZA())}function pe(i,c){if(1&i&&(e.TgZ(0,"omanonline-card",37)(1,"div",38),e._uU(2,"Over View"),e.qZA(),e.TgZ(3,"div",39),e._uU(4," I\u2019m a friendly kitchen assistant who suffers from a severe phobia of buttons. "),e._UZ(5,"br")(6,"br"),e._uU(7," Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. "),e.qZA(),e._UZ(8,"hr",40),e.TgZ(9,"div",41)(10,"div",15),e._UZ(11,"mat-icon",42),e.TgZ(12,"span",43),e._uU(13),e.qZA()(),e.TgZ(14,"div",44),e._UZ(15,"mat-icon",42),e.TgZ(16,"span",43),e._uU(17,"ACME Corp. Lead UX Designer"),e.qZA()(),e.TgZ(18,"div",44),e._UZ(19,"mat-icon",42),e.TgZ(20,"span",43),e._uU(21,"April, 24"),e.qZA()()()(),e.TgZ(22,"omanonline-card",45)(23,"div",46)(24,"div",47)(25,"div",48),e._uU(26," VISION "),e.qZA()()(),e.TgZ(27,"div",49)(28,"div",50),e._uU(29,"VISION"),e.qZA(),e.TgZ(30,"div",51),e._uU(31," Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay once and get lifetime access to the community. "),e.qZA(),e.TgZ(32,"div",52)(33,"div",53),e._uU(34,"INCLUDED FEATURES"),e.qZA(),e._UZ(35,"div",54),e.qZA(),e.TgZ(36,"div",55)(37,"div",15),e._UZ(38,"mat-icon",56),e.TgZ(39,"div",57),e._uU(40,"Private forum access"),e.qZA()(),e.TgZ(41,"div",15),e._UZ(42,"mat-icon",56),e.TgZ(43,"div",57),e._uU(44,"Access to annual online conference"),e.qZA()(),e.TgZ(45,"div",15),e._UZ(46,"mat-icon",56),e.TgZ(47,"div",57),e._uU(48,"Member resources"),e.qZA()(),e.TgZ(49,"div",15),e._UZ(50,"mat-icon",56),e.TgZ(51,"div",57),e._uU(52,"Official member T-Shirt"),e.qZA()()()()(),e.TgZ(53,"omanonline-card",45)(54,"div",46)(55,"div",47)(56,"div",48),e._uU(57," MISSION "),e.qZA()()(),e.TgZ(58,"div",49)(59,"div",50),e._uU(60,"MISSION"),e.qZA(),e.TgZ(61,"div",51),e._uU(62," Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay once and get lifetime access to the community. "),e.qZA(),e.TgZ(63,"div",52)(64,"div",53),e._uU(65,"INCLUDED FEATURES"),e.qZA(),e._UZ(66,"div",54),e.qZA(),e.TgZ(67,"div",55)(68,"div",15),e._UZ(69,"mat-icon",56),e.TgZ(70,"div",57),e._uU(71,"Private forum access"),e.qZA()(),e.TgZ(72,"div",15),e._UZ(73,"mat-icon",56),e.TgZ(74,"div",57),e._uU(75,"Access to annual online conference"),e.qZA()(),e.TgZ(76,"div",15),e._UZ(77,"mat-icon",56),e.TgZ(78,"div",57),e._uU(79,"Member resources"),e.qZA()(),e.TgZ(80,"div",15),e._UZ(81,"mat-icon",56),e.TgZ(82,"div",57),e._uU(83,"Official member T-Shirt"),e.qZA()()()()(),e.TgZ(84,"omanonline-card",45)(85,"div",46)(86,"div",47)(87,"div",48),e._uU(88,"VALUE "),e.qZA()()(),e.TgZ(89,"div",49)(90,"div",50),e._uU(91,"VALUE"),e.qZA(),e.TgZ(92,"div",51),e._uU(93," Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay once and get lifetime access to the community. "),e.qZA(),e.TgZ(94,"div",52)(95,"div",53),e._uU(96,"INCLUDED FEATURES"),e.qZA(),e._UZ(97,"div",54),e.qZA(),e.TgZ(98,"div",55)(99,"div",15),e._UZ(100,"mat-icon",56),e.TgZ(101,"div",57),e._uU(102,"Private forum access"),e.qZA()(),e.TgZ(103,"div",15),e._UZ(104,"mat-icon",56),e.TgZ(105,"div",57),e._uU(106,"Access to annual online conference"),e.qZA()(),e.TgZ(107,"div",15),e._UZ(108,"mat-icon",56),e.TgZ(109,"div",57),e._uU(110,"Member resources"),e.qZA()(),e.TgZ(111,"div",15),e._UZ(112,"mat-icon",56),e.TgZ(113,"div",57),e._uU(114,"Official member T-Shirt"),e.qZA()()()()()),2&i){const t=e.oxw(2);e.xp6(11),e.Q6J("svgIcon","heroicons_solid:map-pin"),e.xp6(2),e.Oqu(t.currentBusinessInfo.username),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:briefcase"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:cake"),e.xp6(19),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(19),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(19),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:check-circle")}}function he(i,c){if(1&i&&(e.TgZ(0,"omanonline-card",37)(1,"div",38),e._uU(2,"Services"),e.qZA(),e.TgZ(3,"div",39),e._uU(4," I\u2019m a friendly kitchen assistant who suffers from a severe phobia of buttons. "),e._UZ(5,"br")(6,"br"),e._uU(7," Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. "),e.qZA(),e._UZ(8,"hr",40),e.TgZ(9,"div",41)(10,"div",15),e._UZ(11,"mat-icon",42),e.TgZ(12,"span",43),e._uU(13),e.qZA()(),e.TgZ(14,"div",44),e._UZ(15,"mat-icon",42),e.TgZ(16,"span",43),e._uU(17,"ACME Corp. Lead UX Designer"),e.qZA()(),e.TgZ(18,"div",44),e._UZ(19,"mat-icon",42),e.TgZ(20,"span",43),e._uU(21,"April, 24"),e.qZA()()()()),2&i){const t=e.oxw(2);e.xp6(11),e.Q6J("svgIcon","heroicons_solid:map-pin"),e.xp6(2),e.Oqu(t.currentBusinessInfo.username),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:briefcase"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:cake")}}function fe(i,c){if(1&i&&(e.TgZ(0,"omanonline-card",37)(1,"div",38),e._uU(2,"Contact"),e.qZA(),e.TgZ(3,"div",39),e._uU(4," I\u2019m a friendly kitchen assistant who suffers from a severe phobia of buttons. "),e._UZ(5,"br")(6,"br"),e._uU(7," Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. "),e.qZA(),e._UZ(8,"hr",40),e.TgZ(9,"div",41)(10,"div",15),e._UZ(11,"mat-icon",42),e.TgZ(12,"span",43),e._uU(13),e.qZA()(),e.TgZ(14,"div",44),e._UZ(15,"mat-icon",42),e.TgZ(16,"span",43),e._uU(17,"ACME Corp. Lead UX Designer"),e.qZA()(),e.TgZ(18,"div",44),e._UZ(19,"mat-icon",42),e.TgZ(20,"span",43),e._uU(21,"April, 24"),e.qZA()()()(),e.TgZ(22,"omanonline-card",58),e._UZ(23,"google-map",59),e.qZA()),2&i){const t=e.oxw(2);e.xp6(11),e.Q6J("svgIcon","heroicons_solid:map-pin"),e.xp6(2),e.Oqu(t.currentBusinessInfo.username),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:briefcase"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:cake"),e.xp6(4),e.Q6J("zoom",t.zoom)("center",t.center)("options",t.options)}}function ge(i,c){if(1&i&&(e.TgZ(0,"omanonline-card",37)(1,"div",38),e._uU(2,"Brand Book"),e.qZA(),e.TgZ(3,"div",39),e._uU(4," I\u2019m a friendly kitchen assistant who suffers from a severe phobia of buttons. "),e._UZ(5,"br")(6,"br"),e._uU(7," Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. "),e.qZA(),e._UZ(8,"hr",40),e.TgZ(9,"div",41)(10,"div",15),e._UZ(11,"mat-icon",42),e.TgZ(12,"span",43),e._uU(13),e.qZA()(),e.TgZ(14,"div",44),e._UZ(15,"mat-icon",42),e.TgZ(16,"span",43),e._uU(17,"ACME Corp. Lead UX Designer"),e.qZA()(),e.TgZ(18,"div",44),e._UZ(19,"mat-icon",42),e.TgZ(20,"span",43),e._uU(21,"April, 24"),e.qZA()()()()),2&i){const t=e.oxw(2);e.xp6(11),e.Q6J("svgIcon","heroicons_solid:map-pin"),e.xp6(2),e.Oqu(t.currentBusinessInfo.username),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:briefcase"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:cake")}}function ve(i,c){if(1&i&&(e.TgZ(0,"omanonline-card",37)(1,"div",38),e._uU(2,"Gallery"),e.qZA(),e.TgZ(3,"div",39),e._uU(4," I\u2019m a friendly kitchen assistant who suffers from a severe phobia of buttons. "),e._UZ(5,"br")(6,"br"),e._uU(7," Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. "),e.qZA(),e._UZ(8,"hr",40),e.TgZ(9,"div",41)(10,"div",15),e._UZ(11,"mat-icon",42),e.TgZ(12,"span",43),e._uU(13),e.qZA()(),e.TgZ(14,"div",44),e._UZ(15,"mat-icon",42),e.TgZ(16,"span",43),e._uU(17,"ACME Corp. Lead UX Designer"),e.qZA()(),e.TgZ(18,"div",44),e._UZ(19,"mat-icon",42),e.TgZ(20,"span",43),e._uU(21,"April, 24"),e.qZA()()()()),2&i){const t=e.oxw(2);e.xp6(11),e.Q6J("svgIcon","heroicons_solid:map-pin"),e.xp6(2),e.Oqu(t.currentBusinessInfo.username),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:briefcase"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:cake")}}function _e(i,c){if(1&i&&(e.TgZ(0,"omanonline-card",37)(1,"div",38),e._uU(2,"More Info"),e.qZA(),e.TgZ(3,"div",39),e._uU(4," I\u2019m a friendly kitchen assistant who suffers from a severe phobia of buttons. "),e._UZ(5,"br")(6,"br"),e._uU(7," Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. "),e.qZA(),e._UZ(8,"hr",40),e.TgZ(9,"div",41)(10,"div",15),e._UZ(11,"mat-icon",42),e.TgZ(12,"span",43),e._uU(13),e.qZA()(),e.TgZ(14,"div",44),e._UZ(15,"mat-icon",42),e.TgZ(16,"span",43),e._uU(17,"ACME Corp. Lead UX Designer"),e.qZA()(),e.TgZ(18,"div",44),e._UZ(19,"mat-icon",42),e.TgZ(20,"span",43),e._uU(21,"April, 24"),e.qZA()()()()),2&i){const t=e.oxw(2);e.xp6(11),e.Q6J("svgIcon","heroicons_solid:map-pin"),e.xp6(2),e.Oqu(t.currentBusinessInfo.username),e.xp6(2),e.Q6J("svgIcon","heroicons_solid:briefcase"),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:cake")}}function be(i,c){1&i&&(e.TgZ(0,"mat-tab-group",28)(1,"div",29)(2,"mat-tab",30),e.YNc(3,pe,115,16,"ng-template",31),e.qZA(),e.TgZ(4,"mat-tab",32),e.YNc(5,he,22,4,"ng-template",31),e.qZA(),e.TgZ(6,"mat-tab",33),e.YNc(7,fe,24,7,"ng-template",31),e.qZA(),e.TgZ(8,"mat-tab",34),e.YNc(9,ge,22,4,"ng-template",31),e.qZA(),e.TgZ(10,"mat-tab",35),e.YNc(11,ve,22,4,"ng-template",31),e.qZA(),e.TgZ(12,"mat-tab",36),e.YNc(13,_e,22,4,"ng-template",31),e.qZA()()()),2&i&&e.Q6J("animationDuration","0")}const xe=[{path:"",component:(()=>{class i{constructor(t,n,o,a,s,l){this.setup=t,this.cd=n,this.metaService=o,this.titleService=a,this.clipboardService=s,this.snackBar=l,this.isSave=!1,this.favorite=[],this.zoom=12,this.options={mapTypeId:"hybrid",zoomControl:!1,scrollwheel:!1,disableDoubleClickZoom:!0,maxZoom:15,minZoom:8};const m=localStorage.getItem("favoriteBusinesses");m&&(this.favorite=JSON.parse(m),this.isSave=-1!==this.favorite.indexOf(this.setup.current))}ngOnInit(){var t=this;return(0,E.Z)(function*(){try{t.categories=yield t.setup.getCategories(),t.currentBusinessInfo=yield t.setup.getBusiness(t.setup.current),navigator.geolocation.getCurrentPosition(n=>{t.center={lat:n.coords.latitude,lng:n.coords.longitude}}),t.titleService.setTitle("Oman Online - "+t.currentBusinessInfo.name),t.category=t.currentBusinessInfo.categoryId,console.log(t.currentBusinessInfo),t.cd.detectChanges()}catch{}})()}getCategoryName(t){const n=this.categories.find(o=>o.id===t);return n?n.title:"Category not found"}Save(){this.isSave=!this.isSave;const t=this.favorite.indexOf(this.setup.current);-1!==t?this.favorite.splice(t,1):this.favorite.push(this.setup.current),localStorage.setItem("favoriteBusinesses",JSON.stringify(this.favorite))}shareOnTelegram(){const t=window.location.href,n=`Check out this link: ${t}`,o=`tg://msg_url?url=${encodeURIComponent(t)}&text=${encodeURIComponent(n)}`;window.open(o)}shareOnWhatsApp(){const n=`Check out this link: ${window.location.href}`,o=`https://wa.me/?text=${encodeURIComponent(n)}`;window.open(o)}copyToClipboard(){const t=window.location.href;this.clipboardService.copy(t),this.snackBar.open("Link copied to clipboard","Close",{duration:2e3})}downloadVCard(){const a=new Blob(["BEGIN:VCARD\n    VERSION:3.0\n    FN:John Doe\n    TEL:+1234567890\n    END:VCARD"],{type:"text/vcard"}),s=window.URL.createObjectURL(a),l=document.createElement("a");l.style.display="none",l.href=s,l.download="contact.vcf",document.body.appendChild(l),l.click(),window.URL.revokeObjectURL(s)}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(B.U),e.Y36(e.sBO),e.Y36(M.h_),e.Y36(M.Dx),e.Y36(Q),e.Y36(re))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["profile"]],standalone:!0,features:[e.jDz],decls:6,vars:4,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],["class","mr-auto mt-10 ml-auto",4,"ngIf"],["class","flex flex-col shadow bg-card",4,"ngIf"],[1,"justify-center","w-full","max-w-5xl","mx-auto"],["class","sm:px-2 w-full","mat-stretch-tabs","true",3,"animationDuration",4,"ngIf"],[1,"mr-auto","mt-10","ml-auto"],[1,"flex","flex-col","shadow","bg-card"],["src","/assets/images/pages/profile/cover.png","alt","Cover image",1,"h-40","lg:h-80","object-cover"],[1,"flex","flex-col","flex-0","lg:flex-row","items-center","max-w-5xl","w-full","mx-auto","px-8","lg:h-18","bg-card"],[1,"-mt-26","lg:-mt-22","rounded-full","business-back-color"],["alt","Business avatar",1,"w-32","h-32","rounded-full","ring-4","ring-bg-card","p-4",3,"src"],[1,"flex","flex-col","items-center","lg:items-start","mt-4","lg:mt-0","lg:ml-8"],[1,"text-lg","font-bold","leading-none"],[1,"text-secondary"],[1,"flex","flex-col","items-center","mt-8","mb-4","lg:m-0","lg:ml-auto"],[1,"flex","items-center"],["mat-icon-button","",1,"mr-4",3,"click"],["matTooltip","Save","svgIcon","heroicons_outline:bookmark",4,"ngIf"],["matTooltip","UnSave","svgIcon","heroicons_solid:bookmark",4,"ngIf"],["matTooltip","Share","mat-icon-button","",1,"mr-4",3,"matMenuTriggerFor"],[3,"svgIcon"],["shareMenu",""],["mat-menu-item","",3,"click"],["matTooltip","Language","mat-icon-button","",3,"matMenuTriggerFor"],["langMenu",""],["mat-menu-item",""],["matTooltip","Save","svgIcon","heroicons_outline:bookmark"],["matTooltip","UnSave","svgIcon","heroicons_solid:bookmark"],["mat-stretch-tabs","true",1,"sm:px-2","w-full",3,"animationDuration"],[1,"justify-center","w-full","max-w-5xl","mx-auto","p-6","sm:p-8"],["label","Over View"],["matTabContent",""],["label","Services"],["label","Contact"],["label","Brand Book"],["label","Gallery"],["label","More Info"],[1,"flex","flex-col","w-full","p-8"],[1,"text-2xl","font-semibold","leading-tight"],[1,"mt-4"],[1,"w-full","border-t","my-6"],[1,"flex","flex-col"],[1,"icon-size-5","mr-3",3,"svgIcon"],[1,"leading-none"],[1,"flex","items-center","mt-4"],[1,"flex","flex-col","lg:flex-row","w-full","mt-5"],[1,"flex","flex-col","items-center","p-8","lg:px-10","lg:py-12","lg:max-w-20","bg-gray-100","dark:bg-black","dark:bg-opacity-10","justify-center"],[1,"flex","items-center","whitespace-nowrap"],[1,"text-4xl","font-extrabold","tracking-widest","lg:rotate-270","lg:relative"],[1,"p-6","sm:p-8","lg:p-10"],[1,"text-3xl","font-bold"],[1,"mt-2","leading-relaxed","text-secondary"],[1,"flex","items-center","mt-10"],[1,"font-medium","text-secondary"],[1,"flex-auto","ml-2","border-b-2"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-y-4","mt-6"],[1,"icon-size-5","text-primary",3,"svgIcon"],[1,"ml-2"],[1,"flex","flex-col","w-full","p-8","mt-5"],["height","500px","width","100%",3,"zoom","center","options"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.YNc(1,ce,2,0,"span",1),e.YNc(2,me,40,9,"div",2),e.TgZ(3,"div",3),e.YNc(4,ue,2,0,"span",1),e.YNc(5,be,14,1,"mat-tab-group",4),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngIf",!o.currentBusinessInfo),e.xp6(1),e.Q6J("ngIf",o.currentBusinessInfo),e.xp6(2),e.Q6J("ngIf",!o.currentBusinessInfo),e.xp6(1),e.Q6J("ngIf",o.currentBusinessInfo))},dependencies:[u.ez,u.O5,J.Q,T.Ps,T.Hw,f.ot,f.RK,g.Tx,g.VK,g.OP,g.p6,v.Nh,v.Vc,v.uX,v.SP,L.lN,P.c,O.Ky,q.t,k.AV,k.gM,N,U,w.Y4,w.b6],encapsulation:2,changeDetection:0})}return i})(),resolve:{business:(i,c)=>{const t=(0,e.f3M)(B.U);(0,e.f3M)(D.F0),t.current=i.paramMap.get("username")}}}]}}]);