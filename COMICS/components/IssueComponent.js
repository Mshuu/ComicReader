import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import { Card, CardItem} from 'native-base';


export class UnFinishedIssue extends React.PureComponent {

    _CardOnPress = () => {
        this.state.navigate('IssueScreen',{
            id: this.state.item.id,
            socket: this.state.socket,
            title: this.state.item.title,
            showHeader: false,
            pageCount: this.state.item.link[3]['pse:count']
        });
    }

    constructor(props){
        super(props);
        this.state ={
            item: props.item,
            socket: props.socket,
            navigate: props.navigate
        };
    }
    render(){
        let tempWidth = (this.state.item.page / this.state.item.link[3]['pse:count']) * 100;
        return (
            <View>
                <Card>
                    <TouchableOpacity  onPress={() => this._CardOnPress()}>
                        <CardItem cardBody button onPress={() => this._CardOnPress()}>
                            <Image resizeMode={'contain'} source={{uri: this.props.opds + this.state.item.link[0].href}} style={styles.issue}/>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
                <View style={styles.progressBar}>
                    <View style={[StyleSheet.absoluteFill], {backgroundColor: "#8BED4F", width : "" + tempWidth + "%", maxWidth: 180 }}></View>
                </View>
            </View>
        );
    }
}
export class UnreadIssue extends React.PureComponent {

    _CardOnPress = () => {
        this.state.navigate('IssueScreen',{
            id: this.state.item.id,
            socket: this.state.socket,
            title: this.state.item.title,
            showHeader: false,
            pageCount: this.state.item.link[3]['pse:count']
        });
    }

    constructor(props){
        super(props);
        this.state ={
            item: props.item,
            socket: props.socket,
            navigate: props.navigate
        };
    }
    render(){
        return (
            <View>
                <Card>
                <TouchableOpacity  onPress={() => this._CardOnPress()}>
                    <CardItem cardBody button onPress={() => this._CardOnPress()}>
                        <Image resizeMode={'contain'} source={{uri: this.props.opds + this.state.item.link[0].href}} style={styles.issue}/>
                    </CardItem>
                </TouchableOpacity>
            </Card>
        </View>
        );
    }
}
export class FinishedIssue extends React.PureComponent {

    _CardOnPress = () => {
        this.state.navigate('IssueScreen',{
            id: this.state.item.id,
            socket: this.state.socket,
            title: this.state.item.title,
            showHeader: false,
            pageCount: this.state.item.link[3]['pse:count']
        });
    }

    constructor(props){
        super(props);
        this.state ={
            item: props.item,
            socket: props.socket,
            navigate: props.navigate
        };
    }
    render(){
        return (
            <View>
                <Card>
                    <TouchableOpacity onPress={() => this._CardOnPress()}>
                        <CardItem cardBody button onPress={() => this._CardOnPress()}>
                            <Image resizeMode={'contain'} source={{uri: this.props.opds + this.state.item.link[0].href}} style={styles.issueFinished}/>
                        </CardItem>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
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
    issue: {
        height: 277,
        width: 180,
        flex: 1,
        minWidth: 180
    },
    issueFinished: {
        height: 277,
        width: 180,
        flex: 1,
        minWidth: 180,
        opacity: 0.3
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
        marginLeft: 2,
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
