(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(27),r=n.n(a),o=n(24),l=n(8),i=n(4),d=n(117),j=n(69),u={getToken:function(){var e=JSON.parse(localStorage.getItem("token"));return e||null},getId:function(){var e=this.getToken();return e?JSON.parse(atob(e.split(".")[1])).userId:null},getUsername:function(){var e=this.getToken();return e?JSON.parse(atob(e.split(".")[1])).username:null}},b=n(1),h=function(){var e=Object(l.h)(),t=Object(l.g)(),n=Object(c.useState)(null),s=Object(i.a)(n,2),a=s[0],r=s[1];Object(c.useEffect)((function(){u.getUsername()?r(u.getUsername()):r(null)}),[e]);return Object(b.jsx)("div",{className:"mb-5",children:Object(b.jsxs)(d.a,{bg:"secondary",expand:"sm",fixed:"top",className:"shadow",children:[Object(b.jsx)(d.a.Brand,{href:"/collection",children:"Reading Tracker"}),Object(b.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a?Object(b.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(j.a,{className:"mr-auto",children:[Object(b.jsxs)(j.a.Link,{href:"/collection",children:[a,"'s Books"]}),Object(b.jsx)(j.a.Link,{href:"/search",children:"Book Search"}),Object(b.jsx)(j.a.Link,{onClick:function(){localStorage.removeItem("token"),t.push("/")},children:"Logout"})]})}):null]})})},O=n(16),x=n.n(O),f=n(28),m=n(13),p=n.n(m),g={createUser:function(e){return p.a.post("/api/user/register",e)},login:function(e){return p.a.post("/api/user/login",e)},getBooks:function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://www.googleapis.com/books/v1/volumes?maxResults=40&q=".concat(t));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data.items);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addBook:function(e){return p.a.post("/api/book/add",e)},getUserBooks:function(e){return p.a.get("/api/book/"+e)},getSingleBook:function(e){return p.a.get("/api/book/individual/"+e)},updateBook:function(e){return p.a.put("/api/book/update",e)},deleteBook:function(e){return p.a.delete("/api/book/"+e)},addSession:function(e){return p.a.post("/api/session/add",e)},deleteSession:function(e){return p.a.delete("/api/session/"+e)},addQuote:function(e){return p.a.post("/api/quote/add",e)},deleteQuote:function(e){return p.a.delete("/api/quote/"+e)},verify:function(e){return p.a.get("/api/user/"+e)}},v=n(115),k=n(116),y=n(67),w=n(68),N=n(65),S=n.n(N),C=function(e){var t=e.show,n=e.handleClose,s=e.title,a=e.book,r=e.addReadingSession,o=Object(c.useState)(0),l=Object(i.a)(o,2),d=l[0],j=l[1],u=Object(c.useState)(null),h=Object(i.a)(u,2),O=h[0],x=h[1],f=Object(c.useState)(0),m=Object(i.a)(f,2),p=m[0],g=m[1],N=Object(c.useState)(0),C=Object(i.a)(N,2),L=C[0],B=C[1],I=Object(c.useState)(null),T=Object(i.a)(I,2),_=T[0],E=T[1],D=Object(c.useState)(null),G=Object(i.a)(D,2),q=G[0],P=G[1],U=Object(c.useState)((new Date).toLocaleDateString("pt-br").split("/").reverse().join("-")),R=Object(i.a)(U,2),F=R[0],H=R[1],M=function(){var e=F.split("-");return"".concat(e[1],"/").concat(e[2],"/").concat(e[0])};return Object(b.jsxs)(v.a,{show:t,onHide:n,centered:!0,children:[Object(b.jsx)(v.a.Header,{closeButton:!0,children:Object(b.jsxs)(v.a.Title,{children:[s," - Reading Session"]})}),Object(b.jsx)(v.a.Body,{children:Object(b.jsxs)(k.a,{children:[Object(b.jsxs)(k.a.Row,{children:[Object(b.jsxs)(k.a.Group,{as:y.a,children:[Object(b.jsx)(k.a.Label,{children:"Chapter reached:"}),Object(b.jsx)(k.a.Control,{type:"number",onChange:function(e){return x(+e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{as:y.a,children:[Object(b.jsx)(k.a.Label,{children:"Page reached:"}),Object(b.jsx)(k.a.Control,{type:"number",onChange:function(e){return j(+e.target.value)}})]})]}),Object(b.jsxs)(k.a.Row,{children:[Object(b.jsxs)(k.a.Group,{as:y.a,children:[Object(b.jsx)(k.a.Label,{children:"Location reached:"}),Object(b.jsx)(k.a.Control,{type:"number",onChange:function(e){return g(+e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{as:y.a,children:[Object(b.jsx)(k.a.Label,{children:"Percent reached:"}),Object(b.jsx)(k.a.Control,{type:"number",onChange:function(e){return B(+e.target.value)}})]})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"How long was your reading session:"}),Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsx)(S.a,{onChange:function(e){return E(e)},initialDuration:{hours:0,minutes:0,seconds:0}})})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Notes:"}),Object(b.jsx)(k.a.Control,{as:"textarea",rows:3,onChange:function(e){return P(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Date:"}),Object(b.jsx)(k.a.Control,{type:"date",defaultValue:F,onChange:function(e){return H(e.target.value)}})]})]})}),Object(b.jsxs)(v.a.Footer,{children:[Object(b.jsx)(w.a,{variant:"dark",onClick:n,children:"Close"}),Object(b.jsx)(w.a,{variant:"success",onClick:function(){var e={date:M()};d>0&&(e.page=d,0===L&&a.numPages>0&&(e.percent=Math.round(d/a.numPages*100))),O&&(e.chapter=O),p>0&&(e.location=p,0===L&&a.totalLocation>0&&(e.percent=Math.round(p/a.totalLocation*100))),L>0&&(e.percent=L),_&&(e.duration=_),q&&(e.notes=q),r(e),n()},children:"Save session"})]})]})},L=(n(103),function(e){var t=e.session,n=e.book,s=e.getBookInfo,a=e.reload,r=e.setReload,o=e.handleDelete,l=e.closeModal,d=Object(c.useState)(!1),j=Object(i.a)(d,2),u=j[0],h=j[1],O=Object(c.useState)(1),x=Object(i.a)(O,2),f=x[0],m=x[1],p=Object(c.useState)(null),v=Object(i.a)(p,2),k=v[0],y=v[1],w=Object(c.useState)(1),N=Object(i.a)(w,2),S=N[0],C=N[1],L=Object(c.useState)(null),B=Object(i.a)(L,2),I=B[0],T=B[1],_=Object(c.useState)(1),E=Object(i.a)(_,2),D=E[0],G=E[1],q=Object(c.useState)(null),P=Object(i.a)(q,2),U=P[0],R=P[1],F=Object(c.useState)(1),H=Object(i.a)(F,2),M=H[0],z=H[1],A=Object(c.useState)(null),K=Object(i.a)(A,2),Q=K[0],J=K[1],W=function(){g.deleteSession(t._id).then((function(e){1===n.sessions.length?g.updateBook({bookId:n._id,dataToUpdate:{status:"want to read"}}).then((function(e){s(),r(!a),l()})):(s(),r(!a),l())}))};Object(c.useEffect)((function(){var e=n.sessions.indexOf(t);e<n.sessions.length-1?(t.page&&(m(n.sessions[e+1].page),y(t.page-n.sessions[e+1].page)),t.chapter&&(C(n.sessions[e+1].chapter),T(t.chapter-n.sessions[e+1].chapter)),t.percent&&(G(n.sessions[e+1].percent),R(t.percent-n.sessions[e+1].percent)),t.location&&(z(n.sessions[e+1].location),J(t.location-n.sessions[e+1].location))):(y(t.page),T(t.chapter),R(t.percent),J(t.location))}),[]);var V={date:{fontSize:"20px",fontWeight:"bold"},highlight:{backgroundColor:"yellow",fontWeight:"bold"}};return Object(b.jsxs)("div",{className:"card shadow mb-2 pt-3 px-3",children:[Object(b.jsxs)("p",{style:V.date,children:[Object(b.jsx)("span",{className:u?"fas fa-chevron-down":"fas fa-chevron-right",onClick:function(){return h(!u)}})," ",t.date,Object(b.jsx)("span",{className:"trash far fa-trash-alt float-right pt-1",onClick:function(){return o(W)}})]}),u?Object(b.jsxs)("div",{children:[t.duration?Object(b.jsxs)("p",{children:["Time spent reading: ",Object(b.jsxs)("span",{style:V.highlight,children:[t.duration.hours," hours"," ",t.duration.minutes," minutes"]})]}):null,t.chapter?Object(b.jsxs)("p",{children:["Chapters read: ",Object(b.jsxs)("span",{style:V.highlight,children:[S," - ",t.chapter]})," (",I," chapters)"]}):null,t.page?Object(b.jsxs)("p",{children:["Pages read: ",Object(b.jsxs)("span",{style:V.highlight,children:[f," - ",t.page]})," (",k," pages)"]}):null,t.percent?Object(b.jsxs)("p",{children:["Percentage read: ",Object(b.jsxs)("span",{style:V.highlight,children:[D,"% - ",t.percent,"%"]})," (",U,"%)"]}):null,t.location?Object(b.jsxs)("p",{children:["Locations Read: ",Object(b.jsxs)("span",{style:V.highlight,children:[M," - ",t.location]})," (",Q," locations)"]}):null,t.notes?Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Notes:"}),Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:t.notes})})]}):null]}):null]})}),B=function(e){var t=e.show,n=e.handleClose,s=e.book,a=e.getBookInfo,r=Object(c.useState)(""),o=Object(i.a)(r,2),l=o[0],d=o[1],j=Object(c.useState)(null),u=Object(i.a)(j,2),h=u[0],O=u[1],x=Object(c.useState)(null),f=Object(i.a)(x,2),m=f[0],p=f[1],y=Object(c.useState)(null),N=Object(i.a)(y,2),S=N[0],C=N[1];return Object(b.jsxs)(v.a,{show:t,onHide:n,centered:!0,children:[Object(b.jsx)(v.a.Header,{closeButton:!0,children:Object(b.jsxs)(v.a.Title,{children:[s.title," - Add Quote"]})}),Object(b.jsx)(v.a.Body,{children:Object(b.jsxs)(k.a,{children:[Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Quote:"}),Object(b.jsx)(k.a.Control,{as:"textarea",rows:3,onChange:function(e){return d(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Character:"}),Object(b.jsx)(k.a.Control,{type:"text",onChange:function(e){return O(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Page Number:"}),Object(b.jsx)(k.a.Control,{type:"number",onChange:function(e){return p(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Location Number:"}),Object(b.jsx)(k.a.Control,{type:"number",onChange:function(e){return C(e.target.value)}})]})]})}),Object(b.jsxs)(v.a.Footer,{children:[Object(b.jsx)(w.a,{variant:"dark",onClick:n,children:"Close"}),Object(b.jsx)(w.a,{variant:"success",onClick:function(){if(""!==l){var e={quote:l};h&&(e.character=h),m&&(e.page=m),S&&(e.location=S),g.addQuote({quoteData:e,bookId:s._id}).then((function(e){console.log(e),a(),n()}))}else alert("No quote added")},children:"Save quote"})]})]})},I=function(e){var t=e.quote,n=e.getBookInfo,c=e.handleDelete,s=e.closeModal,a=function(){g.deleteQuote(t._id).then((function(e){console.log(e),n(),s()}))},r={format:{color:"white",width:"40vw",minWidth:"325px",paddingLeft:"50px",paddingRight:"50px",margin:"0 auto",textShadow:"5px 5px 15px black"},trash:{fontSize:"20px",fontWeight:"bold"},quotes:{fontSize:"50px",fontWeight:"bold"}};return Object(b.jsxs)("div",{style:{borderTop:"3px dashed white"},children:[Object(b.jsx)("span",{style:r.trash,className:"trash q far fa-trash-alt float-right shadow pt-3",onClick:function(){return c(a)}}),Object(b.jsxs)("div",{style:r.format,className:"my-3",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("p",{style:r.quotes,children:'"'})}),Object(b.jsx)("p",{className:"text-center",children:t.quote}),Object(b.jsx)("div",{className:"row d-flex justify-content-end",children:Object(b.jsx)("p",{style:r.quotes,children:'"'})}),t.character?Object(b.jsx)("div",{className:"row d-flex justify-content-end",children:Object(b.jsxs)("p",{children:["Character: ",t.character]})}):null,t.page?Object(b.jsx)("div",{className:"row d-flex justify-content-end",children:Object(b.jsxs)("p",{children:["Page: ",t.page]})}):null,t.location?Object(b.jsx)("div",{className:"row d-flex justify-content-end",children:Object(b.jsxs)("p",{children:["Location: ",t.location]})}):null]})]})},T=function(e){var t=e.show,n=e.handleClose,s=e.book,a=e.getBookInfo,r=Object(c.useState)(s.numPages),o=Object(i.a)(r,2),l=o[0],d=o[1],j=Object(c.useState)(s.totalLocation),u=Object(i.a)(j,2),h=u[0],O=u[1],x=Object(c.useState)(s.title),f=Object(i.a)(x,2),m=f[0],p=f[1],y=Object(c.useState)(s.author),N=Object(i.a)(y,2),S=N[0],C=N[1];return Object(b.jsxs)(v.a,{show:t,onHide:n,centered:!0,children:[Object(b.jsx)(v.a.Header,{closeButton:!0,children:Object(b.jsxs)(v.a.Title,{children:[s.title," - Settings"]})}),Object(b.jsx)(v.a.Body,{children:Object(b.jsxs)(k.a,{children:[Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Edit title:"}),Object(b.jsx)(k.a.Control,{type:"string",defaultValue:s.title,onChange:function(e){return p(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Edit author:"}),Object(b.jsx)(k.a.Control,{type:"string",defaultValue:s.author,onChange:function(e){return C(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Edit number of pages:"}),Object(b.jsx)(k.a.Control,{type:"number",defaultValue:l,onChange:function(e){return d(+e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{children:[Object(b.jsx)(k.a.Label,{children:"Edit number of locations:"}),Object(b.jsx)(k.a.Control,{type:"number",defaultValue:h,onChange:function(e){return O(+e.target.value)}})]})]})}),Object(b.jsxs)(v.a.Footer,{children:[Object(b.jsx)(w.a,{variant:"dark",onClick:n,children:"Close"}),Object(b.jsx)(w.a,{variant:"primary",onClick:function(){var e={};l&&l!==s.numPages&&(e.numPages=+l),h&&h!==s.totalLocation&&(e.totalLocation=+h),m!==s.title&&(e.title=m),S!==s.author&&(e.author=S),Object.keys(e).length>0&&g.updateBook({bookId:s._id,dataToUpdate:e}).then((function(e){console.log(e),a(),n()}))},children:"Save Settings"})]})]})},_=n(109),E=function(e){var t=e.book,n=e.current,s=void 0!==n&&n,a=Object(l.g)(),r=Object(c.useState)(t.title),o=Object(i.a)(r,2),d=o[0],j=o[1],u=Object(c.useState)(null),h=Object(i.a)(u,2),O=h[0],x=h[1];Object(c.useEffect)((function(){var e=t.title.split(" ");e.length>4&&(e.splice(4),j(e.join(" ")+"...")),s&&g.getSingleBook(t._id).then((function(e){e.data.sessions.length>0&&e.data.sessions[e.data.sessions.length-1].percent&&x(e.data.sessions[e.data.sessions.length-1].percent)}))}),[t]);var f={book:{cursor:"pointer",marginRight:"auto",marginLeft:"auto",width:"150px",height:"240px",position:"relative"},title:{textShadow:"2px 2px 20px black"},image:{boxShadow:"2px 2px 20px -5px black",height:"192px",width:"auto",position:"absolute",bottom:"0"},progress:{width:"150px",margin:"0 auto"}};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"mx-4 my-3",style:f.book,onClick:function(){a.push("/"+t._id)},children:[Object(b.jsx)("p",{className:"text-center",style:f.title,children:d}),Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsx)("img",{src:t.image,alt:"book cover",style:f.image})})]}),O?Object(b.jsx)(_.a,{now:O,label:"".concat(O,"%"),style:f.progress}):null]})},D=n(110),G=n(111),q=n(118),P=function(e){var t=e.reload,n=e.currentId,s=Object(c.useState)([]),a=Object(i.a)(s,2),r=a[0],o=a[1],l=Object(c.useState)([]),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(c.useState)([]),x=Object(i.a)(O,2),f=x[0],m=x[1],p=Object(c.useState)([]),v=Object(i.a)(p,2),k=v[0],y=v[1],w=Object(c.useState)([]),N=Object(i.a)(w,2),S=N[0],C=N[1],L=Object(c.useState)("current"),B=Object(i.a)(L,2),I=B[0],T=B[1];Object(c.useEffect)((function(){g.getUserBooks(u.getId()).then((function(e){o(e.data.books)}))}),[t]),Object(c.useEffect)((function(){r.length>0&&(h(r.filter((function(e){return"currently reading"===e.status})).sort((function(e,t){return e.title.localeCompare(t.title)}))),m(r.filter((function(e){return"want to read"===e.status})).sort((function(e,t){return e.title.localeCompare(t.title)}))),y(r.filter((function(e){return"done reading"===e.status})).sort((function(e,t){return e.title.localeCompare(t.title)}))))}),[r]),Object(c.useEffect)((function(){return"current"===I&&j.length>0?C(j):"future"===I&&f.length>0?C(f):"done"===I&&k.length>0?C(k):void(j.length>0?T("current"):f.length>0?T("future"):T("done"))}),[j,f,k]),Object(c.useEffect)((function(){switch(console.log("changed"),I){case"current":return C(j);case"future":return C(f);case"done":return C(k);default:return}}),[I]);var _=function(e){switch(e){case"Current":j.length>0&&T("current");break;case"Future":f.length>0&&T("future");break;default:k.length>0&&T("done")}},P={sidebar:{background:"white",position:"fixed",top:"56px",left:"0",height:"100%",overflowY:"scroll",boxShadow:"1px 2px 10px black",maxWidth:"200px"},buttons:{position:"fixed",right:"0",left:"0",marginLeft:"auto",marginRight:"auto",width:"98.5%",zIndex:"2"},books:{margin:"0 auto",marginTop:"40px",marginBottom:"80px"}};return Object(b.jsxs)("div",{style:P.sidebar,children:[Object(b.jsx)("div",{className:"mt-1",style:P.buttons,children:Object(b.jsxs)(D.a,{size:"sm",toggle:!0,children:[Object(b.jsx)(G.a,{type:"radio",checked:S===j,className:0===j.length?"toggle disabled":"toggle",onClick:function(){return _("Current")},children:"Current"}),Object(b.jsx)(G.a,{type:"radio",checked:S===f,className:0===f.length?"toggle disabled":"toggle",onClick:function(){return _("Future")},children:"Future"}),Object(b.jsx)(G.a,{type:"radio",checked:S===k,className:0===k.length?"toggle disabled":"toggle",onClick:function(){return _("Done")},children:"Done"})]})}),Object(b.jsx)(q.a,{variant:"flush",style:P.books,children:S.map((function(e){return Object(b.jsx)(q.a.Item,{className:n===e._id?"active":null,children:Object(b.jsx)("div",{className:"row d-flex justify-content-center mt-n4",children:Object(b.jsx)(E,{book:e})})},e._id)}))})]})},U=function(e){var t=e.show,n=e.close,c=e.handleDelete;return Object(b.jsxs)(v.a,{show:t,onHide:n,centered:!0,children:[Object(b.jsx)(v.a.Header,{closeButton:!0,children:Object(b.jsx)(v.a.Title,{children:"Confirm delete?"})}),Object(b.jsx)(v.a.Body,{children:Object(b.jsx)("p",{children:"This action is irreversible."})}),Object(b.jsxs)(v.a.Footer,{children:[Object(b.jsx)("button",{className:"btn btn-dark",onClick:n,children:"Close"}),Object(b.jsx)("button",{className:"btn btn-lg btn-danger",onClick:c,children:"Delete"})]})]})},R=n(112),F=n(113),H=n(114),M=function(){var e=Object(l.g)(),t=Object(l.i)().bookId,n=Object(c.useState)(null),s=Object(i.a)(n,2),a=s[0],r=s[1],o=Object(c.useState)(!1),d=Object(i.a)(o,2),j=d[0],u=d[1],h=Object(c.useState)(!1),O=Object(i.a)(h,2),x=O[0],f=O[1],m=Object(c.useState)(!1),p=Object(i.a)(m,2),v=p[0],k=p[1],y=Object(c.useState)([]),w=Object(i.a)(y,2),N=w[0],S=w[1],_=Object(c.useState)(null),E=Object(i.a)(_,2),D=E[0],G=E[1],q=Object(c.useState)([]),M=Object(i.a)(q,2),z=M[0],A=M[1],K=Object(c.useState)(!1),Q=Object(i.a)(K,2),J=Q[0],W=Q[1],V=Object(c.useState)(!1),Y=Object(i.a)(V,2),X=Y[0],Z=Y[1],$=Object(c.useState)(!0),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(!1),se=Object(i.a)(ce,2),ae=se[0],re=se[1],oe=Object(c.useState)(null),le=Object(i.a)(oe,2),ie=le[0],de=le[1],je=function(){return re(!1)};Object(c.useEffect)((function(){ue()}),[t]);var ue=function(){g.getSingleBook(t).then((function(e){r(e.data),S(e.data.sessions.reverse()),A(e.data.quotes);var t={hours:0,minutes:0,seconds:0};if(e.data.sessions.forEach((function(e){t.hours+=e.duration.hours,t.minutes+=e.duration.minutes,t.seconds+=e.duration.seconds})),t.seconds>59){var n=Math.floor(t.seconds/60);t.minutes+=n,t.seconds-=60*n}if(t.minutes>59){var c=Math.floor(t.minutes/60);t.hours+=c,t.minutes-=60*c}G(t),"done reading"===e.data.status?Z(!0):Z(!1)}))};Object(c.useEffect)((function(){N.length>0&&(100==N[0].percent?g.updateBook({bookId:a._id,dataToUpdate:{status:"done reading"}}):N[0].percent>0&&N[0].percent<100&&"currently reading"!==a.status&&g.updateBook({bookId:a._id,dataToUpdate:{status:"currently reading"}}))}),[N]),Object(c.useEffect)((function(){0===z.length&&W(!1)}),[z]);var be=function(){g.deleteBook(a._id).then((function(t){e.push("/collection")})),ne(!te),je()},he=function(e){de((function(){return e})),re(!0)};if(!a||!D)return Object(b.jsx)("div",{className:"row d-flex justify-content-center pt-5",children:Object(b.jsx)(R.a,{animation:"border"})});var Oe={page:{marginRight:"5vw"},delete:{zIndex:"5"},image:{boxShadow:"2px 2px 20px -5px black"},highlight:{backgroundColor:"yellow"},quote:{fontSize:"20px",fontWeight:"bold",color:"white"}};return Object(b.jsxs)("div",{className:"mb-3 container",children:[Object(b.jsx)(C,{show:j,handleClose:function(){return u(!1)},title:a.title,book:a,addReadingSession:function(e){g.addSession({session:e,bookId:a._id}).then((function(e){0===N.length?g.updateBook({bookId:a._id,dataToUpdate:{status:"currently reading"}}).then((function(e){ue()})):ue(),ne(!te)}))}}),Object(b.jsx)(B,{show:x,handleClose:function(){return f(!1)},book:a,getBookInfo:ue}),Object(b.jsx)(T,{show:v,handleClose:function(){return k(!1)},book:a,getBookInfo:ue}),Object(b.jsx)(U,{show:ae,close:je,handleDelete:ie}),Object(b.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(b.jsx)("div",{className:"col-2 sidebar",children:Object(b.jsx)(P,{reload:te,currentId:t})}),Object(b.jsxs)("div",{className:"col-12 col-md-10",children:[Object(b.jsx)("h1",{className:"text-center mt-4",children:a.title}),Object(b.jsx)("h2",{className:"text-center mt-2",children:a.author}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)("button",{className:"btn btn-danger mt-2",onClick:function(){return he(be)},children:"Delete book from collection"})}),Object(b.jsxs)("div",{className:"row mt-4 mb-4 align-items-center",children:[Object(b.jsxs)("div",{className:"col-12 col-md-3",children:[Object(b.jsx)("div",{className:"row d-flex justify-content-center justify-content-md-start",children:Object(b.jsxs)("a",{href:a.infoLink,target:"_blank",children:[" ",Object(b.jsx)("img",{src:a.image,alt:"book cover",style:Oe.image})]})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center justify-content-md-start",children:Object(b.jsx)("button",{className:"btn btn-lg btn-info mt-2 mb-2 mb-md-0 ml-1",onClick:function(){return f(!0)},children:"Add quote"})})]}),Object(b.jsxs)("div",{className:"card shadow mb-3 col-12 col-md-9 text-center text-md-left",children:[Object(b.jsxs)("h3",{className:"card-title",children:[X?"Done reading!":"Current progress:",Object(b.jsx)("span",{className:"cog fa fa-ellipsis-h float-right mt-1",onClick:function(){return k(!0)}})]}),N.length>0?Object(b.jsxs)("div",{children:[N[0].chapter?Object(b.jsxs)("h5",{children:["Chapters read:"," ",Object(b.jsx)("span",{style:Oe.highlight,children:N[0].chapter})]}):null,N[0].page?Object(b.jsxs)("h5",{children:["Pages read:"," ",Object(b.jsxs)("span",{style:Oe.highlight,children:[N[0].page," ",a.numPages>0?"/ ".concat(a.numPages):null]})]}):null,N[0].location?Object(b.jsxs)("h5",{children:["Current location:"," ",Object(b.jsxs)("span",{style:Oe.highlight,children:[N[0].location," ",a.totalLocation>0?"/ ".concat(a.totalLocation):null]})]}):null,N[0].percent?Object(b.jsxs)("h5",{children:["Percentage read:"," ",Object(b.jsxs)("span",{style:Oe.highlight,children:[N[0].percent,"%"]})]}):null,Object(b.jsxs)("h5",{children:["Time read:"," ",Object(b.jsxs)("span",{style:Oe.highlight,children:[D.hours," hours ",D.minutes," minutes"]})]}),Object(b.jsxs)("h6",{children:[X?"Completed on:":"Last read on:"," ",N[0].date]}),Object(b.jsxs)("h6",{children:["Total reading sessions: ",N.length]})]}):Object(b.jsx)("p",{children:"No reading sessions recorded"}),Object(b.jsx)("button",{className:"btn btn-lg btn-success mb-3",onClick:function(){return u(!0)},children:"Add reading session"})]})]}),Object(b.jsxs)(F.a,{children:[Object(b.jsx)(H.a,{eventKey:"bookInfo",title:"Description",children:Object(b.jsx)("div",{className:"card shadow pt-4 px-3 pb-2 mb-2",children:Object(b.jsx)("p",{children:a.description})})}),Object(b.jsx)(H.a,{eventKey:"sessions",title:"Sessions",disabled:!(N.length>0),children:N.length>0?N.map((function(e){return Object(b.jsx)(L,{session:e,book:a,getBookInfo:ue,reload:te,setReload:ne,handleDelete:he,closeModal:je},e._id)})):null}),Object(b.jsx)(H.a,{eventKey:"quotes",title:"Quotes",disabled:!(z.length>0),children:z.length>0?Object(b.jsxs)("div",{className:"card shadow bg-dark mb-2 pt-3 px-3",children:[Object(b.jsxs)("p",{style:Oe.quote,children:[Object(b.jsx)("span",{className:J?"fas fa-chevron-down":"fas fa-chevron-right",onClick:function(){return W(!J)}})," ","Quotes"]}),J?z.map((function(e){return Object(b.jsx)(I,{quote:e,getBookInfo:ue,handleDelete:he,closeModal:je},e._id)})):null]}):null})]})]})]})]})},z=function(){var e=Object(l.g)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),d=o[0],j=o[1],u=Object(c.useState)(!1),h=Object(i.a)(u,2),O=h[0],x=h[1],f=Object(c.useState)(null),m=Object(i.a)(f,2),p=m[0],v=m[1],y=function(t){t.preventDefault(),v(null),x(!0),g.login({username:s,password:d}).then((function(t){console.log(t),t.data.success?(localStorage.setItem("token",JSON.stringify(t.data.token)),e.push("/collection")):(x(!1),v(t.data.message))}))};return Object(b.jsxs)("div",{className:"container pt-3",children:[Object(b.jsx)("h2",{className:"text-center mt-2",children:"Sign In"}),Object(b.jsxs)(k.a,{style:{width:"200px",margin:"0 auto"},className:"mt-3",onSubmit:y,children:[Object(b.jsxs)(k.a.Group,{className:"row d-flex justify-content-center align-items-center mb-3",children:[Object(b.jsx)(k.a.Label,{children:"Username: "}),Object(b.jsx)(k.a.Control,{type:"text",className:"text-center shadow",onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{className:"row d-flex justify-content-center align-items-center ",children:[Object(b.jsx)(k.a.Label,{children:"Password: "}),Object(b.jsx)(k.a.Control,{type:"password",className:"text-center shadow",onChange:function(e){return j(e.target.value)}})]}),Object(b.jsx)("div",{className:"row d-flex justify-content-center mt-4",children:Object(b.jsx)("button",{className:"btn btn-lg btn-dark",onClick:y,children:"Login"})})]}),O?Object(b.jsx)("div",{className:"row d-flex justify-content-center pt-3",children:Object(b.jsx)(R.a,{animation:"border"})}):Object(b.jsxs)("p",{className:"text-center mt-2",children:["Don't have an account? Register ",Object(b.jsx)("a",{href:"/register",children:"here"})]}),p?Object(b.jsx)("p",{className:"text-center",style:{color:"red"},children:p}):null]})},A=function(){var e=Object(l.g)(),t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),d=o[0],j=o[1],u=Object(c.useState)(""),h=Object(i.a)(u,2),O=h[0],x=h[1],f=Object(c.useState)(!1),m=Object(i.a)(f,2),p=m[0],v=m[1],y=Object(c.useState)(null),w=Object(i.a)(y,2),N=w[0],S=w[1],C=function(t){t.preventDefault(),S(null),v(!0),g.createUser({email:s,username:d,password:O}).then((function(t){console.log(t.data),t.data.success?g.login({username:d,password:O}).then((function(t){console.log(t),t.data.success?(localStorage.setItem("token",JSON.stringify(t.data.token)),e.push("/collection")):(v(!1),S(t.data.message))})):(v(!1),S(t.data.message))}))};return Object(b.jsxs)("div",{className:"container pt-3",children:[Object(b.jsx)("h2",{className:"text-center mt-2",children:"Create Account"}),Object(b.jsxs)(k.a,{style:{width:"200px",margin:"0 auto"},className:"mt-3",onSubmit:C,children:[Object(b.jsxs)(k.a.Group,{className:"row d-flex justify-content-center align-items-center mb-3",children:[Object(b.jsx)(k.a.Label,{children:"Email Address: "}),Object(b.jsx)(k.a.Control,{type:"email",className:"text-center shadow",onChange:function(e){return a(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{className:"row d-flex justify-content-center align-items-center mb-3",children:[Object(b.jsx)(k.a.Label,{children:"Username: "}),Object(b.jsx)(k.a.Control,{type:"text",className:"text-center shadow",onChange:function(e){return j(e.target.value)}})]}),Object(b.jsxs)(k.a.Group,{className:"row d-flex justify-content-center align-items-center ",children:[Object(b.jsx)(k.a.Label,{children:"Password: "}),Object(b.jsx)(k.a.Control,{type:"password",className:"text-center shadow",onChange:function(e){return x(e.target.value)}})]}),Object(b.jsx)("div",{className:"row d-flex justify-content-center mt-5",children:Object(b.jsx)("button",{className:"btn btn-lg btn-dark",onClick:C,children:"Create Account"})})]}),p?Object(b.jsx)("div",{className:"row d-flex justify-content-center pt-3",children:Object(b.jsx)(R.a,{animation:"border"})}):Object(b.jsxs)("p",{className:"text-center mt-2",children:["Already have an account? Sign in ",Object(b.jsx)("a",{href:"/",children:"here"})]}),N?Object(b.jsx)("p",{className:"text-center",style:{color:"red"},children:N}):null]})},K=function(e){var t=e.book,n=e.reloadSearch,s=Object(c.useState)(t.description),a=Object(i.a)(s,2),r=a[0],o=a[1],l=Object(c.useState)(!1),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(c.useState)(null),x=Object(i.a)(O,2),f=x[0],m=x[1];Object(c.useEffect)((function(){var e;if((null===(e=t.description)||void 0===e?void 0:e.split(" ").length)>75){var n=t.description.split(" ");n.splice(75),o(n.join(" ")+"...")}g.getUserBooks(u.getId()).then((function(e){e.data.books.map((function(e){return e.googleId})).includes(t.id)&&(h(!0),e.data.books.forEach((function(e){e.googleId===t.id&&m(e._id)})))}))}),[t]);return Object(b.jsxs)("div",{className:"card shadow p-3 mb-3",children:[Object(b.jsxs)("div",{className:"row my-4 align-items-center",children:[Object(b.jsxs)("div",{className:"col-12 col-md-4",children:[Object(b.jsx)("h2",{className:"text-center",children:t.title}),t.authors?Object(b.jsx)("h4",{className:"text-center",children:t.authors[0]}):null,Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)("a",{href:t.infoLink,target:"_blank",children:Object(b.jsx)("img",{src:t.imageLinks?t.imageLinks.smallThumbnail:"https://bit.ly/31OKFsp",alt:"book image",style:{boxShadow:"2px 2px 20px -5px black"}})})})]}),Object(b.jsxs)("div",{className:"col-12 col-md-8 mt-3 mt-md-0",children:[Object(b.jsx)("p",{children:t.description?r:"No description on file"}),Object(b.jsxs)("p",{className:"text-center text-md-left",children:["Number of pages: ",t.pageCount]})]})]}),Object(b.jsx)("div",{className:"row d-flex justify-content-center justify-content-md-end mr-md-3",children:j?Object(b.jsx)("a",{href:"/".concat(f),children:Object(b.jsx)("button",{className:"btn btn-lg btn-warning mt-md-n5",children:"Go to progress page"})}):Object(b.jsx)("button",{className:"btn btn-lg btn-primary mt-md-n5",onClick:function(){var e={title:t.title,author:t.authors?t.authors[0]:null,image:t.imageLinks?t.imageLinks.smallThumbnail:"https://bit.ly/31OKFsp",description:t.description?t.description:"No description on file",infoLink:t.infoLink,googleId:t.id,numPages:t.pageCount};g.addBook({bookData:e,userId:u.getId()}).then((function(e){return n()}))},children:"Add to collection"})})]})},Q=n.p+"static/media/google.8bba0579.png",J=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),r=Object(i.a)(a,2),o=r[0],l=r[1],d=Object(c.useState)(null),j=Object(i.a)(d,2),u=j[0],h=j[1],O=Object(c.useState)(null),m=Object(i.a)(O,2),p=(m[0],m[1],Object(c.useState)(0)),v=Object(i.a)(p,2),k=v[0],y=v[1],w=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,c,s,a,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.split(" ").join("-"),e.next=3,g.getBooks(n);case 3:for(c=e.sent,(s=c.map((function(e){return e.volumeInfo}))).forEach((function(e,t){e.id=c[t].id})),a=[],r=0;r<s.length;)o=s.slice(r,r+10),a.push(o),r+=10;console.log(a),h(a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),w(n),l(n),s("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(o);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C={image:{transform:"scale(.4)",marginTop:"-40px"},paginate:{cursor:"pointer",color:"blue",border:"1px solid black",marginLeft:".5px",backgroundColor:"white"}};return Object(b.jsxs)("div",{className:"container pt-4",children:[Object(b.jsxs)("form",{className:"row d-flex justify-content-center align-items-center mb-4",onSubmit:N,children:[Object(b.jsx)("label",{className:"pt-2",children:"Enter book title: "}),Object(b.jsx)("input",{type:"text",className:"ml-1",value:n,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("button",{type:"submit",className:"btn btn-dark ml-2",onClick:N,children:"Search"})]}),Object(b.jsx)("div",{className:"row d-flex justify-content-center",children:Object(b.jsx)("img",{src:Q,alt:"google logo",style:C.image})}),u?u[k].map((function(e,t){return Object(b.jsx)(K,{book:e,reloadSearch:S},t)})):null,Object(b.jsx)("div",{className:"row d-flex justify-content-center mb-5 mt-4",children:u?u.map((function(e,t){return Object(b.jsx)("p",{className:"px-2 "+(k===t?"font-weight-bolder":null),style:C.paginate,onClick:function(){return function(e){y(e),window.scrollTo(0,0)}(t)},children:t+1})})):null})]})},W=(n(105),function(e){var t=e.Component,n=Object(c.useState)(!1),s=Object(i.a)(n,2),a=s[0],r=s[1],o=Object(c.useState)(null),d=Object(i.a)(o,2),j=d[0],h=d[1];return Object(c.useEffect)(Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.verify(u.getToken()).then((function(e){e.data.success?h(!0):h(!1)}));case 2:r(!0);case 3:case"end":return e.stop()}}),e)}))),[]),a?j?Object(b.jsx)(t,{}):Object(b.jsx)(l.a,{to:"/"}):Object(b.jsx)("div",{className:"row d-flex justify-content-center pt-5",children:Object(b.jsx)(R.a,{animation:"border"})})}),V=(n(106),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(i.a)(a,2),o=r[0],l=r[1],d=Object(c.useState)([]),j=Object(i.a)(d,2),h=j[0],O=j[1],x=Object(c.useState)([]),f=Object(i.a)(x,2),m=f[0],p=f[1];Object(c.useEffect)((function(){g.getUserBooks(u.getId()).then((function(e){console.log(e),s(e.data.books)}))}),[]),Object(c.useEffect)((function(){n.length>0&&(l(n.filter((function(e){return"currently reading"===e.status})).sort((function(e,t){return e.title.localeCompare(t.title)}))),O(n.filter((function(e){return"want to read"===e.status})).sort((function(e,t){return e.title.localeCompare(t.title)}))),p(n.filter((function(e){return"done reading"===e.status})).sort((function(e,t){return e.title.localeCompare(t.title)}))))}),[n]);var v={top:{textShadow:"2px 2px 40px black"},card:{height:"80vh",overflowY:"scroll",position:"relative"},cardSm:{overflowY:"scroll",position:"relative",height:"78vh",width:"80vw"},header:{zIndex:"4",backgroundColor:"rgba(213, 213, 213, 0.899)"}};return Object(b.jsxs)("div",{className:"container-fluid pt-3",children:[Object(b.jsx)("h1",{className:"text-center",style:v.top,children:"Book Collection"}),n.length>0?Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"row d-flex justify-content-center mt-3 collection-bg",children:[o.length>0?Object(b.jsxs)("div",{className:"col card shadow mx-2",style:v.card,children:[Object(b.jsx)("div",{className:"row d-flex justify-content-center mb-2",children:Object(b.jsx)("h5",{className:"text-center card-header shadow mt-2 position-fixed",style:v.header,children:"Currently reading"})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center my-5",children:o.map((function(e){return Object(b.jsx)(E,{book:e,current:!0},e._id)}))})]}):null,h.length>0?Object(b.jsxs)("div",{className:"col card shadow mx-2",style:v.card,children:[Object(b.jsx)("div",{className:"row d-flex justify-content-center mb-2",children:Object(b.jsx)("h5",{className:"text-center card-header shadow mb-n2 mt-2 position-fixed",style:v.header,children:"Books I plan to read"})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center my-5",children:h.map((function(e){return Object(b.jsx)(E,{book:e},e._id)}))})]}):null,m.length>0?Object(b.jsxs)("div",{className:"col card shadow mx-2",style:v.card,children:[Object(b.jsx)("div",{className:"row d-flex justify-content-center mb-2",children:Object(b.jsx)("h5",{className:"text-center card-header shadow mb-n2 mt-2 position-fixed",style:v.header,children:"Books I've read"})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center my-5",children:m.map((function(e){return Object(b.jsx)(E,{book:e},e._id)}))})]}):null]}),Object(b.jsx)("div",{className:"collection-sm row d-flex justify-content-center",children:Object(b.jsxs)(F.a,{children:[Object(b.jsx)(H.a,{eventKey:"current",title:"Current",disabled:!(o.length>0),children:o.length>0?Object(b.jsxs)("div",{className:"col card shadow",style:v.cardSm,children:[Object(b.jsx)("div",{className:"row d-flex justify-content-center mb-2",children:Object(b.jsx)("h5",{className:"text-center card-header shadow mt-2 position-fixed",style:v.header,children:"Currently reading"})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center my-5",children:o.map((function(e){return Object(b.jsx)(E,{book:e,current:!0},e._id)}))})]}):null}),Object(b.jsx)(H.a,{eventKey:"future",title:"Future",disabled:!(h.length>0),children:h.length>0?Object(b.jsxs)("div",{className:"col card shadow",style:v.cardSm,children:[Object(b.jsx)("div",{className:"row d-flex justify-content-center mb-2",children:Object(b.jsx)("h5",{className:"text-center card-header shadow mb-n2 mt-2 position-fixed",style:v.header,children:"Books I plan to read"})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center my-5",children:h.map((function(e){return Object(b.jsx)(E,{book:e},e._id)}))})]}):null}),Object(b.jsx)(H.a,{eventKey:"done",title:"Done",disabled:!(m.length>0),children:m.length>0?Object(b.jsxs)("div",{className:"col card shadow",style:v.cardSm,children:[Object(b.jsx)("div",{className:"row d-flex justify-content-center mb-2",children:Object(b.jsx)("h5",{className:"text-center card-header shadow mb-n2 mt-2 position-fixed",style:v.header,children:"Books I've read"})}),Object(b.jsx)("div",{className:"row d-flex justify-content-center my-5",children:m.map((function(e){return Object(b.jsx)(E,{book:e},e._id)}))})]}):null})]})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"text-center my-3",children:"No books added to your collection"}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)("a",{href:"/search",children:Object(b.jsx)("button",{className:"btn btn-lg btn-info",children:"Search for books"})})})]})]})});var Y=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",component:z}),Object(b.jsx)(l.b,{exact:!0,path:"/register",component:A}),Object(b.jsx)(l.b,{exact:!0,path:"/search",children:Object(b.jsx)(W,{Component:J})}),Object(b.jsx)(l.b,{exact:!0,path:"/collection",children:Object(b.jsx)(W,{Component:V})}),Object(b.jsx)(l.b,{exact:!0,path:"/:bookId",children:Object(b.jsx)(W,{Component:M})})]})]})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(Y,{})}),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.ef742f43.chunk.js.map