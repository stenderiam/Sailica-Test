import React, { Component } from 'react';
import { Checkbox } from 'antd';
import styles from "./styles/sidebar.css";

class Equipment extends Component {

  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  checkOptions() {
    if (this.props.optionsArray) {
      const options = this.props.optionsArray.map(option => (
        <Checkbox key={option.key} className={styles.checkboxFilter} onChange={this.onChange}> {option.value}
        </Checkbox>
      ))
      return options
    }
  }

  render() {
    return (
      <div className={styles.equipmentCheck}>
        {this.checkOptions()}
      </div>

    )
  }
}

export default Equipment;
