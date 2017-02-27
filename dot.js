import React,{ Component } from 'react';
import {
	View,
	Text
} from 'react-native'

export default class Dot extends Component{
	componentDidMount(){
		this.refs.dot.measure(() => {
			
		})
	}

	render(){
		return(
			<View style={{ 
				width:10,
				height:10,
				backgroundColor:'grey',
				position:'absolute',
				left:100,
				top:100,
				borderRadius:10,
				borderWidth:1,
				borderColor:'grey'
			}} { ...this.props.style } ref="dot"></View>
		)
	}
}