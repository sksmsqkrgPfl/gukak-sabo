(this["webpackJsonpgukak-app"]=this["webpackJsonpgukak-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(15),a=n.n(i),o=(n(28),n(29),n(43)),m=n(44),d=n(42),l=n(18),p=(n(30),n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(2));const r={joong:"/sounds/joong_sound.mp3",im:"/sounds/im_sound.mp3",mu:"/sounds/mu_sound.mp3",c_hwang:"/sounds/c.hwang_sound.mp3",c_tae:"/sounds/c.tae_sound.mp3",c_joong:"/sounds/c.joong_sound.mp3",c_im:"/sounds/c.im_sound.mp3",c_mu:"/sounds/c.mu_sound.mp3"},j=[{id:1,name:"\uc911",type:"joong",image:"/images/joong.png"},{id:2,name:"\uc784",type:"im",image:"/images/im.png"},{id:3,name:"\ubb34",type:"mu",image:"/images/mu.png"},{id:4,name:"\uccad\ud669",type:"c_hwang",image:"/images/c.hwang.png"},{id:5,name:"\uccad\ud0dc",type:"c_tae",image:"/images/c.tae.png"},{id:6,name:"\uccad\uc911",type:"c_joong",image:"/images/c.joong.png"},{id:7,name:"\uccad\uc784",type:"c_im",image:"/images/c.im.png"},{id:8,name:"\uccad\ubb34",type:"c_mu",image:"/images/c.mu.png"}],g=e=>{let{index:t,onDrop:n,items:c,cellHeight:i}=e;const[,a]=Object(o.a)({accept:"ITEM",drop:e=>n(t,e)});return Object(p.jsx)("div",{ref:a,className:"grid-cell",style:{height:i},children:c.map(((e,t)=>Object(p.jsxs)(s.a.Fragment,{children:[Object(p.jsx)("img",{src:"/gukak-sabo"+e.image,alt:e.name,style:{width:"40px",height:"40px",position:"absolute",top:"".concat(40*t,"px")}}),t<c.length-1&&Object(p.jsx)("div",{style:{position:"absolute",top:"".concat(40*(t+1)-1,"px"),left:0,width:"100%",height:"1px",backgroundColor:"black"}})]},t)))})},u=e=>{let{item:t}=e;const[,n]=Object(m.a)({type:"ITEM",item:t});return Object(p.jsx)("div",{ref:n,className:"draggable-item",children:Object(p.jsx)("img",{src:"/gukak-sabo"+t.image,alt:t.name,style:{width:"40px",height:"40px"}})})};var h=()=>{const[e,t]=Object(c.useState)(Array(20).fill([])),[n,s]=Object(c.useState)("1"),i=(c,s)=>{const i=[...e];"1"===n?i[c]=[s]:i[c].length<n&&(i[c]=[...i[c],s]),t(i)},a=(e,t)=>new Promise((n=>{const c=new Audio(r[e.type]);c.currentTime=0,c.play(),setTimeout((()=>{c.pause(),c.currentTime=0,n()}),t)})),o=(()=>{let t=1;return e.forEach((e=>{e.length>t&&(t=e.length)})),"".concat(40*t,"px")})();return Object(p.jsx)(d.a,{backend:l.a,children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"\uad6d\uc545 \uad50\uc721 \ud504\ub85c\uadf8\ub7a8"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"1"===n?"selected":"",onClick:()=>s("1"),children:"1\ubd84\ubc15"}),Object(p.jsx)("button",{className:"2"===n?"selected":"",onClick:()=>s("2"),children:"2\ubd84\ubc15"}),Object(p.jsx)("button",{className:"3"===n?"selected":"",onClick:()=>s("3"),children:"3\ubd84\ubc15"})]}),Object(p.jsx)("div",{className:"item-container",children:j.map((e=>Object(p.jsx)(u,{item:e},e.id)))}),Object(p.jsx)("div",{className:"grid-container",children:e.map(((e,t)=>Object(p.jsx)(g,{index:t,items:e,onDrop:i,cellHeight:o},t)))}),Object(p.jsx)("button",{onClick:async()=>{for(let t=4;t>=0;t--)for(let n=0;n<5;n++){const c=e[5*t+n];if(c.length>0){const e=1e3/c.length;for(let t of c)await a(t,e)}}},children:"\uc7ac\uc0dd"}),Object(p.jsx)("button",{onClick:()=>{t(Array(20).fill([]))},children:"\ucd08\uae30\ud654"})]})})})};var b=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("h1",{children:"\uad6d\uc545 \uad50\uc721 \ud504\ub85c\uadf8\ub7a8"}),Object(p.jsx)(h,{})]})})};a.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(b,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.421deb15.chunk.js.map