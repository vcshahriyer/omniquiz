(this.webpackJsonpomniquiz=this.webpackJsonpomniquiz||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=a(10),s=(a(71),a(18)),l=a(20),u=a(12),m=a(13),p=a(17),d=a(14),g=a(16),A=a(106),h=a(107),f=a(53),v=a.n(f),E=(a(72),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleToggle=function(){var e=a.state.toggle;a.setState({toggle:!e})},a.state={toggle:!0},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.toggle?"vc-dropdown":"vc-dropdown show"},r.a.createElement("span",{className:"dropdown-toggle nav-link",onClick:this.handleToggle},"Account"),r.a.createElement("div",{className:"vc-dropdown-menu"},r.a.createElement("a",{className:"dropdown-item",href:"/"},"Login"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Logout"),r.a.createElement("a",{className:"dropdown-item",href:"/"},"Registration")))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{bg:"light",expand:"lg"},r.a.createElement(i.c,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:v.a,alt:""})),r.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"ml-auto mr-3"},r.a.createElement(i.c,{className:"nav-link",exact:!0,to:"/"},"Home"),r.a.createElement(i.c,{className:"nav-link",to:"/quiz/random"},"Random Quiz"),r.a.createElement(E,null))))}}]),t}(n.Component),O=a(24),k=a.n(O),w=a(31),y=a(25),j=a(22),N=a.n(j);N.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(console.log(e),l.b.error("An unexpected error occurrred.")),Promise.reject(e)}));var C={get:N.a.get,post:N.a.post,put:N.a.put,delete:N.a.delete,setJwt:function(e){N.a.defaults.headers.common["x-auth-token"]=e}};var Q=[{link:"/img/9.jpg",id:9},{link:"/img/10.jpg",id:10},{link:"/img/11.jpg",id:11},{link:"/img/12.jpg",id:12},{link:"/img/13.jpg",id:13},{link:"/img/15.jpg",id:15},{link:"/img/16.jpg",id:16},{link:"/img/17.jpg",id:17},{link:"/img/19.jpg",id:19},{link:"/img/14.jpg",id:14},{link:"/img/21.jpg",id:21},{link:"/img/24.jpg",id:24},{link:"/img/26.jpg",id:26},{link:"/img/28.jpg",id:28},{link:"/img/31.jpg",id:31}];function x(e){var t="/img/default.jpg";return Q.forEach((function(a){a.id===e&&(t=a.link)})),t}var D=function(e){var t=e.name,a=e.id;return r.a.createElement("figure",{className:"Qcard"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:"/omniquiz"+x(a),alt:"pr-sample23"})),r.a.createElement("figcaption",null,r.a.createElement("div",{className:"circle"},r.a.createElement("span",{className:"day"},"10"),r.a.createElement("span",{className:"month"},"MCQ")),r.a.createElement("h3",null,t),r.a.createElement("p",null,"The Open Trivia Database provides a completely free JSON API of multiple choice Questions .")),r.a.createElement(i.b,{to:"/quiz/".concat(a)}))},B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={categories:[],searchQuery:""},a.handleSearch=function(e){a.setState({searchQuery:e})},a.getPageData=function(){var e=a.state.searchQuery,t=Object(y.a)(a.state.categories);return e&&(t=t.filter((function(t){return t.name.toLowerCase().startsWith(e.toLowerCase())}))),t},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("https://opentdb.com/api_category.php");case 2:t=e.sent,a=t.data,this.setState({categories:a.trivia_categories});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.getPageData();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-9 col-md-5 searchbox"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-lg"},"Search")),r.a.createElement("input",{type:"text",className:"form-control","aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",onChange:function(t){e.handleSearch(t.currentTarget.value)}}))),t.map((function(e){return r.a.createElement(D,{key:e.id,name:e.name,id:e.id})})))}}]),t}(n.Component),q=a(61),z=a(62),M=a.n(z),S=a(103),P=a(104),T=a(105),F=a(63),I=a(34),K=a.n(I),G=a(35),H=a.n(G);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){Object(q.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).renderTime=function(e){return 1===e?r.a.createElement("div",{className:"timer text"},"Too lale..."):r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"text"},"Remaining"),r.a.createElement("div",{className:"value"},e),r.a.createElement("div",{className:"text"},"seconds"))},a.handleNextQuestion=function(){var e=a.state,t=e.questions,n=e.currentQuestion,r=t.indexOf(n)+1;if(r>=t.length)return a.props.history.push("/score/".concat(a.state.score));var c=t[r],o=a.makeOptions(c);a.setState({currentQuestion:c,options:o,clicked:!1,optionElements:a.state.optionElCopy})},a.handleSelect=function(e,t){var n=a.state,r=n.currentQuestion,c=n.clicked,o=Object(y.a)(a.state.optionElements),i=o.indexOf(e);!1===c&&t===r.correct_answer?(o[i]=W({},o[i],{class:"col-sm-6 quiz-option correct"}),a.setState({score:a.state.score+1,clicked:!0,optionElements:o})):(!1===c&&(o[i]=W({},o[i],{class:"col-sm-5 quiz-option wrong"})),a.setState({clicked:!0,optionElements:o}),l.b.error("Correct Answer: "+H.a.decode(K.a.decode(r.correct_answer))))},a.state={questions:[],currentQuestion:{},options:[],score:0,clicked:!1,optionElements:[{id:0,label:"A) ",class:"col-sm-6 quiz-option"},{id:1,label:"B) ",class:"col-sm-6 quiz-option"},{id:2,label:"C) ",class:"col-sm-6 quiz-option"},{id:3,label:"D) ",class:"col-sm-6 quiz-option"}]},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"makeOptions",value:function(e){var t=[e.correct_answer].concat(Object(y.a)(e.incorrect_answers));return t.sort((function(e,t){return.5-Math.random()})),t}},{key:"componentDidMount",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t,a,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.state.optionElCopy=Object(y.a)(this.state.optionElements),t=this.props.match.params.id,e.next=5,"random"===(c=t)?C.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=base64"):C.get("https://opentdb.com/api.php?amount=10&category=".concat(c,"&difficulty=easy&type=multiple&encode=base64"));case 5:if(a=e.sent,n=a.data,r=n.results[0],!n.response_code){e.next=10;break}throw new Error("No question found for this category");case 10:this.setState({questions:n.results,currentQuestion:r,options:this.makeOptions(r)}),e.next=20;break;case 13:if(e.prev=13,e.t0=e.catch(0),!e.t0.response||404!==e.t0.response.status){e.next=19;break}return e.abrupt("return",this.props.history.replace("/not-found"));case 19:l.b.error(e.t0.message);case 20:case"end":return e.stop()}var c}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.currentQuestion,n=t.options,c=t.score,o=t.optionElements;return r.a.createElement(r.a.Fragment,null,M.a.isEmpty(a)?r.a.createElement(S.a,null,r.a.createElement(P.a,{variant:"primary",disabled:!0},r.a.createElement(T.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading...")):r.a.createElement("div",{className:"quiz-box"},r.a.createElement("div",{className:"quiz-options row"},r.a.createElement("div",{className:"col-md-12 question"},r.a.createElement("h3",null,H.a.decode(K.a.decode(a.question)))),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("div",{className:"row"},o.map((function(t){return r.a.createElement("div",{key:t.id,className:t.class,onClick:function(){e.handleSelect(t,n[t.id])}},t.label+H.a.decode(K.a.decode(n[t.id])))})))),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("div",{className:"countdown"},r.a.createElement(F.CountdownCircleTimer,{onComplete:function(){return e.handleNextQuestion(),[!0,100]},renderTime:this.renderTime,isPlaying:!0,durationSeconds:10,strokeWidth:5,size:130,colors:[["#009432",.73],["#32ff7e",.1],["#ff5252",.11]]})))),r.a.createElement("button",{onClick:function(){e.handleNextQuestion()},className:"btn btn-outline-secondary ml-auto",type:"button"},"Next Question"),r.a.createElement("span",{className:"scorepill ml-5"},r.a.createElement("span",{className:"score"},"Score: "),r.a.createElement("span",{className:"count"},c))))}}]),t}(n.Component),X=a(64),V=a.n(X),R=function(e){var t=10*e.match.params.score;return r.a.createElement("div",{className:"score-box"},r.a.createElement("h1",null,"Your Final Score is : ",t,"%"),r.a.createElement("img",{src:V.a,alt:"party"}))},U=function(){return r.a.createElement("h1",{className:"alert alert-danger"},"Not Found")};a(97),a(98),a(99);var Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(b,null),r.a.createElement("main",{className:"container"},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/quiz/:id",exact:!0,component:J}),r.a.createElement(s.b,{path:"/score/:score",exact:!0,component:R}),r.a.createElement(s.b,{path:"/",exact:!0,component:B}),r.a.createElement(s.b,{path:"/not-found",exact:!0,component:U}),r.a.createElement(s.a,{to:"/not-found"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{basename:"/omniquiz"},r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEd0lEQVR4nO3cv2tbVxjG8edc17Li1BIUUpcOhZbSgCstHlRCHceiLemUv0Cr46HpWJqttEMpdMgQAo1FNnXMkqkZgkxICRjqxWogHTp0SKGFgAxtFQXrdHAcW7KLf+Q9957b5/lsMtY5l3u/OjpGVwZERESEkQsxZnVm/qKHvwigAqAQYA4mfQAdB7e8/uDuMgBvObhpAKdPv//6+JhrAa5uOa5s8+2nm77x8OGPj6xGTKwGAuDGk+R7XfyQXH3rBWb3wh2zGqg6M78Eh0tW48l/cW9Ov/rGoz/+/O0ni9FeshgEAJ695+946x24hY+BE5NWUwzPd+2bocfuk8tB5sl8/n/+hl/5Afj1l525vVsCsGwxvOVbQGX3g5AXn8qJya1zOayy368eh2UAw7t9XXw7e8+l2V9WlgFIDpntAUa9du7toce91TV0my0MuhtB5ht9T06b1fxJuYTyYgPF2uzQz3+/ZjL83vnCDLtXyIv/fzLobqDbbKU2X2oB6OIfXprnSnsAcsH2AAdZb7/yQs+v1h+bjpf1/KPjpUUrADkFQE4BkMtsD/CiihMOvSc7H41n9R66fSx5ldsV4Ox741kfwnNztdy+jvIbwOeXJlGeyv7wy1MJLn96MuvDOLbsz+AxTZ9KcPNGCR+eHc9kCS5OOHw0X8DNGyVMn8rtaczvHgDYiuDKV1NZH0au5TddMaEAyCkAcgqAnAIgpwDIKQByCoCcAiCnAMgpAHIKgJwCIBf9p4G9Jx6fffkX7q72MdgEkjFgvlbAt1+cPPBj4NHnpuUox5i16FeAW7f7WLm/cwEHm8DK/T5u3e4f+blpOcoxZi36ACSs6AO4cL6AhTMFJM/+l0kyBiycKeDC+YO/IT363LQc5RizFv0eoDjhcPXrl1N/LovoVwAJSwGQUwDkFAA5BUBOAZBTAOQUADkFQE4BkFMA5KL/LED3A4QV/Qqg+wHCij4ACSv6AHQ/QFjR7wF0P0BY0a8AEpYCIKcAyCkAcgqAnAIgpwDIKQByCoCcAiCnAMhF/1mA7gcIK/oVQPcDhBV9ABJW9AHofoCwot8D6H6AsKJfASQsBUBOAZBTAOQUADkFQE4BkFMA5BQAOQVATgGQi/6zAN0PEFb0K4DuBwgr+gAkrOgD0P0AYUW/B9D9AGFFvwJIWAqAnAIgpwDIKQByCoCcAiCnAMgpAHIKgJwCIKcAyCkAcgqAnAIgpwDIKQByCoCcAiCnAMgpAHKZ3RVcrT/OamrZRSsAudQCSMqltKbKvTTPVWoBlBcbiuAQknIJ5cVGavOltgco1mZRrM2mNZ0ckvYA5CwDGPou9KC7YTg0t33Opdn3zi0D6Ox+0G22FIGBQXcD3WZr9Med/X73OMz2AA5u2cN/t/24t7qG3uqa1fCyi3P+utlYVgMBcJWZuTuAqxuOKXv4dufBvQ8AeIvRLN8C/NNN3wB823BMGeLbW+fY5uIDtivA8zGr784teu+WAFQAxP9vMuLWB9Bxzl9f//leE4YXX0RERHj9C+DDh/54JEN1AAAAAElFTkSuQmCC"},64:function(e,t,a){e.exports=a.p+"static/media/party.2e052da9.png"},66:function(e,t,a){e.exports=a(100)},71:function(e,t,a){},72:function(e,t,a){},99:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.c79b3316.chunk.js.map