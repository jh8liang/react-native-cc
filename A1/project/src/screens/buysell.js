/**
 * Sample React Native Home
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import { Button, Modal, TextInput } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class buysell extends Component<{}> {
	constructor(props) {
    super(props);
    
    this.state = {
      mode: 'sell',
	  modalVisible:true,
    };
    
  }
  
  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
	
  render() {
  // const { page } = this.state;
  //const background = styles[page];
 // const tabbarStyles = [styles.tabbar];
    return (
      <View>
	  <View style={{width: 400, height: 150, position: 'absolute', backgroundColor: 'steelblue'}} />
      <Text style={styles.instructions}>
          Bitcoin 
      </Text>
	<Text style={styles.welcome}>
          123 BTC 
    </Text>
	 <Text style={styles.note}>
		US$ 1.23
	</Text>
	
	
	<View style={styles.container1}>
	<TouchableOpacity 
		style = {styles.Button1}
		onPress={() => { () => this.setState({modalVisible:true}) }}
	>
	<Text style={styles.b1}> BUY </Text>
	</TouchableOpacity>
	<TouchableOpacity 
		style = {styles.Button2}
		onPress={() => { this.setState({ mode: 'sell' }) }}
	>
		<Text style={styles.b1}> SELL </Text>
	</TouchableOpacity>
	</View>
	
	
	<View style={styles.container}>
	<Modal
             visible={this.state.modalVisible}
             animationType={'slide'}
             onRequestClose={() => this.closeModal()}
          >
		  <View>
			<View style={{width: 400, height: 70, position: 'absolute', backgroundColor: 'steelblue'}} />		  
			<TouchableOpacity 
				style = {styles.Button3}
				onPress={() => { this.closeModal() }}
			>
			<Text style = {styles.exitinstructions}>X</Text>
			</TouchableOpacity>
       { this.state.mode === 'buy' ?
         <Text style={styles.instructions}>
          Buy Bitcoin
         </Text> :
         <Text style={styles.instructions}>
          Sell Bitcoin
         </Text>
       }
	   <Text> ──────────────────────────────────── </Text>
	   
		  </View>
	</Modal>
	</View>
	
    </View>
	
		    
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
	marginTop: 30,
    fontSize: 25,
	color: '#ffffff',
	//fontWeight: "bold",
    textAlign: 'center',
    margin: 5,
  },
   container: {
    flex: 1,
    justifyContent: 'center',
  },
   container1: {
    flex: 1,
	flexDirection: 'row',
    //justifyContent: 'center',
  },
   note: {
	marginTop: 0,
    fontSize: 15,
	color: '#ffffff',
	//fontWeight: "bold",
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
	fontSize: 17,
    color: '#ffffff',
	fontWeight: "bold",
    marginBottom: 10,
  },
    exitinstructions: {
    textAlign: 'left',
	//marginTop: 15,
	fontSize: 17,
    color: '#ffffff',
	fontWeight: "bold",
    marginBottom: 10,
  },
   image1: {
    height:200,
    width:100,
    alignItems: 'center',
    justifyContent:'center',
	//resizeMode: 'contain',
  },
  b1: {
    fontSize: 17,
    color: '#ffffff',
	fontWeight: "bold",
	marginTop: 10,
	marginLeft: 33,
    alignItems: 'center',
    //justifyContent:'center',
	//resizeMode: 'contain',
  },
   Button1: {
    backgroundColor:'steelblue',
	marginTop: 30,
	marginLeft: 20,
    height: 40,
   // borderTopColor: 'red',
    width: 120,
  },
   Button2: {
    backgroundColor:'steelblue',
	marginTop: 30,
	marginLeft: 60,
    height: 40,
   // borderTopColor: 'red',
    width: 120,
	//marginBottom: -20,
  },
     Button3: {
    backgroundColor:'steelblue',
	marginTop: 0,
	marginLeft: 0,
    height: 20,
   // borderTopColor: 'red',
    width: 20,
	//marginBottom: -20,
  },
    tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2,
  },
});
