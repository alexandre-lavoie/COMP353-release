_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{PkXT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buildings/new",function(){return n("qbxq")}])},qbxq:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),i=n.n(a),r=n("HaE+"),o=n("rePB"),c=n("ODXe"),s=n("q1tI"),u=n.n(s),l=n("nOHt"),d=n("9Koi"),b=n("R/WZ"),O=n("tRbT"),f=n("kKAo"),p=n("ofer"),g=n("r9w1"),j=n("ADg1"),m=n("1AYd"),w=n("cVXz"),v=n("jjAL"),h=n("Z3vd"),y=n("79Xs"),_=n("cBaE"),P=n("zOGZ"),E=n("apO0"),k=u.a.createElement;function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=Object(b.a)((function(e){return{mainContainer:{width:"100%",height:"100vh"},loginContainer:{padding:e.spacing(3)}}}));t.default=function(e){var t=Object(_.e)(),n=Object(c.a)(t,2),a=n[0],u=n[1],b=Object(l.useRouter)(),C=N(),S=Object(d.a)().t,x=Object(s.useState)({}),D=x[0],X=x[1],q=Object(s.useState)(null),T=q[0],B=q[1],H=Object(s.useState)(""),R=H[0],W=H[1],Z=Object(s.useState)(""),z=Z[0],I=Z[1];function J(e){if("association_id"==e.target.name){if("Add association"==e.target.value)return void b.push("/associations/new");I(e.target.value)}X(A(A({},D),{},Object(o.a)({},e.target.name,e.target.value.trim())))}return Object(s.useEffect)((function(){u&&Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)("associations/index");case 2:(t=e.sent).associations&&B(t.associations);case 4:case"end":return e.stop()}}),e)})))()}),[T,u]),a?k(P.a,null):k(E.a,{center:!0,title:"New Building | CON"},k(O.a,{className:C.mainContainer,container:!0,direction:"column",alignItems:"center",justify:"center",spacing:3},k(O.a,{item:!0},k(f.a,null,k(O.a,{className:C.loginContainer,container:!0,direction:"column",justify:"center",spacing:3},k(O.a,{item:!0},k(p.a,{variant:"h4"},"Create building")),k(O.a,{item:!0},k(g.a,{fullWidth:!0,label:S("Address"),name:"address",onChange:J})),k(O.a,{item:!0},k(j.a,{fullWidth:!0},k(m.a,null,"Association"),k(w.a,{value:z,name:"association_id",onChange:J},k(v.a,{value:"Add association"},"Add association"),T&&0!=T.length?T.map((function(e,t){return k(v.a,{value:e.id,key:t},e.name)})):""))),k(O.a,{item:!0},k(h.a,{variant:"contained",color:"secondary",onClick:Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)("buildings","create",D);case 2:t=e.sent,console.log(t),t.id?(W("Building created"),b.push("/condos/new")):W("Something went wrong");case 5:case"end":return e.stop()}}),e)})))},S("Submit")),k(y.a,{open:""!=R,autoHideDuration:6e3,onClose:function(){return W("")},message:R})))))))}}},[["PkXT",0,2,4,1,3,5,6,7,8]]]);