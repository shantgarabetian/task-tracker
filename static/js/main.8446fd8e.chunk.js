(this["webpackJsonpreact-crash-course"]=this["webpackJsonpreact-crash-course"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(21),o=n.n(s),i=(n(30),n(19)),u=n(24),l=n(7),j=n.n(l),d=n(12),b=n(11),h=n(9),f=n(2),p=n(8),x=n.n(p),O=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(r.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};O.defaultProps={color:"Blue"},O.propType={text:x.a.string,color:x.a.string,onClick:x.a.func};var k=O,m=function(e){var t=e.title,n=e.onClick,c=e.addTaskFlag?{color:"red",text:"Close"}:{color:"green",text:"Add"},a=c.color,s=c.text,o=Object(f.e)();return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:t}),"/"===o.pathname&&Object(r.jsx)(k,{color:a,text:s,onClick:n})]})};m.defaultProps={title:"Task Tracker"};var v=m,g=n(23),y=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(r.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(r.jsxs)("h3",{children:[t.text,Object(r.jsx)(g.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(r.jsx)("p",{children:t.day})]})},T=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(r.jsx)("div",{children:t.map((function(e){return Object(r.jsx)(y,{task:e,onDelete:n,onToggle:c},e.id)}))})},C=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(b.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(""),u=Object(b.a)(i,2),l=u[0],j=u[1],d=Object(c.useState)(!1),h=Object(b.a)(d,2),f=h[0],p=h[1];return Object(r.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s?(t({text:s,day:l,reminder:f}),o(""),j(""),p(!1)):alert("please add a task")},children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Task"}),Object(r.jsx)("input",{type:"text",placeholder:"add Task",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Day & Time"}),Object(r.jsx)("input",{type:"text",placeholder:"add day & time",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control form-control-check",children:[Object(r.jsx)("label",{children:"Set Reminder"}),Object(r.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(r.jsx)("input",{type:"submit",value:"save task",className:"btn btn-block"})]})},w=function(){return Object(r.jsxs)("footer",{children:[Object(r.jsx)("p",{children:"Copyright \xa9 2021"}),Object(r.jsx)(h.b,{to:"/about",children:"About"})]})},N=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Version 1.0.0"}),Object(r.jsx)(h.b,{to:"/",children:"Go Back"})]})},S=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),o=Object(b.a)(s,2),l=o[0],p=o[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,a([].concat(Object(u.a)(n),[c]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:a(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(j.a.mark((function e(t){var r,c,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.find((function(e){return e.id===t})),c=Object(i.a)(Object(i.a)({},r),{},{reminder:!r.reminder}),e.next=4,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:return s=e.sent,e.next=7,s.json();case 7:o=e.sent,a(n.map((function(e){return e.id===t?o:e})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(h.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(v,{onClick:function(){p(!l)},addTaskFlag:l}),Object(r.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(r.jsxs)(r.Fragment,{children:[l&&Object(r.jsx)(C,{onAdd:O}),n.length>0?Object(r.jsx)(T,{tasks:n,onDelete:k,onToggle:m}):"No Tasks To Show"]})}}),Object(r.jsx)(f.a,{path:"/about",component:N}),Object(r.jsx)(w,{})]})})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8446fd8e.chunk.js.map