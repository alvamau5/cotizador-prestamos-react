import { useState } from "react";
import Header from "./components/Header"

function App() {
  // Definiendo las variales con un Array destructurando el Array
  const [cantidad, setCantidad] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  /*
   * Toda funcion que maneje un evento debe iniciar con handle
   * es una convencion en React
   */

  function handleChange(e) {
    setCantidad(+e.target.value)
  }

  function handleCantidadDecremento() {
    const valor = cantidad - STEP

    if (valor < MIN) {
      alert('Cantidad no validad')
      return;
    }

    setCantidad(valor)
  }

  function handleCantidadIncremento() {
    const valor = cantidad + STEP

    if (valor > MAX) {
      alert('Cantidad no validad')
      return;
    }

    setCantidad(valor)
  }
  return (

    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center 
          font-bold text-white text-2xl bg-lime-500 rounded-full
          hove:outline-none hover:ring-2 hover:ring-offset-2
          hover-ring-lime-500"
          onClick={handleCantidadDecremento}
        >-</button>

        <button
          type="button"
          className="h-10 w-10 flex items-center justify-center 
          font-bold text-white text-2xl bg-lime-500 rounded-full
          hove:outline-none hover:ring-2 hover:ring-offset-2
          hover-ring-lime-500"
          onClick={handleCantidadIncremento}
        >+</button>
      </div>


      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 
        hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}

      />

      <p className="text-center my-10 text-5xl font-extrabold
        text-indigo-600">
        {cantidad}
      </p>
    </div>
  )
}

export default App
