(this.webpackJsonpwearefx=this.webpackJsonpwearefx||[]).push([[0],Array(20).concat([function(e,s,t){},function(e,s,t){},,,,,,,,function(e,s,t){},,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(5),a=t.n(c),i=t(22),n=t.n(i),r=t(10),o=t(8),l=t(7),d=(t(29),t(19),t(1)),j=t(2),u=t(3),m=t(4),b=t(14),h=t(0),v=function(e){Object(u.a)(t,e);var s=Object(m.a)(t);function t(){var e;Object(d.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=s.call.apply(s,[this].concat(a))).PointerLockControls=function(e){var s=this;e.rotation.set(0,0,0);var t=new b.f;t.add(e);var c=new b.f;c.position.y=10,c.add(t);var a=Math.PI/2,i=function(e){if(!1!==s.enabled){var i=e.movementX||e.mozMovementX||e.webkitMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||0;c.rotation.y-=.002*i,t.rotation.x-=.002*n,t.rotation.x=Math.max(-a,Math.min(a,t.rotation.x))}};this.dispose=function(){document.removeEventListener("mousemove",i,!1)},document.addEventListener("mousemove",i,!1),s.enabled=!1,this.getObject=function(){return c},this.getDirection=function(){var e=new b.i(0,0,-1),s=new b.c(0,0,0,"YXZ");return function(a){return s.set(t.rotation.x,c.rotation.y,0),a.copy(e).applyEuler(s),a}}()},e.sceneSetup=function(){var s=e.mount.clientWidth,t=e.mount.clientHeight;e.scene=new b.h,e.camera=new b.g(95,s/t,.1,20),e.camera.position.z=1e-4,e.controls=new e.PointerLockControls(e.camera),e.controls.enabled=!0,e.scene.add(e.controls.getObject()),e.controls.getObject().position.set(0,0,0),e.renderer=new b.j,e.renderer.setSize(s,t),e.renderer.setClearColor(0),e.mount.appendChild(e.renderer.domElement)},e.addCustomSceneObjects=function(){var s=new b.b(10,10,10,12,12,12),t=new b.e({color:1383969,wireframe:!0});e.cube=new b.d(s,t),e.scene.add(e.cube);var c=new b.a(16777215);e.scene.add(c)},e.startAnimationLoop=function(){e.renderer.render(e.scene,e.camera),e.requestID=window.requestAnimationFrame(e.startAnimationLoop)},e.handleWindowResize=function(){var s=e.mount.clientWidth,t=e.mount.clientHeight;e.renderer.setSize(s,t),e.camera.aspect=s/t,e.camera.updateProjectionMatrix()},e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.addCustomSceneObjects(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID),this.controls.dispose()}},{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"".concat(this.props.showCube," cube"),ref:function(s){return e.mount=s}})}}]),t}(c.Component),O=function(e){var s=e.setisMc,t=e.isMc,a=e.isPuma,i=e.setisPuma,n=e.isFlint,o=e.setisFlint,d=e.isBig,j=e.setisBig,u=e.isPm,m=e.setisPm,b=e.isNavi,O=e.setisNavi,x=e.isClicked,f=e.canvases,p=e.isCanvasesHidded,N=e.isCasesEntered,y=function(){f.map((function(e){return e.classList.add("displayNone")}))},g=function(){f.map((function(e){return e.classList.remove("displayNone")}))};Object(c.useEffect)((function(){p?y():g()}),[p,y,g]),Object(c.useEffect)((function(){!N&&p?f[0].classList.add("displayNone"):f[0].classList.remove("displayNone")}),[N,p]);var k=Object(c.useState)(!1),B=Object(l.a)(k,2),w=B[0],_=B[1],C=Object(c.useState)(!1),L=Object(l.a)(C,2),E=L[0],S=L[1],q=Object(c.useState)(!1),H=Object(l.a)(q,2),A=H[0],I=H[1],M=Object(c.useState)(!1),P=Object(l.a)(M,2),F=P[0],W=P[1],X=Object(c.useState)(!1),D=Object(l.a)(X,2),T=D[0],z=D[1],R=Object(c.useState)(!1),V=Object(l.a)(R,2),G=V[0],Y=V[1],U=Object(c.useState)(""),J=Object(l.a)(U,2),K=J[0],Z=J[1],Q=Object(c.useState)(""),$=Object(l.a)(Q,2),ee=$[0],se=$[1],te=Object(c.useState)(""),ce=Object(l.a)(te,2),ae=ce[0],ie=ce[1],ne=Object(c.useState)(""),re=Object(l.a)(ne,2),oe=re[0],le=re[1],de=Object(c.useState)(""),je=Object(l.a)(de,2),ue=je[0],me=je[1],be=Object(c.useState)(""),he=Object(l.a)(be,2),ve=he[0],Oe=he[1],xe=Object(c.useState)(""),fe=Object(l.a)(xe,2),pe=fe[0],Ne=fe[1];Object(c.useEffect)((function(){w?(s("black"),se("mcBack"),Z("displayNone")):(s(""),se(""),Z(""))}),[w,t]),Object(c.useEffect)((function(){E?(i("black"),ie("pumaBack"),Z("displayNone")):(i(""),ie(""),Z(""))}),[E,a]),Object(c.useEffect)((function(){A?(o("black"),le("flintBack"),Z("displayNone")):(o(""),le(""),Z(""))}),[A,n]),Object(c.useEffect)((function(){F?(j("black"),me("bigBack"),Z("displayNone")):(j(""),me(""),Z(""))}),[F,d]),Object(c.useEffect)((function(){T?(m("black"),Oe("pmBack"),Z("displayNone")):(m(""),Oe(""),Z(""))}),[T,u]),Object(c.useEffect)((function(){G?(O("black"),Ne("naviBack"),Z("displayNone")):(O(""),Ne(""),Z(""))}),[G,b]);var ye=[{title:"McDonald's",id:1,className:"mcDonalds"},{title:"Puma",id:2,className:"puma"},{title:"Flint",id:3,className:"flint"},{title:"Little big",id:4,className:"littleBig"},{title:"Parimatch",id:5,className:"parimatch"},{title:"Navi",id:6,className:"navi"}];return x?Object(h.jsxs)("div",{className:"".concat(ee," ").concat(ae," ").concat(oe," ").concat(ue," ").concat(ve," ").concat(pe," noise animate__animated animate__slideInUp casesLayout"),children:[Object(h.jsx)(v,{showCube:"".concat(K)}),Object(h.jsxs)("div",{className:"casesTextBlock",children:[Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"We\u2019re always looking the truth about the brand we work with and tell it naturaly and gorgeous, like no one else before."})]}),Object(h.jsxs)("div",{className:w?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"McDonald's"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:E?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Puma Ukraine"}),Object(h.jsx)("p",{children:"VFX, motion"})]}),Object(h.jsxs)("div",{className:A?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Flint"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:F?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Little big"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:T?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Parimatch"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:G?"casesMain":" displayNone",children:[Object(h.jsx)("p",{children:"Navi"}),Object(h.jsx)("p",{children:"Granding, VFX, motion"})]}),Object(h.jsxs)("div",{className:"casesArray",children:[Object(h.jsx)("div",{onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)},className:ye[0].className,children:ye[0].title}),Object(h.jsx)("div",{onMouseEnter:function(){S(!0)},onMouseLeave:function(){S(!1)},className:ye[1].className,children:ye[1].title}),Object(h.jsx)("div",{onMouseEnter:function(){I(!0)},onMouseLeave:function(){I(!1)},className:ye[2].className,children:ye[2].title}),Object(h.jsx)("div",{onMouseEnter:function(){W(!0)},onMouseLeave:function(){W(!1)},className:ye[3].className,children:ye[3].title}),Object(h.jsx)("div",{onMouseEnter:function(){z(!0)},onMouseLeave:function(){z(!1)},className:ye[4].className,children:ye[4].title}),Object(h.jsx)("div",{onMouseEnter:function(){Y(!0)},onMouseLeave:function(){Y(!1)},className:ye[5].className,children:ye[5].title})]}),Object(h.jsx)(r.b,{to:"/cases",children:Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["Explore",Object(h.jsx)("br",{}),"all",Object(h.jsx)("br",{}),"cases"]})})})]}):null},x=(t(32),function(e){var s=e.isClicked,t=e.canvases,a=e.isCanvasesHidded,i=e.isHireEntered;return Object(c.useEffect)((function(){a?t.map((function(e){return e.classList.add("displayNone")})):t.map((function(e){return e.classList.remove("displayNone")}))}),[a]),Object(c.useEffect)((function(){!i&&a?t[2].classList.add("displayNone"):t[2].classList.remove("displayNone")}),[i]),s?Object(h.jsxs)("div",{className:"hireLayout noise",children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"hireBLock",children:[Object(h.jsxs)("div",{className:"hireBLock__left",children:[Object(h.jsxs)("div",{className:"hireBLock__left__top",children:[Object(h.jsx)("a",{href:"#",children:"Instagram"}),Object(h.jsx)("a",{href:"#",children:"Facebook"}),Object(h.jsx)("a",{href:"#",children:"behance"})]}),Object(h.jsxs)("div",{className:"hireBLock__left__middle",children:[Object(h.jsx)("p",{children:"All contents of this website are the property oF wearefx STUDIO. No part of this site, including all text and images, may be reproduced in any form without the prior written consent oF wearefx STUDIO \xa92021"}),Object(h.jsx)("div",{className:"arrowToTop"})]}),Object(h.jsxs)("h3",{className:"hireBLock__left__bottom",children:["We\u2019re curious how we can",Object(h.jsx)("br",{}),"help, get in touch \ud83d\udc4b"]})]}),Object(h.jsxs)("div",{className:"hireBLock__right",children:[Object(h.jsxs)("div",{className:"hireBLock__right__top",children:[Object(h.jsxs)("p",{children:["Wearefx \xa9 2021 by",Object(h.jsxs)("a",{className:"violet_on_hover",href:"#",children:[" ","Br\u0101h lab \ufe64"]})]}),Object(h.jsx)("a",{className:"violet_on_hover",href:"#",children:"Privacy Policy \ufe64"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__middle",children:[Object(h.jsx)("p",{children:"For general inquiries & new projects "}),Object(h.jsx)("h3",{children:"contact@wearefx.xyz"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__bottom",children:[Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Alex Dysenko"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"a@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380935925000",children:"+380935925000"})]})]}),Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Stas Ravsyi"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"s@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380636312065",children:"+380636312065"})]})]})]})]})]}),Object(h.jsx)(r.b,{to:"/hire",children:Object(h.jsx)("div",{className:"hireBtn gradientBtn",children:Object(h.jsxs)("p",{children:["chat with us",Object(h.jsx)("br",{})," in telegram"]})})})]}):null}),f=t(9),p=(t(33),t(23)),N=t.n(p),y=a.a.createContext("cursorContext"),g=[!1,"pointer","right","left"],k=function(e){var s=e.children,t=(e.hoveredCursor,e.hoveredCursor1,e.hoveredCursor2,Object(c.useState)({x:0,y:0})),a=Object(l.a)(t,2),i=a[0],n=a[1],r=Object(c.useState)(!0),o=Object(l.a)(r,2),d=o[0],j=o[1],u=function(e){var s=e.pageX,t=e.pageY;n({x:s,y:t})};Object(c.useEffect)((function(){return document.addEventListener("mousemove",u),function(){document.removeEventListener("mousemove",u)}}));var m=i.x,b=i.y;return Object(h.jsxs)(y.Provider,{value:{onCursor:function(e){e=g.includes(e)&&e||!1,j(e)},onHideCursor:function(){j(!1)},onVisibleCursor:function(){return j(!0)}},children:[Object(h.jsx)("ins",{className:N()(d&&"movable",Object(f.a)({active:!!d},"cursor-".concat(d),!!d)),style:{left:"".concat(m,"px"),top:"".concat(b,"px")}}),s]})},B=(t(34),Object(c.forwardRef)((function(e,s){var t=e.title,a=e.className,i=e.isHovered,n=e.onClick,r=e.isClicked,o=e.canvas,l=function(){var e=Object(c.useContext)(y);if(!e)throw new Error("cursor context cannot be used outside Provider");return e}(),d=l.onHideCursor,j=l.onVisibleCursor;return Object(c.useEffect)((function(){i?(d(),o.classList.add("displayNone")):j()}),[i]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{onClick:function(){return n()},ref:s,className:"".concat(a," MainPageButton"),children:[!r&&i&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{className:"first__dot"}),Object(h.jsx)("span",{className:"second__dot"}),Object(h.jsx)("span",{className:"third__dot"})]}),r?" ":t]})})}))),w=(t(35),function(e){var s=e.isClicked,t=e.canvases,a=e.isCanvasesHidded,i=e.isStoryEntered,n=function(){t.map((function(e){return e.classList.add("displayNone")}))},o=function(){t.map((function(e){return e.classList.remove("displayNone")}))};return Object(c.useEffect)((function(){a?n():o()}),[a,n,o]),Object(c.useEffect)((function(){!i&&a?t[1].classList.add("displayNone"):t[1].classList.remove("displayNone")}),[i,a]),s?Object(h.jsxs)("div",{className:"storyLayout noise",children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"storyBlock",children:[Object(h.jsx)("h3",{children:"We are full-service experiential VFX production studio based in Ukraine inspired by the creative potential of emerging technologies. \ud83d\ude0e"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"#",children:"our cases \ufe64"}),Object(h.jsx)("a",{href:"#",children:"hire us \ufe64"}),Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"As a wide collective of highly skilled creatives, we vizualize any content on any screen and any space. Create CG and VFX for Advertising, TV, Print, digital, series, short and now long format films, games, VR and AR experiences."}),Object(h.jsx)("p",{children:"A deeply collaborative approach and respect for every aspect and role in the creation process stands at our core."})]})]}),Object(h.jsx)(r.b,{to:"/story",children:Object(h.jsx)("div",{className:"storyBtn gradientBtn",children:Object(h.jsxs)("p",{children:["View our",Object(h.jsx)("br",{}),"expertise &",Object(h.jsx)("br",{}),"technologies"]})})})]}):null}),_=t(24),C=t.n(_),L=(t(36),function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){var s=new C.a(e.current,{strings:["Welcome to WeareFX, creative studio with big ideas","Where beauty and function are crafted together","Working across all media channels & platforms"],startDelay:1e3,typeSpeed:24,backSpeed:24,backDelay:1e3,loop:!0,showBlink:!0});return function(){return s.destroy()}}),[]),Object(h.jsx)("div",{className:"typing__text",children:Object(h.jsx)("span",{className:"typing__text",ref:e})})}),E=(t(37),t(38),t.p+"static/media/videoPower.46fefcbf.mp4"),S=function(e){e.width=e.clientWidth,e.height=e.clientHeight},q=function(e){var s=e.is1BtnHovered,t=e.is2BtnHovered,a=e.is3BtnHovered,i=e.setIs3BtnHovered,n=e.setIs2BtnHovered,o=e.setIs1BtnHovered,d=Object(c.useState)(""),j=Object(l.a)(d,2),u=j[0],m=j[1],b=Object(c.useState)(""),v=Object(l.a)(b,2),f=v[0],p=v[1],N=Object(c.useState)(""),y=Object(l.a)(N,2),g=y[0],k=y[1],_=Object(c.useState)(""),C=Object(l.a)(_,2),q=C[0],H=C[1],A=Object(c.useState)(""),I=Object(l.a)(A,2),M=I[0],P=I[1],F=Object(c.useState)(""),W=Object(l.a)(F,2),X=W[0],D=W[1],T=Object(c.useState)([]),z=Object(l.a)(T,2),R=z[0],V=z[1],G=Object(c.useRef)(null),Y=Object(c.useRef)(null),U=Object(c.useRef)(null),J=document.getElementById("overlay1"),K=document.getElementById("overlay2"),Z=document.getElementById("overlay3"),Q=Object(c.useState)(!1),$=Object(l.a)(Q,2),ee=$[0],se=$[1],te=Object(c.useState)(!1),ce=Object(l.a)(te,2),ae=ce[0],ie=ce[1],ne=Object(c.useState)(!1),re=Object(l.a)(ne,2),oe=re[0],le=re[1],de=Object(c.useState)(!1),je=Object(l.a)(de,2),ue=je[0],me=je[1],be=Object(c.useState)(!1),he=Object(l.a)(be,2),ve=he[0],Oe=he[1],xe=Object(c.useState)(!1),fe=Object(l.a)(xe,2),pe=fe[0],Ne=fe[1],ye=Object(c.useState)(!1),ge=Object(l.a)(ye,2),ke=ge[0],Be=ge[1],we=function(){o(!0),ie(!0),J.classList.add("displayNone")},_e=function(){ie(!1),J.classList.remove("displayNone"),o(!1)},Ce=function(){me(!0),K.classList.add("displayNone"),n(!0)},Le=function(){me(!1),K.classList.remove("displayNone"),n(!1)},Ee=function(){Ne(!0),Z.classList.add("displayNone"),i(!0)},Se=function(){Ne(!1),Z.classList.remove("displayNone"),i(!1)};function qe(e,c,i){var n=e.getContext("2d");requestAnimationFrame((function(){n.clearRect(0,0,e.width,e.height);var r=i.x-window.scrollX,o=i.y-window.scrollY;!function(e,c,i){var n=e.createLinearGradient(c.x,c.y,i.x,i.y);n.addColorStop(0,"rgba(255, 255, 255, 0)"),n.addColorStop(.4,"rgba(255, 255, 255, 0.2)"),n.addColorStop(.5,"white"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=n,e.lineWidth=1,e.beginPath(),e.moveTo(c.x,c.y),s?e.lineTo(R[0].x,R[0].y-15):t?e.lineTo(R[1].x-60,R[1].y+20):a?e.lineTo(R[2].x+65,R[2].y+21):e.lineTo(i.x,i.y),e.stroke()}(n,{x:r,y:o},c)}))}var He=function(e){R.length&&(qe(J,{x:e.clientX-10,y:e.clientY-10},R[0]),qe(K,{x:e.clientX,y:e.clientY},R[1]),qe(Z,{x:e.clientX,y:e.clientY},R[2]))};Object(c.useEffect)((function(){var e,s,t;(S(J),S(K),S(Z),G.current.addEventListener("mouseover",we),G.current.addEventListener("mouseleave",_e),Y.current.addEventListener("mouseover",Ce),Y.current.addEventListener("mouseleave",Le),U.current.addEventListener("mouseover",Ee),U.current.addEventListener("mouseleave",Se),R.length)||V([null===(e=G.current)||void 0===e?void 0:e.getBoundingClientRect(),null===(s=Y.current)||void 0===s?void 0:s.getBoundingClientRect(),null===(t=U.current)||void 0===t?void 0:t.getBoundingClientRect()]);return window.addEventListener("mousemove",He),function(){window.removeEventListener("mousemove",He);try{G.current.removeEventListener("mouseover",we),G.current.removeEventListener("mouseleave",_e),Y.current.removeEventListener("mouseover",Ce),Y.current.removeEventListener("mouseleave",Le),U.current.removeEventListener("mouseover",Ee),U.current.removeEventListener("mouseleave",Se)}catch(e){console.error(e)}}}),[R.length,s,t,a,we,_e,Ce,Le,Ee,Se]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("video",{className:"showreel",autoPlay:!0,loop:!0,muted:!0,children:Object(h.jsx)("source",{src:E,type:"video/mp4"})}),Object(h.jsx)("div",{className:"toner"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/story",children:" STORY PAGE "}),Object(h.jsx)(r.b,{to:"/cases",children:" CASES PAGE "}),Object(h.jsx)(r.b,{to:"/hire",children:" HIRE PAGE "}),Object(h.jsx)(B,{canvas:J,onClick:function(){Be(!ke),se(!ee)},isHovered:s,title:"cases",isClicked:ee,className:ee?"clickedCases firstCircle ":"firstCircle",ref:G}),Object(h.jsx)(B,{canvas:K,onClick:function(){Be(!ke),le(!oe)},isHovered:t,title:"story",ref:Y,isClicked:oe,className:oe?"clickedStory secondCircle":"secondCircle"}),Object(h.jsx)(B,{canvas:Z,onClick:function(){Be(!ke),Oe(!ve)},isHovered:a,title:"hire us",ref:U,isClicked:ve,className:ve?"clickedHire thirdCircle":"thirdCircle",x:!0}),Object(h.jsx)(O,{isMc:u,setisMc:m,isPuma:f,setisPuma:p,isFlint:g,setisFlint:k,isBig:q,setisBig:H,isPm:M,setisPm:P,isNavi:X,setisNavi:D,isCasesEntered:ae,isCanvasesHidded:ke,canvases:[J,K,Z],isClicked:ee}),Object(h.jsx)(w,{isStoryEntered:ue,isCanvasesHidded:ke,canvases:[J,K,Z],isClicked:oe}),Object(h.jsx)(x,{isHireEntered:pe,isCanvasesHidded:ke,canvases:[J,K,Z],isClicked:ve,setIsClicked:Oe}),Object(h.jsxs)("div",{className:" ".concat(u," ").concat(f," ").concat(g," ").concat(q," ").concat(M," ").concat(X," main"),children:[Object(h.jsxs)("div",{className:"main__top",children:[Object(h.jsx)(L,{}),Object(h.jsx)("div",{className:"main__logo"})]}),Object(h.jsx)("div",{className:"main__bottom",children:Object(h.jsx)("div",{className:"main__bottom__video",children:Object(h.jsx)("div",{className:"progress-done"})})})]})]})]})};t(39);var H=function(){var e=Object(c.useState)(!1),s=Object(l.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)(!1),n=Object(l.a)(i,2),r=n[0],o=n[1],d=Object(c.useState)(!1),j=Object(l.a)(d,2),u=j[0],m=j[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(k,{hoveredCursor:t,hoveredCursor1:r,hoveredCursor2:u,children:Object(h.jsx)(q,{setIs1BtnHovered:a,setIs2BtnHovered:o,setIs3BtnHovered:m,is1BtnHovered:t,is2BtnHovered:r,is3BtnHovered:u})})})},A=(t(40),t(20),t(41),function(e){var s=e.state,t=e.setState;return Object(h.jsxs)("div",{className:"cases-page-slider",children:[Object(h.jsxs)("p",{className:"current-page",children:[Object(h.jsx)("p",{children:s}),"/2"]}),Object(h.jsxs)("div",{className:"slider-buttons",children:[Object(h.jsx)("div",{onClick:function(){if(2!==s)return s;t((function(e){return e-1}))},className:"slider-back"}),Object(h.jsx)("div",{onClick:function(){if(1!==s)return s;t((function(e){return e+1}))},className:"slider-next"})]})]})}),I=function(){var e=Object(c.useState)(1),s=Object(l.a)(e,2),t=s[0],a=s[1],i=Object(c.useState)(""),n=Object(l.a)(i,2),o=n[0],d=n[1],j=Object(c.useState)([]),u=Object(l.a)(j,2),m=u[0],b=u[1];Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]);var O=[{id:1,title:"McDonald's",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-MC",page:1},{id:2,title:"Puma",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Puma",page:1},{id:3,title:"Flint",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Flint",page:1},{id:4,title:"Little big",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-big",page:1},{id:5,title:"Parimatch",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Pm",page:1},{id:6,title:"Navi",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Navi",page:1},{id:7,title:"Tvorchi",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Tvorchi",page:1},{id:8,title:"Bond Delivery",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Bond",page:1},{id:9,title:"Puma X FC Shaktar",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Shaktar",page:1},{id:10,title:"Kite",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Kite",page:1},{id:11,title:"Chipsters",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-Chipsters",page:1},{id:12,title:"Hushme",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:1},{id:13,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:14,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:15,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2},{id:15,title:"test test",casesArrayItemBack:"mcHoveredBack",personalClass:"hush-item",page:2}];return Object(c.useEffect)((function(){b(O.filter((function(e){return e.page===t})))}),[t,b,O]),Object(h.jsx)(k,{children:Object(h.jsxs)("div",{className:"cases-page",children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"".concat(o," noise"),children:[Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"our"}),Object(h.jsx)("h1",{children:"cases"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/story",children:"our story"}),Object(h.jsx)(r.b,{to:"/hire",children:"hire us"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsx)("div",{className:"cases-Array",children:m.map((function(e){return Object(h.jsx)("div",{onMouseEnter:function(){d(e.casesArrayItemBack)},onMouseLeave:function(){d("")},className:e.isHovered?"".concat(e.personalClass," casesArrayItem"):"casesArrayItem",children:e.title},e.id)}))}),Object(h.jsx)(A,{state:t,setState:a}),Object(h.jsxs)("div",{className:"casesTextBlock",children:[Object(h.jsx)("div",{className:"casesArrow"}),Object(h.jsx)("p",{children:"We\u2019re always looking the truth about the brand we work with and tell it naturaly and gorgeous, like no one else before."})]}),Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["We\u2019re",Object(h.jsx)("br",{}),"ready",Object(h.jsx)("br",{}),"Hire us"]})})]})]})})},M=(t(42),function(){return Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]),Object(h.jsx)(k,{children:Object(h.jsxs)("div",{className:"noise",children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Hire"}),Object(h.jsx)("h1",{children:"us"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/cases",children:"Cases"}),Object(h.jsx)(r.b,{to:"/hire",children:"our story"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsxs)("div",{className:"hireBLock",children:[Object(h.jsxs)("div",{className:"hireBLock__left",children:[Object(h.jsxs)("div",{className:"hireBLock__left__top",children:[Object(h.jsx)("a",{href:"#",children:"Instagram"}),Object(h.jsx)("a",{href:"#",children:"Facebook"}),Object(h.jsx)("a",{href:"#",children:"behance"})]}),Object(h.jsxs)("div",{className:"hireBLock__left__middle",children:[Object(h.jsx)("p",{children:"All contents of this website are the property oF wearefx STUDIO. No part of this site, including all text and images, may be reproduced in any form without the prior written consent oF wearefx STUDIO \xa92021"}),Object(h.jsx)("div",{className:"arrowToTop"})]}),Object(h.jsxs)("h3",{className:"hireBLock__left__bottom",children:["We\u2019re curious how we can",Object(h.jsx)("br",{}),"help, get in touch \ud83d\udc4b"]})]}),Object(h.jsxs)("div",{className:"hireBLock__right",children:[Object(h.jsxs)("div",{className:"hireBLock__right__top",children:[Object(h.jsxs)("p",{children:["Wearefx \xa9 2021 by",Object(h.jsxs)("a",{className:"violet_on_hover",href:"#",children:[" ","Br\u0101h lab"]})]}),Object(h.jsx)("a",{className:"violet_on_hover",to:"/wearefx",children:"Privacy Policy"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__middle",children:[Object(h.jsx)("p",{children:"For general inquiries & new projects "}),Object(h.jsx)("h3",{children:"contact@wearefx.xyz"})]}),Object(h.jsxs)("div",{className:"hireBLock__right__bottom",children:[Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Alex Dysenko"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"a@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380935925000",children:"+380935925000"})]})]}),Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("p",{children:"Studio manager"}),Object(h.jsx)("p",{children:"Stas Ravsyi"}),Object(h.jsxs)("div",{className:"contact__tel",children:[Object(h.jsx)("p",{children:"s@wearefx.xyz"}),Object(h.jsx)("a",{href:"tel:+380636312065",children:"+380636312065"})]})]})]})]})]}),Object(h.jsx)("div",{className:"casesBtn gradientBtn",children:Object(h.jsxs)("p",{children:["chat with us",Object(h.jsx)("br",{}),"in telegram"]})}),Object(h.jsx)(r.b,{to:"/wearefx",children:Object(h.jsx)("div",{className:"hireBtnViolet"})})]})})}),P=(t(43),t(44),function(){return Object(h.jsxs)("div",{className:"story-main",children:[Object(h.jsxs)("div",{className:"story-header",children:[Object(h.jsxs)("div",{className:"header-left",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"our"}),Object(h.jsx)("h1",{children:"story"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/cases",children:"Cases"}),Object(h.jsx)(r.b,{to:"/hire",children:"hire us"})]})]}),Object(h.jsx)("div",{className:"header-right"})]}),Object(h.jsxs)("div",{className:"story-main-content",children:[Object(h.jsx)("p",{children:"Specialized in high end CG and VFX for Advertising, TV, Print, digital, series, short and now long format films since its launch, WeareFX has consistently evolved their processes as VFX specialists with a strong emphasis on art direction, design and technique development."}),Object(h.jsxs)("p",{children:["Wearefx\u2019s fully equipped and growing Ukraine based studio is accompanied with a host of talents, including experienced lead 3D Project Managers, 3D VFX artists, animators, lead lighting and 3D renderers. Their dedicated compositing teams include specialized Flame Artists, Shoot Supervisors and a host of in house, and After Effects compositors."," "]}),Object(h.jsx)("p",{children:"Our\u2019s services include Autodesk Smoke, Flame, DaVinci Resolve, Adobe Premiere Pro and Avid Media Composer suites."})]})]})}),F=(t(21),function(){return Object(h.jsxs)("div",{className:"story-footer",children:[Object(h.jsxs)("div",{className:"story-footer-left",children:[Object(h.jsx)("a",{href:"#",children:"Home"}),Object(h.jsx)("a",{href:"#",children:"Cases"}),Object(h.jsx)("a",{href:"#",children:"Our story"}),Object(h.jsx)("a",{href:"#",children:"Hire us"})]}),Object(h.jsx)("div",{className:"story-footer-middle"}),Object(h.jsxs)("div",{className:"story-footer-right",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Wearefx \xa9 2021 by "}),Object(h.jsx)("p",{className:"violet_on_hover",children:" Br\u0101h lab \ufe64"})]}),Object(h.jsx)("p",{className:"violet_on_hover",children:"Privacy Policy \ufe64"})]})]})}),W=function(){return Object(h.jsxs)("div",{className:"story-bottom",children:[Object(h.jsx)("div",{className:"story-ellipse"}),Object(h.jsx)("div",{className:"story-main-content",children:Object(h.jsx)("p",{children:"We pushing the boundaries of visual effects and work with our clients to innovate in the real world."})}),Object(h.jsx)("div",{className:"story-bottom-marquee",children:Object(h.jsxs)("div",{className:"marquee-div",children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img marquee-1"}),Object(h.jsx)("div",{className:"marquee-img marquee-2"}),Object(h.jsx)("div",{className:"marquee-img marquee-3"}),Object(h.jsx)("div",{className:"marquee-img marquee-4"}),Object(h.jsx)("div",{className:"marquee-img marquee-5"}),Object(h.jsx)("div",{className:"marquee-img marquee-6"}),Object(h.jsx)("div",{className:"marquee-img marquee-7"}),Object(h.jsx)("div",{className:"marquee-img marquee-8"})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img marquee-1"}),Object(h.jsx)("div",{className:"marquee-img marquee-2"}),Object(h.jsx)("div",{className:"marquee-img marquee-3"}),Object(h.jsx)("div",{className:"marquee-img marquee-4"}),Object(h.jsx)("div",{className:"marquee-img marquee-5"}),Object(h.jsx)("div",{className:"marquee-img marquee-6"}),Object(h.jsx)("div",{className:"marquee-img marquee-7"}),Object(h.jsx)("div",{className:"marquee-img marquee-8"})]})]})}),Object(h.jsx)("div",{className:"story-bottom-marquee-reverse",children:Object(h.jsxs)("div",{className:"marquee-div-reverse",children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img-reverse marquee-10"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-20"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-30"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-40"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-50"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-60"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-70"})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:"marquee-img-reverse marquee-10"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-20"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-30"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-40"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-50"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-60"}),Object(h.jsx)("div",{className:"marquee-img-reverse marquee-70"})]})]})}),Object(h.jsx)(F,{})]})},X=(t(45),function(){return Object(c.useEffect)((function(){document.getElementById("overlay1").classList.add("displayNone"),document.getElementById("overlay2").classList.add("displayNone"),document.getElementById("overlay3").classList.add("displayNone")}),[]),Object(h.jsx)(k,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{}),Object(h.jsx)(W,{})]})})});t(46);n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(r.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/wearefx",element:Object(h.jsx)(H,{})}),Object(h.jsx)(o.a,{path:"/story",element:Object(h.jsx)(X,{})}),Object(h.jsx)(o.a,{path:"/cases",element:Object(h.jsx)(I,{})}),Object(h.jsx)(o.a,{path:"/hire",element:Object(h.jsx)(M,{})})]})})}),document.getElementById("root"))}]),[[47,1,2]]]);
//# sourceMappingURL=main.b4ef809a.chunk.js.map