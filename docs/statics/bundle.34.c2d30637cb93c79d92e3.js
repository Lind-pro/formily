(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{136:function(e,t,a){var n={"./bash":122,"./bash.js":122,"./css":123,"./css.js":123,"./htmlbars":124,"./htmlbars.js":124,"./javascript":125,"./javascript.js":125,"./scss":126,"./scss.js":126,"./typescript":127,"./typescript.js":127};function r(e){var t=m(e);return a(t)}function m(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=m,e.exports=r,r.id=136},76:function(e,t,a){"use strict";var n=a(132),r=(a(133),a(134)),m=(a(135),function(){return n.createElement(n.Fragment,{},n.createElement("h1",{id:"submit",className:"react-demo-h1"},"Submit"),n.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),n.createElement("p",{className:"react-demo-p"},"用于快速提交，其内部自动做与 Form 组件的通讯，无需写过多的提交相关的处理逻辑"),n.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),n.createElement(r,{code:"import { Submit } from '@uform/next(antd)'\n",justCode:!0,lang:"javascript"}),n.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),n.createElement("p",{className:"react-demo-p"},"继承 ",n.createElement("a",{href:"http://gitlab.alibaba-inc.com/next/button",className:"react-demo-a"},"next-button")," /\n",n.createElement("a",{href:"https://ant.design/components/button-cn/",className:"react-demo-a"},"ant-button")),n.createElement("p",{className:"react-demo-p"},"扩展属性"),n.createElement("ul",{className:"react-demo-ul"},n.createElement("li",{className:"react-demo-li"},"showLoading : Boolean")),n.createElement("blockquote",{className:"react-demo-blockquote"},n.createElement("p",{className:"react-demo-p"},"主要用于控制Submit组件是否自动展示loading图标，要求SchemaForm的onSubmit回调必须返回Promise对象才会生效。")),n.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),n.createElement(r,{code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { SchemaForm, FormButtonGroup, Submit } from '@uform/next(antd)'\n\nReactDOM.render(\n  <SchemaForm>\n    <FormButtonGroup offset={7} sticky align=\"center\">\n      <Submit />\n      // 自定义文案\n      <Submit>自定义提交文案</Submit>\n    </FormButtonGroup>\n  </SchemaForm>,\n  document.getElementById('root')\n)\n",justCode:!0,lang:"javascript"}))});m.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=m}}]);