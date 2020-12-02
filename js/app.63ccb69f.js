(function(e){function t(t){for(var r,a,o=t[0],d=t[1],c=t[2],l=0,p=[];l<o.length;l++)a=o[l],u[a]&&p.push(u[a][0]),u[a]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var d=n[o];0!==u[d]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},u={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var s=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),u=n.n(r);u.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("StudentGrid",{attrs:{students:e.students},on:{"add-item":e.addStudent,"remove-item":e.refreshStudent,"update-item":e.refreshStudent}})],1)},i=[],a=(n("96cf"),n("3b8d")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[e._m(0),n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newStudent.name,expression:"newStudent.name"}],attrs:{type:"text"},domProps:{value:e.newStudent.name},on:{input:function(t){t.target.composing||e.$set(e.newStudent,"name",t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newStudent.gender,expression:"newStudent.gender"}],attrs:{type:"text"},domProps:{value:e.newStudent.gender},on:{input:function(t){t.target.composing||e.$set(e.newStudent,"gender",t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newStudent.country,expression:"newStudent.country"}],attrs:{type:"text"},domProps:{value:e.newStudent.country},on:{input:function(t){t.target.composing||e.$set(e.newStudent,"country",t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newStudent.city,expression:"newStudent.city"}],attrs:{type:"text"},domProps:{value:e.newStudent.city},on:{input:function(t){t.target.composing||e.$set(e.newStudent,"city",t.target.value)}}})]),n("td",[n("button",{on:{click:e.add}},[e._v("Add")])]),n("td",[n("button",{on:{click:e.clear}},[e._v("Clear")])])]),e._l(e.students,function(t){return n("tr",{key:t.id},[e.editStudent.id==t.id?[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editStudent.name,expression:"editStudent.name"}],attrs:{type:"text"},domProps:{value:e.editStudent.name},on:{input:function(t){t.target.composing||e.$set(e.editStudent,"name",t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editStudent.gender,expression:"editStudent.gender"}],attrs:{type:"text"},domProps:{value:e.editStudent.gender},on:{input:function(t){t.target.composing||e.$set(e.editStudent,"gender",t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editStudent.country,expression:"editStudent.country"}],attrs:{type:"text"},domProps:{value:e.editStudent.country},on:{input:function(t){t.target.composing||e.$set(e.editStudent,"country",t.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editStudent.city,expression:"editStudent.city"}],attrs:{type:"text"},domProps:{value:e.editStudent.city},on:{input:function(t){t.target.composing||e.$set(e.editStudent,"city",t.target.value)}}})]),n("td",[n("button",{on:{click:function(t){return e.update(e.editStudent.id)}}},[e._v("Update")])]),n("td",[n("button",{on:{click:e.cancelUpdate}},[e._v("Cancel")])])]:[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.gender))]),n("td",[e._v(e._s(t.country))]),n("td",[e._v(e._s(t.city))]),n("td",[n("button",{on:{click:function(n){return e.edit(t.id)}}},[e._v("Edit")])]),n("td",[n("button",{on:{click:function(n){return e.remove(t.id)}}},[e._v("Delete")])])]],2)})],2)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Gender")]),n("th",[e._v("Country")]),n("th",[e._v("City")])])}],c=(n("7f7f"),n("7514"),n("d225")),s=n("b0b4"),l=n("b6ae"),p=function(){return n("b81e")},m=p(),f=new l["Connection"](new Worker(m));f.setLogStatus(!0);var v=function(){function e(){Object(c["a"])(this,e),this.tableName="Students"}return Object(s["a"])(e,[{key:"getStudents",value:function(){return f.select({from:this.tableName})}},{key:"addStudent",value:function(e){return f.insert({into:this.tableName,values:[e],return:!0})}},{key:"getStudentById",value:function(e){return f.select({from:this.tableName,where:{id:e}})}},{key:"removeStudent",value:function(e){return f.remove({from:this.tableName,where:{id:e}})}},{key:"updateStudentById",value:function(e){return f.update({in:this.tableName,set:{name:e.name,gender:e.gender,country:e.country,city:e.city},where:{id:e.id}})}}]),e}(),h={name:"Student",props:{students:{required:!0,type:Array}},data:function(){return{newStudent:null,editStudent:{},service:new v}},beforeMount:function(){this.clear()},methods:{add:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.service.addStudent(this.newStudent);case 3:t=e.sent,this.$emit("add-item",t[0]),this.clear(),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),alert(e.t0.message);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}(),clear:function(){this.newStudent={name:"",gender:"",country:"",city:""}},edit:function(e){var t=this.students.find(function(t){return t.id===e});this.editStudent={id:t.id,name:t.name,gender:t.gender,country:t.country,city:t.city}},remove:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return new v,e.next=3,this.service.removeStudent(t);case 3:n=e.sent,n>0&&this.$emit("remove-item");case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),update:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=3,this.service.updateStudentById(this.editStudent);case 3:n=e.sent,n>0&&(this.cancelUpdate(),this.$emit("update-item"));case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),cancelUpdate:function(){this.editStudent={}}}},g=h,y=n("2877"),S=Object(y["a"])(g,o,d,!1,null,null,null),w=S.exports,b=function(){var e={name:"Students",columns:{id:{primaryKey:!0,autoIncrement:!0},name:{notNull:!0,dataType:l["DATA_TYPE"].String},gender:{dataType:l["DATA_TYPE"].String,default:"male"},country:{notNull:!0,dataType:l["DATA_TYPE"].String},city:{dataType:l["DATA_TYPE"].String,notNull:!0}}},t={name:"Vue_Demo",tables:[e]};return t},x=function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=b(),e.next=3,f.initDb(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=n("bd86"),k=function e(){Object(c["a"])(this,e)};Object(_["a"])(k,"isIndexedDbSupported",!0);var O={name:"app",components:{StudentGrid:w},beforeCreate:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:t=e.sent,t?console.log("db created"):console.log("db opened"),e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0),alert(e.t0.message),k.isIndexedDbSupported=!1;case 12:case"end":return e.stop()}},e,null,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){this.refreshStudent()},data:function(){return{students:[]}},methods:{refreshStudent:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(new v).getStudents();case 2:this.students=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),addStudent:function(e){this.students.push(e)}}},j=O,N=(n("034f"),Object(y["a"])(j,u,i,!1,null,null,null)),P=N.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(P)}}).$mount("#app")},"64a9":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.63ccb69f.js.map