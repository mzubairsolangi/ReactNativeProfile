/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

export default class AwesomeProject extends Component {

   constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'AngularJS', 
        'Javascript', 
        'Angular 2', 
        'Typescript', 
        'React Native',
        'NodeJS', 
        'MongoDB', 
        'Bootstrap', 
        'ionic framework',
        'Firebase'
      ])
    };
  }

  render() {

     let pic = {
      uri: 'https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-0/p206x206/12239593_935758659835284_1958291819647082840_n.jpg?oh=c1c39c70a5ee9159b497180bddcf3d57&oe=58CFF0FC&__gda__=1485603200_bcb84b3d7e4ce102722e42fb968d6af7'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 150, height: 150}}/>
        <Text style={styles.welcome}>
          Muhammad Zubair
        </Text>
        <Text style={styles.designation}>
          Front end developer at MobileLIVE
        </Text>
        <Text style={styles.instructions}>
          I'm a full stack MEAN developer with 3 years of professional experience. 
          I have done BSCS degree from FUUAST Karachi. 
          I have good experience on client and server side. 
          For client side I'm using AngularJS, javascript, Anular 2 with Typescript and server side I'm using ExpressJS, NodeJS and noSQL db Like MongDB'
        </Text>
         <Text style={styles.welcome}>
          Skills:
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  designation: {
    textAlign: 'center',
    color: '#000000',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
