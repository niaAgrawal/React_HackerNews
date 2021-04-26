(self.webpackChunkgithub_battle=self.webpackChunkgithub_battle||[]).push([[698],{765:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var n=r(466),o=r(74),a=r.n(o),c=(r(946),r(755)),i=r(429);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(){return n.createElement(c.S,null,(function(e){var t=e.theme;return n.createElement("div",{className:"instructions-container"},n.createElement("h1",{className:"center-text header-lg"},"Instructions"),n.createElement("ol",{className:"container-sm grid center-text battle-instructions"},n.createElement("li",null,n.createElement("h3",{className:"header-sm"},"Enter two Github users"),n.createElement("div",{className:"bg-".concat(t),style:{backgroundColor:"green",padding:"50px",border:"1px solid red",marginRight:"10px"}},"Block 1")),n.createElement("li",null,n.createElement("h3",{className:"header-sm"},"Battle"),n.createElement("div",{className:"bg-".concat(t),style:{backgroundColor:"orange",padding:"50px",border:"1px solid red",marginRight:"10px"}},"Block 2")),n.createElement("li",null,n.createElement("h3",{className:"header-sm"},"See the winners"),n.createElement("div",{className:"bg-".concat(t),style:{backgroundColor:"blue",padding:"50px",border:"1px solid red"}},"Block 3"))))}))}var E=function(e){m(r,e);var t=d(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).state={username:""},n.onChangeHandler=n.onChangeHandler.bind(h(n)),n.onSubmitHandler=n.onSubmitHandler.bind(h(n)),n}return p(r,[{key:"onChangeHandler",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmitHandler",value:function(){event.preventDefault(),this.props.onSubmit(this.state.username)}},{key:"render",value:function(){var e=this;return n.createElement(c.S,null,(function(t){var r=t.theme;return n.createElement("form",{className:"column player",onSubmit:e.onSubmitHandler},n.createElement("label",{htmlFor:"username",className:"player-label"},e.props.label),n.createElement("div",{className:"row player-inputs"},n.createElement("input",{type:"text",id:"username",className:"input-".concat(r),placeholder:"github username",autoComplete:"off",value:e.state.username,onChange:e.onChangeHandler}),n.createElement("button",{className:"btn btn-dark",disabled:!e.state.username,type:"submit"},"Submit")))}))}}]),r}(n.Component);function O(e){var t=e.username,r=e.onReset,o=e.label;return n.createElement(c.S,null,(function(e){var a=e.theme;return n.createElement("div",{className:"column player"},n.createElement("h3",{className:"player-label"},o),n.createElement("div",{className:"row bg-".concat(a)},n.createElement("div",{className:"player-info"},n.createElement("img",{className:"avatar-small",src:"https://github.com/".concat(t,".png?size=200"),alt:"Avatar for ".concat(t)}),n.createElement("a",{href:"https://github.com/".concat(t),className:"link"},t)),n.createElement("button",{className:"btn-clear flex-center",onClick:r},"XX")))}))}E.propTypes={label:a().string.isRequired,onSubmit:a().func.isRequired},O.propTypes={username:a().string.isRequired,onReset:a().func.isRequired,label:a().string.isRequired};var w=function(e){m(r,e);var t=d(r);function r(e){var n;return s(this,r),(n=t.call(this,e)).state={playerOne:null,playerTwo:null,battleFlag:!1},n.submitHandler=n.submitHandler.bind(h(n)),n.resetHandler=n.resetHandler.bind(h(n)),n.battleHander=n.battleHander.bind(h(n)),n}return p(r,[{key:"submitHandler",value:function(e,t){this.setState(u({},e,t))}},{key:"resetHandler",value:function(e){this.setState(u({},e,null))}},{key:"battleHander",value:function(){this.setState({battleFlag:!0})}},{key:"render",value:function(){var e=this,t=this.state,r=t.playerOne,o=t.playerTwo;return t.battleFlag,n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement(v,null),n.createElement("div",{className:"row space-around"},n.createElement("h3",null,"Player"),null===r?n.createElement(E,{label:"Player One",onSubmit:function(t){return e.submitHandler("playerOne",t)}}):n.createElement(O,{username:r,label:"Player One",onReset:function(){return e.resetHandler("playerOne")}}),null===o?n.createElement(E,{label:"Player Two",onSubmit:function(t){return e.submitHandler("playerTwo",t)}}):n.createElement(O,{username:o,label:"Player Two",onReset:function(){return e.resetHandler("playerTwo")}})),r&&o&&n.createElement(i.rU,{to:{pathname:"/battle/result",search:"?playerOne=".concat(r,"&playerTwo=").concat(o)},className:"btn dark-btn btn-space"},"Battle")))}}]),r}(n.Component)},333:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(466),o=r(74),a=r.n(o);function c(e){var t=e.header,r=e.subheader,o=e.avatar,a=e.username,c=e.href,i=e.children;return n.createElement("div",{className:"card bg-light"},n.createElement("h4",{className:"header-lg center-text"},t),n.createElement("img",{className:"avatar",src:o,alt:"Avatar for ".concat(a)}),n.createElement("h4",{className:"center-text"},"Score: ",r),n.createElement("h2",{className:"center-text"},n.createElement("a",{className:"link",href:c},a)),i)}c.propTypes={header:a().string.isRequired,subheader:a().string,avatar:a().string.isRequired,username:a().string.isRequired,href:a().string.isRequired,children:a().object.isRequired}},346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(466),o=r(74),a=r.n(o);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(p,e);var t,r,o,a,c=(o=p,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(o);if(a){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return u(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=c.call(this,e)).state={hovering:!1},t.mouseOverHandler=t.mouseOverHandler.bind(s(t)),t.mouseOutHandler=t.mouseOutHandler.bind(s(t)),t}return t=p,(r=[{key:"mouseOverHandler",value:function(){this.setState({hovering:!0})}},{key:"mouseOutHandler",value:function(){this.setState({hovering:!1})}},{key:"render",value:function(){return n.createElement("div",{onMouseOver:this.mouseOverHandler,onMouseOut:this.mouseOutHandler},this.props.render(this.state.hovering))}}])&&i(t.prototype,r),p}(n.Component);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,r,o,a,c=(o=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(a){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function i(){return y(this,i),c.apply(this,arguments)}return t=i,(r=[{key:"render",value:function(){var e=this.props,t=e.text,r=e.children;return n.createElement(p,{render:function(e){return n.createElement("div",{style:v.container},!0===e&&n.createElement("div",{style:v.tooltip},t),r)}})}}])&&d(t.prototype,r),i}(n.Component);E.propTypes={text:a().string.isRequired}},946:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(466),o=r(74),a=r.n(o),c=r(380),i=r(333),l=r(765),u=r(396),s=r(346),f=r(851),p=r(429);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){var t=e.profile;return n.createElement("ul",{className:"card-list"},n.createElement("li",null,t.name),t.location&&n.createElement("li",null,n.createElement(s.Z,{text:"User's location"},t.location)),t.company&&n.createElement("li",null,n.createElement(s.Z,{text:"User's Company"},t.company)),n.createElement("li",null,t.followers.toLocaleString()," followers"),n.createElement("li",null,t.following.toLocaleString()," following"))}g.propTypes={profile:a().object.isRequired};var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(m,e);var t,r,o,a,s=(o=m,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(a){var r=h(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(t=s.call(this,e)).state={winner:null,loser:null,error:"",loading:!0},t}return t=m,(r=[{key:"componentDidMount",value:function(){var e=this,t=f.parse(this.props.location.search),r=t.playerOne,n=t.playerTwo;(0,c.O)(r,n).then((function(t){console.log("inside result"),console.log("data ",t),e.setState({winner:t[0],loser:t[1],error:null,loading:!1})})).catch((function(t){e.setState({error:message,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.winner,r=e.loser,o=e.error,a=e.loading,c=e.reset;return!0===a?n.createElement("p",null,n.createElement(u.Z,null)):""===o?n.createElement("p",{className:"center-text error"},o):!0===c?n.createElement(l.default,null):n.createElement(n.Fragment,null,n.createElement("div",{className:"grid space-around container-sm"},n.createElement(i.Z,{header:t.score===r.score?"Tie":"Winner",subheader:t.score.toLocaleString(),avatar:t.profile.avatar_url,href:t.profile.html_url,username:t.profile.login},n.createElement(g,{profile:t.profile})),n.createElement(i.Z,{header:t.score===r.score?"Tie":"Winner",subheader:r.score.toLocaleString(),avatar:r.profile.avatar_url,href:r.profile.html_url,username:r.profile.login},n.createElement(g,{profile:r.profile}))),n.createElement(p.rU,{to:"/battle",className:"btn dark-btn btn-space"},"Reset"))}}])&&y(t.prototype,r),m}(n.Component)},380:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return"Not found"===e?"".concat(t," doesn't exist"):e}function a(e){return fetch("https://api.github.com/users/".concat(e,"/repos")).then((function(e){return e.json()})).then((function(t){if(t.message)throw new Error(o(t.message,e));return t}))}function c(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)}function i(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t)).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error(o(e.message,t));return e}))),a(e)]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1];return{profile:a,score:c(a.followers,i)}}));var t}function l(e,t){return Promise.all([i(e),i(t)]).then((function(e){return function(e){return e.sort((function(e,t){return e.score-t.score}))}(e)}))}function u(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then((function(e){return e.json()})).then((function(e){if(!e.items)throw new Error(e.message);return e.items}))}r.d(t,{O:()=>l,Q:()=>u}),r(466),"?client_id=".concat("YOUR_CLIENT_ID","&client_secret=").concat("YOUR_SECRET_ID")},377:e=>{"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),i=0;i<c.length;i++){var l=c[i];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},318:e=>{"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var c=n[a],i=e[c];(o?-1!==t.indexOf(c):t(c,i,e))&&(r[c]=i)}return r}},851:(e,t,r)=>{"use strict";const n=r(221),o=r(377),a=r(374),c=r(318);function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function s(e){return Array.isArray(e)?e.sort():"object"==typeof e?s(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function f(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function p(e){const t=(e=f(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function y(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const c=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=c};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:["comma","separator"].includes(t.arrayFormat)?c:u(c,t),r(u(e,t),c,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=m(r[e],t);else n[e]=m(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=s(r):e[t]=r,e}),Object.create(null))}t.extract=p,t.parse=y,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[",o,"]"].join("")]:[...r,[l(t,e),"[",l(o,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(n,e)].join("")];case"comma":case"separator":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[l(t,e),"=",l(n,e)].join("")]:[[r,l(n,e)].join(e.arrayFormatSeparator)];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,l(t,e)]:[...r,[l(t,e),"=",l(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?l(r,t):Array.isArray(o)?o.reduce(n(r),[]).join("&"):l(r,t)+"="+l(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:y(p(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0},r);const n=f(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),c=Object.assign(a,e.query);let i=t.stringify(c,r);i&&(i=`?${i}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${l(e.fragmentIdentifier,r)}`),`${n}${i}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0},n);const{url:o,query:a,fragmentIdentifier:i}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:c(a,r),fragmentIdentifier:i},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},374:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},221:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);