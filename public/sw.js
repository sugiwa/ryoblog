if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,c)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1zQGIXr90n1g4DNPZ_qcf/_buildManifest.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/1zQGIXr90n1g4DNPZ_qcf/_ssgManifest.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/59923fc876990e746adad165121a1ac12e23b5c1.4a9f6cca220afb3f2099.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/commons.8f8e2e72413cefd3b7f3.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/main-1ddaa5f7efa28b46cadc.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/404-bba6e3f63c4faaadcde2.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/_app-8fa00f0c0763a07ffc27.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/_error-64521e901bf95f17889d.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/about-bc31b4c46dd91ed1d3e8.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/blog/page/%5Bid%5D-9fe1496e10657eb435f7.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/blog/post/%5Bid%5D-3da15b03c3d99cccd260.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/category-294cb6bd5b02a5ee4ae7.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/category/%5Bid%5D-a94ee4085a5b70c77aa7.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/pages/index-b22338750ed64afca30c.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/polyfills-4f4acd756cef4fe6da1b.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/css/11936812f8d14e68a4d5.css",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/_next/static/css/8235131b382f93bd6773.css",revision:"1zQGIXr90n1g4DNPZ_qcf"},{url:"/book.svg",revision:"3de5cc4a731c046209df149aa12d28ed"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/favicon.ico",revision:"10a5a04e0b68383946d1a7b5b7d7e33e"},{url:"/icons/icon-128x128.png",revision:"a3e7879579599620c4aabfb93116ee37"},{url:"/icons/icon-144x144.png",revision:"45cfe70bbbda29242b6b8afa25da6be3"},{url:"/icons/icon-152x152.png",revision:"7519ed3690140f3606f52c2b9a94ecdb"},{url:"/icons/icon-160x160.png",revision:"9ddfb12b7126090c4b2781294bb44dc3"},{url:"/icons/icon-192x192.png",revision:"f798b0214596f5a91e8e3a0e03d0ddde"},{url:"/icons/icon-196x196.png",revision:"ff89828faa4758a19b75eb2d015988e4"},{url:"/icons/icon-256x256.png",revision:"126da5a286c130b00248723e6610ab86"},{url:"/icons/icon-384x384.png",revision:"9401d9abed3e10cab16ec49d1b2ef331"},{url:"/icons/icon-512x512.png",revision:"9c012290f5339e41e0a3d0408440bf5e"},{url:"/icons/icon-72x72.png",revision:"9f4e476431b422f28f5cdf56fcc76d9c"},{url:"/icons/icon-96x96.png",revision:"693d12b065ae1632887bc69646d13b21"},{url:"/manifest.json",revision:"6d1834020eb394c4ab2d531e59f63d0a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
