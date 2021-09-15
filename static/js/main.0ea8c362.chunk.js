(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var r,i,o,a,c,s,l,p,d,m,b,g,h,u,x,j,f,w,O,y=n(0),v=n.n(y),k=n(37),S=n.n(k),C=(n(48),n(7)),N=n(6),z=n(5),R=n(42),T=function(t,e){switch(e.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:e.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return Object(R.a)({},t)}},B=n(1),I={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},L=Object(y.createContext)(I),H=function(t){var e=t.children,n=Object(y.useReducer)(T,I),r=Object(z.a)(n,2),i=r[0],o=r[1];return Object(y.useEffect)((function(){localStorage.setItem("user",JSON.stringify(i.user))}),[i.user]),Object(B.jsx)(L.Provider,{value:{user:i.user,isFetching:i.isFetching,error:i.error,dispatch:o},children:e})},F=n(3),P=n(9),W=n.n(P),D=n(17),_=n(4),E=n(18),G=n.n(E),A=function(t){return{type:"LOGIN_SUCCESS",payload:t}},U=function(){var t=Object(D.a)(W.a.mark((function t(e,n){var r;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"LOGIN_START"}),t.prev=1,t.next=4,G.a.post("".concat("https://full-stack-api-netflix-app.herokuapp.com/api","/auth/login"),e);case 4:r=t.sent,n(A(r.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:"LOGIN_FAILURE"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}(),J=n(86),M=n(87),X=n(88),q=_.a.div(r||(r=Object(F.a)(["\n  ","\n"])),{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",position:"fixed",top:"0px",right:"0px",height:"4rem",width:"100%","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"10"}),K=_.a.div(i||(i=Object(F.a)(["\n  ","\n"])),{width:"90%",display:"flex",alignItems:"center",justifyContent:"space-between"}),V=_.a.div(o||(o=Object(F.a)(["\n  ","\n\n  img {\n    ","\n  }\n\n  .links {\n    ","\n  }\n"])),{display:"flex",alignItems:"center",justifyContent:"center",zIndex:"30"},{marginRight:"3rem",width:"5rem","@media (min-width: 768px)":{width:"6rem"},"@media (min-width: 1024px)":{width:"8rem"}},{marginRight:"1.5rem",cursor:"pointer",":hover":{"--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))"}}),Y=_.a.div(a||(a=Object(F.a)(["\n  ","\n\n  img {\n    ","\n  }\n\n  .icon {\n    ","\n  }\n\n  .profile {\n    ","\n\n    .options {\n      ","\n\n      span {\n        ","\n      }\n\n      .options-item {\n        ","\n      }\n    }\n  }\n"])),{display:"flex",alignItems:"center",justifyContent:"center"},{height:"2.5rem",width:"2.5rem",objectFit:"cover",borderRadius:"0.375rem",cursor:"pointer"},{marginLeft:"1rem",marginRight:"1rem",cursor:"pointer"},{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},{paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",width:"9rem",display:"flex",flexDirection:"column",position:"absolute",top:"2rem",right:"-0px","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-bg-opacity":"1",backgroundColor:"rgba(17, 24, 39, var(--tw-bg-opacity))",borderRadius:"0.375rem"},{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",borderRadius:"0.375rem",cursor:"pointer"},{":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(75, 85, 99, var(--tw-bg-opacity))"}}),Q=function(){var t=0,e=Object(N.g)(),n=Object(y.useState)(!1),r=Object(z.a)(n,2),i=r[0],o=r[1],a=Object(y.useState)(!0),c=Object(z.a)(a,2),s=c[0],l=c[1],p=Object(y.useState)(),d=Object(z.a)(p,2),m=(d[0],d[1]),b=Object(y.useContext)(L),g=b.user,h=b.dispatch,u=function(){window.innerWidth<768?m(!0):m(!1)},x=function(){var e=window.scrollY;e<=0&&l(!0),e>t&&l(!1),t=e};Object(y.useEffect)((function(){!function(){var t=window.innerWidth;m(t<768)}(),window.addEventListener("resize",u),window.addEventListener("scroll",x)}),[]);return Object(B.jsx)(q,{className:"".concat(s?"bg-gradient-to-b from-gray-600 to-transparent":"bg-gray-900"),children:Object(B.jsxs)(K,{children:[Object(B.jsxs)(V,{children:[Object(B.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:"n-logo"}),Object(B.jsx)(C.b,{to:"/netflix-clone",className:"links",children:"Homepage"}),Object(B.jsx)(C.b,{to:"/series",className:"links",children:"Series"}),Object(B.jsx)(C.b,{to:"/movies",className:"links",children:"Movies"}),Object(B.jsx)("span",{className:"links",children:"New and Popular"}),Object(B.jsx)("span",{className:"links",children:"My List"})]}),Object(B.jsxs)(Y,{children:[Object(B.jsx)(J.a,{className:"icon"}),Object(B.jsx)("span",{children:"KID"}),Object(B.jsx)(M.a,{className:"icon"}),Object(B.jsx)("img",{src:g.profilePic?g.profilePic:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:""}),Object(B.jsxs)("div",{className:"profile",children:[Object(B.jsx)(X.a,{className:"icon",onClick:function(){return o(!i)}}),Object(B.jsxs)("div",{className:"options ".concat(i?"flex":"hidden"),onMouseLeave:function(){return o(!1)},children:[Object(B.jsx)("span",{children:"Settings"}),Object(B.jsx)("span",{onClick:function(){!function(t){t({type:"LOGOUT"}),localStorage.removeItem("user")}(h),e.push("/register")},className:"options-item",children:"Logout"})]})]})]})]})})},Z=n(89),$=n(90),tt=_.a.div(c||(c=Object(F.a)(["\n  ","\n\n  img {\n    ","\n  }\n\n  .info {\n    ","\n\n    .desc {\n      ","\n    }\n\n    .btns {\n      ","\n\n      .btn {\n        ","\n      }\n\n      .play {\n        ","\n      }\n\n      .more {\n        ","\n      }\n\n      span {\n        ","\n      }\n    }\n  }\n"])),{position:"relative",height:"90vh",width:"100%",marginBottom:"2rem"},{height:"100%",width:"100%",objectFit:"cover"},{position:"absolute",left:"5%",bottom:"9rem",width:"35%"},{marginTop:"1rem",marginBottom:"1rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{fontSize:"1.125rem",lineHeight:"1.75rem"}},{display:"flex"},{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",marginRight:"0.75rem",fontSize:"1.125rem",lineHeight:"1.75rem",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"0.375rem"},{"--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(17, 24, 39, var(--tw-text-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(229, 231, 235, var(--tw-bg-opacity))"}},{"--tw-bg-opacity":"1",backgroundColor:"rgba(107, 114, 128, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(55, 65, 81, var(--tw-bg-opacity))"}},{marginLeft:"0.5rem"}),et=_.a.div(s||(s=Object(F.a)(["\n  z-index: 5;\n\n  ","\n\n  span {\n    ","\n  }\n\n  select {\n    ","\n  }\n"])),{position:"absolute",left:"5%",top:"5rem"},{marginRight:"0.75rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{fontSize:"1.5rem",lineHeight:"2rem"}},{paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(17, 24, 39, var(--tw-bg-opacity))",cursor:"pointer",":focus":{outline:"2px solid transparent",outlineOffset:"2px"}}),nt=function(t){var e=t.type,n=t.setGenre,r=Object(y.useState)({}),i=Object(z.a)(r,2),o=i[0],a=i[1],c=function(){var t=Object(D.a)(W.a.mark((function t(){var n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://full-stack-api-netflix-app.herokuapp.com/api",t.prev=1,t.next=4,G.a.get("".concat("https://full-stack-api-netflix-app.herokuapp.com/api","/movies/ramdom?type=").concat(e),{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).token}});case 4:n=t.sent,console.log(n.data[0]),a(n.data[0]),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return Object(y.useEffect)((function(){c()}),[]),Object(B.jsxs)(tt,{children:[e&&Object(B.jsxs)(et,{children:[Object(B.jsx)("span",{children:"movie"===e?"Movies":"Series"}),Object(B.jsxs)("select",{name:"genre",id:"genre",onChange:function(t){return n(t.target.value)},children:[Object(B.jsx)("option",{children:"Genre"}),Object(B.jsx)("option",{value:"action",children:"Action"}),Object(B.jsx)("option",{value:"comedy",children:"Comedy"}),Object(B.jsx)("option",{value:"crime",children:"Crime"}),Object(B.jsx)("option",{value:"horror",children:"Horror"}),Object(B.jsx)("option",{value:"education",children:"Education"})]})]}),Object(B.jsx)("img",{src:o.img,alt:""}),Object(B.jsxs)("div",{className:"info",children:[Object(B.jsx)("img",{src:o.imgTitle,alt:""}),Object(B.jsx)("p",{className:"desc",children:o.desc}),Object(B.jsxs)("div",{className:"btns",children:[Object(B.jsxs)(C.b,{to:{pathname:"/watch/".concat(o._id),content:o},className:"btn play",children:[Object(B.jsx)(Z.a,{}),Object(B.jsx)("span",{children:"Play"})]}),Object(B.jsxs)("button",{className:"btn more",children:[Object(B.jsx)($.a,{}),Object(B.jsx)("span",{children:"Info"})]})]})]})]})},rt=n(94),it=n(95),ot=n(91),at=n(92),ct=n(93),st=_.a.div(l||(l=Object(F.a)(["\n  ","\n\n  img {\n    ","\n  }\n\n  video {\n    ","\n  }\n\n  &:hover {\n    ","\n    box-shadow: 0px 0px 15px 0px rgba(255,255,255, 0.07);\n\n    img {\n      ","\n    }\n  }\n"])),{marginRight:"5px",width:"225px",height:"120px","--tw-bg-opacity":"1",backgroundColor:"rgba(17, 24, 39, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",overflow:"hidden"},{width:"100%",height:"100%",overflow:"hidden",objectFit:"cover"},{width:"100%",height:"140px",objectFit:"cover",position:"absolute",top:"0px",left:"0px",right:"0px"},{width:"325px",height:"320px",position:"absolute",top:"-150px",borderRadius:"0.375rem"},{height:"140px"}),lt=_.a.div(p||(p=Object(F.a)(["\n  ","\n\n  .icons {\n    ","\n\n    .icon {\n      ","\n    }\n  }\n\n  .item-info {\n    ","\n\n    .limit {\n      ","\n    }\n  }\n\n  .desc {\n    ","\n  }\n\n  .genre {\n    ","\n  }\n"])),{display:"flex",flexDirection:"column",paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem"},{display:"flex",marginBottom:"0.25rem"},{padding:"5px",marginRight:"0.5rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--tw-border-opacity))",borderRadius:"9999px",fontSize:"1.875rem",lineHeight:"2.25rem",cursor:"pointer",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(55, 65, 81, var(--tw-bg-opacity))"}},{display:"flex",alignItems:"center",marginBottom:"0.25rem","--tw-text-opacity":"1",color:"rgba(156, 163, 175, var(--tw-text-opacity))"},{marginLeft:"0.75rem",marginRight:"0.75rem",paddingLeft:"0.25rem",paddingRight:"0.25rem",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(156, 163, 175, var(--tw-border-opacity))"},{marginBottom:"0.25rem"},{"--tw-text-opacity":"1",color:"rgba(156, 163, 175, var(--tw-text-opacity))"}),pt=function(t){var e=t.index,n=t.item,r=Object(y.useState)(!1),i=Object(z.a)(r,2),o=i[0],a=i[1],c=Object(y.useState)({}),s=Object(z.a)(c,2),l=s[0],p=s[1],d=function(){var t=Object(D.a)(W.a.mark((function t(){var e;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://full-stack-api-netflix-app.herokuapp.com/api",t.prev=1,t.next=4,G.a.get("".concat("https://full-stack-api-netflix-app.herokuapp.com/api","/movies/find/")+n,{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).token}});case 4:e=t.sent,p(e.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return Object(y.useEffect)((function(){d()}),[n]),Object(B.jsx)(B.Fragment,{children:l&&Object(B.jsx)(C.b,{to:{pathname:"/watch/".concat(l._id),movie:l},children:Object(B.jsxs)(st,{style:{left:o&&225*e-50+2.5*e},onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},children:[Object(B.jsx)("img",{src:l.img,alt:""}),o&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("video",{src:l.trailer,autoPlay:!0,loop:!0}),Object(B.jsxs)(lt,{children:[Object(B.jsxs)("div",{className:"icons",children:[Object(B.jsx)(Z.a,{className:"icon"}),Object(B.jsx)(ot.a,{className:"icon"}),Object(B.jsx)(at.a,{className:"icon"}),Object(B.jsx)(ct.a,{className:"icon"})]}),Object(B.jsxs)("div",{className:"item-info",children:[Object(B.jsx)("span",{children:l.duration}),Object(B.jsx)("span",{className:"limit",children:l.limit}),Object(B.jsx)("span",{children:l.year})]}),Object(B.jsx)("div",{className:"desc",children:l.desc}),Object(B.jsx)("div",{className:"genre",children:l.genre})]})]})]})})})},dt=_.a.div(d||(d=Object(F.a)(["\n  ","\n\n  .list-title {\n    ","\n  }\n"])),{width:"100%",marginBottom:"1.25rem"},{marginBottom:"0.5rem",marginLeft:"5%",fontSize:"1.125rem",lineHeight:"1.75rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{fontSize:"1.25rem",lineHeight:"1.75rem"}}),mt=_.a.div(m||(m=Object(F.a)(["\n  ","\n\n  .slider-arrow {\n    z-index: 2;\n    ","\n\n    &.left-arrow {\n      ","\n    }\n\n    &.right-arrow {\n      ","\n    }\n  }\n"])),{position:"relative"},{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",transitionDuration:"200ms",position:"absolute",top:"0px",bottom:"0px",width:"50px",height:"100%",marginLeft:"auto",marginRight:"auto","--tw-bg-opacity":"1",backgroundColor:"rgba(31, 41, 55, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",opacity:"0.5",cursor:"pointer",":hover":{opacity:"0.75"}},{left:"0px"},{right:"0px"}),bt=_.a.div(b||(b=Object(F.a)(["\n  ","\n"])),{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",display:"flex",width:"max-content",marginLeft:"50px","--tw-translate-x":"0px",transform:"var(--tw-transform)"}),gt=function(t){var e=t.list,n=Object(y.useState)(0),r=Object(z.a)(n,2),i=r[0],o=r[1],a=Object(y.useRef)(),c=function(t){var e=a.current.getBoundingClientRect().x-50;"left"===t&&i>0?(o(i-1),a.current.style.transform="translateX(".concat(230+e,"px)")):"right"===t&&i<5&&(o(i+1),a.current.style.transform="translateX(".concat(-230+e,"px)"))};return Object(B.jsxs)(dt,{children:[Object(B.jsx)("h1",{className:"list-title",children:e.title}),Object(B.jsxs)(mt,{children:[Object(B.jsx)(rt.a,{onClick:function(){return c("left")},className:"slider-arrow left-arrow ".concat(i>0?"flex":"hidden")}),Object(B.jsx)(bt,{ref:a,children:e.content.map((function(t,e){return Object(B.jsx)(pt,{index:e,item:t},e)}))}),Object(B.jsx)(it.a,{onClick:function(){return c("right")},className:"slider-arrow right-arrow ".concat(i>=5?"hidden":"flex")})]})]})},ht=_.a.section(g||(g=Object(F.a)(["\n  ","\n"])),{"--tw-bg-opacity":"1",backgroundColor:"rgba(17, 24, 39, var(--tw-bg-opacity))",overflow:"hidden"}),ut=function(t){var e=t.type,n=Object(y.useState)([]),r=Object(z.a)(n,2),i=r[0],o=r[1],a=Object(y.useState)(null),c=Object(z.a)(a,2),s=c[0],l=c[1],p=function(){var t=Object(D.a)(W.a.mark((function t(){var n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.get("".concat("https://full-stack-api-netflix-app.herokuapp.com/api","/lists").concat(e?"?type="+e:"").concat(s?"&genre="+s:""),{headers:{token:"Bearer "+JSON.parse(localStorage.getItem("user")).token}});case 3:n=t.sent,o(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(y.useEffect)((function(){p()}),[e,s]),Object(B.jsxs)(ht,{children:[Object(B.jsx)(Q,{}),Object(B.jsx)(nt,{type:e,setGenre:l}),i&&i.map((function(t,e){return Object(B.jsx)(gt,{list:t},e)}))]})},xt=n(96),jt=_.a.section(h||(h=Object(F.a)(["\n  ","\n\n  .back {\n    ","\n    z-index: 1;\n\n    .back-icon {\n      ","\n    }\n\n    :hover {\n      ","\n\n      .back-icon {\n        ","\n      }\n    }\n  }\n\n  .video {\n    ","\n  }\n"])),{position:"relative",width:"100vw",height:"100vh"},{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",display:"flex",alignItems:"center",position:"absolute",top:"0.75rem",left:"15px",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem",paddingRight:"1rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(75, 85, 99, var(--tw-bg-opacity))",borderRadius:"0.125rem",cursor:"pointer"},{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms"},{"--tw-bg-opacity":"1",backgroundColor:"rgba(107, 114, 128, var(--tw-bg-opacity))"},{"--tw-translate-x":"-0.5rem",transform:"var(--tw-transform)"},{width:"100%",height:"100%"}),ft=function(){var t=Object(N.h)(),e=t.movie?t.movie:t.content;return Object(B.jsxs)(jt,{children:[Object(B.jsx)(C.b,{to:"/netflix-clone",children:Object(B.jsxs)("div",{className:"back",children:[Object(B.jsx)(xt.a,{className:"back-icon"}),"Home"]})}),Object(B.jsx)("video",{className:"video",autoPlay:!0,progress:!0,controls:!0,src:e.video})]})},wt=_.a.div(u||(u=Object(F.a)(["\n  ",'\n  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");\n\n  .wrapper {\n    ',"\n\n    img {\n      ","\n    }\n  }\n\n  .container-test {\n    ","\n\n    form {\n      ","\n\n      h1 {\n        ","\n      }\n\n      input {\n        ","\n\n        &::placeholder {\n          ","\n        }\n      }\n\n      .login-btn {\n        ","\n      }\n\n      span {\n        ","\n\n        b {\n          ","\n        }\n      }\n\n      small {\n        ","\n\n        b {\n          ","\n        }\n      }\n    }\n  }\n"])),{position:"relative",width:"100vw",height:"100vh"},{paddingTop:"20px",paddingBottom:"20px",paddingLeft:"50px",paddingRight:"50px",display:"flex",alignItems:"center",justifyContent:"space-between"},{height:"40px"},{width:"100%",height:"100%",position:"absolute",top:"0px",left:"0px",right:"0px","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},{maxWidth:"24rem",height:"340px",paddingTop:"2rem",paddingBottom:"2rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-around","--tw-bg-opacity":"1",backgroundColor:"rgba(17, 24, 39, var(--tw-bg-opacity))"},{marginBottom:"0.5rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600","@media (min-width: 768px)":{fontSize:"1.25rem",lineHeight:"1.75rem"},"@media (min-width: 1024px)":{fontSize:"1.5rem",lineHeight:"2rem"}},{marginBottom:"0.5rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",width:"100%","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(156, 163, 175, var(--tw-bg-opacity))",borderRadius:"0.375rem",":focus":{outline:"2px solid transparent",outlineOffset:"2px"}},{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"},{marginTop:"0.5rem",marginBottom:"0.5rem",width:"100%",paddingTop:"6px",paddingBottom:"6px",fontWeight:"600","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",borderRadius:"0.375rem",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(239, 68, 68, var(--tw-bg-opacity))"},"@media (min-width: 768px)":{fontSize:"1.125rem",lineHeight:"1.75rem"}},{"--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))"},{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"},{"--tw-text-opacity":"1",color:"rgba(229, 231, 235, var(--tw-text-opacity))"},{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}),Ot=function(){var t=Object(N.g)(),e=Object(y.useState)(""),n=Object(z.a)(e,2),r=n[0],i=n[1],o=Object(y.useState)(""),a=Object(z.a)(o,2),c=a[0],s=a[1],l=Object(y.useContext)(L),p=l.user,d=l.dispatch;return Object(y.useEffect)((function(){p&&t.push("/")}),[p]),Object(B.jsxs)(wt,{children:[Object(B.jsx)("div",{className:"top",children:Object(B.jsx)("div",{className:"wrapper",children:Object(B.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""})})}),Object(B.jsx)("div",{className:"container-test",children:Object(B.jsxs)("form",{children:[Object(B.jsx)("h1",{children:"Sign In"}),Object(B.jsx)("input",{onChange:function(t){return i(t.target.value)},type:"email",placeholder:"Email or phone number"}),Object(B.jsx)("input",{onChange:function(t){return s(t.target.value)},type:"password",placeholder:"Password"}),Object(B.jsx)("button",{onClick:function(t){t.preventDefault(),U({email:r,password:c},d)},className:"login-btn",children:"Sign In"}),Object(B.jsxs)("span",{children:["New to Netflix? ",Object(B.jsx)(C.b,{to:"/register",children:"Sign up now."})]}),Object(B.jsxs)("small",{children:["This page is protected by Google reCAPTCHA to ensure you're not a bot. ",Object(B.jsx)("b",{children:"Learn more"}),"."]})]})})]})},yt=n(97),vt=_.a.div(x||(x=Object(F.a)(["\n  ","\n\n  .bg-img {\n    z-index: 0;\n    ",'\n    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");\n  }\n\n  .wrapper {\n    ',"\n\n    img {\n      ","\n    }\n\n    .login {\n      ","\n    }\n  }\n"])),{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"},{zIndex:"30",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"50px",paddingRight:"50px",display:"flex",alignItems:"center",justifyContent:"space-between","--tw-border-opacity":"1",borderColor:"rgba(229, 231, 235, var(--tw-border-opacity))"},{zIndex:"30",height:"25px","@media (min-width: 768px)":{height:"30px"},"@media (min-width: 1024px)":{height:"40px"}},{paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"1rem",paddingRight:"1rem",fontWeight:"600","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",borderRadius:"0.375rem",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(239, 68, 68, var(--tw-bg-opacity))"},zIndex:"10","@media (min-width: 768px)":{fontSize:"1.125rem",lineHeight:"1.75rem"}}),kt=_.a.div(j||(j=Object(F.a)(["\n  ","\n\n  h1 {\n    ","\n  }\n\n  h2 {\n    ","\n  }\n\n  p {\n    ","\n  }\n\n  .input {\n    ","\n\n    input {\n      ","\n    }\n\n    .registerBtn {\n      ","\n    }\n  }\n"])),{position:"absolute",top:"0px",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"},{fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"600",textAlign:"center","@media (min-width: 768px)":{fontSize:"2.25rem",lineHeight:"2.5rem"},"@media (min-width: 1024px)":{fontSize:"3rem",lineHeight:"1"},"@media (min-width: 1280px)":{fontSize:"3.75rem",lineHeight:"1"}},{marginTop:"1.5rem",marginBottom:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem","@media (min-width: 768px)":{fontSize:"1.5rem",lineHeight:"2rem"},"@media (min-width: 1024px)":{fontSize:"1.875rem",lineHeight:"2.25rem"},"@media (min-width: 1280px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}},{marginBottom:"1rem",fontSize:"1.125rem",lineHeight:"1.75rem",textAlign:"center"},{width:"50%",display:"flex",alignItems:"center",justifyContent:"center",height:"3.5rem",fontSize:"1.125rem",lineHeight:"1.75rem"},{flexGrow:"1",paddingLeft:"1rem",paddingRight:"1rem",height:"100%","--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",":focus":{outline:"2px solid transparent",outlineOffset:"2px"},borderTopLeftRadius:"0.375rem",borderBottomLeftRadius:"0.375rem"},{paddingLeft:"1.5rem",paddingRight:"1.5rem",height:"100%","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",fontWeight:"600",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(239, 68, 68, var(--tw-bg-opacity))"},borderTopRightRadius:"0.375rem",borderBottomRightRadius:"0.375rem"}),St=_.a.div(f||(f=Object(F.a)(["\n  ","\n\n  .back-btn {\n    ","\n\n    .icons {\n      ","\n    }\n\n    &:hover {\n      .icons {\n        ","\n      }\n    }\n  }\n"])),{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",marginLeft:"auto",marginRight:"auto",marginTop:"6rem",width:"100%",maxWidth:"28rem",display:"flex"},{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1rem",width:"5rem",cursor:"pointer"},{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"200ms",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"},{"--tw-translate-x":"-0.5rem",transform:"var(--tw-transform)"}),Ct=_.a.div(w||(w=Object(F.a)(["\n  ","\n\n  h4 {\n    ","\n  }\n\n  h1 {\n    ","\n  }\n\n  p {\n    ","\n  }\n\n  .continues-btn {\n    ","\n  }\n"])),{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",padding:"0.5rem",width:"100%",minWidth:"28rem"},{fontSize:"0.875rem",lineHeight:"1.25rem"},{marginBottom:"0.75rem",fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"600","@media (min-width: 768px)":{fontSize:"1.875rem",lineHeight:"2.25rem"}},{marginBottom:"1.25rem",fontSize:"1.125rem",lineHeight:"1.75rem"},{marginTop:"0.25rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",width:"100%",fontWeight:"600",textAlign:"center","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",cursor:"pointer"}),Nt=_.a.div(O||(O=Object(F.a)(["\n  ","\n\n  h4 {\n    ","\n  }\n\n  h1 {\n    ","\n  }\n\n  h2 {\n    ","\n  }\n\n  input {\n    ","\n  }\n\n  .error-msg{\n    ","\n  }\n  \n  .continues-btn {\n    ","\n  }\n"])),{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-start",height:"300px",width:"100%",minWidth:"28rem"},{fontSize:"0.875rem",lineHeight:"1.25rem"},{marginBottom:"0.75rem",fontSize:"1.5rem",lineHeight:"2rem",fontWeight:"600","@media (min-width: 768px)":{fontSize:"1.875rem",lineHeight:"2.25rem"}},{marginBottom:"1rem",fontSize:"1.125rem",lineHeight:"1.75rem"},{marginBottom:"0.75rem",width:"100%",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",fontSize:"1.125rem",lineHeight:"1.75rem",borderWidth:"1px",borderRadius:"0.125rem",":focus":{outline:"2px solid transparent",outlineOffset:"2px"}},{"--tw-text-opacity":"1",color:"rgba(239, 68, 68, var(--tw-text-opacity))"},{marginTop:"1.5rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",width:"100%",fontWeight:"600",textAlign:"center","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",cursor:"pointer"}),zt=function(){var t=Object(N.g)(),e=Object(y.useState)(!1),n=Object(z.a)(e,2),r=n[0],i=n[1],o=Object(y.useState)(0),a=Object(z.a)(o,2),c=a[0],s=a[1],l=Object(y.useState)(""),p=Object(z.a)(l,2),d=p[0],m=p[1],b=Object(y.useState)(""),g=Object(z.a)(b,2),h=g[0],u=g[1],x=Object(y.useState)(""),j=Object(z.a)(x,2),f=j[0],w=j[1],O=Object(y.useState)(!1),v=Object(z.a)(O,2),k=v[0],S=v[1],R=Object(y.useRef)(),T=Object(y.useRef)(),I=(Object(y.useRef)(),function(){var e=Object(D.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(!1),"https://full-stack-api-netflix-app.herokuapp.com/api",e.prev=2,""===d.trim()||""===f.trim()||""===h.trim()){e.next=9;break}return e.next=6,G.a.post("".concat("https://full-stack-api-netflix-app.herokuapp.com/api","auth/register"),{email:d,username:f,password:h});case 6:t.push("/login"),e.next=10;break;case 9:S(!0);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}()),L=function(t){"right"===t?(s(c+1),R.current.style.transform="translateX(-100%)"):"left"===t&&(s(c-1),R.current.style.transform="translateX(0%)"),console.log(R.current)},H=function(){S(!1),1===c?L("left"):0===c&&i(!1)};return Object(B.jsxs)(vt,{children:[!r&&Object(B.jsx)("div",{className:"bg-img"}),Object(B.jsxs)("div",{className:"wrapper ".concat(r&&"border-b-[1px]"),children:[Object(B.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",alt:""}),Object(B.jsx)(C.b,{to:"/login",className:"login",children:"Sign In"})]}),r?Object(B.jsxs)(St,{ref:R,children:[Object(B.jsxs)(Ct,{className:"".concat(0===c?"opacity-100":"opacity-0"),children:[Object(B.jsxs)("div",{onClick:H,className:"back-btn",children:[Object(B.jsx)(yt.a,{className:"icons"})," Back"]}),Object(B.jsx)("h4",{children:"STEP 1 OF 2"}),Object(B.jsx)("h1",{children:"Finish setting up your account"}),Object(B.jsx)("p",{children:"Netflix is personalizing for you. Create a password to watch on any devices at anytime."}),Object(B.jsx)("div",{onClick:function(){return L("right")},className:"continues-btn",children:"Next"})]}),Object(B.jsxs)(Nt,{className:"".concat(1===c?"opacity-100":"opacity-0"),children:[Object(B.jsxs)("div",{onClick:H,className:"back-btn ",children:[Object(B.jsx)(yt.a,{className:"icons"})," Back"]}),Object(B.jsx)("h4",{children:"STEP 2 OF 2"}),Object(B.jsx)("h1",{children:"Create a password to start your membership"}),Object(B.jsxs)("h2",{children:["Just a few more steps and you're done! ",Object(B.jsx)("br",{})," We hate paperwork, too."," "]}),Object(B.jsx)("input",{type:"text",value:d,onChange:function(t){return m(t.target.value)}}),Object(B.jsx)("input",{type:"text",placeholder:"Username",onChange:function(t){return w(t.target.value)}}),Object(B.jsx)("input",{type:"password",placeholder:"password",onChange:function(t){return u(t.target.value)}}),k&&Object(B.jsx)("div",{className:"error-msg",children:"All Field Is Required!"}),Object(B.jsx)("div",{onClick:I,className:"continues-btn",children:"Start"})]})]}):Object(B.jsxs)(kt,{children:[Object(B.jsxs)("h1",{children:["Unlimited movies, TV shows,",Object(B.jsx)("br",{})," and more."]}),Object(B.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(B.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(B.jsxs)("div",{className:"input",children:[Object(B.jsx)("input",{ref:T,type:"email",placeholder:"email address",className:"email-address"}),Object(B.jsx)("button",{onClick:function(t){return function(t){t.preventDefault(),m(T.current.value),""!==T.current.value&&i(!0)}(t)},className:"registerBtn",children:"Get Started"})]})]})]})};var Rt=function(){var t=Object(y.useContext)(L).user;return Object(B.jsx)(C.a,{children:Object(B.jsxs)(N.d,{children:[Object(B.jsx)(N.b,{path:"/netflix-clone",exact:!0,children:t?Object(B.jsx)(ut,{}):Object(B.jsx)(N.a,{to:"/register"})}),Object(B.jsx)(N.b,{path:"/register",children:t?Object(B.jsx)(N.a,{to:"/netflix-clone"}):Object(B.jsx)(zt,{})}),Object(B.jsx)(N.b,{path:"/login",children:t?Object(B.jsx)(N.a,{to:"/netflix-clone"}):Object(B.jsx)(Ot,{})}),t&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(N.b,{path:"/movies",children:Object(B.jsx)(ut,{type:"movie"})}),Object(B.jsx)(N.b,{path:"/series",children:Object(B.jsx)(ut,{type:"series"})}),Object(B.jsx)(N.b,{path:"/watch",children:Object(B.jsx)(ft,{})})]})]})})};S.a.render(Object(B.jsx)(v.a.StrictMode,{children:Object(B.jsx)(H,{children:Object(B.jsx)(Rt,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.0ea8c362.chunk.js.map