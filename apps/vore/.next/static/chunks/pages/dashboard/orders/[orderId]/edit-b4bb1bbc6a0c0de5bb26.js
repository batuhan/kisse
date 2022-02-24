(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{6481:function(e,r,t){"use strict";var n=t(9527),o=t(2322);r.Z=function(e){var r=e.title,t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.Head,{children:[(0,o.jsx)("title",{children:r||"saltana"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),t]})}},608:function(e,r,t){"use strict";t.d(r,{C:function(){return o.Ck},c:function(){return s}});var n=t(4942),o=t(1739),c=t(2041),i=t(2322);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e){return(0,i.jsx)(o.l0,u(u({},e),{},{children:(0,i.jsx)(c.I,{name:"name",label:"Name",placeholder:"Name"})}))}},5505:function(e,r,t){"use strict";var n=t(1428);r.Z=(0,n.buildRpcClient)({resolverName:"getOrder",resolverType:"query",routePath:"/api/rpc/getOrder"})},3137:function(e,r,t){"use strict";t.r(r),t.d(r,{EditOrder:function(){return g},default:function(){return x}});var n=t(7757),o=t.n(n),c=t(4942),i=t(5861),a=t(7234),u=t(2784),s=t(2540),l=t(1428),f=t(1664),d=t(9527),p=t(6481),v=t(5505),h=(0,l.buildRpcClient)({resolverName:"updateOrder",resolverType:"mutation",routePath:"/api/rpc/updateOrder"}),b=t(608),O=t(2322);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=function(){(0,s.useRouter)();var e=(0,s.useParam)("ordernId","string"),r=(0,l.useQuery)(v.Z,{id:e},{staleTime:1/0}),t=(0,a.Z)(r,2),n=t[0],u=(t[1].setQueryData,(0,l.useMutation)(h)),f=(0,a.Z)(u,1)[0];return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d.Head,{children:(0,O.jsxs)("title",{children:["Edit Order ",n.id]})}),(0,O.jsxs)("div",{children:[(0,O.jsxs)("h1",{children:["Edit Order ",n.id]}),(0,O.jsx)("pre",{children:JSON.stringify(n,null,2)}),(0,O.jsx)(b.c,{submitText:"Update Order",initialValues:n,onSubmit:function(){var e=(0,i.Z)(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(j({id:n.id},r));case 3:e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",(0,c.Z)({},b.C,e.t0.toString()));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}()})]})]})},m=function(){return(0,O.jsxs)("div",{children:[(0,O.jsx)(u.Suspense,{fallback:(0,O.jsx)("div",{children:"Loading..."}),children:(0,O.jsx)(g,{})}),(0,O.jsx)("p",{children:(0,O.jsx)(f.Link,{href:s.Routes.OrdersPage(),children:(0,O.jsx)("a",{children:"Orders"})})})]})};m.authenticate=!0,m.getLayout=function(e){return(0,O.jsx)(p.Z,{children:e})};var x=m},2167:function(e,r,t){"use strict";var n=t(3038);r.Link=f;var o,c=(o=t(2784))&&o.__esModule?o:{default:o},i=t(1063),a=t(4651),u=t(7426);var s={};function l(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}function f(e){var r,t=!1!==e.prefetch,o=a.useRouter(),f=c.default.useMemo((function(){var r=i.resolveHref(o,e.href,!0),t=n(r,2),c=t[0],a=t[1];return{href:c,as:e.as?i.resolveHref(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,O=e.scroll,y=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var j=(r=c.default.Children.only(v))&&"object"===typeof r&&r.ref,g=u.useIntersection({rootMargin:"200px"}),m=n(g,2),x=m[0],w=m[1],P=c.default.useCallback((function(e){x(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,x]);c.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),r="undefined"!==typeof y?y:o&&o.locale,n=s[d+"%"+p+(r?"%"+r:"")];e&&!n&&l(o,d,p,{locale:r})}),[p,d,w,y,t,o]);var E={ref:P,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,c,a,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),r[o?"replace":"push"](t,n,{shallow:c,locale:u,scroll:a}))}(e,o,d,p,h,b,O,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof y?y:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);E.href=L||i.addBasePath(i.addLocale(p,k,o&&o.defaultLocale))}return c.default.cloneElement(r,E)}},7426:function(e,r,t){"use strict";var n=t(3038);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,u=o.useRef(),s=o.useState(!1),l=n(s,2),f=l[0],d=l[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=a.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return a.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,c=n.observer,i=n.elements;return i.set(e,r),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return o.useEffect((function(){if(!i&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(2784),c=t(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},4691:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/orders/[orderId]/edit",function(){return t(3137)}])},9527:function(e,r,t){e.exports=t(639)},1664:function(e,r,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return r=4691,e(e.s=r);var r}));var r=e.O();_N_E=r}]);