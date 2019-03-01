import React, { Component } from "react";
import data from "../../data.json"
import Container from "../../components/Container"
 
class About extends Component {
    state = {
        data: data
    }

    

    render() {
        var statement = `Kyle Merryman is a multimedia content creator. Kyle has generated websites, applications and documentary shorts for multiple clients and employers. Kyle is constantly updating their toolset with a variety of front and back-end programming skills. Kyle is drawn to work which aligns with their passion for sharing culturally nuanced stories, interest in utilizing new technologies, and experience with both video editing and ethnographic research.`
        
        return (
        <Container>
        <div>
            <h1>My Story</h1>
            <p className="statement">{statement}</p>
        </div>
        </Container>
        );
    }
}

export default About;