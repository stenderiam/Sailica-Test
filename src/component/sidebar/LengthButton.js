import React, { Component } from 'react';
import styles from "./styles/sidebar.css";

class LengthButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false,
    };
  }
  handleClick() {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <button className={this.state.active ? styles.activeLength : styles.inactiveLength} type="button" onClick={this.handleClick}>
        <div className={styles.lengthLabel}>  {this.props.length}</div>
        <div className={styles.converLength}>  {this.props.converLength}</div>
      </button>
    )
  }
}

export default LengthButton;
