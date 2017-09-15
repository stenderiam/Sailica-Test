import React, { Component } from 'react';
import styles from "./styles/sidebar.css";

class PriceButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: this.props.active
    };
  }
  handleClick() {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <button className={this.state.active ? styles.activePrice : styles.inactivePrice}
        type="button" onClick={this.handleClick}>
        <label className={styles.priceLabel}>  {this.props.priceLabel}</label>
      </button>
    )
  }
}

export default PriceButton;
