import React from 'react'
require('styles/reset.css')
require('styles/App.css')

class Info extends React.Component{
	render(){
		return <div className="Info">
			<h2>{this.props.aaa.title}</h2>
			<div className="jiben">
				{this.props.aaa.de.map((e,i)=>{
					return <p key={i}>{e}</p>
				})}
			</div>
		</div>
	}
}
export default Info