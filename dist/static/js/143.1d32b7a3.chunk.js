(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[143],{1439:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();var r=a(1);var l=w(r);var o=a(293);var u=w(o);var i=a(2182);var c=w(i);var f=a(2181);var s=w(f);var d=a(2180);var p=w(d);var v=a(2178);var m=w(v);var h=a(1582);var b=w(h);var y=a(30);var E=w(y);var g=a(292);var _=w(g);function w(e){return e&&e.__esModule?e:{default:e}}function C(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function O(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function k(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var j=function(e){k(t,e);function t(){C(this,t);return O(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}n(t,[{key:"render",value:function e(){return l.default.createElement("div",{className:"menu-paper-wrapper"},l.default.createElement(b.default,{title:l.default.createElement(E.default,{id:"sidebar.menu"}),match:this.props.match}),l.default.createElement("div",{className:"row"},l.default.createElement(_.default,{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:l.default.createElement(E.default,{id:"widgets.simpleMenus"})},l.default.createElement(c.default,null)),l.default.createElement(_.default,{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:l.default.createElement(E.default,{id:"widgets.selectedMenu"})},l.default.createElement(s.default,null)),l.default.createElement(_.default,{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:l.default.createElement(E.default,{id:"widgets.maxHeightMenu"})},l.default.createElement(p.default,null)),l.default.createElement(_.default,{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:l.default.createElement(E.default,{id:"widgets.changeTransition"})},l.default.createElement(m.default,null))),l.default.createElement(_.default,{heading:l.default.createElement(E.default,{id:"widgets.paper"})},l.default.createElement("ul",{className:"list-inline d-flex align-items-center justify-content-around flex-wrap"},l.default.createElement("li",null,l.default.createElement(u.default,{elevation:10,className:"mb-10 m-10 size-120 bg-primary"})),l.default.createElement("li",null,l.default.createElement(u.default,{elevation:8,className:"mb-10 m-10 size-100 bg-success"})),l.default.createElement("li",null,l.default.createElement(u.default,{elevation:6,className:"mb-10 m-10 size-80 bg-warning"})),l.default.createElement("li",null,l.default.createElement(u.default,{elevation:4,className:"mb-10 m-10 size-60 bg-danger"})),l.default.createElement("li",null,l.default.createElement(u.default,{elevation:2,className:"mb-10 m-10 size-40 bg-info"})))))}}]);return t}(l.default.Component);t.default=j},1582:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(1);var r=c(n);var l=a(47);var o=a(9);var u=a(30);var i=c(u);function c(e){return e&&e.__esModule?e:{default:e}}var f=function e(t){var a=t.split("-");if(a.length>1){return r.default.createElement(i.default,{id:"sidebar."+(a[0].charAt(0)+a[0].slice(1)+a[1].charAt(0).toUpperCase()+a[1].slice(1))})}else{return r.default.createElement(i.default,{id:"sidebar."+(t.charAt(0)+t.slice(1))})}};var s=function e(t,a,n){if(n===0){return"/"}else{return t.split(a)[0]+a}};var d=function e(t){var a=t.title,n=t.match,u=t.enableBreadCrumb;var i=n.path.substr(1);var c=i.split("/");return r.default.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},a&&r.default.createElement("div",{className:"page-title-wrap"},r.default.createElement("i",{className:"ti-angle-left"}),r.default.createElement("h2",{className:""},a)),u&&r.default.createElement(l.Breadcrumb,{className:"mb-0 tour-step-7",tag:"nav"},c.map(function(e,t){return r.default.createElement(l.BreadcrumbItem,{active:c.length===t+1,tag:c.length===t+1?"span":o.Link,key:t,to:s(i,e,t)},f(e))})))};d.defaultProps={enableBreadCrumb:true};t.default=d},1590:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return r.default}});var r=n(a(1619))},1619:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var r=n(a(17));var l=n(a(19));var o=n(a(10));var u=n(a(28));var i=n(a(1));var c=n(a(0));var f=n(a(4));var s=n(a(21));var d=n(a(200));var p=function e(t){return{root:(0,u.default)({},t.typography.subheading,{height:t.spacing.unit*3,boxSizing:"content-box",width:"auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingLeft:t.spacing.unit*2,paddingRight:t.spacing.unit*2,"&$selected":{backgroundColor:t.palette.action.selected}}),selected:{}}};t.styles=p;function v(e){var t=e.classes,a=e.className,n=e.component,u=e.selected,c=e.role,s=(0,o.default)(e,["classes","className","component","selected","role"]);return i.default.createElement(d.default,(0,r.default)({button:true,role:c,tabIndex:-1,className:(0,f.default)(t.root,(0,l.default)({},t.selected,u),a),component:n},s))}v.propTypes=false?undefined:{};v.defaultProps={component:"li",role:"menuitem",selected:false};var m=(0,s.default)(p,{name:"MuiMenuItem"})(v);t.default=m},1646:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return r.default}});var r=n(a(1787))},2178:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();var r=a(1);var l=v(r);var o=a(79);var u=v(o);var i=a(1646);var c=v(i);var f=a(1590);var s=v(f);var d=a(584);var p=v(d);function v(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function h(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var y=function(e){b(t,e);function t(){var e;var a,n,r;m(this,t);for(var l=arguments.length,o=Array(l),u=0;u<l;u++){o[u]=arguments[u]}return r=(a=(n=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n),n.state={anchorEl:null},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},a),h(n,r)}n(t,[{key:"render",value:function e(){var t=this.state.anchorEl;return l.default.createElement("div",null,l.default.createElement(u.default,{variant:"raised","aria-owns":t?"fade-menu":null,"aria-haspopup":"true",onClick:this.handleClick,className:"btn-danger text-white"},"Open with fade transition"),l.default.createElement(c.default,{id:"fade-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose,transition:p.default},l.default.createElement(s.default,{onClick:this.handleClose},"Profile"),l.default.createElement(s.default,{onClick:this.handleClose},"My account"),l.default.createElement(s.default,{onClick:this.handleClose},"Logout")))}}]);return t}(l.default.Component);t.default=y},2179:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var r=n(a(1));var l=n(a(577));var o=(0,l.default)(r.default.createElement("g",null,r.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),"MoreVert");t.default=o},2180:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();var r=a(1);var l=v(r);var o=a(111);var u=v(o);var i=a(1646);var c=v(i);var f=a(1590);var s=v(f);var d=a(2179);var p=v(d);function v(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function h(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var y=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];var E=48;var g=function(e){b(t,e);function t(){var e;var a,n,r;m(this,t);for(var l=arguments.length,o=Array(l),u=0;u<l;u++){o[u]=arguments[u]}return r=(a=(n=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n),n.state={anchorEl:null},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},a),h(n,r)}n(t,[{key:"render",value:function e(){var t=this;var a=this.state.anchorEl;return l.default.createElement("div",null,l.default.createElement(u.default,{"aria-label":"More","aria-owns":a?"long-menu":null,"aria-haspopup":"true",onClick:this.handleClick},l.default.createElement(p.default,null)),l.default.createElement(c.default,{id:"long-menu",anchorEl:this.state.anchorEl,open:Boolean(a),onClose:this.handleClose,PaperProps:{style:{maxHeight:E*4.5,width:200}}},y.map(function(e){return l.default.createElement(s.default,{key:e,selected:e==="Pyxis",onClick:t.handleClose},e)})))}}]);return t}(l.default.Component);t.default=g},2181:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();var r=a(1);var l=h(r);var o=a(134);var u=h(o);var i=a(200);var c=h(i);var f=a(583);var s=h(f);var d=a(1646);var p=h(d);var v=a(1590);var m=h(v);function h(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function y(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function E(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var g=["Show some love to @material-ui/core","Show all notification content","Hide sensitive notification content","Hide all notification content"];var _=function(e){E(t,e);function t(){var e;var a,n,r;b(this,t);for(var l=arguments.length,o=Array(l),u=0;u<l;u++){o[u]=arguments[u]}return r=(a=(n=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n),n.state={anchorEl:null,selectedIndex:1},n.button=undefined,n.handleClickListItem=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuItemClick=function(e,t){n.setState({selectedIndex:t,anchorEl:null})},n.handleClose=function(){n.setState({anchorEl:null})},a),y(n,r)}n(t,[{key:"render",value:function e(){var t=this;var a=this.state.anchorEl;return l.default.createElement("div",null,l.default.createElement(u.default,{component:"nav"},l.default.createElement(c.default,{button:true,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"When device is locked",onClick:this.handleClickListItem},l.default.createElement(s.default,{primary:"When device is locked",secondary:g[this.state.selectedIndex]}))),l.default.createElement(p.default,{id:"lock-menu",anchorEl:a,open:Boolean(a),onClose:this.handleClose},g.map(function(e,a){return l.default.createElement(m.default,{key:e,disabled:a===0,selected:a===t.state.selectedIndex,onClick:function e(n){return t.handleMenuItemClick(n,a)}},e)})))}}]);return t}(l.default.Component);t.default=_},2182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();var r=a(1);var l=d(r);var o=a(1646);var u=d(o);var i=a(1590);var c=d(i);var f=a(79);var s=d(f);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function v(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var h=function(e){m(t,e);function t(){var e;var a,n,r;p(this,t);for(var l=arguments.length,o=Array(l),u=0;u<l;u++){o[u]=arguments[u]}return r=(a=(n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n),n.state={anchorEl:null,selectedIndex:1},n.button=undefined,n.handleClickListItem=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuItemClick=function(e,t){n.setState({selectedIndex:t,anchorEl:null})},n.handleClose=function(){n.setState({anchorEl:null})},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},a),v(n,r)}n(t,[{key:"render",value:function e(){var t=this.state.anchorEl;return l.default.createElement("div",null,l.default.createElement(s.default,{variant:"raised",color:"primary",className:"text-white","aria-owns":t?"simple-menu":null,"aria-haspopup":"true",onClick:this.handleClick},"Open Menu"),l.default.createElement(u.default,{id:"simple-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},l.default.createElement(c.default,{onClick:this.handleClose},"Profile"),l.default.createElement(c.default,{onClick:this.handleClose},"My account"),l.default.createElement(c.default,{onClick:this.handleClose},"Logout")))}}]);return t}(l.default.Component);t.default=h}}]);