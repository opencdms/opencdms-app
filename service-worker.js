if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const p=e=>n(e,c),l={module:{uri:c},exports:i,require:p};s[c]=Promise.all(o.map((e=>l[e]||p(e)))).then((e=>(r(...e),i)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"opencdms-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/opencdms-app/browserconfig.xml",revision:"a65aeab3c87bb868e33032c49b186280"},{url:"/opencdms-app/css/app.c9cba382.css",revision:null},{url:"/opencdms-app/img/logo_opencdms.2033442a.png",revision:null},{url:"/opencdms-app/index.html",revision:"b1d5bcf49afb481647680e21cf3bd454"},{url:"/opencdms-app/js/737.122a0aaa.js",revision:null},{url:"/opencdms-app/js/934.832f7f54.js",revision:null},{url:"/opencdms-app/js/app.62dca107.js",revision:null},{url:"/opencdms-app/js/chunk-vendors.84f281a3.js",revision:null},{url:"/opencdms-app/js/dashboard.cb00e754.js",revision:null},{url:"/opencdms-app/manifest.json",revision:"e2182979d6df8cf96b70b404a19ac876"},{url:"/opencdms-app/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
