!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.wretch=n()}(this,function(){"use strict";const t=Object.assign||function(t){for(var n,r=1;r<arguments.length;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};var n=function(r,o,e){if(void 0===e&&(e=!1),!r||!o||"object"!=typeof r||"object"!=typeof o)return r;var u=t({},r,o);for(var i in o)o.hasOwnProperty(i)&&(o[i]instanceof Array&&r[i]instanceof Array?u[i]=e?r[i].concat(o[i]):u[i]=o[i]:"object"==typeof o[i]&&"object"==typeof r[i]&&(u[i]=n(r[i],o[i],e)));return u},r={},o=null,e=function(){function e(t,n){void 0===n&&(n={}),this._url=t,this._options=n}return e.prototype.defaults=function(t){return r=t,this},e.prototype.mixdefaults=function(t){return r=n(r,t),this},e.prototype.errorType=function(t){return o=t,this},e.prototype.url=function(t){return new e(t,this._options)},e.prototype.options=function(t){return new e(this._url,t)},e.prototype.query=function(t){return new e(u(this._url,t),this._options)},e.prototype.accept=function(t){return new e(this._url,n(this._options,{headers:{Accept:t}}))},e.prototype.get=function(t){return void 0===t&&(t={}),i(this._url)(n(t,this._options))},e.prototype.delete=function(r){return void 0===r&&(r={}),i(this._url)(t({},n(r,this._options),{method:"DELETE"}))},e.prototype.put=function(r){return void 0===r&&(r={}),i(this._url)(t({},n(r,this._options),{method:"PUT"}))},e.prototype.post=function(r){return void 0===r&&(r={}),i(this._url)(t({},n(r,this._options),{method:"POST"}))},e.prototype.patch=function(r){return void 0===r&&(r={}),i(this._url)(t({},n(r,this._options),{method:"PATCH"}))},e.prototype.json=function(n){return new e(this._url,t({},this._options,{headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}))},e.prototype.formData=function(n){var r=new FormData;for(var o in n)if(n[o]instanceof Array)for(var u=0,i=n[o];u<i.length;u++){var f=i[u];r.append(o+"[]",f)}else r.append(o,n[o]);return new e(this._url,t({},this._options,{body:r}))},e}(),u=function(t,n){var r=new URLSearchParams,o=t.indexOf("?");for(var e in n)r.append(e,n[e]);return~o?t.substring(0,o)+"?"+r.toString():t+"?"+r.toString()},i=function(t){return function(e){void 0===e&&(e={});var u=fetch(t,n(r,e)).then(function(t){return t.ok?t:t[o||"text"]().then(function(n){var r=new Error(n);throw r[o]=n,r.status=t.status,r.response=t,r})}),i=[],f=function(t){return i.reduce(function(t,n){return t.catch(n)},t)},s={res:function(){return f(u)},json:function(){return f(u.then(function(t){return t&&t.json()}))},blob:function(){return f(u.then(function(t){return t&&t.blob()}))},formData:function(){return f(u.then(function(t){return t&&t.formData()}))},arrayBuffer:function(){return f(u.then(function(t){return t&&t.arrayBuffer()}))},text:function(){return f(u.then(function(t){return t&&t.text()}))},error:function(t,n){return i.push(function(r){if(r.status!==t)throw r;n(r)}),s},badRequest:function(t){return s.error(400,t)},unauthorized:function(t){return s.error(401,t)},forbidden:function(t){return s.error(403,t)},notFound:function(t){return s.error(404,t)},timeout:function(t){return s.error(408,t)},internalError:function(t){return s.error(500,t)}};return s}};"undefined"==typeof self&&(global.URLSearchParams=require("url").URLSearchParams);return function(t,n){return void 0===t&&(t=""),void 0===n&&(n={}),new e(t,n)}});
//# sourceMappingURL=wretch.js.map