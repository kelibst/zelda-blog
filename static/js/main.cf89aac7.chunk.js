(this["webpackJsonpzelda-blog"]=this["webpackJsonpzelda-blog"]||[]).push([[0],{32:function(e,a,t){e.exports=t(62)},39:function(e,a,t){},61:function(e,a,t){e.exports=t.p+"static/media/ninjaS.50eaba62.png"},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),l=t.n(c);t(37),t(19),t(38),t(39);function o(){return r.a.createElement("div",{className:"hero container d-flex"},r.a.createElement("div",{className:"hero-text col-6"},r.a.createElement("h4",{className:"text-dark font-weight-bold"},"Hello Heros"),r.a.createElement("h3",{className:"text-dark"},"You are at the right place for some Zelda News")),r.a.createElement("div",{className:"col-6 hero-img"}))}var s=t(6);function i(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light primary-color"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Ninja Blog"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampleNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(s.c,{className:"nav-link",to:"/"},"Home",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{className:"nav-link",to:"/pricing"},"Pricing")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"More"),r.a.createElement("div",{className:"dropdown-menu dropdown-primary","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement(s.b,{className:"dropdown-item",to:"/"},"Action"),r.a.createElement(s.b,{className:"dropdown-item",to:"/"},"Another action"),r.a.createElement(s.b,{className:"dropdown-item",to:"/"},"Something else here")))),r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"md-form my-0"},r.a.createElement("input",{className:"inp-style form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search"})))))}function m(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement(i,null),r.a.createElement(o,null)))}var d=t(1),u=t(10),p=t(11),E=t(14),h=t(13),v=t(12),N=t.n(v),f=function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={posts:[]},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("https://jsonplaceholder.typicode.com/posts").then((function(a){e.setState({posts:a.data.slice(0,10)})}))}},{key:"render",value:function(){var e=this.state.posts,a=e.length?e.map((function(e){return r.a.createElement("div",{className:"col-sm-6 col-md-4",key:e.id},r.a.createElement("div",{className:"card card-cascade wider border-0"},r.a.createElement("div",{className:"view view-cascade gradient-card-header peach-gradient"},r.a.createElement("h2",{className:"card-header-title mb-3"},e.title),r.a.createElement("p",{className:"mb-0"},r.a.createElement("i",{className:"fas fa-calendar mr-2"}),e.userId)),r.a.createElement("div",{className:"card-body card-body-cascade text-center"},r.a.createElement("p",{className:"card-text"},e.body),r.a.createElement(s.b,{to:"/"+e.id,className:"orange-text d-flex flex-row-reverse p-2"},r.a.createElement("h5",{className:"waves-effect waves-light"},"Read more",r.a.createElement("i",{className:"fas fa-angle-double-right ml-2"}))))))})):r.a.createElement("div",{className:"mx-auto text-center"},r.a.createElement("p",{className:"text-center"},"Post not Loaded"));return r.a.createElement("div",{className:"container raised"},r.a.createElement("h1",{className:"text-center display-5 pt-5 font-weight-bolder text-dark"},"Welcome to the Zelda Home page"),r.a.createElement("div",{className:"row my-5 py-5"},a))}}]),t}(n.Component);function b(){return r.a.createElement("div",{className:"container raised"},r.a.createElement("h1",{className:"text-center font-weight-bolder text-dark"},"Welcome to the Zelda pricing page"),r.a.createElement("p",{className:"text-secondary"},r.a.createElement("h2",{className:"text-dark font-weight-bold"},"Title"),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-secondary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, odit. Doloribus sit error aliquid officiis adipisci voluptas, possimus nam excepturi animi earum aperiam ullam repudiandae, maiores neque molestiae quia placeat minus consequuntur totam, cumque illo quis aut. Dolores animi accusamus, maiores consequatur fugiat magni fuga nam dicta reiciendis quod quae, saepe sapiente excepturi eligendi ipsa ducimus. Quae corporis ipsam cupiditate facilis ex inventore porro veniam fugiat nesciunt ducimus laborum doloribus aliquam harum cumque iure fuga, sed, eveniet tempore quam. Rerum.")))}function g(){return r.a.createElement("div",{className:"container raised"},r.a.createElement("h1",{className:"text-center font-weight-bolder text-dark"},"Welcome to the about page"),r.a.createElement("p",{className:"text-secondary"},r.a.createElement("h2",{className:"text-dark font-weight-bold"},"Title"),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-secondary"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, odit. Doloribus sit error aliquid officiis adipisci voluptas, possimus nam excepturi animi earum aperiam ullam repudiandae, maiores neque molestiae quia placeat minus consequuntur totam, cumque illo quis aut. Dolores animi accusamus, maiores consequatur fugiat magni fuga nam dicta reiciendis quod quae, saepe sapiente excepturi eligendi ipsa ducimus. Quae corporis ipsam cupiditate facilis ex inventore porro veniam fugiat nesciunt ducimus laborum doloribus aliquam harum cumque iure fuga, sed, eveniet tempore quam. Rerum.")))}var x=function(e){Object(E.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={post:null},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.post_id;N.a.get("https://jsonplaceholder.typicode.com/posts/"+a).then((function(a){e.setState({post:a.data})}))}},{key:"render",value:function(){var e=this.state.post?r.a.createElement("div",{className:"post"},r.a.createElement("h4",{className:"text-center font-weight-bold my-5"},this.state.post.title," "),r.a.createElement("p",{className:"text-secondary"},this.state.post.body)):r.a.createElement("div",{className:"text-center"},r.a.createElement("h4",{className:"text-center font-weight-bold"},"Loading Post"));return r.a.createElement("div",{className:"col-sm-8 col-md-6 mx-auto my-5 py-5"},r.a.createElement("h4",null,e))}}]),t}(n.Component);function y(){return r.a.createElement("footer",{className:"page-footer font-small special-color-dark pt-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mb-4"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control form-control-sm mr-3 w-75",type:"text",placeholder:"Search","aria-label":"Search"}),r.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"}))),r.a.createElement("div",{className:"col-md-6 mb-4"},r.a.createElement("form",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",placeholder:"Your email","aria-label":"Your email","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-sm btn-outline-white my-0",type:"button"},"Sign up")))))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{target:"_blank",href:"http://portfolio-keli.herokuapp.com/"}," Keli")))}var w=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:f}),r.a.createElement(d.a,{path:"/pricing",component:b}),r.a.createElement(d.a,{path:"/about",component:g}),r.a.createElement(d.a,{path:"/:post_id",component:x})),r.a.createElement(y,null)))};t(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.cf89aac7.chunk.js.map