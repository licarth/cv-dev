"use strict";var precacheConfig=[["/cv-dev/index.html","37d519c6bfe003de1204fcea407a29ad"],["/cv-dev/static/css/main.e8650b51.css","e38c312fdfcac1ed3d6633f8a14d9e9d"],["/cv-dev/static/js/main.0c967e08.js","14339f6844e5ba978f2ca9a375028bd9"],["/cv-dev/static/media/Dosis-Bold.3fdafce4.otf","3fdafce42b8fc3827c880779176daeed"],["/cv-dev/static/media/Dosis-Regular.62edbe8d.otf","62edbe8db877667d703a63578e63d853"],["/cv-dev/static/media/a320pfd.ffce2dfb.woff","ffce2dfb0392d2c8d4caebcc1fef29b7"],["/cv-dev/static/media/cc.5e2d7562.svg","5e2d7562e49c29556d2dcfb23ee531ce"],["/cv-dev/static/media/cloud.b6e1b79a.svg","b6e1b79a244a32da5d49fe176293f9fc"],["/cv-dev/static/media/education.a558bb19.svg","a558bb19b6e36780187555535fb1a563"],["/cv-dev/static/media/pfd.05e5845b.png","05e5845bdd3380d6d2523f6b4479497b"],["/cv-dev/static/media/planeur.dcff34a7.svg","dcff34a7fc821309b8b3f8b6d72821b1"],["/cv-dev/static/media/sports.f2d7e194.svg","f2d7e19495228666b2641193b2d2528d"],["/cv-dev/static/media/uk.eb1ef5dc.svg","eb1ef5dc8966c0c7434477ddba12f6f5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/cv-dev/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});