(this["webpackJsonpwebsite-project"]=this["webpackJsonpwebsite-project"]||[]).push([[0],{103:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),i=n.n(r),c=(n(103),n(35)),o=n(12),u=n(14),l=n(52),d=n(51),h=(n(66),n(82)),j=n(5);function b(e){for(var t=[],n=0,a=0;a<e.length;a++)n+=e[a],t[a]=n;return t}var v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)(h.Line,{data:(e=this.props.data,t=this.props.dates,{labels:t,datasets:[{label:"Total distance (km)",data:b(e),fill:!0,lineTension:0,backgroundColor:"rgba(75,192,192,0.2)",borderColor:"rgba(75,192,192,1)"}]}),options:{maintainAspectRatio:!1}});var e,t}}]),n}(a.Component),g=function(){function e(){Object(o.a)(this,e),this.entries=[],this.it=0}return Object(u.a)(e,[{key:"addDataEntry",value:function(e,t){this.entries.push(new f(e,t))}},{key:"getEarliestDate",value:function(){for(var e=new Date,t=Number(e),n=0;n<this.entries.length;n++){var a=Number(new Date(this.entries[n].date));a<t&&(t=a,e=this.entries[n].date)}return new Date(e)}},{key:"getLatestDate",value:function(){for(var e=new Date,t=Number(e),n=0;n<this.entries.length;n++){var a=Number(new Date(this.entries[n].date));a>t&&(t=a,e=this.entries[n].date)}return new Date(e)}},{key:"getDates",value:function(){for(var e=[],t=this.getEarliestDate(),n=this.getLatestDate(),a=this.getDaysUntil(t,n)+3,s=0;s<a;s++){var r=new Date(t);r.setDate(r.getDate()+s-1);var i=r.toISOString().substring(0,10);e.push(i)}return e}},{key:"getAdditionOnDate",value:function(e){for(var t=0,n=0;n<this.entries.length;n++)this.entries[n].date===e&&(t+=this.entries[n].value);return t}},{key:"getDateLabel",value:function(e){return e}},{key:"getDaysUntil",value:function(e,t){var n=t.getTime()-e.getTime();return Math.ceil(n/864e5)}}]),e}(),f=function e(t,n){Object(o.a)(this,e),this.value=t,this.date=n},O=function e(t,n){Object(o.a)(this,e),this.distance=t,this.photo=n},m=function(){function e(t){Object(o.a)(this,e),this.date=t,this.exerciseEntries=[]}return Object(u.a)(e,[{key:"addExerciseEntry",value:function(e,t){this.exerciseEntries.push(new O(e,t))}},{key:"setDistance",value:function(e,t){e<this.exerciseEntries.length&&(this.exerciseEntries[e].distance=t)}},{key:"getDistances",value:function(){for(var e=[],t=0;t<this.exerciseEntries.length;t++)e.push(this.exerciseEntries[t].distance);return e}}]),e}(),y=function(){function e(t){Object(o.a)(this,e),this.name=t,this.dateEntries=[]}return Object(u.a)(e,[{key:"getDistancesOnDate",value:function(e){var t=this.getDateEntry(e);return null!==t?t.getDistances():[]}},{key:"addEntry",value:function(e){var t=this.getDateEntry(e);null===t&&(t=new m(e),this.dateEntries.push(t)),t.addExerciseEntry(0,"")}},{key:"setDistance",value:function(e,t,n){var a=this.getDateEntry(e);if(null!==a)return a.setDistance(t,n)}},{key:"getDateEntry",value:function(e){for(var t=0;t<this.dateEntries.length;t++)if(this.dateEntries[t].date===e)return this.dateEntries[t];return null}}]),e}(),D=function(){function e(){Object(o.a)(this,e),this.users=[new y("Joris"),new y("Minyu"),new y("New User")]}return Object(u.a)(e,[{key:"getUser",value:function(e){for(var t=0;t<this.users.length;t++)if(this.users[t].name===e)return this.users[t];return null}},{key:"getDataEntry",value:function(e){var t=this.getUser(e);return null===t?[]:t.data}},{key:"getUserNames",value:function(){for(var e=[],t=0;t<this.users.length;t++)e.push(this.users[t].name);return e}}]),e}(),p=n(252),x=n(253),E=n(250),k=n(240),w=n(243),N=n(247),S=n(205),C=Object(k.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},default:{margin:e.spacing(3,0,1,0)},section1:{margin:e.spacing(3,2)},section3:{margin:e.spacing(3,1,1)}}}));function U(e){var t=C();return Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsxs)("div",{className:t.section1,children:[Object(j.jsx)(w.a,{container:!0,alignItems:"center",children:Object(j.jsx)(w.a,{item:!0,xs:!0,children:Object(j.jsx)(S.a,{gutterBottom:!0,variant:"h4",children:"Logging Tool"})})}),Object(j.jsx)(S.a,{color:"textSecondary",variant:"body2",children:"Select the active user, as only the selected user is able to change their data in the bottom overview"}),Object(j.jsx)("div",{className:t.default,children:Object(j.jsx)(p.a,{children:"Select the active user"})}),Object(j.jsx)(E.a,{style:{width:160},onChange:function(t){e.processUserSelect(t.target.value)},children:e.items.map((function(e,t){return Object(j.jsx)(x.a,{value:e,children:e})}))})]}),Object(j.jsx)(N.a,{variant:"middle"})]})}var A=n(248),I=n(249),L=n(251),T=Object(k.a)((function(e){return{root:{width:"100%",maxWidth:500,backgroundColor:e.palette.background.paper},default:{margin:e.spacing(3,0,1,0),backgroundColor:e.palette.common.white},sectionColumnRight:{width:"50%",float:"right",margin:e.spacing(3,2),backgroundColor:"lightGray"},section1:{margin:e.spacing(3,2)},section3:{margin:e.spacing(3,1,1)}}}));function J(e){var t=T();function n(t,n){e.user.setDistance(e.activeDate,t,n),e.setUserEntries(e.user.getDistancesOnDate(e.activeDate))}return Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsx)("div",{className:t.section1,children:Object(j.jsxs)(S.a,{color:"textSecondary",variant:"body2",children:["Entry overview for ",e.user.name]})}),Object(j.jsx)("div",{className:"ColumnLeft",children:0===e.userEntries.length&&Object(j.jsx)("div",{className:"DataEntryStyle",children:Object(j.jsxs)(S.a,{color:"primary",variant:"body2",children:["No entries yet for ",e.user.name]})})}),Object(j.jsx)("div",{className:"ColumnLeft",children:e.userEntries.map((function(t,a){return Object(j.jsx)(P,{name:e.user.name,confirmInput:n,distance:t,index:a})}))}),Object(j.jsx)("div",{className:"ColumnRight",children:Object(j.jsx)(M,{addEntry:function(){e.user.addEntry(e.activeDate),e.setUserEntries(e.user.getDistancesOnDate(e.activeDate))},activeDate:e.activeDate,processDateChange:function(t){e.setActiveDate(t),e.setUserEntries(e.user.getDistancesOnDate(t))}})})]})}function M(e){return Object(j.jsxs)("div",{className:"DataAddStyle",children:[Object(j.jsx)(S.a,{color:"textSecondary",variant:"body2",children:"Select a date and press the button to insert a new entry"}),Object(j.jsx)(L.a,{type:"date",defaultValue:e.activeDate,onChange:function(t){e.processDateChange(t.target.value)}}),Object(j.jsx)(A.a,{color:"primary",onClick:e.addEntry,children:"Add new entry "})]})}function P(e){var t=e.distance;return Object(j.jsxs)("div",{className:"DataEntryStyle",children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)(L.a,{label:"Distance",InputProps:{endAdornment:Object(j.jsx)(I.a,{position:"start",children:"km"})},defaultValue:e.distance,onChange:function(e){t=e.target.value},onKeyPress:function(n){"Enter"===n.key&&(console.log("Enter key pressed"),e.confirmInput(e.index,t))}})]})}new g;var R=new D;a.Component;var B=function(){var e=Object(a.useState)([0]),t=Object(c.a)(e,2),n=t[0],s=(t[1],Object(a.useState)([""])),r=Object(c.a)(s,2),i=r[0],o=(r[1],Object(a.useState)("")),u=Object(c.a)(o,2),l=u[0],d=u[1],h=Object(a.useState)([]),b=Object(c.a)(h,2),g=b[0],f=b[1],O=Object(a.useState)((new Date).toISOString().substring(0,10)),m=Object(c.a)(O,2),y=m[0],D=m[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"UserContainer",children:[Object(j.jsx)("div",{className:"PersonEntry",children:Object(j.jsx)(U,{items:R.getUserNames(),processUserSelect:function(e){d(e);var t=R.getUser(e);null!==t&&f(t.getDistancesOnDate(y))}})}),l.length>0&&Object(j.jsx)("div",{children:Object(j.jsx)(J,{user:R.getUser(l),userEntries:g,setUserEntries:f,activeDate:y,setActiveDate:D})})]}),Object(j.jsx)("div",{className:"GraphContainer",children:Object(j.jsx)(v,{data:n,dates:i})})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))},66:function(e,t,n){}},[[204,1,2]]]);
//# sourceMappingURL=main.91ec6eb6.chunk.js.map