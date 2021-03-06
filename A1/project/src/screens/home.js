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
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { LineChart } from 'react-native-svg-charts';

import Svg,{Polyline} from 'react-native-svg';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*var myTabs = TabNavigator({
	Tab1: {screen: buysellscreen}
	
}); */


export default class Home extends Component<{}> {
  render() {
	const data = [ 10, 10, 10, 10, -50, -80, 70, 100 ] //sample data
    return (
<ScrollView style={{flex:1}}>
    <View style={{flex:1, justifyContent: 'center'}}>
		<View style={{width: 400, height: 120, position: 'absolute', backgroundColor: 'steelblue'}}/>
		<Text style={styles.welcome}>
			$USD: 123
		</Text>
		<Text style={styles.instructions}>
			View Your Account 
		</Text>
    </View>
	<View style={{flex: 3, justifyContent: 'space-between'}}>
		<View style={styles.Chartpos}>
			<TouchableOpacity 
				style = {styles.Chartbutton}
				onPress={() => { }}
			>
			<LineChart
				style={styles.Chartlinesize}
				data={ data }
				svg={{ stroke: 'rgb(134, 65, 244)', fillRule: 'evenodd', fill: 'orange' }}
				showGrid= {false}
			/>
			</TouchableOpacity>
		</View>
		<View style={styles.Chartpos}>
			<TouchableOpacity 
				style = {styles.Chartbutton}
				onPress={() => { }}
			>
			<LineChart
				style={styles.Chartlinesize}
				data={ data }
				svg={{ stroke: 'rgb(134, 65, 244)', fillRule: 'nonzero', fill: 'orange' }}
				showGrid= {false}
			/>
			</TouchableOpacity>
		</View>   
	    <View style={styles.Chartpos}>
			<TouchableOpacity 
				style = {styles.Chartbutton}
				onPress={() => { }}
			>
			<LineChart
				style={styles.Chartlinesize}
				data={ data }
				svg={{ stroke: 'rgb(134, 65, 244)', fillRule: 'nonzero', fill: 'orange' }}
				showGrid= {false}
			/>
			</TouchableOpacity>
		</View>
	    <View style={styles.Chartpos}>
			<TouchableOpacity 
				style = {styles.Chartbutton}
				onPress={() => { }}
			>
			<LineChart
				style={styles.Chartlinesize}
				data={ data }
				svg={{ stroke: 'rgb(134, 65, 244)', fillRule: 'nonzero', fill: 'orange' }}
				showGrid= {false}
			/>
			</TouchableOpacity>
		</View>	   
	</View>
</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
	marginTop: 30,
    fontSize: 25,
	color: '#ffffff',
	fontWeight: "bold",
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
	fontSize: 15,
    color: '#ffffff',
    marginBottom: 10,
  },
   image1: {
    height:150,
    width:null,
    //alignItems: 'center',
    //justifyContent:'center',
	resizeMode: 'contain',
	//borderBottomWidthWidthWidth: -100
  },
    image2: {
    height:220,
    width:null,
    //alignItems: 'center',
    //justifyContent:'center',
	resizeMode: 'contain',
	//borderBottomWidthWidthWidth: -100
  },
	Chartbutton: {
		height: 150, 
		width: 250, 
		paddingLeft: 20, 
		paddingRight: 20, 
		paddingTop: 20, 
		backgroundColor: '#ffffff'
  },
  Chartlinesize: {
	  height: 100, 
	  width: 200
  },
  Chartpos: {
	  paddingLeft: 55, 
	  paddingBottom: 25
  },
    tabbar: {
    backgroundColor:'white',
    height: 64,
    borderTopColor: 'red',
    borderTopWidth: 2
  }
});
