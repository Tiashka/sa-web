import { Box, Checkbox } from "@material-ui/core";
import React, { Component } from "react";
import "./BookAppointment.css";
export default class BookAppointment extends Component {

	render() {

		const formContainer = {
			width: "50%",
			height: "70%",
			backgroundColor: "white",
			borderRadius: 10,
			boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
			marginLeft: "10%",
			marginRight: "10%"
		};

		return (
			<Box className="book-appointment" display="flex" flexDirection="column" flex="1" alignItems="center" justifyContent="center">
				<div style={formContainer}>
					<p>Personal Information</p>
					<div style={{ display: "flex", justifyContent: "space-between", marginRight: "10%", marginLeft: "10%" }}>
						<p>Are you already part of our family?</p>
						<Checkbox
							value="checkedA"
							color="primary"
							inputProps={{ "aria-label": "Checkbox A" }}
						/>
					</div>
				</div>
			</Box>
		);
	}
}
