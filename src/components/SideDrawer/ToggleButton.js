import React from 'react';
import './ToggleButton.css'

const ToggleButton = props => (
  <button className="toggle-button" onClick={props.onClick}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
)

export default ToggleButton;