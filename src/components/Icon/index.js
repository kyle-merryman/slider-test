import React, { Component } from "react";
import "./style.css";

function Icon(props) {
  return (
    <p value={props.indx} className="icon" height="10px !important" onClick={() => props.handleClick(props.indx)} onTouchStart={() => props.handleClick(props.indx)}>
        <img src={props.svg} alt={props.svg} id={props.svg} onClick={props.handleClick} width="60px" height="60px"/>
    </p>   
  );
}

export default Icon;