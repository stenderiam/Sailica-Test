import React, { Component } from 'react';
import styles from './sortby.css';
import Select from 'react-select';
import FilterImg from './filter.svg'

const SORTBY = [
  { value: '1', label: 'Most popular Boats' },
  { value: '2', label: 'Price – low to high' },
  { value: '3', label: 'Price high to low' }
];

class SortBy extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clearable: false,
      autofocus: false,
      searchable: false,
      selectValue: '1'
    }
    this.updateValue = this.updateValue.bind(this)
    this.openSidebar = this.openSidebar.bind(this)
  }

  updateValue(newValue) {
    this.setState({
      selectValue: newValue
    });
  }

  openSidebar() {
    this.props.toggleSidebar(true)
  }

  render() {
    return (
      <div className={styles.align}>
        <div className={styles.fontStyle}> Found 5 boats </div>
        <div className={styles.rightColumn}>
          <div className={styles.sortby}>
            <div className={styles.label}> Sort by
          </div>
            <div className={styles.dropdown}>
              <Select
                autofocus={this.state.autofocus}
                className={styles.selectStyle}
                options={SORTBY}
                value={this.state.selectValue}
                clearable={this.state.clearable}
                onChange={this.updateValue}
                searchable={this.state.searchable}
              />
            </div>
          </div>
          <button
            className={styles.openButton}
            onClick={this.openSidebar}>
            <img className={this.filterImg} src={FilterImg} alt='' />
            <div className={styles.filterLabel}>
              Filters
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default SortBy;



