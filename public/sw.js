if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aP9iNTEhFCiGm0Y_HQM15/_buildManifest.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/aP9iNTEhFCiGm0Y_HQM15/_ssgManifest.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/59923fc876990e746adad165121a1ac12e23b5c1.4a9f6cca220afb3f2099.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/commons.8f8e2e72413cefd3b7f3.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/main-1ddaa5f7efa28b46cadc.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/404-71117c89a083efa83682.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/_app-13ee2dadcb29e4c4d6e3.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/_error-64521e901bf95f17889d.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/about-dfe8640c41e3bd907f7d.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/blog/page/%5Bid%5D-dd03c6ba25678b8f66b9.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/blog/post/%5Bid%5D-f4b1385855be9c9be3fc.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/category-c434bc4759431cf8bdc7.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/category/%5Bid%5D-c91509ee0cb3ffbedb5a.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/pages/index-138a584aca0f156677b6.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/polyfills-4f4acd756cef4fe6da1b.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/css/76c36cd17a139b6099b8.css",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/_next/static/css/8235131b382f93bd6773.css",revision:"aP9iNTEhFCiGm0Y_HQM15"},{url:"/book.svg",revision:"3de5cc4a731c046209df149aa12d28ed"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/favicon.ico",revision:"10a5a04e0b68383946d1a7b5b7d7e33e"},{url:"/icons/icon-128x128.png",revision:"a3e7879579599620c4aabfb93116ee37"},{url:"/icons/icon-144x144.png",revision:"45cfe70bbbda29242b6b8afa25da6be3"},{url:"/icons/icon-152x152.png",revision:"7519ed3690140f3606f52c2b9a94ecdb"},{url:"/icons/icon-160x160.png",revision:"9ddfb12b7126090c4b2781294bb44dc3"},{url:"/icons/icon-192x192.png",revision:"f798b0214596f5a91e8e3a0e03d0ddde"},{url:"/icons/icon-196x196.png",revision:"ff89828faa4758a19b75eb2d015988e4"},{url:"/icons/icon-256x256.png",revision:"126da5a286c130b00248723e6610ab86"},{url:"/icons/icon-384x384.png",revision:"9401d9abed3e10cab16ec49d1b2ef331"},{url:"/icons/icon-512x512.png",revision:"9c012290f5339e41e0a3d0408440bf5e"},{url:"/icons/icon-72x72.png",revision:"9f4e476431b422f28f5cdf56fcc76d9c"},{url:"/icons/icon-96x96.png",revision:"693d12b065ae1632887bc69646d13b21"},{url:"/manifest.json",revision:"98faeb9d8870e03f5e3710f839639110"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
