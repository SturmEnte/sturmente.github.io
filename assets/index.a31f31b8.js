(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerpolicy&&(a.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?a.credentials="include":c.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(c){if(c.ep)return;c.ep=!0;const a=n(c);fetch(c.href,a)}})();function _(){}function Re(t){return t()}function Be(){return Object.create(null)}function U(t){t.forEach(Re)}function Ue(t){return typeof t=="function"}function ue(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ce;function L(t,e){return ce||(ce=document.createElement("a")),ce.href=e,t===ce.href}function qe(t){return Object.keys(t).length===0}function l(t,e){t.appendChild(e)}function J(t,e,n){t.insertBefore(e,n||null)}function N(t){t.parentNode.removeChild(t)}function Qe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function b(){return O(" ")}function ge(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ke(t){return function(e){e.target===this&&t.call(this,e)}}function s(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pe(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let xe;function ie(t){xe=t}const ne=[],Ge=[],re=[],Ce=[],$e=Promise.resolve();let be=!1;function et(){be||(be=!0,$e.then(We))}function ye(t){re.push(t)}const ve=new Set;let ae=0;function We(){const t=xe;do{for(;ae<ne.length;){const e=ne[ae];ae++,ie(e),tt(e.$$)}for(ie(null),ne.length=0,ae=0;Ge.length;)Ge.pop()();for(let e=0;e<re.length;e+=1){const n=re[e];ve.has(n)||(ve.add(n),n())}re.length=0}while(ne.length);for(;Ce.length;)Ce.pop()();be=!1,ve.clear(),ie(t)}function tt(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ye)}}const oe=new Set;let z;function nt(){z={r:0,c:[],p:z}}function it(){z.r||U(z.c),z=z.p}function A(t,e){t&&t.i&&(oe.delete(t),t.i(e))}function Y(t,e,n,i){if(t&&t.o){if(oe.has(t))return;oe.add(t),z.c.push(()=>{oe.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function W(t){t&&t.c()}function C(t,e,n,i){const{fragment:c,on_mount:a,on_destroy:o,after_update:h}=t.$$;c&&c.m(e,n),i||ye(()=>{const m=a.map(Re).filter(Ue);o?o.push(...m):U(m),t.$$.on_mount=[]}),h.forEach(ye)}function D(t,e){const n=t.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(ne.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,c,a,o,h=[-1]){const m=xe;ie(t);const r=t.$$={fragment:null,ctx:null,props:a,update:_,not_equal:c,bound:Be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:Be(),dirty:h,skip_bound:!1,root:e.target||m.$$.root};o&&o(r.root);let u=!1;if(r.ctx=n?n(t,e.props||{},(v,f,...w)=>{const x=w.length?w[0]:f;return r.ctx&&c(r.ctx[v],r.ctx[v]=x)&&(!r.skip_bound&&r.bound[v]&&r.bound[v](x),u&&st(t,v)),f}):[],r.update(),u=!0,U(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){const v=Pe(e.target);r.fragment&&r.fragment.l(v),v.forEach(N)}else r.fragment&&r.fragment.c();e.intro&&A(t.$$.fragment),C(t,e.target,e.anchor,e.customElement),We()}ie(m)}class me{$destroy(){D(this,1),this.$destroy=_}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const lt="/assets/arduino.36ee6a91.svg",ct="/assets/css3.bc8bddbd.svg",at="/assets/c.7b98a6f9.svg",rt="/assets/cpp.05052a0a.svg",ot="/assets/discordjs.714bae02.png",ut="/assets/electron.f14ab9de.svg",dt="/assets/express.2dfcb495.png",mt="/assets/git.ba9e0b2e.svg",ft="/assets/gulp.4bbfaa40.svg",pt="/assets/html5.c62bf88b.svg",vt="/assets/js.9a935d73.svg",ht="/assets/jwt.9e262bd4.svg",gt="/assets/mongodb.f1035714.svg",bt="/assets/mysql.974bf440.svg",yt="/assets/nodejs.3f9a19b9.svg",xt="/assets/php.bf8b7e48.svg",jt="/assets/postman.d37cf237.png",wt="/assets/rust.ea9dec17.svg",It="/assets/sass.94c74e62.svg",kt="/assets/svelte.dc8a06dc.svg",At="/assets/typescript.b487cbba.svg",Et="/assets/vite.17e50649.svg",Mt="/assets/vue.606c4449.svg",_t="/assets/webpack.608fe510.svg",De=[{name:"Arduino",experience:7,icon:lt},{name:"Css",experience:7,icon:ct},{name:"C++",experience:5,icon:rt},{name:"C",experience:3,icon:at},{name:"Discord.js",experience:9.5,icon:ot},{name:"Electron",experience:6,icon:ut},{name:"Express",experience:9,icon:dt},{name:"Git",experience:7,icon:mt},{name:"Gulp.js",experience:7,icon:ft},{name:"Html",experience:10,icon:pt},{name:"JavaScript",experience:10,icon:vt},{name:"Json Web Token",experience:9,icon:ht},{name:"MongoDB",experience:8,icon:gt},{name:"MySQL",experience:6,icon:bt},{name:"Node.js",experience:10,icon:yt},{name:"php",experience:4,icon:xt},{name:"Postman",experience:7,icon:jt},{name:"Rust",experience:6,icon:wt},{name:"Sass",experience:6,icon:It},{name:"Svelte",experience:8,icon:kt},{name:"TypeScript",experience:9,icon:At},{name:"Vite",experience:9,icon:Et},{name:"Vue.js",experience:8,icon:Mt},{name:"Webpack",experience:8,icon:_t}];function Yt(t){let e,n,i,c;return{c(){e=d("a"),n=d("div"),i=O(t[0]),s(e,"href",c="#"+t[1]),s(e,"class","svelte-uw9f8d")},m(a,o){J(a,e,o),l(e,n),l(n,i)},p(a,[o]){o&1&&se(i,a[0]),o&2&&c!==(c="#"+a[1])&&s(e,"href",c)},i:_,o:_,d(a){a&&N(e)}}}function Nt(t,e,n){let{name:i}=e,{targetId:c}=e;return t.$$set=a=>{"name"in a&&n(0,i=a.name),"targetId"in a&&n(1,c=a.targetId)},[i,c]}class he extends me{constructor(e){super(),de(this,e,Nt,Yt,ue,{name:0,targetId:1})}}function Tt(t){let e,n,i,c,a,o,h,m,r,u,v,f,w,x;return{c(){e=d("div"),n=d("div"),i=d("img"),o=b(),h=d("div"),m=O(t[0]),r=b(),u=d("div"),v=d("div"),v.textContent="Experience:",f=b(),w=d("div"),x=d("div"),L(i.src,c=t[2])||s(i,"src",c),s(i,"alt",a=t[0]+" icon"),s(i,"class","svelte-vj5vah"),s(h,"id","name"),s(h,"class","svelte-vj5vah"),s(n,"id","ni-wrapper"),s(n,"class","svelte-vj5vah"),s(v,"id","title"),s(v,"class","svelte-vj5vah"),s(x,"id","xp"),E(x,"width","calc(var(--experience-widht) / 10 * "+Number(t[1])+")"),s(x,"class","svelte-vj5vah"),s(w,"id","bg"),s(w,"class","svelte-vj5vah"),s(u,"id","experience"),E(u,"position","relative"),E(u,"left","calc(0 - (var(--experience-widht) - (var(--experience-widht) / 10 * "+Number(t[1])+")))"),s(u,"class","svelte-vj5vah"),s(e,"id","wrapper"),s(e,"class","svelte-vj5vah")},m(k,j){J(k,e,j),l(e,n),l(n,i),l(n,o),l(n,h),l(h,m),l(e,r),l(e,u),l(u,v),l(u,f),l(u,w),l(w,x)},p(k,[j]){j&4&&!L(i.src,c=k[2])&&s(i,"src",c),j&1&&a!==(a=k[0]+" icon")&&s(i,"alt",a),j&1&&se(m,k[0]),j&2&&E(x,"width","calc(var(--experience-widht) / 10 * "+Number(k[1])+")"),j&2&&E(u,"left","calc(0 - (var(--experience-widht) - (var(--experience-widht) / 10 * "+Number(k[1])+")))")},i:_,o:_,d(k){k&&N(e)}}}function Vt(t,e,n){let{name:i}=e,{experience:c}=e,{icon:a}=e;return t.$$set=o=>{"name"in o&&n(0,i=o.name),"experience"in o&&n(1,c=o.experience),"icon"in o&&n(2,a=o.icon)},[i,c,a]}class Zt extends me{constructor(e){super(),de(this,e,Vt,Tt,ue,{name:0,experience:1,icon:2})}}function ze(t,e,n){const i=t.slice();return i[5]=e[n],i}function Je(t){let e,n,i=t[5].name+"",c,a,o,h,m=t[5].value+"",r,u;return{c(){e=d("div"),n=d("div"),c=O(i),a=O(":"),o=b(),h=d("div"),r=O(m),u=b(),s(h,"id","value"),s(h,"class","svelte-ydfr9n"),s(e,"id","field")},m(v,f){J(v,e,f),l(e,n),l(n,c),l(n,a),l(e,o),l(e,h),l(h,r),l(e,u)},p(v,f){f&4&&i!==(i=v[5].name+"")&&se(c,i),f&4&&m!==(m=v[5].value+"")&&se(r,m)},d(v){v&&N(e)}}}function Bt(t){let e,n,i,c,a,o,h,m=t[2],r=[];for(let u=0;u<m.length;u+=1)r[u]=Je(ze(t,m,u));return{c(){e=d("div"),n=d("div"),i=d("div"),c=O(t[1]),a=b();for(let u=0;u<r.length;u+=1)r[u].c();s(i,"id","title"),s(i,"class","svelte-ydfr9n"),s(n,"id","popup"),s(n,"class","svelte-ydfr9n"),s(e,"id","bg"),s(e,"class","svelte-ydfr9n")},m(u,v){J(u,e,v),l(e,n),l(n,i),l(i,c),l(n,a);for(let f=0;f<r.length;f+=1)r[f].m(n,null);o||(h=ge(e,"click",Ke(t[4])),o=!0)},p(u,[v]){if(v&2&&se(c,u[1]),v&4){m=u[2];let f;for(f=0;f<m.length;f+=1){const w=ze(u,m,f);r[f]?r[f].p(w,v):(r[f]=Je(w),r[f].c(),r[f].m(n,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=m.length}},i:_,o:_,d(u){u&&N(e),Qe(r,u),o=!1,h()}}}function Gt(t,e,n){let{id:i}=e,{title:c}=e,{fields:a}=e,{hideFunction:o}=e;const h=()=>{o(i)};return t.$$set=m=>{"id"in m&&n(0,i=m.id),"title"in m&&n(1,c=m.title),"fields"in m&&n(2,a=m.fields),"hideFunction"in m&&n(3,o=m.hideFunction)},[i,c,a,o,h]}class Oe extends me{constructor(e){super(),de(this,e,Gt,Bt,ue,{id:0,title:1,fields:2,hideFunction:3})}}const Ct="/assets/keyboard-mouse-paper.c8180d07.svg",Dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2Q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",zt="/assets/discord.a0c8fcde.svg",Jt="/assets/email.a002b74c.png";function Se(t,e,n){const i=t.slice();return i[2]=e[n],i}function Fe(t){let e,n;return e=new Zt({props:{name:t[2].name,experience:t[2].experience,icon:t[2].icon}}),{c(){W(e.$$.fragment)},m(i,c){C(e,i,c),n=!0},p:_,i(i){n||(A(e.$$.fragment,i),n=!0)},o(i){Y(e.$$.fragment,i),n=!1},d(i){D(e,i)}}}function Ot(t){let e,n,i,c,a,o,h,m,r,u,v,f,w,x,k,j,q,je,S,we,M,T,F,Ie,ke,K,Ae,V,H,Ee,Me,P,_e,Z,X,Ye,Ne,$,fe,B,ee,R,Te,te,Q,le,pe,Ve;u=new he({props:{name:"Skills",targetId:"skills"}}),f=new he({props:{name:"Projects",targetId:"projects"}}),x=new he({props:{name:"Contact",targetId:"contacts"}});let G=De,g=[];for(let p=0;p<G.length;p+=1)g[p]=Fe(Se(t,G,p));const Le=p=>Y(g[p],1,1,()=>{g[p]=null});return R=new Oe({props:{id:"discord",title:"Discord",fields:[{name:"Username + Tag",value:"SturmEnte#4367"}],hideFunction:Xe}}),Q=new Oe({props:{id:"email",title:"Email",fields:[{name:"Email Adress",value:"sturmente@proton.me"}],hideFunction:Xe}}),{c(){e=d("main"),n=d("div"),i=d("div"),i.innerHTML=`<div class="title svelte-7jnew1">Who am I?</div> 
			<div><span style="color: red;">TBD</span><br/>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum velit qui dolore doloribus iusto necessitatibus? Neque illum aperiam hic rerum in consectetur modi ipsum recusandae corporis laboriosam
				tempore repellat nostrum temporibus, provident nam nihil error necessitatibus pariatur a deserunt mollitia sunt, at quas ullam. Temporibus quibusdam neque, quam amet itaque qui doloremque minima accusantium!
				Id est ab minima, explicabo maiores sunt natus? Cupiditate fugiat illum, odio ad, porro facilis, maiores exercitationem qui consequuntur sequi vel eos laudantium? Iure cumque a et culpa facilis ad
				voluptatum in, at iusto nam, dignissimos beatae earum! Corporis, praesentium ullam alias fugiat modi, nam vero, dignissimos architecto voluptatem nemo totam eaque excepturi officiis quae quod aliquam
				saepe aspernatur? Accusamus maiores a sed soluta. Provident, perspiciatis cumque sit labore eaque non explicabo possimus inventore rerum porro eligendi quae harum, suscipit, eos aliquid omnis aliquam
				voluptates tempore quis? Expedita provident eligendi reprehenderit molestiae eius, beatae, doloremque explicabo in tenetur deleniti rerum, minus quibusdam repudiandae? A obcaecati, tenetur vel enim
				expedita, quidem, quam iste doloribus architecto tempore autem officia odio id itaque unde fugit esse eveniet dolore labore. Quam laboriosam laborum, doloremque sed obcaecati quidem, non tenetur aperiam
				veritatis sunt esse! Commodi, officiis error numquam perspiciatis repellendus repudiandae.</div>`,c=b(),a=d("div"),o=d("img"),m=b(),r=d("div"),W(u.$$.fragment),v=b(),W(f.$$.fragment),w=b(),W(x.$$.fragment),k=b(),j=d("div"),q=d("div"),q.textContent="Skills",je=b(),S=d("div");for(let p=0;p<g.length;p+=1)g[p].c();we=b(),M=d("div"),T=d("a"),F=d("img"),ke=b(),K=d("span"),K.textContent="GitHub",Ae=b(),V=d("div"),H=d("img"),Me=b(),P=d("span"),P.textContent="Discord",_e=b(),Z=d("div"),X=d("img"),Ne=b(),$=d("span"),$.textContent="Email",fe=b(),B=d("div"),ee=d("div"),W(R.$$.fragment),Te=b(),te=d("div"),W(Q.$$.fragment),s(i,"id","about-child-01"),s(i,"class","about-child svelte-7jnew1"),L(o.src,h=Ct)||s(o,"src",h),s(o,"alt","Keyboard Mouse Paper"),s(o,"title","Image by Megan_Rexazin"),s(o,"class","svelte-7jnew1"),s(a,"id","about-child-02"),s(a,"class","about-child svelte-7jnew1"),s(n,"id","about"),s(n,"class","svelte-7jnew1"),s(r,"id","internal-links"),s(r,"class","svelte-7jnew1"),s(q,"id","skill-title"),s(q,"class","svelte-7jnew1"),s(S,"id","skill-wrapper"),s(S,"class","svelte-7jnew1"),s(j,"id","skills"),s(j,"class","svelte-7jnew1"),L(F.src,Ie=Dt)||s(F,"src",Ie),s(F,"alt","GitHub Icon"),s(F,"class","svelte-7jnew1"),E(K,"color","white"),s(K,"class","svelte-7jnew1"),s(T,"class","contact svelte-7jnew1"),s(T,"href","https://github.com/sturmente"),L(H.src,Ee=zt)||s(H,"src",Ee),s(H,"alt","Discord Icon"),s(H,"class","svelte-7jnew1"),E(P,"color","#5865F2"),s(P,"class","svelte-7jnew1"),s(V,"class","contact svelte-7jnew1"),L(X.src,Ye=Jt)||s(X,"src",Ye),s(X,"alt","Email Icon"),s(X,"class","svelte-7jnew1"),E($,"color","white"),s($,"class","svelte-7jnew1"),s(Z,"class","contact svelte-7jnew1"),s(M,"id","contacts"),s(M,"class","svelte-7jnew1"),s(ee,"id","discord"),E(ee,"display","none"),s(te,"id","email"),E(te,"display","none"),s(B,"id","popups")},m(p,I){J(p,e,I),l(e,n),l(n,i),l(n,c),l(n,a),l(a,o),l(e,m),l(e,r),C(u,r,null),l(r,v),C(f,r,null),l(r,w),C(x,r,null),l(e,k),l(e,j),l(j,q),l(j,je),l(j,S);for(let y=0;y<g.length;y+=1)g[y].m(S,null);l(e,we),l(e,M),l(M,T),l(T,F),l(T,ke),l(T,K),l(M,Ae),l(M,V),l(V,H),l(V,Me),l(V,P),l(M,_e),l(M,Z),l(Z,X),l(Z,Ne),l(Z,$),J(p,fe,I),J(p,B,I),l(B,ee),C(R,ee,null),l(B,Te),l(B,te),C(Q,te,null),le=!0,pe||(Ve=[ge(V,"click",t[0]),ge(Z,"click",t[1])],pe=!0)},p(p,[I]){if(I&0){G=De;let y;for(y=0;y<G.length;y+=1){const Ze=Se(p,G,y);g[y]?(g[y].p(Ze,I),A(g[y],1)):(g[y]=Fe(Ze),g[y].c(),A(g[y],1),g[y].m(S,null))}for(nt(),y=G.length;y<g.length;y+=1)Le(y);it()}},i(p){if(!le){A(u.$$.fragment,p),A(f.$$.fragment,p),A(x.$$.fragment,p);for(let I=0;I<G.length;I+=1)A(g[I]);A(R.$$.fragment,p),A(Q.$$.fragment,p),le=!0}},o(p){Y(u.$$.fragment,p),Y(f.$$.fragment,p),Y(x.$$.fragment,p),g=g.filter(Boolean);for(let I=0;I<g.length;I+=1)Y(g[I]);Y(R.$$.fragment,p),Y(Q.$$.fragment,p),le=!1},d(p){p&&N(e),D(u),D(f),D(x),Qe(g,p),p&&N(fe),p&&N(B),D(R),D(Q),pe=!1,U(Ve)}}}function He(t){document.getElementById(t).style.display="block",document.body.style.overflowY="hidden"}function Xe(t){document.getElementById(t).style.display="none",document.body.style.overflowY="scroll"}function St(t){return[()=>{He("discord")},()=>{He("email")}]}class Ft extends me{constructor(e){super(),de(this,e,St,Ot,ue,{})}}new Ft({target:document.getElementById("app")});