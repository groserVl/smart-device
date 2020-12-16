
  if (typeof window !== 'undefined' &&  window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).IMask={})}(this,function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var u,i,r,s,a="object",o=function(t){return t&&t.Math==Math&&t},l=o(typeof globalThis==a&&globalThis)||o(typeof window==a&&window)||o(typeof self==a&&self)||o(typeof e==a&&e)||Function("return this")(),h=function(t){try{return!!t()}catch(t){return!0}},c=!h(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),f={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,d={f:p&&!f.call({1:2},1)?function(t){var e=p(this,t);return!!e&&e.enumerable}:f},v=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},k={}.toString,g="".split,y=h(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==function(t){return k.call(t).slice(8,-1)}(t)?g.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},_=function(t){return y(m(t))},A=function(t){return"object"==typeof t?null!==t:"function"==typeof t},b=function(t,e){if(!A(t))return t;var n,u;if(e&&"function"==typeof(n=t.toString)&&!A(u=n.call(t)))return u;if("function"==typeof(n=t.valueOf)&&!A(u=n.call(t)))return u;if(!e&&"function"==typeof(n=t.toString)&&!A(u=n.call(t)))return u;throw TypeError("Can't convert object to primitive value")},C={}.hasOwnProperty,E=function(t,e){return C.call(t,e)},F=l.document,S=A(F)&&A(F.createElement),D=!c&&!h(function(){return 7!=Object.defineProperty((t="div",S?F.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),B=Object.getOwnPropertyDescriptor,w={f:c?B:function(t,e){if(t=_(t),e=b(e,!0),D)try{return B(t,e)}catch(t){}if(E(t,e))return v(!d.f.call(t,e),t[e])}},O=function(t){if(!A(t))throw TypeError(String(t)+" is not an object");return t},M=Object.defineProperty,x={f:c?M:function(t,e,n){if(O(t),e=b(e,!0),O(n),D)try{return M(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},T=c?function(t,e,n){return x.f(t,e,v(1,n))}:function(t,e,n){return t[e]=n,t},P=function(t,e){try{T(l,t,e)}catch(n){l[t]=e}return e},I=n(function(t){var e=l["__core-js_shared__"]||P("__core-js_shared__",{});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),R=I("native-function-to-string",Function.toString),j=l.WeakMap,V="function"==typeof j&&/native code/.test(R.call(j)),N=0,L=Math.random(),H=I("keys"),G={},z=l.WeakMap;if(V){var U=new z,Y=U.get,Z=U.has,q=U.set;u=function(t,e){return q.call(U,t,e),e},i=function(t){return Y.call(U,t)||{}},r=function(t){return Z.call(U,t)}}else{var W=H[s="state"]||(H[s]=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++N+L).toString(36)}(s));G[W]=!0,u=function(t,e){return T(t,W,e),e},i=function(t){return E(t,W)?t[W]:{}},r=function(t){return E(t,W)}}var $={set:u,get:i,has:r,enforce:function(t){return r(t)?i(t):u(t,{})},getterFor:function(t){return function(e){var n;if(!A(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},K=n(function(t){var e=$.get,n=$.enforce,u=String(R).split("toString");I("inspectSource",function(t){return R.call(t)}),(t.exports=function(t,e,i,r){var s=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,o=!!r&&!!r.noTargetGet;"function"==typeof i&&("string"!=typeof e||E(i,"name")||T(i,"name",e),n(i).source=u.join("string"==typeof e?e:"")),t!==l?(s?!o&&t[e]&&(a=!0):delete t[e],a?t[e]=i:T(t,e,i)):a?t[e]=i:P(e,i)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||R.call(this)})}),J=l,Q=function(t){return"function"==typeof t?t:void 0},X=function(t,e){return arguments.length<2?Q(J[t])||Q(l[t]):J[t]&&J[t][e]||l[t]&&l[t][e]},tt=Math.ceil,et=Math.floor,nt=function(t){return isNaN(t=+t)?0:(t>0?et:tt)(t)},ut=Math.min,it=function(t){return t>0?ut(nt(t),9007199254740991):0},rt=Math.max,st=Math.min,at=function(t){return function(e,n,u){var i,r=_(e),s=it(r.length),a=function(t,e){var n=nt(t);return n<0?rt(n+e,0):st(n,e)}(u,s);if(t&&n!=n){for(;s>a;)if((i=r[a++])!=i)return!0}else for(;s>a;a++)if((t||a in r)&&r[a]===n)return t||a||0;return!t&&-1}},ot={includes:at(!0),indexOf:at(!1)}.indexOf,lt=function(t,e){var n,u=_(t),i=0,r=[];for(n in u)!E(G,n)&&E(u,n)&&r.push(n);for(;e.length>i;)E(u,n=e[i++])&&(~ot(r,n)||r.push(n));return r},ht=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ct=ht.concat("length","prototype"),ft={f:Object.getOwnPropertyNames||function(t){return lt(t,ct)}},pt={f:Object.getOwnPropertySymbols},dt=X("Reflect","ownKeys")||function(t){var e=ft.f(O(t)),n=pt.f;return n?e.concat(n(t)):e},vt=function(t,e){for(var n=dt(e),u=x.f,i=w.f,r=0;r<n.length;r++){var s=n[r];E(t,s)||u(t,s,i(e,s))}},kt=/#|\.prototype\./,gt=function(t,e){var n=mt[yt(t)];return n==At||n!=_t&&("function"==typeof e?h(e):!!e)},yt=gt.normalize=function(t){return String(t).replace(kt,".").toLowerCase()},mt=gt.data={},_t=gt.NATIVE="N",At=gt.POLYFILL="P",bt=gt,Ct=w.f,Et=function(t,e){var n,u,i,r,s,a=t.target,o=t.global,h=t.stat;if(n=o?l:h?l[a]||P(a,{}):(l[a]||{}).prototype)for(u in e){if(r=e[u],i=t.noTargetGet?(s=Ct(n,u))&&s.value:n[u],!bt(o?u:a+(h?".":"#")+u,t.forced)&&void 0!==i){if(typeof r==typeof i)continue;vt(r,i)}(t.sham||i&&i.sham)&&T(r,"sham",!0),K(n,u,r,t)}},Ft=Object.keys||function(t){return lt(t,ht)},St=function(t){return Object(m(t))},Dt=Object.assign,Bt=!Dt||h(function(){var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach(function(t){e[t]=t}),7!=Dt({},t)[n]||"abcdefghijklmnopqrst"!=Ft(Dt({},e)).join("")})?function(t,e){for(var n=St(t),u=arguments.length,i=1,r=pt.f,s=d.f;u>i;)for(var a,o=y(arguments[i++]),l=r?Ft(o).concat(r(o)):Ft(o),h=l.length,f=0;h>f;)a=l[f++],c&&!s.call(o,a)||(n[a]=o[a]);return n}:Dt;Et({target:"Object",stat:!0,forced:Object.assign!==Bt},{assign:Bt});var wt="".repeat||function(t){var e=String(m(this)),n="",u=nt(t);if(u<0||u==1/0)throw RangeError("Wrong number of repetitions");for(;u>0;(u>>>=1)&&(e+=e))1&u&&(n+=e);return n},Ot=Math.ceil,Mt=function(t){return function(e,n,u){var i,r,s=String(m(e)),a=s.length,o=void 0===u?" ":String(u),l=it(n);return l<=a||""==o?s:(i=l-a,(r=wt.call(o,Ot(i/o.length))).length>i&&(r=r.slice(0,i)),t?s+r:r+s)}},xt={start:Mt(!1),end:Mt(!0)},Tt=X("navigator","userAgent")||"",Pt=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Tt),It=xt.end;Et({target:"String",proto:!0,forced:Pt},{padEnd:function(t){return It(this,t,arguments.length>1?arguments[1]:void 0)}});var Rt=xt.start;function jt(t){return(jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Vt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Nt(t,e){for(var n=0;n<e.length;n++){var u=e[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function Lt(t,e,n){return e&&Nt(t.prototype,e),n&&Nt(t,n),t}function Ht(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&zt(t,e)}function Gt(t){return(Gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function zt(t,e){return(zt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ut(t,e){if(null==t)return{};var n,u,i=function(t,e){if(null==t)return{};var n,u,i={},r=Object.keys(t);for(u=0;u<r.length;u++)n=r[u],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(u=0;u<r.length;u++)n=r[u],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function Yt(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Zt(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Gt(t)););return t}function qt(t,e,n){return(qt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var u=Zt(t,e);if(u){var i=Object.getOwnPropertyDescriptor(u,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function Wt(t,e,n,u){return(Wt="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,u){var i,r=Zt(t,e);if(r){if((i=Object.getOwnPropertyDescriptor(r,e)).set)return i.set.call(u,n),!0;if(!i.writable)return!1}if(i=Object.getOwnPropertyDescriptor(u,e)){if(!i.writable)return!1;i.value=n,Object.defineProperty(u,e,i)}else!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(u,e,n);return!0})(t,e,n,u)}function $t(t,e,n,u,i){if(!Wt(t,e,n,u||t)&&i)throw new Error("failed to set property");return n}function Kt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],u=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(u=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);u=!0);}catch(t){i=!0,r=t}finally{try{u||null==a.return||a.return()}finally{if(i)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Jt(t){return"string"==typeof t||t instanceof String}Et({target:"String",proto:!0,forced:Pt},{padStart:function(t){return Rt(this,t,arguments.length>1?arguments[1]:void 0)}}),Et({target:"String",proto:!0},{repeat:wt});var Qt={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function Xt(t){switch(t){case Qt.LEFT:return Qt.FORCE_LEFT;case Qt.RIGHT:return Qt.FORCE_RIGHT;default:return t}}function te(t){return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}var ee="undefined"!=typeof window&&window||"undefined"!=typeof global&&global.global===global&&global||"undefined"!=typeof self&&self.self===self&&self||{},ne=function(){function t(e,n,u,i){for(Vt(this,t),this.value=e,this.cursorPos=n,this.oldValue=u,this.oldSelection=i;this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start}return Lt(t,[{key:"startChangePos",get:function(){return Math.min(this.cursorPos,this.oldSelection.start)}},{key:"insertedCount",get:function(){return this.cursorPos-this.startChangePos}},{key:"inserted",get:function(){return this.value.substr(this.startChangePos,this.insertedCount)}},{key:"removedCount",get:function(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}},{key:"removed",get:function(){return this.oldValue.substr(this.startChangePos,this.removedCount)}},{key:"head",get:function(){return this.value.substring(0,this.startChangePos)}},{key:"tail",get:function(){return this.value.substring(this.startChangePos+this.insertedCount)}},{key:"removeDirection",get:function(){return!this.removedCount||this.insertedCount?Qt.NONE:this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos?Qt.RIGHT:Qt.LEFT}}]),t}(),ue=function(){function t(e){Vt(this,t),Object.assign(this,{inserted:"",rawInserted:"",skip:!1,tailShift:0},e)}return Lt(t,[{key:"aggregate",value:function(t){return this.rawInserted+=t.rawInserted,this.skip=this.skip||t.skip,this.inserted+=t.inserted,this.tailShift+=t.tailShift,this}},{key:"offset",get:function(){return this.tailShift+this.inserted.length}}]),t}(),ie=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,u=arguments.length>2?arguments[2]:void 0;Vt(this,t),this.value=e,this.from=n,this.stop=u}return Lt(t,[{key:"toString",value:function(){return this.value}},{key:"extend",value:function(t){this.value+=String(t)}},{key:"appendTo",value:function(t){return t.append(this.toString(),{tail:!0}).aggregate(t._appendPlaceholder())}},{key:"shiftBefore",value:function(t){if(this.from>=t||!this.value.length)return"";var e=this.value[0];return this.value=this.value.slice(1),e}},{key:"state",get:function(){return{value:this.value,from:this.from,stop:this.stop}},set:function(t){Object.assign(this,t)}}]),t}(),re=function(){function t(e){Vt(this,t),this._value="",this._update(e),this.isInitialized=!0}return Lt(t,[{key:"updateOptions",value:function(t){Object.keys(t).length&&this.withValueRefresh(this._update.bind(this,t))}},{key:"_update",value:function(t){Object.assign(this,t)}},{key:"reset",value:function(){this._value=""}},{key:"resolve",value:function(t){return this.reset(),this.append(t,{input:!0},""),this.doCommit(),this.value}},{key:"nearestInputPos",value:function(t,e){return t}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this.value.slice(t,e)}},{key:"extractTail",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new ie(this.extractInput(t,e),t)}},{key:"appendTail",value:function(t){return Jt(t)&&(t=new ie(String(t))),t.appendTo(this)}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(t=this.doPrepare(t,e))?(this._value+=t,new ue({inserted:t,rawInserted:t})):new ue}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,u=this.state,i=this._appendCharRaw(t,e);if(i.inserted){var r,s=!1!==this.doValidate(e);if(s&&null!=n){var a=this.state;this.overwrite&&(r=n.state,n.shiftBefore(this.value.length));var o=this.appendTail(n);(s=o.rawInserted===n.toString())&&o.inserted&&(this.state=a)}s||(i.rawInserted=i.inserted="",this.state=u,n&&r&&(n.state=r))}return i}},{key:"_appendPlaceholder",value:function(){return new ue}},{key:"append",value:function(t,e,n){if(!Jt(t))throw new Error("value should be string");var u=new ue,i=Jt(n)?new ie(String(n)):n;e.tail&&(e._beforeTailState=this.state);for(var r=0;r<t.length;++r)u.aggregate(this._appendChar(t[r],e,i));return null!=i&&(u.tailShift+=this.appendTail(i).tailShift),u}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this._value=this.value.slice(0,t)+this.value.slice(e),new ue}},{key:"withValueRefresh",value:function(t){if(this._refreshing||!this.isInitialized)return t();this._refreshing=!0;var e=this.unmaskedValue,n=this.value,u=t();return this.resolve(n)!==n&&(this.unmaskedValue=e),delete this._refreshing,u}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.prepare?this.prepare(t,this,e):t}},{key:"doValidate",value:function(t){return(!this.validate||this.validate(this.value,this,t))&&(!this.parent||this.parent.doValidate(t))}},{key:"doCommit",value:function(){this.commit&&this.commit(this.value,this)}},{key:"splice",value:function(t,e,n,u){var i=t+e,r=this.extractTail(i),s=this.nearestInputPos(t,u);return new ue({tailShift:s-t}).aggregate(this.remove(s)).aggregate(this.append(n,{input:!0},r))}},{key:"state",get:function(){return{_value:this.value}},set:function(t){this._value=t._value}},{key:"value",get:function(){return this._value},set:function(t){this.resolve(t)}},{key:"unmaskedValue",get:function(){return this.value},set:function(t){this.reset(),this.append(t,{},""),this.doCommit()}},{key:"typedValue",get:function(){return this.unmaskedValue},set:function(t){this.unmaskedValue=t}},{key:"rawInputValue",get:function(){return this.extractInput(0,this.value.length,{raw:!0})},set:function(t){this.reset(),this.append(t,{raw:!0},""),this.doCommit()}},{key:"isComplete",get:function(){return!0}}]),t}();function se(t){if(null==t)throw new Error("mask property should be defined");return t instanceof RegExp?ee.IMask.MaskedRegExp:Jt(t)?ee.IMask.MaskedPattern:t instanceof Date||t===Date?ee.IMask.MaskedDate:t instanceof Number||"number"==typeof t||t===Number?ee.IMask.MaskedNumber:Array.isArray(t)||t===Array?ee.IMask.MaskedDynamic:t.prototype instanceof ee.IMask.Masked?t:t instanceof Function?ee.IMask.MaskedFunction:(console.warn("Mask not found for mask",t),ee.IMask.Masked)}function ae(t){var e=(t=Object.assign({},t)).mask;return e instanceof ee.IMask.Masked?e:new(se(e))(t)}var oe={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./},le=function(){function t(e){Vt(this,t);var n=e.mask,u=Ut(e,["mask"]);this.masked=ae({mask:n}),Object.assign(this,u)}return Lt(t,[{key:"reset",value:function(){this._isFilled=!1,this.masked.reset()}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return 0===t&&e>=1?(this._isFilled=!1,this.masked.remove(t,e)):new ue}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._isFilled)return new ue;var n=this.masked.state,u=this.masked._appendChar(t,e);return u.inserted&&!1===this.doValidate(e)&&(u.inserted=u.rawInserted="",this.masked.state=n),u.inserted||this.isOptional||this.lazy||e.input||(u.inserted=this.placeholderChar),u.skip=!u.inserted&&!this.isOptional,this._isFilled=Boolean(u.inserted),u}},{key:"append",value:function(){var t;return(t=this.masked).append.apply(t,arguments)}},{key:"_appendPlaceholder",value:function(){var t=new ue;return this._isFilled||this.isOptional?t:(this._isFilled=!0,t.inserted=this.placeholderChar,t)}},{key:"extractTail",value:function(){var t;return(t=this.masked).extractTail.apply(t,arguments)}},{key:"appendTail",value:function(){var t;return(t=this.masked).appendTail.apply(t,arguments)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(t,e,n)}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qt.NONE,n=0,u=this.value.length,i=Math.min(Math.max(t,n),u);switch(e){case Qt.LEFT:case Qt.FORCE_LEFT:return this.isComplete?i:n;case Qt.RIGHT:case Qt.FORCE_RIGHT:return this.isComplete?i:u;case Qt.NONE:default:return i}}},{key:"doValidate",value:function(){var t,e;return(t=this.masked).doValidate.apply(t,arguments)&&(!this.parent||(e=this.parent).doValidate.apply(e,arguments))}},{key:"doCommit",value:function(){this.masked.doCommit()}},{key:"value",get:function(){return this.masked.value||(this._isFilled&&!this.isOptional?this.placeholderChar:"")}},{key:"unmaskedValue",get:function(){return this.masked.unmaskedValue}},{key:"isComplete",get:function(){return Boolean(this.masked.value)||this.isOptional}},{key:"state",get:function(){return{masked:this.masked.state,_isFilled:this._isFilled}},set:function(t){this.masked.state=t.masked,this._isFilled=t._isFilled}}]),t}(),he=function(){function t(e){Vt(this,t),Object.assign(this,e),this._value=""}return Lt(t,[{key:"reset",value:function(){this._isRawInput=!1,this._value=""}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return this._value=this._value.slice(0,t)+this._value.slice(e),this._value||(this._isRawInput=!1),new ue}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qt.NONE,n=0,u=this._value.length;switch(e){case Qt.LEFT:case Qt.FORCE_LEFT:return n;case Qt.NONE:case Qt.RIGHT:case Qt.FORCE_RIGHT:default:return u}}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.raw&&this._isRawInput&&this._value.slice(t,e)||""}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new ue;if(this._value)return n;var u=this.char===t[0],i=u&&(this.isUnmasking||e.input||e.raw)&&!e.tail;return i&&(n.rawInserted=this.char),this._value=n.inserted=this.char,this._isRawInput=i&&(e.raw||e.input),n}},{key:"_appendPlaceholder",value:function(){var t=new ue;return this._value?t:(this._value=t.inserted=this.char,t)}},{key:"extractTail",value:function(){arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new ie("")}},{key:"appendTail",value:function(t){return Jt(t)&&(t=new ie(String(t))),t.appendTo(this)}},{key:"append",value:function(t,e,n){var u=this._appendChar(t,e);return null!=n&&(u.tailShift+=this.appendTail(n).tailShift),u}},{key:"doCommit",value:function(){}},{key:"value",get:function(){return this._value}},{key:"unmaskedValue",get:function(){return this.isUnmasking?this.value:""}},{key:"isComplete",get:function(){return!0}},{key:"state",get:function(){return{_value:this._value,_isRawInput:this._isRawInput}},set:function(t){Object.assign(this,t)}}]),t}(),ce=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Vt(this,t),this.chunks=e,this.from=n}return Lt(t,[{key:"toString",value:function(){return this.chunks.map(String).join("")}},{key:"extend",value:function(e){if(String(e)){Jt(e)&&(e=new ie(String(e)));var n=this.chunks[this.chunks.length-1],u=n&&(n.stop===e.stop||null==e.stop)&&e.from===n.from+n.toString().length;if(e instanceof ie)u?n.extend(e.toString()):this.chunks.push(e);else if(e instanceof t){if(null==e.stop)for(var i;e.chunks.length&&null==e.chunks[0].stop;)(i=e.chunks.shift()).from+=e.from,this.extend(i);e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}}},{key:"appendTo",value:function(e){if(!(e instanceof ee.IMask.MaskedPattern))return new ie(this.toString()).appendTo(e);for(var n=new ue,u=0;u<this.chunks.length&&!n.skip;++u){var i=this.chunks[u],r=e._mapPosToBlock(e.value.length),s=i.stop,a=void 0;if(s&&(!r||r.index<=s)&&((i instanceof t||e._stops.indexOf(s)>=0)&&n.aggregate(e._appendPlaceholder(s)),a=i instanceof t&&e._blocks[s]),a){var o=a.appendTail(i);o.skip=!1,n.aggregate(o),e._value+=o.inserted;var l=i.toString().slice(o.rawInserted.length);l&&n.aggregate(e.append(l,{tail:!0}))}else n.aggregate(e.append(i.toString(),{tail:!0}))}return n}},{key:"shiftBefore",value:function(t){if(this.from>=t||!this.chunks.length)return"";for(var e=t-this.from,n=0;n<this.chunks.length;){var u=this.chunks[n],i=u.shiftBefore(e);if(u.toString()){if(!i)break;++n}else this.chunks.splice(n,1);if(i)return i}return""}},{key:"state",get:function(){return{chunks:this.chunks.map(function(t){return t.state}),from:this.from,stop:this.stop,blockIndex:this.blockIndex}},set:function(e){var n=e.chunks,u=Ut(e,["chunks"]);Object.assign(this,u),this.chunks=n.map(function(e){var n="chunks"in e?new t:new ie;return n.state=e,n})}}]),t}(),fe=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Vt(this,e),t.definitions=Object.assign({},oe,t.definitions),Yt(this,Gt(e).call(this,Object.assign({},e.DEFAULTS,{},t)))}return Ht(e,re),Lt(e,[{key:"_update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.definitions=Object.assign({},this.definitions,t.definitions),qt(Gt(e.prototype),"_update",this).call(this,t),this._rebuildMask()}},{key:"_rebuildMask",value:function(){var t=this,n=this.definitions;this._blocks=[],this._stops=[],this._maskedBlocks={};var u=this.mask;if(u&&n)for(var i=!1,r=!1,s=0;s<u.length;++s){if(this.blocks)if("continue"===function(){var e=u.slice(s),n=Object.keys(t.blocks).filter(function(t){return 0===e.indexOf(t)});n.sort(function(t,e){return e.length-t.length});var i=n[0];if(i){var r=ae(Object.assign({parent:t,lazy:t.lazy,placeholderChar:t.placeholderChar,overwrite:t.overwrite},t.blocks[i]));return r&&(t._blocks.push(r),t._maskedBlocks[i]||(t._maskedBlocks[i]=[]),t._maskedBlocks[i].push(t._blocks.length-1)),s+=i.length-1,"continue"}}())continue;var a=u[s],o=a in n;if(a!==e.STOP_CHAR)if("{"!==a&&"}"!==a)if("["!==a&&"]"!==a){if(a===e.ESCAPE_CHAR){if(!(a=u[++s]))break;o=!1}var l=o?new le({parent:this,lazy:this.lazy,placeholderChar:this.placeholderChar,mask:n[a],isOptional:r}):new he({char:a,isUnmasking:i});this._blocks.push(l)}else r=!r;else i=!i;else this._stops.push(this._blocks.length)}}},{key:"reset",value:function(){qt(Gt(e.prototype),"reset",this).call(this),this._blocks.forEach(function(t){return t.reset()})}},{key:"doCommit",value:function(){this._blocks.forEach(function(t){return t.doCommit()}),qt(Gt(e.prototype),"doCommit",this).call(this)}},{key:"appendTail",value:function(t){return qt(Gt(e.prototype),"appendTail",this).call(this,t).aggregate(this._appendPlaceholder())}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=this.doPrepare(t,e);var n=this._mapPosToBlock(this.value.length),u=new ue;if(!n)return u;for(var i=n.index;;++i){var r=this._blocks[i];if(!r)break;var s=r._appendChar(t,e),a=s.skip;if(u.aggregate(s),a||s.rawInserted)break}return u}},{key:"extractTail",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=new ce;return e===n?u:(this._forEachBlocksInRange(e,n,function(e,n,i,r){var s=e.extractTail(i,r);s.stop=t._findStopBefore(n),s.from=t._blockStartPos(n),s instanceof ce&&(s.blockIndex=n),u.extend(s)}),u)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t===e)return"";var u="";return this._forEachBlocksInRange(t,e,function(t,e,i,r){u+=t.extractInput(i,r,n)}),u}},{key:"_findStopBefore",value:function(t){for(var e,n=0;n<this._stops.length;++n){var u=this._stops[n];if(!(u<=t))break;e=u}return e}},{key:"_appendPlaceholder",value:function(t){var e=this,n=new ue;if(this.lazy&&null==t)return n;var u=this._mapPosToBlock(this.value.length);if(!u)return n;var i=u.index,r=null!=t?t:this._blocks.length;return this._blocks.slice(i,r).forEach(function(u){if(!u.lazy||null!=t){var i=null!=u._blocks?[u._blocks.length]:[],r=u._appendPlaceholder.apply(u,i);e._value+=r.inserted,n.aggregate(r)}}),n}},{key:"_mapPosToBlock",value:function(t){for(var e="",n=0;n<this._blocks.length;++n){var u=this._blocks[n],i=e.length;if(t<=(e+=u.value).length)return{index:n,offset:t-i}}}},{key:"_blockStartPos",value:function(t){return this._blocks.slice(0,t).reduce(function(t,e){return t+e.value.length},0)}},{key:"_forEachBlocksInRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0,u=this._mapPosToBlock(t);if(u){var i=this._mapPosToBlock(e),r=i&&u.index===i.index,s=u.offset,a=i&&r?i.offset:this._blocks[u.index].value.length;if(n(this._blocks[u.index],u.index,s,a),i&&!r){for(var o=u.index+1;o<i.index;++o)n(this._blocks[o],o,0,this._blocks[o].value.length);n(this._blocks[i.index],i.index,0,i.offset)}}}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=qt(Gt(e.prototype),"remove",this).call(this,t,n);return this._forEachBlocksInRange(t,n,function(t,e,n,i){u.aggregate(t.remove(n,i))}),u}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qt.NONE,n=this._mapPosToBlock(t)||{index:0,offset:0},u=n.offset,i=n.index,r=this._blocks[i];if(!r)return t;var s=u;0!==s&&s<r.value.length&&(s=r.nearestInputPos(u,Xt(e)));var a=s===r.value.length,o=0===s;if(!o&&!a)return this._blockStartPos(i)+s;var l=a?i+1:i;if(e===Qt.NONE){if(l>0){var h=l-1,c=this._blocks[h],f=c.nearestInputPos(0,Qt.NONE);if(!c.value.length||f!==c.value.length)return this._blockStartPos(l)}for(var p=l,d=p;d<this._blocks.length;++d){var v=this._blocks[d],k=v.nearestInputPos(0,Qt.NONE);if(!v.value.length||k!==v.value.length)return this._blockStartPos(d)+k}for(var g=l-1;g>=0;--g){var y=this._blocks[g],m=y.nearestInputPos(0,Qt.NONE);if(!y.value.length||m!==y.value.length)return this._blockStartPos(g)+y.value.length}return t}if(e===Qt.LEFT||e===Qt.FORCE_LEFT){for(var _,A=l;A<this._blocks.length;++A)if(this._blocks[A].value){_=A;break}if(null!=_){var b=this._blocks[_],C=b.nearestInputPos(0,Qt.RIGHT);if(0===C&&b.unmaskedValue.length)return this._blockStartPos(_)+C}for(var E,F=-1,S=l-1;S>=0;--S){var D=this._blocks[S],B=D.nearestInputPos(D.value.length,Qt.FORCE_LEFT);if(D.value&&0===B||(E=S),0!==B){if(B!==D.value.length)return this._blockStartPos(S)+B;F=S;break}}if(e===Qt.LEFT)for(var w=F+1;w<=Math.min(l,this._blocks.length-1);++w){var O=this._blocks[w],M=O.nearestInputPos(0,Qt.NONE),x=this._blockStartPos(w)+M;if(x>t)break;if(M!==O.value.length)return x}if(F>=0)return this._blockStartPos(F)+this._blocks[F].value.length;if(e===Qt.FORCE_LEFT||this.lazy&&!this.extractInput()&&!pe(this._blocks[l]))return 0;if(null!=E)return this._blockStartPos(E);for(var T=l;T<this._blocks.length;++T){var P=this._blocks[T],I=P.nearestInputPos(0,Qt.NONE);if(!P.value.length||I!==P.value.length)return this._blockStartPos(T)+I}return 0}if(e===Qt.RIGHT||e===Qt.FORCE_RIGHT){for(var R,j,V=l;V<this._blocks.length;++V){var N=this._blocks[V],L=N.nearestInputPos(0,Qt.NONE);if(L!==N.value.length){j=this._blockStartPos(V)+L,R=V;break}}if(null!=R&&null!=j){for(var H=R;H<this._blocks.length;++H){var G=this._blocks[H],z=G.nearestInputPos(0,Qt.FORCE_RIGHT);if(z!==G.value.length)return this._blockStartPos(H)+z}return e===Qt.FORCE_RIGHT?this.value.length:j}for(var U=Math.min(l,this._blocks.length-1);U>=0;--U){var Y=this._blocks[U],Z=Y.nearestInputPos(Y.value.length,Qt.LEFT);if(0!==Z){var q=this._blockStartPos(U)+Z;if(q>=t)return q;break}}}return t}},{key:"maskedBlock",value:function(t){return this.maskedBlocks(t)[0]}},{key:"maskedBlocks",value:function(t){var e=this,n=this._maskedBlocks[t];return n?n.map(function(t){return e._blocks[t]}):[]}},{key:"state",get:function(){return Object.assign({},qt(Gt(e.prototype),"state",this),{_blocks:this._blocks.map(function(t){return t.state})})},set:function(t){var n=t._blocks,u=Ut(t,["_blocks"]);this._blocks.forEach(function(t,e){return t.state=n[e]}),$t(Gt(e.prototype),"state",u,this,!0)}},{key:"isComplete",get:function(){return this._blocks.every(function(t){return t.isComplete})}},{key:"unmaskedValue",get:function(){return this._blocks.reduce(function(t,e){return t+e.unmaskedValue},"")},set:function(t){$t(Gt(e.prototype),"unmaskedValue",t,this,!0)}},{key:"value",get:function(){return this._blocks.reduce(function(t,e){return t+e.value},"")},set:function(t){$t(Gt(e.prototype),"value",t,this,!0)}}]),e}();function pe(t){if(!t)return!1;var e=t.value;return!e||t.nearestInputPos(0,Qt.NONE)!==e.length}fe.DEFAULTS={lazy:!0,placeholderChar:"_"},fe.STOP_CHAR="`",fe.ESCAPE_CHAR="\\",fe.InputDefinition=le,fe.FixedDefinition=he;var de=function(t){function e(){return Vt(this,e),Yt(this,Gt(e).apply(this,arguments))}return Ht(e,fe),Lt(e,[{key:"_update",value:function(t){t=Object.assign({to:this.to||0,from:this.from||0},t);var n=String(t.to).length;null!=t.maxLength&&(n=Math.max(n,t.maxLength)),t.maxLength=n;for(var u=String(t.from).padStart(n,"0"),i=String(t.to).padStart(n,"0"),r=0;r<i.length&&i[r]===u[r];)++r;t.mask=i.slice(0,r).replace(/0/g,"\\0")+"0".repeat(n-r),qt(Gt(e.prototype),"_update",this).call(this,t)}},{key:"boundaries",value:function(t){var e="",n="",u=Kt(t.match(/^(\D*)(\d*)(\D*)/)||[],3),i=u[1],r=u[2];return r&&(e="0".repeat(i.length)+r,n="9".repeat(i.length)+r),[e=e.padEnd(this.maxLength,"0"),n=n.padEnd(this.maxLength,"9")]}},{key:"doPrepare",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=qt(Gt(e.prototype),"doPrepare",this).call(this,t,n).replace(/\D/g,""),!this.autofix)return t;for(var u=String(this.from).padStart(this.maxLength,"0"),i=String(this.to).padStart(this.maxLength,"0"),r=this.value,s="",a=0;a<t.length;++a){var o=r+s+t[a],l=this.boundaries(o),h=Kt(l,2),c=h[0],f=h[1];Number(f)<this.from?s+=u[o.length-1]:Number(c)>this.to?s+=i[o.length-1]:s+=t[a]}return s}},{key:"doValidate",value:function(){var t,n=this.value,u=n.search(/[^0]/);if(-1===u&&n.length<=this._matchFrom)return!0;for(var i=this.boundaries(n),r=Kt(i,2),s=r[0],a=r[1],o=arguments.length,l=new Array(o),h=0;h<o;h++)l[h]=arguments[h];return this.from<=Number(a)&&Number(s)<=this.to&&(t=qt(Gt(e.prototype),"doValidate",this)).call.apply(t,[this].concat(l))}},{key:"_matchFrom",get:function(){return this.maxLength-String(this.from).length}},{key:"isComplete",get:function(){return qt(Gt(e.prototype),"isComplete",this)&&Boolean(this.value)}}]),e}(),ve=function(t){function e(t){return Vt(this,e),Yt(this,Gt(e).call(this,Object.assign({},e.DEFAULTS,{},t)))}return Ht(e,fe),Lt(e,[{key:"_update",value:function(t){t.mask===Date&&delete t.mask,t.pattern&&(t.mask=t.pattern);var n=t.blocks;t.blocks=Object.assign({},e.GET_DEFAULT_BLOCKS()),t.min&&(t.blocks.Y.from=t.min.getFullYear()),t.max&&(t.blocks.Y.to=t.max.getFullYear()),t.min&&t.max&&t.blocks.Y.from===t.blocks.Y.to&&(t.blocks.m.from=t.min.getMonth()+1,t.blocks.m.to=t.max.getMonth()+1,t.blocks.m.from===t.blocks.m.to&&(t.blocks.d.from=t.min.getDate(),t.blocks.d.to=t.max.getDate())),Object.assign(t.blocks,n),Object.keys(t.blocks).forEach(function(e){var n=t.blocks[e];"autofix"in n||(n.autofix=t.autofix)}),qt(Gt(e.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,n=this.date,u=arguments.length,i=new Array(u),r=0;r<u;r++)i[r]=arguments[r];return(t=qt(Gt(e.prototype),"doValidate",this)).call.apply(t,[this].concat(i))&&(!this.isComplete||this.isDateExist(this.value)&&null!=n&&(null==this.min||this.min<=n)&&(null==this.max||n<=this.max))}},{key:"isDateExist",value:function(t){return this.format(this.parse(t))===t}},{key:"date",get:function(){return this.isComplete?this.parse(this.value):null},set:function(t){this.value=this.format(t)}},{key:"typedValue",get:function(){return this.date},set:function(t){this.date=t}}]),e}();ve.DEFAULTS={pattern:"d{.}`m{.}`Y",format:function(t){return[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join(".")},parse:function(t){var e=Kt(t.split("."),3),n=e[0],u=e[1],i=e[2];return new Date(i,u-1,n)}},ve.GET_DEFAULT_BLOCKS=function(){return{d:{mask:de,from:1,to:31,maxLength:2},m:{mask:de,from:1,to:12,maxLength:2},Y:{mask:de,from:1900,to:9999}}};var ke=function(){function t(){Vt(this,t)}return Lt(t,[{key:"select",value:function(t,e){if(null!=t&&null!=e&&(t!==this.selectionStart||e!==this.selectionEnd))try{this._unsafeSelect(t,e)}catch(t){}}},{key:"_unsafeSelect",value:function(t,e){}},{key:"bindEvents",value:function(t){}},{key:"unbindEvents",value:function(){}},{key:"selectionStart",get:function(){var t;try{t=this._unsafeSelectionStart}catch(t){}return null!=t?t:this.value.length}},{key:"selectionEnd",get:function(){var t;try{t=this._unsafeSelectionEnd}catch(t){}return null!=t?t:this.value.length}},{key:"isActive",get:function(){return!1}}]),t}(),ge=function(t){function e(t){var n;return Vt(this,e),(n=Yt(this,Gt(e).call(this))).input=t,n._handlers={},n}return Ht(e,ke),Lt(e,[{key:"_unsafeSelect",value:function(t,e){this.input.setSelectionRange(t,e)}},{key:"bindEvents",value:function(t){var n=this;Object.keys(t).forEach(function(u){return n._toggleEventHandler(e.EVENTS_MAP[u],t[u])})}},{key:"unbindEvents",value:function(){var t=this;Object.keys(this._handlers).forEach(function(e){return t._toggleEventHandler(e)})}},{key:"_toggleEventHandler",value:function(t,e){this._handlers[t]&&(this.input.removeEventListener(t,this._handlers[t]),delete this._handlers[t]),e&&(this.input.addEventListener(t,e),this._handlers[t]=e)}},{key:"isActive",get:function(){return this.input===document.activeElement}},{key:"_unsafeSelectionStart",get:function(){return this.input.selectionStart}},{key:"_unsafeSelectionEnd",get:function(){return this.input.selectionEnd}},{key:"value",get:function(){return this.input.value},set:function(t){this.input.value=t}}]),e}();ge.EVENTS_MAP={selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur"};var ye=function(){function t(e,n){Vt(this,t),this.el=e instanceof ke?e:new ge(e),this.masked=ae(n),this._listeners={},this._value="",this._unmaskedValue="",this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}return Lt(t,[{key:"maskEquals",value:function(t){return null==t||t===this.masked.mask||t===Date&&this.masked instanceof ve}},{key:"_bindEvents",value:function(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this.alignCursorFriendly,focus:this._onFocus,commit:this._onChange})}},{key:"_unbindEvents",value:function(){this.el.unbindEvents()}},{key:"_fireEvent",value:function(t){var e=this._listeners[t];e&&e.forEach(function(t){return t()})}},{key:"_saveSelection",value:function(){this.value!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}},{key:"updateValue",value:function(){this.masked.value=this.el.value,this._value=this.masked.value}},{key:"updateControl",value:function(){var t=this.masked.unmaskedValue,e=this.masked.value,n=this.unmaskedValue!==t||this.value!==e;this._unmaskedValue=t,this._value=e,this.el.value!==e&&(this.el.value=e),n&&this._fireChangeEvents()}},{key:"updateOptions",value:function(t){var e=t.mask,n=Ut(t,["mask"]),u=!this.maskEquals(e),i=!function t(e,n){if(n===e)return!0;var u,i=Array.isArray(n),r=Array.isArray(e);if(i&&r){if(n.length!=e.length)return!1;for(u=0;u<n.length;u++)if(!t(n[u],e[u]))return!1;return!0}if(i!=r)return!1;if(n&&e&&"object"===jt(n)&&"object"===jt(e)){var s=n instanceof Date,a=e instanceof Date;if(s&&a)return n.getTime()==e.getTime();if(s!=a)return!1;var o=n instanceof RegExp,l=e instanceof RegExp;if(o&&l)return n.toString()==e.toString();if(o!=l)return!1;var h=Object.keys(n);for(u=0;u<h.length;u++)if(!Object.prototype.hasOwnProperty.call(e,h[u]))return!1;for(u=0;u<h.length;u++)if(!t(e[h[u]],n[h[u]]))return!1;return!0}return!(!n||!e||"function"!=typeof n||"function"!=typeof e)&&n.toString()===e.toString()}(this.masked,n);u&&(this.mask=e),i&&this.masked.updateOptions(n),(u||i)&&this.updateControl()}},{key:"updateCursor",value:function(t){null!=t&&(this.cursorPos=t,this._delayUpdateCursor(t))}},{key:"_delayUpdateCursor",value:function(t){var e=this;this._abortUpdateCursor(),this._changingCursorPos=t,this._cursorChanging=setTimeout(function(){e.el&&(e.cursorPos=e._changingCursorPos,e._abortUpdateCursor())},10)}},{key:"_fireChangeEvents",value:function(){this._fireEvent("accept"),this.masked.isComplete&&this._fireEvent("complete")}},{key:"_abortUpdateCursor",value:function(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}},{key:"alignCursor",value:function(){this.cursorPos=this.masked.nearestInputPos(this.cursorPos,Qt.LEFT)}},{key:"alignCursorFriendly",value:function(){this.selectionStart===this.cursorPos&&this.alignCursor()}},{key:"on",value:function(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this}},{key:"off",value:function(t,e){if(!this._listeners[t])return this;if(!e)return delete this._listeners[t],this;var n=this._listeners[t].indexOf(e);return n>=0&&this._listeners[t].splice(n,1),this}},{key:"_onInput",value:function(){if(this._abortUpdateCursor(),!this._selection)return this.updateValue();var t=new ne(this.el.value,this.cursorPos,this.value,this._selection),e=this.masked.rawInputValue,n=this.masked.splice(t.startChangePos,t.removed.length,t.inserted,t.removeDirection).offset,u=e===this.masked.rawInputValue?t.removeDirection:Qt.NONE,i=this.masked.nearestInputPos(t.startChangePos+n,u);this.updateControl(),this.updateCursor(i)}},{key:"_onChange",value:function(){this.value!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}},{key:"_onDrop",value:function(t){t.preventDefault(),t.stopPropagation()}},{key:"_onFocus",value:function(t){this.selectionStart===this.cursorPos&&(this._selection&&(this.cursorPos=this._selection.end),this.alignCursorFriendly())}},{key:"destroy",value:function(){this._unbindEvents(),this._listeners.length=0,delete this.el}},{key:"mask",get:function(){return this.masked.mask},set:function(t){if(!this.maskEquals(t))if(this.masked.constructor!==se(t)){var e=ae({mask:t});e.unmaskedValue=this.masked.unmaskedValue,this.masked=e}else this.masked.updateOptions({mask:t})}},{key:"value",get:function(){return this._value},set:function(t){this.masked.value=t,this.updateControl(),this.alignCursor()}},{key:"unmaskedValue",get:function(){return this._unmaskedValue},set:function(t){this.masked.unmaskedValue=t,this.updateControl(),this.alignCursor()}},{key:"typedValue",get:function(){return this.masked.typedValue},set:function(t){this.masked.typedValue=t,this.updateControl(),this.alignCursor()}},{key:"selectionStart",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}},{key:"cursorPos",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd},set:function(t){this.el.isActive&&(this.el.select(t,t),this._saveSelection())}}]),t}(),me=function(t){function e(){return Vt(this,e),Yt(this,Gt(e).apply(this,arguments))}return Ht(e,fe),Lt(e,[{key:"_update",value:function(t){t.enum&&(t.mask="*".repeat(t.enum[0].length)),qt(Gt(e.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,n=this,u=arguments.length,i=new Array(u),r=0;r<u;r++)i[r]=arguments[r];return this.enum.some(function(t){return t.indexOf(n.unmaskedValue)>=0})&&(t=qt(Gt(e.prototype),"doValidate",this)).call.apply(t,[this].concat(i))}}]),e}(),_e=function(t){function e(t){return Vt(this,e),Yt(this,Gt(e).call(this,Object.assign({},e.DEFAULTS,{},t)))}return Ht(e,re),Lt(e,[{key:"_update",value:function(t){qt(Gt(e.prototype),"_update",this).call(this,t),this._updateRegExps()}},{key:"_updateRegExps",value:function(){var t="^"+(this.allowNegative?"[+|\\-]?":""),e=(this.scale?"("+te(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=new RegExp(t+"(0|([1-9]+\\d*))?"+e),this._numberRegExp=new RegExp(t+"\\d*"+e),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(te).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(te(this.thousandsSeparator),"g")}},{key:"_removeThousandsSeparators",value:function(t){return t.replace(this._thousandsSeparatorRegExp,"")}},{key:"_insertThousandsSeparators",value:function(t){var e=t.split(this.radix);return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),e.join(this.radix)}},{key:"doPrepare",value:function(t){for(var n,u=arguments.length,i=new Array(u>1?u-1:0),r=1;r<u;r++)i[r-1]=arguments[r];return(n=qt(Gt(e.prototype),"doPrepare",this)).call.apply(n,[this,this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp,this.radix))].concat(i))}},{key:"_separatorsCount",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0,u=0;u<t;++u)this._value.indexOf(this.thousandsSeparator,u)===u&&(++n,e&&(t+=this.thousandsSeparator.length));return n}},{key:"_separatorsCountFromSlice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(t).length,!0)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,u=arguments.length>2?arguments[2]:void 0,i=this._adjustRangeWithSeparators(t,n),r=Kt(i,2);return t=r[0],n=r[1],this._removeThousandsSeparators(qt(Gt(e.prototype),"extractInput",this).call(this,t,n,u))}},{key:"_appendCharRaw",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.thousandsSeparator)return qt(Gt(e.prototype),"_appendCharRaw",this).call(this,t,n);var u=n.tail&&n._beforeTailState?n._beforeTailState._value:this._value,i=this._separatorsCountFromSlice(u);this._value=this._removeThousandsSeparators(this.value);var r=qt(Gt(e.prototype),"_appendCharRaw",this).call(this,t,n);this._value=this._insertThousandsSeparators(this._value);var s=n.tail&&n._beforeTailState?n._beforeTailState._value:this._value,a=this._separatorsCountFromSlice(s);return r.tailShift+=(a-i)*this.thousandsSeparator.length,r}},{key:"_findSeparatorAround",value:function(t){if(this.thousandsSeparator){var e=t-this.thousandsSeparator.length+1,n=this.value.indexOf(this.thousandsSeparator,e);if(n<=t)return n}return-1}},{key:"_adjustRangeWithSeparators",value:function(t,e){var n=this._findSeparatorAround(t);n>=0&&(t=n);var u=this._findSeparatorAround(e);return u>=0&&(e=u+this.thousandsSeparator.length),[t,e]}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=this._adjustRangeWithSeparators(t,e),u=Kt(n,2);t=u[0],e=u[1];var i=this.value.slice(0,t),r=this.value.slice(e),s=this._separatorsCount(i.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(i+r));var a=this._separatorsCountFromSlice(i);return new ue({tailShift:(a-s)*this.thousandsSeparator.length})}},{key:"nearestInputPos",value:function(t,e){if(!this.thousandsSeparator)return t;switch(e){case Qt.NONE:case Qt.LEFT:case Qt.FORCE_LEFT:var n=this._findSeparatorAround(t-1);if(n>=0){var u=n+this.thousandsSeparator.length;if(t<u||this.value.length<=u||e===Qt.FORCE_LEFT)return n}break;case Qt.RIGHT:case Qt.FORCE_RIGHT:var i=this._findSeparatorAround(t);if(i>=0)return i+this.thousandsSeparator.length}return t}},{key:"doValidate",value:function(t){var n=(t.input?this._numberRegExpInput:this._numberRegExp).test(this._removeThousandsSeparators(this.value));if(n){var u=this.number;n=n&&!isNaN(u)&&(null==this.min||this.min>=0||this.min<=this.number)&&(null==this.max||this.max<=0||this.number<=this.max)}return n&&qt(Gt(e.prototype),"doValidate",this).call(this,t)}},{key:"doCommit",value:function(){if(this.value){var t=this.number,n=t;null!=this.min&&(n=Math.max(n,this.min)),null!=this.max&&(n=Math.min(n,this.max)),n!==t&&(this.unmaskedValue=String(n));var u=this.value;this.normalizeZeros&&(u=this._normalizeZeros(u)),this.padFractionalZeros&&(u=this._padFractionalZeros(u)),this._value=u}qt(Gt(e.prototype),"doCommit",this).call(this)}},{key:"_normalizeZeros",value:function(t){var e=this._removeThousandsSeparators(t).split(this.radix);return e[0]=e[0].replace(/^(\D*)(0*)(\d*)/,function(t,e,n,u){return e+u}),t.length&&!/\d$/.test(e[0])&&(e[0]=e[0]+"0"),e.length>1&&(e[1]=e[1].replace(/0*$/,""),e[1].length||(e.length=1)),this._insertThousandsSeparators(e.join(this.radix))}},{key:"_padFractionalZeros",value:function(t){if(!t)return t;var e=t.split(this.radix);return e.length<2&&e.push(""),e[1]=e[1].padEnd(this.scale,"0"),e.join(this.radix)}},{key:"unmaskedValue",get:function(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".")},set:function(t){$t(Gt(e.prototype),"unmaskedValue",t.replace(".",this.radix),this,!0)}},{key:"number",get:function(){return Number(this.unmaskedValue)},set:function(t){this.unmaskedValue=String(t)}},{key:"typedValue",get:function(){return this.number},set:function(t){this.number=t}},{key:"allowNegative",get:function(){return this.signed||null!=this.min&&this.min<0||null!=this.max&&this.max<0}}]),e}();_e.DEFAULTS={radix:",",thousandsSeparator:"",mapToRadix:["."],scale:2,signed:!1,normalizeZeros:!0,padFractionalZeros:!1};var Ae=function(t){function e(){return Vt(this,e),Yt(this,Gt(e).apply(this,arguments))}return Ht(e,re),Lt(e,[{key:"_update",value:function(t){t.mask&&(t.validate=function(e){return e.search(t.mask)>=0}),qt(Gt(e.prototype),"_update",this).call(this,t)}}]),e}(),be=function(t){function e(){return Vt(this,e),Yt(this,Gt(e).apply(this,arguments))}return Ht(e,re),Lt(e,[{key:"_update",value:function(t){t.mask&&(t.validate=t.mask),qt(Gt(e.prototype),"_update",this).call(this,t)}}]),e}(),Ce=function(t){function e(t){var n;return Vt(this,e),(n=Yt(this,Gt(e).call(this,Object.assign({},e.DEFAULTS,{},t)))).currentMask=null,n}return Ht(e,re),Lt(e,[{key:"_update",value:function(t){qt(Gt(e.prototype),"_update",this).call(this,t),"mask"in t&&(this.compiledMasks=Array.isArray(t.mask)?t.mask.map(function(t){return ae(t)}):[])}},{key:"_appendCharRaw",value:function(){var t,e=this._applyDispatch.apply(this,arguments);this.currentMask&&e.aggregate((t=this.currentMask)._appendChar.apply(t,arguments));return e}},{key:"_applyDispatch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tail&&null!=e._beforeTailState?e._beforeTailState._value:this.value,u=this.rawInputValue,i=e.tail&&null!=e._beforeTailState?e._beforeTailState._rawInputValue:u,r=u.slice(i.length),s=this.currentMask,a=new ue,o=s&&s.state;if(this.currentMask=this.doDispatch(t,Object.assign({},e)),this.currentMask)if(this.currentMask!==s){this.currentMask.reset();var l=this.currentMask.append(i,{raw:!0});a.tailShift=l.inserted.length-n.length,r&&(a.tailShift+=this.currentMask.append(r,{raw:!0,tail:!0}).tailShift)}else this.currentMask.state=o;return a}},{key:"_appendPlaceholder",value:function(){var t=this._applyDispatch.apply(this,arguments);return this.currentMask&&t.aggregate(this.currentMask._appendPlaceholder()),t}},{key:"doDispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.dispatch(t,this,e)}},{key:"doValidate",value:function(){for(var t,n,u=arguments.length,i=new Array(u),r=0;r<u;r++)i[r]=arguments[r];return(t=qt(Gt(e.prototype),"doValidate",this)).call.apply(t,[this].concat(i))&&(!this.currentMask||(n=this.currentMask).doValidate.apply(n,i))}},{key:"reset",value:function(){this.currentMask&&this.currentMask.reset(),this.compiledMasks.forEach(function(t){return t.reset()})}},{key:"remove",value:function(){var t,e=new ue;this.currentMask&&e.aggregate((t=this.currentMask).remove.apply(t,arguments)).aggregate(this._applyDispatch());return e}},{key:"extractInput",value:function(){var t;return this.currentMask?(t=this.currentMask).extractInput.apply(t,arguments):""}},{key:"extractTail",value:function(){for(var t,n,u=arguments.length,i=new Array(u),r=0;r<u;r++)i[r]=arguments[r];return this.currentMask?(t=this.currentMask).extractTail.apply(t,i):(n=qt(Gt(e.prototype),"extractTail",this)).call.apply(n,[this].concat(i))}},{key:"doCommit",value:function(){this.currentMask&&this.currentMask.doCommit(),qt(Gt(e.prototype),"doCommit",this).call(this)}},{key:"nearestInputPos",value:function(){for(var t,n,u=arguments.length,i=new Array(u),r=0;r<u;r++)i[r]=arguments[r];return this.currentMask?(t=this.currentMask).nearestInputPos.apply(t,i):(n=qt(Gt(e.prototype),"nearestInputPos",this)).call.apply(n,[this].concat(i))}},{key:"value",get:function(){return this.currentMask?this.currentMask.value:""},set:function(t){$t(Gt(e.prototype),"value",t,this,!0)}},{key:"unmaskedValue",get:function(){return this.currentMask?this.currentMask.unmaskedValue:""},set:function(t){$t(Gt(e.prototype),"unmaskedValue",t,this,!0)}},{key:"typedValue",get:function(){return this.currentMask?this.currentMask.typedValue:""},set:function(t){var e=String(t);this.currentMask&&(this.currentMask.typedValue=t,e=this.currentMask.unmaskedValue),this.unmaskedValue=e}},{key:"isComplete",get:function(){return!!this.currentMask&&this.currentMask.isComplete}},{key:"state",get:function(){return Object.assign({},qt(Gt(e.prototype),"state",this),{_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map(function(t){return t.state}),currentMaskRef:this.currentMask,currentMask:this.currentMask&&this.currentMask.state})},set:function(t){var n=t.compiledMasks,u=t.currentMaskRef,i=t.currentMask,r=Ut(t,["compiledMasks","currentMaskRef","currentMask"]);this.compiledMasks.forEach(function(t,e){return t.state=n[e]}),null!=u&&(this.currentMask=u,this.currentMask.state=i),$t(Gt(e.prototype),"state",r,this,!0)}},{key:"overwrite",get:function(){return this.currentMask?this.currentMask.overwrite:qt(Gt(e.prototype),"overwrite",this)},set:function(t){console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')}}]),e}();function Ee(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new ye(t,e)}Ce.DEFAULTS={dispatch:function(t,e,n){if(e.compiledMasks.length){var u=e.rawInputValue,i=e.compiledMasks.map(function(e,i){return e.reset(),e.append(u,{raw:!0}),e.append(t,n),{weight:e.rawInputValue.length,index:i}});return i.sort(function(t,e){return e.weight-t.weight}),e.compiledMasks[i[0].index]}}},Ee.InputMask=ye,Ee.Masked=re,Ee.MaskedPattern=fe,Ee.MaskedEnum=me,Ee.MaskedRange=de,Ee.MaskedNumber=_e,Ee.MaskedDate=ve,Ee.MaskedRegExp=Ae,Ee.MaskedFunction=be,Ee.MaskedDynamic=Ce,Ee.createMask=ae,Ee.MaskElement=ke,Ee.HTMLMaskElement=ge,ee.IMask=Ee,t.HTMLMaskElement=ge,t.InputMask=ye,t.MaskElement=ke,t.Masked=re,t.MaskedDate=ve,t.MaskedDynamic=Ce,t.MaskedEnum=me,t.MaskedFunction=be,t.MaskedNumber=_e,t.MaskedPattern=fe,t.MaskedRange=de,t.MaskedRegExp=Ae,t.createMask=ae,t.default=Ee,Object.defineProperty(t,"__esModule",{value:!0})});

/*! picturefill - v3.0.2 - 2016-02-12
* https://scottjehl.github.io/picturefill/
* Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
*/
/*! Gecko-Picture - v1.0
* https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
* Firefox's early picture implementation (prior to FF41) is static and does
* not react to viewport changes. This tiny module fixes this.
*/
(function(window) {
/*jshint eqnull:true */
var ua = navigator.userAgent;

if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
addEventListener("resize", (function() {
var timer;

var dummySrc = document.createElement("source");

var fixRespimg = function(img) {
var source, sizes;
var picture = img.parentNode;

if (picture.nodeName.toUpperCase() === "PICTURE") {
source = dummySrc.cloneNode();

picture.insertBefore(source, picture.firstElementChild);
setTimeout(function() {
picture.removeChild(source);
});
} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
img._pfLastSize = img.offsetWidth;
sizes = img.sizes;
img.sizes += ",100vw";
setTimeout(function() {
img.sizes = sizes;
});
}
};

var findPictureImgs = function() {
var i;
var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
for (i = 0; i < imgs.length; i++) {
fixRespimg(imgs[i]);
}
};
var onResize = function() {
clearTimeout(timer);
timer = setTimeout(findPictureImgs, 99);
};
var mq = window.matchMedia && matchMedia("(orientation: landscape)");
var init = function() {
onResize();

if (mq && mq.addListener) {
mq.addListener(onResize);
}
};

dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

if (/^[c|i]|d$/.test(document.readyState || "")) {
init();
} else {
document.addEventListener("DOMContentLoaded", init);
}

return onResize;
})());
}
})(window);

/*! Picturefill - v3.0.2
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
*  License: MIT
*/

(function( window, document, undefined ) {
// Enable strict mode
"use strict";

// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
document.createElement( "picture" );

var warn, eminpx, alwaysCheckWDescriptor, evalId;
// local object for method references and testing exposure
var pf = {};
var isSupportTestReady = false;
var noop = function() {};
var image = document.createElement( "img" );
var getImgAttr = image.getAttribute;
var setImgAttr = image.setAttribute;
var removeImgAttr = image.removeAttribute;
var docElem = document.documentElement;
var types = {};
var cfg = {
//resource selection:
algorithm: ""
};
var srcAttr = "data-pfsrc";
var srcsetAttr = srcAttr + "set";
// ua sniffing is done for undetectable img loading features,
// to do some non crucial perf optimizations
var ua = navigator.userAgent;
var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
var curSrcProp = "currentSrc";
var regWDesc = /\s+\+?\d+(e\d+)?w/;
var regSize = /(\([^)]+\))?\s*(.+)/;
var setOptions = window.picturefillCFG;
/**
 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
 */
// baseStyle also used by getEmValue (i.e.: width: 1em is important)
var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
var fsCss = "font-size:100%!important;";
var isVwDirty = true;

var cssCache = {};
var sizeLengthCache = {};
var DPR = window.devicePixelRatio;
var units = {
px: 1,
"in": 96
};
var anchor = document.createElement( "a" );
/**
 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
 * @type {boolean}
 */
var alreadyRun = false;

// Reusable, non-"g" Regexes

// (Don't use \s, to avoid matching non-breaking space.)
var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
regexTrailingCommas = /[,]+$/,
regexNonNegativeInteger = /^\d+$/,

// ( Positive or negative or unsigned integers or decimals, without or without exponents.
// Must include at least one digit.
// According to spec tests any decimal point must be followed by a digit.
// No leading plus sign is allowed.)
// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

var on = function(obj, evt, fn, capture) {
if ( obj.addEventListener ) {
obj.addEventListener(evt, fn, capture || false);
} else if ( obj.attachEvent ) {
obj.attachEvent( "on" + evt, fn);
}
};

/**
 * simple memoize function:
 */

var memoize = function(fn) {
var cache = {};
return function(input) {
if ( !(input in cache) ) {
cache[ input ] = fn(input);
}
return cache[ input ];
};
};

// UTILITY FUNCTIONS

// Manual is faster than RegEx
// http://jsperf.com/whitespace-character/5
function isSpace(c) {
return (c === "\u0020" || // space
c === "\u0009" || // horizontal tab
c === "\u000A" || // new line
c === "\u000C" || // form feed
c === "\u000D");  // carriage return
}

/**
 * gets a mediaquery and returns a boolean or gets a css length and returns a number
 * @param css mediaqueries or css length
 * @returns {boolean|number}
 *
 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
 */
var evalCSS = (function() {

var regLength = /^([\d\.]+)(em|vw|px)$/;
var replace = function() {
var args = arguments, index = 0, string = args[0];
while (++index in args) {
string = string.replace(args[index], args[++index]);
}
return string;
};

var buildStr = memoize(function(css) {

return "return " + replace((css || "").toLowerCase(),
// interpret `and`
/\band\b/g, "&&",

// interpret `,`
/,/g, "||",

// interpret `min-` as >=
/min-([a-z-\s]+):/g, "e.$1>=",

// interpret `max-` as <=
/max-([a-z-\s]+):/g, "e.$1<=",

//calc value
/calc([^)]+)/g, "($1)",

// interpret css values
/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
//make eval less evil
/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
) + ";";
});

return function(css, length) {
var parsedLength;
if (!(css in cssCache)) {
cssCache[css] = false;
if (length && (parsedLength = css.match( regLength ))) {
cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
} else {
/*jshint evil:true */
try{
cssCache[css] = new Function("e", buildStr(css))(units);
} catch(e) {}
/*jshint evil:false */
}
}
return cssCache[css];
};
})();

var setResolution = function( candidate, sizesattr ) {
if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
candidate.res = candidate.w / candidate.cWidth ;
} else {
candidate.res = candidate.d;
}
return candidate;
};

/**
 *
 * @param opt
 */
var picturefill = function( opt ) {

if (!isSupportTestReady) {return;}

var elements, i, plen;

var options = opt || {};

if ( options.elements && options.elements.nodeType === 1 ) {
if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
options.elements =  [ options.elements ];
} else {
options.context = options.elements;
options.elements =  null;
}
}

elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

if ( (plen = elements.length) ) {

pf.setupRun( options );
alreadyRun = true;

// Loop through all elements
for ( i = 0; i < plen; i++ ) {
pf.fillImg(elements[ i ], options);
}

pf.teardownRun( options );
}
};

/**
 * outputs a warning for the developer
 * @param {message}
 * @type {Function}
 */
warn = ( window.console && console.warn ) ?
function( message ) {
console.warn( message );
} :
noop
;

if ( !(curSrcProp in image) ) {
curSrcProp = "src";
}

// Add support for standard mime types.
types[ "image/jpeg" ] = true;
types[ "image/gif" ] = true;
types[ "image/png" ] = true;

function detectTypeSupport( type, typeUri ) {
// based on Modernizr's lossless img-webp test
// note: asynchronous
var image = new window.Image();
image.onerror = function() {
types[ type ] = false;
picturefill();
};
image.onload = function() {
types[ type ] = image.width === 1;
picturefill();
};
image.src = typeUri;
return "pending";
}

// test svg support
types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

/**
 * updates the internal vW property with the current viewport width in px
 */
function updateMetrics() {

isVwDirty = false;
DPR = window.devicePixelRatio;
cssCache = {};
sizeLengthCache = {};

pf.DPR = DPR || 1;

units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

units.vw = units.width / 100;
units.vh = units.height / 100;

evalId = [ units.height, units.width, DPR ].join("-");

units.em = pf.getEmValue();
units.rem = units.em;
}

function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
var bonusFactor, tooMuch, bonus, meanDensity;

//experimental
if (cfg.algorithm === "saveData" ){
if ( lowerValue > 2.7 ) {
meanDensity = dprValue + 1;
} else {
tooMuch = higherValue - dprValue;
bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

bonus = tooMuch * bonusFactor;

if (isCached) {
bonus += 0.1 * bonusFactor;
}

meanDensity = lowerValue + bonus;
}
} else {
meanDensity = (dprValue > 1) ?
Math.sqrt(lowerValue * higherValue) :
lowerValue;
}

return meanDensity > dprValue;
}

function applyBestCandidate( img ) {
var srcSetCandidates;
var matchingSet = pf.getSet( img );
var evaluated = false;
if ( matchingSet !== "pending" ) {
evaluated = evalId;
if ( matchingSet ) {
srcSetCandidates = pf.setRes( matchingSet );
pf.applySetCandidate( srcSetCandidates, img );
}
}
img[ pf.ns ].evaled = evaluated;
}

function ascendingSort( a, b ) {
return a.res - b.res;
}

function setSrcToCur( img, src, set ) {
var candidate;
if ( !set && src ) {
set = img[ pf.ns ].sets;
set = set && set[set.length - 1];
}

candidate = getCandidateForSrc(src, set);

if ( candidate ) {
src = pf.makeUrl(src);
img[ pf.ns ].curSrc = src;
img[ pf.ns ].curCan = candidate;

if ( !candidate.res ) {
setResolution( candidate, candidate.set.sizes );
}
}
return candidate;
}

function getCandidateForSrc( src, set ) {
var i, candidate, candidates;
if ( src && set ) {
candidates = pf.parseSet( set );
src = pf.makeUrl(src);
for ( i = 0; i < candidates.length; i++ ) {
if ( src === pf.makeUrl(candidates[ i ].url) ) {
candidate = candidates[ i ];
break;
}
}
}
return candidate;
}

function getAllSourceElements( picture, candidates ) {
var i, len, source, srcset;

// SPEC mismatch intended for size and perf:
// actually only source elements preceding the img should be used
// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
var sources = picture.getElementsByTagName( "source" );

for ( i = 0, len = sources.length; i < len; i++ ) {
source = sources[ i ];
source[ pf.ns ] = true;
srcset = source.getAttribute( "srcset" );

// if source does not have a srcset attribute, skip
if ( srcset ) {
candidates.push( {
srcset: srcset,
media: source.getAttribute( "media" ),
type: source.getAttribute( "type" ),
sizes: source.getAttribute( "sizes" )
} );
}
}
}

/**
 * Srcset Parser
 * By Alex Bell |  MIT License
 *
 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
 *
 * Based super duper closely on the reference algorithm at:
 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
 */

// 1. Let input be the value passed to this algorithm.
// (TO-DO : Explain what "set" argument is here. Maybe choose a more
// descriptive & more searchable name.  Since passing the "set" in really has
// nothing to do with parsing proper, I would prefer this assignment eventually
// go in an external fn.)
function parseSrcset(input, set) {

function collectCharacters(regEx) {
var chars,
match = regEx.exec(input.substring(pos));
if (match) {
chars = match[ 0 ];
pos += chars.length;
return chars;
}
}

var inputLength = input.length,
url,
descriptors,
currentDescriptor,
state,
c,

// 2. Let position be a pointer into input, initially pointing at the start
//    of the string.
pos = 0,

// 3. Let candidates be an initially empty source set.
candidates = [];

/**
* Adds descriptor properties to a candidate, pushes to the candidates array
* @return undefined
*/
// (Declared outside of the while loop so that it's only created once.
// (This fn is defined before it is used, in order to pass JSHINT.
// Unfortunately this breaks the sequencing of the spec comments. :/ )
function parseDescriptors() {

// 9. Descriptor parser: Let error be no.
var pError = false,

// 10. Let width be absent.
// 11. Let density be absent.
// 12. Let future-compat-h be absent. (We're implementing it now as h)
w, d, h, i,
candidate = {},
desc, lastChar, value, intVal, floatVal;

// 13. For each descriptor in descriptors, run the appropriate set of steps
// from the following list:
for (i = 0 ; i < descriptors.length; i++) {
desc = descriptors[ i ];

lastChar = desc[ desc.length - 1 ];
value = desc.substring(0, desc.length - 1);
intVal = parseInt(value, 10);
floatVal = parseFloat(value);

// If the descriptor consists of a valid non-negative integer followed by
// a U+0077 LATIN SMALL LETTER W character
if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

// If width and density are not both absent, then let error be yes.
if (w || d) {pError = true;}

// Apply the rules for parsing non-negative integers to the descriptor.
// If the result is zero, let error be yes.
// Otherwise, let width be the result.
if (intVal === 0) {pError = true;} else {w = intVal;}

// If the descriptor consists of a valid floating-point number followed by
// a U+0078 LATIN SMALL LETTER X character
} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

// If width, density and future-compat-h are not all absent, then let error
// be yes.
if (w || d || h) {pError = true;}

// Apply the rules for parsing floating-point number values to the descriptor.
// If the result is less than zero, let error be yes. Otherwise, let density
// be the result.
if (floatVal < 0) {pError = true;} else {d = floatVal;}

// If the descriptor consists of a valid non-negative integer followed by
// a U+0068 LATIN SMALL LETTER H character
} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

// If height and density are not both absent, then let error be yes.
if (h || d) {pError = true;}

// Apply the rules for parsing non-negative integers to the descriptor.
// If the result is zero, let error be yes. Otherwise, let future-compat-h
// be the result.
if (intVal === 0) {pError = true;} else {h = intVal;}

// Anything else, Let error be yes.
} else {pError = true;}
} // (close step 13 for loop)

// 15. If error is still no, then append a new image source to candidates whose
// URL is url, associated with a width width if not absent and a pixel
// density density if not absent. Otherwise, there is a parse error.
if (!pError) {
candidate.url = url;

if (w) { candidate.w = w;}
if (d) { candidate.d = d;}
if (h) { candidate.h = h;}
if (!h && !d && !w) {candidate.d = 1;}
if (candidate.d === 1) {set.has1x = true;}
candidate.set = set;

candidates.push(candidate);
}
} // (close parseDescriptors fn)

/**
* Tokenizes descriptor properties prior to parsing
* Returns undefined.
* (Again, this fn is defined before it is used, in order to pass JSHINT.
* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
*/
function tokenize() {

// 8.1. Descriptor tokeniser: Skip whitespace
collectCharacters(regexLeadingSpaces);

// 8.2. Let current descriptor be the empty string.
currentDescriptor = "";

// 8.3. Let state be in descriptor.
state = "in descriptor";

while (true) {

// 8.4. Let c be the character at position.
c = input.charAt(pos);

//  Do the following depending on the value of state.
//  For the purpose of this step, "EOF" is a special character representing
//  that position is past the end of input.

// In descriptor
if (state === "in descriptor") {
// Do the following, depending on the value of c:

// Space character
// If current descriptor is not empty, append current descriptor to
// descriptors and let current descriptor be the empty string.
// Set state to after descriptor.
if (isSpace(c)) {
if (currentDescriptor) {
descriptors.push(currentDescriptor);
currentDescriptor = "";
state = "after descriptor";
}

// U+002C COMMA (,)
// Advance position to the next character in input. If current descriptor
// is not empty, append current descriptor to descriptors. Jump to the step
// labeled descriptor parser.
} else if (c === ",") {
pos += 1;
if (currentDescriptor) {
descriptors.push(currentDescriptor);
}
parseDescriptors();
return;

// U+0028 LEFT PARENTHESIS (()
// Append c to current descriptor. Set state to in parens.
} else if (c === "\u0028") {
currentDescriptor = currentDescriptor + c;
state = "in parens";

// EOF
// If current descriptor is not empty, append current descriptor to
// descriptors. Jump to the step labeled descriptor parser.
} else if (c === "") {
if (currentDescriptor) {
descriptors.push(currentDescriptor);
}
parseDescriptors();
return;

// Anything else
// Append c to current descriptor.
} else {
currentDescriptor = currentDescriptor + c;
}
// (end "in descriptor"

// In parens
} else if (state === "in parens") {

// U+0029 RIGHT PARENTHESIS ())
// Append c to current descriptor. Set state to in descriptor.
if (c === ")") {
currentDescriptor = currentDescriptor + c;
state = "in descriptor";

// EOF
// Append current descriptor to descriptors. Jump to the step labeled
// descriptor parser.
} else if (c === "") {
descriptors.push(currentDescriptor);
parseDescriptors();
return;

// Anything else
// Append c to current descriptor.
} else {
currentDescriptor = currentDescriptor + c;
}

// After descriptor
} else if (state === "after descriptor") {

// Do the following, depending on the value of c:
// Space character: Stay in this state.
if (isSpace(c)) {

// EOF: Jump to the step labeled descriptor parser.
} else if (c === "") {
parseDescriptors();
return;

// Anything else
// Set state to in descriptor. Set position to the previous character in input.
} else {
state = "in descriptor";
pos -= 1;

}
}

// Advance position to the next character in input.
pos += 1;

// Repeat this step.
} // (close while true loop)
}

// 4. Splitting loop: Collect a sequence of characters that are space
//    characters or U+002C COMMA characters. If any U+002C COMMA characters
//    were collected, that is a parse error.
while (true) {
collectCharacters(regexLeadingCommasOrSpaces);

// 5. If position is past the end of input, return candidates and abort these steps.
if (pos >= inputLength) {
return candidates; // (we're done, this is the sole return path)
}

// 6. Collect a sequence of characters that are not space characters,
//    and let that be url.
url = collectCharacters(regexLeadingNotSpaces);

// 7. Let descriptors be a new empty list.
descriptors = [];

// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
//         more than one character, that is a parse error.
if (url.slice(-1) === ",") {
url = url.replace(regexTrailingCommas, "");
// (Jump ahead to step 9 to skip tokenization and just push the candidate).
parseDescriptors();

//	Otherwise, follow these substeps:
} else {
tokenize();
} // (close else of step 8)

// 16. Return to the step labeled splitting loop.
} // (Close of big while loop.)
}

/*
* Sizes Parser
*
* By Alex Bell |  MIT License
*
* Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
*
* Reference algorithm at:
* https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
*
* Most comments are copied in directly from the spec
* (except for comments in parens).
*
* Grammar is:
* <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
* <source-size> = <media-condition> <source-size-value>
* <source-size-value> = <length>
* http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
*
* E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
* or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
*
* Returns the first valid <css-length> with a media condition that evaluates to true,
* or "100vw" if all valid media conditions evaluate to false.
*
*/

function parseSizes(strValue) {

// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
// CSS allows a single optional plus or minus sign:
// http://www.w3.org/TR/CSS2/syndata.html#numbers
// CSS is ASCII case-insensitive:
// http://www.w3.org/TR/CSS2/syndata.html#characters )
// Spec allows exponential notation for <number> type:
// http://dev.w3.org/csswg/css-values/#numbers
var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

// (This is a quick and lenient test. Because of optional unlimited-depth internal
// grouping parens and strict spacing rules, this could get very complicated.)
var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

var i;
var unparsedSizesList;
var unparsedSizesListLength;
var unparsedSize;
var lastComponentValue;
var size;

// UTILITY FUNCTIONS

//  (Toy CSS parser. The goals here are:
//  1) expansive test coverage without the weight of a full CSS parser.
//  2) Avoiding regex wherever convenient.
//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
//  Returns an array of arrays.)
function parseComponentValues(str) {
var chrctr;
var component = "";
var componentArray = [];
var listArray = [];
var parenDepth = 0;
var pos = 0;
var inComment = false;

function pushComponent() {
if (component) {
componentArray.push(component);
component = "";
}
}

function pushComponentArray() {
if (componentArray[0]) {
listArray.push(componentArray);
componentArray = [];
}
}

// (Loop forwards from the beginning of the string.)
while (true) {
chrctr = str.charAt(pos);

if (chrctr === "") { // ( End of string reached.)
pushComponent();
pushComponentArray();
return listArray;
} else if (inComment) {
if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
inComment = false;
pos += 2;
pushComponent();
continue;
} else {
pos += 1; // (Skip all characters inside comments.)
continue;
}
} else if (isSpace(chrctr)) {
// (If previous character in loop was also a space, or if
// at the beginning of the string, do not add space char to
// component.)
if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
pos += 1;
continue;
} else if (parenDepth === 0) {
pushComponent();
pos +=1;
continue;
} else {
// (Replace any space character with a plain space for legibility.)
chrctr = " ";
}
} else if (chrctr === "(") {
parenDepth += 1;
} else if (chrctr === ")") {
parenDepth -= 1;
} else if (chrctr === ",") {
pushComponent();
pushComponentArray();
pos += 1;
continue;
} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
inComment = true;
pos += 2;
continue;
}

component = component + chrctr;
pos += 1;
}
}

function isValidNonNegativeSourceSizeValue(s) {
if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
if (regexCssCalc.test(s)) {return true;}
// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
// "-0 is equivalent to 0 and is not a negative number." which means that
// unitless zero and unitless negative zero must be accepted as special cases.)
if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
return false;
}

// When asked to parse a sizes attribute from an element, parse a
// comma-separated list of component values from the value of the element's
// sizes attribute (or the empty string, if the attribute is absent), and let
// unparsed sizes list be the result.
// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

unparsedSizesList = parseComponentValues(strValue);
unparsedSizesListLength = unparsedSizesList.length;

// For each unparsed size in unparsed sizes list:
for (i = 0; i < unparsedSizesListLength; i++) {
unparsedSize = unparsedSizesList[i];

// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
// ( parseComponentValues() already omits spaces outside of parens. )

// If unparsed size is now empty, that is a parse error; continue to the next
// iteration of this algorithm.
// ( parseComponentValues() won't push an empty array. )

// 2. If the last component value in unparsed size is a valid non-negative
// <source-size-value>, let size be its value and remove the component value
// from unparsed size. Any CSS function other than the calc() function is
// invalid. Otherwise, there is a parse error; continue to the next iteration
// of this algorithm.
// http://dev.w3.org/csswg/css-syntax/#parse-component-value
lastComponentValue = unparsedSize[unparsedSize.length - 1];

if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
size = lastComponentValue;
unparsedSize.pop();
} else {
continue;
}

// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
// size. If unparsed size is now empty, return size and exit this algorithm.
// If this was not the last item in unparsed sizes list, that is a parse error.
if (unparsedSize.length === 0) {
return size;
}

// 4. Parse the remaining component values in unparsed size as a
// <media-condition>. If it does not parse correctly, or it does parse
// correctly but the <media-condition> evaluates to false, continue to the
// next iteration of this algorithm.
// (Parsing all possible compound media conditions in JS is heavy, complicated,
// and the payoff is unclear. Is there ever an situation where the
// media condition parses incorrectly but still somehow evaluates to true?
// Can we just rely on the browser/polyfill to do it?)
unparsedSize = unparsedSize.join(" ");
if (!(pf.matchesMedia( unparsedSize ) ) ) {
continue;
}

// 5. Return size and exit this algorithm.
return size;
}

// If the above algorithm exhausts unparsed sizes list without returning a
// size value, return 100vw.
return "100vw";
}

// namespace
pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

// srcset support test
pf.supSrcset = "srcset" in image;
pf.supSizes = "sizes" in image;
pf.supPicture = !!window.HTMLPictureElement;

// UC browser does claim to support srcset and picture, but not sizes,
// this extended test reveals the browser does support nothing
if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
(function(image2) {
image.srcset = "data:,a";
image2.src = "data:,a";
pf.supSrcset = image.complete === image2.complete;
pf.supPicture = pf.supSrcset && pf.supPicture;
})(document.createElement("img"));
}

// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
if (pf.supSrcset && !pf.supSizes) {

(function() {
var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
var img = document.createElement("img");
var test = function() {
var width = img.width;

if (width === 2) {
pf.supSizes = true;
}

alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

isSupportTestReady = true;
// force async
setTimeout(picturefill);
};

img.onload = test;
img.onerror = test;
img.setAttribute("sizes", "9px");

img.srcset = width1 + " 1w," + width2 + " 9w";
img.src = width1;
})();

} else {
isSupportTestReady = true;
}

// using pf.qsa instead of dom traversing does scale much better,
// especially on sites mixing responsive and non-responsive images
pf.selShort = "picture>img,img[srcset]";
pf.sel = pf.selShort;
pf.cfg = cfg;

/**
 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
 */
pf.DPR = (DPR  || 1 );
pf.u = units;

// container of supported mime types that one might need to qualify before using
pf.types =  types;

pf.setSize = noop;

/**
 * Gets a string and returns the absolute URL
 * @param src
 * @returns {String} absolute URL
 */

pf.makeUrl = memoize(function(src) {
anchor.href = src;
return anchor.href;
});

/**
 * Gets a DOM element or document and a selctor and returns the found matches
 * Can be extended with jQuery/Sizzle for IE7 support
 * @param context
 * @param sel
 * @returns {NodeList|Array}
 */
pf.qsa = function(context, sel) {
return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
};

/**
 * Shortcut method for matchMedia ( for easy overriding in tests )
 * wether native or pf.mMQ is used will be decided lazy on first call
 * @returns {boolean}
 */
pf.matchesMedia = function() {
if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
pf.matchesMedia = function( media ) {
return !media || ( matchMedia( media ).matches );
};
} else {
pf.matchesMedia = pf.mMQ;
}

return pf.matchesMedia.apply( this, arguments );
};

/**
 * A simplified matchMedia implementation for IE8 and IE9
 * handles only min-width/max-width with px or em values
 * @param media
 * @returns {boolean}
 */
pf.mMQ = function( media ) {
return media ? evalCSS(media) : true;
};

/**
 * Returns the calculated length in css pixel from the given sourceSizeValue
 * http://dev.w3.org/csswg/css-values-3/#length-value
 * intended Spec mismatches:
 * * Does not check for invalid use of CSS functions
 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
 * @param sourceSizeValue
 * @returns {Number}
 */
pf.calcLength = function( sourceSizeValue ) {

var value = evalCSS(sourceSizeValue, true) || false;
if (value < 0) {
value = false;
}

return value;
};

/**
 * Takes a type string and checks if its supported
 */

pf.supportsType = function( type ) {
return ( type ) ? types[ type ] : true;
};

/**
 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
 * @param sourceSizeStr
 * @returns {*}
 */
pf.parseSize = memoize(function( sourceSizeStr ) {
var match = ( sourceSizeStr || "" ).match(regSize);
return {
media: match && match[1],
length: match && match[2]
};
});

pf.parseSet = function( set ) {
if ( !set.cands ) {
set.cands = parseSrcset(set.srcset, set);
}
return set.cands;
};

/**
 * returns 1em in css px for html/body default size
 * function taken from respondjs
 * @returns {*|number}
 */
pf.getEmValue = function() {
var body;
if ( !eminpx && (body = document.body) ) {
var div = document.createElement( "div" ),
originalHTMLCSS = docElem.style.cssText,
originalBodyCSS = body.style.cssText;

div.style.cssText = baseStyle;

// 1em in a media query is the value of the default font size of the browser
// reset docElem and body to ensure the correct value is returned
docElem.style.cssText = fsCss;
body.style.cssText = fsCss;

body.appendChild( div );
eminpx = div.offsetWidth;
body.removeChild( div );

//also update eminpx before returning
eminpx = parseFloat( eminpx, 10 );

// restore the original values
docElem.style.cssText = originalHTMLCSS;
body.style.cssText = originalBodyCSS;

}
return eminpx || 16;
};

/**
 * Takes a string of sizes and returns the width in pixels as a number
 */
pf.calcListLength = function( sourceSizeListStr ) {
// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
//
//                           or (min-width:30em) calc(30% - 15px)
if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
}

return sizeLengthCache[ sourceSizeListStr ];
};

/**
 * Takes a candidate object with a srcset property in the form of url/
 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
 *     "images/pic-small.png"
 * Get an array of image candidates in the form of
 *      {url: "/foo/bar.png", resolution: 1}
 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
 * If sizes is specified, res is calculated
 */
pf.setRes = function( set ) {
var candidates;
if ( set ) {

candidates = pf.parseSet( set );

for ( var i = 0, len = candidates.length; i < len; i++ ) {
setResolution( candidates[ i ], set.sizes );
}
}
return candidates;
};

pf.setRes.res = setResolution;

pf.applySetCandidate = function( candidates, img ) {
if ( !candidates.length ) {return;}
var candidate,
i,
j,
length,
bestCandidate,
curSrc,
curCan,
candidateSrc,
abortCurSrc;

var imageData = img[ pf.ns ];
var dpr = pf.DPR;

curSrc = imageData.curSrc || img[curSrcProp];

curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

// if we have a current source, we might either become lazy or give this source some advantage
if ( curCan && curCan.set === candidates[ 0 ].set ) {

// if browser can abort image request and the image has a higher pixel density than needed
// and this image isn't downloaded yet, we skip next part and try to save bandwidth
abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

if ( !abortCurSrc ) {
curCan.cached = true;

// if current candidate is "best", "better" or "okay",
// set it to bestCandidate
if ( curCan.res >= dpr ) {
bestCandidate = curCan;
}
}
}

if ( !bestCandidate ) {

candidates.sort( ascendingSort );

length = candidates.length;
bestCandidate = candidates[ length - 1 ];

for ( i = 0; i < length; i++ ) {
candidate = candidates[ i ];
if ( candidate.res >= dpr ) {
j = i - 1;

// we have found the perfect candidate,
// but let's improve this a little bit with some assumptions ;-)
if (candidates[ j ] &&
(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

bestCandidate = candidates[ j ];

} else {
bestCandidate = candidate;
}
break;
}
}
}

if ( bestCandidate ) {

candidateSrc = pf.makeUrl( bestCandidate.url );

imageData.curSrc = candidateSrc;
imageData.curCan = bestCandidate;

if ( candidateSrc !== curSrc ) {
pf.setSrc( img, bestCandidate );
}
pf.setSize( img );
}
};

pf.setSrc = function( img, bestCandidate ) {
var origWidth;
img.src = bestCandidate.url;

// although this is a specific Safari issue, we don't want to take too much different code paths
if ( bestCandidate.set.type === "image/svg+xml" ) {
origWidth = img.style.width;
img.style.width = (img.offsetWidth + 1) + "px";

// next line only should trigger a repaint
// if... is only done to trick dead code removal
if ( img.offsetWidth + 1 ) {
img.style.width = origWidth;
}
}
};

pf.getSet = function( img ) {
var i, set, supportsType;
var match = false;
var sets = img [ pf.ns ].sets;

for ( i = 0; i < sets.length && !match; i++ ) {
set = sets[i];

if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
continue;
}

if ( supportsType === "pending" ) {
set = supportsType;
}

match = set;
break;
}

return match;
};

pf.parseSets = function( element, parent, options ) {
var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
var imageData = element[ pf.ns ];

if ( imageData.src === undefined || options.src ) {
imageData.src = getImgAttr.call( element, "src" );
if ( imageData.src ) {
setImgAttr.call( element, srcAttr, imageData.src );
} else {
removeImgAttr.call( element, srcAttr );
}
}

if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
srcsetAttribute = getImgAttr.call( element, "srcset" );
imageData.srcset = srcsetAttribute;
srcsetParsed = true;
}

imageData.sets = [];

if ( hasPicture ) {
imageData.pic = true;
getAllSourceElements( parent, imageData.sets );
}

if ( imageData.srcset ) {
imageSet = {
srcset: imageData.srcset,
sizes: getImgAttr.call( element, "sizes" )
};

imageData.sets.push( imageSet );

isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

// add normal src as candidate, if source has no w descriptor
if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
imageSet.srcset += ", " + imageData.src;
imageSet.cands.push({
url: imageData.src,
d: 1,
set: imageSet
});
}

} else if ( imageData.src ) {
imageData.sets.push( {
srcset: imageData.src,
sizes: null
} );
}

imageData.curCan = null;
imageData.curSrc = undefined;

// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
// or has a w descriptor (and does not support sizes) set support to false to evaluate
imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
if ( srcsetAttribute ) {
setImgAttr.call( element, srcsetAttr, srcsetAttribute );
element.srcset = "";
} else {
removeImgAttr.call( element, srcsetAttr );
}
}

if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
if (imageData.src === null) {
element.removeAttribute("src");
} else {
element.src = imageData.src;
}
}

imageData.parsed = true;
};

pf.fillImg = function(element, options) {
var imageData;
var extreme = options.reselect || options.reevaluate;

// expando for caching data on the img
if ( !element[ pf.ns ] ) {
element[ pf.ns ] = {};
}

imageData = element[ pf.ns ];

// if the element has already been evaluated, skip it
// unless `options.reevaluate` is set to true ( this, for example,
// is set to true when running `picturefill` on `resize` ).
if ( !extreme && imageData.evaled === evalId ) {
return;
}

if ( !imageData.parsed || options.reevaluate ) {
pf.parseSets( element, element.parentNode, options );
}

if ( !imageData.supported ) {
applyBestCandidate( element );
} else {
imageData.evaled = evalId;
}
};

pf.setupRun = function() {
if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
updateMetrics();
}
};

// If picture is supported, well, that's awesome.
if ( pf.supPicture ) {
picturefill = noop;
pf.fillImg = noop;
} else {

// Set up picture polyfill by polling the document
(function() {
var isDomReady;
var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

var run = function() {
var readyState = document.readyState || "";

timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
if ( document.body ) {
pf.fillImgs();
isDomReady = isDomReady || regReady.test(readyState);
if ( isDomReady ) {
clearTimeout( timerId );
}

}
};

var timerId = setTimeout(run, document.body ? 9 : 99);

// Also attach picturefill on resize and readystatechange
// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
var debounce = function(func, wait) {
var timeout, timestamp;
var later = function() {
var last = (new Date()) - timestamp;

if (last < wait) {
timeout = setTimeout(later, wait - last);
} else {
timeout = null;
func();
}
};

return function() {
timestamp = new Date();

if (!timeout) {
timeout = setTimeout(later, wait);
}
};
};
var lastClientWidth = docElem.clientHeight;
var onResize = function() {
isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
lastClientWidth = docElem.clientHeight;
if ( isVwDirty ) {
pf.fillImgs();
}
};

on( window, "resize", debounce(onResize, 99 ) );
on( document, "readystatechange", run );
})();
}

pf.picturefill = picturefill;
//use this internally for easy monkey patching/performance testing
pf.fillImgs = picturefill;
pf.teardownRun = noop;

/* expose methods for testing */
picturefill._ = pf;

window.picturefillCFG = {
pf: pf,
push: function(args) {
var name = args.shift();
if (typeof pf[name] === "function") {
pf[name].apply(pf, args);
} else {
cfg[name] = args[0];
if (alreadyRun) {
pf.fillImgs( { reselect: true } );
}
}
}
};

while (setOptions && setOptions.length) {
window.picturefillCFG.push(setOptions.shift());
}

/* expose picturefill */
window.picturefill = picturefill;

/* expose picturefill */
if ( typeof module === "object" && typeof module.exports === "object" ) {
// CommonJS, just export
module.exports = picturefill;
} else if ( typeof define === "function" && define.amd ) {
// AMD support
define( "picturefill", function() { return picturefill; } );
}

// IE8 evals this sync, so it must be the last thing we do
if ( !pf.supPicture ) {
types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
}

} )( window, document );

'use strict';

// polyfill
function polyfill() {
  // aliases
  var w = window;
  var d = document;

  // return if scroll behavior is supported and polyfill is not forced
  if (
    'scrollBehavior' in d.documentElement.style &&
    w.__forceSmoothScrollPolyfill__ !== true
  ) {
    return;
  }

  // globals
  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468;

  // object gathering original scroll methods
  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  };

  // define timing method
  var now =
    w.performance && w.performance.now
      ? w.performance.now.bind(w.performance)
      : Date.now;

  /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */
  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }

  /*
   * IE has rounding bug rounding down clientHeight and clientWidth and
   * rounding up scrollHeight and scrollWidth causing false positives
   * on hasScrollableSpace
   */
  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

  /**
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }

  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }

  /**
   * indicates if a smooth behavior should be applied
   * @method shouldBailOut
   * @param {Number|Object} firstArg
   * @returns {Boolean}
   */
  function shouldBailOut(firstArg) {
    if (
      firstArg === null ||
      typeof firstArg !== 'object' ||
      firstArg.behavior === undefined ||
      firstArg.behavior === 'auto' ||
      firstArg.behavior === 'instant'
    ) {
      // first argument is not an object/null
      // or behavior is auto, instant or undefined
      return true;
    }

    if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
      // first argument is an object and behavior is smooth
      return false;
    }

    // throw error when behavior is not supported
    throw new TypeError(
      'behavior member of ScrollOptions ' +
        firstArg.behavior +
        ' is not a valid value for enumeration ScrollBehavior.'
    );
  }

  /**
   * indicates if an element has scrollable space in the provided axis
   * @method hasScrollableSpace
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }

    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }

  /**
   * indicates if an element has a scrollable overflow property in the axis
   * @method canOverflow
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

    return overflowValue === 'auto' || overflowValue === 'scroll';
  }

  /**
   * indicates if an element can be scrolled in either axis
   * @method isScrollable
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

    return isScrollableY || isScrollableX;
  }

  /**
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {Node} el
   * @returns {Node} el
   */
  function findScrollableParent(el) {
    while (el !== d.body && isScrollable(el) === false) {
      el = el.parentNode || el.host;
    }

    return el;
  }

  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   * @returns {undefined}
   */
  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;

    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed;

    // apply easing to elapsed time
    value = ease(elapsed);

    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;

    context.method.call(context.scrollable, currentX, currentY);

    // scroll more if we have not reached our destination
    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }

  /**
   * scrolls window or element with a smooth behavior
   * @method smoothScroll
   * @param {Object|Node} el
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now();

    // define scroll context
    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    }

    // scroll looping over a frame
    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  }

  // ORIGINAL METHODS OVERRIDES
  // w.scroll and w.scrollTo
  w.scroll = w.scrollTo = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(
        w,
        arguments[0].left !== undefined
          ? arguments[0].left
          : typeof arguments[0] !== 'object'
            ? arguments[0]
            : w.scrollX || w.pageXOffset,
        // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined
          ? arguments[0].top
          : arguments[1] !== undefined
            ? arguments[1]
            : w.scrollY || w.pageYOffset
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      w,
      d.body,
      arguments[0].left !== undefined
        ? ~~arguments[0].left
        : w.scrollX || w.pageXOffset,
      arguments[0].top !== undefined
        ? ~~arguments[0].top
        : w.scrollY || w.pageYOffset
    );
  };

  // w.scrollBy
  w.scrollBy = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(
        w,
        arguments[0].left !== undefined
          ? arguments[0].left
          : typeof arguments[0] !== 'object' ? arguments[0] : 0,
        arguments[0].top !== undefined
          ? arguments[0].top
          : arguments[1] !== undefined ? arguments[1] : 0
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      w,
      d.body,
      ~~arguments[0].left + (w.scrollX || w.pageXOffset),
      ~~arguments[0].top + (w.scrollY || w.pageYOffset)
    );
  };

  // Element.prototype.scroll and Element.prototype.scrollTo
  Element.prototype.scroll = Element.prototype.scrollTo = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      // if one number is passed, throw error to match Firefox implementation
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }

      original.elementScroll.call(
        this,
        // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
        // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
      );

      return;
    }

    var left = arguments[0].left;
    var top = arguments[0].top;

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      this,
      this,
      typeof left === 'undefined' ? this.scrollLeft : ~~left,
      typeof top === 'undefined' ? this.scrollTop : ~~top
    );
  };

  // Element.prototype.scrollBy
  Element.prototype.scrollBy = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(
        this,
        arguments[0].left !== undefined
          ? ~~arguments[0].left + this.scrollLeft
          : ~~arguments[0] + this.scrollLeft,
        arguments[0].top !== undefined
          ? ~~arguments[0].top + this.scrollTop
          : ~~arguments[1] + this.scrollTop
      );

      return;
    }

    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  };

  // Element.prototype.scrollIntoView
  Element.prototype.scrollIntoView = function() {
    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(
        this,
        arguments[0] === undefined ? true : arguments[0]
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();

    if (scrollableParent !== d.body) {
      // reveal element inside parent
      smoothScroll.call(
        this,
        scrollableParent,
        scrollableParent.scrollLeft + clientRects.left - parentRects.left,
        scrollableParent.scrollTop + clientRects.top - parentRects.top
      );

      // reveal parent in viewport unless is fixed
      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      // reveal element in viewport
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
  // commonjs
  module.exports = { polyfill: polyfill };
} else {
  // global
  polyfill();
}

!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target, use) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = document.importNode ? document.importNode(target, !0) : target.cloneNode(!0), g = document.createElementNS(svg.namespaceURI || "http://www.w3.org/2000/svg", "g"); clone.childNodes.length; ) {
                g.appendChild(clone.firstChild);
            }
            if (use) {
                for (var i = 0; use.attributes.length > i; i++) {
                    var attr = use.attributes[i];
                    "xlink:href" !== attr.name && "href" !== attr.name && g.setAttribute(attr.name, attr.value);
                }
            }
            fragment.appendChild(g), // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr, use) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""),
                cachedDocument.body.innerHTML = xhr.responseText, // ensure domains are the same, otherwise we'll have issues appending the
                // element in IE 11
                cachedDocument.domain !== document.domain && (cachedDocument.domain = document.domain),
                xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)),
                    // embed the target into the svg
                    embed(item.parent, item.svg, target, use);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // if all <use>s in the array are being bypassed, don't proceed.
            if (numberOfSvgUseElementsToBypass && uses.length - numberOfSvgUseElementsToBypass <= 0) {
                return void requestAnimationFrame(oninterval, 67);
            }
            // if there are <use>s to process, proceed.
            // reset the bypass counter, since the counter will be incremented for every bypassed element,
            // even ones that were counted before.
            numberOfSvgUseElementsToBypass = 0;
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)),
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(),
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr, use);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id), use);
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});
