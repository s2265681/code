(this.webpackJsonpreact_hooks=this.webpackJsonpreact_hooks||[]).push([[0],{122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),c=n.n(r),o=(n(64),n(65),n(1)),i=n(21),u=n(15),s=function(e){var t=Object(a.useState)(e),n=Object(o.a)(t,2),l=n[0],r=n[1];return[l,function(e){r(Object(u.a)({},l,Object(i.a)({},e.target.name,e.target.value)))}]};function m(){var e=s({username:"",password:""}),t=Object(o.a)(e,2),n=t[0],a=t[1];return console.log(n,"values"),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{marginRight:"30px"}},l.a.createElement("h2",null,"React hooks\u5c01\u88c5useForm\u94a9\u5b50"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5b9e\u73b0\u53ef\u590d\u7528\u7684\u94a9\u5b50\u7ec4\u4ef6"),l.a.createElement("li",null,"\u7b80\u5316\u8868\u5355\u53ef\u63a7\u6570\u636e\u83b7\u53d6\u6d41\u7a0b"),l.a.createElement("li",null,"\b\b\b\u5c01\u88c5\u524d\u7684\u4f7f\u7528useState ",l.a.createElement("br",null),"const [value1,setValue1] = useState('')",l.a.createElement("br",null),"const [value2,setValue2] = useState('')",l.a.createElement("br",null),"\u9700\u8981\u6bcf\u4e00\u4e2ainput\u90fd\u53bb\u7ed1\u5b9avalue\u5e76\u4e14\u901a\u8fc7",l.a.createElement("br",null),"onChange((e)=>setValue1(e.target.value) \xb7\xb7\xb7\xb7"),l.a.createElement("li",null,"\b\b\b\u5c01\u88c5\u540e\u4f7f\u7528useForm ",l.a.createElement("br",null),"const [values,setValue] = useState(","username:'',password:''",")",l.a.createElement("br",null),"\u73b0\u5728\u90fd\u53ef\u4ee5\u901a\u8fc7onChange(e=>setValue(e))\u53bb\u66f4\u65b0\u6700\u65b0\u7684values"),l.a.createElement("li",null,l.a.createElement("pre",null,"const UseForm = initialValues =>  {\nconst [values,setValues] = useState(initialValues)\nreturn  [ values, e=>{setValues({...values,\n    [e.target.name]:e.target.value\n})}]\n")))),l.a.createElement("div",null,l.a.createElement("input",{type:"text",name:"username",value:n.username,placeholder:"\u7528\u6237\u540d",onChange:function(e){return a(e)}}),l.a.createElement("input",{type:"password",name:"password",value:n.password,placeholder:"\u5bc6\u7801",onChange:function(e){return a(e)}}),l.a.createElement("br",null),l.a.createElement("br",null),"\u6253\u5370\u4fe1\u606f",JSON.stringify(n)))}var d=n(10);var p=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),s=i[0],m=i[1];return l.a.createElement("div",null,"react hooks",l.a.createElement("br",null),l.a.createElement("p",null,JSON.stringify(s)),l.a.createElement("ul",null,s.map((function(e,t){return l.a.createElement("li",{key:t,style:{color:e.compled?"#f00":""},onClick:function(){return function(e){var t=s.map((function(t,n){return e===n?Object(u.a)({},t,{compled:!t.compled}):t}));m(t)}(t)}},e.value)}))),l.a.createElement("input",{value:n.value,onChange:function(e){return function(e){console.log(e,"ee"),console.log(e.target.value);var t=e.target.value;r({value:t,compled:!1})}(e)}}),l.a.createElement("button",{onClick:function(){return console.log(n,"value"),m([].concat(Object(d.a)(s),[n])),void r({value:""})}},"add"))},E=function(){return l.a.createElement("div",null,"react hooks\uff0c \u70b9\u51fbtab\u5207\u6362\u9875\u9762")};function b(e,t){switch(console.log(e,t),t.type){case"increment":return e+1;case"decrement":return e-1;default:return e}}var f=function(){var e=Object(a.useReducer)(b,0),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,"count:",n),l.a.createElement("button",{onClick:function(){return r({type:"increment"})}},"increment"),l.a.createElement("button",{onClick:function(){return r({type:"decrement"})}},"decrement"))};function h(e,t){switch(t.type){case"add-todo":return{todos:[].concat(Object(d.a)(e.todos),[{text:t.text,completed:!1}]),todoCount:e.todos.length+1};case"toggole-todo":return{todos:e.todos.map((function(e,n){return n===t.idx?Object(u.a)({},e,{completed:!e.completed}):e})),todoCount:e.todoCount};default:return e}}var g=function(){var e=Object(a.useReducer)(h,{todos:[],todoCount:0}),t=Object(o.a)(e,2),n=t[0],r=n.todos,c=n.todoCount,i=t[1],u=Object(a.useState)(),s=Object(o.a)(u,2),m=s[0],d=s[1];return console.log(r,"todos"),l.a.createElement("div",null,"number: todo count: ",c,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i({type:"add-todo",text:m}),d("")}},l.a.createElement("input",{value:m,onChange:function(e){return d(e.target.value)}})),l.a.createElement("ul",null,r.map((function(e,t){return l.a.createElement("li",{key:e.text,onClick:function(){return function(e){i({type:"toggole-todo",idx:e})}(t)},style:{textDecoration:e.completed?"line-through":""}},e.text)}))),l.a.createElement("pre",null,JSON.stringify(r)))};var y=function(e){var t=e.pictures,n=void 0===t?[]:t,r=e.value,c=void 0===r?[]:r,i=e.onChange,u=Object(a.useState)(!1),s=Object(o.a)(u,2),m=s[0],d=s[1];function p(e){c.includes(e)?c.splice(c.findIndex((function(t){return t===e})),1):c.push(e),i(c.slice())}function E(){if(console.log(m,"isChecked"),m)d(!1),i([]);else{d(!0);var e=[];n.map((function(t){return e.push(t.id)})),i(e)}}return Object(a.useEffect)((function(){c.length===n.length?d(!0):d(!1)}),[n]),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",{for:"all",style:{cursor:"pointer"}},"\u5168\u9009"),l.a.createElement("input",{type:"checkbox",id:"all",checked:m,onChange:function(){E()}}),l.a.createElement("span",null,"\u5df2\u9009\u62e9:",c&&c.length,"\u4e2a"),l.a.createElement("br",null)),n.map((function(e,t){return l.a.createElement("label",{for:t},l.a.createElement("input",{type:"checkbox",id:t,checked:c&&c.includes(e.id),key:t,onChange:function(){return p(e.id)}}),l.a.createElement("img",{alt:"",src:e.url,key:e.id,style:{cursor:"pointer"}}))})))},v=function(){var e=l.a.useState(["1"]),t=Object(o.a)(e,2),n=t[0],a=t[1];return console.log(n),l.a.createElement(y,{pictures:[{id:"1",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"2",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"3",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"4",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"}],value:n,onChange:function(e){return a(e)}})},k=n(128),j=(n(36),function(e){var t=e.searchItem,n=e.initChoose,a=e.onChoose,r=Object.keys(t);return l.a.createElement(k.a,{className:"container"},r.map((function(e,r){var c=t[e].label,o=t[e].data;return l.a.createElement("ul",null,l.a.createElement("span",null,c),o.map((function(e,t){return l.a.createElement("li",{key:t,onClick:function(){return a(c,e.key,r)},style:{color:n[r]&&n[r].key===t?"#f00":""}},e.label)})),l.a.createElement("br",null))})))}),O=n(16),x=n(7),w=function(e){var t=e.itemData;return l.a.createElement(k.a,{className:"ItemContainer"},l.a.createElement(O.a,{gutter:[16,16],className:"RowList"},t.map((function(e){return l.a.createElement(x.a,{xs:18,sm:12,md:8,lg:6,xl:6},l.a.createElement("div",{className:"everyDiv"},l.a.createElement("img",{src:e.itemUrl,alt:""}),l.a.createElement("div",null,e.title),l.a.createElement("div",null,e.content)))}))))},A={data1:{label:"\u52a8\u7269",data:[{label:"\u5168\u90e8",key:0},{label:"\u732b",key:1},{label:"\u72d7",key:2}]},data2:{label:"\u690d\u7269",data:[{label:"\u5168\u90e8",key:0},{label:"\u542b\u7f9e\u8349",key:1},{label:"\u9c9c\u82b1",key:2}]},data3:{label:"\u666f\u70b9",data:[{label:"\u5168\u90e8",key:0},{label:"\u957f\u57ce",key:1},{label:"\u897f\u6e56",key:2}]}},C=[{id:1,kind:"\u52a8\u7269",key:2,content:"\u8fd9\u662f\u4e2a\u62c9\u5e03\u62c9\u591a",itemUrl:"https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=904688732,1589128815&fm=85&s=2110599148717A960EC85DC60300E0B2",title:"\u62c9\u5e03\u62c9\u591a"},{id:2,kind:"\u52a8\u7269",key:2,content:"\u8fd9\u662f\u4e2a\u67f4\u72ac",itemUrl:"https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1067412999,107277101&fm=5",title:"\u67f4\u72ac"},{id:3,kind:"\u52a8\u7269",key:1,content:"\u8fd9\u662f\u4e2a\u732b",itemUrl:"https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2247692397,1189743173&fm=5",title:"\u732b"},{id:4,kind:"\u690d\u7269",key:1,content:"\u8fd9\u662f\u4e2a\u542b\u7f9e\u8349",itemUrl:"https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2352760212,816094440&fm=85&app=52&f=JPEG?w=121&h=75&s=412FE2FACC5753E7243482230300D0D7",title:"\u542b\u7f9e\u8349"},{id:5,kind:"\u690d\u7269",key:2,content:"\u8fd9\u662f\u4e2a\u73ab\u7470",itemUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585944621816&di=7186c345394ec523655d9e7658c74de9&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F40%2F66%2F14300001018588129620664988587.jpg",title:"\u73ab\u7470"},{id:6,kind:"\u666f\u70b9",key:1,content:"\u8fd9\u662f\u957f\u57ce",itemUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1598423979,2874361609&fm=26&gp=0.jpg",title:"\u957f\u57ce"},{id:7,kind:"\u666f\u70b9",key:2,content:"\u8fd9\u662f\u897f\u6e56",itemUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1604468858,3204536097&fm=26&gp=0.jpg",title:"\u897f\u6e56"}],S=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(C),i=Object(o.a)(c,2),u=i[0],s=i[1];return Object(a.useEffect)((function(){var e=[];Object.keys(A).forEach((function(t){var n={},a=A[t].label;n.label=a,n.key=0,e.push(n)})),r(e)}),[]),l.a.createElement("div",null,l.a.createElement(j,{searchItem:A,initChoose:n,onChoose:function(e,t,a){return function(e,t,a){n[a].key=t;var l=[],c=[];n.forEach((function(e,t){l=C.filter((function(t){return e.label===t.kind&&(0===e.key||t.key===e.key)})),c.push.apply(c,Object(d.a)(l))})),s(c.slice()),r(n.slice())}(0,t,a)}}),l.a.createElement(w,{itemData:u}))};n(122);var N,R=function(e){var t=e.dataSource,n=void 0===t?[]:t,r=e.columns,c=void 0===r?[]:r,i=e.rowSelection,u=void 0===i?{}:i,s=e.borderd,m=void 0!==s&&s,d=e.loading,p=void 0!==d&&d,E=e.isTheme,b=void 0===E?"":E,f=e.expandable,h=void 0===f?void 0:f,g=e.scroll,y=void 0===g?{}:g,v=u.type,k=void 0===v?"":v,j=u.selectedRowKeys,O=u.onChange,x=u.rowKey,w=u.rowChoosed,A=void 0!==w&&w,C=Object(a.useState)(n),S=Object(o.a)(C,2),N=S[0],R=S[1],I=Object(a.useState)(!1),F=Object(o.a)(I,2),U=F[0],H=F[1],T=Object(a.useState)(),Q=Object(o.a)(T,2),B=Q[0],L=Q[1],W=Object(a.useState)({}),D=Object(o.a)(W,2),_=D[0],V=D[1];function K(e){j.includes(e)?j.splice(j.findIndex((function(t){return t===e})),1):j.push(+e),O("checkbox"===k?j.slice():[e])}function J(e){if(e.length!==N.length){var t=[];N.map((function(e,n){return t.push(x?+e[x]:n)})),O(t.slice())}else O([])}function q(e){N.sort(e.compare),U?(R(N.slice()),H(!1)):(R(N.reverse().slice()),H(!0))}return Object(a.useEffect)((function(){c.map((function(e){return e&&e.sorter instanceof Object&&q(e.sorter)}))}),[]),Object(a.useEffect)((function(){R(n)}),[n]),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",filter:b}},l.a.createElement("table",{style:{borderTop:m?"#999 1px solid":"",borderBottom:m?"#666 1px solid":"",filter:p?"opacity(0.5)":"",position:"relative"}},p&&l.a.createElement("span",{className:"Loading"},"Loading..."),l.a.createElement("thead",{style:{borderBottom:m?"#999 1px solid":"",background:"#eee"}},l.a.createElement("tr",{style:{display:"flex",height:"40px",alignItems:"center"}},h&&l.a.createElement("span",{style:{display:"inline-block",width:20,marginLeft:"10px"}}),k&&l.a.createElement("input",{type:k,checked:j.length===N.length,disabled:"radio"===k,onChange:function(){return J(j)},className:"form-check-input bounce",style:{marginLeft:10,display:"block"}}),c.map((function(e){var t=e.width,n=void 0===t?120:t,a=e.title,r=e.sorter,c=e.key;return l.a.createElement("th",{key:c,style:{width:n}},a," \xa0",r instanceof Object?l.a.createElement("span",{onClick:function(){return q(r)},style:{cursor:"pointer"}},U?"^":"v",(function(){return q(r)})):"")})))),l.a.createElement("div",{style:{overflowY:"scroll",maxHeight:y.y,overflowX:"scroll",maxWidth:y.x}},l.a.createElement("tbody",null,N.map((function(e,t){var n=+e[x],a=x?n:t;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{for:A?"check+".concat(a):""},l.a.createElement("tr",{key:e.key,style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",borderBottom:m?"#999 1px solid":"",background:B===t?"#eee":"",cursor:k?"pointer":""},onMouseOver:function(){return L(t)},onMouseOut:function(){return L()}},h&&l.a.createElement("span",{style:{display:"inline-block",width:20,cursor:"pointer",marginLeft:"10px"},onClick:function(){return e=a,console.log(e),_[e]?_[e]=!1:_[e]=!0,V(_),void(h&&h.onExpand(e));var e}},h.rowExpandable(e)&&(_[a]?"-":"+")),k&&l.a.createElement("input",{type:k,checked:j.includes(a),onChange:function(){return K(a)},name:"radio",id:"check+".concat(a),className:"form-check-input bounce",style:{marginLeft:10}}),c.map((function(n){return l.a.createElement("td",{key:t,style:{width:n&&n.width||120}},function(e,t,n){return"function"===typeof e.render?e.render(t[e.dataIndex],t,n):t[e.dataIndex]}(n,e,t))})))),h&&h&&_[a]&&l.a.createElement("tr",{style:{borderBottom:m?"#999 1px solid":"",height:40}},l.a.createElement("td",{colspan:c.length+1},h&&h.expandedRowRender(e))))}))))))},I=[{id:"1",name:"\u80e1\u5f66\u658c",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:1,description:"\u80e1\u5f66\u658c\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684"},{id:"2",name:"\u80e1\u5f66\u7956",age:42,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:2,description:"\u80e1\u5f66\u7956\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684"},{id:"3",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684"},{id:"4",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684"},{id:"5",name:"\u738b\u7956\u84dd",age:22,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:3,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684"}],F=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age",sorter:{compare:function(e,t){return e.age-t.age}}},{title:"\u4f4f\u5740",dataIndex:"address",key:"address"},{title:"\u7c7b\u578b",dataIndex:"type",key:"type",render:function(e,t,n){return l.a.createElement("span",{style:{color:"#f00"}},1===e?"\u852c\u83dc":2===e?"\u6c34\u679c":"\u4e3b\u98df")}}],U=function(){var e=Object(a.useState)("checkbox"),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),u=i[0],s=i[1],m=Object(a.useState)({borderd:!0}),p=Object(o.a)(m,2),E=p[0],b=p[1],f=Object(a.useState)(!1),h=Object(o.a)(f,2),g=h[0],y=h[1],v=Object(a.useState)(!1),k=Object(o.a)(v,2),j=k[0],O=k[1],x=Object(a.useState)(I),w=Object(o.a)(x,2),A=w[0],C=w[1],S=Object(a.useState)(!0),N=Object(o.a)(S,2),U=N[0],H=N[1],T=[{title:"\u59d3\u540d",dataIndex:"name",key:"name",width:120},{title:"\u5e74\u9f84",dataIndex:"age",key:"age",width:120,sorter:{compare:function(e,t){return e.age-t.age}}},{title:"\u4f4f\u5740",dataIndex:"address",key:"address"},{title:"\u7c7b\u578b",dataIndex:"type",key:"type",width:120,render:function(e,t,n){return l.a.createElement("span",{style:{color:"#f00"}},1===e?"\u852c\u83dc":2===e?"\u6c34\u679c":"\u4e3b\u98df")}},{title:"\u64cd\u4f5c",dataIndex:"work",key:"work",width:120,fixed:"right",render:function(e,t,n){return l.a.createElement("span",{style:{color:"#00f"},onClick:Q.bind(this,t.id)},"\u5220\u9664")}}];function Q(e){console.log(e,"dd");var t=A.filter((function(t){return t.id!==e}));console.log(t,"res"),C(t.slice())}return Object(a.useEffect)((function(){s([])}),[n]),console.log("chooseKey",u),console.log(A,"_dataSource"),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{className:"left"},l.a.createElement("h2",null,"React hooks\u4effAntd\u7ec4\u4ef6\u5f00\u53d1---Table\u7ec4\u4ef6"),l.a.createElement("h3",null,"\u5df2\u5b9e\u73b0\u7684\u529f\u80fd"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u9009\u4e2d\u72b6\u6001\uff0c\u81ea\u5b9a\u4e49\u5b9e\u73b0"),l.a.createElement("li",null,"\u70b9\u51fb\u884c\u662f\u5426\u9009\u4e2drowChoosed"),l.a.createElement("li",null,"\u6839\u636e\u5b57\u6bb5\u6392\u5e8fsorter"),l.a.createElement("li",null,"\u6570\u636e\u8fd4\u56de\u503crender\u6e32\u67d3\u5904\u7406"),l.a.createElement("li",null,"\u5b9e\u73b0table\u52a0border\uff0c\u7a7a\u7740table\u6837\u5f0f"),l.a.createElement("li",null,"\u5b9e\u73b0\u9f20\u6807\u60ac\u6d6e\u6539\u53d8\u5f53\u524d\u884c\u6837\u5f0f"),l.a.createElement("li",null,"\u9875\u9762\u662f\u5426\u52a0\u8f7d\u4e2dloading"),l.a.createElement("li",null,"\u65b0\u589e\u5220\u9664\u4e00\u884c"),l.a.createElement("li",null,"\u5b9e\u73b0\u53ef\u5c55\u5f00\u529f\u80fd"),l.a.createElement("li",null,"Table\u3001scroll\u6eda\u52a8"),l.a.createElement("li",null,"\u5f15\u7528aqua\u521d\u6b65\u7f8e\u5316\u6837\u5f0f")),l.a.createElement("h3",null,"\u672a\u5b9e\u73b0\u7684\u529f\u80fd"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5b9e\u73b0\u5de6\u53f3\u680f\u5b9a\u4f4d+\u6ed1\u52a8\u6d4f\u89c8"),l.a.createElement("li",null,"\u5b9e\u73b0\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7b5b\u9009filterDropdown"),l.a.createElement("li",null,"\u5b9e\u73b0\u5355\u5143\u683c\u53ef\u7f16\u8f91\u529f\u80fd"),l.a.createElement("li",null,"\u8868\u683c\u7684\u5206\u9875\u8bbe\u7f6e")),l.a.createElement("br",null)),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"Table1"},l.a.createElement("h3",null,"Table1"),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return r("checkbox")}},"checkbox"),l.a.createElement("button",{onClick:function(){return r("radio")}},"radio"),l.a.createElement("button",{onClick:function(){return r()}},"\u65e0"),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement(R,{dataSource:I,columns:F,rowSelection:{type:n,selectedRowKeys:u,rowKey:"id",rowChoosed:!0,onChange:function(e){return s(e)}}})),l.a.createElement("br",null),l.a.createElement("div",{className:"Table2"},l.a.createElement("h3",null,"Table2"),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return b({borderd:!E.borderd})}},"\u6dfb\u52a0\\\u53d6\u6d88\u8fb9\u6846"),l.a.createElement("button",{onClick:function(){return y(!g)}},"\u8bbe\u7f6e\\\u53d6\u6d88loading"),l.a.createElement("button",{onClick:function(){return O(!j)}},"\u662f\u5426\u6dfb\u52a0\u6ee4\u955c"),l.a.createElement("button",{onClick:function(){return function(){var e=[].concat(Object(d.a)(A),[{id:String(A.length+1),name:"\u80e1\u5f66\u658c",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",type:1,description:"\u738b\u7956\u84dd\u662f\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u7684"}]);console.log(e,"newData"),C(e.slice())}()}},"\u6dfb\u52a0\u4e00\u884c"),l.a.createElement("button",{onClick:function(){return H(!U)}},"\u8bbe\u7f6e/\u53d6\u6d88\u5c55\u5f00\u884c")),l.a.createElement("br",null),l.a.createElement(R,{dataSource:A,columns:T,borderd:E.borderd,loading:g,isTheme:j?"sepia(.6)":"",expandable:U?{expandedRowRender:function(e){return l.a.createElement("span",{style:{color:"rgb(100, 155, 0)"}},e.description)},onExpand:function(e){return function(e){console.log(e,"arr key isexpend")}(e)},rowExpandable:function(e){return"\u738b\u7956\u84dd"!==e.name}}:"",scroll:{y:150}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)))};n(123);function H(e){var t=e.autoplay,n=void 0===t||t,r=e.deployTime,c=void 0===r?1e3:r,i=e.initIdx,u=void 0===i?0:i,s=e.children,m=e.height,d=void 0===m?300:m,p=s.length,E=Object(a.useState)(u),b=Object(o.a)(E,2),f=b[0],h=b[1],g=Object(a.useState)(s[0]),y=Object(o.a)(g,2),v=y[0],k=y[1];function j(e){var t=e;N=setInterval((function(){t===p&&(t=0),k(s[t]),h(t),t++}),c)}function O(e){clearInterval(N),N=null}function x(e){O(),"left"===e?(0===f&&(f=p),f--):"right"===e&&(f===p-1&&(f=-1),f++),h(f),k(s[f]),n&&j()}return Object(a.useEffect)((function(){return n&&j(u),function(){O()}}),[n,u]),l.a.createElement("div",{className:"spider-container"},l.a.createElement("div",{className:"spider",style:{height:d}},v),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"dot"},s.map((function(e,t){return l.a.createElement("button",{key:t,onClick:function(){return function(e){O(),h(e),k(s[e]),n&&j(e)}(t)},style:{color:t===f?"#f00":""}},t)}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"arow"},l.a.createElement("button",{onClick:function(){return n&&j(f)}},"\u5f00\u59cb"),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return O()}},"\u505c\u6b62")),l.a.createElement("div",{className:"arow"},l.a.createElement("button",{onClick:function(){return x("left")}},"TurnLeft"),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return x("right")}},"TurnRight")))}n(124);function T(){return l.a.createElement("div",{className:"container"},l.a.createElement(H,{autoplay:!0,initIdx:0,deployTime:2e3,height:200},l.a.createElement("div",null,l.a.createElement("img",{src:"http://img3.imgtn.bdimg.com/it/u=1553709961,3652782060&fm=26&gp=0.jpg",alt:"\u56fe\u4e00"})),l.a.createElement("div",null,l.a.createElement("img",{src:"http://img4.imgtn.bdimg.com/it/u=3471735586,1899139408&fm=26&gp=0.jpg",alt:"\u56fe\u4e8c"})),l.a.createElement("div",null,l.a.createElement("img",{src:"http://img2.imgtn.bdimg.com/it/u=1303806583,1572175195&fm=26&gp=0.jpg",alt:"\u56fe\u4e09"})),l.a.createElement("div",null,l.a.createElement("img",{src:"http://img4.imgtn.bdimg.com/it/u=1028120364,2465714686&fm=11&gp=0.jpg",alt:"\u56fe\u56db"}))))}var Q=n(6),B=n(11);var L=function(){return l.a.createElement(Q.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"menu"},l.a.createElement("h3",{style:{width:200}},"\u5bfc\u822a"),l.a.createElement("div",{className:"dropdown",style:{height:"50px",width:"200px"}},l.a.createElement("a",{className:"dropdown-toggle",href:"#"},"React Hooks \u4eff Antd"),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",{className:"dropdown-item"},l.a.createElement(Q.b,{to:"/RTable"},"RTable\u7ec4\u4ef6"),l.a.createElement(Q.b,{to:"/RSpider"},"\u8f6e\u64ad\u56fe\u7ec4\u4ef6")))),l.a.createElement("div",{class:"dropdown",style:{height:"50px",width:"200px"}},l.a.createElement("a",{class:"dropdown-toggle",href:"#"},"React Hooks"),l.a.createElement("ul",{class:"dropdown-menu"},l.a.createElement("li",{class:"dropdown-item"},l.a.createElement(Q.b,{to:"/"},"Home")),l.a.createElement("li",{class:"dropdown-item"},l.a.createElement(Q.b,{to:"/UseForm"},"UseForm")),l.a.createElement("li",{class:"dropdown-item"},l.a.createElement(Q.b,{to:"/ReactHooks"},"ReactHooks")),l.a.createElement("li",{class:"dropdown-item"},l.a.createElement(Q.b,{to:"/HookUseReducer1"},"HookUseReducer1")),l.a.createElement("li",{class:"dropdown-item"},l.a.createElement(Q.b,{to:"/HookUseReducer2"},"HookUseReducer2")),l.a.createElement("li",{class:"dropdown-item"},l.a.createElement(Q.b,{to:"/picture"},"picture")),l.a.createElement("li",{class:"dropdown-item"},l.a.createElement(Q.b,{to:"/itemIndex"},"itemIndex"))))),l.a.createElement("div",{className:"content"},l.a.createElement(B.a,{path:"/",exact:!0,component:E}),l.a.createElement(B.a,{path:"/UseForm",component:m}),l.a.createElement(B.a,{path:"/ReactHooks",component:p}),l.a.createElement(B.a,{path:"/HookUseReducer1",component:f}),l.a.createElement(B.a,{path:"/HookUseReducer2",component:g}),l.a.createElement(B.a,{path:"/picture",component:v}),l.a.createElement(B.a,{path:"/itemIndex",component:S}),l.a.createElement(B.a,{path:"/RTable",component:U}),l.a.createElement(B.a,{path:"/RSpider",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){},59:function(e,t,n){e.exports=n(127)},64:function(e,t,n){},65:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.2f9e006d.chunk.js.map