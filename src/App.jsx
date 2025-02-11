import { useState } from "react";
import Header from "./components/Header"

function App() {
  // Definiendo las variales con un Array destructurando el Array
  const [cantidad, setCantidad] = useState(10000);

  /*
   * Toda funcion que maneje un evento debe iniciar con handle
   * es una convencion en React
   */

  function handleChange(e) {
    setCantidad(+e.target.value)

  }

  return (

    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 
        hover:accent-lime-600"
        onChange={handleChange}
      />

      <p className="text-center my-10 text-5xl font-extrabold
        text-indigo-600">
        {cantidad}
      </p>
    </div>
  )
}

export default App
