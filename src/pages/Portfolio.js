import React, { Component } from "react";
import data from "../data.json"
 
class Portfolio extends Component {
    state = {
        data: data
    }

    render() {
        return <div key="2"><h1>SECOND TITLE</h1><p>the second content of the second title</p></div>;
    }
}

export default Portfolio;