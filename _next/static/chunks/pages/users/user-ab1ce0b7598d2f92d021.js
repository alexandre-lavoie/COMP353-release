_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[34],{"5RF3":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),s=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M11.99 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm3.61 6.34c1.07 0 1.93.86 1.93 1.93 0 1.07-.86 1.93-1.93 1.93-1.07 0-1.93-.86-1.93-1.93-.01-1.07.86-1.93 1.93-1.93zm-6-1.58c1.3 0 2.36 1.06 2.36 2.36 0 1.3-1.06 2.36-2.36 2.36s-2.36-1.06-2.36-2.36c0-1.31 1.05-2.36 2.36-2.36zm0 9.13v3.75c-2.4-.75-4.3-2.6-5.14-4.96 1.05-1.12 3.67-1.69 5.14-1.69.53 0 1.2.08 1.9.22-1.64.87-1.9 2.02-1.9 2.68zM11.99 20c-.27 0-.53-.01-.79-.04v-4.07c0-1.42 2.94-2.13 4.4-2.13 1.07 0 2.92.39 3.84 1.15-1.17 2.97-4.06 5.09-7.45 5.09z"}),"SupervisedUserCircle");t.default=s},"80KL":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),s=(0,a(n("8/g6")).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M8.17 5.7L1 10.48V21h5v-8h4v8h5V10.25z"}),r.default.createElement("path",{d:"M10 3v1.51l2 1.33L13.73 7H15v.85l2 1.34V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"})),"HomeWork");t.default=s},"9SoY":function(e,t,n){"use strict";n.r(t);var a=n("wx14"),r=n("o0o1"),s=n.n(r),i=n("HaE+"),c=n("rePB"),u=n("ODXe"),o=n("q1tI"),l=n.n(o),d=n("R/WZ"),p=n("tRbT"),f=n("30+C"),m=n("50B7"),h=n("ofer"),b=n("r9w1"),y=n("79Xs"),v=n("wb2y"),O=n("cBaE"),g=n("eD//"),j=n("tVbE"),x=n("IsqK"),w=n("SLcR"),S=n("469l"),E=n("y9ZN"),_=n.n(E),q=n("80KL"),P=n.n(q),I=n("Rme4"),k=n.n(I),N=n("+bXu"),T=n("5RF3"),R=n.n(T),C=n("nOHt"),H=n("JSsD"),L=n("9Koi"),M=n("VH89"),z=n("rcHE"),D=n("apO0"),F=l.a.createElement;function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=Object(d.a)({panel:{marginTop:H.a.spacing(4)},nested:{paddingLeft:H.a.spacing(4)}}),A=["none","friend","family","professor","husband","wife","student","son","daughter"];t.default=function(e){var t=Object(O.e)(),n=Object(u.a)(t,2),r=n[0],c=n[1],d=Object(L.a)().t,E=Object(C.useRouter)(),q=B(),I=Object(o.useState)(""),T=I[0],H=I[1],V=Object(o.useState)(null),W=V[0],X=V[1],Z=Object(o.useState)(null),J=Z[0],U=Z[1],Y=Object(o.useState)(null),G=Y[0],Q=Y[1],$=Object(o.useState)(null),ee=$[0],te=$[1],ne=Object(o.useState)(null),ae=ne[0],re=ne[1],se=Object(o.useState)(null),ie=se[0],ce=se[1],ue=Object(o.useState)(null),oe=ue[0],le=ue[1],de=Object(o.useState)("none"),pe=de[0],fe=de[1],me=Object(o.useState)(""),he=me[0],be=me[1];var ye=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)("posts/index","delete",{id:t.id});case 2:"OK"==e.sent.status?(Q(G.filter((function(e){return e!=t}))),H("Post deleted")):H("Permission required");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function ve(){return(ve=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!=pe){e.next=7;break}if(!W){e.next=5;break}return e.next=4,Object(O.a)("users/relationships","create",{user_id:W.id,type:t});case 4:n=e.sent;case 5:e.next=19;break;case 7:if("none"!=t){e.next=15;break}if(!oe){e.next=12;break}return e.next=11,Object(O.a)("users/relationships","delete",{id:oe.id});case 11:n=e.sent;case 12:n.status&&fe("none"),e.next=19;break;case 15:if(!oe){e.next=19;break}return e.next=18,Object(O.a)("users/relationships","update",{id:oe.id,type:t});case 18:n=e.sent;case 19:n.type&&fe(t);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){r||c||E.push("/")}),[c,r]),Object(o.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(i.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.query.id||E.push("/"),ie&&clearInterval(ie),e.next=4,Object(O.a)("users/index","find",{id:E.query.id});case 4:return(t=e.sent).users&&(n=t.users[0])&&(X(n),n.associations&&U(n.associations),n.relationships&&re(n.relationships),n.condos&&te(n.condos)),e.next=8,Object(O.a)("posts/index","find",{user_id:E.query.id});case 8:(a=e.sent).posts&&Q(a.posts.reverse());case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var n=setInterval((function(){return e()}),1e4);return ce(n),function(){clearInterval(n)}}),[E.query.id]),Object(o.useEffect)((function(){Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=5;break}return e.next=3,Object(O.a)("users/relationships","find",{user_id:c.id,user_id_to:E.query.id});case 3:(t=e.sent).user_relationships&&t.user_relationships[0]?(n=t.user_relationships[0],le(n),fe(n.type),console.log(n.type)):fe("none");case 5:case"end":return e.stop()}}),e)})))()}),[pe,W]),F(D.a,{title:W?"".concat(W.name," | CON"):"CON",loading:r||null==W},F(p.a,{container:!0,spacing:4},F(p.a,{item:!0,container:!0,direction:"column",spacing:3,xs:12,md:8},F(p.a,{item:!0},F(f.a,null,F(m.a,{avatar:F(S.a,null,F(R.a,null)),title:F(p.a,{container:!0,alignItems:"center",justify:"space-between"},F(p.a,{item:!0},F(h.a,null,"Set Relationship")),F(p.a,{item:!0},F(N.a,{id:"relationBox",freeSolo:!0,style:{width:150},options:A,getOptionLabel:function(e){return e},value:pe,inputValue:he,onInputChange:function(e,t){return be(t)},renderInput:function(e){return F(b.a,Object(a.a)({},e,{variant:"outlined"}))},onChange:function(e,t){return function(e){return ve.apply(this,arguments)}(t)}})))}))),F(p.a,{item:!0,container:!0,direction:"column",spacing:3},F(M.a,{me:c,posts:G,onDelete:ye})),F(y.a,{open:""!=T,autoHideDuration:6e3,onClose:function(){return H("")},message:T})),F(p.a,{item:!0,xs:12,md:4},F(f.a,null,F(g.a,null,F(j.a,null,F(w.a,null,F(S.a,{src:W?W.image:null})),F(x.a,{primary:W?W.name:"name"})),F(j.a,null,F(x.a,{primary:F(h.a,{align:"justify",component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at varius purus, nec placerat tortor. Cras sit amet vulputate dolor. Phasellus sit amet libero vitae sapien sagittis ultrices sit amet sed nisi. Curabitur commodo lorem in ligula lacinia, volutpat tincidunt ipsum ornare. Donec lacinia odio facilisis odio placerat fermentum.")})))),F(f.a,{className:q.panel},F(g.a,null,F(j.a,null,F(w.a,null,F(S.a,null,F(R.a,null))),F(x.a,{primary:d("Associations"),secondary:J?J.length:0})),J&&0!=J.length?F(l.a.Fragment,null,F(v.a,null),F(z.a,{heads:J.map((function(e){return{name:e.name,id:e.id,image:e.image}})),onSelect:function(e){return E.push("/associations/association?id=".concat(e))}})):"")),F(f.a,{className:q.panel},F(g.a,null,F(j.a,null,F(w.a,null,F(S.a,null,F(P.a,null))),F(x.a,{primary:d("Properties"),secondary:ee?ee.length:0})),ee&&0!=ee.length?F(l.a.Fragment,null,F(v.a,null),F(z.a,{heads:ee.map((function(e){return K(K({},e),{},{id:e.id,name:"condo ".concat(e.building_id,"-").concat(e.number)})})),icon:F(k.a,null),onSelect:function(e){return E.push("/condos/condo?id=".concat(e))}})):"")),F(f.a,{className:q.panel},F(g.a,null,F(j.a,null,F(w.a,null,F(S.a,null,F(_.a,null))),F(x.a,{primary:d("Relationships"),secondary:ae?ae.length:0})),ae&&0!=ae.length?F(l.a.Fragment,null,F(v.a,null),F(z.a,{heads:function(){var e=[],t=ae;return ae.forEach((function(n,a){return e.push(K(K({},n),{},{subname:t[a].relation_type}))})),e}(),onSelect:function(e){return E.push("/users/user?id=".concat(e))}})):"")))))}},IsqK:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),s=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),u=n("ofer"),o=n("MquD"),l=s.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,d=e.disableTypography,p=void 0!==d&&d,f=e.inset,m=void 0!==f&&f,h=e.primary,b=e.primaryTypographyProps,y=e.secondary,v=e.secondaryTypographyProps,O=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),g=s.useContext(o.a).dense,j=null!=h?h:n;null==j||j.type===u.a||p||(j=s.createElement(u.a,Object(a.a)({variant:g?"body2":"body1",className:c.primary,component:"span",display:"block"},b),j));var x=y;return null==x||x.type===u.a||p||(x=s.createElement(u.a,Object(a.a)({variant:"body2",className:c.secondary,color:"textSecondary",display:"block"},v),x)),s.createElement("div",Object(a.a)({className:Object(i.a)(c.root,l,g&&c.dense,m&&c.inset,j&&x&&c.multiline),ref:t},O),j,x)}));t.a=Object(c.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(l)},Rme4:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),s=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=s},SLcR:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),s=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),u=n("MquD"),o=s.forwardRef((function(e,t){var n=e.classes,c=e.className,o=Object(r.a)(e,["classes","className"]),l=s.useContext(u.a);return s.createElement("div",Object(a.a)({className:Object(i.a)(n.root,c,"flex-start"===l.alignItems&&n.alignItemsFlexStart),ref:t},o))}));t.a=Object(c.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(o)},rcHE:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("R/WZ"),i=n("eD//"),c=n("tVbE"),u=n("SLcR"),o=n("469l"),l=n("IsqK"),d=r.a.createElement,p=function(e){return d(c.a,{button:!0,onClick:function(){return e.onSelect(e.head.id)}},d(u.a,null,d(o.a,{src:e.head.image},e.icon?e.icon:e.head.name.charAt(0))),d(l.a,{primary:e.head.name,secondary:e.head.subname?e.head.subname:""}))},f=r.a.createElement,m=Object(s.a)((function(e){return{chatHeadsContainer:{overflowY:"scroll"}}}));t.a=function(e){var t=m();return e.heads.length>0?f(i.a,{className:t.chatHeadsContainer},e.heads.sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(t,n){return f(p,{key:n,head:t,icon:e.icon,onSelect:function(t){return e.onSelect(t)}})}))):f(r.a.Fragment,null)}},uxrG:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/user",function(){return n("9SoY")}])},y9ZN:function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),s=(0,a(n("8/g6")).default)(r.default.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"People");t.default=s}},[["uxrG",0,2,4,10,1,3,5,6,7,8,9,12,11]]]);