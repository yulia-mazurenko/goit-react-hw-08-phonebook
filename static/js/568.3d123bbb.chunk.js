"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568],{2568:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r,o,i,a,s,l,c,d,x=t(9439),u=t(5946),p=t(2899),m=t(4087),f=t(4224),h=t(9229),g=t(9434),b=t(3204),j=t(3541),y=t(4548),v=t(5969),w=t(9283),Z=t(184),C=function(n){var e=n.contactName,t=n.number,r=n.id,o=(0,g.I0)();return(0,Z.jsx)(j.aV,{children:(0,Z.jsxs)(j.HC,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsxs)(m.xu,{display:"flex",alignItems:"center",justifyContent:"space-between",gap:3,children:[(0,Z.jsx)(y.q,{bg:"yellow.300",size:"xs"}),(0,Z.jsxs)(m.xu,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsxs)("p",{children:[e,":"]}),(0,Z.jsx)("p",{children:t})]})]}),(0,Z.jsx)(f.z,{type:"button",variant:"ghost",colorScheme:"blue",rightIcon:(0,Z.jsx)(v.p,{}),cursor:"pointer",onClick:function(){return o((0,w.GK)(r))}})]})})},z=function(n){var e=n.contacts.filter.toLowerCase();return n.contacts.contacts.items.filter((function(n){return n.name.toLowerCase().includes(e)}))},_=function(n){return n.contacts.contacts.isLoading},k=function(n){return n.contacts.contacts.error},I=function(n){return n.contacts.filter},S=t(2791),F=function(){return(0,Z.jsx)("div",{children:(0,Z.jsxs)("p",{children:["Something went wrong :(",(0,Z.jsx)("br",{}),"Try again"]})})},N=function(){var n=(0,g.v9)(z),e=(0,g.v9)(_),t=(0,g.v9)(k),r=(0,g.I0)();return(0,S.useEffect)((function(){r((0,w.yF)())}),[r]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,Z.jsx)(C,{id:r,contactName:e,number:t},r)}))}),e&&(0,Z.jsx)(b.$,{}),t&&(0,Z.jsx)(F,{})]})},A=t(7697),q=t(4890),T=function(){var n=(0,g.I0)(),e=(0,g.v9)(I);return(0,Z.jsxs)(m.xu,{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-around",gap:2,w:"200px",as:"label",children:["Find contacts by name:",(0,Z.jsx)(A.I,{type:"text",size:"sm",value:e,borderColor:"rgba(238, 238, 8, 1)",onChange:function(e){return n((0,q.x)(e.currentTarget.value))}})]})},D=t(6856),R=t(1413),B=t(5705),J=t(1724),L=t(5984),P=function(n){var e=n.name;return(0,Z.jsx)(B.Bc,{name:e,render:function(n){return(0,Z.jsx)("p",{children:n})}})},K=t(168),V=t(225),X=t(3587),$=t.n(X),E=(0,V.Z)(B.l0)(r||(r=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 250px;\n"]))),G=V.Z.label(o||(o=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n"]))),H=(0,V.Z)(B.gN)(i||(i=(0,K.Z)(["\n  width: 250px;\n  padding-left: 8px;\n  padding-right: 8px;\n  box-sizing: border-box;\n  border: 1px solid;\n  border-color: rgba(238, 238, 8, 1);\n  border-radius: 5px;\n  font-family: Roboto, sans-serif;\n\n  ::placeholder {\n    font-size: 12px;\n  }\n\n  &:focus,\n  &:hover,\n  &:active {\n    outline: 0;\n    border: 2px solid;\n    border-color: rgba(66, 153, 225, 0.6);\n  }\n"]))),M=(0,V.Z)($())(a||(a=(0,K.Z)(["\n  width: 250px;\n  padding-left: 8px;\n  padding-right: 8px;\n  box-sizing: border-box;\n  border: 1px solid;\n  border-color: rgba(238, 238, 8, 1);\n  border-radius: 5px;\n  font-family: Roboto, sans-serif;\n\n  &:focus,\n  &:hover,\n  &:active {\n    outline: 0;\n    border: 2px solid;\n    border-color: rgba(66, 153, 225, 0.6);\n  }\n"]))),U=["(",/[0-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/],O=J.Ry().shape({name:J.Z_().required("Please, enter correct name"),number:J.Z_().required("Please, check the correctness of phone number")}),Q={name:"",number:""};function W(n){var e=n.onClose,t=(0,L.x0)(),r=(0,L.x0)(),o=(0,g.I0)();return(0,Z.jsx)(B.J9,{initialValues:Q,validationSchema:O,onSubmit:function(n,t){var r=t.resetForm,i=n.name.split(" ").map((function(n){return n[0].toUpperCase()+n.slice(1,n.length)})).join(" ");o((0,w.uK)((0,R.Z)((0,R.Z)({},n),{},{name:i}))),r(),e()},children:(0,Z.jsxs)(E,{children:[(0,Z.jsxs)(G,{htmlFor:t,children:["Name",(0,Z.jsx)(H,{placeholder:"John Snow",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:t,required:!0}),(0,Z.jsx)(P,{name:"name"})]}),(0,Z.jsxs)(G,{htmlFor:r,children:["Number",(0,Z.jsx)(B.gN,{name:"number",children:function(n){var e=n.field;return(0,Z.jsx)(M,(0,R.Z)((0,R.Z)({id:r,required:!0,type:"tel",mask:U},e),{},{placeholder:"(___) ___-__-__"}))}}),(0,Z.jsx)(P,{name:"number"})]}),(0,Z.jsx)(f.z,{type:"submit",colorScheme:"yellow",mt:2,ml:"auto",mr:"auto",w:"150px",children:"Save contact"})]})})}var Y=V.Z.div(s||(s=(0,K.Z)(["\n  @media screen and (max-width: 479px) {\n    position: fixed;\n    width: 600px;\n    height: 600px;\n  }\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 99;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  margin-right: auto;\n  margin-left: auto;\n  background-color: rgb(190 197 203 / 88%); ;\n"]))),nn=V.Z.div(l||(l=(0,K.Z)(["\n  @media screen and (max-width: 479px) {\n    position: fixed;\n    top: 25%;\n  }\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 999;\n  width: 350px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  padding-bottom: 20px;\n  border-radius: 10px;\n  outline: 1px solid rgba(66, 153, 225, 0.6);\n  background-color: #ffffff;\n"]))),en=V.Z.button(c||(c=(0,K.Z)(["\n  position: absolute;\n  top: 12px;\n  right: 12px;\n"]))),tn=V.Z.h2(d||(d=(0,K.Z)(["\n  padding-top: 16px;\n  padding-bottom: 8px;\n  color: #3950af;\n  text-align: center;\n"])));function rn(n){var e=n.onToggle;return(0,Z.jsx)(Y,{children:(0,Z.jsxs)(nn,{children:[(0,Z.jsx)(tn,{children:"Create new contact"}),(0,Z.jsx)(W,{onClose:e}),(0,Z.jsx)(en,{"aria-label":"close",onClick:e,children:(0,Z.jsx)(D.lTq,{})})]})})}var on=t(9126),an=function(){var n=(0,g.v9)(z),e=(0,S.useState)(!1),t=(0,x.Z)(e,2),r=t[0],o=t[1],i=function(){o(!r)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(u.X,{size:"lg",textAlign:"center",pt:2,pb:4,children:"PhoneBook"}),(0,Z.jsx)("hr",{style:{border:"1px solid rgba(66, 153, 225, 0.6)",width:"100%"}}),(0,Z.jsxs)(p.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",w:"600px",boxShadow:"lg",borderTopRadius:"0",px:4,gap:3,children:[(0,Z.jsxs)(m.xu,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",mb:5,mt:3,gap:5,children:[(0,Z.jsxs)(f.z,{type:"button",onClick:i,colorScheme:"yellow",mt:2,ml:"auto",mr:"auto",w:"180px",gap:"8px",children:[(0,Z.jsx)(on.im1,{}),(0,Z.jsx)(h.x,{children:"Add new contact"})]}),r&&(0,Z.jsx)(rn,{onToggle:i}),(0,Z.jsx)(T,{})]}),(0,Z.jsxs)(m.xu,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",pb:3,children:[n.length>0?(0,Z.jsx)(u.X,{size:"md",py:2,children:"Contacts"}):(0,Z.jsx)(h.x,{children:"No contacts"}),(0,Z.jsx)(N,{})]})]})]})}}}]);
//# sourceMappingURL=568.3d123bbb.chunk.js.map