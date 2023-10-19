"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[391],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,r,n)=>{let o=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,s=i,i=!0,l++):i&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,o=!0):(o=r(c)===c&&n(c)!==c,s=i,i=n(c)===c&&r(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,o):o(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return R},L:function(){return h},M:function(){return L},P:function(){return k},S:function(){return B},_:function(){return s},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return g},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),o=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(a=o[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function g(e,t,a,r,n,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=o,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:n,alt:o="",shouldLoad:l}=e,c=s(e,y);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:o}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,o=s(e,f);const l=o.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,i({},o,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:o}=e;return r.createElement("source",{key:t+"-"+o+"-"+a,type:o,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var E;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],k=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(E=b.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:o().object.isRequired,alt:N},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],_=new Set;let D,P;const j=function(e){let{as:t="div",image:n,style:o,backgroundColor:c,className:d,class:g,onStartLoad:m,onLoad:p,onError:h}=e,y=s(e,T);const{width:f,height:v,layout:b}=n,E=u(f,v,b),{style:w,className:k}=E,L=s(E,O),x=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(d=g);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,v);return(0,r.useEffect)((()=>{D||(D=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(S);if(P&&_.has(S))return;let t,r;return D.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:_.has(S),image:n},y)),_.has(S)||(t=requestAnimationFrame((()=>{x.current&&(r=s(x.current,S,_,o,m,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(S)&&P&&(x.current.innerHTML=P(i({isLoading:_.has(S),isLoaded:_.has(S),image:n},y)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},L,{style:i({},w,o,{backgroundColor:c}),className:k+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));R.propTypes=I,R.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:o}=t,l=s(t,q);return o&&console.warn(o),n?r.createElement(e,i({image:n},l)):(console.warn("Image not loaded",a),null)}}const M=A((function(e){let{as:t="div",className:a,class:n,style:o,image:l,loading:c="lazy",imgClassName:m,imgStyle:p,backgroundColor:y,objectFit:f,objectPosition:v}=e,b=s(e,x);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=i({objectFit:f,objectPosition:v,backgroundColor:y},p);const{width:E,height:w,layout:N,images:I,placeholder:T,backgroundColor:O}=l,_=u(E,w,N),{style:D,className:P}=_,j=s(_,S),R={fallback:void 0,sources:[]};return I.fallback&&(R.fallback=i({},I.fallback,{srcSet:I.fallback.srcSet?C(I.fallback.srcSet):void 0})),I.sources&&(R.sources=I.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},j,{style:i({},D,o,{backgroundColor:y}),className:P+(a?" "+a:"")}),r.createElement(h,{layout:N,width:E,height:w},r.createElement(k,i({},g(T,!1,N,E,w,O,f,v))),r.createElement(L,i({"data-gatsby-image-ssr":"",className:m},b,d("eager"===c,!1,R,c,p)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),W={src:o().string.isRequired,alt:N,width:z,height:z,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=W;const B=A(R);B.displayName="StaticImage",B.propTypes=W},3650:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(6641),o=a(982),i=a(9417),s=a(2440);var l=()=>{const{0:e,1:t}=(0,r.useState)(!1);function a(){t(!e)}return r.createElement("div",null,r.createElement(s.Z,{swipe:!0,direction:"down",top:"exit",to:"/",entryOffset:100,duration:1},r.createElement(o.G,{icon:i.mTx,className:"backButton-module--page-back--0982d "+(e?"fa-beat":void 0)+" "+(e?"backButton-module--hovering--ad599":void 0),style:{color:"white"},onMouseOver:a,onMouseOut:a})))},c="topBar-module--active-page--66b5a",u="topBar-module--page-select--ecffe",d=a(1883);var g=e=>{let{active:t}=e;return r.createElement("div",{className:"topBar-module--container--24a47"},r.createElement(d.Link,{to:"/portfolio",style:{textDecoration:"none"}},r.createElement("div",{className:u+" "+("gallery"===t?c:void 0)},"Gallery")),r.createElement(d.Link,{to:"/portfolio-pages/programming",style:{textDecoration:"none"}},r.createElement("div",{className:u+" "+("programming"===t?c:void 0)},"Programming")),r.createElement(d.Link,{to:"/portfolio-pages/GIS",style:{textDecoration:"none"}},r.createElement("div",{className:u+" "+("GIS"===t?c:void 0)},"GIS")),r.createElement(d.Link,{to:"/portfolio-pages/gamedev",style:{textDecoration:"none"}},r.createElement("div",{className:u+" "+("gamedev"===t?c:void 0)},"Gamedev")),r.createElement(d.Link,{to:"/portfolio-pages/live2D",style:{textDecoration:"none"}},r.createElement("div",{className:u+" "+("live2D"===t?c:void 0)},"Live2D")),r.createElement(d.Link,{to:"/portfolio-pages/UI-UX",style:{textDecoration:"none"}},r.createElement("div",{className:u+" "+("UI/UX"===t?c:void 0)},"UI/UX")))};var m=e=>{let{title:t,curPage:a,children:n}=e;return r.createElement("div",{className:"header-module--headerBack--55038"},n,r.createElement("h1",{className:"title"},t),r.createElement(g,{active:a}))};var p=e=>{let{pageTitle:t,subPageTitle:a,children:o}=e;return r.createElement("div",{className:"portfoliolayout-module--content--36413"},r.createElement(m,{title:t,curPage:a},r.createElement(l,null),r.createElement(n.Z,{bg_color:"#3d7591"})),r.createElement("main",null,o))}}}]);
//# sourceMappingURL=55a261ee7774604d0664db6f102a4e88689e388d-7683d7470a560b71bfe5.js.map