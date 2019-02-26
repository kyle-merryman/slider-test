import React, { Component } from "react";
import data from "../data.json"
 
class Contact extends Component {
    state = {
        data: data
    }

    render() {
        return (<div key="3"><h1>LAST TITLE</h1><p>the last content of the last title</p></div>);
    }
}

export default Contact;