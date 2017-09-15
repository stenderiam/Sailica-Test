import React, { Component } from 'react';
import { Select } from 'antd';
import styles from "./styles/select.css";

const Option = Select.Option;

class MultipleSelect extends Component {

  selectOptions() {

    if (this.props.optionsArray) {
      const options = this.props.optionsArray.map(option => (

        <Option
          className={styles.Options}
          key={option.key}
          value={option.value}
        >
          {option.value}
        </Option>
      ))
      return options
    }
  }

  render() {

    return (
      <div className={styles.test}>
        <Select
          mode="multiple"
          notFoundContent="Not Found"
          placeholder={this.props.placeholder}
        >
          {this.selectOptions()}
        </Select>
      </div>
    );
  }
}

export default MultipleSelect;
