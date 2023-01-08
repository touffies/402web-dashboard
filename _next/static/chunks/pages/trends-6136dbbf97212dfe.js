(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return k}});var l=t(85893),r=t(9008),u=t.n(r),d=t(67294),s=t(45697),o=t.n(s);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},n.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var v=(0,d.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,s=i(e,["color","size"]);return d.createElement("svg",n({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),d.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),d.createElement("polyline",{points:"17 6 23 6 23 12"}))}));v.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},v.displayName="TrendingUp";var T=v;function Z(){return Z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Z.apply(this,arguments)}function c(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var h=(0,d.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,u=void 0===r?24:r,s=c(e,["color","size"]);return d.createElement("svg",Z({ref:a,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),d.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),d.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},h.displayName="TrendingDown";var p=h,g=t(74041),f=t(18121),_=t(49384),m={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},b=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=m[e],l=a[0],r=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(r)-(0,_.BE)(l):t.reverse?l-r:r-l}(e.key,e.values)>0?(0,l.jsx)(T,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return m[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],G=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in m})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var r=l[0],u=l[l.length-1],d=m[t].treshold;(!d||Math.abs(r-u)>(d||0))&&r!==u&&(a[t]=[r,u])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,l.jsx)(g.Table,{columns:b,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2022-08-12T08:10:08.000Z","value":8}],"httpGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-08-12T08:10:08.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"dependabotGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"E"}],"dependabotCount":[{"date":"2022-08-12T08:10:08.000Z","value":15}],"testsslExpireSoon":[{"date":"2022-08-12T08:10:08.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T08:10:08.000Z","value":"2022-09-16T05:24:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"B"}],"cookiesCount":[{"date":"2022-08-12T08:10:08.000Z","value":2}],"trackersGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"trackersCount":[{"date":"2022-08-12T08:10:08.000Z","value":0}],"lighthouse_performance":[{"date":"2022-08-12T08:10:08.000Z","value":0.35}],"lighthouse_performanceGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-08-12T08:10:08.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-08-12T08:10:08.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-08-12T08:10:08.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T08:10:08.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-08-12T08:10:08.000Z","value":"C"}]},"https://beta.gouv.fr":{"404":[{"date":"2022-08-12T08:10:08.000Z","value":7}],"httpGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"D+"}],"nmapGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-08-12T08:10:08.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-08-12T08:10:08.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T08:10:08.000Z","value":"2022-10-26T07:19:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"B"}],"cookiesCount":[{"date":"2022-08-12T08:10:08.000Z","value":2}],"trackersGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"trackersCount":[{"date":"2022-08-12T08:10:08.000Z","value":0}],"lighthouse_performance":[{"date":"2022-08-12T08:10:08.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-08-12T08:10:08.000Z","value":0.92}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-08-12T08:10:08.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-08-12T08:10:08.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T08:10:08.000Z","value":0.6}],"lighthouse_pwaGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"C"}],"declaration-a11y":[{"date":"2022-08-12T08:10:08.000Z","value":"C"}]},"http://402web.fr":{"404":[{"date":"2022-08-12T11:40:16.000Z","value":9},{"date":"2022-09-04T02:04:47.000Z","value":"A+"}],"httpGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"nmapGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"},{"date":"2022-09-04T02:04:47.000Z","value":"D"}],"nmapOpenPortsCount":[{"date":"2022-08-12T11:40:16.000Z","value":11},{"date":"2022-09-04T02:04:47.000Z","value":8},{"date":"2023-01-08T01:42:41.281Z","value":7}],"nmapOpenPortsGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-08-12T11:40:16.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T11:40:16.000Z","value":"2023-03-05T19:41:00.000Z"},{"date":"2022-09-04T02:04:47.000Z","value":"2031-02-20T07:40:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"M"},{"date":"2022-09-04T02:04:47.000Z","value":"T"}],"cookiesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"cookiesCount":[{"date":"2022-08-12T11:40:16.000Z","value":0}],"trackersGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"C"}],"trackersCount":[{"date":"2022-08-12T11:40:16.000Z","value":8},{"date":"2022-09-04T02:04:47.000Z","value":5}],"lighthouse_performance":[{"date":"2022-08-12T11:40:16.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-08-12T11:40:16.000Z","value":0.5}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"D"}],"lighthouse_best-practices":[{"date":"2022-08-12T11:40:16.000Z","value":0.83}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-08-12T11:40:16.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T11:40:16.000Z","value":0.7}],"lighthouse_pwaGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.coque-en-bois.fr":{"404":[{"date":"2022-08-12T11:40:16.000Z","value":12},{"date":"2022-08-12T13:43:58.000Z","value":686},{"date":"2022-08-14T01:59:11.000Z","value":665},{"date":"2022-08-21T01:51:30.000Z","value":12},{"date":"2022-09-11T02:13:37.000Z","value":18},{"date":"2022-09-18T02:26:30.000Z","value":753},{"date":"2022-09-25T02:17:35.000Z","value":686},{"date":"2022-10-02T02:45:05.000Z","value":2},{"date":"2022-10-09T02:17:33.000Z","value":684},{"date":"2022-10-16T02:24:53.000Z","value":49},{"date":"2022-10-23T02:18:29.000Z","value":2},{"date":"2022-10-30T02:14:46.000Z","value":683},{"date":"2022-11-06T01:53:55.000Z","value":667},{"date":"2022-11-13T01:51:43.000Z","value":2},{"date":"2022-11-27T01:48:25.000Z","value":674},{"date":"2022-12-04T01:39:40.000Z","value":457},{"date":"2022-12-11T01:43:12.000Z","value":202},{"date":"2022-12-18T01:37:12.000Z","value":557},{"date":"2022-12-25T01:35:54.000Z","value":662},{"date":"2023-01-08T01:42:41.281Z","value":669}],"nmapGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2022-08-12T11:40:16.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-08-12T11:40:16.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T11:40:16.000Z","value":"2022-10-23T02:43:00.000Z"},{"date":"2022-09-25T02:17:35.000Z","value":"2022-12-22T01:51:00.000Z"},{"date":"2022-11-27T01:48:25.000Z","value":"2023-02-20T00:57:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"},{"date":"2022-11-27T01:48:25.000Z","value":"A"},{"date":"2022-12-04T01:39:40.000Z","value":"F"},{"date":"2022-12-11T01:43:12.000Z","value":"A"},{"date":"2023-01-08T01:42:41.281Z","value":"F"}],"cookiesCount":[{"date":"2022-08-12T11:40:16.000Z","value":20},{"date":"2022-08-12T13:43:58.000Z","value":19},{"date":"2022-08-28T02:06:33.000Z","value":20},{"date":"2022-09-04T02:04:47.000Z","value":19},{"date":"2022-10-16T02:24:53.000Z","value":20},{"date":"2022-10-23T02:18:29.000Z","value":21},{"date":"2022-11-20T01:54:17.000Z","value":22},{"date":"2022-11-27T01:48:25.000Z","value":0},{"date":"2022-12-04T01:39:40.000Z","value":21},{"date":"2022-12-11T01:43:12.000Z","value":0},{"date":"2023-01-08T01:42:41.281Z","value":21}],"trackersGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"},{"date":"2022-11-27T01:48:25.000Z","value":"A"},{"date":"2022-12-04T01:39:40.000Z","value":"F"},{"date":"2022-12-11T01:43:12.000Z","value":"A"},{"date":"2023-01-08T01:42:41.281Z","value":"F"}],"trackersCount":[{"date":"2022-08-12T11:40:16.000Z","value":147},{"date":"2022-08-14T01:59:11.000Z","value":136},{"date":"2022-08-28T02:06:33.000Z","value":146},{"date":"2022-09-11T02:13:37.000Z","value":134},{"date":"2022-09-18T02:26:30.000Z","value":148},{"date":"2022-09-25T02:17:35.000Z","value":147},{"date":"2022-10-02T02:45:05.000Z","value":118},{"date":"2022-10-09T02:17:33.000Z","value":136},{"date":"2022-10-23T02:18:29.000Z","value":134},{"date":"2022-10-30T02:14:46.000Z","value":127},{"date":"2022-11-06T01:53:55.000Z","value":126},{"date":"2022-11-13T01:51:43.000Z","value":123},{"date":"2022-11-20T01:54:17.000Z","value":108},{"date":"2022-11-27T01:48:25.000Z","value":0},{"date":"2022-12-04T01:39:40.000Z","value":103},{"date":"2022-12-11T01:43:12.000Z","value":0},{"date":"2023-01-08T01:42:41.281Z","value":107}],"lighthouse_performance":[{"date":"2022-08-12T11:40:16.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-08-12T11:40:16.000Z","value":0.83},{"date":"2022-08-21T01:51:30.000Z","value":0.82},{"date":"2022-10-09T02:17:33.000Z","value":0.83}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2022-08-12T11:40:16.000Z","value":1},{"date":"2022-08-21T01:51:30.000Z","value":0.92},{"date":"2022-10-23T02:18:29.000Z","value":0.83},{"date":"2022-10-30T02:14:46.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"},{"date":"2022-10-23T02:18:29.000Z","value":"B"},{"date":"2022-10-30T02:14:46.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-08-12T11:40:16.000Z","value":0.93},{"date":"2022-11-20T01:54:17.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T11:40:16.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"E"}],"httpGrade":[{"date":"2022-08-12T13:43:58.000Z","value":"F"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.salaisonsduvelay.com":{"404":[{"date":"2022-08-12T11:40:16.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2022-08-12T11:40:16.000Z","value":7},{"date":"2023-01-08T01:42:41.281Z","value":6}],"nmapOpenPortsGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-08-12T11:40:16.000Z","value":false},{"date":"2022-10-02T02:45:05.000Z","value":true},{"date":"2022-10-16T02:24:53.000Z","value":false},{"date":"2022-12-18T01:37:12.000Z","value":true},{"date":"2023-01-08T01:42:41.281Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T11:40:16.000Z","value":"2022-10-30T04:36:00.000Z"},{"date":"2022-10-16T02:24:53.000Z","value":"2023-01-13T04:31:00.000Z"},{"date":"2023-01-08T01:42:41.281Z","value":"2023-03-29T05:28:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"C"}],"cookiesCount":[{"date":"2022-08-12T11:40:16.000Z","value":5}],"trackersGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"trackersCount":[{"date":"2022-08-12T11:40:16.000Z","value":22},{"date":"2022-11-06T01:53:55.000Z","value":23},{"date":"2022-11-13T01:51:43.000Z","value":22}],"lighthouse_performance":[{"date":"2022-08-12T11:40:16.000Z","value":0.5894693374633789},{"date":"2022-08-12T13:43:58.000Z","value":0.5888099670410156},{"date":"2022-08-14T01:59:11.000Z","value":0.5893560409545898},{"date":"2022-08-21T01:51:30.000Z","value":0.588741683959961},{"date":"2022-08-28T02:06:33.000Z","value":0.5886060714721679},{"date":"2022-09-04T02:04:47.000Z","value":0.6395954132080078},{"date":"2022-09-11T02:13:37.000Z","value":0.6394540786743164},{"date":"2022-09-18T02:26:30.000Z","value":0.6393280029296875},{"date":"2022-09-25T02:17:35.000Z","value":0.6366134643554687},{"date":"2022-10-02T02:45:05.000Z","value":0.6393337249755859},{"date":"2022-10-09T02:17:33.000Z","value":0.6390140533447266},{"date":"2022-10-16T02:24:53.000Z","value":0.6387451171875},{"date":"2022-10-23T02:18:29.000Z","value":0.6388721466064453},{"date":"2022-10-30T02:14:46.000Z","value":0.5908393859863281},{"date":"2022-11-06T01:53:55.000Z","value":0.5883420944213867},{"date":"2022-11-13T01:51:43.000Z","value":0.6353212356567383},{"date":"2022-11-20T01:54:17.000Z","value":0.6378217697143554},{"date":"2022-11-27T01:48:25.000Z","value":0.6274909973144531},{"date":"2022-12-04T01:39:40.000Z","value":0.5905452728271484},{"date":"2022-12-11T01:43:12.000Z","value":0.6381193161010742},{"date":"2022-12-18T01:37:12.000Z","value":0.6378381729125977},{"date":"2022-12-25T01:35:54.000Z","value":0.6377782821655273},{"date":"2023-01-08T01:42:41.281Z","value":0.6343244552612305}],"lighthouse_performanceGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"C"}],"lighthouse_accessibility":[{"date":"2022-08-12T11:40:16.000Z","value":0.72},{"date":"2022-08-12T13:43:58.000Z","value":0.75},{"date":"2022-09-04T02:04:47.000Z","value":0.72}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2022-08-12T11:40:16.000Z","value":0.67},{"date":"2022-09-25T02:17:35.000Z","value":0.75},{"date":"2022-10-02T02:45:05.000Z","value":0.67},{"date":"2022-11-13T01:51:43.000Z","value":0.75},{"date":"2022-11-20T01:54:17.000Z","value":0.67},{"date":"2023-01-08T01:42:41.281Z","value":0.75}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-08-12T11:40:16.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T11:40:16.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"E"}],"httpGrade":[{"date":"2022-08-14T01:59:11.000Z","value":"F"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://lesmurmuresdulignon.com/":{"404":[{"date":"2022-10-02T02:45:05.000Z","value":"A+"}],"httpGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"F"}],"nmapGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"C"}],"nmapOpenPortsCount":[{"date":"2022-10-02T02:45:05.000Z","value":8}],"nmapOpenPortsGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-10-02T02:45:05.000Z","value":true}],"testsslExpireDate":[{"date":"2022-10-02T02:45:05.000Z","value":"2022-10-29T20:07:00.000Z"}],"testsslGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"C"}],"cookiesCount":[{"date":"2022-10-02T02:45:05.000Z","value":5}],"trackersGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"F"}],"trackersCount":[{"date":"2022-10-02T02:45:05.000Z","value":36}],"lighthouse_performance":[{"date":"2022-10-02T02:45:05.000Z","value":0.3842662811279297}],"lighthouse_performanceGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-10-02T02:45:05.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-10-02T02:45:05.000Z","value":0.75}],"lighthouse_best-practicesGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-10-02T02:45:05.000Z","value":0.99}],"lighthouse_seoGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-10-02T02:45:05.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"E"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),k=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:"Evolutions - Dashlord"})}),(0,l.jsx)(G,{trends:y})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return Z}});var l=t(85893),r=(t(67294),t(94184)),u=t.n(r),d=t(659),s=t(73973),o=t(83206),n=t(41664),i=t.n(n),v=t(75670),T=t.n(v),Z=function(e){var a=e.title,t=e.children,r=e.info,n=e.url,v=e.urlText,Z=void 0===v?"":v,c=e.className,h=e.isExternal,p=void 0!==h&&h;return(0,l.jsxs)("div",{className:u()(T().container,c),children:[(0,l.jsxs)("div",{className:T().banner,children:[(0,l.jsx)("h5",{className:T().mainTitle,children:a}),r&&(0,l.jsx)(d.Z,{overlay:r,children:(0,l.jsx)(s.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),n&&(p?(0,l.jsx)("a",{style:{float:"right"},href:n,target:"_blank",rel:"noreferrer noopener",children:Z}):(0,l.jsx)(i(),{prefetch:!1,href:n,children:(0,l.jsxs)("a",{style:{float:"right"},children:[Z,(0,l.jsx)(o.Z,{})]})}))]}),(0,l.jsx)("div",{className:T().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);