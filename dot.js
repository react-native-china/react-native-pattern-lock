import React,{ Component } from 'react';
import {
	View,
	Text,
	ART
} from 'react-native'

const {
	Shape,
	Path
} = ART;

export default class Dot extends Component{
	componentDidMount(){
	}

	render(){

		let {
			x,y
		} = this.props;

		x = x || 10;
		y = y || 10;

		return(
			<Shape d={ 
				new Path().moveTo(x,y).arcTo(x+10,y+10,5,5).arcTo(x,y,5,5)
			} fill = "green"/>
		)
	}
}