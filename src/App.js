import './App.css';
import {Component, Fragment} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutMain from "./ui/LayoutMain";
import {DataContext} from "./context/DataContext";

class App extends Component {
  state = {
    data: {
      name: "John",
      age: 22
    }
  }

  render() {
    return (
      <Fragment>
        <DataContext.Provider value={this.state.data}>
          <Header/>
          <LayoutMain/>
          <Footer/>
        </DataContext.Provider>
      </Fragment>
    );
  }
}

export default App;

/*
* Kode saat ini kita sudah menerapkan penggunaan context (ini hanya contoh)
* Component di bawah nya kita tidak perlu lagi mem-passing data untuk diterima sebagai props
* Sebagai gantinya kita menggunakan sebuah context, disini kita sudah membuat DataContext dan memanfaatkan Provider.
* Kemudian kita memberikan nilai value untuk dikirimkan sebagai state
* */