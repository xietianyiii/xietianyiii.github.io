import{ai as xe,bp as Lt,bq as tt,br as rt,aj as Nt,bs as Ie,bt as nt,av as it,aw as ce,bu as at,ap as Rt,ae as pe,ao as st,q as B,v as T,d as Oe,a2 as ot,A as Ae,x as ee,ar as Bt,a4 as ft,r as ut,z as lt,bv as qe,o as ge,e as dt,a5 as Q,n as K,u as E,K as ct,aE as pt,U as te,bw as ve,bd as Ct,R as gt,ad as vt,S as Wt,a1 as Vt,f as re,N as Dt,B as mt,as as Ut,b4 as Kt,bx as zt,bc as Me,a9 as ue,w as le,M as Gt,i as Yt,t as Le,a6 as Ne,au as Jt,a7 as Re,g as Be,aS as Zt,af as Ht,ag as Qt}from"./index.44156462.js";import{a as yt,b as Xt,c as kt,o as er,k as ht,g as bt,s as tr,d as rr,e as nr,U as Ce,f as je,n as ne,h as wt,j as ir,S as ar,l as sr,i as or}from"./el-input.60970b75.js";var We=Object.create,fr=function(){function r(){}return function(e){if(!xe(e))return{};if(We)return We(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();const ur=fr;function lr(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function dr(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}function ie(r,e,t,n){var i=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var o=e[s],f=n?n(t[o],r[o],o,t,r):void 0;f===void 0&&(f=r[o]),i?Lt(t,o,f):tt(t,o,f)}return t}function cr(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var pr=Object.prototype,gr=pr.hasOwnProperty;function vr(r){if(!xe(r))return cr(r);var e=yt(r),t=[];for(var n in r)n=="constructor"&&(e||!gr.call(r,n))||t.push(n);return t}function Ee(r){return Xt(r)?kt(r,!0):vr(r)}var mr=er(Object.getPrototypeOf,Object);const Ft=mr;function me(){if(!arguments.length)return[];var r=arguments[0];return rt(r)?r:[r]}function yr(r,e){return r&&ie(e,ht(e),r)}function hr(r,e){return r&&ie(e,Ee(e),r)}var xt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ve=xt&&typeof module=="object"&&module&&!module.nodeType&&module,br=Ve&&Ve.exports===xt,De=br?Nt.Buffer:void 0,Ue=De?De.allocUnsafe:void 0;function wr(r,e){if(e)return r.slice();var t=r.length,n=Ue?Ue(t):new r.constructor(t);return r.copy(n),n}function Fr(r,e){return ie(r,bt(r),e)}var xr=Object.getOwnPropertySymbols,Or=xr?function(r){for(var e=[];r;)rr(e,bt(r)),r=Ft(r);return e}:tr;const Ot=Or;function Ar(r,e){return ie(r,Ot(r),e)}function qr(r){return nr(r,Ee,Ot)}var jr=Object.prototype,Er=jr.hasOwnProperty;function Tr(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&Er.call(r,"index")&&(t.index=r.index,t.input=r.input),t}function Te(r){var e=new r.constructor(r.byteLength);return new Ce(e).set(new Ce(r)),e}function Sr(r,e){var t=e?Te(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var _r=/\w*$/;function Pr(r){var e=new r.constructor(r.source,_r.exec(r));return e.lastIndex=r.lastIndex,e}var Ke=Ie?Ie.prototype:void 0,ze=Ke?Ke.valueOf:void 0;function $r(r){return ze?Object(ze.call(r)):{}}function Ir(r,e){var t=e?Te(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var Mr="[object Boolean]",Lr="[object Date]",Nr="[object Map]",Rr="[object Number]",Br="[object RegExp]",Cr="[object Set]",Wr="[object String]",Vr="[object Symbol]",Dr="[object ArrayBuffer]",Ur="[object DataView]",Kr="[object Float32Array]",zr="[object Float64Array]",Gr="[object Int8Array]",Yr="[object Int16Array]",Jr="[object Int32Array]",Zr="[object Uint8Array]",Hr="[object Uint8ClampedArray]",Qr="[object Uint16Array]",Xr="[object Uint32Array]";function kr(r,e,t){var n=r.constructor;switch(e){case Dr:return Te(r);case Mr:case Lr:return new n(+r);case Ur:return Sr(r,t);case Kr:case zr:case Gr:case Yr:case Jr:case Zr:case Hr:case Qr:case Xr:return Ir(r,t);case Nr:return new n;case Rr:case Wr:return new n(r);case Br:return Pr(r);case Cr:return new n;case Vr:return $r(r)}}function en(r){return typeof r.constructor=="function"&&!yt(r)?ur(Ft(r)):{}}var tn="[object Map]";function rn(r){return nt(r)&&je(r)==tn}var Ge=ne&&ne.isMap,nn=Ge?wt(Ge):rn;const an=nn;var sn="[object Set]";function on(r){return nt(r)&&je(r)==sn}var Ye=ne&&ne.isSet,fn=Ye?wt(Ye):on;const un=fn;var ln=1,dn=2,cn=4,At="[object Arguments]",pn="[object Array]",gn="[object Boolean]",vn="[object Date]",mn="[object Error]",qt="[object Function]",yn="[object GeneratorFunction]",hn="[object Map]",bn="[object Number]",jt="[object Object]",wn="[object RegExp]",Fn="[object Set]",xn="[object String]",On="[object Symbol]",An="[object WeakMap]",qn="[object ArrayBuffer]",jn="[object DataView]",En="[object Float32Array]",Tn="[object Float64Array]",Sn="[object Int8Array]",_n="[object Int16Array]",Pn="[object Int32Array]",$n="[object Uint8Array]",In="[object Uint8ClampedArray]",Mn="[object Uint16Array]",Ln="[object Uint32Array]",F={};F[At]=F[pn]=F[qn]=F[jn]=F[gn]=F[vn]=F[En]=F[Tn]=F[Sn]=F[_n]=F[Pn]=F[hn]=F[bn]=F[jt]=F[wn]=F[Fn]=F[xn]=F[On]=F[$n]=F[In]=F[Mn]=F[Ln]=!0;F[mn]=F[qt]=F[An]=!1;function X(r,e,t,n,i,s){var a,o=e&ln,f=e&dn,w=e&cn;if(t&&(a=i?t(r,n,i,s):t(r)),a!==void 0)return a;if(!xe(r))return r;var c=rt(r);if(c){if(a=Tr(r),!o)return lr(r,a)}else{var g=je(r),b=g==qt||g==yn;if(ir(r))return wr(r,o);if(g==jt||g==At||b&&!i){if(a=f||b?{}:en(r),!o)return f?Ar(r,hr(a,r)):Fr(r,yr(a,r))}else{if(!F[g])return i?r:{};a=kr(r,g,o)}}s||(s=new ar);var j=s.get(r);if(j)return j;s.set(r,a),un(r)?r.forEach(function(v){a.add(X(v,e,t,v,r,s))}):an(r)&&r.forEach(function(v,u){a.set(u,X(v,e,t,u,r,s))});var q=w?f?qr:sr:f?Ee:ht,d=c?void 0:q(r);return dr(d||r,function(v,u){d&&(u=v,v=r[u]),tt(a,u,X(v,e,t,u,r,s))}),a}var Nn=4;function Je(r){return X(r,Nn)}const Rn=it({model:Object,rules:{type:ce(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:at},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),Bn={validate:(r,e,t)=>(Rt(r)||pe(r))&&st(e)&&pe(t)};function Cn(){const r=B([]),e=T(()=>{if(!r.value.length)return"0";const s=Math.max(...r.value);return s?`${s}px`:""});function t(s){return r.value.indexOf(s)}function n(s,a){if(s&&a){const o=t(a);r.value.splice(o,1,s)}else s&&r.value.push(s)}function i(s){const a=t(s);a>-1&&r.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:i}}const Z=(r,e)=>{const t=me(e);return t.length>0?r.filter(n=>n.prop&&t.includes(n.prop)):r},Wn={name:"ElForm"},Vn=Oe({...Wn,props:Rn,emits:Bn,setup(r,{expose:e,emit:t}){const n=r,i=[],s=ot(),a=Ae("form"),o=T(()=>{const{labelPosition:m,inline:l}=n;return[a.b(),a.m(s.value||"default"),{[a.m(`label-${m}`)]:m,[a.m("inline")]:l}]}),f=m=>{i.push(m)},w=m=>{m.prop&&i.splice(i.indexOf(m),1)},c=(m=[])=>{!n.model||Z(i,m).forEach(l=>l.resetField())},g=(m=[])=>{Z(i,m).forEach(l=>l.clearValidate())},b=T(()=>!!n.model),j=m=>{if(i.length===0)return[];const l=Z(i,m);return l.length?l:[]},q=async m=>v(void 0,m),d=async(m=[])=>{if(!b.value)return!1;const l=j(m);if(l.length===0)return!0;let h={};for(const O of l)try{await O.validate("")}catch(A){h={...h,...A}}return Object.keys(h).length===0?!0:Promise.reject(h)},v=async(m=[],l)=>{const h=!pt(l);try{const O=await d(m);return O===!0&&(l==null||l(O)),O}catch(O){const A=O;return n.scrollToError&&u(Object.keys(A)[0]),l==null||l(!1,A),h&&Promise.reject(A)}},u=m=>{var l;const h=Z(i,m)[0];h&&((l=h.$el)==null||l.scrollIntoView())};return ee(()=>n.rules,()=>{n.validateOnRuleChange&&q().catch(m=>Bt())},{deep:!0}),ft(qe,ut({...lt(n),emit:t,resetFields:c,clearValidate:g,validateField:v,addField:f,removeField:w,...Cn()})),e({validate:q,validateField:v,resetFields:c,clearValidate:g,scrollToField:u}),(m,l)=>(ge(),dt("form",{class:K(E(o))},[Q(m.$slots,"default")],2))}});var Dn=ct(Vn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function C(){return C=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},C.apply(this,arguments)}function Un(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Y(r,e)}function ye(r){return ye=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ye(r)}function Y(r,e){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},Y(r,e)}function Kn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(r,e,t){return Kn()?k=Reflect.construct.bind():k=function(i,s,a){var o=[null];o.push.apply(o,s);var f=Function.bind.apply(i,o),w=new f;return a&&Y(w,a.prototype),w},k.apply(null,arguments)}function zn(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function he(r){var e=typeof Map=="function"?new Map:void 0;return he=function(n){if(n===null||!zn(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return k(n,arguments,ye(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Y(i,n)},he(r)}var Gn=/%[sdj%]/g,Yn=function(){};typeof process<"u"&&process.env;function be(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function $(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,s=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var a=r.replace(Gn,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return a}return r}function Jn(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function S(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||Jn(e)&&typeof r=="string"&&!r)}function Zn(r,e,t){var n=[],i=0,s=r.length;function a(o){n.push.apply(n,o||[]),i++,i===s&&t(n)}r.forEach(function(o){e(o,a)})}function Ze(r,e,t){var n=0,i=r.length;function s(a){if(a&&a.length){t(a);return}var o=n;n=n+1,o<i?e(r[o],s):t([])}s([])}function Hn(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var He=function(r){Un(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(he(Error));function Qn(r,e,t,n,i){if(e.first){var s=new Promise(function(b,j){var q=function(u){return n(u),u.length?j(new He(u,be(u))):b(i)},d=Hn(r);Ze(d,t,q)});return s.catch(function(b){return b}),s}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],o=Object.keys(r),f=o.length,w=0,c=[],g=new Promise(function(b,j){var q=function(v){if(c.push.apply(c,v),w++,w===f)return n(c),c.length?j(new He(c,be(c))):b(i)};o.length||(n(c),b(i)),o.forEach(function(d){var v=r[d];a.indexOf(d)!==-1?Ze(v,t,q):Zn(v,t,q)})});return g.catch(function(b){return b}),g}function Xn(r){return!!(r&&r.message!==void 0)}function kn(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Qe(r,e){return function(t){var n;return r.fullFields?n=kn(e,r.fullFields):n=e[t.field||r.fullField],Xn(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function Xe(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=C({},r[t],n):r[t]=n}}return r}var Et=function(e,t,n,i,s,a){e.required&&(!n.hasOwnProperty(e.field)||S(t,a||e.type))&&i.push($(s.messages.required,e.fullField))},ei=function(e,t,n,i,s){(/^\s+$/.test(t)||t==="")&&i.push($(s.messages.whitespace,e.fullField))},H,ti=function(){if(H)return H;var r="[a-fA-F\\d:]",e=function(h){return h&&h.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),f=function(h){return h&&h.exact?s:new RegExp("(?:"+e(h)+t+e(h)+")|(?:"+e(h)+i+e(h)+")","g")};f.v4=function(l){return l&&l.exact?a:new RegExp(""+e(l)+t+e(l),"g")},f.v6=function(l){return l&&l.exact?o:new RegExp(""+e(l)+i+e(l),"g")};var w="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",g=f.v4().source,b=f.v6().source,j="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",q="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",v="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',m="(?:"+w+"|www\\.)"+c+"(?:localhost|"+g+"|"+b+"|"+j+q+d+")"+v+u;return H=new RegExp("(?:^"+m+"$)","i"),H},ke={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},z={integer:function(e){return z.number(e)&&parseInt(e,10)===e},float:function(e){return z.number(e)&&!z.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!z.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(ke.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(ti())},hex:function(e){return typeof e=="string"&&!!e.match(ke.hex)}},ri=function(e,t,n,i,s){if(e.required&&t===void 0){Et(e,t,n,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?z[o](t)||i.push($(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push($(s.messages.types[o],e.fullField,e.type))},ni=function(e,t,n,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",f=typeof e.max=="number",w=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=t,g=null,b=typeof t=="number",j=typeof t=="string",q=Array.isArray(t);if(b?g="number":j?g="string":q&&(g="array"),!g)return!1;q&&(c=t.length),j&&(c=t.replace(w,"_").length),a?c!==e.len&&i.push($(s.messages[g].len,e.fullField,e.len)):o&&!f&&c<e.min?i.push($(s.messages[g].min,e.fullField,e.min)):f&&!o&&c>e.max?i.push($(s.messages[g].max,e.fullField,e.max)):o&&f&&(c<e.min||c>e.max)&&i.push($(s.messages[g].range,e.fullField,e.min,e.max))},D="enum",ii=function(e,t,n,i,s){e[D]=Array.isArray(e[D])?e[D]:[],e[D].indexOf(t)===-1&&i.push($(s.messages[D],e.fullField,e[D].join(", ")))},ai=function(e,t,n,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push($(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push($(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},y={required:Et,whitespace:ei,type:ri,range:ni,enum:ii,pattern:ai},si=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();y.required(e,t,i,a,s,"string"),S(t,"string")||(y.type(e,t,i,a,s),y.range(e,t,i,a,s),y.pattern(e,t,i,a,s),e.whitespace===!0&&y.whitespace(e,t,i,a,s))}n(a)},oi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&y.type(e,t,i,a,s)}n(a)},fi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&(y.type(e,t,i,a,s),y.range(e,t,i,a,s))}n(a)},ui=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&y.type(e,t,i,a,s)}n(a)},li=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),S(t)||y.type(e,t,i,a,s)}n(a)},di=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&(y.type(e,t,i,a,s),y.range(e,t,i,a,s))}n(a)},ci=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&(y.type(e,t,i,a,s),y.range(e,t,i,a,s))}n(a)},pi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();y.required(e,t,i,a,s,"array"),t!=null&&(y.type(e,t,i,a,s),y.range(e,t,i,a,s))}n(a)},gi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&y.type(e,t,i,a,s)}n(a)},vi="enum",mi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s),t!==void 0&&y[vi](e,t,i,a,s)}n(a)},yi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();y.required(e,t,i,a,s),S(t,"string")||y.pattern(e,t,i,a,s)}n(a)},hi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t,"date")&&!e.required)return n();if(y.required(e,t,i,a,s),!S(t,"date")){var f;t instanceof Date?f=t:f=new Date(t),y.type(e,f,i,a,s),f&&y.range(e,f.getTime(),i,a,s)}}n(a)},bi=function(e,t,n,i,s){var a=[],o=Array.isArray(t)?"array":typeof t;y.required(e,t,i,a,s,o),n(a)},de=function(e,t,n,i,s){var a=e.type,o=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(S(t,a)&&!e.required)return n();y.required(e,t,i,o,s,a),S(t,a)||y.type(e,t,i,o,s)}n(o)},wi=function(e,t,n,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();y.required(e,t,i,a,s)}n(a)},G={string:si,method:oi,number:fi,boolean:ui,regexp:li,integer:di,float:ci,array:pi,object:gi,enum:mi,pattern:yi,date:hi,url:de,hex:de,email:de,required:bi,any:wi};function we(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Fe=we(),J=function(){function r(t){this.rules=null,this._messages=Fe,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Xe(we(),n)),this._messages},e.validate=function(n,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=n,f=i,w=s;if(typeof f=="function"&&(w=f,f={}),!this.rules||Object.keys(this.rules).length===0)return w&&w(null,o),Promise.resolve(o);function c(d){var v=[],u={};function m(h){if(Array.isArray(h)){var O;v=(O=v).concat.apply(O,h)}else v.push(h)}for(var l=0;l<d.length;l++)m(d[l]);v.length?(u=be(v),w(v,u)):w(null,o)}if(f.messages){var g=this.messages();g===Fe&&(g=we()),Xe(g,f.messages),f.messages=g}else f.messages=this.messages();var b={},j=f.keys||Object.keys(this.rules);j.forEach(function(d){var v=a.rules[d],u=o[d];v.forEach(function(m){var l=m;typeof l.transform=="function"&&(o===n&&(o=C({},o)),u=o[d]=l.transform(u)),typeof l=="function"?l={validator:l}:l=C({},l),l.validator=a.getValidationMethod(l),l.validator&&(l.field=d,l.fullField=l.fullField||d,l.type=a.getType(l),b[d]=b[d]||[],b[d].push({rule:l,value:u,source:o,field:d}))})});var q={};return Qn(b,f,function(d,v){var u=d.rule,m=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");m=m&&(u.required||!u.required&&d.value),u.field=d.field;function l(A,L){return C({},L,{fullField:u.fullField+"."+A,fullFields:u.fullFields?[].concat(u.fullFields,[A]):[A]})}function h(A){A===void 0&&(A=[]);var L=Array.isArray(A)?A:[A];!f.suppressWarning&&L.length&&r.warning("async-validator:",L),L.length&&u.message!==void 0&&(L=[].concat(u.message));var P=L.map(Qe(u,o));if(f.first&&P.length)return q[u.field]=1,v(P);if(!m)v(P);else{if(u.required&&!d.value)return u.message!==void 0?P=[].concat(u.message).map(Qe(u,o)):f.error&&(P=[f.error(u,$(f.messages.required,u.field))]),v(P);var R={};u.defaultField&&Object.keys(d.value).map(function(N){R[N]=u.defaultField}),R=C({},R,d.rule.fields);var U={};Object.keys(R).forEach(function(N){var I=R[N],ae=Array.isArray(I)?I:[I];U[N]=ae.map(l.bind(null,N))});var W=new r(U);W.messages(f.messages),d.rule.options&&(d.rule.options.messages=f.messages,d.rule.options.error=f.error),W.validate(d.value,d.rule.options||f,function(N){var I=[];P&&P.length&&I.push.apply(I,P),N&&N.length&&I.push.apply(I,N),v(I.length?I:null)})}}var O;if(u.asyncValidator)O=u.asyncValidator(u,d.value,h,d.source,f);else if(u.validator){try{O=u.validator(u,d.value,h,d.source,f)}catch(A){console.error==null||console.error(A),f.suppressValidatorError||setTimeout(function(){throw A},0),h(A.message)}O===!0?h():O===!1?h(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):O instanceof Array?h(O):O instanceof Error&&h(O.message)}O&&O.then&&O.then(function(){return h()},function(A){return h(A)})},function(d){c(d)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!G.hasOwnProperty(n.type))throw new Error($("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?G.required:G[this.getType(n)]||void 0},r}();J.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");G[e]=t};J.warning=Yn;J.messages=Fe;J.validators=G;const Fi=["","error","validating","success"],xi=it({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:ce([String,Array])},required:{type:Boolean,default:void 0},rules:{type:ce([Object,Array])},error:String,validateStatus:{type:String,values:Fi},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:at}}),et="ElLabelWrap";var Oi=Oe({name:et,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(r,{slots:e}){const t=te(qe,void 0);te(ve)||Ct(et,"usage: <el-form-item><label-wrap /></el-form-item>");const i=Ae("form"),s=B(),a=B(0),o=()=>{var c;if((c=s.value)!=null&&c.firstElementChild){const g=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(g))}else return 0},f=(c="update")=>{mt(()=>{e.default&&r.isAutoWidth&&(c==="update"?a.value=o():c==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},w=()=>f("update");return gt(()=>{w()}),vt(()=>{f("remove")}),Wt(()=>w()),ee(a,(c,g)=>{r.updateAll&&(t==null||t.registerLabelWidth(c,g))}),Vt(T(()=>{var c,g;return(g=(c=s.value)==null?void 0:c.firstElementChild)!=null?g:null}),w),()=>{var c,g;if(!e)return null;const{isAutoWidth:b}=r;if(b){const j=t==null?void 0:t.autoLabelWidth,q={};if(j&&j!=="auto"){const d=Math.max(0,Number.parseInt(j,10)-a.value),v=t.labelPosition==="left"?"marginRight":"marginLeft";d&&(q[v]=`${d}px`)}return re("div",{ref:s,class:[i.be("item","label-wrap")],style:q},[(c=e.default)==null?void 0:c.call(e)])}else return re(Dt,{ref:s},[(g=e.default)==null?void 0:g.call(e)])}}});const Ai=["role","aria-labelledby"],qi={name:"ElFormItem"},ji=Oe({...qi,props:xi,setup(r,{expose:e}){const t=r,n=Ut(),i=te(qe,void 0),s=te(ve,void 0),a=ot(void 0,{formItem:!1}),o=Ae("form-item"),f=Kt().value,w=B([]),c=B(""),g=zt(c,100),b=B(""),j=B();let q,d=!1;const v=T(()=>{if((i==null?void 0:i.labelPosition)==="top")return{};const p=Me(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return p?{width:p}:{}}),u=T(()=>{if((i==null?void 0:i.labelPosition)==="top"||(i==null?void 0:i.inline))return{};if(!t.label&&!t.labelWidth&&R)return{};const p=Me(t.labelWidth||(i==null?void 0:i.labelWidth)||"");return!t.label&&!n.label?{marginLeft:p}:{}}),m=T(()=>[o.b(),o.m(a.value),o.is("error",c.value==="error"),o.is("validating",c.value==="validating"),o.is("success",c.value==="success"),o.is("required",ae.value||t.required),o.is("no-asterisk",i==null?void 0:i.hideRequiredAsterisk),{[o.m("feedback")]:i==null?void 0:i.statusIcon}]),l=T(()=>st(t.inlineMessage)?t.inlineMessage:(i==null?void 0:i.inlineMessage)||!1),h=T(()=>[o.e("error"),{[o.em("error","inline")]:l.value}]),O=T(()=>t.prop?pe(t.prop)?t.prop:t.prop.join("."):""),A=T(()=>!!(t.label||n.label)),L=T(()=>t.for||w.value.length===1?w.value[0]:void 0),P=T(()=>!L.value&&A.value),R=!!s,U=T(()=>{const p=i==null?void 0:i.model;if(!(!p||!t.prop))return ue(p,t.prop).value}),W=T(()=>{const p=t.rules?me(t.rules):[],x=i==null?void 0:i.rules;if(x&&t.prop){const _=ue(x,t.prop).value;_&&p.push(...me(_))}return t.required!==void 0&&p.push({required:!!t.required}),p}),N=T(()=>W.value.length>0),I=p=>W.value.filter(_=>!_.trigger||!p?!0:Array.isArray(_.trigger)?_.trigger.includes(p):_.trigger===p).map(({trigger:_,...M})=>M),ae=T(()=>W.value.some(p=>p.required===!0)),St=T(()=>{var p;return g.value==="error"&&t.showMessage&&((p=i==null?void 0:i.showMessage)!=null?p:!0)}),Se=T(()=>`${t.label||""}${(i==null?void 0:i.labelSuffix)||""}`),V=p=>{c.value=p},_t=p=>{var x,_;const{errors:M,fields:fe}=p;(!M||!fe)&&console.error(p),V("error"),b.value=M?(_=(x=M==null?void 0:M[0])==null?void 0:x.message)!=null?_:`${t.prop} is required`:"",i==null||i.emit("validate",t.prop,!1,b.value)},Pt=()=>{V("success"),i==null||i.emit("validate",t.prop,!0,"")},$t=async p=>{const x=O.value;return new J({[x]:p}).validate({[x]:U.value},{firstFields:!0}).then(()=>(Pt(),!0)).catch(M=>(_t(M),Promise.reject(M)))},_e=async(p,x)=>{if(d)return d=!1,!1;const _=pt(x);if(!N.value)return x==null||x(!1),!1;const M=I(p);return M.length===0?(x==null||x(!0),!0):(V("validating"),$t(M).then(()=>(x==null||x(!0),!0)).catch(fe=>{const{fields:$e}=fe;return x==null||x(!1,$e),_?!1:Promise.reject($e)}))},se=()=>{V(""),b.value=""},Pe=async()=>{const p=i==null?void 0:i.model;if(!p||!t.prop)return;const x=ue(p,t.prop);or(x.value,q)||(d=!0,x.value=Je(q)),await mt(),se()},It=p=>{w.value.includes(p)||w.value.push(p)},Mt=p=>{w.value=w.value.filter(x=>x!==p)};ee(()=>t.error,p=>{b.value=p||"",V(p?"error":"")},{immediate:!0}),ee(()=>t.validateStatus,p=>V(p||""));const oe=ut({...lt(t),$el:j,size:a,validateState:c,labelId:f,inputIds:w,isGroup:P,addInputId:It,removeInputId:Mt,resetField:Pe,clearValidate:se,validate:_e});return ft(ve,oe),gt(()=>{t.prop&&(i==null||i.addField(oe),q=Je(U.value))}),vt(()=>{i==null||i.removeField(oe)}),e({size:a,validateMessage:b,validateState:c,validate:_e,clearValidate:se,resetField:Pe}),(p,x)=>{var _;return ge(),dt("div",{ref_key:"formItemRef",ref:j,class:K(E(m)),role:E(P)?"group":void 0,"aria-labelledby":E(P)?E(f):void 0},[re(E(Oi),{"is-auto-width":E(v).width==="auto","update-all":((_=E(i))==null?void 0:_.labelWidth)==="auto"},{default:le(()=>[E(A)?(ge(),Gt(Jt(E(L)?"label":"div"),{key:0,id:E(f),for:E(L),class:K(E(o).e("label")),style:Ne(E(v))},{default:le(()=>[Q(p.$slots,"label",{label:E(Se)},()=>[Yt(Le(E(Se)),1)])]),_:3},8,["id","for","class","style"])):Re("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),Be("div",{class:K(E(o).e("content")),style:Ne(E(u))},[Q(p.$slots,"default"),re(Zt,{name:`${E(o).namespace.value}-zoom-in-top`},{default:le(()=>[E(St)?Q(p.$slots,"error",{key:0,error:b.value},()=>[Be("div",{class:K(E(h))},Le(b.value),3)]):Re("v-if",!0)]),_:3},8,["name"])],6)],10,Ai)}}});var Tt=ct(ji,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const Si=Ht(Dn,{FormItem:Tt}),_i=Qt(Tt);export{_i as E,Si as a};
