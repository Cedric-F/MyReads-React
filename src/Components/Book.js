import React, { Component } from 'react'

class Book extends Component {

	render() {
		console.log(this.props.item)
		return (
			<img src={this.props.item.imageLinks.smallThumbnail}/>
		)
	}
}

export default Book