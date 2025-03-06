import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router";

export const RootRoute = () => {
  const [count, setCount] = useState(0);
  const [ title, setTitle] = useState("Raichu");

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-3xl text-yellow-600 mb-4">
        {title}
        </h1>

        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" />
          </a>
        </div>

        <h2 className="text-center font-bold text-xl mb-6">Vite + React</h2>

        <div className="flex flex-col items-center space-y-4">
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-orange-600 transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            You have pushed the botton {count} {count === 1 ? "time" : "times"}
          </button>

          <button
           className="bg-red-700 text-white px-4 py-2 rounded-md shadow-md cursor-pointer hover:bg-red-600 transition-colors"
          onClick = {() => setTitle("Charizard")}
          >
          CHANGE THE TITLE 
         </button>

          <p className="text-center">
            Modifica <code>src/App.tsx</code> e salva per testare l'hot reload
          </p>
            
          <Link to ="/dettaglio/0">Link</Link>
           
        </div>

        <p className="text-center text-sm text-blue-400">Clicca sui loghi per saperne di più
          
        </p>
      </div>
      
    </div>
  );}