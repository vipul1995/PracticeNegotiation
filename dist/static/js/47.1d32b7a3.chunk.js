(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{1511:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var a=n(1);var o=c(a);var s=n(1713);var i=c(s);var l=n(151);var u=c(l);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function d(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var m=function(e){d(t,e);function t(){var e;var n,r,a;f(this,t);for(var o=arguments.length,s=Array(o),i=0;i<o;i++){s[i]=arguments[i]}return a=(n=(r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r),r.state={sessionUsersData:null},n),p(r,a)}r(t,[{key:"componentDidMount",value:function e(){this.getSessionUsersData()}},{key:"getSessionUsersData",value:function e(){var t=this;u.default.get("testimonials.js").then(function(e){console.log(e);t.setState({sessionUsersData:e.data})}).catch(function(e){})}},{key:"render",value:function e(){var t={dots:true,infinite:true,speed:500,slidesToShow:1,slidesToScroll:1,arrows:false,autoplay:true,swipe:true,touchMove:true,swipeToSlide:true,draggable:true};var n=this.state.sessionUsersData;return o.default.createElement("div",{className:"session-slider"},o.default.createElement(i.default,t,n&&n!==null&&n.map(function(e,t){return o.default.createElement("div",{key:t},o.default.createElement("img",{src:e.profile,alt:"session-slider",className:"img-fluid",width:"377",height:"588"}),o.default.createElement("div",{className:"rct-img-overlay"},o.default.createElement("h5",{className:"client-name"},e.name),o.default.createElement("span",null,e.designation),o.default.createElement("p",{className:"mb-0 fs-14"},e.body)))})))}}]);return t}(a.Component);t.default=m}}]);