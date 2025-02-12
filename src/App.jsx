import { useState } from "react";
import Header from "./components/Header"
import Button from "./components/Button"
import { formatearDinero } from "./helpers"

function App() {
  // Definiendo las variales con un Array destructurando el Array
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);

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
        <Button
          operador="-"
          fn={handleCantidadDecremento}
        />

        <Button
          operador="+"
          fn={handleCantidadIncremento}
        />
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
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-center text-2xl font-bold text-gray-500">
        Elige un <span className="text-indigo-600">Plazo </span>
        a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300
        rounded-lg text-center text-xl text-gray-500 font-bold"
        value={meses}
        onChange={e => setMeses(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>
    </div>
  )
}

export default App
