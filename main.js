import React,{ Component } from 'react';
import {
	View,
	Text,
	ART
} from 'react-native'

const {
	Surface,
	Shape,
	Path
} = ART

import GestureAware from './vendor/GestureAware';
import Dot from './dot';

export default class RNPatternLock extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	line:[],
	  	x:0,
	  	y:0
	  };
	}

	render(){
		return (
			<View>
				<GestureAware
					onMove = { this.onMove }
					onEnd = { this.onEnd } 
					>
					<Surface width="320" height="320" style={{ backgroundColor:'#021903' }}>
						<Shape d={ this.getLine() } stroke="#ad902a"></Shape>
						<Dot x={100} y={100}/>
						<Dot x={100} y={160}/>
						<Dot x={100} y={220}/>

						<Dot x={160} y={100}/>
						<Dot x={160} y={160}/>
						<Dot x={160} y={220}/>

						<Dot x={220} y={100}/>
						<Dot x={220} y={160}/>
						<Dot x={220} y={220}/>
					</Surface>
					
					{ this.getDots() }
					
				</GestureAware>
			</View>
		)
	}

	getLine = () => {
		const {
			line,x,y
		} = this.state;

		let path = new Path();

		if( line.length == 0 ) return path;

		line.forEach(function([x,y],index){
			if( index == 0 ){
				path.moveTo(x,y)
			} else {
				path.lineTo(x,y)
			}
		})

		path.lineTo(x,y);
	}

	onMove = (ev) => {
		this.setState({
			x:ev.moveX,
			y:ev.moveY
		})
	}

	onEnd = () => {
		const { line } = this.state;

		if( !line.length ){
			this.setState({
				x:0,
				y:0
			})
			return;
		}

		this.setState({
			x:line[line.length-1][0],
			y:line[line.length-1][1]
		})
	}

	getDots = () => {
		let arr = [];

		for(let i = 0;i<9;i++ ){
			arr[i] = i;
		}

		return arr.map((i,index) => {
			return <Dot key={`dot${index}`}/>
		})
	}
}