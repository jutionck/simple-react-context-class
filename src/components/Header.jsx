import React, {Component} from 'react';
import {DataContext} from "../context/DataContext";

class Header extends Component {
  render() {
    return (
      <DataContext.Consumer>
        {(data) => (
          <header>
            <h1>Hello, {data.name}!</h1>
          </header>
        )}
      </DataContext.Consumer>
    );
  }
}

export default Header;

/**
 * Sebagai ganti dari kode sebelumnya yang menggunakan props untuk menerima data dari parent.
 * Saat ini kita menggunakan context, dan untuk menerima data dari Provider kita menggunakan context Consumer.
 * Consumer adalah komponen yang digunakan untuk mengakses nilai dari context yang disediakan oleh Provider.
 * Kita tidak dapat mengakses nilai context langsung dari komponen lain di dalam pohon komponen.
 *
 * Namun, mulai dari React versi 16.8, React juga memperkenalkan Hook useContext yang dapat digunakan
 * untuk mengakses nilai dari context tanpa menggunakan Consumer. Dengan menggunakan useContext,
 * kita dapat memperoleh nilai context dengan lebih mudah dan efisien.
 */