import Navbar from "./Navbar";
import Nhamogram from "./Nhamogram";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="h-screen w-screen flex justify-center">
        <Nhamogram/>
        </div>
    </div>
  );
}

export default App;
