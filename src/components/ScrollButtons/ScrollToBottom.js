import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './ScrollToBottom.css'

export class ScrollToBottom extends Component {
  state = {
    is_visible: false,
    windowHeight: 100
  }

  componentDidMount() {
    document.addEventListener("scroll", (e) => this.toggleVisibility())
    document.addEventListener("hashchange", (e) => this.toggleVisibility())
    this.setState({
      windowHeight: window.innerHeight * 1.5
    })
  }

  toggleVisibility = () => {
    if (window.pageYOffset <= (document.body.scrollHeight - this.state.windowHeight)) {
      this.setState({
        is_visible: true
      })
    } else {
      this.setState({
        is_visible: false
      })
    }
  }

  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div className="scroll-to-bottom">
        {this.state.is_visible ?
          <div onClick={this.scrollToBottom}>
            <Icon name="chevron circle down" size="big" color="green" />
          </div>
          :
          null
        }
      </div>
    );
  }
}

export default ScrollToBottom;
