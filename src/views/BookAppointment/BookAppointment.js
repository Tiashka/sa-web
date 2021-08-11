import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./BookAppointment.css";

export default class BookAppointment extends Component {
	render() {
		return (
			<Box className="book-appointment" display="flex" flexDirection="column" flex="1" alignItems="center" justifyContent="center">
				<Typography m={1} variant="h3" component="h3">
					{"Book Appointment Page"}
				</Typography>
			</Box>
		);
	}
}
