"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[921],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(9231);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(1504),l=(n(9231),n(4852));const r={order:384},i="JSX+",p={unversionedId:"guide/advanced/jsx-plus",id:"guide/advanced/jsx-plus",title:"JSX+",description:"\u8be5\u63d2\u4ef6\u652f\u6301\u4e86\u4e00\u79cd JSX \u6269\u5c55\u8bed\u6cd5 JSX+\uff0c\u5b83\u80fd\u5e2e\u52a9\u4e1a\u52a1\u5f00\u53d1\u8005\u66f4\u723d\u66f4\u5feb\u5730\u4e66\u5199 JSX\u3002JSX+ \u4e0d\u662f\u4e00\u79cd\u65b0\u7684\u6982\u5ff5\uff0c\u5b83\u662f JSX \u57fa\u7840\u4e0a\u7684\u6269\u5c55\u6307\u4ee4\u6982\u5ff5\u3002",source:"@site/docs/guide/advanced/jsx-plus.md",sourceDirName:"guide/advanced",slug:"/guide/advanced/jsx-plus",permalink:"/docs/guide/advanced/jsx-plus",draft:!1,editUrl:"https://github.com/alibaba/ice/edit/master/website/docs/guide/advanced/jsx-plus.md",tags:[],version:"current",frontMatter:{order:384},sidebar:"docs",previous:{title:"\u6743\u9650\u7ba1\u7406",permalink:"/docs/guide/advanced/auth"},next:{title:"\u7ec4\u4ef6\u7f13\u5b58",permalink:"/docs/guide/advanced/keep-alive"}},o={},s=[{value:"\u4e3a\u4ec0\u4e48\u9700\u8981 JSX+",id:"\u4e3a\u4ec0\u4e48\u9700\u8981-jsx",level:2},{value:"\u5b89\u88c5\u4f7f\u7528",id:"\u5b89\u88c5\u4f7f\u7528",level:2},{value:"\u6307\u4ee4\u8bed\u6cd5",id:"\u6307\u4ee4\u8bed\u6cd5",level:2},{value:"1. \u6761\u4ef6\u5224\u65ad",id:"1-\u6761\u4ef6\u5224\u65ad",level:3},{value:"2. \u5faa\u73af\u5217\u8868",id:"2-\u5faa\u73af\u5217\u8868",level:3},{value:"3. \u5355\u6b21\u6e32\u67d3",id:"3-\u5355\u6b21\u6e32\u67d3",level:3},{value:"4. \u63d2\u69fd\u6307\u4ee4",id:"4-\u63d2\u69fd\u6307\u4ee4",level:3},{value:"5. Fragment \u7ec4\u4ef6",id:"5-fragment-\u7ec4\u4ef6",level:3},{value:"6. \u7c7b\u540d\u7ed1\u5b9a",id:"6-\u7c7b\u540d\u7ed1\u5b9a",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jsx"},"JSX+"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4e86\u4e00\u79cd JSX \u6269\u5c55\u8bed\u6cd5 JSX+\uff0c\u5b83\u80fd\u5e2e\u52a9\u4e1a\u52a1\u5f00\u53d1\u8005\u66f4\u723d\u66f4\u5feb\u5730\u4e66\u5199 JSX\u3002JSX+ \u4e0d\u662f\u4e00\u79cd\u65b0\u7684\u6982\u5ff5\uff0c\u5b83\u662f JSX \u57fa\u7840\u4e0a\u7684\u6269\u5c55\u6307\u4ee4\u6982\u5ff5\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981-jsx"},"\u4e3a\u4ec0\u4e48\u9700\u8981 JSX+"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JSX \u867d\u7136\u8bed\u6cd5\u7075\u6d3b\uff0c\u4f46\u662f\u5927\u91cf\u7684\u82b1\u62ec\u53f7 + JS \u8bed\u6cd5\u5bfc\u81f4\u4e86\u4e0a\u4e0b\u6587\u5207\u6362\u548c\u4ee3\u7801\u53ef\u8bfb\u6027\u7684\u4e0b\u964d\uff0cJSX+ \u7684\u6307\u4ee4\u5f88\u597d\u7684\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"JSX \u672c\u8d28\u662f JS \u8868\u8fbe\u5f0f\uff0c\u5728\u8fd0\u884c\u65f6\u9636\u6bb5\u624d\u53ef\u4ee5\u8ba1\u7b97\u51fa\u771f\u5b9e\u7684 DOM \u7ed3\u6784\uff0cJSX+ \u5f15\u5165\u4e86\u4e00\u90e8\u5206\u9759\u6001\u6a21\u677f\u7279\u6027\u53ef\u4ee5\u6ee1\u8db3\u7f16\u8bd1\u4f18\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u65b0\u521b\u9020\u5b9e\u4f53\uff0c\u6307\u4ee4\u5728\u793e\u533a\u4e2d\u662f\u5df2\u7ecf\u88ab\u5e7f\u6cdb\u63a5\u53d7\u7684\u6982\u5ff5\uff0c\u5bf9\u5f00\u53d1\u8005\u66f4\u53cb\u597d\uff0c\u8bed\u6cd5\u7cd6\u7684\u8868\u8fbe\u66f4\u7b80\u5355"),(0,l.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u4e00\u5957 JSX+ \u7c7b\u4f3c\u6982\u5ff5\u7684\u8bed\u6cd5\u89c4\u8303\uff0c\u51cf\u5c11\u5df2\u5b58\u5728\u548c\u6f5c\u5728\u7684\u91cd\u590d\u5efa\u8bbe")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f7f\u7528"},"\u5b89\u88c5\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @ice/plugin-jsx-plus -D\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u63d2\u4ef6\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="ice.config.mts"',title:'"ice.config.mts"'},"import { defineConfig } from '@ice/app';\nimport jsxPlus from '@ice/plugin-jsx-plus';\n\nexport default defineConfig(() => ({\n  plugins: [\n    jsxPlus(),\n  ],\n}));\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u4f7f\u7528\u66f4\u5f3a\u5927\u7684 JSX+ \u8bed\u6cd5\u4e86\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function ExampleComponent(props) {\n  const { isAdmin, dataSource } = props;\n\n  return (\n    <div>\n      <div x-if={isAdmin}>admin</div>\n      <div x-else>guest</div>\n\n      <div x-for={item in dataSource}>\n        <span>{item.name}</span>\n      </div>\n    </div>\n  );\n}\n")),(0,l.kt)("h2",{id:"\u6307\u4ee4\u8bed\u6cd5"},"\u6307\u4ee4\u8bed\u6cd5"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f JSX+ \u89c4\u8303\u5df2\u6709\u7684\u6307\u4ee4\u5217\u8868\uff1a"),(0,l.kt)("h3",{id:"1-\u6761\u4ef6\u5224\u65ad"},"1. \u6761\u4ef6\u5224\u65ad"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<View x-if={condition}>Hello</View>\n<View x-elseif={anotherCondition}>World</View>\n<View x-else>NothingElse</View>\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"x-elseif")," \u53ef\u4ee5\u591a\u6b21\u51fa\u73b0\uff0c\u4f46\u662f\u987a\u5e8f\u5fc5\u987b\u662f x-if -> x-elseif -> x-else\uff0c\u4e14\u8fd9\u4e9b\u8282\u70b9\u662f\u5144\u5f1f\u8282\u70b9\u5173\u7cfb\uff0c\u5982\u987a\u5e8f\u9519\u8bef\u5219\u6307\u4ee4\u88ab\u5ffd\u7565\u3002")),(0,l.kt)("h3",{id:"2-\u5faa\u73af\u5217\u8868"},"2. \u5faa\u73af\u5217\u8868"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"{/* Array or Plain Object*/}\n<tag x-for={item in foo}>{item}</tag>\n  \n<tag x-for={(item, key) in foo}>{key}: {item}</tag>\n")),(0,l.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u82e5\u5faa\u73af\u5bf9\u8c61\u4e3a\u6570\u7ec4\uff0ckey \u8868\u793a\u5faa\u73af\u7d22\u5f15\uff0c\u5176\u7c7b\u578b\u4e3a Number\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"x-for")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"x-if")," \u540c\u65f6\u4f5c\u7528\u5728\u540c\u4e00\u8282\u70b9\u4e0a\u65f6\uff0c\u5faa\u73af\u4f18\u5148\u7ea7\u5927\u4e8e\u6761\u4ef6\uff0c\u5373\u5faa\u73af\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"item")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," \u53ef\u4ee5\u5728\u5b50\u6761\u4ef6\u5224\u65ad\u4e2d\u4f7f\u7528\u3002"))),(0,l.kt)("h3",{id:"3-\u5355\u6b21\u6e32\u67d3"},"3. \u5355\u6b21\u6e32\u67d3"),(0,l.kt)("p",null,"\u4ec5\u5728\u9996\u6b21\u6e32\u67d3\u65f6\u4f1a\u89e6\u53d1 ",(0,l.kt)("inlineCode",{parentName:"p"},"createElement")," \u5e76\u5c06\u5176\u5f15\u7528\u7f13\u5b58\uff0c\u91cd\u65b0\u6e32\u67d3\u65f6\u76f4\u63a5\u590d\u7528\u7f13\u5b58\uff0c\u7528\u4e8e\u63d0\u9ad8\u4e0d\u5e26\u7ed1\u5b9a\u8282\u70b9\u6e32\u67d3\u6548\u7387\u548c Diff \u6027\u80fd\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p x-memo>this paragragh {mesasge} content will not change.</p>\n")),(0,l.kt)("h3",{id:"4-\u63d2\u69fd\u6307\u4ee4"},"4. \u63d2\u69fd\u6307\u4ee4"),(0,l.kt)("p",null,"\u7c7b\u4f3c WebComponents \u7684 slot \u6982\u5ff5\uff0c\u5e76\u63d0\u4f9b\u63d2\u69fd\u4f5c\u7528\u57df\u3002"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<tag x-slot:slotName="slotScope" />\n')),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// Example\n<Waterfall>\n  <view x-slot:header>header</view>\n  <view x-slot:item="props">{props.index}: {props.item}</view>\n  <view x-slot:footer>footer</view>\n</Waterfall>\n<slot name="header" /> // \u69fd\u4f4d\n')),(0,l.kt)("p",null,"\u5bf9\u6bd4\u4f20\u7edf JSX\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Waterfall\n  renderHeader={() => (<view>header</view>)}\n  renderFooter={() => (<view>footer</view>)}\n  renderItem={(item, index) => (<view>{index}: {item}</view>}\n/>\n")),(0,l.kt)("p",null,"\u5bf9\u6bd4\u5c0f\u7a0b\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Waterfall>\n  <view slot="header">header</view>\n  <view slot="item" slot-scope="props">{props.index}: {props.item}</view>\n  <view slot="footer">footer</view>\n</Waterfall>\n')),(0,l.kt)("h3",{id:"5-fragment-\u7ec4\u4ef6"},"5. Fragment \u7ec4\u4ef6"),(0,l.kt)("p",null,"\u63d0\u4f9b\u7a7a\u7ec4\u4ef6\uff0c\u4e0d\u4ea7\u751f UI\uff0c\u63d0\u4f9b\u7ed1\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"x-if")," ",(0,l.kt)("inlineCode",{parentName:"p"},"x-for")," ",(0,l.kt)("inlineCode",{parentName:"p"},"x-slot")," \u6307\u4ee4\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Fragment />\n")),(0,l.kt)("h3",{id:"6-\u7c7b\u540d\u7ed1\u5b9a"},"6. \u7c7b\u540d\u7ed1\u5b9a"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<div x-class={{ item: true, active: val }} />\n")),(0,l.kt)("p",null,"\u53c2\u8003\u5b9e\u73b0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<div className={classnames({ item: true, active: val})} />\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"classnames")," \u65b9\u6cd5\u80fd\u529b\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://npmjs.com/classnames"},"\u540c\u540d npm \u5305"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jsx-plus/jsx-plus"},"jsx-plus"))))}c.isMDXComponent=!0}}]);