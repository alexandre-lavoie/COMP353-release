_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{E34x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notifications",function(){return n("pHDb")}])},pHDb:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),c=n.n(a),i=n("HaE+"),o=n("ODXe"),r=n("q1tI"),s=n.n(r),u=n("R/WZ"),l=n("tRbT"),d=n("cBaE"),m=n("apO0"),f=n("kKAo"),p=n("469l"),b=n("ofer"),g=n("csfp"),j=n("PsDL"),w=n("wd/R"),O=n.n(w),v=n("LYUY"),h=Object(v.a)(s.a.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility"),_=Object(v.a)(s.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),D=n("9Koi"),E=s.a.createElement,N=Object(u.a)((function(e){return{container:{padding:e.spacing(2)},time:{fontSize:"0.75rem",opacity:"50%"}}}));var x=function(e){var t=N(),n=Object(D.a)().t,a=function(e){switch(e.obj_type){case"post":var t=e.obj;return t?{message:"".concat(t.user.name," wrote a new post."),url:"/"}:{message:"Deleted post.",url:"/"};case"message":var n=e.obj;return n?{message:"".concat(n.user.name," messaged you."),url:"/chat"}:{message:"Deleted message.",url:"/"};case"condo":var a=e.obj;return a?{message:"New Condo ".concat(a.number," at ").concat(a.building.address," created."),url:"/condos/condo?id=".concat(a.id)}:{message:"Deleted condo.",url:"/"};case"association":var c=e.obj;return c?{message:"New Association ".concat(c.name," created."),url:"/associations/association?id=".concat(c.id)}:{message:"Deleted association.",url:"/"};case"reply":var i=e.obj;return i?{message:"".concat(i.user.name," replied to your post."),url:"/"}:{message:"Deleted rely.",url:"/"};case"building":var o=e.obj;return o?{message:"New Building ".concat(o.address," created."),url:"/buildings/building?id=".concat(o.id)}:{message:"Deleted association.",url:"/"};default:return{message:"Unimplemented ".concat(e.obj_type),url:"/"}}}(e.notification);return E(l.a,{item:!0,xs:12},E(f.a,{className:t.container},E(l.a,{alignItems:"center",container:!0,spacing:2},E(l.a,{item:!0},E(p.a,null,e.notification.obj_type[0].toUpperCase())),E(l.a,{xs:!0,item:!0},E(b.a,null,a.message),E(b.a,{className:t.time},O()(e.notification.time).fromNow())),E(l.a,{xs:!0,spacing:2,container:!0,item:!0,justify:"flex-end"},E(g.a,{title:n("View")},E(j.a,{onClick:function(){return e.onClick(a.url)}},E(h,null))),E(g.a,{title:n("Delete")},E(j.a,{onClick:function(){return e.onDelete()}},E(_,null)))))))},y=n("nOHt"),k=s.a.createElement,C=Object(u.a)((function(){return{}}));t.default=function(){C();var e=Object(y.useRouter)(),t=(Object(D.a)().t,Object(d.e)()),n=Object(o.a)(t,2),a=n[0],s=(n[1],Object(r.useState)([])),u=s[0],f=s[1];return Object(d.d)(Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)("notifications");case 2:(t=e.sent).notifications&&f(t.notifications.reverse());case 4:case"end":return e.stop()}}),e)}))),d.b),k(m.a,{title:"Notifications | CON",loading:a},k(l.a,{container:!0,spacing:2},u.map((function(t,n){return k(x,{key:t.id,onClick:function(){var n=Object(i.a)(c.a.mark((function n(a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.a)("notifications","delete",{id:t.id});case 2:e.push(a);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),onDelete:Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)("notifications","delete",{id:t.id});case 2:f(u.filter((function(e){return e.id!=t.id})));case 3:case"end":return e.stop()}}),e)}))),notification:t})}))))}}},[["E34x",0,2,4,10,1,3,5,6,9]]]);