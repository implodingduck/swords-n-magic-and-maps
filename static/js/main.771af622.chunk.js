(this.webpackJsonpmaps=this.webpackJsonpmaps||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[0,0]},"properties":{"description":"zero zreo","type":"location"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-83.40820312500001,-83.87230896636571]},"properties":{"description":"New character starting point","type":"location"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-54.93164062500001,-72.67268149675316]},"properties":{"description":"Hope Harbor","type":"location"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-130.34179687500003,-39.740986355883564]},"properties":{"description":"Ramshackle","type":"location"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-132.53906250000003,-50.930738023718185]},"properties":{"description":"Lava Caves","type":"location"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[22.67578125,-72.20867825343294]},"properties":{"description":"Astronomer","type":"npc"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-84.06738281250001,-66.80922097449334]},"properties":{"description":"Rodrick","type":"npc"}}]}')},24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(8),c=n.n(r),a=(n(24),n.p,n(25),n(33)),s=n(36),p=n(34),l=n(2),u=n.n(l),d=n(13),f=n(3);function j(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var b=n(5),h=n(10),O=n(14),g=l.Control.extend({options:{className:"",onOff:"",handleOff:function(){}},onAdd:function(){var e=l.DomUtil.create("div",this.options.className);return l.DomEvent.disableClickPropagation(e),e},onRemove:function(e){return this.options.onOff&&e.off(this.options.onOff,this.options.handleOff,this),this}}),m=Object(h.a)((function(e,t){var n=new g(e);return{instance:n,context:Object(b.a)(Object(b.a)({},t),{},{overlayContainer:n})}})),y=Object(O.a)(m),v=function(e){var t=function(t,n){var i=function(){var e=Object(o.useState)(0),t=Object(f.a)(e,2),n=(t[0],t[1]);return function(){return n((function(e){return e+1}))}}(),c=e(t).current.instance;Object(o.useEffect)((function(){i()}),[]);var a=c.getContainer();return a?Object(r.createPortal)(t.children,a):null};return Object(o.forwardRef)(t)}(y),x=n(31),w=n(35),F=n(32),C=n(1),S=function(){var e=Object(o.useState)(null),t=Object(f.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(!0),c=Object(f.a)(r,2),a=c[0],s=(c[1],Object(x.b)({click:function(e){a&&(console.log(e.latlng),i(e.latlng),s.flyTo(e.latlng,s.getZoom()))}})),p=null===n?null:Object(C.jsx)(w.a,{center:n,pathOptions:{color:"green"},radius:10,children:Object(C.jsxs)(F.a,{children:["[",n.lng,", ",n.lat,"]"]})});return Object(C.jsxs)("div",{children:[null===n?"Click some where":"["+n.lng+", "+n.lat+"]",p]})},k=function(){var e=Object(x.a)(),t=Object(o.useState)(!1),n=Object(f.a)(t,2),i=n[0],r=n[1],c=Object(o.useState)(""),a=Object(f.a)(c,2),s=a[0],p=a[1];return Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{onClick:function(){r(!i)},children:"Filter"}),Object(C.jsx)("div",{style:{display:i?"block":"none",backgroundColor:"#ffffff",position:"absolute",width:"25em",left:"-26em",top:"0",padding:"0.5em"},children:Object(C.jsxs)("label",{children:[Object(C.jsx)("span",{children:"Filter"}),":",Object(C.jsx)("input",{type:"text",placeholder:"Filter...",onChange:function(t){p(t.target.value),e.eachLayer((function(e){e.feature&&(e.feature.properties.description.toLowerCase().indexOf(t.target.value.toLowerCase())>-1?e.setOpacity(1):e.setOpacity(0))}))},value:s})]})})]})},P=n(15),L=n(16),z=n(17),E=n(18);delete u.a.Icon.Default.prototype._getIconUrl,u.a.Icon.Default.mergeOptions({iconUrl:z.a,iconRetinaUrl:L.a,shadowUrl:E.a});var N=u.a.icon({iconUrl:"/swords-n-magic-and-maps/npc.png",iconSize:[25,35],iconAnchor:[12,34],popupAnchor:[0,-35]}),U=u.a.icon({iconUrl:"/swords-n-magic-and-maps/location.png",iconSize:[25,35],iconAnchor:[12,34],popupAnchor:[0,-35]}),A=function(){var e=function(){var e=Object(o.useState)(j()),t=Object(f.a)(e,2),n=t[0],i=t[1];return Object(o.useEffect)((function(){function e(){i(j())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=e.height,n=(e.width,Object(o.useState)("")),i=n.filterValue,r=n.setFilter;return document.addEventListener("filter",(function(e){console.log(e),r(e.details)}),!1),Object(C.jsx)("div",{className:"map__container",children:Object(C.jsxs)(a.a,{center:[-60,-30],zoom:3,style:{height:t+"px",backgroundColor:"#e7bb8c"},children:[Object(C.jsx)(s.a,{attribution:"Map From Kindred Games: Swords n Magic and Stuff",url:"https://implodingduck.github.io/swords-n-magic-and-maps/tiles/{z}/{x}/{y}.png",minZoom:0,maxNativeZoom:3,noWrap:!0,tms:!0}),Object(C.jsx)(v,{position:"topright",children:Object(C.jsx)(k,{})}),Object(C.jsx)(v,{position:"topright",children:Object(C.jsx)(S,{})}),Object(C.jsx)(p.a,{data:P,onEachFeature:function(e,t){d.isMobile||t.bindPopup('<div class="featurepopup">'.concat(JSON.stringify(e.properties),"</div>")),t.bindTooltip(e.properties.description,{permanent:!1,direction:"top",offset:[0,-32]}).openTooltip()},pointToLayer:function(e,t){if(void 0===i||0===i.length||e.properties.description.indexOf(i)>-1)return"npc"===e.properties.type?u.a.marker(t,{icon:N}):u.a.marker(t,{icon:U})}})]})})};n(29);var T=function(){return Object(C.jsx)(A,{})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),r(e),c(e)}))};c.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(T,{})}),document.getElementById("root")),D()}},[[30,1,2]]]);
//# sourceMappingURL=main.771af622.chunk.js.map