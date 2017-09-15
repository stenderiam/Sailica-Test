import React, { Component } from 'react';
// import Autocomplete from 'react-autocomplete';
import styles from './navbar.css';
import logoMobile from './icons/logomobile.svg'
import logoFull from './icons/logofull.svg'
import searchIcon from './icons/searchicon.svg'

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  render() {
    return (
      <div>
        <div className={styles.mobile} >
          <div className={styles.icon}>
            <img src={logoMobile} alt="logo" />
          </div>
          <div className={styles.width}>
            <form className={`${styles.spaceBetween} ${styles.form}`}>
              <input type="text" className={styles.search} value={this.state.inputValue} placeholder="Search" required />
              <input type="image" className={styles.submit} src={searchIcon} alt="Submit Form" />
            </form>
          </div>
        </div>


        <div className={styles.container}>
          <div className={styles.desktop}>
            <div className={styles.logoTitle}>
              <img src={logoFull} alt="logo desktop" />
            </div>
            <div className={styles.links}>
              <a className={styles.link} href="/#">
                How it works
              </a>
              <a className={styles.link} href="/#">
                About
              </a>
              <a className={styles.link} href="/#">
                Contact
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Navbar;
