import React, { Component } from "react";
import data from "../data.json"
 
class Intro extends Component {
    state = {
        data: data
    }

    render() {
        return (
            <div
            key="1"
            className="slider-content"
            style={{ background: `url('https://gndn.files.wordpress.com/2010/09/cncb1.jpg') no-repeat center center` }}
        >
            <div className="inner">
                <h1>FIRST TITLE</h1>
                <p>the first content of the first title</p>
                <button>{"BUTTON"}</button>
            </div>
            <section>
                <img src="https://pbs.twimg.com/media/Desg6cdXUAEE2w5.jpg" alt="Kyle" />
                <span>
                    Posted by <strong>Kyle</strong>
                </span>
            </section>
            </div>
        );
    }

    
}

export default Intro;