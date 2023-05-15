import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutMain from "./ui/LayoutMain";
import DataContextProvider from "./context/DataContextProvider";

class App extends Component {
  render() {
    return (
      <div className={"container mt-5"}>
        <DataContextProvider>
          <Header/>
          <LayoutMain/>
          <Footer/>
        </DataContextProvider>
      </div>
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