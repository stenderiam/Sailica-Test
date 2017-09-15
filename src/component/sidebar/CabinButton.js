import React, { Component } from 'react';
import styles from "./styles/sidebar.css";

class CabinButton extends Component {

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
            <button className={this.state.active ? styles.activeCabins : styles.inactiveCabins} type="button" onClick={this.handleClick}>
                <label className={styles.cabinLabel}>  {this.props.text}</label>
            </button>
        )
    }
}

export default CabinButton;
