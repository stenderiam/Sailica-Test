import React, { Component } from 'react';
import { Select } from 'antd';
import styles from "./sortby.css";

const Option = Select.Option;

class CustomSelect extends Component {

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

  handleBlur() {
    console.log('blur');
  }

  handleFocus() {
    console.log('focus');
  }

  render() {
    return (
      <Select
        showSearch
        placeholder={this.props.placeholder}
        notFoundContent='Not found'
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {this.selectOptions()}
      </Select>
    );
  }
}

export default CustomSelect;
