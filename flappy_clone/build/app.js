(()=>{"use strict";var e,r={579:(e,r,t)=>{var a=t(260),i=t.n(a);const s={type:i().AUTO,width:800,height:600,physics:{default:"arcade"},scene:{preload:function(){this.load.image("tardis","assets/tardis.jpg"),this.load.image("dalek","assets/dalek.png")},create:function(){this.add.image(0,0,"tardis").setOrigin(0,0),n=this.physics.add.sprite(s.width/2,s.height/2,"dalek").setOrigin(.5,.5),n.setScale(.5,.25),n.body.gravity.y=150},update:function(e,r){}}};let n=null;new(i().Game)(s)}},t={};function a(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}};return r[e].call(s.exports,s,s.exports,a),s.exports}a.m=r,e=[],a.O=(r,t,i,s)=>{if(!t){var n=1/0;for(p=0;p<e.length;p++){for(var[t,i,s]=e[p],o=!0,l=0;l<t.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((e=>a.O[e](t[l])))?t.splice(l--,1):(o=!1,s<n&&(n=s));if(o){e.splice(p--,1);var d=i();void 0!==d&&(r=d)}}return r}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[t,i,s]},a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={143:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var i,s,[n,o,l]=t,d=0;if(n.some((r=>0!==e[r]))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var p=l(a)}for(r&&r(t);d<n.length;d++)s=n[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(p)},t=self.webpackChunkphaser_webpack_boilerplate=self.webpackChunkphaser_webpack_boilerplate||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var i=a.O(void 0,[736],(()=>a(579)));i=a.O(i)})();