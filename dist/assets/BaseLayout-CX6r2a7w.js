import{_ as st,a as w,o as x,b as bt,u as gt,d as m,e as E,w as S,r as pt,f as D,g as k,h as N,t as et,F as nt,i as U,j as _t,k as ot,n as yt,R as vt,l as Et}from"./index-BaYYEV3U.js";function Ct(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}const At={};function wt(v,C){return x(),w("div",null,C[0]||(C[0]=[bt('<footer class="d-flex flex-wrap justify-content-between py-3 my-4 border-top container"><div class="col-md-4 d-flex align-items-end"><a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"><img src="https://yygang-bucket.s3.ap-northeast-2.amazonaws.com/mainLogo.png" alt="FooterLogo" width="120px"></a><span id="FooterContent" class="mb-3 mb-sm-0 text-body-secondary">© Copy right © 2025 by yygang team</span></div><ul class="nav col-md-4 justify-content-end list-unstyled d-flex"><li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-twitter" width="24" height="24"></i></a></li><li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-instagram" width="24" height="24"></i></a></li><li class="ms-3"><a class="text-body-secondary" href="#"><i class="bi bi-facebook" width="24" height="24"></i></a></li></ul></footer>',1)]))}const xt=st(At,[["render",wt]]),St={class:"d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"},Lt={class:"nav nav-pills align-self-center justify-content-around"},Dt={class:"nav-item"},Nt={class:"nav-item"},Tt={class:"nav-item"},$t={class:"nav-item"},kt={class:"col-md-4 text-center align-self-center"},Mt={class:"nav nav-pills align-self-center justify-content-end"},Ot={key:0,class:"nav-item"},It={key:1,class:"nav-item"},Rt={key:2,class:"nav-item"},qt={class:"nav-link"},Pt={key:3,class:"nav-item"},Ht={class:"nav-item"},Ft={class:"nav-item"},Vt={class:"nav-item"},zt={__name:"Header",setup(v){const C=gt(),s=C.isLoggedIn,d=C.userInfo,h=()=>{confirm("정말로 로그아웃하시겠습니까?")&&C.logout()};return(n,t)=>{const o=pt("RouterLink");return x(),w(nt,null,[t[12]||(t[12]=m("svg",{xmlns:"http://www.w3.org/2000/svg",class:"d-none"},[m("symbol",{id:"bootstrap",viewBox:"0 0 118 94"},[m("title",null,"Bootstrap"),m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"})])],-1)),m("header",St,[m("button",{onClick:t[0]||(t[0]=b=>n.$emit("toggle-sidebar")),id:"list-btn"},t[1]||(t[1]=[m("i",{class:"bi bi-list col-md-1 ms-3"},null,-1)])),E(o,{to:"/",class:"align-items-center mb-3 mb-md-0 me-auto link-body-emphasis text-decoration-none ms-5"},{default:S(()=>t[2]||(t[2]=[m("img",{src:"https://yygang-bucket.s3.ap-northeast-2.amazonaws.com/mainLogo.png",alt:"mainLogo",style:{width:"80px"}},null,-1)])),_:1}),m("ul",Lt,[m("li",Dt,[E(o,{class:"nav-link",to:{name:"nsupplement"}},{default:S(()=>t[3]||(t[3]=[D("제품 정보")])),_:1})]),m("li",Nt,[E(o,{class:"nav-link"},{default:S(()=>t[4]||(t[4]=[D("추천 영양제 찾기")])),_:1})]),m("li",Tt,[E(o,{class:"nav-link",to:{name:"questionboard"}},{default:S(()=>t[5]||(t[5]=[D("약 질문하기")])),_:1})]),m("li",$t,[E(o,{class:"nav-link",to:{name:"board"}},{default:S(()=>t[6]||(t[6]=[D("자유 게시판")])),_:1})])]),m("div",kt,[m("ul",Mt,[N(s)?k("",!0):(x(),w("li",Ot,[E(o,{class:"nav-link",to:"/user/login"},{default:S(()=>t[7]||(t[7]=[D("로그인")])),_:1})])),N(s)?k("",!0):(x(),w("li",It,[E(o,{class:"nav-link",to:{name:"join"}},{default:S(()=>t[8]||(t[8]=[D("회원가입")])),_:1})])),N(s)?(x(),w("li",Rt,[m("span",qt,et(N(d).name)+"님 안녕하세요!",1)])):k("",!0),N(s)?(x(),w("li",Pt,[m("button",{class:"nav-link",onClick:h},"로그아웃")])):k("",!0),m("li",Ht,[E(o,{class:"nav-link",to:{name:"nsupplement"}},{default:S(()=>t[9]||(t[9]=[m("i",{class:"bi bi-search"},null,-1)])),_:1})]),m("li",Ft,[E(o,{class:"nav-link",to:{name:"cart"}},{default:S(()=>t[10]||(t[10]=[m("i",{class:"bi bi-cart"},null,-1)])),_:1})]),m("li",Vt,[E(o,{class:"nav-link"},{default:S(()=>t[11]||(t[11]=[m("i",{class:"bi bi-heart"},null,-1)])),_:1})])])])])],64)}}},jt=st(zt,[["__scopeId","data-v-ccead66d"]]);var Q={exports:{}},W={exports:{}},J={exports:{}};/*!
  * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Kt=J.exports,rt;function Bt(){return rt||(rt=1,function(v,C){(function(s,d){v.exports=d()})(Kt,function(){const s=new Map;return{set(h,n,t){s.has(h)||s.set(h,new Map);const o=s.get(h);if(!o.has(n)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(n,t)},get(h,n){return s.has(h)&&s.get(h).get(n)||null},remove(h,n){if(!s.has(h))return;const t=s.get(h);t.delete(n),t.size===0&&s.delete(h)}}})}(J)),J.exports}var G={exports:{}},B={exports:{}};/*!
  * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Yt=B.exports,it;function Y(){return it||(it=1,function(v,C){(function(s,d){d(C)})(Yt,function(s){const n="transitionend",t=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(a,i)=>`#${CSS.escape(i)}`)),e),o=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),b=e=>{do e+=Math.floor(Math.random()*1e6);while(document.getElementById(e));return e},r=e=>{if(!e)return 0;let{transitionDuration:a,transitionDelay:i}=window.getComputedStyle(e);const u=Number.parseFloat(a),g=Number.parseFloat(i);return!u&&!g?0:(a=a.split(",")[0],i=i.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(i))*1e3)},y=e=>{e.dispatchEvent(new Event(n))},L=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),R=e=>L(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(t(e)):null,q=e=>{if(!L(e)||e.getClientRects().length===0)return!1;const a=getComputedStyle(e).getPropertyValue("visibility")==="visible",i=e.closest("details:not([open])");if(!i)return a;if(i!==e){const u=e.closest("summary");if(u&&u.parentNode!==i||u===null)return!1}return a},H=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",P=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const a=e.getRootNode();return a instanceof ShadowRoot?a:null}return e instanceof ShadowRoot?e:e.parentNode?P(e.parentNode):null},M=()=>{},O=e=>{e.offsetHeight},j=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,F=[],V=e=>{document.readyState==="loading"?(F.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of F)a()}),F.push(e)):e()},z=()=>document.documentElement.dir==="rtl",c=e=>{V(()=>{const a=j();if(a){const i=e.NAME,u=a.fn[i];a.fn[i]=e.jQueryInterface,a.fn[i].Constructor=e,a.fn[i].noConflict=()=>(a.fn[i]=u,e.jQueryInterface)}})},l=(e,a=[],i=e)=>typeof e=="function"?e(...a):i,f=(e,a,i=!0)=>{if(!i){l(e);return}const g=r(a)+5;let p=!1;const A=({target:T})=>{T===a&&(p=!0,a.removeEventListener(n,A),l(e))};a.addEventListener(n,A),setTimeout(()=>{p||y(a)},g)},_=(e,a,i,u)=>{const g=e.length;let p=e.indexOf(a);return p===-1?!i&&u?e[g-1]:e[0]:(p+=i?1:-1,u&&(p=(p+g)%g),e[Math.max(0,Math.min(p,g-1))])};s.defineJQueryPlugin=c,s.execute=l,s.executeAfterTransition=f,s.findShadowRoot=P,s.getElement=R,s.getNextActiveElement=_,s.getTransitionDurationFromElement=r,s.getUID=b,s.getjQuery=j,s.isDisabled=H,s.isElement=L,s.isRTL=z,s.isVisible=q,s.noop=M,s.onDOMContentLoaded=V,s.parseSelector=t,s.reflow=O,s.toType=o,s.triggerTransitionEnd=y,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(B,B.exports)),B.exports}/*!
  * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ut=G.exports,at;function mt(){return at||(at=1,function(v,C){(function(s,d){v.exports=d(Y())})(Ut,function(s){const d=/[^.]*(?=\..*)\.|.*/,h=/\..*/,n=/::\d+$/,t={};let o=1;const b={mouseenter:"mouseover",mouseleave:"mouseout"},r=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function y(c,l){return l&&`${l}::${o++}`||c.uidEvent||o++}function L(c){const l=y(c);return c.uidEvent=l,t[l]=t[l]||{},t[l]}function R(c,l){return function f(_){return z(_,{delegateTarget:c}),f.oneOff&&V.off(c,_.type,l),l.apply(c,[_])}}function q(c,l,f){return function _(e){const a=c.querySelectorAll(l);for(let{target:i}=e;i&&i!==this;i=i.parentNode)for(const u of a)if(u===i)return z(e,{delegateTarget:i}),_.oneOff&&V.off(c,e.type,l,f),f.apply(i,[e])}}function H(c,l,f=null){return Object.values(c).find(_=>_.callable===l&&_.delegationSelector===f)}function P(c,l,f){const _=typeof l=="string",e=_?f:l||f;let a=F(c);return r.has(a)||(a=c),[_,e,a]}function M(c,l,f,_,e){if(typeof l!="string"||!c)return;let[a,i,u]=P(l,f,_);l in b&&(i=(ht=>function(K){if(!K.relatedTarget||K.relatedTarget!==K.delegateTarget&&!K.delegateTarget.contains(K.relatedTarget))return ht.call(this,K)})(i));const g=L(c),p=g[u]||(g[u]={}),A=H(p,i,a?f:null);if(A){A.oneOff=A.oneOff&&e;return}const T=y(i,l.replace(d,"")),$=a?q(c,f,i):R(c,i);$.delegationSelector=a?f:null,$.callable=i,$.oneOff=e,$.uidEvent=T,p[T]=$,c.addEventListener(u,$,a)}function O(c,l,f,_,e){const a=H(l[f],_,e);a&&(c.removeEventListener(f,a,!!e),delete l[f][a.uidEvent])}function j(c,l,f,_){const e=l[f]||{};for(const[a,i]of Object.entries(e))a.includes(_)&&O(c,l,f,i.callable,i.delegationSelector)}function F(c){return c=c.replace(h,""),b[c]||c}const V={on(c,l,f,_){M(c,l,f,_,!1)},one(c,l,f,_){M(c,l,f,_,!0)},off(c,l,f,_){if(typeof l!="string"||!c)return;const[e,a,i]=P(l,f,_),u=i!==l,g=L(c),p=g[i]||{},A=l.startsWith(".");if(typeof a<"u"){if(!Object.keys(p).length)return;O(c,g,i,a,e?f:null);return}if(A)for(const T of Object.keys(g))j(c,g,T,l.slice(1));for(const[T,$]of Object.entries(p)){const I=T.replace(n,"");(!u||l.includes(I))&&O(c,g,i,$.callable,$.delegationSelector)}},trigger(c,l,f){if(typeof l!="string"||!c)return null;const _=s.getjQuery(),e=F(l),a=l!==e;let i=null,u=!0,g=!0,p=!1;a&&_&&(i=_.Event(l,f),_(c).trigger(i),u=!i.isPropagationStopped(),g=!i.isImmediatePropagationStopped(),p=i.isDefaultPrevented());const A=z(new Event(l,{bubbles:u,cancelable:!0}),f);return p&&A.preventDefault(),g&&c.dispatchEvent(A),A.defaultPrevented&&i&&i.preventDefault(),A}};function z(c,l={}){for(const[f,_]of Object.entries(l))try{c[f]=_}catch{Object.defineProperty(c,f,{configurable:!0,get(){return _}})}return c}return V})}(G)),G.exports}var X={exports:{}},Z={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Qt=Z.exports,lt;function Wt(){return lt||(lt=1,function(v,C){(function(s,d){v.exports=d()})(Qt,function(){function s(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function d(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}return{setDataAttribute(n,t,o){n.setAttribute(`data-bs-${d(t)}`,o)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${d(t)}`)},getDataAttributes(n){if(!n)return{};const t={},o=Object.keys(n.dataset).filter(b=>b.startsWith("bs")&&!b.startsWith("bsConfig"));for(const b of o){let r=b.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=s(n.dataset[b])}return t},getDataAttribute(n,t){return s(n.getAttribute(`data-bs-${d(t)}`))}}})}(Z)),Z.exports}/*!
  * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Jt=X.exports,ut;function Gt(){return ut||(ut=1,function(v,C){(function(s,d){v.exports=d(Wt(),Y())})(Jt,function(s,d){class h{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,o){const b=d.isElement(o)?s.getDataAttribute(o,"config"):{};return{...this.constructor.Default,...typeof b=="object"?b:{},...d.isElement(o)?s.getDataAttributes(o):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,o=this.constructor.DefaultType){for(const[b,r]of Object.entries(o)){const y=t[b],L=d.isElement(y)?"element":d.toType(y);if(!new RegExp(r).test(L))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${b}" provided type "${L}" but expected type "${r}".`)}}}return h})}(X)),X.exports}/*!
  * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Xt=W.exports,ct;function Zt(){return ct||(ct=1,function(v,C){(function(s,d){v.exports=d(Bt(),mt(),Gt(),Y())})(Xt,function(s,d,h,n){const t="5.3.3";class o extends h{constructor(r,y){super(),r=n.getElement(r),r&&(this._element=r,this._config=this._getConfig(y),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),d.off(this._element,this.constructor.EVENT_KEY);for(const r of Object.getOwnPropertyNames(this))this[r]=null}_queueCallback(r,y,L=!0){n.executeAfterTransition(r,y,L)}_getConfig(r){return r=this._mergeConfigObj(r,this._element),r=this._configAfterMerge(r),this._typeCheckConfig(r),r}static getInstance(r){return s.get(n.getElement(r),this.DATA_KEY)}static getOrCreateInstance(r,y={}){return this.getInstance(r)||new this(r,typeof y=="object"?y:null)}static get VERSION(){return t}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(r){return`${r}${this.EVENT_KEY}`}}return o})}(W)),W.exports}var tt={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var te=tt.exports,dt;function ee(){return dt||(dt=1,function(v,C){(function(s,d){v.exports=d(Y())})(te,function(s){const d=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let o=n.getAttribute("href");if(!o||!o.includes("#")&&!o.startsWith("."))return null;o.includes("#")&&!o.startsWith("#")&&(o=`#${o.split("#")[1]}`),t=o&&o!=="#"?o.trim():null}return t?t.split(",").map(o=>s.parseSelector(o)).join(","):null},h={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(o=>o.matches(t))},parents(n,t){const o=[];let b=n.parentNode.closest(t);for(;b;)o.push(b),b=b.parentNode.closest(t);return o},prev(n,t){let o=n.previousElementSibling;for(;o;){if(o.matches(t))return[o];o=o.previousElementSibling}return[]},next(n,t){let o=n.nextElementSibling;for(;o;){if(o.matches(t))return[o];o=o.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(o=>!s.isDisabled(o)&&s.isVisible(o))},getSelectorFromElement(n){const t=d(n);return t&&h.findOne(t)?t:null},getElementFromSelector(n){const t=d(n);return t?h.findOne(t):null},getMultipleElementsFromSelector(n){const t=d(n);return t?h.find(t):[]}};return h})}(tt)),tt.exports}/*!
  * Bootstrap collapse.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ne=Q.exports,ft;function se(){return ft||(ft=1,function(v,C){(function(s,d){v.exports=d(Zt(),mt(),ee(),Y())})(ne,function(s,d,h,n){const t="collapse",b=".bs.collapse",r=".data-api",y=`show${b}`,L=`shown${b}`,R=`hide${b}`,q=`hidden${b}`,H=`click${b}${r}`,P="show",M="collapse",O="collapsing",j="collapsed",F=`:scope .${M} .${M}`,V="collapse-horizontal",z="width",c="height",l=".collapse.show, .collapse.collapsing",f='[data-bs-toggle="collapse"]',_={parent:null,toggle:!0},e={parent:"(null|element)",toggle:"boolean"};class a extends s{constructor(u,g){super(u,g),this._isTransitioning=!1,this._triggerArray=[];const p=h.find(f);for(const A of p){const T=h.getSelectorFromElement(A),$=h.find(T).filter(I=>I===this._element);T!==null&&$.length&&this._triggerArray.push(A)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return _}static get DefaultType(){return e}static get NAME(){return t}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let u=[];if(this._config.parent&&(u=this._getFirstLevelChildren(l).filter(I=>I!==this._element).map(I=>a.getOrCreateInstance(I,{toggle:!1}))),u.length&&u[0]._isTransitioning||d.trigger(this._element,y).defaultPrevented)return;for(const I of u)I.hide();const p=this._getDimension();this._element.classList.remove(M),this._element.classList.add(O),this._element.style[p]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const A=()=>{this._isTransitioning=!1,this._element.classList.remove(O),this._element.classList.add(M,P),this._element.style[p]="",d.trigger(this._element,L)},$=`scroll${p[0].toUpperCase()+p.slice(1)}`;this._queueCallback(A,this._element,!0),this._element.style[p]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||d.trigger(this._element,R).defaultPrevented)return;const g=this._getDimension();this._element.style[g]=`${this._element.getBoundingClientRect()[g]}px`,n.reflow(this._element),this._element.classList.add(O),this._element.classList.remove(M,P);for(const A of this._triggerArray){const T=h.getElementFromSelector(A);T&&!this._isShown(T)&&this._addAriaAndCollapsedClass([A],!1)}this._isTransitioning=!0;const p=()=>{this._isTransitioning=!1,this._element.classList.remove(O),this._element.classList.add(M),d.trigger(this._element,q)};this._element.style[g]="",this._queueCallback(p,this._element,!0)}_isShown(u=this._element){return u.classList.contains(P)}_configAfterMerge(u){return u.toggle=!!u.toggle,u.parent=n.getElement(u.parent),u}_getDimension(){return this._element.classList.contains(V)?z:c}_initializeChildren(){if(!this._config.parent)return;const u=this._getFirstLevelChildren(f);for(const g of u){const p=h.getElementFromSelector(g);p&&this._addAriaAndCollapsedClass([g],this._isShown(p))}}_getFirstLevelChildren(u){const g=h.find(F,this._config.parent);return h.find(u,this._config.parent).filter(p=>!g.includes(p))}_addAriaAndCollapsedClass(u,g){if(u.length)for(const p of u)p.classList.toggle(j,!g),p.setAttribute("aria-expanded",g)}static jQueryInterface(u){const g={};return typeof u=="string"&&/show|hide/.test(u)&&(g.toggle=!1),this.each(function(){const p=a.getOrCreateInstance(this,g);if(typeof u=="string"){if(typeof p[u]>"u")throw new TypeError(`No method named "${u}"`);p[u]()}})}}return d.on(document,H,f,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const u of h.getMultipleElementsFromSelector(this))a.getOrCreateInstance(u,{toggle:!1}).toggle()}),n.defineJQueryPlugin(a),a})}(Q)),Q.exports}var oe=se();const re=Ct(oe),ie={class:"flex-shrink-0 p-3",style:{width:"280px"}},ae={class:"row"},le={class:"d-flex align-items-center pb-3 mb-3 link-body-emphasis border-bottom"},ue={class:"list-unstyled ps-0"},ce=["onClick"],de=["id"],fe={class:"btn-toggle-nav list-unstyled fw-normal pb-1 small"},ge={key:0,class:"mb-1 border-top"},pe={key:1,class:"mb-1 border-top"},me={key:2,class:"mb-1"},he={key:3,class:"mb-1 border-top"},be={key:4,class:"mb-1"},_e={key:5,class:"mb-1"},ye={key:6,class:"mb-1"},ve={key:7,class:"mb-1"},Ee={__name:"Sidebar",setup(v){const C=gt(),s=C.isLoggedIn,d=C.userInfo,h=U([{title:"제품 정보",subMenu:[{name:"제품 정보",path:"/supplement"},{name:"건강 기능 별 제품",path:"/supplement"},{name:"성분 별 제품 확인",path:"/supplement"}]},{title:"추천 영양제 찾기",subMenu:[{name:"나이별 추천",path:"/"},{name:"성별 추천",path:"/"},{name:"개인 맞춤 추천",path:"/"}]},{title:"약 질문하기",subMenu:[{name:"약 질문하기",path:"/questionboard"},{name:"자주 묻는 질문",path:"/"}]},{title:"자유게시판",subMenu:[{name:"자유 게시판",path:"/board"},{name:"인기 게시글",path:"/"}]}]),n=U([]),t=U([]);_t(()=>{t.value=n.value.map(b=>new re(b,{toggle:!1}))});const o=b=>{t.value[b]&&t.value[b].toggle()};return(b,r)=>{const y=pt("RouterLink");return x(),w("div",ie,[m("div",ae,[m("div",le,[r[2]||(r[2]=m("img",{src:"https://yygang-bucket.s3.ap-northeast-2.amazonaws.com/mainLogo.png",alt:"mainLogo",style:{width:"80px"}},null,-1)),r[3]||(r[3]=m("span",{class:"fs-5 fw-semibold flex-grow-1"},[D("Y"),m("span",{style:{color:"green"}},"yang"),D("G")],-1)),m("button",{onClick:r[0]||(r[0]=L=>b.$emit("toggle-sidebar")),class:"btn"},r[1]||(r[1]=[m("i",{class:"bi bi-x"},null,-1)]))])]),m("ul",ue,[r[12]||(r[12]=m("li",{class:"mb-1"},[m("a",{href:"/",class:"align-items-center d-inline-flex align-items-center rounded border-0 text-decoration-none ms-3 text-dark"}," 홈 ")],-1)),(x(!0),w(nt,null,ot(h.value,(L,R)=>(x(),w("li",{key:R,class:"mb-1"},[m("button",{class:"btn btn-toggle d-inline-flex align-items-center rounded border-0",onClick:q=>o(R)},et(L.title),9,ce),m("div",{class:"collapse",id:`collapse-${R}`,ref_for:!0,ref_key:"collapseRefs",ref:n},[m("ul",fe,[(x(!0),w(nt,null,ot(L.subMenu,(q,H)=>(x(),w("li",{key:H},[E(y,{to:q.path,class:"link-body-emphasis d-inline-flex text-decoration-none rounded ms-3"},{default:S(()=>[D(et(q.name),1)]),_:2},1032,["to"])]))),128))])],8,de)]))),128)),N(s)?k("",!0):(x(),w("li",ge,[E(y,{to:"/login",class:"btn btn-toggle d-inline-flex align-items-center rounded border-0 ms-0 small-text",style:{color:"gray"}},{default:S(()=>r[4]||(r[4]=[D(" 로그인 ")])),_:1})])),N(s)&&N(d).role==="SELLER"?(x(),w("li",pe,[E(y,{to:{name:"registProduct"},class:"btn btn-toggle d-inline-flex align-items-center rounded border-0 ms-0 small-text",style:{color:"gray"}},{default:S(()=>r[5]||(r[5]=[D(" 상품 등록 ")])),_:1})])):k("",!0),N(s)&&N(d).role==="SELLER"?(x(),w("li",me,[E(y,{to:{name:"registProductList"},class:"btn btn-toggle d-inline-flex align-items-center rounded border-0 ms-0 small-text",style:{color:"gray"}},{default:S(()=>r[6]||(r[6]=[D(" 상품 조회 ")])),_:1})])):k("",!0),N(s)?(x(),w("li",he,[E(y,{to:"/user/my-page",class:"btn btn-toggle d-inline-flex align-items-center rounded border-0 ms-0 small-text",style:{color:"gray"}},{default:S(()=>r[7]||(r[7]=[D(" 마이페이지 ")])),_:1})])):k("",!0),N(s)?(x(),w("li",be,[E(y,{to:"/user/my-page/pass-word",class:"btn btn-toggle d-inline-flex align-items-center rounded border-0 ms-0 small-text",style:{color:"gray"}},{default:S(()=>r[8]||(r[8]=[D(" 비밀번호 변경 ")])),_:1})])):k("",!0),N(s)?(x(),w("li",_e,[E(y,{to:"/user/my-page/withdraw",class:"btn btn-toggle d-inline-flex align-items-center rounded border-0 ms-0 small-text",style:{color:"gray"}},{default:S(()=>r[9]||(r[9]=[D(" 회원탈퇴 ")])),_:1})])):k("",!0),N(s)?(x(),w("li",ye,[E(y,{to:{name:"cart"},class:"btn btn-toggle d-inline-flex align-items-center rounded border-0 ms-0 small-text",style:{color:"gray"}},{default:S(()=>r[10]||(r[10]=[D(" 장바구니 ")])),_:1})])):k("",!0),N(s)?(x(),w("li",ve,[E(y,{to:{name:"orderList"},class:"btn btn-toggle d-inline-flex align-items-center rounded border-0 ms-0 small-text",style:{color:"gray"}},{default:S(()=>r[11]||(r[11]=[D(" 주문내역조회 ")])),_:1})])):k("",!0)])])}}},Ce={id:"wapper",class:"container-sm"},Ae={class:"content"},we={id:"main-content"},xe={__name:"BaseLayout",setup(v){const C=U(!1);Et();const s=()=>{C.value=!C.value};return(d,h)=>(x(),w("div",Ce,[E(jt,{onToggleSidebar:s}),m("div",Ae,[E(Ee,{id:"side-bar",class:yt({open:C.value}),onToggleSidebar:s},null,8,["class"]),m("div",we,[E(N(vt))])]),E(xt)]))}},Le=st(xe,[["__scopeId","data-v-5a1ada68"]]);export{Le as default};
