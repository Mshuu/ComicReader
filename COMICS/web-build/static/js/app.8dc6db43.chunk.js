(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{430:function(e,t,a){"use strict";var n=a(18),r=a.n(n),i=a(11),o=a.n(i),s=a(68),c=a.n(s),l=a(704),u=a(706),d=a(141),g=a(1),m=a.n(g),h=a(10),p=a(66),f=a(2),v=a(6),b=a(392),k=a(387),w=a(29),S=a(705),C=a(429),x="#ccc",y="#2f95dc";function E(e){return m.a.createElement(b.a,{name:e.name,size:26,style:{marginBottom:-3},color:e.focused?y:x})}var O=a(4),P=a.n(O),I=a(5),T=a.n(I),L=a(7),H=a.n(L),z=a(3),B=a.n(z),j=a(8),R=a.n(j),V=a(17),_=a(98),F=a(197),A=a.n(F),W=a(285),D=a(64),M=a(65),N=a(25),G=a(30),J=function(e){function t(e){var a;return P()(this,t),(a=H()(this,B()(t).call(this,e)))._CardOnPress=function(){console.log(a.state),a.state.navigate("IssueScreen",{id:a.state.item.id,socket:a.state.socket,title:a.state.item.title,showHeader:!1,pageCount:a.state.item.link[3]["pse:count"]})},a.state={item:e.item,socket:e.socket,navigate:e.navigate},a}return R()(t,e),T()(t,[{key:"render",value:function(){var e=this;return m.a.createElement(M.Card,null,m.a.createElement(G.a,{onPress:function(){return e._CardOnPress()}},m.a.createElement(M.CardItem,{cardBody:!0,button:!0,onPress:function(){return e._CardOnPress()}},m.a.createElement(N.a,{resizeMode:"contain",source:{uri:"http://l2.mml2.net:2202"+this.state.item.link[0].href},style:{height:277,width:180,flex:1}}))))}}]),t}(m.a.PureComponent),U=function(e){function t(e){var a;return P()(this,t),(a=H()(this,B()(t).call(this,e)))._CardOnPress=function(){a.state.navigate("IssueScreen",{id:a.state.item.id,socket:a.state.socket,title:a.state.item.title,showHeader:!1,pageCount:a.state.item.link[3]["pse:count"]})},a.state={item:e.item,socket:e.socket,navigate:e.navigate},a}return R()(t,e),T()(t,[{key:"render",value:function(){var e=this;return m.a.createElement(M.Card,null,m.a.createElement(G.a,{onPress:function(){return e._CardOnPress()}},m.a.createElement(M.CardItem,{cardBody:!0,button:!0,onPress:function(){return e._CardOnPress()}},m.a.createElement(N.a,{resizeMode:"contain",source:{uri:"http://l2.mml2.net:2202"+this.state.item.link[0].href},style:{height:277,width:180,flex:1,opacity:.3}}))))}}]),t}(m.a.PureComponent),Z=function(e){function t(e){var a;return P()(this,t),(a=H()(this,B()(t).call(this,e)))._CardOnPress=function(){a.state.navigate("IssueScreen",{id:a.state.item.id,socket:a.state.socket,title:a.state.item.title,showHeader:!1,pageCount:a.state.item.link[3]["pse:count"]})},a.state={item:e.item,socket:e.socket,navigate:e.navigate},a}return R()(t,e),T()(t,[{key:"render",value:function(){var e=this,t=this.state.item.page/this.state.item.link[3]["pse:count"]*100;return m.a.createElement(M.Card,null,m.a.createElement(G.a,{onPress:function(){return e._CardOnPress()}},m.a.createElement(M.CardItem,{cardBody:!0,button:!0,onPress:function(){return e._CardOnPress()}},m.a.createElement(N.a,{resizeMode:"contain",source:{uri:"http://l2.mml2.net:2202"+this.state.item.link[0].href},style:{height:277,width:180,flex:1}}))),m.a.createElement(M.CardItem,null,m.a.createElement(v.a,{style:Y.progressBar},m.a.createElement(v.a,{style:(f.a.absoluteFill,{backgroundColor:"#8BED4F",width:t+"%",maxWidth:180})}))))}}]),t}(m.a.PureComponent),Y=f.a.create({container:{flex:1,backgroundColor:"#fff"},flatList:{flex:1,backgroundColor:"#fff"},developmentModeText:{marginBottom:20,color:"rgba(0,0,0,0.4)",fontSize:14,lineHeight:19,textAlign:"center"},row:{flex:1,justifyContent:"space-around"},contentContainer:{paddingTop:30},welcomeContainer:{alignItems:"center",marginTop:10,marginBottom:20},progressBar:{flexDirection:"row",height:5,marginTop:2,maxWidth:180,backgroundColor:"white",borderColor:"#000",minWidth:180,borderWidth:1,borderRadius:5},welcomeImage:{width:100,height:80,resizeMode:"contain",marginTop:3,marginLeft:-10},getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{backgroundColor:"rgba(0,0,0,0.05)",borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:{position:"absolute",bottom:0,left:0,right:0,alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20},tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"},titleCard:{flex:1,minWidth:300}}),X=function(e){function t(e){var a;return P()(this,t),(a=H()(this,B()(t).call(this,e))).state={item:e.item,socket:e.state.socket,navigate:e.state.navigate},a}return R()(t,e),T()(t,[{key:"render",value:function(){return this.state.item.page>0&&this.state.item.page>=this.state.item.link[3]["pse:count"]?m.a.createElement(U,{item:this.state.item,socket:this.state.socket,navigate:this.state.navigate}):this.state.item.page>0&&this.state.item.page<this.state.item.link[3]["pse:count"]?m.a.createElement(Z,{item:this.state.item,socket:this.state.socket,navigate:this.state.navigate}):m.a.createElement(J,{item:this.state.item,socket:this.state.socket,navigate:this.state.navigate})}}]),t}(m.a.PureComponent),q=function(e){function t(e){var a;return P()(this,t),(a=H()(this,B()(t).call(this,e))).state={item:e.item,socket:e.state.socket,navigate:e.state.navigate},a}return R()(t,e),T()(t,[{key:"render",value:function(){return this.state.item.page>0&&this.state.item.page>=this.state.item.link[3]["pse:count"]?m.a.createElement(U,{item:this.state.item,socket:this.state.socket,navigate:this.state.navigate}):this.state.item.page>0&&this.state.item.page<this.state.item.link[3]["pse:count"]?m.a.createElement(Z,{item:this.state.item,socket:this.state.socket,navigate:this.state.navigate}):m.a.createElement(J,{item:this.state.item,socket:this.state.socket,navigate:this.state.navigate,s:!0})}}]),t}(m.a.PureComponent),K=function(e){function t(e){var a;return P()(this,t),(a=H()(this,B()(t).call(this,e))).bookIssues=function(e){var t=e.item;e.index;return m.a.createElement(X,{item:t,state:a.props.state})},a.state={item:a.props.item,socket:a.props.state.socket,navigation:a.props.state.navigation},a}return R()(t,e),T()(t,[{key:"render",value:function(){return this.props.item.issueCount>0?m.a.createElement(M.Card,{transparent:!0},m.a.createElement(M.CardItem,null,m.a.createElement(V.a,{style:{fontWeight:"bold",fontSize:25,color:"#595957"}},this.props.item.title)),m.a.createElement(M.CardItem,null,m.a.createElement(D.b,{style:Q.flatList,data:this.props.item.issues,horizontal:!0,windowSize:4,initialListSize:4,initialNumToRender:4,maxToRenderPerBatch:4,removeClippedSubviews:!0,renderItem:this.bookIssues.bind(this),keyExtractor:function(e,t){return t.toString()}}))):m.a.createElement(M.Card,{transparent:!0},m.a.createElement(M.CardItem,null,m.a.createElement(V.a,{style:{fontWeight:"bold",fontSize:25,color:"#595957"}},this.props.item.title)),m.a.createElement(M.CardItem,null,m.a.createElement(q,{item:this.state.item.issues,state:this.props.state})))}}]),t}(m.a.PureComponent),Q=f.a.create({container:{flex:1,backgroundColor:"#fff"},flatList:{flex:1,backgroundColor:"#fff"},developmentModeText:{marginBottom:20,color:"rgba(0,0,0,0.4)",fontSize:14,lineHeight:19,textAlign:"center"},row:{flex:1,justifyContent:"space-around"},contentContainer:{paddingTop:30},welcomeContainer:{alignItems:"center",marginTop:10,marginBottom:20},progressBar:{flexDirection:"row",height:5,marginTop:2,maxWidth:180,backgroundColor:"white",borderColor:"#000",minWidth:180,borderWidth:1,borderRadius:5},welcomeImage:{width:100,height:80,resizeMode:"contain",marginTop:3,marginLeft:-10},getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{backgroundColor:"rgba(0,0,0,0.05)",borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:{position:"absolute",bottom:0,left:0,right:0,alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20},tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"},titleCard:{flex:1,minWidth:300}});function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ee=function(e){function t(e){var a;P()(this,t),(a=H()(this,B()(t).call(this,e))).renderHeader=function(){return m.a.createElement(W.a,{placeholder:"Type Here...",lightTheme:!0,round:!0,onChangeText:function(e){return a.searchFilterFunction(e)},autoCorrect:!1})},a.searchFilterFunction=function(e){a.setState({search:e});var t=a.state.books.filter((function(t){var a=t.title.toUpperCase()+"   \n      "+t.title.toUpperCase()+" "+t.title.toUpperCase(),n=e.toUpperCase();return a.indexOf(n)>-1}));a.setState({data:t})},a.updateSearch=function(e){a.setState({search:e})},a.GettingBooks=function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.awrap(_.a.getItem("books"));case 3:if(t.t0=t.sent,t.t0){t.next=6;break}t.t0=[];case 6:e=t.t0,a.setState({books:JSON.parse(e),noStorage:!1,isLoading:!1,data:JSON.parse(e)}),t.next=13;break;case 10:t.prev=10,t.t1=t.catch(0),console.log(t.t1);case 13:case"end":return t.stop()}}),null,null,[[0,10]])},a.HandleReads=function(e){var t,n,i,o,s;return r.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:for(t=0;t<e.length;t++)for(n=0;n<a.state.books.length;n++)if(a.state.books[n].issues.length>0)for(i=0;i<a.state.books[n].issues.length;i++)a.state.books[n].issues[i].id==parseInt(e[t].issueId)&&((o=a.state.books)[n].issues[i].page=e[t].page,a.setState({books:o,data:o,gotReads:!0}),a.forceUpdate());else a.state.books[n].issues.id==parseInt(e[t].issueId)&&(console.log("Found read"),(s=a.state.books)[n].issues.page=e[t].page,a.setState({books:s,data:s,gotReads:!0}),a.forceUpdate());case 1:case"end":return r.stop()}}))},a.HandleHome=function(e,t){var n,i,o,s;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:for(n=[],i=0;i<e.length;i++)s=JSON.parse(e[i].issues),(o=s.length)||(o=0),n.push({title:e[i].title,id:e[i].id,issues:s,issueCount:o});return a.setState({books:n,isLoading:!1}),t.emit("GetReads",1),c.prev=4,c.next=7,r.a.awrap(_.a.setItem("books",JSON.stringify(n)));case 7:c.next=12;break;case 9:c.prev=9,c.t0=c.catch(4),console.log(error);case 12:case"end":return c.stop()}}),null,null,[[4,9]])},a._renderItem=function(e){var t=e.item;e.index;return m.a.createElement(K,{item:t,state:a.state})};var n=A()("http://l2.mml2.net:3000",{transports:["websocket"]}),i=a.props.navigation.navigate;return a.state={isLoading:!0,isConnected:!1,noStorage:!0,gotReads:!1,books:[],data:[],search:"",navigate:i,socket:n},a}return R()(t,e),T()(t,[{key:"componentDidMount",value:function(){var e=this;this.state.socket.on("connect",(function(){e.setState({isConnected:!0})})),this.state.socket.on("GotHome",(function(t){e.HandleHome(t,e.state.socket)})),this.state.socket.on("GotReads",(function(t){e.HandleReads(t)})),this.state.socket.on("DownloadedIssue",(function(e){console.log("downloading: "+e)})),this.GettingBooks(),this.state.socket.emit("GetHome","mg"),this.props.navigation.addListener("didFocus",(function(){0==e.state.isLoading&&e.state.socket.emit("GetHome","mg")}))}},{key:"render",value:function(){var e=this.state.search;return this.state.isLoading?m.a.createElement(v.a,null,m.a.createElement(V.a,null,"Loading...")):this.state.gotReads?m.a.createElement(v.a,{style:te.container},m.a.createElement(W.a,{placeholder:"Type Here...",onChangeText:this.searchFilterFunction,lightTheme:!0,value:e}),m.a.createElement(D.b,{style:te.flatList,data:this.state.data,windowSize:4,initialListSize:4,initialNumToRender:4,maxToRenderPerBatch:4,removeClippedSubviews:!0,keyExtractor:function(e){return e.id},renderItem:this._renderItem.bind(this)})):m.a.createElement(v.a,null,m.a.createElement(V.a,null,"Loading reads..."))}}]),t}(g.Component);ee.navigationOptions=function(e){e.navigation;return{headerTitle:"Comic Library",headerShown:!0,headerTitleStyle:{textAlign:"center",alignSelf:"center"},headerRight:m.a.createElement(v.a,null)}};var te=f.a.create({container:{flex:1,backgroundColor:"#fff"},flatList:{flex:1,backgroundColor:"#fff"},developmentModeText:{marginBottom:20,color:"rgba(0,0,0,0.4)",fontSize:14,lineHeight:19,textAlign:"center"},row:{flex:1,justifyContent:"space-around"},contentContainer:{paddingTop:30},welcomeContainer:{alignItems:"center",marginTop:10,marginBottom:20},progressBar:{flexDirection:"row",height:5,marginTop:2,maxWidth:180,backgroundColor:"white",borderColor:"#000",minWidth:180,borderWidth:1,borderRadius:5},welcomeImage:{width:100,height:80,resizeMode:"contain",marginTop:3,marginLeft:-10},getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{backgroundColor:"rgba(0,0,0,0.05)",borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,color:"rgba(96,100,109, 1)",lineHeight:24,textAlign:"center"},tabBarInfoContainer:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({position:"absolute",bottom:0,left:0,right:0},h.a.select({ios:{shadowColor:"black",shadowOffset:{width:0,height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}}),{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:20}),tabBarInfoText:{fontSize:17,color:"rgba(96,100,109, 1)",textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:14,color:"#2e78b7"},titleCard:{flex:1,minWidth:300}}),ae=a(48),ne=a(217);function re(){return m.a.createElement(ae.a,{style:ie.container},m.a.createElement(ne.b,null))}re.navigationOptions={title:"Links"};var ie=f.a.create({container:{flex:1,paddingTop:15,backgroundColor:"#fff"}});function oe(){return m.a.createElement(ne.a,null)}oe.navigationOptions={title:"app.json"};var se=a(32),ce=a(72),le=a(202);a(9);a(671);var ue=function(e){function t(){var e,a;P()(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=H()(this,(e=B()(t)).call.apply(e,[this].concat(i)))).state={page:0,isLoading:!0,headerTitle:"Avengers",headerShown:!1,pages:[],vertical:!1},a.checkVertical=function(e,t,n){var i,o,s;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,r.a.awrap(_.a.getItem("vertical"));case 3:if(c.t0=c.sent,c.t0){c.next=6;break}c.t0="false";case 6:if("true"==c.t0){for(i=a.state.pages,o=0;o<n.getParam("pageCount");o++)s="http://l2.mml2.net:2202/opds-comics/comicreader/"+n.getParam("id")+"?page="+o,i.push(s);a.setState({pages:i,vertical:!0,isLoading:!1,width:e,height:t,id:n.getParam("id"),pageCount:n.getParam("pageCount"),socket:n.getParam("socket")}),a.flatList.scrollToIndex({animated:!0,index:a.state.page})}else a.setState({vertical:!1,isLoading:!1,width:e,height:t,id:n.getParam("id"),pageCount:n.getParam("pageCount"),socket:n.getParam("socket")});c.next=13;break;case 10:c.prev=10,c.t1=c.catch(0),console.log(c.t1);case 13:case"end":return c.stop()}}),null,null,[[0,10]])},a._swapVertical=function(){var e,t,n;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!a.state.vertical){i.next=6;break}return a.setState({vertical:!1}),i.next=4,r.a.awrap(_.a.setItem("vertical","false"));case 4:i.next=10;break;case 6:return a.setState({vertical:!0}),i.next=9,r.a.awrap(_.a.setItem("vertical","true"));case 9:for(e=0;e<a.state.pageCount;e++)t="http://l2.mml2.net:2202/opds-comics/comicreader/"+a.state.id+"?page="+e,(n=a.state.pages).push(t),a.setState({pages:n});case 10:case"end":return i.stop()}}))},a}return R()(t,e),T()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.navigation;p.a.setHidden(!0);var a=t.getParam("socket");a.emit("GetSpecificRead",JSON.stringify({userId:1,issueId:t.getParam("id")})),a.on("GotSpecificRead",(function(t){e.getPage(t)})),N.a.getSize("http://l2.mml2.net:2202/opds-comics/comicreader/2141?page=3&width="+se.a.get("window").width,(function(a,n){e.props.width&&!e.props.height?e.checkVertical(e.props.width,n*(e.props.width/a),t):!e.props.width&&e.props.height?e.checkVertical(a*(e.props.height/n),e.props.height,t):e.checkVertical(a,n,t),e.props.navigation.setParams({showHeader:!1}),e.props.navigation.setParams({swapVertical:e._swapVertical})}))}},{key:"onSwipeLeft",value:function(e){var t=this.state.page;t+=1,this.setState({page:t}),this.refs._scrollView.scrollTo({x:0,y:0,animated:!0})}},{key:"onSwipeRight",value:function(e){var t=this.state.page;t-=1,this.setState({page:t}),this.refs._scrollView.scrollTo({x:0,y:0,animated:!0})}},{key:"_renderItem",value:function(e){var t=this,a=e.item,n=e.index;return console.log(n),this.updateSavedPage2(n),m.a.createElement(ae.a,{minimumZoomScale:1,maximumZoomScale:7},m.a.createElement(ae.a,{horizontal:!0},m.a.createElement(ce.a,{onPress:function(e){t.state.headerShown?(t.props.navigation.setParams({showHeader:!1}),t.setState({headerShown:!1})):(t.props.navigation.setParams({showHeader:!0}),t.setState({headerShown:!0}))}},m.a.createElement(N.a,{style:{height:this.state.height,width:this.state.width},source:{uri:a,cache:"force-cache"},resizeMode:"contain"}))))}},{key:"updateSavedPage",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.state.socket.emit("UpdateReads",JSON.stringify({userId:1,issueId:this.state.id,page:this.state.page}))}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),null,this)}},{key:"updateSavedPage2",value:function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e>this.state.page)try{this.state.socket.emit("UpdateReads",JSON.stringify({userId:1,issueId:this.state.id,page:e}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),null,this)}},{key:"getPage",value:function(e){parseInt(e)?this.setState({page:parseInt(e)}):this.setState({page:0})}},{key:"render",value:function(){var e=this;return this.state.isLoading?m.a.createElement(v.a,null,m.a.createElement(V.a,null,'"HELLO"')):this.state.vertical?m.a.createElement(D.b,{data:this.state.pages,windowSize:3,initialListSize:3,initialNumToRender:3,maxToRenderPerBatch:3,ref:function(t){return e.flatList=t},removeClippedSubviews:!0,style:{overscrollBehaviorY:"auto",touchAction:"auto"},keyExtractor:function(e,t){return t.toString()},renderItem:this._renderItem.bind(this)}):m.a.createElement(ae.a,{ref:"_scrollView",style:{paddingBottom:40},contentContainerStyle:{flexGrow:1},minimumZoomScale:1,maximumZoomScale:5},m.a.createElement(ae.a,{ref:"_scrollView",style:{paddingBottom:40},contentContainerStyle:{flexGrow:1},minimumZoomScale:1,maximumZoomScale:5,horizontal:!0},m.a.createElement(ce.a,{onPress:function(t){var a=t.nativeEvent,n=(a.locationX,a.locationY,a.pageX);a.pageY;if(n<80){var r=e.state.page;r-=1,e.setState({page:r}),e.updateSavedPage(),e.refs._scrollView.scrollTo({x:0,y:0,animated:!0})}else if(n>se.a.get("window").width-80){var i=e.state.page;i+=1,e.setState({page:i}),e.updateSavedPage(),e.refs._scrollView.scrollTo({x:0,y:0,animated:!0})}else e.state.headerShown?(e.props.navigation.setParams({showHeader:!1}),e.setState({headerShown:!1})):(e.props.navigation.setParams({showHeader:!0}),e.setState({headerShown:!0}))}},m.a.createElement(N.a,{style:{height:this.state.height,width:this.state.width},source:{uri:"http://l2.mml2.net:2202/opds-comics/comicreader/"+this.state.id+"?page="+this.state.page,cache:"force-cache"}}))))}}]),t}(g.Component);ue.navigationOptions=function(e){var t=e.navigation;return{headerTitle:t.getParam("title"),headerShown:t.getParam("showHeader"),headerTitleStyle:{textAlign:"center",alignSelf:"center"},headerRight:m.a.createElement(v.a,null,m.a.createElement(le.a,{title:"Vertical",onPress:function(){return t.getParam("swapVertical")()}}))}};var de=h.a.select({web:{headerMode:"screen"},headerLayoutPreset:"center",default:{headerLayoutPreset:"center"}}),ge=Object(S.a)({Home:ee,IssueScreen:ue},de);ge.navigationOptions=function(e){var t=e.navigation,a=!0;return t.state.index>0&&"IssueScreen"===t.state.routes[1].routeName&&(a=!1),{tabBarVisible:a,tabBarLabel:"Home",tabBarIcon:function(e){var t=e.focused;return m.a.createElement(E,{focused:t,name:"ios"===h.a.OS?"ios-information-circle"+(t?"":"-outline"):"md-information-circle"})}}},ge.path="";var me=Object(S.a)({Links:re},de);me.navigationOptions={tabBarLabel:"Links",tabBarIcon:function(e){var t=e.focused;return m.a.createElement(E,{focused:t,name:"ios"===h.a.OS?"ios-link":"md-link"})}},me.path="";var he=Object(S.a)({Settings:oe},de);he.navigationOptions={tabBarLabel:"Settings",tabBarIcon:function(e){var t=e.focused;return m.a.createElement(E,{focused:t,name:"ios"===h.a.OS?"ios-options":"md-options"})}},he.path="";var pe=Object(C.a)({HomeStack:ge,LinksStack:me,SettingsStack:he});pe.path="";var fe=pe,ve=Object(w.createSwitchNavigator)({Main:fe});ve.path="";var be=Object(k.createBrowserApp)(ve,{history:"hash"});m.a.createContext();function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Se(e){var t=Object(g.useState)(!1),a=c()(t,2),n=a[0],r=a[1];return n||e.skipLoadingScreen?m.a.createElement(v.a,{style:ye.container},"ios"===h.a.OS&&m.a.createElement(p.a,{barStyle:"default"}),m.a.createElement(be,null)):m.a.createElement(l.a,{startAsync:Ce,onError:xe,onFinish:function(){return function(e){e(!0)}(r)}})}function Ce(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(Promise.all([u.a.loadAsync([a(679),a(680)]),d.b(we({},b.a.font,{"space-mono":a(681),Roboto:a(682),Roboto_medium:a(683)}))]));case 2:case"end":return e.stop()}}))}function xe(e){console.warn(e)}a.d(t,"a",(function(){return Se}));var ye=f.a.create({container:{flex:1,backgroundColor:"#fff"}})},434:function(e,t,a){a(435),e.exports=a(684)},435:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},601:function(e,t){},679:function(e,t,a){e.exports=a.p+"static/media/robot-dev.54da1e98.png"},680:function(e,t,a){e.exports=a.p+"static/media/robot-prod.c7578911.png"},681:function(e,t,a){e.exports=a.p+"./fonts/SpaceMono-Regular.ttf"}},[[434,1,2]]]);
//# sourceMappingURL=../../0eac3f191854e7477ae6.map