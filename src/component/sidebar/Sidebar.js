import React, { Component } from 'react';
import { Switch } from 'antd';
import * as SelectOptions from '../data';

import CustomSelect from './Select';
import MultipleSelect from './MultipleSelect';
import Equipment from './Equipment'
import PriceButton from './PriceButton'
import BoatTypeButton from './BoatTypeButton';
import CabinButton from './CabinButton'
import LengthButton from './LengthButton'
import Slider from "./Slider";

import icons from "./icons/icons";
import styles from "./styles/sidebar.css";

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectCountry: SelectOptions.COUNTRY,
      selectPlace: SelectOptions.PLACE,
      selectGuests: SelectOptions.GUESTS,
      multipleSelect: SelectOptions.BUILTIN,
      equipmentCheck: SelectOptions.EQUIPMENT,
      isToggleOn: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  onChangeSwitch(checked) {
    console.log(`switch to ${checked}`);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  closeSidebar() {
    this.props.toggleSidebar(false)
  }

  render() {
    const { sidebarOpen } = this.props
    return (
      <div className={[styles.sidebarColumn, (sidebarOpen ? styles.sidebarOpen : '')].join(' ')}>
        <div className={styles.sidebarFlex}>
          <button className={styles.closeButton} onClick={this.closeSidebar} >
            <img src={icons.close} alt='' />
          </button>
          <div className={styles.divider}>
            <CustomSelect placeholder={'Country'} icons={icons.country} optionsArray={this.state.selectCountry} />
            <CustomSelect placeholder={'Place'} icons={icons.anchor} optionsArray={this.state.selectPlace} />
            <CustomSelect placeholder={'Calendar'} icons={icons.calendar} />
            <CustomSelect placeholder={'Guests'} icons={icons.guest} optionsArray={this.state.selectGuests} />
          </div>
          <div className={styles.divider}>
            <div className={`${styles.filterLabel} ${styles.hidden}`}>Boat </div>
            <div className={styles.boatFilter}>
              <BoatTypeButton icons={icons.sail} text={'Sail'} />
              <BoatTypeButton icons={icons.motor} text={'Motor'} />
              <BoatTypeButton icons={icons.catamaran} text={'Catamaran'} />
              <BoatTypeButton icons={icons.mega} text={'Mega'} />
            </div>
            <div className={`${styles.filterLabel} ${styles.hidden}`}>Price, € </div>
            <div className={`${styles.boatFilter} ${styles.flexed}`}>
              <div className={styles.priceButtons}>
                <div className={styles.price}>Price per</div>
                <div className={styles.changePer}>
                  <PriceButton active={true} priceLabel={'day'} />
                  <PriceButton priceLabel={'week'} />
                </div>
              </div>
              <Slider />
            </div>
            <div className={`${styles.filterLabel} ${styles.hidden}`}>Crew</div>
            <div className={styles.boatFilter}>
              <div className={styles.captainIncluded}>
                <div className={styles.included}>  Captain Included</div>
                <Switch defaultChecked={false} onChange={this.onChangeSwitch} />
              </div>
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.filterLabel}>Cabins </div>
            <div className={styles.boatFilter}>
              <CabinButton text={'1-3'} />
              <CabinButton text={'4'} />
              <CabinButton text={'5-8'} />
              <CabinButton text={'9+'} />
            </div>
            <div className={styles.filterLabel}>Length </div>
            <div className={styles.boatFilter}>
              <LengthButton length={'30-40ft'} converLength={'9-12m'} />
              <LengthButton length={'42-47ft'} converLength={'12-14m'} />
              <LengthButton length={'47-56ft'} converLength={'14-17m'} />
              <LengthButton length={'56+ft'} converLength={'17+m'} />
            </div>
            <div className={`${styles.filterLabel} ${styles.hidden}`}>Built in</div>
            <MultipleSelect placeholder={'Built in'} optionsArray={this.state.multipleSelect} />
            <div className={`${styles.filterLabel} ${styles.hidden}`}>Brand </div>
            <CustomSelect placeholder={'Brand'} />
            <div className={`${styles.filterLabel} ${styles.hidden}`}>Model </div>
            <CustomSelect placeholder={'Model'} />
            <div className={styles.moreFilters}>
              <button
                onClick={this.handleClick}
                className={styles.moreFiltersButton}
                type="button" >
                <label className={styles.moreLabel}> More filters</label>
              </button>
            </div>
            <div
              className={`${styles.column} ${this.state.isToggleOn ? styles.equipmentFilters : styles.closeEquipment}`}>
              <Equipment
                className={`${styles.column}`}
                optionsArray={this.state.equipmentCheck} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
