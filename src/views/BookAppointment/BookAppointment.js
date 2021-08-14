import { Box, Checkbox, TextField, Button } from "@material-ui/core";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./BookAppointment.css";
import { CONFIRMATION } from "constants/routes";

class BookAppointment extends Component {
	static propTypes = {
		history: PropTypes.object.isRequired
	};

	handleBookAppointmentClick() {
		this.props.history.push(CONFIRMATION);
	}
	render() {

		const formContainerBackground = {
			width: "100%",
			height: "90%",
			backgroundColor: "white",
			borderRadius: 5,
			boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
			marginLeft: "10%",
			marginRight: "10%",
			justifyContent: "center",
			textAlign: "center",
		};

		const textFieldContainer = {
			paddingTop: 10,
			justifyContent: "center",
			display: "flex",
			height: 50,
		};

		const formContainer = {
			paddingTop: "6%"
		};

		return (
			<Box className="book-appointment" display="flex" flexDirection="column" flex="1" alignItems="center" justifyContent="center">
				<div style={{ width: "100%", height: 40, color: "white", backgroundColor: "#7b4f95", marginTop: -10, }}><p style={{ fontSize: 15, marginLeft: 10 }}>BOOK APPOINTMENT</p>	</div>
				<br />
				<div style={{ display: "flex", width: "100%", height: "100%" }}>
					<div style={formContainerBackground}>
						<p style={{ fontSize: 25 }}>Personal Information</p>
						<div style={formContainer}>
							<form noValidate autoComplete="off">
								<div style={textFieldContainer}>
									<TextField id="outlined-basic" label="Name" variant="outlined" style={{ height: 40, width: "85%", }} />
								</div>
								<br />
								<div style={textFieldContainer}>
									<TextField id="outlined-basic" label="Surname" variant="outlined" style={{ height: 40, width: "85%", }} />
								</div>
								<br />
								<div style={textFieldContainer}>
									<TextField id="outlined-basic" label="Email" variant="outlined" style={{ height: 40, width: "85%", }} />
								</div>
								<div style={{ display: "flex", justifyContent: "space-between", marginRight: "10%", marginLeft: "10%", paddingTop: "8%" }}>
									<p>Are you already part of our family?</p>
									<Checkbox
										value="checkedA"
										color="primary"
										inputProps={{ "aria-label": "Checkbox A" }}
									/>
								</div>
							</form>
						</div>
					</div>
					<div style={formContainerBackground}>
						<p style={{ fontSize: 25 }}>Calendar</p>
						<div style={formContainer}>

						</div>
					</div>
				</div>
				<Button variant="contained" color="#7b4f95" style={{ backgroundColor: "#7B4F95", borderRadius: 20, height: 50, color: "white", width: "30%", marginTop: -20 }} onClick={() => this.handleBookAppointmentClick()}> BOOK APPOINTMENT</Button>
				<br />
				<br />
			</Box>
		);
	}
}
export default withRouter(BookAppointment);