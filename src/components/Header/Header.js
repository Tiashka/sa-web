import React, { Component } from "react";
import Logo from "assets/sa-logo.png";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { LANDING } from "constants/routes";
import "./Header.css";

class Header extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	render() {
		return (
			<div className="header row px-4">
				<img src={Logo} alt="logo" onClick={()=>this.props.history.push(LANDING)}/>
				<div className="header-headings col justify-center px-4">
					<div className="header-headings_title">{"West Side Veterinary Centre"}</div>
					<div className="header-headings_subtitle">{"Happier healthier pets"}</div>
				</div>
				<div className="flex-grow"></div>
				<div className="header-emergency col justify-center">
					<div className="header-emergency_title">{"EMERGENCY NUMBER"}</div>
					<div className="header-emergency_subtitle">{"001 890 3456"}</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Header);
