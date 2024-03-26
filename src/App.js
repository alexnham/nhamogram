import { useState } from "react";
import Navbar from "./Navbar";
import Nhamogram from "./Nhamogram";

function App() {
  const [calculate, setCalculate] = useState(false)
  return (
    <div className="App">
      <Navbar></Navbar>
      {!calculate && <div className="h-screen w-screen flex pt-32 items-center flex-col gap-5">
      <h1 className="text-3xl">Calculate Adrenal Score</h1>
      <button onClick={() => setCalculate(true)} className="border px-10 py-1 w-fit rounded-lg bg-slate-400">Start</button>
      </div>
      }
      {calculate &&
        <div className="h-screen w-screen flex justify-center">
          <Nhamogram />
        </div>
      }
    </div>
  );
}

export default App;
