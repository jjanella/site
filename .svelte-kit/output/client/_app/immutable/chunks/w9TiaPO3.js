var Fn=Array.isArray,zt=Array.prototype.indexOf,qn=Array.from,Ln=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,Yn=Object.prototype,Mn=Array.prototype,Qt=Object.getPrototypeOf;const jn=()=>{};function Un(t){return t()}function Xt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,mt=4,B=8,ot=16,R=32,V=64,Z=128,T=256,W=512,v=1024,k=2048,q=4096,F=8192,L=16384,tn=32768,gt=65536,Hn=1<<17,nn=1<<19,Tt=1<<20,ht=Symbol("$state"),Bn=Symbol("legacy props");function xt(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!rn(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ln(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Zn(){tt=!0}const Wn=1,zn=2,Jn=4,Qn=8,Xn=16,tr=1,nr=2,fn="[",_n="[!",cn="]",Rt={},rr=Symbol();function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function dt(t){i=t}function er(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(i.l={s:null,u:null,r1:[],r2:ft(!1)})}function lr(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Q(s.effect),J(s.reaction),Ct(s.fn)}}finally{Q(r),J(e)}}i=n.p,n.m=!0}return t||{}}function nt(){return!tt||i!==null&&i.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:xt,rv:0,wv:0};return r}function sr(t){return vn(ft(t))}function ar(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function vn(t){return u!==null&&!A&&(u.f&w)!==0&&(g===null?kn([t]):g.push(t)),t}function ur(t,n){return u!==null&&!A&&nt()&&(u.f&(w|ot))!==0&&(g===null||!g.includes(t))&&on(),pn(t,n)}function pn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),Dt(t,k),nt()&&f!==null&&(f.f&v)!==0&&(f.f&(R|V))===0&&(x===null?Dn([t]):x.push(t))),n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,s=0;s<l;s++){var a=r[s],_=a.f;(_&k)===0&&(!e&&a===f||(m(a,n),(_&(v|T))!==0&&((_&w)!==0?Dt(a,q):et(a))))}}let O=!1;function or(t){O=t}let E;function M(t){if(t===null)throw kt(),Rt;return E=t}function fr(){return M(N(E))}function ir(t){if(O){if(N(E)!==null)throw kt(),Rt;E=t}}function _r(t=1){if(O){for(var n=t,r=E;n--;)r=N(r);E=r}}function cr(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=N(n);n.remove(),n=e}}var yt,hn,St,Ot;function vr(){if(yt===void 0){yt=window,hn=document;var t=Element.prototype,n=Node.prototype;St=pt(n,"firstChild").get,Ot=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function st(t){return St.call(t)}function N(t){return Ot.call(t)}function pr(t,n){if(!O)return st(t);var r=st(E);if(r===null)r=E.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function hr(t,n){if(!O){var r=st(t);return r instanceof Comment&&r.data===""?N(r):r}return E}function dr(t,n=1,r=!1){let e=O?E:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=lt();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function yr(t){t.textContent=""}function It(t){var n=w|k,r=u!==null&&(u.f&w)!==0?u:null;return f===null||r!==null&&(r.f&T)!==0?n|=T:f.f|=Tt,{ctx:i,deps:null,effects:null,equals:xt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function wr(t){const n=It(t);return n.equals=At,n}function it(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function dn(t){for(var n=t.parent;n!==null;){if((n.f&w)===0)return n;n=n.parent}return null}function Nt(t){var n,r=f;Q(dn(t));try{it(t),n=$t(t)}finally{Q(r)}return n}function Pt(t){var n=Nt(t),r=(S||(t.f&T)!==0)&&t.deps!==null?q:v;m(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function yn(t){it(t),H(t,0),m(t,L),t.v=t.deps=t.ctx=t.reactions=null}function bt(t){f===null&&u===null&&sn(),u!==null&&(u.f&T)!==0&&f===null&&ln(),_t&&en()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var l=(t&V)!==0,s=f,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=b;try{wt(!0),ct(a),a.f|=tn}catch(P){throw I(a),P}finally{wt(_)}}else n!==null&&et(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Tt|Z))===0;if(!y&&!l&&e&&(s!==null&&wn(a,s),u!==null&&(u.f&w)!==0)){var c=u;(c.effects??(c.effects=[])).push(a)}return a}function Er(t){const n=Y(B,null,!1);return m(n,v),n.teardown=t,n}function mr(t){bt();var n=f!==null&&(f.f&R)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Ct(t);return e}}function gr(t){return bt(),En(t)}function Tr(t){const n=Y(V,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Ct(t){return Y(mt,t,!1)}function En(t){return Y(B,t,!0)}function xr(t,n=[],r=It){const e=n.map(r);return mn(()=>t(...e.map(bn)))}function mn(t,n=0){return Y(B|ot|n,t,!0)}function Ar(t,n=!0){return Y(B|R,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=u;Et(!0),J(null);try{n.call(null)}finally{Et(r),J(e)}}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&R)===0&&I(n),n=r}}function I(t,n=!0){var r=!1;if((n||(t.f&nn)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}qt(t,n&&!r),H(t,0),m(t,L);var a=t.transitions;if(a!==null)for(const y of a)y.stop();Ft(t);var _=t.parent;_!==null&&_.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Yt(t,r,!0),xn(r,()=>{I(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if((t.f&F)===0){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&gt)!==0||(e.f&R)!==0;Yt(e,n,s?r:!1),e=l}}}function Rr(t){Mt(t,!0)}function Mt(t,n){if((t.f&F)!==0){t.f^=F,(t.f&v)===0&&(t.f^=v),$(t)&&(m(t,k),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&R)!==0;Mt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let z=!1,at=[];function jt(){z=!1;const t=at.slice();at=[],Xt(t)}function kr(t){z||(z=!0,queueMicrotask(jt)),at.push(t)}function An(){z&&jt()}const Ut=0,Rn=1;let G=!1,K=Ut,j=!1,U=null,b=!1,_t=!1;function wt(t){b=t}function Et(t){_t=t}let D=[],C=0;let u=null,A=!1;function J(t){u=t}let f=null;function Q(t){f=t}let g=null;function kn(t){g=t}let p=null,d=0,x=null;function Dn(t){x=t}let Ht=1,X=0,S=!1;function Bt(){return++Ht}function $(t){var c;var n=t.f;if((n&k)!==0)return!0;if((n&q)!==0){var r=t.deps,e=(n&T)!==0;if(r!==null){var l,s,a=(n&W)!==0,_=e&&f!==null&&!S,y=r.length;if(a||_){for(l=0;l<y;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=W)}for(l=0;l<y;l++)if(s=r[l],$(s)&&Pt(s),s.wv>t.wv)return!0}(!e||f!==null&&!S)&&m(t,v)}return!1}function Sn(t,n){for(var r=n;r!==null;){if((r.f&Z)!==0)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw G=!1,t}function On(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function rt(t,n,r,e){if(G){if(r===null&&(G=!1),On(n))throw t;return}r!==null&&(G=!0);{Sn(t,n);return}}function Vt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];(s.f&w)!==0?Vt(s,n,r+1):n===s&&(r===0?m(s,k):(s.f&v)!==0&&m(s,q),et(s))}}function $t(t){var vt;var n=p,r=d,e=x,l=u,s=S,a=g,_=i,y=A,c=t.f;p=null,d=0,x=null,u=(c&(R|V))===0?t:null,S=(c&T)!==0&&(!b||(l===null||y)&&t.parent!==null),g=null,dt(t.ctx),A=!1,X++;try{var P=(0,t.fn)(),h=t.deps;if(p!==null){var o;if(H(t,d),h!==null&&d>0)for(h.length=d+p.length,o=0;o<p.length;o++)h[d+o]=p[o];else t.deps=h=p;if(!S)for(o=d;o<h.length;o++)((vt=h[o]).reactions??(vt.reactions=[])).push(t)}else h!==null&&d<h.length&&(H(t,d),h.length=d);if(nt()&&x!==null&&(t.f&(w|q|k))===0)for(o=0;o<x.length;o++)Vt(x[o],t);return l!==null&&X++,P}finally{p=n,d=r,x=e,u=l,S=s,g=a,dt(_),A=y}}function In(t,n){let r=n.reactions;if(r!==null){var e=zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&w)!==0&&(p===null||!p.includes(n))&&(m(n,q),(n.f&(T|W))===0&&(n.f^=W),it(n),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function ct(t){var n=t.f;if((n&L)===0){m(t,v);var r=f,e=i;f=t;try{(n&ot)!==0?gn(t):qt(t),Ft(t);var l=$t(t);t.teardown=typeof l=="function"?l:null,t.wv=Ht;var s=t.deps,a}catch(_){rt(_,t,r,e||t.ctx)}finally{f=r}}}function Gt(){if(C>1e3){C=0;try{an()}catch(t){if(U!==null)rt(t,U,null);else throw t}}C++}function Kt(t){var n=t.length;if(n!==0){Gt();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];(l.f&v)===0&&(l.f^=v);var s=[];Zt(l,s),Nn(s)}}finally{b=r}}}function Nn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(L|F))===0)try{$(e)&&(ct(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function Pn(){if(j=!1,C>1001)return;const t=D;D=[],Kt(t),j||(C=0,U=null)}function et(t){K===Ut&&(j||(j=!0,queueMicrotask(Pn))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(V|R))!==0){if((r&v)===0)return;n.f^=v}}D.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&R)!==0,a=s&&(l&v)!==0,_=r.next;if(!a&&(l&F)===0)if((l&B)!==0){if(s)r.f^=v;else{var y=u;try{u=r,$(r)&&ct(r)}catch(o){rt(o,r,null,r.ctx)}finally{u=y}}var c=r.first;if(c!==null){r=c;continue}}else(l&mt)!==0&&e.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var P=o.next;if(P!==null){r=P;continue t}o=o.parent}}r=_}for(var h=0;h<e.length;h++)c=e[h],n.push(c),Zt(c,n)}function Wt(t){var n=K,r=D;try{Gt();const l=[];K=Rn,D=l,j=!1,Kt(r);var e=t==null?void 0:t();return An(),(D.length>0||l.length>0)&&Wt(),C=0,U=null,e}finally{K=n,D=r}}async function Dr(){await Promise.resolve(),Wt()}function bn(t){var n=t.f,r=(n&w)!==0;if(r&&(n&L)!==0){var e=Nt(t);return yn(t),e}if(u!==null&&!A){g!==null&&g.includes(t)&&un();var l=u.deps;t.rv<X&&(t.rv=X,p===null&&l!==null&&l[d]===t?d++:p===null?p=[t]:p.push(t))}else if(r&&t.deps===null&&t.effects===null){var s=t,a=s.parent;a!==null&&(a.f&T)===0&&(s.f^=T)}return r&&(s=t,$(s)&&Pt(s)),t.v}function Sr(t){var n=A;try{return A=!0,t()}finally{A=n}}const Cn=-7169;function m(t,n){t.f=t.f&Cn|n}function Or(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{hn as $,fr as A,cn as B,kt as C,Vn as D,gt as E,yr as F,qn as G,nn as H,Tr as I,er as J,lr as K,Ct as L,En as M,Or as N,rn as O,Er as P,pt as Q,dr as R,pr as S,_r as T,ir as U,gr as V,Xt as W,bn as X,Un as Y,It as Z,xr as _,fn as a,tr as a0,nr as a1,ht as a2,Yn as a3,Mn as a4,ft as a5,Gn as a6,ur as a7,rr as a8,Kn as a9,Qt as aa,_n as ab,cr as ac,Rr as ad,Tn as ae,kr as af,$n as ag,Hn as ah,Jn as ai,At as aj,R as ak,V as al,Wn as am,zn as an,Qn as ao,Bn as ap,wr as aq,ar,Xn as as,Wt as at,Dr as au,sr as av,mn as b,lt as c,M as d,Zn as e,E as f,N as g,O as h,st as i,Ar as j,I as k,hr as l,i as m,jn as n,tt as o,Sr as p,Ln as q,J as r,or as s,Q as t,mr as u,Fn as v,u as w,f as x,vr as y,Rt as z};
