import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './ScrollToTop.css'

export class ScrollToTop extends Component {
  state = {
    is_visible: false
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener("scroll", (e) => this.toggleVisibility())
  }

  toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
            <Icon name="chevron circle up" size="large" color="green" />
          </div>
          :
          null
        }
      </div>
    );
  }
}

export default ScrollToTop;
