import React,{ Components } from 'react';
import {
	Text
} from 'react-native'

import RNPatternLock from 'react-native-pattern-lock'

export default class MainScreen extends Components{
	redner(){
		return (
			<View>
				<RNPatternLock
					onStart = { this.onStart }
					onEnd = { this.onEnd }
					status = 'setting/lock'
				/>
			</View>
		)
	}

	onStart(){
		
	}
}