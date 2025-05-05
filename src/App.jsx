import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [datacat, setDatacat] = useState([]);
  const [busqueda, setBusqueda] = useState([]);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(responseData => setDatacat(responseData))
      .catch(error => console.error("Error:", error));
  }, []);

  let resultados = datacat;

  if (busqueda.length >= 3) {
    resultados = datacat.filter(unelemento =>
      unelemento.url.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <>
    <input
        type="text"
        placeholder="Buscar Gato"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />
    
    {console.log(datacat)}
      {resultados.map((unelemento, index) => (
        <div key={index}>
          <img src={unelemento.url}></img>
        </div>
      ))}
    </>
  );
}

export default App;
