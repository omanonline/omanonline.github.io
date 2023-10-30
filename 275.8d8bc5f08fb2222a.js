"use strict";(self.webpackChunkomanonline=self.webpackChunkomanonline||[]).push([[275],{9025:(W,C,l)=>{l.d(C,{Y4:()=>re,b6:()=>g});var i=l(5879),z=l(6814),r=l(5619),w=l(5592),y=(l(8645),l(2572),l(4664));l(8180),l(7398),l(9773);const k=["*"];class u{_clearListeners(){for(const _ of this._listeners)_.remove();this._listeners=[]}constructor(_){this._ngZone=_,this._pending=[],this._listeners=[],this._targetStream=new r.X(void 0)}getLazyEmitter(_){return this._targetStream.pipe((0,y.w)(e=>{const t=new w.y(n=>{if(!e)return void this._pending.push({observable:t,observer:n});const a=e.addListener(_,c=>{this._ngZone.run(()=>n.next(c))});if(a)return this._listeners.push(a),()=>a.remove();n.complete()});return t}))}setTarget(_){const e=this._targetStream.value;_!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(_),this._pending.forEach(t=>t.observable.subscribe(t.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const f={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"},D="500px",E="500px";let g=(()=>{class s{set center(e){this._center=e}set zoom(e){this._zoom=e}set options(e){this._options=e||f}constructor(e,t,n){if(this._elementRef=e,this._ngZone=t,this._eventManager=new u((0,i.f3M)(i.R0b)),this.height=D,this.width=E,this._options=f,this.mapInitialized=new i.vpe,this.authFailure=new i.vpe,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=(0,z.NF)(n),this._isBrowser){const a=window;this._existingAuthFailureCallback=a.gm_authFailure,a.gm_authFailure=()=>{this._existingAuthFailureCallback&&this._existingAuthFailureCallback(),this.authFailure.emit()}}}ngOnChanges(e){(e.height||e.width)&&this._setSize();const t=this.googleMap;t&&(e.options&&t.setOptions(this._combineOptions()),e.center&&this._center&&t.setCenter(this._center),e.zoom&&null!=this._zoom&&t.setZoom(this._zoom),e.mapTypeId&&this.mapTypeId&&t.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap),this.mapInitialized.emit(this.googleMap))}ngOnDestroy(){this._eventManager.destroy(),this._isBrowser&&(window.gm_authFailure=this._existingAuthFailureCallback)}fitBounds(e,t){this._assertInitialized(),this.googleMap.fitBounds(e,t)}panBy(e,t){this._assertInitialized(),this.googleMap.panBy(e,t)}panTo(e){this._assertInitialized(),this.googleMap.panTo(e)}panToBounds(e,t){this._assertInitialized(),this.googleMap.panToBounds(e,t)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()||null}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const e=this._mapEl.style;e.height=null===this.height?"":L(this.height)||D,e.width=null===this.width?"":L(this.width)||E}}_combineOptions(){const e=this._options||{};return{...e,center:this._center||e.center||f.center,zoom:this._zoom??e.zoom??f.zoom,mapTypeId:this.mapTypeId||e.mapTypeId||f.mapTypeId}}_assertInitialized(){}static#e=this.\u0275fac=function(t){return new(t||s)(i.Y36(i.SBq),i.Y36(i.R0b),i.Y36(i.Lbi))};static#t=this.\u0275cmp=i.Xpm({type:s,selectors:[["google-map"]],inputs:{height:"height",width:"width",mapTypeId:"mapTypeId",center:"center",zoom:"zoom",options:"options"},outputs:{mapInitialized:"mapInitialized",authFailure:"authFailure",boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[i.TTD],ngContentSelectors:k,decls:2,vars:0,consts:[[1,"map-container"]],template:function(t,n){1&t&&(i.F$t(),i._UZ(0,"div",0),i.Hsn(1))},encapsulation:2,changeDetection:0})}return s})();const Y=/([A-Za-z%]+)$/;function L(s){return null==s?"":Y.test(s)?s:`${s}px`}let re=(()=>{class s{static#e=this.\u0275fac=function(t){return new(t||s)};static#t=this.\u0275mod=i.oAB({type:s});static#i=this.\u0275inj=i.cJS({})}return s})()},6385:(W,C,l)=>{l.d(C,{t:()=>w});var i=l(5879),z=l(3680);let w=(()=>{class h{static#e=this.\u0275fac=function(p){return new(p||h)};static#t=this.\u0275mod=i.oAB({type:h});static#i=this.\u0275inj=i.cJS({imports:[z.BQ,z.BQ]})}return h})()}}]);