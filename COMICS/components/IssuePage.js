import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
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

export class IssuePage extends React.PureComponent{

    _updateSavedPage = async() => {
        try {
            this.state.socket.emit("UpdateReads",JSON.stringify({userId: 1,issueId: this.state.id, page: this.state.page}))
        } catch(e){
            console.log(e);
        }
    }
    _updatePage = (newPage) => {
        this.setState({ page: newPage })
    }
    _resetScroll = () => {
        this.refs._scrollView.scrollTo({x:0,y:0,animated:true});
    }
    _isPortrait = () => {
        if (Dimensions.get('window').width > Dimensions.get('window').height){
            this.setState({portrait: true});
        }
        else if (Dimensions.get('window').height > Dimensions.get('window').width){
            this.setState({portrait: false});
        }
    }
    _clickedPage = (evt) => {
        const { pageX } = evt.nativeEvent;
        if (pageX < 80){
            this._updatePage(this.state.page - 1);
            this._updateSavedPage();
            this._resetScroll();
        } else if (pageX > (Dimensions.get('window').width - 80)){
            this._updatePage(this.state.page + 1);
            this._updateSavedPage();
            this._resetScroll();
        } else if (this.state.headerShown){
            this.props.navigation.setParams({ showHeader: false })
            this.setState({headerShown: false})
        } else {
            this.props.navigation.setParams({ showHeader: true })
            this.setState({headerShown: true})
        }
    }
    constructor(props){
        super(props);
        this.state = {
            navigation: this.props.navigation,
            socket: this.props.state.socket,
            headerShown: this.props.state.headerShown,
            width: this.props.state.width,
            height: this.props.state.height,
            id: this.props.state.id,
            page: this.props.state.page
        }
    }
    _orientationChanged = () => {
        this.setState({
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        })
        this._isPortrait();
    }
    _updateImageHeight = () => {
        Image.getSize("http://opds.mml2.net:2202/opds-comics/comicreader/" + this.state.id + "?page=" + this.state.page + "", (width, height) => 
        {this.setState({imageHeight: height, imageWidth: width})});
    }
    componentDidMount(){
        this._orientationChanged();
        Dimensions.addEventListener('change', () => {
            this._orientationChanged();
        });
        this._updateImageHeight();
    }
    componentWillUnmount() {
        Dimensions.removeEventListener('change');
    }
    render(){
        if (!this.state.portrait){
        return(
            <ScrollView ref='_scrollView' contentContainerStyle={{alignItems: 'center'}} minimumZoomScale={1} maximumZoomScale={10}>
                <TouchableHighlight  onPress={(evt) => {this._clickedPage(evt)}}>
                    <Image style={{height: this.state.height,width: this.state.width,resizeMode:'contain',flex: 1}}
                    source={{uri: "http://opds.mml2.net:2202/opds-comics/comicreader/" + this.state.id + "?page=" + this.state.page + "", cache: "force-cache" }}/>
                </TouchableHighlight>
          </ScrollView>
        );
        }
        if (this.state.portrait){
            return(
            <ScrollView ref='_scrollView' contentContainerStyle={{alignItems: 'center'}} minimumZoomScale={1} maximumZoomScale={10}>
            <TouchableHighlight  onPress={(evt) => {this._clickedPage(evt)}}>
                <Image style={{height: this.state.imageHeight,width: this.state.width,resizeMode:'stretch',flex: 1}}
                source={{uri: "http://opds.mml2.net:2202/opds-comics/comicreader/" + this.state.id + "?page=" + this.state.page + "", cache: "force-cache" }}/>
            </TouchableHighlight>
      </ScrollView> 
            )
        }

    }
}