(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(73),i=a.n(o),l={path:{color:"#B7DDFC"},input:{display:"flex",flexDirection:"row"},prompt:{color:"#F9D7D7",marginRight:"0.5rem"},command:{color:"#A3C8A4",marginRight:"0.5rem"},args:{marginRight:"0.5rem"},caret:{backgroundColor:"#99BCBD",width:"0.6rem",heigth:"1rem"}},A=function(e){var t=e.path,a=void 0===t?"~":t,n=e.command,o=e.args,A=i()(e,["path","command","args"]);return r.a.createElement("div",A,r.a.createElement("div",{style:l.path},a),r.a.createElement("div",{style:l.input},r.a.createElement("b",{style:l.prompt},"❯"),n?r.a.createElement("b",{style:l.command}," "+n):r.a.createElement("span",{style:l.caret}," "),o?r.a.createElement("span",null," "+o):null))},c=(a(147),{executable:{color:"#F9D7D7",textDecoration:"none"}}),g=function(e){var t=e.name,a=e.url,n=i()(e,["name","url"]);return r.a.createElement("span",n,r.a.createElement("a",{style:c.executable,href:a},t),"*")},m=(a(163),{link:{color:"#F9D7D7",textDecoration:"none"}}),s=function(e){var t=e.verbose,a=e.title,n=e.url,o=i()(e,["verbose","title","url"]);return r.a.createElement("span",o,r.a.createElement("a",{style:m.link,href:n},a),"@",t?r.a.createElement("span",null," -> "+n):null)},E=(a(33),{longList:{},shortList:{element:{marginRight:"2rem"},container:{display:"flex",flexDirection:"row",flexWrap:"wrap"}}}),d=function(e){var t=e.name,a=e.long,n=void 0!==a&&a,o=e.children,l=i()(e,["name","long","children"]);return Array.isArray(o)||(o=[o]),n?r.a.createElement("div",l,o.map(function(e,a){return r.a.createElement("div",{key:t+"_entry_"+a},e)})):r.a.createElement("div",Object.assign({},l,{style:E.shortList.container}),o.map(function(e,a){return r.a.createElement("span",{key:t+"_entry_"+a,style:E.shortList.element},e)}))},p=[{title:"Polos Pretty Paper",description:"Print Templates",url:"https://itunes.apple.com/us/app/polos-pretty-paper/id1439946484?mt=8",createdAt:new Date(2018,12,1)},{title:"Airbox",description:"Audio Inbox for your Smart Speaker",url:"http://airbox.network",createdAt:new Date(2018,4,1)},{title:"Parcel Explorer App",description:"Google Maps for Decentraland",url:"https://github.com/Pczek/ParcelExplorer",createdAt:new Date(2018,3,1)},{title:"Globe",description:"Connected Ether Tracker/Wallet",url:"https://github.com/Pczek/Globe",createdAt:new Date(2018,2,15)},{title:"Monota",description:"Mono Tasking iOS App",url:"https://itunes.apple.com/us/app/monota/id1333036184?mt=8",createdAt:new Date(2017,11,1)},{title:"Aves",description:"Setupless Text2Speech for Blogs",url:"http://getaves.com.s3-website-eu-west-1.amazonaws.com/introduction/",createdAt:new Date(2017,5,1)},{title:"papr",description:"Paper Calendar Templates",url:"https://github.com/Pczek/papr",createdAt:new Date(2017,1,1)},{title:"diarydash",description:"Daily Diary Dashboard",url:"http://diarydash.com/",createdAt:new Date(2017,0,1)},{title:"breathpacer",description:"Rythmic Breath Pacer",url:"https://pczek.github.io/breathpacer/",createdAt:new Date(2016,6,1)},{title:"matgen",description:"Cutting Mat Background Generator",url:"https://pczek.github.io/matgen/",createdAt:new Date(2016,2,1)},{title:"Five_Minute_Journal",description:"",url:"https://pczek.github.io/5mJ/",createdAt:new Date(2015,6,1)},{title:"Commander_Ottens_Pro_Longboarding",description:"",url:"https://github.com/Pczek/COPL",createdAt:new Date(2015,1,1)},{title:"Nuclear_Power_Plant_Simulator_2014",description:"",url:"https://github.com/Pczek/NPPS2014",createdAt:new Date(2015,11,1)},{title:"cairobou",description:"Creative Coding with Cairo",url:"https://github.com/Pczek/cairobou",createdAt:new Date(2014,9,1)}],D=[{title:"LinkedIn",url:"https://www.linkedin.com/in/philip-poloczek-1b3202125/"},{title:"GitHub",url:"https://github.com/Pczek"},{title:"Hackerrank",url:"https://www.hackerrank.com/pczek"},{title:"STRAVA",url:"https://www.strava.com/athletes/18353420"},{title:"Instagram",url:"https://www.instagram.com/naolimao/"}],u=function(){return r.a.createElement(d,{name:"Profiles"},D.map(function(e){return r.a.createElement(s,{key:e.title+"_Profile",title:e.title,url:e.url})}))},Q=function(){return r.a.createElement(d,{long:!0,name:"Projects"},p.map(function(e){return r.a.createElement(s,{verbose:!1,key:e.title+"_Project",title:e.description?e.title.toUpperCase()+" - "+e.description:""+e.title.toUpperCase(),url:e.url})}))},h={file:{color:"#F9D7D7",textDecoration:"none"}},B=function(e){var t=e.name,a=e.url,n=i()(e,["name","url"]);return r.a.createElement("span",n,r.a.createElement("a",{style:h.file,href:a},t))},I=a(165),O=a.n(I),H=function(){return r.a.createElement(d,{name:"Documents"},r.a.createElement(B,{name:"resume_poloczek.pdf",url:O.a}))},f=a(166),C=a.n(f),R=a(148),b={container:{margin:"0px 1rem 0px 1rem",padding:"0px 0px 1rem 0px",backgroundColor:"#4B4B4B",color:"#D9D9D9",imageRendering:"pixelated",display:"flex",flexDirection:"column",minHeight:"100vh",justifyContent:"flex-end"},content:{},pixelMe:{imageRendering:"pixelated",width:"10vw",minWidth:"100px",position:"fixed",margin:0,bottom:0,right:16,zIndex:0}};t.default=function(){return r.a.createElement("div",{style:b.container},r.a.createElement(R.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"atem.io / Philip Poloczek"),r.a.createElement("meta",{name:"description",content:"This is the personal website of Philip Poloczek"}),r.a.createElement("meta",{name:"keywords",content:"developer, profile, resume"}),r.a.createElement("link",{rel:"stylesheet",media:"screen",href:"https://fontlibrary.org/face/fantasque-sans-mono",type:"text/css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Asap",rel:"stylesheet"}),r.a.createElement("link",{rel:"stylesheet",href:"./atem.css",type:"text/css"})),r.a.createElement("div",{style:b.content},r.a.createElement(A,{path:"~",command:"cat",args:"./README.md"}),"# Hi there,",r.a.createElement("br",null),"I am Phil, people tend to call me Polo. As a master's degree computer scientist I lived a lot of my life inside terminals. I enjoy writing clean code and learning about new technologies to solve hard problems.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"loop/index.html"},"loop"),r.a.createElement(A,{path:"~",command:"ls",args:"profiles/"}),r.a.createElement(u,null),r.a.createElement("br",null),r.a.createElement(A,{path:"~",command:"ls",args:"-l projects/"}),r.a.createElement(Q,null),r.a.createElement("br",null),r.a.createElement(A,{path:"~",command:"ls",args:"documents/"}),r.a.createElement(H,null),r.a.createElement("br",null),r.a.createElement(A,{path:"~",command:"ls",args:"bin/"}),r.a.createElement(g,{name:"mailMe",url:"mailto:phil.czek@gmail.com"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(A,{path:"~"})),r.a.createElement("img",{style:b.pixelMe,src:C.a,alt:""}))}},147:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(14)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},163:function(e,t,a){"use strict";a(164)("link",function(e){return function(t){return e(this,"a","href",t)}})},164:function(e,t,a){var n=a(11),r=a(19),o=a(20),i=/"/g,l=function(e,t,a,n){var r=String(o(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},165:function(e,t,a){e.exports=a.p+"static/resume_poloczek_philip-cb0bfc3d65f4c5cde620f345f42f854e.pdf"},166:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-index-js-57387c3acdb9d818a41c.js.map