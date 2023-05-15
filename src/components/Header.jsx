import React, {Component} from 'react';
import {DataContext} from "../context/DataContext";

class Header extends Component {
  static contextType = DataContext
  render() {
    const { name } = this.context;
    console.log(this.context)
    return (
      <header>
        <h1>Hello, {name}!</h1>
      </header>
    );
  }
}

export default Header;

/**
 * Mulai dari React versi 16.8, React juga memperkenalkan Hook useContext yang dapat digunakan
 * untuk mengakses nilai dari context tanpa menggunakan Consumer. Dengan menggunakan useContext,
 * kita dapat memperoleh nilai context dengan lebih mudah dan efisien.
 *
 * Untuk class component kita bisa memanfaatkan static contextType = DataContext sebagai pengganti Consumer.
 */