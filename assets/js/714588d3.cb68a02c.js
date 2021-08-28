(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return u}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(i),m=n,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return i?r.a.createElement(u,o(o({ref:t},c),{},{components:i})):r.a.createElement(u,o({ref:t},c))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},81:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return o})),i.d(t,"default",(function(){return c}));var n=i(3),r=(i(0),i(101));const a={title:"Neutralino.filesystem"},l={unversionedId:"api/filesystem",id:"api/filesystem",isDocsHomePage:!1,title:"Neutralino.filesystem",description:"Neutralino.filesystem namespace contains methods for handling files.",source:"@site/docs/api/filesystem.md",slug:"/api/filesystem",permalink:"/docs/api/filesystem",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/filesystem.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.window",permalink:"/docs/api/window"},next:{title:"Neutralino.os",permalink:"/docs/api/os"}},o=[{value:"filesystem.createDirectory(CreateDirectoryOptions)",id:"filesystemcreatedirectorycreatedirectoryoptions",children:[{value:"CreateDirectoryOptions",id:"createdirectoryoptions",children:[]}]},{value:"filesystem.removeDirectory(RemoveDirectoryOptions)",id:"filesystemremovedirectoryremovedirectoryoptions",children:[{value:"RemoveDirectoryOptions",id:"removedirectoryoptions",children:[]}]},{value:"filesystem.writeFile(WriteFileOptions)",id:"filesystemwritefilewritefileoptions",children:[{value:"WriteFileOptions",id:"writefileoptions",children:[]}]},{value:"filesystem.writeBinaryFile(WriteBinaryFileOptions)",id:"filesystemwritebinaryfilewritebinaryfileoptions",children:[{value:"WriteBinaryFileOptions",id:"writebinaryfileoptions",children:[]}]},{value:"filesystem.readFile(ReadFileOptions)",id:"filesystemreadfilereadfileoptions",children:[{value:"ReadFileOptions",id:"readfileoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited",children:[]}]},{value:"filesystem.readBinaryFile(ReadBinaryFileOptions)",id:"filesystemreadbinaryfilereadbinaryfileoptions",children:[{value:"ReadFileOptions",id:"readfileoptions-1",children:[]},{value:"Return object (awaited):",id:"return-object-awaited-1",children:[]}]},{value:"filesystem.removeFile(RemoveFileOptions)",id:"filesystemremovefileremovefileoptions",children:[{value:"RemoveFileOptions",id:"removefileoptions",children:[]}]},{value:"filesystem.readDirectory(ReadFileOptions)",id:"filesystemreaddirectoryreadfileoptions",children:[{value:"ReadDirectoryOptions",id:"readdirectoryoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited-2",children:[]}]},{value:"filesystem.copyFile(source, destination)",id:"filesystemcopyfilesource-destination",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"filesystem.moveFile(source, destination)",id:"filesystemmovefilesource-destination",children:[{value:"Parameters",id:"parameters-1",children:[]}]},{value:"filesystem.getStats(path)",id:"filesystemgetstatspath",children:[{value:"Parameters",id:"parameters-2",children:[]},{value:"Return object (awaited):",id:"return-object-awaited-3",children:[]}]}],s={toc:o};function c({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Neutralino.filesystem")," namespace contains methods for handling files."),Object(r.b)("h2",{id:"filesystemcreatedirectorycreatedirectoryoptions"},"filesystem.createDirectory(CreateDirectoryOptions)"),Object(r.b)("p",null,"Creates a new directory."),Object(r.b)("h3",{id:"createdirectoryoptions"},"CreateDirectoryOptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path"),": New directory path.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.createDirectory({\n  path: './newDirectory',\n});\n")),Object(r.b)("h2",{id:"filesystemremovedirectoryremovedirectoryoptions"},"filesystem.removeDirectory(RemoveDirectoryOptions)"),Object(r.b)("p",null,"Removes given directories."),Object(r.b)("h3",{id:"removedirectoryoptions"},"RemoveDirectoryOptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path"),": Directory path.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.removeDirectory({\n  path: './tmpDirectory',\n});\n")),Object(r.b)("h2",{id:"filesystemwritefilewritefileoptions"},"filesystem.writeFile(WriteFileOptions)"),Object(r.b)("p",null,"Writes new text files with data."),Object(r.b)("h3",{id:"writefileoptions"},"WriteFileOptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fileName"),": File name."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": Content of the file in string format.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.writeFile({\n  fileName: './myFile.txt',\n  data: 'Sample content'\n});\n")),Object(r.b)("h2",{id:"filesystemwritebinaryfilewritebinaryfileoptions"},"filesystem.writeBinaryFile(WriteBinaryFileOptions)"),Object(r.b)("p",null,"Writes new binary files with data."),Object(r.b)("h3",{id:"writebinaryfileoptions"},"WriteBinaryFileOptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fileName"),": File name."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": Content of the binary file as an\n",Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let rawBin = new ArrayBuffer(1);\nlet view = new Uint8Array(rawBin);\nview[0] = 64; // Saves ASCII '@' to the binary file\nawait Neutralino.filesystem.writeBinaryFile({\n  fileName: './myFile.bin',\n  data: rawBin\n});\n")),Object(r.b)("h2",{id:"filesystemreadfilereadfileoptions"},"filesystem.readFile(ReadFileOptions)"),Object(r.b)("p",null,"Reads text files."),Object(r.b)("h3",{id:"readfileoptions"},"ReadFileOptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fileName"),": File name.")),Object(r.b)("h3",{id:"return-object-awaited"},"Return object (awaited):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": Content of the binary file as an\n",Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},"ArrayBuffer"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let response = await Neutralino.filesystem.readBinaryFile({\n  fileName: './myFile.bin'\n});\nlet view = new Uint8Array(response.data);\nconsole.log('Binary content: ', view);\n")),Object(r.b)("h2",{id:"filesystemreadbinaryfilereadbinaryfileoptions"},"filesystem.readBinaryFile(ReadBinaryFileOptions)"),Object(r.b)("p",null,"Reads binary files."),Object(r.b)("h3",{id:"readfileoptions-1"},"ReadFileOptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fileName"),": File name.")),Object(r.b)("h3",{id:"return-object-awaited-1"},"Return object (awaited):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": File content.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let response = await Neutralino.filesystem.readFile({\n  fileName: './myFile.txt'\n});\nconsole.log(`Content: ${response.data}`);\n")),Object(r.b)("h2",{id:"filesystemremovefileremovefileoptions"},"filesystem.removeFile(RemoveFileOptions)"),Object(r.b)("p",null,"Removes given file."),Object(r.b)("h3",{id:"removefileoptions"},"RemoveFileOptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fileName"),": File name.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.removeFile({\n  fileName: './myFile.txt'\n});\n")),Object(r.b)("h2",{id:"filesystemreaddirectoryreadfileoptions"},"filesystem.readDirectory(ReadFileOptions)"),Object(r.b)("p",null,"Reads a whole directory."),Object(r.b)("h3",{id:"readdirectoryoptions"},"ReadDirectoryOptions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path"),": File name.")),Object(r.b)("h3",{id:"return-object-awaited-2"},"Return object (awaited):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"entries"),": An array of sub-directories and files.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"entry"),": file name."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type"),": The type of the entry (",Object(r.b)("inlineCode",{parentName:"li"},"FILE")," or ",Object(r.b)("inlineCode",{parentName:"li"},"DIRECTORY"),").")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let response = await Neutralino.filesystem.readDirectory({\n  path: NL_PATH\n});\nconsole.log('Content: ', response.entries);\n")),Object(r.b)("h2",{id:"filesystemcopyfilesource-destination"},"filesystem.copyFile(source, destination)"),Object(r.b)("p",null,"Copies a file to a new destination."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"source"),": Source file as a string."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"destination"),": Destionation file as a string.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.copyFile({\n  source: './source.txt',\n  destination: './destination.txt'\n});\n")),Object(r.b)("h2",{id:"filesystemmovefilesource-destination"},"filesystem.moveFile(source, destination)"),Object(r.b)("p",null,"Moves a file to a new destination."),Object(r.b)("h3",{id:"parameters-1"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"source"),": Source file as a string."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"destination"),": Destionation file as a string.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.filesystem.moveFile({\n  source: './source.txt',\n  destination: './destination.txt'\n});\n")),Object(r.b)("h2",{id:"filesystemgetstatspath"},"filesystem.getStats(path)"),Object(r.b)("p",null,"Returns file statistics for the given path. If the given path doesn't exist or is unable to access,\nthe awaited method will throw an error."),Object(r.b)("h3",{id:"parameters-2"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"path"),": File or directory path.")),Object(r.b)("h3",{id:"return-object-awaited-3"},"Return object (awaited):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"size"),": Size in bytes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isFile"),": ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the path represents a normal file."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isDirectory"),": ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the path represents a directory.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let response = await Neutralino.filesystem.getStats({\n  path: './sampleVideo.mp4'\n});\nconsole.log('Stats:', response);\n\n")))}c.isMDXComponent=!0}}]);