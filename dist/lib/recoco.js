module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports=require("react")},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var c=e[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),t.push(c))}},t}},function(e,t,n){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],c={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(m(r.parts[i],t))}else{for(var c=[];i<r.parts.length;i++)c.push(m(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&e.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,A=0;function m(e,t){var n,r,o;if(t.singleton){var a=A++;n=h||(h=s(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=s(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e,t);return l(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a],s=o[i.id];s&&(s.refs--,r.push(s))}e&&l(c(e,t),t);for(var u=0;u<r.length;u++){var p=r[u];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete o[p.id]}}}}},function(e,t,n){t=e.exports=n(3)(!1);var r=n(6),o=r(n(7)),a=r(n(8)),i=r(n(9)),c=r(n(10));t.push([e.i,"/* CSS module for Header.js */\n._3QWIW6h2pRniw2heWj6eKA {\n  display: flex;\n  /*equal to .collapse-container height - border-top-width*/\n  /* height: 52px; */\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0px 4px;\n}\n._3j1MHdMgL-6oAOS2IDCnnC {\n  font-weight: bold;\n}\n._174UWcXU1WLWII6cjVjq82 {\n  display: block;\n  background-image: url("+o+");\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-size: 48px 48px;\n  background-position: -4px;\n}\n._174UWcXU1WLWII6cjVjq82:hover {\n  background-image: url("+a+");\n  background-color: #000;\n}\n._174UWcXU1WLWII6cjVjq82.kFypaJlnKBmpBgGt2aKJm {\n  background-image: url("+i+");\n}\n._174UWcXU1WLWII6cjVjq82.kFypaJlnKBmpBgGt2aKJm:hover {\n  background-image: url("+c+");\n}\n",""]),t.locals={"collapse-header":"_3QWIW6h2pRniw2heWj6eKA","header-label":"_3j1MHdMgL-6oAOS2IDCnnC","header-img-container":"_174UWcXU1WLWII6cjVjq82",open:"kFypaJlnKBmpBgGt2aKJm"}},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof(e=e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAM0lEQVR4Ae3RoREAMBACwfTf9EekgMy8wLBHASs4dUmatwgAAAAAs9w/QPBkAAAAKEvSBTV8zzG4BEJAAAAAAElFTkSuQmCC"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAaSURBVHgBY6AWYD5Adcr+//8/WCla2EclAABqEh8tob6sVQAAAABJRU5ErkJggg=="},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAJElEQVR4Ae3NQQkAAAgEQfuX1gjCwf1mNsAOAEDRhr0MAABqDptSb5EG3m5iAAAAAElFTkSuQmCC"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAATSURBVHgBYxjEwP7//z/YqcELAHL6DOUneYkyAAAAAElFTkSuQmCC"},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,"/* CSS module for collapse-container.js */\n/*\n * TODO: move the collapse logic from .collapse-content to .collapse-container. The height needs to be a hardcoded value in pixel, only if I use SASS I can use variables to calculate the hight\n */\n._3Q_vgAseE0hNyq2EAovTOe {\n  background-color: #ebecf0;\n  border-radius: 4px 4px 0px 0px;\n  margin-bottom: 20px;\n  overflow-y: hidden;\n  width: 100%;\n  transition: max-height 1s;\n}\n._365XdCA82L7QrkVBOSc13t {\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 1em 2em;\n}\n._365XdCA82L7QrkVBOSc13t > h4 {\n  margin-bottom: 1em;\n}\n._365XdCA82L7QrkVBOSc13t pre {\n  overflow-x: scroll;\n  max-width: 600px;\n}\n._365XdCA82L7QrkVBOSc13t pre > code {\n  font-size: 0.8em;\n}\n",""]),t.locals={"collapse-container":"_3Q_vgAseE0hNyq2EAovTOe","collapse-content":"_365XdCA82L7QrkVBOSc13t"}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=function(e){var t=e.headerStyle,n=e.headerTextStyle,r=e.headerIconStyle,a=e.onHeaderClick,c=e.headerText,l=e.headerAltChildren,s=e.headerIconIsOpen?"".concat(i.a["header-img-container"]," ").concat(i.a.open):"".concat(i.a["header-img-container"]);return o.a.createElement("header",{style:t,onClick:a,className:i.a["collapse-header"]},o.a.createElement("div",null,o.a.createElement("p",{style:n,className:i.a["header-label"]},c),l||null),o.a.createElement("div",{style:r,className:s}))},l=n(2),s=n.n(l);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b="58px",y="20px",v="34px",x="15px",S=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=h(t).call(this,e),n=!a||"object"!==u(a)&&"function"!=typeof a?A(r):a,g(A(n),"createBaseParams",(function(e){var t={initialRender:!0,maxHeightWhenCollapsed:"",maxHeightWhenExpanded:e.large?b:v};return t.maxHeightWhenCollapsed=!0===e.large?b:v,t})),g(A(n),"onHeaderClick",(function(){n.setState({isOpen:!n.state.isOpen})})),g(A(n),"calculateInitialInlineStyles",(function(){})),g(A(n),"getInlineStyle",(function(){var e={mainStyle:{},headerStyle:{maxHeight:n.baseParams.maxHeightWhenCollapsed},headerText:{},headerIcon:{},contentStyle:{}};n.props.styledBorder?e.mainStyle.borderTop="solid 5px ".concat(n.props.borderColor):e.mainStyle.border="none";var t=parseInt(n.baseParams.maxHeightWhenCollapsed)-4;return e.headerIcon={width:"".concat(t-8,"px"),height:"".concat(t-8,"px"),backgroundSize:"".concat(t,"px ").concat(t,"px")},e.headerText.fontSize=!0===n.props.large?y:x,e.mainStyle.maxHeight=n.state.isOpen?n.baseParams.maxHeightWhenExpanded:n.baseParams.maxHeightWhenCollapsed,e})),n.componentRef=o.a.createRef(),n.state={isOpen:!1},n.baseParams=n.createBaseParams(e),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=this.componentRef.current.children[1];getComputedStyle(e),this.baseParams.maxHeightWhenExpanded=parseInt(e.offsetHeight)>parseInt(this.baseParams.maxHeightWhenExpanded)?2*parseInt(e.offsetHeight):this.baseParams.maxHeightWhenExpanded}},{key:"render",value:function(){var e=this.getInlineStyle(),t=e.headerStyle,n=e.contentStyle,r=e.headerIcon,a=e.headerText,i=e.mainStyle,l=f({},n,{},this.props.contentInlineStyle),u=f({},t,{},this.props.headerInlineStyle),p=f({},i,{},this.props.mainInlineStyle);return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{ref:this.componentRef,className:s.a["collapse-container"],style:p},o.a.createElement(c,{headerStyle:u,headerTextStyle:a,headerIconStyle:r,onHeaderClick:this.onHeaderClick,headerText:this.props.headerText,headerIconIsOpen:this.state.isOpen}),o.a.createElement("article",{style:l,className:s.a["collapse-content"]},this.props.children)))}}])&&d(n.prototype,r),a&&d(n,a),t}(o.a.Component);S.defaultProps={headerText:"default value for the header text",styledBorder:!0,borderColor:"#000",large:!0,headerInlineStyle:{},contentInlineStyle:{},mainInlineStyle:{}};t.default=S}]);