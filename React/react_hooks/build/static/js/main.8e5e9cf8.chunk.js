(this.webpackJsonpreact_hooks=this.webpackJsonpreact_hooks||[]).push([[0],{122:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(18),c=n.n(r),o=(n(64),n(65),n(19)),u=n(10),i=n(2);var m=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),m=Object(i.a)(c,2),s=m[0],d=m[1];return l.a.createElement("div",null,"react hooks",l.a.createElement("br",null),l.a.createElement("p",null,JSON.stringify(s)),l.a.createElement("ul",null,s.map((function(e,t){return l.a.createElement("li",{key:t,style:{color:e.compled?"#f00":""},onClick:function(){return function(e){var t=s.map((function(t,n){return e===n?Object(o.a)({},t,{compled:!t.compled}):t}));d(t)}(t)}},e.value)}))),l.a.createElement("input",{value:n.value,onChange:function(e){return function(e){console.log(e,"ee"),console.log(e.target.value);var t=e.target.value;r({value:t,compled:!1})}(e)}}),l.a.createElement("button",{onClick:function(){return console.log(n,"value"),d([].concat(Object(u.a)(s),[n])),void r({value:""})}},"add"))},s=function(){return l.a.createElement("div",null,"react hooks\uff0c \u70b9\u51fbtab\u5207\u6362\u9875\u9762")};function d(e,t){switch(console.log(e,t),t.type){case"increment":return e+1;case"decrement":return e-1;default:return e}}var b=function(){var e=Object(a.useReducer)(d,0),t=Object(i.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,"count:",n),l.a.createElement("button",{onClick:function(){return r({type:"increment"})}},"increment"),l.a.createElement("button",{onClick:function(){return r({type:"decrement"})}},"decrement"))};function f(e,t){switch(t.type){case"add-todo":return{todos:[].concat(Object(u.a)(e.todos),[{text:t.text,completed:!1}]),todoCount:e.todos.length+1};case"toggole-todo":return{todos:e.todos.map((function(e,n){return n===t.idx?Object(o.a)({},e,{completed:!e.completed}):e})),todoCount:e.todoCount};default:return e}}var p=function(){var e=Object(a.useReducer)(f,{todos:[],todoCount:0}),t=Object(i.a)(e,2),n=t[0],r=n.todos,c=n.todoCount,o=t[1],u=Object(a.useState)(),m=Object(i.a)(u,2),s=m[0],d=m[1];return console.log(r,"todos"),l.a.createElement("div",null,"number: todo count: ",c,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o({type:"add-todo",text:s}),d("")}},l.a.createElement("input",{value:s,onChange:function(e){return d(e.target.value)}})),l.a.createElement("ul",null,r.map((function(e,t){return l.a.createElement("li",{key:e.text,onClick:function(){return function(e){o({type:"toggole-todo",idx:e})}(t)},style:{textDecoration:e.completed?"line-through":""}},e.text)}))),l.a.createElement("pre",null,JSON.stringify(r)))};var E=function(e){var t=e.pictures,n=void 0===t?[]:t,r=e.value,c=void 0===r?[]:r,o=e.onChange,u=Object(a.useState)(!1),m=Object(i.a)(u,2),s=m[0],d=m[1];function b(e){c.includes(e)?c.splice(c.findIndex((function(t){return t===e})),1):c.push(e),o(c.slice())}function f(){if(console.log(s,"isChecked"),s)d(!1),o([]);else{d(!0);var e=[];n.map((function(t){return e.push(t.id)})),o(e)}}return Object(a.useEffect)((function(){c.length===n.length?d(!0):d(!1)}),[n]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",{for:"all",style:{cursor:"pointer"}},"\u5168\u9009"),l.a.createElement("input",{type:"checkbox",id:"all",checked:s,onChange:function(){f()}}),l.a.createElement("span",null,"\u5df2\u9009\u62e9:",c.length,"\u4e2a"),l.a.createElement("br",null)),n.map((function(e,t){return l.a.createElement("label",{for:t},l.a.createElement("input",{type:"checkbox",id:t,checked:c.includes(e.id),key:t,onChange:function(){return b(e.id)}}),l.a.createElement("img",{alt:"",src:e.url,key:e.id,style:{cursor:"pointer"}}))})))},h=function(){var e=l.a.useState(["1"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return console.log(n),l.a.createElement(E,{pictures:[{id:"1",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"2",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"3",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"4",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"}],value:n,onChange:function(e){return a(e)}})},y=n(126),g=(n(35),function(e){var t=e.searchItem,n=e.initChoose,a=e.onChoose,r=Object.keys(t);return l.a.createElement(y.a,{className:"container"},r.map((function(e,r){var c=t[e].label,o=t[e].data;return l.a.createElement("ul",null,l.a.createElement("span",null,c),o.map((function(e,t){return l.a.createElement("li",{key:t,onClick:function(){return a(c,e.key,r)},style:{color:n[r]&&n[r].key===t?"#f00":""}},e.label)})),l.a.createElement("br",null))})))}),k=n(15),v=n(6),j=function(e){var t=e.itemData;return l.a.createElement(y.a,{className:"ItemContainer"},l.a.createElement(k.a,{gutter:[16,16],className:"RowList"},t.map((function(e){return l.a.createElement(v.a,{xs:18,sm:12,md:8,lg:6,xl:6},l.a.createElement("div",{className:"everyDiv"},l.a.createElement("img",{src:e.itemUrl,alt:""}),l.a.createElement("div",null,e.title),l.a.createElement("div",null,e.content)))}))))},A={data1:{label:"\u52a8\u7269",data:[{label:"\u5168\u90e8",key:0},{label:"\u732b",key:1},{label:"\u72d7",key:2}]},data2:{label:"\u690d\u7269",data:[{label:"\u5168\u90e8",key:0},{label:"\u542b\u7f9e\u8349",key:1},{label:"\u9c9c\u82b1",key:2}]},data3:{label:"\u666f\u70b9",data:[{label:"\u5168\u90e8",key:0},{label:"\u957f\u57ce",key:1},{label:"\u897f\u6e56",key:2}]}},O=[{id:1,kind:"\u52a8\u7269",key:2,content:"\u8fd9\u662f\u4e2a\u62c9\u5e03\u62c9\u591a",itemUrl:"https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=904688732,1589128815&fm=85&s=2110599148717A960EC85DC60300E0B2",title:"\u62c9\u5e03\u62c9\u591a"},{id:2,kind:"\u52a8\u7269",key:2,content:"\u8fd9\u662f\u4e2a\u67f4\u72ac",itemUrl:"https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1067412999,107277101&fm=5",title:"\u67f4\u72ac"},{id:3,kind:"\u52a8\u7269",key:1,content:"\u8fd9\u662f\u4e2a\u732b",itemUrl:"https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2247692397,1189743173&fm=5",title:"\u732b"},{id:4,kind:"\u690d\u7269",key:1,content:"\u8fd9\u662f\u4e2a\u542b\u7f9e\u8349",itemUrl:"https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2352760212,816094440&fm=85&app=52&f=JPEG?w=121&h=75&s=412FE2FACC5753E7243482230300D0D7",title:"\u542b\u7f9e\u8349"},{id:5,kind:"\u690d\u7269",key:2,content:"\u8fd9\u662f\u4e2a\u73ab\u7470",itemUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585944621816&di=7186c345394ec523655d9e7658c74de9&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F40%2F66%2F14300001018588129620664988587.jpg",title:"\u73ab\u7470"},{id:6,kind:"\u666f\u70b9",key:1,content:"\u8fd9\u662f\u957f\u57ce",itemUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1598423979,2874361609&fm=26&gp=0.jpg",title:"\u957f\u57ce"},{id:7,kind:"\u666f\u70b9",key:2,content:"\u8fd9\u662f\u897f\u6e56",itemUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1604468858,3204536097&fm=26&gp=0.jpg",title:"\u897f\u6e56"}],x=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(O),o=Object(i.a)(c,2),m=o[0],s=o[1];return Object(a.useEffect)((function(){var e=[];Object.keys(A).forEach((function(t){var n={},a=A[t].label;n.label=a,n.key=0,e.push(n)})),r(e)}),[]),l.a.createElement("div",null,l.a.createElement(g,{searchItem:A,initChoose:n,onChoose:function(e,t,a){return function(e,t,a){n[a].key=t;var l=[],c=[];n.forEach((function(e,t){l=O.filter((function(t){return e.label===t.kind&&(0===e.key||t.key===e.key)})),c.push.apply(c,Object(u.a)(l))})),s(c.slice()),r(n.slice())}(0,t,a)}}),l.a.createElement(j,{itemData:m}))};n(122);var C=function(e){var t=e.dataSource,n=void 0===t?[]:t,r=e.columns,c=void 0===r?[]:r,o=e.rowSelection,u=void 0===o?{}:o,m=e.borderd,s=void 0!==m&&m,d=e.loading,b=void 0!==d&&d,f=e.isTheme,p=void 0===f?"":f,E=u.type,h=void 0===E?"":E,y=u.selectedRowKeys,g=u.onChange,k=u.rowKey,v=Object(a.useState)(n),j=Object(i.a)(v,2),A=j[0],O=j[1];console.log(n,"dataSource111"),console.log(A,"dataSource222");var x=Object(a.useState)(!1),C=Object(i.a)(x,2),S=C[0],w=C[1],R=Object(a.useState)(),I=Object(i.a)(R,2),N=I[0],U=I[1];function Q(e){y.includes(e)?y.splice(y.findIndex((function(t){return t===e})),1):y.push(+e),g("checkbox"===h?y.slice():[e])}function F(e){if(e.length!==A.length){var t=[];A.map((function(e,n){return t.push(k?+e[k]:n)})),g(t.slice())}else g([])}function H(e){A.sort(e.compare),S?(O(A.slice()),w(!1)):(O(A.reverse().slice()),w(!0))}return Object(a.useEffect)((function(){c.map((function(e){return e&&e.sorter instanceof Object&&H(e.sorter)}))}),[]),Object(a.useEffect)((function(){O(n)}),[n]),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",filter:p}},l.a.createElement("table",{style:{borderTop:s?"#999 1px solid":"",borderBottom:s?"#666 1px solid":"",filter:b?"opacity(0.5)":"",position:"relative"}},b&&l.a.createElement("span",{className:"Loading"},"Loading..."),l.a.createElement("thead",null,l.a.createElement("tr",{style:{borderBottom:s?"#999 1px solid":"",background:"#eee"}},h&&l.a.createElement("input",{type:h,checked:y.length===A.length,disabled:"radio"===h,onChange:function(){return F(y)},style:{marginRight:10}}),c.map((function(e){return l.a.createElement("th",{key:e.key},e.title," \xa0",e&&e.sorter instanceof Object?l.a.createElement("span",{onClick:function(){return H(e.sorter)},style:{cursor:"pointer"}},S?"^":"v",(function(){return H(e.sorter)})):"")})))),l.a.createElement("tbody",null,A.map((function(e,t){return l.a.createElement("tr",{key:e.key,style:{borderBottom:s?"#999 1px solid":"",background:N===t?"#eee":""},onMouseOver:function(){return U(t)},onMouseOut:function(){return U()}},h&&l.a.createElement("input",{type:h,checked:y.includes(k?+e[k]:t),onChange:function(){return Q(k?+e[k]:t)},name:"radio",style:{marginRight:10}}),c.map((function(n){return l.a.createElement("td",{key:t},function(e,t,n){return"function"===typeof e.render?e.render(t[e.dataIndex],t,n):t[e.dataIndex]}(n,e,t))})))})))))},S=[{id:"1",name:"\u80e1\u5f66\u658c",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:1},{id:"2",name:"\u80e1\u5f66\u7956",age:42,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:2},{id:"3",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3}],w=function(){var e=Object(a.useState)("checkbox"),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(i.a)(c,2),m=o[0],s=o[1],d=Object(a.useState)({borderd:!0}),b=Object(i.a)(d,2),f=b[0],p=b[1],E=Object(a.useState)(!1),h=Object(i.a)(E,2),y=h[0],g=h[1],k=Object(a.useState)(!1),v=Object(i.a)(k,2),j=v[0],A=v[1],O=Object(a.useState)(S),x=Object(i.a)(O,2),w=x[0],R=x[1],I=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age",sorter:{compare:function(e,t){return e.age-t.age}}},{title:"\u4f4f\u5740",dataIndex:"address",key:"address"},{title:"\u7c7b\u578b",dataIndex:"type",key:"type",render:function(e,t,n){return l.a.createElement("span",{style:{color:"#f00"}},1===e?"\u852c\u83dc":2===e?"\u6c34\u679c":"\u4e3b\u98df")}},{title:"\u64cd\u4f5c",dataIndex:"work",key:"work",render:function(e,t,n){return l.a.createElement("span",{style:{color:"#00f"},onClick:function(){return function(e){console.log(e,"dd");var t=w.filter((function(t){return t.id!==e}));console.log(t,"res"),R(t.slice())}(t.id)}},"\u5220\u9664")}}];return Object(a.useEffect)((function(){s([])}),[n]),console.log("chooseKey",m),console.log(w,"_dataSource"),l.a.createElement("div",null,l.a.createElement("h2",null,"React hooks\u4effAntd\u7ec4\u4ef6\u5f00\u53d1---Table\u7ec4\u4ef6"),l.a.createElement("h3",null,"\u5df2\u5b9e\u73b0\u7684\u529f\u80fd"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9009\u4e2d\u72b6\u6001\uff0c\u81ea\u5b9a\u4e49\u5b9e\u73b0"),l.a.createElement("li",null,"\u6839\u636e\u5b57\u6bb5\u6392\u5e8fsorter"),l.a.createElement("li",null,"\u6570\u636e\u8fd4\u56de\u503crender\u6e32\u67d3\u5904\u7406"),l.a.createElement("li",null,"\u5b9e\u73b0table\u52a0border\uff0c\u7a7a\u7740table\u6837\u5f0f"),l.a.createElement("li",null,"\u5b9e\u73b0\u9f20\u6807\u60ac\u6d6e\u6539\u53d8\u5f53\u524d\u884c\u6837\u5f0f"),l.a.createElement("li",null,"\u9875\u9762\u662f\u5426\u52a0\u8f7d\u4e2dloading"),l.a.createElement("li",null,"\u65b0\u589e\u5220\u9664\u4e00\u884c")),l.a.createElement("h3",null,"\u672a\u5b9e\u73b0\u7684\u529f\u80fd"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7b5b\u9009filterDropdown"),l.a.createElement("li",null,"\u5b9e\u73b0\u53ef\u5c55\u5f00\u529f\u80fd"),l.a.createElement("li",null,"\u5b9e\u73b0\u5355\u5143\u683c\u53ef\u7f16\u8f91\u529f\u80fd"),l.a.createElement("li",null,"\u8868\u683c\u7684\u5206\u9875\u8bbe\u7f6e")),l.a.createElement("br",null),l.a.createElement("div",{className:"Table1"},l.a.createElement("h3",null,"Table1"),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return r("checkbox")}},"checkbox"),l.a.createElement("button",{onClick:function(){return r("radio")}},"radio"),l.a.createElement("button",{onClick:function(){return r()}},"\u65e0"),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement(C,{dataSource:S,columns:I,rowSelection:{type:n,selectedRowKeys:m,rowKey:"id",onChange:function(e){return s(e)}}})),l.a.createElement("br",null),l.a.createElement("div",{className:"Table2"},l.a.createElement("h3",null,"Table2"),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return p({borderd:!f.borderd})}},"\u6dfb\u52a0\\\u53d6\u6d88\u8fb9\u6846"),l.a.createElement("button",{onClick:function(){return g(!y)}},"\u8bbe\u7f6e\\\u53d6\u6d88loading"),l.a.createElement("button",{onClick:function(){return A(!j)}},"\u662f\u5426\u6dfb\u52a0\u6ee4\u955c"),l.a.createElement("button",{onClick:function(){return function(){var e=[].concat(Object(u.a)(w),[{id:+w.length,name:"\u80e1\u5f66\u658c",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:1}]);console.log(e,"newData"),R(e.slice())}()}},"\u6dfb\u52a0\u4e00\u884c")),l.a.createElement("br",null),l.a.createElement(C,{dataSource:w,columns:I,rowSelection:{type:n,selectedRowKeys:m,rowKey:"id",onChange:function(e){return s(e)}},borderd:f.borderd,loading:y,isTheme:j?"sepia(.6)":""})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},R=n(9),I=n(11);var N=function(){return l.a.createElement(R.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("h3",null,"React Hooks"),l.a.createElement(R.b,{to:"/",style:{margin:"0 10px"}},"Home"),l.a.createElement(R.b,{to:"/ReactHooks",style:{margin:"0 10px"}},"ReactHook"),l.a.createElement(R.b,{to:"/HookUseReducer1",style:{margin:"0 10px"}},"UseReducer1"),l.a.createElement(R.b,{to:"/HookUseReducer2",style:{margin:"0 10px"}},"UseReducer2"),l.a.createElement(R.b,{to:"/picture",style:{margin:"0 10px"}},"pictureSelect\u7ec4\u4ef6"),l.a.createElement(R.b,{to:"/itemIndex",style:{margin:"0 10px"}},"SeacherItem\u7ec4\u4ef6"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("h3",null,"React \u4eff Antd"),l.a.createElement(R.b,{to:"/RTable",style:{margin:"0 10px"}},"RTable\u7ec4\u4ef6"),l.a.createElement("hr",null),l.a.createElement(I.a,{path:"/",exact:!0,component:s}),l.a.createElement(I.a,{path:"/ReactHooks",component:m}),l.a.createElement(I.a,{path:"/HookUseReducer1",component:b}),l.a.createElement(I.a,{path:"/HookUseReducer2",component:p}),l.a.createElement(I.a,{path:"/picture",component:h}),l.a.createElement(I.a,{path:"/itemIndex",component:x}),l.a.createElement(I.a,{path:"/RTable",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){},59:function(e,t,n){e.exports=n(125)},64:function(e,t,n){},65:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.8e5e9cf8.chunk.js.map