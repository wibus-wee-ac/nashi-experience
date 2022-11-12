(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var E=Object.defineProperty,T=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t,n)=>(T(e,typeof t!="symbol"?t+"":t,n),n);class c{constructor(t){if(z(this,"node",[]),typeof t>"u"){console.warn("Undefined args");return}if(typeof t=="string"){this.node=Array.from(document.querySelectorAll(t));return}if(t[Symbol.iterator]){for(const n of t)n instanceof Node&&this.node.push(n);return}if(t instanceof Node){this.node.push(t);return}console.warn("Invalid args")}}c.prototype.set={},c.prototype.get={},c.prototype.info={},c.prototype[Symbol.iterator]=function*(){let e=this.node;for(let t of e)yield d(t)};const r=(e,{get:t,set:n})=>{const s={set:-1,get:-1};n&&(c.prototype.set[e]=n,s.set=n.length),t&&(c.prototype.get[e]=t,s.get=t.length),c.prototype.info[e]=s},m=(e,t)=>{l[e]=t},N=(e,t)=>{c.prototype.set[t]&&(c.prototype.set[e]=c.prototype.set[t]),c.prototype.get[t]&&(c.prototype.get[e]=c.prototype.get[t]),c.prototype.info[e]=c.prototype.info[t]},x=(e,t)=>{r(e,{get(){return this[t]}})},y=(e,t=e)=>{r(e,{get(){return this[t]},set(n){this[t]=n}})},d=e=>{const t=new c(e);return new Proxy(t,{get:(n,s,o)=>{const a=o;if(s.toString()==="Symbol(Symbol.iterator)")return c.prototype[Symbol.iterator];if(s==="forEach"||s==="each")return p=>{for(const[u,h]of t.node.entries())p(d(h),u,t)};if(s==="length")return t.node.length;if(typeof s!="symbol"&&Number.isInteger(Number(s))){if(s>=n.node.length){console.warn("Array index out of bounds");return}return d(t.node[s])}if(c.prototype.info[s]){const p=c.prototype.info[s];return new Proxy(new Function,{apply(u,h,b){const{length:f}=b;if(f===p.get)return c.prototype.get[s].apply(t.node[0],b);if(f===p.set){for(const H of t.node)c.prototype.set[s].apply(H,b);return a}}})}if(Reflect.has(t,s))return Reflect.get(t,s);console.warn("Unknown props")}})},l=e=>d(e);y("text","innerText"),y("class","className"),y("html","innerHTML"),y("id"),y("value"),r("addClass",{set(e){this.classList.add(e)}}),r("removeClass",{set(e){this.classList.remove(e)}}),r("hasClass",{get(e){return this.classList.contains(e)}}),r("toggleClass",{set(e){this.classList.toggle(e)}}),r("attr",{get(e){return this.getAttribute(e)},set(e,t){this.setAttribute(e,t)}}),r("prop",{get(e){return this[e]},set(e,t){this[e]=t}});function A(e){let t=[],n=e.indexOf("-");for(;n!==-1;)t.push(n),n=e.indexOf("-",n+1);const s=[...e];for(const o of t)s[o]=" ",s[o+1]=s[o+1].toUpperCase();return s.join("").replaceAll(" ","")}function i(e){r(e,{get(){this.dispatchEvent(new Event(e))},set(t){this.addEventListener(e,t)}})}x("width","offsetWidth"),x("height","offsetHeight"),x("innerWidth","clientWidth"),x("innerHeight","clientHeight"),r("css",{get(e){return this.style[A(e)]},set(e,t){this.style[A(e)]=t}}),r("style",{get(e){return this.style[e]},set(e,t){this.style[e]=t}}),r("parent",{get(){return d(this.parentNode)}}),r("child",{get(){const e=Array.from(this.childNodes);return d(e)}}),N("children","child"),r("firstChild",{get(){const e=this.firstChild;return d(e)},set(e){this.insertBefore(e.node[0],this.childNodes[0]||null)}}),r("lastChild",{get(){const e=this.lastChild;return d(e)},set(e){this.append(e.node[0])}}),r("append",{set(e){for(const t of e.node)this.append(t)}}),r("hasChild",{get(){return this.hasChildNodes()}}),r("before",{set(e){for(const t of e.node)this.parentNode.insertBefore(t,this)}}),r("after",{set(e){for(const t of e.node.reverse())this.parentNode.insertBefore(t,this.nextSibling)}}),r("remove",{set(){this.remove()}}),r("index",{get(){return Array.from(this.parentNode.childNodes).indexOf(this)}}),r("next",{get(){return d(this.nextSibling)}}),r("prev",{get(){return d(this.previousSibling)}}),r("siblings",{get(){return d(Array.from(this.parentNode.childNodes).filter(e=>e!=this))}}),r("empty",{set(){for(const e of this.childNodes)e.remove()}}),r("show",{set(){this.style.display=""}}),r("hide",{set(){this.style.display="none"}}),r("toggle",{set(){this.style.display=this.style.display==="none"?"":"none"}}),r("event",{set(e,t){this.addEventListener(e,t)}}),N("on","event"),r("trigger",{set(e){typeof e=="string"&&(e=new Event(e)),this.dispatchEvent(e)}}),r("removeEvent",{set(e,t){this.removeEventListener(e,t)}}),r("hover",{set(e){this.addEventListener("mouseenter",e),this.addEventListener("mouseleave",e)}}),i("blur"),i("focus"),i("focusin"),i("focusout"),i("change"),i("click"),i("contextmenu"),i("dblclick"),i("error"),i("keydown"),i("keypress"),i("keyup"),i("mousedown"),i("mouseenter"),i("mouseleave"),i("mousemove"),i("mouseout"),i("mouseover"),i("mouseup"),i("resize"),i("scroll"),i("select"),i("submit"),i("input"),m("create",e=>d(document.createElement(e))),m("fromHTML",e=>{const t=new DOMParser().parseFromString(e,"text/html");return d(t.body.childNodes)}),m("merge",(...e)=>{const t=[];for(const n of e)for(const s of n.node)t.push(s);return d(Array.from(new Set(t)))}),m("equal",(e,t)=>[e.node,t.node].reduce((n,s)=>n.filter(o=>!s.includes(o))).length===0),m("clone",e=>{const t=e.node.slice();return d(t)});const L=()=>l.create("div").css("display","flex").css("gap","1rem"),g=(e,t)=>l.create("button").text(e).css("padding","0.3em 0.5em").css("font-size","1em").css("font-weight","500").css("font-family","inherit").css("border","1px solid #007bff").css("border-radius","8px").css("background-color","#007bff").css("color","#fff").css("cursor","pointer").css("outline","none").on("click",()=>{t&&t()}),v=e=>l.create("p").text(e).css("font-size","1rem").css("font-family","sans-serif"),S=()=>l.create("input").css("padding","0.5rem").css("font-size","1rem").css("font-family","sans-serif").css("border","none").css("border-radius","0.5rem").css("box-shadow","0 0 0 1px rgba(0,0,0,0.1)").css("outline","none").css("margin-bottom","1rem"),w=()=>l.create("div").css("display","flex").css("align-items","center").css("justify-content","space-between").css("padding","2rem").css("border-radius","0.5rem").css("background-color","#f5f5f5").css("flex-direction","column"),k=e=>l.create("code").text(e).css("font-size","1rem").css("font-family","sans-serif").css("font-weight","bold").css("color","#007bff").css("margin-bottom","1rem"),C=e=>l.create("h3").text(e).css("font-size","1.2rem").css("font-weight","bold").css("font-family","sans-serif"),O=()=>{const e=C("xClass()"),t=v("Try to add 'red' into the input box."),n=S(),s=k("Default"),o=L(),a=g("Check").click(()=>{const f=n.prop("value");s.text(`I have ${f}? \`${s.hasClass(f)}\``)}),p=g("Toggle").click(()=>{const f=n.prop("value");s.toggleClass(f)}),u=g("+").click(()=>{const f=n.prop("value");s.addClass(f)}),h=g("-").click(()=>{const f=n.prop("value");s.removeClass(f)});return o.append(a).append(p).append(u).append(h),w().append(e).append(t).append(s).append(n).append(o)},F=()=>{const e=C("html()"),t=v("Change the innerHTML of the element."),n=k("Nashiii"),s=S(),o=g("Try it").click(()=>{const p=s.prop("value");n.html(p)});return w().append(e).append(t).append(n).append(s).append(o)},I=()=>{const e=C("text()"),t=v("Set & Get the text content of the element."),n=l.create("p").text("Hello, Nashi!").css("display","none"),s=k(n.text()),o=g("Click Me",()=>{s.text("Hello, \u{1F350}!"),o.text("Clicked!")});return w().append(e).append(t).append(s).append(o)},P=()=>{const e=C("Width & Height"),t=v("Set Width or Height of the element."),n=l.create("div").css("width","130px").css("height","130px").css("margin-bottom","15px").css("background-color","#f5f5f5").css("border-radius","5px").css("display","flex").css("justify-content","center").css("align-items","center").css("text-align","center").css("box-shadow","0 0 1px #000").text("pending..."),s=L(),o=g("Get").click(()=>{const u=n.width(),h=n.height();n.text(`width: ${u} height: ${h}`)}),a=g("Get Inner").click(()=>{const u=n.innerWidth(),h=n.innerHeight();n.text(`innerWidth: ${u} innerHeight: ${h}`)});return s.append(o).append(a),w().append(e).append(t).append(n).append(s)},W=()=>l.create("div").css("display","grid").css("grid-template-columns","repeat(4, 1fr)").css("gap","1rem").css("margin","1rem 0").append(I()).append(O()).append(F()).append(P()),D=()=>{const e=l.create("div").css("max-width","1300px").css("margin","0 auto").css("margin-top","4rem");return e.append(W()),e},M=()=>{let e={color:"#fff",backgroundColor:"#000"};const t=l.create("h1").text("\u{1F350} Nashi + TS Experience");t.css("font-size","2rem").css("text-align","center").css("margin-top","2rem").css("margin-bottom","2rem").css("font-weight","bold").css("font-family","sans-serif");const n=l.create("p").text("The modern jQuery alternative.").css("text-align","center").css("font-size","1.2rem").css("font-family","sans-serif"),s=l.create("button").text("Click me!").css("display","block").css("margin","0 auto").css("margin-top","2rem").css("padding","1rem").css("font-size","1.2rem").css("border","1px solid transparent").css("font-family","sans-serif").css("border-radius","0.5rem").css("background-color",e.backgroundColor).css("color",e.color).css("cursor","pointer").css("outline","none").on("click",()=>{alert("Hello, Nashi!"),e={color:"#fff",backgroundColor:"#007bff"},s.css("background-color",e.backgroundColor).css("color",e.color).css("border","1px solid #007bff"),s.text("Clicked!")});return l.create("div").append(t).append(n).append(s)},$=()=>{const e=l.create("div");return e.append(M()),e.append(D()),e},j=$(),q=l("#root");q.append(j);
