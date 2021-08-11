import React, { Component } from "react";
import Logo from "assets/sa-logo.png";
import "./Header.css";

export default class Header extends Component {
	render() {
		return (
			<div className="header row px-4">
				<img src={Logo} alt="logo"/>
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
