(this["webpackJsonpemployee-tracker-jk"]=this["webpackJsonpemployee-tracker-jk"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r);a(12),a(13);var m=function(){return c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-12 jumbotron mb-3 team-heading"},c.a.createElement("h1",{class:"text-center"},"My Team")))},o=a(4),s=a(1);a(14),c.a.createContext({name:"",role:"",image:"",handleInputChange:function(){}});var i=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(""),r=Object(s.a)(a,2),l=(r[0],r[1],Object(n.useState)("")),m=Object(s.a)(l,2),i=(m[0],m[1],Object(n.useState)("")),u=Object(s.a)(i,2),d=u[0],p=(u[1],Object(n.useState)(!1)),g=Object(s.a)(p,2),E=g[0],v=g[1],h=Object(n.useReducer)((function(e,t){switch(t.type){case"add":var a=document.querySelector(".name-input"),n=document.querySelector(".role-input"),c=document.querySelector(".git-input");return[].concat(Object(o.a)(e),[{id:Math.random(),name:t.name,person:a.value,role:n.value,git:c.value}]);case"remove":console.log("to be fixed");default:return e}}),[]),f=Object(s.a)(h,2),b=f[0],N=f[1];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card-collection"},[{id:1,name:"Eric",person:"Eric",role:"Instructor",image:"https://images.squarespace-cdn.com/content/v1/54b1df70e4b089270ed14cb5/1585071880672-6D753V75KMMBD8EWBFK5/ke17ZwdGBToddI8pDm48kPmAnfhQvqhMptgWHhbKoyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxHmI13PUQExzHe63IkveXOojHqdB-MF5SqgJGovDTk0l_7uBv7xs1F-MHtfbN3UJ8/generic-placeholder-person.png",git:"ThunderDucky"},{id:2,name:"Kate",person:"Kate",role:"CEO of all sharks",image:"https://cdn5.vectorstock.com/i/1000x1000/56/04/great-white-shark-black-concept-icon-great-vector-23245604.jpg",git:null},{id:3,name:"John",person:"John",role:"janitor",image:"https://www.iconspng.com/clipart/musical-dna-grayscale/musical-dna-grayscale.svg",git:"johnk9000"}].map((function(e){return c.a.createElement("div",{className:"card",key:e.id},c.a.createElement("div",{className:e.name},c.a.createElement("img",{src:e.image})),c.a.createElement("div",{className:"content"},c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("strong",null,"Name:")," ",e.person),c.a.createElement("li",{className:"list-group-item",key:e.id},c.a.createElement("strong",null,"Role:")," ",e.role),c.a.createElement("li",{className:"list-group-item",key:e.id},c.a.createElement("strong",null,"GitHub:")," ",c.a.createElement("a",{href:e.git}," ",e.git," ")))))})),b.map((function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:"https://images.squarespace-cdn.com/content/v1/54b1df70e4b089270ed14cb5/1585071880672-6D753V75KMMBD8EWBFK5/ke17ZwdGBToddI8pDm48kPmAnfhQvqhMptgWHhbKoyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxHmI13PUQExzHe63IkveXOojHqdB-MF5SqgJGovDTk0l_7uBv7xs1F-MHtfbN3UJ8/generic-placeholder-person.png"})),c.a.createElement("div",{className:"content"},c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item",key:e.id},c.a.createElement("strong",null,"Name:")," ",e.person),c.a.createElement("li",{className:"list-group-item",key:e.id},c.a.createElement("strong",null,"Role:")," ",e.role),c.a.createElement("li",{className:"list-group-item",key:e.id},c.a.createElement("strong",null,"GitHub:")," ",c.a.createElement("a",{href:e.git}," ",e.git," ")))))}))),c.a.createElement("div",{className:"form-cont"},c.a.createElement("div",null,c.a.createElement("button",{className:"toggle",onClick:function(e){e.preventDefault();var t=document.querySelector(".form-group");E?(t.classList.remove("hide"),v(!1)):(t.classList.add("hide"),v(!0))}}," ADD EMPLOYEE ")),c.a.createElement("div",{className:"form-group hide"},c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"name-input",name:"person",type:"text",placeholder:"Name"}),c.a.createElement("input",{className:"role-input",name:"role",type:"text",placeholder:"Role"}),c.a.createElement("input",{className:"git-input",name:"git",type:"text",placeholder:"Github Username"}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(e){e.preventDefault(),console.log(d.value),N({type:"add",index:t.current.value}),t.current.value=""},ref:t},"Submit")))))};a(15);var u=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};a(16);var d=function(){return c.a.createElement(u,null,c.a.createElement(m,null),c.a.createElement(i,null))};a(17);l.a.render(c.a.createElement(d,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.5995b0d2.chunk.js.map