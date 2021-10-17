(this["webpackJsonpplanning-poker"]=this["webpackJsonpplanning-poker"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n(2),s=n(3),r=n(5),c=n(4),o=n(1),l=n.n(o),u=n(9),p=n.n(u),d=n(10),h=n(24),m=(n(19),n(8)),j=n(11),b=(n(20),n(0)),O=["size","point","isSelectable","isSelected","isClosed","handleClick"],v=function(e){var t=e.size,n=e.point,i=e.isSelectable,a=e.isSelected,s=e.isClosed,r=e.handleClick,c=Object(j.a)(e,O);return Object(b.jsx)("div",Object(m.a)(Object(m.a)({className:["card","card-"+t,i?"card-selectable":"",a?"card-selected":"",s?"card-closed":""].join(" "),onClick:r},c),{},{children:s?"":n}))};v.defaultProps={size:"medium",point:0,isSelectable:!1,isSelected:!1,isClosed:!1,handleClick:function(){}};var f=["0","1","2","3","5","8","13","21","34","55","?","\u221e"],k=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=f.map((function(t){var n=e.props.mySelectedPoint===t;return Object(b.jsx)(v,{isSelectable:!0,isSelected:n,point:t,handleClick:function(){return e.props.handleSelectionCardClick(t)}},t)}));return Object(b.jsx)("div",{className:"selection",children:t})}}]),n}(l.a.Component),C=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"user",children:this.props.name})}}]),n}(l.a.Component),y=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"createCopyText",value:function(){var e=this.props.estimaters;if(0===e.length)return"empty.";var t=new Date;return"["+t.toLocaleDateString()+" "+t.toLocaleTimeString()+"] "+e.sort((function(e,t){return e.name>t.name?1:-1})).reduce((function(e,t){return(e?e+" ":"")+"".concat(t.name,"(").concat(t.point,")")}),null)}},{key:"render",value:function(){var e=this,t=this.props.isOpend,n=this.props.estimaters.map((function(e){return Object(b.jsx)(x,{name:e.name,point:e.point,isOpend:t},e.name)}));return Object(b.jsxs)("div",{className:"table",children:[Object(b.jsx)("div",{className:"estimaters",children:n}),Object(b.jsx)(N,{isOpend:t,handleClick:function(){return e.props.handleOpenButtonClick()}}),t&&n.length>0?Object(b.jsx)(S,{text:this.createCopyText()}):null]})}}]),n}(l.a.Component),S=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)(d.CopyToClipboard,{text:this.props.text,children:Object(b.jsx)("div",{className:"copy-button",children:"Copy"})})}}]),n}(l.a.Component),x=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.isOpend?this.props.point:void 0,t="estimater "+(this.props.isOpend?"opend":"closed");return Object(b.jsxs)("div",{className:t,children:[Object(b.jsx)(v,{isSelectable:!1,isClosed:!this.props.isOpend,size:"large",point:e}),Object(b.jsx)("div",{className:"estimater-name",children:this.props.name})]})}}]),n}(l.a.Component),N=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"open-button",onClick:function(){return e.props.handleClick()},children:this.props.isOpend?"return":"open"})}}]),n}(l.a.Component),g=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(e){var s;Object(a.a)(this,n),(s=t.call(this,e)).eventSubscribers={select:function(e){var t=s.state.estimaters.slice(),n=t.find((function(t){return t.name===e.name}));n||(n={name:e.name},t[t.length]=n),n.point=e.point,s.setState({estimaters:t})},unselect:function(e){var t=s.state.estimaters.filter((function(t){return t.name!==e.name}));s.setState({estimaters:t})},open:function(e){s.setState({isOpend:!0})},return:function(e){s.setState({estimaters:[],isOpend:!1})}};for(var r=void 0;!r;)r=window.prompt("your name");var c,o=(c=s.getSetupedRoomId(),window.io("https://simple-websocket-server.herokuapp.com/?roomId="+c));return s.state={myName:r,estimaters:[],isOend:!1,socket:o},s.handleSelectionCardClick=s.handleSelectionCardClick.bind(Object(i.a)(s)),s.handleOpenButtonClick=s.handleOpenButtonClick.bind(Object(i.a)(s)),s}return Object(s.a)(n,[{key:"getSetupedRoomId",value:function(){var e,t=window.location.search;if(t)e=t.substring(1);else{var n=Object(h.a)();window.location.hash=n,window.history.replaceState("","","?"+n),e=n}return e}},{key:"componentDidMount",value:function(){var e=this;this.state.socket.on("do event",(function(t){var n=e.eventSubscribers[t.type];n&&n(t)}))}},{key:"handleOpenButtonClick",value:function(){var e=0!==this.state.estimaters.length&&!this.state.isOpend?"open":"return";this.state.socket.emit("do event",{type:e})}},{key:"handleSelectionCardClick",value:function(e){var t=this,n=this.state.estimaters.find((function(e){return e.name===t.state.myName})),i=n&&n.point===e,a=this.state.estimaters.slice();if(i)a=this.state.estimaters.filter((function(e){return e.name!==t.state.myName}));else{var s=a.find((function(e){return e.name===t.state.myName}));s||(s={name:this.state.myName},a[a.length]=s),s.point=e}var r=i?"unselect":"select";this.state.socket.emit("do event",{type:r,name:this.state.myName,point:e})}},{key:"render",value:function(){var e=this,t=this.state.estimaters.find((function(t){return t.name===e.state.myName}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Planning Poker"}),Object(b.jsx)(y,{estimaters:this.state.estimaters,isOpend:this.state.isOpend,handleOpenButtonClick:this.handleOpenButtonClick}),Object(b.jsx)(C,{name:this.state.myName}),Object(b.jsx)(k,{mySelectedPoint:t?t.point:void 0,handleSelectionCardClick:this.handleSelectionCardClick})]})}}]),n}(l.a.Component);p.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.89bd2124.chunk.js.map