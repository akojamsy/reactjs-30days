import { useState } from "react";
import "./App.css";
import { Hero } from "./components";
import { heroapi } from "./data/data";

function App() {
  const [count, setCount] = useState(0);

  // console.log(heroapi);
  return (
    <>
      <div className=''>
        <Hero heroapi={heroapi} />
      </div>
    </>
  );
}

export default App;
