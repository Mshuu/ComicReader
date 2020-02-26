
import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    Dimensions,
    TouchableHighlight,
    ActivityIndicator,
    View,
} from 'react-native';

export class IssuePage extends React.PureComponent{

    _updateSavedPage = async() => {
        try {
            if (this.state.page < 0){
                this.state.socket.emit("UpdateReads",JSON.stringify({userId: 1,issueId: this.state.id, page: 0}))
            } else if (this.state.page >= this.state.pageCount){
                this.state.socket.emit("UpdateReads",JSON.stringify({userId: 1,issueId: this.state.id, page: this.state.pageCount - 1}))
            } else {
                this.state.socket.emit("UpdateReads",JSON.stringify({userId: 1,issueId: this.state.id, page: this.state.page}))
            }
        } catch(e){
            console.log(e);
        }
    }
    _updatePage = (newPage) => {
        if (newPage < 0){
            this.setState({ page: 0 })
        } else if (newPage >= this.state.pageCount){
            this.setState({ page: pageCount - 1 })
        } else {
            this.setState({ page: newPage })
        }
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
            page: this.props.state.page,
            pageCount: this.props.state.pageCount,
            aspect: 1.5372233400402415,
            loading: true
        }
    }
    _orientationChanged = () => {
        this.setState({
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        })
        this._isPortrait();
    }
    componentDidMount(){
        this._orientationChanged();
        Dimensions.addEventListener('change', () => {
            this._orientationChanged();
        });
        this._preFetchImages();
        this._updatePage(this.state.page);
    }
    _preFetchImages = async() => {
        try{
            const maximumPages = parseInt(this.state.pageCount) + 1;
            for (var i=1;i<maximumPages + 1;i++){
                await Image.prefetch("http://opds.mml2.net:2202/opds-comics/comicreader/" + this.state.id + "?page=" + i + "");
                if (i == 1){
                    this.setState({loading: false});
                }
            }
        } catch(e){
            console.log(e);
        }
    }
    componentWillUnmount() {
        Dimensions.removeEventListener('change');
    }
    render(){
        if (this.state.loading){
            return(
                <View><Text>Loading</Text></View>
            )
        }
        if (!this.state.portrait && !this.state.loading){
        return(
            <ScrollView ref='_scrollView' contentContainerStyle={{alignItems: 'center'}} minimumZoomScale={1} maximumZoomScale={10}>
                <TouchableHighlight  onPress={(evt) => {this._clickedPage(evt)}}>
                    <Image style={{height: this.state.height,width: this.state.width,resizeMode:'contain',flex: 1}}
                    source={{uri: "http://opds.mml2.net:2202/opds-comics/comicreader/" + this.state.id + "?page=" + this.state.page + "", cache: "force-cache" }}/>
                </TouchableHighlight>
          </ScrollView>
        );
        }
        if (this.state.portrait && !this.state.loading){
            return(
            <ScrollView ref='_scrollView' contentContainerStyle={{alignItems: 'center'}} minimumZoomScale={1} maximumZoomScale={10}>
            <TouchableHighlight  onPress={(evt) => {this._clickedPage(evt)}}>
                <Image style={{height: this.state.width * this.state.aspect,width: this.state.width,resizeMode:'cover',flex: 1}}
                source={{uri: "http://opds.mml2.net:2202/opds-comics/comicreader/" + this.state.id + "?page=" + this.state.page + "", cache: "force-cache" }}/>
            </TouchableHighlight>
      </ScrollView> 
            )
        }

    }
}