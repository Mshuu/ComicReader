import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Card, CardItem } from 'native-base';

import { FlatList } from 'react-native-gesture-handler';
import { MultipleIssueBook } from '../components/MultipleIssueBook';
import { SingleIssueBook } from '../components/SingleIssueBook';

export class BookList extends React.PureComponent {
    bookIssues = ({item, index}) => (
      <MultipleIssueBook item={item} state = {this.props.state} />
    );

    constructor(props){
        super(props);
        this.state = {
            item: this.props.item,
            socket: this.props.state.socket,
            navigation: this.props.state.navigation
        };
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
        }
        return (
            <Card transparent>
            <CardItem>
                <Text style={{fontWeight:'bold',fontSize: 25,color:'#595957'}}>{this.props.item.title}</Text>
            </CardItem>
            <CardItem>
                <SingleIssueBook item={this.state.item.issues} state={this.props.state} />
            </CardItem>
         </Card>
        );
    }
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