(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{176:function(t,e,r){var content=r(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("e46b6ba2",content,!0,{sourceMap:!1})},177:function(t,e,r){var content=r(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("6759f5ab",content,!0,{sourceMap:!1})},178:function(t,e,r){"use strict";var n=r(176);r.n(n).a},179:function(t,e,r){(t.exports=r(56)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},180:function(t,e,r){"use strict";var n=r(177);r.n(n).a},181:function(t,e,r){(t.exports=r(56)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.avatar-img{height:24px}",""])},183:function(t,e,r){"use strict";r.r(e);r(16),r(12),r(58),r(15),r(59),r(74),r(109),r(178);var n=r(26),o=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,l=(r(53),".github.io");function c(){var t="ya-androidapp",e=window.location.username;if(void 0!==e&&e.length>0)t=e;else{var r=window.location.hostname;if(r.indexOf(l)>-1)t=r.split(l)[0];else{var n=window.location.pathname;if(r.indexOf("github.com")>-1&&n.length>1)t=n.substring(1).split("/")[0];else{var o=function(){var t,e=[],r="",n="";t=(r=window.location.search.slice(1).split("&")).length;for(var i=0;i<t;i++)n=r[i].split("="),e.push(n[0]),e[n[0]]=n[1];return e}();void 0!==o.name&&(t=o.name)}}}return t}var d="__";function _(t,e){return e.indexOf(d)>-1?null===t[e.substring(0,e.indexOf(d))]?null:_(t[e.substring(0,e.indexOf(d))],e.substring(d.length+e.indexOf(d))):t[e]}var f={components:{Logo:o},asyncData:function(t){var e,r;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.store,r=c(),console.log("username",r),e.commit("repos/setUserName",r),console.log("repos/page",e.getters["repos/page"]),console.log("repos/username",e.getters["repos/username"]),console.log("repos/repos",e.getters["repos/repos"]),!e.getters["repos/repos"].length){n.next=9;break}return n.abrupt("return");case 9:return n.next=11,regeneratorRuntime.awrap(e.dispatch("repos/fetchRepos"));case 11:case"end":return n.stop()}}))},methods:{sortBy:function(t){this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]}},computed:{filteredRepos:function(){console.log("this.$store",this.$store);var data=this.$store.getters["repos/repos"],t=this.sortKey,e=this.sortOrders[t]||1;return console.log("computed","filteredRepos()","data",data),console.log("computed","filteredRepos()","sortKey",t),console.log("computed","filteredRepos()","order",e),t&&(data=data.slice().sort((function(a,b){var r=_(a,t),n=_(b,t);if(null===r)return-1*e;if(null===n)return 1*e;var o=String(r).toLowerCase(),l=String(n).toLowerCase();return(o===l?0:o>l?1:-1)*e}))),data}},data:function(){var t={index:"#",html_url:"Repository",url:"URL",has_pages:"Github Pages",created_at:"Created",updated_at:"Updated",language:"Language",license__name:"License",archived:"Archived",disabled:"Disabled",fork:"Fork",issues:"Issues",stargazers:"Stargazers",watchers:"Watchers",description:"Description"},e={};return Object.keys(t).forEach((function(t){e[t]=1})),{columns:t,repos:this.$store.getters["repos/repos"],sortKey:"",sortOrders:e}}},h=(r(180),Object(n.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",[r("logo"),t._v(" "),r("h1",{staticClass:"title"},[t._v("Nuxtjs-Repos-index-gh-pages")]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v("My tremendous Nuxt.js project")]),t._v(" "),t._m(0)],1)]),t._v(" "),r("div",{staticClass:"container-table"},[r("table",{attrs:{border:"1"}},[r("thead",[r("tr",t._l(t.columns,(function(e,n){return r("th",{key:n,on:{click:function(e){return t.sortBy(n)}}},[t._v("\n                        "+t._s(e)+"\n                        "),r("span",{staticClass:"arrow",class:t.sortOrders[n]>0?"asc":"dsc"})])})),0)]),t._v(" "),r("tbody",t._l(t.filteredRepos,(function(e,n){return r("tr",{key:e.id},[r("td",[t._v(t._s(n+1))]),t._v(" "),r("td",[r("a",{attrs:{href:e.owner.html_url,target:"_blank"}},[r("img",{staticClass:"avatar-img",attrs:{src:e.owner.avatar_url}}),t._v("\n                            "+t._s(e.owner.login)+"\n                        ")]),t._v("\n                         /\n                        "),r("a",{attrs:{href:e.html_url,target:"_blank"}},[t._v(" "+t._s(e.name)+" ")])]),t._v(" "),r("td",[r("a",{attrs:{href:e.git_url,target:"_blank"}},[t._v("git")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:e.ssh_url,target:"_blank"}},[t._v("ssh")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:e.clone_url,target:"_blank"}},[t._v("clone")])]),t._v(" "),r("td",[e.has_pages?r("span",[r("a",{attrs:{href:"https://"+e.owner.login+".github.io/"+e.name,target:"_blank"}},[t._v("Pages")])]):t._e()]),t._v(" "),r("td",[t._v(t._s(e.created_at))]),t._v(" "),r("td",[t._v(t._s(e.updated_at))]),t._v(" "),r("td",[t._v(t._s(null!=e.language?e.language:"---"))]),t._v(" "),r("td",[t._v(t._s(null!=e.license?e.license.name:"---"))]),t._v(" "),r("td",[t._v(t._s(e.archived?"T":"-"))]),t._v(" "),r("td",[t._v(t._s(e.disabled?"T":"-"))]),t._v(" "),r("td",[t._v("\n                        "+t._s(e.fork?"T":"-")+"\n                        "),r("br"),t._v(" "),r("a",{attrs:{href:e.html_url+"/network/members",target:"_blank"}},[t._v(t._s(e.forks_count))])]),t._v(" "),r("td",[r("a",{attrs:{href:e.html_url+"/issues",target:"_blank"}},[t._v(t._s(e.open_issues_count))])]),t._v(" "),r("td",[r("a",{attrs:{href:e.html_url+"/stargazers",target:"_blank"}},[t._v(t._s(e.stargazers_count))])]),t._v(" "),r("td",[r("a",{attrs:{href:e.html_url+"/watchers",target:"_blank"}},[t._v(t._s(e.watchers_count))])]),t._v(" "),r("td",[t._v(t._s(null!=e.description?e.description:"---"))])])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[this._v("Documentation")]),this._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[this._v("GitHub")])])}],!1,null,null,null));e.default=h.exports}}]);