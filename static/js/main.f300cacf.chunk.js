(this.webpackJsonpmaps=this.webpackJsonpmaps||[]).push([[0],{11:function(e){e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[0,0]},"properties":{"description":"zero zreo"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-102.65625000000001,-83.81102365639774]},"properties":{"description":"New character starting point"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[157.42584228515628,9.73612839582732]},"properties":{"description":"top right corner"}}]}')},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(9),a=n.n(i),c=(n(21),n.p,n(22),n(28)),s=n(31),u=n(29),l=n(1),p=n.n(l),d=n(4);function g(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var f=n(26),h=n(30),j=n(27),m=n(2),b=function(){var e=Object(o.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(f.a)({click:function(e){console.log(e.latlng),r(e.latlng),i.flyTo(e.latlng,i.getZoom())}});return null===n?null:Object(m.jsx)(h.a,{center:n,pathOptions:{color:"green"},radius:10,children:Object(m.jsxs)(j.a,{children:["[",n.lng,", ",n.lat,"]"]})})},O=n(11),y=n(12),v=n(13),x=n(14);delete p.a.Icon.Default.prototype._getIconUrl,p.a.Icon.Default.mergeOptions({iconUrl:v.a,iconRetinaUrl:y.a,shadowUrl:x.a});var w=function(){var e=function(){var e=Object(o.useState)(g()),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(o.useEffect)((function(){function e(){r(g())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=e.height;e.width;return Object(m.jsx)("div",{className:"map__container",style:{border:"1px solid #ff00ff"},children:Object(m.jsxs)(c.a,{center:[-60,-30],zoom:3,style:{height:t+"px"},children:[Object(m.jsx)(s.a,{attribution:"Map From Kindred Games: Swords n Magic and Stuff",url:"https://implodingduck.github.io/swords-n-magic-and-maps/tiles/{z}/{x}/{y}.png",minZoom:0,maxNativeZoom:3,noWrap:!0,tms:!0}),Object(m.jsx)(b,{}),Object(m.jsx)(u.a,{data:O,onEachFeature:function(e,t){console.log(e),t.bindPopup('<div class="featurepopup">'.concat(JSON.stringify(e.properties),"</div>"))},pointToLayer:function(e,t){return console.log("handlePointToLayer"),console.log(e),p.a.marker(t)}})]})})};n(24);var F=function(){return Object(m.jsx)(w,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),i(e),a(e)}))};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.f300cacf.chunk.js.map