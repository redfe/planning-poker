(this["webpackJsonpplanning-poker"]=this["webpackJsonpplanning-poker"]||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(1),r=n(2),s=n(4),c=n(3),o=n(0),l=n.n(o),u=n(7),p=n.n(u),m=n(15),d=(n(14),["0","1","2","3","5","8","13","21","34","55","?","\u221e"]),h=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.point,t="card"+(this.props.isSelected?" selected":"");return l.a.createElement("div",{className:t,onClick:this.props.handleClick},e)}}]),n}(l.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=d.map((function(t){var n=e.props.mySelectedPoint===t;return l.a.createElement(h,{isSelected:n,key:t,point:t,handleClick:function(){return e.props.handleSelectionCardClick(t)}})}));return l.a.createElement("div",{className:"selection"},t)}}]),n}(l.a.Component),f=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"user"},this.props.name)}}]),n}(l.a.Component),O=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props.estimaters.map((function(t){return l.a.createElement(b,{key:t.name,name:t.name,point:t.point,isOpend:e.props.isOpend})}));return l.a.createElement("div",{className:"table"},l.a.createElement("div",{className:"estimaters"},t),l.a.createElement(k,{isOpend:this.props.isOpend,handleClick:function(){return e.props.handleOpenButtonClick()}}))}}]),n}(l.a.Component),b=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.isOpend?this.props.point:void 0,t="estimater "+(this.props.isOpend?"opend":"closed");return l.a.createElement("div",{className:t},l.a.createElement(h,{point:e}),l.a.createElement("div",{className:"estimater-name"},this.props.name))}}]),n}(l.a.Component),k=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"open-button",onClick:function(){return e.props.handleClick()}},this.props.isOpend?"return":"open")}}]),n}(l.a.Component),y=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;Object(i.a)(this,n),(r=t.call(this,e)).eventSubscribers={select:function(e){var t=r.state.estimaters.slice(),n=t.find((function(t){return t.name===e.name}));n||(n={name:e.name},t[t.length]=n),n.point=e.point,r.setState({estimaters:t})},unselect:function(e){var t=r.state.estimaters.filter((function(t){return t.name!==e.name}));r.setState({estimaters:t})},open:function(e){r.setState({isOpend:!0})},return:function(e){r.setState({estimaters:[],isOpend:!1})}};for(var s=void 0;!s;)s=window.prompt("your name");var c,o=(c=window.location.hash.substring(1),window.io("https://simple-websocket-server.herokuapp.com/?roomId="+c));return r.state={myName:s,estimaters:[],isOend:!1,socket:o},r.handleSelectionCardClick=r.handleSelectionCardClick.bind(Object(a.a)(r)),r.handleOpenButtonClick=r.handleOpenButtonClick.bind(Object(a.a)(r)),r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.location.hash||(window.location.hash=Object(m.a)()),this.state.socket.on("do event",(function(t){var n=e.eventSubscribers[t.type];n&&n(t)}))}},{key:"handleOpenButtonClick",value:function(){var e=0!==this.state.estimaters.length&&!this.state.isOpend?"open":"return";this.state.socket.emit("do event",{type:e})}},{key:"handleSelectionCardClick",value:function(e){var t=this,n=this.state.estimaters.find((function(e){return e.name===t.state.myName})),a=n&&n.point===e,i=this.state.estimaters.slice();if(a)i=this.state.estimaters.filter((function(e){return e.name!==t.state.myName}));else{var r=i.find((function(e){return e.name===t.state.myName}));r||(r={name:this.state.myName},i[i.length]=r),r.point=e}var s=a?"unselect":"select";this.state.socket.emit("do event",{type:s,name:this.state.myName,point:e})}},{key:"render",value:function(){var e=this,t=this.state.estimaters.find((function(t){return t.name===e.state.myName}));return l.a.createElement("div",null,l.a.createElement(O,{estimaters:this.state.estimaters,isOpend:this.state.isOpend,handleOpenButtonClick:this.handleOpenButtonClick}),l.a.createElement(f,{name:this.state.myName}),l.a.createElement(v,{mySelectedPoint:t?t.point:void 0,handleSelectionCardClick:this.handleSelectionCardClick}))}}]),n}(l.a.Component);p.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.666a4c08.chunk.js.map