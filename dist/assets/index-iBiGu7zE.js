function ST(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yy={exports:{}},iu={},Xy={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),CT=Symbol.for("react.portal"),PT=Symbol.for("react.fragment"),RT=Symbol.for("react.strict_mode"),kT=Symbol.for("react.profiler"),xT=Symbol.for("react.provider"),NT=Symbol.for("react.context"),DT=Symbol.for("react.forward_ref"),OT=Symbol.for("react.suspense"),VT=Symbol.for("react.memo"),LT=Symbol.for("react.lazy"),fm=Symbol.iterator;function bT(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var Jy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zy=Object.assign,ev={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=ev,this.updater=n||Jy}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tv(){}tv.prototype=Zi.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=ev,this.updater=n||Jy}var Sd=Id.prototype=new tv;Sd.constructor=Id;Zy(Sd,Zi.prototype);Sd.isPureReactComponent=!0;var pm=Array.isArray,nv=Object.prototype.hasOwnProperty,Ad={current:null},rv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nv.call(e,r)&&!rv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Do,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function MT(t,e){return{$$typeof:Do,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Do}function jT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mm=/\/+/g;function fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jT(""+t.key):e.toString(36)}function za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Do:case CT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+fc(o,0):r,pm(i)?(n="",t!=null&&(n=t.replace(mm,"$&/")+"/"),za(i,e,n,"",function(c){return c})):i!=null&&(Cd(i)&&(i=MT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",pm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+fc(s,l);o+=za(s,e,n,u,i)}else if(u=bT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+fc(s,l++),o+=za(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _a(t,e,n){if(t==null)return t;var r=[],i=0;return za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function FT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Wa={transition:null},UT={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Ad};function sv(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:_a,forEach:function(t,e,n){_a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _a(t,function(){e++}),e},toArray:function(t){return _a(t,function(e){return e})||[]},only:function(t){if(!Cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Zi;Z.Fragment=PT;Z.Profiler=kT;Z.PureComponent=Id;Z.StrictMode=RT;Z.Suspense=OT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UT;Z.act=sv;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)nv.call(e,u)&&!rv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Do,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:NT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xT,_context:t},t.Consumer=t};Z.createElement=iv;Z.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:DT,render:t}};Z.isValidElement=Cd;Z.lazy=function(t){return{$$typeof:LT,_payload:{_status:-1,_result:t},_init:FT}};Z.memo=function(t,e){return{$$typeof:VT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};Z.unstable_act=sv;Z.useCallback=function(t,e){return at.current.useCallback(t,e)};Z.useContext=function(t){return at.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return at.current.useDeferredValue(t)};Z.useEffect=function(t,e){return at.current.useEffect(t,e)};Z.useId=function(){return at.current.useId()};Z.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return at.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};Z.useRef=function(t){return at.current.useRef(t)};Z.useState=function(t){return at.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return at.current.useTransition()};Z.version="18.3.1";Xy.exports=Z;var D=Xy.exports;const vn=AT(D),BT=ST({__proto__:null,default:vn},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T=D,zT=Symbol.for("react.element"),WT=Symbol.for("react.fragment"),qT=Object.prototype.hasOwnProperty,HT=$T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KT={key:!0,ref:!0,__self:!0,__source:!0};function ov(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qT.call(e,r)&&!KT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zT,type:t,key:s,ref:o,props:i,_owner:HT.current}}iu.Fragment=WT;iu.jsx=ov;iu.jsxs=ov;Yy.exports=iu;var y=Yy.exports,av={exports:{}},St={},lv={exports:{}},uv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var J=$.length;$.push(Q);e:for(;0<J;){var ge=J-1>>>1,le=$[ge];if(0<i(le,Q))$[ge]=Q,$[J]=le,J=ge;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],J=$.pop();if(J!==Q){$[0]=J;e:for(var ge=0,le=$.length,Se=le>>>1;ge<Se;){var rn=2*(ge+1)-1,sn=$[rn],on=rn+1,an=$[on];if(0>i(sn,J))on<le&&0>i(an,sn)?($[ge]=an,$[on]=J,ge=on):($[ge]=sn,$[rn]=J,ge=rn);else if(on<le&&0>i(an,J))$[ge]=an,$[on]=J,ge=on;else break e}}return Q}function i($,Q){var J=$.sortIndex-Q.sortIndex;return J!==0?J:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,C=!1,P=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function V($){if(k=!1,S($),!P)if(n(u)!==null)P=!0,Vt(j);else{var Q=n(c);Q!==null&&nn(V,Q.startTime-$)}}function j($,Q){P=!1,k&&(k=!1,I(_),_=-1),C=!0;var J=m;try{for(S(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!R());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var le=ge(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),S(Q)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var rn=n(c);rn!==null&&nn(V,rn.startTime-Q),Se=!1}return Se}finally{p=null,m=J,C=!1}}var U=!1,w=null,_=-1,E=5,T=-1;function R(){return!(t.unstable_now()-T<E)}function x(){if(w!==null){var $=t.unstable_now();T=$;var Q=!0;try{Q=w(!0,$)}finally{Q?A():(U=!1,w=null)}}else U=!1}var A;if(typeof v=="function")A=function(){v(x)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Ct=nt.port2;nt.port1.onmessage=x,A=function(){Ct.postMessage(null)}}else A=function(){O(x,0)};function Vt($){w=$,U||(U=!0,A())}function nn($,Q){_=O(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){P||C||(P=!0,Vt(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function($,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,$){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,$={id:d++,callback:Q,priorityLevel:$,startTime:J,expirationTime:le,sortIndex:-1},J>ge?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(k?(I(_),_=-1):k=!0,nn(V,J-ge))):($.sortIndex=le,e(u,$),P||C||(P=!0,Vt(j))),$},t.unstable_shouldYield=R,t.unstable_wrapCallback=function($){var Q=m;return function(){var J=m;m=Q;try{return $.apply(this,arguments)}finally{m=J}}}})(uv);lv.exports=uv;var GT=lv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QT=D,It=GT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cv=new Set,no={};function Zr(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(no[t]=e,t=0;t<e.length;t++)cv.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,YT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gm={},ym={};function XT(t){return Jc.call(ym,t)?!0:Jc.call(gm,t)?!1:YT.test(t)?ym[t]=!0:(gm[t]=!0,!1)}function JT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZT(t,e,n,r){if(e===null||typeof e>"u"||JT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pd,Rd);ze[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pd,Rd);ze[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pd,Rd);ze[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZT(e,n,i,r)&&(n=null),r||i===null?XT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=QT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),pi=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),hv=Symbol.for("react.provider"),dv=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),fv=Symbol.for("react.offscreen"),vm=Symbol.iterator;function Is(t){return t===null||typeof t!="object"?null:(t=vm&&t[vm]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,pc;function Ds(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function eI(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mi:return"Fragment";case pi:return"Portal";case Zc:return"Profiler";case xd:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dv:return(t.displayName||"Context")+".Consumer";case hv:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:nh(t.type)||"Memo";case jn:e=t._payload,t=t._init;try{return nh(t(e))}catch{}}return null}function tI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(e);case 8:return e===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nI(t){var e=pv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=nI(t))}function mv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _m(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gv(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function ih(t,e){gv(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&sh(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sh(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Em(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Os(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function yv(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ta,_v=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var $s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rI=["Webkit","ms","Moz","O"];Object.keys($s).forEach(function(t){rI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),$s[e]=$s[t]})});function wv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||$s.hasOwnProperty(t)&&$s[t]?(""+e).trim():e+"px"}function Ev(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iI=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(t,e){if(e){if(iI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function Od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,Ri=null,ki=null;function Im(t){if(t=Lo(t)){if(typeof hh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=uu(e),hh(t.stateNode,t.type,e))}}function Tv(t){Ri?ki?ki.push(t):ki=[t]:Ri=t}function Iv(){if(Ri){var t=Ri,e=ki;if(ki=Ri=null,Im(t),e)for(t=0;t<e.length;t++)Im(e[t])}}function Sv(t,e){return t(e)}function Av(){}var yc=!1;function Cv(t,e,n){if(yc)return t(e,n);yc=!0;try{return Sv(t,e,n)}finally{yc=!1,(Ri!==null||ki!==null)&&(Av(),Iv())}}function io(t,e){var n=t.stateNode;if(n===null)return null;var r=uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var dh=!1;if(Tn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){dh=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{dh=!1}function sI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var zs=!1,pl=null,ml=!1,fh=null,oI={onError:function(t){zs=!0,pl=t}};function aI(t,e,n,r,i,s,o,l,u){zs=!1,pl=null,sI.apply(oI,arguments)}function lI(t,e,n,r,i,s,o,l,u){if(aI.apply(this,arguments),zs){if(zs){var c=pl;zs=!1,pl=null}else throw Error(F(198));ml||(ml=!0,fh=c)}}function ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sm(t){if(ei(t)!==t)throw Error(F(188))}function uI(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sm(i),t;if(s===r)return Sm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Rv(t){return t=uI(t),t!==null?kv(t):null}function kv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kv(t);if(e!==null)return e;t=t.sibling}return null}var xv=It.unstable_scheduleCallback,Am=It.unstable_cancelCallback,cI=It.unstable_shouldYield,hI=It.unstable_requestPaint,Ce=It.unstable_now,dI=It.unstable_getCurrentPriorityLevel,Vd=It.unstable_ImmediatePriority,Nv=It.unstable_UserBlockingPriority,gl=It.unstable_NormalPriority,fI=It.unstable_LowPriority,Dv=It.unstable_IdlePriority,su=null,Qt=null;function pI(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:yI,mI=Math.log,gI=Math.LN2;function yI(t){return t>>>=0,t===0?32:31-(mI(t)/gI|0)|0}var Ia=64,Sa=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Vs(l):(s&=o,s!==0&&(r=Vs(s)))}else o=n&~i,o!==0?r=Vs(o):s!==0&&(r=Vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function vI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _I(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=vI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ov(){var t=Ia;return Ia<<=1,!(Ia&4194240)&&(Ia=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function wI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lv,bd,bv,Mv,jv,mh=!1,Aa=[],Xn=null,Jn=null,Zn=null,so=new Map,oo=new Map,Un=[],EI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function As(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Lo(e),e!==null&&bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TI(t,e,n,r,i){switch(e){case"focusin":return Xn=As(Xn,t,e,n,r,i),!0;case"dragenter":return Jn=As(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=As(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return so.set(s,As(so.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oo.set(s,As(oo.get(s)||null,t,e,n,r,i)),!0}return!1}function Fv(t){var e=Vr(t.target);if(e!==null){var n=ei(e);if(n!==null){if(e=n.tag,e===13){if(e=Pv(n),e!==null){t.blockedOn=e,jv(t.priority,function(){bv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ch=r,n.target.dispatchEvent(r),ch=null}else return e=Lo(n),e!==null&&bd(e),t.blockedOn=n,!1;e.shift()}return!0}function Pm(t,e,n){qa(t)&&n.delete(e)}function II(){mh=!1,Xn!==null&&qa(Xn)&&(Xn=null),Jn!==null&&qa(Jn)&&(Jn=null),Zn!==null&&qa(Zn)&&(Zn=null),so.forEach(Pm),oo.forEach(Pm)}function Cs(t,e){t.blockedOn===e&&(t.blockedOn=null,mh||(mh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,II)))}function ao(t){function e(i){return Cs(i,t)}if(0<Aa.length){Cs(Aa[0],t);for(var n=1;n<Aa.length;n++){var r=Aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&Cs(Xn,t),Jn!==null&&Cs(Jn,t),Zn!==null&&Cs(Zn,t),so.forEach(e),oo.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Fv(n),n.blockedOn===null&&Un.shift()}var xi=Nn.ReactCurrentBatchConfig,vl=!0;function SI(t,e,n,r){var i=oe,s=xi.transition;xi.transition=null;try{oe=1,Md(t,e,n,r)}finally{oe=i,xi.transition=s}}function AI(t,e,n,r){var i=oe,s=xi.transition;xi.transition=null;try{oe=4,Md(t,e,n,r)}finally{oe=i,xi.transition=s}}function Md(t,e,n,r){if(vl){var i=gh(t,e,n,r);if(i===null)Rc(t,e,r,_l,n),Cm(t,r);else if(TI(i,t,e,n,r))r.stopPropagation();else if(Cm(t,r),e&4&&-1<EI.indexOf(t)){for(;i!==null;){var s=Lo(i);if(s!==null&&Lv(s),s=gh(t,e,n,r),s===null&&Rc(t,e,r,_l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rc(t,e,r,null,n)}}var _l=null;function gh(t,e,n,r){if(_l=null,t=Od(r),t=Vr(t),t!==null)if(e=ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function Uv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dI()){case Vd:return 1;case Nv:return 4;case gl:case fI:return 16;case Dv:return 536870912;default:return 16}default:return 16}}var Kn=null,jd=null,Ha=null;function Bv(){if(Ha)return Ha;var t,e=jd,n=e.length,r,i="value"in Kn?Kn.value:Kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function Ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function Rm(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:Rm,this.isPropagationStopped=Rm,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=At(es),Vo=_e({},es,{view:0,detail:0}),CI=At(Vo),_c,wc,Ps,ou=_e({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(_c=t.screenX-Ps.screenX,wc=t.screenY-Ps.screenY):wc=_c=0,Ps=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:wc}}),km=At(ou),PI=_e({},ou,{dataTransfer:0}),RI=At(PI),kI=_e({},Vo,{relatedTarget:0}),Ec=At(kI),xI=_e({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),NI=At(xI),DI=_e({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OI=At(DI),VI=_e({},es,{data:0}),xm=At(VI),LI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MI[t])?!!e[t]:!1}function Ud(){return jI}var FI=_e({},Vo,{key:function(t){if(t.key){var e=LI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?Ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UI=At(FI),BI=_e({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=At(BI),$I=_e({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),zI=At($I),WI=_e({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),qI=At(WI),HI=_e({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KI=At(HI),GI=[9,13,27,32],Bd=Tn&&"CompositionEvent"in window,Ws=null;Tn&&"documentMode"in document&&(Ws=document.documentMode);var QI=Tn&&"TextEvent"in window&&!Ws,$v=Tn&&(!Bd||Ws&&8<Ws&&11>=Ws),Dm=" ",Om=!1;function zv(t,e){switch(t){case"keyup":return GI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function YI(t,e){switch(t){case"compositionend":return Wv(e);case"keypress":return e.which!==32?null:(Om=!0,Dm);case"textInput":return t=e.data,t===Dm&&Om?null:t;default:return null}}function XI(t,e){if(gi)return t==="compositionend"||!Bd&&zv(t,e)?(t=Bv(),Ha=jd=Kn=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $v&&e.locale!=="ko"?null:e.data;default:return null}}var JI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JI[t.type]:e==="textarea"}function qv(t,e,n,r){Tv(r),e=wl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qs=null,lo=null;function ZI(t){n_(t,0)}function au(t){var e=_i(t);if(mv(e))return t}function eS(t,e){if(t==="change")return e}var Hv=!1;if(Tn){var Tc;if(Tn){var Ic="oninput"in document;if(!Ic){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),Ic=typeof Lm.oninput=="function"}Tc=Ic}else Tc=!1;Hv=Tc&&(!document.documentMode||9<document.documentMode)}function bm(){qs&&(qs.detachEvent("onpropertychange",Kv),lo=qs=null)}function Kv(t){if(t.propertyName==="value"&&au(lo)){var e=[];qv(e,lo,t,Od(t)),Cv(ZI,e)}}function tS(t,e,n){t==="focusin"?(bm(),qs=e,lo=n,qs.attachEvent("onpropertychange",Kv)):t==="focusout"&&bm()}function nS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(lo)}function rS(t,e){if(t==="click")return au(e)}function iS(t,e){if(t==="input"||t==="change")return au(e)}function sS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:sS;function uo(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Jc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jm(t,e){var n=Mm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function Gv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qv(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oS(t){var e=Qv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gv(n.ownerDocument.documentElement,n)){if(r!==null&&$d(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jm(n,s);var o=jm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aS=Tn&&"documentMode"in document&&11>=document.documentMode,yi=null,yh=null,Hs=null,vh=!1;function Fm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vh||yi==null||yi!==fl(r)||(r=yi,"selectionStart"in r&&$d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&uo(Hs,r)||(Hs=r,r=wl(yh,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=yi)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Sc={},Yv={};Tn&&(Yv=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function lu(t){if(Sc[t])return Sc[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yv)return Sc[t]=e[n];return t}var Xv=lu("animationend"),Jv=lu("animationiteration"),Zv=lu("animationstart"),e_=lu("transitionend"),t_=new Map,Um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){t_.set(t,e),Zr(e,[t])}for(var Ac=0;Ac<Um.length;Ac++){var Cc=Um[Ac],lS=Cc.toLowerCase(),uS=Cc[0].toUpperCase()+Cc.slice(1);gr(lS,"on"+uS)}gr(Xv,"onAnimationEnd");gr(Jv,"onAnimationIteration");gr(Zv,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(e_,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ls));function Bm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lI(r,e,void 0,t),t.currentTarget=null}function n_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Bm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Bm(i,l,c),s=u}}}if(ml)throw t=fh,ml=!1,fh=null,t}function de(t,e){var n=e[Ih];n===void 0&&(n=e[Ih]=new Set);var r=t+"__bubble";n.has(r)||(r_(e,t,2,!1),n.add(r))}function Pc(t,e,n){var r=0;e&&(r|=4),r_(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[Ra]){t[Ra]=!0,cv.forEach(function(n){n!=="selectionchange"&&(cS.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Pc("selectionchange",!1,e))}}function r_(t,e,n,r){switch(Uv(e)){case 1:var i=SI;break;case 4:i=AI;break;default:i=Md}n=i.bind(null,e,n,t),i=void 0,!dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Cv(function(){var c=s,d=Od(n),p=[];e:{var m=t_.get(t);if(m!==void 0){var C=Fd,P=t;switch(t){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":C=UI;break;case"focusin":P="focus",C=Ec;break;case"focusout":P="blur",C=Ec;break;case"beforeblur":case"afterblur":C=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=RI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=zI;break;case Xv:case Jv:case Zv:C=NI;break;case e_:C=qI;break;case"scroll":C=CI;break;case"wheel":C=KI;break;case"copy":case"cut":case"paste":C=OI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Nm}var k=(e&4)!==0,O=!k&&t==="scroll",I=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,S;v!==null;){S=v;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=io(v,I),V!=null&&k.push(ho(v,V,S)))),O)break;v=v.return}0<k.length&&(m=new C(m,P,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",m&&n!==ch&&(P=n.relatedTarget||n.fromElement)&&(Vr(P)||P[In]))break e;if((C||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,C?(P=n.relatedTarget||n.toElement,C=c,P=P?Vr(P):null,P!==null&&(O=ei(P),P!==O||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=c),C!==P)){if(k=km,V="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=Nm,V="onPointerLeave",I="onPointerEnter",v="pointer"),O=C==null?m:_i(C),S=P==null?m:_i(P),m=new k(V,v+"leave",C,n,d),m.target=O,m.relatedTarget=S,V=null,Vr(d)===c&&(k=new k(I,v+"enter",P,n,d),k.target=S,k.relatedTarget=O,V=k),O=V,C&&P)t:{for(k=C,I=P,v=0,S=k;S;S=ci(S))v++;for(S=0,V=I;V;V=ci(V))S++;for(;0<v-S;)k=ci(k),v--;for(;0<S-v;)I=ci(I),S--;for(;v--;){if(k===I||I!==null&&k===I.alternate)break t;k=ci(k),I=ci(I)}k=null}else k=null;C!==null&&$m(p,m,C,k,!1),P!==null&&O!==null&&$m(p,O,P,k,!0)}}e:{if(m=c?_i(c):window,C=m.nodeName&&m.nodeName.toLowerCase(),C==="select"||C==="input"&&m.type==="file")var j=eS;else if(Vm(m))if(Hv)j=iS;else{j=nS;var U=tS}else(C=m.nodeName)&&C.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=rS);if(j&&(j=j(t,c))){qv(p,j,n,d);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&sh(m,"number",m.value)}switch(U=c?_i(c):window,t){case"focusin":(Vm(U)||U.contentEditable==="true")&&(yi=U,yh=c,Hs=null);break;case"focusout":Hs=yh=yi=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,Fm(p,n,d);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":Fm(p,n,d)}var w;if(Bd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else gi?zv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&($v&&n.locale!=="ko"&&(gi||_!=="onCompositionStart"?_==="onCompositionEnd"&&gi&&(w=Bv()):(Kn=d,jd="value"in Kn?Kn.value:Kn.textContent,gi=!0)),U=wl(c,_),0<U.length&&(_=new xm(_,t,null,n,d),p.push({event:_,listeners:U}),w?_.data=w:(w=Wv(n),w!==null&&(_.data=w)))),(w=QI?YI(t,n):XI(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(d=new xm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=w))}n_(p,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=io(t,n),s!=null&&r.unshift(ho(t,s,i)),s=io(t,e),s!=null&&r.push(ho(t,s,i))),t=t.return}return r}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $m(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=io(n,s),u!=null&&o.unshift(ho(n,u,l))):i||(u=io(n,s),u!=null&&o.push(ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function zm(t){return(typeof t=="string"?t:""+t).replace(hS,`
`).replace(dS,"")}function ka(t,e,n){if(e=zm(e),zm(t)!==e&&n)throw Error(F(425))}function El(){}var _h=null,wh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(t){return Wm.resolve(null).then(t).catch(mS)}:Th;function mS(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ao(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),Kt="__reactFiber$"+ts,fo="__reactProps$"+ts,In="__reactContainer$"+ts,Ih="__reactEvents$"+ts,gS="__reactListeners$"+ts,yS="__reactHandles$"+ts;function Vr(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qm(t);t!==null;){if(n=t[Kt])return n;t=qm(t)}return e}t=n,n=t.parentNode}return null}function Lo(t){return t=t[Kt]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function uu(t){return t[fo]||null}var Sh=[],wi=-1;function yr(t){return{current:t}}function pe(t){0>wi||(t.current=Sh[wi],Sh[wi]=null,wi--)}function ce(t,e){wi++,Sh[wi]=t.current,t.current=e}var dr={},et=yr(dr),ft=yr(!1),Br=dr;function ji(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Tl(){pe(ft),pe(et)}function Hm(t,e,n){if(et.current!==dr)throw Error(F(168));ce(et,e),ce(ft,n)}function i_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,tI(t)||"Unknown",i));return _e({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Br=et.current,ce(et,t),ce(ft,ft.current),!0}function Km(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=i_(t,e,Br),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(et),ce(et,t)):pe(ft),ce(ft,n)}var dn=null,cu=!1,xc=!1;function s_(t){dn===null?dn=[t]:dn.push(t)}function vS(t){cu=!0,s_(t)}function vr(){if(!xc&&dn!==null){xc=!0;var t=0,e=oe;try{var n=dn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,cu=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),xv(Vd,vr),i}finally{oe=e,xc=!1}}return null}var Ei=[],Ti=0,Sl=null,Al=0,Pt=[],Rt=0,$r=null,fn=1,pn="";function xr(t,e){Ei[Ti++]=Al,Ei[Ti++]=Sl,Sl=t,Al=e}function o_(t,e,n){Pt[Rt++]=fn,Pt[Rt++]=pn,Pt[Rt++]=$r,$r=t;var r=fn;t=pn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Ut(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function zd(t){t.return!==null&&(xr(t,1),o_(t,1,0))}function Wd(t){for(;t===Sl;)Sl=Ei[--Ti],Ei[Ti]=null,Al=Ei[--Ti],Ei[Ti]=null;for(;t===$r;)$r=Pt[--Rt],Pt[Rt]=null,pn=Pt[--Rt],Pt[Rt]=null,fn=Pt[--Rt],Pt[Rt]=null}var Et=null,vt=null,me=!1,Ft=null;function a_(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,vt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,vt=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(me){var e=vt;if(e){var n=e;if(!Gm(t,e)){if(Ah(t))throw Error(F(418));e=er(n.nextSibling);var r=Et;e&&Gm(t,e)?a_(r,n):(t.flags=t.flags&-4097|2,me=!1,Et=t)}}else{if(Ah(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,Et=t}}}function Qm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function xa(t){if(t!==Et)return!1;if(!me)return Qm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=vt)){if(Ah(t))throw l_(),Error(F(418));for(;e;)a_(t,e),e=er(e.nextSibling)}if(Qm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=Et?er(t.stateNode.nextSibling):null;return!0}function l_(){for(var t=vt;t;)t=er(t.nextSibling)}function Fi(){vt=Et=null,me=!1}function qd(t){Ft===null?Ft=[t]:Ft.push(t)}var _S=Nn.ReactCurrentBatchConfig;function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Na(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ym(t){var e=t._init;return e(t._payload)}function u_(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=ir(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,V){return v===null||v.tag!==6?(v=Mc(S,I.mode,V),v.return=I,v):(v=i(v,S),v.return=I,v)}function u(I,v,S,V){var j=S.type;return j===mi?d(I,v,S.props.children,V,S.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jn&&Ym(j)===v.type)?(V=i(v,S.props),V.ref=Rs(I,v,S),V.return=I,V):(V=el(S.type,S.key,S.props,null,I.mode,V),V.ref=Rs(I,v,S),V.return=I,V)}function c(I,v,S,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=jc(S,I.mode,V),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function d(I,v,S,V,j){return v===null||v.tag!==7?(v=Fr(S,I.mode,V,j),v.return=I,v):(v=i(v,S),v.return=I,v)}function p(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Mc(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return S=el(v.type,v.key,v.props,null,I.mode,S),S.ref=Rs(I,null,v),S.return=I,S;case pi:return v=jc(v,I.mode,S),v.return=I,v;case jn:var V=v._init;return p(I,V(v._payload),S)}if(Os(v)||Is(v))return v=Fr(v,I.mode,S,null),v.return=I,v;Na(I,v)}return null}function m(I,v,S,V){var j=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(I,v,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case wa:return S.key===j?u(I,v,S,V):null;case pi:return S.key===j?c(I,v,S,V):null;case jn:return j=S._init,m(I,v,j(S._payload),V)}if(Os(S)||Is(S))return j!==null?null:d(I,v,S,V,null);Na(I,S)}return null}function C(I,v,S,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(v,I,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case wa:return I=I.get(V.key===null?S:V.key)||null,u(v,I,V,j);case pi:return I=I.get(V.key===null?S:V.key)||null,c(v,I,V,j);case jn:var U=V._init;return C(I,v,S,U(V._payload),j)}if(Os(V)||Is(V))return I=I.get(S)||null,d(v,I,V,j,null);Na(v,V)}return null}function P(I,v,S,V){for(var j=null,U=null,w=v,_=v=0,E=null;w!==null&&_<S.length;_++){w.index>_?(E=w,w=null):E=w.sibling;var T=m(I,w,S[_],V);if(T===null){w===null&&(w=E);break}t&&w&&T.alternate===null&&e(I,w),v=s(T,v,_),U===null?j=T:U.sibling=T,U=T,w=E}if(_===S.length)return n(I,w),me&&xr(I,_),j;if(w===null){for(;_<S.length;_++)w=p(I,S[_],V),w!==null&&(v=s(w,v,_),U===null?j=w:U.sibling=w,U=w);return me&&xr(I,_),j}for(w=r(I,w);_<S.length;_++)E=C(w,I,_,S[_],V),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?_:E.key),v=s(E,v,_),U===null?j=E:U.sibling=E,U=E);return t&&w.forEach(function(R){return e(I,R)}),me&&xr(I,_),j}function k(I,v,S,V){var j=Is(S);if(typeof j!="function")throw Error(F(150));if(S=j.call(S),S==null)throw Error(F(151));for(var U=j=null,w=v,_=v=0,E=null,T=S.next();w!==null&&!T.done;_++,T=S.next()){w.index>_?(E=w,w=null):E=w.sibling;var R=m(I,w,T.value,V);if(R===null){w===null&&(w=E);break}t&&w&&R.alternate===null&&e(I,w),v=s(R,v,_),U===null?j=R:U.sibling=R,U=R,w=E}if(T.done)return n(I,w),me&&xr(I,_),j;if(w===null){for(;!T.done;_++,T=S.next())T=p(I,T.value,V),T!==null&&(v=s(T,v,_),U===null?j=T:U.sibling=T,U=T);return me&&xr(I,_),j}for(w=r(I,w);!T.done;_++,T=S.next())T=C(w,I,_,T.value,V),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?_:T.key),v=s(T,v,_),U===null?j=T:U.sibling=T,U=T);return t&&w.forEach(function(x){return e(I,x)}),me&&xr(I,_),j}function O(I,v,S,V){if(typeof S=="object"&&S!==null&&S.type===mi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case wa:e:{for(var j=S.key,U=v;U!==null;){if(U.key===j){if(j=S.type,j===mi){if(U.tag===7){n(I,U.sibling),v=i(U,S.props.children),v.return=I,I=v;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jn&&Ym(j)===U.type){n(I,U.sibling),v=i(U,S.props),v.ref=Rs(I,U,S),v.return=I,I=v;break e}n(I,U);break}else e(I,U);U=U.sibling}S.type===mi?(v=Fr(S.props.children,I.mode,V,S.key),v.return=I,I=v):(V=el(S.type,S.key,S.props,null,I.mode,V),V.ref=Rs(I,v,S),V.return=I,I=V)}return o(I);case pi:e:{for(U=S.key;v!==null;){if(v.key===U)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=jc(S,I.mode,V),v.return=I,I=v}return o(I);case jn:return U=S._init,O(I,v,U(S._payload),V)}if(Os(S))return P(I,v,S,V);if(Is(S))return k(I,v,S,V);Na(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=Mc(S,I.mode,V),v.return=I,I=v),o(I)):n(I,v)}return O}var Ui=u_(!0),c_=u_(!1),Cl=yr(null),Pl=null,Ii=null,Hd=null;function Kd(){Hd=Ii=Pl=null}function Gd(t){var e=Cl.current;pe(Cl),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ni(t,e){Pl=t,Hd=Ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},Ii===null){if(Pl===null)throw Error(F(308));Ii=t,Pl.dependencies={lanes:0,firstContext:t}}else Ii=Ii.next=t;return e}var Lr=null;function Qd(t){Lr===null?Lr=[t]:Lr.push(t)}function h_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function Ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}function Xm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,C=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,k=l;switch(m=e,C=n,k.tag){case 1:if(P=k.payload,typeof P=="function"){p=P.call(C,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=k.payload,m=typeof P=="function"?P.call(C,p,m):P,m==null)break e;p=_e({},p,m);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else C={eventTime:C,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=C,u=p):d=d.next=C,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=p}}function Jm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var bo={},Yt=yr(bo),po=yr(bo),mo=yr(bo);function br(t){if(t===bo)throw Error(F(174));return t}function Xd(t,e){switch(ce(mo,e),ce(po,t),ce(Yt,bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ah(e,t)}pe(Yt),ce(Yt,e)}function Bi(){pe(Yt),pe(po),pe(mo)}function f_(t){br(mo.current);var e=br(Yt.current),n=ah(e,t.type);e!==n&&(ce(po,t),ce(Yt,n))}function Jd(t){po.current===t&&(pe(Yt),pe(po))}var ye=yr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Zd(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Qa=Nn.ReactCurrentDispatcher,Dc=Nn.ReactCurrentBatchConfig,zr=0,ve=null,xe=null,Le=null,xl=!1,Ks=!1,go=0,wS=0;function Ge(){throw Error(F(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,i,s){if(zr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?SS:AS,t=n(r,i),Ks){s=0;do{if(Ks=!1,go=0,25<=s)throw Error(F(301));s+=1,Le=xe=null,e.updateQueue=null,Qa.current=CS,t=n(r,i)}while(Ks)}if(Qa.current=Nl,e=xe!==null&&xe.next!==null,zr=0,Le=xe=ve=null,xl=!1,e)throw Error(F(300));return t}function nf(){var t=go!==0;return go=0,t}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ve.memoizedState=Le=t:Le=Le.next=t,Le}function Ot(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Le===null?ve.memoizedState:Le.next;if(e!==null)Le=e,xe=t;else{if(t===null)throw Error(F(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?ve.memoizedState=Le=t:Le=Le.next=t}return Le}function yo(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((zr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=d,Wr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function p_(){}function m_(t,e){var n=ve,r=Ot(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,rf(v_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,vo(9,y_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(F(349));zr&30||g_(n,e,i)}return i}function g_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function y_(t,e,n,r){e.value=n,e.getSnapshot=r,__(e)&&w_(t)}function v_(t,e,n){return n(function(){__(e)&&w_(t)})}function __(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function w_(t){var e=Sn(t,1);e!==null&&Bt(e,t,1,-1)}function Zm(t){var e=Ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=IS.bind(null,ve,t),[e.memoizedState,t]}function vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function E_(){return Ot().memoizedState}function Ya(t,e,n,r){var i=Ht();ve.flags|=t,i.memoizedState=vo(1|e,n,void 0,r===void 0?null:r)}function hu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&ef(r,o.deps)){i.memoizedState=vo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=vo(1|e,n,s,r)}function eg(t,e){return Ya(8390656,8,t,e)}function rf(t,e){return hu(2048,8,t,e)}function T_(t,e){return hu(4,2,t,e)}function I_(t,e){return hu(4,4,t,e)}function S_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A_(t,e,n){return n=n!=null?n.concat([t]):null,hu(4,4,S_.bind(null,e,t),n)}function sf(){}function C_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function P_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function R_(t,e,n){return zr&21?($t(n,e)||(n=Ov(),ve.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function ES(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Dc.transition;Dc.transition={};try{t(!1),e()}finally{oe=n,Dc.transition=r}}function k_(){return Ot().memoizedState}function TS(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x_(t))N_(e,n);else if(n=h_(t,e,n,r),n!==null){var i=ot();Bt(n,t,r,i),D_(n,e,r)}}function IS(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x_(t))N_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,Qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=h_(t,e,i,r),n!==null&&(i=ot(),Bt(n,t,r,i),D_(n,e,r))}}function x_(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function N_(t,e){Ks=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}var Nl={readContext:Dt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},SS={readContext:Dt,useCallback:function(t,e){return Ht().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4194308,4,S_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ya(4,2,t,e)},useMemo:function(t,e){var n=Ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Ht();return t={current:t},e.memoizedState=t},useState:Zm,useDebugValue:sf,useDeferredValue:function(t){return Ht().memoizedState=t},useTransition:function(){var t=Zm(!1),e=t[0];return t=ES.bind(null,t[1]),Ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Ht();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),be===null)throw Error(F(349));zr&30||g_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,eg(v_.bind(null,r,s,t),[t]),r.flags|=2048,vo(9,y_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ht(),e=be.identifierPrefix;if(me){var n=pn,r=fn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AS={readContext:Dt,useCallback:C_,useContext:Dt,useEffect:rf,useImperativeHandle:A_,useInsertionEffect:T_,useLayoutEffect:I_,useMemo:P_,useReducer:Oc,useRef:E_,useState:function(){return Oc(yo)},useDebugValue:sf,useDeferredValue:function(t){var e=Ot();return R_(e,xe.memoizedState,t)},useTransition:function(){var t=Oc(yo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:k_,unstable_isNewReconciler:!1},CS={readContext:Dt,useCallback:C_,useContext:Dt,useEffect:rf,useImperativeHandle:A_,useInsertionEffect:T_,useLayoutEffect:I_,useMemo:P_,useReducer:Vc,useRef:E_,useState:function(){return Vc(yo)},useDebugValue:sf,useDeferredValue:function(t){var e=Ot();return xe===null?e.memoizedState=t:R_(e,xe.memoizedState,t)},useTransition:function(){var t=Vc(yo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:p_,useSyncExternalStore:m_,useId:k_,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=rr(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Bt(e,t,i,r),Ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=rr(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(Bt(e,t,i,r),Ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=rr(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(Bt(e,t,r,n),Ga(e,t,r))}};function tg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,r)||!uo(i,s):!0}function O_(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=pt(e)?Br:et.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ng(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function kh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=pt(e)?Br:et.current,i.context=ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&du.enqueueReplaceState(i,i.state,null),Rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $i(t,e){try{var n="",r=e;do n+=eI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PS=typeof WeakMap=="function"?WeakMap:Map;function V_(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,Uh=r),xh(t,e)},n}function L_(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xh(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=BS.bind(null,t,e,n),e.then(t,t))}function ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var RS=Nn.ReactCurrentOwner,ht=!1;function st(t,e,n,r){e.child=t===null?c_(e,null,n,r):Ui(e,t.child,n,r)}function og(t,e,n,r,i){n=n.render;var s=e.ref;return Ni(e,i),r=tf(t,e,n,r,s,i),n=nf(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(me&&n&&zd(e),e.flags|=1,st(t,e,r,i),e.child)}function ag(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b_(t,e,s,r,i)):(t=el(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function b_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(uo(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,An(t,e,i)}return Nh(t,e,n,r,i)}function M_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ai,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ai,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ai,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ai,yt),yt|=r;return st(t,e,i,n),e.child}function j_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nh(t,e,n,r,i){var s=pt(n)?Br:et.current;return s=ji(e,s),Ni(e,i),n=tf(t,e,n,r,s,i),r=nf(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(me&&r&&zd(e),e.flags|=1,st(t,e,n,i),e.child)}function lg(t,e,n,r,i){if(pt(n)){var s=!0;Il(e)}else s=!1;if(Ni(e,i),e.stateNode===null)Xa(t,e),O_(e,n,r),kh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=pt(n)?Br:et.current,c=ji(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&ng(e,o,r,c),Fn=!1;var m=e.memoizedState;o.state=m,Rl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||ft.current||Fn?(typeof d=="function"&&(Rh(e,n,d,r),u=e.memoizedState),(l=Fn||tg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,d_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=pt(n)?Br:et.current,u=ji(e,u));var C=n.getDerivedStateFromProps;(d=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&ng(e,o,r,u),Fn=!1,m=e.memoizedState,o.state=m,Rl(e,r,o,i);var P=e.memoizedState;l!==p||m!==P||ft.current||Fn?(typeof C=="function"&&(Rh(e,n,C,r),P=e.memoizedState),(c=Fn||tg(e,n,c,r,m,P,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Dh(t,e,n,r,s,i)}function Dh(t,e,n,r,i,s){j_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Km(e,n,!1),An(t,e,s);r=e.stateNode,RS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,s),e.child=Ui(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Km(e,n,!0),e.child}function F_(t){var e=t.stateNode;e.pendingContext?Hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hm(t,e.context,!1),Xd(t,e.containerInfo)}function ug(t,e,n,r,i){return Fi(),qd(i),e.flags|=256,st(t,e,n,r),e.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function Vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function U_(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vh(n),e.memoizedState=Oh,t):of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return kS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ir(l,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oh,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,r){return r!==null&&qd(r),Ui(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lc(Error(F(422))),Da(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mu({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ui(e,t.child,null,o),e.child.memoizedState=Vh(o),e.memoizedState=Oh,s);if(!(e.mode&1))return Da(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Lc(s,r,void 0),Da(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),Bt(r,t,i,-1))}return df(),r=Lc(Error(F(421))),Da(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$S.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=er(i.nextSibling),Et=e,me=!0,Ft=null,t!==null&&(Pt[Rt++]=fn,Pt[Rt++]=pn,Pt[Rt++]=$r,fn=t.id,pn=t.overflow,$r=e),e=of(e,r.children),e.flags|=4096,e)}function cg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function bc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function B_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cg(t,n,e);else if(t.tag===19)cg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xS(t,e,n){switch(e.tag){case 3:F_(e),Fi();break;case 5:f_(e);break;case 1:pt(e.type)&&Il(e);break;case 4:Xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?U_(t,e,n):(ce(ye,ye.current&1),t=An(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return B_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,M_(t,e,n)}return An(t,e,n)}var $_,Lh,z_,W_;$_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lh=function(){};z_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(Yt.current);var s=null;switch(n){case"input":i=rh(t,i),r=rh(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=oh(t,i),r=oh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}lh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(no.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(no.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};W_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ks(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NS(t,e,n){var r=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return pt(e.type)&&Tl(),Qe(e),null;case 3:return r=e.stateNode,Bi(),pe(ft),pe(et),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(zh(Ft),Ft=null))),Lh(t,e),Qe(e),null;case 5:Jd(e);var i=br(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)z_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Qe(e),null}if(t=br(Yt.current),xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[fo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Ls.length;i++)de(Ls[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":_m(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Em(r,s),de("invalid",r)}lh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ka(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ka(r.textContent,l,t),i=["children",""+l]):no.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ea(r),wm(r,s,!0);break;case"textarea":Ea(r),Tm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=El)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[fo]=r,$_(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ls.length;i++)de(Ls[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":_m(t,r),i=rh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),de("invalid",t);break;case"textarea":Em(t,r),i=oh(t,r),de("invalid",t);break;default:i=r}lh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ev(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_v(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ro(t,u):typeof u=="number"&&ro(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&kd(t,s,u,o))}switch(n){case"input":Ea(t),wm(t,r,!1);break;case"textarea":Ea(t),Tm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)W_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=br(mo.current),br(Yt.current),xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:ka(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&vt!==null&&e.mode&1&&!(e.flags&128))l_(),Fi(),e.flags|=98560,s=!1;else if(s=xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Kt]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Ft!==null&&(zh(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ne===0&&(Ne=3):df())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Bi(),Lh(t,e),t===null&&co(e.stateNode.containerInfo),Qe(e),null;case 10:return Gd(e.type._context),Qe(e),null;case 17:return pt(e.type)&&Tl(),Qe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ks(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>zi&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Qe(e),null}else 2*Ce()-s.renderingStartTime>zi&&n!==1073741824&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function DS(t,e){switch(Wd(e),e.tag){case 1:return pt(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bi(),pe(ft),pe(et),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Bi(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Oa=!1,Je=!1,OS=typeof WeakSet=="function"?WeakSet:Set,W=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function bh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var hg=!1;function VS(t,e){if(_h=vl,t=Qv(),$d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var C;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(C=p.firstChild)!==null;)m=p,p=C;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(C=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},vl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var k=P.memoizedProps,O=P.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:Mt(e.type,k),O);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Te(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return P=hg,hg=!1,P}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bh(e,n,s)}i=i.next}while(i!==r)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function q_(t){var e=t.alternate;e!==null&&(t.alternate=null,q_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[fo],delete e[Ih],delete e[gS],delete e[yS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H_(t){return t.tag===5||t.tag===3||t.tag===4}function dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}var je=null,jt=!1;function bn(t,e,n){for(n=n.child;n!==null;)K_(t,e,n),n=n.sibling}function K_(t,e,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:Je||Si(n,e);case 6:var r=je,i=jt;je=null,bn(t,e,n),je=r,jt=i,je!==null&&(jt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(jt?(t=je,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),ao(t)):kc(je,n.stateNode));break;case 4:r=je,i=jt,je=n.stateNode.containerInfo,jt=!0,bn(t,e,n),je=r,jt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bh(n,e,o),i=i.next}while(i!==r)}bn(t,e,n);break;case 1:if(!Je&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}bn(t,e,n);break;case 21:bn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,bn(t,e,n),Je=r):bn(t,e,n);break;default:bn(t,e,n)}}function fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OS),e.forEach(function(r){var i=zS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,jt=!1;break e;case 3:je=l.stateNode.containerInfo,jt=!0;break e;case 4:je=l.stateNode.containerInfo,jt=!0;break e}l=l.return}if(je===null)throw Error(F(160));K_(s,o,i),je=null,jt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G_(e,t),e=e.sibling}function G_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),qt(t),r&4){try{Gs(3,t,t.return),fu(3,t)}catch(k){Te(t,t.return,k)}try{Gs(5,t,t.return)}catch(k){Te(t,t.return,k)}}break;case 1:bt(e,t),qt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(bt(e,t),qt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{ro(i,"")}catch(k){Te(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&gv(i,s),uh(l,o);var c=uh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Ev(i,p):d==="dangerouslySetInnerHTML"?_v(i,p):d==="children"?ro(i,p):kd(i,d,p,c)}switch(l){case"input":ih(i,s);break;case"textarea":yv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Pi(i,!!s.multiple,C,!1):m!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[fo]=s}catch(k){Te(t,t.return,k)}}break;case 6:if(bt(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Te(t,t.return,k)}}break;case 3:if(bt(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(k){Te(t,t.return,k)}break;case 4:bt(e,t),qt(t);break;case 13:bt(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uf=Ce())),r&4&&fg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(c=Je)||d,bt(e,t),Je=c):bt(e,t),qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,C=m.child,m.tag){case 0:case 11:case 14:case 15:Gs(4,m,m.return);break;case 1:Si(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(k){Te(r,n,k)}}break;case 5:Si(m,m.return);break;case 22:if(m.memoizedState!==null){mg(p);continue}}C!==null?(C.return=m,W=C):mg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=wv("display",o))}catch(k){Te(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Te(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(e,t),qt(t),r&4&&fg(t);break;case 21:break;default:bt(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ro(i,""),r.flags&=-33);var s=dg(t);Fh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=dg(t);jh(t,l,o);break;default:throw Error(F(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){W=t,Q_(t)}function Q_(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Oa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=Oa;var c=Je;if(Oa=o,(Je=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?gg(i):u!==null?(u.return=o,W=u):gg(i);for(;s!==null;)W=s,Q_(s),s=s.sibling;W=i,Oa=l,Je=c}pg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):pg(t)}}function pg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Je||e.flags&512&&Mh(e)}catch(m){Te(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function mg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function gg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Mh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Mh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var bS=Math.ceil,Dl=Nn.ReactCurrentDispatcher,af=Nn.ReactCurrentOwner,xt=Nn.ReactCurrentBatchConfig,re=0,be=null,Re=null,Be=0,yt=0,Ai=yr(0),Ne=0,_o=null,Wr=0,pu=0,lf=0,Qs=null,ut=null,uf=0,zi=1/0,hn=null,Ol=!1,Uh=null,nr=null,Va=!1,Gn=null,Vl=0,Ys=0,Bh=null,Ja=-1,Za=0;function ot(){return re&6?Ce():Ja!==-1?Ja:Ja=Ce()}function rr(t){return t.mode&1?re&2&&Be!==0?Be&-Be:_S.transition!==null?(Za===0&&(Za=Ov()),Za):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Uv(t.type)),t):1}function Bt(t,e,n,r){if(50<Ys)throw Ys=0,Bh=null,Error(F(185));Oo(t,n,r),(!(re&2)||t!==be)&&(t===be&&(!(re&2)&&(pu|=n),Ne===4&&Bn(t,Be)),mt(t,r),n===1&&re===0&&!(e.mode&1)&&(zi=Ce()+500,cu&&vr()))}function mt(t,e){var n=t.callbackNode;_I(t,e);var r=yl(t,t===be?Be:0);if(r===0)n!==null&&Am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Am(n),e===1)t.tag===0?vS(yg.bind(null,t)):s_(yg.bind(null,t)),pS(function(){!(re&6)&&vr()}),n=null;else{switch(Vv(r)){case 1:n=Vd;break;case 4:n=Nv;break;case 16:n=gl;break;case 536870912:n=Dv;break;default:n=gl}n=r0(n,Y_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Y_(t,e){if(Ja=-1,Za=0,re&6)throw Error(F(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=yl(t,t===be?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ll(t,r);else{e=r;var i=re;re|=2;var s=J_();(be!==t||Be!==e)&&(hn=null,zi=Ce()+500,jr(t,e));do try{FS();break}catch(l){X_(t,l)}while(!0);Kd(),Dl.current=s,re=i,Re!==null?e=0:(be=null,Be=0,e=Ne)}if(e!==0){if(e===2&&(i=ph(t),i!==0&&(r=i,e=$h(t,i))),e===1)throw n=_o,jr(t,0),Bn(t,r),mt(t,Ce()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!MS(i)&&(e=Ll(t,r),e===2&&(s=ph(t),s!==0&&(r=s,e=$h(t,s))),e===1))throw n=_o,jr(t,0),Bn(t,r),mt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Nr(t,ut,hn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=uf+500-Ce(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Th(Nr.bind(null,t,ut,hn),e);break}Nr(t,ut,hn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bS(r/1960))-r,10<r){t.timeoutHandle=Th(Nr.bind(null,t,ut,hn),r);break}Nr(t,ut,hn);break;case 5:Nr(t,ut,hn);break;default:throw Error(F(329))}}}return mt(t,Ce()),t.callbackNode===n?Y_.bind(null,t):null}function $h(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=ut,ut=n,e!==null&&zh(e)),t}function zh(t){ut===null?ut=t:ut.push.apply(ut,t)}function MS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~lf,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function yg(t){if(re&6)throw Error(F(327));Di();var e=yl(t,0);if(!(e&1))return mt(t,Ce()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var r=ph(t);r!==0&&(e=r,n=$h(t,r))}if(n===1)throw n=_o,jr(t,0),Bn(t,e),mt(t,Ce()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,ut,hn),mt(t,Ce()),null}function cf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(zi=Ce()+500,cu&&vr())}}function qr(t){Gn!==null&&Gn.tag===0&&!(re&6)&&Di();var e=re;re|=1;var n=xt.transition,r=oe;try{if(xt.transition=null,oe=1,t)return t()}finally{oe=r,xt.transition=n,re=e,!(re&6)&&vr()}}function hf(){yt=Ai.current,pe(Ai)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fS(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Wd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tl();break;case 3:Bi(),pe(ft),pe(et),Zd();break;case 5:Jd(r);break;case 4:Bi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Gd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(be=t,Re=t=ir(t.current,null),Be=yt=e,Ne=0,_o=null,lf=pu=Wr=0,ut=Qs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function X_(t,e){do{var n=Re;try{if(Kd(),Qa.current=Nl,xl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(zr=0,Le=xe=ve=null,Ks=!1,go=0,af.current=null,n===null||n.return===null){Ne=1,_o=e,Re=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var C=ig(o);if(C!==null){C.flags&=-257,sg(C,o,l,s,e),C.mode&1&&rg(s,c,e),e=C,u=c;var P=e.updateQueue;if(P===null){var k=new Set;k.add(u),e.updateQueue=k}else P.add(u);break e}else{if(!(e&1)){rg(s,c,e),df();break e}u=Error(F(426))}}else if(me&&l.mode&1){var O=ig(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),sg(O,o,l,s,e),qd($i(u,l));break e}}s=u=$i(u,l),Ne!==4&&(Ne=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=V_(s,u,e);Xm(s,I);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(nr===null||!nr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=L_(s,l,e);Xm(s,V);break e}}s=s.return}while(s!==null)}e0(n)}catch(j){e=j,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function J_(){var t=Dl.current;return Dl.current=Nl,t===null?Nl:t}function df(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),be===null||!(Wr&268435455)&&!(pu&268435455)||Bn(be,Be)}function Ll(t,e){var n=re;re|=2;var r=J_();(be!==t||Be!==e)&&(hn=null,jr(t,e));do try{jS();break}catch(i){X_(t,i)}while(!0);if(Kd(),re=n,Dl.current=r,Re!==null)throw Error(F(261));return be=null,Be=0,Ne}function jS(){for(;Re!==null;)Z_(Re)}function FS(){for(;Re!==null&&!cI();)Z_(Re)}function Z_(t){var e=n0(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?e0(t):Re=e,af.current=null}function e0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DS(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Re=null;return}}else if(n=NS(n,e,yt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Ne===0&&(Ne=5)}function Nr(t,e,n){var r=oe,i=xt.transition;try{xt.transition=null,oe=1,US(t,e,n,r)}finally{xt.transition=i,oe=r}return null}function US(t,e,n,r){do Di();while(Gn!==null);if(re&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wI(t,s),t===be&&(Re=be=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,r0(gl,function(){return Di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=oe;oe=1;var l=re;re|=4,af.current=null,VS(t,n),G_(n,t),oS(wh),vl=!!_h,wh=_h=null,t.current=n,LS(n),hI(),re=l,oe=o,xt.transition=s}else t.current=n;if(Va&&(Va=!1,Gn=t,Vl=i),s=t.pendingLanes,s===0&&(nr=null),pI(n.stateNode),mt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=Uh,Uh=null,t;return Vl&1&&t.tag!==0&&Di(),s=t.pendingLanes,s&1?t===Bh?Ys++:(Ys=0,Bh=t):Ys=0,vr(),null}function Di(){if(Gn!==null){var t=Vv(Vl),e=xt.transition,n=oe;try{if(xt.transition=null,oe=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,Vl=0,re&6)throw Error(F(331));var i=re;for(re|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Gs(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,C=d.return;if(q_(d),d===c){W=null;break}if(m!==null){m.return=C,W=m;break}W=C}}}var P=s.alternate;if(P!==null){var k=P.child;if(k!==null){P.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,W=I;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fu(9,l)}}catch(j){Te(l,l.return,j)}if(l===o){W=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,W=V;break e}W=l.return}}if(re=i,vr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{oe=n,xt.transition=e}}return!1}function vg(t,e,n){e=$i(n,e),e=V_(t,e,1),t=tr(t,e,1),e=ot(),t!==null&&(Oo(t,1,e),mt(t,e))}function Te(t,e,n){if(t.tag===3)vg(t,t,n);else for(;e!==null;){if(e.tag===3){vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=$i(n,t),t=L_(e,t,1),e=tr(e,t,1),t=ot(),e!==null&&(Oo(e,1,t),mt(e,t));break}}e=e.return}}function BS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(Be&n)===n&&(Ne===4||Ne===3&&(Be&130023424)===Be&&500>Ce()-uf?jr(t,0):lf|=n),mt(t,e)}function t0(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=ot();t=Sn(t,e),t!==null&&(Oo(t,e,n),mt(t,n))}function $S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),t0(t,n)}function zS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),t0(t,n)}var n0;n0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,xS(t,e,n);ht=!!(t.flags&131072)}else ht=!1,me&&e.flags&1048576&&o_(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xa(t,e),t=e.pendingProps;var i=ji(e,et.current);Ni(e,n),i=tf(null,e,r,t,i,n);var s=nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yd(e),i.updater=du,e.stateNode=i,i._reactInternals=e,kh(e,r,t,n),e=Dh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&zd(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qS(r),t=Mt(r,t),i){case 0:e=Nh(null,e,r,t,n);break e;case 1:e=lg(null,e,r,t,n);break e;case 11:e=og(null,e,r,t,n);break e;case 14:e=ag(null,e,r,Mt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Nh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),lg(t,e,r,i,n);case 3:e:{if(F_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,d_(t,e),Rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$i(Error(F(423)),e),e=ug(t,e,r,n,i);break e}else if(r!==i){i=$i(Error(F(424)),e),e=ug(t,e,r,n,i);break e}else for(vt=er(e.stateNode.containerInfo.firstChild),Et=e,me=!0,Ft=null,n=c_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){e=An(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return f_(e),t===null&&Ch(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Eh(r,i)?o=null:s!==null&&Eh(r,s)&&(e.flags|=32),j_(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return U_(t,e,n);case 4:return Xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ui(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),og(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Cl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ft.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=_n(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ph(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ni(e,n),i=Dt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),ag(t,e,r,i,n);case 15:return b_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Xa(t,e),e.tag=1,pt(r)?(t=!0,Il(e)):t=!1,Ni(e,n),O_(e,r,i),kh(e,r,i,n),Dh(null,e,r,!0,t,n);case 19:return B_(t,e,n);case 22:return M_(t,e,n)}throw Error(F(156,e.tag))};function r0(t,e){return xv(t,e)}function WS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new WS(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qS(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===Dd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mi:return Fr(n.children,i,s,e);case xd:o=8,i|=8;break;case Zc:return t=kt(12,n,e,i|2),t.elementType=Zc,t.lanes=s,t;case eh:return t=kt(13,n,e,i),t.elementType=eh,t.lanes=s,t;case th:return t=kt(19,n,e,i),t.elementType=th,t.lanes=s,t;case fv:return mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hv:o=10;break e;case dv:o=9;break e;case Nd:o=11;break e;case Dd:o=14;break e;case jn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function mu(t,e,n,r){return t=kt(22,t,r,e),t.elementType=fv,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,i,s,o,l,u){return t=new HS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function KS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function i0(t){if(!t)return dr;t=t._reactInternals;e:{if(ei(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(pt(n))return i_(t,n,e)}return e}function s0(t,e,n,r,i,s,o,l,u){return t=pf(n,r,!0,t,i,s,o,l,u),t.context=i0(null),n=t.current,r=ot(),i=rr(n),s=_n(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,Oo(t,i,r),mt(t,r),t}function gu(t,e,n,r){var i=e.current,s=ot(),o=rr(i);return n=i0(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(Bt(t,i,o,s),Ga(t,i,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){_g(t,e),(t=t.alternate)&&_g(t,e)}function GS(){return null}var o0=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}yu.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));gu(t,e,null,null)};yu.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){gu(null,t,null,null)}),e[In]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&Fv(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wg(){}function QS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bl(o);s.call(c)}}var o=s0(e,r,t,0,null,!1,!1,"",wg);return t._reactRootContainer=o,t[In]=o.current,co(t.nodeType===8?t.parentNode:t),qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=bl(u);l.call(c)}}var u=pf(t,0,!1,null,null,!1,!1,"",wg);return t._reactRootContainer=u,t[In]=u.current,co(t.nodeType===8?t.parentNode:t),qr(function(){gu(e,u,n,r)}),u}function _u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=bl(o);l.call(u)}}gu(e,o,t,i)}else o=QS(n,e,t,i,r);return bl(o)}Lv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(Ld(e,n|1),mt(e,Ce()),!(re&6)&&(zi=Ce()+500,vr()))}break;case 13:qr(function(){var r=Sn(t,1);if(r!==null){var i=ot();Bt(r,t,1,i)}}),mf(t,1)}};bd=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=ot();Bt(e,t,134217728,n)}mf(t,134217728)}};bv=function(t){if(t.tag===13){var e=rr(t),n=Sn(t,e);if(n!==null){var r=ot();Bt(n,t,e,r)}mf(t,e)}};Mv=function(){return oe};jv=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};hh=function(t,e,n){switch(e){case"input":if(ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uu(r);if(!i)throw Error(F(90));mv(r),ih(r,i)}}}break;case"textarea":yv(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};Sv=cf;Av=qr;var YS={usingClientEntryPoint:!1,Events:[Lo,_i,uu,Tv,Iv,cf]},xs={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XS={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rv(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||GS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{su=La.inject(XS),Qt=La}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(F(200));return KS(t,e,null,n)};St.createRoot=function(t,e){if(!yf(t))throw Error(F(299));var n=!1,r="",i=o0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,co(t.nodeType===8?t.parentNode:t),new gf(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Rv(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return qr(t)};St.hydrate=function(t,e,n){if(!vu(e))throw Error(F(200));return _u(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=o0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=s0(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};St.render=function(t,e,n){if(!vu(e))throw Error(F(200));return _u(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!vu(t))throw Error(F(40));return t._reactRootContainer?(qr(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};St.unstable_batchedUpdates=cf;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return _u(t,e,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function a0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a0)}catch(t){console.error(t)}}a0(),av.exports=St;var JS=av.exports,l0,Eg=JS;l0=Eg.createRoot,Eg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wo.apply(this,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Tg="popstate";function ZS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Wh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ml(i)}return t1(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function e1(){return Math.random().toString(36).substr(2,8)}function Ig(t,e){return{usr:t.state,key:t.key,idx:e}}function Wh(t,e,n,r){return n===void 0&&(n=null),wo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ns(e):e,{state:n,key:e&&e.key||r||e1()})}function Ml(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ns(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function t1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Qn.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(wo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=Qn.Pop;let O=d(),I=O==null?null:O-c;c=O,u&&u({action:l,location:k.location,delta:I})}function m(O,I){l=Qn.Push;let v=Wh(k.location,O,I);c=d()+1;let S=Ig(v,c),V=k.createHref(v);try{o.pushState(S,"",V)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function C(O,I){l=Qn.Replace;let v=Wh(k.location,O,I);c=d();let S=Ig(v,c),V=k.createHref(v);o.replaceState(S,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function P(O){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof O=="string"?O:Ml(O);return v=v.replace(/ $/,"%20"),Ie(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let k={get action(){return l},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Tg,p),u=O,()=>{i.removeEventListener(Tg,p),u=null}},createHref(O){return e(i,O)},createURL:P,encodeLocation(O){let I=P(O);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:C,go(O){return o.go(O)}};return k}var Sg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Sg||(Sg={}));function n1(t,e,n){return n===void 0&&(n="/"),r1(t,e,n)}function r1(t,e,n,r){let i=typeof e=="string"?ns(e):e,s=Wi(i.pathname||"/",n);if(s==null)return null;let o=u0(t);i1(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=m1(s);l=f1(o[u],c)}return l}function u0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=sr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),u0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:h1(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of c0(s.path))i(s,o,u)}),e}function c0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=c0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function i1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:d1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const s1=/^:[\w-]+$/,o1=3,a1=2,l1=1,u1=10,c1=-2,Ag=t=>t==="*";function h1(t,e){let n=t.split("/"),r=n.length;return n.some(Ag)&&(r+=c1),e&&(r+=a1),n.filter(i=>!Ag(i)).reduce((i,s)=>i+(s1.test(s)?o1:s===""?l1:u1),r)}function d1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function f1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=qh({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:sr([s,p.pathname]),pathnameBase:w1(sr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=sr([s,p.pathnameBase]))}return o}function qh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=p1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:C}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const P=l[p];return C&&!P?c[m]=void 0:c[m]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function p1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function m1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const g1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,y1=t=>g1.test(t);function v1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ns(t):t,s;if(n)if(y1(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),vf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Cg(n.substring(1),"/"):s=Cg(n,e)}else s=e;return{pathname:s,search:E1(r),hash:T1(i)}}function Cg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function h0(t,e){let n=_1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function d0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ns(t):(i=wo({},t),Ie(!i.pathname||!i.pathname.includes("?"),Fc("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),Fc("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),Fc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=v1(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const sr=t=>t.join("/").replace(/\/\/+/g,"/"),w1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),E1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,T1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function I1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const f0=["post","put","patch","delete"];new Set(f0);const S1=["get",...f0];new Set(S1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eo.apply(this,arguments)}const wu=D.createContext(null),p0=D.createContext(null),_r=D.createContext(null),Eu=D.createContext(null),wr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),m0=D.createContext(null);function A1(t,e){let{relative:n}=e===void 0?{}:e;Mo()||Ie(!1);let{basename:r,navigator:i}=D.useContext(_r),{hash:s,pathname:o,search:l}=Tu(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:sr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Mo(){return D.useContext(Eu)!=null}function jo(){return Mo()||Ie(!1),D.useContext(Eu).location}function g0(t){D.useContext(_r).static||D.useLayoutEffect(t)}function _f(){let{isDataRoute:t}=D.useContext(wr);return t?F1():C1()}function C1(){Mo()||Ie(!1);let t=D.useContext(wu),{basename:e,future:n,navigator:r}=D.useContext(_r),{matches:i}=D.useContext(wr),{pathname:s}=jo(),o=JSON.stringify(h0(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return g0(()=>{l.current=!0}),D.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=d0(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:sr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function P1(){let{matches:t}=D.useContext(wr),e=t[t.length-1];return e?e.params:{}}function Tu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(_r),{matches:i}=D.useContext(wr),{pathname:s}=jo(),o=JSON.stringify(h0(i,r.v7_relativeSplatPath));return D.useMemo(()=>d0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function R1(t,e){return k1(t,e)}function k1(t,e,n,r){Mo()||Ie(!1);let{navigator:i}=D.useContext(_r),{matches:s}=D.useContext(wr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=jo(),d;if(e){var p;let O=typeof e=="string"?ns(e):e;u==="/"||(p=O.pathname)!=null&&p.startsWith(u)||Ie(!1),d=O}else d=c;let m=d.pathname||"/",C=m;if(u!=="/"){let O=u.replace(/^\//,"").split("/");C="/"+m.replace(/^\//,"").split("/").slice(O.length).join("/")}let P=n1(t,{pathname:C}),k=V1(P&&P.map(O=>Object.assign({},O,{params:Object.assign({},l,O.params),pathname:sr([u,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?u:sr([u,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,n,r);return e&&k?D.createElement(Eu.Provider,{value:{location:Eo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qn.Pop}},k):k}function x1(){let t=j1(),e=I1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const N1=D.createElement(x1,null);class D1 extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(wr.Provider,{value:this.props.routeContext},D.createElement(m0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O1(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(wu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(wr.Provider,{value:e},r)}function V1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ie(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:C}=n,P=p.route.loader&&m[p.route.id]===void 0&&(!C||C[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let C,P=!1,k=null,O=null;n&&(C=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||N1,u&&(c<0&&m===0?(U1("route-fallback"),P=!0,O=null):c===m&&(P=!0,O=p.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),v=()=>{let S;return C?S=k:P?S=O:p.route.Component?S=D.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=d,D.createElement(O1,{match:p,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?D.createElement(D1,{location:n.location,revalidation:n.revalidation,component:k,error:C,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var y0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(y0||{}),v0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(v0||{});function L1(t){let e=D.useContext(wu);return e||Ie(!1),e}function b1(t){let e=D.useContext(p0);return e||Ie(!1),e}function M1(t){let e=D.useContext(wr);return e||Ie(!1),e}function _0(t){let e=M1(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function j1(){var t;let e=D.useContext(m0),n=b1(),r=_0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function F1(){let{router:t}=L1(y0.UseNavigateStable),e=_0(v0.UseNavigateStable),n=D.useRef(!1);return g0(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Eo({fromRouteId:e},s)))},[t,e])}const Pg={};function U1(t,e,n){Pg[t]||(Pg[t]=!0)}function B1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Dr(t){Ie(!1)}function $1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1,future:l}=t;Mo()&&Ie(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:Eo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ns(r));let{pathname:d="/",search:p="",hash:m="",state:C=null,key:P="default"}=r,k=D.useMemo(()=>{let O=Wi(d,u);return O==null?null:{location:{pathname:O,search:p,hash:m,state:C,key:P},navigationType:i}},[u,d,p,m,C,P,i]);return k==null?null:D.createElement(_r.Provider,{value:c},D.createElement(Eu.Provider,{children:n,value:k}))}function z1(t){let{children:e,location:n}=t;return R1(Hh(e),n)}new Promise(()=>{});function Hh(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Hh(r.props.children,s));return}r.type!==Dr&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Hh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(this,arguments)}function w0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function W1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function q1(t,e){return t.button===0&&(!e||e==="_self")&&!W1(t)}const H1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],K1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],G1="6";try{window.__reactRouterVersion=G1}catch{}const Q1=D.createContext({isTransitioning:!1}),Y1="startTransition",Rg=BT[Y1];function X1(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=ZS({window:i,v5Compat:!0}));let o=s.current,[l,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=D.useCallback(p=>{c&&Rg?Rg(()=>u(p)):u(p)},[u,c]);return D.useLayoutEffect(()=>o.listen(d),[o,d]),D.useEffect(()=>B1(r),[r]),D.createElement($1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const J1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=w0(e,H1),{basename:C}=D.useContext(_r),P,k=!1;if(typeof c=="string"&&Z1.test(c)&&(P=c,J1))try{let S=new URL(window.location.href),V=c.startsWith("//")?new URL(S.protocol+c):new URL(c),j=Wi(V.pathname,C);V.origin===S.origin&&j!=null?c=j+V.search+V.hash:k=!0}catch{}let O=A1(c,{relative:i}),I=nA(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function v(S){r&&r(S),S.defaultPrevented||I(S)}return D.createElement("a",jl({},m,{href:P||O,onClick:k||s?r:v,ref:n,target:u}))}),eA=D.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,p=w0(e,K1),m=Tu(u,{relative:p.relative}),C=jo(),P=D.useContext(p0),{navigator:k,basename:O}=D.useContext(_r),I=P!=null&&rA(m)&&c===!0,v=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,S=C.pathname,V=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;i||(S=S.toLowerCase(),V=V?V.toLowerCase():null,v=v.toLowerCase()),V&&O&&(V=Wi(V,O)||V);const j=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let U=S===v||!o&&S.startsWith(v)&&S.charAt(j)==="/",w=V!=null&&(V===v||!o&&V.startsWith(v)&&V.charAt(v.length)==="/"),_={isActive:U,isPending:w,isTransitioning:I},E=U?r:void 0,T;typeof s=="function"?T=s(_):T=[s,U?"active":null,w?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(_):l;return D.createElement(dt,jl({},p,{"aria-current":E,className:T,ref:n,style:R,to:u,viewTransition:c}),typeof d=="function"?d(_):d)});var Kh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Kh||(Kh={}));var kg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kg||(kg={}));function tA(t){let e=D.useContext(wu);return e||Ie(!1),e}function nA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=_f(),c=jo(),d=Tu(t,{relative:o});return D.useCallback(p=>{if(q1(p,n)){p.preventDefault();let m=r!==void 0?r:Ml(c)===Ml(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function rA(t,e){e===void 0&&(e={});let n=D.useContext(Q1);n==null&&Ie(!1);let{basename:r}=tA(Kh.useViewTransitionState),i=Tu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Wi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Wi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return qh(i.pathname,o)!=null||qh(i.pathname,s)!=null}const iA=({children:t})=>y.jsx("div",{className:"Layout",children:t});var E0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xg=vn.createContext&&vn.createContext(E0),sA=["attr","size","title"];function oA(t,e){if(t==null)return{};var n,r,i=aA(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function aA(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function Fl(){return Fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fl.apply(null,arguments)}function Ng(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ul(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ng(Object(n),!0).forEach(function(r){lA(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ng(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lA(t,e,n){return(e=uA(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function uA(t){var e=cA(t,"string");return typeof e=="symbol"?e:e+""}function cA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function T0(t){return t&&t.map((e,n)=>vn.createElement(e.tag,Ul({key:n},e.attr),T0(e.child)))}function rs(t){return e=>vn.createElement(hA,Fl({attr:Ul({},t.attr)},e),T0(t.child))}function hA(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=oA(t,sA),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),vn.createElement("svg",Fl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Ul(Ul({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&vn.createElement("title",null,s),t.children)};return xg!==void 0?vn.createElement(xg.Consumer,null,n=>e(n)):e(E0)}function dA(t){return rs({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"},child:[]},{tag:"path",attr:{d:"M9 10h2v8H9zm4 0h2v8h-2z"},child:[]}]})(t)}function fA(t){return rs({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"},child:[]}]})(t)}function wf(t){return rs({attr:{viewBox:"0 0 24 24"},child:[{tag:"circle",attr:{cx:"12",cy:"20",r:"2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"4",r:"2"},child:[]},{tag:"circle",attr:{cx:"6.343",cy:"17.657",r:"2"},child:[]},{tag:"circle",attr:{cx:"17.657",cy:"6.343",r:"2"},child:[]},{tag:"circle",attr:{cx:"4",cy:"12",r:"2.001"},child:[]},{tag:"circle",attr:{cx:"20",cy:"12",r:"2"},child:[]},{tag:"circle",attr:{cx:"6.343",cy:"6.344",r:"2"},child:[]},{tag:"circle",attr:{cx:"17.657",cy:"17.658",r:"2"},child:[]}]})(t)}function pA(t){return rs({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"},child:[]},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"},child:[]},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"},child:[]}]})(t)}const Er=D.createContext([]),mA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADYSURBVHgBhZKxDYMwEEVtLCEBC1BkBmAHqjSRmIBV2IgJkOiomSBNVsAuXDj+KE6I8ZmTQOD/39n3Zb4sy4PZyvN8qut6Y0QZY9i6roVSqsV/ghfnvJBSthCuIHh3EDtZYaNgH4I3y7KJQ4QAyAnu2BTUNM3GXecQDDAE7eMdj+XDbn4fOoE+/JnxBH1TPQaBxy/bhA3D8LcmYunZZY1vrfWtqqpXWZZ6nucfSKWXpukTUAgWschhgjkEi67rCipydKZg0ff9nYo8BiexyF0h0XEc3aWAx7wB6rUN457wE74AAAAASUVORK5CYII=",gA=t=>{const{producto:e,indexValue:n}=t,{removeFromCart:r}=D.useContext(Er),i=s=>{r(s)};return y.jsxs("div",{className:"OrderItem",children:[y.jsx("figure",{children:y.jsx("img",{src:e.imagen,alt:e.nombre})}),y.jsx("p",{children:e.nombre}),y.jsx("p",{children:e.cantidad}),y.jsxs("p",{children:["$",e.precio]}),y.jsx("img",{src:mA,alt:"close",onClick:()=>i(n)})]})},yA="data:image/svg+xml,%3csvg%20width='7'%20height='12'%20viewBox='0%200%207%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.99864%205.94724C5.99234%205.84603%205.95236%205.74983%205.88506%205.67396L1.79607%201.13112C1.68716%201.00945%201.52152%200.955277%201.36175%200.989076C1.20199%201.02287%201.07248%201.13949%201.02218%201.29484C0.971889%201.45018%201.00848%201.62056%201.11813%201.74157L4.9338%205.97919L1.11813%2010.2168C1.00848%2010.3378%200.971887%2010.5082%201.02218%2010.6635C1.07248%2010.8189%201.20199%2010.9355%201.36175%2010.9693C1.52152%2011.0031%201.68716%2010.9489%201.79607%2010.8273L5.88506%206.28441C5.96718%206.19213%206.00819%206.0704%205.99864%205.94724Z'%20fill='%23BFBFBF'%20stroke='%23BFBFBF'%20stroke-width='1.2'/%3e%3c/svg%3e",vA=()=>{const{state:t,totalPrice:e,emptyCart:n}=D.useContext(Er);return y.jsx("aside",{className:"MyOrder",children:t.length>0?y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"title-container",children:[y.jsx("img",{src:yA,alt:"arrow"}),y.jsx("p",{className:"title",children:"Cart"})]}),y.jsxs("div",{className:"my-order-content",children:[t.map((r,i)=>y.jsx(gA,{indexValue:i,producto:r},i)),y.jsxs("div",{className:"order",children:[y.jsx("p",{children:y.jsx("span",{children:"Total"})}),y.jsxs("p",{children:["$",e!==0&&e]})]}),y.jsx(eA,{to:"/cart",children:y.jsx("button",{className:"primary-button",children:"Go To Pay"})}),y.jsx("button",{className:"primary-button",onClick:n,children:"Empty cart"})]})]}):y.jsx(y.Fragment,{children:y.jsx("h2",{className:"empty-cart-notififaction",children:"Your cart is empty"})})})},_A=()=>{const[t,e]=D.useState(!1),{totalItemQuantity:n}=D.useContext(Er),r=D.useRef(null);return D.useEffect(()=>{if(!t)return;const i=o=>{r.current&&!r.current.contains(o.target)&&e(!1)},s=setTimeout(()=>{document.addEventListener("mousedown",i)},100);return()=>{clearTimeout(s),document.removeEventListener("mousedown",i)}},[t]),y.jsxs("div",{ref:r,style:{position:"relative"},children:[y.jsx(pA,{className:"iconCart",onClick:()=>e(!t)}),n!==0&&y.jsx("div",{className:"count",children:n}),t&&y.jsx(vA,{})]})};var Dg={};/**
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
 */const I0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},S0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,C=c&63;u||(C=64,o||(m=64)),r.push(n[d],n[p],n[m],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new EA;const m=s<<2|l>>4;if(r.push(m),c!==64){const C=l<<4&240|c>>2;if(r.push(C),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TA=function(t){const e=I0(t);return S0.encodeByteArray(e,!0)},Bl=function(t){return TA(t).replace(/\./g,"")},A0=function(t){try{return S0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SA=()=>IA().__FIREBASE_DEFAULTS__,AA=()=>{if(typeof process>"u"||typeof Dg>"u")return;const t=Dg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&A0(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return SA()||AA()||CA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C0=t=>{var e,n;return(n=(e=Iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},PA=t=>{const e=C0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P0=()=>{var t;return(t=Iu())===null||t===void 0?void 0:t.config},R0=t=>{var e;return(e=Iu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class RA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function kA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),""].join(".")}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function NA(){var t;const e=(t=Iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LA(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bA(){return!NA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MA(){try{return typeof indexedDB=="object"}catch{return!1}}function jA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const FA="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FA,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function UA(t,e){return t.replace(BA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BA=/\{\$([^}]+)}/g;function $A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Og(s)&&Og(o)){if(!$l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Og(t){return t!==null&&typeof t=="object"}/**
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
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zA(t,e){const n=new WA(t,e);return n.subscribe.bind(n)}class WA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uc),i.error===void 0&&(i.error=Uc),i.complete===void 0&&(i.complete=Uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Or="[DEFAULT]";/**
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
 */class HA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GA(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KA(t){return t===Or?void 0:t}function GA(t){return t.instantiationMode==="EAGER"}/**
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
 */class QA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const YA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},XA=te.INFO,JA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},ZA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ef{constructor(e){this.name=e,this._logLevel=XA,this._logHandler=ZA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const eC=(t,e)=>e.some(n=>t instanceof n);let Vg,Lg;function tC(){return Vg||(Vg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nC(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k0=new WeakMap,Gh=new WeakMap,x0=new WeakMap,Bc=new WeakMap,Tf=new WeakMap;function rC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&k0.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function iC(t){if(Gh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gh.set(t,e)}let Qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||x0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sC(t){Qh=t(Qh)}function oC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($c(this),e,...n);return x0.set(r,e.sort?e.sort():[e]),or(r)}:nC().includes(t)?function(...e){return t.apply($c(this),e),or(k0.get(this))}:function(...e){return or(t.apply($c(this),e))}}function aC(t){return typeof t=="function"?oC(t):(t instanceof IDBTransaction&&iC(t),eC(t,tC())?new Proxy(t,Qh):t)}function or(t){if(t instanceof IDBRequest)return rC(t);if(Bc.has(t))return Bc.get(t);const e=aC(t);return e!==t&&(Bc.set(t,e),Tf.set(e,t)),e}const $c=t=>Tf.get(t);function lC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(or(o.result),u.oldVersion,u.newVersion,or(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const uC=["get","getKey","getAll","getAllKeys","count"],cC=["put","add","delete","clear"],zc=new Map;function bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return zc.set(e,s),s}sC(t=>({...t,get:(e,n,r)=>bg(e,n)||t.get(e,n,r),has:(e,n)=>!!bg(e,n)||t.has(e,n)}));/**
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
 */class hC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yh="@firebase/app",Mg="0.10.13";/**
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
 */const Cn=new Ef("@firebase/app"),fC="@firebase/app-compat",pC="@firebase/analytics-compat",mC="@firebase/analytics",gC="@firebase/app-check-compat",yC="@firebase/app-check",vC="@firebase/auth",_C="@firebase/auth-compat",wC="@firebase/database",EC="@firebase/data-connect",TC="@firebase/database-compat",IC="@firebase/functions",SC="@firebase/functions-compat",AC="@firebase/installations",CC="@firebase/installations-compat",PC="@firebase/messaging",RC="@firebase/messaging-compat",kC="@firebase/performance",xC="@firebase/performance-compat",NC="@firebase/remote-config",DC="@firebase/remote-config-compat",OC="@firebase/storage",VC="@firebase/storage-compat",LC="@firebase/firestore",bC="@firebase/vertexai-preview",MC="@firebase/firestore-compat",jC="firebase",FC="10.14.1";/**
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
 */const Xh="[DEFAULT]",UC={[Yh]:"fire-core",[fC]:"fire-core-compat",[mC]:"fire-analytics",[pC]:"fire-analytics-compat",[yC]:"fire-app-check",[gC]:"fire-app-check-compat",[vC]:"fire-auth",[_C]:"fire-auth-compat",[wC]:"fire-rtdb",[EC]:"fire-data-connect",[TC]:"fire-rtdb-compat",[IC]:"fire-fn",[SC]:"fire-fn-compat",[AC]:"fire-iid",[CC]:"fire-iid-compat",[PC]:"fire-fcm",[RC]:"fire-fcm-compat",[kC]:"fire-perf",[xC]:"fire-perf-compat",[NC]:"fire-rc",[DC]:"fire-rc-compat",[OC]:"fire-gcs",[VC]:"fire-gcs-compat",[LC]:"fire-fst",[MC]:"fire-fst-compat",[bC]:"fire-vertex","fire-js":"fire-js",[jC]:"fire-js-all"};/**
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
 */const zl=new Map,BC=new Map,Jh=new Map;function jg(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qi(t){const e=t.name;if(Jh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Jh.set(e,t);for(const n of zl.values())jg(n,t);for(const n of BC.values())jg(n,t);return!0}function If(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t.settings!==void 0}/**
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
 */const $C={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Fo("app","Firebase",$C);/**
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
 */class zC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const is=FC;function N0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=P0()),!n)throw ar.create("no-options");const s=zl.get(i);if(s){if($l(n,s.options)&&$l(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new QA(i);for(const u of Jh.values())o.addComponent(u);const l=new zC(n,r,o);return zl.set(i,l),l}function D0(t=Xh){const e=zl.get(t);if(!e&&t===Xh&&P0())return N0();if(!e)throw ar.create("no-app",{appName:t});return e}function lr(t,e,n){var r;let i=(r=UC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}qi(new Hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const WC="firebase-heartbeat-database",qC=1,To="firebase-heartbeat-store";let Wc=null;function O0(){return Wc||(Wc=lC(WC,qC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(To)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Wc}async function HC(t){try{const n=(await O0()).transaction(To),r=await n.objectStore(To).get(V0(t));return await n.done,r}catch(e){if(e instanceof Dn)Cn.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Fg(t,e){try{const r=(await O0()).transaction(To,"readwrite");await r.objectStore(To).put(e,V0(t)),await r.done}catch(n){if(n instanceof Dn)Cn.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function V0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KC=1024,GC=30*24*60*60*1e3;class QC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ug();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=GC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ug(),{heartbeatsToSend:r,unsentEntries:i}=YC(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function Ug(){return new Date().toISOString().substring(0,10)}function YC(t,e=KC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MA()?jA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bg(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function JC(t){qi(new Hr("platform-logger",e=>new hC(e),"PRIVATE")),qi(new Hr("heartbeat",e=>new QC(e),"PRIVATE")),lr(Yh,Mg,t),lr(Yh,Mg,"esm2017"),lr("fire-js","")}JC("");function Sf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function L0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZC=L0,b0=new Fo("auth","Firebase",L0());/**
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
 */const Wl=new Ef("@firebase/auth");function eP(t,...e){Wl.logLevel<=te.WARN&&Wl.warn(`Auth (${is}): ${t}`,...e)}function tl(t,...e){Wl.logLevel<=te.ERROR&&Wl.error(`Auth (${is}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Af(t,...e)}function Xt(t,...e){return Af(t,...e)}function M0(t,e,n){const r=Object.assign(Object.assign({},ZC()),{[e]:n});return new Fo("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return M0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return b0.create(t,...e)}function K(t,e,...n){if(!t)throw Af(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function Pn(t,e){t||mn(e)}/**
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
 */function Zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tP(){return $g()==="http:"||$g()==="https:"}function $g(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tP()||OA()||"connection"in navigator)?navigator.onLine:!0}function rP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=xA()||VA()}get(){return nP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cf(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class j0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sP=new Bo(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,i={}){return F0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return DA()||(c.referrerPolicy="no-referrer"),j0.fetch()(U0(t,t.config.apiHost,n,l),c)})}async function F0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iP),e);try{const i=new aP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ba(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw M0(t,d,c);zt(t,d)}}catch(i){if(i instanceof Dn)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function $o(t,e,n,r,i={}){const s=await Ir(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cf(t.config,i):`${t.config.apiScheme}://${i}`}function oP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),sP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}function zg(t){return t!==void 0&&t.enterprise!==void 0}class lP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uP(t,e){return Ir(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
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
 */async function cP(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function B0(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hP(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Pf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xs(qc(i.auth_time)),issuedAtTime:Xs(qc(i.iat)),expirationTime:Xs(qc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function Pf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=A0(n);return i?JSON.parse(i):(tl("Failed to decode base64 JWT payload"),null)}catch(i){return tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wg(t){const e=Pf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&dP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Io(t,B0(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$0(s.providerUserInfo):[],l=mP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ed(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function pP(t){const e=Oe(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $0(t){return t.map(e=>{var{providerId:n}=e,r=Sf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gP(t,e){const n=await F0(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",j0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yP(t,e){return Ir(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
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
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Wg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Mn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ed(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Io(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hP(this,e)}reload(){return pP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Io(this,cP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:V,isAnonymous:j,providerData:U,stsTokenManager:w}=n;K(S&&w,e,"internal-error");const _=Oi.fromJSON(this.name,w);K(typeof S=="string",e,"internal-error"),Mn(p,e.name),Mn(m,e.name),K(typeof V=="boolean",e,"internal-error"),K(typeof j=="boolean",e,"internal-error"),Mn(C,e.name),Mn(P,e.name),Mn(k,e.name),Mn(O,e.name),Mn(I,e.name),Mn(v,e.name);const E=new gn({uid:S,auth:e,email:m,emailVerified:V,displayName:p,isAnonymous:j,photoURL:P,phoneNumber:C,tenantId:k,stsTokenManager:_,createdAt:I,lastLoginAt:v});return U&&Array.isArray(U)&&(E.providerData=U.map(T=>Object.assign({},T))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oi;i.updateFromServerResponse(n);const s=new gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ql(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Oi;l.updateFromIdToken(r);const u=new gn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ed(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const qg=new Map;function yn(t){Pn(t instanceof Function,"Expected a class definition");let e=qg.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qg.set(t,e),e)}/**
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
 */class z0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z0.type="NONE";const Hg=z0;/**
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
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(yn(Hg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||yn(Hg);const o=nl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=gn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Vi(s,e,r))}}/**
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
 */function Kg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q0(e))return"Blackberry";if(Y0(e))return"Webos";if(q0(e))return"Safari";if((e.includes("chrome/")||H0(e))&&!e.includes("edge/"))return"Chrome";if(G0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function W0(t=tt()){return/firefox\//i.test(t)}function q0(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H0(t=tt()){return/crios\//i.test(t)}function K0(t=tt()){return/iemobile/i.test(t)}function G0(t=tt()){return/android/i.test(t)}function Q0(t=tt()){return/blackberry/i.test(t)}function Y0(t=tt()){return/webos/i.test(t)}function Rf(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vP(t=tt()){var e;return Rf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _P(){return LA()&&document.documentMode===10}function X0(t=tt()){return Rf(t)||G0(t)||Y0(t)||Q0(t)||/windows phone/i.test(t)||K0(t)}/**
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
 */function J0(t,e=[]){let n;switch(t){case"Browser":n=Kg(tt());break;case"Worker":n=`${Kg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
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
 */class wP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function EP(t,e={}){return Ir(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
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
 */const TP=6;class IP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class SP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new wP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=b0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await B0(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(wn(this));const n=e?Oe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EP(this),n=new IP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ti(t){return Oe(t)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=zA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AP(t){Su=t}function Z0(t){return Su.loadJS(t)}function CP(){return Su.recaptchaEnterpriseScript}function PP(){return Su.gapiScript}function RP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kP="recaptcha-enterprise",xP="NO_RECAPTCHA";class NP{constructor(e){this.type=kP,this.auth=ti(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{uP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new lP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;zg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(xP)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&zg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=CP();u.length!==0&&(u+=l),Z0(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Qg(t,e,n,r=!1){const i=new NP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function td(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Qg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Qg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function DP(t,e){const n=If(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($l(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function OP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VP(t,e,n){const r=ti(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ew(e),{host:o,port:l}=LP(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),bP()}function ew(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LP(t){const e=ew(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yg(o)}}}function Yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function MP(t,e){return Ir(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jP(t,e){return $o(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
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
 */async function FP(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function UP(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
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
 */class So extends kf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new So(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new So(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return td(e,n,"signInWithPassword",jP);case"emailLink":return FP(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return td(e,r,"signUpPassword",MP);case"emailLink":return UP(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Li(t,e){return $o(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
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
 */const BP="http://localhost";class Kr extends kf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:BP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
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
 */function $P(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zP(t){const e=bs(Ms(t)).link,n=e?bs(Ms(e)).deep_link_id:null,r=bs(Ms(t)).deep_link_id;return(r?bs(Ms(r)).link:null)||r||n||e||t}class xf{constructor(e){var n,r,i,s,o,l;const u=bs(Ms(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=$P((i=u.mode)!==null&&i!==void 0?i:null);K(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=zP(e);try{return new xf(n)}catch{return null}}}/**
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
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return So._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xf.parseLink(n);return K(r,"argument-error"),So._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zo extends tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $n extends zo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
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
 */class zn extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class Wn extends zo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
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
 */class qn extends zo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */async function WP(t,e){return $o(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gn._fromIdTokenResponse(e,r,i),o=Xg(r);return new Gr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xg(r);return new Gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Hl extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hl(e,n,r,i)}}function nw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hl._fromErrorAndOperation(t,s,e,r):s})}async function qP(t,e,n=!1){const r=await Io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function HP(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await Io(t,nw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Pf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
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
 */async function rw(t,e,n=!1){if(Gt(t.app))return Promise.reject(wn(t));const r="signIn",i=await nw(t,r,e),s=await Gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function KP(t,e){return rw(ti(t),e)}/**
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
 */async function iw(t){const e=ti(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GP(t,e,n){if(Gt(t.app))return Promise.reject(wn(t));const r=ti(t),o=await td(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&iw(t),u}),l=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function QP(t,e,n){return Gt(t.app)?Promise.reject(wn(t)):KP(Oe(t),ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iw(t),r})}function YP(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function XP(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function JP(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function ZP(t){return Oe(t).signOut()}const Kl="__sak";/**
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
 */class sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kl,"1"),this.storage.removeItem(Kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const eR=1e3,tR=10;class ow extends sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_P()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ow.type="LOCAL";const nR=ow;/**
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
 */class aw extends sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aw.type="SESSION";const lw=aw;/**
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
 */function rR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Au(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await rR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Au.receivers=[];/**
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
 */function Nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Nf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function sR(t){Jt().location.href=t}/**
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
 */function uw(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function oR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lR(){return uw()?self:null}/**
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
 */const cw="firebaseLocalStorageDb",uR=1,Gl="firebaseLocalStorage",hw="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cu(t,e){return t.transaction([Gl],e?"readwrite":"readonly").objectStore(Gl)}function cR(){const t=indexedDB.deleteDatabase(cw);return new Wo(t).toPromise()}function nd(){const t=indexedDB.open(cw,uR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gl,{keyPath:hw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gl)?e(r):(r.close(),await cR(),e(await nd()))})})}async function Jg(t,e,n){const r=Cu(t,!0).put({[hw]:e,value:n});return new Wo(r).toPromise()}async function hR(t,e){const n=Cu(t,!1).get(e),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function Zg(t,e){const n=Cu(t,!0).delete(e);return new Wo(n).toPromise()}const dR=800,fR=3;class dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Au._getInstance(lR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oR(),!this.activeServiceWorker)return;this.sender=new iR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await Jg(e,Kl,"1"),await Zg(e,Kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Cu(i,!1).getAll();return new Wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dw.type="LOCAL";const pR=dw;new Bo(3e4,6e4);/**
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
 */function mR(t,e){return e?yn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Df extends kf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gR(t){return rw(t.auth,new Df(t),t.bypassAuthState)}function yR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),HP(n,new Df(t),t.bypassAuthState)}async function vR(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),qP(n,new Df(t),t.bypassAuthState)}/**
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
 */class fw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gR;case"linkViaPopup":case"linkViaRedirect":return vR;case"reauthViaPopup":case"reauthViaRedirect":return yR;default:zt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _R=new Bo(2e3,1e4);class Ci extends fw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ci.currentPopupAction&&Ci.currentPopupAction.cancel(),Ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_R.get())};e()}}Ci.currentPopupAction=null;/**
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
 */const wR="pendingRedirect",rl=new Map;class ER extends fw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const r=await TR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TR(t,e){const n=AR(e),r=SR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function IR(t,e){rl.set(t._key(),e)}function SR(t){return yn(t._redirectPersistence)}function AR(t){return nl(wR,t.config.apiKey,t.name)}async function CR(t,e,n=!1){if(Gt(t.app))return Promise.reject(wn(t));const r=ti(t),i=mR(r,e),o=await new ER(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const PR=10*60*1e3;class RR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pw(t);default:return!1}}/**
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
 */async function xR(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
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
 */const NR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DR=/^https?/;async function OR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xR(t);for(const n of e)try{if(VR(n))return}catch{}zt(t,"unauthorized-domain")}function VR(t){const e=Zh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DR.test(n))return!1;if(NR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LR=new Bo(3e4,6e4);function ty(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bR(t){return new Promise((e,n)=>{var r,i,s;function o(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),n(Xt(t,"network-request-failed"))},timeout:LR.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const l=RP("iframefcb");return Jt()[l]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},Z0(`${PP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw il=null,e})}let il=null;function MR(t){return il=il||bR(t),il}/**
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
 */const jR=new Bo(5e3,15e3),FR="__/auth/iframe",UR="emulator/auth/iframe",BR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cf(e,UR):`https://${t.config.authDomain}/${FR}`,r={apiKey:e.apiKey,appName:t.name,v:is},i=$R.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Uo(r).slice(1)}`}async function WR(t){const e=await MR(t),n=Jt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:zR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),l=Jt().setTimeout(()=>{s(o)},jR.get());function u(){Jt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const qR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HR=500,KR=600,GR="_blank",QR="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YR(t,e,n,r=HR,i=KR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},qR),{width:r.toString(),height:i.toString(),top:s,left:o}),c=tt().toLowerCase();n&&(l=H0(c)?GR:n),W0(c)&&(e=e||QR,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[C,P])=>`${m}${C}=${P},`,"");if(vP(c)&&l!=="_self")return XR(e||"",l),new ny(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new ny(p)}function XR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JR="__/auth/handler",ZR="emulator/auth/handler",ek=encodeURIComponent("fac");async function ry(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:i};if(e instanceof tw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$A(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof zo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${ek}=${encodeURIComponent(u)}`:"";return`${tk(t)}?${Uo(l).slice(1)}${c}`}function tk({config:t}){return t.emulator?Cf(t,ZR):`https://${t.authDomain}/${JR}`}/**
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
 */const Hc="webStorageSupport";class nk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lw,this._completeRedirectFn=CR,this._overrideRedirectResult=IR}async _openPopup(e,n,r,i){var s;Pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ry(e,n,r,Zh(),i);return YR(e,o,Nf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ry(e,n,r,Zh(),i);return sR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WR(e),r=new RR(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hc];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X0()||q0()||Rf()}}const rk=nk;var iy="@firebase/auth",sy="1.7.9";/**
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
 */class ik{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ok(t){qi(new Hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J0(t)},c=new SP(r,i,s,u);return OP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qi(new Hr("auth-internal",e=>{const n=ti(e.getProvider("auth").getImmediate());return(r=>new ik(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lr(iy,sy,sk(t)),lr(iy,sy,"esm2017")}/**
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
 */const ak=5*60,lk=R0("authIdTokenMaxAge")||ak;let oy=null;const uk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lk)return;const i=n==null?void 0:n.token;oy!==i&&(oy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ck(t=D0()){const e=If(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DP(t,{popupRedirectResolver:rk,persistence:[pR,nR,lw]}),r=R0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=uk(s.toString());XP(n,o,()=>o(n.currentUser)),YP(n,l=>o(l))}}const i=C0("auth");return i&&VP(n,`http://${i}`),n}function hk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ok("Browser");var dk="firebase",fk="10.14.1";/**
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
 */lr(dk,fk,"app");const pk={apiKey:"AIzaSyBDFCr4cn2AD23JPBuSj7R_2XsC5C3IGUo",authDomain:"pokecommerce-294e5.firebaseapp.com",projectId:"pokecommerce-294e5",storageBucket:"pokecommerce-294e5.appspot.com",messagingSenderId:"666082055112",appId:"1:666082055112:web:74d42d02da9674613166fd"},mk=N0(pk),Ma=ck(mk),mw=D.createContext(),Pu=()=>D.useContext(mw),gk=({children:t})=>{const[e,n]=D.useState(null),[r,i]=D.useState(!0),s=(c,d)=>GP(Ma,c,d),o=(c,d)=>QP(Ma,c,d),l=()=>ZP(Ma);D.useEffect(()=>JP(Ma,d=>{n(d),i(!1)}),[]);const u={currentUser:e,signup:s,login:o,logout:l};return y.jsx(mw.Provider,{value:u,children:!r&&t})};function yk(t){return rs({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"},child:[]}]})(t)}function vk(t){return rs({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"},child:[]}]})(t)}const _k=()=>{const[t,e]=D.useState(!1),[n,r]=D.useState(window.innerWidth),{currentUser:i,logout:s}=Pu();D.useEffect(()=>{const l=()=>{r(window.innerWidth)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]);const o=async()=>{try{await s()}catch(l){console.error(l)}};return y.jsxs("nav",{className:"navbar poke-navbar",children:[y.jsx(dt,{to:"/",children:y.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg",alt:"logo",className:"nav-logo poke-logo"})}),y.jsx("ul",{className:t?"nav-links-mobile":"nav-links",onClick:()=>e(!1),children:(t||n>768)&&y.jsxs(y.Fragment,{children:[y.jsx(dt,{to:"/",className:"poke-nav-link",children:y.jsx("li",{children:"Pokédex"})}),i&&y.jsx(dt,{to:"/cart",className:"poke-nav-link",children:y.jsx("li",{children:"Mis Órdenes"})})]})}),y.jsx("button",{className:"mobile-menu-icon",onClick:()=>e(!t),children:t?y.jsx(yk,{alt:"icon-close",className:"icon-close"}):y.jsx(vk,{alt:"icon-menu",className:"menu"})}),y.jsxs("div",{className:"navbar-right poke-navbar-right",children:[i?y.jsxs("div",{className:"nav-user-info",children:[y.jsx("span",{className:"user-email",children:i.email}),y.jsx("span",{className:"nav-logout-btn",onClick:o,children:"Log Out"})]}):y.jsx(dt,{to:"/login",className:"nav-login-btn",children:"Log In"}),y.jsx("ul",{children:y.jsx(_A,{})})]})]})},wk=()=>y.jsx(y.Fragment,{children:y.jsx(_k,{})});var ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,gw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function E(){}E.prototype=_.prototype,w.D=_.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(T,R,x){for(var A=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)A[nt-2]=arguments[nt];return _.prototype[R].apply(T,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)T[R]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(R=0;16>R;++R)T[R]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=w.g[0],E=w.g[1],R=w.g[2];var x=w.g[3],A=_+(x^E&(R^x))+T[0]+3614090360&4294967295;_=E+(A<<7&4294967295|A>>>25),A=x+(R^_&(E^R))+T[1]+3905402710&4294967295,x=_+(A<<12&4294967295|A>>>20),A=R+(E^x&(_^E))+T[2]+606105819&4294967295,R=x+(A<<17&4294967295|A>>>15),A=E+(_^R&(x^_))+T[3]+3250441966&4294967295,E=R+(A<<22&4294967295|A>>>10),A=_+(x^E&(R^x))+T[4]+4118548399&4294967295,_=E+(A<<7&4294967295|A>>>25),A=x+(R^_&(E^R))+T[5]+1200080426&4294967295,x=_+(A<<12&4294967295|A>>>20),A=R+(E^x&(_^E))+T[6]+2821735955&4294967295,R=x+(A<<17&4294967295|A>>>15),A=E+(_^R&(x^_))+T[7]+4249261313&4294967295,E=R+(A<<22&4294967295|A>>>10),A=_+(x^E&(R^x))+T[8]+1770035416&4294967295,_=E+(A<<7&4294967295|A>>>25),A=x+(R^_&(E^R))+T[9]+2336552879&4294967295,x=_+(A<<12&4294967295|A>>>20),A=R+(E^x&(_^E))+T[10]+4294925233&4294967295,R=x+(A<<17&4294967295|A>>>15),A=E+(_^R&(x^_))+T[11]+2304563134&4294967295,E=R+(A<<22&4294967295|A>>>10),A=_+(x^E&(R^x))+T[12]+1804603682&4294967295,_=E+(A<<7&4294967295|A>>>25),A=x+(R^_&(E^R))+T[13]+4254626195&4294967295,x=_+(A<<12&4294967295|A>>>20),A=R+(E^x&(_^E))+T[14]+2792965006&4294967295,R=x+(A<<17&4294967295|A>>>15),A=E+(_^R&(x^_))+T[15]+1236535329&4294967295,E=R+(A<<22&4294967295|A>>>10),A=_+(R^x&(E^R))+T[1]+4129170786&4294967295,_=E+(A<<5&4294967295|A>>>27),A=x+(E^R&(_^E))+T[6]+3225465664&4294967295,x=_+(A<<9&4294967295|A>>>23),A=R+(_^E&(x^_))+T[11]+643717713&4294967295,R=x+(A<<14&4294967295|A>>>18),A=E+(x^_&(R^x))+T[0]+3921069994&4294967295,E=R+(A<<20&4294967295|A>>>12),A=_+(R^x&(E^R))+T[5]+3593408605&4294967295,_=E+(A<<5&4294967295|A>>>27),A=x+(E^R&(_^E))+T[10]+38016083&4294967295,x=_+(A<<9&4294967295|A>>>23),A=R+(_^E&(x^_))+T[15]+3634488961&4294967295,R=x+(A<<14&4294967295|A>>>18),A=E+(x^_&(R^x))+T[4]+3889429448&4294967295,E=R+(A<<20&4294967295|A>>>12),A=_+(R^x&(E^R))+T[9]+568446438&4294967295,_=E+(A<<5&4294967295|A>>>27),A=x+(E^R&(_^E))+T[14]+3275163606&4294967295,x=_+(A<<9&4294967295|A>>>23),A=R+(_^E&(x^_))+T[3]+4107603335&4294967295,R=x+(A<<14&4294967295|A>>>18),A=E+(x^_&(R^x))+T[8]+1163531501&4294967295,E=R+(A<<20&4294967295|A>>>12),A=_+(R^x&(E^R))+T[13]+2850285829&4294967295,_=E+(A<<5&4294967295|A>>>27),A=x+(E^R&(_^E))+T[2]+4243563512&4294967295,x=_+(A<<9&4294967295|A>>>23),A=R+(_^E&(x^_))+T[7]+1735328473&4294967295,R=x+(A<<14&4294967295|A>>>18),A=E+(x^_&(R^x))+T[12]+2368359562&4294967295,E=R+(A<<20&4294967295|A>>>12),A=_+(E^R^x)+T[5]+4294588738&4294967295,_=E+(A<<4&4294967295|A>>>28),A=x+(_^E^R)+T[8]+2272392833&4294967295,x=_+(A<<11&4294967295|A>>>21),A=R+(x^_^E)+T[11]+1839030562&4294967295,R=x+(A<<16&4294967295|A>>>16),A=E+(R^x^_)+T[14]+4259657740&4294967295,E=R+(A<<23&4294967295|A>>>9),A=_+(E^R^x)+T[1]+2763975236&4294967295,_=E+(A<<4&4294967295|A>>>28),A=x+(_^E^R)+T[4]+1272893353&4294967295,x=_+(A<<11&4294967295|A>>>21),A=R+(x^_^E)+T[7]+4139469664&4294967295,R=x+(A<<16&4294967295|A>>>16),A=E+(R^x^_)+T[10]+3200236656&4294967295,E=R+(A<<23&4294967295|A>>>9),A=_+(E^R^x)+T[13]+681279174&4294967295,_=E+(A<<4&4294967295|A>>>28),A=x+(_^E^R)+T[0]+3936430074&4294967295,x=_+(A<<11&4294967295|A>>>21),A=R+(x^_^E)+T[3]+3572445317&4294967295,R=x+(A<<16&4294967295|A>>>16),A=E+(R^x^_)+T[6]+76029189&4294967295,E=R+(A<<23&4294967295|A>>>9),A=_+(E^R^x)+T[9]+3654602809&4294967295,_=E+(A<<4&4294967295|A>>>28),A=x+(_^E^R)+T[12]+3873151461&4294967295,x=_+(A<<11&4294967295|A>>>21),A=R+(x^_^E)+T[15]+530742520&4294967295,R=x+(A<<16&4294967295|A>>>16),A=E+(R^x^_)+T[2]+3299628645&4294967295,E=R+(A<<23&4294967295|A>>>9),A=_+(R^(E|~x))+T[0]+4096336452&4294967295,_=E+(A<<6&4294967295|A>>>26),A=x+(E^(_|~R))+T[7]+1126891415&4294967295,x=_+(A<<10&4294967295|A>>>22),A=R+(_^(x|~E))+T[14]+2878612391&4294967295,R=x+(A<<15&4294967295|A>>>17),A=E+(x^(R|~_))+T[5]+4237533241&4294967295,E=R+(A<<21&4294967295|A>>>11),A=_+(R^(E|~x))+T[12]+1700485571&4294967295,_=E+(A<<6&4294967295|A>>>26),A=x+(E^(_|~R))+T[3]+2399980690&4294967295,x=_+(A<<10&4294967295|A>>>22),A=R+(_^(x|~E))+T[10]+4293915773&4294967295,R=x+(A<<15&4294967295|A>>>17),A=E+(x^(R|~_))+T[1]+2240044497&4294967295,E=R+(A<<21&4294967295|A>>>11),A=_+(R^(E|~x))+T[8]+1873313359&4294967295,_=E+(A<<6&4294967295|A>>>26),A=x+(E^(_|~R))+T[15]+4264355552&4294967295,x=_+(A<<10&4294967295|A>>>22),A=R+(_^(x|~E))+T[6]+2734768916&4294967295,R=x+(A<<15&4294967295|A>>>17),A=E+(x^(R|~_))+T[13]+1309151649&4294967295,E=R+(A<<21&4294967295|A>>>11),A=_+(R^(E|~x))+T[4]+4149444226&4294967295,_=E+(A<<6&4294967295|A>>>26),A=x+(E^(_|~R))+T[11]+3174756917&4294967295,x=_+(A<<10&4294967295|A>>>22),A=R+(_^(x|~E))+T[2]+718787259&4294967295,R=x+(A<<15&4294967295|A>>>17),A=E+(x^(R|~_))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(R+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+x&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var E=_-this.blockSize,T=this.B,R=this.h,x=0;x<_;){if(R==0)for(;x<=E;)i(this,w,x),x+=this.blockSize;if(typeof w=="string"){for(;x<_;)if(T[R++]=w.charCodeAt(x++),R==this.blockSize){i(this,T),R=0;break}}else for(;x<_;)if(T[R++]=w[x++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var E=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=E&255,E/=256;for(this.u(w),w=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)w[E++]=this.g[_]>>>T&255;return w};function s(w,_){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=_(w)}function o(w,_){this.h=_;for(var E=[],T=!0,R=w.length-1;0<=R;R--){var x=w[R]|0;T&&x==_||(E[R]=x,T=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return O(c(-w));for(var _=[],E=1,T=0;w>=E;T++)_[T]=w/E|0,E*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return O(d(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(_,8)),T=p,R=0;R<w.length;R+=8){var x=Math.min(8,w.length-R),A=parseInt(w.substring(R,R+x),_);8>x?(x=c(Math.pow(_,x)),T=T.j(x).add(c(A))):(T=T.j(E),T=T.add(c(A)))}return T}var p=u(0),m=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var w=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);w+=(0<=T?T:4294967296+T)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(k(this))return"-"+O(this).toString(w);for(var _=c(Math.pow(w,6)),E=this,T="";;){var R=V(E,_).g;E=I(E,R.j(_));var x=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=R,P(E))return x+T;for(;6>x.length;)x="0"+x;T=x+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function k(w){return w.h==-1}t.l=function(w){return w=I(this,w),k(w)?-1:P(w)?0:1};function O(w){for(var _=w.g.length,E=[],T=0;T<_;T++)E[T]=~w.g[T];return new o(E,~w.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],T=0,R=0;R<=_;R++){var x=T+(this.i(R)&65535)+(w.i(R)&65535),A=(x>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);T=A>>>16,x&=65535,A&=65535,E[R]=A<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(w,_){return w.add(O(_))}t.j=function(w){if(P(this)||P(w))return p;if(k(this))return k(w)?O(this).j(O(w)):O(O(this).j(w));if(k(w))return O(this.j(O(w)));if(0>this.l(C)&&0>w.l(C))return c(this.m()*w.m());for(var _=this.g.length+w.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<w.g.length;R++){var x=this.i(T)>>>16,A=this.i(T)&65535,nt=w.i(R)>>>16,Ct=w.i(R)&65535;E[2*T+2*R]+=A*Ct,v(E,2*T+2*R),E[2*T+2*R+1]+=x*Ct,v(E,2*T+2*R+1),E[2*T+2*R+1]+=A*nt,v(E,2*T+2*R+1),E[2*T+2*R+2]+=x*nt,v(E,2*T+2*R+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function S(w,_){this.g=w,this.h=_}function V(w,_){if(P(_))throw Error("division by zero");if(P(w))return new S(p,p);if(k(w))return _=V(O(w),_),new S(O(_.g),O(_.h));if(k(_))return _=V(w,O(_)),new S(O(_.g),_.h);if(30<w.g.length){if(k(w)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,T=_;0>=T.l(w);)E=j(E),T=j(T);var R=U(E,1),x=U(T,1);for(T=U(T,2),E=U(E,2);!P(T);){var A=x.add(T);0>=A.l(w)&&(R=R.add(E),x=A),T=U(T,1),E=U(E,1)}return _=I(w,R.j(_)),new S(R,_)}for(R=p;0<=w.l(_);){for(E=Math.max(1,Math.floor(w.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),x=c(E),A=x.j(_);k(A)||0<A.l(w);)E-=T,x=c(E),A=x.j(_);P(x)&&(x=m),R=R.add(x),w=I(w,A)}return new S(R,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&w.i(T);return new o(E,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|w.i(T);return new o(E,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^w.i(T);return new o(E,this.h^w.h)};function j(w){for(var _=w.g.length+1,E=[],T=0;T<_;T++)E[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(E,w.h)}function U(w,_){var E=_>>5;_%=32;for(var T=w.g.length-E,R=[],x=0;x<T;x++)R[x]=0<_?w.i(x+E)>>>_|w.i(x+E+1)<<32-_:w.i(x+E);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ur=o}).apply(typeof ay<"u"?ay:typeof self<"u"?self:typeof window<"u"?window:{});var ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yw,js,vw,sl,rd,_w,ww,Ew;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ja=="object"&&ja];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in f))break e;f=f[N]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,N={next:function(){if(!g&&f<a.length){var L=f++;return{value:h(L,a[L]),done:!1}}return g=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,g),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function C(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,N,L){for(var B=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)B[ue-2]=arguments[ue];return h.prototype[N].apply(g,B)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function O(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const N=a.length||0,L=g.length||0;a.length=N+L;for(let B=0;B<L;B++)a[N+B]=g[B]}else a.push(g)}}class I{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let f,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(f in g)a[f]=g[f];for(let L=0;L<E.length;L++)f=E[L],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function x(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class nt{constructor(){this.h=this.g=null}add(h,f){const g=Ct.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ct=new I(()=>new Vt,a=>a.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let nn,$=!1,Q=new nt,J=()=>{const a=l.Promise.resolve(void 0);nn=()=>{a.then(ge)}};var ge=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){x(f)}var h=Ct;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var rn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function sn(a,h){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(j){e:{try{V(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:on[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&sn.aa.h.call(this)}}P(sn,Se);var on={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),KE=0;function GE(a,h,f,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=N,this.key=++KE,this.da=this.fa=!1}function ta(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function na(a){this.src=a,this.g={},this.h=0}na.prototype.add=function(a,h,f,g,N){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var B=qu(a,h,g,N);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new GE(h,this.src,L,!!g,N),h.fa=f,a.push(h)),h};function Wu(a,h){var f=h.type;if(f in a.g){var g=a.g[f],N=Array.prototype.indexOf.call(g,h,void 0),L;(L=0<=N)&&Array.prototype.splice.call(g,N,1),L&&(ta(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function qu(a,h,f,g){for(var N=0;N<a.length;++N){var L=a[N];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==g)return N}return-1}var Hu="closure_lm_"+(1e6*Math.random()|0),Ku={};function pp(a,h,f,g,N){if(Array.isArray(h)){for(var L=0;L<h.length;L++)pp(a,h[L],f,g,N);return null}return f=yp(f),a&&a[an]?a.K(h,f,c(g)?!!g.capture:!1,N):QE(a,h,f,!1,g,N)}function QE(a,h,f,g,N,L){if(!h)throw Error("Invalid event type");var B=c(N)?!!N.capture:!!N,ue=Qu(a);if(ue||(a[Hu]=ue=new na(a)),f=ue.add(h,f,g,B,L),f.proxy)return f;if(g=YE(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)rn||(N=B),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(gp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function YE(){function a(f){return h.call(a.src,a.listener,f)}const h=XE;return a}function mp(a,h,f,g,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)mp(a,h[L],f,g,N);else g=c(g)?!!g.capture:!!g,f=yp(f),a&&a[an]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],f=qu(L,f,g,N),-1<f&&(ta(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=Qu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=qu(h,f,g,N)),(f=-1<a?h[a]:null)&&Gu(f))}function Gu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[an])Wu(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(gp(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Qu(h))?(Wu(f,a),f.h==0&&(f.src=null,h[Hu]=null)):ta(a)}}}function gp(a){return a in Ku?Ku[a]:Ku[a]="on"+a}function XE(a,h){if(a.da)a=!0;else{h=new sn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Gu(a),a=f.call(g,h)}return a}function Qu(a){return a=a[Hu],a instanceof na?a:null}var Yu="__closure_events_fn_"+(1e9*Math.random()>>>0);function yp(a){return typeof a=="function"?a:(a[Yu]||(a[Yu]=function(h){return a.handleEvent(h)}),a[Yu])}function qe(){le.call(this),this.i=new na(this),this.M=this,this.F=null}P(qe,le),qe.prototype[an]=!0,qe.prototype.removeEventListener=function(a,h,f,g){mp(this,a,h,f,g)};function rt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Se(h,a);else if(h instanceof Se)h.target=h.target||a;else{var N=h;h=new Se(g,a),T(h,N)}if(N=!0,f)for(var L=f.length-1;0<=L;L--){var B=h.g=f[L];N=ra(B,g,!0,h)&&N}if(B=h.g=a,N=ra(B,g,!0,h)&&N,N=ra(B,g,!1,h)&&N,f)for(L=0;L<f.length;L++)B=h.g=f[L],N=ra(B,g,!1,h)&&N}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)ta(f[g]);delete a.g[h],a.h--}}this.F=null},qe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},qe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function ra(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,L=0;L<h.length;++L){var B=h[L];if(B&&!B.da&&B.capture==f){var ue=B.listener,Me=B.ha||B.src;B.fa&&Wu(a.i,B),N=ue.call(Me,g)!==!1&&N}}return N&&!g.defaultPrevented}function vp(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function _p(a){a.g=vp(()=>{a.g=null,a.i&&(a.i=!1,_p(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class JE extends le{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:_p(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(a){le.call(this),this.h=a,this.g={}}P(cs,le);var wp=[];function Ep(a){U(a.g,function(h,f){this.g.hasOwnProperty(f)&&Gu(h)},a),a.g={}}cs.prototype.N=function(){cs.aa.N.call(this),Ep(this)},cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xu=l.JSON.stringify,ZE=l.JSON.parse,eT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ju(){}Ju.prototype.h=null;function Tp(a){return a.h||(a.h=a.i())}function Ip(){}var hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zu(){Se.call(this,"d")}P(Zu,Se);function ec(){Se.call(this,"c")}P(ec,Se);var Cr={},Sp=null;function ia(){return Sp=Sp||new qe}Cr.La="serverreachability";function Ap(a){Se.call(this,Cr.La,a)}P(Ap,Se);function ds(a){const h=ia();rt(h,new Ap(h))}Cr.STAT_EVENT="statevent";function Cp(a,h){Se.call(this,Cr.STAT_EVENT,a),this.stat=h}P(Cp,Se);function it(a){const h=ia();rt(h,new Cp(h,a))}Cr.Ma="timingevent";function Pp(a,h){Se.call(this,Cr.Ma,a),this.size=h}P(Pp,Se);function fs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function tT(a,h,f,g,N,L){a.info(function(){if(a.g)if(L)for(var B="",ue=L.split("&"),Me=0;Me<ue.length;Me++){var ie=ue[Me].split("=");if(1<ie.length){var He=ie[0];ie=ie[1];var Ke=He.split("_");B=2<=Ke.length&&Ke[1]=="type"?B+(He+"="+ie+"&"):B+(He+"=redacted&")}}else B=null;else B=L;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+f+`
`+B})}function nT(a,h,f,g,N,L,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+f+`
`+L+" "+B})}function oi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+iT(a,f)+(g?" "+g:"")})}function rT(a,h){a.info(function(){return"TIMEOUT: "+h})}ps.prototype.info=function(){};function iT(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var N=g[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return Xu(f)}catch{return h}}var sa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function oa(){}P(oa,Ju),oa.prototype.g=function(){return new XMLHttpRequest},oa.prototype.i=function(){return{}},tc=new oa;function On(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kp}function kp(){this.i=null,this.g="",this.h=!1}var xp={},nc={};function rc(a,h,f){a.L=1,a.v=ca(ln(h)),a.m=f,a.P=!0,Np(a,null)}function Np(a,h){a.F=Date.now(),aa(a),a.A=ln(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),qp(f.i,"t",g),a.C=0,f=a.j.J,a.h=new kp,a.g=um(a.j,f?h:null,!a.m),0<a.O&&(a.M=new JE(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(wp[0]=N.toString()),N=wp);for(var L=0;L<N.length;L++){var B=pp(f,N[L],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ds(),tT(a.i,a.u,a.A,a.l,a.R,a.m)}On.prototype.ca=function(a){a=a.target;const h=this.M;h&&un(a)==3?h.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=un(this.g);var h=this.g.Ba();const ui=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||Jp(this.g)))){this.J||Ke!=4||h==7||(h==8||0>=ui?ds(3):ds(2)),ic(this);var f=this.g.Z();this.X=f;t:if(Dp(this)){var g=Jp(this.g);a="";var N=g.length,L=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),ms(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(L&&h==N-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,nT(this.i,this.u,this.A,this.l,this.R,Ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Me=this.g;if((ue=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ue)){var ie=ue;break t}}ie=null}if(f=ie)oi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sc(this,f);else{this.o=!1,this.s=3,it(12),Pr(this),ms(this);break e}}if(this.P){f=!0;let Lt;for(;!this.J&&this.C<B.length;)if(Lt=sT(this,B),Lt==nc){Ke==4&&(this.s=4,it(14),f=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==xp){this.s=4,it(15),oi(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else oi(this.i,this.l,Lt,null),sc(this,Lt);if(Dp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||B.length!=0||this.h.h||(this.s=1,it(16),f=!1),this.o=this.o&&f,!f)oi(this.i,this.l,B,"[Invalid Chunked Response]"),Pr(this),ms(this);else if(0<B.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),hc(He),He.M=!0,it(11))}}else oi(this.i,this.l,B,null),sc(this,B);Ke==4&&Pr(this),this.o&&!this.J&&(Ke==4?sm(this.j,this):(this.o=!1,aa(this)))}else TT(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Pr(this),ms(this)}}}catch{}finally{}};function Dp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function sT(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?nc:(f=Number(h.substring(f,g)),isNaN(f)?xp:(g+=1,g+f>h.length?nc:(h=h.slice(g,g+f),a.C=g+f,h)))}On.prototype.cancel=function(){this.J=!0,Pr(this)};function aa(a){a.S=Date.now()+a.I,Op(a,a.I)}function Op(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fs(m(a.ba,a),h)}function ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}On.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(rT(this.i,this.A),this.L!=2&&(ds(),it(17)),Pr(this),this.s=2,ms(this)):Op(this,this.S-a)};function ms(a){a.j.G==0||a.J||sm(a.j,a)}function Pr(a){ic(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ep(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function sc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||oc(f.h,a))){if(!a.K&&oc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ga(f),pa(f);else break e;cc(f),it(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=fs(m(f.Za,f),6e3));if(1>=bp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else kr(f,11)}else if((a.K||f.g==a)&&ga(f),!v(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let ie=N[h];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const He=ie[3];He!=null&&(f.la=He,f.j.info("VER="+f.la));const Ke=ie[4];Ke!=null&&(f.Aa=Ke,f.j.info("SVER="+f.Aa));const ui=ie[5];ui!=null&&typeof ui=="number"&&0<ui&&(g=1.5*ui,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Lt=a.g;if(Lt){const va=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(va){var L=g.h;L.g||va.indexOf("spdy")==-1&&va.indexOf("quic")==-1&&va.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ac(L,L.h),L.h=null))}if(g.D){const dc=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(g.ya=dc,he(g.I,g.D,dc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=lm(g,g.J?g.ia:null,g.W),B.K){Mp(g.h,B);var ue=B,Me=g.L;Me&&(ue.I=Me),ue.B&&(ic(ue),aa(ue)),g.g=B}else rm(g);0<f.i.length&&ma(f)}else ie[0]!="stop"&&ie[0]!="close"||kr(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?kr(f,7):uc(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}ds(4)}catch{}}var oT=class{constructor(a,h){this.g=a,this.map=h}};function Vp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bp(a){return a.h?1:a.g?a.g.size:0}function oc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ac(a,h){a.g?a.g.add(h):a.h=h}function Mp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Vp.prototype.cancel=function(){if(this.i=jp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function jp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function aT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function lT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Fp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=lT(a),g=aT(a),N=g.length,L=0;L<N;L++)h.call(void 0,g[L],f&&f[L],a)}var Up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uT(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),N=null;if(0<=g){var L=a[f].substring(0,g);N=a[f].substring(g+1)}else L=a[f];h(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Rr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Rr){this.h=a.h,la(this,a.j),this.o=a.o,this.g=a.g,ua(this,a.s),this.l=a.l;var h=a.i,f=new vs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Bp(this,f),this.m=a.m}else a&&(h=String(a).match(Up))?(this.h=!1,la(this,h[1]||"",!0),this.o=gs(h[2]||""),this.g=gs(h[3]||"",!0),ua(this,h[4]),this.l=gs(h[5]||"",!0),Bp(this,h[6]||"",!0),this.m=gs(h[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}Rr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ys(h,$p,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ys(h,$p,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ys(f,f.charAt(0)=="/"?dT:hT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ys(f,pT)),a.join("")};function ln(a){return new Rr(a)}function la(a,h,f){a.j=f?gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ua(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Bp(a,h,f){h instanceof vs?(a.i=h,mT(a.i,a.h)):(f||(h=ys(h,fT)),a.i=new vs(h,a.h))}function he(a,h,f){a.i.set(h,f)}function ca(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ys(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,cT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function cT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var $p=/[#\/\?@]/g,hT=/[#\?:]/g,dT=/[#\?]/g,fT=/[#\?@]/g,pT=/#/g;function vs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Vn(a){a.g||(a.g=new Map,a.h=0,a.i&&uT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=vs.prototype,t.add=function(a,h){Vn(this),this.i=null,a=ai(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function zp(a,h){Vn(a),h=ai(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Wp(a,h){return Vn(a),h=ai(a,h),a.g.has(h)}t.forEach=function(a,h){Vn(this),this.g.forEach(function(f,g){f.forEach(function(N){a.call(h,N,g,this)},this)},this)},t.na=function(){Vn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const N=a[g];for(let L=0;L<N.length;L++)f.push(h[g])}return f},t.V=function(a){Vn(this);let h=[];if(typeof a=="string")Wp(this,a)&&(h=h.concat(this.g.get(ai(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Vn(this),this.i=null,a=ai(this,a),Wp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function qp(a,h,f){zp(a,h),0<f.length&&(a.i=null,a.g.set(ai(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const L=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var N=L;B[g]!==""&&(N+="="+encodeURIComponent(String(B[g]))),a.push(N)}}return this.i=a.join("&")};function ai(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function mT(a,h){h&&!a.j&&(Vn(a),a.i=null,a.g.forEach(function(f,g){var N=g.toLowerCase();g!=N&&(zp(this,g),qp(this,N,f))},a)),a.j=h}function gT(a,h){const f=new ps;if(l.Image){const g=new Image;g.onload=C(Ln,f,"TestLoadImage: loaded",!0,h,g),g.onerror=C(Ln,f,"TestLoadImage: error",!1,h,g),g.onabort=C(Ln,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=C(Ln,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function yT(a,h){const f=new ps,g=new AbortController,N=setTimeout(()=>{g.abort(),Ln(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(N),L.ok?Ln(f,"TestPingServer: ok",!0,h):Ln(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Ln(f,"TestPingServer: error",!1,h)})}function Ln(a,h,f,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(f)}catch{}}function vT(){this.g=new eT}function _T(a,h,f){const g=f||"";try{Fp(a,function(N,L){let B=N;c(N)&&(B=Xu(N)),h.push(g+L+"="+encodeURIComponent(B))})}catch(N){throw h.push(g+"type="+encodeURIComponent("_badmap")),N}}function ha(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ha,Ju),ha.prototype.g=function(){return new da(this.l,this.j)},ha.prototype.i=function(a){return function(){return a}}({});function da(a,h){qe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(da,qe),t=da.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?_s(this):ws(this),this.readyState==3&&Hp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,_s(this))},t.Qa=function(a){this.g&&(this.response=a,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ws(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kp(a){let h="";return U(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function lc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Kp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):he(a,h,f))}function Ee(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ee,qe);var wT=/^https?$/i,ET=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?Tp(this.o):Tp(tc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Gp(this,L);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)f.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())f.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ET,h,void 0))||g||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of f)this.g.setRequestHeader(L,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xp(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Gp(this,L)}};function Gp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Qp(a),fa(a)}function Qp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),fa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fa(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Yp(this):this.bb())},t.bb=function(){Yp(this)};function Yp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||un(a)!=4||a.Z()!=2)){if(a.u&&un(a)==4)vp(a.Ea,0,a);else if(rt(a,"readystatechange"),un(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=B===0){var N=String(a.D).match(Up)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),g=!wT.test(N?N.toLowerCase():"")}f=g}if(f)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var L=2<un(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",Qp(a)}}finally{fa(a)}}}}function fa(a,h){if(a.g){Xp(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||rt(a,"ready");try{f.onreadystatechange=g}catch{}}}function Xp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function un(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ZE(h)}};function Jp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function TT(a){const h={};a=(a.g&&2<=un(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=R(a[g]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[N]||[];h[N]=L,L.push(f)}w(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Zp(a){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,a),this.cb=Es("retryDelaySeedMs",1e4,a),this.Wa=Es("forwardChannelMaxRetries",2,a),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Vp(a&&a.concurrentRequestLimit),this.Da=new vT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Zp.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){it(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=lm(this,null,this.W),ma(this)};function uc(a){if(em(a),a.G==3){var h=a.U++,f=ln(a.I);if(he(f,"SID",a.K),he(f,"RID",h),he(f,"TYPE","terminate"),Ts(a,f),h=new On(a,a.j,h),h.L=2,h.v=ca(ln(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=um(h.j,null),h.g.ea(h.v)),h.F=Date.now(),aa(h)}am(a)}function pa(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function em(a){pa(a),a.u&&(l.clearTimeout(a.u),a.u=null),ga(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ma(a){if(!Lp(a.h)&&!a.s){a.s=!0;var h=a.Ga;nn||J(),$||(nn(),$=!0),Q.add(h,a),a.B=0}}function IT(a,h){return bp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fs(m(a.Ga,a,h),om(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new On(this,this.j,a);let L=this.o;if(this.S&&(L?(L=_(L),T(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=nm(this,N,h),f=ln(this.I),he(f,"RID",a),he(f,"CVER",22),this.D&&he(f,"X-HTTP-Session-Id",this.D),Ts(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(Kp(L)))+"&"+h:this.m&&lc(f,this.m,L)),ac(this.h,N),this.Ua&&he(f,"TYPE","init"),this.P?(he(f,"$req",h),he(f,"SID","null"),N.T=!0,rc(N,f,null)):rc(N,f,h),this.G=2}}else this.G==3&&(a?tm(this,a):this.i.length==0||Lp(this.h)||tm(this))};function tm(a,h){var f;h?f=h.l:f=a.U++;const g=ln(a.I);he(g,"SID",a.K),he(g,"RID",f),he(g,"AID",a.T),Ts(a,g),a.m&&a.o&&lc(g,a.m,a.o),f=new On(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=nm(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ac(a.h,f),rc(f,g,h)}function Ts(a,h){a.H&&U(a.H,function(f,g){he(h,g,f)}),a.l&&Fp({},function(f,g){he(h,g,f)})}function nm(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var N=a.i;let L=-1;for(;;){const B=["count="+f];L==-1?0<f?(L=N[0].g,B.push("ofs="+L)):L=0:B.push("ofs="+L);let ue=!0;for(let Me=0;Me<f;Me++){let ie=N[Me].g;const He=N[Me].map;if(ie-=L,0>ie)L=Math.max(0,N[Me].g-100),ue=!1;else try{_T(He,B,"req"+ie+"_")}catch{g&&g(He)}}if(ue){g=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function rm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;nn||J(),$||(nn(),$=!0),Q.add(h,a),a.v=0}}function cc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fs(m(a.Fa,a),om(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,im(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),pa(this),im(this))};function hc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function im(a){a.g=new On(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=ln(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),Ts(a,h),a.m&&a.o&&lc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ca(ln(h)),f.m=null,f.P=!0,Np(f,a)}t.Za=function(){this.C!=null&&(this.C=null,pa(this),cc(this),it(19))};function ga(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function sm(a,h){var f=null;if(a.g==h){ga(a),hc(a),a.g=null;var g=2}else if(oc(a.h,h))f=h.D,Mp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;g=ia(),rt(g,new Pp(g,f)),ma(a)}else rm(a);else if(N=h.s,N==3||N==0&&0<h.X||!(g==1&&IT(a,h)||g==2&&cc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function om(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function kr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const N=!g;g=new Rr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||la(g,"https"),ca(g),N?gT(g.toString(),f):yT(g.toString(),f)}else it(2);a.G=0,a.l&&a.l.sa(h),am(a),em(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function am(a){if(a.G=0,a.ka=[],a.l){const h=jp(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function lm(a,h,f){var g=f instanceof Rr?ln(f):new Rr(f);if(g.g!="")h&&(g.g=h+"."+g.g),ua(g,g.s);else{var N=l.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var L=new Rr(null);g&&la(L,g),h&&(L.g=h),N&&ua(L,N),f&&(L.l=f),g=L}return f=a.D,h=a.ya,f&&h&&he(g,f,h),he(g,"VER",a.la),Ts(a,g),g}function um(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ee(new ha({eb:f})):new Ee(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cm(){}t=cm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ya(){}ya.prototype.g=function(a,h){return new gt(a,h)};function gt(a,h){qe.call(this),this.g=new Zp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new li(this)}P(gt,qe),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){uc(this.g)},gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Xu(a),a=f);h.i.push(new oT(h.Ya++,a)),h.G==3&&ma(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,gt.aa.N.call(this)};function hm(a){Zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(hm,Zu);function dm(){ec.call(this),this.status=1}P(dm,ec);function li(a){this.g=a}P(li,cm),li.prototype.ua=function(){rt(this.g,"a")},li.prototype.ta=function(a){rt(this.g,new hm(a))},li.prototype.sa=function(a){rt(this.g,new dm)},li.prototype.ra=function(){rt(this.g,"b")},ya.prototype.createWebChannel=ya.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Ew=function(){return new ya},ww=function(){return ia()},_w=Cr,rd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sa.NO_ERROR=0,sa.TIMEOUT=8,sa.HTTP_ERROR=6,sl=sa,Rp.COMPLETE="complete",vw=Rp,Ip.EventType=hs,hs.OPEN="a",hs.CLOSE="b",hs.ERROR="c",hs.MESSAGE="d",qe.prototype.listen=qe.prototype.K,js=Ip,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,yw=Ee}).apply(typeof ja<"u"?ja:typeof self<"u"?self:typeof window<"u"?window:{});const ly="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let os="10.14.0";/**
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
 */const Qr=new Ef("@firebase/firestore");function Ns(){return Qr.logLevel}function q(t,...e){if(Qr.logLevel<=te.DEBUG){const n=e.map(Of);Qr.debug(`Firestore (${os}): ${t}`,...n)}}function Rn(t,...e){if(Qr.logLevel<=te.ERROR){const n=e.map(Of);Qr.error(`Firestore (${os}): ${t}`,...n)}}function Hi(t,...e){if(Qr.logLevel<=te.WARN){const n=e.map(Of);Qr.warn(`Firestore (${os}): ${t}`,...n)}}function Of(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function ae(t,e){t||G()}function X(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Tw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ek{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Tk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ik{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new En;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new En,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new En)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new Tw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Xe(e)}}class Sk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ak{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Sk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ck{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new Ck(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Rk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Iw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Rk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new De(0,0))}static max(){return new Y(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Ao{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const kk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends Ao{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return kk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(fe.fromString(e))}static fromName(e){return new H(fe.fromString(e).popFirst(5))}static empty(){return new H(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new fe(e.slice()))}}function xk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new fr(i,H.empty(),e)}function Nk(t){return new fr(t.readTime,t.key,-1)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(Y.min(),H.empty(),-1)}static max(){return new fr(Y.max(),H.empty(),-1)}}function Dk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ok="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qo(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Ok)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Lk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ho(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vf.oe=-1;function Ru(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function bk(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function uy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fa(this.root,e,this.comparator,!0)}}class Fa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=s??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cy(this.data.getIterator())}getIteratorFrom(e){return new cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _t{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new _t([])}unionWith(e){let n=new $e(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Aw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Aw("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Mk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=Mk.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function Lf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bf(t){const e=t.mapValue.fields.__previous_value__;return Lf(e)?bf(e):e}function Co(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class jk{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ua={mapValue:{}};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lf(t)?4:Uk(t)?9007199254740991:Fk(t)?10:11:G()}function tn(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pr(i.timestampValue),l=pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yr(i.bytesValue).isEqual(Yr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Ql(o)===Ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(uy(o)!==uy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function Ro(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return hy(t.timestampValue,e.timestampValue);case 4:return hy(Co(t),Co(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Yr(s),u=Yr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=se(l[c],u[c]);if(d!==0)return d}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Ae(s.latitude),Ae(o.latitude));return l!==0?l:se(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return dy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},C=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=se(((c=C==null?void 0:C.values)===null||c===void 0?void 0:c.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:dy(C,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ua.mapValue&&o===Ua.mapValue)return 0;if(s===Ua.mapValue)return 1;if(o===Ua.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=se(u[p],d[p]);if(m!==0)return m;const C=Gi(l[u[p]],c[d[p]]);if(C!==0)return C}return se(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G()}}function hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=pr(t),r=pr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function dy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Gi(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Qi(t){return id(t)}function id(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=id(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${id(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function fy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sd(t){return!!t&&"integerValue"in t}function Mf(t){return!!t&&"arrayValue"in t}function py(t){return!!t&&"nullValue"in t}function my(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function Fk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Uk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Js(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Js(this.value))}}function Cw(t){const e=[];return ni(t.fields,(n,r)=>{const i=new Ue([n]);if(ol(r)){const s=Cw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yl{constructor(e,n){this.position=e,this.inclusive=n}}function gy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function yy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Pw{}class ke extends Pw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zk(e,n,r):n==="array-contains"?new Hk(e,r):n==="in"?new Kk(e,r):n==="not-in"?new Gk(e,r):n==="array-contains-any"?new Qk(e,r):new ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Wk(e,r):new qk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gi(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Pw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return Rw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rw(t){return t.op==="and"}function kw(t){return $k(t)&&Rw(t)}function $k(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function od(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(kw(t))return t.filters.map(e=>od(e)).join(",");{const e=t.filters.map(n=>od(n)).join(",");return`${t.op}(${e})`}}function xw(t,e){return t instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&xw(o,i.filters[l]),!0):!1}(t,e):void G()}function Nw(t){return t instanceof ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Qi(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(Nw).join(" ,")+"}"}(t):"Filter"}class zk extends ke{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class Wk extends ke{constructor(e,n){super(e,"in",n),this.keys=Dw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qk extends ke{constructor(e,n){super(e,"not-in",n),this.keys=Dw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class Hk extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mf(n)&&Ro(n.arrayValue,this.value)}}class Kk extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ro(this.value.arrayValue,n)}}class Gk extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ro(this.value.arrayValue,n)}}class Qk extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ro(this.value.arrayValue,r))}}/**
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
 */class Yk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function vy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Yk(t,e,n,r,i,s,o)}function jf(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>od(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ru(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qi(r)).join(",")),e.ue=n}return e.ue}function Ff(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yy(t.startAt,e.startAt)&&yy(t.endAt,e.endAt)}function ad(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class as{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Xk(t,e,n,r,i,s,o,l){return new as(t,e,n,r,i,s,o,l)}function Uf(t){return new as(t)}function _y(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ow(t){return t.collectionGroup!==null}function Zs(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ko(s,r))}),n.has(Ue.keyField().canonicalString())||e.ce.push(new ko(Ue.keyField(),r))}return e.ce}function Zt(t){const e=X(t);return e.le||(e.le=Jk(e,Zs(t))),e.le}function Jk(t,e){if(t.limitType==="F")return vy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ko(i.field,s)});const n=t.endAt?new Yl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yl(t.startAt.position,t.startAt.inclusive):null;return vy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ld(t,e){const n=t.filters.concat([e]);return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ud(t,e,n){return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ku(t,e){return Ff(Zt(t),Zt(e))&&t.limitType===e.limitType}function Vw(t){return`${jf(Zt(t))}|lt:${t.limitType}`}function hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Nw(i)).join(", ")}]`),Ru(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qi(i)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function xu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Zs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=gy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Zs(r),i)||r.endAt&&!function(o,l,u){const c=gy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Zs(r),i))}(t,e)}function Zk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lw(t){return(e,n)=>{let r=!1;for(const i of Zs(t)){const s=ex(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ex(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Gi(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Sw(this.inner)}size(){return this.innerSize}}/**
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
 */const tx=new we(H.comparator);function kn(){return tx}const bw=new we(H.comparator);function Fs(...t){let e=bw;for(const n of t)e=e.insert(n.key,n);return e}function Mw(t){let e=bw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return eo()}function jw(){return eo()}function eo(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const nx=new we(H.comparator),rx=new $e(H.comparator);function ee(...t){let e=rx;for(const n of t)e=e.add(n);return e}const ix=new $e(se);function sx(){return ix}/**
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
 */function Bf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function Fw(t){return{integerValue:""+t}}function ox(t,e){return bk(e)?Fw(e):Bf(t,e)}/**
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
 */class Nu{constructor(){this._=void 0}}function ax(t,e,n){return t instanceof Xl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Lf(s)&&(s=bf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof xo?Bw(t,e):t instanceof No?$w(t,e):function(i,s){const o=Uw(i,s),l=wy(o)+wy(i.Pe);return sd(o)&&sd(i.Pe)?Fw(l):Bf(i.serializer,l)}(t,e)}function lx(t,e,n){return t instanceof xo?Bw(t,e):t instanceof No?$w(t,e):n}function Uw(t,e){return t instanceof Jl?function(r){return sd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xl extends Nu{}class xo extends Nu{constructor(e){super(),this.elements=e}}function Bw(t,e){const n=zw(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class No extends Nu{constructor(e){super(),this.elements=e}}function $w(t,e){let n=zw(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Jl extends Nu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function wy(t){return Ae(t.integerValue||t.doubleValue)}function zw(t){return Mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ux(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xo&&i instanceof xo||r instanceof No&&i instanceof No?Ki(r.elements,i.elements,tn):r instanceof Jl&&i instanceof Jl?tn(r.Pe,i.Pe):r instanceof Xl&&i instanceof Xl}(t.transform,e.transform)}class cx{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Du{}function Ww(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $f(t.key,Nt.none()):new Ko(t.key,t.data,Nt.none());{const n=t.data,r=ct.empty();let i=new $e(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Sr(t.key,r,new _t(i.toArray()),Nt.none())}}function hx(t,e,n){t instanceof Ko?function(i,s,o){const l=i.value.clone(),u=Ty(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(i,s,o){if(!al(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ty(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function to(t,e,n,r){return t instanceof Ko?function(s,o,l,u){if(!al(s.precondition,o))return l;const c=s.value.clone(),d=Iy(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(s,o,l,u){if(!al(s.precondition,o))return l;const c=Iy(s.fieldTransforms,u,o),d=o.data;return d.setAll(qw(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return al(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Uw(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ki(r,i,(s,o)=>ux(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends Du{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Sr extends Du{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ty(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,lx(o,l,n[i]))}return r}function Iy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ax(s,o,e))}return r}class $f extends Du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fx extends Du{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class px{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Ww(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>Ey(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>Ey(n,r))}}class zf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return nx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zf(e,n,r,i)}}/**
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
 */class mx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,ne;function yx(t){switch(t){default:return G();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Hw(t){if(t===void 0)return Rn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Pe.OK:return b.OK;case Pe.CANCELLED:return b.CANCELLED;case Pe.UNKNOWN:return b.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return b.INTERNAL;case Pe.UNAVAILABLE:return b.UNAVAILABLE;case Pe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Pe.NOT_FOUND:return b.NOT_FOUND;case Pe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Pe.ABORTED:return b.ABORTED;case Pe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Pe.DATA_LOSS:return b.DATA_LOSS;default:return G()}}(ne=Pe||(Pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vx(){return new TextEncoder}/**
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
 */const _x=new Ur([4294967295,4294967295],0);function Sy(t){const e=vx().encode(t),n=new gw;return n.update(e),new Uint8Array(n.digest())}function Ay(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([i,s],0)]}class Wf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Us(`Invalid padding: ${n}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Us(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ur.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ur.fromNumber(r)));return i.compare(_x)===1&&(i=new Ur([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Sy(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Sy(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ou{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ou(Y.min(),i,new we(se),kn(),ee())}}class Go{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Go(r,n,ee(),ee(),ee())}}/**
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
 */class ll{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Kw{constructor(e,n){this.targetId=e,this.me=n}}class Gw{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cy{constructor(){this.fe=0,this.ge=Ry(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Go(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ry()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wx{constructor(e){this.Le=e,this.Be=new Map,this.ke=kn(),this.qe=Py(),this.Qe=new we(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ad(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Ze.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Yr(r).toUint8Array()}catch(u){if(u instanceof Aw)return Hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Wf(o,i,s)}catch(u){return Hi(u instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ad(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ou(e,n,this.Qe,this.ke,r);return this.ke=kn(),this.qe=Py(),this.Qe=new we(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Cy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $e(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Py(){return new we(H.comparator)}function Ry(){return new we(H.comparator)}const Ex={asc:"ASCENDING",desc:"DESCENDING"},Tx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ix={and:"AND",or:"OR"};class Sx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cd(t,e){return t.useProto3Json||Ru(e)?e:{value:e}}function Zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ax(t,e){return Zl(t,e.toTimestamp())}function en(t){return ae(!!t),Y.fromTimestamp(function(n){const r=pr(n);return new De(r.seconds,r.nanos)}(t))}function qf(t,e){return hd(t,e).canonicalString()}function hd(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Yw(t){const e=fe.fromString(t);return ae(tE(e)),e}function dd(t,e){return qf(t.databaseId,e.path)}function Kc(t,e){const n=Yw(e);if(n.get(1)!==t.databaseId.projectId)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Jw(n))}function Xw(t,e){return qf(t.databaseId,e)}function Cx(t){const e=Yw(t);return e.length===4?fe.emptyPath():Jw(e)}function fd(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jw(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ky(t,e,n){return{name:dd(t,e),fields:n.value.mapValue.fields}}function Px(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ae(d===void 0||typeof d=="string"),We.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),We.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?b.UNKNOWN:Hw(c.code);return new z(d,c.message||"")}(o);n=new Gw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kc(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):Y.min(),l=new ct({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new ll(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kc(t,r.document),s=r.readTime?en(r.readTime):Y.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ll([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kc(t,r.document),s=r.removedTargetIds||[];n=new ll([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gx(i,s),l=r.targetId;n=new Kw(l,o)}}return n}function Rx(t,e){let n;if(e instanceof Ko)n={update:ky(t,e.key,e.value)};else if(e instanceof $f)n={delete:dd(t,e.key)};else if(e instanceof Sr)n={update:ky(t,e.key,e.data),updateMask:Mx(e.fieldMask)};else{if(!(e instanceof fx))return G();n={verify:dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof No)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Jl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ax(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function kx(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(Y.min())&&(o=en(s)),new cx(o,i.transformResults||[])}(n,e))):[]}function xx(t,e){return{documents:[Xw(t,e.path)]}}function Nx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Xw(t,i);const s=function(c){if(c.length!==0)return eE(Wt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:di(m.field),direction:Vx(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=cd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Dx(t){let e=Cx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=Zw(p);return m instanceof Wt&&kw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new ko(fi(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ru(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,C=p.values||[];return new Yl(C,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,C=p.values||[];return new Yl(C,m)}(n.endAt)),Xk(e,i,o,s,l,"F",u,c)}function Ox(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fi(n.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fi(n.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fi(n.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(n.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return ke.create(fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>Zw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function Vx(t){return Ex[t]}function Lx(t){return Tx[t]}function bx(t){return Ix[t]}function di(t){return{fieldPath:t.canonicalString()}}function fi(t){return Ue.fromServerFormat(t.fieldPath)}function eE(t){return t instanceof ke?function(n){if(n.op==="=="){if(my(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if(py(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(my(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if(py(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:Lx(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(i=>eE(i));return r.length===1?r[0]:{compositeFilter:{op:bx(n.op),filters:r}}}(t):G()}function Mx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Yn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jx{constructor(e){this.ct=e}}function Fx(t){const e=Dx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ud(e,e.limit,"L"):e}/**
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
 */class Ux{constructor(){this.un=new Bx}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(fr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Bx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(fe.comparator)).toArray()}}/**
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
 */class Yi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Yi(0)}static kn(){return new Yi(-1)}}/**
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
 */class $x{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Wx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&to(r.mutation,i,_t.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=kn();const o=eo(),l=function(){return eo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Sr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),to(d.mutation,c,d.mutation.getFieldMask(),De.now())):o.set(c.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new zx(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=eo();let i=new we((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||_t.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=jw();d.forEach(m=>{if(!s.has(m)){const C=Ww(n.get(m),r.get(m));C!==null&&p.set(m,C),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ow(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Mr());let l=-1,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(d=>({batchId:l,changes:Mw(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new as(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Ze.newInvalidDocument(d)))});let l=Fs();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&to(d.mutation,c,_t.empty(),De.now()),xu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class qx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:en(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Fx(i.bundledQuery),readTime:en(i.readTime)}}(n)),M.resolve()}}/**
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
 */class Hx{constructor(){this.overlays=new we(H.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Mr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Mr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mx(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class Kx{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Hf{constructor(){this.Tr=new $e(Ve.Er),this.dr=new $e(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new fe([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
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
 */class Gx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $e(Ve.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new px(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(se);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new $e(se);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Qx{constructor(e){this.Mr=e,this.docs=function(){return new we(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Dk(Nk(d),r)<=0||(i.has(d.key)||xu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Yx(this)}getSize(e){return M.resolve(this.size)}}class Yx extends $x{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Xx{constructor(e){this.persistence=e,this.Nr=new ls(n=>jf(n),Ff),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hf,this.targetCount=0,this.kr=Yi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class Jx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vf(0),this.Kr=!1,this.Kr=!0,this.$r=new Kx,this.referenceDelegate=e(this),this.Ur=new Xx(this),this.indexManager=new Ux,this.remoteDocumentCache=function(i){return new Qx(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new jx(n),this.Gr=new qx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Gx(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new Zx(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Zx extends Vk{constructor(e){super(),this.currentSequenceNumber=e}}class Kf{constructor(e){this.persistence=e,this.Jr=new Hf,this.Yr=null}static Zr(e){return new Kf(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gf(e,n.fromCache,r,i)}}/**
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
 */class eN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bA()?8:Lk(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new eN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ns()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Ns()<=te.DEBUG&&q("QueryEngine","Query:",hi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ns()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):M.resolve())}Yi(e,n){if(_y(n))return M.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ud(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,ud(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return _y(n)||i.isEqual(Y.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(Ns()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hi(n)),this.rs(e,o,n,xk(i,-1)).next(l=>l))})}ts(e,n){let r=new $e(Lw(e));return n.forEach((i,s)=>{xu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ns()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",hi(n)),this.Ji.getDocumentsMatchingQuery(e,n,fr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class nN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(se),this._s=new ls(s=>jf(s),Ff),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Wx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rN(t,e,n,r){return new nN(t,e,n,r)}async function nE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function iN(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let C=M.resolve();return m.forEach(P=>{C=C.next(()=>d.getEntry(u,P)).next(k=>{const O=c.docVersions.get(P);ae(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function sN(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let C=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?C=C.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(d.resumeToken,r)),i=i.insert(p,C),function(k,O,I){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,C,d)&&l.push(n.Ur.updateTargetData(s,C))});let u=kn(),c=ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(oN(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(Y.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function oN(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function aN(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lN(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function pd(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ho(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function xy(t,e,n){const r=X(t);let i=Y.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p._s.get(d);return m!==void 0?M.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,Zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ee())).next(l=>(uN(r,Zk(e),l),{documents:l,Ts:s})))}function uN(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Ny{constructor(){this.activeTargetIds=sx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cN{constructor(){this.so=new Ny,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ny,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hN{_o(e){}shutdown(){}}/**
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
 */class Dy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ba=null;function Gc(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
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
 */const dN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ye="WebChannelConnection";class pN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Gc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Hi("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=dN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Gc();return new Promise((o,l)=>{const u=new yw;u.setWithCredentials(!0),u.listenOnce(vw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case sl.NO_ERROR:const d=u.getResponseJson();q(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case sl.TIMEOUT:q(Ye,`RPC '${e}' ${s} timed out`),l(new z(b.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const p=u.getStatus();if(q(Ye,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const C=m==null?void 0:m.error;if(C&&C.status&&C.message){const P=function(O){const I=O.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(I)>=0?I:b.UNKNOWN}(C.status);l(new z(P,C.message))}else l(new z(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(b.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{q(Ye,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(Ye,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Gc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ew(),l=ww(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(Ye,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,C=!1;const P=new fN({Io:O=>{C?q(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(m||(q(Ye,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(Ye,`RPC '${e}' stream ${i} sending:`,O),p.send(O))},To:()=>p.close()}),k=(O,I,v)=>{O.listen(I,S=>{try{v(S)}catch(V){setTimeout(()=>{throw V},0)}})};return k(p,js.EventType.OPEN,()=>{C||(q(Ye,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),k(p,js.EventType.CLOSE,()=>{C||(C=!0,q(Ye,`RPC '${e}' stream ${i} transport closed`),P.So())}),k(p,js.EventType.ERROR,O=>{C||(C=!0,Hi(Ye,`RPC '${e}' stream ${i} transport errored:`,O),P.So(new z(b.UNAVAILABLE,"The operation could not be completed")))}),k(p,js.EventType.MESSAGE,O=>{var I;if(!C){const v=O.data[0];ae(!!v);const S=v,V=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(V){q(Ye,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let U=function(E){const T=Pe[E];if(T!==void 0)return Hw(T)}(j),w=V.message;U===void 0&&(U=b.INTERNAL,w="Unknown error status: "+j+" with message "+V.message),C=!0,P.So(new z(U,w)),p.close()}else q(Ye,`RPC '${e}' stream ${i} received:`,v),P.bo(v)}}),k(l,_w.STAT_EVENT,O=>{O.stat===rd.PROXY?q(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===rd.NOPROXY&&q(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Qc(){return typeof document<"u"?document:null}/**
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
 */function Vu(t){return new Sx(t,!0)}/**
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
 */class iE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class sE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new iE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mN extends sE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Px(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?en(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=fd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ad(u)?{documents:xx(s,u)}:{query:Nx(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Qw(s,o.resumeToken);const c=cd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Zl(s,o.snapshotVersion.toTimestamp());const c=cd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Ox(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=fd(this.serializer),n.removeTarget=e,this.a_(n)}}class gN extends sE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=kx(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=fd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rx(this.serializer,r))};this.a_(n)}}/**
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
 */class yN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,hd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(b.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,hd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(b.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class vN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _N{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ri(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await Qo(c),c.q_.set("Unknown"),c.L_.delete(4),await Lu(c)}(this))})}),this.q_=new vN(r,i)}}async function Lu(t){if(ri(t))for(const e of t.B_)await e(!0)}async function Qo(t){for(const e of t.B_)await e(!1)}function oE(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jf(n)?Xf(n):us(n).r_()&&Yf(n,e))}function Qf(t,e){const n=X(t),r=us(n);n.N_.delete(e),r.r_()&&aE(n,e),n.N_.size===0&&(r.r_()?r.o_():ri(n)&&n.q_.set("Unknown"))}function Yf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}us(t).A_(e)}function aE(t,e){t.Q_.xe(e),us(t).R_(e)}function Xf(t){t.Q_=new wx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),us(t).start(),t.q_.v_()}function Jf(t){return ri(t)&&!us(t).n_()&&t.N_.size>0}function ri(t){return X(t).L_.size===0}function lE(t){t.Q_=void 0}async function wN(t){t.q_.set("Online")}async function EN(t){t.N_.forEach((e,n)=>{Yf(t,e)})}async function TN(t,e){lE(t),Jf(t)?(t.q_.M_(e),Xf(t)):t.q_.set("Unknown")}async function IN(t,e,n){if(t.q_.set("Online"),e instanceof Gw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eu(t,r)}else if(e instanceof ll?t.Q_.Ke(e):e instanceof Kw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await rE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(We.EMPTY_BYTE_STRING,d.snapshotVersion)),aE(s,u);const p=new Yn(d.target,u,c,d.sequenceNumber);Yf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await eu(t,r)}}async function eu(t,e,n){if(!Ho(e))throw e;t.L_.add(1),await Qo(t),t.q_.set("Offline"),n||(n=()=>rE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Lu(t)})}function uE(t,e){return e().catch(n=>eu(t,n,e))}async function bu(t){const e=X(t),n=mr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;SN(e);)try{const i=await aN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,AN(e,i)}catch(i){await eu(e,i)}cE(e)&&hE(e)}function SN(t){return ri(t)&&t.O_.length<10}function AN(t,e){t.O_.push(e);const n=mr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function cE(t){return ri(t)&&!mr(t).n_()&&t.O_.length>0}function hE(t){mr(t).start()}async function CN(t){mr(t).p_()}async function PN(t){const e=mr(t);for(const n of t.O_)e.m_(n.mutations)}async function RN(t,e,n){const r=t.O_.shift(),i=zf.from(r,e,n);await uE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bu(t)}async function kN(t,e){e&&mr(t).V_&&await async function(r,i){if(function(o){return yx(o)&&o!==b.ABORTED}(i.code)){const s=r.O_.shift();mr(r).s_(),await uE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bu(r)}}(t,e),cE(t)&&hE(t)}async function Oy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ri(n);n.L_.add(3),await Qo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Lu(n)}async function xN(t,e){const n=X(t);e?(n.L_.delete(2),await Lu(n)):e||(n.L_.add(2),await Qo(n),n.q_.set("Unknown"))}function us(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new mN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:wN.bind(null,t),Ro:EN.bind(null,t),mo:TN.bind(null,t),d_:IN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jf(t)?Xf(t):t.q_.set("Unknown")):(await t.K_.stop(),lE(t))})),t.K_}function mr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new gN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:CN.bind(null,t),mo:kN.bind(null,t),f_:PN.bind(null,t),g_:RN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await bu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Zf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Zf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ep(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),Ho(t))return new z(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Vy{constructor(){this.W_=new we(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xi{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Xi(e,n,bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class NN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class DN{constructor(){this.queries=Ly(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Ly(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(b.ABORTED,"Firestore shutting down"))}}function Ly(){return new ls(t=>Vw(t),ku)}async function dE(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new NN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=ep(o,`Initialization of query '${hi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&tp(n)}async function fE(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ON(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&tp(n)}function VN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function tp(t){t.Y_.forEach(e=>{e.next()})}var md,by;(by=md||(md={})).ea="default",by.Cache="cache";class pE{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==md.Cache}}/**
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
 */class mE{constructor(e){this.key=e}}class gE{constructor(e){this.key=e}}class LN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=Lw(e),this.Ra=new bi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Vy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),C=xu(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let O=!1;m&&C?m.data.isEqual(C.data)?P!==k&&(r.track({type:3,doc:C}),O=!0):this.ga(m,C)||(r.track({type:2,doc:C}),O=!0,(u&&this.Aa(C,u)>0||c&&this.Aa(C,c)<0)&&(l=!0)):!m&&C?(r.track({type:0,doc:C}),O=!0):m&&!C&&(r.track({type:1,doc:m}),O=!0,(u||c)&&(l=!0)),O&&(C?(o=o.add(C),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(C,P){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return k(C)-k(P)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Xi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Vy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new gE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new mE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Xi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class bN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MN{constructor(e){this.key=e,this.va=!1}}class jN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ls(l=>Vw(l),ku),this.Ma=new Map,this.xa=new Set,this.Oa=new we(H.comparator),this.Na=new Map,this.La=new Hf,this.Ba={},this.ka=new Map,this.qa=Yi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function FN(t,e,n=!0){const r=TE(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await yE(r,e,n,!0),i}async function UN(t,e){const n=TE(t);await yE(n,e,!0,!1)}async function yE(t,e,n,r){const i=await lN(t.localStore,Zt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await BN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&oE(t.remoteStore,i),l}async function BN(t,e,n,r,i){t.Ka=(p,m,C)=>async function(k,O,I,v){let S=O.view.ma(I);S.ns&&(S=await xy(k.localStore,O.query,!1).then(({documents:w})=>O.view.ma(w,S)));const V=v&&v.targetChanges.get(O.targetId),j=v&&v.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(S,k.isPrimaryClient,V,j);return jy(k,O.targetId,U.wa),U.snapshot}(t,p,m,C);const s=await xy(t.localStore,e,!0),o=new LN(e,s.Ts),l=o.ma(s.documents),u=Go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);jy(t,n,c.wa);const d=new bN(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function $N(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ku(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Qf(r.remoteStore,i.targetId),gd(r,i.targetId)}).catch(qo)):(gd(r,i.targetId),await pd(r.localStore,i.targetId,!0))}async function zN(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Qf(n.remoteStore,r.targetId))}async function WN(t,e,n){const r=XN(t);try{const i=await function(o,l){const u=X(o),c=De.now(),d=l.reduce((C,P)=>C.add(P.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=kn(),k=ee();return u.cs.getEntries(C,d).next(O=>{P=O,P.forEach((I,v)=>{v.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,P)).next(O=>{p=O;const I=[];for(const v of l){const S=dx(v,p.get(v.key).overlayedDocument);S!=null&&I.push(new Sr(v.key,S,Cw(S.value.mapValue),Nt.exists(!0)))}return u.mutationQueue.addMutationBatch(C,c,I,l)}).next(O=>{m=O;const I=O.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(C,O.batchId,I)})}).then(()=>({batchId:m.batchId,changes:Mw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new we(se)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Yo(r,i.changes),await bu(r.remoteStore)}catch(i){const s=ep(i,"Failed to persist write");n.reject(s)}}async function vE(t,e){const n=X(t);try{const r=await sN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Yo(n,r,e)}catch(r){await qo(r)}}function My(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&tp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(H.comparator);o=o.insert(s,Ze.newNoDocument(s,Y.min()));const l=ee().add(s),u=new Ou(Y.min(),new Map,new we(se),o,l);await vE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),np(r)}else await pd(r.localStore,e,!1).then(()=>gd(r,e,n)).catch(qo)}async function HN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await iN(n.localStore,e);wE(n,r,null),_E(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,i)}catch(i){await qo(i)}}async function KN(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);wE(r,e,n),_E(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,i)}catch(i){await qo(i)}}function _E(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function wE(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||EE(t,r)})}function EE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Qf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),np(t))}function jy(t,e,n){for(const r of n)r instanceof mE?(t.La.addReference(r.key,e),GN(t,r)):r instanceof gE?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||EE(t,r.key)):G()}function GN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),np(t))}function np(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new MN(n)),t.Oa=t.Oa.insert(n,r),oE(t.remoteStore,new Yn(Zt(Uf(n.path)),r,"TargetPurposeLimboResolution",Vf.oe))}}async function Yo(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Gf.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.$i,C=>d.persistence.referenceDelegate.addReference(p,m.targetId,C)).next(()=>M.forEach(m.Ui,C=>d.persistence.referenceDelegate.removeReference(p,m.targetId,C)))))}catch(p){if(!Ho(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const C=d.os.get(m),P=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(m,k)}}}(r.localStore,s))}async function QN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await nE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(b.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.hs)}}function YN(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function TE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qN.bind(null,e),e.Ca.d_=ON.bind(null,e.eventManager),e.Ca.$a=VN.bind(null,e.eventManager),e}function XN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KN.bind(null,e),e}class tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rN(this.persistence,new tN,e.initialUser,this.serializer)}Ga(e){return new Jx(Kf.Zr,this.serializer)}Wa(e){return new cN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tu.provider={build:()=>new tu};class yd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>My(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QN.bind(null,this.syncEngine),await xN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DN}()}createDatastore(e){const n=Vu(e.databaseInfo.databaseId),r=function(s){return new pN(s)}(e.databaseInfo);return function(s,o,l,u){return new yN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _N(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>My(this.syncEngine,n,0),function(){return Dy.D()?new Dy:new hN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new jN(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Qo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}yd.provider={build:()=>new yd};/**
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
 */class IE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class JN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=Iw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ep(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZN(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Oy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Oy(e.remoteStore,i)),t._onlineComponents=e}async function ZN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Hi("Error using user provided cache. Falling back to memory cache: "+n),await Yc(t,new tu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Yc(t,new tu);return t._offlineComponents}async function SE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Fy(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Fy(t,new yd))),t._onlineComponents}function e2(t){return SE(t).then(e=>e.syncEngine)}async function AE(t){const e=await SE(t),n=e.eventManager;return n.onListen=FN.bind(null,e.syncEngine),n.onUnlisten=$N.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=UN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zN.bind(null,e.syncEngine),n}function t2(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new IE({next:m=>{d.Za(),o.enqueueAndForget(()=>fE(s,p));const C=m.docs.has(l);!C&&m.fromCache?c.reject(new z(b.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&m.fromCache&&u&&u.source==="server"?c.reject(new z(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new pE(Uf(l.path),d,{includeMetadataChanges:!0,_a:!0});return dE(s,p)}(await AE(t),t.asyncQueue,e,n,r)),r.promise}function n2(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new IE({next:m=>{d.Za(),o.enqueueAndForget(()=>fE(s,p)),m.fromCache&&u.source==="server"?c.reject(new z(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new pE(l,d,{includeMetadataChanges:!0,_a:!0});return dE(s,p)}(await AE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function CE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Uy=new Map;/**
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
 */function PE(t,e,n){if(!n)throw new z(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function r2(t,e,n,r){if(e===!0&&r===!0)throw new z(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function By(t){if(!H.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $y(t){if(H.isDocumentKey(t))throw new z(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mu(t);throw new z(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class zy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ju{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ek;switch(r.type){case"firstParty":return new Ak(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Uy.get(n);r&&(q("ComponentProvider","Removing Datastore"),Uy.delete(n),r.terminate())}(this),Promise.resolve()}}function i2(t,e,n,r={}){var i;const s=(t=Jr(t,ju))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=kA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(c)}t._authCredentials=new Tk(new Tw(l,u))}}/**
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
 */class ii{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ii(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class ur extends ii{constructor(e,n,r){super(e,n,Uf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new H(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function vd(t,e,...n){if(t=Oe(t),PE("collection","path",e),t instanceof ju){const r=fe.fromString(e,...n);return $y(r),new ur(t,null,r)}{if(!(t instanceof Tt||t instanceof ur))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return $y(r),new ur(t.firestore,null,r)}}function RE(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=Iw.newId()),PE("doc","path",e),t instanceof ju){const r=fe.fromString(e,...n);return By(r),new Tt(t,null,new H(r))}{if(!(t instanceof Tt||t instanceof ur))throw new z(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return By(r),new Tt(t.firestore,t instanceof ur?t.converter:null,new H(r))}}/**
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
 */class Wy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new iE(this,"async_queue_retry"),this.Vu=()=>{const r=Qc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new En;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ho(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Zf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Xo extends ju{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wy(e),this._firestoreClient=void 0,await e}}}function rp(t,e){const n=D0(),r="(default)",i=If(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=PA("firestore");s&&i2(i,...s)}return i}function Fu(t){if(t._terminated)throw new z(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||s2(t),t._firestoreClient}function s2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new jk(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,CE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new JN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ji(We.fromBase64String(e))}catch(n){throw new z(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ji(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Jo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function o2(){return new Jo("__name__")}/**
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
 */class ip{constructor(e){this._methodName=e}}/**
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
 */class sp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */class op{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const a2=/^__.*__$/;class l2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class kE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ap{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ap(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return nu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xE(this.Cu)&&a2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class u2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Vu(e)}Qu(e,n,r,i=!1){return new ap({Cu:e,methodName:n,qu:r,path:Ue.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lp(t){const e=t._freezeSettings(),n=Vu(t._databaseId);return new u2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NE(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);up("Data must be an object, but it was:",o,r);const l=DE(r,o);let u,c;if(s.merge)u=new _t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=_d(e,p,n);if(!o.contains(m))throw new z(b.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);VE(d,m)||d.push(m)}u=new _t(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new l2(new ct(l),u,c)}class Uu extends ip{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uu}}function c2(t,e,n,r){const i=t.Qu(1,e,n);up("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();ni(r,(u,c)=>{const d=cp(e,u,n);c=Oe(c);const p=i.Nu(d);if(c instanceof Uu)s.push(d);else{const m=Zo(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new _t(s);return new kE(o,l,i.fieldTransforms)}function h2(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[_d(e,r,n)],u=[i];if(s.length%2!=0)throw new z(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(_d(e,s[m])),u.push(s[m+1]);const c=[],d=ct.empty();for(let m=l.length-1;m>=0;--m)if(!VE(c,l[m])){const C=l[m];let P=u[m];P=Oe(P);const k=o.Nu(C);if(P instanceof Uu)c.push(C);else{const O=Zo(P,k);O!=null&&(c.push(C),d.set(C,O))}}const p=new _t(c);return new kE(d,p,o.fieldTransforms)}function d2(t,e,n,r=!1){return Zo(n,t.Qu(r?4:3,e))}function Zo(t,e){if(OE(t=Oe(t)))return up("Unsupported field value:",e,t),DE(t,e);if(t instanceof ip)return function(r,i){if(!xE(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Zo(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ox(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:Zl(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zl(i.serializer,s)}}if(r instanceof sp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ji)return{bytesValue:Qw(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof op)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Bf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Mu(r)}`)}(t,e)}function DE(t,e){const n={};return Sw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,i)=>{const s=Zo(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function OE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof sp||t instanceof Ji||t instanceof Tt||t instanceof ip||t instanceof op)}function up(t,e,n){if(!OE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Mu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function _d(t,e,n){if((e=Oe(e))instanceof Jo)return e._internalPath;if(typeof e=="string")return cp(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const f2=new RegExp("[~\\*/\\[\\]]");function cp(t,e,n){if(e.search(f2)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jo(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(b.INVALID_ARGUMENT,l+t+u)}function VE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class LE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p2 extends LE{data(){return super.data()}}function Bu(t,e){return typeof e=="string"?cp(t,e):e instanceof Jo?e._internalPath:e._delegate._internalPath}/**
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
 */function m2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{}class bE extends hp{}function ME(t,e,...n){let r=[];e instanceof hp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof dp).length,l=s.filter(u=>u instanceof $u).length;if(o>1||o>0&&l>0)throw new z(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $u extends bE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $u(e,n,r)}_apply(e){const n=this._parse(e);return jE(e._query,n),new ii(e.firestore,e.converter,ld(e._query,n))}_parse(e){const n=lp(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Hy(p,d);const C=[];for(const P of p)C.push(qy(u,s,P));m={arrayValue:{values:C}}}else m=qy(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Hy(p,d),m=d2(l,o,p,d==="in"||d==="not-in");return ke.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function g2(t,e,n){const r=e,i=Bu("where",t);return $u._create(i,r,n)}class dp extends hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)jE(o,u),o=ld(o,u)}(e._query,n),new ii(e.firestore,e.converter,ld(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fp extends bE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new fp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ko(s,o)}(e._query,this._field,this._direction);return new ii(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new as(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function y2(t,e="asc"){const n=e,r=Bu("orderBy",t);return fp._create(r,n)}function qy(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new z(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ow(e)&&n.indexOf("/")!==-1)throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!H.isDocumentKey(r))throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fy(t,new H(r))}if(n instanceof Tt)return fy(t,n._key);throw new z(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mu(n)}.`)}function Hy(t,e){if(!Array.isArray(t)||t.length===0)throw new z(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class v2{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new op(s)}convertGeoPoint(e){return new sp(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=pr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ae(tE(r));const i=new Po(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function FE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UE extends LE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ul extends UE{data(e={}){return super.data(e)}}class _2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ul(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Bs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Bs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:w2(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function w2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function E2(t){t=Jr(t,Tt);const e=Jr(t.firestore,Xo);return t2(Fu(e),t._key).then(n=>I2(e,t,n))}class BE extends v2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function $E(t){t=Jr(t,ii);const e=Jr(t.firestore,Xo),n=Fu(e),r=new BE(e);return m2(t._query),n2(n,t._query).then(i=>new _2(e,r,t,i))}function T2(t,e){const n=Jr(t.firestore,Xo),r=RE(t),i=FE(t.converter,e);return zE(n,[NE(lp(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function zE(t,e){return function(r,i){const s=new En;return r.asyncQueue.enqueueAndForget(async()=>WN(await e2(r),i,s)),s.promise}(Fu(t),e)}function I2(t,e,n){const r=n.docs.get(e._key),i=new BE(t);return new UE(t,i,e._key,r,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class S2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=lp(e)}set(e,n,r){this._verifyNotCommitted();const i=Xc(e,this._firestore),s=FE(i.converter,n,r),o=NE(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Nt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Xc(e,this._firestore);let o;return o=typeof(n=Oe(n))=="string"||n instanceof Jo?h2(this._dataReader,"WriteBatch.update",s._key,n,r,i):c2(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Nt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Xc(e,this._firestore);return this._mutations=this._mutations.concat(new $f(n._key,Nt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xc(t,e){if((t=Oe(t)).firestore!==e)throw new z(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function A2(t){return Fu(t=Jr(t,Xo)),new S2(t,e=>zE(t,e))}(function(e,n=!0){(function(i){os=i})(is),qi(new Hr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Xo(new Ik(r.getProvider("auth-internal")),new Pk(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),lr(ly,"4.7.3",e),lr(ly,"4.7.3","esm2017")})();let C2={data:""},P2=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||C2,R2=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,k2=/\/\*[^]*?\*\/|  +/g,Ky=/\n+/g,Hn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Hn(o,s):s+"{"+Hn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Hn(o,e?e.replace(/([^,])+/g,l=>s.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Hn.p?Hn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},cn={},WE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+WE(t[n]);return e}return t},x2=(t,e,n,r,i)=>{let s=WE(t),o=cn[s]||(cn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!cn[o]){let u=s!==t?t:(c=>{let d,p,m=[{}];for(;d=R2.exec(c.replace(k2,""));)d[4]?m.shift():d[3]?(p=d[3].replace(Ky," ").trim(),m.unshift(m[0][p]=m[0][p]||{})):m[0][d[1]]=d[2].replace(Ky," ").trim();return m[0]})(t);cn[o]=Hn(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&cn.g?cn.g:null;return n&&(cn.g=cn[o]),((u,c,d,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(cn[o],e,r,l),o},N2=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Hn(l,""):l===!1?"":l}return r+i+(o??"")},"");function zu(t){let e=this||{},n=t.call?t(e.p):t;return x2(n.unshift?n.raw?N2(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,P2(e.target),e.g,e.o,e.k)}let qE,wd,Ed;zu.bind({g:1});let xn=zu.bind({k:1});function D2(t,e,n,r){Hn.p=e,qE=t,wd=n,Ed=r}function Ar(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:wd&&wd()},l),n.o=/ *go\d+/.test(u),l.className=zu.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),Ed&&c[0]&&Ed(l),qE(c,l)}return i}}var O2=t=>typeof t=="function",ru=(t,e)=>O2(t)?t(e):t,V2=(()=>{let t=0;return()=>(++t).toString()})(),HE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),L2=20,cl=new Map,b2=1e3,Gy=t=>{if(cl.has(t))return;let e=setTimeout(()=>{cl.delete(t),si({type:4,toastId:t})},b2);cl.set(t,e)},M2=t=>{let e=cl.get(t);e&&clearTimeout(e)},Td=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,L2)};case 1:return e.toast.id&&M2(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?Td(t,{type:1,toast:n}):Td(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Gy(r):t.toasts.forEach(s=>{Gy(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},hl=[],dl={toasts:[],pausedAt:void 0},si=t=>{dl=Td(dl,t),hl.forEach(e=>{e(dl)})},j2={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F2=(t={})=>{let[e,n]=D.useState(dl);D.useEffect(()=>(hl.push(n),()=>{let i=hl.indexOf(n);i>-1&&hl.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||j2[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},U2=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||V2()}),ea=t=>(e,n)=>{let r=U2(e,t,n);return si({type:2,toast:r}),r.id},wt=(t,e)=>ea("blank")(t,e);wt.error=ea("error");wt.success=ea("success");wt.loading=ea("loading");wt.custom=ea("custom");wt.dismiss=t=>{si({type:3,toastId:t})};wt.remove=t=>si({type:4,toastId:t});wt.promise=(t,e,n)=>{let r=wt.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(wt.success(ru(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{wt.error(ru(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var B2=(t,e)=>{si({type:1,toast:{id:t,height:e}})},$2=()=>{si({type:5,time:Date.now()})},z2=t=>{let{toasts:e,pausedAt:n}=F2(t);D.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let u=(l.duration||0)+l.pauseDuration-(s-l.createdAt);if(u<0){l.visible&&wt.dismiss(l.id);return}return setTimeout(()=>wt.dismiss(l.id),u)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,n]);let r=D.useCallback(()=>{n&&si({type:6,time:Date.now()})},[n]),i=D.useCallback((s,o)=>{let{reverseOrder:l=!1,gutter:u=8,defaultPosition:c}=o||{},d=e.filter(C=>(C.position||c)===(s.position||c)&&C.height),p=d.findIndex(C=>C.id===s.id),m=d.filter((C,P)=>P<p&&C.visible).length;return d.filter(C=>C.visible).slice(...l?[m+1]:[0,m]).reduce((C,P)=>C+(P.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:B2,startPause:$2,endPause:r,calculateOffset:i}}},W2=xn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q2=xn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H2=xn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K2=Ar("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${q2} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${H2} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G2=xn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Q2=Ar("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${G2} 1s linear infinite;
`,Y2=xn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,X2=xn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,J2=Ar("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${X2} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z2=Ar("div")`
  position: absolute;
`,eD=Ar("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,tD=xn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,nD=Ar("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tD} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,rD=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(nD,null,e):e:n==="blank"?null:D.createElement(eD,null,D.createElement(Q2,{...r}),n!=="loading"&&D.createElement(Z2,null,n==="error"?D.createElement(K2,{...r}):D.createElement(J2,{...r})))},iD=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,sD=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,oD="0%{opacity:0;} 100%{opacity:1;}",aD="0%{opacity:1;} 100%{opacity:0;}",lD=Ar("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,uD=Ar("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,cD=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=HE()?[oD,aD]:[iD(n),sD(n)];return{animation:e?`${xn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${xn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},hD=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?cD(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(rD,{toast:t}),o=D.createElement(uD,{...t.ariaProps},ru(t.message,t));return D.createElement(lD,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});D2(D.createElement);var dD=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},fD=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:HE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},pD=zu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$a=16,mD=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:u}=z2(n);return D.createElement("div",{style:{position:"fixed",zIndex:9999,top:$a,left:$a,right:$a,bottom:$a,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(c=>{let d=c.position||e,p=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),m=fD(d,p);return D.createElement(dD,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?pD:"",style:m},c.type==="custom"?ru(c.message,c):i?i(c):D.createElement(hD,{toast:c,position:d}))}))},cr=wt;const gD=({countInitial:t,stock:e,onAdd:n,handleInter:r})=>{const[i,s]=D.useState(t),o=()=>{i<e&&s(i+1)},l=()=>{i>t&&s(i-1)},u=()=>{n(i),r()};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"productCounter",children:[y.jsx("button",{className:"countMinusMore",onClick:l,disabled:i===t?!0:null,children:"-"}),y.jsx("span",{className:"countNumber",children:i}),y.jsx("button",{className:"countMinusMore",onClick:o,disabled:i===e?!0:null,children:"+"})]}),y.jsx("button",{className:"button-fw  btn-add",onClick:u,children:"Agregar"})]})},yD=({handleInter:t})=>y.jsx(y.Fragment,{children:y.jsx(dt,{to:"/",children:y.jsx("button",{onClick:t,className:"button-fw ",children:"Keep Buying"})})}),vD=({producto:t})=>{const[e,n]=D.useState("button-fw"),{addToCart:r}=D.useContext(Er),[i,s]=D.useState(t.imagen),[o,l]=D.useState([]),[u,c]=D.useState([]),[d,p]=D.useState([]),[m,C]=D.useState(t.descripcion),[P,k]=D.useState(!0),O=v=>{r({...t,cantidad:v})},I=()=>{n("change")};return D.useEffect(()=>{s(t.imagen),k(!0);const v=async()=>{try{const S=await fetch(`https://pokeapi.co/api/v2/pokemon/${t.nombre.toLowerCase()}`);if(!S.ok)throw new Error("Pokemon not found");const V=await S.json(),j=[{url:t.imagen,name:"Default"}];try{const T=await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${t.nombre.toLowerCase()}`);T.ok&&(await T.json()).data.slice(0,5).forEach(A=>{j.push({url:A.images.large,thumb:A.images.small,name:A.name,isShiny:A.rarity&&A.rarity.toLowerCase().includes("rare")})})}catch(T){console.error("Error fetching TCG cards:",T)}l(j);try{const T=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${t.nombre.toLowerCase()}`);if(T.ok){const x=(await T.json()).flavor_text_entries,A=x.find(Vt=>Vt.language.name==="es"),nt=x.find(Vt=>Vt.language.name==="en");let Ct="";if(A?Ct=A.flavor_text:nt&&(Ct=nt.flavor_text),Ct){const Vt=Ct.replace(/[\n\f]/g," ");C(Vt)}}}catch(T){console.error("Error fetching species lore:",T)}const w=await(await fetch(`https://pokeapi.co/api/v2/type/${V.types[0].type.name}`)).json(),_=w.damage_relations.double_damage_from.map(T=>T.name),E=w.damage_relations.double_damage_to.map(T=>T.name);c(_),p(E)}catch(S){console.error("Error fetching extra Pokedex data:",S)}finally{k(!1)}};t.nombre&&v()},[t]),y.jsxs("div",{className:"content",children:[y.jsxs("section",{className:`product glass-panel type-bg-${t.categoria}`,id:`${t.id}`,children:[y.jsxs("div",{className:"product-left",children:[y.jsx("div",{className:"image poke-detail-image-wrapper",children:y.jsx("img",{src:i,alt:t.nombre,className:"poke-detail-image"})}),!P&&o.length>1&&y.jsxs("div",{className:"gallery-container",children:[y.jsx("div",{className:"stats-title",children:"Versions & Cards"}),y.jsx("div",{className:"gallery-thumbnails",children:o.map((v,S)=>y.jsx("div",{className:`thumbnail-wrapper ${i===v.url?"active":""} ${v.isShiny?"shiny-card":""}`,onClick:()=>s(v.url),title:v.name,children:y.jsx("img",{src:v.thumb||v.url,alt:`${t.nombre} ${v.name}`})},S))})]})]}),y.jsxs("div",{className:"product-right",children:[y.jsx("div",{className:"title",children:t.nombre}),y.jsxs("div",{className:"company-name poke-category",children:["Type: ",t.categoria]}),y.jsx("div",{className:"description",children:m}),y.jsx("div",{className:"price-wrapper",children:y.jsx("div",{className:"group",children:y.jsxs("div",{className:"price",children:["$",t.precio]})})}),e==="button-fw"?y.jsx("div",{className:"productActions",children:y.jsx(gD,{producto:t,onAdd:O,stock:t.stock,countInitial:1,handleInter:I},t.id)}):y.jsxs("div",{className:"productActions",children:[y.jsx(dt,{to:"/cart",children:y.jsx("button",{className:"button-fw",onClick:I,children:"Go To Pay"})}),y.jsx(yD,{handleInter:I})]}),!P&&y.jsxs("div",{className:"pokemon-stats-container",children:[d.length>0&&y.jsxs("div",{className:"strength-section",children:[y.jsx("div",{className:"stats-title subtitle",children:"🔥 Strong Against (Advantage)"}),y.jsx("div",{className:"type-tags-container",children:d.map(v=>y.jsx("span",{className:`type-tag ${v}`,children:v},v))})]}),u.length>0&&y.jsxs("div",{className:"weakness-section",children:[y.jsx("div",{className:"stats-title subtitle",children:"⚠️ Weak Against (Danger)"}),y.jsx("div",{className:"type-tags-container",children:u.map(v=>y.jsx("span",{className:`type-tag ${v}`,children:v},v))})]})]})]})]}),y.jsx(mD,{position:"bottom-center",toastOptions:{duration:5e3,style:{background:"#fff",color:"#141414",fontWeight:600,border:"2px solid #141414"}}})]})},_D="/assets/loading-BahF-fER.gif",wD=()=>{const[t,e]=D.useState({}),{detalleId:n}=P1(),[r,i]=D.useState(!0);return D.useEffect(()=>{const s=rp(),o=RE(s,"productos",n);E2(o).then(l=>e({id:l.id,...l.data()})).catch(l=>console.log(l)).finally(()=>i(!1))},[n]),y.jsx(y.Fragment,{children:r?y.jsx("div",{id:"spinner",className:"container-loading",children:y.jsx("img",{src:_D,className:"gif",alt:"loading"})}):y.jsx(y.Fragment,{children:y.jsx("section",{className:"productSection",children:t?y.jsx(vD,{producto:t},t.id):y.jsx("h2",{children:"Obtaining product..."})})})})},ED=()=>{const t=()=>{const e=document.querySelector(".filters-bar-container");e&&e.scrollIntoView({behavior:"smooth"})};return y.jsxs("section",{className:"cover",children:[y.jsx("div",{className:"cover-container",children:y.jsxs("div",{className:"hero-content",children:[y.jsx("h1",{className:"hero-title",children:"The Ultimate Pokédex"}),y.jsx("p",{className:"hero-subtitle",children:"Discover all 1025 Pokémon from every region."}),y.jsxs("div",{className:"hero-stats",children:[y.jsxs("div",{className:"stat-box",children:[y.jsx("span",{className:"stat-num",children:"1025"}),y.jsx("span",{className:"stat-text",children:"Species"})]}),y.jsxs("div",{className:"stat-box",children:[y.jsx("span",{className:"stat-num",children:"9"}),y.jsx("span",{className:"stat-text",children:"Regions"})]}),y.jsxs("div",{className:"stat-box",children:[y.jsx("span",{className:"stat-num",children:"18"}),y.jsx("span",{className:"stat-text",children:"Types"})]})]}),y.jsx("button",{className:"hero-cta btn-pokemon type-electric",onClick:t,children:"Start Exploring"})]})}),y.jsxs("div",{className:"poke-particles",children:[y.jsx("div",{className:"particle p1"}),y.jsx("div",{className:"particle p2"}),y.jsx("div",{className:"particle p3"})]})]})},TD=({producto:t})=>y.jsxs("article",{className:"sunglass",children:[y.jsx("img",{src:t.imagen,className:"sunglass__img",alt:t.nombre,loading:"lazy"}),y.jsx("span",{className:"sunglass__name",children:t.nombre}),y.jsxs("span",{className:"sunglass__price",children:["$",t.precio]}),y.jsx(dt,{className:`button-outline btn-pokemon type-${t.categoria}`,to:`/detalle/${t.id}`,children:"View Pokémon"})]}),ID=({productos:t})=>y.jsx("main",{className:"l-main ",children:y.jsx("section",{className:"featured section",id:"products-container",children:y.jsx("div",{className:"featured__container bd-grid",children:t.map(e=>y.jsx(TD,{producto:e},e.id))})})}),SD=["All","Kanto","Johto","Hoenn","Sinnoh","Unova","Kalos","Alola","Galar","Paldea"],AD=["All","normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"],CD=({onFilterChange:t})=>{const[e,n]=D.useState(""),[r,i]=D.useState("All"),[s,o]=D.useState("All"),l=d=>{n(d.target.value),t({search:d.target.value,region:r,type:s})},u=d=>{i(d.target.value),t({search:e,region:d.target.value,type:s})},c=d=>{o(d.target.value),t({search:e,region:r,type:d.target.value})};return y.jsxs("div",{className:"filters-bar-container",children:[y.jsx("div",{className:"search-box",children:y.jsx("input",{type:"text",placeholder:"Search Pokémon...",value:e,onChange:l})}),y.jsxs("div",{className:"filter-group",children:[y.jsx("label",{children:"Region:"}),y.jsx("select",{value:r,onChange:u,children:SD.map(d=>y.jsx("option",{value:d,children:d},d))})]}),y.jsxs("div",{className:"filter-group",children:[y.jsx("label",{children:"Type:"}),y.jsx("select",{value:s,onChange:c,className:"poke-type-select",children:AD.map(d=>y.jsx("option",{value:d,children:d},d))})]})]})},PD=()=>{const[t,e]=D.useState([]),[n,r]=D.useState([]),[i,s]=D.useState(1),[o,l]=D.useState(!0),[u,c]=D.useState(!0),[d,p]=D.useState({search:"",region:"All",type:"All"});D.useEffect(()=>{(async()=>{l(!0);try{let k=[];const O=localStorage.getItem("pokedex_cache");if(O)k=JSON.parse(O);else{const v=rp(),S=vd(v,"productos"),V=ME(S,y2("id_pokedex"));k=(await $E(V)).docs.map(U=>({id:U.id,...U.data()})),k.length>0&&localStorage.setItem("pokedex_cache",JSON.stringify(k))}let I=k;if(d.region&&d.region!=="All"&&(I=I.filter(v=>v.region===d.region)),d.type&&d.type!=="All"&&(I=I.filter(v=>v.categoria===d.type)),d.search){const v=d.search.toLowerCase();I=I.filter(S=>S.nombre.toLowerCase().startsWith(v))}r(I),e(I.slice(0,20)),s(1),c(I.length>20)}catch(k){console.error("Error fetching products:",k)}finally{l(!1)}})()},[d]);const m=()=>{const P=i+1,k=n.slice(0,P*20);e(k),s(P),k.length>=n.length&&c(!1)},C=P=>{p(P)};return y.jsxs(y.Fragment,{children:[y.jsx(ED,{}),y.jsx(CD,{onFilterChange:C}),o?y.jsxs("div",{id:"spinner",className:"container-loading",children:[y.jsx("div",{className:"css-pokeball"}),y.jsx("span",{className:"loading-text",children:"Catching data..."})]}):y.jsxs(y.Fragment,{children:[t.length===0?y.jsx("h2",{className:"empty-pokemon-msg",children:"No Pokémon found for these filters."}):y.jsx(ID,{productos:t}),u&&t.length>0&&y.jsx("div",{className:"load-more-wrapper",children:y.jsx("button",{className:"button-fw btn-pokemon load-more-btn",onClick:m,children:"Load More"})})]})]})},RD=()=>y.jsxs("div",{className:"containerEmptyCart",children:[y.jsx(fA,{className:"bigIConCart"}),y.jsx("h2",{className:"titleEmptyCart",children:"Your cart is empty"}),y.jsx("p",{className:"descriptionEmptyCart",children:"Once you add something to your cart, it will appear here. Ready to get started? get started?"}),y.jsx(dt,{to:"/",children:y.jsx("button",{className:"button-fw ",children:"Start"})})]}),kD=(t,e)=>{const[n,r]=D.useState(t),[i,s]=D.useState({}),o=D.useCallback(u=>{const{name:c,value:d}=u.target;r(p=>({...p,[c]:d}))},[]),l=D.useCallback(u=>{const{name:c,value:d}=u.target;r(p=>{const m={...p,[c]:d};return s(e(m)),m})},[e]);return{form:n,errors:i,handleChange:o,handleBlur:l,setForm:r}},Qy={name:"",surname:"",phone:"",email:"",emailr:""},xD=t=>{let e={},n=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,r=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,i=/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;return t.name.trim()?n.test(t.name.trim())||(e.name="The 'Name' field accepts only letters and blanks."):e.name="The 'Name' field is required",t.surname.trim()?n.test(t.surname.trim())||(e.surname="The 'Last name' field accepts only letters and blanks."):e.surname="The 'Last Name' field is required",t.email.trim()?r.test(t.email.trim())||(e.email="The 'Email' field is incorrect"):e.email="The 'Email' field is required",t.email!==t.emailr&&(e.emailr="Fields do not match"),t.phone.trim()?i.test(t.phone.trim())||(e.phone="The 'Mobile' field is incorrect"):e.phone="The 'Mobile' field is required",e},ND=()=>{const{state:t,totalPrice:e,emptyCart:n}=D.useContext(Er),{form:r,errors:i,handleChange:s,handleBlur:o,setForm:l}=kD(Qy,xD),[u,c]=D.useState(!1),[d,p]=D.useState(null),{currentUser:m}=Pu();D.useEffect(()=>{m&&l(P=>({...P,email:m.email,emailr:m.email}))},[m,l]);const C=async P=>{P.preventDefault(),c(!0);let k={};k.buyer=r,k.total=e,m&&(k.buyer.userId=m.uid),k.items=t.map(v=>{const S=v.id,V=v.nombre,j=v.precio*v.cantidad;return{id:S,name:V,price:j}});const O=rp(),I=vd(O,"orders");try{const v=await T2(I,k);p(v.id),l(Qy),n(),cr.success("Purchase successful!");const S=vd(O,"productos"),V=ME(S,g2(o2(),"in",t.map(w=>w.id))),j=A2(O);(await $E(V)).docs.forEach(w=>{j.update(w.ref,{stock:w.data().stock-t.find(_=>_.id===w.id).cantidad})}),await j.commit()}catch(v){console.log(v),cr.error("There was an error generating your order.")}finally{c(!1)}};return d?y.jsxs("section",{id:"contact",className:"contact",children:[y.jsx("div",{className:"section-title",children:y.jsx("h2",{children:"Order Confirmed!"})}),y.jsxs("div",{className:"confirmed-container",children:[y.jsx("div",{className:"confirmed-icon",children:"✅"}),y.jsx("h3",{children:"Thank you for your purchase!"}),y.jsx("p",{children:"Your order number is:"}),y.jsx("span",{className:"order-id",children:d}),y.jsx("br",{}),y.jsx("br",{}),y.jsx(dt,{to:"/",children:y.jsx("button",{className:"button-fw",children:"Back to Pokédex"})})]})]}):y.jsxs("section",{id:"contact",className:"contact",children:[y.jsx("div",{className:"section-title",children:y.jsx("h2",{children:"Add your info"})}),y.jsxs("div",{className:"container",children:[!m&&y.jsxs("div",{className:"login-suggestion",children:[y.jsx("p",{children:"Want to check out faster?"}),y.jsx(dt,{to:"/login",children:y.jsx("button",{className:"login-suggestion-btn",children:"Log in to your account"})}),y.jsx("p",{className:"or-divider",children:"Or continue as guest below:"})]}),y.jsxs("form",{onSubmit:C,className:"contactForm",children:[y.jsxs("div",{className:"form-container",children:[y.jsx("input",{type:"text",name:"name",className:"form-input",placeholder:"Name(s) *",onChange:s,onBlur:o,value:r.name,required:!0}),i.name&&y.jsx("span",{className:"form-error",children:i.name})]}),y.jsxs("div",{className:"form-container",children:[y.jsx("input",{type:"text",name:"surname",className:"form-input",placeholder:"Last name(s) *",onChange:s,onBlur:o,value:r.surname,required:!0}),i.surname&&y.jsx("span",{className:"form-error",children:i.surname})]}),y.jsxs("div",{className:"form-container",children:[y.jsx("input",{type:"phone",className:"form-input",name:"phone",placeholder:"Phone number *",onChange:s,onBlur:o,value:r.phone,required:!0}),i.phone&&y.jsx("span",{className:"form-error",children:i.phone})]}),y.jsxs("div",{className:"form-container",children:[y.jsx("input",{type:"email",className:"form-input",name:"email",placeholder:"Email *",onChange:s,onBlur:o,value:r.email,readOnly:!!m,required:!0}),i.email&&y.jsx("span",{className:"form-error",children:i.email})]}),y.jsxs("div",{className:"form-container",children:[y.jsx("input",{type:"email",className:"form-input",name:"emailr",placeholder:"Confirm Email *",onChange:s,onBlur:o,value:r.emailr,readOnly:!!m,required:!0}),i.emailr&&y.jsx("span",{className:"form-error",children:i.emailr})]}),y.jsx("span",{className:"spanForm",children:"We will use your information to inform you about the delivery *"}),y.jsxs("button",{className:"button-fw",disabled:u||Object.keys(i).length>0,children:[u&&y.jsx(wf,{})," Finish my order"]})]})]})]})},DD=t=>{const{producto:e,indexValue:n}=t,{removeFromCart:r}=D.useContext(Er),i=s=>{r(s)};return y.jsxs("div",{className:"itemCheckoutContainer",children:[y.jsx("figure",{children:y.jsx("img",{src:e.imagen,alt:e.nombre})}),y.jsxs("div",{className:"itemCheckout",children:[y.jsxs("div",{className:"itemCheckoutInfo",children:[y.jsx("h2",{className:"itemInfo",children:"Product"}),y.jsx("p",{children:e.nombre})]}),y.jsxs("div",{className:"itemCheckoutInfo",children:[y.jsx("h2",{className:"itemInfo",children:"Amount"}),y.jsx("p",{children:e.cantidad})]}),y.jsxs("div",{className:"itemCheckoutInfo",children:[y.jsx("h2",{className:"itemInfo",children:"Price"}),y.jsxs("p",{children:["$",e.precio]})]}),y.jsxs("div",{className:"itemCheckoutInfo",children:[y.jsx("h2",{className:"itemInfo",children:"Remove"}),y.jsx(dA,{className:"btnDelete",onClick:()=>i(n)})]})]})]})},OD=()=>{const{state:t,totalPrice:e}=D.useContext(Er),n=new Date;return y.jsx("div",{className:"Checkout",children:t.length>0?y.jsxs(y.Fragment,{children:[y.jsx("h1",{className:"title",children:"Your Cart"}),y.jsxs("div",{className:"Checkout-container",children:[y.jsxs("div",{className:"Checkout-content",children:[y.jsx("div",{className:"order",children:y.jsx("p",{children:y.jsx("span",{children:n.toLocaleDateString()})})}),t.map((r,i)=>y.jsx(DD,{producto:r,indexValue:i},r.id)),y.jsxs("div",{className:"order",children:[y.jsxs("p",{children:[y.jsx("span",{children:"TOTAL"}),y.jsxs("span",{children:["(",t.length," Products)"]})]}),y.jsxs("p",{children:["$",e!==0&&e]})]})]}),y.jsx(ND,{})]})]}):y.jsx(y.Fragment,{children:y.jsx(RD,{})})})},VD=()=>{const[t,e]=D.useState([]),n=D.useCallback(l=>{e(u=>{const c=u.findIndex(d=>l.id===d.id);if(cr.success(`Added ${l.cantidad} ${l.nombre}`),c!==-1){const d=[...u],p=u[c].cantidad+l.cantidad;return d[c].cantidad=p,d}else return[...u,l]})},[]),r=D.useCallback(()=>{e([])},[]),i=D.useCallback(l=>{e(u=>u.filter((c,d)=>d!==l))},[]),s=D.useMemo(()=>t.reduce((l,u)=>l+u.cantidad*u.precio,0),[t]),o=D.useMemo(()=>t.reduce((l,u)=>l+u.cantidad,0),[t]);return{state:t,addToCart:n,emptyCart:r,removeFromCart:i,totalPrice:s,totalItemQuantity:o}},LD=()=>y.jsx("footer",{className:"footer-section poke-footer",children:y.jsxs("p",{className:"copy-footer poke-copy",children:[new Date().getFullYear()," ©"," ",y.jsx("a",{href:"https://www.linkedin.com/in/mar%C3%ADa-guadalupe-a-5bb12116a",target:"_blank",rel:"noreferrer",className:"linkedin-url poke-linkedin",children:"Luzma Grey"}),". Gotta Catch 'Em All!"]})}),bD=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(!1),{login:o}=Pu(),l=_f(),u=async c=>{c.preventDefault();try{s(!0),await o(t,n),cr.success("Welcome back Trainer!"),l("/")}catch(d){cr.error("Failed to log in: "+d.message)}finally{s(!1)}};return y.jsx("div",{className:"auth-page",children:y.jsxs("div",{className:"auth-card",children:[y.jsxs("div",{className:"auth-header",children:[y.jsx("div",{className:"pokeball-icon"}),y.jsx("h2",{children:"Trainer Login"})]}),y.jsxs("form",{onSubmit:u,className:"auth-form",children:[y.jsx("div",{className:"form-group",children:y.jsx("input",{type:"email",placeholder:"Email address",value:t,onChange:c=>e(c.target.value),required:!0})}),y.jsx("div",{className:"form-group",children:y.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:c=>r(c.target.value),required:!0})}),y.jsxs("button",{className:`auth-button ${i?"loading":""}`,disabled:i,type:"submit",children:[i&&y.jsx(wf,{className:"spinner"}),i?"Logging in...":"Log In"]})]}),y.jsxs("div",{className:"auth-footer",children:["Don't have a Pokedex yet? ",y.jsx(dt,{to:"/register",children:"Register here"})]})]})})},MD=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,l]=D.useState(!1),{signup:u}=Pu(),c=_f(),d=async p=>{if(p.preventDefault(),n!==i)return cr.error("Passwords do not match");try{l(!0),await u(t,n),cr.success("Trainer account created!"),c("/")}catch(m){cr.error("Failed to create an account: "+m.message)}finally{l(!1)}};return y.jsx("div",{className:"auth-page",children:y.jsxs("div",{className:"auth-card",children:[y.jsxs("div",{className:"auth-header",children:[y.jsx("div",{className:"pokeball-icon"}),y.jsx("h2",{children:"Join the League"})]}),y.jsxs("form",{onSubmit:d,className:"auth-form",children:[y.jsx("div",{className:"form-group",children:y.jsx("input",{type:"email",placeholder:"Email address",value:t,onChange:p=>e(p.target.value),required:!0})}),y.jsx("div",{className:"form-group",children:y.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:p=>r(p.target.value),required:!0})}),y.jsx("div",{className:"form-group",children:y.jsx("input",{type:"password",placeholder:"Confirm Password",value:i,onChange:p=>s(p.target.value),required:!0})}),y.jsxs("button",{className:`auth-button ${o?"loading":""}`,disabled:o,type:"submit",children:[o&&y.jsx(wf,{className:"spinner"}),o?"Registering...":"Register"]})]}),y.jsxs("div",{className:"auth-footer",children:["Already a Trainer? ",y.jsx(dt,{to:"/login",children:"Log in here"})]})]})})},jD=()=>y.jsxs("div",{className:"not-found-container",children:[y.jsxs("div",{className:"content-wrapper",children:[y.jsx("h1",{className:"error-code",children:"404"}),y.jsx("h2",{className:"error-title",children:"A wild Snorlax blocks your path!"}),y.jsx("p",{className:"error-text",children:"The page you are looking for doesn't exist or has been moved. You'll need a Poké Flute to wake up Snorlax, or you can just return safely to the Pokédex."}),y.jsx(dt,{to:"/",className:"btn-pokemon type-normal return-btn",children:"Return to Pokédex"})]}),y.jsx("div",{className:"snorlax-image",children:y.jsx("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",alt:"Snorlax"})})]}),FD=()=>{const t=VD();return y.jsx(X1,{children:y.jsx(gk,{children:y.jsx(Er.Provider,{value:t,children:y.jsxs(iA,{children:[y.jsx(wk,{}),y.jsxs(z1,{children:[y.jsx(Dr,{path:"/",element:y.jsx(PD,{})}),y.jsx(Dr,{path:"/detalle/:detalleId",element:y.jsx(wD,{})}),y.jsx(Dr,{path:"/cart",element:y.jsx(OD,{})}),y.jsx(Dr,{path:"/login",element:y.jsx(bD,{})}),y.jsx(Dr,{path:"/register",element:y.jsx(MD,{})}),y.jsx(Dr,{path:"/*",element:y.jsx(jD,{})})]}),y.jsx(LD,{})]})})})})},UD=document.getElementById("root"),BD=l0(UD);BD.render(y.jsx(vn.StrictMode,{children:y.jsx(FD,{})}));
