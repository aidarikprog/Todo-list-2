(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={"form-control":"TaskInput_form-control__3BTnG",invalid:"TaskInput_invalid__32Bd_"}},,function(t,e,n){t.exports={button:"Button_button__1WQcC"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),r=(n(14),n(9)),o=n(3),s=n(1),u=(n(15),n(0)),a=function(t){return Object(u.jsx)("li",{className:"task-item",onClick:function(){t.onDelete(t.id)},children:t.children})},l=(n(17),function(t){return Object(u.jsx)("ul",{className:"task-list",children:t.items.map((function(e){return Object(u.jsx)(a,{id:e.id,onDelete:t.onDeleteTask,children:e.text},e.id)}))})}),d=n(8),j=n.n(d),b=function(t){return Object(u.jsx)("button",{type:t.type,className:j.a.button,children:t.children})},f=n(6),x=n.n(f),h=function(t){var e=Object(s.useState)(""),n=Object(o.a)(e,2),c=n[0],i=n[1],r=Object(s.useState)(!0),a=Object(o.a)(r,2),l=a[0],d=a[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==c.trim().length?t.onAddTask(c):d(!1)},children:[Object(u.jsxs)("div",{className:"".concat(x.a["form-control"]," ").concat(!l&&x.a.invalid," "),children:[Object(u.jsx)("label",{children:"\u0417\u0430\u0434\u0430\u0447\u0438"}),Object(u.jsx)("input",{type:"text",onChange:function(t){t.target.value.trim().length>0&&d(!0),i(t.target.value)}})]}),Object(u.jsx)(b,{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0417\u0430\u0434\u0430\u0447\u0443"})]})},O=(n(18),function(){var t=Object(s.useState)([{text:"\u0417\u0430\u0434\u0430\u0447\u0430 - 1 ",id:"t1"},{text:"\u0417\u0430\u0434\u0430\u0447\u0430 - 2",id:"t2"},{text:"\u0417\u0430\u0434\u0430\u0447\u0430 - 3",id:"t3"}]),e=Object(o.a)(t,2),n=e[0],c=e[1],i=Object(u.jsx)("p",{style:{textAlign:"center"},children:"\u0417\u0430\u0434\u0430\u0447 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e! \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c?"});return n.length>0&&(i=Object(u.jsx)(l,{items:n,onDeleteTask:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})),Object(u.jsxs)("div",{children:[Object(u.jsx)("section",{id:"task-form",children:Object(u.jsx)(h,{onAddTask:function(t){c((function(e){var n=Object(r.a)(e);return n.unshift({text:t,id:Math.random().toString()}),n}))}})}),Object(u.jsx)("section",{id:"tasks",children:i})]})});i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.ee8c45df.chunk.js.map