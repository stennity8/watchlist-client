import React from 'react';
import './CloseButton.css'

const CloseButton = (props) => {
  return (
    <div onClick={props.onClick} className="float-right">
      <i className="times icon"></i>
    </div>
  );
}

export default CloseButton;
