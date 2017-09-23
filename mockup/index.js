import React,{ Components } from 'react';
import {
	Text
} from 'react-native'

import RNPatternLock from 'react-native-pattern-lock'

export default class MainScreen extends Components{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	frozen:false,
	  	setp:0，
	  	message:0
	  };
	}

	redner(){
		return (
			<View>
				<RNPatternLock
					onStart={ this.onStart }
					onEnd={ this.onEnd }
					frozen={ this.state.frozen }
					ref={ instance=>this.lock = instance }
				/>
			</View>
		)
	}

	onStart(){
		this.lock.setStatus(RNPatternLock.NORMAL);
	}

	onEnd(ev){
		
		if( ev.token.length < 3 ){
			this.setState({
				message:'At least four points'
			})

			this.lock.clear()
			return;
		}

		if( ev.token.length > 3 && this.state.step === 0 ) {
			this.setState({
				message:'repeat your lock',
				step:1,
				initToken:ev.token
			})

			this.lock.clear()
			return
		}

		if( step === 1 ){
			if( ev.token === thi.state.token  ){
				this.setState({
					frozen:true,
					message:'This is your new pattern',
					token:ev.token
				})
			} else {
				this.setStatus(RNPatternLock.ERROR)
				this.setState({
					message:'wrong'
				})
			}
		}
	}

	clear(){
		this.lock.clear()
	}
}

/*

RNPatternLock
	clear()
	setStatus(NORMAL/ERROR)

	onStart
	onEnd ev => ev.token

	frozen boolean

RNPatternLock
 <View>
 	<Pattern>
 		new Array(3).fill('1').map(value,index=>new Array(3).fill(1).map(index=>index)
 	</Pattern>
 </View>

// Furture TODO
dotComponent = {
	<RNPatternLock.Dot
		active=""
		normal=""
		error=""
	/>
}

dotComponent = {
	(status) => {
		switch(status){
			case RNPatternLock.NORMAL:return <Image source={ normal }/>;
			case RNPatternLock.ACTIVE:return <Image source={ active };
			case RNPatternLock.ERROR:return <Image source={ error };
		}
	}
}
*/