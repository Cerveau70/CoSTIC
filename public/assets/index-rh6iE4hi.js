(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Pg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ud={exports:{}},Za={},zd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function u5(){if(mm)return Pe;mm=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),E=Symbol.iterator;function I(j){return j===null||typeof j!="object"?null:(j=E&&j[E]||j["@@iterator"],typeof j=="function"?j:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,q={};function F(j,K,ke){this.props=j,this.context=K,this.refs=q,this.updater=ke||L}F.prototype.isReactComponent={},F.prototype.setState=function(j,K){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,K,"setState")},F.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function te(){}te.prototype=F.prototype;function J(j,K,ke){this.props=j,this.context=K,this.refs=q,this.updater=ke||L}var re=J.prototype=new te;re.constructor=J,O(re,F.prototype),re.isPureReactComponent=!0;var le=Array.isArray,ye=Object.prototype.hasOwnProperty,de={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(j,K,ke){var Ie,Ne={},De=null,qe=null;if(K!=null)for(Ie in K.ref!==void 0&&(qe=K.ref),K.key!==void 0&&(De=""+K.key),K)ye.call(K,Ie)&&!k.hasOwnProperty(Ie)&&(Ne[Ie]=K[Ie]);var Fe=arguments.length-2;if(Fe===1)Ne.children=ke;else if(1<Fe){for(var Ge=Array(Fe),Kt=0;Kt<Fe;Kt++)Ge[Kt]=arguments[Kt+2];Ne.children=Ge}if(j&&j.defaultProps)for(Ie in Fe=j.defaultProps,Fe)Ne[Ie]===void 0&&(Ne[Ie]=Fe[Ie]);return{$$typeof:n,type:j,key:De,ref:qe,props:Ne,_owner:de.current}}function R(j,K){return{$$typeof:n,type:j.type,key:K,ref:j.ref,props:j.props,_owner:j._owner}}function D(j){return typeof j=="object"&&j!==null&&j.$$typeof===n}function N(j){var K={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(ke){return K[ke]})}var M=/\/+/g;function A(j,K){return typeof j=="object"&&j!==null&&j.key!=null?N(""+j.key):K.toString(36)}function He(j,K,ke,Ie,Ne){var De=typeof j;(De==="undefined"||De==="boolean")&&(j=null);var qe=!1;if(j===null)qe=!0;else switch(De){case"string":case"number":qe=!0;break;case"object":switch(j.$$typeof){case n:case e:qe=!0}}if(qe)return qe=j,Ne=Ne(qe),j=Ie===""?"."+A(qe,0):Ie,le(Ne)?(ke="",j!=null&&(ke=j.replace(M,"$&/")+"/"),He(Ne,K,ke,"",function(Kt){return Kt})):Ne!=null&&(D(Ne)&&(Ne=R(Ne,ke+(!Ne.key||qe&&qe.key===Ne.key?"":(""+Ne.key).replace(M,"$&/")+"/")+j)),K.push(Ne)),1;if(qe=0,Ie=Ie===""?".":Ie+":",le(j))for(var Fe=0;Fe<j.length;Fe++){De=j[Fe];var Ge=Ie+A(De,Fe);qe+=He(De,K,ke,Ge,Ne)}else if(Ge=I(j),typeof Ge=="function")for(j=Ge.call(j),Fe=0;!(De=j.next()).done;)De=De.value,Ge=Ie+A(De,Fe++),qe+=He(De,K,ke,Ge,Ne);else if(De==="object")throw K=String(j),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return qe}function dt(j,K,ke){if(j==null)return j;var Ie=[],Ne=0;return He(j,Ie,"","",function(De){return K.call(ke,De,Ne++)}),Ie}function me(j){if(j._status===-1){var K=j._result;K=K(),K.then(function(ke){(j._status===0||j._status===-1)&&(j._status=1,j._result=ke)},function(ke){(j._status===0||j._status===-1)&&(j._status=2,j._result=ke)}),j._status===-1&&(j._status=0,j._result=K)}if(j._status===1)return j._result.default;throw j._result}var Ce={current:null},ee={transition:null},ce={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:ee,ReactCurrentOwner:de};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:dt,forEach:function(j,K,ke){dt(j,function(){K.apply(this,arguments)},ke)},count:function(j){var K=0;return dt(j,function(){K++}),K},toArray:function(j){return dt(j,function(K){return K})||[]},only:function(j){if(!D(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Pe.Component=F,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=J,Pe.StrictMode=i,Pe.Suspense=m,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Pe.act=ie,Pe.cloneElement=function(j,K,ke){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var Ie=O({},j.props),Ne=j.key,De=j.ref,qe=j._owner;if(K!=null){if(K.ref!==void 0&&(De=K.ref,qe=de.current),K.key!==void 0&&(Ne=""+K.key),j.type&&j.type.defaultProps)var Fe=j.type.defaultProps;for(Ge in K)ye.call(K,Ge)&&!k.hasOwnProperty(Ge)&&(Ie[Ge]=K[Ge]===void 0&&Fe!==void 0?Fe[Ge]:K[Ge])}var Ge=arguments.length-2;if(Ge===1)Ie.children=ke;else if(1<Ge){Fe=Array(Ge);for(var Kt=0;Kt<Ge;Kt++)Fe[Kt]=arguments[Kt+2];Ie.children=Fe}return{$$typeof:n,type:j.type,key:Ne,ref:De,props:Ie,_owner:qe}},Pe.createContext=function(j){return j={$$typeof:u,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:l,_context:j},j.Consumer=j},Pe.createElement=S,Pe.createFactory=function(j){var K=S.bind(null,j);return K.type=j,K},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(j){return{$$typeof:d,render:j}},Pe.isValidElement=D,Pe.lazy=function(j){return{$$typeof:C,_payload:{_status:-1,_result:j},_init:me}},Pe.memo=function(j,K){return{$$typeof:_,type:j,compare:K===void 0?null:K}},Pe.startTransition=function(j){var K=ee.transition;ee.transition={};try{j()}finally{ee.transition=K}},Pe.unstable_act=ie,Pe.useCallback=function(j,K){return Ce.current.useCallback(j,K)},Pe.useContext=function(j){return Ce.current.useContext(j)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(j){return Ce.current.useDeferredValue(j)},Pe.useEffect=function(j,K){return Ce.current.useEffect(j,K)},Pe.useId=function(){return Ce.current.useId()},Pe.useImperativeHandle=function(j,K,ke){return Ce.current.useImperativeHandle(j,K,ke)},Pe.useInsertionEffect=function(j,K){return Ce.current.useInsertionEffect(j,K)},Pe.useLayoutEffect=function(j,K){return Ce.current.useLayoutEffect(j,K)},Pe.useMemo=function(j,K){return Ce.current.useMemo(j,K)},Pe.useReducer=function(j,K,ke){return Ce.current.useReducer(j,K,ke)},Pe.useRef=function(j){return Ce.current.useRef(j)},Pe.useState=function(j){return Ce.current.useState(j)},Pe.useSyncExternalStore=function(j,K,ke){return Ce.current.useSyncExternalStore(j,K,ke)},Pe.useTransition=function(){return Ce.current.useTransition()},Pe.version="18.3.1",Pe}var gm;function Xf(){return gm||(gm=1,zd.exports=u5()),zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function h5(){if(ym)return Za;ym=1;var n=Xf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,m,_){var C,E={},I=null,L=null;_!==void 0&&(I=""+_),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(L=m.ref);for(C in m)i.call(m,C)&&!l.hasOwnProperty(C)&&(E[C]=m[C]);if(d&&d.defaultProps)for(C in m=d.defaultProps,m)E[C]===void 0&&(E[C]=m[C]);return{$$typeof:e,type:d,key:I,ref:L,props:E,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var vm;function d5(){return vm||(vm=1,Ud.exports=h5()),Ud.exports}var p=d5(),ge=Xf();const Cu=Pg(ge);var Jc={},Bd={exports:{}},sn={},qd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function f5(){return _m||(_m=1,(function(n){function e(ee,ce){var ie=ee.length;ee.push(ce);e:for(;0<ie;){var j=ie-1>>>1,K=ee[j];if(0<o(K,ce))ee[j]=ce,ee[ie]=K,ie=j;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var ce=ee[0],ie=ee.pop();if(ie!==ce){ee[0]=ie;e:for(var j=0,K=ee.length,ke=K>>>1;j<ke;){var Ie=2*(j+1)-1,Ne=ee[Ie],De=Ie+1,qe=ee[De];if(0>o(Ne,ie))De<K&&0>o(qe,Ne)?(ee[j]=qe,ee[De]=ie,j=De):(ee[j]=Ne,ee[Ie]=ie,j=Ie);else if(De<K&&0>o(qe,ie))ee[j]=qe,ee[De]=ie,j=De;else break e}}return ce}function o(ee,ce){var ie=ee.sortIndex-ce.sortIndex;return ie!==0?ie:ee.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var m=[],_=[],C=1,E=null,I=3,L=!1,O=!1,q=!1,F=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(ee){for(var ce=t(_);ce!==null;){if(ce.callback===null)i(_);else if(ce.startTime<=ee)i(_),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=t(_)}}function le(ee){if(q=!1,re(ee),!O)if(t(m)!==null)O=!0,me(ye);else{var ce=t(_);ce!==null&&Ce(le,ce.startTime-ee)}}function ye(ee,ce){O=!1,q&&(q=!1,te(S),S=-1),L=!0;var ie=I;try{for(re(ce),E=t(m);E!==null&&(!(E.expirationTime>ce)||ee&&!N());){var j=E.callback;if(typeof j=="function"){E.callback=null,I=E.priorityLevel;var K=j(E.expirationTime<=ce);ce=n.unstable_now(),typeof K=="function"?E.callback=K:E===t(m)&&i(m),re(ce)}else i(m);E=t(m)}if(E!==null)var ke=!0;else{var Ie=t(_);Ie!==null&&Ce(le,Ie.startTime-ce),ke=!1}return ke}finally{E=null,I=ie,L=!1}}var de=!1,k=null,S=-1,R=5,D=-1;function N(){return!(n.unstable_now()-D<R)}function M(){if(k!==null){var ee=n.unstable_now();D=ee;var ce=!0;try{ce=k(!0,ee)}finally{ce?A():(de=!1,k=null)}}else de=!1}var A;if(typeof J=="function")A=function(){J(M)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,dt=He.port2;He.port1.onmessage=M,A=function(){dt.postMessage(null)}}else A=function(){F(M,0)};function me(ee){k=ee,de||(de=!0,A())}function Ce(ee,ce){S=F(function(){ee(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ee){ee.callback=null},n.unstable_continueExecution=function(){O||L||(O=!0,me(ye))},n.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ee?Math.floor(1e3/ee):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(ee){switch(I){case 1:case 2:case 3:var ce=3;break;default:ce=I}var ie=I;I=ce;try{return ee()}finally{I=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ee,ce){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ie=I;I=ee;try{return ce()}finally{I=ie}},n.unstable_scheduleCallback=function(ee,ce,ie){var j=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?j+ie:j):ie=j,ee){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ie+K,ee={id:C++,callback:ce,priorityLevel:ee,startTime:ie,expirationTime:K,sortIndex:-1},ie>j?(ee.sortIndex=ie,e(_,ee),t(m)===null&&ee===t(_)&&(q?(te(S),S=-1):q=!0,Ce(le,ie-j))):(ee.sortIndex=K,e(m,ee),O||L||(O=!0,me(ye))),ee},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(ee){var ce=I;return function(){var ie=I;I=ce;try{return ee.apply(this,arguments)}finally{I=ie}}}})($d)),$d}var wm;function p5(){return wm||(wm=1,qd.exports=f5()),qd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function m5(){if(Cm)return sn;Cm=1;var n=Xf(),e=p5();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){u(r,s),u(r+"Capture",s)}function u(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,C={},E={};function I(r){return m.call(E,r)?!0:m.call(C,r)?!1:_.test(r)?E[r]=!0:(C[r]=!0,!1)}function L(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function O(r,s,a,h){if(s===null||typeof s>"u"||L(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,h,f,g,x){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=x}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){F[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];F[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){F[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){F[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){F[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){F[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){F[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){F[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){F[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var te=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(te,J);F[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(te,J);F[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(te,J);F[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){F[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),F.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){F[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function re(r,s,a,h){var f=F.hasOwnProperty(s)?F[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(O(s,a,f,h)&&(a=null),h||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var le=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ye=Symbol.for("react.element"),de=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),ee=Symbol.iterator;function ce(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var ie=Object.assign,j;function K(r){if(j===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);j=s&&s[1]||""}return`
`+j+r}var ke=!1;function Ie(r,s){if(!r||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){h=$}r.call(s.prototype)}else{try{throw Error()}catch($){h=$}r()}}catch($){if($&&h&&typeof $.stack=="string"){for(var f=$.stack.split(`
`),g=h.stack.split(`
`),x=f.length-1,b=g.length-1;1<=x&&0<=b&&f[x]!==g[b];)b--;for(;1<=x&&0<=b;x--,b--)if(f[x]!==g[b]){if(x!==1||b!==1)do if(x--,b--,0>b||f[x]!==g[b]){var P=`
`+f[x].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=x&&0<=b);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Ne(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Ie(r.type,!1),r;case 11:return r=Ie(r.type.render,!1),r;case 1:return r=Ie(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case de:return"Portal";case R:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case He:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case N:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case dt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case me:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function qe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ge(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Kt(r){var s=Ge(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(x){h=""+x,g.call(this,x)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(x){h=""+x},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function qs(r){r._valueTracker||(r._valueTracker=Kt(r))}function sa(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=Ge(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Kr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function $s(r,s){var a=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function jl(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Fe(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Hs(r,s){s=s.checked,s!=null&&re(r,"checked",s,!1)}function Yi(r,s){Hs(r,s);var a=Fe(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?yt(r,s.type,a):s.hasOwnProperty("defaultValue")&&yt(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function oa(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function yt(r,s,a){(s!=="number"||Kr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var ft=Array.isArray;function Ln(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function aa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function la(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ft(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Fe(a)}}function Ol(r,s){var a=Fe(s.value),h=Fe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function Qr(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ca(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ca(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Xr,Fl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Xr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Ji(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ul=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(r){Ul.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Yr[s]=Yr[r]})});function Jr(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Yr.hasOwnProperty(r)&&Yr[r]?(""+s).trim():s+"px"}function Gs(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=Jr(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var ua=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mn(r,s){if(s){if(ua[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ks(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=null;function Qs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Tr=null,Ir=null,at=null;function ha(r){if(r=Oa(r)){if(typeof Tr!="function")throw Error(t(280));var s=r.stateNode;s&&(s=fc(s),Tr(r.stateNode,r.type,s))}}function ei(r){Ir?at?at.push(r):at=[r]:Ir=r}function ti(){if(Ir){var r=Ir,s=at;if(at=Ir=null,ha(r),s)for(r=0;r<s.length;r++)ha(s[r])}}function zl(r,s){return r(s)}function Bl(){}var Yn=!1;function ql(r,s,a){if(Yn)return r(s,a);Yn=!0;try{return zl(r,s,a)}finally{Yn=!1,(Ir!==null||at!==null)&&(Bl(),ti())}}function Zi(r,s){var a=r.stateNode;if(a===null)return null;var h=fc(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var ni=!1;if(d)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){ni=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{ni=!1}function $l(r,s,a,h,f,g,x,b,P){var $=Array.prototype.slice.call(arguments,3);try{s.apply(a,$)}catch(X){this.onError(X)}}var Sr=!1,Jn=null,Xs=!1,xn=null,Hl={onError:function(r){Sr=!0,Jn=r}};function Wl(r,s,a,h,f,g,x,b,P){Sr=!1,Jn=null,$l.apply(Hl,arguments)}function da(r,s,a,h,f,g,x,b,P){if(Wl.apply(this,arguments),Sr){if(Sr){var $=Jn;Sr=!1,Jn=null}else throw Error(t(198));Xs||(Xs=!0,xn=$)}}function jn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function fa(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Gl(r){if(jn(r)!==r)throw Error(t(188))}function Kl(r){var s=r.alternate;if(!s){if(s=jn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Gl(f),r;if(g===h)return Gl(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var x=!1,b=f.child;b;){if(b===a){x=!0,a=f,h=g;break}if(b===h){x=!0,h=f,a=g;break}b=b.sibling}if(!x){for(b=g.child;b;){if(b===a){x=!0,a=g,h=f;break}if(b===h){x=!0,h=g,a=f;break}b=b.sibling}if(!x)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ql(r){return r=Kl(r),r!==null?es(r):null}function es(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=es(r);if(s!==null)return s;r=r.sibling}return null}var pa=e.unstable_scheduleCallback,Ys=e.unstable_cancelCallback,ts=e.unstable_shouldYield,kr=e.unstable_requestPaint,Je=e.unstable_now,yh=e.unstable_getCurrentPriorityLevel,Js=e.unstable_ImmediatePriority,ma=e.unstable_UserBlockingPriority,ns=e.unstable_NormalPriority,ga=e.unstable_LowPriority,Zs=e.unstable_IdlePriority,rs=null,un=null;function Xl(r){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(rs,r,void 0,(r.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:is,Zn=Math.log,En=Math.LN2;function is(r){return r>>>=0,r===0?32:31-(Zn(r)/En|0)|0}var er=64,ii=4194304;function Be(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function br(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,x=a&268435455;if(x!==0){var b=x&~f;b!==0?h=Be(b):(g&=x,g!==0&&(h=Be(g)))}else x=a&~f,x!==0?h=Be(x):g!==0&&(h=Be(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-hn(s),f=1<<a,h|=r[a],s&=~f;return h}function ss(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function os(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var x=31-hn(g),b=1<<x,P=f[x];P===-1?((b&a)===0||(b&h)!==0)&&(f[x]=ss(b,s)):P<=s&&(r.expiredLanes|=b),g&=~b}}function ya(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function va(){var r=er;return er<<=1,(er&4194240)===0&&(er=64),r}function _a(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function as(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-hn(s),r[s]=a}function vh(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-hn(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function wa(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-hn(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var je=0;function tr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Ca,eo,xa,Ea,Ta,nr=!1,to=[],rr=null,ir=null,Pt=null,ls=new Map,Ar=new Map,dn=[],Yl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function si(r,s){switch(r){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":ls.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(s.pointerId)}}function On(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Oa(s),s!==null&&eo(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Jl(r,s,a,h,f){switch(s){case"focusin":return rr=On(rr,r,s,a,h,f),!0;case"dragenter":return ir=On(ir,r,s,a,h,f),!0;case"mouseover":return Pt=On(Pt,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return ls.set(g,On(ls.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,Ar.set(g,On(Ar.get(g)||null,r,s,a,h,f)),!0}return!1}function no(r){var s=ds(r.target);if(s!==null){var a=jn(s);if(a!==null){if(s=a.tag,s===13){if(s=fa(a),s!==null){r.blockedOn=s,Ta(r.priority,function(){xa(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ke(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=ro(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Zr=h,a.target.dispatchEvent(h),Zr=null}else return s=Oa(a),s!==null&&eo(s),r.blockedOn=a,!1;s.shift()}return!0}function Zl(r,s,a){Ke(r)&&a.delete(s)}function _h(){nr=!1,rr!==null&&Ke(rr)&&(rr=null),ir!==null&&Ke(ir)&&(ir=null),Pt!==null&&Ke(Pt)&&(Pt=null),ls.forEach(Zl),Ar.forEach(Zl)}function oi(r,s){r.blockedOn===s&&(r.blockedOn=null,nr||(nr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_h)))}function ai(r){function s(f){return oi(f,r)}if(0<to.length){oi(to[0],r);for(var a=1;a<to.length;a++){var h=to[a];h.blockedOn===r&&(h.blockedOn=null)}}for(rr!==null&&oi(rr,r),ir!==null&&oi(ir,r),Pt!==null&&oi(Pt,r),ls.forEach(s),Ar.forEach(s),a=0;a<dn.length;a++)h=dn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<dn.length&&(a=dn[0],a.blockedOn===null);)no(a),a.blockedOn===null&&dn.shift()}var Rr=le.ReactCurrentBatchConfig,Pr=!0;function sr(r,s,a,h){var f=je,g=Rr.transition;Rr.transition=null;try{je=1,Ia(r,s,a,h)}finally{je=f,Rr.transition=g}}function ec(r,s,a,h){var f=je,g=Rr.transition;Rr.transition=null;try{je=4,Ia(r,s,a,h)}finally{je=f,Rr.transition=g}}function Ia(r,s,a,h){if(Pr){var f=ro(r,s,a,h);if(f===null)Rh(r,s,h,or,a),si(r,h);else if(Jl(f,r,s,a,h))h.stopPropagation();else if(si(r,h),s&4&&-1<Yl.indexOf(r)){for(;f!==null;){var g=Oa(f);if(g!==null&&Ca(g),g=ro(r,s,a,h),g===null&&Rh(r,s,h,or,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else Rh(r,s,h,null,a)}}var or=null;function ro(r,s,a,h){if(or=null,r=Qs(h),r=ds(r),r!==null)if(s=jn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=fa(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return or=r,null}function io(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yh()){case Js:return 1;case ma:return 4;case ns:case ga:return 16;case Zs:return 536870912;default:return 16}default:return 16}}var fn=null,so=null,Nr=null;function tc(){if(Nr)return Nr;var r,s=so,a=s.length,h,f="value"in fn?fn.value:fn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var x=a-r;for(h=1;h<=x&&s[a-h]===f[g-h];h++);return Nr=f.slice(r,1<h?1-h:void 0)}function cs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ar(){return!0}function Sa(){return!1}function Ot(r){function s(a,h,f,g,x){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=x,this.currentTarget=null;for(var b in r)r.hasOwnProperty(b)&&(a=r[b],this[b]=a?a(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ar:Sa,this.isPropagationStopped=Sa,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),s}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=Ot(lr),li=ie({},lr,{view:0,detail:0}),oo=Ot(li),ao,lo,pn,hs=ie({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:be,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==pn&&(pn&&r.type==="mousemove"?(ao=r.screenX-pn.screenX,lo=r.screenY-pn.screenY):lo=ao=0,pn=r),ao)},movementY:function(r){return"movementY"in r?r.movementY:lo}}),ka=Ot(hs),nc=ie({},hs,{dataTransfer:0}),rc=Ot(nc),co=ie({},li,{relatedTarget:0}),Nt=Ot(co),ic=ie({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),sc=Ot(ic),ci=ie({},lr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),c=Ot(ci),y=ie({},lr,{data:0}),w=Ot(y),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ne(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=H[r])?!!s[r]:!1}function be(){return ne}var pt=ie({},li,{key:function(r){if(r.key){var s=T[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=cs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?z[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:be,charCode:function(r){return r.type==="keypress"?cs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?cs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),We=Ot(pt),vt=ie({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mn=Ot(vt),Dr=ie({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:be}),cr=Ot(Dr),ur=ie({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uo=Ot(ur),ba=ie({},hs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=Ot(ba),sy=[9,13,27,32],wh=d&&"CompositionEvent"in window,Aa=null;d&&"documentMode"in document&&(Aa=document.documentMode);var oy=d&&"TextEvent"in window&&!Aa,ap=d&&(!wh||Aa&&8<Aa&&11>=Aa),lp=" ",cp=!1;function up(r,s){switch(r){case"keyup":return sy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ho=!1;function ay(r,s){switch(r){case"compositionend":return hp(s);case"keypress":return s.which!==32?null:(cp=!0,lp);case"textInput":return r=s.data,r===lp&&cp?null:r;default:return null}}function ly(r,s){if(ho)return r==="compositionend"||!wh&&up(r,s)?(r=tc(),Nr=so=fn=null,ho=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ap&&s.locale!=="ko"?null:s.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!cy[r.type]:s==="textarea"}function fp(r,s,a,h){ei(h),s=uc(s,"onChange"),0<s.length&&(a=new us("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Ra=null,Pa=null;function uy(r){Pp(r,0)}function oc(r){var s=yo(r);if(sa(s))return r}function hy(r,s){if(r==="change")return s}var pp=!1;if(d){var Ch;if(d){var xh="oninput"in document;if(!xh){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),xh=typeof mp.oninput=="function"}Ch=xh}else Ch=!1;pp=Ch&&(!document.documentMode||9<document.documentMode)}function gp(){Ra&&(Ra.detachEvent("onpropertychange",yp),Pa=Ra=null)}function yp(r){if(r.propertyName==="value"&&oc(Pa)){var s=[];fp(s,Pa,r,Qs(r)),ql(uy,s)}}function dy(r,s,a){r==="focusin"?(gp(),Ra=s,Pa=a,Ra.attachEvent("onpropertychange",yp)):r==="focusout"&&gp()}function fy(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return oc(Pa)}function py(r,s){if(r==="click")return oc(s)}function my(r,s){if(r==="input"||r==="change")return oc(s)}function gy(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Fn=typeof Object.is=="function"?Object.is:gy;function Na(r,s){if(Fn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!m.call(s,f)||!Fn(r[f],s[f]))return!1}return!0}function vp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function _p(r,s){var a=vp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vp(a)}}function wp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?wp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Cp(){for(var r=window,s=Kr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Kr(r.document)}return s}function Eh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function yy(r){var s=Cp(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&wp(a.ownerDocument.documentElement,a)){if(h!==null&&Eh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=_p(a,g);var x=_p(a,h);f&&x&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==x.node||r.focusOffset!==x.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(x.node,x.offset)):(s.setEnd(x.node,x.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var vy=d&&"documentMode"in document&&11>=document.documentMode,fo=null,Th=null,Da=null,Ih=!1;function xp(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ih||fo==null||fo!==Kr(h)||(h=fo,"selectionStart"in h&&Eh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Da&&Na(Da,h)||(Da=h,h=uc(Th,"onSelect"),0<h.length&&(s=new us("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=fo)))}function ac(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var po={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},Sh={},Ep={};d&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function lc(r){if(Sh[r])return Sh[r];if(!po[r])return r;var s=po[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Ep)return Sh[r]=s[a];return r}var Tp=lc("animationend"),Ip=lc("animationiteration"),Sp=lc("animationstart"),kp=lc("transitionend"),bp=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ui(r,s){bp.set(r,s),l(s,[r])}for(var kh=0;kh<Ap.length;kh++){var bh=Ap[kh],_y=bh.toLowerCase(),wy=bh[0].toUpperCase()+bh.slice(1);ui(_y,"on"+wy)}ui(Tp,"onAnimationEnd"),ui(Ip,"onAnimationIteration"),ui(Sp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(kp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function Rp(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,da(h,s,void 0,r),r.currentTarget=null}function Pp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var x=h.length-1;0<=x;x--){var b=h[x],P=b.instance,$=b.currentTarget;if(b=b.listener,P!==g&&f.isPropagationStopped())break e;Rp(f,b,$),g=P}else for(x=0;x<h.length;x++){if(b=h[x],P=b.instance,$=b.currentTarget,b=b.listener,P!==g&&f.isPropagationStopped())break e;Rp(f,b,$),g=P}}}if(Xs)throw r=xn,Xs=!1,xn=null,r}function Ze(r,s){var a=s[Mh];a===void 0&&(a=s[Mh]=new Set);var h=r+"__bubble";a.has(h)||(Np(s,r,2,!1),a.add(h))}function Ah(r,s,a){var h=0;s&&(h|=4),Np(a,r,h,s)}var cc="_reactListening"+Math.random().toString(36).slice(2);function La(r){if(!r[cc]){r[cc]=!0,i.forEach(function(a){a!=="selectionchange"&&(Cy.has(a)||Ah(a,!1,r),Ah(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[cc]||(s[cc]=!0,Ah("selectionchange",!1,s))}}function Np(r,s,a,h){switch(io(s)){case 1:var f=sr;break;case 4:f=ec;break;default:f=Ia}a=f.bind(null,s,a,r),f=void 0,!ni||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Rh(r,s,a,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var x=h.tag;if(x===3||x===4){var b=h.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(x===4)for(x=h.return;x!==null;){var P=x.tag;if((P===3||P===4)&&(P=x.stateNode.containerInfo,P===f||P.nodeType===8&&P.parentNode===f))return;x=x.return}for(;b!==null;){if(x=ds(b),x===null)return;if(P=x.tag,P===5||P===6){h=g=x;continue e}b=b.parentNode}}h=h.return}ql(function(){var $=g,X=Qs(a),Y=[];e:{var Q=bp.get(r);if(Q!==void 0){var oe=us,he=r;switch(r){case"keypress":if(cs(a)===0)break e;case"keydown":case"keyup":oe=We;break;case"focusin":he="focus",oe=Nt;break;case"focusout":he="blur",oe=Nt;break;case"beforeblur":case"afterblur":oe=Nt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=cr;break;case Tp:case Ip:case Sp:oe=sc;break;case kp:oe=uo;break;case"scroll":oe=oo;break;case"wheel":oe=iy;break;case"copy":case"cut":case"paste":oe=c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=mn}var fe=(s&4)!==0,mt=!fe&&r==="scroll",U=fe?Q!==null?Q+"Capture":null:Q;fe=[];for(var V=$,B;V!==null;){B=V;var Z=B.stateNode;if(B.tag===5&&Z!==null&&(B=Z,U!==null&&(Z=Zi(V,U),Z!=null&&fe.push(Ma(V,Z,B)))),mt)break;V=V.return}0<fe.length&&(Q=new oe(Q,he,null,a,X),Y.push({event:Q,listeners:fe}))}}if((s&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",Q&&a!==Zr&&(he=a.relatedTarget||a.fromElement)&&(ds(he)||he[Vr]))break e;if((oe||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,oe?(he=a.relatedTarget||a.toElement,oe=$,he=he?ds(he):null,he!==null&&(mt=jn(he),he!==mt||he.tag!==5&&he.tag!==6)&&(he=null)):(oe=null,he=$),oe!==he)){if(fe=ka,Z="onMouseLeave",U="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(fe=mn,Z="onPointerLeave",U="onPointerEnter",V="pointer"),mt=oe==null?Q:yo(oe),B=he==null?Q:yo(he),Q=new fe(Z,V+"leave",oe,a,X),Q.target=mt,Q.relatedTarget=B,Z=null,ds(X)===$&&(fe=new fe(U,V+"enter",he,a,X),fe.target=B,fe.relatedTarget=mt,Z=fe),mt=Z,oe&&he)t:{for(fe=oe,U=he,V=0,B=fe;B;B=mo(B))V++;for(B=0,Z=U;Z;Z=mo(Z))B++;for(;0<V-B;)fe=mo(fe),V--;for(;0<B-V;)U=mo(U),B--;for(;V--;){if(fe===U||U!==null&&fe===U.alternate)break t;fe=mo(fe),U=mo(U)}fe=null}else fe=null;oe!==null&&Dp(Y,Q,oe,fe,!1),he!==null&&mt!==null&&Dp(Y,mt,he,fe,!0)}}e:{if(Q=$?yo($):window,oe=Q.nodeName&&Q.nodeName.toLowerCase(),oe==="select"||oe==="input"&&Q.type==="file")var pe=hy;else if(dp(Q))if(pp)pe=my;else{pe=fy;var _e=dy}else(oe=Q.nodeName)&&oe.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(pe=py);if(pe&&(pe=pe(r,$))){fp(Y,pe,a,X);break e}_e&&_e(r,Q,$),r==="focusout"&&(_e=Q._wrapperState)&&_e.controlled&&Q.type==="number"&&yt(Q,"number",Q.value)}switch(_e=$?yo($):window,r){case"focusin":(dp(_e)||_e.contentEditable==="true")&&(fo=_e,Th=$,Da=null);break;case"focusout":Da=Th=fo=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,xp(Y,a,X);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":xp(Y,a,X)}var we;if(wh)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else ho?up(r,a)&&(Te="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(ap&&a.locale!=="ko"&&(ho||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&ho&&(we=tc()):(fn=X,so="value"in fn?fn.value:fn.textContent,ho=!0)),_e=uc($,Te),0<_e.length&&(Te=new w(Te,r,null,a,X),Y.push({event:Te,listeners:_e}),we?Te.data=we:(we=hp(a),we!==null&&(Te.data=we)))),(we=oy?ay(r,a):ly(r,a))&&($=uc($,"onBeforeInput"),0<$.length&&(X=new w("onBeforeInput","beforeinput",null,a,X),Y.push({event:X,listeners:$}),X.data=we))}Pp(Y,s)})}function Ma(r,s,a){return{instance:r,listener:s,currentTarget:a}}function uc(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Zi(r,a),g!=null&&h.unshift(Ma(r,g,f)),g=Zi(r,s),g!=null&&h.push(Ma(r,g,f))),r=r.return}return h}function mo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Dp(r,s,a,h,f){for(var g=s._reactName,x=[];a!==null&&a!==h;){var b=a,P=b.alternate,$=b.stateNode;if(P!==null&&P===h)break;b.tag===5&&$!==null&&(b=$,f?(P=Zi(a,g),P!=null&&x.unshift(Ma(a,P,b))):f||(P=Zi(a,g),P!=null&&x.push(Ma(a,P,b)))),a=a.return}x.length!==0&&r.push({event:s,listeners:x})}var xy=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function Vp(r){return(typeof r=="string"?r:""+r).replace(xy,`
`).replace(Ey,"")}function hc(r,s,a){if(s=Vp(s),Vp(r)!==s&&a)throw Error(t(425))}function dc(){}var Ph=null,Nh=null;function Dh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Vh=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(r){return Lp.resolve(null).then(r).catch(Sy)}:Vh;function Sy(r){setTimeout(function(){throw r})}function Lh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),ai(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);ai(s)}function hi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Mp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var go=Math.random().toString(36).slice(2),hr="__reactFiber$"+go,ja="__reactProps$"+go,Vr="__reactContainer$"+go,Mh="__reactEvents$"+go,ky="__reactListeners$"+go,by="__reactHandles$"+go;function ds(r){var s=r[hr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Vr]||a[hr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Mp(r);r!==null;){if(a=r[hr])return a;r=Mp(r)}return s}r=a,a=r.parentNode}return null}function Oa(r){return r=r[hr]||r[Vr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function yo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function fc(r){return r[ja]||null}var jh=[],vo=-1;function di(r){return{current:r}}function et(r){0>vo||(r.current=jh[vo],jh[vo]=null,vo--)}function Qe(r,s){vo++,jh[vo]=r.current,r.current=s}var fi={},Ft=di(fi),Zt=di(!1),fs=fi;function _o(r,s){var a=r.type.contextTypes;if(!a)return fi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function en(r){return r=r.childContextTypes,r!=null}function pc(){et(Zt),et(Ft)}function jp(r,s,a){if(Ft.current!==fi)throw Error(t(168));Qe(Ft,s),Qe(Zt,a)}function Op(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,qe(r)||"Unknown",f));return ie({},a,h)}function mc(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||fi,fs=Ft.current,Qe(Ft,r),Qe(Zt,Zt.current),!0}function Fp(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Op(r,s,fs),h.__reactInternalMemoizedMergedChildContext=r,et(Zt),et(Ft),Qe(Ft,r)):et(Zt),Qe(Zt,a)}var Lr=null,gc=!1,Oh=!1;function Up(r){Lr===null?Lr=[r]:Lr.push(r)}function Ay(r){gc=!0,Up(r)}function pi(){if(!Oh&&Lr!==null){Oh=!0;var r=0,s=je;try{var a=Lr;for(je=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Lr=null,gc=!1}catch(f){throw Lr!==null&&(Lr=Lr.slice(r+1)),pa(Js,pi),f}finally{je=s,Oh=!1}}return null}var wo=[],Co=0,yc=null,vc=0,Tn=[],In=0,ps=null,Mr=1,jr="";function ms(r,s){wo[Co++]=vc,wo[Co++]=yc,yc=r,vc=s}function zp(r,s,a){Tn[In++]=Mr,Tn[In++]=jr,Tn[In++]=ps,ps=r;var h=Mr;r=jr;var f=32-hn(h)-1;h&=~(1<<f),a+=1;var g=32-hn(s)+f;if(30<g){var x=f-f%5;g=(h&(1<<x)-1).toString(32),h>>=x,f-=x,Mr=1<<32-hn(s)+f|a<<f|h,jr=g+r}else Mr=1<<g|a<<f|h,jr=r}function Fh(r){r.return!==null&&(ms(r,1),zp(r,1,0))}function Uh(r){for(;r===yc;)yc=wo[--Co],wo[Co]=null,vc=wo[--Co],wo[Co]=null;for(;r===ps;)ps=Tn[--In],Tn[In]=null,jr=Tn[--In],Tn[In]=null,Mr=Tn[--In],Tn[In]=null}var gn=null,yn=null,nt=!1,Un=null;function Bp(r,s){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function qp(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,gn=r,yn=hi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,gn=r,yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ps!==null?{id:Mr,overflow:jr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,gn=r,yn=null,!0):!1;default:return!1}}function zh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Bh(r){if(nt){var s=yn;if(s){var a=s;if(!qp(r,s)){if(zh(r))throw Error(t(418));s=hi(a.nextSibling);var h=gn;s&&qp(r,s)?Bp(h,a):(r.flags=r.flags&-4097|2,nt=!1,gn=r)}}else{if(zh(r))throw Error(t(418));r.flags=r.flags&-4097|2,nt=!1,gn=r}}}function $p(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;gn=r}function _c(r){if(r!==gn)return!1;if(!nt)return $p(r),nt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Dh(r.type,r.memoizedProps)),s&&(s=yn)){if(zh(r))throw Hp(),Error(t(418));for(;s;)Bp(r,s),s=hi(s.nextSibling)}if($p(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){yn=hi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}yn=null}}else yn=gn?hi(r.stateNode.nextSibling):null;return!0}function Hp(){for(var r=yn;r;)r=hi(r.nextSibling)}function xo(){yn=gn=null,nt=!1}function qh(r){Un===null?Un=[r]:Un.push(r)}var Ry=le.ReactCurrentBatchConfig;function Fa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(x){var b=f.refs;x===null?delete b[g]:b[g]=x},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function wc(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Wp(r){var s=r._init;return s(r._payload)}function Gp(r){function s(U,V){if(r){var B=U.deletions;B===null?(U.deletions=[V],U.flags|=16):B.push(V)}}function a(U,V){if(!r)return null;for(;V!==null;)s(U,V),V=V.sibling;return null}function h(U,V){for(U=new Map;V!==null;)V.key!==null?U.set(V.key,V):U.set(V.index,V),V=V.sibling;return U}function f(U,V){return U=xi(U,V),U.index=0,U.sibling=null,U}function g(U,V,B){return U.index=B,r?(B=U.alternate,B!==null?(B=B.index,B<V?(U.flags|=2,V):B):(U.flags|=2,V)):(U.flags|=1048576,V)}function x(U){return r&&U.alternate===null&&(U.flags|=2),U}function b(U,V,B,Z){return V===null||V.tag!==6?(V=Vd(B,U.mode,Z),V.return=U,V):(V=f(V,B),V.return=U,V)}function P(U,V,B,Z){var pe=B.type;return pe===k?X(U,V,B.props.children,Z,B.key):V!==null&&(V.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===me&&Wp(pe)===V.type)?(Z=f(V,B.props),Z.ref=Fa(U,V,B),Z.return=U,Z):(Z=$c(B.type,B.key,B.props,null,U.mode,Z),Z.ref=Fa(U,V,B),Z.return=U,Z)}function $(U,V,B,Z){return V===null||V.tag!==4||V.stateNode.containerInfo!==B.containerInfo||V.stateNode.implementation!==B.implementation?(V=Ld(B,U.mode,Z),V.return=U,V):(V=f(V,B.children||[]),V.return=U,V)}function X(U,V,B,Z,pe){return V===null||V.tag!==7?(V=Es(B,U.mode,Z,pe),V.return=U,V):(V=f(V,B),V.return=U,V)}function Y(U,V,B){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Vd(""+V,U.mode,B),V.return=U,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ye:return B=$c(V.type,V.key,V.props,null,U.mode,B),B.ref=Fa(U,null,V),B.return=U,B;case de:return V=Ld(V,U.mode,B),V.return=U,V;case me:var Z=V._init;return Y(U,Z(V._payload),B)}if(ft(V)||ce(V))return V=Es(V,U.mode,B,null),V.return=U,V;wc(U,V)}return null}function Q(U,V,B,Z){var pe=V!==null?V.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return pe!==null?null:b(U,V,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case ye:return B.key===pe?P(U,V,B,Z):null;case de:return B.key===pe?$(U,V,B,Z):null;case me:return pe=B._init,Q(U,V,pe(B._payload),Z)}if(ft(B)||ce(B))return pe!==null?null:X(U,V,B,Z,null);wc(U,B)}return null}function oe(U,V,B,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return U=U.get(B)||null,b(V,U,""+Z,pe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ye:return U=U.get(Z.key===null?B:Z.key)||null,P(V,U,Z,pe);case de:return U=U.get(Z.key===null?B:Z.key)||null,$(V,U,Z,pe);case me:var _e=Z._init;return oe(U,V,B,_e(Z._payload),pe)}if(ft(Z)||ce(Z))return U=U.get(B)||null,X(V,U,Z,pe,null);wc(V,Z)}return null}function he(U,V,B,Z){for(var pe=null,_e=null,we=V,Te=V=0,At=null;we!==null&&Te<B.length;Te++){we.index>Te?(At=we,we=null):At=we.sibling;var ze=Q(U,we,B[Te],Z);if(ze===null){we===null&&(we=At);break}r&&we&&ze.alternate===null&&s(U,we),V=g(ze,V,Te),_e===null?pe=ze:_e.sibling=ze,_e=ze,we=At}if(Te===B.length)return a(U,we),nt&&ms(U,Te),pe;if(we===null){for(;Te<B.length;Te++)we=Y(U,B[Te],Z),we!==null&&(V=g(we,V,Te),_e===null?pe=we:_e.sibling=we,_e=we);return nt&&ms(U,Te),pe}for(we=h(U,we);Te<B.length;Te++)At=oe(we,U,Te,B[Te],Z),At!==null&&(r&&At.alternate!==null&&we.delete(At.key===null?Te:At.key),V=g(At,V,Te),_e===null?pe=At:_e.sibling=At,_e=At);return r&&we.forEach(function(Ei){return s(U,Ei)}),nt&&ms(U,Te),pe}function fe(U,V,B,Z){var pe=ce(B);if(typeof pe!="function")throw Error(t(150));if(B=pe.call(B),B==null)throw Error(t(151));for(var _e=pe=null,we=V,Te=V=0,At=null,ze=B.next();we!==null&&!ze.done;Te++,ze=B.next()){we.index>Te?(At=we,we=null):At=we.sibling;var Ei=Q(U,we,ze.value,Z);if(Ei===null){we===null&&(we=At);break}r&&we&&Ei.alternate===null&&s(U,we),V=g(Ei,V,Te),_e===null?pe=Ei:_e.sibling=Ei,_e=Ei,we=At}if(ze.done)return a(U,we),nt&&ms(U,Te),pe;if(we===null){for(;!ze.done;Te++,ze=B.next())ze=Y(U,ze.value,Z),ze!==null&&(V=g(ze,V,Te),_e===null?pe=ze:_e.sibling=ze,_e=ze);return nt&&ms(U,Te),pe}for(we=h(U,we);!ze.done;Te++,ze=B.next())ze=oe(we,U,Te,ze.value,Z),ze!==null&&(r&&ze.alternate!==null&&we.delete(ze.key===null?Te:ze.key),V=g(ze,V,Te),_e===null?pe=ze:_e.sibling=ze,_e=ze);return r&&we.forEach(function(c5){return s(U,c5)}),nt&&ms(U,Te),pe}function mt(U,V,B,Z){if(typeof B=="object"&&B!==null&&B.type===k&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case ye:e:{for(var pe=B.key,_e=V;_e!==null;){if(_e.key===pe){if(pe=B.type,pe===k){if(_e.tag===7){a(U,_e.sibling),V=f(_e,B.props.children),V.return=U,U=V;break e}}else if(_e.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===me&&Wp(pe)===_e.type){a(U,_e.sibling),V=f(_e,B.props),V.ref=Fa(U,_e,B),V.return=U,U=V;break e}a(U,_e);break}else s(U,_e);_e=_e.sibling}B.type===k?(V=Es(B.props.children,U.mode,Z,B.key),V.return=U,U=V):(Z=$c(B.type,B.key,B.props,null,U.mode,Z),Z.ref=Fa(U,V,B),Z.return=U,U=Z)}return x(U);case de:e:{for(_e=B.key;V!==null;){if(V.key===_e)if(V.tag===4&&V.stateNode.containerInfo===B.containerInfo&&V.stateNode.implementation===B.implementation){a(U,V.sibling),V=f(V,B.children||[]),V.return=U,U=V;break e}else{a(U,V);break}else s(U,V);V=V.sibling}V=Ld(B,U.mode,Z),V.return=U,U=V}return x(U);case me:return _e=B._init,mt(U,V,_e(B._payload),Z)}if(ft(B))return he(U,V,B,Z);if(ce(B))return fe(U,V,B,Z);wc(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,V!==null&&V.tag===6?(a(U,V.sibling),V=f(V,B),V.return=U,U=V):(a(U,V),V=Vd(B,U.mode,Z),V.return=U,U=V),x(U)):a(U,V)}return mt}var Eo=Gp(!0),Kp=Gp(!1),Cc=di(null),xc=null,To=null,$h=null;function Hh(){$h=To=xc=null}function Wh(r){var s=Cc.current;et(Cc),r._currentValue=s}function Gh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function Io(r,s){xc=r,$h=To=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(tn=!0),r.firstContext=null)}function Sn(r){var s=r._currentValue;if($h!==r)if(r={context:r,memoizedValue:s,next:null},To===null){if(xc===null)throw Error(t(308));To=r,xc.dependencies={lanes:0,firstContext:r}}else To=To.next=r;return s}var gs=null;function Kh(r){gs===null?gs=[r]:gs.push(r)}function Qp(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Kh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Or(r,h)}function Or(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var mi=!1;function Qh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Fr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function gi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Ue&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Or(r,a)}return f=h.interleaved,f===null?(s.next=s,Kh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Or(r,a)}function Ec(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,wa(r,a)}}function Yp(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var x={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=x:g=g.next=x,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Tc(r,s,a,h){var f=r.updateQueue;mi=!1;var g=f.firstBaseUpdate,x=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var P=b,$=P.next;P.next=null,x===null?g=$:x.next=$,x=P;var X=r.alternate;X!==null&&(X=X.updateQueue,b=X.lastBaseUpdate,b!==x&&(b===null?X.firstBaseUpdate=$:b.next=$,X.lastBaseUpdate=P))}if(g!==null){var Y=f.baseState;x=0,X=$=P=null,b=g;do{var Q=b.lane,oe=b.eventTime;if((h&Q)===Q){X!==null&&(X=X.next={eventTime:oe,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var he=r,fe=b;switch(Q=s,oe=a,fe.tag){case 1:if(he=fe.payload,typeof he=="function"){Y=he.call(oe,Y,Q);break e}Y=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,Q=typeof he=="function"?he.call(oe,Y,Q):he,Q==null)break e;Y=ie({},Y,Q);break e;case 2:mi=!0}}b.callback!==null&&b.lane!==0&&(r.flags|=64,Q=f.effects,Q===null?f.effects=[b]:Q.push(b))}else oe={eventTime:oe,lane:Q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},X===null?($=X=oe,P=Y):X=X.next=oe,x|=Q;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;Q=b,b=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(X===null&&(P=Y),f.baseState=P,f.firstBaseUpdate=$,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do x|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);_s|=x,r.lanes=x,r.memoizedState=Y}}function Jp(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ua={},dr=di(Ua),za=di(Ua),Ba=di(Ua);function ys(r){if(r===Ua)throw Error(t(174));return r}function Xh(r,s){switch(Qe(Ba,s),Qe(za,r),Qe(dr,Ua),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ws(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Ws(s,r)}et(dr),Qe(dr,s)}function So(){et(dr),et(za),et(Ba)}function Zp(r){ys(Ba.current);var s=ys(dr.current),a=Ws(s,r.type);s!==a&&(Qe(za,r),Qe(dr,a))}function Yh(r){za.current===r&&(et(dr),et(za))}var rt=di(0);function Ic(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jh=[];function Zh(){for(var r=0;r<Jh.length;r++)Jh[r]._workInProgressVersionPrimary=null;Jh.length=0}var Sc=le.ReactCurrentDispatcher,ed=le.ReactCurrentBatchConfig,vs=0,it=null,Et=null,kt=null,kc=!1,qa=!1,$a=0,Py=0;function Ut(){throw Error(t(321))}function td(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Fn(r[a],s[a]))return!1;return!0}function nd(r,s,a,h,f,g){if(vs=g,it=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Sc.current=r===null||r.memoizedState===null?Ly:My,r=a(h,f),qa){g=0;do{if(qa=!1,$a=0,25<=g)throw Error(t(301));g+=1,kt=Et=null,s.updateQueue=null,Sc.current=jy,r=a(h,f)}while(qa)}if(Sc.current=Rc,s=Et!==null&&Et.next!==null,vs=0,kt=Et=it=null,kc=!1,s)throw Error(t(300));return r}function rd(){var r=$a!==0;return $a=0,r}function fr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?it.memoizedState=kt=r:kt=kt.next=r,kt}function kn(){if(Et===null){var r=it.alternate;r=r!==null?r.memoizedState:null}else r=Et.next;var s=kt===null?it.memoizedState:kt.next;if(s!==null)kt=s,Et=r;else{if(r===null)throw Error(t(310));Et=r,r={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},kt===null?it.memoizedState=kt=r:kt=kt.next=r}return kt}function Ha(r,s){return typeof s=="function"?s(r):s}function id(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=Et,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var x=f.next;f.next=g.next,g.next=x}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var b=x=null,P=null,$=g;do{var X=$.lane;if((vs&X)===X)P!==null&&(P=P.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:r(h,$.action);else{var Y={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};P===null?(b=P=Y,x=h):P=P.next=Y,it.lanes|=X,_s|=X}$=$.next}while($!==null&&$!==g);P===null?x=h:P.next=b,Fn(h,s.memoizedState)||(tn=!0),s.memoizedState=h,s.baseState=x,s.baseQueue=P,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,it.lanes|=g,_s|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function sd(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var x=f=f.next;do g=r(g,x.action),x=x.next;while(x!==f);Fn(g,s.memoizedState)||(tn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function e0(){}function t0(r,s){var a=it,h=kn(),f=s(),g=!Fn(h.memoizedState,f);if(g&&(h.memoizedState=f,tn=!0),h=h.queue,od(i0.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,Wa(9,r0.bind(null,a,h,f,s),void 0,null),bt===null)throw Error(t(349));(vs&30)!==0||n0(a,s,f)}return f}function n0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=it.updateQueue,s===null?(s={lastEffect:null,stores:null},it.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function r0(r,s,a,h){s.value=a,s.getSnapshot=h,s0(s)&&o0(r)}function i0(r,s,a){return a(function(){s0(s)&&o0(r)})}function s0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Fn(r,a)}catch{return!0}}function o0(r){var s=Or(r,1);s!==null&&$n(s,r,1,-1)}function a0(r){var s=fr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:r},s.queue=r,r=r.dispatch=Vy.bind(null,it,r),[s.memoizedState,r]}function Wa(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=it.updateQueue,s===null?(s={lastEffect:null,stores:null},it.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function l0(){return kn().memoizedState}function bc(r,s,a,h){var f=fr();it.flags|=r,f.memoizedState=Wa(1|s,a,void 0,h===void 0?null:h)}function Ac(r,s,a,h){var f=kn();h=h===void 0?null:h;var g=void 0;if(Et!==null){var x=Et.memoizedState;if(g=x.destroy,h!==null&&td(h,x.deps)){f.memoizedState=Wa(s,a,g,h);return}}it.flags|=r,f.memoizedState=Wa(1|s,a,g,h)}function c0(r,s){return bc(8390656,8,r,s)}function od(r,s){return Ac(2048,8,r,s)}function u0(r,s){return Ac(4,2,r,s)}function h0(r,s){return Ac(4,4,r,s)}function d0(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function f0(r,s,a){return a=a!=null?a.concat([r]):null,Ac(4,4,d0.bind(null,s,r),a)}function ad(){}function p0(r,s){var a=kn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&td(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function m0(r,s){var a=kn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&td(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function g0(r,s,a){return(vs&21)===0?(r.baseState&&(r.baseState=!1,tn=!0),r.memoizedState=a):(Fn(a,s)||(a=va(),it.lanes|=a,_s|=a,r.baseState=!0),s)}function Ny(r,s){var a=je;je=a!==0&&4>a?a:4,r(!0);var h=ed.transition;ed.transition={};try{r(!1),s()}finally{je=a,ed.transition=h}}function y0(){return kn().memoizedState}function Dy(r,s,a){var h=wi(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},v0(r))_0(s,a);else if(a=Qp(r,s,a,h),a!==null){var f=Xt();$n(a,r,h,f),w0(a,s,h)}}function Vy(r,s,a){var h=wi(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(v0(r))_0(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var x=s.lastRenderedState,b=g(x,a);if(f.hasEagerState=!0,f.eagerState=b,Fn(b,x)){var P=s.interleaved;P===null?(f.next=f,Kh(s)):(f.next=P.next,P.next=f),s.interleaved=f;return}}catch{}finally{}a=Qp(r,s,f,h),a!==null&&(f=Xt(),$n(a,r,h,f),w0(a,s,h))}}function v0(r){var s=r.alternate;return r===it||s!==null&&s===it}function _0(r,s){qa=kc=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function w0(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,wa(r,a)}}var Rc={readContext:Sn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Ly={readContext:Sn,useCallback:function(r,s){return fr().memoizedState=[r,s===void 0?null:s],r},useContext:Sn,useEffect:c0,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,bc(4194308,4,d0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return bc(4194308,4,r,s)},useInsertionEffect:function(r,s){return bc(4,2,r,s)},useMemo:function(r,s){var a=fr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=fr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=Dy.bind(null,it,r),[h.memoizedState,r]},useRef:function(r){var s=fr();return r={current:r},s.memoizedState=r},useState:a0,useDebugValue:ad,useDeferredValue:function(r){return fr().memoizedState=r},useTransition:function(){var r=a0(!1),s=r[0];return r=Ny.bind(null,r[1]),fr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=it,f=fr();if(nt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),bt===null)throw Error(t(349));(vs&30)!==0||n0(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,c0(i0.bind(null,h,g,r),[r]),h.flags|=2048,Wa(9,r0.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=fr(),s=bt.identifierPrefix;if(nt){var a=jr,h=Mr;a=(h&~(1<<32-hn(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=$a++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Py++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},My={readContext:Sn,useCallback:p0,useContext:Sn,useEffect:od,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:h0,useMemo:m0,useReducer:id,useRef:l0,useState:function(){return id(Ha)},useDebugValue:ad,useDeferredValue:function(r){var s=kn();return g0(s,Et.memoizedState,r)},useTransition:function(){var r=id(Ha)[0],s=kn().memoizedState;return[r,s]},useMutableSource:e0,useSyncExternalStore:t0,useId:y0,unstable_isNewReconciler:!1},jy={readContext:Sn,useCallback:p0,useContext:Sn,useEffect:od,useImperativeHandle:f0,useInsertionEffect:u0,useLayoutEffect:h0,useMemo:m0,useReducer:sd,useRef:l0,useState:function(){return sd(Ha)},useDebugValue:ad,useDeferredValue:function(r){var s=kn();return Et===null?s.memoizedState=r:g0(s,Et.memoizedState,r)},useTransition:function(){var r=sd(Ha)[0],s=kn().memoizedState;return[r,s]},useMutableSource:e0,useSyncExternalStore:t0,useId:y0,unstable_isNewReconciler:!1};function zn(r,s){if(r&&r.defaultProps){s=ie({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ld(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:ie({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Pc={isMounted:function(r){return(r=r._reactInternals)?jn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Xt(),f=wi(r),g=Fr(h,f);g.payload=s,a!=null&&(g.callback=a),s=gi(r,g,f),s!==null&&($n(s,r,f,h),Ec(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Xt(),f=wi(r),g=Fr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=gi(r,g,f),s!==null&&($n(s,r,f,h),Ec(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Xt(),h=wi(r),f=Fr(a,h);f.tag=2,s!=null&&(f.callback=s),s=gi(r,f,h),s!==null&&($n(s,r,h,a),Ec(s,r,h))}};function C0(r,s,a,h,f,g,x){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,x):s.prototype&&s.prototype.isPureReactComponent?!Na(a,h)||!Na(f,g):!0}function x0(r,s,a){var h=!1,f=fi,g=s.contextType;return typeof g=="object"&&g!==null?g=Sn(g):(f=en(s)?fs:Ft.current,h=s.contextTypes,g=(h=h!=null)?_o(r,f):fi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Pc,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function E0(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Pc.enqueueReplaceState(s,s.state,null)}function cd(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Qh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Sn(g):(g=en(s)?fs:Ft.current,f.context=_o(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ld(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Pc.enqueueReplaceState(f,f.state,null),Tc(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function ko(r,s){try{var a="",h=s;do a+=Ne(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function ud(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function hd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Oy=typeof WeakMap=="function"?WeakMap:Map;function T0(r,s,a){a=Fr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Oc||(Oc=!0,Sd=h),hd(r,s)},a}function I0(r,s,a){a=Fr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){hd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){hd(r,s),typeof h!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})}),a}function S0(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new Oy;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=Jy.bind(null,r,s,a),s.then(r,r))}function k0(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function b0(r,s,a,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Fr(-1,1),s.tag=2,gi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var Fy=le.ReactCurrentOwner,tn=!1;function Qt(r,s,a,h){s.child=r===null?Kp(s,null,a,h):Eo(s,r.child,a,h)}function A0(r,s,a,h,f){a=a.render;var g=s.ref;return Io(s,f),h=nd(r,s,a,h,g,f),a=rd(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Ur(r,s,f)):(nt&&a&&Fh(s),s.flags|=1,Qt(r,s,h,f),s.child)}function R0(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!Dd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,P0(r,s,g,h,f)):(r=$c(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var x=g.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(x,h)&&r.ref===s.ref)return Ur(r,s,f)}return s.flags|=1,r=xi(g,h),r.ref=s.ref,r.return=s,s.child=r}function P0(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(Na(g,h)&&r.ref===s.ref)if(tn=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(tn=!0);else return s.lanes=r.lanes,Ur(r,s,f)}return dd(r,s,a,h,f)}function N0(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Ao,vn),vn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Qe(Ao,vn),vn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,Qe(Ao,vn),vn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,Qe(Ao,vn),vn|=h;return Qt(r,s,f,a),s.child}function D0(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function dd(r,s,a,h,f){var g=en(a)?fs:Ft.current;return g=_o(s,g),Io(s,f),a=nd(r,s,a,h,g,f),h=rd(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Ur(r,s,f)):(nt&&h&&Fh(s),s.flags|=1,Qt(r,s,a,f),s.child)}function V0(r,s,a,h,f){if(en(a)){var g=!0;mc(s)}else g=!1;if(Io(s,f),s.stateNode===null)Dc(r,s),x0(s,a,h),cd(s,a,h,f),h=!0;else if(r===null){var x=s.stateNode,b=s.memoizedProps;x.props=b;var P=x.context,$=a.contextType;typeof $=="object"&&$!==null?$=Sn($):($=en(a)?fs:Ft.current,$=_o(s,$));var X=a.getDerivedStateFromProps,Y=typeof X=="function"||typeof x.getSnapshotBeforeUpdate=="function";Y||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(b!==h||P!==$)&&E0(s,x,h,$),mi=!1;var Q=s.memoizedState;x.state=Q,Tc(s,h,x,f),P=s.memoizedState,b!==h||Q!==P||Zt.current||mi?(typeof X=="function"&&(ld(s,a,X,h),P=s.memoizedState),(b=mi||C0(s,a,b,h,Q,P,$))?(Y||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(s.flags|=4194308)):(typeof x.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=P),x.props=h,x.state=P,x.context=$,h=b):(typeof x.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{x=s.stateNode,Xp(r,s),b=s.memoizedProps,$=s.type===s.elementType?b:zn(s.type,b),x.props=$,Y=s.pendingProps,Q=x.context,P=a.contextType,typeof P=="object"&&P!==null?P=Sn(P):(P=en(a)?fs:Ft.current,P=_o(s,P));var oe=a.getDerivedStateFromProps;(X=typeof oe=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(b!==Y||Q!==P)&&E0(s,x,h,P),mi=!1,Q=s.memoizedState,x.state=Q,Tc(s,h,x,f);var he=s.memoizedState;b!==Y||Q!==he||Zt.current||mi?(typeof oe=="function"&&(ld(s,a,oe,h),he=s.memoizedState),($=mi||C0(s,a,$,h,Q,he,P)||!1)?(X||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(h,he,P),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(h,he,P)),typeof x.componentDidUpdate=="function"&&(s.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof x.componentDidUpdate!="function"||b===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=he),x.props=h,x.state=he,x.context=P,h=$):(typeof x.componentDidUpdate!="function"||b===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),h=!1)}return fd(r,s,a,h,g,f)}function fd(r,s,a,h,f,g){D0(r,s);var x=(s.flags&128)!==0;if(!h&&!x)return f&&Fp(s,a,!1),Ur(r,s,g);h=s.stateNode,Fy.current=s;var b=x&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&x?(s.child=Eo(s,r.child,null,g),s.child=Eo(s,null,b,g)):Qt(r,s,b,g),s.memoizedState=h.state,f&&Fp(s,a,!0),s.child}function L0(r){var s=r.stateNode;s.pendingContext?jp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&jp(r,s.context,!1),Xh(r,s.containerInfo)}function M0(r,s,a,h,f){return xo(),qh(f),s.flags|=256,Qt(r,s,a,h),s.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(r){return{baseLanes:r,cachePool:null,transitions:null}}function j0(r,s,a){var h=s.pendingProps,f=rt.current,g=!1,x=(s.flags&128)!==0,b;if((b=x)||(b=r!==null&&r.memoizedState===null?!1:(f&2)!==0),b?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Qe(rt,f&1),r===null)return Bh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(x=h.children,r=h.fallback,g?(h=s.mode,g=s.child,x={mode:"hidden",children:x},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=x):g=Hc(x,h,0,null),r=Es(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=md(a),s.memoizedState=pd,r):gd(s,x));if(f=r.memoizedState,f!==null&&(b=f.dehydrated,b!==null))return Uy(r,s,x,h,b,f,a);if(g){g=h.fallback,x=s.mode,f=r.child,b=f.sibling;var P={mode:"hidden",children:h.children};return(x&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=P,s.deletions=null):(h=xi(f,P),h.subtreeFlags=f.subtreeFlags&14680064),b!==null?g=xi(b,g):(g=Es(g,x,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,x=r.child.memoizedState,x=x===null?md(a):{baseLanes:x.baseLanes|a,cachePool:null,transitions:x.transitions},g.memoizedState=x,g.childLanes=r.childLanes&~a,s.memoizedState=pd,h}return g=r.child,r=g.sibling,h=xi(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function gd(r,s){return s=Hc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Nc(r,s,a,h){return h!==null&&qh(h),Eo(s,r.child,null,a),r=gd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Uy(r,s,a,h,f,g,x){if(a)return s.flags&256?(s.flags&=-257,h=ud(Error(t(422))),Nc(r,s,x,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=Hc({mode:"visible",children:h.children},f,0,null),g=Es(g,f,x,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&Eo(s,r.child,null,x),s.child.memoizedState=md(x),s.memoizedState=pd,g);if((s.mode&1)===0)return Nc(r,s,x,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var b=h.dgst;return h=b,g=Error(t(419)),h=ud(g,h,void 0),Nc(r,s,x,h)}if(b=(x&r.childLanes)!==0,tn||b){if(h=bt,h!==null){switch(x&-x){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|x))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Or(r,f),$n(h,r,f,-1))}return Nd(),h=ud(Error(t(421))),Nc(r,s,x,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=Zy.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,yn=hi(f.nextSibling),gn=s,nt=!0,Un=null,r!==null&&(Tn[In++]=Mr,Tn[In++]=jr,Tn[In++]=ps,Mr=r.id,jr=r.overflow,ps=s),s=gd(s,h.children),s.flags|=4096,s)}function O0(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Gh(r.return,s,a)}function yd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function F0(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Qt(r,s,h.children,a),h=rt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&O0(r,a,s);else if(r.tag===19)O0(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Qe(rt,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Ic(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),yd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Ic(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}yd(s,!0,a,null,g);break;case"together":yd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Dc(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Ur(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),_s|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=xi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=xi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function zy(r,s,a){switch(s.tag){case 3:L0(s),xo();break;case 5:Zp(s);break;case 1:en(s.type)&&mc(s);break;case 4:Xh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Qe(Cc,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Qe(rt,rt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?j0(r,s,a):(Qe(rt,rt.current&1),r=Ur(r,s,a),r!==null?r.sibling:null);Qe(rt,rt.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return F0(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qe(rt,rt.current),h)break;return null;case 22:case 23:return s.lanes=0,N0(r,s,a)}return Ur(r,s,a)}var U0,vd,z0,B0;U0=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vd=function(){},z0=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,ys(dr.current);var g=null;switch(a){case"input":f=$s(r,f),h=$s(r,h),g=[];break;case"select":f=ie({},f,{value:void 0}),h=ie({},h,{value:void 0}),g=[];break;case"textarea":f=aa(r,f),h=aa(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=dc)}Mn(a,h);var x;a=null;for($ in f)if(!h.hasOwnProperty($)&&f.hasOwnProperty($)&&f[$]!=null)if($==="style"){var b=f[$];for(x in b)b.hasOwnProperty(x)&&(a||(a={}),a[x]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?g||(g=[]):(g=g||[]).push($,null));for($ in h){var P=h[$];if(b=f!=null?f[$]:void 0,h.hasOwnProperty($)&&P!==b&&(P!=null||b!=null))if($==="style")if(b){for(x in b)!b.hasOwnProperty(x)||P&&P.hasOwnProperty(x)||(a||(a={}),a[x]="");for(x in P)P.hasOwnProperty(x)&&b[x]!==P[x]&&(a||(a={}),a[x]=P[x])}else a||(g||(g=[]),g.push($,a)),a=P;else $==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,b=b?b.__html:void 0,P!=null&&b!==P&&(g=g||[]).push($,P)):$==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push($,""+P):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(P!=null&&$==="onScroll"&&Ze("scroll",r),g||b===P||(g=[])):(g=g||[]).push($,P))}a&&(g=g||[]).push("style",a);var $=g;(s.updateQueue=$)&&(s.flags|=4)}},B0=function(r,s,a,h){a!==h&&(s.flags|=4)};function Ga(r,s){if(!nt)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function zt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function By(r,s,a){var h=s.pendingProps;switch(Uh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(s),null;case 1:return en(s.type)&&pc(),zt(s),null;case 3:return h=s.stateNode,So(),et(Zt),et(Ft),Zh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(_c(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(Ad(Un),Un=null))),vd(r,s),zt(s),null;case 5:Yh(s);var f=ys(Ba.current);if(a=s.type,r!==null&&s.stateNode!=null)z0(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return zt(s),null}if(r=ys(dr.current),_c(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[hr]=s,h[ja]=g,r=(s.mode&1)!==0,a){case"dialog":Ze("cancel",h),Ze("close",h);break;case"iframe":case"object":case"embed":Ze("load",h);break;case"video":case"audio":for(f=0;f<Va.length;f++)Ze(Va[f],h);break;case"source":Ze("error",h);break;case"img":case"image":case"link":Ze("error",h),Ze("load",h);break;case"details":Ze("toggle",h);break;case"input":jl(h,g),Ze("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ze("invalid",h);break;case"textarea":la(h,g),Ze("invalid",h)}Mn(a,g),f=null;for(var x in g)if(g.hasOwnProperty(x)){var b=g[x];x==="children"?typeof b=="string"?h.textContent!==b&&(g.suppressHydrationWarning!==!0&&hc(h.textContent,b,r),f=["children",b]):typeof b=="number"&&h.textContent!==""+b&&(g.suppressHydrationWarning!==!0&&hc(h.textContent,b,r),f=["children",""+b]):o.hasOwnProperty(x)&&b!=null&&x==="onScroll"&&Ze("scroll",h)}switch(a){case"input":qs(h),oa(h,g,!0);break;case"textarea":qs(h),Qr(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=dc)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{x=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ca(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=x.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=x.createElement(a,{is:h.is}):(r=x.createElement(a),a==="select"&&(x=r,h.multiple?x.multiple=!0:h.size&&(x.size=h.size))):r=x.createElementNS(r,a),r[hr]=s,r[ja]=h,U0(r,s,!1,!1),s.stateNode=r;e:{switch(x=Ks(a,h),a){case"dialog":Ze("cancel",r),Ze("close",r),f=h;break;case"iframe":case"object":case"embed":Ze("load",r),f=h;break;case"video":case"audio":for(f=0;f<Va.length;f++)Ze(Va[f],r);f=h;break;case"source":Ze("error",r),f=h;break;case"img":case"image":case"link":Ze("error",r),Ze("load",r),f=h;break;case"details":Ze("toggle",r),f=h;break;case"input":jl(r,h),f=$s(r,h),Ze("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=ie({},h,{value:void 0}),Ze("invalid",r);break;case"textarea":la(r,h),f=aa(r,h),Ze("invalid",r);break;default:f=h}Mn(a,f),b=f;for(g in b)if(b.hasOwnProperty(g)){var P=b[g];g==="style"?Gs(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Fl(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Ji(r,P):typeof P=="number"&&Ji(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Ze("scroll",r):P!=null&&re(r,g,P,x))}switch(a){case"input":qs(r),oa(r,h,!1);break;case"textarea":qs(r),Qr(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Fe(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Ln(r,!!h.multiple,g,!1):h.defaultValue!=null&&Ln(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=dc)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return zt(s),null;case 6:if(r&&s.stateNode!=null)B0(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=ys(Ba.current),ys(dr.current),_c(s)){if(h=s.stateNode,a=s.memoizedProps,h[hr]=s,(g=h.nodeValue!==a)&&(r=gn,r!==null))switch(r.tag){case 3:hc(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&hc(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[hr]=s,s.stateNode=h}return zt(s),null;case 13:if(et(rt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(nt&&yn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Hp(),xo(),s.flags|=98560,g=!1;else if(g=_c(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[hr]=s}else xo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;zt(s),g=!1}else Un!==null&&(Ad(Un),Un=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(rt.current&1)!==0?Tt===0&&(Tt=3):Nd())),s.updateQueue!==null&&(s.flags|=4),zt(s),null);case 4:return So(),vd(r,s),r===null&&La(s.stateNode.containerInfo),zt(s),null;case 10:return Wh(s.type._context),zt(s),null;case 17:return en(s.type)&&pc(),zt(s),null;case 19:if(et(rt),g=s.memoizedState,g===null)return zt(s),null;if(h=(s.flags&128)!==0,x=g.rendering,x===null)if(h)Ga(g,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(x=Ic(r),x!==null){for(s.flags|=128,Ga(g,!1),h=x.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,x=g.alternate,x===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=x.childLanes,g.lanes=x.lanes,g.child=x.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=x.memoizedProps,g.memoizedState=x.memoizedState,g.updateQueue=x.updateQueue,g.type=x.type,r=x.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Qe(rt,rt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Je()>Ro&&(s.flags|=128,h=!0,Ga(g,!1),s.lanes=4194304)}else{if(!h)if(r=Ic(x),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ga(g,!0),g.tail===null&&g.tailMode==="hidden"&&!x.alternate&&!nt)return zt(s),null}else 2*Je()-g.renderingStartTime>Ro&&a!==1073741824&&(s.flags|=128,h=!0,Ga(g,!1),s.lanes=4194304);g.isBackwards?(x.sibling=s.child,s.child=x):(a=g.last,a!==null?a.sibling=x:s.child=x,g.last=x)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Je(),s.sibling=null,a=rt.current,Qe(rt,h?a&1|2:a&1),s):(zt(s),null);case 22:case 23:return Pd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(vn&1073741824)!==0&&(zt(s),s.subtreeFlags&6&&(s.flags|=8192)):zt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function qy(r,s){switch(Uh(s),s.tag){case 1:return en(s.type)&&pc(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return So(),et(Zt),et(Ft),Zh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Yh(s),null;case 13:if(et(rt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));xo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return et(rt),null;case 4:return So(),null;case 10:return Wh(s.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Vc=!1,Bt=!1,$y=typeof WeakSet=="function"?WeakSet:Set,ue=null;function bo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){lt(r,s,h)}else a.current=null}function _d(r,s,a){try{a()}catch(h){lt(r,s,h)}}var q0=!1;function Hy(r,s){if(Ph=Pr,r=Cp(),Eh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var x=0,b=-1,P=-1,$=0,X=0,Y=r,Q=null;t:for(;;){for(var oe;Y!==a||f!==0&&Y.nodeType!==3||(b=x+f),Y!==g||h!==0&&Y.nodeType!==3||(P=x+h),Y.nodeType===3&&(x+=Y.nodeValue.length),(oe=Y.firstChild)!==null;)Q=Y,Y=oe;for(;;){if(Y===r)break t;if(Q===a&&++$===f&&(b=x),Q===g&&++X===h&&(P=x),(oe=Y.nextSibling)!==null)break;Y=Q,Q=Y.parentNode}Y=oe}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nh={focusedElem:r,selectionRange:a},Pr=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var he=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var fe=he.memoizedProps,mt=he.memoizedState,U=s.stateNode,V=U.getSnapshotBeforeUpdate(s.elementType===s.type?fe:zn(s.type,fe),mt);U.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){lt(s,s.return,Z)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return he=q0,q0=!1,he}function Ka(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&_d(s,a,g)}f=f.next}while(f!==h)}}function Lc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function wd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function $0(r){var s=r.alternate;s!==null&&(r.alternate=null,$0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[hr],delete s[ja],delete s[Mh],delete s[ky],delete s[by])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function H0(r){return r.tag===5||r.tag===3||r.tag===4}function W0(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||H0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Cd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=dc));else if(h!==4&&(r=r.child,r!==null))for(Cd(r,s,a),r=r.sibling;r!==null;)Cd(r,s,a),r=r.sibling}function xd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(xd(r,s,a),r=r.sibling;r!==null;)xd(r,s,a),r=r.sibling}var Dt=null,Bn=!1;function yi(r,s,a){for(a=a.child;a!==null;)G0(r,s,a),a=a.sibling}function G0(r,s,a){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(rs,a)}catch{}switch(a.tag){case 5:Bt||bo(a,s);case 6:var h=Dt,f=Bn;Dt=null,yi(r,s,a),Dt=h,Bn=f,Dt!==null&&(Bn?(r=Dt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Dt.removeChild(a.stateNode));break;case 18:Dt!==null&&(Bn?(r=Dt,a=a.stateNode,r.nodeType===8?Lh(r.parentNode,a):r.nodeType===1&&Lh(r,a),ai(r)):Lh(Dt,a.stateNode));break;case 4:h=Dt,f=Bn,Dt=a.stateNode.containerInfo,Bn=!0,yi(r,s,a),Dt=h,Bn=f;break;case 0:case 11:case 14:case 15:if(!Bt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,x=g.destroy;g=g.tag,x!==void 0&&((g&2)!==0||(g&4)!==0)&&_d(a,s,x),f=f.next}while(f!==h)}yi(r,s,a);break;case 1:if(!Bt&&(bo(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(b){lt(a,s,b)}yi(r,s,a);break;case 21:yi(r,s,a);break;case 22:a.mode&1?(Bt=(h=Bt)||a.memoizedState!==null,yi(r,s,a),Bt=h):yi(r,s,a);break;default:yi(r,s,a)}}function K0(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new $y),s.forEach(function(h){var f=e5.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function qn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,x=s,b=x;e:for(;b!==null;){switch(b.tag){case 5:Dt=b.stateNode,Bn=!1;break e;case 3:Dt=b.stateNode.containerInfo,Bn=!0;break e;case 4:Dt=b.stateNode.containerInfo,Bn=!0;break e}b=b.return}if(Dt===null)throw Error(t(160));G0(g,x,f),Dt=null,Bn=!1;var P=f.alternate;P!==null&&(P.return=null),f.return=null}catch($){lt(f,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Q0(s,r),s=s.sibling}function Q0(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(qn(s,r),pr(r),h&4){try{Ka(3,r,r.return),Lc(3,r)}catch(fe){lt(r,r.return,fe)}try{Ka(5,r,r.return)}catch(fe){lt(r,r.return,fe)}}break;case 1:qn(s,r),pr(r),h&512&&a!==null&&bo(a,a.return);break;case 5:if(qn(s,r),pr(r),h&512&&a!==null&&bo(a,a.return),r.flags&32){var f=r.stateNode;try{Ji(f,"")}catch(fe){lt(r,r.return,fe)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,x=a!==null?a.memoizedProps:g,b=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{b==="input"&&g.type==="radio"&&g.name!=null&&Hs(f,g),Ks(b,x);var $=Ks(b,g);for(x=0;x<P.length;x+=2){var X=P[x],Y=P[x+1];X==="style"?Gs(f,Y):X==="dangerouslySetInnerHTML"?Fl(f,Y):X==="children"?Ji(f,Y):re(f,X,Y,$)}switch(b){case"input":Yi(f,g);break;case"textarea":Ol(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Ln(f,!!g.multiple,oe,!1):Q!==!!g.multiple&&(g.defaultValue!=null?Ln(f,!!g.multiple,g.defaultValue,!0):Ln(f,!!g.multiple,g.multiple?[]:"",!1))}f[ja]=g}catch(fe){lt(r,r.return,fe)}}break;case 6:if(qn(s,r),pr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(fe){lt(r,r.return,fe)}}break;case 3:if(qn(s,r),pr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{ai(s.containerInfo)}catch(fe){lt(r,r.return,fe)}break;case 4:qn(s,r),pr(r);break;case 13:qn(s,r),pr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Id=Je())),h&4&&K0(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Bt=($=Bt)||X,qn(s,r),Bt=$):qn(s,r),pr(r),h&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!X&&(r.mode&1)!==0)for(ue=r,X=r.child;X!==null;){for(Y=ue=X;ue!==null;){switch(Q=ue,oe=Q.child,Q.tag){case 0:case 11:case 14:case 15:Ka(4,Q,Q.return);break;case 1:bo(Q,Q.return);var he=Q.stateNode;if(typeof he.componentWillUnmount=="function"){h=Q,a=Q.return;try{s=h,he.props=s.memoizedProps,he.state=s.memoizedState,he.componentWillUnmount()}catch(fe){lt(h,a,fe)}}break;case 5:bo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){J0(Y);continue}}oe!==null?(oe.return=Q,ue=oe):J0(Y)}X=X.sibling}e:for(X=null,Y=r;;){if(Y.tag===5){if(X===null){X=Y;try{f=Y.stateNode,$?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(b=Y.stateNode,P=Y.memoizedProps.style,x=P!=null&&P.hasOwnProperty("display")?P.display:null,b.style.display=Jr("display",x))}catch(fe){lt(r,r.return,fe)}}}else if(Y.tag===6){if(X===null)try{Y.stateNode.nodeValue=$?"":Y.memoizedProps}catch(fe){lt(r,r.return,fe)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===r)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===r)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===r)break e;X===Y&&(X=null),Y=Y.return}X===Y&&(X=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:qn(s,r),pr(r),h&4&&K0(r);break;case 21:break;default:qn(s,r),pr(r)}}function pr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(H0(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Ji(f,""),h.flags&=-33);var g=W0(r);xd(r,g,f);break;case 3:case 4:var x=h.stateNode.containerInfo,b=W0(r);Cd(r,b,x);break;default:throw Error(t(161))}}catch(P){lt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function Wy(r,s,a){ue=r,X0(r)}function X0(r,s,a){for(var h=(r.mode&1)!==0;ue!==null;){var f=ue,g=f.child;if(f.tag===22&&h){var x=f.memoizedState!==null||Vc;if(!x){var b=f.alternate,P=b!==null&&b.memoizedState!==null||Bt;b=Vc;var $=Bt;if(Vc=x,(Bt=P)&&!$)for(ue=f;ue!==null;)x=ue,P=x.child,x.tag===22&&x.memoizedState!==null?Z0(f):P!==null?(P.return=x,ue=P):Z0(f);for(;g!==null;)ue=g,X0(g),g=g.sibling;ue=f,Vc=b,Bt=$}Y0(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ue=g):Y0(r)}}function Y0(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Bt||Lc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Bt)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:zn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Jp(s,g,h);break;case 3:var x=s.updateQueue;if(x!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Jp(s,x,a)}break;case 5:var b=s.stateNode;if(a===null&&s.flags&4){a=b;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var Y=X.dehydrated;Y!==null&&ai(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Bt||s.flags&512&&wd(s)}catch(Q){lt(s,s.return,Q)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function J0(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Z0(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Lc(4,s)}catch(P){lt(s,a,P)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(P){lt(s,f,P)}}var g=s.return;try{wd(s)}catch(P){lt(s,g,P)}break;case 5:var x=s.return;try{wd(s)}catch(P){lt(s,x,P)}}}catch(P){lt(s,s.return,P)}if(s===r){ue=null;break}var b=s.sibling;if(b!==null){b.return=s.return,ue=b;break}ue=s.return}}var Gy=Math.ceil,Mc=le.ReactCurrentDispatcher,Ed=le.ReactCurrentOwner,bn=le.ReactCurrentBatchConfig,Ue=0,bt=null,_t=null,Vt=0,vn=0,Ao=di(0),Tt=0,Qa=null,_s=0,jc=0,Td=0,Xa=null,nn=null,Id=0,Ro=1/0,zr=null,Oc=!1,Sd=null,vi=null,Fc=!1,_i=null,Uc=0,Ya=0,kd=null,zc=-1,Bc=0;function Xt(){return(Ue&6)!==0?Je():zc!==-1?zc:zc=Je()}function wi(r){return(r.mode&1)===0?1:(Ue&2)!==0&&Vt!==0?Vt&-Vt:Ry.transition!==null?(Bc===0&&(Bc=va()),Bc):(r=je,r!==0||(r=window.event,r=r===void 0?16:io(r.type)),r)}function $n(r,s,a,h){if(50<Ya)throw Ya=0,kd=null,Error(t(185));as(r,a,h),((Ue&2)===0||r!==bt)&&(r===bt&&((Ue&2)===0&&(jc|=a),Tt===4&&Ci(r,Vt)),rn(r,h),a===1&&Ue===0&&(s.mode&1)===0&&(Ro=Je()+500,gc&&pi()))}function rn(r,s){var a=r.callbackNode;os(r,s);var h=br(r,r===bt?Vt:0);if(h===0)a!==null&&Ys(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&Ys(a),s===1)r.tag===0?Ay(tm.bind(null,r)):Up(tm.bind(null,r)),Iy(function(){(Ue&6)===0&&pi()}),a=null;else{switch(tr(h)){case 1:a=Js;break;case 4:a=ma;break;case 16:a=ns;break;case 536870912:a=Zs;break;default:a=ns}a=cm(a,em.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function em(r,s){if(zc=-1,Bc=0,(Ue&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Po()&&r.callbackNode!==a)return null;var h=br(r,r===bt?Vt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=qc(r,h);else{s=h;var f=Ue;Ue|=2;var g=rm();(bt!==r||Vt!==s)&&(zr=null,Ro=Je()+500,Cs(r,s));do try{Xy();break}catch(b){nm(r,b)}while(!0);Hh(),Mc.current=g,Ue=f,_t!==null?s=0:(bt=null,Vt=0,s=Tt)}if(s!==0){if(s===2&&(f=ya(r),f!==0&&(h=f,s=bd(r,f))),s===1)throw a=Qa,Cs(r,0),Ci(r,h),rn(r,Je()),a;if(s===6)Ci(r,h);else{if(f=r.current.alternate,(h&30)===0&&!Ky(f)&&(s=qc(r,h),s===2&&(g=ya(r),g!==0&&(h=g,s=bd(r,g))),s===1))throw a=Qa,Cs(r,0),Ci(r,h),rn(r,Je()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:xs(r,nn,zr);break;case 3:if(Ci(r,h),(h&130023424)===h&&(s=Id+500-Je(),10<s)){if(br(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Xt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Vh(xs.bind(null,r,nn,zr),s);break}xs(r,nn,zr);break;case 4:if(Ci(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var x=31-hn(h);g=1<<x,x=s[x],x>f&&(f=x),h&=~g}if(h=f,h=Je()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Gy(h/1960))-h,10<h){r.timeoutHandle=Vh(xs.bind(null,r,nn,zr),h);break}xs(r,nn,zr);break;case 5:xs(r,nn,zr);break;default:throw Error(t(329))}}}return rn(r,Je()),r.callbackNode===a?em.bind(null,r):null}function bd(r,s){var a=Xa;return r.current.memoizedState.isDehydrated&&(Cs(r,s).flags|=256),r=qc(r,s),r!==2&&(s=nn,nn=a,s!==null&&Ad(s)),r}function Ad(r){nn===null?nn=r:nn.push.apply(nn,r)}function Ky(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!Fn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ci(r,s){for(s&=~Td,s&=~jc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-hn(s),h=1<<a;r[a]=-1,s&=~h}}function tm(r){if((Ue&6)!==0)throw Error(t(327));Po();var s=br(r,0);if((s&1)===0)return rn(r,Je()),null;var a=qc(r,s);if(r.tag!==0&&a===2){var h=ya(r);h!==0&&(s=h,a=bd(r,h))}if(a===1)throw a=Qa,Cs(r,0),Ci(r,s),rn(r,Je()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,xs(r,nn,zr),rn(r,Je()),null}function Rd(r,s){var a=Ue;Ue|=1;try{return r(s)}finally{Ue=a,Ue===0&&(Ro=Je()+500,gc&&pi())}}function ws(r){_i!==null&&_i.tag===0&&(Ue&6)===0&&Po();var s=Ue;Ue|=1;var a=bn.transition,h=je;try{if(bn.transition=null,je=1,r)return r()}finally{je=h,bn.transition=a,Ue=s,(Ue&6)===0&&pi()}}function Pd(){vn=Ao.current,et(Ao)}function Cs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Ty(a)),_t!==null)for(a=_t.return;a!==null;){var h=a;switch(Uh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&pc();break;case 3:So(),et(Zt),et(Ft),Zh();break;case 5:Yh(h);break;case 4:So();break;case 13:et(rt);break;case 19:et(rt);break;case 10:Wh(h.type._context);break;case 22:case 23:Pd()}a=a.return}if(bt=r,_t=r=xi(r.current,null),Vt=vn=s,Tt=0,Qa=null,Td=jc=_s=0,nn=Xa=null,gs!==null){for(s=0;s<gs.length;s++)if(a=gs[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var x=g.next;g.next=f,h.next=x}a.pending=h}gs=null}return r}function nm(r,s){do{var a=_t;try{if(Hh(),Sc.current=Rc,kc){for(var h=it.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}kc=!1}if(vs=0,kt=Et=it=null,qa=!1,$a=0,Ed.current=null,a===null||a.return===null){Tt=1,Qa=s,_t=null;break}e:{var g=r,x=a.return,b=a,P=s;if(s=Vt,b.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var $=P,X=b,Y=X.tag;if((X.mode&1)===0&&(Y===0||Y===11||Y===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var oe=k0(x);if(oe!==null){oe.flags&=-257,b0(oe,x,b,g,s),oe.mode&1&&S0(g,$,s),s=oe,P=$;var he=s.updateQueue;if(he===null){var fe=new Set;fe.add(P),s.updateQueue=fe}else he.add(P);break e}else{if((s&1)===0){S0(g,$,s),Nd();break e}P=Error(t(426))}}else if(nt&&b.mode&1){var mt=k0(x);if(mt!==null){(mt.flags&65536)===0&&(mt.flags|=256),b0(mt,x,b,g,s),qh(ko(P,b));break e}}g=P=ko(P,b),Tt!==4&&(Tt=2),Xa===null?Xa=[g]:Xa.push(g),g=x;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=T0(g,P,s);Yp(g,U);break e;case 1:b=P;var V=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(vi===null||!vi.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var Z=I0(g,b,s);Yp(g,Z);break e}}g=g.return}while(g!==null)}sm(a)}catch(pe){s=pe,_t===a&&a!==null&&(_t=a=a.return);continue}break}while(!0)}function rm(){var r=Mc.current;return Mc.current=Rc,r===null?Rc:r}function Nd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),bt===null||(_s&268435455)===0&&(jc&268435455)===0||Ci(bt,Vt)}function qc(r,s){var a=Ue;Ue|=2;var h=rm();(bt!==r||Vt!==s)&&(zr=null,Cs(r,s));do try{Qy();break}catch(f){nm(r,f)}while(!0);if(Hh(),Ue=a,Mc.current=h,_t!==null)throw Error(t(261));return bt=null,Vt=0,Tt}function Qy(){for(;_t!==null;)im(_t)}function Xy(){for(;_t!==null&&!ts();)im(_t)}function im(r){var s=lm(r.alternate,r,vn);r.memoizedProps=r.pendingProps,s===null?sm(r):_t=s,Ed.current=null}function sm(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=By(a,s,vn),a!==null){_t=a;return}}else{if(a=qy(a,s),a!==null){a.flags&=32767,_t=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Tt=6,_t=null;return}}if(s=s.sibling,s!==null){_t=s;return}_t=s=r}while(s!==null);Tt===0&&(Tt=5)}function xs(r,s,a){var h=je,f=bn.transition;try{bn.transition=null,je=1,Yy(r,s,a,h)}finally{bn.transition=f,je=h}return null}function Yy(r,s,a,h){do Po();while(_i!==null);if((Ue&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(vh(r,g),r===bt&&(_t=bt=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fc||(Fc=!0,cm(ns,function(){return Po(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=bn.transition,bn.transition=null;var x=je;je=1;var b=Ue;Ue|=4,Ed.current=null,Hy(r,a),Q0(a,r),yy(Nh),Pr=!!Ph,Nh=Ph=null,r.current=a,Wy(a),kr(),Ue=b,je=x,bn.transition=g}else r.current=a;if(Fc&&(Fc=!1,_i=r,Uc=f),g=r.pendingLanes,g===0&&(vi=null),Xl(a.stateNode),rn(r,Je()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Oc)throw Oc=!1,r=Sd,Sd=null,r;return(Uc&1)!==0&&r.tag!==0&&Po(),g=r.pendingLanes,(g&1)!==0?r===kd?Ya++:(Ya=0,kd=r):Ya=0,pi(),null}function Po(){if(_i!==null){var r=tr(Uc),s=bn.transition,a=je;try{if(bn.transition=null,je=16>r?16:r,_i===null)var h=!1;else{if(r=_i,_i=null,Uc=0,(Ue&6)!==0)throw Error(t(331));var f=Ue;for(Ue|=4,ue=r.current;ue!==null;){var g=ue,x=g.child;if((ue.flags&16)!==0){var b=g.deletions;if(b!==null){for(var P=0;P<b.length;P++){var $=b[P];for(ue=$;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:Ka(8,X,g)}var Y=X.child;if(Y!==null)Y.return=X,ue=Y;else for(;ue!==null;){X=ue;var Q=X.sibling,oe=X.return;if($0(X),X===$){ue=null;break}if(Q!==null){Q.return=oe,ue=Q;break}ue=oe}}}var he=g.alternate;if(he!==null){var fe=he.child;if(fe!==null){he.child=null;do{var mt=fe.sibling;fe.sibling=null,fe=mt}while(fe!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&x!==null)x.return=g,ue=x;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ka(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ue=U;break e}ue=g.return}}var V=r.current;for(ue=V;ue!==null;){x=ue;var B=x.child;if((x.subtreeFlags&2064)!==0&&B!==null)B.return=x,ue=B;else e:for(x=V;ue!==null;){if(b=ue,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:Lc(9,b)}}catch(pe){lt(b,b.return,pe)}if(b===x){ue=null;break e}var Z=b.sibling;if(Z!==null){Z.return=b.return,ue=Z;break e}ue=b.return}}if(Ue=f,pi(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(rs,r)}catch{}h=!0}return h}finally{je=a,bn.transition=s}}return!1}function om(r,s,a){s=ko(a,s),s=T0(r,s,1),r=gi(r,s,1),s=Xt(),r!==null&&(as(r,1,s),rn(r,s))}function lt(r,s,a){if(r.tag===3)om(r,r,a);else for(;s!==null;){if(s.tag===3){om(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(vi===null||!vi.has(h))){r=ko(a,r),r=I0(s,r,1),s=gi(s,r,1),r=Xt(),s!==null&&(as(s,1,r),rn(s,r));break}}s=s.return}}function Jy(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Xt(),r.pingedLanes|=r.suspendedLanes&a,bt===r&&(Vt&a)===a&&(Tt===4||Tt===3&&(Vt&130023424)===Vt&&500>Je()-Id?Cs(r,0):Td|=a),rn(r,s)}function am(r,s){s===0&&((r.mode&1)===0?s=1:(s=ii,ii<<=1,(ii&130023424)===0&&(ii=4194304)));var a=Xt();r=Or(r,s),r!==null&&(as(r,s,a),rn(r,a))}function Zy(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),am(r,a)}function e5(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),am(r,a)}var lm;lm=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Zt.current)tn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return tn=!1,zy(r,s,a);tn=(r.flags&131072)!==0}else tn=!1,nt&&(s.flags&1048576)!==0&&zp(s,vc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Dc(r,s),r=s.pendingProps;var f=_o(s,Ft.current);Io(s,a),f=nd(null,s,h,r,f,a);var g=rd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,en(h)?(g=!0,mc(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qh(s),f.updater=Pc,s.stateNode=f,f._reactInternals=s,cd(s,h,r,a),s=fd(null,s,h,!0,g,a)):(s.tag=0,nt&&g&&Fh(s),Qt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Dc(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=n5(h),r=zn(h,r),f){case 0:s=dd(null,s,h,r,a);break e;case 1:s=V0(null,s,h,r,a);break e;case 11:s=A0(null,s,h,r,a);break e;case 14:s=R0(null,s,h,zn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:zn(h,f),dd(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:zn(h,f),V0(r,s,h,f,a);case 3:e:{if(L0(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,Xp(r,s),Tc(s,h,null,a);var x=s.memoizedState;if(h=x.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=ko(Error(t(423)),s),s=M0(r,s,h,a,f);break e}else if(h!==f){f=ko(Error(t(424)),s),s=M0(r,s,h,a,f);break e}else for(yn=hi(s.stateNode.containerInfo.firstChild),gn=s,nt=!0,Un=null,a=Kp(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xo(),h===f){s=Ur(r,s,a);break e}Qt(r,s,h,a)}s=s.child}return s;case 5:return Zp(s),r===null&&Bh(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,x=f.children,Dh(h,f)?x=null:g!==null&&Dh(h,g)&&(s.flags|=32),D0(r,s),Qt(r,s,x,a),s.child;case 6:return r===null&&Bh(s),null;case 13:return j0(r,s,a);case 4:return Xh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Eo(s,null,h,a):Qt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:zn(h,f),A0(r,s,h,f,a);case 7:return Qt(r,s,s.pendingProps,a),s.child;case 8:return Qt(r,s,s.pendingProps.children,a),s.child;case 12:return Qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,x=f.value,Qe(Cc,h._currentValue),h._currentValue=x,g!==null)if(Fn(g.value,x)){if(g.children===f.children&&!Zt.current){s=Ur(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var b=g.dependencies;if(b!==null){x=g.child;for(var P=b.firstContext;P!==null;){if(P.context===h){if(g.tag===1){P=Fr(-1,a&-a),P.tag=2;var $=g.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?P.next=P:(P.next=X.next,X.next=P),$.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Gh(g.return,a,s),b.lanes|=a;break}P=P.next}}else if(g.tag===10)x=g.type===s.type?null:g.child;else if(g.tag===18){if(x=g.return,x===null)throw Error(t(341));x.lanes|=a,b=x.alternate,b!==null&&(b.lanes|=a),Gh(x,a,s),x=g.sibling}else x=g.child;if(x!==null)x.return=g;else for(x=g;x!==null;){if(x===s){x=null;break}if(g=x.sibling,g!==null){g.return=x.return,x=g;break}x=x.return}g=x}Qt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Io(s,a),f=Sn(f),h=h(f),s.flags|=1,Qt(r,s,h,a),s.child;case 14:return h=s.type,f=zn(h,s.pendingProps),f=zn(h.type,f),R0(r,s,h,f,a);case 15:return P0(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:zn(h,f),Dc(r,s),s.tag=1,en(h)?(r=!0,mc(s)):r=!1,Io(s,a),x0(s,h,f),cd(s,h,f,a),fd(null,s,h,!0,r,a);case 19:return F0(r,s,a);case 22:return N0(r,s,a)}throw Error(t(156,s.tag))};function cm(r,s){return pa(r,s)}function t5(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,s,a,h){return new t5(r,s,a,h)}function Dd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function n5(r){if(typeof r=="function")return Dd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===dt)return 14}return 2}function xi(r,s){var a=r.alternate;return a===null?(a=An(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function $c(r,s,a,h,f,g){var x=2;if(h=r,typeof r=="function")Dd(r)&&(x=1);else if(typeof r=="string")x=5;else e:switch(r){case k:return Es(a.children,f,g,s);case S:x=8,f|=8;break;case R:return r=An(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case A:return r=An(13,a,s,f),r.elementType=A,r.lanes=g,r;case He:return r=An(19,a,s,f),r.elementType=He,r.lanes=g,r;case Ce:return Hc(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:x=10;break e;case N:x=9;break e;case M:x=11;break e;case dt:x=14;break e;case me:x=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=An(x,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function Es(r,s,a,h){return r=An(7,r,h,s),r.lanes=a,r}function Hc(r,s,a,h){return r=An(22,r,h,s),r.elementType=Ce,r.lanes=a,r.stateNode={isHidden:!1},r}function Vd(r,s,a){return r=An(6,r,null,s),r.lanes=a,r}function Ld(r,s,a){return s=An(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function r5(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Md(r,s,a,h,f,g,x,b,P){return r=new r5(r,s,a,b,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=An(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(g),r}function i5(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:de,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function um(r){if(!r)return fi;r=r._reactInternals;e:{if(jn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(en(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(en(a))return Op(r,a,s)}return s}function hm(r,s,a,h,f,g,x,b,P){return r=Md(a,h,!0,r,f,g,x,b,P),r.context=um(null),a=r.current,h=Xt(),f=wi(a),g=Fr(h,f),g.callback=s??null,gi(a,g,f),r.current.lanes=f,as(r,f,h),rn(r,h),r}function Wc(r,s,a,h){var f=s.current,g=Xt(),x=wi(f);return a=um(a),s.context===null?s.context=a:s.pendingContext=a,s=Fr(g,x),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=gi(f,s,x),r!==null&&($n(r,f,x,g),Ec(r,f,x)),x}function Gc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function dm(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function jd(r,s){dm(r,s),(r=r.alternate)&&dm(r,s)}function s5(){return null}var fm=typeof reportError=="function"?reportError:function(r){console.error(r)};function Od(r){this._internalRoot=r}Kc.prototype.render=Od.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Wc(r,s,null,null)},Kc.prototype.unmount=Od.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ws(function(){Wc(null,r,null,null)}),s[Vr]=null}};function Kc(r){this._internalRoot=r}Kc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ea();r={blockedOn:null,target:r,priority:s};for(var a=0;a<dn.length&&s!==0&&s<dn[a].priority;a++);dn.splice(a,0,r),a===0&&no(r)}};function Fd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Qc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function pm(){}function o5(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var $=Gc(x);g.call($)}}var x=hm(s,h,r,0,null,!1,!1,"",pm);return r._reactRootContainer=x,r[Vr]=x.current,La(r.nodeType===8?r.parentNode:r),ws(),x}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var b=h;h=function(){var $=Gc(P);b.call($)}}var P=Md(r,0,!1,null,null,!1,!1,"",pm);return r._reactRootContainer=P,r[Vr]=P.current,La(r.nodeType===8?r.parentNode:r),ws(function(){Wc(s,P,a,h)}),P}function Xc(r,s,a,h,f){var g=a._reactRootContainer;if(g){var x=g;if(typeof f=="function"){var b=f;f=function(){var P=Gc(x);b.call(P)}}Wc(s,x,r,f)}else x=o5(a,s,r,f,h);return Gc(x)}Ca=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Be(s.pendingLanes);a!==0&&(wa(s,a|1),rn(s,Je()),(Ue&6)===0&&(Ro=Je()+500,pi()))}break;case 13:ws(function(){var h=Or(r,1);if(h!==null){var f=Xt();$n(h,r,1,f)}}),jd(r,1)}},eo=function(r){if(r.tag===13){var s=Or(r,134217728);if(s!==null){var a=Xt();$n(s,r,134217728,a)}jd(r,134217728)}},xa=function(r){if(r.tag===13){var s=wi(r),a=Or(r,s);if(a!==null){var h=Xt();$n(a,r,s,h)}jd(r,s)}},Ea=function(){return je},Ta=function(r,s){var a=je;try{return je=r,s()}finally{je=a}},Tr=function(r,s,a){switch(s){case"input":if(Yi(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=fc(h);if(!f)throw Error(t(90));sa(h),Yi(h,f)}}}break;case"textarea":Ol(r,a);break;case"select":s=a.value,s!=null&&Ln(r,!!a.multiple,s,!1)}},zl=Rd,Bl=ws;var a5={usingClientEntryPoint:!1,Events:[Oa,yo,fc,ei,ti,Rd]},Ja={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l5={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ql(r),r===null?null:r.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||s5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{rs=Yc.inject(l5),un=Yc}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a5,sn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(s))throw Error(t(200));return i5(r,s,null,a)},sn.createRoot=function(r,s){if(!Fd(r))throw Error(t(299));var a=!1,h="",f=fm;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Md(r,1,!1,null,null,a,!1,h,f),r[Vr]=s.current,La(r.nodeType===8?r.parentNode:r),new Od(s)},sn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ql(s),r=r===null?null:r.stateNode,r},sn.flushSync=function(r){return ws(r)},sn.hydrate=function(r,s,a){if(!Qc(s))throw Error(t(200));return Xc(null,r,s,!0,a)},sn.hydrateRoot=function(r,s,a){if(!Fd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",x=fm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(x=a.onRecoverableError)),s=hm(s,null,r,1,a??null,f,!1,g,x),r[Vr]=s.current,La(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Kc(s)},sn.render=function(r,s,a){if(!Qc(s))throw Error(t(200));return Xc(null,r,s,!1,a)},sn.unmountComponentAtNode=function(r){if(!Qc(r))throw Error(t(40));return r._reactRootContainer?(ws(function(){Xc(null,null,r,!1,function(){r._reactRootContainer=null,r[Vr]=null})}),!0):!1},sn.unstable_batchedUpdates=Rd,sn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Qc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Xc(r,s,a,!1,h)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var xm;function g5(){if(xm)return Bd.exports;xm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bd.exports=m5(),Bd.exports}var Em;function y5(){if(Em)return Jc;Em=1;var n=g5();return Jc.createRoot=n.createRoot,Jc.hydrateRoot=n.hydrateRoot,Jc}var v5=y5();const _5=Pg(v5),w5=()=>{const[n,e]=ge.useState(!1),t=[{name:"Accueil",href:"#accueil",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})},{name:"À Propos",href:"#a-propos",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},{name:"Appel à communications",href:"#soumission",icon:p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:[p.jsx("path",{d:"M9 3a1 1 0 011 1v1.382a7.001 7.001 0 015 6.618 1 1 0 11-2 0 5 5 0 00-5-5H10a1 1 0 110-2H9z"}),p.jsx("path",{d:"M3 8a1 1 0 011-1h2a7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5H4a1 1 0 01-1-1z"})]})},{name:"Soumission",href:"#soumission",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})},{name:"Comité Scientifique",href:"#comite-scientifique",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}];return p.jsxs("header",{className:"bg-primary/80 backdrop-blur-lg shadow-md sticky top-0 z-50 font-sans",children:[p.jsxs("div",{className:"container mx-auto px-6 py-4 flex justify-between items-center",children:[p.jsx("a",{href:"#accueil","aria-label":"Page d'accueil de CoSTIC 2026",className:"flex-shrink-0 ml-0",children:p.jsx("img",{src:"/img/costic_logo.png",alt:"Logo CoSTIC 2026",className:"h-12 md:h-17 w-auto object-contain select-none transition-all duration-200 hover:opacity-90 drop-shadow-md rounded-full",decoding:"async",loading:"eager",fetchPriority:"high"})}),p.jsxs("nav",{className:"hidden md:flex items-center justify-end space-x-8",children:[t.map(i=>p.jsxs("a",{href:i.href,className:"relative text-neutral-100 font-semibold hover:text-white transition-colors duration-300 group py-2 flex items-center",children:[i.icon,p.jsx("span",{children:i.name}),p.jsx("span",{className:"absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"})]},i.name)),p.jsx("a",{href:"/admin",className:"text-neutral-300 hover:text-white text-sm transition-colors duration-300",children:"Espace Administrateur"})]}),p.jsxs("div",{className:"md:hidden flex items-center",children:[p.jsx("a",{href:"/admin",className:"text-neutral-300 hover:text-white text-sm mr-4",children:"Espace Administrateur"}),p.jsx("button",{onClick:()=>e(!n),className:"text-white focus:outline-none","aria-label":"Ouvrir le menu",children:p.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:n?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16m-7 6h7"})})})]})]}),n&&p.jsx("div",{className:"md:hidden bg-primary/95",children:p.jsx("div",{className:"px-6 pt-4 pb-4 flex flex-col items-center space-y-4",children:p.jsx("nav",{className:"w-full space-y-2 text-center",children:t.map(i=>p.jsxs("a",{href:i.href,onClick:()=>e(!1),className:"flex items-center justify-center text-neutral-100 font-semibold rounded-md py-3 hover:bg-secondary/20 transition-colors duration-300",children:[i.icon,p.jsx("span",{children:i.name})]},i.name))})})})]})},C5=()=>{};var Tm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},x5=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],u=n[t++],d=n[t++],m=((o&7)<<18|(l&63)<<12|(u&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],u=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},Dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],u=o+1<n.length,d=u?n[o+1]:0,m=o+2<n.length,_=m?n[o+2]:0,C=l>>2,E=(l&3)<<4|d>>4;let I=(d&15)<<2|_>>6,L=_&63;m||(L=64,u||(I=64)),i.push(t[C],t[E],t[I],t[L])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ng(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):x5(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const _=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||_==null||E==null)throw new E5;const I=l<<2|d>>4;if(i.push(I),_!==64){const L=d<<4&240|_>>2;if(i.push(L),E!==64){const O=_<<6&192|E;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class E5 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T5=function(n){const e=Ng(n);return Dg.encodeByteArray(e,!0)},xu=function(n){return T5(n).replace(/\./g,"")},Vg=function(n){try{return Dg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I5(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S5=()=>I5().__FIREBASE_DEFAULTS__,k5=()=>{if(typeof process>"u"||typeof Tm>"u")return;const n=Tm.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},b5=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vg(n[1]);return e&&JSON.parse(e)},$u=()=>{try{return C5()||S5()||k5()||b5()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lg=n=>{var e,t;return(t=(e=$u())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Mg=n=>{const e=Lg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},jg=()=>{var n;return(n=$u())==null?void 0:n.config},Og=n=>{var e;return(e=$u())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A5{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yf(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[xu(JSON.stringify(t)),xu(JSON.stringify(u)),""].join(".")}const ol={};function R5(){const n={prod:[],emulator:[]};for(const e of Object.keys(ol))ol[e]?n.emulator.push(e):n.prod.push(e);return n}function P5(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Im=!1;function Jf(n,e){if(typeof window>"u"||typeof document>"u"||!Wi(window.location.host)||ol[n]===e||ol[n]||Im)return;ol[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=R5().prod.length>0;function u(){const I=document.getElementById(i);I&&I.remove()}function d(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,L){I.setAttribute("width","24"),I.setAttribute("id",L),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function _(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Im=!0,u()},I}function C(I,L){I.setAttribute("id",L),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=P5(i),L=t("text"),O=document.getElementById(L)||document.createElement("span"),q=t("learnmore"),F=document.getElementById(q)||document.createElement("a"),te=t("preprendIcon"),J=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const re=I.element;d(re),C(F,q);const le=_();m(J,te),re.append(J,O,F,le),document.body.appendChild(re)}l?(O.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N5(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gt())}function D5(){var e;const n=(e=$u())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function V5(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ug(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function L5(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M5(){const n=Gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function j5(){return!D5()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zg(){try{return typeof indexedDB=="object"}catch{return!1}}function Bg(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function O5(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F5="FirebaseError";class Vn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=F5,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?U5(l,i):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new Vn(o,d,i)}}function U5(n,e){return n.replace(z5,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const z5=/\{\$([^}]+)}/g;function B5(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Oi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],u=e[o];if(Sm(l)&&Sm(u)){if(!Oi(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Sm(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function tl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function nl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function q5(n,e){const t=new $5(n,e);return t.subscribe.bind(t)}class $5{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");H5(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Hd),o.error===void 0&&(o.error=Hd),o.complete===void 0&&(o.complete=Hd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function H5(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W5=1e3,G5=2,K5=14400*1e3,Q5=.5;function km(n,e=W5,t=G5){const i=e*Math.pow(t,n),o=Math.round(Q5*i*(Math.random()-.5)*2);return Math.min(K5,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Dn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new A5;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(J5(e))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Is){return this.instances.has(e)}getOptions(e=Is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&u.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Y5(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Is){return this.component?this.component.multipleInstances?e:Is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Y5(n){return n===Is?void 0:n}function J5(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z5{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new X5(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const ev={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},tv=Ve.INFO,nv={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},rv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=nv[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hu{constructor(e){this.name=e,this._logLevel=tv,this._logHandler=rv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ev[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const iv=(n,e)=>e.some(t=>n instanceof t);let bm,Am;function sv(){return bm||(bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ov(){return Am||(Am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qg=new WeakMap,yf=new WeakMap,$g=new WeakMap,Wd=new WeakMap,Zf=new WeakMap;function av(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Pi(n.result)),o()},u=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&qg.set(t,n)}).catch(()=>{}),Zf.set(e,n),e}function lv(n){if(yf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),o()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});yf.set(n,e)}let vf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$g.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cv(n){vf=n(vf)}function uv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Gd(this),e,...t);return $g.set(i,e.sort?e.sort():[e]),Pi(i)}:ov().includes(n)?function(...e){return n.apply(Gd(this),e),Pi(qg.get(this))}:function(...e){return Pi(n.apply(Gd(this),e))}}function hv(n){return typeof n=="function"?uv(n):(n instanceof IDBTransaction&&lv(n),iv(n,sv())?new Proxy(n,vf):n)}function Pi(n){if(n instanceof IDBRequest)return av(n);if(Wd.has(n))return Wd.get(n);const e=hv(n);return e!==n&&(Wd.set(n,e),Zf.set(e,n)),e}const Gd=n=>Zf.get(n);function Hg(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(n,e),d=Pi(u);return i&&u.addEventListener("upgradeneeded",m=>{i(Pi(u.result),m.oldVersion,m.newVersion,Pi(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),d}const dv=["get","getKey","getAll","getAllKeys","count"],fv=["put","add","delete","clear"],Kd=new Map;function Rm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Kd.get(e))return Kd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=fv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||dv.includes(t)))return;const l=async function(u,...d){const m=this.transaction(u,o?"readwrite":"readonly");let _=m.store;return i&&(_=_.index(d.shift())),(await Promise.all([_[t](...d),o&&m.done]))[0]};return Kd.set(e,l),l}cv(n=>({...n,get:(e,t,i)=>Rm(e,t)||n.get(e,t,i),has:(e,t)=>!!Rm(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function mv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _f="@firebase/app",Pm="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Hu("@firebase/app"),gv="@firebase/app-compat",yv="@firebase/analytics-compat",vv="@firebase/analytics",_v="@firebase/app-check-compat",wv="@firebase/app-check",Cv="@firebase/auth",xv="@firebase/auth-compat",Ev="@firebase/database",Tv="@firebase/data-connect",Iv="@firebase/database-compat",Sv="@firebase/functions",kv="@firebase/functions-compat",bv="@firebase/installations",Av="@firebase/installations-compat",Rv="@firebase/messaging",Pv="@firebase/messaging-compat",Nv="@firebase/performance",Dv="@firebase/performance-compat",Vv="@firebase/remote-config",Lv="@firebase/remote-config-compat",Mv="@firebase/storage",jv="@firebase/storage-compat",Ov="@firebase/firestore",Fv="@firebase/ai",Uv="@firebase/firestore-compat",zv="firebase",Bv="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="[DEFAULT]",qv={[_f]:"fire-core",[gv]:"fire-core-compat",[vv]:"fire-analytics",[yv]:"fire-analytics-compat",[wv]:"fire-app-check",[_v]:"fire-app-check-compat",[Cv]:"fire-auth",[xv]:"fire-auth-compat",[Ev]:"fire-rtdb",[Tv]:"fire-data-connect",[Iv]:"fire-rtdb-compat",[Sv]:"fire-fn",[kv]:"fire-fn-compat",[bv]:"fire-iid",[Av]:"fire-iid-compat",[Rv]:"fire-fcm",[Pv]:"fire-fcm-compat",[Nv]:"fire-perf",[Dv]:"fire-perf-compat",[Vv]:"fire-rc",[Lv]:"fire-rc-compat",[Mv]:"fire-gcs",[jv]:"fire-gcs-compat",[Ov]:"fire-fst",[Uv]:"fire-fst-compat",[Fv]:"fire-vertex","fire-js":"fire-js",[zv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new Map,$v=new Map,Cf=new Map;function Nm(n,e){try{n.container.addComponent(e)}catch(t){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kn(n){const e=n.name;if(Cf.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,n);for(const t of Eu.values())Nm(t,n);for(const t of $v.values())Nm(t,n);return!0}function Gi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Rn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ni=new js("app","Firebase",Hv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ni.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=Bv;function Wg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:wf,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ni.create("bad-app-name",{appName:String(o)});if(t||(t=jg()),!t)throw Ni.create("no-options");const l=Eu.get(o);if(l){if(Oi(t,l.options)&&Oi(i,l.config))return l;throw Ni.create("duplicate-app",{appName:o})}const u=new Z5(o);for(const m of Cf.values())u.addComponent(m);const d=new Wv(t,i,u);return Eu.set(o,d),d}function Wu(n=wf){const e=Eu.get(n);if(!e&&n===wf&&jg())return Wg();if(!e)throw Ni.create("no-app",{appName:n});return e}function cn(n,e,t){let i=qv[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(u.join(" "));return}Kn(new Dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="firebase-heartbeat-database",Kv=1,pl="firebase-heartbeat-store";let Qd=null;function Gg(){return Qd||(Qd=Hg(Gv,Kv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ni.create("idb-open",{originalErrorMessage:n.message})})),Qd}async function Qv(n){try{const t=(await Gg()).transaction(pl),i=await t.objectStore(pl).get(Kg(n));return await t.done,i}catch(e){if(e instanceof Vn)$r.warn(e.message);else{const t=Ni.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(t.message)}}}async function Dm(n,e){try{const i=(await Gg()).transaction(pl,"readwrite");await i.objectStore(pl).put(e,Kg(n)),await i.done}catch(t){if(t instanceof Vn)$r.warn(t.message);else{const i=Ni.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$r.warn(i.message)}}}function Kg(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=1024,Yv=30;class Jv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new e8(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Vm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>Yv){const u=t8(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){$r.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vm(),{heartbeatsToSend:i,unsentEntries:o}=Zv(this._heartbeatsCache.heartbeats),l=xu(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return $r.warn(t),""}}}function Vm(){return new Date().toISOString().substring(0,10)}function Zv(n,e=Xv){const t=[];let i=n.slice();for(const o of n){const l=t.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),Lm(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Lm(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class e8{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zg()?Bg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Qv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Dm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Dm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lm(n){return xu(JSON.stringify({version:2,heartbeats:n})).length}function t8(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n8(n){Kn(new Dn("platform-logger",e=>new pv(e),"PRIVATE")),Kn(new Dn("heartbeat",e=>new Jv(e),"PRIVATE")),cn(_f,Pm,n),cn(_f,Pm,"esm2020"),cn("fire-js","")}n8("");var Mm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Di,Qg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function R(){}R.prototype=S.prototype,k.F=S.prototype,k.prototype=new R,k.prototype.constructor=k,k.D=function(D,N,M){for(var A=Array(arguments.length-2),He=2;He<arguments.length;He++)A[He-2]=arguments[He];return S.prototype[N].apply(D,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,R){R||(R=0);const D=Array(16);if(typeof S=="string")for(var N=0;N<16;++N)D[N]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(N=0;N<16;++N)D[N]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=k.g[0],R=k.g[1],N=k.g[2];let M=k.g[3],A;A=S+(M^R&(N^M))+D[0]+3614090360&4294967295,S=R+(A<<7&4294967295|A>>>25),A=M+(N^S&(R^N))+D[1]+3905402710&4294967295,M=S+(A<<12&4294967295|A>>>20),A=N+(R^M&(S^R))+D[2]+606105819&4294967295,N=M+(A<<17&4294967295|A>>>15),A=R+(S^N&(M^S))+D[3]+3250441966&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(M^R&(N^M))+D[4]+4118548399&4294967295,S=R+(A<<7&4294967295|A>>>25),A=M+(N^S&(R^N))+D[5]+1200080426&4294967295,M=S+(A<<12&4294967295|A>>>20),A=N+(R^M&(S^R))+D[6]+2821735955&4294967295,N=M+(A<<17&4294967295|A>>>15),A=R+(S^N&(M^S))+D[7]+4249261313&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(M^R&(N^M))+D[8]+1770035416&4294967295,S=R+(A<<7&4294967295|A>>>25),A=M+(N^S&(R^N))+D[9]+2336552879&4294967295,M=S+(A<<12&4294967295|A>>>20),A=N+(R^M&(S^R))+D[10]+4294925233&4294967295,N=M+(A<<17&4294967295|A>>>15),A=R+(S^N&(M^S))+D[11]+2304563134&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(M^R&(N^M))+D[12]+1804603682&4294967295,S=R+(A<<7&4294967295|A>>>25),A=M+(N^S&(R^N))+D[13]+4254626195&4294967295,M=S+(A<<12&4294967295|A>>>20),A=N+(R^M&(S^R))+D[14]+2792965006&4294967295,N=M+(A<<17&4294967295|A>>>15),A=R+(S^N&(M^S))+D[15]+1236535329&4294967295,R=N+(A<<22&4294967295|A>>>10),A=S+(N^M&(R^N))+D[1]+4129170786&4294967295,S=R+(A<<5&4294967295|A>>>27),A=M+(R^N&(S^R))+D[6]+3225465664&4294967295,M=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(M^S))+D[11]+643717713&4294967295,N=M+(A<<14&4294967295|A>>>18),A=R+(M^S&(N^M))+D[0]+3921069994&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^M&(R^N))+D[5]+3593408605&4294967295,S=R+(A<<5&4294967295|A>>>27),A=M+(R^N&(S^R))+D[10]+38016083&4294967295,M=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(M^S))+D[15]+3634488961&4294967295,N=M+(A<<14&4294967295|A>>>18),A=R+(M^S&(N^M))+D[4]+3889429448&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^M&(R^N))+D[9]+568446438&4294967295,S=R+(A<<5&4294967295|A>>>27),A=M+(R^N&(S^R))+D[14]+3275163606&4294967295,M=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(M^S))+D[3]+4107603335&4294967295,N=M+(A<<14&4294967295|A>>>18),A=R+(M^S&(N^M))+D[8]+1163531501&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(N^M&(R^N))+D[13]+2850285829&4294967295,S=R+(A<<5&4294967295|A>>>27),A=M+(R^N&(S^R))+D[2]+4243563512&4294967295,M=S+(A<<9&4294967295|A>>>23),A=N+(S^R&(M^S))+D[7]+1735328473&4294967295,N=M+(A<<14&4294967295|A>>>18),A=R+(M^S&(N^M))+D[12]+2368359562&4294967295,R=N+(A<<20&4294967295|A>>>12),A=S+(R^N^M)+D[5]+4294588738&4294967295,S=R+(A<<4&4294967295|A>>>28),A=M+(S^R^N)+D[8]+2272392833&4294967295,M=S+(A<<11&4294967295|A>>>21),A=N+(M^S^R)+D[11]+1839030562&4294967295,N=M+(A<<16&4294967295|A>>>16),A=R+(N^M^S)+D[14]+4259657740&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^M)+D[1]+2763975236&4294967295,S=R+(A<<4&4294967295|A>>>28),A=M+(S^R^N)+D[4]+1272893353&4294967295,M=S+(A<<11&4294967295|A>>>21),A=N+(M^S^R)+D[7]+4139469664&4294967295,N=M+(A<<16&4294967295|A>>>16),A=R+(N^M^S)+D[10]+3200236656&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^M)+D[13]+681279174&4294967295,S=R+(A<<4&4294967295|A>>>28),A=M+(S^R^N)+D[0]+3936430074&4294967295,M=S+(A<<11&4294967295|A>>>21),A=N+(M^S^R)+D[3]+3572445317&4294967295,N=M+(A<<16&4294967295|A>>>16),A=R+(N^M^S)+D[6]+76029189&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(R^N^M)+D[9]+3654602809&4294967295,S=R+(A<<4&4294967295|A>>>28),A=M+(S^R^N)+D[12]+3873151461&4294967295,M=S+(A<<11&4294967295|A>>>21),A=N+(M^S^R)+D[15]+530742520&4294967295,N=M+(A<<16&4294967295|A>>>16),A=R+(N^M^S)+D[2]+3299628645&4294967295,R=N+(A<<23&4294967295|A>>>9),A=S+(N^(R|~M))+D[0]+4096336452&4294967295,S=R+(A<<6&4294967295|A>>>26),A=M+(R^(S|~N))+D[7]+1126891415&4294967295,M=S+(A<<10&4294967295|A>>>22),A=N+(S^(M|~R))+D[14]+2878612391&4294967295,N=M+(A<<15&4294967295|A>>>17),A=R+(M^(N|~S))+D[5]+4237533241&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~M))+D[12]+1700485571&4294967295,S=R+(A<<6&4294967295|A>>>26),A=M+(R^(S|~N))+D[3]+2399980690&4294967295,M=S+(A<<10&4294967295|A>>>22),A=N+(S^(M|~R))+D[10]+4293915773&4294967295,N=M+(A<<15&4294967295|A>>>17),A=R+(M^(N|~S))+D[1]+2240044497&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~M))+D[8]+1873313359&4294967295,S=R+(A<<6&4294967295|A>>>26),A=M+(R^(S|~N))+D[15]+4264355552&4294967295,M=S+(A<<10&4294967295|A>>>22),A=N+(S^(M|~R))+D[6]+2734768916&4294967295,N=M+(A<<15&4294967295|A>>>17),A=R+(M^(N|~S))+D[13]+1309151649&4294967295,R=N+(A<<21&4294967295|A>>>11),A=S+(N^(R|~M))+D[4]+4149444226&4294967295,S=R+(A<<6&4294967295|A>>>26),A=M+(R^(S|~N))+D[11]+3174756917&4294967295,M=S+(A<<10&4294967295|A>>>22),A=N+(S^(M|~R))+D[2]+718787259&4294967295,N=M+(A<<15&4294967295|A>>>17),A=R+(M^(N|~S))+D[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,k.g[2]=k.g[2]+N&4294967295,k.g[3]=k.g[3]+M&4294967295}i.prototype.v=function(k,S){S===void 0&&(S=k.length);const R=S-this.blockSize,D=this.C;let N=this.h,M=0;for(;M<S;){if(N==0)for(;M<=R;)o(this,k,M),M+=this.blockSize;if(typeof k=="string"){for(;M<S;)if(D[N++]=k.charCodeAt(M++),N==this.blockSize){o(this,D),N=0;break}}else for(;M<S;)if(D[N++]=k[M++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=S},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;S=this.o*8;for(var R=k.length-8;R<k.length;++R)k[R]=S&255,S/=256;for(this.v(k),k=Array(16),S=0,R=0;R<4;++R)for(let D=0;D<32;D+=8)k[S++]=this.g[R]>>>D&255;return k};function l(k,S){var R=d;return Object.prototype.hasOwnProperty.call(R,k)?R[k]:R[k]=S(k)}function u(k,S){this.h=S;const R=[];let D=!0;for(let N=k.length-1;N>=0;N--){const M=k[N]|0;D&&M==S||(R[N]=M,D=!1)}this.g=R}var d={};function m(k){return-128<=k&&k<128?l(k,function(S){return new u([S|0],S<0?-1:0)}):new u([k|0],k<0?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return E;if(k<0)return F(_(-k));const S=[];let R=1;for(let D=0;k>=R;D++)S[D]=k/R|0,R*=4294967296;return new u(S,0)}function C(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return F(C(k.substring(1),S));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=_(Math.pow(S,8));let D=E;for(let M=0;M<k.length;M+=8){var N=Math.min(8,k.length-M);const A=parseInt(k.substring(M,M+N),S);N<8?(N=_(Math.pow(S,N)),D=D.j(N).add(_(A))):(D=D.j(R),D=D.add(_(A)))}return D}var E=m(0),I=m(1),L=m(16777216);n=u.prototype,n.m=function(){if(q(this))return-F(this).m();let k=0,S=1;for(let R=0;R<this.g.length;R++){const D=this.i(R);k+=(D>=0?D:4294967296+D)*S,S*=4294967296}return k},n.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(O(this))return"0";if(q(this))return"-"+F(this).toString(k);const S=_(Math.pow(k,6));var R=this;let D="";for(;;){const N=le(R,S).g;R=te(R,N.j(S));let M=((R.g.length>0?R.g[0]:R.h)>>>0).toString(k);if(R=N,O(R))return M+D;for(;M.length<6;)M="0"+M;D=M+D}},n.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function O(k){if(k.h!=0)return!1;for(let S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function q(k){return k.h==-1}n.l=function(k){return k=te(this,k),q(k)?-1:O(k)?0:1};function F(k){const S=k.g.length,R=[];for(let D=0;D<S;D++)R[D]=~k.g[D];return new u(R,~k.h).add(I)}n.abs=function(){return q(this)?F(this):this},n.add=function(k){const S=Math.max(this.g.length,k.g.length),R=[];let D=0;for(let N=0;N<=S;N++){let M=D+(this.i(N)&65535)+(k.i(N)&65535),A=(M>>>16)+(this.i(N)>>>16)+(k.i(N)>>>16);D=A>>>16,M&=65535,A&=65535,R[N]=A<<16|M}return new u(R,R[R.length-1]&-2147483648?-1:0)};function te(k,S){return k.add(F(S))}n.j=function(k){if(O(this)||O(k))return E;if(q(this))return q(k)?F(this).j(F(k)):F(F(this).j(k));if(q(k))return F(this.j(F(k)));if(this.l(L)<0&&k.l(L)<0)return _(this.m()*k.m());const S=this.g.length+k.g.length,R=[];for(var D=0;D<2*S;D++)R[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<k.g.length;N++){const M=this.i(D)>>>16,A=this.i(D)&65535,He=k.i(N)>>>16,dt=k.i(N)&65535;R[2*D+2*N]+=A*dt,J(R,2*D+2*N),R[2*D+2*N+1]+=M*dt,J(R,2*D+2*N+1),R[2*D+2*N+1]+=A*He,J(R,2*D+2*N+1),R[2*D+2*N+2]+=M*He,J(R,2*D+2*N+2)}for(k=0;k<S;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=S;k<2*S;k++)R[k]=0;return new u(R,0)};function J(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function re(k,S){this.g=k,this.h=S}function le(k,S){if(O(S))throw Error("division by zero");if(O(k))return new re(E,E);if(q(k))return S=le(F(k),S),new re(F(S.g),F(S.h));if(q(S))return S=le(k,F(S)),new re(F(S.g),S.h);if(k.g.length>30){if(q(k)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,D=S;D.l(k)<=0;)R=ye(R),D=ye(D);var N=de(R,1),M=de(D,1);for(D=de(D,2),R=de(R,2);!O(D);){var A=M.add(D);A.l(k)<=0&&(N=N.add(R),M=A),D=de(D,1),R=de(R,1)}return S=te(k,N.j(S)),new re(N,S)}for(N=E;k.l(S)>=0;){for(R=Math.max(1,Math.floor(k.m()/S.m())),D=Math.ceil(Math.log(R)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),M=_(R),A=M.j(S);q(A)||A.l(k)>0;)R-=D,M=_(R),A=M.j(S);O(M)&&(M=I),N=N.add(M),k=te(k,A)}return new re(N,k)}n.B=function(k){return le(this,k).h},n.and=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let D=0;D<S;D++)R[D]=this.i(D)&k.i(D);return new u(R,this.h&k.h)},n.or=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let D=0;D<S;D++)R[D]=this.i(D)|k.i(D);return new u(R,this.h|k.h)},n.xor=function(k){const S=Math.max(this.g.length,k.g.length),R=[];for(let D=0;D<S;D++)R[D]=this.i(D)^k.i(D);return new u(R,this.h^k.h)};function ye(k){const S=k.g.length+1,R=[];for(let D=0;D<S;D++)R[D]=k.i(D)<<1|k.i(D-1)>>>31;return new u(R,k.h)}function de(k,S){const R=S>>5;S%=32;const D=k.g.length-R,N=[];for(let M=0;M<D;M++)N[M]=S>0?k.i(M+R)>>>S|k.i(M+R+1)<<32-S:k.i(M+R);return new u(N,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Qg=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=C,Di=u}).apply(typeof Mm<"u"?Mm:typeof self<"u"?self:typeof window<"u"?window:{});var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xg,rl,Yg,uu,xf,Jg,Zg,e4;(function(){var n,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zc=="object"&&Zc];for(var y=0;y<c.length;++y){var w=c[y];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var i=t(this);function o(c,y){if(y)e:{var w=i;c=c.split(".");for(var T=0;T<c.length-1;T++){var z=c[T];if(!(z in w))break e;w=w[z]}c=c[c.length-1],T=w[c],y=y(T),y!=T&&y!=null&&e(w,c,{configurable:!0,writable:!0,value:y})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(y){var w=[],T;for(T in y)Object.prototype.hasOwnProperty.call(y,T)&&w.push([T,y[T]]);return w}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function d(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function m(c,y,w){return c.call.apply(c.bind,arguments)}function _(c,y,w){return _=m,_.apply(null,arguments)}function C(c,y){var w=Array.prototype.slice.call(arguments,1);return function(){var T=w.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function E(c,y){function w(){}w.prototype=y.prototype,c.Z=y.prototype,c.prototype=new w,c.prototype.constructor=c,c.Ob=function(T,z,H){for(var ne=Array(arguments.length-2),be=2;be<arguments.length;be++)ne[be-2]=arguments[be];return y.prototype[z].apply(T,ne)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function L(c){const y=c.length;if(y>0){const w=Array(y);for(let T=0;T<y;T++)w[T]=c[T];return w}return[]}function O(c,y){for(let T=1;T<arguments.length;T++){const z=arguments[T];var w=typeof z;if(w=w!="object"?w:z?Array.isArray(z)?"array":w:"null",w=="array"||w=="object"&&typeof z.length=="number"){w=c.length||0;const H=z.length||0;c.length=w+H;for(let ne=0;ne<H;ne++)c[w+ne]=z[ne]}else c.push(z)}}class q{constructor(y,w){this.i=y,this.j=w,this.h=0,this.g=null}get(){let y;return this.h>0?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function F(c){u.setTimeout(()=>{throw c},0)}function te(){var c=k;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class J{constructor(){this.h=this.g=null}add(y,w){const T=re.get();T.set(y,w),this.h?this.h.next=T:this.g=T,this.h=T}}var re=new q(()=>new le,c=>c.reset());class le{constructor(){this.next=this.g=this.h=null}set(y,w){this.h=y,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,de=!1,k=new J,S=()=>{const c=Promise.resolve(void 0);ye=()=>{c.then(R)}};function R(){for(var c;c=te();){try{c.h.call(c.g)}catch(w){F(w)}var y=re;y.j(c),y.h<100&&(y.h++,c.next=y.g,y.g=c)}de=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var M=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const w=()=>{};u.addEventListener("test",w,y),u.removeEventListener("test",w,y)}catch{}return c})();function A(c){return/^[\s\xa0]*$/.test(c)}function He(c,y){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,y)}E(He,N),He.prototype.init=function(c,y){const w=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget,y||(w=="mouseover"?y=c.fromElement:w=="mouseout"&&(y=c.toElement)),this.relatedTarget=y,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var dt="closure_listenable_"+(Math.random()*1e6|0),me=0;function Ce(c,y,w,T,z){this.listener=c,this.proxy=null,this.src=y,this.type=w,this.capture=!!T,this.ha=z,this.key=++me,this.da=this.fa=!1}function ee(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ce(c,y,w){for(const T in c)y.call(w,c[T],T,c)}function ie(c,y){for(const w in c)y.call(void 0,c[w],w,c)}function j(c){const y={};for(const w in c)y[w]=c[w];return y}const K="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ke(c,y){let w,T;for(let z=1;z<arguments.length;z++){T=arguments[z];for(w in T)c[w]=T[w];for(let H=0;H<K.length;H++)w=K[H],Object.prototype.hasOwnProperty.call(T,w)&&(c[w]=T[w])}}function Ie(c){this.src=c,this.g={},this.h=0}Ie.prototype.add=function(c,y,w,T,z){const H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);const ne=De(c,y,T,z);return ne>-1?(y=c[ne],w||(y.fa=!1)):(y=new Ce(y,this.src,H,!!T,z),y.fa=w,c.push(y)),y};function Ne(c,y){const w=y.type;if(w in c.g){var T=c.g[w],z=Array.prototype.indexOf.call(T,y,void 0),H;(H=z>=0)&&Array.prototype.splice.call(T,z,1),H&&(ee(y),c.g[w].length==0&&(delete c.g[w],c.h--))}}function De(c,y,w,T){for(let z=0;z<c.length;++z){const H=c[z];if(!H.da&&H.listener==y&&H.capture==!!w&&H.ha==T)return z}return-1}var qe="closure_lm_"+(Math.random()*1e6|0),Fe={};function Ge(c,y,w,T,z){if(Array.isArray(y)){for(let H=0;H<y.length;H++)Ge(c,y[H],w,T,z);return null}return w=oa(w),c&&c[dt]?c.J(y,w,d(T)?!!T.capture:!1,z):Kt(c,y,w,!1,T,z)}function Kt(c,y,w,T,z,H){if(!y)throw Error("Invalid event type");const ne=d(z)?!!z.capture:!!z;let be=Hs(c);if(be||(c[qe]=be=new Ie(c)),w=be.add(y,w,T,ne,H),w.proxy)return w;if(T=qs(),w.proxy=T,T.src=c,T.listener=w,c.addEventListener)M||(z=ne),z===void 0&&(z=!1),c.addEventListener(y.toString(),T,z);else if(c.attachEvent)c.attachEvent($s(y.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return w}function qs(){function c(w){return y.call(c.src,c.listener,w)}const y=jl;return c}function sa(c,y,w,T,z){if(Array.isArray(y))for(var H=0;H<y.length;H++)sa(c,y[H],w,T,z);else T=d(T)?!!T.capture:!!T,w=oa(w),c&&c[dt]?(c=c.i,H=String(y).toString(),H in c.g&&(y=c.g[H],w=De(y,w,T,z),w>-1&&(ee(y[w]),Array.prototype.splice.call(y,w,1),y.length==0&&(delete c.g[H],c.h--)))):c&&(c=Hs(c))&&(y=c.g[y.toString()],c=-1,y&&(c=De(y,w,T,z)),(w=c>-1?y[c]:null)&&Kr(w))}function Kr(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[dt])Ne(y.i,c);else{var w=c.type,T=c.proxy;y.removeEventListener?y.removeEventListener(w,T,c.capture):y.detachEvent?y.detachEvent($s(w),T):y.addListener&&y.removeListener&&y.removeListener(T),(w=Hs(y))?(Ne(w,c),w.h==0&&(w.src=null,y[qe]=null)):ee(c)}}}function $s(c){return c in Fe?Fe[c]:Fe[c]="on"+c}function jl(c,y){if(c.da)c=!0;else{y=new He(y,this);const w=c.listener,T=c.ha||c.src;c.fa&&Kr(c),c=w.call(T,y)}return c}function Hs(c){return c=c[qe],c instanceof Ie?c:null}var Yi="__closure_events_fn_"+(Math.random()*1e9>>>0);function oa(c){return typeof c=="function"?c:(c[Yi]||(c[Yi]=function(y){return c.handleEvent(y)}),c[Yi])}function yt(){D.call(this),this.i=new Ie(this),this.M=this,this.G=null}E(yt,D),yt.prototype[dt]=!0,yt.prototype.removeEventListener=function(c,y,w,T){sa(this,c,y,w,T)};function ft(c,y){var w,T=c.G;if(T)for(w=[];T;T=T.G)w.push(T);if(c=c.M,T=y.type||y,typeof y=="string")y=new N(y,c);else if(y instanceof N)y.target=y.target||c;else{var z=y;y=new N(T,c),ke(y,z)}z=!0;let H,ne;if(w)for(ne=w.length-1;ne>=0;ne--)H=y.g=w[ne],z=Ln(H,T,!0,y)&&z;if(H=y.g=c,z=Ln(H,T,!0,y)&&z,z=Ln(H,T,!1,y)&&z,w)for(ne=0;ne<w.length;ne++)H=y.g=w[ne],z=Ln(H,T,!1,y)&&z}yt.prototype.N=function(){if(yt.Z.N.call(this),this.i){var c=this.i;for(const y in c.g){const w=c.g[y];for(let T=0;T<w.length;T++)ee(w[T]);delete c.g[y],c.h--}}this.G=null},yt.prototype.J=function(c,y,w,T){return this.i.add(String(c),y,!1,w,T)},yt.prototype.K=function(c,y,w,T){return this.i.add(String(c),y,!0,w,T)};function Ln(c,y,w,T){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();let z=!0;for(let H=0;H<y.length;++H){const ne=y[H];if(ne&&!ne.da&&ne.capture==w){const be=ne.listener,pt=ne.ha||ne.src;ne.fa&&Ne(c.i,ne),z=be.call(pt,T)!==!1&&z}}return z&&!T.defaultPrevented}function aa(c,y){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(y)>2147483647?-1:u.setTimeout(c,y||0)}function la(c){c.g=aa(()=>{c.g=null,c.i&&(c.i=!1,la(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class Ol extends D{constructor(y,w){super(),this.m=y,this.l=w,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:la(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(c){D.call(this),this.h=c,this.g={}}E(Qr,D);var ca=[];function Ws(c){ce(c.g,function(y,w){this.g.hasOwnProperty(w)&&Kr(y)},c),c.g={}}Qr.prototype.N=function(){Qr.Z.N.call(this),Ws(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=u.JSON.stringify,Fl=u.JSON.parse,Ji=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function Yr(){}function Ul(){}var Jr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Gs(){N.call(this,"d")}E(Gs,N);function ua(){N.call(this,"c")}E(ua,N);var Mn={},Ks=null;function Zr(){return Ks=Ks||new yt}Mn.Ia="serverreachability";function Qs(c){N.call(this,Mn.Ia,c)}E(Qs,N);function Tr(c){const y=Zr();ft(y,new Qs(y))}Mn.STAT_EVENT="statevent";function Ir(c,y){N.call(this,Mn.STAT_EVENT,c),this.stat=y}E(Ir,N);function at(c){const y=Zr();ft(y,new Ir(y,c))}Mn.Ja="timingevent";function ha(c,y){N.call(this,Mn.Ja,c),this.size=y}E(ha,N);function ei(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},y)}function ti(){this.g=!0}ti.prototype.ua=function(){this.g=!1};function zl(c,y,w,T,z,H){c.info(function(){if(c.g)if(H){var ne="",be=H.split("&");for(let We=0;We<be.length;We++){var pt=be[We].split("=");if(pt.length>1){const vt=pt[0];pt=pt[1];const mn=vt.split("_");ne=mn.length>=2&&mn[1]=="type"?ne+(vt+"="+pt+"&"):ne+(vt+"=redacted&")}}}else ne=null;else ne=H;return"XMLHTTP REQ ("+T+") [attempt "+z+"]: "+y+`
`+w+`
`+ne})}function Bl(c,y,w,T,z,H,ne){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+z+"]: "+y+`
`+w+`
`+H+" "+ne})}function Yn(c,y,w,T){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Zi(c,w)+(T?" "+T:"")})}function ql(c,y){c.info(function(){return"TIMEOUT: "+y})}ti.prototype.info=function(){};function Zi(c,y){if(!c.g)return y;if(!y)return null;try{const H=JSON.parse(y);if(H){for(c=0;c<H.length;c++)if(Array.isArray(H[c])){var w=H[c];if(!(w.length<2)){var T=w[1];if(Array.isArray(T)&&!(T.length<1)){var z=T[0];if(z!="noop"&&z!="stop"&&z!="close")for(let ne=1;ne<T.length;ne++)T[ne]=""}}}}return Xr(H)}catch{return y}}var ni={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ri={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$l;function Sr(){}E(Sr,Yr),Sr.prototype.g=function(){return new XMLHttpRequest},$l=new Sr;function Jn(c){return encodeURIComponent(String(c))}function Xs(c){var y=1;c=c.split(":");const w=[];for(;y>0&&c.length;)w.push(c.shift()),y--;return c.length&&w.push(c.join(":")),w}function xn(c,y,w,T){this.j=c,this.i=y,this.l=w,this.S=T||1,this.V=new Qr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hl}function Hl(){this.i=null,this.g="",this.h=!1}var Wl={},da={};function jn(c,y,w){c.M=1,c.A=br(En(y)),c.u=w,c.R=!0,fa(c,null)}function fa(c,y){c.F=Date.now(),es(c),c.B=En(c.A);var w=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),Ea(w.i,"t",T),c.C=0,w=c.j.L,c.h=new Hl,c.g=nc(c.j,w?y:null,!c.u),c.P>0&&(c.O=new Ol(_(c.Y,c,c.g),c.P)),y=c.V,w=c.g,T=c.ba;var z="readystatechange";Array.isArray(z)||(z&&(ca[0]=z.toString()),z=ca);for(let H=0;H<z.length;H++){const ne=Ge(w,z[H],T||y.handleEvent,!1,y.h||y);if(!ne)break;y.g[ne.key]=ne}y=c.J?j(c.J):{},c.u?(c.v||(c.v="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,y)):(c.v="GET",c.g.ea(c.B,c.v,null,y)),Tr(),zl(c.i,c.v,c.B,c.l,c.S,c.u)}xn.prototype.ba=function(c){c=c.target;const y=this.O;y&&sr(c)==3?y.j():this.Y(c)},xn.prototype.Y=function(c){try{if(c==this.g)e:{const be=sr(this.g),pt=this.g.ya(),We=this.g.ca();if(!(be<3)&&(be!=3||this.g&&(this.h.h||this.g.la()||ec(this.g)))){this.K||be!=4||pt==7||(pt==8||We<=0?Tr(3):Tr(2)),Ys(this);var y=this.g.ca();this.X=y;var w=Gl(this);if(this.o=y==200,Bl(this.i,this.v,this.B,this.l,this.S,be,y),this.o){if(this.U&&!this.L){t:{if(this.g){var T,z=this.g;if((T=z.g?z.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(T)){var H=T;break t}}H=null}if(c=H)Yn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Je(this,c);else{this.o=!1,this.m=3,at(12),kr(this),ts(this);break e}}if(this.R){c=!0;let vt;for(;!this.K&&this.C<w.length;)if(vt=Ql(this,w),vt==da){be==4&&(this.m=4,at(14),c=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Wl){this.m=4,at(15),Yn(this.i,this.l,w,"[Invalid Chunk]"),c=!1;break}else Yn(this.i,this.l,vt,null),Je(this,vt);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||w.length!=0||this.h.h||(this.m=1,at(16),c=!1),this.o=this.o&&c,!c)Yn(this.i,this.l,w,"[Invalid Chunked Response]"),kr(this),ts(this);else if(w.length>0&&!this.W){this.W=!0;var ne=this.j;ne.g==this&&ne.aa&&!ne.P&&(ne.j.info("Great, no buffering proxy detected. Bytes received: "+w.length),us(ne),ne.P=!0,at(11))}}else Yn(this.i,this.l,w,null),Je(this,w);be==4&&kr(this),this.o&&!this.K&&(be==4?ao(this.j,this):(this.o=!1,es(this)))}else Ia(this.g),y==400&&w.indexOf("Unknown SID")>0?(this.m=3,at(12)):(this.m=0,at(13)),kr(this),ts(this)}}}catch{}finally{}};function Gl(c){if(!Kl(c))return c.g.la();const y=ec(c.g);if(y==="")return"";let w="";const T=y.length,z=sr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return kr(c),ts(c),"";c.h.i=new u.TextDecoder}for(let H=0;H<T;H++)c.h.h=!0,w+=c.h.i.decode(y[H],{stream:!(z&&H==T-1)});return y.length=0,c.h.g+=w,c.C=0,c.h.g}function Kl(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Ql(c,y){var w=c.C,T=y.indexOf(`
`,w);return T==-1?da:(w=Number(y.substring(w,T)),isNaN(w)?Wl:(T+=1,T+w>y.length?da:(y=y.slice(T,T+w),c.C=T+w,y)))}xn.prototype.cancel=function(){this.K=!0,kr(this)};function es(c){c.T=Date.now()+c.H,pa(c,c.H)}function pa(c,y){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ei(_(c.aa,c),y)}function Ys(c){c.D&&(u.clearTimeout(c.D),c.D=null)}xn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ql(this.i,this.B),this.M!=2&&(Tr(),at(17)),kr(this),this.m=2,ts(this)):pa(this,this.T-c)};function ts(c){c.j.I==0||c.K||ao(c.j,c)}function kr(c){Ys(c);var y=c.O;y&&typeof y.dispose=="function"&&y.dispose(),c.O=null,Ws(c.V),c.g&&(y=c.g,c.g=null,y.abort(),y.dispose())}function Je(c,y){try{var w=c.j;if(w.I!=0&&(w.g==c||ga(w.h,c))){if(!c.L&&ga(w.h,c)&&w.I==3){try{var T=w.Ba.g.parse(y)}catch{T=null}if(Array.isArray(T)&&T.length==3){var z=T;if(z[0]==0){e:if(!w.v){if(w.g)if(w.g.F+3e3<c.F)oo(w),fn(w);else break e;lr(w),at(18)}}else w.xa=z[1],0<w.xa-w.K&&z[2]<37500&&w.F&&w.A==0&&!w.C&&(w.C=ei(_(w.Va,w),6e3));ns(w.h)<=1&&w.ta&&(w.ta=void 0)}else pn(w,11)}else if((c.L||w.g==c)&&oo(w),!A(y))for(z=w.Ba.g.parse(y),y=0;y<z.length;y++){let We=z[y];const vt=We[0];if(!(vt<=w.K))if(w.K=vt,We=We[1],w.I==2)if(We[0]=="c"){w.M=We[1],w.ba=We[2];const mn=We[3];mn!=null&&(w.ka=mn,w.j.info("VER="+w.ka));const Dr=We[4];Dr!=null&&(w.za=Dr,w.j.info("SVER="+w.za));const cr=We[5];cr!=null&&typeof cr=="number"&&cr>0&&(T=1.5*cr,w.O=T,w.j.info("backChannelRequestTimeoutMs_="+T)),T=w;const ur=c.g;if(ur){const uo=ur.g?ur.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(uo){var H=T.h;H.g||uo.indexOf("spdy")==-1&&uo.indexOf("quic")==-1&&uo.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Zs(H,H.h),H.h=null))}if(T.G){const ba=ur.g?ur.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(T.wa=ba,Be(T.J,T.G,ba))}}w.I=3,w.l&&w.l.ra(),w.aa&&(w.T=Date.now()-c.F,w.j.info("Handshake RTT: "+w.T+"ms")),T=w;var ne=c;if(T.na=ka(T,T.L?T.ba:null,T.W),ne.L){rs(T.h,ne);var be=ne,pt=T.O;pt&&(be.H=pt),be.D&&(Ys(be),es(be)),T.g=ne}else Ot(T);w.i.length>0&&Nr(w)}else We[0]!="stop"&&We[0]!="close"||pn(w,7);else w.I==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?pn(w,7):io(w):We[0]!="noop"&&w.l&&w.l.qa(We),w.A=0)}}Tr(4)}catch{}}var yh=class{constructor(c,y){this.g=c,this.map=y}};function Js(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ma(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ns(c){return c.h?1:c.g?c.g.size:0}function ga(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Zs(c,y){c.g?c.g.add(y):c.h=y}function rs(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Js.prototype.cancel=function(){if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function un(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const w of c.g.values())y=y.concat(w.G);return y}return L(c.i)}var Xl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hn(c,y){if(c){c=c.split("&");for(let w=0;w<c.length;w++){const T=c[w].indexOf("=");let z,H=null;T>=0?(z=c[w].substring(0,T),H=c[w].substring(T+1)):z=c[w],y(z,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Zn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let y;c instanceof Zn?(this.l=c.l,is(this,c.j),this.o=c.o,this.g=c.g,er(this,c.u),this.h=c.h,ii(this,Ta(c.i)),this.m=c.m):c&&(y=String(c).match(Xl))?(this.l=!1,is(this,y[1]||"",!0),this.o=ss(y[2]||""),this.g=ss(y[3]||"",!0),er(this,y[4]),this.h=ss(y[5]||"",!0),ii(this,y[6]||"",!0),this.m=ss(y[7]||"")):(this.l=!1,this.i=new je(null,this.l))}Zn.prototype.toString=function(){const c=[];var y=this.j;y&&c.push(os(y,va,!0),":");var w=this.g;return(w||y=="file")&&(c.push("//"),(y=this.o)&&c.push(os(y,va,!0),"@"),c.push(Jn(w).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.u,w!=null&&c.push(":",String(w))),(w=this.h)&&(this.g&&w.charAt(0)!="/"&&c.push("/"),c.push(os(w,w.charAt(0)=="/"?as:_a,!0))),(w=this.i.toString())&&c.push("?",w),(w=this.m)&&c.push("#",os(w,wa)),c.join("")},Zn.prototype.resolve=function(c){const y=En(this);let w=!!c.j;w?is(y,c.j):w=!!c.o,w?y.o=c.o:w=!!c.g,w?y.g=c.g:w=c.u!=null;var T=c.h;if(w)er(y,c.u);else if(w=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var z=y.h.lastIndexOf("/");z!=-1&&(T=y.h.slice(0,z+1)+T)}if(z=T,z==".."||z==".")T="";else if(z.indexOf("./")!=-1||z.indexOf("/.")!=-1){T=z.lastIndexOf("/",0)==0,z=z.split("/");const H=[];for(let ne=0;ne<z.length;){const be=z[ne++];be=="."?T&&ne==z.length&&H.push(""):be==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),T&&ne==z.length&&H.push("")):(H.push(be),T=!0)}T=H.join("/")}else T=z}return w?y.h=T:w=c.i.toString()!=="",w?ii(y,Ta(c.i)):w=!!c.m,w&&(y.m=c.m),y};function En(c){return new Zn(c)}function is(c,y,w){c.j=w?ss(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function er(c,y){if(y){if(y=Number(y),isNaN(y)||y<0)throw Error("Bad port number "+y);c.u=y}else c.u=null}function ii(c,y,w){y instanceof je?(c.i=y,to(c.i,c.l)):(w||(y=os(y,vh)),c.i=new je(y,c.l))}function Be(c,y,w){c.i.set(y,w)}function br(c){return Be(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ss(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function os(c,y,w){return typeof c=="string"?(c=encodeURI(c).replace(y,ya),w&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ya(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var va=/[#\/\?@]/g,_a=/[#\?:]/g,as=/[#\?]/g,vh=/[#\?@]/g,wa=/#/g;function je(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function tr(c){c.g||(c.g=new Map,c.h=0,c.i&&hn(c.i,function(y,w){c.add(decodeURIComponent(y.replace(/\+/g," ")),w)}))}n=je.prototype,n.add=function(c,y){tr(this),this.i=null,c=nr(this,c);let w=this.g.get(c);return w||this.g.set(c,w=[]),w.push(y),this.h+=1,this};function Ca(c,y){tr(c),y=nr(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function eo(c,y){return tr(c),y=nr(c,y),c.g.has(y)}n.forEach=function(c,y){tr(this),this.g.forEach(function(w,T){w.forEach(function(z){c.call(y,z,T,this)},this)},this)};function xa(c,y){tr(c);let w=[];if(typeof y=="string")eo(c,y)&&(w=w.concat(c.g.get(nr(c,y))));else for(c=Array.from(c.g.values()),y=0;y<c.length;y++)w=w.concat(c[y]);return w}n.set=function(c,y){return tr(this),this.i=null,c=nr(this,c),eo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=xa(this,c),c.length>0?String(c[0]):y):y};function Ea(c,y,w){Ca(c,y),w.length>0&&(c.i=null,c.g.set(nr(c,y),L(w)),c.h+=w.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(let T=0;T<y.length;T++){var w=y[T];const z=Jn(w);w=xa(this,w);for(let H=0;H<w.length;H++){let ne=z;w[H]!==""&&(ne+="="+Jn(w[H])),c.push(ne)}}return this.i=c.join("&")};function Ta(c){const y=new je;return y.i=c.i,c.g&&(y.g=new Map(c.g),y.h=c.h),y}function nr(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function to(c,y){y&&!c.j&&(tr(c),c.i=null,c.g.forEach(function(w,T){const z=T.toLowerCase();T!=z&&(Ca(this,T),Ea(this,z,w))},c)),c.j=y}function rr(c,y){const w=new ti;if(u.Image){const T=new Image;T.onload=C(Pt,w,"TestLoadImage: loaded",!0,y,T),T.onerror=C(Pt,w,"TestLoadImage: error",!1,y,T),T.onabort=C(Pt,w,"TestLoadImage: abort",!1,y,T),T.ontimeout=C(Pt,w,"TestLoadImage: timeout",!1,y,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else y(!1)}function ir(c,y){const w=new ti,T=new AbortController,z=setTimeout(()=>{T.abort(),Pt(w,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:T.signal}).then(H=>{clearTimeout(z),H.ok?Pt(w,"TestPingServer: ok",!0,y):Pt(w,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),Pt(w,"TestPingServer: error",!1,y)})}function Pt(c,y,w,T,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),T(w)}catch{}}function ls(){this.g=new Ji}function Ar(c){this.i=c.Sb||null,this.h=c.ab||!1}E(Ar,Yr),Ar.prototype.g=function(){return new dn(this.i,this.h)};function dn(c,y){yt.call(this),this.H=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(dn,yt),n=dn.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=y,this.readyState=1,On(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const y={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(y.body=c),(this.H||u).fetch(new Request(this.D,y)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Yl(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Yl(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.B.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?si(this):On(this),this.readyState==3&&Yl(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,si(this))},n.Na=function(c){this.g&&(this.response=c,si(this))},n.ga=function(){this.g&&si(this)};function si(c){c.readyState=4,c.l=null,c.j=null,c.B=null,On(c)}n.setRequestHeader=function(c,y){this.A.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var w=y.next();!w.done;)w=w.value,c.push(w[0]+": "+w[1]),w=y.next();return c.join(`\r
`)};function On(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Jl(c){let y="";return ce(c,function(w,T){y+=T,y+=":",y+=w,y+=`\r
`}),y}function no(c,y,w){e:{for(T in w){var T=!1;break e}T=!0}T||(w=Jl(w),typeof c=="string"?w!=null&&Jn(w):Be(c,y,w))}function Ke(c){yt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(Ke,yt);var Zl=/^https?$/i,_h=["POST","PUT"];n=Ke.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,y,w,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$l.g(),this.g.onreadystatechange=I(_(this.Ca,this));try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(H){oi(this,H);return}if(c=w||"",w=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var z in T)w.set(z,T[z]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const H of T.keys())w.set(H,T.get(H));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(w.keys()).find(H=>H.toLowerCase()=="content-type"),z=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(_h,y,void 0)>=0)||T||z||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of w)this.g.setRequestHeader(H,ne);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(H){oi(this,H)}};function oi(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.o=5,ai(c),Pr(c)}function ai(c){c.A||(c.A=!0,ft(c,"complete"),ft(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,ft(this,"complete"),ft(this,"abort"),Pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pr(this,!0)),Ke.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Rr(this):this.Xa())},n.Xa=function(){Rr(this)};function Rr(c){if(c.h&&typeof l<"u"){if(c.v&&sr(c)==4)setTimeout(c.Ca.bind(c),0);else if(ft(c,"readystatechange"),sr(c)==4){c.h=!1;try{const H=c.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var w;if(!(w=y)){var T;if(T=H===0){let ne=String(c.D).match(Xl)[1]||null;!ne&&u.self&&u.self.location&&(ne=u.self.location.protocol.slice(0,-1)),T=!Zl.test(ne?ne.toLowerCase():"")}w=T}if(w)ft(c,"complete"),ft(c,"success");else{c.o=6;try{var z=sr(c)>2?c.g.statusText:""}catch{z=""}c.l=z+" ["+c.ca()+"]",ai(c)}}finally{Pr(c)}}}}function Pr(c,y){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const w=c.g;c.g=null,y||ft(c,"ready");try{w.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function sr(c){return c.g?c.g.readyState:0}n.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Fl(y)}};function ec(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ia(c){const y={};c=(c.g&&sr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(A(c[T]))continue;var w=Xs(c[T]);const z=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const H=y[z]||[];y[z]=H,H.push(w)}ie(y,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function or(c,y,w){return w&&w.internalChannelParams&&w.internalChannelParams[c]||y}function ro(c){this.za=0,this.i=[],this.j=new ti,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=or("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=or("baseRetryDelayMs",5e3,c),this.Za=or("retryDelaySeedMs",1e4,c),this.Ta=or("forwardChannelMaxRetries",2,c),this.va=or("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Js(c&&c.concurrentRequestLimit),this.Ba=new ls,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ro.prototype,n.ka=8,n.I=1,n.connect=function(c,y,w,T){at(0),this.W=c,this.H=y||{},w&&T!==void 0&&(this.H.OSID=w,this.H.OAID=T),this.F=this.X,this.J=ka(this,null,this.W),Nr(this)};function io(c){if(so(c),c.I==3){var y=c.V++,w=En(c.J);if(Be(w,"SID",c.M),Be(w,"RID",y),Be(w,"TYPE","terminate"),ar(c,w),y=new xn(c,c.j,y),y.M=2,y.A=br(En(w)),w=!1,u.navigator&&u.navigator.sendBeacon)try{w=u.navigator.sendBeacon(y.A.toString(),"")}catch{}!w&&u.Image&&(new Image().src=y.A,w=!0),w||(y.g=nc(y.j,null),y.g.ea(y.A)),y.F=Date.now(),es(y)}hs(c)}function fn(c){c.g&&(us(c),c.g.cancel(),c.g=null)}function so(c){fn(c),c.v&&(u.clearTimeout(c.v),c.v=null),oo(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Nr(c){if(!ma(c.h)&&!c.m){c.m=!0;var y=c.Ea;ye||S(),de||(ye(),de=!0),k.add(y,c),c.D=0}}function tc(c,y){return ns(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=y.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ei(_(c.Ea,c,y),lo(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const z=new xn(this,this.j,c);let H=this.o;if(this.U&&(H?(H=j(H),ke(H,this.U)):H=this.U),this.u!==null||this.R||(z.J=H,H=null),this.S)e:{for(var y=0,w=0;w<this.i.length;w++){t:{var T=this.i[w];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(y+=T,y>4096){y=w;break e}if(y===4096||w===this.i.length-1){y=w+1;break e}}y=1e3}else y=1e3;y=Sa(this,z,y),w=En(this.J),Be(w,"RID",c),Be(w,"CVER",22),this.G&&Be(w,"X-HTTP-Session-Id",this.G),ar(this,w),H&&(this.R?y="headers="+Jn(Jl(H))+"&"+y:this.u&&no(w,this.u,H)),Zs(this.h,z),this.Ra&&Be(w,"TYPE","init"),this.S?(Be(w,"$req",y),Be(w,"SID","null"),z.U=!0,jn(z,w,null)):jn(z,w,y),this.I=2}}else this.I==3&&(c?cs(this,c):this.i.length==0||ma(this.h)||cs(this))};function cs(c,y){var w;y?w=y.l:w=c.V++;const T=En(c.J);Be(T,"SID",c.M),Be(T,"RID",w),Be(T,"AID",c.K),ar(c,T),c.u&&c.o&&no(T,c.u,c.o),w=new xn(c,c.j,w,c.D+1),c.u===null&&(w.J=c.o),y&&(c.i=y.G.concat(c.i)),y=Sa(c,w,1e3),w.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Zs(c.h,w),jn(w,T,y)}function ar(c,y){c.H&&ce(c.H,function(w,T){Be(y,T,w)}),c.l&&ce({},function(w,T){Be(y,T,w)})}function Sa(c,y,w){w=Math.min(c.i.length,w);const T=c.l?_(c.l.Ka,c.l,c):null;e:{var z=c.i;let be=-1;for(;;){const pt=["count="+w];be==-1?w>0?(be=z[0].g,pt.push("ofs="+be)):be=0:pt.push("ofs="+be);let We=!0;for(let vt=0;vt<w;vt++){var H=z[vt].g;const mn=z[vt].map;if(H-=be,H<0)be=Math.max(0,z[vt].g-100),We=!1;else try{H="req"+H+"_"||"";try{var ne=mn instanceof Map?mn:Object.entries(mn);for(const[Dr,cr]of ne){let ur=cr;d(cr)&&(ur=Xr(cr)),pt.push(H+Dr+"="+encodeURIComponent(ur))}}catch(Dr){throw pt.push(H+"type="+encodeURIComponent("_badmap")),Dr}}catch{T&&T(mn)}}if(We){ne=pt.join("&");break e}}ne=void 0}return c=c.i.splice(0,w),y.G=c,ne}function Ot(c){if(!c.g&&!c.v){c.Y=1;var y=c.Da;ye||S(),de||(ye(),de=!0),k.add(y,c),c.A=0}}function lr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ei(_(c.Da,c),lo(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,li(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ei(_(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,at(10),fn(this),li(this))};function us(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function li(c){c.g=new xn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var y=En(c.na);Be(y,"RID","rpc"),Be(y,"SID",c.M),Be(y,"AID",c.K),Be(y,"CI",c.F?"0":"1"),!c.F&&c.ia&&Be(y,"TO",c.ia),Be(y,"TYPE","xmlhttp"),ar(c,y),c.u&&c.o&&no(y,c.u,c.o),c.O&&(c.g.H=c.O);var w=c.g;c=c.ba,w.M=1,w.A=br(En(y)),w.u=null,w.R=!0,fa(w,c)}n.Va=function(){this.C!=null&&(this.C=null,fn(this),lr(this),at(19))};function oo(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function ao(c,y){var w=null;if(c.g==y){oo(c),us(c),c.g=null;var T=2}else if(ga(c.h,y))w=y.G,rs(c.h,y),T=1;else return;if(c.I!=0){if(y.o)if(T==1){w=y.u?y.u.length:0,y=Date.now()-y.F;var z=c.D;T=Zr(),ft(T,new ha(T,w)),Nr(c)}else Ot(c);else if(z=y.m,z==3||z==0&&y.X>0||!(T==1&&tc(c,y)||T==2&&lr(c)))switch(w&&w.length>0&&(y=c.h,y.i=y.i.concat(w)),z){case 1:pn(c,5);break;case 4:pn(c,10);break;case 3:pn(c,6);break;default:pn(c,2)}}}function lo(c,y){let w=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(w*=2),w*y}function pn(c,y){if(c.j.info("Error code "+y),y==2){var w=_(c.bb,c),T=c.Ua;const z=!T;T=new Zn(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||is(T,"https"),br(T),z?rr(T.toString(),w):ir(T.toString(),w)}else at(2);c.I=0,c.l&&c.l.pa(y),hs(c),so(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function hs(c){if(c.I=0,c.ja=[],c.l){const y=un(c.h);(y.length!=0||c.i.length!=0)&&(O(c.ja,y),O(c.ja,c.i),c.h.i.length=0,L(c.i),c.i.length=0),c.l.oa()}}function ka(c,y,w){var T=w instanceof Zn?En(w):new Zn(w);if(T.g!="")y&&(T.g=y+"."+T.g),er(T,T.u);else{var z=u.location;T=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;const H=new Zn(null);T&&is(H,T),y&&(H.g=y),z&&er(H,z),w&&(H.h=w),T=H}return w=c.G,y=c.wa,w&&y&&Be(T,w,y),Be(T,"VER",c.ka),ar(c,T),T}function nc(c,y,w){if(y&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Aa&&!c.ma?new Ke(new Ar({ab:w})):new Ke(c.ma),y.Fa(c.L),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rc(){}n=rc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function co(){}co.prototype.g=function(c,y){return new Nt(c,y)};function Nt(c,y){yt.call(this),this.g=new ro(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.sa&&(c?c["X-WebChannel-Client-Profile"]=y.sa:c={"X-WebChannel-Client-Profile":y.sa}),this.g.U=c,(c=y&&y.Qb)&&!A(c)&&(this.g.u=c),this.A=y&&y.supportsCrossDomainXhr||!1,this.v=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!A(y)&&(this.g.G=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new ci(this)}E(Nt,yt),Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){io(this.g)},Nt.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var w={};w.__data__=c,c=w}else this.v&&(w={},w.__data__=Xr(c),c=w);y.i.push(new yh(y.Ya++,c)),y.I==3&&Nr(y)},Nt.prototype.N=function(){this.g.l=null,delete this.j,io(this.g),delete this.g,Nt.Z.N.call(this)};function ic(c){Gs.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const w in y){c=w;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}E(ic,Gs);function sc(){ua.call(this),this.status=1}E(sc,ua);function ci(c){this.g=c}E(ci,rc),ci.prototype.ra=function(){ft(this.g,"a")},ci.prototype.qa=function(c){ft(this.g,new ic(c))},ci.prototype.pa=function(c){ft(this.g,new sc)},ci.prototype.oa=function(){ft(this.g,"b")},co.prototype.createWebChannel=co.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,e4=function(){return new co},Zg=function(){return Zr()},Jg=Mn,xf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ni.NO_ERROR=0,ni.TIMEOUT=8,ni.HTTP_ERROR=6,uu=ni,ri.COMPLETE="complete",Yg=ri,Ul.EventType=Jr,Jr.OPEN="a",Jr.CLOSE="b",Jr.ERROR="c",Jr.MESSAGE="d",yt.prototype.listen=yt.prototype.J,rl=Ul,Ke.prototype.listenOnce=Ke.prototype.K,Ke.prototype.getLastError=Ke.prototype.Ha,Ke.prototype.getLastErrorCode=Ke.prototype.ya,Ke.prototype.getStatus=Ke.prototype.ca,Ke.prototype.getResponseJson=Ke.prototype.La,Ke.prototype.getResponseText=Ke.prototype.la,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Fa,Xg=Ke}).apply(typeof Zc<"u"?Zc:typeof self<"u"?self:typeof window<"u"?window:{});const jm="@firebase/firestore",Om="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Hu("@firebase/firestore");function No(){return As.logLevel}function ae(n,...e){if(As.logLevel<=Ve.DEBUG){const t=e.map(e1);As.debug(`Firestore (${Jo}): ${n}`,...t)}}function Hr(n,...e){if(As.logLevel<=Ve.ERROR){const t=e.map(e1);As.error(`Firestore (${Jo}): ${n}`,...t)}}function Ho(n,...e){if(As.logLevel<=Ve.WARN){const t=e.map(e1);As.warn(`Firestore (${Jo}): ${n}`,...t)}}function e1(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,t4(n,i,t)}function t4(n,e,t){let i=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Hr(i),new Error(i)}function $e(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||t4(e,o,i)}function Ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Vn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r8{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ht.UNAUTHENTICATED)))}shutdown(){}}class i8{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class s8{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0,42304);let i=this.i;const o=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new Vi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Vi,e.enqueueRetryable((()=>o(this.currentUser)))};const u=()=>{const m=l;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},d=m=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((m=>d(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Vi)}}),0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($e(typeof i.accessToken=="string",31837,{l:i}),new n4(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string",2055,{h:e}),new Ht(e)}}class o8{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class a8{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new o8(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l8{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0,3512);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Fm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?($e(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Fm(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c8(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=c8(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Le(n,e){return n<e?-1:n>e?1:0}function Ef(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return Xd(o)===Xd(l)?Le(o,l):Xd(o)?1:-1}return Le(n.length,e.length)}const u8=55296,h8=57343;function Xd(n){const e=n.charCodeAt(0);return e>=u8&&e<=h8}function Wo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="__name__";class mr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Ee(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mr?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=mr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Le(e.length,t.length)}static compareSegments(e,t){const i=mr.isNumericId(e),o=mr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?mr.extractNumericId(e).compare(mr.extractNumericId(t)):Ef(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Di.fromString(e.substring(4,e.length-2))}}class Xe extends mr{construct(e,t,i){return new Xe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(W.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Xe(t)}static emptyPath(){return new Xe([])}}const d8=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends mr{construct(e,t,i){return new Mt(e,t,i)}static isValidIdentifier(e){return d8.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Um}static keyField(){return new Mt([Um])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new se(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new se(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(i+=d,o++):(l(),o++)}if(l(),u)throw new se(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(Xe.fromString(e))}static fromName(e){return new ve(Xe.fromString(e).popFirst(5))}static empty(){return new ve(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new Xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(n,e,t){if(!t)throw new se(W.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function f8(n,e,t,i){if(e===!0&&i===!0)throw new se(W.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zm(n){if(!ve.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bm(n){if(ve.isDocumentKey(n))throw new se(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function i4(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Gu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee(12329,{type:typeof n})}function Rs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gu(n);throw new se(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,e){const t={typeString:n};return e&&(t.value=e),t}function kl(n,e){if(!i4(n))throw new se(W.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const u=n[i];if(o&&typeof u!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&u!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new se(W.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=-62135596800,$m=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*$m);return new tt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qm)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$m}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kl(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:xt("string",tt._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new tt(0,0))}static max(){return new Se(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=-1;function p8(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(i===1e9?new tt(t+1,0):new tt(t,i));return new Fi(o,ve.empty(),e)}function m8(n){return new Fi(n.readTime,n.key,ml)}class Fi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Fi(Se.min(),ve.empty(),ml)}static max(){return new Fi(Se.max(),ve.empty(),ml)}}function g8(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y8="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class v8{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n){if(n.code!==W.FAILED_PRECONDITION||n.message!==y8)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,u=!1;e.forEach((d=>{++o,d.next((()=>{++l,u&&l===o&&t()}),(m=>i(m)))})),u=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,u=new Array(l);let d=0;for(let m=0;m<l;m++){const _=m;t(e[_]).next((C=>{u[_]=C,++d,d===l&&i(u)}),(C=>o(C)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function _8(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ea(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ku.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=-1;function Qu(n){return n==null}function Tu(n){return n===0&&1/n==-1/0}function w8(n){return typeof n=="number"&&Number.isInteger(n)&&!Tu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4="";function C8(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Hm(e)),e=x8(n.get(t),e);return Hm(e)}function x8(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case s4:t+="";break;default:t+=l}}return t}function Hm(n){return n+s4+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ki(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function o4(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gm(this.data.getIterator())}getIteratorFrom(e){return new Gm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class Gm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new _n([])}unionWith(e){let t=new St(Mt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new _n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new a4("Invalid base64 string: "+l):l}})(e);return new jt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let u=0;u<o.length;++u)l+=String.fromCharCode(o[u]);return l})(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const E8=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(n){if($e(!!n,39018),typeof n=="string"){let e=0;const t=E8.exec(n);if($e(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:gt(n.seconds),nanos:gt(n.nanos)}}function gt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zi(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4="server_timestamp",c4="__type__",u4="__previous_value__",h4="__local_write_time__";function r1(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[c4])==null?void 0:i.stringValue)===l4}function Xu(n){const e=n.mapValue.fields[u4];return r1(e)?Xu(e):e}function gl(n){const e=Ui(n.mapValue.fields[h4].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T8{constructor(e,t,i,o,l,u,d,m,_,C){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=_,this.isUsingEmulator=C}}const Iu="(default)";class yl{constructor(e,t){this.projectId=e,this.database=t||Iu}static empty(){return new yl("","")}get isDefaultDatabase(){return this.database===Iu}isEqual(e){return e instanceof yl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4="__type__",I8="__max__",tu={mapValue:{}},f4="__vector__",Su="value";function Bi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?r1(n)?4:k8(n)?9007199254740991:S8(n)?10:11:Ee(28295,{value:n})}function Er(n,e){if(n===e)return!0;const t=Bi(n);if(t!==Bi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gl(n).isEqual(gl(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const u=Ui(o.timestampValue),d=Ui(l.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return zi(o.bytesValue).isEqual(zi(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return gt(o.geoPointValue.latitude)===gt(l.geoPointValue.latitude)&&gt(o.geoPointValue.longitude)===gt(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return gt(o.integerValue)===gt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const u=gt(o.doubleValue),d=gt(l.doubleValue);return u===d?Tu(u)===Tu(d):isNaN(u)&&isNaN(d)}return!1})(n,e);case 9:return Wo(n.arrayValue.values||[],e.arrayValue.values||[],Er);case 10:case 11:return(function(o,l){const u=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Wm(u)!==Wm(d))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(d[m]===void 0||!Er(u[m],d[m])))return!1;return!0})(n,e);default:return Ee(52216,{left:n})}}function vl(n,e){return(n.values||[]).find((t=>Er(t,e)))!==void 0}function Go(n,e){if(n===e)return 0;const t=Bi(n),i=Bi(e);if(t!==i)return Le(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return(function(l,u){const d=gt(l.integerValue||l.doubleValue),m=gt(u.integerValue||u.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1})(n,e);case 3:return Km(n.timestampValue,e.timestampValue);case 4:return Km(gl(n),gl(e));case 5:return Ef(n.stringValue,e.stringValue);case 6:return(function(l,u){const d=zi(l),m=zi(u);return d.compareTo(m)})(n.bytesValue,e.bytesValue);case 7:return(function(l,u){const d=l.split("/"),m=u.split("/");for(let _=0;_<d.length&&_<m.length;_++){const C=Le(d[_],m[_]);if(C!==0)return C}return Le(d.length,m.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,u){const d=Le(gt(l.latitude),gt(u.latitude));return d!==0?d:Le(gt(l.longitude),gt(u.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Qm(n.arrayValue,e.arrayValue);case 10:return(function(l,u){var I,L,O,q;const d=l.fields||{},m=u.fields||{},_=(I=d[Su])==null?void 0:I.arrayValue,C=(L=m[Su])==null?void 0:L.arrayValue,E=Le(((O=_==null?void 0:_.values)==null?void 0:O.length)||0,((q=C==null?void 0:C.values)==null?void 0:q.length)||0);return E!==0?E:Qm(_,C)})(n.mapValue,e.mapValue);case 11:return(function(l,u){if(l===tu.mapValue&&u===tu.mapValue)return 0;if(l===tu.mapValue)return 1;if(u===tu.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),_=u.fields||{},C=Object.keys(_);m.sort(),C.sort();for(let E=0;E<m.length&&E<C.length;++E){const I=Ef(m[E],C[E]);if(I!==0)return I;const L=Go(d[m[E]],_[C[E]]);if(L!==0)return L}return Le(m.length,C.length)})(n.mapValue,e.mapValue);default:throw Ee(23264,{he:t})}}function Km(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=Ui(n),i=Ui(e),o=Le(t.seconds,i.seconds);return o!==0?o:Le(t.nanos,i.nanos)}function Qm(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Go(t[o],i[o]);if(l)return l}return Le(t.length,i.length)}function Ko(n){return Tf(n)}function Tf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=Ui(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return zi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ve.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Tf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const u of i)l?l=!1:o+=",",o+=`${u}:${Tf(t.fields[u])}`;return o+"}"})(n.mapValue):Ee(61005,{value:n})}function hu(n){switch(Bi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xu(n);return e?16+hu(e):16;case 5:return 2*n.stringValue.length;case 6:return zi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+hu(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return Ki(i.fields,((l,u)=>{o+=l.length+hu(u)})),o})(n.mapValue);default:throw Ee(13486,{value:n})}}function Xm(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function If(n){return!!n&&"integerValue"in n}function i1(n){return!!n&&"arrayValue"in n}function Ym(n){return!!n&&"nullValue"in n}function Jm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function du(n){return!!n&&"mapValue"in n}function S8(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[d4])==null?void 0:i.stringValue)===f4}function al(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ki(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=al(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=al(n.arrayValue.values[t]);return e}return{...n}}function k8(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===I8}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=al(t)}setAll(e){let t=Mt.emptyPath(),i={},o=[];e.forEach(((u,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,i,o),i={},o=[],t=d.popLast()}u?i[d.lastSegment()]=al(u):o.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ki(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new ln(al(this.value))}}function p4(n){const e=[];return Ki(n.fields,((t,i)=>{const o=new Mt([t]);if(du(i)){const l=p4(i.mapValue).fields;if(l.length===0)e.push(o);else for(const u of l)e.push(o.child(u))}else e.push(o)})),new _n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,i,o,l,u,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=u,this.documentState=d}static newInvalidDocument(e){return new Wt(e,0,Se.min(),Se.min(),Se.min(),ln.empty(),0)}static newFoundDocument(e,t,i,o){return new Wt(e,1,t,Se.min(),i,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Se.min(),Se.min(),ln.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Se.min(),Se.min(),ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.position=e,this.inclusive=t}}function Zm(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],u=n.position[o];if(l.field.isKeyField()?i=ve.comparator(ve.fromName(u.referenceValue),t.key):i=Go(u,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function e2(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Er(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t="asc"){this.field=e,this.dir=t}}function b8(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{}class Ct extends m4{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new R8(e,t,i):t==="array-contains"?new D8(e,i):t==="in"?new V8(e,i):t==="not-in"?new L8(e,i):t==="array-contains-any"?new M8(e,i):new Ct(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new P8(e,i):new N8(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Go(t,this.value)):t!==null&&Bi(this.value)===Bi(t)&&this.matchesComparison(Go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends m4{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Qn(e,t)}matches(e){return g4(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function g4(n){return n.op==="and"}function y4(n){return A8(n)&&g4(n)}function A8(n){for(const e of n.filters)if(e instanceof Qn)return!1;return!0}function Sf(n){if(n instanceof Ct)return n.field.canonicalString()+n.op.toString()+Ko(n.value);if(y4(n))return n.filters.map((e=>Sf(e))).join(",");{const e=n.filters.map((t=>Sf(t))).join(",");return`${n.op}(${e})`}}function v4(n,e){return n instanceof Ct?(function(i,o){return o instanceof Ct&&i.op===o.op&&i.field.isEqual(o.field)&&Er(i.value,o.value)})(n,e):n instanceof Qn?(function(i,o){return o instanceof Qn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,u,d)=>l&&v4(u,o.filters[d])),!0):!1})(n,e):void Ee(19439)}function _4(n){return n instanceof Ct?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ko(t.value)}`})(n):n instanceof Qn?(function(t){return t.op.toString()+" {"+t.getFilters().map(_4).join(" ,")+"}"})(n):"Filter"}class R8 extends Ct{constructor(e,t,i){super(e,t,i),this.key=ve.fromName(i.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class P8 extends Ct{constructor(e,t){super(e,"in",t),this.keys=w4("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class N8 extends Ct{constructor(e,t){super(e,"not-in",t),this.keys=w4("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function w4(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>ve.fromName(i.referenceValue)))}class D8 extends Ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return i1(t)&&vl(t.arrayValue,this.value)}}class V8 extends Ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&vl(this.value.arrayValue,t)}}class L8 extends Ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!vl(this.value.arrayValue,t)}}class M8 extends Ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!i1(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>vl(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j8{constructor(e,t=null,i=[],o=[],l=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=u,this.endAt=d,this.Te=null}}function t2(n,e=null,t=[],i=[],o=null,l=null,u=null){return new j8(n,e,t,i,o,l,u)}function s1(n){const e=Ae(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Sf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Qu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ko(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ko(i))).join(",")),e.Te=t}return e.Te}function o1(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!b8(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!v4(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!e2(n.startAt,e.startAt)&&e2(n.endAt,e.endAt)}function kf(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t=null,i=[],o=[],l=null,u="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=u,this.startAt=d,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function O8(n,e,t,i,o,l,u,d){return new ta(n,e,t,i,o,l,u,d)}function C4(n){return new ta(n)}function n2(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function x4(n){return n.collectionGroup!==null}function ll(n){const e=Ae(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ie.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new St(Mt.comparator);return u.filters.forEach((m=>{m.getFlattenedFilters().forEach((_=>{_.isInequality()&&(d=d.add(_.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ie.push(new _l(l,i))})),t.has(Mt.keyField().canonicalString())||e.Ie.push(new _l(Mt.keyField(),i))}return e.Ie}function yr(n){const e=Ae(n);return e.Ee||(e.Ee=F8(e,ll(n))),e.Ee}function F8(n,e){if(n.limitType==="F")return t2(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new _l(o.field,l)}));const t=n.endAt?new ku(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ku(n.startAt.position,n.startAt.inclusive):null;return t2(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function bf(n,e){const t=n.filters.concat([e]);return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Af(n,e,t){return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yu(n,e){return o1(yr(n),yr(e))&&n.limitType===e.limitType}function E4(n){return`${s1(yr(n))}|lt:${n.limitType}`}function Do(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>_4(o))).join(", ")}]`),Qu(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Ko(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Ko(o))).join(",")),`Target(${i})`})(yr(n))}; limitType=${n.limitType})`}function Ju(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ve.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of ll(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(u,d,m){const _=Zm(u,d,m);return u.inclusive?_<=0:_<0})(i.startAt,ll(i),o)||i.endAt&&!(function(u,d,m){const _=Zm(u,d,m);return u.inclusive?_>=0:_>0})(i.endAt,ll(i),o))})(n,e)}function U8(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function T4(n){return(e,t)=>{let i=!1;for(const o of ll(n)){const l=z8(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function z8(n,e,t){const i=n.field.isKeyField()?ve.comparator(e.key,t.key):(function(l,u,d){const m=u.data.field(l),_=d.data.field(l);return m!==null&&_!==null?Go(m,_):Ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return o4(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B8=new ot(ve.comparator);function Wr(){return B8}const I4=new ot(ve.comparator);function il(...n){let e=I4;for(const t of n)e=e.insert(t.key,t);return e}function S4(n){let e=I4;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ss(){return cl()}function k4(){return cl()}function cl(){return new Fs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const q8=new ot(ve.comparator),$8=new St(ve.comparator);function Me(...n){let e=$8;for(const t of n)e=e.add(t);return e}const H8=new St(Le);function W8(){return H8}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tu(e)?"-0":e}}function b4(n){return{integerValue:""+n}}function G8(n,e){return w8(e)?b4(e):a1(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this._=void 0}}function K8(n,e,t){return n instanceof wl?(function(o,l){const u={fields:{[c4]:{stringValue:l4},[h4]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&r1(l)&&(l=Xu(l)),l&&(u.fields[u4]=l),{mapValue:u}})(t,e):n instanceof Cl?R4(n,e):n instanceof xl?P4(n,e):(function(o,l){const u=A4(o,l),d=r2(u)+r2(o.Ae);return If(u)&&If(o.Ae)?b4(d):a1(o.serializer,d)})(n,e)}function Q8(n,e,t){return n instanceof Cl?R4(n,e):n instanceof xl?P4(n,e):t}function A4(n,e){return n instanceof bu?(function(i){return If(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class wl extends Zu{}class Cl extends Zu{constructor(e){super(),this.elements=e}}function R4(n,e){const t=N4(e);for(const i of n.elements)t.some((o=>Er(o,i)))||t.push(i);return{arrayValue:{values:t}}}class xl extends Zu{constructor(e){super(),this.elements=e}}function P4(n,e){let t=N4(e);for(const i of n.elements)t=t.filter((o=>!Er(o,i)));return{arrayValue:{values:t}}}class bu extends Zu{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function r2(n){return gt(n.integerValue||n.doubleValue)}function N4(n){return i1(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X8{constructor(e,t){this.field=e,this.transform=t}}function Y8(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof Cl&&o instanceof Cl||i instanceof xl&&o instanceof xl?Wo(i.elements,o.elements,Er):i instanceof bu&&o instanceof bu?Er(i.Ae,o.Ae):i instanceof wl&&o instanceof wl})(n.transform,e.transform)}class J8{constructor(e,t){this.version=e,this.transformResults=t}}class Gn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class eh{}function D4(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new l1(n.key,Gn.none()):new bl(n.key,n.data,Gn.none());{const t=n.data,i=ln.empty();let o=new St(Mt.comparator);for(let l of e.fields)if(!o.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?i.delete(l):i.set(l,u),o=o.add(l)}return new Qi(n.key,i,new _n(o.toArray()),Gn.none())}}function Z8(n,e,t){n instanceof bl?(function(o,l,u){const d=o.value.clone(),m=s2(o.fieldTransforms,l,u.transformResults);d.setAll(m),l.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(n,e,t):n instanceof Qi?(function(o,l,u){if(!fu(o.precondition,l))return void l.convertToUnknownDocument(u.version);const d=s2(o.fieldTransforms,l,u.transformResults),m=l.data;m.setAll(V4(o)),m.setAll(d),l.convertToFoundDocument(u.version,m).setHasCommittedMutations()})(n,e,t):(function(o,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()})(0,e,t)}function ul(n,e,t,i){return n instanceof bl?(function(l,u,d,m){if(!fu(l.precondition,u))return d;const _=l.value.clone(),C=o2(l.fieldTransforms,m,u);return _.setAll(C),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null})(n,e,t,i):n instanceof Qi?(function(l,u,d,m){if(!fu(l.precondition,u))return d;const _=o2(l.fieldTransforms,m,u),C=u.data;return C.setAll(V4(l)),C.setAll(_),u.convertToFoundDocument(u.version,C).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(l,u,d){return fu(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d})(n,e,t)}function e9(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=A4(i.transform,o||null);l!=null&&(t===null&&(t=ln.empty()),t.set(i.field,l))}return t||null}function i2(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Wo(i,o,((l,u)=>Y8(l,u)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bl extends eh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qi extends eh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function V4(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function s2(n,e,t){const i=new Map;$e(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let o=0;o<t.length;o++){const l=n[o],u=l.transform,d=e.data.field(l.field);i.set(l.field,Q8(u,d,t[o]))}return i}function o2(n,e,t){const i=new Map;for(const o of n){const l=o.transform,u=t.data.field(o.field);i.set(o.field,K8(l,u,e))}return i}class l1 extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t9 extends eh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Z8(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=k4();return this.mutations.forEach((o=>{const l=e.get(o.key),u=l.overlayedDocument;let d=this.applyToLocalView(u,l.mutatedFields);d=t.has(o.key)?null:d;const m=D4(u,d);m!==null&&i.set(o.key,m),u.isValidDocument()||u.convertToNoDocument(Se.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Me())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,((t,i)=>i2(t,i)))&&Wo(this.baseMutations,e.baseMutations,((t,i)=>i2(t,i)))}}class c1{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){$e(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return q8})();const l=e.mutations;for(let u=0;u<l.length;u++)o=o.insert(l[u].key,i[u].version);return new c1(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r9{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt,Oe;function s9(n){switch(n){case W.OK:return Ee(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return Ee(15467,{code:n})}}function L4(n){if(n===void 0)return Hr("GRPC error has no .code"),W.UNKNOWN;switch(n){case wt.OK:return W.OK;case wt.CANCELLED:return W.CANCELLED;case wt.UNKNOWN:return W.UNKNOWN;case wt.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case wt.INTERNAL:return W.INTERNAL;case wt.UNAVAILABLE:return W.UNAVAILABLE;case wt.UNAUTHENTICATED:return W.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case wt.NOT_FOUND:return W.NOT_FOUND;case wt.ALREADY_EXISTS:return W.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return W.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case wt.ABORTED:return W.ABORTED;case wt.OUT_OF_RANGE:return W.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return W.UNIMPLEMENTED;case wt.DATA_LOSS:return W.DATA_LOSS;default:return Ee(39323,{code:n})}}(Oe=wt||(wt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o9(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a9=new Di([4294967295,4294967295],0);function a2(n){const e=o9().encode(n),t=new Qg;return t.update(e),new Uint8Array(t.digest())}function l2(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Di([t,i],0),new Di([o,l],0)]}class u1{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new sl(`Invalid padding: ${t}`);if(i<0)throw new sl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new sl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new sl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Di.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Di.fromNumber(i)));return o.compare(a9)===1&&(o=new Di([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=a2(e),[i,o]=l2(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(i,o,l);if(!this.we(u))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new u1(l,o,t);return i.forEach((d=>u.insert(d))),u}insert(e){if(this.ge===0)return;const t=a2(e),[i,o]=l2(t);for(let l=0;l<this.hashCount;l++){const u=this.ye(i,o,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class sl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new th(Se.min(),o,new ot(Le),Wr(),Me())}}class Al{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Al(i,t,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class M4{constructor(e,t){this.targetId=e,this.Ce=t}}class j4{constructor(e,t,i=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class c2{constructor(){this.ve=0,this.Fe=u2(),this.Me=jt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Me(),t=Me(),i=Me();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee(38017,{changeType:l})}})),new Al(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=u2()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,$e(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class l9{constructor(e){this.Ge=e,this.ze=new Map,this.je=Wr(),this.Je=nu(),this.He=nu(),this.Ye=new ot(Le)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.Ke(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.Ke(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.We(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(kf(l))if(i===0){const u=new ve(l.path);this.et(t,u,Wt.newNoDocument(u,Se.min()))}else $e(i===1,20013,{expectedCount:i});else{const u=this._t(t);if(u!==i){const d=this.ut(e),m=d?this.ct(d,e,u):1;if(m!==0){this.it(t);const _=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,_)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let u,d;try{u=zi(i).toUint8Array()}catch(m){if(m instanceof a4)return Ho("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new u1(u,o,l)}catch(m){return Ho(m instanceof sl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.ge===0?null:d}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,u)=>{const d=this.ot(u);if(d){if(l.current&&kf(d.target)){const m=new ve(d.target.path);this.It(m).has(u)||this.Et(u,m)||this.et(u,m,Wt.newNoDocument(m,e))}l.Be&&(t.set(u,l.ke()),l.qe())}}));let i=Me();this.He.forEach(((l,u)=>{let d=!0;u.forEachWhile((m=>{const _=this.ot(m);return!_||_.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(i=i.add(l))})),this.je.forEach(((l,u)=>u.setReadTime(e)));const o=new th(e,t,this.Ye,this.je,i);return this.je=Wr(),this.Je=nu(),this.He=nu(),this.Ye=new ot(Le),o}Xe(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new c2,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new St(Le),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new St(Le),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new c2),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function nu(){return new ot(ve.comparator)}function u2(){return new ot(ve.comparator)}const c9={asc:"ASCENDING",desc:"DESCENDING"},u9={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},h9={and:"AND",or:"OR"};class d9{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rf(n,e){return n.useProto3Json||Qu(e)?e:{value:e}}function Au(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function O4(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function f9(n,e){return Au(n,e.toTimestamp())}function vr(n){return $e(!!n,49232),Se.fromTimestamp((function(t){const i=Ui(t);return new tt(i.seconds,i.nanos)})(n))}function h1(n,e){return Pf(n,e).canonicalString()}function Pf(n,e){const t=(function(o){return new Xe(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function F4(n){const e=Xe.fromString(n);return $e($4(e),10190,{key:e.toString()}),e}function Nf(n,e){return h1(n.databaseId,e.path)}function Yd(n,e){const t=F4(e);if(t.get(1)!==n.databaseId.projectId)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(z4(t))}function U4(n,e){return h1(n.databaseId,e)}function p9(n){const e=F4(n);return e.length===4?Xe.emptyPath():z4(e)}function Df(n){return new Xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function z4(n){return $e(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function h2(n,e,t){return{name:Nf(n,e),fields:t.value.mapValue.fields}}function m9(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:Ee(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,C){return _.useProto3Json?($e(C===void 0||typeof C=="string",58123),jt.fromBase64String(C||"")):($e(C===void 0||C instanceof Buffer||C instanceof Uint8Array,16193),jt.fromUint8Array(C||new Uint8Array))})(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&(function(_){const C=_.code===void 0?W.UNKNOWN:L4(_.code);return new se(C,_.message||"")})(u);t=new j4(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Yd(n,i.document.name),l=vr(i.document.updateTime),u=i.document.createTime?vr(i.document.createTime):Se.min(),d=new ln({mapValue:{fields:i.document.fields}}),m=Wt.newFoundDocument(o,l,u,d),_=i.targetIds||[],C=i.removedTargetIds||[];t=new pu(_,C,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Yd(n,i.document),l=i.readTime?vr(i.readTime):Se.min(),u=Wt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new pu([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Yd(n,i.document),l=i.removedTargetIds||[];t=new pu([],l,o,null)}else{if(!("filter"in e))return Ee(11601,{Rt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,u=new i9(o,l),d=i.targetId;t=new M4(d,u)}}return t}function g9(n,e){let t;if(e instanceof bl)t={update:h2(n,e.key,e.value)};else if(e instanceof l1)t={delete:Nf(n,e.key)};else if(e instanceof Qi)t={update:h2(n,e.key,e.data),updateMask:I9(e.fieldMask)};else{if(!(e instanceof t9))return Ee(16599,{Vt:e.type});t={verify:Nf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,u){const d=u.transform;if(d instanceof wl)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Cl)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof xl)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof bu)return{fieldPath:u.field.canonicalString(),increment:d.Ae};throw Ee(20930,{transform:u.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:f9(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee(27497)})(n,e.precondition)),t}function y9(n,e){return n&&n.length>0?($e(e!==void 0,14353),n.map((t=>(function(o,l){let u=o.updateTime?vr(o.updateTime):vr(l);return u.isEqual(Se.min())&&(u=vr(l)),new J8(u,o.transformResults||[])})(t,e)))):[]}function v9(n,e){return{documents:[U4(n,e.path)]}}function _9(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=U4(n,o);const l=(function(_){if(_.length!==0)return q4(Qn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const u=(function(_){if(_.length!==0)return _.map((C=>(function(I){return{field:Vo(I.field),direction:x9(I.dir)}})(C)))})(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=Rf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:t,parent:o}}function w9(n){let e=p9(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){$e(i===1,65062);const C=t.from[0];C.allDescendants?o=C.collectionId:e=e.child(C.collectionId)}let l=[];t.where&&(l=(function(E){const I=B4(E);return I instanceof Qn&&y4(I)?I.getFilters():[I]})(t.where));let u=[];t.orderBy&&(u=(function(E){return E.map((I=>(function(O){return new _l(Lo(O.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(I)))})(t.orderBy));let d=null;t.limit&&(d=(function(E){let I;return I=typeof E=="object"?E.value:E,Qu(I)?null:I})(t.limit));let m=null;t.startAt&&(m=(function(E){const I=!!E.before,L=E.values||[];return new ku(L,I)})(t.startAt));let _=null;return t.endAt&&(_=(function(E){const I=!E.before,L=E.values||[];return new ku(L,I)})(t.endAt)),O8(e,o,u,l,d,"F",m,_)}function C9(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function B4(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Lo(t.unaryFilter.field);return Ct.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Lo(t.unaryFilter.field);return Ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Lo(t.unaryFilter.field);return Ct.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Lo(t.unaryFilter.field);return Ct.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ct.create(Lo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Qn.create(t.compositeFilter.filters.map((i=>B4(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(t.compositeFilter.op))})(n):Ee(30097,{filter:n})}function x9(n){return c9[n]}function E9(n){return u9[n]}function T9(n){return h9[n]}function Vo(n){return{fieldPath:n.canonicalString()}}function Lo(n){return Mt.fromServerFormat(n.fieldPath)}function q4(n){return n instanceof Ct?(function(t){if(t.op==="=="){if(Jm(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NAN"}};if(Ym(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Jm(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NOT_NAN"}};if(Ym(t.value))return{unaryFilter:{field:Vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vo(t.field),op:E9(t.op),value:t.value}}})(n):n instanceof Qn?(function(t){const i=t.getFilters().map((o=>q4(o)));return i.length===1?i[0]:{compositeFilter:{op:T9(t.op),filters:i}}})(n):Ee(54877,{filter:n})}function I9(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $4(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,i,o,l=Se.min(),u=Se.min(),d=jt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S9{constructor(e){this.yt=e}}function k9(n){const e=w9({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Af(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9{constructor(){this.Cn=new A9}addToCollectionParentIndex(e,t){return this.Cn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Fi.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class A9{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new St(Xe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new St(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},H4=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(H4,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Qo(0)}static cr(){return new Qo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2="LruGarbageCollector",R9=1048576;function p2([n,e],[t,i]){const o=Le(n,t);return o===0?Le(e,i):o}class P9{constructor(e){this.Ir=e,this.buffer=new St(p2),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();p2(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class N9{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ae(f2,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ea(t)?ae(f2,"Ignoring IndexedDB error during garbage collection: ",t):await Zo(t)}await this.Vr(3e5)}))}}class D9{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(Ku.ce);const i=new P9(t);return this.mr.forEachTarget(e,(o=>i.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>i.Ar(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.mr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(d2)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),d2):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let i,o,l,u,d,m,_;const C=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,u=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,d=Date.now(),this.removeTargets(e,i,t)))).next((E=>(l=E,m=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(_=Date.now(),No()<=Ve.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-C}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${E} documents in `+(_-m)+`ms
Total Duration: ${_-C}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function V9(n,e){return new D9(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L9{constructor(){this.changes=new Fs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M9{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j9{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&ul(i.mutation,o,_n.empty(),tt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,Me()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=Me()){const o=Ss();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let u=il();return l.forEach(((d,m)=>{u=u.insert(d,m.overlayedDocument)})),u}))))}getOverlayedDocuments(e,t){const i=Ss();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,Me())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((u,d)=>{t.set(u,d)}))}))}computeViews(e,t,i,o){let l=Wr();const u=cl(),d=(function(){return cl()})();return t.forEach(((m,_)=>{const C=i.get(_.key);o.has(_.key)&&(C===void 0||C.mutation instanceof Qi)?l=l.insert(_.key,_):C!==void 0?(u.set(_.key,C.mutation.getFieldMask()),ul(C.mutation,_,C.mutation.getFieldMask(),tt.now())):u.set(_.key,_n.empty())})),this.recalculateAndSaveOverlays(e,l).next((m=>(m.forEach(((_,C)=>u.set(_,C))),t.forEach(((_,C)=>d.set(_,new M9(C,u.get(_)??null)))),d)))}recalculateAndSaveOverlays(e,t){const i=cl();let o=new ot(((u,d)=>u-d)),l=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((u=>{for(const d of u)d.keys().forEach((m=>{const _=t.get(m);if(_===null)return;let C=i.get(m)||_n.empty();C=d.applyToLocalView(_,C),i.set(m,C);const E=(o.get(d.batchId)||Me()).add(m);o=o.insert(d.batchId,E)}))})).next((()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),_=m.key,C=m.value,E=k4();C.forEach((I=>{if(!l.has(I)){const L=D4(t.get(I),i.get(I));L!==null&&E.set(I,L),l=l.add(I)}})),u.push(this.documentOverlayCache.saveOverlays(e,_,E))}return G.waitFor(u)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return(function(u){return ve.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):x4(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const u=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(Ss());let d=ml,m=l;return u.next((_=>G.forEach(_,((C,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(C)?G.resolve():this.remoteDocumentCache.getEntry(e,C).next((I=>{m=m.insert(C,I)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,m,_,Me()))).next((C=>({batchId:d,changes:S4(C)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next((i=>{let o=il();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let u=il();return this.indexManager.getCollectionParents(e,l).next((d=>G.forEach(d,(m=>{const _=(function(E,I){return new ta(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,i,o).next((C=>{C.forEach(((E,I)=>{u=u.insert(E,I)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((u=>{l.forEach(((m,_)=>{const C=_.getKey();u.get(C)===null&&(u=u.insert(C,Wt.newInvalidDocument(C)))}));let d=il();return u.forEach(((m,_)=>{const C=l.get(m);C!==void 0&&ul(C.mutation,_,_n.empty(),tt.now()),Ju(t,_)&&(d=d.insert(m,_))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O9{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return G.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:vr(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(o){return{name:o.name,query:k9(o.bundledQuery),readTime:vr(o.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F9{constructor(){this.overlays=new ot(ve.comparator),this.qr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ss();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.qr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.qr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=Ss(),l=t.length+1,u=new ve(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const m=d.getNext().value,_=m.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&m.largestBatchId>i&&o.set(m.getKey(),m)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new ot(((_,C)=>_-C));const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>i){let C=l.get(_.largestBatchId);C===null&&(C=Ss(),l=l.insert(_.largestBatchId,C)),C.set(_.getKey(),_)}}const d=Ss(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((_,C)=>d.set(_,C))),!(d.size()>=o)););return G.resolve(d)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const u=this.qr.get(o.largestBatchId).delete(i.key);this.qr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new r9(t,i));let l=this.qr.get(t);l===void 0&&(l=Me(),this.qr.set(t,l)),this.qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U9{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this.Qr=new St(Rt.$r),this.Ur=new St(Rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.Qr=this.Qr.add(i),this.Ur=this.Ur.add(i)}Wr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Gr(new Rt(e,t))}zr(e,t){e.forEach((i=>this.removeReference(i,t)))}jr(e){const t=new ve(new Xe([])),i=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.Ur.forEachInRange([i,o],(u=>{this.Gr(u),l.push(u.key)})),l}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ve(new Xe([])),i=new Rt(t,e),o=new Rt(t,e+1);let l=Me();return this.Ur.forEachInRange([i,o],(u=>{l=l.add(u.key)})),l}containsKey(e){const t=new Rt(e,0),i=this.Qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ve.comparator(e.key,t.key)||Le(e.Yr,t.Yr)}static Kr(e,t){return Le(e.Yr,t.Yr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new St(Rt.$r)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new n9(l,t,i,o);this.mutationQueue.push(u);for(const d of o)this.Zr=this.Zr.add(new Rt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(u)}lookupMutationBatch(e,t){return G.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.ei(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?n1:this.tr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.Zr.forEachInRange([i,o],(u=>{const d=this.Xr(u.Yr);l.push(d)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new St(Le);return t.forEach((o=>{const l=new Rt(o,0),u=new Rt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([l,u],(d=>{i=i.add(d.Yr)}))})),G.resolve(this.ti(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ve.isDocumentKey(l)||(l=l.child(""));const u=new Rt(new ve(l),0);let d=new St(Le);return this.Zr.forEachWhile((m=>{const _=m.key.path;return!!i.isPrefixOf(_)&&(_.length===o&&(d=d.add(m.Yr)),!0)}),u),G.resolve(this.ti(d))}ti(e){const t=[];return e.forEach((i=>{const o=this.Xr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){$e(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Zr;return G.forEach(t.mutations,(o=>{const l=new Rt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=i}))}ir(e){}containsKey(e,t){const i=new Rt(t,0),o=this.Zr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B9{constructor(e){this.ri=e,this.docs=(function(){return new ot(ve.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,u=this.ri(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let i=Wr();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Wt.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Wr();const u=t.path,d=new ve(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:_,value:{document:C}}=m.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||g8(m8(C),i)<=0||(o.has(C.key)||Ju(t,C))&&(l=l.insert(C.key,C.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ee(9500)}ii(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new q9(this)}getSize(e){return G.resolve(this.size)}}class q9 extends L9{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $9{constructor(e){this.persistence=e,this.si=new Fs((t=>s1(t)),o1),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.oi=0,this._i=new d1,this.targetCount=0,this.ai=Qo.ur()}forEachTarget(e,t){return this.si.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.oi&&(this.oi=t),G.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Qo(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Pr(t),G.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.si.forEach(((u,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.si.delete(u),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.si.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this._i.Wr(t,i),G.resolve()}removeMatchingKeys(e,t,i){this._i.zr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((u=>{l.push(o.markPotentiallyOrphaned(e,u))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this._i.Hr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ku(0),this.li=!1,this.li=!0,this.hi=new U9,this.referenceDelegate=e(this),this.Pi=new $9(this),this.indexManager=new b9,this.remoteDocumentCache=(function(o){return new B9(o)})((i=>this.referenceDelegate.Ti(i))),this.serializer=new S9(t),this.Ii=new O9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new F9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ui[e.toKey()];return i||(i=new z9(t,this.referenceDelegate),this.ui[e.toKey()]=i),i}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new H9(this.ci.next());return this.referenceDelegate.Ei(),i(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ai(e,t){return G.or(Object.values(this.ui).map((i=>()=>i.containsKey(e,t))))}}class H9 extends v8{constructor(e){super(),this.currentSequenceNumber=e}}class f1{constructor(e){this.persistence=e,this.Ri=new d1,this.Vi=null}static mi(e){return new f1(e)}get fi(){if(this.Vi)return this.Vi;throw Ee(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.fi.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.fi.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((o=>this.fi.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.fi.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.fi,(i=>{const o=ve.fromPath(i);return this.gi(e,o).next((l=>{l||t.removeEntry(o,Se.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((i=>{i?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ru{constructor(e,t){this.persistence=e,this.pi=new Fs((i=>C8(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=V9(this,t)}static mi(e,t){return new Ru(e,t)}Ei(){}di(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}wr(e){let t=0;return this.pr(e,(i=>{t++})).next((()=>t))}pr(e,t){return G.forEach(this.pi,((i,o)=>this.br(e,i,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ii(e,(u=>this.br(e,u,t).next((d=>{d||(i++,l.removeEntry(u,Se.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.pi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),G.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hu(e.data.value)),t}br(e,t,i){return G.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Es=i,this.ds=o}static As(e,t){let i=Me(),o=Me();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new p1(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G9{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return j5()?8:_8(Gt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ys(e,t).next((u=>{l.result=u})).next((()=>{if(!l.result)return this.ws(e,t,o,i).next((u=>{l.result=u}))})).next((()=>{if(l.result)return;const u=new W9;return this.Ss(e,t,u).next((d=>{if(l.result=d,this.Vs)return this.bs(e,t,u,d.size)}))})).next((()=>l.result))}bs(e,t,i,o){return i.documentReadCount<this.fs?(No()<=Ve.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Do(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),G.resolve()):(No()<=Ve.DEBUG&&ae("QueryEngine","Query:",Do(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.gs*o?(No()<=Ve.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Do(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(t))):G.resolve())}ys(e,t){if(n2(t))return G.resolve(null);let i=yr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Af(t,null,"F"),i=yr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const u=Me(...l);return this.ps.getDocuments(e,u).next((d=>this.indexManager.getMinOffset(e,i).next((m=>{const _=this.Ds(t,d);return this.Cs(t,_,u,m.readTime)?this.ys(e,Af(t,null,"F")):this.vs(e,_,t,m)}))))})))))}ws(e,t,i,o){return n2(t)||o.isEqual(Se.min())?G.resolve(null):this.ps.getDocuments(e,i).next((l=>{const u=this.Ds(t,l);return this.Cs(t,u,i,o)?G.resolve(null):(No()<=Ve.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Do(t)),this.vs(e,u,t,p8(o,ml)).next((d=>d)))}))}Ds(e,t){let i=new St(T4(e));return t.forEach(((o,l)=>{Ju(e,l)&&(i=i.add(l))})),i}Cs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Ss(e,t,i){return No()<=Ve.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Do(t)),this.ps.getDocumentsMatchingQuery(e,t,Fi.min(),i)}vs(e,t,i,o){return this.ps.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((u=>{l=l.insert(u.key,u)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="LocalStore",K9=3e8;class Q9{constructor(e,t,i,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new ot(Le),this.xs=new Fs((l=>s1(l)),o1),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(i)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new j9(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function X9(n,e,t,i){return new Q9(n,e,t,i)}async function G4(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Bs(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const u=[],d=[];let m=Me();for(const _ of o){u.push(_.batchId);for(const C of _.mutations)m=m.add(C.key)}for(const _ of l){d.push(_.batchId);for(const C of _.mutations)m=m.add(C.key)}return t.localDocuments.getDocuments(i,m).next((_=>({Ls:_,removedBatchIds:u,addedBatchIds:d})))}))}))}function Y9(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(d,m,_,C){const E=_.batch,I=E.keys();let L=G.resolve();return I.forEach((O=>{L=L.next((()=>C.getEntry(m,O))).next((q=>{const F=_.docVersions.get(O);$e(F!==null,48541),q.version.compareTo(F)<0&&(E.applyToRemoteDocument(q,_),q.isValidDocument()&&(q.setReadTime(_.commitVersion),C.addEntry(q)))}))})),L.next((()=>d.mutationQueue.removeMutationBatch(m,E)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(d){let m=Me();for(let _=0;_<d.mutationResults.length;++_)d.mutationResults[_].transformResults.length>0&&(m=m.add(d.batch.mutations[_].key));return m})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function K4(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function J9(n,e){const t=Ae(n),i=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const u=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const d=[];e.targetChanges.forEach(((C,E)=>{const I=o.get(E);if(!I)return;d.push(t.Pi.removeMatchingKeys(l,C.removedDocuments,E).next((()=>t.Pi.addMatchingKeys(l,C.addedDocuments,E))));let L=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?L=L.withResumeToken(jt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):C.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(C.resumeToken,i)),o=o.insert(E,L),(function(q,F,te){return q.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=K9?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0})(I,L,C)&&d.push(t.Pi.updateTargetData(l,L))}));let m=Wr(),_=Me();if(e.documentUpdates.forEach((C=>{e.resolvedLimboDocuments.has(C)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,C))})),d.push(Z9(l,u,e.documentUpdates).next((C=>{m=C.ks,_=C.qs}))),!i.isEqual(Se.min())){const C=t.Pi.getLastRemoteSnapshotVersion(l).next((E=>t.Pi.setTargetsMetadata(l,l.currentSequenceNumber,i)));d.push(C)}return G.waitFor(d).next((()=>u.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,m,_))).next((()=>m))})).then((l=>(t.Ms=o,l)))}function Z9(n,e,t){let i=Me(),o=Me();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let u=Wr();return t.forEach(((d,m)=>{const _=l.get(d);m.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(d)),m.isNoDocument()&&m.version.isEqual(Se.min())?(e.removeEntry(d,m.readTime),u=u.insert(d,m)):!_.isValidDocument()||m.version.compareTo(_.version)>0||m.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(m),u=u.insert(d,m)):ae(m1,"Ignoring outdated watch update for ",d,". Current version:",_.version," Watch version:",m.version)})),{ks:u,qs:o}}))}function e7(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=n1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function t7(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.Pi.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.Pi.allocateTargetId(i).next((u=>(o=new Ri(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.Pi.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.Ms.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(i.targetId,i),t.xs.set(e,i.targetId)),i}))}async function Vf(n,e,t){const i=Ae(n),o=i.Ms.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(u=>i.persistence.referenceDelegate.removeTarget(u,o)))}catch(u){if(!ea(u))throw u;ae(m1,`Failed to update sequence numbers for target ${e}: ${u}`)}i.Ms=i.Ms.remove(e),i.xs.delete(o.target)}function m2(n,e,t){const i=Ae(n);let o=Se.min(),l=Me();return i.persistence.runTransaction("Execute query","readwrite",(u=>(function(m,_,C){const E=Ae(m),I=E.xs.get(C);return I!==void 0?G.resolve(E.Ms.get(I)):E.Pi.getTargetData(_,C)})(i,u,yr(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Pi.getMatchingKeysForTargetId(u,d.targetId).next((m=>{l=m}))})).next((()=>i.Fs.getDocumentsMatchingQuery(u,e,t?o:Se.min(),t?l:Me()))).next((d=>(n7(i,U8(e),d),{documents:d,Qs:l})))))}function n7(n,e,t){let i=n.Os.get(e)||Se.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Os.set(e,i)}class g2{constructor(){this.activeTargetIds=W8()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class r7{constructor(){this.Mo=new g2,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,i){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new g2,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i7{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2="ConnectivityMonitor";class v2{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ae(y2,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ae(y2,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=null;function Lf(){return ru===null?ru=(function(){return 268435456+Math.round(2147483648*Math.random())})():ru++,"0x"+ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="RestConnection",s7={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class o7{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${i}/databases/${o}`,this.Wo=this.databaseId.database===Iu?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Go(e,t,i,o,l){const u=Lf(),d=this.zo(e,t.toUriEncodedString());ae(Jd,`Sending RPC '${e}' ${u}:`,d,i);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,l);const{host:_}=new URL(d),C=Wi(_);return this.Jo(e,d,m,i,C).then((E=>(ae(Jd,`Received RPC '${e}' ${u}: `,E),E)),(E=>{throw Ho(Jd,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",i),E}))}Ho(e,t,i,o,l,u){return this.Go(e,t,i,o,l)}jo(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Jo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}zo(e,t){const i=s7[e];return`${this.Uo}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a7{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class l7 extends o7{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,o,l){const u=Lf();return new Promise(((d,m)=>{const _=new Xg;_.setWithCredentials(!0),_.listenOnce(Yg.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case uu.NO_ERROR:const E=_.getResponseJson();ae(qt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case uu.TIMEOUT:ae(qt,`RPC '${e}' ${u} timed out`),m(new se(W.DEADLINE_EXCEEDED,"Request time out"));break;case uu.HTTP_ERROR:const I=_.getStatus();if(ae(qt,`RPC '${e}' ${u} failed with status:`,I,"response text:",_.getResponseText()),I>0){let L=_.getResponseJson();Array.isArray(L)&&(L=L[0]);const O=L==null?void 0:L.error;if(O&&O.status&&O.message){const q=(function(te){const J=te.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(J)>=0?J:W.UNKNOWN})(O.status);m(new se(q,O.message))}else m(new se(W.UNKNOWN,"Server responded with status "+_.getStatus()))}else m(new se(W.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:u,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{ae(qt,`RPC '${e}' ${u} completed.`)}}));const C=JSON.stringify(o);ae(qt,`RPC '${e}' ${u} sending request:`,o),_.send(t,"POST",C,i,15)}))}T_(e,t,i){const o=Lf(),l=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=e4(),d=Zg(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(m.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const C=l.join("");ae(qt,`Creating RPC '${e}' stream ${o}: ${C}`,m);const E=u.createWebChannel(C,m);this.I_(E);let I=!1,L=!1;const O=new a7({Yo:F=>{L?ae(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(I||(ae(qt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),I=!0),ae(qt,`RPC '${e}' stream ${o} sending:`,F),E.send(F))},Zo:()=>E.close()}),q=(F,te,J)=>{F.listen(te,(re=>{try{J(re)}catch(le){setTimeout((()=>{throw le}),0)}}))};return q(E,rl.EventType.OPEN,(()=>{L||(ae(qt,`RPC '${e}' stream ${o} transport opened.`),O.o_())})),q(E,rl.EventType.CLOSE,(()=>{L||(L=!0,ae(qt,`RPC '${e}' stream ${o} transport closed`),O.a_(),this.E_(E))})),q(E,rl.EventType.ERROR,(F=>{L||(L=!0,Ho(qt,`RPC '${e}' stream ${o} transport errored. Name:`,F.name,"Message:",F.message),O.a_(new se(W.UNAVAILABLE,"The operation could not be completed")))})),q(E,rl.EventType.MESSAGE,(F=>{var te;if(!L){const J=F.data[0];$e(!!J,16349);const re=J,le=(re==null?void 0:re.error)||((te=re[0])==null?void 0:te.error);if(le){ae(qt,`RPC '${e}' stream ${o} received error:`,le);const ye=le.status;let de=(function(R){const D=wt[R];if(D!==void 0)return L4(D)})(ye),k=le.message;de===void 0&&(de=W.INTERNAL,k="Unknown error status: "+ye+" with message "+le.message),L=!0,O.a_(new se(de,k)),E.close()}else ae(qt,`RPC '${e}' stream ${o} received:`,J),O.u_(J)}})),q(d,Jg.STAT_EVENT,(F=>{F.stat===xf.PROXY?ae(qt,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===xf.NOPROXY&&ae(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Zd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n){return new d9(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=o,this.R_=l,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="PersistentStream";class X4{constructor(e,t,i,o,l,u,d,m){this.Mi=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Q4(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===W.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new se(W.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{i((()=>this.listener.Xo()))})),this.stream.t_((()=>{i((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(_2,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ae(_2,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class c7 extends X4{constructor(e,t,i,o,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,u),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=m9(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Se.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?Se.min():u.readTime?vr(u.readTime):Se.min()})(e);return this.listener.H_(t,i)}Y_(e){const t={};t.database=Df(this.serializer),t.addTarget=(function(l,u){let d;const m=u.target;if(d=kf(m)?{documents:v9(l,m)}:{query:_9(l,m).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=O4(l,u.resumeToken);const _=Rf(l,u.expectedCount);_!==null&&(d.expectedCount=_)}else if(u.snapshotVersion.compareTo(Se.min())>0){d.readTime=Au(l,u.snapshotVersion.toTimestamp());const _=Rf(l,u.expectedCount);_!==null&&(d.expectedCount=_)}return d})(this.serializer,e);const i=C9(this.serializer,e);i&&(t.labels=i),this.q_(t)}Z_(e){const t={};t.database=Df(this.serializer),t.removeTarget=e,this.q_(t)}}class u7 extends X4{constructor(e,t,i,o,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,u),this.serializer=l}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return $e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){$e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=y9(e.writeResults,e.commitTime),i=vr(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=Df(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>g9(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h7{}class d7 extends h7{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,u])=>this.connection.Go(e,Pf(t,i),o,l,u))).catch((l=>{throw l.name==="FirebaseError"?(l.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(W.UNKNOWN,l.toString())}))}Ho(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Ho(e,Pf(t,i),o,u,d,l))).catch((u=>{throw u.name==="FirebaseError"?(u.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(W.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class f7{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Hr(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="RemoteStore";class p7{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=l,this.Aa.Oo((u=>{i.enqueueAndForget((async()=>{Us(this)&&(ae(Ps,"Restarting streams for network reachability change."),await(async function(m){const _=Ae(m);_.Ea.add(4),await Rl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await rh(_)})(this))}))})),this.Ra=new f7(i,o)}}async function rh(n){if(Us(n))for(const e of n.da)await e(!0)}async function Rl(n){for(const e of n.da)await e(!1)}function Y4(n,e){const t=Ae(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),_1(t)?v1(t):na(t).O_()&&y1(t,e))}function g1(n,e){const t=Ae(n),i=na(t);t.Ia.delete(e),i.O_()&&J4(t,e),t.Ia.size===0&&(i.O_()?i.L_():Us(t)&&t.Ra.set("Unknown"))}function y1(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}na(n).Y_(e)}function J4(n,e){n.Va.Ue(e),na(n).Z_(e)}function v1(n){n.Va=new l9({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),na(n).start(),n.Ra.ua()}function _1(n){return Us(n)&&!na(n).x_()&&n.Ia.size>0}function Us(n){return Ae(n).Ea.size===0}function Z4(n){n.Va=void 0}async function m7(n){n.Ra.set("Online")}async function g7(n){n.Ia.forEach(((e,t)=>{y1(n,e)}))}async function y7(n,e){Z4(n),_1(n)?(n.Ra.ha(e),v1(n)):n.Ra.set("Unknown")}async function v7(n,e,t){if(n.Ra.set("Online"),e instanceof j4&&e.state===2&&e.cause)try{await(async function(o,l){const u=l.cause;for(const d of l.targetIds)o.Ia.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ia.delete(d),o.Va.removeTarget(d))})(n,e)}catch(i){ae(Ps,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Pu(n,i)}else if(e instanceof pu?n.Va.Ze(e):e instanceof M4?n.Va.st(e):n.Va.tt(e),!t.isEqual(Se.min()))try{const i=await K4(n.localStore);t.compareTo(i)>=0&&await(function(l,u){const d=l.Va.Tt(u);return d.targetChanges.forEach(((m,_)=>{if(m.resumeToken.approximateByteSize()>0){const C=l.Ia.get(_);C&&l.Ia.set(_,C.withResumeToken(m.resumeToken,u))}})),d.targetMismatches.forEach(((m,_)=>{const C=l.Ia.get(m);if(!C)return;l.Ia.set(m,C.withResumeToken(jt.EMPTY_BYTE_STRING,C.snapshotVersion)),J4(l,m);const E=new Ri(C.target,m,_,C.sequenceNumber);y1(l,E)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(i){ae(Ps,"Failed to raise snapshot:",i),await Pu(n,i)}}async function Pu(n,e,t){if(!ea(e))throw e;n.Ea.add(1),await Rl(n),n.Ra.set("Offline"),t||(t=()=>K4(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ae(Ps,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await rh(n)}))}function e3(n,e){return e().catch((t=>Pu(n,t,e)))}async function ih(n){const e=Ae(n),t=qi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:n1;for(;_7(e);)try{const o=await e7(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,w7(e,o)}catch(o){await Pu(e,o)}t3(e)&&n3(e)}function _7(n){return Us(n)&&n.Ta.length<10}function w7(n,e){n.Ta.push(e);const t=qi(n);t.O_()&&t.X_&&t.ea(e.mutations)}function t3(n){return Us(n)&&!qi(n).x_()&&n.Ta.length>0}function n3(n){qi(n).start()}async function C7(n){qi(n).ra()}async function x7(n){const e=qi(n);for(const t of n.Ta)e.ea(t.mutations)}async function E7(n,e,t){const i=n.Ta.shift(),o=c1.from(i,e,t);await e3(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await ih(n)}async function T7(n,e){e&&qi(n).X_&&await(async function(i,o){if((function(u){return s9(u)&&u!==W.ABORTED})(o.code)){const l=i.Ta.shift();qi(i).B_(),await e3(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await ih(i)}})(n,e),t3(n)&&n3(n)}async function w2(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),ae(Ps,"RemoteStore received new credentials");const i=Us(t);t.Ea.add(3),await Rl(t),i&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await rh(t)}async function I7(n,e){const t=Ae(n);e?(t.Ea.delete(2),await rh(t)):e||(t.Ea.add(2),await Rl(t),t.Ra.set("Unknown"))}function na(n){return n.ma||(n.ma=(function(t,i,o){const l=Ae(t);return l.sa(),new c7(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Xo:m7.bind(null,n),t_:g7.bind(null,n),r_:y7.bind(null,n),H_:v7.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),_1(n)?v1(n):n.Ra.set("Unknown")):(await n.ma.stop(),Z4(n))}))),n.ma}function qi(n){return n.fa||(n.fa=(function(t,i,o){const l=Ae(t);return l.sa(),new u7(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:C7.bind(null,n),r_:T7.bind(null,n),ta:x7.bind(null,n),na:E7.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await ih(n)):(await n.fa.stop(),n.Ta.length>0&&(ae(Ps,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const u=Date.now()+i,d=new w1(e,t,u,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function C1(n,e){if(Hr("AsyncQueue",`${e}: ${n}`),ea(n))return new se(W.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{static emptySet(e){return new Oo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ve.comparator(t.key,i.key):(t,i)=>ve.comparator(t.key,i.key),this.keyedMap=il(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Oo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(){this.ga=new ot(ve.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ee(63341,{Rt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Xo{constructor(e,t,i,o,l,u,d,m,_){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=_}static fromInitialDocuments(e,t,i,o,l){const u=[];return t.forEach((d=>{u.push({type:0,doc:d})})),new Xo(e,t,Oo.emptySet(t),u,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S7{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class k7{constructor(){this.queries=x2(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Ae(t),l=o.queries;o.queries=x2(),l.forEach(((u,d)=>{for(const m of d.Sa)m.onError(i)}))})(this,new se(W.ABORTED,"Firestore shutting down"))}}function x2(){return new Fs((n=>E4(n)),Yu)}async function b7(n,e){const t=Ae(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new S7,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(u){const d=C1(u,`Initialization of query '${Do(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&x1(t)}async function A7(n,e){const t=Ae(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function R7(n,e){const t=Ae(n);let i=!1;for(const o of e){const l=o.query,u=t.queries.get(l);if(u){for(const d of u.Sa)d.Fa(o)&&(i=!0);u.wa=o}}i&&x1(t)}function P7(n,e,t){const i=Ae(n),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function x1(n){n.Ca.forEach((e=>{e.next()}))}var Mf,E2;(E2=Mf||(Mf={})).Ma="default",E2.Cache="cache";class N7{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Xo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e){this.key=e}}class i3{constructor(e){this.key=e}}class D7{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Me(),this.mutatedKeys=Me(),this.eu=T4(e),this.tu=new Oo(this.eu)}get nu(){return this.Ya}ru(e,t){const i=t?t.iu:new C2,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,u=o,d=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((C,E)=>{const I=o.get(C),L=Ju(this.query,E)?E:null,O=!!I&&this.mutatedKeys.has(I.key),q=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let F=!1;I&&L?I.data.isEqual(L.data)?O!==q&&(i.track({type:3,doc:L}),F=!0):this.su(I,L)||(i.track({type:2,doc:L}),F=!0,(m&&this.eu(L,m)>0||_&&this.eu(L,_)<0)&&(d=!0)):!I&&L?(i.track({type:0,doc:L}),F=!0):I&&!L&&(i.track({type:1,doc:I}),F=!0,(m||_)&&(d=!0)),F&&(L?(u=u.add(L),l=q?l.add(C):l.delete(C)):(u=u.delete(C),l=l.delete(C)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const C=this.query.limitType==="F"?u.last():u.first();u=u.delete(C.key),l=l.delete(C.key),i.track({type:1,doc:C})}return{tu:u,iu:i,Cs:d,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const u=e.iu.ya();u.sort(((C,E)=>(function(L,O){const q=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Rt:F})}};return q(L)-q(O)})(C.type,E.type)||this.eu(C.doc,E.doc))),this.ou(i),o=o??!1;const d=t&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,_=m!==this.Za;return this.Za=m,u.length!==0||_?{snapshot:new Xo(this.query,e.tu,l,u,e.mutatedKeys,m===0,_,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:d}:{au:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new C2,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Me(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Xa=this.Xa.add(i.key))}));const t=[];return e.forEach((i=>{this.Xa.has(i)||t.push(new i3(i))})),this.Xa.forEach((i=>{e.has(i)||t.push(new r3(i))})),t}cu(e){this.Ya=e.Qs,this.Xa=Me();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Xo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const E1="SyncEngine";class V7{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class L7{constructor(e){this.key=e,this.hu=!1}}class M7{constructor(e,t,i,o,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new Fs((d=>E4(d)),Yu),this.Iu=new Map,this.Eu=new Set,this.du=new ot(ve.comparator),this.Au=new Map,this.Ru=new d1,this.Vu={},this.mu=new Map,this.fu=Qo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function j7(n,e,t=!0){const i=u3(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await s3(i,e,t,!0),o}async function O7(n,e){const t=u3(n);await s3(t,e,!0,!1)}async function s3(n,e,t,i){const o=await t7(n.localStore,yr(e)),l=o.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await F7(n,e,l,u==="current",o.resumeToken)),n.isPrimaryClient&&t&&Y4(n.remoteStore,o),d}async function F7(n,e,t,i,o){n.pu=(E,I,L)=>(async function(q,F,te,J){let re=F.view.ru(te);re.Cs&&(re=await m2(q.localStore,F.query,!1).then((({documents:k})=>F.view.ru(k,re))));const le=J&&J.targetChanges.get(F.targetId),ye=J&&J.targetMismatches.get(F.targetId)!=null,de=F.view.applyChanges(re,q.isPrimaryClient,le,ye);return I2(q,F.targetId,de.au),de.snapshot})(n,E,I,L);const l=await m2(n.localStore,e,!0),u=new D7(e,l.Qs),d=u.ru(l.documents),m=Al.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),_=u.applyChanges(d,n.isPrimaryClient,m);I2(n,t,_.au);const C=new V7(e,t,u);return n.Tu.set(e,C),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),_.snapshot}async function U7(n,e,t){const i=Ae(n),o=i.Tu.get(e),l=i.Iu.get(o.targetId);if(l.length>1)return i.Iu.set(o.targetId,l.filter((u=>!Yu(u,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Vf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&g1(i.remoteStore,o.targetId),jf(i,o.targetId)})).catch(Zo)):(jf(i,o.targetId),await Vf(i.localStore,o.targetId,!0))}async function z7(n,e){const t=Ae(n),i=t.Tu.get(e),o=t.Iu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),g1(t.remoteStore,i.targetId))}async function B7(n,e,t){const i=Q7(n);try{const o=await(function(u,d){const m=Ae(u),_=tt.now(),C=d.reduce(((L,O)=>L.add(O.key)),Me());let E,I;return m.persistence.runTransaction("Locally write mutations","readwrite",(L=>{let O=Wr(),q=Me();return m.Ns.getEntries(L,C).next((F=>{O=F,O.forEach(((te,J)=>{J.isValidDocument()||(q=q.add(te))}))})).next((()=>m.localDocuments.getOverlayedDocuments(L,O))).next((F=>{E=F;const te=[];for(const J of d){const re=e9(J,E.get(J.key).overlayedDocument);re!=null&&te.push(new Qi(J.key,re,p4(re.value.mapValue),Gn.exists(!0)))}return m.mutationQueue.addMutationBatch(L,_,te,d)})).next((F=>{I=F;const te=F.applyToLocalDocumentSet(E,q);return m.documentOverlayCache.saveOverlays(L,F.batchId,te)}))})).then((()=>({batchId:I.batchId,changes:S4(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(u,d,m){let _=u.Vu[u.currentUser.toKey()];_||(_=new ot(Le)),_=_.insert(d,m),u.Vu[u.currentUser.toKey()]=_})(i,o.batchId,t),await Pl(i,o.changes),await ih(i.remoteStore)}catch(o){const l=C1(o,"Failed to persist write");t.reject(l)}}async function o3(n,e){const t=Ae(n);try{const i=await J9(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const u=t.Au.get(l);u&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.hu=!0:o.modifiedDocuments.size>0?$e(u.hu,14607):o.removedDocuments.size>0&&($e(u.hu,42227),u.hu=!1))})),await Pl(t,i,e)}catch(i){await Zo(i)}}function T2(n,e,t){const i=Ae(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)})),(function(u,d){const m=Ae(u);m.onlineState=d;let _=!1;m.queries.forEach(((C,E)=>{for(const I of E.Sa)I.va(d)&&(_=!0)})),_&&x1(m)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function q7(n,e,t){const i=Ae(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let u=new ot(ve.comparator);u=u.insert(l,Wt.newNoDocument(l,Se.min()));const d=Me().add(l),m=new th(Se.min(),new Map,new ot(Le),u,d);await o3(i,m),i.du=i.du.remove(l),i.Au.delete(e),T1(i)}else await Vf(i.localStore,e,!1).then((()=>jf(i,e,t))).catch(Zo)}async function $7(n,e){const t=Ae(n),i=e.batch.batchId;try{const o=await Y9(t.localStore,e);l3(t,i,null),a3(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Pl(t,o)}catch(o){await Zo(o)}}async function H7(n,e,t){const i=Ae(n);try{const o=await(function(u,d){const m=Ae(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let C;return m.mutationQueue.lookupMutationBatch(_,d).next((E=>($e(E!==null,37113),C=E.keys(),m.mutationQueue.removeMutationBatch(_,E)))).next((()=>m.mutationQueue.performConsistencyCheck(_))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(_,C,d))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,C))).next((()=>m.localDocuments.getDocuments(_,C)))}))})(i.localStore,e);l3(i,e,t),a3(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Pl(i,o)}catch(o){await Zo(o)}}function a3(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function l3(n,e,t){const i=Ae(n);let o=i.Vu[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Vu[i.currentUser.toKey()]=o}}function jf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((i=>{n.Ru.containsKey(i)||c3(n,i)}))}function c3(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(g1(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),T1(n))}function I2(n,e,t){for(const i of t)i instanceof r3?(n.Ru.addReference(i.key,e),W7(n,i)):i instanceof i3?(ae(E1,"Document no longer in limbo: "+i.key),n.Ru.removeReference(i.key,e),n.Ru.containsKey(i.key)||c3(n,i.key)):Ee(19791,{wu:i})}function W7(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Eu.has(i)||(ae(E1,"New document in limbo: "+t),n.Eu.add(i),T1(n))}function T1(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ve(Xe.fromString(e)),i=n.fu.next();n.Au.set(i,new L7(t)),n.du=n.du.insert(t,i),Y4(n.remoteStore,new Ri(yr(C4(t.path)),i,"TargetPurposeLimboResolution",Ku.ce))}}async function Pl(n,e,t){const i=Ae(n),o=[],l=[],u=[];i.Tu.isEmpty()||(i.Tu.forEach(((d,m)=>{u.push(i.pu(m,e,t).then((_=>{var C;if((_||t)&&i.isPrimaryClient){const E=_?!_.fromCache:(C=t==null?void 0:t.targetChanges.get(m.targetId))==null?void 0:C.current;i.sharedClientState.updateQueryState(m.targetId,E?"current":"not-current")}if(_){o.push(_);const E=p1.As(m.targetId,_);l.push(E)}})))})),await Promise.all(u),i.Pu.H_(o),await(async function(m,_){const C=Ae(m);try{await C.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>G.forEach(_,(I=>G.forEach(I.Es,(L=>C.persistence.referenceDelegate.addReference(E,I.targetId,L))).next((()=>G.forEach(I.ds,(L=>C.persistence.referenceDelegate.removeReference(E,I.targetId,L)))))))))}catch(E){if(!ea(E))throw E;ae(m1,"Failed to update sequence numbers: "+E)}for(const E of _){const I=E.targetId;if(!E.fromCache){const L=C.Ms.get(I),O=L.snapshotVersion,q=L.withLastLimboFreeSnapshotVersion(O);C.Ms=C.Ms.insert(I,q)}}})(i.localStore,l))}async function G7(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){ae(E1,"User change. New user:",e.toKey());const i=await G4(t.localStore,e);t.currentUser=e,(function(l,u){l.mu.forEach((d=>{d.forEach((m=>{m.reject(new se(W.CANCELLED,u))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Pl(t,i.Ls)}}function K7(n,e){const t=Ae(n),i=t.Au.get(e);if(i&&i.hu)return Me().add(i.key);{let o=Me();const l=t.Iu.get(e);if(!l)return o;for(const u of l){const d=t.Tu.get(u);o=o.unionWith(d.view.nu)}return o}}function u3(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=o3.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K7.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=q7.bind(null,e),e.Pu.H_=R7.bind(null,e.eventManager),e.Pu.yu=P7.bind(null,e.eventManager),e}function Q7(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$7.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=H7.bind(null,e),e}class Nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return X9(this.persistence,new G9,e.initialUser,this.serializer)}Cu(e){return new W4(f1.mi,this.serializer)}Du(e){return new r7}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nu.provider={build:()=>new Nu};class X7 extends Nu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){$e(this.persistence.referenceDelegate instanceof Ru,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new N9(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new W4((i=>Ru.mi(i,t)),this.serializer)}}class Of{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>T2(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=G7.bind(null,this.syncEngine),await I7(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new k7})()}createDatastore(e){const t=nh(e.databaseInfo.databaseId),i=(function(l){return new l7(l)})(e.databaseInfo);return(function(l,u,d,m){return new d7(l,u,d,m)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,u,d){return new p7(i,o,l,u,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>T2(this.syncEngine,t,0)),(function(){return v2.v()?new v2:new i7})())}createSyncEngine(e,t){return(function(o,l,u,d,m,_,C){const E=new M7(o,l,u,d,m,_);return C&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ae(o);ae(Ps,"RemoteStore shutting down."),l.Ea.add(5),await Rl(l),l.Aa.shutdown(),l.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Of.provider={build:()=>new Of};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y7{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Hr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="FirestoreClient";class J7{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=t1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async u=>{ae($i,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(i,(u=>(ae($i,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=C1(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function ef(n,e){n.asyncQueue.verifyOperationInProgress(),ae($i,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await G4(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function S2(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Z7(n);ae($i,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>w2(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>w2(e.remoteStore,o))),n._onlineComponents=e}async function Z7(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae($i,"Using user provided OfflineComponentProvider");try{await ef(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===W.FAILED_PRECONDITION||o.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Ho("Error using user provided cache. Falling back to memory cache: "+t),await ef(n,new Nu)}}else ae($i,"Using default OfflineComponentProvider"),await ef(n,new X7(void 0));return n._offlineComponents}async function h3(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae($i,"Using user provided OnlineComponentProvider"),await S2(n,n._uninitializedComponentsProvider._online)):(ae($i,"Using default OnlineComponentProvider"),await S2(n,new Of))),n._onlineComponents}function e_(n){return h3(n).then((e=>e.syncEngine))}async function t_(n){const e=await h3(n),t=e.eventManager;return t.onListen=j7.bind(null,e.syncEngine),t.onUnlisten=U7.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=O7.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=z7.bind(null,e.syncEngine),t}function n_(n,e,t={}){const i=new Vi;return n.asyncQueue.enqueueAndForget((async()=>(function(l,u,d,m,_){const C=new Y7({next:I=>{C.Nu(),u.enqueueAndForget((()=>A7(l,E))),I.fromCache&&m.source==="server"?_.reject(new se(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(I)},error:I=>_.reject(I)}),E=new N7(d,C,{includeMetadataChanges:!0,qa:!0});return b7(l,E)})(await t_(n),n.asyncQueue,e,t,i))),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d3(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3="firestore.googleapis.com",b2=!0;class A2{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=f3,this.ssl=b2}else this.host=e.host,this.ssl=e.ssl??b2;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=H4;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<R9)throw new se(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}f8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d3(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se(W.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new A2({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new A2(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new r8;switch(i.type){case"firstParty":return new a8(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=k2.get(t);i&&(ae("ComponentProvider","Removing Datastore"),k2.delete(t),i.terminate())})(this),Promise.resolve()}}function r_(n,e,t,i={}){var _;n=Rs(n,sh);const o=Wi(e),l=n._getSettings(),u={...l,emulatorOptions:n._getEmulatorOptions()},d=`${e}:${t}`;o&&(Yf(`https://${d}`),Jf("Firestore",!0)),l.host!==f3&&l.host!==d&&Ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...l,host:d,ssl:o,emulatorOptions:i};if(!Oi(m,u)&&(n._setSettings(m),i.mockUserToken)){let C,E;if(typeof i.mockUserToken=="string")C=i.mockUserToken,E=Ht.MOCK_USER;else{C=Fg(i.mockUserToken,(_=n._app)==null?void 0:_.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new se(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Ht(I)}n._authCredentials=new i8(new n4(C,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new zs(this.firestore,e,this._query)}}class It{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}toJSON(){return{type:It._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(kl(t,It._jsonSchema))return new It(e,i||null,new ve(Xe.fromString(t.referencePath)))}}It._jsonSchemaVersion="firestore/documentReference/1.0",It._jsonSchema={type:xt("string",It._jsonSchemaVersion),referencePath:xt("string")};class Li extends zs{constructor(e,t,i){super(e,t,C4(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new ve(e))}withConverter(e){return new Li(this.firestore,e,this._path)}}function Hi(n,e,...t){if(n=Ye(n),r4("collection","path",e),n instanceof sh){const i=Xe.fromString(e,...t);return Bm(i),new Li(n,null,i)}{if(!(n instanceof It||n instanceof Li))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Xe.fromString(e,...t));return Bm(i),new Li(n.firestore,null,i)}}function hl(n,e,...t){if(n=Ye(n),arguments.length===1&&(e=t1.newId()),r4("doc","path",e),n instanceof sh){const i=Xe.fromString(e,...t);return zm(i),new It(n,null,new ve(i))}{if(!(n instanceof It||n instanceof Li))throw new se(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Xe.fromString(e,...t));return zm(i),new It(n.firestore,n instanceof Li?n.converter:null,new ve(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="AsyncQueue";class P2{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Q4(this,"async_queue_retry"),this._c=()=>{const i=Zd();i&&ae(R2,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Zd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Vi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ea(e))throw e;ae(R2,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Hr("INTERNAL UNHANDLED ERROR: ",N2(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=w1.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&Ee(47125,{Pc:N2(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function N2(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Nl extends sh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new P2,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new P2(e),this._firestoreClient=void 0,await e}}}function i_(n,e){const t=typeof n=="object"?n:Wu(),i=typeof n=="string"?n:Iu,o=Gi(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Mg("firestore");l&&r_(o,...l)}return o}function p3(n){if(n._terminated)throw new se(W.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||s_(n),n._firestoreClient}function s_(n){var i,o,l;const e=n._freezeSettings(),t=(function(d,m,_,C){return new T8(d,m,_,C.host,C.ssl,C.experimentalForceLongPolling,C.experimentalAutoDetectLongPolling,d3(C.experimentalLongPollingOptions),C.useFetchStreams,C.isUsingEmulator)})(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new J7(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(d){const m=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(m),_online:m}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(jt.fromBase64String(e))}catch(t){throw new se(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pn(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kl(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:xt("string",Pn._jsonSchemaVersion),bytes:xt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_r._jsonSchemaVersion}}static fromJSON(e){if(kl(e,_r._jsonSchema))return new _r(e.latitude,e.longitude)}}_r._jsonSchemaVersion="firestore/geoPoint/1.0",_r._jsonSchema={type:xt("string",_r._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kl(e,wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new wr(e.vectorValues);throw new se(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wr._jsonSchemaVersion="firestore/vectorValue/1.0",wr._jsonSchema={type:xt("string",wr._jsonSchemaVersion),vectorValues:xt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=/^__.*__$/;class a_{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new bl(e,this.data,t,this.fieldTransforms)}}class m3{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function g3(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ac:n})}}class I1{constructor(e,t,i,o,l,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Rc(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new I1({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.Vc({path:t,fc:!1});return i.gc(e),i}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.Vc({path:t,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Du(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(g3(this.Ac)&&o_.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class l_{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||nh(e)}Cc(e,t,i,o=!1){return new I1({Ac:e,methodName:t,Dc:i,path:Mt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function S1(n){const e=n._freezeSettings(),t=nh(n._databaseId);return new l_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function c_(n,e,t,i,o,l={}){const u=n.Cc(l.merge||l.mergeFields?2:0,e,t,o);b1("Data must be an object, but it was:",u,i);const d=y3(i,u);let m,_;if(l.merge)m=new _n(u.fieldMask),_=u.fieldTransforms;else if(l.mergeFields){const C=[];for(const E of l.mergeFields){const I=Ff(e,E,t);if(!u.contains(I))throw new se(W.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);_3(C,I)||C.push(I)}m=new _n(C),_=u.fieldTransforms.filter((E=>m.covers(E.field)))}else m=null,_=u.fieldTransforms;return new a_(new ln(d),m,_)}class lh extends ah{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lh}}class k1 extends ah{_toFieldTransform(e){return new X8(e.path,new wl)}isEqual(e){return e instanceof k1}}function u_(n,e,t,i){const o=n.Cc(1,e,t);b1("Data must be an object, but it was:",o,i);const l=[],u=ln.empty();Ki(i,((m,_)=>{const C=A1(e,m,t);_=Ye(_);const E=o.yc(C);if(_ instanceof lh)l.push(C);else{const I=Dl(_,E);I!=null&&(l.push(C),u.set(C,I))}}));const d=new _n(l);return new m3(u,d,o.fieldTransforms)}function h_(n,e,t,i,o,l){const u=n.Cc(1,e,t),d=[Ff(e,i,t)],m=[o];if(l.length%2!=0)throw new se(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(Ff(e,l[I])),m.push(l[I+1]);const _=[],C=ln.empty();for(let I=d.length-1;I>=0;--I)if(!_3(_,d[I])){const L=d[I];let O=m[I];O=Ye(O);const q=u.yc(L);if(O instanceof lh)_.push(L);else{const F=Dl(O,q);F!=null&&(_.push(L),C.set(L,F))}}const E=new _n(_);return new m3(C,E,u.fieldTransforms)}function d_(n,e,t,i=!1){return Dl(t,n.Cc(i?4:3,e))}function Dl(n,e){if(v3(n=Ye(n)))return b1("Unsupported field value:",e,n),y3(n,e);if(n instanceof ah)return(function(i,o){if(!g3(o.Ac))throw o.Sc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(i,o){const l=[];let u=0;for(const d of i){let m=Dl(d,o.wc(u));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),u++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=Ye(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return G8(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=tt.fromDate(i);return{timestampValue:Au(o.serializer,l)}}if(i instanceof tt){const l=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Au(o.serializer,l)}}if(i instanceof _r)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Pn)return{bytesValue:O4(o.serializer,i._byteString)};if(i instanceof It){const l=o.databaseId,u=i.firestore._databaseId;if(!u.isEqual(l))throw o.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:h1(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof wr)return(function(u,d){return{mapValue:{fields:{[d4]:{stringValue:f4},[Su]:{arrayValue:{values:u.toArray().map((_=>{if(typeof _!="number")throw d.Sc("VectorValues must only contain numeric values.");return a1(d.serializer,_)}))}}}}}})(i,o);throw o.Sc(`Unsupported field value: ${Gu(i)}`)})(n,e)}function y3(n,e){const t={};return o4(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(n,((i,o)=>{const l=Dl(o,e.mc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function v3(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof _r||n instanceof Pn||n instanceof It||n instanceof ah||n instanceof wr)}function b1(n,e,t){if(!v3(t)||!i4(t)){const i=Gu(t);throw i==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+i)}}function Ff(n,e,t){if((e=Ye(e))instanceof oh)return e._internalPath;if(typeof e=="string")return A1(n,e);throw Du("Field path arguments must be of type string or ",n,!1,void 0,t)}const f_=new RegExp("[~\\*/\\[\\]]");function A1(n,e,t){if(e.search(f_)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new oh(...e.split("."))._internalPath}catch{throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Du(n,e,t,i,o){const l=i&&!i.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||u)&&(m+=" (found",l&&(m+=` in field ${i}`),u&&(m+=` in document ${o}`),m+=")"),new se(W.INVALID_ARGUMENT,d+n+m)}function _3(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(R1("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class p_ extends w3{data(){return super.data()}}function R1(n,e){return typeof e=="string"?A1(n,e):e instanceof oh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class P1{}class C3 extends P1{}function D2(n,e,...t){let i=[];e instanceof P1&&i.push(e),i=i.concat(t),(function(l){const u=l.filter((m=>m instanceof D1)).length,d=l.filter((m=>m instanceof N1)).length;if(u>1||u>0&&d>0)throw new se(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class N1 extends C3{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new N1(e,t,i)}_apply(e){const t=this._parse(e);return x3(e._query,t),new zs(e.firestore,e.converter,bf(e._query,t))}_parse(e){const t=S1(e.firestore);return(function(l,u,d,m,_,C,E){let I;if(_.isKeyField()){if(C==="array-contains"||C==="array-contains-any")throw new se(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${C}' queries on documentId().`);if(C==="in"||C==="not-in"){M2(E,C);const O=[];for(const q of E)O.push(L2(m,l,q));I={arrayValue:{values:O}}}else I=L2(m,l,E)}else C!=="in"&&C!=="not-in"&&C!=="array-contains-any"||M2(E,C),I=d_(d,u,E,C==="in"||C==="not-in");return Ct.create(_,C,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class D1 extends P1{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new D1(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Qn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let u=o;const d=l.getFlattenedFilters();for(const m of d)x3(u,m),u=bf(u,m)})(e._query,t),new zs(e.firestore,e.converter,bf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class V1 extends C3{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new V1(e,t)}_apply(e){const t=(function(o,l,u){if(o.startAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _l(l,u)})(e._query,this._field,this._direction);return new zs(e.firestore,e.converter,(function(o,l){const u=o.explicitOrderBy.concat([l]);return new ta(o.path,o.collectionGroup,u,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,t))}}function V2(n,e="asc"){const t=e,i=R1("orderBy",n);return V1._create(i,t)}function L2(n,e,t){if(typeof(t=Ye(t))=="string"){if(t==="")throw new se(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!x4(e)&&t.indexOf("/")!==-1)throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Xe.fromString(t));if(!ve.isDocumentKey(i))throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Xm(n,new ve(i))}if(t instanceof It)return Xm(n,t._key);throw new se(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gu(t)}.`)}function M2(n,e){if(!Array.isArray(n)||n.length===0)throw new se(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function x3(n,e){const t=(function(o,l){for(const u of o)for(const d of u.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class g_{convertValue(e,t="none"){switch(Bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ki(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[Su].arrayValue)==null?void 0:o.values)==null?void 0:l.map((u=>gt(u.doubleValue)));return new wr(t)}convertGeoPoint(e){return new _r(gt(e.latitude),gt(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Xu(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const t=Ui(e);return new tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Xe.fromString(e);$e($4(i),9688,{name:e});const o=new yl(i.get(1),i.get(3)),l=new ve(i.popFirst(5));return o.isEqual(t)||Hr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class iu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fo extends w3{constructor(e,t,i,o,l,u){super(e,t,i,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(R1("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Fo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Fo._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fo._jsonSchema={type:xt("string",Fo._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class mu extends Fo{data(e={}){return super.data(e)}}class Uo{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new iu(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new mu(this._firestore,this._userDataWriter,i.key,i,new iu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map((d=>{const m=new mu(o._firestore,o._userDataWriter,d.doc.key,d.doc,new iu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}}))}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const m=new mu(o._firestore,o._userDataWriter,d.doc.key,d.doc,new iu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,C=-1;return d.type!==0&&(_=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),C=u.indexOf(d.doc.key)),{type:v_(d.type),doc:m,oldIndex:_,newIndex:C}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=t1.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function v_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:n})}}Uo._jsonSchemaVersion="firestore/querySnapshot/1.0",Uo._jsonSchema={type:xt("string",Uo._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};class __ extends g_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function Uf(n){n=Rs(n,zs);const e=Rs(n.firestore,Nl),t=p3(e),i=new __(e);return m_(n._query),n_(t,n._query).then((o=>new Uo(e,i,n,o)))}function zf(n,e,t,...i){n=Rs(n,It);const o=Rs(n.firestore,Nl),l=S1(o);let u;return u=typeof(e=Ye(e))=="string"||e instanceof oh?h_(l,"updateDoc",n._key,e,t,i):u_(l,"updateDoc",n._key,e),L1(o,[u.toMutation(n._key,Gn.exists(!0))])}function w_(n){return L1(Rs(n.firestore,Nl),[new l1(n._key,Gn.none())])}function El(n,e){const t=Rs(n.firestore,Nl),i=hl(n),o=y_(n.converter,e);return L1(t,[c_(S1(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Gn.exists(!1))]).then((()=>i))}function L1(n,e){return(function(i,o){const l=new Vi;return i.asyncQueue.enqueueAndForget((async()=>B7(await e_(i),o,l))),l.promise})(p3(n),e)}function Mi(){return new k1("serverTimestamp")}(function(e,t=!0){(function(o){Jo=o})(Os),Kn(new Dn("firestore",((i,{instanceIdentifier:o,options:l})=>{const u=i.getProvider("app").getImmediate(),d=new Nl(new s8(i.getProvider("auth-internal")),new l8(u,i.getProvider("app-check-internal")),(function(_,C){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new se(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(_.options.projectId,C)})(u,o),u);return l={useFetchStreams:t,...l},d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),cn(jm,Om,e),cn(jm,Om,"esm2020")})();var C_="firebase",x_="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(C_,x_,"app");const E3="@firebase/installations",M1="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3=1e4,I3=`w:${M1}`,S3="FIS_v2",E_="https://firebaseinstallations.googleapis.com/v1",T_=3600*1e3,I_="installations",S_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ns=new js(I_,S_,k_);function k3(n){return n instanceof Vn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b3({projectId:n}){return`${E_}/projects/${n}/installations`}function A3(n){return{token:n.token,requestStatus:2,expiresIn:A_(n.expiresIn),creationTime:Date.now()}}async function R3(n,e){const i=(await e.json()).error;return Ns.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function P3({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function b_(n,{refreshToken:e}){const t=P3(n);return t.append("Authorization",R_(e)),t}async function N3(n){const e=await n();return e.status>=500&&e.status<600?n():e}function A_(n){return Number(n.replace("s","000"))}function R_(n){return`${S3} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=b3(n),o=P3(n),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const u={fid:t,authVersion:S3,appId:n.appId,sdkVersion:I3},d={method:"POST",headers:o,body:JSON.stringify(u)},m=await N3(()=>fetch(i,d));if(m.ok){const _=await m.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:A3(_.authToken)}}else throw await R3("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D3(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=/^[cdef][\w-]{21}$/,Bf="";function V_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=L_(n);return D_.test(t)?t:Bf}catch{return Bf}}function L_(n){return N_(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V3=new Map;function L3(n,e){const t=ch(n);M3(t,e),M_(t,e)}function M3(n,e){const t=V3.get(n);if(t)for(const i of t)i(e)}function M_(n,e){const t=j_();t&&t.postMessage({key:n,fid:e}),O_()}let ks=null;function j_(){return!ks&&"BroadcastChannel"in self&&(ks=new BroadcastChannel("[Firebase] FID Change"),ks.onmessage=n=>{M3(n.data.key,n.data.fid)}),ks}function O_(){V3.size===0&&ks&&(ks.close(),ks=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="firebase-installations-database",U_=1,Ds="firebase-installations-store";let tf=null;function j1(){return tf||(tf=Hg(F_,U_,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ds)}}})),tf}async function Vu(n,e){const t=ch(n),o=(await j1()).transaction(Ds,"readwrite"),l=o.objectStore(Ds),u=await l.get(t);return await l.put(e,t),await o.done,(!u||u.fid!==e.fid)&&L3(n,e.fid),e}async function j3(n){const e=ch(n),i=(await j1()).transaction(Ds,"readwrite");await i.objectStore(Ds).delete(e),await i.done}async function uh(n,e){const t=ch(n),o=(await j1()).transaction(Ds,"readwrite"),l=o.objectStore(Ds),u=await l.get(t),d=e(u);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!u||u.fid!==d.fid)&&L3(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(n){let e;const t=await uh(n.appConfig,i=>{const o=z_(i),l=B_(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Bf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function z_(n){const e=n||{fid:V_(),registrationStatus:0};return O3(e)}function B_(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ns.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=q_(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$_(n)}:{installationEntry:e}}async function q_(n,e){try{const t=await P_(n,e);return Vu(n.appConfig,t)}catch(t){throw k3(t)&&t.customData.serverCode===409?await j3(n.appConfig):await Vu(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function $_(n){let e=await j2(n.appConfig);for(;e.registrationStatus===1;)await D3(100),e=await j2(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await O1(n);return i||t}return e}function j2(n){return uh(n,e=>{if(!e)throw Ns.create("installation-not-found");return O3(e)})}function O3(n){return H_(n)?{fid:n.fid,registrationStatus:0}:n}function H_(n){return n.registrationStatus===1&&n.registrationTime+T3<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_({appConfig:n,heartbeatServiceProvider:e},t){const i=G_(n,t),o=b_(n,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const u={installation:{sdkVersion:I3,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(u)},m=await N3(()=>fetch(i,d));if(m.ok){const _=await m.json();return A3(_)}else throw await R3("Generate Auth Token",m)}function G_(n,{fid:e}){return`${b3(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(n,e=!1){let t;const i=await uh(n.appConfig,l=>{if(!F3(l))throw Ns.create("not-registered");const u=l.authToken;if(!e&&X_(u))return l;if(u.requestStatus===1)return t=K_(n,e),l;{if(!navigator.onLine)throw Ns.create("app-offline");const d=J_(l);return t=Q_(n,d),d}});return t?await t:i.authToken}async function K_(n,e){let t=await O2(n.appConfig);for(;t.authToken.requestStatus===1;)await D3(100),t=await O2(n.appConfig);const i=t.authToken;return i.requestStatus===0?F1(n,e):i}function O2(n){return uh(n,e=>{if(!F3(e))throw Ns.create("not-registered");const t=e.authToken;return Z_(t)?{...e,authToken:{requestStatus:0}}:e})}async function Q_(n,e){try{const t=await W_(n,e),i={...e,authToken:t};return await Vu(n.appConfig,i),t}catch(t){if(k3(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await j3(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Vu(n.appConfig,i)}throw t}}function F3(n){return n!==void 0&&n.registrationStatus===2}function X_(n){return n.requestStatus===2&&!Y_(n)}function Y_(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+T_}function J_(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Z_(n){return n.requestStatus===1&&n.requestTime+T3<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(n){const e=n,{installationEntry:t,registrationPromise:i}=await O1(e);return i?i.catch(console.error):F1(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(n,e=!1){const t=n;return await nw(t),(await F1(t,e)).token}async function nw(n){const{registrationPromise:e}=await O1(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n){if(!n||!n.options)throw nf("App Configuration");if(!n.name)throw nf("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw nf(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function nf(n){return Ns.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U3="installations",iw="installations-internal",sw=n=>{const e=n.getProvider("app").getImmediate(),t=rw(e),i=Gi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},ow=n=>{const e=n.getProvider("app").getImmediate(),t=Gi(e,U3).getImmediate();return{getId:()=>ew(t),getToken:o=>tw(t,o)}};function aw(){Kn(new Dn(U3,sw,"PUBLIC")),Kn(new Dn(iw,ow,"PRIVATE"))}aw();cn(E3,M1);cn(E3,M1,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="analytics",lw="firebase_id",cw="origin",uw=60*1e3,hw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",U1="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Hu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Cn=new js("analytics","Analytics",dw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n){if(!n.startsWith(U1)){const e=Cn.create("invalid-gtag-resource",{gtagURL:n});return Jt.warn(e.message),""}return n}function z3(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function pw(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function mw(n,e){const t=pw("firebase-js-sdk-policy",{createScriptURL:fw}),i=document.createElement("script"),o=`${U1}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function gw(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function yw(n,e,t,i,o,l){const u=i[o];try{if(u)await e[u];else{const m=(await z3(t)).find(_=>_.measurementId===o);m&&await e[m.appId]}}catch(d){Jt.error(d)}n("config",o,l)}async function vw(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let u=o.send_to;Array.isArray(u)||(u=[u]);const d=await z3(t);for(const m of u){const _=d.find(E=>E.measurementId===m),C=_&&e[_.appId];if(C)l.push(C);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){Jt.error(l)}}function _w(n,e,t,i){async function o(l,...u){try{if(l==="event"){const[d,m]=u;await vw(n,e,t,d,m)}else if(l==="config"){const[d,m]=u;await yw(n,e,t,i,d,m)}else if(l==="consent"){const[d,m]=u;n("consent",d,m)}else if(l==="get"){const[d,m,_]=u;n("get",d,m,_)}else if(l==="set"){const[d]=u;n("set",d)}else n(l,...u)}catch(d){Jt.error(d)}}return o}function ww(n,e,t,i,o){let l=function(...u){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=_w(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function Cw(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(U1)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=30,Ew=1e3;class Tw{constructor(e={},t=Ew){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const B3=new Tw;function Iw(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Sw(n){var u;const{appId:e,apiKey:t}=n,i={method:"GET",headers:Iw(t)},o=hw.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let d="";try{const m=await l.json();(u=m.error)!=null&&u.message&&(d=m.error.message)}catch{}throw Cn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:d})}return l.json()}async function kw(n,e=B3,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw Cn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw Cn.create("no-api-key")}const u=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new Rw;return setTimeout(async()=>{d.abort()},uw),q3({appId:i,apiKey:o,measurementId:l},u,d,e)}async function q3(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=B3){var d;const{appId:l,measurementId:u}=n;try{await bw(i,e)}catch(m){if(u)return Jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:l,measurementId:u};throw m}try{const m=await Sw(n);return o.deleteThrottleMetadata(l),m}catch(m){const _=m;if(!Aw(_)){if(o.deleteThrottleMetadata(l),u)return Jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:l,measurementId:u};throw m}const C=Number((d=_==null?void 0:_.customData)==null?void 0:d.httpStatus)===503?km(t,o.intervalMillis,xw):km(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+C,backoffCount:t+1};return o.setThrottleMetadata(l,E),Jt.debug(`Calling attemptFetch again in ${C} millis`),q3(n,E,i,o)}}function bw(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(Cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Aw(n){if(!(n instanceof Vn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Rw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Pw(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,u={...i,send_to:l};n("event",t,u)}}async function Nw(n,e,t,i){if(i&&i.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(){if(zg())try{await Bg()}catch(n){return Jt.warn(Cn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Jt.warn(Cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vw(n,e,t,i,o,l,u){const d=kw(n);d.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&Jt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Jt.error(I)),e.push(d);const m=Dw().then(I=>{if(I)return i.getId()}),[_,C]=await Promise.all([d,m]);Cw(l)||mw(l,_.measurementId),o("js",new Date);const E=(u==null?void 0:u.config)??{};return E[cw]="firebase",E.update=!0,C!=null&&(E[lw]=C),o("config",_.measurementId,E),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.app=e}_delete(){return delete zo[this.app.options.appId],Promise.resolve()}}let zo={},F2=[];const U2={};let rf="dataLayer",Mw="gtag",z2,z1,B2=!1;function jw(){const n=[];if(Ug()&&n.push("This is a browser extension environment."),O5()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=Cn.create("invalid-analytics-context",{errorInfo:e});Jt.warn(t.message)}}function Ow(n,e,t){jw();const i=n.options.appId;if(!i)throw Cn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Cn.create("no-api-key");if(zo[i]!=null)throw Cn.create("already-exists",{id:i});if(!B2){gw(rf);const{wrappedGtag:l,gtagCore:u}=ww(zo,F2,U2,rf,Mw);z1=l,z2=u,B2=!0}return zo[i]=Vw(n,F2,U2,e,z2,rf,t),new Lw(n)}function Fw(n=Wu()){n=Ye(n);const e=Gi(n,Lu);return e.isInitialized()?e.getImmediate():Uw(n)}function Uw(n,e={}){const t=Gi(n,Lu);if(t.isInitialized()){const o=t.getImmediate();if(Oi(e,t.getOptions()))return o;throw Cn.create("already-initialized")}return t.initialize({options:e})}function zw(n,e,t){n=Ye(n),Nw(z1,zo[n.app.options.appId],e,t).catch(i=>Jt.error(i))}function Bw(n,e,t,i){n=Ye(n),Pw(z1,zo[n.app.options.appId],e,t,i).catch(o=>Jt.error(o))}const q2="@firebase/analytics",$2="0.10.19";function qw(){Kn(new Dn(Lu,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return Ow(i,o,t)},"PUBLIC")),Kn(new Dn("analytics-internal",n,"PRIVATE")),cn(q2,$2),cn(q2,$2,"esm2020");function n(e){try{const t=e.getProvider(Lu).getImmediate();return{logEvent:(i,o,l)=>Bw(t,i,o,l),setUserProperties:(i,o)=>zw(t,i,o)}}catch(t){throw Cn.create("interop-component-reg-failed",{reason:t})}}}qw();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $3="firebasestorage.googleapis.com",H3="storageBucket",$w=120*1e3,Hw=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Vn{constructor(e,t,i=0){super(sf(e),`Firebase Storage: ${t} (${sf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ht.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ut||(ut={}));function sf(n){return"storage/"+n}function B1(){const n="An unknown error occurred, please check the error payload for server response.";return new ht(ut.UNKNOWN,n)}function Ww(n){return new ht(ut.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Gw(n){return new ht(ut.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kw(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ht(ut.UNAUTHENTICATED,n)}function Qw(){return new ht(ut.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Xw(n){return new ht(ut.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Yw(){return new ht(ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jw(){return new ht(ut.CANCELED,"User canceled the upload/download.")}function Zw(n){return new ht(ut.INVALID_URL,"Invalid URL '"+n+"'.")}function eC(n){return new ht(ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function tC(){return new ht(ut.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+H3+"' property when initializing the app?")}function nC(){return new ht(ut.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rC(){return new ht(ut.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function iC(n){return new ht(ut.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qf(n){return new ht(ut.INVALID_ARGUMENT,n)}function W3(){return new ht(ut.APP_DELETED,"The Firebase app was deleted.")}function sC(n){return new ht(ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function dl(n,e){return new ht(ut.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function el(n){throw new ht(ut.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=wn.makeFromUrl(e,t)}catch{return new wn(e,"")}if(i.path==="")return i;throw eC(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+o+u,"i"),m={bucket:1,path:3};function _(le){le.path_=decodeURIComponent(le.path)}const C="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",L=new RegExp(`^https?://${E}/${C}/b/${o}/o${I}`,"i"),O={bucket:1,path:3},q=t===$3?"(?:storage.googleapis.com|storage.cloud.google.com)":t,F="([^?#]*)",te=new RegExp(`^https?://${q}/${o}/${F}`,"i"),re=[{regex:d,indices:m,postModify:l},{regex:L,indices:O,postModify:_},{regex:te,indices:{bucket:1,path:2},postModify:_}];for(let le=0;le<re.length;le++){const ye=re[le],de=ye.regex.exec(e);if(de){const k=de[ye.indices.bucket];let S=de[ye.indices.path];S||(S=""),i=new wn(k,S),ye.postModify(i);break}}if(i==null)throw Zw(e);return i}}class oC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(n,e,t){let i=1,o=null,l=null,u=!1,d=0;function m(){return d===2}let _=!1;function C(...F){_||(_=!0,e.apply(null,F))}function E(F){o=setTimeout(()=>{o=null,n(L,m())},F)}function I(){l&&clearTimeout(l)}function L(F,...te){if(_){I();return}if(F){I(),C.call(null,F,...te);return}if(m()||u){I(),C.call(null,F,...te);return}i<64&&(i*=2);let re;d===1?(d=2,re=0):re=(i+Math.random())*1e3,E(re)}let O=!1;function q(F){O||(O=!0,I(),!_&&(o!==null?(F||(d=2),clearTimeout(o),E(0)):F||(d=1)))}return E(0),l=setTimeout(()=>{u=!0,q(!0)},t),q}function lC(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(n){return n!==void 0}function uC(n){return typeof n=="object"&&!Array.isArray(n)}function q1(n){return typeof n=="string"||n instanceof String}function H2(n){return $1()&&n instanceof Blob}function $1(){return typeof Blob<"u"}function W2(n,e,t,i){if(i<e)throw qf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw qf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function G3(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var bs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(bs||(bs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,t,i,o,l,u,d,m,_,C,E,I=!0,L=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=m,this.timeout_=_,this.progressCallback_=C,this.connectionFactory_=E,this.retry=I,this.isUsingEmulator=L,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,q)=>{this.resolve_=O,this.reject_=q,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new su(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const u=d=>{const m=d.loaded,_=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,_)};this.progressCallback_!==null&&l.addUploadProgressListener(u),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(u),this.pendingConnection_=null;const d=l.getErrorCode()===bs.NO_ERROR,m=l.getStatus();if(!d||hC(m,this.additionalRetryCodes_)&&this.retry){const C=l.getErrorCode()===bs.ABORT;i(!1,new su(!1,null,C));return}const _=this.successCodes_.indexOf(m)!==-1;i(!0,new su(_,l))})},t=(i,o)=>{const l=this.resolve_,u=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(d,d.getResponse());cC(m)?l(m):l()}catch(m){u(m)}else if(d!==null){const m=B1();m.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,m)):u(m)}else if(o.canceled){const m=this.appDelete_?W3():Jw();u(m)}else{const m=Yw();u(m)}};this.canceled_?t(!1,new su(!1,null,!0)):this.backoffId_=aC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class su{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function fC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function pC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function gC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function yC(n,e,t,i,o,l,u=!0,d=!1){const m=G3(n.urlParams),_=n.url+m,C=Object.assign({},n.headers);return mC(C,e),fC(C,t),pC(C,l),gC(C,i),new dC(_,n.method,C,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _C(...n){const e=vC();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if($1())return new Blob(n);throw new ht(ut.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wC(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(n){if(typeof atob>"u")throw iC("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class of{constructor(e,t){this.data=e,this.contentType=t||null}}function xC(n,e){switch(n){case gr.RAW:return new of(K3(e));case gr.BASE64:case gr.BASE64URL:return new of(Q3(n,e));case gr.DATA_URL:return new of(TC(e),IC(e))}throw B1()}function K3(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,u=n.charCodeAt(++t);i=65536|(l&1023)<<10|u&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function EC(n){let e;try{e=decodeURIComponent(n)}catch{throw dl(gr.DATA_URL,"Malformed data URL.")}return K3(e)}function Q3(n,e){switch(n){case gr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw dl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case gr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw dl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=CC(e)}catch(o){throw o.message.includes("polyfill")?o:dl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class X3{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw dl(gr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=SC(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function TC(n){const e=new X3(n);return e.base64?Q3(gr.BASE64,e.rest):EC(e.rest)}function IC(n){return new X3(n).contentType}function SC(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){let i=0,o="";H2(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(H2(this.data_)){const i=this.data_,o=wC(i,e,t);return o===null?null:new Ii(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ii(i,!0)}}static getBlob(...e){if($1()){const t=e.map(i=>i instanceof Ii?i.data_:i);return new Ii(_C.apply(null,t))}else{const t=e.map(u=>q1(u)?xC(gr.RAW,u).data:u.data_);let i=0;t.forEach(u=>{i+=u.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(u=>{for(let d=0;d<u.length;d++)o[l++]=u[d]}),new Ii(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(n){let e;try{e=JSON.parse(n)}catch{return null}return uC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function bC(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function J3(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(n,e){return e}class Yt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||AC}}let ou=null;function RC(n){return!q1(n)||n.length<2?n:J3(n)}function Z3(){if(ou)return ou;const n=[];n.push(new Yt("bucket")),n.push(new Yt("generation")),n.push(new Yt("metageneration")),n.push(new Yt("name","fullPath",!0));function e(l,u){return RC(u)}const t=new Yt("name");t.xform=e,n.push(t);function i(l,u){return u!==void 0?Number(u):u}const o=new Yt("size");return o.xform=i,n.push(o),n.push(new Yt("timeCreated")),n.push(new Yt("updated")),n.push(new Yt("md5Hash",null,!0)),n.push(new Yt("cacheControl",null,!0)),n.push(new Yt("contentDisposition",null,!0)),n.push(new Yt("contentEncoding",null,!0)),n.push(new Yt("contentLanguage",null,!0)),n.push(new Yt("contentType",null,!0)),n.push(new Yt("metadata","customMetadata",!0)),ou=n,ou}function PC(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new wn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function NC(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const u=t[l];i[u.local]=u.xform(i,e[u.server])}return PC(i,n),i}function e6(n,e,t){const i=Y3(e);return i===null?null:NC(n,i,t)}function DC(n,e,t,i){const o=Y3(e);if(o===null||!q1(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const u=encodeURIComponent;return l.split(",").map(_=>{const C=n.bucket,E=n.fullPath,I="/b/"+u(C)+"/o/"+u(E),L=hh(I,t,i),O=G3({alt:"media",token:_});return L+O})[0]}function VC(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class H1{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t6(n){if(!n)throw B1()}function LC(n,e){function t(i,o){const l=e6(n,o,e);return t6(l!==null),l}return t}function MC(n,e){function t(i,o){const l=e6(n,o,e);return t6(l!==null),DC(l,o,n.host,n._protocol)}return t}function n6(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Qw():o=Kw():t.getStatus()===402?o=Gw(n.bucket):t.getStatus()===403?o=Xw(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function r6(n){const e=n6(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=Ww(n.path)),l.serverResponse=o.serverResponse,l}return t}function jC(n,e,t){const i=e.fullServerUrl(),o=hh(i,n.host,n._protocol),l="GET",u=n.maxOperationRetryTime,d=new H1(o,l,MC(n,t),u);return d.errorHandler=r6(e),d}function OC(n,e){const t=e.fullServerUrl(),i=hh(t,n.host,n._protocol),o="DELETE",l=n.maxOperationRetryTime;function u(m,_){}const d=new H1(i,o,u,l);return d.successCodes=[200,204],d.errorHandler=r6(e),d}function FC(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function UC(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=FC(null,e)),i}function zC(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function d(){let re="";for(let le=0;le<2;le++)re=re+Math.random().toString().slice(2);return re}const m=d();u["Content-Type"]="multipart/related; boundary="+m;const _=UC(e,i,o),C=VC(_,t),E="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+C+`\r
--`+m+`\r
Content-Type: `+_.contentType+`\r
\r
`,I=`\r
--`+m+"--",L=Ii.getBlob(E,i,I);if(L===null)throw nC();const O={name:_.fullPath},q=hh(l,n.host,n._protocol),F="POST",te=n.maxUploadRetryTime,J=new H1(q,F,LC(n,t),te);return J.urlParams=O,J.headers=u,J.body=L.uploadData(),J.errorHandler=n6(e),J}class BC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw el("cannot .send() more than once");if(Wi(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const u in l)l.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,l[u].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw el("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw el("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw el("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw el("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qC extends BC{initXhr(){this.xhr_.responseType="text"}}function W1(){return new qC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this._service=e,t instanceof wn?this._location=t:this._location=wn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Vs(e,t)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return J3(this._location.path)}get storage(){return this._service}get parent(){const e=kC(this._location.path);if(e===null)return null;const t=new wn(this._location.bucket,e);return new Vs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw sC(e)}}function $C(n,e,t){n._throwIfRoot("uploadBytes");const i=zC(n.storage,n._location,Z3(),new Ii(e,!0),t);return n.storage.makeRequestWithTokens(i,W1).then(o=>({metadata:o,ref:n}))}function HC(n){n._throwIfRoot("getDownloadURL");const e=jC(n.storage,n._location,Z3());return n.storage.makeRequestWithTokens(e,W1).then(t=>{if(t===null)throw rC();return t})}function WC(n){n._throwIfRoot("deleteObject");const e=OC(n.storage,n._location);return n.storage.makeRequestWithTokens(e,W1)}function GC(n,e){const t=bC(n._location.path,e),i=new wn(n._location.bucket,t);return new Vs(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(n){return/^[A-Za-z]+:\/\//.test(n)}function QC(n,e){return new Vs(n,e)}function i6(n,e){if(n instanceof G1){const t=n;if(t._bucket==null)throw tC();const i=new Vs(t,t._bucket);return e!=null?i6(i,e):i}else return e!==void 0?GC(n,e):n}function XC(n,e){if(e&&KC(e)){if(n instanceof G1)return QC(n,e);throw qf("To use ref(service, url), the first argument must be a Storage instance.")}else return i6(n,e)}function G2(n,e){const t=e==null?void 0:e[H3];return t==null?null:wn.makeFromBucketSpec(t,n)}function YC(n,e,t,i={}){n.host=`${e}:${t}`;const o=Wi(e);o&&(Yf(`https://${n.host}/b`),Jf("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:Fg(l,n.app.options.projectId))}class G1{constructor(e,t,i,o,l,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=u,this._bucket=null,this._host=$3,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$w,this._maxUploadRetryTime=Hw,this._requests=new Set,o!=null?this._bucket=wn.makeFromBucketSpec(o,this._host):this._bucket=G2(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=G2(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W2("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W2("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new oC(W3());{const u=yC(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const K2="@firebase/storage",Q2="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6="storage";function K1(n,e,t){return n=Ye(n),$C(n,e,t)}function Q1(n){return n=Ye(n),HC(n)}function JC(n){return n=Ye(n),WC(n)}function Mu(n,e){return n=Ye(n),XC(n,e)}function ZC(n=Wu(),e){n=Ye(n);const i=Gi(n,s6).getImmediate({identifier:e}),o=Mg("storage");return o&&ex(i,...o),i}function ex(n,e,t,i={}){YC(n,e,t,i)}function tx(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new G1(t,i,o,e,Os)}function nx(){Kn(new Dn(s6,tx,"PUBLIC").setMultipleInstances(!0)),cn(K2,Q2,""),cn(K2,Q2,"esm2020")}nx();function o6(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rx=o6,a6=new js("auth","Firebase",o6());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Hu("@firebase/auth");function ix(n,...e){ju.logLevel<=Ve.WARN&&ju.warn(`Auth (${Os}): ${n}`,...e)}function gu(n,...e){ju.logLevel<=Ve.ERROR&&ju.error(`Auth (${Os}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n,...e){throw X1(n,...e)}function Cr(n,...e){return X1(n,...e)}function l6(n,e,t){const i={...rx(),[e]:t};return new js("auth","Firebase",i).create(e,{appName:n.name})}function ji(n){return l6(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function X1(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return a6.create(n,...e)}function xe(n,e,...t){if(!n)throw X1(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gu(e),new Error(e)}function Gr(n,e){n||Br(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function sx(){return X2()==="http:"||X2()==="https:"}function X2(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sx()||Ug()||"connection"in navigator)?navigator.onLine:!0}function ax(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Gr(t>e,"Short delay should be less than long delay!"),this.isMobile=N5()||L5()}get(){return ox()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(n,e){Gr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ux=new Vl(3e4,6e4);function Bs(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Xi(n,e,t,i,o={}){return u6(n,o,async()=>{let l={},u={};i&&(e==="GET"?u=i:l={body:JSON.stringify(i)});const d=Sl({key:n.config.apiKey,...u}).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const _={method:e,headers:m,...l};return V5()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&Wi(n.emulatorConfig.host)&&(_.credentials="include"),c6.fetch()(await h6(n,n.config.apiHost,t,d),_)})}async function u6(n,e,t){n._canInitEmulator=!1;const i={...lx,...e};try{const o=new dx(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw au(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const d=l.ok?u.errorMessage:u.error.message,[m,_]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw au(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw au(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw au(n,"user-disabled",u);const C=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw l6(n,C,_);Xn(n,C)}}catch(o){if(o instanceof Vn)throw o;Xn(n,"network-request-failed",{message:String(o)})}}async function dh(n,e,t,i,o={}){const l=await Xi(n,e,t,i,o);return"mfaPendingCredential"in l&&Xn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function h6(n,e,t,i){const o=`${e}${t}?${i}`,l=n,u=l.config.emulator?Y1(n.config,o):`${n.config.apiScheme}://${o}`;return cx.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function hx(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Cr(this.auth,"network-request-failed")),ux.get())})}}function au(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Cr(n,e,i);return o.customData._tokenResponse=t,o}function Y2(n){return n!==void 0&&n.enterprise!==void 0}class fx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function px(n,e){return Xi(n,"GET","/v2/recaptchaConfig",Bs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(n,e){return Xi(n,"POST","/v1/accounts:delete",e)}async function Ou(n,e){return Xi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gx(n,e=!1){const t=Ye(n),i=await t.getIdToken(e),o=J1(i);xe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:fl(af(o.auth_time)),issuedAtTime:fl(af(o.iat)),expirationTime:fl(af(o.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function af(n){return Number(n)*1e3}function J1(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Vg(t);return o?JSON.parse(o):(gu("Failed to decode base64 JWT payload"),null)}catch(o){return gu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function J2(n){const e=J1(n);return xe(e,"internal-error"),xe(typeof e.exp<"u","internal-error"),xe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Vn&&yx(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function yx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fl(this.lastLoginAt),this.creationTime=fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(n){var E;const e=n.auth,t=await n.getIdToken(),i=await Tl(n,Ou(e,{idToken:t}));xe(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(E=o.providerUserInfo)!=null&&E.length?d6(o.providerUserInfo):[],u=wx(n.providerData,l),d=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),_=d?m:!1,C={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Hf(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,C)}async function _x(n){const e=Ye(n);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wx(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function d6(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(n,e){const t=await u6(n,{},async()=>{const i=Sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,u=await h6(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:d,body:i};return n.emulatorConfig&&Wi(n.emulatorConfig.host)&&(m.credentials="include"),c6.fetch()(u,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xx(n,e){return Xi(n,"POST","/v2/accounts:revokeToken",Bs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){xe(e.idToken,"internal-error"),xe(typeof e.idToken<"u","internal-error"),xe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):J2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){xe(e.length!==0,"internal-error");const t=J2(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(xe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await Cx(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,u=new Bo;return i&&(xe(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),o&&(xe(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),l&&(xe(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n,e){xe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wn{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new vx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Hf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Tl(this,this.stsTokenManager.getToken(this.auth,e));return xe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gx(this,e)}reload(){return _x(this)}_assign(e){this!==e&&(xe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){xe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(ji(this.auth));const e=await this.getIdToken();return await Tl(this,mx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,u=t.photoURL??void 0,d=t.tenantId??void 0,m=t._redirectEventId??void 0,_=t.createdAt??void 0,C=t.lastLoginAt??void 0,{uid:E,emailVerified:I,isAnonymous:L,providerData:O,stsTokenManager:q}=t;xe(E&&q,e,"internal-error");const F=Bo.fromJSON(this.name,q);xe(typeof E=="string",e,"internal-error"),Ti(i,e.name),Ti(o,e.name),xe(typeof I=="boolean",e,"internal-error"),xe(typeof L=="boolean",e,"internal-error"),Ti(l,e.name),Ti(u,e.name),Ti(d,e.name),Ti(m,e.name),Ti(_,e.name),Ti(C,e.name);const te=new Wn({uid:E,auth:e,email:o,emailVerified:I,displayName:i,isAnonymous:L,photoURL:u,phoneNumber:l,tenantId:d,stsTokenManager:F,createdAt:_,lastLoginAt:C});return O&&Array.isArray(O)&&(te.providerData=O.map(J=>({...J}))),m&&(te._redirectEventId=m),te}static async _fromIdTokenResponse(e,t,i=!1){const o=new Bo;o.updateFromServerResponse(t);const l=new Wn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Fu(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];xe(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?d6(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new Bo;d.updateFromIdToken(i);const m=new Wn({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Hf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,_),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=new Map;function qr(n){Gr(n instanceof Function,"Expected a class definition");let e=Z2.get(n);return e?(Gr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Z2.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f6{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}f6.type="NONE";const eg=f6;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n,e,t){return`firebase:${n}:${e}:${t}`}class qo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=yu(this.userKey,o.apiKey,l),this.fullPersistenceKey=yu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ou(this.auth,{idToken:e}).catch(()=>{});return t?Wn._fromGetAccountInfoResponse(this.auth,t,e):null}return Wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new qo(qr(eg),e,i);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||qr(eg);const u=yu(i,e.config.apiKey,e.name);let d=null;for(const _ of t)try{const C=await _._get(u);if(C){let E;if(typeof C=="string"){const I=await Ou(e,{idToken:C}).catch(()=>{});if(!I)break;E=await Wn._fromGetAccountInfoResponse(e,I,C)}else E=Wn._fromJSON(e,C);_!==l&&(d=E),l=_;break}}catch{}const m=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new qo(l,e,i):(l=m[0],d&&await l._set(u,d.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(u)}catch{}})),new qo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y6(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p6(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_6(e))return"Blackberry";if(w6(e))return"Webos";if(m6(e))return"Safari";if((e.includes("chrome/")||g6(e))&&!e.includes("edge/"))return"Chrome";if(v6(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function p6(n=Gt()){return/firefox\//i.test(n)}function m6(n=Gt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g6(n=Gt()){return/crios\//i.test(n)}function y6(n=Gt()){return/iemobile/i.test(n)}function v6(n=Gt()){return/android/i.test(n)}function _6(n=Gt()){return/blackberry/i.test(n)}function w6(n=Gt()){return/webos/i.test(n)}function Z1(n=Gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ex(n=Gt()){var e;return Z1(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Tx(){return M5()&&document.documentMode===10}function C6(n=Gt()){return Z1(n)||v6(n)||w6(n)||_6(n)||/windows phone/i.test(n)||y6(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x6(n,e=[]){let t;switch(n){case"Browser":t=tg(Gt());break;case"Worker":t=`${tg(Gt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Os}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((u,d)=>{try{const m=e(l);u(m)}catch(m){d(m)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(n,e={}){return Xi(n,"GET","/v2/passwordPolicy",Bs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=6;class bx{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??kx,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ng(this),this.idTokenSubscription=new ng(this),this.beforeStateQueue=new Ix(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a6,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await qo.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ou(this,{idToken:e}),i=await Wn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Rn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(l=this.redirectUser)==null?void 0:l._redirectEventId,d=i==null?void 0:i._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===d)&&(m!=null&&m.user)&&(i=m.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(u){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return xe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(ji(this));const t=e?Ye(e):null;return t&&xe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&xe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sx(this),t=new bx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new js("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await xx(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qr(e)||this._popupRedirectResolver;xe(t,this,"argument-error"),this.redirectPersistenceManager=await qo.create(this,[qr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(xe(d,this,"internal-error"),d.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,o);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return xe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x6(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&ix(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ra(n){return Ye(n)}class ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=q5(t=>this.observer=t)}get next(){return xe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rx(n){fh=n}function E6(n){return fh.loadJS(n)}function Px(){return fh.recaptchaEnterpriseScript}function Nx(){return fh.gapiScript}function Dx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Vx{constructor(){this.enterprise=new Lx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Lx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Mx="recaptcha-enterprise",T6="NO_RECAPTCHA";class jx{constructor(e){this.type=Mx,this.auth=ra(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,d)=>{px(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const _=new fx(m);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,u(_.siteKey)}}).catch(m=>{d(m)})})}function o(l,u,d){const m=window.grecaptcha;Y2(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(_=>{u(_)}).catch(()=>{u(T6)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Vx().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(d=>{if(!t&&Y2(window.grecaptcha))o(d,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=Px();m.length!==0&&(m+=d),E6(m).then(()=>{o(d,l,u)}).catch(_=>{u(_)})}}).catch(d=>{u(d)})})}}async function rg(n,e,t,i=!1,o=!1){const l=new jx(n);let u;if(o)u=T6;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const d={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,_=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ig(n,e,t,i,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await rg(n,e,t,t==="getOobCode");return i(n,u)}else return i(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await rg(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(n,e){const t=Gi(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Oi(l,e??{}))return o;Xn(o,"already-initialized")}return t.initialize({options:e})}function Fx(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(qr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ux(n,e,t){const i=ra(n);xe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=I6(e),{host:u,port:d}=zx(e),m=d===null?"":`:${d}`,_={url:`${l}//${u}${m}/`},C=Object.freeze({host:u,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){xe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),xe(Oi(_,i.config.emulator)&&Oi(C,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=_,i.emulatorConfig=C,i.settings.appVerificationDisabledForTesting=!0,Wi(u)?(Yf(`${l}//${u}${m}`),Jf("Auth",!0)):Bx()}function I6(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zx(n){const e=I6(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:sg(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:sg(u)}}}function sg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Bx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function qx(n,e){return Xi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(n,e){return dh(n,"POST","/v1/accounts:signInWithPassword",Bs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(n,e){return dh(n,"POST","/v1/accounts:signInWithEmailLink",Bs(n,e))}async function Wx(n,e){return dh(n,"POST","/v1/accounts:signInWithEmailLink",Bs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends ep{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ig(e,t,"signInWithPassword",$x);case"emailLink":return Hx(e,{email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ig(e,i,"signUpPassword",qx);case"emailLink":return Wx(e,{idToken:t,email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n,e){return dh(n,"POST","/v1/accounts:signInWithIdp",Bs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx="http://localhost";class Ls extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const u=new Ls(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return $o(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,$o(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$o(e,t)}buildRequest(){const e={requestUri:Gx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qx(n){const e=tl(nl(n)).link,t=e?tl(nl(e)).deep_link_id:null,i=tl(nl(n)).deep_link_id;return(i?tl(nl(i)).link:null)||i||t||e||n}class tp{constructor(e){const t=tl(nl(e)),i=t.apiKey??null,o=t.oobCode??null,l=Kx(t.mode??null);xe(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Qx(e);try{return new tp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.providerId=ia.PROVIDER_ID}static credential(e,t){return Il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=tp.parseLink(t);return xe(i,"argument-error"),Il._fromEmailAndCode(e,i.code,i.tenantId)}}ia.PROVIDER_ID="password";ia.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ia.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends S6{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Ll{constructor(){super("facebook.com")}static credential(e){return Ls._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.FACEBOOK_SIGN_IN_METHOD="facebook.com";Si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ls._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ki.credential(t,i)}catch{return null}}}ki.GOOGLE_SIGN_IN_METHOD="google.com";ki.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Ll{constructor(){super("github.com")}static credential(e){return Ls._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bi.credential(e.oauthAccessToken)}catch{return null}}}bi.GITHUB_SIGN_IN_METHOD="github.com";bi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Ll{constructor(){super("twitter.com")}static credential(e,t){return Ls._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ai.credential(t,i)}catch{return null}}}Ai.TWITTER_SIGN_IN_METHOD="twitter.com";Ai.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Wn._fromIdTokenResponse(e,i,o),u=og(i);return new Yo({user:l,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=og(i);return new Yo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function og(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Vn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Uu(e,t,i,o)}}function k6(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(n,l,e,i):l})}async function Xx(n,e,t=!1){const i=await Tl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(n,e,t=!1){const{auth:i}=n;if(Rn(i.app))return Promise.reject(ji(i));const o="reauthenticate";try{const l=await Tl(n,k6(i,o,e,n),t);xe(l.idToken,i,"internal-error");const u=J1(l.idToken);xe(u,i,"internal-error");const{sub:d}=u;return xe(n.uid===d,i,"user-mismatch"),Yo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Xn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b6(n,e,t=!1){if(Rn(n.app))return Promise.reject(ji(n));const i="signIn",o=await k6(n,i,e),l=await Yo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function Jx(n,e){return b6(ra(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(n){const e=ra(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function eE(n,e,t){return Rn(n.app)?Promise.reject(ji(n)):Jx(Ye(n),ia.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Zx(n),i})}function tE(n,e,t,i){return Ye(n).onIdTokenChanged(e,t,i)}function nE(n,e,t){return Ye(n).beforeAuthStateChanged(e,t)}function rE(n,e,t,i){return Ye(n).onAuthStateChanged(e,t,i)}function iE(n){return Ye(n).signOut()}const zu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zu,"1"),this.storage.removeItem(zu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=1e3,oE=10;class R6 extends A6{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C6(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,m)=>{this.notifyListeners(u,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);Tx()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,oE):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},sE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}R6.type="LOCAL";const aE=R6;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P6 extends A6{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}P6.type="SESSION";const N6=P6;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new ph(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(u).map(async _=>_(t.origin,l)),m=await lE(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((d,m)=>{const _=np("",20);o.port1.start();const C=setTimeout(()=>{m(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(E){const I=E;if(I.data.eventId===_)switch(I.data.status){case"ack":clearTimeout(C),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(C),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return window}function uE(n){xr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D6(){return typeof xr().WorkerGlobalScope<"u"&&typeof xr().importScripts=="function"}async function hE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function fE(){return D6()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V6="firebaseLocalStorageDb",pE=1,Bu="firebaseLocalStorage",L6="fbase_key";class Ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mh(n,e){return n.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function mE(){const n=indexedDB.deleteDatabase(V6);return new Ml(n).toPromise()}function Wf(){const n=indexedDB.open(V6,pE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Bu,{keyPath:L6})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Bu)?e(i):(i.close(),await mE(),e(await Wf()))})})}async function ag(n,e,t){const i=mh(n,!0).put({[L6]:e,value:t});return new Ml(i).toPromise()}async function gE(n,e){const t=mh(n,!1).get(e),i=await new Ml(t).toPromise();return i===void 0?null:i.value}function lg(n,e){const t=mh(n,!0).delete(e);return new Ml(t).toPromise()}const yE=800,vE=3;class M6{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>vE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D6()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(fE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await hE(),!this.activeServiceWorker)return;this.sender=new cE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wf();return await ag(e,zu,"1"),await lg(e,zu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ag(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>gE(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=mh(o,!1).getAll();return new Ml(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M6.type="LOCAL";const _E=M6;new Vl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n,e){return e?qr(e):(xe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $o(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $o(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $o(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CE(n){return b6(n.auth,new rp(n),n.bypassAuthState)}function xE(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),Yx(t,new rp(n),n.bypassAuthState)}async function EE(n){const{auth:e,user:t}=n;return xe(t,e,"internal-error"),Xx(t,new rp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j6{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:u,type:d}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CE;case"linkViaPopup":case"linkViaRedirect":return EE;case"reauthViaPopup":case"reauthViaRedirect":return xE;default:Xn(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new Vl(2e3,1e4);class jo extends j6{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return xe(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TE.get())};e()}}jo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="pendingRedirect",vu=new Map;class SE extends j6{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=vu.get(this.auth._key());if(!e){try{const i=await kE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}vu.set(this.auth._key(),e)}return this.bypassAuthState||vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kE(n,e){const t=RE(e),i=AE(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function bE(n,e){vu.set(n._key(),e)}function AE(n){return qr(n._redirectPersistence)}function RE(n){return yu(IE,n.config.apiKey,n.name)}async function PE(n,e,t=!1){if(Rn(n.app))return Promise.reject(ji(n));const i=ra(n),o=wE(i,e),u=await new SE(i,o,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=600*1e3;class DE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!O6(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(Cr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NE&&this.cachedEventUids.clear(),this.cachedEventUids.has(cg(e))}saveEventToCache(e){this.cachedEventUids.add(cg(e)),this.lastProcessedEventTime=Date.now()}}function cg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function O6({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O6(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(n,e={}){return Xi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jE=/^https?/;async function OE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await LE(n);for(const t of e)try{if(FE(t))return}catch{}Xn(n,"unauthorized-domain")}function FE(n){const e=$f(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!jE.test(t))return!1;if(ME.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=new Vl(3e4,6e4);function ug(){const n=xr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function zE(n){return new Promise((e,t)=>{var o,l,u;function i(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),t(Cr(n,"network-request-failed"))},timeout:UE.get()})}if((l=(o=xr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((u=xr().gapi)!=null&&u.load)i();else{const d=Dx("iframefcb");return xr()[d]=()=>{gapi.load?i():t(Cr(n,"network-request-failed"))},E6(`${Nx()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw _u=null,e})}let _u=null;function BE(n){return _u=_u||zE(n),_u}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=new Vl(5e3,15e3),$E="__/auth/iframe",HE="emulator/auth/iframe",WE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KE(n){const e=n.config;xe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Y1(e,HE):`https://${n.config.authDomain}/${$E}`,i={apiKey:e.apiKey,appName:n.name,v:Os},o=GE.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Sl(i).slice(1)}`}async function QE(n){const e=await BE(n),t=xr().gapi;return xe(t,n,"internal-error"),e.open({where:document.body,url:KE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WE,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=Cr(n,"network-request-failed"),d=xr().setTimeout(()=>{l(u)},qE.get());function m(){xr().clearTimeout(d),o(i)}i.ping(m).then(m,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YE=500,JE=600,ZE="_blank",eT="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tT(n,e,t,i=YE,o=JE){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const m={...XE,width:i.toString(),height:o.toString(),top:l,left:u},_=Gt().toLowerCase();t&&(d=g6(_)?ZE:t),p6(_)&&(e=e||eT,m.scrollbars="yes");const C=Object.entries(m).reduce((I,[L,O])=>`${I}${L}=${O},`,"");if(Ex(_)&&d!=="_self")return nT(e||"",d),new hg(null);const E=window.open(e||"",d,C);xe(E,n,"popup-blocked");try{E.focus()}catch{}return new hg(E)}function nT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="__/auth/handler",iT="emulator/auth/handler",sT=encodeURIComponent("fac");async function dg(n,e,t,i,o,l){xe(n.config.authDomain,n,"auth-domain-config-required"),xe(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Os,eventId:o};if(e instanceof S6){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",B5(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[C,E]of Object.entries({}))u[C]=E}if(e instanceof Ll){const C=e.getScopes().filter(E=>E!=="");C.length>0&&(u.scopes=C.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const C of Object.keys(d))d[C]===void 0&&delete d[C];const m=await n._getAppCheckToken(),_=m?`#${sT}=${encodeURIComponent(m)}`:"";return`${oT(n)}?${Sl(d).slice(1)}${_}`}function oT({config:n}){return n.emulator?Y1(n,iT):`https://${n.authDomain}/${rT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="webStorageSupport";class aT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N6,this._completeRedirectFn=PE,this._overrideRedirectResult=bE}async _openPopup(e,t,i,o){var u;Gr((u=this.eventManagers[e._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const l=await dg(e,t,i,$f(),o);return tT(e,l,np())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await dg(e,t,i,$f(),o);return uE(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Gr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await QE(e),i=new DE(e);return t.register("authEvent",o=>(xe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lf,{type:lf},o=>{var u;const l=(u=o==null?void 0:o[0])==null?void 0:u[lf];l!==void 0&&t(!!l),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=OE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return C6()||m6()||Z1()}}const lT=aT;var fg="@firebase/auth",pg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){xe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hT(n){Kn(new Dn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=i.options;xe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x6(n)},_=new Ax(i,o,l,m);return Fx(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Kn(new Dn("auth-internal",e=>{const t=ra(e.getProvider("auth").getImmediate());return(i=>new cT(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(fg,pg,uT(n)),cn(fg,pg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=300,fT=Og("authIdTokenMaxAge")||dT;let mg=null;const pT=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>fT)return;const o=t==null?void 0:t.token;mg!==o&&(mg=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function mT(n=Wu()){const e=Gi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Ox(n,{popupRedirectResolver:lT,persistence:[_E,aE,N6]}),i=Og("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=pT(l.toString());nE(t,u,()=>u(t.currentUser)),tE(t,d=>u(d))}}const o=Lg("auth");return o&&Ux(t,`http://${o}`),t}function gT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Rx({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Cr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",gT().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hT("Browser");const yT={apiKey:"AIzaSyBWoMq00y7kIR6QsXO_Z_lwSC6DS2O4K5I",authDomain:"costic2026.firebaseapp.com",projectId:"costic2026",storageBucket:"costic2026.firebasestorage.app",messagingSenderId:"1024891143489",appId:"1:1024891143489:web:6bd4f6014f16c5e3088dc0",measurementId:"G-SE28R81YF2"},gh=Wg(yT);Fw(gh);const Nn=i_(gh),qu=ZC(gh),ip=mT(gh),vT=()=>{const[n,e]=ge.useState(""),[t,i]=ge.useState(""),[o,l]=ge.useState(!1),u=async d=>{if(d.preventDefault(),!!n){l(!0),i("");try{await El(Hi(Nn,"newsletter_subscriptions"),{email:n,subscribedAt:Mi(),source:"website_footer"}),i("Merci pour votre inscription à notre newsletter !"),e(""),setTimeout(()=>i(""),5e3)}catch(m){console.error("Erreur lors de l'inscription à la newsletter:",m),i("Erreur lors de l'inscription. Veuillez réessayer."),setTimeout(()=>i(""),3e3)}finally{l(!1)}}};return p.jsx("footer",{className:"bg-primary text-neutral-200 font-body",children:p.jsxs("div",{className:"container mx-auto px-6 py-12",children:[p.jsxs("div",{className:"grid md:grid-cols-3 gap-10",children:[p.jsxs("div",{className:"mb-6 md:mb-0",children:[p.jsx("h3",{className:"text-xl font-black mb-2 relative",style:{letterSpacing:"1px"},children:p.jsxs("div",{className:"relative inline-block",children:[p.jsx("div",{className:"relative text-white",style:{fontFamily:"Arial Black, sans-serif",letterSpacing:"1px",transform:"perspective(300px) rotateX(3deg)",textShadow:"0 0 0px transparent"},children:"CoSTIC 2026"}),p.jsx("div",{className:"absolute inset-0 text-white/60 transform translate-x-1 translate-y-1",style:{fontFamily:"Arial Black, sans-serif",letterSpacing:"1px",transform:"perspective(300px) rotateX(3deg) translateX(1px) translateY(1px)"},children:"CoSTIC 2026"}),p.jsx("div",{className:"absolute inset-0 text-white/40 transform translate-x-2 translate-y-2",style:{fontFamily:"Arial Black, sans-serif",letterSpacing:"1px",transform:"perspective(300px) rotateX(3deg) translateX(2px) translateY(2px)"},children:"CoSTIC 2026"}),p.jsx("div",{className:"absolute inset-0 text-white/20 transform translate-x-3 translate-y-3",style:{fontFamily:"Arial Black, sans-serif",letterSpacing:"1px",transform:"perspective(300px) rotateX(3deg) translateX(3px) translateY(3px)"},children:"CoSTIC 2026"})]})}),p.jsx("p",{className:"text-sm text-neutral-300",children:"Organisé par l'École Supérieure Africaine des TIC (ESATIC)"})]}),p.jsxs("div",{className:"text-sm",children:[p.jsx("h3",{className:"text-xl font-bold mb-2 text-white font-sans",children:"Contact"}),p.jsx("p",{className:"text-neutral-300",children:"Secrétariat du Comité Scientifique"}),p.jsx("a",{href:"mailto:costic2026@esatic.edu.ci",className:"text-secondary hover:text-white transition-colors duration-300 block",children:"costic2026@esatic.edu.ci"}),p.jsx("a",{href:"http://costic2026.esatic.ci",target:"_blank",rel:"noopener noreferrer",className:"text-secondary hover:text-white transition-colors duration-300",children:"http://costic2026.esatic.ci"})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-bold mb-2 text-white font-sans",children:"Restez Informé"}),p.jsx("p",{className:"text-sm text-neutral-300 mb-4",children:"Abonnez-vous à notre newsletter pour recevoir les dernières actualités."}),p.jsxs("form",{onSubmit:u,children:[p.jsxs("div",{className:"flex items-center",children:[p.jsx("input",{type:"email",value:n,onChange:d=>e(d.target.value),placeholder:"Votre adresse e-mail",className:"bg-secondary/20 border-2 border-secondary/50 rounded-l-lg px-4 py-3 w-full text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition",required:!0}),p.jsx("button",{type:"submit",disabled:o,className:"bg-secondary text-white px-4 py-3 rounded-r-lg hover:bg-secondary/90 transition-colors duration-300 border-2 border-secondary disabled:opacity-50 disabled:cursor-not-allowed",children:o?p.jsxs("svg",{className:"animate-spin h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]}),t&&p.jsx("p",{className:"text-green-400 text-sm mt-2",children:t})]})]})]}),p.jsx("div",{className:"mt-10 border-t border-white/20 pt-8"})]})})},Hn=({title:n,children:e,className:t=""})=>{const[i,o]=ge.useState(!1),l=ge.useRef(null);return ge.useEffect(()=>{const u=new IntersectionObserver(([d])=>{d.isIntersecting&&(o(!0),u.unobserve(d.target))},{threshold:.1});return l.current&&u.observe(l.current),()=>{l.current&&u.unobserve(l.current)}},[]),p.jsx("section",{ref:l,className:`py-16 md:py-20 ${t}`,children:p.jsxs("div",{className:"container mx-auto px-6",children:[p.jsx("div",{className:`transition-all duration-700 ease-out ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:p.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center text-primary mb-12 font-sans",children:n})}),e]})})},_T=({events:n})=>p.jsx("div",{className:"max-w-4xl mx-auto",children:p.jsx("ul",{className:"divide-y divide-neutral-200 rounded-xl overflow-hidden border border-neutral-200 bg-white",children:n.map(e=>{const t=e.date.split(" "),i=t[0]||e.date,o=t[1]||"";return p.jsxs("li",{className:"flex items-start gap-4 p-3 md:p-4",children:[p.jsx("div",{className:"shrink-0 w-28 md:w-32",children:p.jsxs("div",{className:"rounded-lg border border-costic-blue/20 bg-pure-white px-3 py-2 text-center shadow-sm",children:[p.jsx("div",{className:"text-xs font-semibold text-costic-blue uppercase tracking-wide",children:o}),p.jsx("div",{className:"text-lg md:text-xl font-extrabold text-costic-blue leading-tight",children:i})]})}),p.jsx("div",{className:"flex-1 min-w-0",children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("h3",{className:"text-sm md:text-base font-semibold text-neutral-800 font-sans truncate",children:e.description}),e.isHighlighted&&p.jsx("span",{className:"text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-accent text-white font-semibold whitespace-nowrap",children:"Événement principal"})]})})]},e.date)})})}),wT=[{nom:"Pr. Oumtanaga Souleymane",affiliation:"INPHB",pays:"Côte d'Ivoire",drapeau:"🇨🇮",photo:"/img/oumtanaga.jpg",titre:"Professeur"},{nom:"Dr (MC) Diaby Moustapha",affiliation:"ESATIC",pays:"Côte d'Ivoire",drapeau:"🇨🇮",photo:"/img/diaby.jpg",titre:"Maître de Conférences"},{nom:"Dr. Diarra Mamadou",affiliation:"UFHB",pays:"Côte d'Ivoire",drapeau:"🇨🇮",photo:"/img/Dr_Diarra_Mamadou.jpg",titre:"Docteur"},{nom:"Pr. Hamadou Saliah-Hassane",affiliation:"UQAM",pays:"Niger/Canada",drapeau:"🇳🇪🇨🇦",photo:"/img/Pr. Hamadou Saliah-Hassane (UQAM, Niger_Canada).jpg",titre:"Professeur"}],CT=()=>{const n=ge.useRef(null),e=ge.useRef(null),t=wT;return ge.useEffect(()=>{const i=n.current,o=e.current;if(!i||!o)return;const l=()=>{let d=0;o.childNodes.forEach(E=>{E instanceof HTMLElement&&(d+=E.offsetWidth+32)});const m=-d,C=Math.max(30,Math.round(Math.abs(m)*.045));o.style.setProperty("--scroll-end",`${m}px`),o.style.setProperty("--scroll-duration",`${C}s`)};l();const u=new ResizeObserver(()=>l());return u.observe(i),()=>u.disconnect()},[]),p.jsx("div",{className:"relative max-w-7xl mx-auto overflow-hidden",ref:n,children:p.jsx("div",{className:"flex animate-scroll-distance space-x-8 whitespace-nowrap",ref:e,children:t.map((i,o)=>p.jsxs("div",{className:"flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center",children:[p.jsxs("div",{className:"relative mb-4",children:[p.jsx("img",{src:i.photo,alt:i.nom,className:"w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"}),p.jsx("div",{className:"absolute -bottom-2 -right-2 text-2xl",children:i.drapeau})]}),p.jsx("h3",{className:"text-lg font-bold text-primary mb-1 font-sans",children:i.nom}),p.jsx("p",{className:"text-sm text-secondary font-semibold mb-2",children:i.titre}),p.jsx("p",{className:"text-sm text-neutral-600 mb-1",children:i.affiliation}),p.jsxs("p",{className:"text-xs text-neutral-500 flex items-center justify-center gap-1",children:[p.jsx("span",{children:i.drapeau}),p.jsx("span",{children:i.pays})]})]},`${i.nom}-${o}`))})})},xT=[{nom:"MESRS",description:"Ministère de l'Enseignement Supérieur et de la Recherche Scientifique",logo:"/img/mesrs.png",type:"Institutionnel",site:"https://www.enseignement.gouv.ci"},{nom:"ARTCI",description:"Autorité de Régulation des Télécommunications/TIC",logo:"/img/artci.png",type:"Régulation",site:"https://www.artci.ci"},{nom:"ANSUT",description:"Agence Nationale du Service Universel des Télécommunications",logo:"/img/an.png",type:"Institutionnel",site:"https://ansut.ci"},{nom:"AUF",description:"Agence Universitaire de la Francophonie",logo:"/img/AUF - Agence Universitaire de la Francophonie.png",type:"International",site:"https://www.auf.org"},{nom:"Sahanalytics",description:"Data & Analytics",logo:"/img/sah.png",type:"Technologie",site:"https://sahanalytics.com/"},{nom:"EAI",description:"European Alliance for Innovation",logo:"/img/EAI - European Alliance for Innovation.png",type:"International",site:"https://eai.eu"},{nom:"Orange Côte d'Ivoire",description:"Opérateur Télécoms",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png",type:"Télécoms",site:"https://www.orange.ci"},{nom:"Huawei",description:"Technologies et Solutions TIC",logo:"/img/huawei.png",type:"Technologie",site:"https://www.huawei.com"},{nom:"MTN Côte d'Ivoire",description:"Opérateur Télécoms",logo:"/img/mtn.png",type:"Télécoms",site:"https://www.mtn.ci"},{nom:"Microsoft",description:"Technologies et Solutions Numériques",logo:"/img/microsoft.png",type:"Technologie",site:"https://www.microsoft.com"},{nom:"RTI",description:"Radiodiffusion Télévision Ivoirienne",logo:"/img/rtii.jpg",type:"Média",site:"https://www.rti.ci"},{nom:"Fraternité Matin",description:"Journal Quotidien",logo:"/img/fm.png",type:"Média",site:"https://www.fratmat.info"},{nom:"MCEN",description:"Ministère de la Communication",logo:"/img/ministere-communication.png",type:"Institutionnel",site:"https://www.communication.gouv.ci"},{nom:"SNDI",description:"SNDI",logo:"/img/sndi.png",type:"Développement",site:"https://www.sndi.ci"},{nom:"GIZ",description:"Coopération Allemande",logo:"/img/giz.png",type:"Développement",site:"https://www.giz.de"},{nom:"AFD",description:"Agence Française de Développement",logo:"/img/afdd.png",type:"Développement",site:"https://www.afd.fr"},{nom:"Banque Mondiale",description:"Institution Financière Internationale",logo:"/img/bm.png",type:"Finance",site:"https://www.banquemondiale.org"},{nom:"Moov Africa Côte d'Ivoire",description:"Opérateur Télécoms",logo:"/img/moov.png",type:"Télécoms",site:"https://www.moov.ci"},{nom:"NSIA Technologies",description:"Solutions Technologiques",logo:"/img/nsia.jpg",type:"Technologie",site:"https://www.nsia-technologies.com"},{nom:"CIE/CI-ÉNERGIES",description:"Compagnie Ivoirienne d'Électricité",logo:"/img/cie.png",type:"Énergie",site:"https://www.cie.ci"},{nom:"CGECI",description:"Confédération Générale des Entreprises de Côte d'Ivoire",logo:"/img/cgeci.png",type:"Institutionnel",site:"https://www.cgeci.ci"},{nom:"AS Consulting",description:"Cabinet de Conseil",logo:"/img/as.jpg",type:"Conseil",site:"https://www.as-consulting.ci"},{nom:"DATUM Academy",description:"Centre de Formation",logo:"/img/da.png",type:"Formation",site:"https://www.datum-academy.com"},{nom:"SICOGES",description:"Société de Conseil et de Gestion",logo:"/img/sicoges.png",type:"Conseil",site:"https://www.sicoges.ci"},{nom:"SIMPLON CI",description:"École du Numérique",logo:"/img/simplon.png",type:"Formation",site:"https://www.simplon.ci"},{nom:"Google Africa",description:"Solutions Numériques",logo:"/img/ga.jpg",type:"Technologie",site:"https://www.google.com"},{nom:"IBM Research Africa",description:"Recherche et Innovation",logo:"/img/ibm.jpg",type:"Recherche",site:"https://www.ibm.com"},{nom:"Meta AI",description:"Intelligence Artificielle",logo:"/img/meta.png",type:"IA",site:"https://ai.meta.com"},{nom:"Oracle",description:"Solutions Base de Données",logo:"/img/oracle.png",type:"Technologie",site:"https://www.oracle.com"},{nom:"Dell Technologies",description:"Solutions Informatiques",logo:"/img/dell.png",type:"Technologie",site:"https://www.dell.com"},{nom:"Cisco Networking Academy",description:"Formation et Certification Réseaux",logo:"/img/cisco.png",type:"Formation",site:"https://www.netacad.com"},{nom:"Smart Africa Alliance",description:"Alliance pour le Développement Numérique",logo:"/img/Smart_Africa_Secretariat_logo.png",type:"International",site:"https://smartafrica.org/fr/page-daccueil/"},{nom:"Abidjan.net",description:"Portail d'Information",logo:"/img/anet.png",type:"Média",site:"https://www.abidjan.net"},{nom:"Jeune Afrique",description:"Magazine Panafricain",logo:"/img/jafric.png",type:"Média",site:"https://www.jeuneafrique.com"},{nom:"Tech TV Africa",description:"Chaîne Technologique",logo:"/img/tech.png",type:"Média",site:"https://www.techtvafrica.com"}],ET=()=>{const n=ge.useRef(null),e=ge.useRef(null),t=xT;ge.useEffect(()=>{const o=n.current,l=e.current;if(!o||!l)return;const u=()=>{o.clientWidth;let m=0;l.childNodes.forEach(I=>{I instanceof HTMLElement&&(m+=I.offsetWidth+32)});const _=-m,E=Math.max(30,Math.round(Math.abs(_)*.04));l.style.setProperty("--scroll-end",`${_}px`),l.style.setProperty("--scroll-duration",`${E}s`)};u();const d=new ResizeObserver(()=>u());return d.observe(o),()=>d.disconnect()},[]);const i=o=>{switch(o){case"Institutionnel":return"bg-primary/10 text-primary border-primary/20";case"Télécoms":return"bg-secondary/10 text-secondary border-secondary/20";case"Régulation":return"bg-blue-100 text-blue-700 border-blue-200";case"Technologie":return"bg-purple-100 text-purple-700 border-purple-200";case"Énergie":return"bg-yellow-100 text-yellow-700 border-yellow-200";case"Conseil":return"bg-indigo-100 text-indigo-700 border-indigo-200";case"Formation":return"bg-green-100 text-green-700 border-green-200";case"IA":return"bg-pink-100 text-pink-700 border-pink-200";case"Recherche":return"bg-cyan-100 text-cyan-700 border-cyan-200";case"Développement":return"bg-emerald-100 text-emerald-700 border-emerald-200";case"International":return"bg-purple-100 text-purple-700 border-purple-200";case"Finance":return"bg-green-100 text-green-700 border-green-200";case"Média":return"bg-orange-100 text-orange-700 border-orange-200";default:return"bg-neutral-100 text-neutral-700 border-neutral-200"}};return p.jsx("div",{className:"relative max-w-7xl mx-auto overflow-hidden",ref:n,children:p.jsx("div",{className:"flex animate-scroll-distance space-x-8 whitespace-nowrap",ref:e,children:t.map((o,l)=>p.jsxs("div",{className:"flex-shrink-0 w-80 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center",children:[p.jsx("div",{className:"relative mb-4",children:p.jsx("div",{className:"w-20 h-20 mx-auto bg-white rounded-lg border-2 border-neutral-200 flex items-center justify-center p-2",children:p.jsx("img",{src:o.logo,alt:o.nom,className:"max-w-full max-h-full object-contain",onError:u=>{const d=u.target;d.style.display="none",d.parentElement.innerHTML=`
                      <div class="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center">
                        <svg class="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                    `}})})}),p.jsx("h3",{className:"text-lg font-bold text-primary mb-2 font-sans leading-tight",children:o.nom}),p.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${i(o.type)} mb-2`,children:o.type}),p.jsx("p",{className:"text-sm text-neutral-600",children:o.description}),o.site&&p.jsx("a",{href:o.site,target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-3 text-xs text-primary hover:text-primary/80 transition-colors duration-300",children:"Visiter le site →"})]},`${o.nom}-${l}`))})})},cf=[{title:"Partenariats Renforcés",desc:"Renforcement des collaborations académiques et industrielles pour favoriser l'innovation et le transfert de technologies entre les universités et le secteur privé.",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),bgImage:"/img/Partenariats Renforcés.jpg"},{title:"Réseau d'Experts",desc:"Création d'un réseau dynamique de chercheurs et praticiens en TIC, facilitant les échanges d'expertise et les collaborations futures à travers l'Afrique.",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),bgImage:"/img/Réseau d'Experts.jpg"},{title:"Recommandations Stratégiques",desc:"Propositions concrètes et actionnables pour les décideurs publics et privés, basées sur les meilleures pratiques et innovations présentées lors du colloque.",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),bgImage:"/img/Recommandations Stratégiques.jpg"}],TT=()=>{const[n,e]=ge.useState(0),t=3,i=Math.ceil(cf.length/t),o=()=>{e(d=>d===0?i-1:d-1)},l=()=>{e(d=>d===i-1?0:d+1)},u=cf.slice(n*t,(n+1)*t);return p.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[p.jsx("button",{onClick:o,className:"absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white","aria-label":"Précédent",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),p.jsx("button",{onClick:l,className:"absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white","aria-label":"Suivant",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12",children:u.map((d,m)=>p.jsxs("div",{className:"relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl group transform hover:scale-105 hover:rotate-2 transition-all duration-500",children:[p.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110",style:{backgroundImage:`url(${d.bgImage})`}}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-accent/70 group-hover:from-primary/80 group-hover:via-secondary/70 group-hover:to-accent/80 transition-all duration-300"}),p.jsxs("div",{className:"relative z-10 h-full flex flex-col justify-center items-center text-center p-6",children:[p.jsx("div",{className:"mb-6",children:p.jsx("div",{className:"w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/30 group-hover:-rotate-12 transition-all duration-300",children:p.jsx("div",{className:"text-white",children:d.icon})})}),p.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-3 font-sans group-hover:scale-105 transition-transform duration-300",children:d.title}),p.jsx("p",{className:"text-sm md:text-base text-white/95 leading-relaxed group-hover:text-white transition-colors duration-300",children:d.desc}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200"}),p.jsx("div",{className:"absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-3xl transition-all duration-500"})]})]},d.title))}),p.jsx("div",{className:"flex justify-center mt-8 space-x-2",children:Array.from({length:i},(d,m)=>p.jsx("button",{onClick:()=>e(m),className:`w-3 h-3 rounded-full transition-all duration-300 ${m===n?"bg-primary scale-125":"bg-neutral-300 hover:bg-primary/50"}`,"aria-label":`Page ${m+1}`},m))}),p.jsxs("div",{className:"text-center mt-4 text-sm text-neutral-500",children:["Page ",n+1," sur ",i," • ",cf.length," résultats attendus"]})]})},IT=()=>{const n=[{name:"LinkedIn",href:"https://linkedin.com/company/esatic",icon:p.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),bgColor:"bg-[#0077B5]",hoverColor:"hover:bg-[#005885]",textColor:"text-white"},{name:"Facebook",href:"https://facebook.com/esatic",icon:p.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),bgColor:"bg-[#1877F2]",hoverColor:"hover:bg-[#166FE5]",textColor:"text-white"},{name:"Twitter",href:"https://twitter.com/esatic",icon:p.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})}),bgColor:"bg-[#1DA1F2]",hoverColor:"hover:bg-[#1A91DA]",textColor:"text-white"}];return p.jsx("div",{className:"fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block",children:p.jsx("div",{className:"flex flex-col space-y-4",children:n.map((e,t)=>p.jsxs("div",{className:"group relative",children:[p.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:`w-16 h-16 ${e.bgColor} rounded-full shadow-2xl flex items-center justify-center ${e.textColor} transition-all duration-300 transform hover:scale-110 ${e.hoverColor}`,title:`Suivez-nous sur ${e.name}`,"aria-label":`Lien vers notre page ${e.name}`,children:p.jsx("div",{className:"w-12 h-12 flex items-center justify-center",children:e.icon})}),p.jsx("div",{className:"absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0",children:p.jsxs("div",{className:"bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap backdrop-blur-sm",children:[e.name,p.jsx("div",{className:"absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45"})]})})]},e.name))})})},ST=()=>{const[n,e]=ge.useState({nom:"",pays:"",email:"",telephone:"",siteWeb:"",description:"",typePartenaire:"institutionnel",logo:null}),[t,i]=ge.useState(!1),[o,l]=ge.useState(""),u=E=>{const{name:I,value:L}=E.target;e(O=>({...O,[I]:L}))},d=E=>{E.target.files&&E.target.files[0]&&e(I=>({...I,logo:E.target.files[0]}))},m=async E=>{E.preventDefault(),l(""),i(!0);try{let I="";if(n.logo){const O=Mu(qu,`partenaires/${Date.now()}_${n.logo.name}`);await K1(O,n.logo),I=await Q1(O)}await El(Hi(Nn,"partenaires"),{...n,logoUrl:I,statut:"en_attente",dateSoumission:Mi()}),l("Succès : Votre demande de partenariat a été soumise avec succès ! Nous vous contacterons bientôt."),e({nom:"",pays:"",email:"",telephone:"",siteWeb:"",description:"",typePartenaire:"institutionnel",logo:null});const L=document.getElementById("logo");L&&(L.value="")}catch(I){console.error("Erreur lors de la soumission:",I),l("Erreur : Impossible de soumettre votre demande. Veuillez réessayer.")}finally{i(!1)}},_="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body",C="block text-neutral-700 font-semibold mb-2 font-sans";return p.jsxs("div",{className:"max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-2xl",children:[p.jsx("h2",{className:"text-3xl font-bold text-primary mb-6 text-center font-sans",children:"Devenir Partenaire"}),p.jsx("p",{className:"text-center text-neutral-600 mb-8",children:"Rejoignez-nous en tant que partenaire du CoSTIC 2026 et participez à l'innovation numérique en Afrique."}),p.jsxs("form",{onSubmit:m,className:"space-y-6",children:[p.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"nom",className:C,children:"Nom de l'organisation *"}),p.jsx("input",{type:"text",id:"nom",name:"nom",value:n.nom,onChange:u,className:_,required:!0,disabled:t})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"pays",className:C,children:"Pays *"}),p.jsx("input",{type:"text",id:"pays",name:"pays",value:n.pays,onChange:u,className:_,required:!0,disabled:t})]})]}),p.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:C,children:"Email de contact *"}),p.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:u,className:_,required:!0,disabled:t})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"telephone",className:C,children:"Téléphone"}),p.jsx("input",{type:"tel",id:"telephone",name:"telephone",value:n.telephone,onChange:u,className:_,disabled:t})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"siteWeb",className:C,children:"Site web"}),p.jsx("input",{type:"url",id:"siteWeb",name:"siteWeb",value:n.siteWeb,onChange:u,className:_,placeholder:"https://www.exemple.com",disabled:t})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"typePartenaire",className:C,children:"Type de partenariat *"}),p.jsxs("select",{id:"typePartenaire",name:"typePartenaire",value:n.typePartenaire,onChange:u,className:_,required:!0,disabled:t,children:[p.jsx("option",{value:"institutionnel",children:"Institutionnel (Université, Centre de recherche)"}),p.jsx("option",{value:"entreprise",children:"Entreprise privée"}),p.jsx("option",{value:"organisation",children:"Organisation internationale"}),p.jsx("option",{value:"gouvernemental",children:"Gouvernemental"}),p.jsx("option",{value:"media",children:"Média"}),p.jsx("option",{value:"autre",children:"Autre"})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"description",className:C,children:"Description de votre organisation *"}),p.jsx("textarea",{id:"description",name:"description",value:n.description,onChange:u,className:_,rows:4,placeholder:"Décrivez votre organisation, ses activités et son intérêt pour le partenariat...",required:!0,disabled:t})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"logo",className:C,children:"Logo de votre organisation"}),p.jsx("input",{type:"file",id:"logo",name:"logo",onChange:d,accept:"image/*",className:"w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-primary hover:file:bg-secondary/20 cursor-pointer font-body",disabled:t}),p.jsx("p",{className:"text-xs text-neutral-500 mt-1",children:"Formats acceptés: JPG, PNG, SVG (max 2MB)"})]}),p.jsx("button",{type:"submit",disabled:t,className:"w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed flex justify-center items-center",children:t?p.jsxs(p.Fragment,{children:[p.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Soumission en cours..."]}):"Soumettre la demande de partenariat"}),o&&p.jsx("p",{className:`text-center text-sm ${o.startsWith("Erreur")?"text-red-600":"text-green-600"}`,children:o})]})]})},kT=[{name:"INPHB",logo:"/img/in.png",siteWeb:"https://inphb.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-blue",hoverColor:"hover:bg-partner-blue-hover"},{name:"UFHB",logo:"/img/ufhb.jpg",siteWeb:"https://ufhb.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-green",hoverColor:"hover:bg-partner-green-hover"},{name:"UVCI",logo:"/img/uvci.png",siteWeb:"https://uvci.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-purple",hoverColor:"hover:bg-partner-purple-hover"},{name:"UAO",logo:"/img/uao.jpg",siteWeb:"https://uao.edu.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-teal",hoverColor:"hover:bg-partner-teal-hover"},{name:"UPGC",logo:"/img/upgc.png",siteWeb:"https://upgc.edu.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-emerald",hoverColor:"hover:bg-partner-emerald-hover"},{name:"USP",logo:"/img/usp.jpg",siteWeb:"https://usp.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-orange",hoverColor:"hover:bg-partner-orange-hover"},{name:"UNA",logo:"/img/una.png",siteWeb:"https://una.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-indigo",hoverColor:"hover:bg-partner-indigo-hover"},{name:"IRMA",logo:"/img/irma.png",siteWeb:"https://irma.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-emerald",hoverColor:"hover:bg-partner-emerald-hover"},{name:"CRO",logo:"/img/cro.png",siteWeb:"https://cro.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-teal",hoverColor:"hover:bg-partner-teal-hover"},{name:"IPCI",logo:"/img/institut paseur.jpg",siteWeb:"https://pasteur.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-rose",hoverColor:"hover:bg-partner-rose-hover"},{name:"UFR MATHS",logo:"/img/ufr.jpg",siteWeb:"https://ufr-math-info.ci",pays:"Côte d'Ivoire",bgColor:"bg-partner-violet",hoverColor:"hover:bg-partner-violet-hover"},{name:"SMCI",logo:"/img/SMCI_logo_new.png",siteWeb:"https://example.com/smci",pays:"Côte d'Ivoire",bgColor:"bg-partner-indigo",hoverColor:"hover:bg-partner-indigo-hover"},{name:"UJKZ",logo:"/img/uJKZ.jpg",siteWeb:"https://www.univ-ouaga.bf",pays:"Burkina Faso",bgColor:"bg-partner-blue",hoverColor:"hover:bg-partner-blue-hover"},{name:"UGB",logo:"/img/UGBS.jpg",siteWeb:"https://www.ugb.sn",pays:"Sénégal",bgColor:"bg-partner-green",hoverColor:"hover:bg-partner-green-hover"},{name:"Université de Conakry",logo:"/img/UDC.jpg",siteWeb:"https://www.univ-conakry.org",pays:"Guinée",bgColor:"bg-partner-red",hoverColor:"hover:bg-partner-red-hover"},{name:"Université Nazi Boni",logo:"/img/UNB.png",siteWeb:"https://www.unb.bf",pays:"Burkina Faso",bgColor:"bg-partner-purple",hoverColor:"hover:bg-partner-purple-hover"},{name:"Université 2iE",logo:"/img/2iE.png",siteWeb:"https://www.2ie-edu.org",pays:"Burkina Faso",bgColor:"bg-partner-orange",hoverColor:"hover:bg-partner-orange-hover"},{name:"Université de Lomé",logo:"/img/UDL.png",siteWeb:"https://www.univ-lome.tg",pays:"Togo",bgColor:"bg-partner-indigo",hoverColor:"hover:bg-partner-indigo-hover"},{name:"UCAD",logo:"/img/UCAD.png",siteWeb:"https://www.ucad.sn",pays:"Sénégal",bgColor:"bg-partner-emerald",hoverColor:"hover:bg-partner-emerald-hover"}];var st=function(){return st=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},st.apply(this,arguments)};function F6(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function gg(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),t.push.apply(t,i)}return t}function ct(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?gg(Object(t),!0).forEach((function(i){B6(n,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):gg(Object(t)).forEach((function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))}))}return n}function Ms(n){return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ms(n)}function U6(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function yg(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function z6(n,e,t){return e&&yg(n.prototype,e),t&&yg(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function B6(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Gf(n,e){if(n==null)return{};var t,i,o=(function(u,d){if(u==null)return{};var m,_,C={},E=Object.keys(u);for(_=0;_<E.length;_++)m=E[_],d.indexOf(m)>=0||(C[m]=u[m]);return C})(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function bT(n,e){return(function(t){if(Array.isArray(t))return t})(n)||(function(t,i){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var l,u,d=[],m=!0,_=!1;try{for(o=o.call(t);!(m=(l=o.next()).done)&&(d.push(l.value),!i||d.length!==i);m=!0);}catch(C){_=!0,u=C}finally{try{m||o.return==null||o.return()}finally{if(_)throw u}}return d}})(n,e)||q6(n,e)||(function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function AT(n){return(function(e){if(Array.isArray(e))return Kf(e)})(n)||(function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)})(n)||q6(n)||(function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)})()}function q6(n,e){if(n){if(typeof n=="string")return Kf(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Kf(n,e):void 0}}function Kf(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var sp={cookieTestUrl:"https://legacy-staging.paystack.co/test-iframe/start.html",publishableKey:"uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==",publicKey:`-----BEGIN PUBLIC KEY-----\r
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r
ZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r
-----END PUBLIC KEY-----`,applePayVersion:6,applePayValidateSessionPath:"applepay/validate-session/",applePayChargePath:"applepay/charge"};ct(ct({},sp),{},{checkoutUrl:"http://localhost:8081/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"http://localhost:8081/static/vendor/pusher.min.js"});var RT=ct(ct({},sp),{},{checkoutUrl:"https://checkout-studio.paystack.com/",paymentBaseUrl:"https://legacy-staging.paystack.co/",paystackApiUrl:"https://studio-api.paystack.co/",siteUrl:"https://beta.paystack.com",pusherKey:"1c7b262ee18455815893",pusherUrl:"https://checkout-studio.paystack.com/static/vendor/pusher.min.js"}),an={production:ct(ct({},sp),{},{checkoutUrl:"https://checkout.paystack.com/",paymentBaseUrl:"https://standard.paystack.co/",paystackApiUrl:"https://api.paystack.co/",siteUrl:"https://paystack.com",pusherKey:"8e4b9b7ca3418bd5cdc8",pusherUrl:"https://checkout.paystack.com/static/vendor/pusher.min.js"})}.production||RT;function $6(n,e){var t=[];return Object.keys(n).forEach((function(i){var o=e?"".concat(e,"[").concat(i,"]"):i,l=n[o];t.push(l!==null&&(typeof v>"u"?"undefined":Ms(v))==="object"?$6(l,o):"".concat(encodeURIComponent(i),"=").concat(encodeURIComponent(l)))})),t.join("&")}function Mo(){return document.currentScript||(n=document.getElementsByTagName("script"))[n.length-1];var n}function vg(){var n=[],e=Mo();if(e){var t=Array.prototype.slice.call(e.attributes);n=Object.keys(t).filter((function(i){var o=t[i].nodeName;return o&&o.indexOf("data")>-1})).map((function(i){return t[i].nodeName}))}return n}var H6=`
  <svg id="inline-button-wordmark--white" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#ffffff"/>
  </svg>
`,PT=`
<svg id="inline-button-wordmark--grey" width="166" height="16" viewBox="0 0 166 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M0.564068 6.26985L1.86515 6.10375C1.85184 5.15143 1.83489 3.71187 1.84942 3.45964C1.95955 1.67927 3.39982 0.16589 5.13056 0.0170127C5.23949 0.00839996 5.34842 0.0034784 5.45371 0.00101762C6.36645 -0.0209585 7.25272 0.313716 7.93 0.936113C8.62472 1.56238 9.07979 2.4864 9.14999 3.4055C9.16815 3.64174 9.1621 5.24002 9.1621 6.18249L10.4886 6.38305L10.4438 14.0767L5.47308 14.7657L0.519287 13.961L0.564068 6.26985ZM5.53359 5.63743L7.62016 5.95241C7.61169 4.80446 7.55965 3.12867 7.30548 2.68696C6.91939 2.0164 6.28156 1.62021 5.55901 1.60421H5.48276C4.7481 1.61406 4.10543 2.0004 3.71813 2.66727C3.44944 3.13236 3.39619 4.70972 3.3974 5.91181L5.53359 5.63743ZM22.5808 12.4378C21.8836 12.4378 21.293 12.3492 20.8089 12.172C20.372 12.0088 19.9719 11.7577 19.6325 11.4338C19.3256 11.1331 19.0833 10.7712 18.9208 10.3707C18.7637 9.95815 18.6612 9.52621 18.6158 9.08621H19.8358C19.8745 9.40119 19.9423 9.70141 20.0391 9.98686C20.136 10.2625 20.286 10.5085 20.4894 10.7251C20.6927 10.9318 20.959 11.0991 21.2882 11.2271C21.6271 11.3452 22.0579 11.4043 22.5808 11.4043C22.9197 11.4043 23.2295 11.36 23.5103 11.2714C23.8008 11.173 24.0525 11.0351 24.2655 10.858C24.4785 10.6808 24.6431 10.4692 24.7593 10.2231C24.8852 9.97701 24.9481 9.70633 24.9481 9.41103C24.9481 9.11574 24.9094 8.85982 24.8319 8.64327C24.7536 8.41559 24.6125 8.21568 24.4253 8.06745C24.196 7.88594 23.9347 7.75064 23.6555 7.6688C23.257 7.54201 22.849 7.4482 22.4355 7.38828C21.9393 7.31041 21.4491 7.19693 20.9686 7.04869C20.5808 6.92967 20.2133 6.75038 19.8794 6.51716C19.5939 6.29685 19.3607 6.01432 19.1968 5.69034C19.0418 5.35567 18.9644 4.9521 18.9644 4.47963C18.9644 4.07607 19.0467 3.70203 19.2113 3.35752C19.3759 3.00317 19.6034 2.69803 19.8939 2.44211C20.194 2.18619 20.5475 1.98441 20.9541 1.83676C21.3608 1.68911 21.811 1.61529 22.3048 1.61529C23.3505 1.61529 24.1784 1.86629 24.7884 2.36829C25.4081 2.86044 25.7711 3.57899 25.8777 4.52393H24.7448C24.6189 3.8546 24.3624 3.37721 23.9751 3.09176C23.5878 2.79646 23.031 2.64882 22.3048 2.64882C21.5883 2.64882 21.0461 2.81123 20.6782 3.13605C20.5037 3.28606 20.3648 3.47417 20.2717 3.68635C20.1787 3.89853 20.1339 4.12931 20.1408 4.36152C20.1408 4.61744 20.1698 4.84875 20.2279 5.05546C20.2957 5.25232 20.4167 5.42457 20.591 5.57222C20.775 5.71987 21.0267 5.85275 21.3463 5.97087C21.7689 6.09987 22.2012 6.19369 22.6389 6.25139C23.2198 6.33998 23.7281 6.4581 24.1639 6.60575C24.5996 6.75339 24.9675 6.94533 25.2677 7.18157C25.5678 7.4178 25.7905 7.70818 25.9358 8.05268C26.0907 8.39719 26.1681 8.82045 26.1681 9.32245C26.1681 9.76539 26.0761 10.1788 25.8922 10.5627C25.7149 10.9408 25.4627 11.2775 25.1515 11.5519C24.8319 11.8275 24.4495 12.0441 24.0041 12.2016C23.5684 12.359 23.094 12.4378 22.5808 12.4378ZM31.2066 12.4378C30.6741 12.4378 30.1803 12.3443 29.7252 12.1573C29.2906 11.9775 28.8956 11.7115 28.5633 11.3747C28.2268 11.0185 27.965 10.5966 27.7936 10.1345C27.6136 9.61796 27.5251 9.07309 27.5321 8.52515V8.40704C27.5321 7.82629 27.6193 7.29476 27.7936 6.81245C27.9679 6.3203 28.2099 5.90196 28.5198 5.55746C28.8393 5.2031 29.2169 4.93242 29.6526 4.7454C30.0883 4.54854 30.5676 4.45011 31.0905 4.45011C31.5262 4.45011 31.9473 4.52393 32.354 4.67158C32.7704 4.80938 33.1383 5.03085 33.4578 5.33599C33.7773 5.64112 34.0291 6.03977 34.213 6.53192C34.4067 7.01424 34.5035 7.5999 34.5035 8.28892V8.68756H28.7812C28.8102 9.57345 29.0281 10.2526 29.4348 10.7251C29.8414 11.1877 30.4369 11.419 31.2212 11.419C32.4121 11.419 33.085 10.9712 33.24 10.0754H34.4454C34.3099 10.8531 33.9516 11.4436 33.3707 11.8472C32.7897 12.2409 32.0684 12.4378 31.2066 12.4378ZM33.269 7.69833C33.2109 6.90104 32.9882 6.33014 32.6009 5.98563C32.2233 5.64112 31.7198 5.46887 31.0905 5.46887C30.4708 5.46887 29.9624 5.67065 29.5655 6.07422C29.1782 6.46794 28.9313 7.00932 28.8248 7.69833H33.269ZM39.3593 12.4378C38.8267 12.4378 38.3329 12.3492 37.8779 12.172C37.4401 11.9901 37.0407 11.7245 36.7014 11.3895C36.3636 11.0315 36.0973 10.6103 35.9172 10.1493C35.7268 9.63002 35.6332 9.07925 35.6412 8.52515V8.40704C35.6412 7.81645 35.738 7.28 35.9317 6.79769C36.1253 6.30553 36.3868 5.8872 36.716 5.54269C37.0548 5.19818 37.447 4.93242 37.8924 4.7454C38.3475 4.54854 38.8267 4.45011 39.3302 4.45011C39.7272 4.45011 40.1097 4.49932 40.4776 4.59775C40.8552 4.69618 41.1893 4.85367 41.4797 5.07022C41.7799 5.27693 42.0316 5.55253 42.235 5.89704C42.4383 6.24155 42.569 6.65988 42.6271 7.15204H41.4362C41.3393 6.54177 41.0924 6.10867 40.6955 5.85275C40.3082 5.59683 39.8531 5.46887 39.3302 5.46887C38.995 5.46599 38.6632 5.53649 38.3571 5.67557C38.0667 5.81338 37.8101 6.01024 37.5874 6.26616C37.3615 6.53514 37.1889 6.84598 37.0791 7.18157C36.9484 7.57626 36.8845 7.99063 36.8902 8.40704V8.52515C36.8902 9.47994 37.1178 10.2034 37.5729 10.6956C38.0376 11.1779 38.6379 11.419 39.3738 11.419C39.6449 11.419 39.9015 11.3797 40.1436 11.3009C40.6361 11.1497 41.0523 10.8113 41.3055 10.356C41.441 10.1197 41.5233 9.84413 41.5524 9.52915H42.6707C42.6338 9.9361 42.5204 10.3321 42.3366 10.6956C42.1663 11.0447 41.9293 11.3559 41.6395 11.611C41.349 11.8669 41.0101 12.0687 40.6228 12.2163C40.2355 12.364 39.8144 12.4378 39.3593 12.4378ZM46.9164 12.4378C46.5568 12.4406 46.199 12.3858 45.8562 12.2754C45.5441 12.1717 45.2605 11.9947 45.0284 11.7586C44.7829 11.4908 44.595 11.1741 44.4765 10.8284C44.3409 10.4544 44.2731 10.0016 44.2731 9.47009V4.58299H45.4786V9.41103C45.4786 10.0902 45.619 10.5873 45.8998 10.9023C46.1903 11.2172 46.6356 11.3747 47.236 11.3747C47.5071 11.3747 47.7685 11.3304 48.0202 11.2419C48.272 11.1533 48.4947 11.0204 48.6883 10.8432C48.882 10.666 49.0369 10.4446 49.1531 10.1788C49.2693 9.91303 49.3274 9.6079 49.3274 9.26339V4.58299H50.5328V12.3049H49.3274V11.0794C49.1531 11.4436 48.8578 11.7635 48.4414 12.0391C48.0348 12.3049 47.5264 12.4378 46.9164 12.4378ZM52.8239 4.58299H54.0294V5.97087C54.2715 5.53777 54.5765 5.18342 54.9444 4.90781C55.322 4.62236 55.8497 4.46979 56.5275 4.45011V5.60175C56.1799 5.61707 55.8346 5.66652 55.4963 5.7494C55.2039 5.81939 54.9308 5.95567 54.6975 6.14804C54.4729 6.35252 54.303 6.6116 54.2037 6.90104C54.0875 7.20618 54.0294 7.59498 54.0294 8.06745V12.3049H52.8239V4.58299ZM61.0347 12.4378C60.5021 12.4378 60.0083 12.3443 59.5533 12.1573C59.1186 11.9775 58.7236 11.7115 58.3914 11.3747C58.0549 11.0185 57.793 10.5966 57.6216 10.1345C57.4416 9.61796 57.3531 9.07309 57.3602 8.52515V8.40704C57.3602 7.82629 57.4473 7.29476 57.6216 6.81245C57.7959 6.3203 58.038 5.90196 58.3478 5.55746C58.6673 5.2031 59.0449 4.93242 59.4806 4.7454C59.9164 4.54854 60.3956 4.45011 60.9185 4.45011C61.3542 4.45011 61.7754 4.52393 62.1821 4.67158C62.5984 4.80938 62.9663 5.03085 63.2859 5.33599C63.6054 5.64112 63.8571 6.03977 64.0411 6.53192C64.2347 7.01424 64.3316 7.5999 64.3316 8.28892V8.68756H58.6092C58.6383 9.57345 58.8561 10.2526 59.2628 10.7251C59.6695 11.1877 60.2649 11.419 61.0492 11.419C62.2401 11.419 62.9131 10.9712 63.068 10.0754H64.2735C64.1379 10.8531 63.7797 11.4436 63.1987 11.8472C62.6178 12.2409 61.8964 12.4378 61.0347 12.4378ZM63.097 7.69833C63.0389 6.90104 62.8162 6.33014 62.429 5.98563C62.0513 5.64112 61.5478 5.46887 60.9185 5.46887C60.2988 5.46887 59.7905 5.67065 59.3935 6.07422C59.0062 6.46794 58.7593 7.00932 58.6528 7.69833H63.097ZM68.8968 12.4378C68.403 12.4378 67.9431 12.3541 67.5171 12.1868C67.1072 12.0141 66.7365 11.7578 66.4278 11.4338C66.1165 11.0803 65.8749 10.6693 65.7161 10.2231C65.5451 9.69956 65.4617 9.15057 65.4692 8.59898V8.48086C65.4692 7.89027 65.5564 7.3489 65.7307 6.85675C65.905 6.36459 66.147 5.94134 66.4569 5.58698C66.7667 5.22279 67.1395 4.94226 67.5752 4.7454C68.0109 4.54854 68.4902 4.45011 69.013 4.45011C69.6521 4.45011 70.1701 4.58791 70.5671 4.86352C70.964 5.12928 71.2739 5.44918 71.4966 5.82322V0.891819H72.702V12.3049H71.4966V10.9761C71.3901 11.1631 71.2448 11.3452 71.0609 11.5224C70.8713 11.7038 70.6617 11.8623 70.4363 11.9949C70.2066 12.1258 69.963 12.2298 69.7102 12.3049C69.4487 12.3935 69.1776 12.4378 68.8968 12.4378ZM69.0275 11.419C69.3761 11.419 69.7053 11.36 70.0152 11.2419C70.325 11.1237 70.5913 10.9466 70.814 10.7103C71.0367 10.4642 71.2109 10.1591 71.3368 9.79492C71.4724 9.42088 71.5401 8.98778 71.5401 8.49562V8.37751C71.5401 7.38335 71.3223 6.65004 70.8866 6.17757C70.4606 5.7051 69.8748 5.46887 69.1292 5.46887C68.374 5.46887 67.7834 5.72479 67.3573 6.23663C66.9313 6.74847 66.7183 7.47686 66.7183 8.4218V8.53992C66.7183 9.02223 66.7764 9.44549 66.8926 9.80968C67.0184 10.1739 67.183 10.4741 67.3864 10.7103C67.5994 10.9466 67.8463 11.1237 68.1271 11.2419C68.4079 11.36 68.708 11.419 69.0275 11.419ZM82.4716 12.4378C81.852 12.4378 81.3243 12.3 80.8886 12.0244C80.485 11.7813 80.146 11.4417 79.901 11.0351V12.3049H78.6955V0.891819H79.901V5.88228C80.0153 5.68531 80.1572 5.50626 80.3221 5.35075C80.5061 5.17357 80.7094 5.02101 80.9321 4.89305C81.1645 4.75524 81.4114 4.64697 81.6729 4.56822C81.9343 4.48948 82.2005 4.45011 82.4716 4.45011C82.9655 4.45011 83.4254 4.53869 83.8514 4.71587C84.2774 4.89305 84.6405 5.14897 84.9407 5.48363C85.2505 5.8183 85.4926 6.22679 85.6669 6.7091C85.8411 7.19141 85.9283 7.73278 85.9283 8.33321V8.45133C85.9283 9.04192 85.846 9.58329 85.6814 10.0754C85.5295 10.535 85.2929 10.9609 84.9843 11.3304C84.6852 11.6839 84.3133 11.9662 83.895 12.1573C83.4445 12.3492 82.96 12.4447 82.4716 12.4378ZM82.3555 11.419C83.1107 11.419 83.6868 11.173 84.0838 10.6808C84.4808 10.1788 84.6793 9.45533 84.6793 8.51039V8.39227C84.6793 7.90012 84.6163 7.47194 84.4904 7.10775C84.3829 6.77559 84.2099 6.46915 83.9821 6.2071C83.7841 5.96487 83.5294 5.77704 83.2414 5.66081C82.9581 5.53232 82.6511 5.46687 82.3409 5.46887C81.9924 5.46887 81.6632 5.52793 81.3533 5.64604C81.0537 5.7638 80.7852 5.95084 80.569 6.19234C80.3464 6.42857 80.1721 6.73371 80.0462 7.10775C79.9127 7.52209 79.8488 7.95635 79.8574 8.39227V8.51039C79.8574 9.4947 80.0898 10.228 80.5545 10.7103C81.0193 11.1828 81.6196 11.419 82.3555 11.419ZM89.6342 11.5076L86.6569 4.58299H87.9495L90.2733 10.1197L92.3792 4.58299H93.6137L89.4164 14.9921H88.1964L89.6342 11.5076ZM105.97 4.51532C105.618 4.13844 105.195 3.83755 104.727 3.63067C104.257 3.42601 103.751 3.32132 103.241 3.32307C102.698 3.32307 102.214 3.42888 101.804 3.64297C101.501 3.7934 101.229 4.00091 101.003 4.25447V4.01947C101.003 3.93064 100.979 3.84347 100.933 3.76781C100.888 3.69214 100.822 3.631 100.744 3.59129C100.691 3.56626 100.633 3.55364 100.574 3.55438H98.9827C98.9241 3.55245 98.8658 3.56433 98.8125 3.58909C98.7592 3.61385 98.7122 3.65082 98.6753 3.69711C98.5956 3.78474 98.5523 3.90019 98.5542 4.01947V15.0561C98.5542 15.1791 98.5954 15.2874 98.6753 15.3735C98.715 15.4152 98.7629 15.4479 98.8158 15.4698C98.8688 15.4916 98.9256 15.502 98.9827 15.5002H100.606C100.661 15.5001 100.715 15.4889 100.766 15.4671C100.817 15.4453 100.863 15.4135 100.901 15.3735C100.945 15.3333 100.979 15.284 101.002 15.229C101.025 15.174 101.036 15.1146 101.034 15.0548V11.2898C101.25 11.5384 101.539 11.7291 101.884 11.8607C102.307 12.0256 102.755 12.1105 103.207 12.1105C103.727 12.1105 104.233 12.0096 104.71 11.8054C105.185 11.599 105.613 11.2958 105.969 10.9146C106.338 10.5135 106.628 10.0422 106.824 9.52669C107.044 8.94733 107.152 8.33033 107.143 7.70941C107.143 7.045 107.038 6.43349 106.824 5.89212C106.631 5.38011 106.341 4.91182 105.97 4.51409V4.51532ZM104.513 8.50178C104.424 8.73555 104.295 8.94718 104.131 9.12928C103.969 9.31219 103.77 9.45789 103.547 9.55674C103.325 9.65558 103.085 9.70531 102.842 9.70264C102.6 9.70387 102.358 9.65342 102.136 9.55499C101.911 9.4556 101.71 9.31074 101.542 9.12928C101.375 8.94704 101.244 8.73407 101.155 8.50178C101.062 8.25439 101.015 7.99155 101.016 7.72663C101.016 7.45102 101.064 7.19141 101.155 6.95026C101.332 6.48635 101.682 6.1122 102.128 5.90935C102.352 5.80353 102.595 5.7494 102.842 5.75063C103.103 5.75063 103.343 5.80476 103.56 5.91058C103.774 6.0127 103.969 6.15542 104.134 6.33014C104.476 6.71058 104.661 7.21105 104.648 7.72663C104.648 8.00347 104.603 8.26308 104.513 8.50178ZM115.859 3.55684H114.249C114.193 3.55751 114.138 3.56987 114.087 3.59315C114.036 3.61643 113.99 3.65013 113.952 3.69219C113.868 3.78 113.821 3.8973 113.821 4.01947V4.22371C113.62 3.9808 113.372 3.78302 113.092 3.64297C112.654 3.42397 112.17 3.31511 111.681 3.32553C111.166 3.32821 110.657 3.43439 110.183 3.63795C109.708 3.84151 109.278 4.13843 108.917 4.51162C108.537 4.91069 108.236 5.37962 108.029 5.89335C107.801 6.47081 107.687 7.08847 107.696 7.71064C107.696 8.37505 107.807 8.98655 108.029 9.52792C108.251 10.0619 108.545 10.5331 108.91 10.9158C109.265 11.2945 109.693 11.5958 110.167 11.8016C110.641 12.0074 111.15 12.1133 111.665 12.113C112.194 12.113 112.675 12.0047 113.085 11.7943C113.388 11.6343 113.637 11.4412 113.821 11.2148V11.4326C113.82 11.4923 113.831 11.5516 113.854 11.6066C113.877 11.6615 113.911 11.7109 113.954 11.7512C113.993 11.7915 114.038 11.8236 114.089 11.8456C114.14 11.8676 114.194 11.879 114.249 11.8792H115.859C115.916 11.8812 115.972 11.8706 116.024 11.8483C116.077 11.826 116.124 11.7925 116.162 11.75C116.203 11.7085 116.235 11.6589 116.256 11.6043C116.277 11.5497 116.287 11.4912 116.285 11.4326V4.0207C116.287 3.90142 116.244 3.78597 116.164 3.69834C116.127 3.65337 116.08 3.61736 116.027 3.5929C115.975 3.56844 115.917 3.55613 115.859 3.55684ZM113.685 8.4907C113.601 8.72324 113.473 8.9368 113.308 9.11943C113.143 9.29538 112.95 9.43933 112.735 9.54269C112.52 9.64727 112.275 9.70141 112.014 9.70141C111.764 9.70141 111.521 9.64727 111.3 9.54146C111.079 9.4398 110.881 9.29437 110.717 9.11372C110.552 8.93306 110.425 8.72082 110.343 8.48947C110.253 8.24551 110.207 7.98712 110.207 7.72663C110.207 7.44979 110.253 7.19018 110.343 6.94903C110.433 6.71156 110.562 6.50116 110.723 6.32891C110.888 6.15296 111.086 6.00901 111.301 5.90812C111.521 5.80353 111.764 5.7494 112.015 5.7494C112.275 5.7494 112.52 5.80353 112.735 5.90935C112.951 6.01393 113.144 6.15542 113.308 6.32891C113.65 6.70961 113.834 7.21001 113.821 7.7254C113.821 7.98993 113.776 8.24709 113.685 8.4907ZM131.919 7.49901C131.685 7.28955 131.417 7.12228 131.127 7.00439C130.828 6.88012 130.511 6.78169 130.177 6.71525L128.95 6.46425C128.635 6.40273 128.416 6.3203 128.293 6.21448C128.242 6.17732 128.201 6.12853 128.172 6.07209C128.144 6.01565 128.128 5.95315 128.128 5.88966C128.128 5.75432 128.204 5.64358 128.357 5.54269C128.523 5.43688 128.755 5.38274 129.042 5.38274C129.357 5.38274 129.669 5.44795 129.958 5.57591C130.252 5.70633 130.528 5.85398 130.769 6.01885C131.126 6.24893 131.43 6.21817 131.649 5.95364L132.238 5.25232C132.351 5.13393 132.416 4.97752 132.422 4.81307C132.422 4.65558 132.345 4.51162 132.198 4.3812C131.948 4.15481 131.553 3.91612 131.023 3.68234C130.494 3.44611 129.829 3.32553 129.042 3.32553C128.525 3.32553 128.049 3.39689 127.628 3.53716C127.205 3.67988 126.842 3.87674 126.547 4.12036C126.251 4.37136 126.017 4.66173 125.858 4.99763C125.699 5.33341 125.617 5.70154 125.618 6.07422C125.618 6.76324 125.82 7.32552 126.218 7.74509C126.615 8.15481 127.145 8.43411 127.796 8.56945L129.072 8.8549C129.435 8.93118 129.711 9.01731 129.889 9.11328C130.045 9.19572 130.119 9.31383 130.119 9.47871C130.119 9.62635 130.045 9.758 129.892 9.87735C129.731 10.0053 129.478 10.0681 129.139 10.0681C128.79 10.0717 128.445 9.99161 128.133 9.83429C127.836 9.68469 127.56 9.49515 127.312 9.27077C127.202 9.17922 127.076 9.1084 126.941 9.0616C126.788 9.01608 126.616 9.0653 126.419 9.22155L125.714 9.78876C125.509 9.96717 125.423 10.1825 125.461 10.431C125.496 10.6697 125.691 10.9158 126.055 11.1939C126.38 11.4313 126.798 11.6467 127.3 11.8312C127.803 12.017 128.391 12.113 129.059 12.113C129.596 12.113 130.092 12.0416 130.529 11.9013C130.967 11.7549 131.354 11.5593 131.668 11.3108C131.98 11.0724 132.231 10.7631 132.404 10.4077C132.576 10.0523 132.663 9.66076 132.659 9.26462C132.659 8.87212 132.595 8.52638 132.46 8.23601C132.331 7.95492 132.147 7.70366 131.919 7.49778V7.49901ZM138.958 9.51193C138.923 9.445 138.872 9.3882 138.809 9.34687C138.747 9.30555 138.675 9.28105 138.601 9.27569C138.451 9.27322 138.305 9.3222 138.186 9.41473C138.071 9.49101 137.946 9.55007 137.815 9.58821C137.649 9.64412 137.47 9.64967 137.3 9.60421C137.219 9.58443 137.144 9.54519 137.081 9.48978C137.005 9.42056 136.946 9.33472 136.908 9.23878C136.855 9.09669 136.83 8.94521 136.836 8.79338V5.76662H138.931C139.051 5.76662 139.159 5.71741 139.253 5.62267C139.295 5.58108 139.329 5.5314 139.352 5.4765C139.376 5.42159 139.388 5.36254 139.389 5.30276V4.02193C139.389 3.96024 139.377 3.89918 139.353 3.84249C139.329 3.78579 139.294 3.73465 139.25 3.69219C139.165 3.60724 139.05 3.55916 138.931 3.55807H136.835V1.49717C136.838 1.43555 136.827 1.37406 136.805 1.31679C136.782 1.25952 136.748 1.20777 136.704 1.16497C136.627 1.08454 136.521 1.03854 136.41 1.03701H134.784C134.695 1.03555 134.609 1.06135 134.535 1.11101C134.462 1.16066 134.405 1.23182 134.372 1.31507C134.349 1.37287 134.338 1.43484 134.339 1.49717V3.55684H133.411C133.353 3.55549 133.294 3.5675 133.241 3.59199C133.188 3.61647 133.14 3.65281 133.102 3.69834C133.025 3.78687 132.982 3.90193 132.984 4.0207V5.304C132.985 5.39177 133.01 5.47753 133.055 5.55238C133.1 5.62724 133.164 5.68846 133.24 5.72971C133.294 5.75555 133.352 5.76908 133.41 5.76662H134.339V9.36551C134.339 9.84536 134.423 10.2588 134.581 10.5996C134.741 10.9367 134.951 11.2197 135.204 11.4313C135.466 11.6503 135.766 11.8128 136.088 11.9087C136.415 12.0121 136.755 12.0638 137.096 12.0638C137.562 12.0638 138.004 11.9887 138.421 11.8423C138.817 11.7053 139.175 11.4722 139.463 11.1631C139.647 10.9404 139.668 10.6943 139.518 10.4483L138.958 9.51316V9.51193ZM147.78 3.55684H146.171C146.116 3.55785 146.061 3.57036 146.01 3.59363C145.959 3.6169 145.914 3.65043 145.876 3.69219C145.835 3.73558 145.802 3.78651 145.779 3.84229C145.758 3.89876 145.746 3.95885 145.747 4.01947V4.22371C145.544 3.98167 145.295 3.78409 145.014 3.64297C144.609 3.43011 144.136 3.32553 143.601 3.32553C143.092 3.32553 142.591 3.42765 142.117 3.6319C141.638 3.83631 141.204 4.13534 140.84 4.51162C140.46 4.9102 140.158 5.37925 139.952 5.89335C139.722 6.47038 139.608 7.08828 139.618 7.71064C139.618 8.37505 139.729 8.98655 139.95 9.52792C140.173 10.0619 140.468 10.5331 140.833 10.9158C141.188 11.2943 141.614 11.5956 142.087 11.8014C142.56 12.0072 143.069 12.1132 143.584 12.113C144.076 12.1217 144.563 12.0125 145.006 11.7943C145.314 11.6343 145.559 11.4412 145.747 11.2148V11.4326C145.745 11.4921 145.756 11.5513 145.778 11.6062C145.801 11.6612 145.834 11.7106 145.877 11.7512C145.916 11.7913 145.961 11.8232 146.012 11.8452C146.062 11.8671 146.116 11.8787 146.171 11.8792H147.78C147.837 11.8806 147.893 11.8699 147.946 11.8476C147.998 11.8254 148.046 11.7921 148.085 11.75C148.166 11.6649 148.21 11.5508 148.208 11.4326V4.0207C148.21 3.90149 148.167 3.78617 148.087 3.69834C148.049 3.65272 148.002 3.61618 147.948 3.59129C147.895 3.56679 147.838 3.555 147.78 3.55684ZM145.606 8.4907C145.437 8.95456 145.095 9.33232 144.655 9.54269C144.43 9.64997 144.184 9.70423 143.936 9.70141C143.685 9.70141 143.446 9.64727 143.224 9.54146C143.004 9.43906 142.806 9.2934 142.642 9.11285C142.477 8.9323 142.349 8.72044 142.266 8.48947C142.175 8.24565 142.129 7.98721 142.129 7.72663C142.129 7.44979 142.174 7.19018 142.264 6.94903C142.353 6.71894 142.481 6.50855 142.645 6.32891C142.812 6.15296 143.008 6.00901 143.224 5.90812C143.447 5.8023 143.69 5.74817 143.936 5.7494C144.199 5.7494 144.438 5.80353 144.655 5.90935C144.874 6.01393 145.066 6.15542 145.226 6.32891C145.388 6.50486 145.517 6.71402 145.606 6.94903C145.796 7.44486 145.796 7.99486 145.606 8.4907ZM156.622 9.40119L155.699 8.67157C155.522 8.52638 155.355 8.48701 155.21 8.54853C155.079 8.60436 154.964 8.69079 154.872 8.80076C154.673 9.05649 154.434 9.27863 154.167 9.45902C153.934 9.60913 153.629 9.68418 153.269 9.68418C153.004 9.68418 152.76 9.63496 152.542 9.53407C152.327 9.43495 152.134 9.2917 151.975 9.11328C151.812 8.93013 151.686 8.71715 151.602 8.48578C151.515 8.24262 151.471 7.98546 151.474 7.72663C151.474 7.4461 151.515 7.18772 151.602 6.94903C151.687 6.71279 151.811 6.50239 151.975 6.33014C152.138 6.15296 152.332 6.01024 152.546 5.90935C152.772 5.80107 153.019 5.74694 153.269 5.7494C153.629 5.7494 153.931 5.82814 154.167 5.97948C154.406 6.13451 154.646 6.35598 154.873 6.63651C154.968 6.7497 155.079 6.83337 155.21 6.88997C155.358 6.94903 155.523 6.90965 155.695 6.7657L156.618 6.03485C156.732 5.95424 156.817 5.83809 156.861 5.70387C156.886 5.63045 156.896 5.55227 156.889 5.47473C156.882 5.39719 156.858 5.32214 156.82 5.25478C156.464 4.67928 155.973 4.20275 155.391 3.86813C154.781 3.51009 154.05 3.32553 153.232 3.32553C152.668 3.32238 152.109 3.43311 151.588 3.65129C151.066 3.86947 150.593 4.19076 150.194 4.59652C149.805 4.99271 149.497 5.4701 149.29 5.99547C149.07 6.54494 148.957 7.13314 148.96 7.72663C148.96 8.33567 149.072 8.91765 149.29 9.45164C149.5 9.97332 149.807 10.4458 150.194 10.8395C150.593 11.2451 151.067 11.5663 151.588 11.7846C152.11 12.003 152.668 12.1142 153.232 12.1117C154.05 12.1117 154.781 11.9284 155.391 11.5654C155.976 11.232 156.468 10.7537 156.822 10.1751C156.86 10.1101 156.882 10.0374 156.889 9.96225C156.896 9.88643 156.886 9.80992 156.861 9.73832C156.813 9.60626 156.731 9.49007 156.622 9.40242V9.40119ZM165.194 11.1299L162.647 7.26277L164.827 4.29138C164.941 4.12036 164.971 3.95672 164.918 3.80292C164.88 3.69219 164.777 3.55684 164.514 3.55684H162.789C162.69 3.55775 162.593 3.58219 162.506 3.62821C162.398 3.68359 162.309 3.77173 162.253 3.88043L160.511 6.39904H160.089V0.447649C160.091 0.329229 160.048 0.214475 159.969 0.127748C159.929 0.0869473 159.881 0.0547186 159.828 0.0329554C159.776 0.0111921 159.719 0.000333517 159.663 0.00101762H158.051C157.964 0.00131009 157.88 0.0270233 157.807 0.0750545C157.735 0.123086 157.678 0.191382 157.643 0.271703C157.62 0.327334 157.608 0.387308 157.61 0.447649V11.4313C157.61 11.5581 157.656 11.6688 157.743 11.75C157.783 11.7911 157.831 11.8236 157.884 11.8456C157.937 11.8676 157.993 11.8786 158.051 11.878H159.664C159.721 11.8798 159.777 11.8692 159.83 11.8469C159.882 11.8246 159.929 11.7912 159.968 11.7488C160.007 11.7068 160.038 11.657 160.058 11.6024C160.08 11.5477 160.09 11.489 160.087 11.4301V8.52392H160.555L162.456 11.5335C162.592 11.7635 162.779 11.8792 163.013 11.8792H164.817C165.091 11.8792 165.205 11.7439 165.251 11.6307C165.316 11.4707 165.297 11.3083 165.194 11.1311V11.1299ZM125.015 3.55684H123.213C123.146 3.55424 123.079 3.56628 123.017 3.59218C122.954 3.61807 122.898 3.6572 122.852 3.70695C122.774 3.79331 122.72 3.89895 122.695 4.01332L121.365 9.14035H121.041L119.61 4.01332C119.586 3.90347 119.539 3.79998 119.473 3.70941C119.435 3.66072 119.386 3.62162 119.331 3.59516C119.276 3.5687 119.215 3.55559 119.154 3.55684H117.285C117.044 3.55684 116.892 3.63805 116.835 3.79431C116.786 3.94184 116.785 4.10149 116.832 4.24955L119.116 11.4658C119.152 11.5802 119.213 11.675 119.292 11.7512C119.337 11.7944 119.391 11.828 119.449 11.8499C119.507 11.8719 119.57 11.8818 119.632 11.8792H120.598L120.518 12.113L120.288 12.786C120.225 12.9927 120.103 13.1754 119.937 13.3101C119.784 13.4312 119.595 13.4954 119.402 13.4922C119.234 13.4914 119.069 13.4536 118.918 13.3815C118.768 13.312 118.625 13.2257 118.494 13.1243C118.375 13.0381 118.234 12.9889 118.089 12.9829H118.069C117.912 12.9829 117.775 13.0739 117.665 13.2486L117.091 14.1197C116.858 14.4938 116.987 14.7399 117.139 14.8764C117.422 15.152 117.778 15.3673 118.198 15.5211C118.614 15.6749 119.073 15.75 119.56 15.75C120.386 15.75 121.076 15.5199 121.605 15.0548C122.131 14.5922 122.52 13.9635 122.757 13.1797L125.405 4.24955C125.465 4.05884 125.465 3.90012 125.411 3.77093C125.366 3.6725 125.26 3.55684 125.015 3.55684Z"
  fill="#838383"
/>
</svg>
`,NT=`
  <button type="button" id="apple-pay-close-button">
    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.572 4.033L8.89.71a.4.4 0 0 0-.566-.566L5.003 3.459 1.681.145a.4.4 0 0 0-.566.566L4.44 4.033
      1.115 7.354a.398.398 0 0 0 0 .566.4.4 0 0 0 .566 0l3.322-3.33 3.322 3.33a.4.4 0 0 0 .566-.566L5.57 4.033z"
        fill="white"
      />
    </svg>
  </button>
`,DT=`
<svg width="74" height="19" viewBox="0 0 74 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="vault-logo">
  <g clip-path="url(#clip0_9910_9664)">
    <path
      d="M32.1273 15.8163H28.9432C28.6448 15.8163 28.4481 15.6622 28.3497 15.3507L25.1886 6.20188C25.1165 6.01825 25.1296 5.85101 25.2214 5.70345C25.3132 5.55589 25.451 5.48047 25.6346 5.48047H27.9693C28.2513 5.48047 28.435 5.63787 28.5202 5.94611L30.6648 12.9077L32.5536 5.94611C32.6388 5.63459 32.829 5.48047 33.1274 5.48047H35.4195C35.6031 5.48047 35.7441 5.55589 35.8425 5.70345C35.9409 5.85101 35.954 6.01825 35.8851 6.20188L32.7241 15.3507C32.6257 15.6622 32.4257 15.8163 32.1305 15.8163H32.1273Z"
      fill="#343C43" />
    <path
      d="M37.6361 14.5842C36.6097 13.5644 36.0981 12.2495 36.0981 10.6362C36.0981 9.02283 36.6097 7.71118 37.6361 6.69792C38.6624 5.68795 39.8757 5.17969 41.2759 5.17969C41.9416 5.17969 42.5384 5.31085 43.0696 5.57318C43.6008 5.83551 43.9943 6.16998 44.2468 6.57988V5.94373C44.2468 5.81584 44.2927 5.70763 44.3845 5.61581C44.4763 5.524 44.578 5.47809 44.6927 5.47809H46.8373C46.9652 5.47809 47.0701 5.524 47.1554 5.61581C47.2406 5.70763 47.2833 5.81584 47.2833 5.94373V15.3679C47.2833 15.4958 47.2406 15.6008 47.1554 15.686C47.0701 15.7713 46.9652 15.8139 46.8373 15.8139H44.6927C44.578 15.8139 44.4763 15.7713 44.3845 15.686C44.2927 15.6008 44.2468 15.4958 44.2468 15.3679V14.7088C43.991 15.1187 43.6008 15.4565 43.0696 15.7155C42.5384 15.9779 41.935 16.109 41.2562 16.109C39.8691 16.109 38.6624 15.6008 37.6361 14.581V14.5842ZM39.9151 8.79985C39.433 9.31795 39.1936 9.93443 39.1936 10.6558C39.1936 11.3772 39.433 11.997 39.9151 12.5118C40.3971 13.0299 40.9972 13.2857 41.7186 13.2857C42.44 13.2857 43.0401 13.0266 43.5221 12.5118C44.0041 11.997 44.2435 11.3772 44.2435 10.6558C44.2435 9.93443 44.0041 9.31467 43.5221 8.79985C43.0401 8.28502 42.44 8.02597 41.7186 8.02597C40.9972 8.02597 40.3938 8.28502 39.9151 8.79985Z"
      fill="#343C43" />
    <path
      d="M51.6315 5.9016V11.2302C51.6315 11.9385 51.8086 12.4959 52.1627 12.9058C52.5169 13.3157 53.0415 13.5223 53.7334 13.5223C54.4253 13.5223 54.9401 13.319 55.3139 12.9058C55.6878 12.4959 55.878 11.9516 55.878 11.2728V5.9016C55.878 5.78683 55.9239 5.68845 56.0157 5.60319C56.1075 5.51794 56.2092 5.47531 56.3239 5.47531H58.4685C58.6095 5.47531 58.7242 5.52122 58.8095 5.61303C58.8948 5.70485 58.9374 5.81306 58.9374 5.94094V15.3652C58.9374 15.4931 58.8948 15.598 58.8095 15.6832C58.7242 15.7685 58.6128 15.8111 58.4685 15.8111H56.3239C56.196 15.8111 56.0911 15.7718 56.0058 15.6931C55.9206 15.6144 55.878 15.5127 55.878 15.3848V14.7257C55.1139 15.6472 54.081 16.1062 52.7792 16.1062C51.4774 16.1062 50.4707 15.7062 49.7132 14.9061C48.9557 14.106 48.5786 13.0501 48.5786 11.7319V5.89504C48.5786 5.78027 48.6278 5.68189 48.7262 5.59664C48.8246 5.51138 48.9295 5.46875 49.0442 5.46875H51.1658C51.2937 5.46875 51.4019 5.51138 51.4938 5.59664C51.5856 5.68189 51.6315 5.78027 51.6315 5.89504V5.9016Z"
      fill="#343C43" />
    <path
      d="M62.9872 15.8148C62.0658 15.8148 61.387 15.582 60.9509 15.113C60.5115 14.6474 60.2917 14.0178 60.2917 13.2243V1.42267C60.2917 1.29478 60.3344 1.18657 60.4196 1.09475C60.5049 1.00294 60.6164 0.957031 60.7607 0.957031H62.8823C63.0233 0.957031 63.138 1.00294 63.2233 1.09475C63.3085 1.18657 63.3512 1.29478 63.3512 1.42267V12.6078C63.3512 12.8045 63.4069 12.9652 63.5217 13.0865C63.6332 13.2079 63.7906 13.2669 63.9873 13.2669H64.6464C64.9448 13.2669 65.0924 13.4144 65.0924 13.7129V15.2409C65.0924 15.6246 64.8956 15.8148 64.4989 15.8148H62.9905H62.9872Z"
      fill="#343C43" />
    <path
      d="M66.722 12.7378V8.04861H65.3644C65.2365 8.04861 65.1316 8.00271 65.0463 7.91089C64.9611 7.81907 64.9185 7.71086 64.9185 7.58298V5.94997C64.9185 5.82208 64.9611 5.71387 65.0463 5.62206C65.1316 5.53024 65.2365 5.48433 65.3644 5.48433H66.722V2.74626C66.722 2.60526 66.7679 2.49049 66.8597 2.40523C66.9515 2.31997 67.0597 2.27734 67.1876 2.27734H69.3518C69.4666 2.27734 69.5683 2.31997 69.6601 2.40523C69.7519 2.49049 69.7978 2.60198 69.7978 2.74626V5.48433H72.7064C72.8343 5.48433 72.9458 5.53024 73.0474 5.62206C73.1458 5.71387 73.195 5.82208 73.195 5.94997V7.58298C73.195 7.69775 73.1458 7.80268 73.0474 7.90105C72.949 7.99943 72.8343 8.04861 72.7064 8.04861H69.7978V12.0164C69.7978 12.4689 69.9027 12.7804 70.1159 12.9509C70.329 13.1214 70.5684 13.2067 70.8373 13.2067C71.1193 13.2067 71.4308 13.1083 71.7718 12.9083C72.1555 12.6689 72.4441 12.6951 72.6408 12.9935L73.3852 14.1806C73.5557 14.4495 73.5327 14.7052 73.3229 14.9446C72.6146 15.6792 71.5948 16.0497 70.2667 16.0497C69.2764 16.0497 68.437 15.7742 67.7516 15.2234C67.0663 14.6725 66.722 13.8428 66.722 12.741V12.7378Z"
      fill="#343C43" />
    <path
      d="M15.2266 0H4.43496C2.26089 0 0.5 1.76089 0.5 3.93496V14.7266C0.5 16.9006 2.26089 18.6615 4.43496 18.6615H15.2266C17.4006 18.6615 19.1615 16.9006 19.1615 14.7266V3.93496C19.1615 1.76089 17.4006 0 15.2266 0ZM15.079 12.2312L12.1442 14.6118C11.9114 14.8086 11.5507 14.6807 11.4949 14.379L10.8161 11.8934C10.7702 11.6934 10.8489 11.4868 11.0096 11.3589C11.4425 11.0113 11.7179 10.4801 11.7179 9.8833C11.7179 8.44048 10.098 7.37476 8.5765 8.40113C8.48468 8.46344 8.40598 8.54214 8.34368 8.63723C7.63539 9.68983 7.92723 10.7883 8.65192 11.3655C8.8126 11.4934 8.88474 11.6967 8.84211 11.8967L8.22891 14.3823C8.17317 14.6839 7.81246 14.8118 7.57964 14.6151L4.57924 12.2344C4.47431 12.1262 4.41856 11.9787 4.4284 11.8278L4.77271 6.69271C4.78582 6.49268 4.91371 6.31561 5.09734 6.23691L9.41924 4.03661C9.68157 3.9284 9.97341 3.9284 10.2357 4.03661L14.5576 6.23691C14.7445 6.31561 14.8691 6.49268 14.8855 6.69271L15.2299 11.8278C15.2397 11.9787 15.1839 12.1262 15.079 12.2344V12.2312Z"
      fill="#343C43" />
  </g>
  <defs>
    <clipPath id="clip0_9910_9664">
      <rect width="73" height="18.6615" fill="white" transform="translate(0.5)" />
    </clipPath>
  </defs>
</svg>
`,uf={height:"50px",width:"auto",borderRadius:"3px",padding:"10px",locale:"en",type:"pay"},_g=function(n){return n&&Ms(n)==="object"?Object.keys(uf).reduce((function(e,t){return ct(ct({},e),{},B6({},t,n[t]||uf[t]))}),{}):uf},VT=`
  .pre-checkout-modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease;
  }

  .pre-checkout-modal.show {
    display: block;
  }

  .pre-checkout-modal__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: #fefefe;
    padding: 20px;
    padding-bottom: max(30px, env(safe-area-inset-bottom));
    width: 100%;
    border-radius: 6px 6px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;

    box-sizing: border-box;
    transform: translateY(238px);
    transition: transform 0.3s cubic-bezier(.16,.81,.32,1);
  }

  .modal-wrapper {
    width: 100%;
  }

  .payment-info {
    position: relative;
    padding-bottom: 15px;
    border-bottom: solid 1px whitesmoke;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .customer-email {
    color: #737373;
    font-size: 13px;
    line-height: 16px;
  }

  .customer-info {
    flex: 1;
    text-align: right;
  }

  .merchant-logo {
    display: flex;
    align-items: center;
    height: 30px;
  }
  .transaction-amount {
    margin-top: 5px;
    font-size: 13px;
    line-height: 16px;
    color: #737373;
  }

  .amount {
    color: #29b263;
    font-weight: bold;
  }

  @media only screen and (min-width: 500px) {
    .pre-checkout-modal__content {
      bottom: 0;
      top: 0;
      margin: auto;
      border-radius: 6px;
      height: fit-content;
    }
  }

  .pre-checkout-modal__content.show {
    transform: translateY(0);
    margin: 0 auto;
    margin-top: 100px;
  }

  .pre-checkout-modal__content > * {
    margin-top: 0;
    margin-bottom: 40px;
  }
  .pre-checkout-modal__content > *:last-child {
    margin-bottom: 0;
  }

  .pre-checkout-modal__content svg {
    margin: auto;
    width: 100%;
  }

  #inline-button-wordmark--white {
    position: absolute;
    bottom: -50px;
    margin: auto;
    left: 0;
    right: 0;
    width: fit-content;
  }

  #inline-button-wordmark--grey {
    display: none;
  }

  .pre-checkout-modal__content #apple-pay-mark--light {
    margin-bottom: 16px;
  }

  .pre-checkout-modal p {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: #4E4E4E;
    line-height: 140%;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0 20px;
    text-align: center;
    letter-spacing: -0.3px;
  }

  .pre-checkout-modal button {
    height: 42px;
    width: 100%;
    
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .pre-checkout-modal .open-paystack-pop-button {
    background: #FAFAFA;
    border: 1px solid #F2F3F3;
    color: #4E4E4E;
    font-weight: 500;
  }

  .pre-checkout-modal .open-paystack-pop-button:hover, 
  .pre-checkout-modal .open-paystack-pop-button:active, 
  .pre-checkout-modal .open-paystack-pop-button:focus {
    background: #F2F3F3;
  }

  .pre-checkout-modal .pay-with-vault-button {
    font-weight: 700;
    background: #44b669;
    background: linear-gradient(to bottom, #44b669 0%, #40ad57 100%);
    border: solid 1px #49a861;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    outline: none;
    color: white;
    transition: all 300ms;
  }

  .pre-checkout-modal .vault-instruction {
    color: #2f3d4d;
    font-size: 14px;
    letter-spacing: normal;
    line-height: 1.4;
    margin: 0 auto 24px;
    padding: 0;
  }
  .vault-logo-container {
    width: 74px;
    height: 20px;
    margin: 0 auto 24px
  }
  .vault-logo-container img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
  .vault-divider {
    margin-bottom: 16px;
    margin-top: 24px;
    position: relative;
  }
  .vault-divider__container {
    align-items: center;
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .vault-divider__line {
    border: 1px dashed #ccced0;
    width: 100%;
  }
  .vault-divider__text-container {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .vault-divider__text {
    background-color: #fff;
    color: #999da1;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -.3px;
    line-height: 19.6px;
    margin-bottom: 2px;
    padding: 0 8px;
  }

  #payment-request-button {
    width: 100%;
    height: fit-content;
    margin: 24px 0 16px 0;
  }

  #paystackpop-button {
    padding: 0 16px;
  }

  #apple-pay-close-button {
    position: absolute;
    text-align: center;
    top: 0;
    right: -26px;
    height: 16px;
    width: 16px;
    padding: 0;
    display: inline-block;
    z-index: 3;
    border-radius: 50%;
    background: transparent;
    transition: all 300ms;
    outline: none;
    cursor: pointer;
    border: none;
  }

  #apple-pay-close-button svg {
    width: initial;
  }
  
  #apple-pay-close-button:hover {
    background-color: #e22b28;
  }

  @media only screen and (max-width: 500px) {
    .pre-checkout-modal__content {
      max-width: 500px;
      border-radius: 0;
      padding-bottom: 0;
    }

    .modal-wrapper {
      padding: 0;
    }

    .vault-logo-container {
      width: 74px;
      height: 20px;
    }

    #inline-button-wordmark--white {
      display: none
    }
    
    #inline-button-wordmark--grey {
      display: block;
      width: 100%;
      margin: 16px 0;
      height: 13px;
    }

    #apple-pay-close-button {
      display: none;
    }
  }
`,wg=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Number(parseFloat(n/100).toFixed(2))},Cg={headers:{accept:"application/json, text/plain, */*","accept-language":"en-GB,en-US;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrerPolicy:"no-referrer-when-downgrade",method:"POST",mode:"cors",credentials:"omit"};function xg(n){return Object.keys(n).reduce((function(e,t){var i=encodeURIComponent(t),o=encodeURIComponent(n[t]),l="".concat(i,"=").concat(o);return[].concat(AT(e),[l])}),[]).join("&")}var LT=function(n){return{biannually:"BIANNUAL PLAN",annually:"ANNUAL PLAN"}[n]||"".concat(n.toUpperCase()," PLAN")},W6=function(){try{return window.location&&window.location.protocol==="https:"&&window.ApplePaySession&&window.ApplePaySession.supportsVersion(an.applePayVersion)}catch{return!1}},Qf=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return W6()&&n.includes("apple_pay")};function MT(){var n=0;return Array.from(document.querySelectorAll("body *")).forEach((function(e){var t=window.getComputedStyle(e),i=parseFloat(t.zIndex);!Number.isNaN(i)&&i>n&&(n=i)})),n}function hf(n){var e=document.createElement("iframe");return e.setAttribute("frameBorder","0"),e.setAttribute("allowtransparency","true"),e.id=n,e.style.display="none",e}function wu(n){return n.querySelector("apple-pay-button")||n.querySelector("#apple-pay-button")}function lu(n){return document.querySelector("#".concat(n))}function Eg(n,e,t){var i=e.channels,o=i===void 0?[]:i,l=e.styles,u=l===void 0?{}:l,d={applePay:!1};return new Promise((function(m,_){if(n)if(Qf(o)){if(wu(n))return d.applePay=!0,void m(d);(function(C,E){return new Promise((function(I,L){var O=document.createElement("script");O.src=C,O.addEventListener("load",(function(){I(!0)})),O.addEventListener("error",(function(){O.remove(),L(!1)})),E?E.appendChild(O):document.head.appendChild(O)}))})("https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js",n).then((function(){if(t&&t!==1077497&&window&&!Array.isArray(window.webpackJsonp))throw new Error("Incorrect data type for 'webpackJsonp', expected array, got ".concat(Ms(window.webpackJsonp),". Switching to fallback apple pay button"));(function(C,E){var I=E.styles,L=E.theme,O=document.createElement("style"),q=(function(te){var J=te.height,re=te.width,le=te.borderRadius,ye=te.padding;return`
  apple-pay-button {
    --apple-pay-button-width: `.concat(re,`;
    --apple-pay-button-height: `).concat(J,`;
    --apple-pay-button-border-radius: `).concat(le,`;
    --apple-pay-button-padding: `).concat(ye,`;
    --apple-pay-button-box-sizing: border-box;
    width: `).concat(re,`;
  }
`)})(I);O.type="text/css",O.styleSheet?O.styleSheet.cssText=q:O.appendChild(document.createTextNode(q)),C.appendChild(O);var F=document.createElement("apple-pay-button");F.setAttribute("buttonstyle",L==="light"?"white":"black"),F.setAttribute("type",I.type),F.setAttribute("locale",I.locale),C.appendChild(F)})(n,{styles:_g(u.applePay),theme:u.theme}),d.applePay=!0,m(d)})).catch((function(){(function(C,E){var I=E.styles,L=E.theme,O=document.createElement("style"),q=(function(J){var re=J.height,le=J.width,ye=J.borderRadius,de=J.padding,k=J.type,S=J.locale;return`
  @supports (-webkit-appearance: -apple-pay-button) { 
    .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        width: `.concat(le,`;
        height: `).concat(re,`;
        border-radius: `).concat(ye,`;
        padding: `).concat(de,`;
        -apple-pay-button-type: `).concat(k,`;
        -webkit-locale: `).concat(S,`;
    }
    .apple-pay-button-black {
        -apple-pay-button-style: black;
    }
    .apple-pay-button-white {
        -apple-pay-button-style: white;
    }
    .apple-pay-button-white-with-line {
        -apple-pay-button-style: white-outline;
    }
  }

  @supports not (-webkit-appearance: -apple-pay-button) {
    .apple-pay-button {
        display: inline-block;
        background-size: 100% 60%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 5px;
        padding: 0px;
        box-sizing: border-box;
        min-width: 200px;
        min-height: 32px;
        max-height: 64px;
    }
    .apple-pay-button-black {
        background-image: -webkit-named-image(apple-pay-logo-white);
        background-color: black;
    }
    .apple-pay-button-white {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: white;
    }
    .apple-pay-button-white-with-line {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: white;
        border: .5px solid black;
    }
  }
`)})(I);O.type="text/css",O.styleSheet?O.styleSheet.cssText=q:O.appendChild(document.createTextNode(q)),C.appendChild(O);var F=document.createElement("button");F.classList.add("apple-pay-button",L==="light"?"apple-pay-button-white":"apple-pay-button-black"),F.id="apple-pay-button";var te=document.createElement("span");te.classList.add("logo"),F.appendChild(te),C.appendChild(F)})(n,{styles:_g(u.applePay),theme:u.theme}),d.applePay=!0,m(d)}))}else _("No wallet payment method is available on this device");else _("Container to mount elements was not provided")}))}function jT(n){for(;n.firstChild;)n.removeChild(n.firstChild)}var G6="payment-request-button",K6="paystackpop-button",Q6="pay-with-vault-button";function X6(n){var e=document.createElement("button");return e.id=K6,e.className="open-paystack-pop-button",e.innerText=n,e}function Tg(n){return n.querySelector("#".concat(K6))}function Y6(){var n=document.createElement("div");return n.id=G6,n}function df(n){return n.querySelector("#".concat(G6))}function OT(){var n=document.createElement("button");return n.className="pay-with-vault-button",n.id=Q6,n.innerText="Pay with Vault",n}function FT(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=document.createElement("div");t.className="vault-logo-container",t.innerHTML=DT,n.appendChild(t);var i=document.createElement("p");i.id="instruction",i.className="vault-instruction",i.innerHTML="Access your saved cards and bank details for faster, more secure payments",n.appendChild(i);var o=OT();n.appendChild(o);var l=document.createElement("div");if(l.className="vault-divider",l.innerHTML='<div id="vault-divider" class="vault-divider__container"><div class="vault-divider__line"></div></div><div class="vault-divider__text-container"><span class="vault-divider__text">or</span></div>',n.appendChild(l),e.canPayWithApplePay){var u=Y6();n.appendChild(u)}var d=X6("Use other payment methods");n.appendChild(d)}function UT(n){var e=document.createElement("div");e.innerHTML=`
  <svg width="51" height="32" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="apple-pay-mark--light">
    <g>
    <path d="M46.0162 0H4.98386C4.81297 0 4.64177 0 4.47118 0.000996555C4.32698 0.00202331 4.18311 0.00362383 4.03925 0.00754966C3.72548 0.0160355 3.40903 0.0345472 3.09919 0.0902335C2.7844 0.146886 2.49148 0.239294 2.20571 0.384791C1.92477 0.52766 1.66757 0.71453 1.44468 0.937516C1.22169 1.1605 1.03482 1.41728 0.891977 1.69852C0.74645 1.98429 0.653982 2.27731 0.597722 2.59234C0.541737 2.90227 0.523101 3.21866 0.514645 3.53209C0.51078 3.67596 0.509122 3.81982 0.508183 3.96366C0.507186 4.13461 0.507519 4.30545 0.507519 4.4767V27.5236C0.507519 27.6949 0.507186 27.8654 0.508183 28.0367C0.509122 28.1805 0.51078 28.3244 0.514645 28.4683C0.523101 28.7814 0.541737 29.0978 0.597722 29.4077C0.653982 29.7228 0.74645 30.0157 0.891977 30.3015C1.03482 30.5827 1.22169 30.8399 1.44468 31.0625C1.66757 31.2859 1.92477 31.4727 2.20571 31.6152C2.49148 31.7611 2.7844 31.8535 3.09919 31.9102C3.40903 31.9655 3.72548 31.9843 4.03925 31.9928C4.18311 31.9961 4.32698 31.998 4.47118 31.9987C4.64177 32 4.81297 32 4.98386 32H46.0162C46.1868 32 46.358 32 46.5286 31.9987C46.6724 31.998 46.8163 31.9961 46.9608 31.9928C47.2739 31.9843 47.5903 31.9655 47.9009 31.9102C48.2153 31.8535 48.5083 31.7611 48.7941 31.6152C49.0753 31.4727 49.3317 31.2859 49.5551 31.0625C49.7777 30.8399 49.9646 30.5827 50.1078 30.3015C50.2537 30.0157 50.346 29.7228 50.402 29.4077C50.458 29.0978 50.4762 28.7814 50.4847 28.4683C50.4886 28.3244 50.4906 28.1805 50.4912 28.0367C50.4925 27.8654 50.4926 27.6949 50.4926 27.5236V4.4767C50.4926 4.30545 50.4925 4.13461 50.4912 3.96366C50.4906 3.81982 50.4886 3.67596 50.4847 3.53209C50.4762 3.21866 50.458 2.90227 50.402 2.59234C50.346 2.27731 50.2537 1.98429 50.1078 1.69852C49.9646 1.41728 49.7777 1.1605 49.5551 0.937516C49.3317 0.71453 49.0753 0.52766 48.7941 0.384791C48.5083 0.239294 48.2153 0.146886 47.9009 0.0902335C47.5903 0.0345472 47.2739 0.0160355 46.9608 0.00754966C46.8163 0.00362383 46.6724 0.00202331 46.5286 0.000996555C46.358 0 46.1868 0 46.0162 0Z" fill="black"/>
    <path d="M46.0162 1.06662L46.521 1.06759C46.6577 1.06855 46.7945 1.07003 46.932 1.07378C47.1711 1.08024 47.4509 1.09319 47.7117 1.13994C47.9384 1.18077 48.1285 1.24286 48.311 1.33575C48.4911 1.42728 48.6562 1.54723 48.8003 1.69113C48.9449 1.83599 49.065 2.0013 49.1578 2.18343C49.2501 2.36447 49.3118 2.55369 49.3524 2.78205C49.3991 3.04001 49.412 3.32055 49.4185 3.56121C49.4222 3.69704 49.424 3.83287 49.4247 3.97194C49.426 4.14012 49.4259 4.3082 49.4259 4.47671V27.5236C49.4259 27.6921 49.426 27.8599 49.4246 28.0317C49.424 28.1675 49.4222 28.3033 49.4185 28.4394C49.4119 28.6797 49.3991 28.9601 49.3519 29.2211C49.3118 29.4463 49.2502 29.6356 49.1573 29.8175C49.0648 29.9992 48.9449 30.1643 48.8009 30.3083C48.656 30.4532 48.4915 30.5728 48.3092 30.6652C48.1281 30.7576 47.9383 30.8197 47.7138 30.8601C47.4477 30.9075 47.1562 30.9205 46.9367 30.9265C46.7986 30.9296 46.6611 30.9315 46.5203 30.9321C46.3525 30.9334 46.1841 30.9334 46.0162 30.9334H4.98386C4.98162 30.9334 4.97945 30.9334 4.97718 30.9334C4.81127 30.9334 4.64503 30.9334 4.4761 30.9321C4.33836 30.9315 4.20093 30.9296 4.06805 30.9266C3.8435 30.9205 3.55181 30.9075 3.2879 30.8604C3.06151 30.8197 2.87171 30.7576 2.68822 30.664C2.50766 30.5724 2.34329 30.453 2.19831 30.3077C2.05444 30.1641 1.93488 29.9995 1.84245 29.8176C1.74992 29.6358 1.68801 29.446 1.64731 29.218C1.60025 28.9576 1.58733 28.6783 1.58087 28.4396C1.57718 28.303 1.57564 28.1664 1.57476 28.0305L1.5741 27.6295L1.57413 27.5236V4.47671L1.5741 4.37083L1.57473 3.97067C1.57564 3.83402 1.57718 3.6974 1.58087 3.56088C1.58733 3.32197 1.60025 3.04258 1.64769 2.77991C1.68804 2.55405 1.74992 2.36422 1.84293 2.18155C1.93464 2.001 2.05441 1.83617 2.19903 1.69158C2.34308 1.54747 2.50799 1.42767 2.6897 1.33527C2.87122 1.24283 3.06138 1.18077 3.28778 1.14003C3.54864 1.09316 3.82861 1.08024 4.06839 1.07375C4.20507 1.07003 4.34174 1.06855 4.4774 1.06762L4.98386 1.06662H46.0162Z" fill="white"/>
    <path d="M14.1531 10.7629C14.5811 10.2276 14.8715 9.50886 14.7949 8.77435C14.1684 8.80551 13.4038 9.18768 12.9612 9.72342C12.5638 10.1822 12.212 10.9311 12.3037 11.6348C13.007 11.6958 13.7097 11.2832 14.1531 10.7629Z" fill="black"/>
    <path d="M14.7869 11.7722C13.7655 11.7114 12.8972 12.3519 12.4094 12.3519C11.9214 12.3519 11.1745 11.8029 10.3667 11.8177C9.31521 11.8331 8.33959 12.4276 7.80602 13.3731C6.70857 15.2646 7.51641 18.0704 8.58362 19.611C9.10188 20.3731 9.72648 21.2123 10.5495 21.1822C11.3271 21.1517 11.6319 20.6787 12.5771 20.6787C13.5216 20.6787 13.7961 21.1822 14.6192 21.1669C15.4729 21.1516 16.0065 20.4044 16.5248 19.6415C17.1193 18.7727 17.3627 17.9338 17.378 17.8877C17.3627 17.8725 15.732 17.2469 15.7169 15.3711C15.7015 13.8004 16.9972 13.0534 17.0581 13.007C16.3265 11.9249 15.1832 11.8029 14.7869 11.7722Z" fill="black"/>
    <path d="M23.68 9.64661C25.8999 9.64661 27.4457 11.1768 27.4457 13.4046C27.4457 15.6404 25.8681 17.1786 23.6244 17.1786H21.1665V21.0872H19.3907V9.64661H23.68V9.64661ZM21.1665 15.688H23.2041C24.7502 15.688 25.6302 14.8556 25.6302 13.4126C25.6302 11.9697 24.7502 11.1451 23.2121 11.1451H21.1665V15.688Z" fill="black"/>
    <path d="M27.9097 18.7167C27.9097 17.2578 29.0276 16.3619 31.0098 16.2509L33.293 16.1162V15.474C33.293 14.5464 32.6666 13.9914 31.6203 13.9914C30.629 13.9914 30.0106 14.467 29.8601 15.2124H28.2428C28.3379 13.7059 29.6222 12.5959 31.6836 12.5959C33.7053 12.5959 34.9976 13.6663 34.9976 15.3392V21.0872H33.3563V19.7156H33.3169C32.8333 20.6433 31.7787 21.2299 30.6847 21.2299C29.0514 21.2299 27.9097 20.2151 27.9097 18.7167ZM33.293 17.9635V17.3055L31.2395 17.4323C30.2167 17.5037 29.6381 17.9556 29.6381 18.6691C29.6381 19.3985 30.2406 19.8742 31.1603 19.8742C32.3574 19.8742 33.293 19.0496 33.293 17.9635Z" fill="black"/>
    <path d="M36.547 24.1556V22.768C36.6736 22.7997 36.959 22.7997 37.1018 22.7997C37.8946 22.7997 38.3228 22.4668 38.5843 21.6105C38.5843 21.5946 38.7351 21.1031 38.7351 21.0952L35.7224 12.7466H37.5774L39.6866 19.5333H39.7181L41.8273 12.7466H43.6349L40.5109 21.5232C39.7976 23.5451 38.973 24.1952 37.2447 24.1952C37.1018 24.1952 36.6736 24.1793 36.547 24.1556Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="49.9851" height="32" fill="white" transform="translate(0.507462)"/>
    </clipPath>
    </defs>
  </svg>
`,n.appendChild(e);var t=document.createElement("p");t.id="apple-pay-description",t.innerHTML="Pay with Apple Pay to complete your purchase without filling a form",n.appendChild(t);var i=Y6();n.appendChild(i);var o=X6("More payment options");n.appendChild(o)}var cu=[{value:"key",required:!0,types:["string"]},{value:"amount",required:!0,or:["plan","planCode"],types:["string","number"]},{value:"currency",required:!1,types:["string"]},{value:"email",required:!0,or:["customerCode"],types:["string"]},{value:"label",required:!1,types:["string"]},{value:"firstName",required:!1,types:["string"]},{value:"lastName",required:!1,types:["string"]},{value:"reference",required:!1,types:["string"]},{value:"phone",required:!1,types:["string"]},{value:"customerCode",required:!1,override:"email",types:["string"]},{value:"channels",required:!1,types:["array"]},{value:"paymentRequest",required:!1,types:["string","number"]},{value:"paymentPage",required:!1,types:["string"]},{value:"hash",required:!1,types:["string"]},{value:"container",required:!1,types:["string"]},{value:"metadata",required:!1,types:["object"]},{value:"subaccountCode",required:!1,types:["string"]},{value:"bearer",required:!1,types:["string"]},{value:"transactionCharge",required:!1,types:["string","number"]},{value:"planCode",required:!1,override:"amount",types:["string"]},{value:"subscriptionCount",required:!1,types:["number"]},{value:"planInterval",required:!1,types:["string"]},{value:"subscriptionLimit",required:!1,types:["number"]},{value:"subscriptionStartDate",required:!1,types:["string"]},{value:"accessCode",required:!1,types:["string"]},{value:"onError",required:!1,types:["function"]},{value:"onLoad",required:!1,types:["function"]},{value:"onSuccess",required:!1,types:["function"]},{value:"onCancel",required:!1,types:["function"]},{value:"callback",required:!1,types:["function"]},{value:"onClose",required:!1,types:["function"]},{value:"onBankTransferConfirmationPending",required:!1,types:["function"]},{value:"firstname",required:!1,types:["string"]},{value:"lastname",required:!1,types:["string"]},{value:"customer_code",required:!1,types:["string"]},{value:"payment_request",required:!1,types:["string","number"]},{value:"subaccount",required:!1,types:["string"]},{value:"transaction_charge",required:!1,types:["number","string"]},{value:"plan",required:!1,types:["string"]},{value:"quantity",required:!1,types:["number"]},{value:"interval",required:!1,types:["string"]},{value:"invoice_limit",required:!1,types:["number","string"]},{value:"start_date",required:!1,types:["string"]},{value:"payment_page",required:!1,types:["number","string"]},{value:"order_id",required:!1,types:["number"]},{value:"ref",required:!1,types:["string"]},{value:"card",required:!1,types:["string"]},{value:"bank",required:!1,types:["string"]},{value:"split",required:!1,types:["object"]},{value:"split_code",required:!1,types:["string"]},{value:"transaction_type",required:!1,types:["string"]},{value:"subscription",required:!1,types:["number"]},{value:"language",required:!1,types:["string"]},{value:"connect_account",required:!1,types:["string"]},{value:"connect_split",required:!1,types:["array"]}];function zT(n){var e,t=ct({},n);return t.metadata=n.metadata||{},t.metadata.referrer=(e=window.location.href)&&e.length>500?e.split("?")[0]:e,t.metadata=JSON.stringify(t.metadata),t.mode="popup",n.split&&typeof n.split!="string"&&(t.split=JSON.stringify(t.split)),t.card!==void 0&&["false",!1].indexOf(t.card)>-1&&(t.channels=["bank"],delete t.card),t.bank!==void 0&&["false",!1].indexOf(t.bank)>-1&&(t.channels=["card"],delete t.bank),[{to:"firstname",from:"firstName"},{to:"lastname",from:"lastName"},{to:"customer_code",from:"customerCode"},{to:"payment_request",from:"paymentRequest"},{to:"subaccount",from:"subaccountCode"},{to:"transaction_charge",from:"transactionCharge"},{to:"plan",from:"planCode"},{to:"quantity",from:"subscriptionCount"},{to:"interval",from:"planInterval"},{to:"invoice_limit",from:"subscriptionLimit"},{to:"start_date",from:"subscriptionStartDate"},{to:"ref",from:"reference"}].forEach((function(i){t[i.from]&&(t[i.to]=t[i.from],delete t[i.from])})),Object.values(n).forEach((function(i,o){if(typeof i=="function"){var l=Object.keys(n)[o];delete t[l]}})),t}var BT=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"],J6=window&&window.navigator&&(window.navigator.platform||window.navigator.userAgentData&&window.navigator.userAgentData.platform),Z6=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.platform,t=n.userAgent,i=t===void 0?window&&window.navigator&&window.navigator.userAgent:t,o=e||J6;return BT.includes(o)||i.includes("Mac")&&"ontouchend"in document},qT=function(n,e,t){var i="".concat(an.paystackApiUrl,"transaction/update_log/").concat(n),o={Authorization:"Bearer ".concat(e)};return fetch(i,{method:"POST",body:JSON.stringify({payload:JSON.stringify(t)}),headers:o})},$T=function(n,e){var t="".concat(an.paystackApiUrl,"transaction/set_ip/").concat(n),i={Authorization:"Bearer ".concat(e)};return fetch(t,{method:"POST",headers:i})},HT={initializeLog:function(n){var e=n||{},t=e.attempts,i=e.authentication,o=e.errors,l=e.history;this.log={start_time:Math.round(Date.now()/1e3),time_spent:0,attempts:t||0,authentication:i,errors:o||0,success:!1,mobile:Z6(),input:[],history:l||[]}},getTimeSpent:function(){var n=Math.round(Date.now()/1e3);return this.log.time_spent=n-this.log.start_time,this.log.time_spent},logAPIResponse:function(n,e){switch(n.status){case"success":return this.logApiSuccess(e);case"failed":return this.logApiError(n.message);default:return!1}},logValidationResponse:function(n){return this.log.history.push({type:"action",message:n,time:this.getTimeSpent()}),this.saveLog()},logAttempt:function(n){var e="Attempted to pay";return n&&(e+=" with ".concat(n)),this.log.attempts+=1,this.log.history.push({type:"action",message:e,time:this.getTimeSpent()}),this.saveLog()},logApiError:function(n){var e="Error";return n&&(e+=": ".concat(n)),this.log.errors+=1,this.log.history.push({type:"error",message:e,time:this.getTimeSpent()}),this.saveLog()},logApiSuccess:function(n){var e="Successfully paid";return n&&(e+=" with ".concat(n)),this.log.success=!0,this.log.history.push({type:"success",message:e,time:this.getTimeSpent()}),this.saveLog()},saveLog:function(){try{if(this.response)return qT(this.id,this.response.merchant_key,this.log)}catch{}},saveIpAddress:function(){try{if(this.response)return $T(this.id,this.response.merchant_key)}catch{}}},WT=["language","connect_account"],GT={requestInline:function(){var n=this,e=this.urlParameters,t=e.language,i=e.connect_account,o=Gf(e,WT),l=ct({"Content-Type":"application/json"},t&&{"Accept-Language":t});return(this.accessCode?fetch(new URL("transaction/verify_access_code/".concat(this.accessCode),an.paystackApiUrl).toString(),{headers:l}):fetch(new URL("/checkout/request_inline",an.paystackApiUrl).toString(),{method:"POST",body:JSON.stringify(o),headers:ct(ct({},l),i&&{"x-connect-account":i})})).then((function(u){return u.json()})).then((function(u){if(u.status===!1)throw new Error(u.message);return n.response=u.data,n.id=u.data.id,n.status=u.data.transaction_status,n.accessCode=u.data.access_code,n.log=null,Object.assign(n,HT),n.initializeLog(u.data.log),n.saveIpAddress(),u.data}))}},ff=(function(){function n(e){U6(this,n),(function(_){function C(O,q){this.message=O,this.issues=q||[]}if(!_||Ms(_)!=="object")throw new C("Transaction parameters should be a non-empty object");var E=_;if("accessCode"in E)return{accessCode:E.accessCode};Object.keys(E).forEach((function(O){cu.find((function(q){return q.value===O}))!==void 0||delete E[O]}));var I=Object.keys(E),L=[];if(cu.filter((function(O){return O.required})).forEach((function(O){var q=!E[O.value],F=O.or?O.or.some((function(te){return E[te]})):null;q&&!F&&L.push({message:"Required parameter missing: ".concat(O.value)})})),I.forEach((function(O){var q=E[O],F=cu.find((function(J){return J.value===O})),te=Ms(q);te==="object"&&Array.isArray(q)&&(te="array"),F.types.indexOf(te)<=-1&&L.push({message:"Invalid parameter type: ".concat(O),validTypes:F.types})})),I.forEach((function(O){var q=cu.find((function(F){return F.value===O}));q.override&&delete E[q.override]})),L.length)throw new C("Invalid transaction parameters",L)})(e),this.parameters=e,this.urlParameters=zT(e),this.id=null,this.status=null,this.accessCode=e.accessCode||null,this.authorizationUrl=null,this.errors=[],this.response=null,this.isActive=!0;var t=e.onError,i=e.onLoad,o=e.onSuccess,l=e.onCancel,u=e.callback,d=e.onClose,m=e.onBankTransferConfirmationPending;this.callbacks={onError:t,onLoad:i,onSuccess:o,onCancel:l,onBankTransferConfirmationPending:m},this.deprecatedCallbacks={callback:u,onClose:d},Object.assign(this,GT)}return z6(n,[{key:"onSetupError",value:function(e){this.logError(e),this.callbacks.onError&&this.callbacks.onError(e)}},{key:"onLoad",value:function(e){var t=e.id,i=e.customer,o=e.accessCode;Object.assign(this,{id:t,customer:i,accessCode:o}),this.authorizationUrl="".concat(an.checkoutUrl).concat(o),this.callbacks.onLoad&&this.callbacks.onLoad({id:t,customer:i,accessCode:o})}},{key:"onSuccess",value:function(e){this.isActive=!1,this.response=e,this.status=e.status,this.callbacks.onSuccess&&this.callbacks.onSuccess(e),this.deprecatedCallbacks.callback&&this.deprecatedCallbacks.callback(e)}},{key:"setStatus",value:function(e){this.status=e}},{key:"onCancel",value:function(){this.callbacks.onCancel&&this.callbacks.onCancel(),this.deprecatedCallbacks.onClose&&this.deprecatedCallbacks.onClose()}},{key:"cancel",value:function(){this.isActive=!1,this.onCancel()}},{key:"onBankTransferConfirmationPending",value:function(){this.cancel(),this.callbacks.onBankTransferConfirmationPending&&this.callbacks.onBankTransferConfirmationPending()}},{key:"logError",value:function(e){this.errors.push(e)}}]),n})(),op=console?console.warn||console.log:function(){};function Ig(n,e,t){op('"'.concat(n,'" has been deprecated, please use "').concat(e,'". ').concat(t))}var Re,KT=["preload","inlineTransaction"],QT=["container","styles","onElementsMount"];function pf(n,e){if(!n.length)return null;var t=n.filter((function(i){var o,l,u,d,m=!i.status||i.status==="abandoned",_=(o=i.parameters,l=e,u=Object.keys(o).sort().join("")===Object.keys(l).sort().join(""),d=Object.values(o).sort().join("")===Object.values(l).sort().join(""),u&&d);return m&&_}));return t.length?t[t.length-1]:null}function Sg(n){var e=n.checkoutIframe,t=n.urlParameters;e&&t&&e.contentWindow.postMessage({type:"inline:url",path:"newTransaction",params:t},"*")}var XT="trackCheckoutClosed",kg="trackPaymentError",YT="trackPaymentAttempt",JT="trackPaymentCompletion";function mf(n){throw op(n),new Error(n)}var bg,Ag,ey=(function(){function n(e){var t,i;U6(this,n),this.id=(function(){for(var o="",l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",u=0;u<5;u+=1)o+=l.charAt(Math.floor(Math.random()*l.length));return o})(),this.transactions=[],this.isOpen=!1,this.isLoaded=!1,this.isDeprecatedApi=e&&e.isDeprecatedApi,e&&e.isEmbed?this.isEmbed=!0:e&&e.isPaymentRequest&&(e.container&&lu(e.container)||mf("A container is required to mount the payment request button"),this.paymentRequestContainer=lu(e.container),this.paymentRequestTransaction=null),this.preCheckoutModal=null,this.backgroundIframe=(function(o){var l=hf("inline-background-".concat(o));l.style.cssText=`
  z-index: 999999999999999;
  background: transparent;
  background: rgba(0, 0, 0, 0.75);    
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
  visibility: hidden;
  display: none;
`,document.body.appendChild(l);var u=l.contentWindow.document;return u.open(),u.write(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Paystack Popup Loader</title>
    <style>
      .app-loader {
        margin: 200px 0;
        text-align: center;
        color: white;
      }      
      @keyframes app-loader__spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @-webkit-keyframes app-loader__spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      .app-loader__spinner {
        position: relative;
        display: inline-block;
      }
      .app-loader__spinner div {
        left: 95px;
        top: 35px;
        position: absolute;
        -webkit-animation: app-loader__spinner linear 1s infinite;
        animation: app-loader__spinner linear 1s infinite;
        background: white;
        width: 10px;
        height: 30px;
        border-radius: 40%;
        -webkit-transform-origin: 5px 65px;
        transform-origin: 5px 65px;
      }
      .app-loader__spinner div:nth-child(1) {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-animation-delay: -0.916666666666667s;
        animation-delay: -0.916666666666667s;
      }
      .app-loader__spinner div:nth-child(2) {
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
        -webkit-animation-delay: -0.833333333333333s;
        animation-delay: -0.833333333333333s;
      }
      .app-loader__spinner div:nth-child(3) {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
        -webkit-animation-delay: -0.75s;
        animation-delay: -0.75s;
      }
      .app-loader__spinner div:nth-child(4) {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-animation-delay: -0.666666666666667s;
        animation-delay: -0.666666666666667s;
      }
      .app-loader__spinner div:nth-child(5) {
        -webkit-transform: rotate(120deg);
        transform: rotate(120deg);
        -webkit-animation-delay: -0.583333333333333s;
        animation-delay: -0.583333333333333s;
      }
      .app-loader__spinner div:nth-child(6) {
        -webkit-transform: rotate(150deg);
        transform: rotate(150deg);
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
      }
      .app-loader__spinner div:nth-child(7) {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        -webkit-animation-delay: -0.416666666666667s;
        animation-delay: -0.416666666666667s;
      }
      .app-loader__spinner div:nth-child(8) {
        -webkit-transform: rotate(210deg);
        transform: rotate(210deg);
        -webkit-animation-delay: -0.333333333333333s;
        animation-delay: -0.333333333333333s;
      }
      .app-loader__spinner div:nth-child(9) {
        -webkit-transform: rotate(240deg);
        transform: rotate(240deg);
        -webkit-animation-delay: -0.25s;
        animation-delay: -0.25s;
      }
      .app-loader__spinner div:nth-child(10) {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
        -webkit-animation-delay: -0.166666666666667s;
        animation-delay: -0.166666666666667s;
      }
      .app-loader__spinner div:nth-child(11) {
        -webkit-transform: rotate(300deg);
        transform: rotate(300deg);
        -webkit-animation-delay: -0.083333333333333s;
        animation-delay: -0.083333333333333s;
      }
      .app-loader__spinner div:nth-child(12) {
        -webkit-transform: rotate(330deg);
        transform: rotate(330deg);
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }
      .app-loader__spinner {
        width: 40px;
        height: 40px;
        -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
        transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
      }
    </style>
  </head>

  <body>
    <div id="app-loader" class="app-loader">
      <div id="spinner" class="app-loader__spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div>
        </div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  </body>

  </html>
`),u.close(),l})(this.id),this.checkoutIframe=(t=this.id,(i=hf("inline-checkout-".concat(t))).src="".concat(an.checkoutUrl,"popup"),i.style.cssText=`
  z-index: 999999999999999;
  background: transparent;
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  visibility: hidden;
  display: none;
  height: 100%;
`,i.setAttribute("allowpaymentrequest","true"),i.setAttribute("allow","payment; clipboard-read; clipboard-write"),document.body.appendChild(i),i),this.registerListeners()}return z6(n,[{key:"registerListeners",value:function(){var e=this;window.addEventListener("message",(function(t){var i="".concat(t.origin,"/")===an.checkoutUrl,o=e.checkoutIframe&&e.checkoutIframe.contentWindow===t.source,l=e.isEmbed;i||o?e.respondToEvent(t):l&&e.respondToEmbedEvents(t)}))}},{key:"sendAnalyticsEventToCheckout",value:function(e,t){this.checkoutIframe.contentWindow.postMessage({type:"analytics",action:e,params:t},"*")}},{key:"checkout",value:function(e){this.activeTransaction()&&this.activeTransaction().cancel(),Re=this;var t=pf(this.transactions,e)||new ff(e);return new Promise((function(i,o){t.requestInline().then((function(l){var u=(function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=m.platform,C=m.userAgent,E=C===void 0?window&&window.navigator&&window.navigator.userAgent:C,I=_||J6,L=E&&!!E.match(/Version\/[\d.]+.*Safari/),O=I&&/(Mac)/i.test(I);return Z6()||O&&L})()&&Qf(l.channels),d=(function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=!!m.custom_filters&&m.custom_filters.recurring,C=m.plan_details,E=_||C,I=!!m.link_config&&m.link_config.enabled&&m.link_config.has_payment_instruments;return!E&&I})(l);d||u?(Re.preloadTransaction({inlineTransaction:t}),Re.preCheckoutModal=(function(m,_){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},E=document.querySelector("#pre-checkout-modal-".concat(m));if(E){if(Tg(E)&&df(E))return E;E.remove()}var I=document.createElement("div");I.classList.add("pre-checkout-modal"),I.id="pre-checkout-modal-".concat(m),I.style.zIndex=MT()+1;var L=document.createElement("div");L.classList.add("pre-checkout-modal__content"),I.appendChild(L);var O=_||{},q=O.merchant_logo,F=O.merchant_name,te=O.email,J=O.amount,re=O.currency,le=O.label,ye=new Intl.NumberFormat("en",{style:"currency",currency:re,currencyDisplay:"code",maximumFractionDigits:2,minimumFractionDigits:0}).format(J/100),de=document.createElement("div");de.classList.add("payment-info"),de.innerHTML='<img class="merchant-logo" src="'.concat(q,'" alt="').concat(F,` Logo">
    <div class="customer-info">
      <div class="customer-email">`).concat(le||te,`</div>
      <div class="transaction-amount">Pay <span class="amount">`).concat(ye,`</span></div>
    </div>`),L.appendChild(de),L.innerHTML+=NT;var k=document.createElement("div");k.classList.add("modal-wrapper"),C.canPayWithVault?FT(k,{canPayWithApplePay:C.canPayWithApplePay}):UT(k),k.innerHTML=k.innerHTML+H6+PT,L.appendChild(k);var S=document.createElement("style");return S.textContent=VT,document.body.appendChild(S),document.body.appendChild(I),I})(Re.id,l,{canPayWithVault:d,canPayWithApplePay:u}),u?(Re.paymentRequestContainer=df(Re.preCheckoutModal),Eg(Re.paymentRequestContainer,{channels:l.channels,styles:{applePay:{width:"100%",type:"pay",height:"42px",padding:"15px",borderRadius:"5px"}}},l.merchant_id).then((function(){Re.registerPaymentRequestEventListeners(),Re.openPreCheckoutModal()})).catch((function(){d?(df(Re.preCheckoutModal).remove(),Re.openPreCheckoutModal()):(Re.closePreCheckoutModal(),Re.animateCheckoutIn())})).finally((function(){i(t)}))):(Re.openPreCheckoutModal(),i(t))):(Re.newTransaction({inlineTransaction:t}),i(t))})).catch((function(l){t.onSetupError({status:!1,message:l.message}),o(l)}))}))}},{key:"openPreCheckoutModal",value:function(){var e;this.registerPreCheckoutModalEventListeners(),e=this.preCheckoutModal,new Promise((function(t,i){try{var o=e.querySelector(".pre-checkout-modal__content");e.classList.add("show"),setTimeout((function(){o.classList.add("show"),t(!0)}),50)}catch(l){i(l)}}))}},{key:"registerPreCheckoutModalEventListeners",value:function(){var e,t=this,i=!1,o=this.activeTransaction();document.addEventListener("touchstart",(function(m){m.preventDefault(),i||(i=!0,e=setTimeout((function(){i=!1}),125))}),!0),document.addEventListener("touchend",(function(m){m.target&&m.target.isSameNode(Re.preCheckoutModal)&&i&&(clearTimeout(e),Re.closePreCheckoutModal(),o&&o.cancel()),i=!1}),!0);var l=Tg(this.preCheckoutModal),u=this.preCheckoutModal.querySelector("#".concat(Q6));l.onclick=function(){t.closePreCheckoutModal(),t.animateCheckoutIn()},u&&(u.onclick=function(){t.closePreCheckoutModal(),t.animateCheckoutIn(),t.checkoutIframe.contentWindow.postMessage({type:"inline:pay-with-vault"},"*")});var d=(function(m){return m.querySelector("#apple-pay-close-button")})(this.preCheckoutModal);d.onclick=function(){t.sendAnalyticsEventToCheckout(XT),t.closePreCheckoutModalAndCancelTransaction()}}},{key:"closePreCheckoutModal",value:function(e){var t;this.preCheckoutModal&&(e==="failed"?(t=this.preCheckoutModal)&&(t.querySelector("#apple-pay-mark--light").innerHTML=`<svg width="50" height="30" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error-icon">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="error" fill-rule="nonzero">
            <path d="M9.14672,0.47855 L0.14829,15.47855 C-0.0403320234,15.7872042 -0.0475647902,16.1736607 0.129375884,16.4891566 C0.306316558,16.8046526 0.639843999,16.9999993 1.00157,17 L19.43546,17 C19.797186,16.9999993 20.1307134,16.8046526 20.3076541,16.4891566 C20.4845948,16.1736607 20.477362,15.7872042 20.28874,15.47855 L10.85328,0.47855 C10.671624,0.181297031 10.3483651,3.00996351e-06 10,3.00996351e-06 C9.6516349,3.00996351e-06 9.32837603,0.181297031 9.14672,0.47855 Z" id="Shape" fill="#FFAA22"></path>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="6" width="2" height="5"></rect>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="12" width="2" height="2"></rect>
        </g>
    </g>
</svg>`,t.querySelector("#apple-pay-description").textContent="An error occurred while paying with Apple Pay. Please try again or use another payment method."):((function(i){i&&(i.querySelector(".pre-checkout-modal__content").classList.remove("show"),i.classList.remove("show"))})(this.preCheckoutModal),this.preCheckoutModal.remove(),this.preCheckoutModal=null))}},{key:"closePreCheckoutModalAndCancelTransaction",value:function(){this.preCheckoutModal&&(this.cancelTransaction(),this.checkoutIframe&&this.checkoutIframe.contentWindow&&this.checkoutIframe.contentWindow.postMessage("close","*"),this.closePreCheckoutModal())}},{key:"newTransaction",value:function(e){var t,i=e.preload,o=e.inlineTransaction,l=Gf(e,KT),u=this.paymentRequestContainer&&wu(this.paymentRequestContainer);this.activeTransaction()&&!u&&this.activeTransaction().cancel();var d=pf(this.transactions,o?o.parameters:l),m=d||o||new ff(l);return d?(m.isActive=!0,t={accessCode:m.accessCode}):(t=m.accessCode?{accessCode:m.accessCode}:m.urlParameters,this.transactions.push(m)),this.isDeprecatedApi||this.open(t,i),m}},{key:"preloadTransaction",value:function(e){var t=this;return this.newTransaction(ct(ct({},e),{},{preload:!0})),function(){return t.animateCheckoutIn()}}},{key:"paymentRequest",value:function(e){var t=e.container,i=e.styles,o=e.onElementsMount,l=Gf(e,QT);return Re=this,new Promise((function(u,d){var m=document.querySelector("#".concat(e.loadPaystackCheckoutButton));if(W6()){Re.activeTransaction()&&Re.activeTransaction().cancel(),t&&lu(t)||mf("A container is required to mount the payment request button"),Re.paymentRequestContainer=lu(t);var _=pf(Re.transactions,l),C=_||new ff(l);C.requestInline().then((function(L){Eg(Re.paymentRequestContainer,{channels:L.channels,styles:i},L.merchant_id).then((function(O){o&&o(O)})).catch((function(){o&&o(null)})).finally((function(){if(_?C.isActive=!0:Re.transactions.push(C),Re.registerPaymentRequestEventListeners(),m){var O=Re.preloadTransaction({inlineTransaction:C});m.onclick=O}u(C)}))})).catch((function(L){C.onSetupError({status:!1,message:L.message}),d(L)}))}else{if(e&&e.loadPaystackCheckoutButton)if(m){var E=Re.preloadTransaction(l);m.onclick=E}else op("This device does not support any payment request wallet options. Please consult our documentation at https://developers.paystack.co/docs/paystack-inline to see how to load alternative payment options using 'loadPaystackCheckoutButton'");o&&o(null);var I=Re.activeTransaction();u(I)}}))}},{key:"registerApplePayEventListener",value:function(){var e=this;wu(this.paymentRequestContainer).onclick=function(){return e.startApplePay()}}},{key:"registerPaymentRequestEventListeners",value:function(){var e=this.activeTransaction();e&&Qf(e.response.channels)?this.registerApplePayEventListener():jT(this.paymentRequestContainer)}},{key:"startApplePay",value:function(){var e,t,i,o,l,u=this,d="apple pay",m=this.activeTransaction();if(m){var _={channel:"apple_pay",paymentMethod:d,currency:m.currency,amount:m.amount},C={channel:"apple_pay",currency:m.currency,amount:m.amount,timeSpent:m.getTimeSpent()};try{m.logAttempt(d),this.sendAnalyticsEventToCheckout(YT,_);var E=(e={currency:m.response.currency,amount:m.response.amount,merchantName:m.response.merchant_name,interval:m.response.plan_details&&m.response.plan_details.interval},t=e.currency,i=e.amount,o=e.merchantName,l=e.interval,ct({countryCode:"NG",currencyCode:t,merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["visa","masterCard"],requiredBillingContactFields:["postalAddress","name","phone","email"],total:{label:"".concat(o," - Paystack"),type:"final",amount:String(wg(i))}},typeof l=="string"&&l.trim()!==""&&{lineItems:[{label:LT(l),amount:String(wg(i))}]})),I=new window.ApplePaySession(an.applePayVersion,E);I.onvalidatemerchant=function(L){var O=(function(q){var F=q.transactionId,te=q.validationURL,J=q.merchantName,re=q.domainName,le=re===void 0?window&&window.location&&window.location.hostname:re,ye="".concat(an.paymentBaseUrl).concat(an.applePayValidateSessionPath),de=xg({transaction:F,sessionUrl:te,displayName:J,domainName:le});return fetch(ye,ct(ct({},Cg),{},{body:de})).then((function(k){return k.json()}))})({validationURL:L.validationURL,transactionId:m.id,merchantName:m.response.merchant_name});O.then((function(q){q.status!=="success"?m.onSetupError(q):I.completeMerchantValidation(q.data),m.logValidationResponse(q.message)})).catch((function(q){m.onSetupError(q)}))},I.oncancel=function(){Re.preCheckoutModal||m.onCancel()},I.onpaymentauthorized=function(L){var O=L.payment,q=(function(F){var te=F.transactionId,J=F.payment,re="".concat(an.paymentBaseUrl).concat(an.applePayChargePath),le=xg({transaction:te,paymentObject:JSON.stringify(J)});return fetch(re,ct(ct({},Cg),{},{body:le})).then((function(ye){return ye.json()}))})({transactionId:m.id,payment:O});q.then((function(F){m.logAPIResponse(F,d),F.status==="success"?(I.completePayment(I.STATUS_SUCCESS),m.onSuccess(F),u.sendAnalyticsEventToCheckout(JT,C)):(I.completePayment(I.STATUS_FAILURE),m.onSetupError(F),u.sendAnalyticsEventToCheckout(kg,{channel:"apple_pay",message:F&&F.message||"Transaction attempt failed"})),Re.closePreCheckoutModal(F.status)})).catch((function(F){I.completePayment(I.STATUS_FAILURE),m.onSetupError(F),u.sendAnalyticsEventToCheckout(kg,{channel:"apple_pay",message:F&&F.message||"Error occurred"}),Re.closePreCheckoutModal("failed")}))},I.begin()}catch(L){m.onSetupError(L)}}else mf("Could not initiate apple pay transaction")}},{key:"resumeTransaction",value:function(e){return this.newTransaction({accessCode:e})}},{key:"activeTransaction",value:function(){var e=this.transactions.filter((function(i){return i.isActive})),t=e.length?e[e.length-1]:null;return t}},{key:"cancelTransaction",value:function(e){var t=this.transactions.find((function(i){return i.id===e}))||this.activeTransaction();t&&(t.cancel(),this.close())}},{key:"respondToEvent",value:function(e){if(e){var t,i,o=this.activeTransaction();try{var l=e.data||e.message,u=l.event,d=l.data;if(u)switch(u){case"loaded:checkout":this.isLoaded=!0,o&&Sg({checkoutIframe:this.checkoutIframe,urlParameters:o.urlParameters});break;case"loaded:transaction":t=this.backgroundIframe,(i=t.contentWindow.document)&&(i.getElementById("app-loader").style.display="none"),o.onLoad(d);break;case"error":d.type==="setup"?o.onSetupError(d):o.logError(d);break;case"cancel":case"close":this.close();var m=d&&d.status;m&&o.setStatus(m),!(this.paymentRequestContainer&&wu(this.paymentRequestContainer)&&!this.preCheckoutModal)&&(o.isActive=!1),o.onCancel();break;case"transfer:pending":this.close();var _=d&&d.status;_&&o.setStatus(_),o.onBankTransferConfirmationPending();break;case"success":this.close(),o.onSuccess(d)}}catch{}}}},{key:"respondToEmbedEvents",value:function(e){var t,i,o=this.activeTransaction(),l=e.data||e.message;if(l&&(typeof l=="string"||l instanceof String)){var u={action:i=(t=l)&&typeof t=="string"?t.split(" ")[0]:null,data:i?t.split(" ").slice(2).join(" "):null};u&&u.action==="PaystackClose"&&u.data&&o.onSuccess(l),u.action==="PaystackTLSClose"&&o.cancel()}}},{key:"animateCheckoutIn",value:function(){var e,t=this;if(!this.isOpen){var i=this.checkoutIframe,o=this.backgroundIframe;(e={checkoutIframe:i,backgroundIframe:o},new Promise((function(l,u){e||u("No dom element provided");var d=e.checkoutIframe,m=e.backgroundIframe;d&&m||u("No dom element provided"),d.style.display="",d.style.visibility="visible",m.style.display="",m.style.visibility="visible",l()}))).then((function(){t.checkoutIframe.contentWindow.postMessage("render","*")})),this.isOpen=!0}}},{key:"open",value:function(e,t){e&&(Sg({checkoutIframe:this.checkoutIframe,urlParameters:e}),t||this.animateCheckoutIn())}},{key:"close",value:function(){var e=this;if(this.isOpen){var t,i=this.checkoutIframe,o=this.backgroundIframe;(t={checkoutIframe:i,backgroundIframe:o},new Promise((function(l,u){t||u("No dom element provided");var d=t.checkoutIframe,m=t.backgroundIframe;d&&m||u("No dom element provided"),m.style.opacity=0,d.style.display="none",d.style.visibility="hidden",setTimeout((function(){m.style.display="none",m.style.visibility="hidden",m.style.opacity=1,l()}),300)}))).then((function(){e.checkoutIframe.contentWindow.postMessage("close","*")})),this.isOpen=!1}}},{key:"isLoaded",value:function(){return this.isLoaded}}],[{key:"setup",value:function(e){var t=e&&e.container;Re||(Re=new n({isDeprecatedApi:!0,isEmbed:t})),Ig("PaystackPop.setup()","new PaystackPop()","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline");var i=Re.newTransaction(e,"deprecated"),o=i.urlParameters;if(t){var l="".concat(an.siteUrl,"/assets/payment/production/inline.html?").concat($6(o)),u=(function(d,m){var _=hf("embed-checkout-".concat(d));return _.style.cssText=`
  background: transparent;
  background: rgba(0,0,0,0);
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  nmargin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  display: none;
`,_.src=m,_.id=d,_.name=d,_})(Re.id,l);(function(d,m){var _=document.getElementById(d);_.innerHTML="",_.removeAttribute("style"),_.className="paystack-embed-container",_.style.position="relative",_.style.width="100%",_.appendChild(m)})(e.container,u),u.onload=function(){var d;u.contentWindow.postMessage("PaystackOpen ".concat(Re.id),"*"),d=u,new Promise((function(m,_){d||_("No dom element provided"),d.style.display="",d.style.visibility="visible",m()}))}}else i.openIframe=function(){Ig("openIframe","open","Please consult our documentation at https://developers.paystack.co/docs/paystack-inline"),Re.open(o)};return i}}]),n})();if(bg=vg().length>0,Ag=Mo()&&Mo().parentElement.tagName==="FORM",bg&&Ag){var gf,Ts=(function(){var n={},e=Mo();return vg().forEach((function(t){var i=e.getAttribute(t),o=t.split("data-")[1].replace(/-([a-z])/g,(function(l){return l[1].toUpperCase()}));n[o]=i})),(function(t){if(t.buttonId&&!document.getElementById(t.buttonId))throw new Error("Please make sure the buttonId is an element available in the DOM");var i=ct({},t);i.buttonText=t.buttonText||"Pay",i.buttonVariant="normal",i.buttonWordmarkVariant="normal";var o=["normal","light"];return t.buttonVariant&&o.indexOf(t.buttonVariant)>-1&&(i.buttonVariant=t.buttonVariant),t.buttonWordmarkVariant&&o.indexOf(t.buttonWordmarkVariant)>-1&&(i.buttonWordmarkVariant=t.buttonWordmarkVariant),i})(n)})(),Rg=Mo().parentElement;Re||(Re=new ey),(function(n){var e;if(n.id)(e=document.getElementById(n.id)).setAttribute("data-inline-id",n.id);else{var t=document.createElement("div");t.id="inline-button-".concat(n.inlineId),t.innerHTML=(function(i){var o,l,u={normal:`
  <svg id="inline-button-wordmark" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#011B33"/>
    </svg>`,light:H6};return`
    <style>
      #inline-button-`.concat(i.inlineId,` {
        position: relative;
        text-align: center;
        display: inline-block;
      }
      #inline-button-`).concat(i.inlineId,`__trigger {
        `).concat((o=i.variant||"normal",l={normal:`
    background: linear-gradient(180deg,#44b669 0,#40ad57);
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
    color: #ffffff;
  `,light:`
    background: white;
    text-shadow: none;
    color: #011b33;
  `},"".concat(`
    box-sizing: border-box;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    margin: 0 0 10px;
    text-align: center;
    -webkit-appearance: none;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    padding: 16px 24px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    transition: all .3s ease;
    border: none;
    min-width: 190px;
  `).concat(l[o])),`
      }
      #inline-button-`).concat(i.inlineId,`__trigger:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      }
      #inline-button-`).concat(i.inlineId,`__trigger:active {
        transform: translateY(3px);
      }
    </style>
    <button id="inline-button-`).concat(i.inlineId,'__trigger" data-inline-id="').concat(i.inlineId,'">').concat(i.text||"Pay"," ").concat(i.currency||"NGN"," ").concat(i.amount,`</button>
    <div id="inline-button-`).concat(i.inlineId,`__wordmark">
      `).concat(u[i.wordmarkVariant||"normal"],`
    </div>
  `)})(n),n.parent.parentNode.insertBefore(t,n.parent.nextSibling),e=bT(t.getElementsByTagName("button"),1)[0]}return e})({inlineId:Re.id,amount:Ts.amount/100,currency:Ts.currency,id:Ts.buttonId,text:Ts.buttonText,variant:Ts.buttonVariant,wordmarkVariant:Ts.buttonWordmarkVariant,parent:Mo()}).addEventListener("click",(function(n){n.preventDefault(),gf?Re.resumeTransaction(gf.accessCode):gf=Re.newTransaction(ct(ct({},Ts),{},{onSuccess:function(e){var t,i,o,l,u,d;t={type:"hidden",name:"reference",value:e.reference,parent:Rg},i=t.type,o=t.value,l=t.name,u=t.parent,(d=document.createElement("input")).type=i,d.value=o,d.name=l,u.appendChild(d),Rg.submit()}}))}))}var ZT=function(n){var e=new ey;e.newTransaction(n)};function ty(n){function e(t){var i=t.config,o=t.onSuccess,l=t.onClose,u=st(st({},n),i),d=u.publicKey,m=u.firstname,_=u.lastname,C=u.phone,E=u.email,I=u.amount,L=u.reference,O=u.metadata,q=u.currency,F=q===void 0?"NGN":q,te=u.channels,J=u.label,re=u.plan,le=u.quantity,ye=u.subaccount,de=u.transaction_charge,k=u.bearer,S=u.split,R=u.split_code,D=u.connect_account,N=u.connect_split,M=u.onBankTransferConfirmationPending,A=st(st(st(st(st(st(st(st(st(st(st(st(st(st(st(st(st(st({onSuccess:o||function(){return null},onCancel:l||function(){return null},key:d,email:E,amount:I},m&&{firstname:m}),_&&{lastname:_}),C&&{phone:C}),L&&{ref:L}),F&&{currency:F}),te&&{channels:te}),O&&{metadata:O}),J&&{label:J}),M&&{onBankTransferConfirmationPending:M}),ye&&{subaccount:ye}),de&&{transaction_charge:de}),k&&{bearer:k}),S&&{split:S}),R&&{split_code:R}),re&&{plan:re}),le&&{quantity:le}),N&&{connect_split:N}),D&&{connect_account:D});ZT(A)}return e}var ny=ge.createContext({config:{},initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),eI=function(n){var e=n.children,t=n.onSuccess,i=n.onClose,o=F6(n,["children","onSuccess","onClose"]),l=ty(o);return Cu.createElement(ny.Provider,{value:{config:o,initializePayment:l,onSuccess:t,onClose:i}},e)},tI=function(n){var e=n.children,t=n.ref,i=ge.useContext(ny),o=i.config,l=i.initializePayment,u=i.onSuccess,d=i.onClose,m=function(){return l({config:o,onSuccess:u,onClose:d})};return e({initializePayment:m,ref:t})};ge.forwardRef(function(n,e){var t=n.children,i=n.onSuccess,o=n.onClose,l=F6(n,["children","onSuccess","onClose"]),u=i||function(){return null},d=o||function(){return null};return Cu.createElement(eI,st({},l,{onSuccess:u,onClose:d}),Cu.createElement(tI,{ref:e},t))});const nI=n=>{const[e,t]=ge.useState(null),i=ge.useRef(null),o=ge.useRef(null);return ge.useEffect(()=>(i.current=new IntersectionObserver(([l])=>{l.isIntersecting&&(t(l),o.current&&i.current.unobserve(o.current))},n),o.current&&i.current.observe(o.current),()=>{i.current&&o.current&&i.current.unobserve(o.current)}),[n]),[o,e]},$t=({children:n,animationClass:e,delay:t=0})=>{const[i,o]=nI({threshold:.1}),l=!!o;return p.jsx("div",{ref:i,className:`${l?e:"opacity-0"}`,style:{transition:`opacity 0.7s ease-out ${t}ms, transform 0.7s ease-out ${t}ms`},children:n})},rI=()=>{const[n,e]=ge.useState({jours:0,heures:0,minutes:0,secondes:0}),[t,i]=ge.useState(!1);if(ge.useEffect(()=>{const l=()=>{const d=new Date("2026-05-21T00:00:00Z").getTime(),m=new Date().getTime(),_=d-m;_>0?(e({jours:Math.floor(_/864e5),heures:Math.floor(_/36e5%24),minutes:Math.floor(_/1e3/60%60),secondes:Math.floor(_/1e3%60)}),i(!1)):i(!0)};l();const u=setInterval(l,1e3);return()=>clearInterval(u)},[]),t)return p.jsx("span",{className:"text-white bg-accent px-6 py-3 rounded-lg text-xl font-semibold shadow-lg font-sans",children:"L'événement a commencé !"});const o=({value:l,label:u})=>p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("span",{className:"text-6xl lg:text-7xl font-bold tracking-tighter font-sans",children:String(l).padStart(2,"0")}),p.jsx("span",{className:"text-sm uppercase opacity-75 tracking-widest font-sans",children:u})]});return p.jsxs("div",{className:"text-white flex items-center justify-center space-x-6 md:space-x-10",children:[p.jsx(o,{value:n.jours,label:"Jours"}),p.jsx(o,{value:n.heures,label:"Heures"}),p.jsx(o,{value:n.minutes,label:"Minutes"}),p.jsx(o,{value:n.secondes,label:"Secondes"})]})},iI=[{date:"1 Novembre 2025",description:"Lancement de l'appel à communications",icon:"📢",status:"upcoming"},{date:"28 Février 2026",description:"Soumission des articles",icon:"📄",status:"upcoming"},{date:"30 Mars 2026",description:"Notification aux acteurs",icon:"📧",status:"upcoming"},{date:"15 Avril 2026",description:"Soumission des versions finales",icon:"✅",status:"upcoming"},{date:"21–23 Mai 2026",description:"Colloque (ESATIC – Abidjan)",icon:"🎉",isHighlighted:!0,status:"upcoming"}],sI=[{title:"Intelligence Artificielle, Big Data et Machine Learning"},{title:"Cybersécurité et Résilience des Réseaux"},{title:"Internet des Objets (IoT) et Systèmes Embarqués"},{title:"Cloud Computing et Infrastructures Numériques"},{title:"Transformation digitale et gouvernance numérique"},{title:"Technologies éducatives et pédagogie numérique"}],oI=()=>{const n={authorName:"",authorEmail:"",affiliation:"",articleTitle:"",themeSelect:""},[e,t]=ge.useState(n),[i,o]=ge.useState(null),[l,u]=ge.useState(""),[d,m]=ge.useState(!1),_={name:"",email:"",participantType:"chercheur"},[C,E]=ge.useState(_),[I,L]=ge.useState(""),[O,q]=ge.useState(!1),[F,te]=ge.useState(null),J=me=>{const{id:Ce,value:ee}=me.target;t(ce=>({...ce,[Ce]:ee}))},re=me=>{const{id:Ce,value:ee}=me.target;E(ce=>({...ce,[Ce]:ee}))},le=me=>{me.target.files&&o(me.target.files[0])},ye=async me=>{if(me.preventDefault(),u(""),!e.authorName||!e.authorEmail||!e.articleTitle||!i){u("Erreur : Veuillez remplir tous les champs obligatoires et sélectionner un fichier.");return}m(!0);try{const Ce=Mu(qu,`submissions/${Date.now()}_${i.name}`);await K1(Ce,i);const ee=await Q1(Ce);await El(Hi(Nn,"submissions"),{...e,fileUrl:ee,fileName:i.name,submittedAt:Mi()}),u("Succès : Votre article a été soumis avec succès !"),t(n),o(null);const ce=document.getElementById("fileUpload");ce&&(ce.value="")}catch(Ce){console.error("Error submitting article: ",Ce),u("Erreur : Impossible de soumettre l'article. Veuillez réessayer.")}finally{m(!1)}},de={chercheur:{amount:15e3,currency:"XOF",equivalent:"~98 000 XOF"},etudiant:{amount:7500,currency:"XOF",equivalent:"~49 000 XOF"}},k={reference:`costic_${Date.now()}_${C.email}`,email:C.email,amount:C.participantType?de[C.participantType].amount:15e3,currency:"XOF",publicKey:"pk_test_5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f",metadata:{name:C.name,participantType:C.participantType,registrationDocId:F}},S=ty(k),R=async me=>{console.log("Paiement réussi:",me);try{F&&await zf(hl(Nn,"registrations",F),{paymentStatus:"completed",paymentReference:me.reference,paymentDate:Mi()}),L("Succès : Votre paiement a été effectué avec succès ! Vous recevrez un email de confirmation."),E(_),te(null)}catch(Ce){console.error("Erreur lors de la mise à jour du statut de paiement:",Ce),L("Paiement réussi mais erreur lors de la mise à jour. Contactez-nous avec la référence: "+me.reference)}},D=()=>{console.log("Paiement annulé"),L("Paiement annulé. Vous pouvez réessayer quand vous le souhaitez.")},N=async me=>{if(me.preventDefault(),!C.name||!C.email){L("Erreur : Veuillez renseigner votre nom et votre e-mail.");return}L(""),q(!0);try{const Ce=await El(Hi(Nn,"registrations"),{...C,paymentStatus:"pending",registeredAt:Mi(),amount:de[C.participantType].amount,currency:"XOF"});te(Ce.id),S(R,D)}catch(Ce){console.error("Error saving registration: ",Ce),L("Erreur : Impossible d'enregistrer l'inscription. Veuillez réessayer.")}finally{q(!1)}},M="w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body",A="block text-neutral-700 font-semibold mb-2 font-sans",He=ge.useRef(null),dt=ge.useRef(null);return ge.useEffect(()=>{const me=He.current,Ce=dt.current;if(!me||!Ce)return;const ee=()=>{let ie=0;Ce.childNodes.forEach(Ie=>{Ie instanceof HTMLElement&&(ie+=Ie.offsetWidth+48)});const j=-ie,ke=Math.max(30,Math.round(Math.abs(j)*.04));Ce.style.setProperty("--scroll-end",`${j}px`),Ce.style.setProperty("--scroll-duration",`${ke}s`)};ee();const ce=new ResizeObserver(()=>ee());return ce.observe(me),()=>ce.disconnect()},[]),p.jsxs("div",{className:"bg-neutral-100 font-body",children:[p.jsx(w5,{}),p.jsx(IT,{}),p.jsxs("main",{children:[p.jsxs("section",{id:"accueil",className:"relative text-white pt-32 pb-24 text-center overflow-hidden flex flex-col items-center justify-center min-h-screen",children:[p.jsx("div",{className:"absolute inset-0 hero-bg"}),p.jsx("div",{className:"absolute inset-0 bg-primary/40"}),p.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40",style:{backgroundImage:"url('/img/arr.png')"}}),p.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[p.jsx("div",{className:"mb-8 animate-fade-in-up overflow-hidden",style:{animationDelay:"0.1s"},children:p.jsx("div",{className:"mx-auto w-[1200px] overflow-hidden",ref:He,children:p.jsx("div",{className:"flex animate-scroll-distance space-x-12 whitespace-nowrap",style:{"--scroll-end":"-100%","--scroll-duration":"60s"},ref:dt,children:kT.map((me,Ce)=>p.jsxs("div",{className:"flex-shrink-0 group",children:[p.jsx("div",{className:"w-20 h-20 bg-pure-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100",children:p.jsx("img",{src:me.logo,alt:`Logo ${me.name}`,className:"max-w-16 max-h-16 object-contain transition-all duration-300 group-hover:scale-110",onError:ee=>{const ce=ee.target;ce.style.display="none";const ie=ce.parentElement;ie&&(ie.innerHTML=`
                    <div class="w-full h-full flex items-center justify-center">
                      <div class="text-gray-600 font-bold text-sm text-center leading-tight">
                        ${me.name.split(" ").map(j=>j.charAt(0)).join("")}
                      </div>
                    </div>
                  `)}})}),p.jsxs("div",{className:"mt-2 text-center",children:[p.jsx("span",{className:"text-xs text-white/90 font-medium leading-tight block max-w-20",children:me.name}),p.jsx("span",{className:"text-xs text-white/70 block mt-1",children:me.pays})]})]},`${me.name}-${Ce}`))})})}),p.jsx("h1",{className:"text-6xl md:text-8xl font-black leading-tight mb-4 animate-fade-in-up relative",style:{animationDelay:"0.7s"},children:p.jsxs("div",{className:"relative inline-block",children:[p.jsx("div",{className:"relative text-white",style:{fontFamily:"Arial Black, sans-serif",letterSpacing:"2px",transform:"perspective(500px) rotateX(5deg)",textShadow:"0 0 0px transparent"},children:"CoSTIC 2026"}),p.jsx("div",{className:"absolute inset-0 text-white/60 transform translate-x-2 translate-y-2",style:{fontFamily:"Arial Black, sans-serif",letterSpacing:"2px",transform:"perspective(500px) rotateX(5deg) translateX(2px) translateY(2px)"},children:"CoSTIC 2026"}),p.jsx("div",{className:"absolute inset-0 text-white/40 transform translate-x-4 translate-y-4",style:{fontFamily:"Arial Black, sans-serif",letterSpacing:"2px",transform:"perspective(500px) rotateX(5deg) translateX(4px) translateY(4px)"},children:"CoSTIC 2026"}),p.jsx("div",{className:"absolute inset-0 text-white/20 transform translate-x-6 translate-y-6",style:{fontFamily:"Arial Black, sans-serif",letterSpacing:"2px",transform:"perspective(500px) rotateX(5deg) translateX(6px) translateY(6px)"},children:"CoSTIC 2026"})]})}),p.jsx("p",{className:"text-xl md:text-2xl text-neutral-200 mb-6 animate-fade-in-up",style:{animationDelay:"0.8s"},children:"Colloque Scientifique sur les Technologies de l'Information et de la Communication"}),p.jsxs("div",{className:"flex justify-center items-center space-x-6 text-neutral-100 mb-8 animate-fade-in-up",style:{animationDelay:"0.9s"},children:[p.jsxs("span",{className:"flex items-center",children:[p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),"Mai 2026"]}),p.jsxs("span",{className:"flex items-center",children:[p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Abidjan, Côte d'Ivoire"]})]}),p.jsx("div",{className:"mb-12 animate-fade-in-up",style:{animationDelay:"1.0s"},children:p.jsxs("div",{className:"relative inline-block",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 rounded-full blur-xl opacity-40"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-400/30 rounded-full blur-lg opacity-60"}),p.jsx("div",{className:"relative",children:p.jsxs("p",{className:"text-2xl md:text-3xl font-bold tracking-wider",children:[p.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-white to-blue-500 bg-clip-text text-transparent",children:"Organisé par l'"}),p.jsxs("span",{className:"text-white font-extrabold relative",children:["ESATIC",p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-20 blur-sm"})]})]})}),p.jsx("div",{className:"absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"})]})}),p.jsx("div",{className:"mb-12 animate-fade-in-up",style:{animationDelay:"0.7s"},children:p.jsx(rI,{})}),p.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up",style:{animationDelay:"0.9s"},children:[p.jsx("a",{href:"#soumission",className:"bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-accent/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans w-full sm:w-auto",children:"Soumettre un article"}),p.jsx("a",{href:"#inscription",className:"bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-neutral-200 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans w-full sm:w-auto",children:"S'inscrire maintenant"}),p.jsx("a",{href:"#partenariat",className:"bg-secondary text-white font-bold py-4 px-10 rounded-full hover:bg-secondary/90 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-sans w-full sm:w-auto",children:"Devenir Partenaire"})]})]})]}),p.jsx("div",{id:"a-propos",children:p.jsxs(Hn,{title:"À Propos du CoSTIC 2026",className:"bg-neutral-50",children:[p.jsx($t,{animationClass:"animate-slide-in-bottom",children:p.jsx("p",{className:"text-center text-lg text-neutral-600 mb-12 max-w-3xl mx-auto",children:"Le Colloque Scientifique sur les TIC (CoSTIC) est une plateforme d'excellence visant à catalyser l'innovation numérique et à renforcer la recherche scientifique en Afrique."})}),p.jsx("div",{className:"max-w-6xl mx-auto grid md:grid-cols-3 gap-8",children:[{title:"Notre Mission",description:"Valoriser les travaux des chercheurs, stimuler l'innovation et favoriser les échanges entre le monde académique et le secteur privé pour répondre aux défis du continent.",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}),borderColor:"border-secondary"},{title:"Notre Vision",description:"Devenir le carrefour de référence pour la recherche en TIC en Afrique, où les idées novatrices se transforment en solutions concrètes pour un développement durable.",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M12 5l7 7-7 7"})}),borderColor:"border-primary"},{title:"Nos Valeurs",description:"Nous promouvons l'Excellence scientifique, le Partage des connaissances, l'Innovation technologique et la Collaboration intersectorielle.",icon:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),borderColor:"border-secondary"}].map((me,Ce)=>p.jsx($t,{animationClass:"animate-slide-in-bottom",delay:Ce*150,children:p.jsxs("div",{className:`bg-white h-full p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${me.borderColor} text-center`,children:[p.jsx("div",{className:"inline-block bg-secondary/10 text-primary p-4 rounded-full mb-4",children:me.icon}),p.jsx("h3",{className:"text-2xl font-bold text-primary mb-3 font-sans",children:me.title}),p.jsx("p",{className:"text-neutral-600 leading-relaxed",children:me.description})]})},me.title))})]})}),p.jsx(Hn,{title:"Contexte et Justification",children:p.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center",children:[p.jsxs($t,{animationClass:"animate-slide-in-left",children:[p.jsx("h3",{className:"text-3xl font-bold text-primary mb-4 font-sans",children:"Une Plateforme pour l'Avenir Numérique Africain"}),p.jsx("p",{className:"text-lg text-neutral-700 leading-relaxed mb-6",children:"Le numérique occupe une place centrale dans la transformation économique et sociale en Afrique. La Côte d'Ivoire, à travers l'ESATIC et ses partenaires, souhaite renforcer la production scientifique et la valorisation des résultats de recherche dans le domaine des TIC."}),p.jsx("blockquote",{className:"border-l-4 border-secondary pl-6 italic bg-neutral-100 p-4 rounded-r-lg",children:p.jsx("p",{className:"text-lg text-neutral-700 leading-relaxed",children:"C'est dans cette dynamique qu'est organisé le Colloque Scientifique sur les TIC (CoSTIC 2026), un carrefour d'innovation qui se tiendra en mai 2026 à Abidjan."})})]}),p.jsx($t,{animationClass:"animate-slide-in-right",delay:150,children:p.jsx("div",{className:"hidden md:flex justify-center items-center",children:p.jsxs("div",{className:"relative w-full max-w-sm h-80",children:[p.jsx("div",{className:"absolute top-0 -left-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"}),p.jsx("div",{className:"absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob",style:{animationDelay:"2s"}}),p.jsx("div",{className:"absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob",style:{animationDelay:"4s"}}),p.jsx("div",{className:"relative flex justify-center items-center h-full",children:p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-48 h-48 text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:1,children:[p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9m18 9a9 9 0 01-18 0m18 0A9 9 0 003 12m18 0V3"}),p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",fill:"#0D47A1",stroke:"none"}),p.jsx("circle",{cx:"3.5",cy:"12",r:"1.5",fill:"#1976D2"}),p.jsx("circle",{cx:"20.5",cy:"12",r:"1.5",fill:"#1976D2"}),p.jsx("circle",{cx:"12",cy:"3.5",r:"1.5",fill:"#1976D2"}),p.jsx("circle",{cx:"12",cy:"20.5",r:"1.5",fill:"#1976D2"})]})})]})})})]})}),p.jsx(Hn,{title:"Calendrier prévisionnel",className:"bg-neutral-50",children:p.jsx(_T,{events:iI})}),p.jsx(Hn,{title:"Lieu et Date",className:"bg-neutral-50",children:p.jsxs("div",{className:"max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center",children:[p.jsx($t,{animationClass:"animate-slide-in-left",children:p.jsxs("div",{className:"text-left",children:[p.jsxs("div",{className:"flex items-center mb-6",children:[p.jsx("div",{className:"bg-secondary/10 text-primary rounded-full p-3 mr-4",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-bold text-primary font-sans",children:"Date"}),p.jsx("p",{className:"text-lg text-neutral-600",children:"Mai 2026 (ESATIC – Abidjan)"})]})]}),p.jsxs("div",{className:"flex items-center",children:[p.jsx("div",{className:"bg-secondary/10 text-primary rounded-full p-3 mr-4",children:p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:[p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-bold text-primary font-sans",children:"Lieu"}),p.jsx("p",{className:"text-lg text-neutral-600",children:"ESATIC, Abidjan, Côte d'Ivoire"})]})]})]})}),p.jsx($t,{animationClass:"animate-slide-in-right",delay:150,children:p.jsx("div",{className:"rounded-xl overflow-hidden shadow-xl h-72 border-4 border-white group",children:p.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.19532889966!2d-3.999518685686034!3d5.388839936551699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1934399f36f47%3A0x774e9892f39234b3!2sESATIC!5e0!3m2!1sfr!2sci!4v1655823521345!5m2!1sfr!2sci",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Carte de l'ESATIC",className:"transition-transform duration-500 group-hover:scale-105"})})})]})}),p.jsx(Hn,{title:"Objectifs du Colloque",children:p.jsxs("div",{className:"max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start",children:[p.jsx($t,{animationClass:"animate-slide-in-left",children:p.jsxs("div",{className:"bg-primary text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 -rotate-1",children:[p.jsx("h3",{className:"text-3xl font-bold mb-4 font-sans",children:"Objectif Général"}),p.jsx("p",{className:"text-neutral-200 text-lg leading-relaxed",children:"Mettre en place une plateforme scientifique et technologique d’échanges sur les TIC, permettant de valoriser les travaux des chercheurs et de stimuler l’innovation."})]})}),p.jsx($t,{animationClass:"animate-slide-in-right",delay:150,children:p.jsxs("div",{children:[p.jsx("h3",{className:"text-3xl font-bold mb-6 text-primary font-sans",children:"Objectifs Spécifiques"}),p.jsx("ul",{className:"space-y-4",children:["Diffuser les résultats récents de la recherche dans le domaine des TIC.","Favoriser la collaboration interuniversitaire et avec le secteur privé.","Mettre en avant les jeunes chercheurs (Masters, Doctorants).","Promouvoir les TIC comme leviers du développement durable."].map((me,Ce)=>p.jsx($t,{animationClass:"animate-slide-in-right",delay:150+Ce*100,children:p.jsxs("li",{className:"flex items-start",children:[p.jsx("svg",{className:"w-7 h-7 text-accent mr-4 flex-shrink-0 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),p.jsx("span",{className:"text-neutral-700 text-lg",children:me})]})},me))})]})})]})}),p.jsx("div",{id:"soumission",children:p.jsx(Hn,{title:"Appel à Communications",className:"bg-neutral-50",children:p.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start",children:[p.jsx($t,{animationClass:"animate-slide-in-left",children:p.jsxs("div",{className:"bg-neutral-100 p-8 rounded-xl border border-neutral-200 h-full",children:[p.jsx("h3",{className:"text-3xl font-bold text-primary mb-4 font-sans",children:"Thème Général"}),p.jsx("p",{className:"text-xl text-neutral-600 italic mb-8",children:"« Innovations numériques et transformation digitale pour un développement durable en Afrique »"}),p.jsx("h3",{className:"text-2xl font-bold text-primary mb-4 font-sans",children:"Modalités de Soumission"}),p.jsx("ul",{className:"space-y-4 mb-8",children:[{title:"Format",desc:"Résumé étendu de 5 pages maximum.",icon:p.jsx("svg",{className:"w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"})})},{title:"Langues",desc:"Français ou Anglais.",icon:p.jsx("svg",{className:"w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5h12M9 3v2m4-2v2M3 17h16M21 17v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2m18 0H3"})})},{title:"Publication",desc:"Actes disponibles en ligne et sélection pour une revue internationale.",icon:p.jsxs("svg",{className:"w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),p.jsx("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z"}),p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20"})]})}].map(me=>p.jsxs("li",{className:"flex items-start",children:[me.icon,p.jsxs("div",{children:[p.jsx("h4",{className:"font-bold text-neutral-800 font-sans",children:me.title}),p.jsx("p",{className:"text-neutral-600",children:me.desc})]})]},me.title))}),p.jsxs("div",{className:"mt-8 p-4 bg-white rounded-lg border border-neutral-200",children:[p.jsx("h4",{className:"font-bold text-neutral-800 font-sans mb-3",children:"Modèles de soumission"}),p.jsx("p",{className:"text-neutral-600 text-sm mb-4",children:"Téléchargez le modèle pour rédiger votre résumé à soumettre."}),p.jsxs("div",{className:"flex flex-wrap gap-3",children:[p.jsxs("a",{href:"/templates/exemple_CoSTIC2026.doc",download:!0,className:"inline-flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm",children:[p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("path",{d:"M19 2H8a2 2 0 0 0-2 2v3h2V4h11v16H8v-3H6v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"}),p.jsx("path",{d:"M13 12H4.83l2.58-2.59L6 8l-5 5 5 5 1.41-1.41L4.83 14H13v-2Z"})]}),"Modèle Word (.docx)"]}),p.jsxs("a",{href:"/templates/CoSTIC_2026_latex_template.zip",download:!0,className:"inline-flex items-center gap-2 bg-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary/90 transition-colors text-sm",children:[p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v12h2V4h8V2Zm4 4h-8a2 2 0 0 0-2 2v12h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 12H8V8h10v10Z"})}),"Modèle LaTeX (.tex)"]})]})]}),p.jsx("a",{href:"http://costic2026.esatic.ci",target:"_blank",rel:"noopener noreferrer",className:"w-full inline-block text-center bg-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans",children:"Soumettre via la Plateforme Officielle"})]})}),p.jsx($t,{animationClass:"animate-slide-in-right",delay:150,children:p.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-2xl",children:[p.jsx("h3",{className:"text-3xl font-bold text-primary mb-6 font-sans",children:"Soumission d'Article"}),p.jsx("form",{onSubmit:ye,children:p.jsxs("div",{className:"space-y-5",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"authorName",className:A,children:"Nom de l'auteur principal*"}),p.jsx("input",{type:"text",id:"authorName",value:e.authorName,onChange:J,className:M,required:!0,disabled:d})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"authorEmail",className:A,children:"E-mail*"}),p.jsx("input",{type:"email",id:"authorEmail",value:e.authorEmail,onChange:J,className:M,required:!0,disabled:d})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"affiliation",className:A,children:"Affiliation"}),p.jsx("input",{type:"text",id:"affiliation",value:e.affiliation,onChange:J,className:M,disabled:d})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"articleTitle",className:A,children:"Titre de l'article*"}),p.jsx("input",{type:"text",id:"articleTitle",value:e.articleTitle,onChange:J,className:M,required:!0,disabled:d})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"themeSelect",className:A,children:"Thématique"}),p.jsxs("select",{id:"themeSelect",value:e.themeSelect,onChange:J,className:M,disabled:d,children:[p.jsx("option",{value:"",children:"Choisissez une thématique..."}),sI.map(me=>p.jsx("option",{value:me.title,children:me.title},me.title))]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"fileUpload",className:A,children:"Fichier (PDF, 5 pages max)*"}),p.jsx("input",{type:"file",id:"fileUpload",onChange:le,accept:".pdf",className:"w-full text-sm text-neutral-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary/10 file:text-primary hover:file:bg-secondary/20 cursor-pointer font-body",required:!0,disabled:d})]}),p.jsx("button",{type:"submit",disabled:d,className:"w-full bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary/90 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed flex justify-center items-center",children:d?p.jsxs(p.Fragment,{children:[p.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Soumission en cours..."]}):"Soumettre l'article"}),l&&p.jsx("p",{className:`mt-4 text-center text-sm ${l.startsWith("Erreur")?"text-red-600":"text-green-600"}`,children:l})]})})]})})]})})}),p.jsx("div",{id:"inscription",children:p.jsx(Hn,{title:"Inscription & Paiement",children:p.jsx($t,{animationClass:"animate-slide-in-bottom",children:p.jsxs("div",{className:"max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-2xl border border-neutral-200",children:[p.jsx("p",{className:"text-center text-lg text-neutral-600 mb-10 max-w-2xl mx-auto",children:"Finalisez votre participation en remplissant le formulaire ci-dessous. Les frais d'inscription donnent accès à toutes les sessions, aux pauses-café, au déjeuner et aux actes du colloque."}),p.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[p.jsxs("form",{onSubmit:N,className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"name",className:A,children:"Nom complet*"}),p.jsx("input",{type:"text",id:"name",value:C.name,onChange:re,className:M,required:!0,disabled:O})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:A,children:"E-mail*"}),p.jsx("input",{type:"email",id:"email",value:C.email,onChange:re,className:M,required:!0,disabled:O})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"participantType",className:A,children:"Type de participant*"}),p.jsxs("select",{id:"participantType",value:C.participantType,onChange:re,className:M,disabled:O,children:[p.jsx("option",{value:"chercheur",children:"Chercheur / Professionnel"}),p.jsx("option",{value:"etudiant",children:"Étudiant"})]})]})]}),p.jsxs("div",{className:"bg-neutral-100 p-8 rounded-xl border border-neutral-200",children:[p.jsx("h3",{className:"text-2xl font-bold text-primary mb-6 border-b border-neutral-200 pb-4 font-sans",children:"Résumé de l'inscription"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex justify-between items-center text-lg",children:[p.jsx("span",{className:"text-neutral-600",children:"Catégorie :"}),p.jsx("span",{className:"font-bold text-primary font-sans",children:C.participantType==="etudiant"?"Étudiant":"Chercheur"})]}),p.jsxs("div",{className:"flex justify-between items-center text-3xl pt-4",children:[p.jsx("span",{className:"text-neutral-600 font-sans",children:"Total :"}),p.jsxs("div",{className:"text-right",children:[p.jsx("span",{className:"font-extrabold text-primary font-sans",children:C.participantType==="etudiant"?"75€":"150€"}),p.jsx("p",{className:"text-sm text-neutral-500 font-normal",children:C.participantType==="etudiant"?"(~49 000 XOF)":"(~98 000 XOF)"})]})]})]}),p.jsxs("div",{className:"mt-8",children:[p.jsx("button",{onClick:N,disabled:O,className:"w-full bg-accent text-white font-bold py-4 px-10 rounded-lg hover:bg-accent/90 transition-all duration-300 text-lg inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-sans disabled:bg-neutral-400 disabled:cursor-not-allowed",children:O?p.jsxs(p.Fragment,{children:[p.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Enregistrement..."]}):p.jsxs(p.Fragment,{children:[p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"})}),"Procéder au paiement"]})}),I&&p.jsx("p",{className:`mt-4 text-center text-sm ${I.startsWith("Erreur")?"text-red-600":"text-green-600"}`,children:I}),p.jsx("p",{className:"text-xs text-neutral-500 text-center mt-4",children:"Paiement sécurisé via notre partenaire Paystack."})]})]})]})]})})})}),p.jsx("div",{id:"comite-scientifique",children:p.jsxs(Hn,{title:"Participants Ciblés",className:"bg-neutral-50",children:[p.jsx($t,{animationClass:"animate-slide-in-bottom",children:p.jsxs("div",{className:"mb-8 text-center",children:[p.jsx("h3",{className:"text-2xl font-bold text-primary mb-4 font-sans",children:"Comité Scientifique"}),p.jsx("p",{className:"text-lg text-neutral-600 max-w-3xl mx-auto",children:"Notre comité scientifique est composé d'experts reconnus dans le domaine des TIC provenant des plus grandes universités d'Afrique de l'Ouest et du Canada."})]})}),p.jsx(CT,{}),p.jsx($t,{animationClass:"animate-slide-in-bottom",delay:200,children:p.jsxs("div",{className:"mt-16",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h3",{className:"text-2xl font-bold text-primary mb-4 font-sans",children:"Partenariats et Sponsoring"}),p.jsx("p",{className:"text-lg text-neutral-600 max-w-3xl mx-auto",children:"Nous sommes fiers de compter sur le soutien de partenaires institutionnels et du secteur privé pour faire de ce colloque un événement d'excellence."})]}),p.jsx(ET,{}),p.jsxs("div",{className:"mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto",children:[p.jsxs("div",{className:"text-center",children:[p.jsx("h5",{className:"font-bold text-neutral-800 mb-2 font-sans",children:"Soutien Institutionnel"}),p.jsx("p",{className:"text-sm text-neutral-600",children:"Accompagnement dans l'organisation et la promotion du colloque"})]}),p.jsxs("div",{className:"text-center",children:[p.jsx("h5",{className:"font-bold text-neutral-800 mb-2 font-sans",children:"Innovation Technologique"}),p.jsx("p",{className:"text-sm text-neutral-600",children:"Expertise technique et solutions technologiques pour l'événement"})]}),p.jsxs("div",{className:"text-center",children:[p.jsx("h5",{className:"font-bold text-neutral-800 mb-2 font-sans",children:"Reconnaissance Internationale"}),p.jsx("p",{className:"text-sm text-neutral-600",children:"Validation scientifique et visibilité internationale"})]})]})]})})]})}),p.jsx(Hn,{title:"Publications & Actes",children:p.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-2 gap-8",children:[p.jsx($t,{animationClass:"animate-slide-in-left",children:p.jsxs("div",{className:"bg-primary text-white p-10 rounded-xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105",children:[p.jsx("div",{className:"mb-4",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 text-secondary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),p.jsx("h3",{className:"text-3xl font-bold mb-4 font-sans",children:"Actes du Colloque"}),p.jsx("p",{className:"text-neutral-200 text-lg mb-6 max-w-md",children:"Les actes complets du colloque seront disponibles en ligne, assurant une large diffusion des travaux."}),p.jsx("a",{href:"#",className:"bg-neutral-600 text-white font-bold py-3 px-8 rounded-lg text-lg cursor-not-allowed opacity-75 font-sans",children:"Consulter (prochainement)"})]})}),p.jsx($t,{animationClass:"animate-slide-in-right",delay:150,children:p.jsxs("div",{className:"bg-white p-10 rounded-xl shadow-lg border border-neutral-100 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105",children:[p.jsx("div",{className:"mb-4",children:p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 text-secondary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.358 1.84 18.668 1.5 19 1.5v1.5a1.5 1.5 0 01-1.5 1.5H16v2.083a6.001 6.001 0 00-6 6H6.436z"})})}),p.jsx("h3",{className:"text-3xl font-bold text-primary mb-4 font-sans",children:"Revue Internationale"}),p.jsx("p",{className:"text-neutral-700 text-lg max-w-md",children:"Une sélection d'articles remarquables sera proposée pour une publication dans une revue scientifique de premier plan."})]})})]})}),p.jsx(Hn,{title:"Résultats Attendus",className:"bg-neutral-50",children:p.jsx(TT,{})}),p.jsx("div",{id:"partenariat",children:p.jsx(Hn,{title:"Devenir Partenaire",className:"bg-white",children:p.jsx(ST,{})})})]}),p.jsx(vT,{})]})},aI=({onLoginSuccess:n})=>{const[e,t]=ge.useState(""),[i,o]=ge.useState(""),[l,u]=ge.useState(""),[d,m]=ge.useState(!1),_=async C=>{C.preventDefault(),m(!0),u("");try{await eE(ip,e,i),n()}catch(E){console.error("Erreur de connexion:",E),u("Email ou mot de passe incorrect")}finally{m(!1)}};return p.jsx("div",{className:"min-h-screen bg-neutral-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"max-w-md w-full p-8 space-y-8 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"mt-2 text-center text-4xl font-extrabold text-primary font-sans tracking-tight",children:"Accès Administrateur"}),p.jsx("p",{className:"mt-4 text-center text-base text-neutral-500",children:"Gérez le CoSTIC 2026 en toute simplicité."})]}),p.jsxs("form",{className:"mt-8 space-y-6",onSubmit:_,children:[p.jsxs("div",{className:"space-y-4",children:[" ",p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:"sr-only",children:"Adresse email"}),p.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"relative block w-full px-4 py-3 border border-neutral-300 placeholder-neutral-400 text-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition duration-150 ease-in-out",placeholder:"Adresse email",value:e,onChange:C=>t(C.target.value),disabled:d})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"password",className:"sr-only",children:"Mot de passe"}),p.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"relative block w-full px-4 py-3 border border-neutral-300 placeholder-neutral-400 text-neutral-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition duration-150 ease-in-out",placeholder:"Mot de passe",value:i,onChange:C=>o(C.target.value),disabled:d})]})]}),l&&p.jsx("div",{className:"bg-red-50 p-3 rounded-md animate-fade-in",children:p.jsxs("div",{className:"text-sm text-red-700 flex items-center",children:[p.jsx("svg",{className:"h-5 w-5 mr-2 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:p.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})}),l]})}),p.jsx("div",{children:p.jsx("button",{type:"submit",disabled:d,className:"group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-60 disabled:cursor-not-allowed transition duration-150 ease-in-out",children:d?p.jsxs(p.Fragment,{children:[p.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Connexion en cours..."]}):"Se connecter"})})]})]})})},lI=()=>{const[n,e]=ge.useState([]),[t,i]=ge.useState(!0),[o,l]=ge.useState(null),[u,d]=ge.useState(!1),[m,_]=ge.useState({nom:"",pays:"",email:"",telephone:"",siteWeb:"",description:"",typePartenaire:"institutionnel",statut:"approuve"}),[C,E]=ge.useState(null),[I,L]=ge.useState(!1);ge.useEffect(()=>{O()},[]);const O=async()=>{try{const S=(await Uf(Hi(Nn,"partenaires"))).docs.map(R=>({id:R.id,...R.data()}));e(S)}catch(k){console.error("Erreur lors du chargement des partenaires:",k)}finally{i(!1)}},q=k=>{const{name:S,value:R}=k.target;_(D=>({...D,[S]:R}))},F=k=>{k.target.files&&k.target.files[0]&&E(k.target.files[0])},te=async k=>{k.preventDefault(),L(!0);try{let S="";if(C){const R=Mu(qu,`partenaires/${Date.now()}_${C.name}`);await K1(R,C),S=await Q1(R)}o?await zf(hl(Nn,"partenaires",o.id),{...m,logoUrl:S||o.logoUrl,dateModification:Mi()}):await El(Hi(Nn,"partenaires"),{...m,logoUrl:S,dateSoumission:Mi()}),_({nom:"",pays:"",email:"",telephone:"",siteWeb:"",description:"",typePartenaire:"institutionnel",statut:"approuve"}),E(null),l(null),d(!1),O()}catch(S){console.error("Erreur lors de la sauvegarde:",S)}finally{L(!1)}},J=k=>{_({nom:k.nom,pays:k.pays,email:k.email,telephone:k.telephone||"",siteWeb:k.siteWeb||"",description:k.description,typePartenaire:k.typePartenaire,statut:k.statut}),l(k),d(!0)},re=async k=>{if(window.confirm(`Êtes-vous sûr de vouloir supprimer ${k.nom} ?`))try{if(k.logoUrl){const S=Mu(qu,k.logoUrl);await JC(S)}await w_(hl(Nn,"partenaires",k.id)),O()}catch(S){console.error("Erreur lors de la suppression:",S)}},le=async(k,S)=>{try{await zf(hl(Nn,"partenaires",k.id),{statut:S,dateModification:Mi()}),O()}catch(R){console.error("Erreur lors du changement de statut:",R)}},ye="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",de="block text-sm font-medium text-gray-700 mb-1";return t?p.jsx("div",{className:"p-8 text-center",children:"Chargement..."}):p.jsxs("div",{className:"p-8",children:[p.jsxs("div",{className:"flex justify-between items-center mb-6",children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Gestion des Partenaires"}),p.jsx("button",{onClick:()=>{l(null),d(!0),_({nom:"",pays:"",email:"",telephone:"",siteWeb:"",description:"",typePartenaire:"institutionnel",statut:"approuve"})},className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",children:"Ajouter un Partenaire"})]}),u&&p.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg mb-6",children:[p.jsx("h3",{className:"text-lg font-semibold mb-4",children:o?"Modifier le Partenaire":"Nouveau Partenaire"}),p.jsxs("form",{onSubmit:te,className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:de,children:"Nom *"}),p.jsx("input",{type:"text",name:"nom",value:m.nom,onChange:q,className:ye,required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:de,children:"Pays *"}),p.jsx("input",{type:"text",name:"pays",value:m.pays,onChange:q,className:ye,required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:de,children:"Email *"}),p.jsx("input",{type:"email",name:"email",value:m.email,onChange:q,className:ye,required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:de,children:"Téléphone"}),p.jsx("input",{type:"tel",name:"telephone",value:m.telephone,onChange:q,className:ye})]}),p.jsxs("div",{children:[p.jsx("label",{className:de,children:"Site Web"}),p.jsx("input",{type:"url",name:"siteWeb",value:m.siteWeb,onChange:q,className:ye})]}),p.jsxs("div",{children:[p.jsx("label",{className:de,children:"Type de Partenaire"}),p.jsxs("select",{name:"typePartenaire",value:m.typePartenaire,onChange:q,className:ye,children:[p.jsx("option",{value:"institutionnel",children:"Institutionnel"}),p.jsx("option",{value:"entreprise",children:"Entreprise"}),p.jsx("option",{value:"organisation",children:"Organisation"}),p.jsx("option",{value:"gouvernemental",children:"Gouvernemental"}),p.jsx("option",{value:"media",children:"Média"}),p.jsx("option",{value:"autre",children:"Autre"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:de,children:"Statut"}),p.jsxs("select",{name:"statut",value:m.statut,onChange:q,className:ye,children:[p.jsx("option",{value:"en_attente",children:"En Attente"}),p.jsx("option",{value:"approuve",children:"Approuvé"}),p.jsx("option",{value:"rejete",children:"Rejeté"})]})]}),p.jsxs("div",{className:"md:col-span-2",children:[p.jsx("label",{className:de,children:"Description *"}),p.jsx("textarea",{name:"description",value:m.description,onChange:q,className:ye,rows:3,required:!0})]}),p.jsxs("div",{className:"md:col-span-2",children:[p.jsx("label",{className:de,children:"Logo"}),p.jsx("input",{type:"file",onChange:F,accept:"image/*",className:ye})]}),p.jsxs("div",{className:"md:col-span-2 flex space-x-4",children:[p.jsx("button",{type:"submit",disabled:I,className:"bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50",children:I?"Sauvegarde...":"Sauvegarder"}),p.jsx("button",{type:"button",onClick:()=>d(!1),className:"bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600",children:"Annuler"})]})]})]}),p.jsx("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden",children:p.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[p.jsx("thead",{className:"bg-gray-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Partenaire"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Pays"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Type"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Statut"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),p.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:n.map(k=>p.jsxs("tr",{children:[p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsxs("div",{className:"flex items-center",children:[k.logoUrl&&p.jsx("img",{className:"h-10 w-10 rounded-full mr-3",src:k.logoUrl,alt:k.nom}),p.jsxs("div",{children:[p.jsx("div",{className:"text-sm font-medium text-gray-900",children:k.nom}),p.jsx("div",{className:"text-sm text-gray-500",children:k.email})]})]})}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:k.pays}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:k.typePartenaire}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsxs("select",{value:k.statut,onChange:S=>le(k,S.target.value),className:`text-sm px-2 py-1 rounded-full ${k.statut==="approuve"?"bg-green-100 text-green-800":k.statut==="en_attente"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:[p.jsx("option",{value:"en_attente",children:"En Attente"}),p.jsx("option",{value:"approuve",children:"Approuvé"}),p.jsx("option",{value:"rejete",children:"Rejeté"})]})}),p.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2",children:[p.jsx("button",{onClick:()=>J(k),className:"text-blue-600 hover:text-blue-900",children:"Modifier"}),p.jsx("button",{onClick:()=>re(k),className:"text-red-600 hover:text-red-900",children:"Supprimer"})]})]},k.id))})]})})]})},cI=()=>{const[n,e]=ge.useState("submissions"),[t,i]=ge.useState([]),[o,l]=ge.useState([]),[u,d]=ge.useState(!0);ge.useEffect(()=>{m()},[]);const m=async()=>{d(!0);try{const I=D2(Hi(Nn,"submissions"),V2("submittedAt","desc")),O=(await Uf(I)).docs.map(J=>({id:J.id,...J.data()})),q=D2(Hi(Nn,"registrations"),V2("registeredAt","desc")),te=(await Uf(q)).docs.map(J=>({id:J.id,...J.data()})).filter(J=>J.paymentStatus==="completed");i(O),l(te)}catch(I){console.error("Erreur lors du chargement des données:",I)}finally{d(!1)}},_=async()=>{try{await iE(ip)}catch(I){console.error("Erreur lors de la déconnexion:",I)}},C=async(I,L)=>{try{const q=await(await fetch(I)).blob(),F=window.URL.createObjectURL(q),te=document.createElement("a");te.href=F,te.download=L,document.body.appendChild(te),te.click(),window.URL.revokeObjectURL(F),document.body.removeChild(te)}catch(O){console.error("Erreur lors du téléchargement:",O),alert("Erreur lors du téléchargement du fichier")}},E=I=>I?(I.toDate?I.toDate():new Date(I)).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A";return u?p.jsx("div",{className:"min-h-screen bg-neutral-100 flex items-center justify-center",children:p.jsxs("div",{className:"text-center",children:[p.jsxs("svg",{className:"animate-spin h-12 w-12 text-primary mx-auto mb-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),p.jsx("p",{className:"text-neutral-600",children:"Chargement des données..."})]})}):p.jsxs("div",{className:"min-h-screen bg-neutral-100",children:[p.jsx("header",{className:"bg-primary text-white shadow-lg",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"flex justify-between items-center py-6",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"text-2xl font-bold font-sans",children:"Dashboard Administrateur"}),p.jsx("p",{className:"text-neutral-200",children:"CoSTIC 2026 - Gestion du Colloque"})]}),p.jsxs("button",{onClick:_,className:"bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2",children:[p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),p.jsx("span",{children:"Déconnexion"})]})]})})}),p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[p.jsx("div",{className:"border-b border-neutral-200",children:p.jsxs("nav",{className:"-mb-px flex space-x-8",children:[p.jsxs("button",{onClick:()=>e("submissions"),className:`py-2 px-1 border-b-2 font-medium text-sm ${n==="submissions"?"border-primary text-primary":"border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"}`,children:["Articles Soumis (",t.length,")"]}),p.jsxs("button",{onClick:()=>e("participants"),className:`py-2 px-1 border-b-2 font-medium text-sm ${n==="participants"?"border-primary text-primary":"border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"}`,children:["Participants (",o.length,")"]}),p.jsx("button",{onClick:()=>e("partenaires"),className:`py-2 px-1 border-b-2 font-medium text-sm ${n==="partenaires"?"border-primary text-primary":"border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"}`,children:"Partenaires"})]})}),p.jsxs("div",{className:"mt-8",children:[n==="submissions"&&p.jsxs("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden",children:[p.jsxs("div",{className:"px-6 py-4 border-b border-neutral-200",children:[p.jsx("h2",{className:"text-xl font-bold text-neutral-900 font-sans",children:"Articles Soumis"}),p.jsx("p",{className:"text-neutral-600",children:"Liste de tous les articles soumis au colloque"})]}),p.jsxs("div",{className:"overflow-x-auto",children:[p.jsxs("table",{className:"min-w-full divide-y divide-neutral-200",children:[p.jsx("thead",{className:"bg-neutral-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Auteur"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Titre"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Thématique"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Date"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Actions"})]})}),p.jsx("tbody",{className:"bg-white divide-y divide-neutral-200",children:t.map(I=>p.jsxs("tr",{className:"hover:bg-neutral-50",children:[p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsxs("div",{children:[p.jsx("div",{className:"text-sm font-medium text-neutral-900",children:I.authorName}),p.jsx("div",{className:"text-sm text-neutral-500",children:I.authorEmail}),p.jsx("div",{className:"text-sm text-neutral-500",children:I.affiliation})]})}),p.jsx("td",{className:"px-6 py-4",children:p.jsx("div",{className:"text-sm text-neutral-900 max-w-xs truncate",title:I.articleTitle,children:I.articleTitle})}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsx("span",{className:"inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-secondary/10 text-secondary",children:I.themeSelect||"Non spécifié"})}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-neutral-500",children:E(I.submittedAt)}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:p.jsxs("button",{onClick:()=>C(I.fileUrl,I.fileName),className:"text-primary hover:text-primary/80 flex items-center space-x-1",children:[p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),p.jsx("span",{children:"Télécharger"})]})})]},I.id))})]}),t.length===0&&p.jsxs("div",{className:"text-center py-12",children:[p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12 text-neutral-400 mx-auto mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),p.jsx("p",{className:"text-neutral-500",children:"Aucun article soumis pour le moment"})]})]})]}),n==="participants"&&p.jsxs("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden",children:[p.jsxs("div",{className:"px-6 py-4 border-b border-neutral-200",children:[p.jsx("h2",{className:"text-xl font-bold text-neutral-900 font-sans",children:"Participants Inscrits"}),p.jsx("p",{className:"text-neutral-600",children:"Liste des participants ayant effectué leur paiement"})]}),p.jsxs("div",{className:"overflow-x-auto",children:[p.jsxs("table",{className:"min-w-full divide-y divide-neutral-200",children:[p.jsx("thead",{className:"bg-neutral-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Nom"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Email"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Type"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Montant"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Référence"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider",children:"Date"})]})}),p.jsx("tbody",{className:"bg-white divide-y divide-neutral-200",children:o.map(I=>p.jsxs("tr",{className:"hover:bg-neutral-50",children:[p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900",children:I.name}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-neutral-500",children:I.email}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsx("span",{className:`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${I.participantType==="etudiant"?"bg-green-100 text-green-800":"bg-blue-100 text-blue-800"}`,children:I.participantType==="etudiant"?"Étudiant":"Chercheur"})}),p.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-neutral-900",children:[I.amount.toLocaleString()," ",I.currency]}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-neutral-500 font-mono",children:I.paymentReference||"N/A"}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-neutral-500",children:E(I.paymentDate||I.registeredAt)})]},I.id))})]}),o.length===0&&p.jsxs("div",{className:"text-center py-12",children:[p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-12 w-12 text-neutral-400 mx-auto mb-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),p.jsx("p",{className:"text-neutral-500",children:"Aucun participant inscrit pour le moment"})]})]})]}),n==="partenaires"&&p.jsx(lI,{})]})]})]})},uI=()=>{const[n,e]=ge.useState(null),[t,i]=ge.useState(!0);ge.useEffect(()=>{const l=rE(ip,u=>{e(u),i(!1)});return()=>l()},[]);const o=()=>{};return t?p.jsx("div",{className:"min-h-screen bg-neutral-100 flex items-center justify-center",children:p.jsxs("div",{className:"text-center",children:[p.jsxs("svg",{className:"animate-spin h-12 w-12 text-primary mx-auto mb-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),p.jsx("p",{className:"text-neutral-600",children:"Chargement..."})]})}):p.jsx("div",{children:n?p.jsx(cI,{}):p.jsx(aI,{onLoginSuccess:o})})},hI=window.location.pathname==="/admin",dI=hI?uI:oI,ry=document.getElementById("root");if(!ry)throw new Error("Could not find root element to mount to");const fI=_5.createRoot(ry);fI.render(p.jsx(Cu.StrictMode,{children:p.jsx(dI,{})}));
