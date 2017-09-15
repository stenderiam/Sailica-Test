import React, { Component } from 'react';
import styles from './card.css';
import icons from './icons/icons';

class Card extends Component {

  render() {

    return (
      <div className={styles.card}>
        <div className={styles.cardInfo}>

          <div className={styles.imageWrapper}>
            <img className={`${styles.img} ${styles.imgFluid}`} src={this.props.photo} alt="boat_photo" />
          </div>

          <div className={styles.boatDetails}>

            <div className={styles.boatTitle}>
              <div className={styles.title}> {this.props.title}</div>
            </div>

            <div className={styles.boatFilters}>

              <div className={styles.boatFilter}>
                <img className={styles.icon} src={icons.anchor} alt="boat anchor" />
                {this.props.place}
              </div>
              <div className={styles.boatFilter}>
                <img className={styles.icon} src={icons.type} alt="boat anchor" />
                {this.props.type}
              </div>

              <div className={styles.boatFilter}>
                <img className={styles.icon} src={icons.buildin} alt="boat anchor" />
                {this.props.buildin}
              </div>
              <div className={styles.boatFilter}>
                <img className={styles.icon} src={icons.size} alt="boat anchor" />
                {this.props.size}
              </div>
              <div className={styles.boatFilter}>
                <img className={styles.icon} src={icons.guest} alt="boat anchor" />
                {this.props.guests} <div className={styles.textLabel}> guests</div>
              </div>
              <div className={styles.boatFilter}>
                <img className={styles.icon} src={icons.cabins} alt="boat anchor" />
                {this.props.cabins} <div className={styles.textLabel}> cabins</div>
              </div>
              <div className={styles.boatFilter}>
                <img className={styles.icon} src={icons.beds} alt="boat anchor" />
                {this.props.beds} <div className={styles.textLabel}> beds</div>
              </div>

            </div>

          </div>

          <div className={styles.priceRow}>
            <div className={styles.priceColumn}>
              <div className={styles.priceLabel}>per day</div>
              <div className={styles.price}> €550 </div>
            </div>
            <div className={styles.priceColumn}>
              <div className={styles.priceLabel}>per week</div>
              <div className={styles.price}> €6449 </div>
            </div>
          </div>

        </div>

      </div >
    );
  }
}

export default Card;


/*
   <div className={styles.sidebarFilters}>
          <button className={styles.filtersButton}>
            <img className={styles.controls} src={icons.controls} alt="filters button" />
            <div className={styles.filtersLabel} > Filters </div>

          </button>
        </div>
*/