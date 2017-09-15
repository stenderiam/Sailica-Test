import React, { Component } from 'react';
import styles from "./styles/sidebar.css";

class BoatTypeButton extends Component {

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
            <button className={this.state.active ? styles.activeTypeButton : styles.inactiveTypeButton} type="button" onClick={this.handleClick}>
                <img className={styles.boatTypeIcon} src={this.props.icons} alt="boat type" />
                <label className={styles.boatTypeLabel}>  {this.props.text}</label>
            </button>
        )
    }
}

export default BoatTypeButton;
