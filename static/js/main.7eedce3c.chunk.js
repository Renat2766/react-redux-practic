(this["webpackJsonpreact-redux-lesson"]=this["webpackJsonpreact-redux-lesson"]||[]).push([[0],{16:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);c(0);var n=c(5),r=c.n(n),a=(c(16),c(3)),o=(c(21),c(6)),s=c(2),i={castomers:[]},u="ADD_CASTOMER",l="REMOVE_CASTOMERS",d="ADD_MANY_CASTOMER",j=function(){return function(e){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:d,payload:t})}))}},b=c(1);var p=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.cash.cash})),c=Object(a.c)((function(e){return e.castomers.castomers})),n=function(t){var c={name:t,id:Date.now()};e({type:u,payload:c})},r=function(t){var c;e((c=t.id,{type:l,payload:c}))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"count",children:["\u0411\u0430\u043b\u0430\u043d\u0441: ",t]}),Object(b.jsx)("button",{onClick:function(){return function(t){e({type:"ADD_CASH",payload:t})}(Number(prompt()))},children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441\u0447\u0435\u0442"}),Object(b.jsx)("button",{onClick:function(){return function(t){e({type:"GET_CASH",payload:t})}(Number(prompt()))},children:"\u0421\u043d\u044f\u0442\u044c \u0441\u043e \u0441\u0447\u0435\u0442\u0430"}),Object(b.jsx)("button",{onClick:function(){return n(prompt())},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0430"}),Object(b.jsx)("button",{onClick:function(){return e(j())},children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"})]}),c.length>0?Object(b.jsx)("div",{className:"castomer",children:c.map((function(e){return Object(b.jsx)("div",{onClick:function(){return r(e)},children:e.name})}))}):Object(b.jsx)("div",{style:{fontSize:"2rem",marginTop:"20px",marginLeft:"550px"},children:"\u041a\u043b\u0438\u0435\u043d\u0442\u044b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442!"})]})},h=c(4),O=c(10),m=c(11),f={cash:5},y=new h.combineReducers({cash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CASH":return Object(s.a)(Object(s.a)({},e),{},{cash:e.cash+t.payload});case"GET_CASH":return Object(s.a)(Object(s.a)({},e),{},{cash:e.cash-t.payload});default:return e}},castomers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(s.a)(Object(s.a)({},e),{},{castomers:[].concat(Object(o.a)(e.castomers),Object(o.a)(t.payload))});case u:return Object(s.a)(Object(s.a)({},e),{},{castomers:[].concat(Object(o.a)(e.castomers),[t.payload])});case l:return Object(s.a)(Object(s.a)({},e),{},{castomers:e.castomers.filter((function(e){return e.id!==t.payload}))});default:return e}}}),v=Object(h.createStore)(y,Object(O.composeWithDevTools)(Object(h.applyMiddleware)(m.a)));r.a.render(Object(b.jsx)(a.a,{store:v,children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.7eedce3c.chunk.js.map