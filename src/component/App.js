import React, { Component } from 'react'
import { CARDS } from './data';
import styles from "../styles/App.css"
import Navbar from './navbar/navbar'
import SortBy from './sortby/sortby'
import Card from './card/card'
import Sidebar from './sidebar/Sidebar'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: CARDS,
      sidebarOpen: false,
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  getData() {
    const boatItems = this.state.data.map(boat => (
      <Card
        key={boat.key}
        {...boat}
      />
    ))
    return boatItems
  }

  toggleSidebar(toggle) {
    this.setState({
      sidebarOpen: toggle
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.fixedTop}>
          <Navbar />
        </div>
        <div className={styles.centered}>
          <div className={styles.catalog}>
            <div className={styles.cardsСolumn}>
              <SortBy toggleSidebar={this.toggleSidebar} />
              {this.getData()}
            </div>
            <div className={styles.sidebar}>
              <Sidebar toggleSidebar={this.toggleSidebar} sidebarOpen={this.state.sidebarOpen} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
