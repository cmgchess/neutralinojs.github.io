(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),b=r,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?n.a.createElement(g,s(s({ref:t},l),{},{components:a})):n.a.createElement(g,s({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a(3),n=(a(0),a(101));const o={title:"Neutralino.storage"},i={unversionedId:"api/storage",id:"api/storage",isDocsHomePage:!1,title:"Neutralino.storage",description:"Neutralinojs has an in-built shared key-value storage. It's like a",source:"@site/docs/api/storage.md",slug:"/api/storage",permalink:"/docs/api/storage",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/storage.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.computer",permalink:"/docs/api/computer"},next:{title:"Neutralino.debug",permalink:"/docs/api/debug"}},s=[{value:"storage.putData(StorageWriterOptions)",id:"storageputdatastoragewriteroptions",children:[{value:"StorageWriterOptions",id:"storagewriteroptions",children:[]}]},{value:"storage.getData(StorageReaderOptions)",id:"storagegetdatastoragereaderoptions",children:[{value:"StorageReaderOptions",id:"storagereaderoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited",children:[]}]}],c={toc:s};function l({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Neutralinojs has an in-built shared key-value storage. It's like a\nglobal ",Object(n.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},Object(n.b)("inlineCode",{parentName:"a"},"LocalStorage"))," for all Neutralinojs modes.\n",Object(n.b)("inlineCode",{parentName:"p"},"Neutralinos.storage")," exposes methods for interacting with this storage feature."),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"The storage API persists all data records into ",Object(n.b)("inlineCode",{parentName:"p"},".storage")," directory in the\nroot directory of your application. If you want to clear all data records,\ndelete the ",Object(n.b)("inlineCode",{parentName:"p"},".storage")," directory."))),Object(n.b)("h2",{id:"storageputdatastoragewriteroptions"},"storage.putData(StorageWriterOptions)"),Object(n.b)("p",null,"Writes data into Neutralinojs shared storage.\xa0"),Object(n.b)("h3",{id:"storagewriteroptions"},"StorageWriterOptions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"bucket"),": A key to indentify data."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"data"),": Data as a string. If this value is ",Object(n.b)("inlineCode",{parentName:"li"},"null")," or ",Object(n.b)("inlineCode",{parentName:"li"},"undefined"),",\nthe specific data record will be erased from the disk.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.storage.putData({\n  bucket: 'userDetails',\n  data: JSON.stringify({\n    username: 'TestValue'\n  })\n});\n")),Object(n.b)("h2",{id:"storagegetdatastoragereaderoptions"},"storage.getData(StorageReaderOptions)"),Object(n.b)("p",null,"Reads and returns data for a given Neutralinojs shared storage key.\xa0"),Object(n.b)("h3",{id:"storagereaderoptions"},"StorageReaderOptions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"bucket"),": The key of the storage data record.")),Object(n.b)("h3",{id:"return-object-awaited"},"Return object (awaited):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"data"),": Data string of the storage record.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"let response = await Neutralino.storage.getData({\n  bucket: 'userDetails'\n});\nconsole.log(`Data: ${response.data}`);\n")))}l.isMDXComponent=!0}}]);