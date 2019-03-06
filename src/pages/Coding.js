import React, { Component } from "react";
// import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
// import {Alert} from 'react-native';
//PROJECT DATA
import data from "../data.json";
//COMPONENTS
import Container from "../components/Container";
import Modal from "../components/Modal";
import Icon from "../components/Icon"

/*-----ICONS-----*/
import MusicIco from "../assets/icons/projects/casioBeats.svg";
import VolumeIco from "../assets/icons/projects/text2speech.svg";
import ClockIco from "../assets/icons/projects/analog.svg";
import GlobeIco from "../assets/icons/projects/activ8.svg";
import BrushIco from "../assets/icons/projects/canvas.svg";
import StarIco from "../assets/icons/projects/clickyTNG.svg";
import CloudIco from "../assets/icons/projects/raincheck.svg";
import CameraIco from "../assets/icons/projects/webcam.svg";
import WhackIco from "../assets/icons/projects/whack.svg";
/*-----ICONS-----*/

 
class Coding extends Component {
    state = {
        show: false,
        title: "",
        description: "",
        app: "",
        code: ""
    }

    handleClick = (index) => {
        this.setState({ show: true });
        console.log("icon clicked, modal should be displaying");
        console.log(`The index is ${index}`);
        console.log(`The title should be "${data[index].title}"`);
        this.setState({
            title: data[index].title,
            description: data[index].description,
            app: data[index].app,
            code: data[index].code,
        });
    }
    
    hideModal = () => {
        this.setState({ show: false });
        console.log("button clicked, modal should be hidden");
    }

    render() {
        return (
            <div> 
                <h1>My Portfolio</h1>             
                 <Container>
                    <Icon svg={MusicIco} handleClick={this.handleClick} indx="0"></Icon>
                    <Icon svg={VolumeIco} handleClick={this.handleClick} indx="1"></Icon>
                    <Icon svg={ClockIco} handleClick={this.handleClick} indx="2"></Icon>
                    <Icon svg={GlobeIco} handleClick={this.handleClick} indx="3"></Icon>  
                    <Icon svg={BrushIco} handleClick={this.handleClick} indx="4"></Icon>  
                    <Icon svg={StarIco} handleClick={this.handleClick} indx="5"></Icon>  
                    <Icon svg={CloudIco} handleClick={this.handleClick} indx="6"></Icon>  
                    <Icon svg={CameraIco} handleClick={this.handleClick} indx="7"></Icon>  
                    <Icon svg={WhackIco} handleClick={this.handleClick} indx="8"></Icon>                      
                </Container>

                <Modal show={this.state.show} handleClose={this.hideModal} >
                    <h2>{this.state.title}</h2>
                    <p>{this.state.description}</p>

                    <a className="links" href={this.state.app} target={"_blank"}>
                        <div className="card">
                            <div className="card-body">
                                <p>app</p>
                            </div>
                        </div>
                    </a>

                    <a className="links" href={this.state.code} target={"_blank"}>
                        <div className="card">
                            <div className="card-body">
                                <p>code</p>
                            </div>
                        </div>
                    </a>
                </Modal>
            </div>
        )
        //return <div key="2"><h1>SECOND TITLE</h1><p>the second content of the second title</p></div>;
    }
}

export default Coding;



    // displayIcons = () => {
    //     var projects = [
    //         {
    //             icon: MusicIco,
    //             title: "casioBeats",
    //             description: "Experiment with this soundboard and see what you discover.",
    //             href: "https://kyle-merryman.github.io/casioBeats/"
    //         },
    //         {
    //             icon: VolumeIco,
    //             title: "Text2Speech",
    //             description: "Utilizing google translate, anyone can write a message in their own language and hear it vocalized.",
    //             href: "https://kyle-merryman.github.io/text-to-speech/"
    //         },
    //         {
    //             icon: ClockIco,
    //             title: "Clock",
    //             description: "A real-time analog clock, rendered digitally (but still analog!).",
    //             href: "https://kyle-merryman.github.io/clock-analog/"
    //         },
    //     ]

    //     var display = this.projects.map(proj => (
    //       console.log("THIS IS THE MUTHAFUCKING ITEM"),
    //       console.log(proj.keyword),
    
    //       <ProjIcon

    //         //id={proj.id} //ADD AN ID #
    //         handleClick={this.handleClick}
    //         icon={proj.icon}
    //         title={proj.title}
    //         description={proj.description}
    //       />
    //     ))
    
    //     return display;
    // }