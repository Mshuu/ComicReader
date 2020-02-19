import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  View,
} from 'react-native';
import io from 'socket.io-client';
import { Container, Header, Content, Card, CardItem, Body, Row } from 'native-base';
import { SearchBar } from 'react-native-elements';

import { MonoText } from '../components/StyledText';
import { FlatList } from 'react-native-gesture-handler';
import { MultipleIssueBook } from '../components/MultipleIssueBook';


class MyInternalSingleItem extends React.PureComponent{
  render(){
    return (
      <Card button onPress={() => alert("This is a card")}>
          <TouchableOpacity   onLongPress={() => this._onLongPressButton(this.props.item.id)} onPress={() => this.props.state.navigate('IssueScreen',{id: this.props.item.id,socket: this.props.state.socket, title: this.props.item.title,showHeader: false,pageCount: this.props.item.link[3]['pse:count']})}>
          <CardItem cardBody>
            <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.props.item.link[0].href}} style={{height: 277,width:180,flex: 1}}/>
          </CardItem>
          </TouchableOpacity>
      </Card>
    )
  }
}

class MyListItem extends React.PureComponent {
  bookIssues = ({item, index}) => (
    <MultipleIssueBook item={item} state = {this.props.state} />
  );
  singleBookIssue = ({item, index}) => (
    <MyInternalSingleItem item={item} state={this.props.state} />
  )
  _onLongPressButton = (id) => {
    console.log("long pressed" + id);
  }

  render() {
    if (this.props.item.issueCount > 0){
    return (
      <Card transparent>
      <CardItem>
      <Text style={{fontWeight:'bold',fontSize: 25,color:'#595957'}}>{this.props.item.title}</Text>
    </CardItem>
    <CardItem>
    <FlatList style={styles.flatList}
                data={this.props.item.issues}
                horizontal={true}
                windowSize={4}
                initialListSize={4}
                initialNumToRender={4}
                maxToRenderPerBatch={4}
                removeClippedSubviews={true}
                renderItem={this.bookIssues.bind(this)}
                keyExtractor={(item, index) => index.toString()} 
                />
                </CardItem>
    </Card>
  );
} else {
  if (this.props.item.issues.page > 0){
    <Card transparent>
      <CardItem>
      <Text style={{fontWeight:'bold',fontSize: 50,color:'#595957'}}>{this.props.item.title}</Text>
    </CardItem>
    <CardItem>
    <Card button onPress={() => alert("This is a card")}>
          <TouchableOpacity  onLongPress={() => this._onLongPressButton(this.props.item.issues.id)} onPress={() => this.props.state.navigate('IssueScreen',{id: this.props.item.issues.id,socket: this.props.state.socket, title: this.props.item.issues.title,showHeader: false,pageCount: this.props.item.issues.link[3]['pse:count']})}>
          <CardItem cardBody>
            <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.props.item.issues.link[0].href}} style={{height: 277,width:180}}/>
          </CardItem>
          </TouchableOpacity>
      </Card>
                </CardItem>
    </Card>
  } else {
  return (
    <Card transparent>
      <CardItem>
      <Text style={{fontWeight:'bold',fontSize: 25,color:'#595957'}}>{this.props.item.title}</Text>
    </CardItem>
    <CardItem>
    <Card button onPress={() => alert("This is a card")}>
          <TouchableOpacity onLongPress={() => this._onLongPressButton(this.props.item.issues.id)}  onPress={() => this.props.state.navigate('IssueScreen',{id: this.props.item.issues.id,socket: this.props.state.socket, title: this.props.item.issues.title,showHeader: false,pageCount: this.props.item.issues.link[3]['pse:count']})}>
          <CardItem cardBody>
            <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.props.item.issues.link[0].href}} style={{height: 277,width:180}}/>
          </CardItem>
          </TouchableOpacity>
      </Card>
                </CardItem>
    </Card>
  );
  }
}
  }
}
class MyListItem2 extends React.PureComponent {
  bookIssues = ({item, index}) => (
    <MultipleIssueBook item={item} state = {this.props.state} />
  );
  singleBookIssue = ({item, index}) => (
    <MyInternalSingleItem item={item} state={this.props.state} />
  )

  _onLongPressButton = (id,socket,props) => {
    console.log(props);
  }

  render() {
    if (this.props.item.issueCount > 0){
    return (
      <Card transparent>
      <CardItem>
      <Text style={{fontWeight:'bold',fontSize: 25,color:'#595957'}}>{this.props.item.title}</Text>
    </CardItem>
    <CardItem>
    <FlatList style={styles.flatList}
                data={this.props.item.issues}
                horizontal={true}
                windowSize={4}
                initialListSize={4}
                initialNumToRender={4}
                maxToRenderPerBatch={4}
                removeClippedSubviews={true}
                renderItem={this.bookIssues.bind(this)}
                keyExtractor={(item, index) => index.toString()} 
                />
                </CardItem>
    </Card>
  );
} else {
  if (this.props.item.issues.page > 0){
    if (this.props.item.issues.page >=  this.props.item.issues.link[3]['pse:count']){
      return (
        <Card transparent>
          <CardItem>
          <Text style={{fontWeight:'bold',fontSize: 25,color:'#595957'}}>{this.props.item.title}</Text>
        </CardItem>
        <CardItem>
        <Card button onPress={() => alert("This is a card")}>
              <TouchableOpacity onLongPress={() => this._onLongPressButton(this.props.item.issues.id,this.props.state.socket,this.props)}  onPress={() => this.props.state.navigate('IssueScreen',{id: this.props.item.issues.id,socket: this.props.state.socket, title: this.props.item.issues.title,showHeader: false,pageCount: this.props.item.issues.link[3]['pse:count']})}>
              <CardItem cardBody>
                <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.props.item.issues.link[0].href}} style={{height: 277,width:180,opacity: 0.3}}/>
              </CardItem>
              </TouchableOpacity>
          </Card>
                    </CardItem>
        </Card>
        );
    } else {
      let tempWidth = (this.props.item.issues.page / this.props.item.issues.link[3]['pse:count']) * 100;
      return (
        <Card transparent>
          <CardItem>
          <Text style={{fontWeight:'bold',fontSize: 25,color:'#595957'}}>{this.props.item.title}</Text>
        </CardItem>
        <CardItem>
        <Card button onPress={() => alert("This is a card")}>
              <TouchableOpacity  onLongPress={() => this._onLongPressButton(this.props.item.issues.id,this.props.state.socket)}  onPress={() => this.props.state.navigate('IssueScreen',{id: this.props.item.issues.id,socket: this.props.state.socket, title: this.props.item.issues.title,showHeader: false,pageCount: this.props.item.issues.link[3]['pse:count']})}>
              <CardItem cardBody>
                <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.props.item.issues.link[0].href}} style={{height: 277,width:180}}/>
              </CardItem>
              </TouchableOpacity>
              <View style={styles.progressBar}>
              <View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width: "" + tempWidth + "%", maxWidth: 180 }}></View>
              </View>
          </Card>
                    </CardItem>
        </Card>
        );
    }

  } else {
  return (
    <Card transparent>
      <CardItem>
      <Text style={{fontWeight:'bold',fontSize: 25,color:'#595957'}}>{this.props.item.title}</Text>
    </CardItem>
    <CardItem>
    <Card button onPress={() => alert("This is a card")}>
          <TouchableOpacity  onLongPress={() => this._onLongPressButton(this.props.item.issues.id,this.props.state.socket)}  onPress={() => this.props.state.navigate('IssueScreen',{id: this.props.item.issues.id,socket: this.props.state.socket, title: this.props.item.issues.title,showHeader: false,pageCount: this.props.item.issues.link[3]['pse:count']})}>
          <CardItem cardBody>
            <Image resizeMode={'contain'} source={{uri: "http://l2.mml2.net:2202" + this.props.item.issues.link[0].href}} style={{height: 277,width:180}}/>
          </CardItem>
          </TouchableOpacity>
      </Card>
                </CardItem>
    </Card>
  );
  }
}
  }
}

export default class HomeScreen extends Component{

  state = {
    isLoading: true,
    isConnected: false,
    noStorage: true,
    gotReads: false,
    books: [],
    data: [],
    search: ""

  };
  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle: "Comic Library",
        headerShown: true,
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center'
        },
        headerRight: (<View></View>)
    };
};
  componentDidMount(){
    const {navigate} = this.props.navigation;
    this.setState({
      navigate: navigate
    });
    const socket = io('http://l2.mml2.net:3000', {
      transports: ['websocket'],
    });
    this.setState({
      socket: socket
    });

    socket.on('connect', () => {
      this.setState({ isConnected: true });
    });

    socket.on('GotHome', data => {
     this.HandleHome(data,socket);
    });
    socket.on("GotReads", data => {
      this.HandleReads(data);
    });
    socket.on("DownloadedIssue",data =>{
      console.log("downloading: " + data);
    });
    this.GettingBooks();
    socket.emit("GetHome","mg");

    this.props.navigation.addListener('didFocus', () => {
      if (this.state.isLoading == false){
        socket.emit("GetHome","mg");
      }
    });

  }

  renderHeader = () => {    
    return (      
      <SearchBar        
        placeholder="Type Here..."        
        lightTheme        
        round        
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}             
      />    
    );  
  };

  searchFilterFunction = search => {    
    this.setState({ search });
    const newData = this.state.books.filter(item => {      
      const itemData = `${item.title.toUpperCase()}   
      ${item.title.toUpperCase()} ${item.title.toUpperCase()}`;
      
       const textData = search.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    }); 
    this.setState({ data: newData });  
  };

  updateSearch = search => {
    this.setState({ search });
  };
  GettingBooks = async () => {
    try {
      let books = await AsyncStorage.getItem('books') || [];
      this.setState({
        books: JSON.parse(books),
        noStorage: false,
        isLoading: false,
        data: JSON.parse(books)
      });
      
    } catch (e){
      console.log(e);
    }
  }
  componentWillUnmount(){
    console.log("trashing");
  }

  HandleReads = async (data) => {
    for (var i=0;i<data.length;i++){
      for (var x=0;x<this.state.books.length;x++){
        if (this.state.books[x].issues.length > 0){
        for (var y=0;y<this.state.books[x].issues.length;y++){
          if (this.state.books[x].issues[y].id == parseInt(data[i].issueId)){
            let books = this.state.books;
            books[x].issues[y].page = data[i].page;
            this.setState({
              books: books,
              data: books,
              gotReads: true
            });
          } else {
          }
        }
      } else {
        if (this.state.books[x].issues.id == parseInt(data[i].issueId)){
          let books = this.state.books;
          books[x].issues.page = data[i].page;
          this.setState({
            books: books,
            data: books,
            gotReads: true
          });
          this.forceUpdate();
        } else {
        }
      }
      }
    }
  }
  HandleHome = async(data,socket) => {
    let books = [];
    for (var i=0;i<data.length;i++){
      var issueCount;
      let issues = JSON.parse(data[i].issues);
      issueCount = issues.length;
      if (!issueCount){
        issueCount = 0;
      }
      books.push({"title": data[i].title, "id": data[i].id,"issues":issues,"issueCount":issueCount});

    }
    this.setState({
      books: books,
      isLoading: false
    });
    socket.emit("GetReads",1);
    try {
      await AsyncStorage.setItem('books',JSON.stringify(books));
    } catch (e){
      console.log(error);
    }
  }
  HandleIssue(data){
    let books = this.state.books;
    let obj = books.find(o => o.id === data.tempId.toString());
    for (var i=0;i<data.entry.length;i++){
      let issue = {"title":data.entry[i].title,"id":data.entry[i].id,"img": data.entry[i].link[0].href};
      obj.issues.push(issue);
    }
  }

  _renderItem = ({item, index}) => (
    <MyListItem item={item} state={this.state}/>
  );
  _renderItem2 = ({item, index}) => (
    <MyListItem2 item={item} state={this.state}/>
  );

  render() {
    const { search } = this.state;
    if (this.state.isLoading){
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <DevelopmentModeNotice />

            <Text style={styles.getStartedText}>Get started by opening2</Text>

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View>
      </View>
    );
            } else if (!this.state.gotReads) {
              return(
                <View style={styles.container}>
                              <SearchBar
        placeholder="Type Here..."
        onChangeText={this.searchFilterFunction}
        lightTheme={true}
        value={search}
      />
                  <FlatList style={styles.flatList}
                  data={this.state.data}
                  windowSize={4}
initialListSize={4}
initialNumToRender={4}
maxToRenderPerBatch={4}
                  removeClippedSubviews={true}
                  keyExtractor={item => item.title} 
                  renderItem={this._renderItem.bind(this)}
                      />
                </View>
              );
            } else {
              return(
                <View style={styles.container}>
                              <SearchBar
        placeholder="Type Here..."
        onChangeText={this.searchFilterFunction}
        lightTheme={true}
        value={search}
      />
                  <FlatList style={styles.flatList}
                  data={this.state.data}
                  windowSize={4}
                initialListSize={4}
                initialNumToRender={4}
                maxToRenderPerBatch={4}
                  removeClippedSubviews={true}
                  keyExtractor={item => item.id} 
                  renderItem={this._renderItem2.bind(this)}
                      />
                </View>
              );
            }
  };
}
function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function BookTitles(){

}

function BookIssues(){
  return (
    <Text>"Hi"</Text>
  )
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  progressBar: {
    flexDirection: 'row',
    height: 5,
    marginTop: 2,
    maxWidth: 180,
    backgroundColor: 'white',
    borderColor: '#000',
    minWidth: 180,
    borderWidth: 1,
    borderRadius: 5}
    ,
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  titleCard: {
    flex: 1,
    minWidth: 300
  }
});
