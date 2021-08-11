import { Box, Button, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./Body.css";

export default class Body extends Component {
	render() {
		return (
			<div className="body col flex-grow">
				<Box className="top" display="flex" flexWrap="nowrap" flex={2} flexDirection="row" alignItems="center" justifyContent="center">
					<Button className="top-button" variant="contained" size="large" color="primary" onClick={()=>{}}>{"BOOK APPOINTMENT"}</Button>
				</Box>
				<Box className="bottom" display="flex" flexWrap="nowrap" flex={1} flexDirection="column" px={11} justifyContent="center">
					<Typography m={1} variant="h3" component="h3">
						{"Welcome to"}
					</Typography>
					<Typography variant="h4" component="h3">
						{"West side veterinary centre"}
					</Typography>
					<Box className="bottom-container" display="flex" flexDirection="column">
						<Typography variant="body1" component="h3">
							{"We are located at :"}
						</Typography>
						<Typography variant="body2" component="h3">
							{"Valley Farm Animal Hospital, 829 Old Farm Rd, Faerie Glen, Pretoria, 0043"}
						</Typography>
					</Box>
					<Box className="bottom-container" display="flex" flexDirection="column">
						<Typography variant="body1" component="h3">
							{"Call us at:"}
						</Typography>
						<Typography variant="body2" component="h3">
							{"098 1234 890"}
						</Typography>
					</Box>
				</Box>
			</div>
		);
	}
}
