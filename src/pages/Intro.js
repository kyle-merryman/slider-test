import React, { Component } from "react";
import data from "../data.json"
import me from '../assets/icons/social/me.png';
 
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
                <img src={me} alt="Kyle Merryman" className="logo" height="auto" width="15%" padding-left="100px"/>
                <h1>Kyle Merryman</h1>
                <p>Programmer with a humanities perspective</p>
                <button>{"my resumé"}</button>
            </div>
            </div>
        );
    }

    
}

export default Intro;

{/* <section>
<img src="https://pbs.twimg.com/media/Desg6cdXUAEE2w5.jpg" alt="Kyle" />
<span>
    Posted by <strong>Kyle</strong>
</span>
</section> */}