"use strict";(self.webpackChunkomanonline=self.webpackChunkomanonline||[]).push([[112],{8112:(q,l,i)=>{i.r(l),i.d(l,{default:()=>O});var m=i(4408),f=i(5861),g=i(6263),p=i(2296),v=i(6385),u=i(5683),s=i(617),x=i(4516),Z=i(7988),h=i(4104),b=i(2596),c=i(2495),T=i(6814),U=i(682),n=i(5879);function w(o,t){1&o&&(n.ynx(0),n.TgZ(1,"div",1),n.Hsn(2),n.qZA(),n.TgZ(3,"div",2),n.Hsn(4,1),n.qZA(),n.BQk())}function A(o,t){1&o&&(n.TgZ(0,"div",4),n.Hsn(1,3),n.qZA()),2&o&&n.Q6J("@expandCollapse",void 0)}function y(o,t){if(1&o&&(n.ynx(0),n.Hsn(1,2),n.YNc(2,A,2,1,"div",3),n.BQk()),2&o){const a=n.oxw();n.xp6(2),n.Q6J("ngIf",a.expanded)}}const I=[[["","omanonlineCardFront",""]],[["","omanonlineCardBack",""]],"*",[["","omanonlineCardExpansion",""]]],C=["[omanonlineCardFront]","[omanonlineCardBack]","*","[omanonlineCardExpansion]"];let k=(()=>{var o;class t{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"omanonline-card-expanded":this.expanded,"omanonline-card-face-back":this.flippable&&"back"===this.face,"omanonline-card-face-front":this.flippable&&"front"===this.face,"omanonline-card-flippable":this.flippable}}ngOnChanges(e){"expanded"in e&&(this.expanded=(0,c.Ig)(e.expanded.currentValue)),"flippable"in e&&(this.flippable=(0,c.Ig)(e.flippable.currentValue))}}return(o=t).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["omanonline-card"]],hostVars:2,hostBindings:function(e,r){2&e&&n.Tol(r.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["omanonlineCard"],standalone:!0,features:[n.TTD,n.jDz],ngContentSelectors:C,decls:2,vars:2,consts:[[4,"ngIf"],[1,"omanonline-card-front"],[1,"omanonline-card-back"],["class","omanonline-card-expansion",4,"ngIf"],[1,"omanonline-card-expansion"]],template:function(e,r){1&e&&(n.F$t(I),n.YNc(0,w,5,0,"ng-container",0),n.YNc(1,y,3,1,"ng-container",0)),2&e&&(n.Q6J("ngIf",r.flippable),n.xp6(1),n.Q6J("ngIf",!r.flippable))},dependencies:[T.O5],styles:["omanonline-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--omanonline-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}omanonline-card.omanonline-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}omanonline-card.omanonline-card-flippable.omanonline-card-face-back .omanonline-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}omanonline-card.omanonline-card-flippable.omanonline-card-face-back .omanonline-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}omanonline-card.omanonline-card-flippable .omanonline-card-front,omanonline-card.omanonline-card-flippable .omanonline-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--omanonline-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}omanonline-card.omanonline-card-flippable .omanonline-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}omanonline-card.omanonline-card-flippable .omanonline-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:U.I}}),t})();var d=i(9513);const O=[{path:"",component:(()=>{var o;class t{constructor(e){this.setup=e}ngOnInit(){var e=this;return(0,f.Z)(function*(){e.currentBusinessInfo=yield e.setup.getBusiness(e.setup.current),console.log(e.currentBusinessInfo)})()}}return(o=t).\u0275fac=function(e){return new(e||o)(n.Y36(d.U))},o.\u0275cmp=n.Xpm({type:o,selectors:[["profile"]],standalone:!0,features:[n.jDz],decls:131,vars:16,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","shadow","bg-card"],["src","/assets/images/pages/profile/cover.png","alt","Cover image",1,"h-40","lg:h-80","object-cover"],[1,"flex","flex-col","flex-0","lg:flex-row","items-center","max-w-5xl","w-full","mx-auto","px-8","lg:h-18","bg-card"],[1,"-mt-26","lg:-mt-22","rounded-full"],["src","/assets/images/avatars/businesslogo.jpg","alt","User avatar",1,"w-32","h-32","rounded-full","ring-4","ring-bg-card"],[1,"flex","flex-col","items-center","lg:items-start","mt-4","lg:mt-0","lg:ml-8"],[1,"text-lg","font-bold","leading-none"],[1,"text-secondary"],[1,"flex","items-center","mt-8","mb-4","lg:m-0","lg:ml-auto","space-x-6"],[1,"font-medium"],["svgIcon","mat_solid:favorite"],[1,"justify-center","w-full","max-w-5xl","mx-auto","p-6","sm:p-8"],[1,"flex","flex-col","w-full","p-8"],[1,"text-2xl","font-semibold","leading-tight"],[1,"mt-4"],[1,"w-full","border-t","my-6"],[1,"flex","flex-col"],[1,"flex","items-center"],[1,"icon-size-5","mr-3",3,"svgIcon"],[1,"leading-none"],[1,"flex","items-center","mt-4"],[1,"flex","flex-col","lg:flex-row","w-full","filter-pricing","mt-5"],[1,"flex","flex-col","items-center","p-8","lg:px-10","lg:py-12","lg:max-w-20","bg-gray-100","dark:bg-black","dark:bg-opacity-10","justify-center"],[1,"flex","items-center","whitespace-nowrap"],[1,"text-4xl","font-extrabold","tracking-tight","lg:rotate-270","lg:relative"],[1,"p-6","sm:p-8","lg:p-10"],[1,"text-3xl","font-bold"],[1,"mt-2","leading-relaxed","text-secondary"],[1,"flex","items-center","mt-10"],[1,"font-medium","text-secondary"],[1,"flex-auto","ml-2","border-b-2"],[1,"grid","grid-cols-1","lg:grid-cols-2","gap-y-4","mt-6"],[1,"icon-size-5","text-primary",3,"svgIcon"],[1,"ml-2"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div"),n._UZ(3,"img",2),n.qZA(),n.TgZ(4,"div",3)(5,"div",4),n._UZ(6,"img",5),n.qZA(),n.TgZ(7,"div",6)(8,"div",7),n._uU(9),n.qZA(),n.TgZ(10,"div",8),n._uU(11,"Oman"),n.qZA()(),n.TgZ(12,"div",9)(13,"span",10),n._UZ(14,"mat-icon",11),n.qZA()()()(),n.TgZ(15,"div",12)(16,"omanonline-card",13)(17,"div",14),n._uU(18,"About Me"),n.qZA(),n.TgZ(19,"div",15),n._uU(20," I\u2019m a friendly kitchen assistant who suffers from a severe phobia of buttons. "),n._UZ(21,"br")(22,"br"),n._uU(23," Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. "),n.qZA(),n._UZ(24,"hr",16),n.TgZ(25,"div",17)(26,"div",18),n._UZ(27,"mat-icon",19),n.TgZ(28,"span",20),n._uU(29,"Oman, Muscat"),n.qZA()(),n.TgZ(30,"div",21),n._UZ(31,"mat-icon",19),n.TgZ(32,"span",20),n._uU(33,"ACME Corp. Lead UX Designer"),n.qZA()(),n.TgZ(34,"div",21),n._UZ(35,"mat-icon",19),n.TgZ(36,"span",20),n._uU(37,"April, 24"),n.qZA()()()(),n.TgZ(38,"omanonline-card",22)(39,"div",23)(40,"div",24)(41,"div",25),n._uU(42,"VISION"),n.qZA()()(),n.TgZ(43,"div",26)(44,"div",27),n._uU(45,"VISION"),n.qZA(),n.TgZ(46,"div",28),n._uU(47," Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay once and get lifetime access to the community. "),n.qZA(),n.TgZ(48,"div",29)(49,"div",30),n._uU(50,"INCLUDED FEATURES"),n.qZA(),n._UZ(51,"div",31),n.qZA(),n.TgZ(52,"div",32)(53,"div",18),n._UZ(54,"mat-icon",33),n.TgZ(55,"div",34),n._uU(56,"Private forum access"),n.qZA()(),n.TgZ(57,"div",18),n._UZ(58,"mat-icon",33),n.TgZ(59,"div",34),n._uU(60,"Access to annual online conference"),n.qZA()(),n.TgZ(61,"div",18),n._UZ(62,"mat-icon",33),n.TgZ(63,"div",34),n._uU(64,"Member resources"),n.qZA()(),n.TgZ(65,"div",18),n._UZ(66,"mat-icon",33),n.TgZ(67,"div",34),n._uU(68,"Official member T-Shirt"),n.qZA()()()()(),n.TgZ(69,"omanonline-card",22)(70,"div",23)(71,"div",24)(72,"div",25),n._uU(73,"MISION"),n.qZA()()(),n.TgZ(74,"div",26)(75,"div",27),n._uU(76,"MISION"),n.qZA(),n.TgZ(77,"div",28),n._uU(78," Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay once and get lifetime access to the community. "),n.qZA(),n.TgZ(79,"div",29)(80,"div",30),n._uU(81,"INCLUDED FEATURES"),n.qZA(),n._UZ(82,"div",31),n.qZA(),n.TgZ(83,"div",32)(84,"div",18),n._UZ(85,"mat-icon",33),n.TgZ(86,"div",34),n._uU(87,"Private forum access"),n.qZA()(),n.TgZ(88,"div",18),n._UZ(89,"mat-icon",33),n.TgZ(90,"div",34),n._uU(91,"Access to annual online conference"),n.qZA()(),n.TgZ(92,"div",18),n._UZ(93,"mat-icon",33),n.TgZ(94,"div",34),n._uU(95,"Member resources"),n.qZA()(),n.TgZ(96,"div",18),n._UZ(97,"mat-icon",33),n.TgZ(98,"div",34),n._uU(99,"Official member T-Shirt"),n.qZA()()()()(),n.TgZ(100,"omanonline-card",22)(101,"div",23)(102,"div",24)(103,"div",25),n._uU(104,"VALUE"),n.qZA()()(),n.TgZ(105,"div",26)(106,"div",27),n._uU(107,"VALUE"),n.qZA(),n.TgZ(108,"div",28),n._uU(109," Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay once and get lifetime access to the community. "),n.qZA(),n.TgZ(110,"div",29)(111,"div",30),n._uU(112,"INCLUDED FEATURES"),n.qZA(),n._UZ(113,"div",31),n.qZA(),n.TgZ(114,"div",32)(115,"div",18),n._UZ(116,"mat-icon",33),n.TgZ(117,"div",34),n._uU(118,"Private forum access"),n.qZA()(),n.TgZ(119,"div",18),n._UZ(120,"mat-icon",33),n.TgZ(121,"div",34),n._uU(122,"Access to annual online conference"),n.qZA()(),n.TgZ(123,"div",18),n._UZ(124,"mat-icon",33),n.TgZ(125,"div",34),n._uU(126,"Member resources"),n.qZA()(),n.TgZ(127,"div",18),n._UZ(128,"mat-icon",33),n.TgZ(129,"div",34),n._uU(130,"Official member T-Shirt"),n.qZA()()()()()()()),2&e&&(n.xp6(9),n.Oqu(r.setup.current),n.xp6(18),n.Q6J("svgIcon","heroicons_solid:map-pin"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:briefcase"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:cake"),n.xp6(19),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(19),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(19),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"),n.xp6(4),n.Q6J("svgIcon","heroicons_solid:check-circle"))},dependencies:[k,s.Ps,s.Hw,p.ot,Z.Tx,h.Nh,u.lN,x.c,g.Ky,v.t,b.AV],encapsulation:2,changeDetection:0}),t})(),resolve:{business:(o,t)=>{const a=(0,n.f3M)(d.U);(0,n.f3M)(m.F0),a.current=o.paramMap.get("username")}}}]}}]);