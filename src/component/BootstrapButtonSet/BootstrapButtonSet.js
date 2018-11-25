import React, { Component } from 'react';
import "./BootstrapButtonSet.scss";

class BootstrapButtonSet extends Component {
	render() {
		return (
			<div className="buttonset buttonset_bootstrap buttonset_modal">
			{this.props.buttonset__list.map((item, i) =>
				<button 
					key={i} 
					type={item.btn__type} 
					className={item.btn__class} 
					data-dismiss={item.btn__dismiss}>
					{item.btn__text}
				</button>
			)}
			</div>
		);
	}
}

export default BootstrapButtonSet;