import React from 'react';
import { Image } from 'semantic-ui-react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="ui container" style={{ marginTop: "25px" }}>
      <Image src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png"
        alt="Powered by The Movie DB"
        size='tiny'
        centered
      />
    </div>
  );
}

export default Footer;
