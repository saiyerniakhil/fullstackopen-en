(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(13),r=t.n(o),u=t(2),l=function(e){var n=e.persons,t=e.handleAction;return c.a.createElement(c.a.Fragment,null,n.map(function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("p",null,e.name," ",e.number),c.a.createElement("button",{onClick:function(n){t(e)}},"delete"))}))},i=(t(20),t(3)),m=t.n(i),s="http://localhost:3001/persons",f=function(){return m.a.get(s).then(function(e){return e.data})},d=function(e){return m.a.post(s,e).then(function(e){return e.data})},b=function(e){return console.log("".concat(e.id," is to be deleted")),m.a.delete("".concat(s,"/").concat(e.id)).then(function(e){return e.data})},h=function(e){var n=e.message;return null==n?null:c.a.createElement("div",{className:"error"},n)},v=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),m=i[0],s=i[1],v=Object(a.useState)(""),E=Object(u.a)(v,2),p=E[0],g=E[1],j=Object(a.useState)(""),O=Object(u.a)(j,2),w=O[0],k=O[1],S=Object(a.useState)({}),y=Object(u.a)(S,2),C=y[0],x=y[1],A=Object(a.useState)(null),D=Object(u.a)(A,2),J=D[0],N=D[1];Object(a.useEffect)(function(){f().then(function(e){o(e)})},[t]);var B=function(e){for(var n=0;n<t.length;++n)t[n].name.toLowerCase().includes(e)&&x(t[n])};return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(h,{message:J}),c.a.createElement("input",{type:"text",value:w,onChange:function(e){k(e.target.value);var n=B(w);B(n)}}),c.a.createElement("p",null," ",C.name," ",C.number," "),c.a.createElement("h2",null,"add a new"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:m,number:p,id:t.length+1};!function(e){for(var n=!1,a=0;a<t.length;++a){var c=e.name;if(t[a].name===c){n=!0;break}}return n}(n)?function(e){d(e).then(function(e){o(t.concat(e))})}(n):N("".concat(n.name," is already added to the phonebook"))}},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:m,onChange:function(e){s(e.target.value)}})),c.a.createElement("br",null),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:p,onChange:function(e){g(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add"))),c.a.createElement("h2",null,"Numbers"),c.a.createElement(l,{persons:t,handleAction:function(e){var n=window.confirm("Do you want to delete ".concat(e.name," from contacts"));console.log(n),n&&b(e).then(function(e){console.log()}).catch(function(e){return console.log("error")}),f().then(function(e){o(e)})}}))};r.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cb681163.chunk.js.map