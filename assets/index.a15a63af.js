(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var S=Object.defineProperty,H=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t,n)=>(H(e,typeof t!="symbol"?t+"":t,n),n);class c{constructor(t){if(T(this,"node",[]),typeof t>"u"){console.warn("Undefined args");return}if(typeof t=="string"){this.node=Array.from(document.querySelectorAll(t));return}if(t[Symbol.iterator]){for(const n of t)n instanceof Node&&this.node.push(n);return}if(t instanceof Node){this.node.push(t);return}console.warn("Invalid args")}}c.prototype.set={},c.prototype.get={},c.prototype.info={},c.prototype[Symbol.iterator]=function*(){let e=this.node;for(let t=0;t<e.length;t++){let n=e[t];yield p(n)}};const r=(e,{get:t,set:n})=>{const s={set:-1,get:-1};n&&(c.prototype.set[e]=n,s.set=n.length),t&&(c.prototype.get[e]=t,s.get=t.length),c.prototype.info[e]=s},y=(e,t)=>{l[e]=t},z=(e,t)=>{c.prototype.set[t]&&(c.prototype.set[e]=c.prototype.set[t]),c.prototype.get[t]&&(c.prototype.get[e]=c.prototype.get[t]),c.prototype.info[e]=c.prototype.info[t]},b=(e,t)=>{r(e,{get:function(){return this[t]}})},x=(e,t)=>{r(e,{get:function(){return this[t]},set:function(n){this[t]=n}})},p=e=>{const t=new c(e);return new Proxy(t,{get:(n,s,o)=>{const a=o;if(s.toString()==="Symbol(Symbol.iterator)")return c.prototype[Symbol.iterator];if(s==="forEach")return d=>{t.node.forEach((f,h)=>{d(p(f),h,t)})};if(s==="length")return t.node.length;if(typeof s!="symbol"&&Number.isInteger(Number(s))){if(s>=n.node.length){console.warn("Array index out of bounds");return}return p(t.node[s])}if(c.prototype.info[s]){const d=c.prototype.info[s];return new Proxy(new Function,{apply(f,h,m){const{length:u}=m;if(u===d.get)return c.prototype.get[s].apply(t.node[0],m);if(u===d.set)return t.node.forEach(L=>{c.prototype.set[s].apply(L,m)}),a}})}if(Reflect.has(t,s))return Reflect.get(t,s);console.warn("Unknown props")}})},l=e=>p(e);x("text","innerText"),x("class","className"),x("id","id"),x("html","innerHTML"),r("addClass",{set:function(e){this.classList.add(e)}}),r("removeClass",{set:function(e){this.classList.remove(e)}}),r("hasClass",{get:function(e){return this.classList.contains(e)}}),r("toggleClass",{set:function(e){this.classList.toggle(e)}}),r("attr",{get(e){return this.getAttribute(e)},set(e,t){this.setAttribute(e,t)}}),r("prop",{get(e){return this[e]},set(e,t){this[e]=t}});function N(e){let t=[],n=e.indexOf("-");for(;n!==-1;)t.push(n),n=e.indexOf("-",n+1);const s=Array.from(e);return t.forEach(o=>{s[o]=" ",s[o+1]=s[o+1].toUpperCase()}),s.join("").replaceAll(" ","")}function i(e){r(e,{get:function(){this.dispatchEvent(new Event(e))},set:function(t){this.addEventListener(e,t)}})}b("width","offsetWidth"),b("height","offsetHeight"),b("innerWidth","clientWidth"),b("innerHeight","clientHeight"),r("css",{get:function(e){return this.style[N(e)]},set:function(e,t){this.style[N(e)]=t}}),r("style",{get:function(e){return this.style[e]},set:function(e,t){this.style[e]=t}}),r("parent",{get:function(){return p(this.parentNode)}}),r("child",{get:function(){const e=Array.from(this.childNodes);return p(e)}}),r("firstChild",{get:function(){const e=this.firstChild;return p(e)},set:function(e){this.insertBefore(e.node[0],this.childNodes[0]||null)}}),r("lastChild",{get:function(){const e=this.lastChild;return p(e)},set:function(e){this.appendChild(e.node[0])}}),r("append",{set:function(e){e.node.forEach(t=>{this.appendChild(t)})}}),r("hasChild",{get:function(){return this.hasChildNodes()}}),r("before",{set:function(e){e.node.forEach(t=>{this.parentNode.insertBefore(t,this)})}}),r("after",{set:function(e){e.node.reverse().forEach(t=>{this.parentNode.insertBefore(t,this.nextSibling)})}}),r("remove",{set:function(){this.remove()}}),r("index",{get:function(){return Array.from(this.parentNode.childNodes).indexOf(this)}}),r("next",{get:function(){return p(this.nextSibling)}}),r("prev",{get:function(){return p(this.previousSibling)}}),r("siblings",{get:function(){return p(Array.from(this.parentNode.childNodes).filter(e=>e!=this))}}),r("event",{set:function(e,t){this.addEventListener(e,t)}}),z("on","event"),r("trigger",{set:function(e){typeof e=="string"&&(e=new Event(e)),this.dispatchEvent(e)}}),r("removeEvent",{set:function(e,t){this.removeEventListener(e,t)}}),r("hover",{set:function(e){this.addEventListener("mouseenter",e),this.addEventListener("mouseleave",e)}}),i("blur"),i("focus"),i("focusin"),i("focusout"),i("change"),i("click"),i("contextmenu"),i("dblclick"),i("error"),i("keydown"),i("keypress"),i("keyup"),i("mousedown"),i("mouseenter"),i("mouseleave"),i("mousemove"),i("mouseout"),i("mouseover"),i("mouseup"),i("resize"),i("scroll"),i("select"),i("submit"),i("input"),y("create",function(e){return p(document.createElement(e))}),y("fromHTML",function(e){const t=new DOMParser().parseFromString(e,"text/html");return p(t.body.childNodes)}),y("merge",function(...e){const t=[];for(let n of e)n.node.forEach(s=>t.push(s));return p([...new Set(t)])}),y("equal",function(e,t){return[e.node,t.node].reduce((n,s)=>n.filter(o=>!s.includes(o))).length===0});const A=()=>l.create("div").css("display","flex").css("gap","1rem"),g=(e,t)=>l.create("button").text(e).css("padding","0.3em 0.5em").css("font-size","1em").css("font-weight","500").css("font-family","inherit").css("border","1px solid #007bff").css("border-radius","8px").css("background-color","#007bff").css("color","#fff").css("cursor","pointer").css("outline","none").on("click",()=>{t&&t()}),v=e=>l.create("p").text(e).css("font-size","1rem").css("font-family","sans-serif"),E=()=>l.create("input").css("padding","0.5rem").css("font-size","1rem").css("font-family","sans-serif").css("border","none").css("border-radius","0.5rem").css("box-shadow","0 0 0 1px rgba(0,0,0,0.1)").css("outline","none").css("margin-bottom","1rem"),w=()=>l.create("div").css("display","flex").css("align-items","center").css("justify-content","space-between").css("padding","2rem").css("border-radius","0.5rem").css("background-color","#f5f5f5").css("flex-direction","column"),k=e=>l.create("code").text(e).css("font-size","1rem").css("font-family","sans-serif").css("font-weight","bold").css("color","#007bff").css("margin-bottom","1rem"),C=e=>l.create("h3").text(e).css("font-size","1.2rem").css("font-weight","bold").css("font-family","sans-serif"),O=()=>{const e=C("xClass()"),t=v("Try to add 'red' into the input box."),n=E(),s=k("Default"),o=A(),a=g("Check").click(()=>{const u=n.prop("value");s.text(`I have ${u}? \`${s.hasClass(u)}\``)}),d=g("Toggle").click(()=>{const u=n.prop("value");s.toggleClass(u)}),f=g("+").click(()=>{const u=n.prop("value");s.addClass(u)}),h=g("-").click(()=>{const u=n.prop("value");s.removeClass(u)});return o.append(a).append(d).append(f).append(h),w().append(e).append(t).append(s).append(n).append(o)},F=()=>{const e=C("html()"),t=v("Change the innerHTML of the element."),n=k("Nashiii"),s=E(),o=g("Try it").click(()=>{const d=s.prop("value");n.html(d)});return w().append(e).append(t).append(n).append(s).append(o)},I=()=>{const e=C("text()"),t=v("Set & Get the text content of the element."),n=l.create("p").text("Hello, Nashi!").css("display","none"),s=k(n.text()),o=g("Click Me",()=>{s.text("Hello, \u{1F350}!"),o.text("Clicked!")});return w().append(e).append(t).append(s).append(o)},P=()=>{const e=C("Width & Height"),t=v("Set Width or Height of the element."),n=l.create("div").css("width","130px").css("height","130px").css("margin-bottom","15px").css("background-color","#f5f5f5").css("border-radius","5px").css("display","flex").css("justify-content","center").css("align-items","center").css("text-align","center").css("box-shadow","0 0 1px #000").text("pending..."),s=A(),o=g("Get").click(()=>{const f=n.width(),h=n.height();n.text(`width: ${f} height: ${h}`)}),a=g("Get Inner").click(()=>{const f=n.innerWidth(),h=n.innerHeight();n.text(`innerWidth: ${f} innerHeight: ${h}`)});return s.append(o).append(a),w().append(e).append(t).append(n).append(s)},W=()=>l.create("div").css("display","grid").css("grid-template-columns","repeat(4, 1fr)").css("gap","1rem").css("margin","1rem 0").append(I()).append(O()).append(F()).append(P()),D=()=>{const e=l.create("div").css("max-width","1300px").css("margin","0 auto").css("margin-top","4rem");return e.append(W()),e},M=()=>{let e={color:"#fff",backgroundColor:"#000"};const t=l.create("h1").text("\u{1F350} Nashi + TS Experience");t.css("font-size","2rem").css("text-align","center").css("margin-top","2rem").css("margin-bottom","2rem").css("font-weight","bold").css("font-family","sans-serif");const n=l.create("p").text("The modern jQuery alternative.").css("text-align","center").css("font-size","1.2rem").css("font-family","sans-serif"),s=l.create("button").text("Click me!").css("display","block").css("margin","0 auto").css("margin-top","2rem").css("padding","1rem").css("font-size","1.2rem").css("border","1px solid transparent").css("font-family","sans-serif").css("border-radius","0.5rem").css("background-color",e.backgroundColor).css("color",e.color).css("cursor","pointer").css("outline","none").on("click",()=>{alert("Hello, Nashi!"),e={color:"#fff",backgroundColor:"#007bff"},s.css("background-color",e.backgroundColor).css("color",e.color).css("border","1px solid #007bff"),s.text("Clicked!")});return l.create("div").append(t).append(n).append(s)},$=()=>{const e=l.create("div");return e.append(M()),e.append(D()),e},j=$(),q=l("#root");q.append(j);
