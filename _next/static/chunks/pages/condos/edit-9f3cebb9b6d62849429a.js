_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{JSsD:function(e,t,n){"use strict";var r=n("viY9"),a=Object(r.a)({palette:{type:"dark",primary:{main:"#0081A7"},secondary:{main:"#00AFB9"}}});t.a=a},S7Lx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/condos/edit",function(){return n("fI8J")}])},fI8J:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),i=n("HaE+"),o=n("rePB"),c=n("ODXe"),s=n("q1tI"),u=n.n(s),l=n("nOHt"),f=n("9Koi"),d=n("R/WZ"),p=n("tRbT"),b=n("kKAo"),m=n("ofer"),h=n("r9w1"),v=n("ADg1"),g=n("1AYd"),O=n("cVXz"),y=n("jjAL"),j=n("Z3vd"),w=n("79Xs"),k=n("cBaE"),x=n("apO0"),S=n("ub5l"),P=u.a.createElement;function D(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=Object(d.a)((function(e){return{mainContainer:{width:"100%",height:"100vh"},loginContainer:{padding:e.spacing(3)},root:{background:"#f44336",color:"white"}}}));t.default=function(e){var t=Object(k.e)(),n=Object(c.a)(t,2),r=n[0],u=n[1],d=Object(l.useRouter)(),_=A(),C=Object(f.a)().t,I=Object(s.useState)(null),N=I[0],U=I[1],q=Object(s.useState)(null),z=q[0],B=q[1],F=Object(s.useState)(""),W=F[0],J=F[1],M=Object(s.useState)(""),T=M[0],X=M[1],L=Object(s.useState)([]),R=L[0],H=L[1],$=Object(s.useState)([]),K=$[0],Y=$[1],Z=Object(s.useState)([]),V=Z[0],G=Z[1],Q=Object(s.useState)(""),ee=Q[0],te=Q[1],ne=Object(s.useState)(null),re=ne[0],ae=ne[1],ie=u&&u.roles&&null!=u.roles.find((function(e){return"admin"==e})),oe=u&&N&&N.owners&&null!=N.owners.find((function(e){return e.id==u.id})),ce=function(e){if("building_id"==e.target.name){if("Add building"==e.target.value)return void d.push("/associations/buildings/new");X(e.target.value)}U(E(E({},N),{},Object(o.a)({},e.target.name,e.target.value.trim())))},se=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)("condos/index","update",E(E({},N),{},{image:re}));case 2:if(!(t=e.sent).active){e.next=10;break}return e.next=6,ue();case 6:J("Condo updated"),d.push("/condos/condo?id=".concat(N.id)),e.next=18;break;case 10:if(!1!==t.active){e.next=17;break}return e.next=13,ue();case 13:J("Action requested"),d.push("/"),e.next=18;break;case 17:J("Something went wrong!");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r,i,o,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=R.filter((function(e){return null==K.find((function(t){return t==e.user}))})),n=K.filter((function(e){return null==R.map((function(e){return e.user})).find((function(t){return e==t}))})),r=D(t),e.prev=3,r.s();case 5:if((i=r.n()).done){e.next=11;break}return o=i.value,e.next=9,Object(k.a)("condos/owners","delete",{id:o.id});case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),r.e(e.t0);case 16:return e.prev=16,r.f(),e.finish(16);case 19:c=D(n),e.prev=20,c.s();case 22:if((s=c.n()).done){e.next=28;break}return u=s.value,e.next=26,Object(k.a)("condos/owners","create",{user_id:u.id,condo_id:N.id});case 26:e.next=22;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(20),c.e(e.t1);case 33:return e.prev=33,c.f(),e.finish(33);case 36:case"end":return e.stop()}}),e,null,[[3,13,16,19],[20,30,33,36]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.query.id||d.push("/condos"),e.next=3,Object(k.a)("condos/index","find",{id:d.query.id});case 3:(t=e.sent).condos&&t.condos[0]?(n=t.condos[0],U(n),X(n.building_id)):(J("Condo not found"),d.push("/"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)("condos/owners","find",{condo_id:d.query.id});case 2:(t=e.sent).condo_owners&&(n=t.condo_owners,H(n),n[0]&&n[0].user&&(r=n.map((function(e){return e.user})),Y(r)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)("buildings");case 2:(t=e.sent).buildings&&B(t.buildings);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)("users/index","find",{email:ee});case 2:(t=e.sent).users&&G(t.users);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){r||u||ie||oe||d.push("/")}),[u,N,r]),Object(s.useEffect)((function(){N&&fe()}),[N]),Object(s.useEffect)((function(){u&&de()}),[u]),Object(s.useEffect)((function(){u&&le()}),[u]),Object(s.useEffect)((function(){u&&pe()}),[ee,u]),P(x.a,{center:!0,title:"Edit Condo | CON",loading:r},P(p.a,{className:_.mainContainer,container:!0,direction:"column",alignItems:"center",justify:"center",spacing:3},P(p.a,{item:!0},P(b.a,{variant:"outlined",square:!0},P(p.a,{className:_.loginContainer,container:!0,direction:"column",justify:"center",spacing:3},P(p.a,{item:!0},P(m.a,{variant:"h4"},"Edit Condo",N&&N.building?" ".concat(N.number," at ").concat(N.building.address):" unknown")),P(p.a,{item:!0},P(h.a,{fullWidth:!0,label:C("Number"),name:"number",value:N&&N.number?N.number:"",onChange:ce})),P(p.a,{item:!0},P(h.a,{fullWidth:!0,label:C("Size"),name:"size",value:N&&N.size?N.size:"",onChange:ce})),P(p.a,{item:!0},P(h.a,{fullWidth:!0,type:"number",InputProps:{inputProps:{min:0}},label:C("Storage spaces"),name:"storage_spaces",value:N&&N.storage_spaces?N.storage_spaces:"",onChange:ce})),P(p.a,{item:!0},P(h.a,{fullWidth:!0,type:"number",InputProps:{inputProps:{min:0}},label:C("Parking spaces"),name:"parking_spaces",value:N&&N.parking_spaces?N.parking_spaces:"",onChange:ce})),P(p.a,{item:!0},P(v.a,{fullWidth:!0},P(g.a,null,"Building"),P(O.a,{value:z?T:"",name:"building_id",onChange:ce},P(y.a,{value:"Add building"},"Add building"),z&&0!=z.length?z.map((function(e,t){return P(y.a,{value:e.id,key:t},"".concat(e.address))})):""))),ie?P(S.a,{label:"Owners",activeUsers:K,searchUsers:V,onChange:te,setActiveUsers:Y}):"",P(p.a,{item:!0,container:!0,spacing:2},P(p.a,{item:!0},P(j.a,{variant:"contained",color:"primary",component:"label"},"Image",P("input",{hidden:!0,type:"file",accept:"image/png, image/jpeg",onChange:function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.files[0],ae(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}))),P(p.a,{item:!0},P(j.a,{variant:"contained",color:"secondary",onClick:se},C("Save condo")))))))),P(w.a,{open:""!=W,autoHideDuration:6e3,onClose:function(){return J("")},message:W,ContentProps:{classes:{root:_.root}}}))}},ub5l:function(e,t,n){"use strict";var r=n("wx14"),a=n("rePB"),i=n("q1tI"),o=n.n(i),c=n("tRbT"),s=n("r9w1"),u=n("Ff2n"),l=(n("17x9"),n("iuhU")),f=n("H2TA"),d=n("NqtD");function p(e){var t,n,r;return t=e,n=0,r=1,e=(Math.min(Math.max(n,t),r)-n)/(r-n),e=(e-=1)*e*e+1}var b=i.forwardRef((function(e,t){var n,a=e.classes,o=e.className,c=e.color,s=void 0===c?"primary":c,f=e.disableShrink,b=void 0!==f&&f,m=e.size,h=void 0===m?40:m,v=e.style,g=e.thickness,O=void 0===g?3.6:g,y=e.value,j=void 0===y?0:y,w=e.variant,k=void 0===w?"indeterminate":w,x=Object(u.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),S={},P={},D={};if("determinate"===k||"static"===k){var _=2*Math.PI*((44-O)/2);S.strokeDasharray=_.toFixed(3),D["aria-valuenow"]=Math.round(j),"static"===k?(S.strokeDashoffset="".concat(((100-j)/100*_).toFixed(3),"px"),P.transform="rotate(-90deg)"):(S.strokeDashoffset="".concat((n=(100-j)/100,n*n*_).toFixed(3),"px"),P.transform="rotate(".concat((270*p(j/70)).toFixed(3),"deg)"))}return i.createElement("div",Object(r.a)({className:Object(l.a)(a.root,o,"inherit"!==s&&a["color".concat(Object(d.a)(s))],{indeterminate:a.indeterminate,static:a.static}[k]),style:Object(r.a)({width:h,height:h},P,v),ref:t,role:"progressbar"},D,x),i.createElement("svg",{className:a.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(l.a)(a.circle,b&&a.circleDisableShrink,{indeterminate:a.circleIndeterminate,static:a.circleStatic}[k]),style:S,cx:44,cy:44,r:(44-O)/2,fill:"none",strokeWidth:O})))})),m=Object(f.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(b),h=n("+bXu"),v=n("JSsD"),g=o.a.createElement;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=open&&e.searchUsers&&0===e.searchUsers.length;return g(c.a,{item:!0},g(h.a,{multiple:!0,style:{marginBottom:v.a.spacing(2)},filterSelectedOptions:!0,options:e.searchUsers,getOptionSelected:function(e,t){return e.name==t.name},value:e.activeUsers,onChange:function(t,n){return e.setActiveUsers(n)},loading:t,getOptionLabel:function(e){return e.name},renderInput:function(n){return g(s.a,Object(r.a)({},n,{label:e.label?e.label:"",variant:"outlined",placeholder:e.label?"Add ".concat(e.label.toLowerCase()):"Add recipient",InputProps:y(y({},n.InputProps),{},{endAdornment:g(o.a.Fragment,null,t?g(m,{color:"inherit",size:20}):null,n.InputProps.endAdornment)})}))}}))}}},[["S7Lx",0,2,4,1,3,5,6,7,8,12]]]);