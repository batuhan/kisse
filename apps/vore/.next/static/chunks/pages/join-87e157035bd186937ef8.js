(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{2294:function(e,t,r){"use strict";var s=r(2784),a=r(7709),n=r(6400),i=r(5676),o=r(4686),l=r(2322),c=function(e){e.title,e.showUserBox;var t=e.children,r=(0,s.useState)(!1);r[0],r[1],(0,a.rZ)();return(0,l.jsx)(n.V,{navbarOffsetBreakpoint:"sm",fixed:!0,header:(0,l.jsx)(i.h,{height:70,padding:"md",children:(0,l.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,l.jsx)(o.x,{children:"Saltana"})})}),children:t})};c.authenticate=!0,t.Z=c},1775:function(e,t,r){"use strict";var s=r(1428);t.Z=(0,s.buildRpcClient)({resolverName:"getDomains",resolverType:"query",routePath:"/api/rpc/getDomains"})},4742:function(e,t,r){"use strict";r.r(t),r.d(t,{CreateAnOrganization:function(){return L},default:function(){return A}});var s=r(7757),a=r.n(s),n=r(4942),i=r(5861),o=r(7234),l=r(2784),c=r(2540),p=r(1428),d=r(9527),u=r(1739),m=r(2041),f=r(3435),g=r(5042),b=r(1775),h=r(2345),y=r(2322);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=(0,l.forwardRef)((function(e,t){var r=e.name,s=e.label,a=(e.outerProps,e.fieldProps),n=(e.labelProps,e.helpText),i=(0,f.Z)(e,["name","label","outerProps","fieldProps","labelProps","helpText"]),l=(0,p.useQuery)(b.Z,{only:"platform"},{initialData:{domains:[]},cacheTime:100}),c=(0,o.Z)(l,1)[0].domains,d=(0,h.U$)(r,v(v({parse:"number"===i.type?Number:function(e){return""===e?null:e}},a),{},{type:"select"})),u=d.input,m=d.meta,w=m.touched,x=m.error,O=m.submitError,j=m.submitting,k=c,z=(0,o.Z)(k,1)[0],P=void 0===z?{}:z,N=(0,h.U$)("defaultDomainId",{defaultValue:c.length>0&&P.id?P.id:null}),S=Array.isArray(x)?x.join(", "):x||O;return(0,y.jsx)(g.S,{id:r,required:!0,label:s,description:n,error:w&&S,children:(0,y.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,y.jsx)("input",v(v(v({type:"text"},u),{},{disabled:j},i),{},{ref:t,id:"slug",className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-111 pr-12 sm:text-sm border-gray-300 rounded-md",placeholder:"rickastley"})),(0,y.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:[(0,y.jsx)("label",{htmlFor:"domainKey",className:"sr-only",children:"Domain"}),(0,y.jsx)("select",v(v({id:"domainKey",title:"domainKey"},N.input),{},{value:N.input.value,className:"focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",children:c.map((function(e,t){var r=e.domain,s=e.id;return(0,y.jsx)("option",{value:s,children:r},s)}))}))]})]})})})),O=r(9182);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z="block text-sm font-medium text-gray-700";function P(e){return(0,y.jsx)(u.l0,k(k({},e),{},{children:(0,y.jsxs)(O.Z,{position:"center",direction:"column",grow:!0,children:[(0,y.jsx)(x,{outerProps:{className:z},labelProps:{className:z},name:"slug",label:"Username",helpText:"You can change this later.",className:"inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"}),(0,y.jsx)(m.I,{name:"name",label:"Display name",outerProps:{className:z},labelProps:{className:z},helpText:"Most creators prefer using the name they are most known with, sdfs You'll be able to select a different display name if you prefer but your real name is used to verify your identity.            ",className:"\n            shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md\n          "}),(0,y.jsx)(m.I,{name:"inviteCode",label:"Invite Code",placeholder:"Invite code",helpText:"We only accept a limited number of creators at the moment"})]})}))}var N=r(2294),S=r(195),E=JSON.parse('[".git",".htaccess",".htpasswd",".well-known","0","400","401","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","421","422","423","424","426","428","429","431","500","501","502","503","504","505","506","507","508","509","510","511","_domainkey","about","access","account","accounts","activate","activities","activity","ad","add","address","adm","admin","administration","administrator","ads","adult","advertising","affiliate","affiliates","ajax","all","alpha","analysis","analytics","android","anon","anonymous","api","app","apps","archive","archives","article","asct","asset","assets","atom","auth","authentication","avatar","about","about-us","abuse","access","account","accounts","ad","add","admin","administration","administrator","ads","ads.txt","advertise","advertising","aes128-ctr","aes128-gcm","aes192-ctr","aes256-ctr","aes256-gcm","affiliate","affiliates","ajax","alert","alerts","alpha","amp","analytics","api","app","app-ads.txt","apps","asc","assets","atom","auth","authentication","authorize","autoconfig","autodiscover","avatar","backup","balancer-manager","banner","banners","beta","billing","bin","blog","blogs","board","book","bookmark","bot","bots","bug","business","batuhan","batuhanicoz","bi","b","backup","banner","banners","bbs","beta","billing","billings","blog","blogs","board","bookmark","bookmarks","broadcasthost","business","buy","cache","cadastro","calendar","call","campaign","cancel","captcha","career","careers","cart","categories","category","cgi","cgi-bin","changelog","chat","check","checking","checkout","client","cliente","clients","code","codereview","comercial","comment","comments","communities","community","company","compare","compras","config","configuration","connect","contact","contact-us","contact_us","contactus","contest","contribute","corp","create","css","cache","calendar","campaign","captcha","careers","cart","cas","categories","category","cdn","cgi","cgi-bin","chacha20-poly1305","change","channel","channels","chart","chat","checkout","clear","client","close","cloud","cms","com","comment","comments","community","compare","compose","config","connect","contact","contest","cookies","copy","copyright","count","cp","cpanel","create","crossdomain.xml","css","curve25519-sha256","customer","customers","customize","dashboard","data","db","default","delete","demo","design","designer","destroy","dev","devel","developer","developers","diagram","diary","dict","dictionary","die","dir","direct_messages","directory","dist","doc","docs","documentation","domain","download","downloads","dashboard","db","deals","debug","delete","desc","destroy","dev","developer","developers","diffie-hellman-group-exchange-sha256","diffie-hellman-group14-sha1","disconnect","discuss","dns","dns0","dns1","dns2","dns3","dns4","docs","documentation","domain","download","downloads","downvote","draft","drop","ecommerce","edit","editor","edu","education","email","employment","empty","end","enterprise","entries","entry","error","errors","eval","event","exit","explore","ecdh-sha2-nistp256","ecdh-sha2-nistp384","ecdh-sha2-nistp521","edit","editor","email","enterprise","error","errors","event","events","example","exception","exit","explore","export","extensions","facebook","faq","favorite","favorites","feature","features","feed","feedback","feeds","file","files","first","flash","fleet","fleets","flog","follow","followers","following","forgot","form","forum","forums","founder","free","friend","friends","ftp","fatih","fatihguner","fbi","false","family","faq","faqs","favicon.ico","features","feed","feedback","feeds","file","files","filter","follow","follower","followers","following","fonts","forgot","forgot-password","forgotpassword","form","forms","forum","forums","friend","friends","ftp","gadget","gadgets","game","games","get","ghost","gift","gifts","gist","github","graph","group","groups","guest","guests","gunerfatih","get","git","go","graphql","group","groups","guest","guidelines","guides","help","home","homepage","host","hosting","hostmaster","hostname","howto","hpg","html","http","httpd","https","head","header","help","hide","hmac-sha","hmac-sha1","hmac-sha1-etm","hmac-sha2-256","hmac-sha2-256-etm","hmac-sha2-512","hmac-sha2-512-etm","home","host","hosting","hostmaster","htpasswd","http","httpd","https","humans.txt","i","iamges","icon","icons","id","idea","ideas","image","images","imap","img","index","indice","info","information","inquiry","instagram","intranet","invitations","invite","ipad","iphone","irc","is","issue","issues","it","item","items","icoz","icons","images","imap","img","import","index","info","insert","investors","invitations","invite","invites","invoice","is","isatap","issues","it","java","javascript","job","jobs","join","js","json","jump","jobs","join","js","json","knowledgebase","keybase.txt","language","languages","last","ldap-status","legal","license","link","links","linux","list","lists","log","log-in","log-out","log_in","log_out","login","logout","logs","learn","legal","license","licensing","like","limit","live","load","local","localdomain","localhost","lock","login","logout","lost-password","m","mac","mail","mail1","mail2","mail3","mail4","mail5","mailer","mailing","maintenance","manager","manual","map","maps","marketing","master","me","media","member","members","message","messages","messenger","microblog","microblogs","mine","mis","mob","mobile","movie","movies","mp3","msg","msn","music","musicas","mx","my","mysql","m","mail","mail0","mail1","mail2","mail3","mail4","mail5","mail6","mail7","mail8","mail9","mailer-daemon","mailerdaemon","map","marketing","marketplace","master","me","media","member","members","message","messages","metrics","mis","mobile","moderator","modify","more","mx","mx1","my","name","named","nan","navi","navigation","net","network","new","news","newsletter","nick","nickname","notes","noticias","notification","notifications","notify","ns","ns1","ns10","ns2","ns3","ns4","ns5","ns6","ns7","ns8","ns9","null","net","network","new","news","newsletter","newsletters","next","nil","no-reply","nobody","noc","none","noreply","notification","notifications","ns","ns0","ns1","ns2","ns3","ns4","ns5","ns6","ns7","ns8","ns9","null","oauth","oauth_clients","offer","offers","official","old","online","openid","operator","order","orders","organization","organizations","overview","owner","owners","oauth","oauth2","offer","offers","online","openid","order","orders","overview","owa","owner","page","pager","pages","panel","password","payment","perl","phone","photo","photoalbum","photos","php","phpmyadmin","phppgadmin","phpredisadmin","pic","pics","ping","plan","plans","plugin","plugins","policy","pop","pop3","popular","portal","post","postfix","postmaster","posts","pr","premium","press","price","pricing","privacy","privacy-policy","privacy_policy","privacypolicy","private","product","products","profile","project","projects","promo","pub","public","purpose","put","python","page","pages","partners","passwd","password","pay","payment","payments","paypal","photo","photos","pixel","plans","plugins","policies","policy","pop","pop3","popular","portal","portfolio","post","postfix","postmaster","poweruser","preferences","premium","press","previous","pricing","print","privacy","privacy-policy","private","prod","product","production","profile","profiles","project","projects","promo","public","purchase","put","query","quota","random","ranking","read","readme","recent","recruit","recruitment","register","registration","release","remove","replies","report","reports","repositories","repository","req","request","requests","reset","roc","root","rss","ruby","rule","redirect","reduce","refund","refunds","register","registration","remove","replies","reply","report","request","request-password","reset","reset-password","response","return","returns","review","reviews","robots.txt","root","rootuser","rsa-sha2-2","rsa-sha2-512","rss","rules","sag","sale","sales","sample","samples","save","school","script","scripts","search","secure","security","self","send","server","server-info","server-status","service","services","session","sessions","setting","settings","setup","share","shop","show","sign-in","sign-up","sign_in","sign_up","signin","signout","signup","site","sitemap","sites","smartphone","smtp","soporte","source","spec","special","sql","src","ssh","ssl","ssladmin","ssladministrator","sslwebmaster","staff","stage","staging","start","stat","state","static","stats","status","store","stores","stories","style","styleguide","stylesheet","stylesheets","subdomain","subscribe","subscriptions","suporte","support","svn","swf","sys","sysadmin","sysadministrator","system","saltana","sales","save","script","sdk","search","secure","security","select","services","session","sessions","settings","setup","share","shift","shop","signin","signup","site","sitemap","sites","smtp","sort","source","sql","ssh","ssh-rsa","ssl","ssladmin","ssladministrator","sslwebmaster","stage","staging","stat","static","statistics","stats","status","store","style","styles","stylesheet","stylesheets","subdomain","subscribe","sudo","super","superuser","support","survey","sync","sysadmin","sysadmin","system","tablet","tablets","tag","talk","task","tasks","team","teams","tech","telnet","term","terms","terms-of-service","terms_of_service","termsofservice","test","test1","test2","test3","teste","testing","tests","theme","themes","thread","threads","tmp","todo","tool","tools","top","topic","topics","tos","tour","translations","trends","tutorial","tux","tv","twitter","tablet","tag","tags","team","telnet","terms","terms-of-use","test","testimonials","theme","themes","today","tools","topic","topics","tour","training","translate","translations","trending","trial","true","undef","unfollow","unsubscribe","update","upload","uploads","url","usage","user","username","users","usuario","umac-128","umac-128-etm","umac-64","umac-64-etm","undefined","unfollow","unlike","unsubscribe","update","upgrade","usenet","user","username","users","uucp","vendas","ver","version","video","videos","visitor","var","verify","video","view","void","vote","vpn","watch","weather","web","webhook","webhooks","webmail","webmaster","website","websites","welcome","widget","widgets","wiki","win","windows","word","work","works","workshop","ww","wws","www","www1","www2","www3","www4","www5","www6","www7","wwws","wwww","webmail","webmaster","website","widget","widgets","wiki","wpad","write","www","www-data","www1","www2","www3","www4","xfn","xml","xmpp","xpg","xxx","yaml","year","yml","you","you","yourname","yourusername","zlib"]'),I=r(9454),D=S.z.string().min(3).max(24).transform((function(e){return e.toLowerCase().trim()})).refine((function(e){return!1===E.includes(e)}),{message:"This username unfortunately is not allowed."}),_=(S.z.string().transform((function(e){return e.trim()})),S.z.object({type:S.z.enum(["IMAGE","VIDEO","GIF"]),path:S.z.string()})),C=S.z.object({name:S.z.string().min(1).max(24),slug:D,description:S.z.string().min(10).max(240).optional(),profileMedia:_.optional(),defaultDomainId:S.z.string().cuid().optional()}).extend({inviteCode:S.z.string().min(1).max(24)}),q=(I.wz.pick({name:!0,description:!0,profileMedia:!0,defaultDomainId:!0}).extend({slug:D}).partial({profileMedia:!0}),(0,p.buildRpcClient)({resolverName:"createOrganization",resolverType:"mutation",routePath:"/api/rpc/createOrganization"})),Z=r(7901),$=r(8476),T=r(4686),W=r(4468);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(){var e=(0,c.useRouter)(),t=(0,p.useMutation)(q),r=(0,o.Z)(t,1)[0];return(0,y.jsx)(Z.X,{padding:"md",shadow:"xs",children:(0,y.jsxs)(O.Z,{position:"center",direction:"column",grow:!0,spacing:15,children:[(0,y.jsx)($.D,{order:2,children:"Create your space on Saltana \u2728"}),(0,y.jsx)(T.x,{children:"Let\u2019s get started by filling in the information below to create your new presence on the web."}),(0,y.jsx)(P,{submitText:"Start using Saltana",submitTextWhenLoading:"Crafting your profile...",submitProps:{className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"},schema:C,initialValues:{inviteCode:e.query.inviteCode},onSubmit:function(){var t=(0,i.Z)(a().mark((function t(s){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r(B({},s));case 3:t.sent,e.push(c.Routes.DashboardWelcomePage()),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",(0,n.Z)({},u.Ck,t.t0.toString()));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()})]})})},H=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.Head,{children:(0,y.jsx)("title",{children:"Create your space on Saltana"})}),(0,y.jsx)(W.W,{size:"xs",children:(0,y.jsx)(l.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading..."}),children:(0,y.jsx)(L,{})})})]})};H.authenticate=!0,H.getLayout=function(e){return(0,y.jsx)(N.Z,{children:e})},H.suppressFirstRenderFlicker=!0;var A=H},5303:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/join",function(){return r(4742)}])},9527:function(e,t,r){e.exports=r(639)},6400:function(e,t,r){"use strict";r.d(t,{V:function(){return j}});var s=r(2784),a=r(1464),n=r(7709),i=r(1926),o=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&d(e,r,t[r]);return e};function m(e,t){const r=t.fn.size({size:e.padding,sizes:t.spacing}),s=e.navbarOffsetBreakpoint?t.fn.size({size:e.navbarOffsetBreakpoint,sizes:t.breakpoints}):null;if(!e.fixed)return{padding:r};const a=e.navbarBreakpoints.reduce(((e,[t,s])=>(e[`@media (min-width: ${t+1}px)`]={paddingLeft:`calc(${s}px + ${r}px)`},e)),{});return s&&(a[`@media (max-width: ${s}px)`]={paddingLeft:r}),u({minHeight:"100vh",paddingTop:`calc(${e.headerHeight} + ${r}px)`,paddingLeft:`calc(${e.navbarWidth} + ${r}px)`,paddingRight:t.fn.size({size:r,sizes:t.spacing}),paddingBottom:t.fn.size({size:r,sizes:t.spacing})},a)}var f=(0,i.k)(((e,t)=>({root:{boxSizing:"border-box"},body:{display:"flex",boxSizing:"border-box"},main:u({flex:1,width:"100vw",boxSizing:"border-box"},m(t,e))}))),g=r(6370);function b(e){var t;const r=null==(t=null==e?void 0:e.props)?void 0:t.height;return"number"===typeof r?`${r}px`:"string"===typeof r?r:"0px"}var h=r(6497),y=Object.defineProperty,w=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const j=(0,s.forwardRef)(((e,t)=>{var r=e,{children:i,navbar:o,header:l,fixed:c=!1,zIndex:p=(0,a.w)("app"),padding:d="md",navbarOffsetBreakpoint:u,className:m,styles:y,classNames:j}=r,k=((e,t)=>{var r={};for(var s in e)v.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&w)for(var s of w(e))t.indexOf(s)<0&&x.call(e,s)&&(r[s]=e[s]);return r})(r,["children","navbar","header","fixed","zIndex","padding","navbarOffsetBreakpoint","className","styles","classNames"]);const z=function(e,t){var r;const s=null==(r=null==e?void 0:e.props)?void 0:r.width;return null!=s?(0,g.I)(s,t):[]}(o,(0,n.rZ)()),P=function(e){var t,r;const s=null==(r=null==(t=null==e?void 0:e.props)?void 0:t.width)?void 0:r.base;return"number"===typeof s?`${s}px`:"string"===typeof s?s:"0px"}(o),N=b(l),S=b(o),{classes:E,cx:I}=f({padding:d,fixed:c,navbarWidth:P,headerHeight:N,navbarBreakpoints:z,navbarOffsetBreakpoint:u},{styles:y,classNames:j,name:"AppShell"}),D=l?s.cloneElement(l,{fixed:c,zIndex:p}):null,_=o?s.cloneElement(o,{fixed:c,zIndex:p,height:"0px"!==S?S:`calc(100vh - ${N})`,position:{top:N,left:0}}):null;return s.createElement(h.x,((e,t)=>{for(var r in t||(t={}))v.call(t,r)&&O(e,r,t[r]);if(w)for(var r of w(t))x.call(t,r)&&O(e,r,t[r]);return e})({className:I(E.root,m),ref:t},k),D,s.createElement("div",{className:E.body},_,s.createElement("main",{className:E.main},i)))}));j.displayName="@mantine/core/AppShell"},5676:function(e,t,r){"use strict";r.d(t,{h:function(){return x}});var s=r(2784),a=r(1464),n=r(1926),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&u(e,r,t[r]);return e},f=(0,n.k)(((e,{height:t,padding:r,fixed:s,position:a,zIndex:n})=>{return{root:(i=m(m({},e.fn.fontStyles()),a),c={zIndex:n,height:t,maxHeight:t,position:s?"fixed":"static",boxSizing:"border-box",padding:e.fn.size({size:r,sizes:e.spacing}),backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,borderBottom:`1px solid ${"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[2]}`},o(i,l(c)))};var i,c})),g=r(6497),b=Object.defineProperty,h=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const x=(0,s.forwardRef)(((e,t)=>{var r=e,{children:n,className:i,classNames:o,styles:l,height:c,padding:p=0,fixed:d=!1,position:u={top:0,left:0,right:0},zIndex:m=(0,a.w)("app")}=r,b=((e,t)=>{var r={};for(var s in e)y.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&h)for(var s of h(e))t.indexOf(s)<0&&w.call(e,s)&&(r[s]=e[s]);return r})(r,["children","className","classNames","styles","height","padding","fixed","position","zIndex"]);const{classes:x,cx:O}=f({height:c,padding:p,fixed:d,position:u,zIndex:m},{name:"Header",classNames:o,styles:l});return s.createElement(g.x,((e,t)=>{for(var r in t||(t={}))y.call(t,r)&&v(e,r,t[r]);if(h)for(var r of h(t))w.call(t,r)&&v(e,r,t[r]);return e})({component:"nav",className:O(x.root,i),ref:t},b),n)}));x.displayName="@mantine/core/Header"},6370:function(e,t,r){"use strict";function s(e,t){if(!e)return[];const r=Object.keys(e).filter((e=>"base"!==e)).map((r=>[t.fn.size({size:r,sizes:t.breakpoints}),e[r]]));return r.sort(((e,t)=>e[0]-t[0])),r}r.d(t,{I:function(){return s}})},4468:function(e,t,r){"use strict";r.d(t,{W:function(){return m}});var s=r(2784),a=r(1926);const n={xs:540,sm:720,md:960,lg:1140,xl:1320};var i=(0,a.k)(((e,{fluid:t,size:r,padding:s})=>({root:{maxWidth:t?"100%":e.fn.size({size:r,sizes:n}),marginLeft:"auto",marginRight:"auto",paddingLeft:e.fn.size({size:s,sizes:e.spacing}),paddingRight:e.fn.size({size:s,sizes:e.spacing})}}))),o=r(6497),l=Object.defineProperty,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const m=(0,s.forwardRef)(((e,t)=>{var r=e,{className:a,padding:n="md",fluid:l,size:m,styles:f,classNames:g}=r,b=((e,t)=>{var r={};for(var s in e)p.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&c)for(var s of c(e))t.indexOf(s)<0&&d.call(e,s)&&(r[s]=e[s]);return r})(r,["className","padding","fluid","size","styles","classNames"]);const{classes:h,cx:y}=i({padding:n,fluid:l,size:m},{styles:f,classNames:g,name:"Container"});return s.createElement(o.x,((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&u(e,r,t[r]);return e})({className:y(h.root,a),ref:t},b))}));m.displayName="@mantine/core/Container"},9182:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var s=r(2784),a=r(1926);const n={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var i=(0,a.k)(((e,{spacing:t,position:r,noWrap:s,direction:a,grow:i,align:o,count:l})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:a,alignItems:o||("row"===a?"center":i?"stretch":"apart"===r?"flex-start":n[r]),flexWrap:s?"nowrap":"wrap",justifyContent:"row"===a?n[r]:void 0,gap:e.fn.size({size:t,sizes:e.spacing})},child:{boxSizing:"border-box",maxWidth:i&&"row"===a?`calc(${100/l}% - ${e.fn.size({size:t,sizes:e.spacing})-e.fn.size({size:t,sizes:e.spacing})/l}px)`:void 0,flexGrow:i?1:0}})));var o=r(6497),l=Object.defineProperty,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const m=(0,s.forwardRef)(((e,t)=>{var r=e,{className:a,position:n="left",align:l,children:m,noWrap:f=!1,grow:g=!1,spacing:b="md",direction:h="row",classNames:y,styles:w}=r,v=((e,t)=>{var r={};for(var s in e)p.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&c)for(var s of c(e))t.indexOf(s)<0&&d.call(e,s)&&(r[s]=e[s]);return r})(r,["className","position","align","children","noWrap","grow","spacing","direction","classNames","styles"]);const x=function(e){return s.Children.toArray(e).filter(Boolean)}(m),{classes:O,cx:j}=i({align:l,grow:g,noWrap:f,spacing:b,position:n,direction:h,count:x.length},{classNames:y,styles:w,name:"Group"}),k=x.map((e=>s.cloneElement(e,{className:j(O.child,e.props.className)})));return s.createElement(o.x,((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&u(e,r,t[r]);return e})({className:j(O.root,a),ref:t},v),k)}));m.displayName="@mantine/core/Group"},8476:function(e,t,r){"use strict";r.d(t,{D:function(){return v}});var s=r(2784),a=r(1926),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&d(e,r,t[r]);return e},m=(0,a.k)(((e,{element:t,align:r})=>{return{root:(s=u({},e.fn.fontStyles()),a={fontFamily:e.headings.fontFamily,fontWeight:e.headings.fontWeight,fontSize:e.headings.sizes[t].fontSize,lineHeight:e.headings.sizes[t].lineHeight,margin:0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,textAlign:r},i(s,o(a)))};var s,a})),f=r(6497),g=Object.defineProperty,b=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const v=(0,s.forwardRef)(((e,t)=>{var r=e,{className:a,order:n=1,children:i,align:o}=r,l=((e,t)=>{var r={};for(var s in e)h.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&b)for(var s of b(e))t.indexOf(s)<0&&y.call(e,s)&&(r[s]=e[s]);return r})(r,["className","order","children","align"]);const{classes:c,cx:p}=m({element:`h${n}`,align:o},{name:"Title"});return[1,2,3,4,5,6].includes(n)?s.createElement(f.x,((e,t)=>{for(var r in t||(t={}))h.call(t,r)&&w(e,r,t[r]);if(b)for(var r of b(t))y.call(t,r)&&w(e,r,t[r]);return e})({component:`h${n}`,ref:t,className:p(c.root,a)},l),i):null}));v.displayName="@mantine/core/Title"}},function(e){e.O(0,[290,454,774,888,179],(function(){return t=5303,e(e.s=t);var t}));var t=e.O();_N_E=t}]);