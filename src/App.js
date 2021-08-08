// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Beranda from "./components/Beranda";
import ManajemenBuku from './components/ManajemenBuku';

function App() {
  const [books, setBooks] = useState([
    {_id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 7},
    {_id: 2, judul: "Bumi", pengarang: "Tere Liye", harga: "85000", stok: "5"},
  ]);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route path="/" exact>
        <Beranda bookList={books} />
        </Route>

        <Route path="/manajemen-buku">
        <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData} />
        </Route>
      </Switch>
     
      </BrowserRouter>
    </div>
  );
}

function storeData(inputBook) {
  console.log(inputBook);
  alert("Data Berhasil Ditambahkan!")
}
function updateData(inputBook) {
  console.log(inputBook);
  alert("Data Berhasil Diperbaharui!")
}
function deleteData(book) {
  console.log(book);
  alert("Data Berhasil Dihapus!")
}

export default App;
