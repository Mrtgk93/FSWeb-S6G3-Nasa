import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Main from "./main";
import Header from "./header";
import Footer from "./footer";

function App() {
  const [data, setData] = useState("");
  /* request at 
    gelen cevat bir obje 
    oradaki url değerini nasaUrl state' ine ekle*/

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=2xz2SU10crxTOwDnZShiKG9YtLcea7lpgXMQi1Pb"
      )
      .then((response) => setData(response.data))

      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Header />
      <Main data={data} date={data.date} explanation={data.explanation} />
      <Footer />
    </div>
  );
}

export default App;
