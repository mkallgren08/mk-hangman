"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","11fa3403bd56214392b65c8c414d9145"],["/static/css/main.9cec5de5.css","9a3c164c180e8f5ccb21285fb4ab663e"],["/static/js/main.12985503.js","6b29e216673625c222e73b929301f7c2"],["/static/media/Hangman-0.03b86c23.jpg","03b86c23398068b7af5d73dee6c07a92"],["/static/media/Hangman-11.7b62cead.jpg","7b62ceadb9fe771aa3a1fce52ac3506b"],["/static/media/Hangman-22.eb7487fe.jpg","eb7487fe927979c3799bc3e7d2cb2191"],["/static/media/Hangman-33.dce98cf5.jpg","dce98cf5691461897be9de45ce23023a"],["/static/media/Hangman-44.939f4031.jpg","939f4031c14995f57886eb7517a4659f"],["/static/media/Hangman-55.e6347372.jpg","e6347372daa6a5d79de6b8309d97c726"],["/static/media/Hangman-66.fdd53164.jpg","fdd53164eea5293327c27101f14bf744"],["/static/media/Hangman-77.6a860ec5.jpg","6a860ec53fbd29158fe226b5c3339f24"],["/static/media/Hangman-88.46a37fb3.jpg","46a37fb32259f4ea7cfb52cd5a0757ed"],["/static/media/Hangman-full.14295ba3.jpg","14295ba35c4cd5f3f29897163879bc6a"],["/static/media/loading-icon.b2ad93b8.gif","b2ad93b82433e2b48e0d0d471003e3d8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});