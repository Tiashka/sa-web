import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
	spacing: 4,
	palette: {
		primary: {
			main:"#7B4F95"
		},
	},
	typography: {
		fontFamily: [
			"Montserrat", 
			"-apple-system", 
			"BlinkMacSystemFont", 
			"Segoe UI", 
			"Roboto", 
			"Oxygen",
			"Ubuntu", 
			"Cantarell", 
			"Fira Sans", 
			"Droid Sans", 
			"Helvetica Neue",
			"sans-serif",
		].join(","),
		h3: {
			fontSize: "1.5rem",
			fontWeight: 300,
		},
		h4: {
			fontSize: "1.5rem",
			fontWeight: 500,
		},
		body1: {
			fontSize: "0.875rem",
			fontWeight: 300,
		},
		body2: {
			fontSize: "0.875rem",
			fontWeight: 400,
		},
	},
});