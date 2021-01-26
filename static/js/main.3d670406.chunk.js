(this["webpackJsonpreact-crash-course"]=this["webpackJsonpreact-crash-course"]||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(20),i=n.n(o),s=(n(28),n(12)),l=n(18),d=n(10),j=n(8),u=n(2),b=n(7),h=n.n(b),O=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};O.defaultProps={color:"Blue"},O.propType={text:h.a.string,color:h.a.string,onClick:h.a.func};var x=O,m=function(e){var t=e.title,n=e.onClick,r=e.addTaskFlag?{color:"red",text:"Close"}:{color:"green",text:"Add"},a=r.color,o=r.text,i=Object(u.e)();return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),"/"===i.pathname&&Object(c.jsx)(x,{color:a,text:o,onClick:n})]})};m.defaultProps={title:"Task Tracker"};var p=m,f=n(22),k=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(c.jsxs)("h3",{children:[t.text,Object(c.jsx)(f.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.day})]})},v=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(k,{task:e,onDelete:n,onToggle:r},e.id)}))})},g=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(d.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(""),l=Object(d.a)(s,2),j=l[0],u=l[1],b=Object(r.useState)(!1),h=Object(d.a)(b,2),O=h[0],x=h[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:j,reminder:O}),i(""),u(""),x(!1)):alert("please add a task")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Task"}),Object(c.jsx)("input",{type:"text",placeholder:"add Task",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Day & Time"}),Object(c.jsx)("input",{type:"text",placeholder:"add day & time",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{type:"submit",value:"save task",className:"btn btn-block"})]})},y=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("p",{children:"Copyright \xa9 2021"}),Object(c.jsx)(j.b,{to:"/about",children:"About"})]})},T=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Version 1.0.0"}),Object(c.jsx)(j.b,{to:"/",children:"Go Back"})]})},C=function(){var e=Object(r.useState)([{id:1,text:"Doctor Appointment",day:"Jan 7th at 1:00pm",reminder:!0},{id:2,text:"Office Appointment",day:"Jan 8th at 2:00pm",reminder:!0},{id:3,text:"Dinner Appointment",day:"Jan 9th at 8:00pm",reminder:!1},{id:4,text:"Lunch Appointment",day:"Jan 10th at 2:00pm",reminder:!1}]),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(!1),i=Object(d.a)(o,2),b=i[0],h=i[1],O=function(){var e=n.map((function(e){return e.id}));return Math.max.apply(Math,Object(l.a)(e))+1},x=function(e){var t=Object(s.a)(Object(s.a)({},e),{},{id:O()});a([].concat(Object(l.a)(n),[t]))},m=function(e){a(n.filter((function(t){return t.id!==e})))},f=function(e){var t=n.find((function(t){return t.id===e})),c=Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder});a(n.map((function(t){return t.id===e?c:t})))};return Object(c.jsx)(j.a,{basename:"/task-tracker",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(p,{onClick:function(){h(!b)},addTaskFlag:b}),Object(c.jsx)(u.a,{path:"/",exact:!0,render:function(e){return Object(c.jsxs)(c.Fragment,{children:[b&&Object(c.jsx)(g,{onAdd:x}),n.length>0?Object(c.jsx)(v,{tasks:n,onDelete:m,onToggle:f}):"No Tasks To Show"]})}}),Object(c.jsx)(u.a,{path:"/about",component:T}),Object(c.jsx)(y,{})]})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3d670406.chunk.js.map