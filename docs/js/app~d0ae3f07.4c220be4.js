(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={"app~d0ae3f07":0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;r.push([0,"chunk-vendors~f269b12e","chunk-vendors~d939e436","chunk-vendors~fdc6512a"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("NavigationComponent"),a("HomeComponent"),a("AboutComponent",{attrs:{END_POINT:t.url}}),a("SkillsComponent",{attrs:{END_POINT:t.url}}),a("FooterComponent"),t._m(1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"preloader"},[a("div",{staticClass:"sk-spinner sk-spinner-pulse"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"go-top",attrs:{href:"#"}},[a("i",{staticClass:"fa fa-angle-up"})])}],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar navbar-default navbar-fixed-top",attrs:{role:"navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse"}},[a("span",{staticClass:"icon icon-bar"}),a("span",{staticClass:"icon icon-bar"}),a("span",{staticClass:"icon icon-bar"})]),a("a",{staticClass:"navbar-brand smoothScroll",attrs:{href:"#top"}},[t._v("andycodev")])]),a("div",{staticClass:"collapse navbar-collapse"},[a("ul",{staticClass:"nav navbar-nav navbar-right"},[a("li",[a("a",{staticClass:"smoothScroll",attrs:{href:"#top"}},[a("span",[t._v("Inicio")])])]),a("li",[a("a",{staticClass:"smoothScroll",attrs:{href:"#about"}},[a("span",[t._v("Sobre mi")])])]),a("li",[a("a",{staticClass:"smoothScroll",attrs:{href:"#skills"}},[a("span",[t._v("HABILIDADES")])])])])])])])}],l={name:"NavigationComponent"},c=l,d=a("2877"),u=Object(d["a"])(c,o,i,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"home"}},[a("div",{staticClass:"overlay"}),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-offset-1 col-md-10 col-sm-12 wow fadeInUp",attrs:{"data-wow-delay":"0.3s"}},[a("h1",{staticClass:"fadeInUp",attrs:{"data-wow-delay":"0.6s"}},[t._v(" Hola👋, Soy Andy Giampierre ordoñez Vega ")]),a("h2",{staticClass:"rol wow fadeInUp",attrs:{"data-wow-delay":"0.6s"}},[t._v(" Desarrollador "),a("strong",[t._v("FullStack 👨‍💻")])])])])])])}],m={name:"HomeComponent"},w=m,h=Object(d["a"])(w,f,v,!1,null,null,null),_=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-md-3 col-sm-4 wow fadeInUp about-img",attrs:{"data-wow-delay":"0.6s"}}),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"col-md-12 col-sm-12 wow fadeInUp",attrs:{"data-wow-delay":"0.3s"}},[a("div",{staticClass:"section-title text-center"},[a("h1",[t._v("Experiencia")]),a("h3",[t._v(" Resumen sobre mi experiencia y el trabajo que desarrollo según mi rol. "+t._s(t.END_POINT)+" ")])])]),t._l(t.experiences,(function(e){return a("di",{key:e.id,staticClass:"col-sm-12 col-md-4 wow fadeInUp",attrs:{"data-wow-delay":"0.3s"}},[a("div",{staticClass:"experience"},[a("h1",[t._v(t._s(e.entity))]),a("h2",{staticClass:"text-center"},[t._v(t._s(e.date))]),a("h3",[t._v(t._s(e.rol))]),a("img",{staticClass:"img-responsive",attrs:{src:e.img,alt:e.rol}}),a("p",[t._v(" "+t._s(e.description)+" ")])])])}))],2)])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-9 col-sm-8 wow fadeInUp",attrs:{"data-wow-delay":"0.2s"}},[a("div",{staticClass:"about-thumb"},[a("h1",[t._v("Sobre mi")]),a("p",[t._v(" Egresado de la carrera de Ingeniería de Sistemas de la Universidad Peruana Unión sede Lima. ")]),a("p",[t._v(" Actualmente me encuentro trabajando como Analista Desarrollador fullstack en la Universidad Peruana Unión de Lima desde mayo del 2020 hasta la fecha. ")]),a("p",[t._v("Enfocado a la programación web.")])])])}],g=a("c7eb"),y=a("1da1"),k=(a("d3b7"),{name:"AboutComponent",props:["END_POINT"],data:function(){return{experiences:[],repos:[]}},mounted:function(){this.getExperiences()},methods:{getExperiences:function(){var t=this;return Object(y["a"])(Object(g["a"])().mark((function e(){var a,s;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.END_POINT);case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.experiences=s.experiences.reverse();case 7:case"end":return e.stop()}}),e)})))()}}}),x=k,O=Object(d["a"])(x,b,C,!1,null,null,null),j=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"skills"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-offset-1 col-md-10 col-sm-12"},[a("div",{staticClass:"col-lg-offset-1 col-lg-10 section-title wow fadeInUp",attrs:{"data-wow-delay":"0.4s"}},[a("h1",[t._v("Mis Habilidades")]),a("p",[t._v(" Lenguajes de programación, frameworks, gestores de bases de datos y tecnologías en las cuales tengo conocimientos. ")]),a("ul",{staticClass:"social-icon"},t._l(t.skills,(function(e){return a("li",{key:e,staticClass:"tecnologias"},[t._v(" "+t._s(e)+" ")])})),0)])])])])])},I=[],S={name:"SkillsComponent",props:["END_POINT"],data:function(){return{skills:[]}},mounted:function(){this.getSkills()},methods:{getSkills:function(){var t=this;return Object(y["a"])(Object(g["a"])().mark((function e(){var a,s;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.END_POINT);case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.skills=s.skills;case 7:case"end":return e.stop()}}),e)})))()}}},N=S,U=Object(d["a"])(N,E,I,!1,null,null,null),P=U.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-sm-12"},[a("ul",{staticClass:"social-icon"},[a("li",[a("a",{staticClass:"fa fa-linkedin wow fadeInUp",attrs:{href:"https://www.linkedin.com/in/andy-giampierre-ordo%C3%B1ez-vega-6ab16712a/",target:"_blank","data-wow-delay":"0.6s"}})]),a("li",[a("a",{staticClass:"fa fa-github wow fadeInUp",attrs:{href:"https://github.com/giampierre",target:"_blank","data-wow-delay":"0.4s"}})]),a("li",[a("a",{staticClass:"fa fa-facebook wow fadeInUp",attrs:{href:"https://www.facebook.com/agov10/",target:"_blank","data-wow-delay":"0.2s"}})]),a("li",[a("a",{staticClass:"fa fa-instagram wow fadeInUp",attrs:{href:"https://www.instagram.com/andygiampierre/",target:"_blank","data-wow-delay":"0.8s"}})])]),a("p",{staticClass:"wow fadeInUp",attrs:{"data-wow-delay":"1s"}},[t._v(" Email: andyvega@upeu.edu.pe ")])])])])])}],T={name:"FooterComponent"},A=T,H=Object(d["a"])(A,$,D,!1,null,null,null),M=H.exports,F={name:"App",components:{NavigationComponent:p,HomeComponent:_,AboutComponent:j,SkillsComponent:P,FooterComponent:M},data:function(){return{url:"/data.json"}}},L=F,z=Object(d["a"])(L,n,r,!1,null,null,null),B=z.exports;s["a"].config.productionTip=!0,new s["a"]({render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app~d0ae3f07.4c220be4.js.map