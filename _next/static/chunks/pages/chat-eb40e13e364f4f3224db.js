_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{IsqK:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),o=a("ofer"),l=a("MquD"),u=i.forwardRef((function(e,t){var a=e.children,c=e.classes,u=e.className,d=e.disableTypography,m=void 0!==d&&d,f=e.inset,p=void 0!==f&&f,h=e.primary,b=e.primaryTypographyProps,g=e.secondary,v=e.secondaryTypographyProps,O=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),y=i.useContext(l.a).dense,j=null!=h?h:a;null==j||j.type===o.a||m||(j=i.createElement(o.a,Object(n.a)({variant:y?"body2":"body1",className:c.primary,component:"span",display:"block"},b),j));var x=g;return null==x||x.type===o.a||m||(x=i.createElement(o.a,Object(n.a)({variant:"body2",className:c.secondary,color:"textSecondary",display:"block"},v),x)),i.createElement("div",Object(n.a)({className:Object(s.a)(c.root,u,y&&c.dense,p&&c.inset,j&&x&&c.multiline),ref:t},O),j,x)}));t.a=Object(c.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(u)},SLcR:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),o=a("MquD"),l=i.forwardRef((function(e,t){var a=e.classes,c=e.className,l=Object(r.a)(e,["classes","className"]),u=i.useContext(o.a);return i.createElement("div",Object(n.a)({className:Object(s.a)(a.root,c,"flex-start"===u.alignItems&&a.alignItemsFlexStart),ref:t},l))}));t.a=Object(c.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(l)},"V/tC":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("q1tI")),i=(0,n(a("8/g6")).default)(r.default.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"}),"Chat");t.default=i},YrAi:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat",function(){return a("f/Qm")}])},"f/Qm":function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),r=a("o0o1"),i=a.n(r),s=a("HaE+"),c=a("ODXe"),o=a("q1tI"),l=a.n(o),u=a("nOHt"),d=a("R/WZ"),m=a("tRbT"),f=a("kKAo"),p=a("tVbE"),h=a("SLcR"),b=a("469l"),g=a("IsqK"),v=a("cBaE"),O=a("eD//"),y=a("wb2y"),j=a("r9w1"),x=a("csfp"),w=a("PsDL"),k=a("LYUY"),S=Object(k.a)(l.a.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send"),E=a("9Koi"),N=a("JSsD"),I=a("tr08"),D=a("ofer"),C=l.a.createElement,P=Object(d.a)((function(e){return{messageBubble:{padding:e.spacing(2),wordWrap:"break-word",height:"max-content",margin:e.spacing(.5)},messageName:{fontSize:"0.75rem",opacity:"50%"}}})),T=function(e){var t=Object(I.a)(),a=P();return C(m.a,{item:!0,container:!0,justify:e.me?"flex-end":"flex-start",xs:12},C(m.a,{item:!0,xs:6},C(f.a,{className:a.messageBubble,elevation:0,style:{backgroundColor:t.palette[e.me?"primary":"secondary"].main}},function(){if(e.showName&&!e.me)return C(D.a,{className:a.messageName},"".concat(e.message.user.name))}(),C(D.a,null,e.message.data))))},R=l.a.createElement,A=Object(d.a)((function(e){return{mainContainer:{padding:e.spacing(2),width:"100%"},mainGrid:{height:"max-content"},textEllipsis:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},round:{borderRadius:"".concat(e.spacing(1),"px")}}})),M=function(e){var t=Object(E.a)().t,a=A(),n=Object(o.useState)(""),r=n[0],i=n[1],s=Object(o.useRef)(null);function l(){e.onSend&&""!=r&&e.onSend(r),i("")}return Object(o.useEffect)((function(){s&&s.current.scrollIntoView()}),[s,e.messages]),R(m.a,{className:a.mainGrid,container:!0,spacing:4},R(m.a,{item:!0,xs:12,style:{height:"70vh",overflowY:"scroll",paddingTop:N.a.spacing(1)}},R(O.a,null,e.messages?e.messages.map((function(t,a){var n=Object(c.a)(t,2),r=n[0],i=n[1];return R(p.a,{key:a},R(T,{me:i,message:r,showName:e.users.length>1}))})):""),R("div",{ref:s})),R(y.a,{flexItem:!0}),R(m.a,{item:!0,container:!0,alignItems:"center",justify:"center",wrap:"nowrap",spacing:1,xs:12},R(m.a,{item:!0,className:a.round,style:{width:"100%",marginLeft:N.a.spacing(2)}},R(j.a,{fullWidth:!0,placeholder:t("Aa"),variant:"outlined",value:r,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&l()}})),R(m.a,{item:!0},R(x.a,{title:t("Send")},R(w.a,{onClick:function(){return l()}},R(S,{color:"secondary"}))))))},H=l.a.createElement,L=Object(d.a)((function(e){return{container:{height:"100%",width:"100%",padding:e.spacing(2)},chatHeadsContainer:{height:"100%",width:"100%",overflowY:"scroll"},chatHeadContainer:{borderRadius:"".concat(e.spacing(1),"px")},textEllipsis:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}})),_=function(e){var t=L();return H(p.a,{className:t.chatHeadContainer,button:!0,onClick:function(){return e.onSelect(e.users)}},H(h.a,null,H(b.a,{src:e.users[0].image?e.users[0].image:null},e.users[0].name.split(" ").map((function(e){return e[0]})).slice(0,2).join(""))),H(g.a,{primary:H(D.a,{className:t.textEllipsis},e.users.map((function(e){return e.name})).join(", ")),secondary:H("span",{className:t.textEllipsis},e.children)}))},U=function(e){var t=L();return H(O.a,{className:t.chatHeadsContainer},e.heads.map((function(t,a){return H(_,{key:a,users:t.users,onSelect:function(t){return e.onSelect(t)}},t.message)})))},q=a("V/tC"),F=a.n(q),z=a("ub5l"),B=a("apO0"),W=l.a.createElement,V=Object(d.a)({round:{borderRadius:"".concat(N.a.spacing(1),"px")}});t.default=function(){var e=V(),t=Object(u.useRouter)(),a=Object(v.e)(),r=Object(c.a)(a,2),l=r[0],d=r[1],O=Object(o.useState)([]),y=O[0],j=O[1],x=Object(o.useState)([]),w=x[0],k=x[1],S=Object(o.useState)([]),E=S[0],I=S[1],D=Object(o.useState)([]),C=D[0],P=D[1],T=Object(o.useState)(""),R=T[0],A=T[1],H=Object(o.useState)([]),L=H[0],_=H[1];return Object(o.useEffect)((function(){l||d||t.push("/")}),[d,l]),Object(v.d)(Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)("messages");case 2:(t=e.sent).messages&&j(t.messages);case 4:case"end":return e.stop()}}),e)}))),v.b),Object(o.useEffect)((function(){l||d||t.push("/")}),[d,l]),Object(o.useEffect)((function(){if(d){var e=[],t={};Object(n.a)(y).reverse().forEach((function(a){var r=[a.user].concat(Object(n.a)(a.recipients?a.recipients:[]));if(r.length>1&&(r=r.filter((function(e){return e.id!=d.id}))),(r=r.sort((function(e,t){return e.name.localeCompare(t.name)}))).length>0){var i=r.map((function(e){return e.id})).join(",");t[i]||(e.push(i),t[i]={users:r,message:a.data})}})),P(e.map((function(e){return t[e]})))}}),[y,d]),Object(o.useEffect)((function(){C&&C.length>0&&!E&&I(C[0].users)}),[E,C]),Object(o.useEffect)((function(){E&&k(y.filter((function(e){if(1===E.length&&E[0].id===d.id)return e.user.id===d.id&&e.recipients&&1===e.recipients.length&&e.recipients[0].id===d.id;var t=[e.user].concat(Object(n.a)(e.recipients?e.recipients:[]));return t.length==E.length+1&&[d].concat(Object(n.a)(E)).every((function(e){return t.some((function(t){return e.id===t.id}))}))})))}),[E,y,d]),Object(o.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)("users/index","find",{email:R});case 2:(t=e.sent).users&&_(t.users);case 4:case"end":return e.stop()}}),e)})))()}),[R,d]),W(B.a,{title:"Chat",loading:l},W(m.a,{item:!0,container:!0,spacing:3},W(m.a,{item:!0,xs:4},W(f.a,{style:{padding:N.a.spacing(1)}},W(p.a,{button:!0,className:e.round,onClick:function(){return I([])}},W(h.a,null,W(b.a,null,W(F.a,null))),W(g.a,{primary:"New Message"})),W(U,{heads:""!=R?L.map((function(e){return{users:[e],message:""}})):C,onSelect:function(e){I(e),A("")}}))),W(m.a,{item:!0,xs:8},W(f.a,null,W(z.a,{activeUsers:E,searchUsers:L.filter((function(e){return!d||e.id!=d.id})),onChange:A,setActiveUsers:I}),W(M,{users:E,messages:w.map((function(e){return[e,e.user.id==d.id]})),onSend:function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&E&&E.length>0)){e.next=5;break}return e.next=3,Object(v.a)("messages","create",{recipients:E.map((function(e){return e.id})),data:t});case 3:a=e.sent,j([].concat(Object(n.a)(y),[a]));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})))))}},ub5l:function(e,t,a){"use strict";var n=a("wx14"),r=a("rePB"),i=a("q1tI"),s=a.n(i),c=a("tRbT"),o=a("r9w1"),l=a("Ff2n"),u=(a("17x9"),a("iuhU")),d=a("H2TA"),m=a("NqtD");function f(e){var t,a,n;return t=e,a=0,n=1,e=(Math.min(Math.max(a,t),n)-a)/(n-a),e=(e-=1)*e*e+1}var p=i.forwardRef((function(e,t){var a,r=e.classes,s=e.className,c=e.color,o=void 0===c?"primary":c,d=e.disableShrink,p=void 0!==d&&d,h=e.size,b=void 0===h?40:h,g=e.style,v=e.thickness,O=void 0===v?3.6:v,y=e.value,j=void 0===y?0:y,x=e.variant,w=void 0===x?"indeterminate":x,k=Object(l.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),S={},E={},N={};if("determinate"===w||"static"===w){var I=2*Math.PI*((44-O)/2);S.strokeDasharray=I.toFixed(3),N["aria-valuenow"]=Math.round(j),"static"===w?(S.strokeDashoffset="".concat(((100-j)/100*I).toFixed(3),"px"),E.transform="rotate(-90deg)"):(S.strokeDashoffset="".concat((a=(100-j)/100,a*a*I).toFixed(3),"px"),E.transform="rotate(".concat((270*f(j/70)).toFixed(3),"deg)"))}return i.createElement("div",Object(n.a)({className:Object(u.a)(r.root,s,"inherit"!==o&&r["color".concat(Object(m.a)(o))],{indeterminate:r.indeterminate,static:r.static}[w]),style:Object(n.a)({width:b,height:b},E,g),ref:t,role:"progressbar"},N,k),i.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(u.a)(r.circle,p&&r.circleDisableShrink,{indeterminate:r.circleIndeterminate,static:r.circleStatic}[w]),style:S,cx:44,cy:44,r:(44-O)/2,fill:"none",strokeWidth:O})))})),h=Object(d.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(p),b=a("+bXu"),g=a("JSsD"),v=s.a.createElement;function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){var t=open&&e.searchUsers&&0===e.searchUsers.length;return v(c.a,{item:!0},v(b.a,{multiple:!0,style:{marginBottom:g.a.spacing(2)},filterSelectedOptions:!0,options:e.searchUsers,getOptionSelected:function(e,t){return e.name==t.name},value:e.activeUsers,onChange:function(t,a){return e.setActiveUsers(a)},loading:t,getOptionLabel:function(e){return e.name},renderInput:function(a){return v(o.a,Object(n.a)({},a,{label:e.label?e.label:"",variant:"outlined",placeholder:e.label?"Add ".concat(e.label.toLowerCase()):"Add recipient",InputProps:y(y({},a.InputProps),{},{endAdornment:v(s.a.Fragment,null,t?v(h,{color:"inherit",size:20}):null,a.InputProps.endAdornment)})}))}}))}},wb2y:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),o=a("ye/S"),l=i.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,o=e.classes,l=e.className,u=e.component,d=void 0===u?"hr":u,m=e.flexItem,f=void 0!==m&&m,p=e.light,h=void 0!==p&&p,b=e.orientation,g=void 0===b?"horizontal":b,v=e.role,O=void 0===v?"hr"!==d?"separator":void 0:v,y=e.variant,j=void 0===y?"fullWidth":y,x=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(d,Object(n.a)({className:Object(s.a)(o.root,l,"fullWidth"!==j&&o[j],c&&o.absolute,f&&o.flexItem,h&&o.light,"vertical"===g&&o.vertical),role:O,ref:t},x))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(o.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)}},[["YrAi",0,2,4,1,3,5,6,7,12]]]);