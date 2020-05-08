import Constants from 'expo-constants';
import NetInfo from '@react-native-community/netinfo';
import {
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React from 'react';

export default class Status extends React.Component {
	state = {
		isConnected: false,
	};

	render() {
		const { isConnected } = this.state;

		const backgroundColor = isConnected ? 'white' : 'red';

		if (Platform.OS === 'ios') {
			return (
				<View style={[styles.status, { backgroundColor }]}></View>
			);
		}

		return null;
	}
}

const statusHeight =
  (Platform.OS === 'ios' ? Constants.statusBarHeight : 0);

const styles = StyleSheet.create({
	status: {
		zIndex: 1,
		height: statusHeight,
	},
});

