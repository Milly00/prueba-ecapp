import{Cb as I,Ka as o,Kb as w,La as a,Ma as v,Nb as x,Ob as y,Qb as C,Sb as S,Xa as c,Ya as h,Za as b,_ as f,ab as g,q as p,r as u,va as d,wa as n,y as m}from"./chunk-MRJSE2RQ.js";var A=(()=>{let e=class e{constructor(l,i,r){this.router=l,this.activatedRoute=i,this.titleService=r,this.title="",this.subtitle="",this.pageInfo=Object.create(null),this.router.events.pipe(m(t=>t instanceof x)).pipe(p(()=>this.activatedRoute)).pipe(p(t=>{for(;t.firstChild;)t=t.firstChild;return t})).pipe(m(t=>t.outlet==="primary")).pipe(u(t=>t.data)).subscribe(t=>{this.titleService.setTitle(t.title),this.pageInfo=t})}};e.\u0275fac=function(i){return new(i||e)(n(C),n(y),n(w))},e.\u0275cmp=f({type:e,selectors:[["app-breadcrumb"]],inputs:{title:"title",subtitle:"subtitle"},standalone:!0,features:[g],decls:10,vars:2,consts:[[1,"bg-light-primary","rounded","p-y-30","p-x-24","m-b-30","overflow-hidden"],[1,"row"],[1,"col-sm-8"],[1,"page-title","m-0","f-s-20","f-w-600","m-b-16"],[1,"col-sm-4","text-right","position-relative"],[1,"breadcrumb-icon"],["src","../../../../../../assets/images/breadcrumb/ChatBc.png","alt","breadcrumb","width","65"]],template:function(i,r){i&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3),c(4),a(),o(5,"span"),c(6),a()(),o(7,"div",4)(8,"div",5),v(9,"img",6),a()()()()),i&2&&(d(4),b(" ",r.title," "),d(2),h(r.subtitle))},dependencies:[S,I],encapsulation:2});let s=e;return s})();export{A as a};