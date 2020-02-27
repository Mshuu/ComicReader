import React,{Component} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as firebase from 'firebase';
import * as Google from 'expo-google-app-auth';

export default class LinksScreen extends Component{

  _loginWithGoogle = async function() {
    try {
      const result = await Google.logInAsync({
        androidClientId:"1:334326325449:android:640bba2b96e19b595c2d18",
        iosClientId:"1:334326325449:ios:99b621ce99bde3245c2d18",
        scopes: ["profile", "email"]
      });
  
      if (result.type === "success") {
        const { idToken, accessToken } = result;
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        firebase
          .auth()
          .signInAndRetrieveDataWithCredential(credential)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log("firebase cred err:", error);
          });
      } else {
        return { cancelled: true };
      }
    } catch (err) {
      console.log("err:", err);
    }
  }

  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBINumVrqPa7wPJh4DE-XH50eyF1RaCrfA",
      authDomain: "comicviewer-9e7da.firebaseapp.com",
      databaseURL: "https://comicviewer-9e7da.firebaseio.com",
      projectId: "comicviewer-9e7da",
      storageBucket: "comicviewer-9e7da.appspot.com",
      messagingSenderId: "334326325449",
      appId: "1:334326325449:web:26518b20964cea695c2d18",
      measurementId: "G-NJKHCCEV66"
    };
    
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    this._loginWithGoogle();


  }
  render(){
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
