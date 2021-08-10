import React, { Component } from "react";
import Logo from "assets/logo.svg";
import { Button } from "@material-ui/core";
import "./Header.css";

export default class Header extends Component {
	render() {
		return (
			<div className="header row px-4">
				<img src={Logo}/>
				<div className="header-headings col justify-center px-4">
					<div className="header-headings_title">{"West Side Veterinary Centre"}</div>
					<div className="header-headings_subtitle">{"Happier healthier pets"}</div>
				</div>
				<div className="flex-grow"></div>
				<div className="col justify-center">
					<Button variant="contained" size="small" color="primary" onClick={()=>{}}>{"Make Booking"}</Button>
				</div>
			</div>
		);
	}
}
