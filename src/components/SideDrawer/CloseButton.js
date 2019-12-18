import React from 'react';
import { Icon } from 'semantic-ui-react'
import './CloseButton.css'

const CloseButton = (props) => {
  return (
    <div onClick={props.onClick} className="float-right">
      <Icon name='times circle' size='big' />
    </div>
  );
}

export default CloseButton;
