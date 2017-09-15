import React, { Component } from 'react';
import { Slider, InputNumber } from 'antd';
import styles from "./styles/sidebar.css";


class Sidebar extends Component {


  constructor(props) {

    super(props)
    this.state = {
      inputValueStart: 20,
      inputValueEnd: 150,
    }
  }

  onChangeStart = (value) => {
    this.setState({
      inputValueStart: value
    });
  }
  onChangeEnd = (value) => {
    this.setState({
      inputValueEnd: value
    });
  }

  render() {

    return (
      <div className={styles.slider}>

        <div className={styles.input}>

          <InputNumber
            value={this.state.inputValueStart}
            formatter={value => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={this.onChangeStart}
          />
          <InputNumber
            value={this.state.inputValueEnd}
            formatter={value => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={this.onChangeEnd}
          />
        </div>
        <Slider range
          min={this.state.inputValueStart}
          max={this.state.inputValueEnd}
          defaultValue={[30, 83]}
        />

      </div>
    );
  }
}

export default Sidebar;
