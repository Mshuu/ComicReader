
import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    Dimensions,
    TouchableHighlight,
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import * as Progress from 'react-native-progress';

export class IssuePage extends React.PureComponent{

    _updateSavedPage = async() => {
        const page = this.state.page < 0 ? 0 : this.state.page >= this.state.pageCount ? this.state.pageCount - 1 : this.state.page; 
        this._UpdateReads(page);
    }
    _UpdateReads = (page) => {
        this.state.socket.emit("UpdateReads",JSON.stringify({userId: this.props.uuid,issueId: this.state.id, page: page}));
    }
    _updatePage = (newPage) => {
        let page = newPage < 0 ? 0 : newPage >= this.state.pageCount ? pageCount -1 : newPage;
        this.setState({page: page});
        this._preFetchImages();
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
            this.setState({headerShown: false, showPage: false});
        } else {
            this.props.navigation.setParams({ showHeader: true })
            this.setState({headerShown: true,showPage: true})
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
            for (var i=this.state.page;i<this.state.page + 5;i++){
                    await Image.prefetch(this.props.opds + "/opds-comics/comicreader/" + this.state.id + "?page=" + i + "");
                    if (i == this.state.page){
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
                <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            )
        }
        if (!this.state.loading){
            return(
            <ScrollView ref='_scrollView' contentContainerStyle={{alignItems: 'center'}} minimumZoomScale={1} maximumZoomScale={10}>
                <Progress.Bar progress={0.3} width={200} />
                <TouchableHighlight  onPress={(evt) => {this._clickedPage(evt)}}>
                    <Image 
                    style={{
                        height: this.state.portrait ? this.state.width * this.state.aspect : this.state.height,
                        width: this.state.width,
                        resizeMode:'cover',
                        flex: 1
                    }}
                    source={{uri: this.props.opds + "/opds-comics/comicreader/" + this.state.id + "?page=" + this.state.page + "", cache: "force-cache" }}/>
                </TouchableHighlight>
            </ScrollView> 
            )
        }

    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    }
  });