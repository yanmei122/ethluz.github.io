(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});n(57),n(198),n(200);var a=n(7),r=n.n(a),l=n(0),i=n.n(l),c=n(42),o=n(162),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,n=t.currentPage,a=1===n,r=n===t.numPages-1,l=n-1==1?"/":"page/"+(n-1).toString(),s="page/"+(n+1).toString();return i.a.createElement(o.a,null,i.a.createElement("section",{className:"container max-width"},i.a.createElement("div",{className:"section is-center"},e.map(function(e,t){var n=e.node;return i.a.createElement("div",{className:"content",key:t},i.a.createElement("p",null,i.a.createElement(c.Link,{className:"has-text-grey-darker title is-5",to:n.fields.slug},n.frontmatter.title)),i.a.createElement("p",null,i.a.createElement(c.Link,{className:"has-text-grey ",to:n.fields.slug},n.excerpt)))}),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",listStyle:"none",padding:0}},i.a.createElement("li",null,!a&&i.a.createElement(c.Link,{to:l,rel:"prev"},"← Previous")),i.a.createElement("li",null,n),i.a.createElement("li",null,!r&&i.a.createElement(c.Link,{to:s,rel:"next"},"Next →"))))))},t}(i.a.Component);t.default=s;var u="624043245"},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(163),i=n.n(l),c=n(164);n(165);t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(i.a,{title:"luz-blog"}),t?r.a.createElement("div",{className:""},t,r.a.createElement(c.a,null)):r.a.createElement("div",null))}},172:function(e,t,n){"use strict";var a=n(11);e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},198:function(e,t,n){"use strict";n(199);var a=n(11),r=n(172),l=n(20),i=/./.toString,c=function(e){n(21)(RegExp.prototype,"toString",e,!0)};n(22)(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?c(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=i.name&&c(function(){return i.call(this)})},199:function(e,t,n){n(20)&&"g"!=/./g.flags&&n(30).f(RegExp.prototype,"flags",{configurable:!0,get:n(172)})},200:function(e,t,n){var a=Date.prototype,r=a.toString,l=a.getTime;new Date(NaN)+""!="Invalid Date"&&n(21)(a,"toString",function(){var e=l.call(this);return e==e?r.call(this):"Invalid Date"})}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-1179a4d6b40e9e3c69e7.js.map