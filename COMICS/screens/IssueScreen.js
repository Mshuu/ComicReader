import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    TouchableHighlight,
    AsyncStorage,
    Button,
    View,
    StatusBar
} from 'react-native';
import io from 'socket.io-client';
import { Container, Header, Content, Card, CardItem, Body, Row } from 'native-base';

import { MonoText } from '../components/StyledText';
import { FlatList } from 'react-native-gesture-handler';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { IssuePage } from '../components/IssuePage';

//TODO: Refactor this whole screen, has a mix of components and classes and functions and a whole bunch of stuff
export default class IssueScreen extends Component {
    state = {
        page: 0,
        isLoading: true,
        headerTitle: "Avengers",
        headerShown: false,
        pages: [],
        vertical: false
    };
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title'),
            headerShown: navigation.getParam('showHeader'),
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center'
            },
            headerRight: (<View><Button title="Vertical" onPress={() => navigation.getParam('swapVertical')()}></Button></View>)
        };
    };
    componentDidMount() {
        const { navigation } = this.props;
        StatusBar.setHidden(true);
        let socket = navigation.getParam("socket");
        socket.emit("GetSpecificRead",JSON.stringify({"userId": 1, issueId: navigation.getParam("id")}));
        socket.on('GotSpecificRead', data => {
           this.getPage(data);
          });
        Image.getSize("http://opds.mml2.net:2202/opds-comics/comicreader/2141?page=3&width=" + Dimensions.get('window').width, (width, height) => {
            if (this.props.width && !this.props.height) {
                this.checkVertical(this.props.width,height * (this.props.width / width),navigation);
            } else if (!this.props.width && this.props.height) {
                this.checkVertical(width * (this.props.height / height),this.props.height,navigation);
            } else {
                this.checkVertical(width,height,navigation);
            }
        this.props.navigation.setParams({ showHeader: false })
        this.props.navigation.setParams({ swapVertical: this._swapVertical });
        
        });

    }
    checkVertical = async (width,height,navigation) => {
        try {
            let vert = await AsyncStorage.getItem('vertical') || "false";
            if (vert == "true"){
                let pages = this.state.pages;
                for (var i = 0; i<navigation.getParam('pageCount') ; i++) {
                    var url = "http://opds.mml2.net:2202/opds-comics/comicreader/" + navigation.getParam('id') + "?page=" + i + "";
                    pages.push(url);
                }
                this.setState({
                    pages: pages,
                    vertical: true,
                    isLoading: false,
                    width: width, 
                    height: height,
                    id: navigation.getParam('id'),
                    pageCount: navigation.getParam('pageCount'),
                    socket: navigation.getParam('socket')
                });
                this.flatList.scrollToIndex({ animated: true, index: this.state.page });
            } else {
                this.setState({
                    vertical: false,
                    isLoading: false,
                    width: width, height: height,
                    id: navigation.getParam('id'),
                    pageCount: navigation.getParam('pageCount'),
                    socket: navigation.getParam('socket')
                })
            }
        }catch (e){
            console.log(e);
        }
    }
    _swapVertical = async () => {        
        if (this.state.vertical){
            this.setState({vertical: false});
            await AsyncStorage.setItem('vertical','false');
        } else {
            this.setState({vertical: true});
            await AsyncStorage.setItem('vertical','true');
            for (var i = 0; i<this.state.pageCount; i++) {
                var url = "http://opds.mml2.net:2202/opds-comics/comicreader/" + this.state.id + "?page=" + i + "";
                let pages = this.state.pages;
                pages.push(url);
                this.setState({
                    pages: pages
                });
            }
        }
    }
    onSwipeLeft(gestureState) {
        let page = this.state.page;
        page = page + 1;
        this.setState({
            page: page
        });
        this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true });
    }

    onSwipeRight(gestureState) {
        let page = this.state.page;
        page = page - 1;
        this.setState({
            page: page
        });
        this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true });
    }
    _renderItem({ item, index }) {
        console.log(index);
        this.updateSavedPage2(index);
        return (
            <ScrollView                     minimumZoomScale={1}
            maximumZoomScale={7}>
                <ScrollView horizontal={true}>
            <TouchableHighlight onPress={(evt) => {
                    if (this.state.headerShown) {
                        this.props.navigation.setParams({ showHeader: false })
                        this.setState({ headerShown: false })
                    } else {
                        this.props.navigation.setParams({ showHeader: true })
                        this.setState({ headerShown: true })
                    }
            }}>
                <Image
                    style={{ height: this.state.height, width: this.state.width }}
                    source={{ uri: item, cache: "force-cache" }}
                    resizeMode={"contain"}
                />
            </TouchableHighlight>
            </ScrollView></ScrollView>
        );

    }

    async updateSavedPage(){
        try {
          //  await AsyncStorage.setItem(this.state.id,this.state.page);
            this.state.socket.emit("UpdateReads",JSON.stringify({userId: 1,issueId: this.state.id, page: this.state.page}))
        } catch(e){
            console.log(e);
        }
    }
    async updateSavedPage2(page){
        if (page > this.state.page){
        try {
            //await AsyncStorage.setItem(this.state.id,page);
            this.state.socket.emit("UpdateReads",JSON.stringify({userId: 1,issueId: this.state.id, page: page}))
        } catch(e){
            console.log(e);
        }
    }
    }
    getPage(page){
            if (parseInt(page)){
            this.setState({
                page: parseInt(page)
            });} else {
                this.setState({
                    page: 0
                })
            }
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <Text>"Loading"</Text>
                </View>
            )
        } else {
            if (!this.state.vertical){
            return (
                <IssuePage navigation={this.props.navigation} state={this.state}/>
            );} else {
                return (
                    <FlatList
                    data={this.state.pages}
                    windowSize={3}
                    initialListSize={3}
                    initialNumToRender={3}
                    maxToRenderPerBatch={3}
                    ref={(ref) => this.flatList = ref}
                    removeClippedSubviews={true}
                    style={{overscrollBehaviorY: 'auto',
                    touchAction: 'auto'}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem.bind(this)}
                />



            );
            }

        }
    }
}
