import React, { Component } from "react";
import {
	Switch,
	Route
} from "react-router-dom";
import { BOOK_APPOINTMENT, CONFIRMATION, LANDING } from "constants/routes";
import BookAppointment from "views/BookAppointment/BookAppointment";
import Landing from "views/Landing/Landing";
import confirmation from "views/BookAppointment/confirmation";
import "./Body.css";

export default class Body extends Component {

	render() {
		return (
			<div className="body col flex-grow">
				<Switch>
					<Route path={BOOK_APPOINTMENT}>
						<BookAppointment />
					</Route>
					<Route path={CONFIRMATION}>
						<confirmation />
					</Route>
					<Route path={LANDING}>
						<Landing />
					</Route>
				</Switch>
			</div>
		);
	}
}
