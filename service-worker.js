if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,f,s)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return i;case"module":return n;default:return e(c)}})).then(e=>{const c=s(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-56b7c574"],(function(e){"use strict";e.setCacheNameDetails({prefix:"takeoffstaff"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/2.83a2ab95.css",revision:"7e84c53f66f1d449ba50b032b3e219de"},{url:"css/3.27ebdba1.css",revision:"e3e1fc3d3bdb02d9285ccc75e34ef8b2"},{url:"css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/vendor.844253e1.css",revision:"0102268d703fd5d31395e946e6846bef"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8c7a828f.woff",revision:"d560f924f97c39f3c71be0a30f89b2a8"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4ecd8e78.woff2",revision:"ad0c1bf1395151a1112d4fc419a6c852"},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"index.html",revision:"8f15fc3d5248a54f56c410962227f631"},{url:"js/2.1d2ea5eb.js",revision:"eaad326dc5714485ac3d84fd38d0533e"},{url:"js/3.aeefd7c4.js",revision:"12e2bfec8251ec023f56bf5a6366267e"},{url:"js/4.abcaaba2.js",revision:"26a66b7c99b1f1216a1762a93be2d2fc"},{url:"js/5.cf6499f6.js",revision:"ac64fdb857437a24922765334bab21c7"},{url:"js/app.ad6a8e99.js",revision:"0ab4a1557e539f8a55fb17ebd69e81cc"},{url:"js/vendor.0c1450d9.js",revision:"3359d6337035dc0878df3a5653fc5e36"},{url:"manifest.json",revision:"99672d9fc5b89cb9306df974ddba02da"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));