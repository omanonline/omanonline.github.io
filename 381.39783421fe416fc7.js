"use strict";(self.webpackChunkomanonline=self.webpackChunkomanonline||[]).push([[381],{6381:(D,s,o)=>{o.r(s),o.d(s,{default:()=>I});var f=o(4408),m=o(5861),v=o(6263),g=o(2296),n=o(5879),l=o(3680);let u=(()=>{var a;class i{}return(a=i).\u0275fac=function(e){return new(e||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[l.BQ,l.BQ]}),i})();var x=o(5683),d=o(617),h=o(4516),b=o(7988),w=o(4104),y=o(2596),c=o(2495),Z=o(6814),C=o(682);function T(a,i){1&a&&(n.ynx(0),n.TgZ(1,"div",1),n.Hsn(2),n.qZA(),n.TgZ(3,"div",2),n.Hsn(4,1),n.qZA(),n.BQk())}function O(a,i){1&a&&(n.TgZ(0,"div",4),n.Hsn(1,3),n.qZA()),2&a&&n.Q6J("@expandCollapse",void 0)}function A(a,i){if(1&a&&(n.ynx(0),n.Hsn(1,2),n.YNc(2,O,2,1,"div",3),n.BQk()),2&a){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",t.expanded)}}const U=[[["","omanonlineCardFront",""]],[["","omanonlineCardBack",""]],"*",[["","omanonlineCardExpansion",""]]],M=["[omanonlineCardFront]","[omanonlineCardBack]","*","[omanonlineCardExpansion]"];let B=(()=>{var a;class i{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"omanonline-card-expanded":this.expanded,"omanonline-card-face-back":this.flippable&&"back"===this.face,"omanonline-card-face-front":this.flippable&&"front"===this.face,"omanonline-card-flippable":this.flippable}}ngOnChanges(e){"expanded"in e&&(this.expanded=(0,c.Ig)(e.expanded.currentValue)),"flippable"in e&&(this.flippable=(0,c.Ig)(e.flippable.currentValue))}}return(a=i).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["omanonline-card"]],hostVars:2,hostBindings:function(e,r){2&e&&n.Tol(r.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["omanonlineCard"],standalone:!0,features:[n.TTD,n.jDz],ngContentSelectors:M,decls:2,vars:2,consts:[[4,"ngIf"],[1,"omanonline-card-front"],[1,"omanonline-card-back"],["class","omanonline-card-expansion",4,"ngIf"],[1,"omanonline-card-expansion"]],template:function(e,r){1&e&&(n.F$t(U),n.YNc(0,T,5,0,"ng-container",0),n.YNc(1,A,3,1,"ng-container",0)),2&e&&(n.Q6J("ngIf",r.flippable),n.xp6(1),n.Q6J("ngIf",!r.flippable))},dependencies:[Z.O5],styles:["omanonline-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--omanonline-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}omanonline-card.omanonline-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}omanonline-card.omanonline-card-flippable.omanonline-card-face-back .omanonline-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}omanonline-card.omanonline-card-flippable.omanonline-card-face-back .omanonline-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}omanonline-card.omanonline-card-flippable .omanonline-card-front,omanonline-card.omanonline-card-flippable .omanonline-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--omanonline-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}omanonline-card.omanonline-card-flippable .omanonline-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}omanonline-card.omanonline-card-flippable .omanonline-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:C.I}}),i})();var p=o(9513);const I=[{path:"",component:(()=>{var a;class i{constructor(e){this.setup=e}ngOnInit(){var e=this;return(0,m.Z)(function*(){e.currentBusinessInfo=yield e.setup.getBusiness(e.setup.current),console.log(e.currentBusinessInfo)})()}}return(a=i).\u0275fac=function(e){return new(e||a)(n.Y36(p.U))},a.\u0275cmp=n.Xpm({type:a,selectors:[["profile"]],standalone:!0,features:[n.jDz],decls:38,vars:4,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","shadow","bg-card"],["src","/assets/images/pages/profile/cover.png","alt","Cover image",1,"h-40","lg:h-80","object-cover"],[1,"flex","flex-col","flex-0","lg:flex-row","items-center","max-w-5xl","w-full","mx-auto","px-8","lg:h-18","bg-card"],[1,"-mt-26","lg:-mt-22","rounded-full"],["src","/assets/images/avatars/businesslogo.jpg","alt","User avatar",1,"w-32","h-32","rounded-full","ring-4","ring-bg-card"],[1,"flex","flex-col","items-center","lg:items-start","mt-4","lg:mt-0","lg:ml-8"],[1,"text-lg","font-bold","leading-none"],[1,"text-secondary"],[1,"flex","items-center","mt-8","mb-4","lg:m-0","lg:ml-auto","space-x-6"],[1,"font-medium"],["svgIcon","mat_solid:favorite"],[1,"flex","flex-auto","justify-center","w-full","max-w-5xl","mx-auto","p-6","sm:p-8"],[1,"flex","flex-col","w-full","p-8"],[1,"text-2xl","font-semibold","leading-tight"],[1,"mt-4"],[1,"w-full","border-t","my-6"],[1,"flex","flex-col"],[1,"flex","items-center"],[1,"icon-size-5","mr-3",3,"svgIcon"],[1,"leading-none"],[1,"flex","items-center","mt-4"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div"),n._UZ(3,"img",2),n.qZA(),n.TgZ(4,"div",3)(5,"div",4),n._UZ(6,"img",5),n.qZA(),n.TgZ(7,"div",6)(8,"div",7),n._uU(9),n.qZA(),n.TgZ(10,"div",8),n._uU(11,"Oman"),n.qZA()(),n.TgZ(12,"div",9)(13,"span",10),n._UZ(14,"mat-icon",11),n.qZA()()()(),n.TgZ(15,"div",12)(16,"omanonline-card",13)(17,"div",14),n._uU(18,"About Me"),n.qZA(),n.TgZ(19,"div",15),n._uU(20," I\u2019m a friendly kitchen assistant who suffers from a severe phobia of buttons. "),n._UZ(21,"br")(22,"br"),n._uU(23," Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. "),n.qZA(),n._UZ(24,"hr",16),n.TgZ(25,"div",17)(26,"div",18),n._UZ(27,"mat-icon",19),n.TgZ(28,"span",20),n._uU(29,"Oman, Muscat"),n.qZA()(),n.TgZ(30,"div",21),n._UZ(31,"mat-icon",19),n.TgZ(32,"span",20),n._uU(33,"ACME Corp. Lead UX Designer"),n.qZA()(),n.TgZ(34,"div",21),n._UZ(35,"mat-icon",19),n.TgZ(36,"span",20),n._uU(37,"April, 24"),n.qZA()()()()()()),2&e&&(n.xp6(9),n.Oqu(r.setup.current),n.xp6(18),n.Q6J("svgIcon","heroicons_solid:map-pin"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:briefcase"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:cake"))},dependencies:[B,d.Ps,d.Hw,g.ot,b.Tx,w.Nh,x.lN,h.c,v.Ky,u,y.AV],encapsulation:2,changeDetection:0}),i})(),resolve:{business:(a,i)=>{const t=(0,n.f3M)(p.U);(0,n.f3M)(f.F0),t.current=a.paramMap.get("username")}}}]}}]);