"use strict";(self.webpackChunkpeach_jam=self.webpackChunkpeach_jam||[]).push([[731],{6731:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(8032),a=n(7294),i=n(7762);n(2369);let r;const c=new WeakMap,l=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function u(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function d(e,t,n,o,a,i){const r=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=n.has(t);function s(e){this.removeEventListener("load",s);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{u(this,c),null==a||a({wasCached:l})})).catch((e=>{u(this,c),null==i||i(e)})):(u(this,c),null==a||a({wasCached:l}))}return r.addEventListener("load",s),null==o||o({wasCached:l}),Array.from(r.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),r.complete&&s.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",s)}}function g(e,t,a,i,s,u,g){if(!(0,o.h)()){let o;const f=(m=()=>{o=d(e,t,a,s,u,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==l?void 0:l.effectiveType)||null!=l&&l.saveData?"2500px":"1250px"})),function(e){return c.set(e,m),r.observe(e),function(){r&&e&&(c.delete(e),r.unobserve(e))}}):function(){return m(),function(){}}),v=f(e);var b,h;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=i.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(h=i.objectPosition)?h:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(843).then(n.t.bind(n,4843,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),v()}}var m;return d(e,t,a,s,u,g)}function b(e){let{image:t,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:l,imgStyle:u={},objectPosition:d,backgroundColor:g,objectFit:b="cover"}=e,h=(0,o._)(e,s);const{width:m,height:f,layout:v,images:w,placeholder:y,backgroundColor:p}=t;return u=(0,o.a)({objectFit:b,objectPosition:d,backgroundColor:g},u),(0,i.uS)(a.createElement(o.L,{layout:v,width:m,height:f},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,v,m,f,p,b,d))),a.createElement(o.M,(0,o.a)({},h,{width:m,height:f,className:l},(0,o.b)(r,c,w,n,u)))))}}}]);
//# sourceMappingURL=731-37f5bed6f36c606e5473.js.map