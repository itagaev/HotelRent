(this["webpackJsonphotel-rent"]=this["webpackJsonphotel-rent"]||[]).push([[0],{100:function(e,t,a){e.exports=a(111)},11:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(74),r=a(75),l=a(7);Object(l.h)({enforceActions:"observed"});var c=function(){function e(){Object(n.a)(this,e),this.selectedHotelsListView="all",this.loadingHotels=!1,this.city="",this.hotels=[],this.date_from=new Date,this.peopleCnt=1,this.dayCnt=1}return Object(r.a)(e,[{key:"set",value:function(e,t){this[e]=t}}]),e}();Object(l.j)(c,{selectedHotelsListView:l.o,loadingHotels:l.o,city:l.o,date_from:l.o,peopleCnt:l.o,dayCnt:l.o,hotels:l.o,set:l.f});var i=new c},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(12),l=a.n(r),c=a(26),i=a(14),o=a(80),s=a(142),u=a(145),m=a(147),d=a(113),f=Object(s.a)((function(e){return{appBar:{backgroundColor:"#003580"},title:{marginLeft:e.spacing(6)}}})),p=function(){var e=f();return n.createElement(u.a,{className:e.appBar,position:"static"},n.createElement(m.a,null,n.createElement(d.a,{variant:"h5",className:e.title},"HotelRent")))},v=a(153),b=a(47),g=a(155),E=a(148),h=a(162),y=a(163),C=a(149),k=a(150),N=a(156),j=a(151),w=a(165),x=a(11),O=Object(s.a)((function(){return{root:{marginTop:20},input:{width:"25%"},date:{marginLeft:10,width:"13%"},peopleNumber:{marginLeft:10,width:"14%"},button:{marginTop:5,marginLeft:10}}})),H=Object(c.b)((function(){var e=n.useState(""),t=Object(b.a)(e,2),a=t[0],r=t[1],l=n.useState(new Date),c=Object(b.a)(l,2),i=c[0],o=c[1],s=n.useState(1),u=Object(b.a)(s,2),m=u[0],d=u[1],f=n.useState(1),p=Object(b.a)(f,2),v=p[0],H=p[1],L=O();return n.createElement("div",{className:L.root},n.createElement(E.a,null,n.createElement(h.a,{className:L.input},n.createElement(y.a,{htmlFor:"input"},"\u041a\u0443\u0434\u0430 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0435\u0445\u0430\u0442\u044c?"),n.createElement(C.a,{id:"input",startAdornment:n.createElement(k.a,{position:"start"},n.createElement(w.a,null)),value:a,onChange:function(e){r(e.currentTarget.value)}})),n.createElement(g.a,{className:L.date,disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",label:"\u0414\u0435\u043d\u044c \u0437\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f",value:i,onChange:function(e){return o(e)}}),n.createElement(N.a,{className:L.peopleNumber,label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u044e\u0434\u0435\u0439",type:"number",value:m,onChange:function(e){var t=e.currentTarget.value;d(+t<=0?1:+t>4?4:+t)},InputLabelProps:{shrink:!0}}),n.createElement(N.a,{className:L.peopleNumber,label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439",value:v,onChange:function(e){isNaN(+e.currentTarget.value)?H(0):H(+e.currentTarget.value)}}),n.createElement(j.a,{className:L.button,variant:"contained",color:"primary",onClick:function(){x.a.set("loadingHotels",!0),setTimeout((function(){x.a.set("city",a),x.a.set("date_from",i),x.a.set("peopleCnt",m),x.a.set("dayCnt",v),x.a.set("loadingHotels",!1)}),1e3)}},"\u041f\u043e\u0438\u0441\u043a")))})),L=Object(s.a)((function(e){return{root:{padding:"3.5% 0% 9.5% 0%"}}})),T=Object(c.b)((function(){var e=L();return n.createElement("div",{className:e.root},n.createElement(d.a,{variant:"h5",display:"block"},"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u043f\u0435\u0446\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043e\u0442\u0435\u043b\u0435\u0439 \u0438 \u0434\u043e\u043c\u043e\u0432"),n.createElement(d.a,{variant:"caption",display:"block",gutterBottom:!0},"\u041e\u0442 \u0443\u044e\u0442\u043d\u044b\u0445 \u0437\u0430\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u0445 \u0434\u043e\u043c\u043e\u0432 \u0434\u043e \u0441\u0442\u0438\u043b\u044c\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043a\u0432\u0430\u0440\u0442\u0438\u0440"),n.createElement(H,null))})),I=Object(s.a)((function(e){return{root:{backgroundColor:"#f7f7f7"},container:{flexGrow:1,width:"75%",height:240}}})),P=function(){var e=I();return n.createElement("div",{className:e.root},n.createElement(v.a,{className:e.container},n.createElement(T,null)))},F=a(77),S=function(){return n.createElement(n.Fragment,null,n.createElement(i.a,{utils:o.a},n.createElement(p,null),n.createElement(P,null),n.createElement(F.HotelsSection,null)))};l.a.render(n.createElement(c.a,null,n.createElement(S,null)),document.getElementById("root"))},50:function(e,t,a){"use strict";var n=a(68);a.d(t,"HotelItem",(function(){return n.a}));a(67)},67:function(e,t){},68:function(e,t,a){"use strict";var n=a(82),r=a(83),l=a(0),c=a(26),i=a(7),o=a(112),s=a(148),u=a(113),m=a(164),d=a(79),f=a.n(d),p=a(78),v=a.n(p),b=a(159),g=function(e){var t=e.keyItem,a=e.value;return l.createElement(l.Fragment,null,l.createElement(u.a,{color:"primary",display:"inline"},t,":"," "),l.createElement(u.a,{variant:"body2",display:"inline"},a),l.createElement("br",null))},E=function(e){var t=e.options,a=e.optionText,n=e.optionTextColor;return l.createElement(l.Fragment,null,l.createElement(u.a,{color:"primary",display:"inline"},a,":"," "),l.createElement(u.a,{variant:"body2",display:"inline",color:n},t),l.createElement("br",null))},h=a(142),y=Object(h.a)((function(){return{image:{margin:"auto"},img:{maxWidth:"95%"},favIcon:{cursor:"pointer"},root:{height:"100%",padding:10}}})),C=a(11);a.d(t,"a",(function(){return k}));var k=Object(c.b)((function(e){var t=e.hotel,a=y(),c=Object(i.f)((function(e){var t=Object(r.a)(C.a.hotels).slice(0),a=t.findIndex((function(t){return t.id===e})),l=t[a];t[a]=Object(n.a)({},l,{favorite:!l.favorite}),C.a.set("hotels",t)}));return l.createElement(o.a,null,l.createElement(s.a,{container:!0,className:a.root},l.createElement(s.a,{item:!0,xs:4,className:a.image},l.createElement("img",{src:t.imgLink,alt:"Hotel pic",className:a.img})),l.createElement(s.a,{item:!0,xs:8},l.createElement("div",null,l.createElement(u.a,{color:"primary",variant:"h6",display:"inline"},t.name,", ",t.city),l.createElement(b.a,{value:t.stars,readOnly:!0,size:"small"}),t.favorite?l.createElement(v.a,{className:a.favIcon,onClick:function(){return c(t.id)}}):l.createElement(f.a,{className:a.favIcon,onClick:function(){return c(t.id)}})),l.createElement(u.a,{color:"primary",display:"inline"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:"," "),l.createElement(m.a,{color:"primary",size:"small",label:t.rating}),l.createElement("br",null),l.createElement(g,{keyItem:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:t.desc}),l.createElement(g,{keyItem:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442",value:"\u041e\u0442 1 \u0434\u043e ".concat(t.maxPlace)}),l.createElement(g,{keyItem:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",value:t.contacts}),function(){var e=t.advantages.reduce((function(e,t,a){return 0===a?e.charAt(0).toUpperCase()+e.slice(1):e+", "+t}),t.advantages[0]),a=t.disadvantages.reduce((function(e,t,a){return 0===a?e.charAt(0).toUpperCase()+e.slice(1):e+", "+t}),t.disadvantages[0]);return l.createElement(l.Fragment,null,0===t.advantages.length?null:l.createElement(E,{options:e,optionTextColor:"inherit",optionText:"\u041f\u043b\u044e\u0441\u044b"}),0===t.disadvantages.length?null:l.createElement(E,{options:a,optionTextColor:"error",optionText:"\u041c\u0438\u043d\u0443\u0441\u044b"}))}(),l.createElement(u.a,{color:"primary",display:"inline"},"\u0426\u0435\u043d\u0430 \u043d\u0430 ",C.a.dayCnt," \u0434\u043d\u0435\u0439/\u0434\u0435\u043d\u044c:"," "),l.createElement(m.a,{color:"primary",size:"small",label:function(e){var t=e[C.a.peopleCnt];return C.a.dayCnt*t}(t.price)}),l.createElement("br",null))))}))},69:function(e,t,a){"use strict";var n=a(0),r=a(26),l=a(153),c=a(152),i=a(157),o=a(154),s=[{id:1,city:"\u0410\u043b\u043c\u0430\u0442\u044b",name:"\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",stars:4,desc:"\u0413\u043e\u0441\u0442\u0438\u043d\u0438\u0446\u0430 \u0432 \u0446\u0435\u043d\u0442\u0440\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0441 \u043e\u0442\u043b\u0438\u0447\u043d\u044b\u043c \u0432\u0438\u0434\u043e\u043c \u043d\u0430 \u0433\u043e\u0440\u044b! 850\u043c \u043e\u0442 \u0446\u0435\u0442\u0440\u0430",rating:8.9,maxPlace:4,hasPlace:!0,price:{1:15e3,2:2e4,3:35e3,4:6e4},advantages:["\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0430\u0432\u0442\u0440\u0430\u043a","\u043e\u043d\u043b\u0430\u0439\u043d-\u043e\u043f\u043b\u0430\u0442\u0430"],disadvantages:["\u043f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430"],favorite:!1,imgLink:"https://r-cf.bstatic.com/xdata/images/hotel/square220/16723416.webp?k=10a4c7adfe60342b3e5a91e75a59290b1f0f62fb5cec350b3c83865776359c86&o=",contacts:"+7-747-909-7212"},{id:2,city:"\u0410\u043b\u043c\u0430\u0442\u044b",name:"\u041e\u0442\u0435\u043b\u044c \u0410\u043b\u043c\u0430\u0442\u044b",stars:3,desc:"\u0413\u043e\u0441\u0442\u0438\u043d\u0438\u0446\u0430 \xab\u0410\u043b\u043c\u0430\u0442\u044b\xbb \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0430 \u0432 \u0446\u0435\u043d\u0442\u0440\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0410\u043b\u043c\u0430\u0442\u044b. \u041a \u0443\u0441\u043b\u0443\u0433\u0430\u043c \u0433\u043e\u0441\u0442\u0435\u0439 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0441\u0430\u0443\u043d\u0430 \u0438 \u043c\u0430\u0441\u0441\u0430\u0436\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442. \u0421\u0442\u043e\u0439\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0440\u0443\u0433\u043b\u043e\u0441\u0443\u0442\u043e\u0447\u043d\u043e. \u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 Wi-Fi.",rating:8.5,maxPlace:3,hasPlace:!0,price:{1:1e4,2:15e3,3:25e3},advantages:["\u043e\u043d\u043b\u0430\u0439\u043d-\u043e\u043f\u043b\u0430\u0442\u0430"],disadvantages:[],favorite:!1,imgLink:"https://r-cf.bstatic.com/xdata/images/hotel/square220/153056764.webp?k=87573493ae417164c2b23cbcad17604a23e9e5c9d0cd034c9aba6f99a4650493&o=",contacts:"+7-747-853-8636"},{id:3,city:"\u041d\u0443\u0440-\u0421\u0443\u043b\u0442\u0430\u043d",name:"Gokai Hotel",stars:3,desc:"\u041e\u0442\u0435\u043b\u044c Gokai \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d \u0432 \u0440\u0430\u0439\u043e\u043d\u0435 \u041d\u0443\u0440-\u0421\u0443\u043b\u0442\u0430\u043d, \u0432 5 \u043a\u043c \u043e\u0442 \u043c\u043e\u043d\u0443\u043c\u0435\u043d\u0442\u0430 \u0411\u0430\u0439\u0442\u0435\u0440\u0435\u043a. \u041a \u0443\u0441\u043b\u0443\u0433\u0430\u043c \u0433\u043e\u0441\u0442\u0435\u0439 \u0431\u0430\u0440, \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u043d\u0430\u044f \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430 \u0438 \u043e\u0431\u0449\u0438\u0439 \u043b\u0430\u0443\u043d\u0434\u0436.",rating:8.7,maxPlace:2,hasPlace:!0,price:{1:1e4,2:15e3},advantages:[],disadvantages:[],favorite:!1,imgLink:"https://q-cf.bstatic.com/xdata/images/hotel/square220/211331834.webp?k=7735c228aee3618d2107b58211f267bf71236626a6b9db1f29463fe4d5d48401&o=",contacts:"+7-747-853-8636"}],u=a(11),m=a(50),d=a(142),f=Object(d.a)((function(){return{root:{marginTop:20},spinner:{marginLeft:"50%"},container:{flexGrow:1,marginTop:10,width:"50%",height:280}}}));a.d(t,"a",(function(){return p}));var p=Object(r.b)((function(){var e=f();n.useEffect((function(){u.a.set("loadingHotels",!0),setTimeout((function(){u.a.set("hotels",s),u.a.set("loadingHotels",!1)}),2500)}),[]);var t="all"===u.a.selectedHotelsListView?u.a.hotels.filter((function(e){return e.city.toLowerCase().startsWith(u.a.city.toLowerCase())&&e.hasPlace&&e.maxPlace>=u.a.peopleCnt})):u.a.hotels.filter((function(e){return e.favorite}));return n.createElement("div",{className:e.root},u.a.loadingHotels?n.createElement(l.a,{className:e.container},n.createElement(c.a,{className:e.spinner})):n.createElement(n.Fragment,null,n.createElement(i.a,{value:u.a.selectedHotelsListView,onChange:function(e,t){return u.a.set("selectedHotelsListView",t)},indicatorColor:"primary",textColor:"primary",centered:!0},n.createElement(o.a,{label:"\u0412\u0441\u0435",value:"all"}),n.createElement(o.a,{label:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",value:"favorites"})),t.map((function(t){return n.createElement(l.a,{key:t.id,className:e.container},n.createElement(m.HotelItem,{hotel:t}))}))))}))},77:function(e,t,a){"use strict";var n=a(69);a.d(t,"HotelsSection",(function(){return n.a}));a(50)}},[[100,1,2]]]);
//# sourceMappingURL=main.8e3e6f12.chunk.js.map