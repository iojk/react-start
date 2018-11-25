import React, { Component } from 'react';
import "bootstrap/js/dist/modal";
import "./BootstrapModal.scss";
import BootstrapButtonSet from '../BootstrapButtonSet/BootstrapButtonSet';

class BootstrapModal extends Component {
	render() {
		return (
			<div tabIndex="-1"
				className="modal fade" id="exampleModal" role="dialog"
				aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Modal body text goes here.</p>							
							<ul>
								{this.props.menu__list.map((item, i) =>
								<li key={i}><a href={item.link}>{item.label}</a></li>
								)}
							</ul>
						</div>
						<div className="modal-footer">
							<BootstrapButtonSet buttonset__list={this.props.buttonset__list} />							
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BootstrapModal;