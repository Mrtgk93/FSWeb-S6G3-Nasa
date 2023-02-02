import React, { useState, useEffect } from "react";
import axios from "axios";
/* import "./App.css"; */
import Main from "./main";
import Header from "./header";
import Footer from "./footer";
import Search from "./search";
import "bootstrap/dist/css/bootstrap.min.css";
import Togle from "./togle";

function App() {
  const [data, setData] = useState("");
  const [tarih, setTarih] = useState("2023-02-02");
  /* request at 
    gelen cevat bir obje 
    oradaki url değerini nasaUrl state' ine ekle*/

  const changeHandler = (e) => {
    setTarih(e);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=2xz2SU10crxTOwDnZShiKG9YtLcea7lpgXMQi1Pb&date=" +
          tarih
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [tarih]);
  console.log(data);
  return (
    <div className="App">
      <Header />
      <Main title={data.title} data={data} />
      <Search changeHandler={changeHandler} tarih={tarih} />
      <Togle date={data.date} explanation={data.explanation} />
      <Footer />
    </div>
  );
}

export default App;
