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
    _clickedPage = (evt) => {
        const { pageX } = evt.nativeEvent;
        if (pageX < 80){
            this._updatePage(this.state.page - 1);
            this._updateSavedPage();
            this._resetScroll();
        } else if (pageX > (Dimensions.get('window').width - 80)){
            this._updatePage(this.state.page + 1);
            this.updateSavedPage();
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
    render(){
        return(
            <ScrollView ref='_scrollView' style={{paddingBottom: 40}} contentContainerStyle={{flexGrow:1}} minimumZoomScale={1} maximumZoomScale={5}>
                <ScrollView ref='_scrollView' style={{paddingBottom: 40}} contentContainerStyle={{flexGrow:1}} minimumZoomScale={1} maximumZoomScale={5} horizontal={true}>
                    <TouchableHighlight  onPress={(evt) => {this._clickedPage(evt)}}>
                        <Image style={{ height: this.state.height, width: this.state.width }}
                        source={{uri: "http://l2.mml2.net:2053/opds-comics/comicreader/" + this.state.id + "?page=" + this.state.page + "", cache: "force-cache" }}/>
                    </TouchableHighlight>
                </ScrollView>
            </ScrollView>
        )
    }
}