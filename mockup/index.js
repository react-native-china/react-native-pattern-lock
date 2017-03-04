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
					type = 'lock'// oneOf["lock","set","confirm"]
				/>
			</View>
		)
	}

	onStart(){
		
	}

	onEnd(ev){
		// ev.token
		if( ev.token == '12394' ){
			// successHandler()
		} else {
			RNPatternLock.setError();
		}
	}
}

