(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[178],{1474:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a){if(Object.prototype.hasOwnProperty.call(a,r)){e[r]=a[r]}}}return e};var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,a,r){if(a)e(t.prototype,a);if(r)e(t,r);return t}}();var n=a(1);var u=W(n);var s=a(590);var i=W(s);var o=a(79);var c=W(o);var d=a(1595);var f=W(d);var m=a(47);var p=a(1583);var v=W(p);var h=a(1584);var E=W(h);var y=a(137);var b=a(579);var g=W(b);var N=a(151);var w=W(N);var U=a(1608);var k=W(U);var C=a(2448);var x=W(C);var _=a(2447);var P=W(_);var M=a(1582);var j=W(M);var T=a(30);var S=W(T);var D=a(292);var O=W(D);var A=a(581);var I=W(A);function W(e){return e&&e.__esModule?e:{default:e}}function B(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}function L(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function F(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function z(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var G=function(e){z(t,e);function t(){var e;var a,r,l;L(this,t);for(var n=arguments.length,u=Array(n),s=0;s<n;s++){u[s]=arguments[s]}return l=(a=(r=F(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r),r.state={all:false,users:null,selectedUser:null,loading:false,addNewUserModal:false,addNewUserDetail:{id:"",name:"",avatar:"",type:"",emailAddress:"",status:"Active",lastSeen:"",accountType:"",badgeClass:"badge-success",dateCreated:"Just Now",checked:false},openViewUserDialog:false,editUser:null,allSelected:false,selectedUsers:0},a),F(r,l)}l(t,[{key:"componentDidMount",value:function e(){var t=this;w.default.get("userManagement.js").then(function(e){t.setState({users:e.data})}).catch(function(e){})}},{key:"onDelete",value:function e(t){this.refs.deleteConfirmationDialog.open();this.setState({selectedUser:t})}},{key:"deleteUserPermanently",value:function e(){var t=this.state.selectedUser;var a=this.state.users;var r=a.indexOf(t);a.splice(r,1);this.refs.deleteConfirmationDialog.close();this.setState({loading:true});var l=this;setTimeout(function(){l.setState({loading:false,users:a,selectedUser:null});y.NotificationManager.success("User Deleted!")},2e3)}},{key:"opnAddNewUserModal",value:function e(){this.setState({addNewUserModal:true})}},{key:"onReload",value:function e(){this.setState({loading:true});var t=this;setTimeout(function(){t.setState({loading:false})},2e3)}},{key:"onSelectUser",value:function e(t){t.checked=!t.checked;var a=0;var r=this.state.users.map(function(e){if(e.checked){a++}if(e.id===t.id){if(e.checked){a++}return t}else{return e}});this.setState({users:r,selectedUsers:a})}},{key:"onChangeAddNewUserDetails",value:function e(t,a){this.setState({addNewUserDetail:r({},this.state.addNewUserDetail,B({},t,a))})}},{key:"addNewUser",value:function e(){var t=this.state.addNewUserDetail,a=t.name,l=t.emailAddress;if(a!==""&&l!==""){var n=this.state.users;var u=r({},this.state.addNewUserDetail,{id:(new Date).getTime()});n.push(u);this.setState({addNewUserModal:false,loading:true});var s=this;setTimeout(function(){s.setState({loading:false,users:n});y.NotificationManager.success("User Created!")},2e3)}}},{key:"viewUserDetail",value:function e(t){this.setState({openViewUserDialog:true,selectedUser:t})}},{key:"onEditUser",value:function e(t){this.setState({addNewUserModal:true,editUser:t})}},{key:"onAddUpdateUserModalClose",value:function e(){this.setState({addNewUserModal:false,editUser:null})}},{key:"onUpdateUserDetails",value:function e(t,a){this.setState({editUser:r({},this.state.editUser,B({},t,a))})}},{key:"updateUser",value:function e(){var t=this.state.editUser;var a="";var r=this.state.users;for(var l=0;l<r.length;l++){var n=r[l];if(n.id===t.id){a=l}}r[a]=t;this.setState({loading:true,editUser:null,addNewUserModal:false});var u=this;setTimeout(function(){u.setState({users:r,loading:false});y.NotificationManager.success("User Updated!")},2e3)}},{key:"onSelectAllUser",value:function e(t){var a=this.state,r=a.selectedUsers,l=a.users;var n=r<l.length;if(n){var u=l.map(function(e){e.checked=true;return e});this.setState({users:u,selectedUsers:u.length})}else{var s=l.map(function(e){e.checked=false;return e});this.setState({selectedUsers:0,users:s})}}},{key:"render",value:function e(){var t=this;var a=this.state,r=a.users,l=a.loading,n=a.selectedUser,s=a.editUser,o=a.allSelected,d=a.selectedUsers;return u.default.createElement("div",{className:"user-management"},u.default.createElement(j.default,{title:u.default.createElement(S.default,{id:"sidebar.userManagement"}),match:this.props.match}),u.default.createElement(O.default,{fullBlock:true},u.default.createElement("div",{className:"table-responsive"},u.default.createElement("div",{className:"d-flex justify-content-between py-20 px-10 border-bottom"},u.default.createElement("div",null,u.default.createElement("a",{href:"javascript:void(0)",onClick:function e(){return t.onReload()},className:"btn-outline-default mr-10"},u.default.createElement("i",{className:"ti-reload"})),u.default.createElement("a",{href:"javascript:void(0)",className:"btn-outline-default mr-10"},"More")),u.default.createElement("div",null,u.default.createElement("a",{href:"javascript:void(0)",className:"btn-sm btn-outline-default mr-10"},"Export to Excel"),u.default.createElement("a",{href:"javascript:void(0)",onClick:function e(){return t.opnAddNewUserModal()},color:"primary",className:"caret btn-sm mr-10"},"Add New User ",u.default.createElement("i",{className:"zmdi zmdi-plus"})))),u.default.createElement("table",{className:"table table-middle table-hover mb-0"},u.default.createElement("thead",null,u.default.createElement("tr",null,u.default.createElement("th",{className:"w-5"},u.default.createElement(i.default,{control:u.default.createElement(f.default,{indeterminate:d>0&&d<r.length,checked:d>0,onChange:function e(a){return t.onSelectAllUser(a)},value:"all",color:"primary"}),label:"All"})),u.default.createElement("th",null,"User"),u.default.createElement("th",null,"Email Address"),u.default.createElement("th",null,"Status"),u.default.createElement("th",null,"Plans Type"),u.default.createElement("th",null,"Date Created"),u.default.createElement("th",null,"Action"))),u.default.createElement("tbody",null,r&&r.map(function(e,a){return u.default.createElement("tr",{key:a},u.default.createElement("td",null,u.default.createElement(i.default,{control:u.default.createElement(f.default,{checked:e.checked,onChange:function a(){return t.onSelectUser(e)},color:"primary"})})),u.default.createElement("td",null,u.default.createElement("div",{className:"media"},e.avatar!==""?u.default.createElement("img",{src:e.avatar,alt:"user prof",className:"rounded-circle mr-15",width:"50",height:"50"}):u.default.createElement(g.default,{className:"mr-15"},e.name.charAt(0)),u.default.createElement("div",{className:"media-body"},u.default.createElement("h5",{className:"mb-5 fw-bold"},e.name),u.default.createElement(m.Badge,{color:"warning"},e.type)))),u.default.createElement("td",null,e.emailAddress),u.default.createElement("td",{className:"d-flex justify-content-start"},u.default.createElement("span",{className:"badge badge-xs "+e.badgeClass+" mr-10 mt-10 position-relative"}," "),u.default.createElement("div",{className:"status"},u.default.createElement("span",{className:"d-block"},e.status),u.default.createElement("span",{className:"small"},e.lastSeen))),u.default.createElement("td",null,u.default.createElement("span",{className:"badge "+e.badgeClass+" badge-pill"},e.accountType)),u.default.createElement("td",null,e.dateCreated),u.default.createElement("td",{className:"list-action"},u.default.createElement("a",{href:"javascript:void(0)",onClick:function a(){return t.viewUserDetail(e)}},u.default.createElement("i",{className:"ti-eye"})),u.default.createElement("a",{href:"javascript:void(0)",onClick:function a(){return t.onEditUser(e)}},u.default.createElement("i",{className:"ti-pencil"})),u.default.createElement("a",{href:"javascript:void(0)",onClick:function a(){return t.onDelete(e)}},u.default.createElement("i",{className:"ti-close"}))))})),u.default.createElement("tfoot",{className:"border-top"},u.default.createElement("tr",null,u.default.createElement("td",{colSpan:"100%"},u.default.createElement(m.Pagination,{className:"mb-0 py-10 px-10"},u.default.createElement(m.PaginationItem,null,u.default.createElement(m.PaginationLink,{previous:true,href:"#"})),u.default.createElement(m.PaginationItem,{active:true},u.default.createElement(m.PaginationLink,{href:"javascript:void(0)"},"1")),u.default.createElement(m.PaginationItem,null,u.default.createElement(m.PaginationLink,{href:"javascript:void(0)"},"2")),u.default.createElement(m.PaginationItem,null,u.default.createElement(m.PaginationLink,{href:"javascript:void(0)"},"3")),u.default.createElement(m.PaginationItem,null,u.default.createElement(m.PaginationLink,{next:true,href:"javascript:void(0)"})))))))),l&&u.default.createElement(I.default,null)),u.default.createElement(k.default,{ref:"deleteConfirmationDialog",title:"Are You Sure Want To Delete?",message:"This will delete user permanently.",onConfirm:function e(){return t.deleteUserPermanently()}}),u.default.createElement(m.Modal,{isOpen:this.state.addNewUserModal,toggle:function e(){return t.onAddUpdateUserModalClose()}},u.default.createElement(m.ModalHeader,{toggle:function e(){return t.onAddUpdateUserModalClose()}},s===null?"Add New User":"Update User"),u.default.createElement(m.ModalBody,null,s===null?u.default.createElement(x.default,{addNewUserDetails:this.state.addNewUserDetail,onChangeAddNewUserDetails:this.onChangeAddNewUserDetails.bind(this)}):u.default.createElement(P.default,{user:s,onUpdateUserDetail:this.onUpdateUserDetails.bind(this)})),u.default.createElement(m.ModalFooter,null,s===null?u.default.createElement(c.default,{variant:"raised",className:"text-white btn-success",onClick:function e(){return t.addNewUser()}},"Add"):u.default.createElement(c.default,{variant:"raised",color:"primary",className:"text-white",onClick:function e(){return t.updateUser()}},"Update")," ",u.default.createElement(c.default,{variant:"raised",className:"text-white btn-danger",onClick:function e(){return t.onAddUpdateUserModalClose()}},"Cancel"))),u.default.createElement(v.default,{onClose:function e(){return t.setState({openViewUserDialog:false})},open:this.state.openViewUserDialog},u.default.createElement(E.default,null,n!==null&&u.default.createElement("div",null,u.default.createElement("div",{className:"clearfix d-flex"},u.default.createElement("div",{className:"media pull-left"},u.default.createElement("img",{src:n.avatar,alt:"user prof",className:"rounded-circle mr-15",width:"50",height:"50"}),u.default.createElement("div",{className:"media-body"},u.default.createElement("p",null,"Name: ",u.default.createElement("span",{className:"fw-bold"},n.name)),u.default.createElement("p",null,"Email: ",u.default.createElement("span",{className:"fw-bold"},n.emailAddress)),u.default.createElement("p",null,"Type: ",u.default.createElement("span",{className:"badge badge-warning"},n.type)),u.default.createElement("p",null,"Account Type: ",u.default.createElement("span",{className:"badge "+n.badgeClass+" badge-pill"},n.accountType)),u.default.createElement("p",null,"Status: ",n.status),u.default.createElement("p",null,"Last Seen: ",n.lastSeen))))))))}}]);return t}(n.Component);t.default=G},1582:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var l=o(r);var n=a(47);var u=a(9);var s=a(30);var i=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var c=function e(t){var a=t.split("-");if(a.length>1){return l.default.createElement(i.default,{id:"sidebar."+(a[0].charAt(0)+a[0].slice(1)+a[1].charAt(0).toUpperCase()+a[1].slice(1))})}else{return l.default.createElement(i.default,{id:"sidebar."+(t.charAt(0)+t.slice(1))})}};var d=function e(t,a,r){if(r===0){return"/"}else{return t.split(a)[0]+a}};var f=function e(t){var a=t.title,r=t.match,s=t.enableBreadCrumb;var i=r.path.substr(1);var o=i.split("/");return l.default.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},a&&l.default.createElement("div",{className:"page-title-wrap"},l.default.createElement("i",{className:"ti-angle-left"}),l.default.createElement("h2",{className:""},a)),s&&l.default.createElement(n.Breadcrumb,{className:"mb-0 tour-step-7",tag:"nav"},o.map(function(e,t){return l.default.createElement(n.BreadcrumbItem,{active:o.length===t+1,tag:o.length===t+1?"span":u.Link,key:t,to:d(i,e,t)},c(e))})))};f.defaultProps={enableBreadCrumb:true};t.default=f},1583:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return l.default}});var l=r(a(1593))},1584:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return l.default}});var l=r(a(1591))},1585:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return l.default}});var l=r(a(1592))},1586:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return l.default}});var l=r(a(1600))},1588:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return l.default}});var l=r(a(1601))},1591:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var l=r(a(17));var n=r(a(10));var u=r(a(1));var s=r(a(0));var i=r(a(4));var o=r(a(21));var c=function e(t){var a=t.spacing.unit*3;return{root:{flex:"1 1 auto",overflowY:"auto",WebkitOverflowScrolling:"touch",padding:"0 ".concat(a,"px ").concat(a,"px ").concat(a,"px"),"&:first-child":{paddingTop:a}}}};t.styles=c;function d(e){var t=e.classes,a=e.children,r=e.className,s=(0,n.default)(e,["classes","children","className"]);return u.default.createElement("div",(0,l.default)({className:(0,i.default)(t.root,r)},s),a)}d.propTypes=false?undefined:{};var f=(0,o.default)(c,{name:"MuiDialogContent"})(d);t.default=f},1592:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var l=r(a(17));var n=r(a(10));var u=r(a(1));var s=r(a(0));var i=r(a(4));var o=r(a(21));var c=a(580);a(79);var d=function e(t){return{root:{display:"flex",alignItems:"center",justifyContent:"flex-end",flex:"0 0 auto",margin:"".concat(t.spacing.unit,"px ").concat(t.spacing.unit/2,"px")},action:{margin:"0 ".concat(t.spacing.unit/2,"px"),minWidth:64}}};t.styles=d;function f(e){var t=e.disableActionSpacing,a=e.children,r=e.classes,s=e.className,o=(0,n.default)(e,["disableActionSpacing","children","classes","className"]);return u.default.createElement("div",(0,l.default)({className:(0,i.default)(r.root,s)},o),t?a:(0,c.cloneChildrenWithClassName)(a,r.action))}f.propTypes=false?undefined:{};f.defaultProps={disableActionSpacing:false};var m=(0,o.default)(d,{name:"MuiDialogActions"})(f);t.default=m},1593:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var l=r(a(17));var n=r(a(19));var u=r(a(28));var s=r(a(10));var i=r(a(1));var o=r(a(0));var c=r(a(4));var d=r(a(21));var f=a(57);var m=r(a(587));var p=r(a(584));var v=a(135);var h=r(a(293));var E=function e(t){return{root:{justifyContent:"center",alignItems:"center"},paper:{display:"flex",margin:t.spacing.unit*4,flexDirection:"column",flex:"0 1 auto",position:"relative",maxHeight:"90vh",overflowY:"auto",outline:"none"},paperWidthXs:{maxWidth:Math.max(t.breakpoints.values.xs,360)},paperWidthSm:{maxWidth:t.breakpoints.values.sm},paperWidthMd:{maxWidth:t.breakpoints.values.md},paperFullWidth:{width:"100%"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"100%",borderRadius:0}}};t.styles=E;function y(e){var t;var a=e.BackdropProps,r=e.children,o=e.classes,d=e.className,p=e.disableBackdropClick,v=e.disableEscapeKeyDown,E=e.fullScreen,y=e.fullWidth,b=e.maxWidth,g=e.onBackdropClick,N=e.onClose,w=e.onEnter,U=e.onEntered,k=e.onEntering,C=e.onEscapeKeyDown,x=e.onExit,_=e.onExited,P=e.onExiting,M=e.open,j=e.PaperProps,T=e.TransitionComponent,S=e.transitionDuration,D=e.TransitionProps,O=(0,s.default)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperProps","TransitionComponent","transitionDuration","TransitionProps"]);return i.default.createElement(m.default,(0,l.default)({className:(0,c.default)(o.root,d),BackdropProps:(0,u.default)({transitionDuration:S},a),disableBackdropClick:p,disableEscapeKeyDown:v,onBackdropClick:g,onEscapeKeyDown:C,onClose:N,open:M,role:"dialog"},O),i.default.createElement(T,(0,l.default)({appear:true,in:M,timeout:S,onEnter:w,onEntering:k,onEntered:U,onExit:x,onExiting:P,onExited:_},D),i.default.createElement(h.default,(0,l.default)({elevation:24,className:(0,c.default)(o.paper,(t={},(0,n.default)(t,o["paperWidth".concat(b?(0,f.capitalize)(b):"")],b),(0,n.default)(t,o.paperFullScreen,E),(0,n.default)(t,o.paperFullWidth,y),t))},j),r)))}y.propTypes=false?undefined:{};y.defaultProps={disableBackdropClick:false,disableEscapeKeyDown:false,fullScreen:false,fullWidth:false,maxWidth:"sm",TransitionComponent:p.default,transitionDuration:{enter:v.duration.enteringScreen,exit:v.duration.leavingScreen}};var b=(0,d.default)(E,{name:"MuiDialog"})(y);t.default=b},1595:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});Object.defineProperty(t,"default",{enumerable:true,get:function e(){return l.default}});var l=r(a(1618))},1600:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var l=r(a(17));var n=r(a(10));var u=r(a(1));var s=r(a(0));var i=r(a(4));var o=r(a(21));var c=r(a(198));var d=function e(t){return{root:{margin:0,padding:"".concat(t.spacing.unit*3,"px ").concat(t.spacing.unit*3,"px       20px ").concat(t.spacing.unit*3,"px"),flex:"0 0 auto"}}};t.styles=d;function f(e){var t=e.children,a=e.classes,r=e.className,s=e.disableTypography,o=(0,n.default)(e,["children","classes","className","disableTypography"]);return u.default.createElement("div",(0,l.default)({className:(0,i.default)(a.root,r)},o),s?t:u.default.createElement(c.default,{variant:"title"},t))}f.propTypes=false?undefined:{};f.defaultProps={disableTypography:false};var m=(0,o.default)(d,{name:"MuiDialogTitle"})(f);t.default=m},1601:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var l=r(a(17));var n=r(a(10));var u=r(a(1));var s=r(a(0));var i=r(a(4));var o=r(a(21));var c=r(a(198));var d=function e(t){return{root:{color:t.palette.text.secondary}}};t.styles=d;function f(e){var t=e.children,a=e.classes,r=e.className,s=(0,n.default)(e,["children","classes","className"]);return u.default.createElement(c.default,(0,l.default)({component:"p",variant:"subheading",className:(0,i.default)(a.root,r)},s),t)}f.propTypes=false?undefined:{};var m=(0,o.default)(d,{name:"MuiDialogContentText"})(f);t.default=m},1608:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,a,r){if(a)e(t.prototype,a);if(r)e(t,r);return t}}();var l=a(1);var n=y(l);var u=a(1583);var s=y(u);var i=a(1585);var o=y(i);var c=a(1584);var d=y(c);var f=a(1588);var m=y(f);var p=a(1586);var v=y(p);var h=a(79);var E=y(h);function y(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function g(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function N(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var w=function(e){N(t,e);function t(){var e;var a,r,l;b(this,t);for(var n=arguments.length,u=Array(n),s=0;s<n;s++){u[s]=arguments[s]}return l=(a=(r=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r),r.state={open:false},a),g(r,l)}r(t,[{key:"open",value:function e(){this.setState({open:true})}},{key:"close",value:function e(){this.setState({open:false})}},{key:"render",value:function e(){var t=this;var a=this.props,r=a.title,l=a.message,u=a.onConfirm;return n.default.createElement(s.default,{open:this.state.open,onClose:function e(){return t.close()},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},n.default.createElement(v.default,{id:"alert-dialog-title"},r),n.default.createElement(d.default,null,n.default.createElement(m.default,{id:"alert-dialog-description"},l)),n.default.createElement(o.default,null,n.default.createElement(E.default,{onClick:function e(){return t.close()},className:"btn-danger text-white"},"Cancel"),n.default.createElement(E.default,{onClick:u,className:"btn-primary text-white",autoFocus:true},"Yes")))}}]);return t}(l.Component);t.default=w},1615:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var l=r(a(1));var n=r(a(575));var u=r(a(574));var s=l.default.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"});var i=function e(t){return l.default.createElement(u.default,t,s)};i=(0,n.default)(i);i.muiName="SvgIcon";var o=i;t.default=o},1616:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var l=r(a(1));var n=r(a(575));var u=r(a(574));var s=l.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"});var i=function e(t){return l.default.createElement(u.default,t,s)};i=(0,n.default)(i);i.muiName="SvgIcon";var o=i;t.default=o},1617:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var l=r(a(1));var n=r(a(575));var u=r(a(574));var s=l.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"});var i=function e(t){return l.default.createElement(u.default,t,s)};i=(0,n.default)(i);i.muiName="SvgIcon";var o=i;t.default=o},1618:function(e,t,a){"use strict";var r=a(6);Object.defineProperty(t,"__esModule",{value:true});t.default=t.styles=void 0;var l=r(a(17));var n=r(a(10));var u=r(a(1));var s=r(a(0));var i=r(a(4));var o=r(a(588));var c=r(a(1617));var d=r(a(1616));var f=r(a(1615));var m=a(57);var p=r(a(21));var v=function e(t){return{root:{color:t.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:t.palette.primary.main},"&$disabled":{color:t.palette.action.disabled}},colorSecondary:{"&$checked":{color:t.palette.secondary.main},"&$disabled":{color:t.palette.action.disabled}}}};t.styles=v;function h(e){var t=e.checkedIcon,a=e.classes,r=e.color,s=e.icon,c=e.indeterminate,d=e.indeterminateIcon,f=(0,n.default)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon"]);return u.default.createElement(o.default,(0,l.default)({checkedIcon:c?d:t,classes:{root:(0,i.default)(a.root,a["color".concat((0,m.capitalize)(r))]),checked:a.checked,disabled:a.disabled},icon:c?d:s},f))}h.propTypes=false?undefined:{};h.defaultProps={checkedIcon:u.default.createElement(d.default,null),color:"secondary",icon:u.default.createElement(c.default,null),indeterminate:false,indeterminateIcon:u.default.createElement(f.default,null)};var E=(0,p.default)(v,{name:"MuiCheckbox"})(h);t.default=E},2447:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var l=u(r);var n=a(47);function u(e){return e&&e.__esModule?e:{default:e}}var s=function e(t){var a=t.user,r=t.onUpdateUserDetail;return l.default.createElement(n.Form,null,l.default.createElement(n.FormGroup,null,l.default.createElement(n.Label,{for:"userName"},"Name"),l.default.createElement(n.Input,{type:"text",name:"userName",id:"userName",placeholder:"Enter Name",value:a.name,onChange:function e(t){return r("name",t.target.value)}})),l.default.createElement(n.FormGroup,null,l.default.createElement(n.Label,{for:"userEmail"},"Email"),l.default.createElement(n.Input,{type:"email",name:"userEmail",id:"userEmail",placeholder:"Enter Email",value:a.emailAddress,onChange:function e(t){return r("emailAddress",t.target.value)}})),l.default.createElement(n.FormGroup,null,l.default.createElement(n.Label,{for:"userType"},"Type"),l.default.createElement(n.Input,{type:"text",name:"userType",id:"userType",placeholder:"Enter Type",value:a.type,onChange:function e(t){return r("type",t.target.value)}})),l.default.createElement(n.FormGroup,null,l.default.createElement(n.Label,{for:"accountType"},"Account Type"),l.default.createElement(n.Input,{type:"text",name:"accountType",id:"accountType",placeholder:"Enter Account Type",value:a.accountType,onChange:function e(t){return r("accountType",t.target.value)}})))};t.default=s},2448:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(1);var l=u(r);var n=a(47);function u(e){return e&&e.__esModule?e:{default:e}}var s=function e(t){var a=t.addNewUserDetails,r=t.onChangeAddNewUserDetails;return l.default.createElement(n.Form,null,l.default.createElement(n.FormGroup,null,l.default.createElement(n.Label,{for:"userName"},"Name"),l.default.createElement(n.Input,{type:"text",name:"userName",id:"userName",placeholder:"Enter Name",value:a.name,onChange:function e(t){return r("name",t.target.value)}})),l.default.createElement(n.FormGroup,null,l.default.createElement(n.Label,{for:"userEmail"},"Email"),l.default.createElement(n.Input,{type:"email",name:"userEmail",id:"userEmail",placeholder:"Enter Email",value:a.emailAddress,onChange:function e(t){return r("emailAddress",t.target.value)}})),l.default.createElement(n.FormGroup,null,l.default.createElement(n.Label,{for:"userType"},"Type"),l.default.createElement(n.Input,{type:"text",name:"userType",id:"userType",placeholder:"Enter Type",value:a.type,onChange:function e(t){return r("type",t.target.value)}})),l.default.createElement(n.FormGroup,null,l.default.createElement(n.Label,{for:"accountType"},"Account Type"),l.default.createElement(n.Input,{type:"text",name:"accountType",id:"accountType",placeholder:"Enter Account Type",value:a.accountType,onChange:function e(t){return r("accountType",t.target.value)}})))};t.default=s}}]);