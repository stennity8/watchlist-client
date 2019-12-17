import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './ScrollToTop.css'

export class ScrollToTop extends Component {
  state = {
    is_visible: false,
    windowHeight: 300
  }

  componentDidMount() {
    document.addEventListener("scroll", (e) => this.toggleVisibility())
    this.setState({
      windowHeight: window.innerHeight / 2
    })
  }

  toggleVisibility = () => {
    if (window.pageYOffset > this.state.windowHeight) {
      this.setState({
        is_visible: true
      })
    } else {
      this.setState({
        is_visible: false
      })
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div className="scroll-to-top">
        {this.state.is_visible ?
          <div onClick={this.scrollToTop}>
            <Icon inverted color="green" name="chevron circle up" size="big" />
          </div>
          :
          null
        }
      </div>
    );
  }
}

export default ScrollToTop;
