_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),i=n.n(a),r=n("HaE+"),o=n("ODXe"),s=n("q1tI"),c=n.n(s),u=n("9Koi"),l=n("R/WZ"),d=n("30+C"),f=n("lFIR"),m=n("Ie8z"),p=n("oa/T"),b=n("ofer"),v=n("tRbT"),g=n("6u8J"),h=n("kKAo"),w=n("r9w1"),O=n("Z3vd"),j=n("hlie"),x=n("cBaE"),y=n("nOHt"),E=n("KQm4"),k=n("79Xs"),N=n("apO0"),C=n("VH89"),T=n("xM+5"),S=c.a.createElement,R=function(e){var t=Object(s.useState)([]),n=t[0],a=t[1],o=Object(s.useState)(""),c=o[0],u=o[1];Object(x.d)(Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)("posts/index");case 2:(t=e.sent).posts&&a(t.posts.reverse());case 4:case"end":return e.stop()}}),e)}))),1e4);var l=function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)("posts/index","delete",{id:t.id});case 2:"OK"==e.sent.status?(a(n.filter((function(e){return e!=t}))),u("Post deleted")):u("Permission required");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return S(N.a,{title:"CON"},S(v.a,{container:!0,justify:"center",spacing:3},S(v.a,{item:!0,xs:12,md:8},S(T.a,{onSend:function(){var e=Object(r.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)("posts/index","create",{type:"post",data:t});case 2:(r=e.sent).id&&a([r].concat(Object(E.a)(n)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),S(v.a,{item:!0,container:!0,xs:12,md:8,spacing:3},S(C.a,{me:e.me,posts:n,onDelete:l})),S(k.a,{open:""!=c,autoHideDuration:6e3,onClose:function(){return u("")},message:c})))},F=n("zOGZ"),I=c.a.createElement,A=Object(l.a)((function(){return{root:{height:"100vh",background:"linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1) ), url('bg.jpg')"},mainContainer:{width:"100%",height:"100%"},register:{width:"fit-content",padding:"20px"},inputField:{marginTop:"10px"},card:{maxWidth:"345px",margin:"20px"},centerText:{textAlign:"center"},associations:{padding:"20px"}}})),H=function(e){var t=A();return I(d.a,{className:t.card},I(f.a,{disabled:!0},I(m.a,{component:"img",height:"140",image:e.image?e.image:"https://media.istockphoto.com/photos/fountain-at-complex-of-apartment-residential-buildings-quarter-picture-id949087660?k=6&m=949087660&s=612x612&w=0&h=nWktqzvAKOgF8lMqok74lWnhqYdEiSjHzwn2o_tsTh8="}),I(p.a,null,I(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name||"Condo Name"),I(b.a,{variant:"body2",color:"textSecondary",component:"p"},e.members||"Condo Members"))))};t.default=function(){var e=Object(y.useRouter)(),t=A(),n=Object(u.a)(),a=n.t,c=(n.i18n,Object(s.useState)("")),l=c[0],d=c[1],f=Object(s.useState)(""),m=f[0],p=f[1],E=Object(s.useState)(""),k=E[0],C=E[1],T=Object(s.useState)(""),S=T[0],W=T[1],_=Object(x.e)(),q=Object(o.a)(_,2),V=q[0],P=q[1],z=Object(s.useState)(null),D=z[0],M=z[1],X=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)("/associations/index","find",{});case 2:return t=e.sent,e.abrupt("return",t.associations?t.associations:[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=M,e.next=3,X();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),V?I(F.a,null):P&&P.id?I(R,{me:P}):I(N.a,{noHeader:!0,title:"CON"},I("div",{className:t.root},I(v.a,{className:t.mainContainer,container:!0,direction:"row",alignItems:"center",justify:"center"},I(v.a,{item:!0,sm:3},I(g.a,{in:!0,timeout:1e3,direction:"right"},I("div",null,I(b.a,{variant:"h3"},a("Welcome to CON")),I(b.a,{variant:"body1"},a("The Condo-Association Online Network System (CON) allows members to share information and ideas with ease"))))),I(v.a,{item:!0,sm:3},I(v.a,{container:!0,justify:"center"},I(g.a,{in:!0,timeout:1e3,direction:"left"},I(h.a,{variant:"outlined",square:!0,className:t.register},I(b.a,{variant:"h5"},a("Join CON Today")),I(b.a,{variant:"caption"},a("Enter your info and hit register. We'll")),I("div",null,I(b.a,{variant:"caption"},a("create your account and log you in "))),I("div",null,I(b.a,{variant:"caption"},a("right away!"))),I("div",{className:t.inputField},I(w.a,{label:a("Email"),variant:"outlined",value:l,onChange:function(e){return d(e.target.value)}})),I("div",{className:t.inputField},I(w.a,{label:a("Password"),variant:"outlined",value:m,onChange:function(e){return p(e.target.value)}})),I("div",{className:t.inputField},I(w.a,{label:a("Name"),variant:"outlined",value:k,onChange:function(e){return C(e.target.value)}})),I("div",{className:t.inputField},I(w.a,{label:a("Address"),variant:"outlined",value:S,onChange:function(e){return W(e.target.value)}})),I("div",{className:t.inputField},I(O.a,{variant:"contained",fullWidth:!0,onClick:Object(r.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.a)("/users/index","create",{email:l,password:m,name:k,address:S});case 2:return t.next=4,Object(x.a)("/users/login","create",{email:l,password:m});case 4:(n=t.sent).jwt&&(localStorage.setItem("jwt",n.jwt),e.push("/"));case 6:case"end":return t.stop()}}),t)})))},a("Register"))),I("div",{className:t.inputField},I(b.a,{variant:"caption"},a("Already have an account? "),I(j.a,{href:"/login"},a("Login Now"))))))))),I(v.a,{className:t.associations,container:!0,direction:"row",alignItems:"center",justify:"center"},I(v.a,{item:!0,sm:12,className:t.centerText},I(b.a,{variant:"h5"},a("Registered Associations"))),D&&D.map((function(e){return I(v.a,{item:!0},I(H,e))})))))}},"6u8J":function(e,t,n){"use strict";var a=n("wx14"),i=n("Ff2n"),r=n("q1tI"),o=(n("17x9"),n("i8i4")),s=n("l3Wi"),c=n("dRu9"),u=n("bfFb"),l=n("tr08"),d=n("wpWl"),f=n("4Hym");function m(e,t){var n=function(e,t){var n,a=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var i=window.getComputedStyle(t);n=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}var r=0,o=0;if(n&&"none"!==n&&"string"===typeof n){var s=n.split("(")[1].split(")")[0].split(",");r=parseInt(s[4],10),o=parseInt(s[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(r-a.left,"px)"):"right"===e?"translateX(-".concat(a.left+a.width-r,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-a.top,"px)"):"translateY(-".concat(a.top+a.height-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var p={enter:d.b.enteringScreen,exit:d.b.leavingScreen},b=r.forwardRef((function(e,t){var n=e.children,d=e.direction,b=void 0===d?"down":d,v=e.in,g=e.onEnter,h=e.onEntered,w=e.onEntering,O=e.onExit,j=e.onExited,x=e.onExiting,y=e.style,E=e.timeout,k=void 0===E?p:E,N=e.TransitionComponent,C=void 0===N?c.a:N,T=Object(i.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),S=Object(l.a)(),R=r.useRef(null),F=r.useCallback((function(e){R.current=o.findDOMNode(e)}),[]),I=Object(u.a)(n.ref,F),A=Object(u.a)(I,t),H=function(e){return function(t){e&&(void 0===t?e(R.current):e(R.current,t))}},W=H((function(e,t){m(b,e),Object(f.b)(e),g&&g(e,t)})),_=H((function(e,t){var n=Object(f.a)({timeout:k,style:y},{mode:"enter"});e.style.webkitTransition=S.transitions.create("-webkit-transform",Object(a.a)({},n,{easing:S.transitions.easing.easeOut})),e.style.transition=S.transitions.create("transform",Object(a.a)({},n,{easing:S.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",w&&w(e,t)})),q=H(h),V=H(x),P=H((function(e){var t=Object(f.a)({timeout:k,style:y},{mode:"exit"});e.style.webkitTransition=S.transitions.create("-webkit-transform",Object(a.a)({},t,{easing:S.transitions.easing.sharp})),e.style.transition=S.transitions.create("transform",Object(a.a)({},t,{easing:S.transitions.easing.sharp})),m(b,e),O&&O(e)})),z=H((function(e){e.style.webkitTransition="",e.style.transition="",j&&j(e)})),D=r.useCallback((function(){R.current&&m(b,R.current)}),[b]);return r.useEffect((function(){if(!v&&"down"!==b&&"right"!==b){var e=Object(s.a)((function(){R.current&&m(b,R.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[b,v]),r.useEffect((function(){v||D()}),[v,D]),r.createElement(C,Object(a.a)({nodeRef:R,onEnter:W,onEntered:q,onEntering:_,onExit:P,onExited:z,onExiting:V,appear:!0,in:v,timeout:k},T),(function(e,t){return r.cloneElement(n,Object(a.a)({ref:A,style:Object(a.a)({visibility:"exited"!==e||v?void 0:"hidden"},y,n.props.style)},t))}))}));t.a=b},Ie8z:function(e,t,n){"use strict";var a=n("wx14"),i=n("Ff2n"),r=n("q1tI"),o=(n("17x9"),n("iuhU")),s=n("H2TA"),c=["video","audio","picture","iframe","img"],u=r.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,l=e.component,d=void 0===l?"div":l,f=e.image,m=e.src,p=e.style,b=Object(i.a)(e,["children","classes","className","component","image","src","style"]),v=-1!==c.indexOf(d),g=!v&&f?Object(a.a)({backgroundImage:'url("'.concat(f,'")')},p):p;return r.createElement(d,Object(a.a)({className:Object(o.a)(s.root,u,v&&s.media,-1!=="picture img".indexOf(d)&&s.img),ref:t,style:g,src:v?f||m:void 0},b),n)}));t.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(u)},JSsD:function(e,t,n){"use strict";var a=n("viY9"),i=Object(a.a)({palette:{type:"dark",primary:{main:"#0081A7"},secondary:{main:"#00AFB9"}}});t.a=i},lFIR:function(e,t,n){"use strict";var a=n("wx14"),i=n("Ff2n"),r=n("q1tI"),o=(n("17x9"),n("iuhU")),s=n("H2TA"),c=n("VD++"),u=r.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,l=e.focusVisibleClassName,d=Object(i.a)(e,["children","classes","className","focusVisibleClassName"]);return r.createElement(c.a,Object(a.a)({className:Object(o.a)(s.root,u),focusVisibleClassName:Object(o.a)(l,s.focusVisible),ref:t},d),n,r.createElement("span",{className:s.focusHighlight}))}));t.a=Object(s.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(u)},"xM+5":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("30+C"),o=n("oa/T"),s=n("r9w1"),c=n("o4QW"),u=n("Z3vd"),l=n("9Koi"),d=i.a.createElement;t.a=function(e){var t=Object(l.a)().t,n=Object(a.useState)(""),i=n[0],f=n[1];return d(r.a,null,d(o.a,null,d(s.a,{variant:"outlined",multiline:!0,rows:i.split("\n").length,fullWidth:!0,value:i,autoComplete:"off",placeholder:t("What's on your mind?"),onChange:function(e){return f(e.target.value)}})),d(c.a,null,d(u.a,{variant:"contained",fullWidth:!0,color:"primary",onClick:function(){return e.onSend&&""!=i&&e.onSend(i),void f("")}},t("Post"))))}}},[["/EDR",0,2,4,10,1,3,5,6,7,8,9,11]]]);