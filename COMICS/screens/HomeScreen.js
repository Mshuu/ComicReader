import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    AsyncStorage,
    View
} from 'react-native';
import io from 'socket.io-client';
import {SearchBar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {BookList} from '../components/BookList';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    const socket = io('http://opds.mml2.net:3000', {transports: ['websocket']});
    const {navigate} = this.props.navigation
    this.state = {
      isLoading: true,
      isConnected: false,
      noStorage: true,
      gotReads: false,
      books: [],
      data: [],
      search: "",
      navigate: navigate,
      socket: socket

    };
  }
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "Comic Library",
            headerShown: true,
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center'
            },
            headerRight: (
                <View></View>
            )
        };
    };
    componentDidMount() {
        this.state.socket.on('connect', () => {
            this.setState({isConnected: true});
        });

        this.state.socket.on('GotHome', data => {
            this.HandleHome(data, this.state.socket);
        });
        this.state.socket.on("GotReads", data => {
            this.HandleReads(data);
        });
        this.state.socket.on("DownloadedIssue", data => {
            console.log("downloading: " + data);
        });
        this.GettingBooks();
        this.state.socket.emit("GetHome", "mg");

        this.props.navigation.addListener('didFocus', () => {
                if (this.state.isLoading == false) {
                    this.state.socket.emit("GetHome", "mg");
                }
            });

    }

    renderHeader = () => {
        return (<SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}/>);
    };

    searchFilterFunction = search => {
        this.setState({search});
        const newData = this
            .state
            .books
            .filter(item => {
                const itemData = `${item
                    .title
                    .toUpperCase()}   
      ${item
                    .title
                    .toUpperCase()} ${item
                    .title
                    .toUpperCase()}`;

                const textData = search.toUpperCase();

                return itemData.indexOf(textData) > -1;
            });
        this.setState({data: newData});
    };

    updateSearch = search => {
        this.setState({search});
    };
    GettingBooks = async() => {
        try {
            let books = await AsyncStorage.getItem('books') || [];
            this.setState({
                books: JSON.parse(books),
                noStorage: false,
                isLoading: false,
                data: JSON.parse(books)
            });

        } catch (e) {
            console.log(e);
        }
    }
    HandleReads = async(data) => {
        for (var i = 0; i < data.length; i++) {
            for (var x = 0; x < this.state.books.length; x++) {
                if (this.state.books[x].issues.length > 0) {
                    for (var y = 0; y < this.state.books[x].issues.length; y++) {
                        if (this.state.books[x].issues[y].id == parseInt(data[i].issueId)) {
                            let books = this.state.books;
                            books[x].issues[y].page = data[i].page;
                            this.setState({books: books, data: books, gotReads: true});
                            this.forceUpdate();
                        } else {}
                    }
                } else {
                    if (this.state.books[x].issues.id == parseInt(data[i].issueId)) {
                      console.log("Found read");
                        let books = this.state.books;
                        books[x].issues.page = data[i].page;
                        this.setState({books: books, data: books, gotReads: true});
                        this.forceUpdate()
                    } else {
                    }
                }
            }
        }
    }
    HandleHome = async(data, socket) => {
        let books = [];
        for (var i = 0; i < data.length; i++) {
            var issueCount;
            let issues = JSON.parse(data[i].issues);
            issueCount = issues.length;
            if (!issueCount) {
                issueCount = 0;
            }
            books.push({"title": data[i].title, "id": data[i].id, "issues": issues, "issueCount": issueCount});

        }
        this.setState({books: books, isLoading: false});
        socket.emit("GetReads", 1);
        try {
            await AsyncStorage.setItem('books', JSON.stringify(books));
        } catch (e) {
            console.log(error);
        }
    }
    _renderItem = ({item, index}) => (<BookList item={item} state={this.state}/>);

    render() {
        const {search} = this.state;
        if (this.state.isLoading) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }
        if (this.state.gotReads){
          return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.searchFilterFunction}
                    lightTheme={true}
                    value={search}/>
                <FlatList
                    style={styles.flatList}
                    data={this.state.data}
                    windowSize={4}
                    initialListSize={4}
                    initialNumToRender={4}
                    maxToRenderPerBatch={4}
                    removeClippedSubviews={true}
                    keyExtractor={item => item.id}
                    renderItem={this
                    ._renderItem
                    .bind(this)}/>
            </View>
        );
      }
      return (
        <View><Text>Loading reads...</Text></View>
      )
    };
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    flatList: {
        flex: 1,
        backgroundColor: '#fff'
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center'
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    contentContainer: {
        paddingTop: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
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
        borderRadius: 5
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50
    },
    homeScreenFilename: {
        marginVertical: 7
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)'
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center'
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    width: 0,
                    height: -3
                },
                shadowOpacity: 0.1,
                shadowRadius: 3
            },
            android: {
                elevation: 20
            }
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center'
    },
    navigationFilename: {
        marginTop: 5
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center'
    },
    helpLink: {
        paddingVertical: 15
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7'
    },
    titleCard: {
        flex: 1,
        minWidth: 300
    }
});
