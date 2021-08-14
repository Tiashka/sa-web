import React from "react";
import "./App.css";

function confirmation() {
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
    return (
        <div className="app col flex-grow">
            <div style={formContainerBackground}>

            </div>

        </div>
    );
}

export default confirmation;
