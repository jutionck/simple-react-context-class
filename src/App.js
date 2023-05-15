import './App.css';
import {Fragment} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutMain from "./ui/LayoutMain";

function App() {
  const profile = {
    name: "John",
    age: 22
  }
  return (
    <Fragment>
      <Header name={profile.name} />
      <LayoutMain name={profile.name} age={profile.age} />
      <Footer/>
    </Fragment>
  );
}

export default App;

/*
* Props Drilling -> prop yang melekat pada komponen dan harus dilewati dari satu komponen ke komponen lainnya secara langsung.
* Pada kode di atas merupakan salah contoh props drilling:
* - Data dari App tersebut sebagai props ke dalam komponen Header dan LayoutMain.
* - Di dalam LayoutMain, terdapat lagi dua komponen lain yaitu Sidebar dan Profile.
* - Data name dan age harus dilewati melalui props dari Main ke Content, yang berarti kita melakukan prop drilling.
* */